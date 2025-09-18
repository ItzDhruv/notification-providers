importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBHk_AxbSfoxoaZ1ylTNCO5otd-5ZgO84w",
  authDomain: "notification2-b4715.firebaseapp.com",
  projectId: "notification2-b4715",
  storageBucket: "notification2-b4715.appspot.com",
  messagingSenderId: "288905906409",
  appId: "1:288905906409:web:f5b7c47245aed5d68d0878",
  measurementId: "G-1J5JPXKW0F"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title, { body });
});
