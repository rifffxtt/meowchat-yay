importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-sw.js');

firebase.initializeApp({
    apiKey: "AIzaSyCrFso8vwiQSZgBKEcXsKfpubj34LCMVXw",
    authDomain: "meowchat-b6f99.firebaseapp.com",
    projectId: "meowchat-b6f99",
    storageBucket: "meowchat-b6f99.firebasestorage.app",
    messagingSenderId: "62260339507",
    appId: "1:62260339507:web:161d70d04f42ef1dd31446"
});

const messaging = firebase.messaging();
