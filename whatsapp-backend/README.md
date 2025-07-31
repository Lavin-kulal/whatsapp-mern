# 🚀 WhatsApp Clone - Backend

<div align="center">

```
    🖥️ Express.js API | MongoDB | TypeScript 🖥️
    
    ┌─────────────────────────────────────────────────┐
    │  📡 RESTful API Server                          │
    │ ─────────────────────────────────────────────── │
    │  POST /messages/new          ✅ 201 Created     │
    │  GET  /messages/sync         ✅ 200 OK          │
    │  PUT  /messages/:id          ✅ 200 Updated     │
    │ ─────────────────────────────────────────────── │
    │  🔄 Pusher Events:                              │
    │  📤 message-sent    📥 message-received         │
    │  🟢 user-online     🔴 user-offline             │
    │ ─────────────────────────────────────────────── │
    │  📊 MongoDB: 1.2k messages | 45 users active   │
    └─────────────────────────────────────────────────┘
```

**⚡ High-performance Node.js backend with MongoDB & Pusher real-time**

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Pusher](https://img.shields.io/badge/Pusher-300269?style=for-the-badge&logo=pusher&logoColor=white)

[🎨 Frontend Repository](https://github.com/Lavin-kulal/whatsapp-mern/tree/main/whatsapp-frontend) • [🐛 Report Issues](https://github.com/Lavin-kulal/whatsapp-mern/issues)

</div>

---

## ⚡ Features

```
🚀 Express.js REST API        📊 MongoDB with Mongoose
⚡ TypeScript Support         🔄 Pusher Real-time Events
🔒 CORS Security             📡 WebSocket Integration
🎯 Modern ES6+ Syntax        🛡️ Error Handling
📈 Scalable Architecture     🔧 Environment Config
```

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center"><strong>🚀 Runtime</strong></td>
<td align="center"><strong>🌐 Framework</strong></td>
<td align="center"><strong>📊 Database</strong></td>
<td align="center"><strong>📡 Real-time</strong></td>
</tr>
<tr>
<td>
• Node.js<br>
• TypeScript 5.8.3<br>
• ts-node 10.9.2<br>
• ES2020 Target
</td>
<td>
• Express.js 5.1.0<br>
• CORS 2.8.5<br>
• dotenv 17.2.1<br>
• REST Architecture
</td>
<td>
• MongoDB Atlas<br>
• Mongoose 8.16.5<br>
• Schema Validation<br>
• Connection Pooling
</td>
<td>
• Pusher 5.2.0<br>
• WebSocket Events<br>
• Channel Broadcasting<br>
• Real-time Sync
</td>
</tr>
</table>

---

## 🚀 Quick Start

### 📋 Prerequisites
```bash
Node.js >= 16.x
npm >= 8.x
MongoDB Atlas account
Pusher account
```

### ⚡ Installation

**1. Navigate to backend** 📁
```bash
cd whatsapp-backend
```

**2. Install dependencies** 📦
```bash
npm install
```

**3. Environment Configuration** 🔒

Create `.env` file:
```env
PORT=9000
connection_url=mongodb+srv://username:password@cluster.mongodb.net/whatsappdb?retryWrites=true&w=majority
PUSHER_APP_ID=your_pusher_app_id
PUSHER_KEY=your_pusher_key
PUSHER_SECRET=your_pusher_secret
PUSHER_CLUSTER=ap2
```

**4. Start Development Server** 🎯
```bash
npm start
```

Backend runs on `http://localhost:9000` 🚀

---

## 📁 Project Structure

```
whatsapp-backend/
├── models/                  # 📊 MongoDB Schemas
│   ├── Message.ts          # 💬 Message model
│   └── User.ts             # 👤 User model (optional)
├── routes/                 # 🛣️ API Routes
│   ├── messages.ts         # 📡 Message endpoints
│   └── users.ts            # 👥 User endpoints
├── middleware/             # 🛡️ Custom middleware
│   ├── cors.ts            # 🔒 CORS configuration
│   └── auth.ts            # 🔐 Authentication
├── utils/                  # 🛠️ Utility functions
│   ├── database.ts        # 📊 DB connection
│   └── pusher.ts          # 📡 Pusher setup
├── types/                  # 📝 TypeScript definitions
│   └── index.ts           # 🎯 Type declarations
├── server.ts              # 🚀 Main server file
├── package.json           # 📦 Dependencies
├── tsconfig.json          # ⚙️ TypeScript config
└── .env                   # 🔒 Environment variables
```

---

## 📡 API Endpoints

### 💬 **Messages API**

<table>
<tr>
<th>Method</th>
<th>Endpoint</th>
<th>Description</th>
<th>Body</th>
<th>Response</th>
</tr>
<tr>
<td><code>GET</code></td>
<td><code>/messages/sync</code></td>
<td>Fetch all messages</td>
<td>-</td>
<td><code>200</code> Array of messages</td>
</tr>
<tr>
<td><code>POST</code></td>
<td><code>/messages/new</code></td>
<td>Create new message</td>
<td>Message object</td>
<td><code>201</code> Created message</td>
</tr>
<tr>
<td><code>PUT</code></td>
<td><code>/messages/:id</code></td>
<td>Update message</td>
<td>Update data</td>
<td><code>200</code> Updated message</td>
</tr>
<tr>
<td><code>DELETE</code></td>
<td><code>/messages/:id</code></td>
<td>Delete message</td>
<td>-</td>
<td><code>204</code> No content</td>
</tr>
</table>

### 📝 **Request/Response Examples**

**POST /messages/new**
```json
// Request Body
{
  "message": "Hello, World! 👋",
  "name": "Laveen Kumar",
  "timestamp": "2025-01-31T10:30:00Z",
  "received": true
}

// Response
{
  "_id": "65b8f1a2c3d4e5f6789012ab",
  "message": "Hello, World! 👋",
  "name": "Laveen Kumar",
  "timestamp": "2025-01-31T10:30:00Z",
  "received": true,
  "__v": 0
}
```

**GET /messages/sync**
```json
// Response
[
  {
    "_id": "65b8f1a2c3d4e5f6789012ab",
    "message": "Hello, World! 👋",
    "name": "Laveen Kumar",
    "timestamp": "2025-01-31T10:30:00Z",
    "received": true
  },
  {
    "_id": "65b8f1a2c3d4e5f6789012ac",
    "message": "How are you doing?",
    "name": "John Doe",
    "timestamp": "2025-01-31T10:35:00Z",
    "received": false
  }
]
```

---

## 📊 MongoDB Schema

```typescript
// Message Schema
interface IMessage {
  message: string;        // 💬 Message content
  name: string;          // 👤 Sender name
  timestamp: Date;       // ⏰ When sent
  received: boolean;     // ✅ Message status
}

// Mongoose Schema
const messageSchema = new Schema<IMessage>({
  message: { type: String, required: true },
  name: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  received: { type: Boolean, default: false }
});
```

---

## 📡 Pusher Integration

```typescript
// Pusher Configuration
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true
});

// Real-time Events
📤 pusher.trigger('messages', 'inserted', newMessage);
📥 pusher.trigger('messages', 'updated', updatedMessage);
🗑️ pusher.trigger('messages', 'deleted', { id: messageId });
🟢 pusher.trigger('users', 'online', { userId, status: 'online' });
```

---

## 🔒 Security & Middleware

```typescript
// CORS Configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Request Logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
```

---

## 🚀 Production Deployment

### 🌐 **Deploy to Railway**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway deploy
```

### 🔥 **Deploy to Render**
```bash
# Connect GitHub repository
# Set environment variables
# Deploy automatically on push
```

### ⚙️ **Environment Variables for Production**
```env
PORT=9000
NODE_ENV=production
connection_url=mongodb+srv://user:pass@cluster.mongodb.net/whatsappdb
PUSHER_APP_ID=prod_app_id
PUSHER_KEY=prod_key
PUSHER_SECRET=prod_secret
PUSHER_CLUSTER=ap2
FRONTEND_URL=https://your-frontend.vercel.app
```

---

## 🧪 Development Scripts

```bash
npm start          # 🚀 Start with ts-node (development)
npm run build      # 📦 Compile TypeScript to JavaScript
npm run dev        # 🔄 Start with nodemon (auto-reload)
npm test           # 🧪 Run test suite (if configured)
npm run lint       # 🧹 ESLint code checking
```

---

## 📈 Performance Optimization

```typescript
// MongoDB Optimizations
✅ Connection pooling enabled
✅ Indexed fields for fast queries
✅ Lean queries for better performance
✅ Connection retry logic

// Express Optimizations  
✅ Compression middleware
✅ Request rate limiting
✅ Memory leak prevention
✅ Graceful shutdown handling
```

---

## 🔍 Monitoring & Logging

```typescript
// Request Logging
app.use(morgan('combined'));

// Database Connection Monitoring
mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Pusher Event Logging
pusher.trigger('messages', 'inserted', data, (err, req, res) => {
  if (err) console.error('Pusher error:', err);
  else console.log('✅ Message broadcasted');
});
```

---

## 🐛 Troubleshooting

**📊 MongoDB Connection Issues:**
```bash
# Check connection string format
# Verify network access in MongoDB Atlas
# Ensure IP whitelist includes your server
# Check username/password credentials
```

**📡 Pusher Problems:**
```bash
# Verify Pusher credentials in .env
# Check cluster region (ap2, us2, eu, etc.)
# Monitor Pusher dashboard for usage limits
# Test with Pusher debug console
```

**🚀 Server Issues:**
```bash
# Check port availability (PORT=9000)
# Verify all environment variables
# Monitor server logs for errors
# Test endpoints with Postman/curl
```

---

## 🧪 Testing

```typescript
// Example test with Jest
describe('Messages API', () => {
  test('POST /messages/new should create message', async () => {
    const response = await request(app)
      .post('/messages/new')
      .send({
        message: 'Test message',
        name: 'Test User',
        received: true
      });
    
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Test message');
  });
});
```

---

## 👨‍💻 Developer

<div align="center">

**Backend engineered with ⚡ by Laveen Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lavin-kulal)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:laveenk0032@gmail.com)

*Backend Developer | Node.js Expert | API Architect*

</div>

---

## 📞 Support

```
📧 Email: laveenk0032@gmail.com
🐙 GitHub: @Lavin-kulal
💬 Backend Issues: Use GitHub Issues tab
📚 API Docs: Check endpoint comments in code
🔧 Server Logs: Monitor console output
```

---

<div align="center">

**🌟 If this backend powered your app, please star the repo! 🌟**

```
     _______________
    |  Node.js FTW! |
    |      🚀       |  
    |   TypeScript  |
    |      💚       |
     ---------------
       \   ^__^
        \  (oo)\_______
           (__)\       )\/\
               ||----w |
               ||     ||
```

**Powered by 🚀 Node.js & ⚡ Express.js**

</div>
