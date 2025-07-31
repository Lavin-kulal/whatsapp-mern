"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const pusher_1 = __importDefault(require("pusher"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbMessages_1 = __importDefault(require("./dbMessages"));
dotenv_1.default.config();
//app config
const app = (0, express_1.default)();
const port = process.env.PORT || 9000;
const pusher = new pusher_1.default({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.PUSHER_CLUSTER,
    useTLS: true,
});
console.log("pusher", pusher);
//middlewares
app.use(express_1.default.json());
// app.use(cors());
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://chimerical-faun-d43434.netlify.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
//db connection
const connection_url = process.env.connection_url;
if (!connection_url) {
    throw new Error("Missing MongoDB connection string in environment variables");
}
mongoose_1.default
    .connect(connection_url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
const db = mongoose_1.default.connection;
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
        }
        else {
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
        const data = await dbMessages_1.default.find();
        res.status(200).send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
app.post("/messages/new", async (req, res) => {
    try {
        const data = await dbMessages_1.default.create(req.body);
        res.status(201).send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
//listen
app.listen(port, () => {
    console.log(`Listening to localhost:${port}`);
});
