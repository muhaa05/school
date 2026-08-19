// =====================================================================
// FIREBASE SOZLAMALARI — bu yerga o'zingizning Firebase loyihangizning
// ma'lumotlarini qo'ying. Qanday olish kerakligi README.txt faylida
// bosqichma-bosqich yozilgan.
//
// MUHIM: shu fayldagi qiymatlarni to'ldirmasangiz, sayt ishlaydi, lekin
// ma'lumotlar hali ham faqat o'sha qurilmada qoladi (eski muammo davom etadi).
// =====================================================================

const firebaseConfig = {
  apiKey: "BU_YERGA_APIKEY_QOYING",
  authDomain: "BU_YERGA_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://BU_YERGA_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "BU_YERGA_PROJECT_ID",
  storageBucket: "BU_YERGA_PROJECT_ID.appspot.com",
  messagingSenderId: "BU_YERGA_SENDER_ID",
  appId: "BU_YERGA_APP_ID"
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
