importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCrFso8vwiQSZgBKEcXsKfpubj34LCMVXw",
  authDomain: "meowchat-b6f99.firebaseapp.com",
  projectId: "meowchat-b6f99",
  storageBucket: "meowchat-b6f99.firebasestorage.app",
  messagingSenderId: "62260339507",
  appId: "1:62260339507:web:161d70d04f42ef1dd31446"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification ? payload.notification.title : '🐾 Meow Chat';
  const notificationOptions = {
    body: payload.notification ? payload.notification.body : 'Tomar ekta notun message esheche!',
    icon: 'https://cdn-icons-png.flaticon.com/512/1864/1864509.png',
    vibrate: [200, 100, 200]
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
