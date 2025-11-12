// Importamos las versiones compat de Firebase para SW
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyCLeB8IF-NQRZesoKQga_HE6SPx-jzbaO0",
  authDomain: "pwa-10b-20223tn127.firebaseapp.com",
  projectId: "pwa-10b-20223tn127",
  storageBucket: "pwa-10b-20223tn127.firebasestorage.app",
  messagingSenderId: "316679629697",
  appId: "1:316679629697:web:2d691dd2be862813f39680"
});

const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
    icon: "./icon-192.png"
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});