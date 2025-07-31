# 💬 WhatsApp Clone - Frontend

<div align="center">

```
    📱 React Frontend | Material-UI Design 📱
    
    ┌─────────────────────────────────────────────────┐
    │  🔍 Search or start new chat                    │
    │ ─────────────────────────────────────────────── │
    │  👤 John Doe              🟢     📌 14:30      │
    │     Hey! How's React going? 😊                  │
    │ ─────────────────────────────────────────────── │
    │  👤 Sarah Wilson          🟡     📌 12:15      │
    │     Check out this new component! 🚀            │
    │ ─────────────────────────────────────────────── │
    │  👤 Dev Team              🔴     📌 11:45      │
    │     Meeting in 10 minutes 📅                   │
    └─────────────────────────────────────────────────┘
```

**🚀 Modern React frontend with Material-UI & Firebase integration**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Pusher](https://img.shields.io/badge/Pusher-300269?style=for-the-badge&logo=pusher&logoColor=white)

[🔗 Backend Repository](https://github.com/Lavin-kulal/whatsapp-mern/tree/main/whatsapp-backend) • [🐛 Report Issues](https://github.com/Lavin-kulal/whatsapp-mern/issues)

</div>

---

## ⚡ Features

```
🎨 Material-UI Components     📱 Fully Responsive Design
🔥 Firebase Authentication    ⚡ Real-time with Pusher
📊 TypeScript Support         🎯 Modern React Hooks
🚀 Optimized Performance      🔄 Auto-reconnection
🎭 Smooth Animations          📡 REST API Integration
```

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center"><strong>🎨 UI Framework</strong></td>
<td align="center"><strong>🔧 Development</strong></td>
<td align="center"><strong>📡 Integration</strong></td>
<td align="center"><strong>🔥 Services</strong></td>
</tr>
<tr>
<td>
• React 19.1.1<br>
• Material-UI 7.2.0<br>
• Emotion Styling<br>
• MUI Icons
</td>
<td>
• TypeScript 4.9.5<br>
• React Scripts 5.0.1<br>
• Web Vitals<br>
• Testing Library
</td>
<td>
• Axios HTTP Client<br>
• Pusher-js 8.4.0<br>
• REST API calls<br>
• Real-time events
</td>
<td>
• Firebase 12.0.0<br>
• Authentication<br>
• Cloud Storage<br>
• Push Notifications
</td>
</tr>
</table>

---

## 🚀 Quick Start

### 📋 Prerequisites
```bash
Node.js >= 16.x
npm >= 8.x
Firebase project setup
```

### ⚡ Installation

**1. Navigate to frontend** 📁
```bash
cd whatsapp-frontend
```

**2. Install dependencies** 📦
```bash
npm install
```

**3. Configure Firebase** 🔥

Create `src/firebase/config.js`:
```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

**4. Environment Variables** 🔒

Create `.env` file:
```env
REACT_APP_BACKEND_URL=http://localhost:9000
REACT_APP_PUSHER_KEY=your_pusher_key
REACT_APP_PUSHER_CLUSTER=ap2
```

**5. Start Development** 🎯
```bash
npm start
```

Frontend runs on `http://localhost:3000` 🚀

---

## 📁 Project Structure

```
whatsapp-frontend/
├── public/
│   ├── index.html           # 📄 Main HTML template
│   └── favicon.ico          # 🎨 App icon
├── src/
│   ├── components/          # 🧩 React Components
│   │   ├── Chat.tsx         # 💬 Main chat interface
│   │   ├── Sidebar.tsx      # 📋 Chat list sidebar
│   │   ├── Message.tsx      # 💭 Individual message
│   │   └── Login.tsx        # 🔐 Authentication
│   ├── firebase/            # 🔥 Firebase configuration
│   │   └── config.js        # ⚙️ Firebase setup
│   ├── hooks/               # 🎣 Custom React hooks
│   │   └── usePusher.ts     # 📡 Pusher integration
│   ├── utils/               # 🛠️ Utility functions
│   │   └── api.ts           # 📡 API calls
│   ├── styles/              # 🎨 Global styles
│   ├── App.tsx              # 🚀 Main app component
│   ├── index.tsx            # 📍 Entry point
│   └── react-app-env.d.ts   # 📝 TypeScript definitions
├── package.json             # 📦 Dependencies
└── tsconfig.json           # ⚙️ TypeScript config
```

---

## 🧩 Key Components

### 💬 **Chat Component**
```typescript
// Real-time messaging interface
- Message input with emoji support
- Auto-scroll to latest messages
- Typing indicators
- Message status (sent/delivered/read)
```

### 📋 **Sidebar Component**
```typescript
// Chat list with search
- Recent conversations
- Online status indicators
- Search functionality
- New chat creation
```

### 🔐 **Authentication**
```typescript
// Firebase Auth integration
- Google Sign-in
- Email/Password login
- User profile management
- Protected routes
```

---

## 📡 API Integration

```typescript
// Axios configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Key endpoints
GET    /messages/sync     // Fetch chat history
POST   /messages/new      // Send new message
```

---

## 🎨 Material-UI Theme

```javascript
// Custom theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: '#00bfa5', // WhatsApp green
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});
```

---

## 🔄 Real-time Features

```typescript
// Pusher integration
const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
  cluster: process.env.REACT_APP_PUSHER_CLUSTER
});

// Subscribe to channels
const channel = pusher.subscribe('messages');
channel.bind('inserted', (newMessage) => {
  setMessages(prev => [...prev, newMessage]);
});
```

---

## 🚀 Build & Deploy

### 📦 **Production Build**
```bash
npm run build
```

### 🌐 **Deploy to Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 🔥 **Deploy to Netlify**
```bash
# Build command: npm run build
# Publish directory: build
```

### 📊 **Environment Variables for Production**
```env
REACT_APP_BACKEND_URL=https://your-backend.herokuapp.com
REACT_APP_PUSHER_KEY=your_production_pusher_key
REACT_APP_PUSHER_CLUSTER=ap2
```

---

## 🧪 Testing

```bash
# Run tests
npm test

# Test coverage
npm test -- --coverage

# E2E tests (if configured)
npm run test:e2e
```

---

## 🎯 Performance Optimization

```typescript
// React optimizations applied:
✅ React.memo for components
✅ useMemo for expensive calculations
✅ useCallback for event handlers
✅ Code splitting with lazy loading
✅ Image optimization
✅ Bundle size optimization
```

---

## 🔧 Available Scripts

```bash
npm start          # 🚀 Start development server
npm run build      # 📦 Create production build  
npm test           # 🧪 Run test suite
npm run eject      # ⚠️ Eject from Create React App
```

---

## 🐛 Troubleshooting

**🔥 Firebase Issues:**
```bash
# Check Firebase configuration
# Verify API keys in environment variables
# Ensure Firebase rules allow read/write
```

**📡 Pusher Connection:**
```bash
# Verify Pusher credentials
# Check network connectivity
# Monitor browser console for errors
```

**🎨 Material-UI:**
```bash
# Check theme provider setup
# Verify component imports
# Review console for styling conflicts
```

---

## 👨‍💻 Developer

<div align="center">

**Frontend crafted with ❤️ by Laveen Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Lavin-kulal)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:laveenk0032@gmail.com)

*React Developer | UI/UX Enthusiast | TypeScript Advocate*

</div>

---

## 📞 Support

```
📧 Email: laveenk0032@gmail.com
🐙 GitHub: @Lavin-kulal
💬 Frontend Issues: Use GitHub Issues tab
📚 Documentation: Check component comments
```

---

<div align="center">

**🌟 If this frontend helped you, please star the main repo! 🌟**

```
     _______________
    |  React Rocks! |
    |     ⚛️        |  
    |   TypeScript  |
    |      💙       |
     ---------------
       \   ^__^
        \  (oo)\_______
           (__)\       )\/\
               ||----w |
               ||     ||
```

**Built with ⚛️ React & 💙 TypeScript**

</div>
