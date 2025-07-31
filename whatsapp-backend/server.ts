import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Pusher from "pusher";
import dotenv from "dotenv";
import dbMessages from "./dbMessages";
dotenv.config();

//app config
const app = express();
const port = process.env.PORT || 9000;
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID as any,
  key: process.env.PUSHER_KEY as any,
  secret: process.env.PUSHER_SECRET as any,
  cluster: process.env.PUSHER_CLUSTER as any,
  useTLS: true,
});
console.log("pusher", pusher);
//middlewares
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://chimerical-faun-d43434.netlify.app/",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//db connection
const connection_url = process.env.connection_url;
if (!connection_url) {
  throw new Error("Missing MongoDB connection string in environment variables");
}
mongoose
  .connect(connection_url)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
const db = mongoose.connection;
db.once("open", () => {
  console.log("DB connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error triggering the Pusher");
    }
  });
});

//api routes
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.get("/messages/sync", async (req, res) => {
  try {
    const data = await dbMessages.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/messages/new", async (req, res) => {
  try {
    const data = await dbMessages.create(req.body);
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//listen
app.listen(port, () => {
  console.log(`Listening to localhost:${port}`);
});
