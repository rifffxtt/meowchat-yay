import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

const firebaseConfig = {
  apiKey: "AIzaSyCrFso8vwiQSZgBKEcXsKfpubj34LCMVXw",
  authDomain: "meowchat-b6f99.firebaseapp.com",
  projectId: "meowchat-b6f99",
  messagingSenderId: "62260339507",
  appId: "1:62260339507:web:161d70d04f42ef1dd31446"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  self.registration.showNotification(payload.notification?.title || 'MeowChat Notification', {
    body: payload.notification?.body || 'You have a new message!',
    icon: "icon-192.png"
  });
});
