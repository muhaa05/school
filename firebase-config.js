// =====================================================================
// FIREBASE SOZLAMALARI — "school" loyihasi uchun to'ldirilgan.
// =====================================================================

const firebaseConfig = {
  apiKey: "AIzaSyAiFB3-UoCiOplW9Pe9j9MyNrk4NqKJ6ck",
  authDomain: "school-2d4b0.firebaseapp.com",
  databaseURL: "https://school-2d4b0-default-rtdb.firebaseio.com",
  projectId: "school-2d4b0",
  storageBucket: "school-2d4b0.firebasestorage.app",
  messagingSenderId: "797413256801",
  appId: "1:797413256801:web:8c5467d4863ca0302b0420"
};

// Sozlamalar to'ldirilganmi yo'qmi — tekshirish uchun
function isFirebaseConfigured() {
  return firebaseConfig.apiKey && firebaseConfig.apiKey !== "BU_YERGA_APIKEY_QOYING";
}

// Firebase'ni ishga tushirish (agar sozlamalar to'g'ri kiritilgan bo'lsa)
let db = null;
if (isFirebaseConfigured()) {
  firebase.initializeApp(firebaseConfig);
  db = firebase.database();
}
