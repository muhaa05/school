============================================================
QANDAY QILIB HAMMA QURILMADAN (telefon, planshet, iPad,
iPhone, noutbuk) MA'LUMOTNI ADMINGA YETKAZISH — SOZLASH
============================================================

MUAMMO NIMADA EDI?
-------------------
Eski kodda ma'lumotlar "localStorage" degan joyga saqlanardi.
Bu — faqat o'sha BITTA brauzer/qurilmaning o'z xotirasi, u
hech qachon boshqa qurilmaga yoki internetga uzatilmaydi.
Shuning uchun o'qituvchi telefonidan ro'yxatdan o'tsa, bu
ma'lumot faqat o'sha telefonda qolar, admin panelida (boshqa
qurilmada) ko'rinmas edi.

YECHIM
-------
Endi ma'lumotlar bepul "Firebase Realtime Database" degan
Google'ning bulutli bazasiga yoziladi. Bu bazani BARCHA
qurilmalar (telefon, planshet, iPad, noutbuk — farqi yo'q)
bir xil ko'radi va real vaqtda yangilanadi.

Buni ishga tushirish uchun 5 daqiqalik bepul sozlash kerak:


1-QADAM — Firebase loyihasini yaratish
----------------------------------------
1. https://console.firebase.google.com ga kiring (Google
   hisobingiz bilan, bepul).
2. "Add project" / "Добавить проект" tugmasini bosing.
3. Loyihaga nom bering, masalan: "maktab-registratsiya".
   Google Analytics so'ralsa — kerak emas, o'chirib qo'yish
   mumkin.
4. "Create project" tugmasini bosing va kuting.


2-QADAM — Realtime Database'ni yoqish
----------------------------------------
1. Chap tomondagi menyudan "Build" > "Realtime Database"ni
   tanlang.
2. "Create Database" tugmasini bosing.
3. Joylashuvni tanlang (masalan "Europe" yoki "United States" —
   farqi katta emas).
4. Xavfsizlik qoidalari so'ralganda — "Start in TEST mode"ni
   tanlang (bu boshlang'ich uchun eng oson variant; keyinroq
   xohlasangiz xavfsizlikni kuchaytirishingiz mumkin — pastda
   yozilgan).


3-QADAM — Konfiguratsiya kalitlarini olish
----------------------------------------------
1. Chap tomondagi ⚙️ (Settings) belgisini bosing >
   "Project settings".
2. Pastga tushib, "Your apps" bo'limida "</>" (Web) belgisini
   bosing.
3. Ilovaga nom bering (masalan "maktab-sayt") va
   "Register app" tugmasini bosing.
4. Sizga quyidagiga o'xshash kod ko'rsatiladi:

   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "maktab-registratsiya.firebaseapp.com",
     databaseURL: "https://maktab-registratsiya-default-rtdb.firebaseio.com",
     projectId: "maktab-registratsiya",
     storageBucket: "maktab-registratsiya.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef"
   };

5. Shu qiymatlarni nusxalab, "firebase-config.js" faylini
   oching va "BU_YERGA_..." yozuvlari o'rniga qo'ying.


4-QADAM — Saytni qayta yuklash
----------------------------------------
"firebase-config.js" faylini saqlagandan so'ng, saytingizni
(index.html, admin.html, style.css, firebase-config.js —
hammasini birga) hostingizga qayta yuklang (masalan GitHub
Pages, Netlify yoki boshqa joyga). Qizil ogohlantirish banneri
(⚠️ Firebase sozlanmagan) endi ko'rinmay qoladi — demak hammasi
to'g'ri ulangan.

Shundan keyin har qanday qurilmadan (telefon, iPad, noutbuk —
farqi yo'q) forma to'ldirilsa, admin panelida (qaysi
qurilmadan ochilishidan qat'i nazar) 1-2 soniyada avtomatik
paydo bo'ladi.


XAVFSIZLIK HAQIDA MUHIM ESLATMA
----------------------------------------
"Test mode" rejimi — bazaga ISTALGAN odam (agar sizning
databaseURL manzilingizni bilsa) yozishi yoki o'qishi mumkin
degani. Bu boshlash uchun yetarli, lekin haqiqiy maktabda
uzoq muddat ishlatish uchun tavsiya etiladi:

- Firebase Console > Realtime Database > "Rules" bo'limiga
  o'ting va vaqt bilan cheklangan yoki parol bilan himoyalangan
  qoidalar qo'ying (Firebase hujjatlarida "Realtime Database
  Security Rules" deb qidiring).
- Yoki admin.html sahifasini oddiy parol bilan himoyalang,
  токен билан ёки faqat maktab Wi-Fi tarmog'idan kirish
  mumkin qilib sozlang.

Savol tug'ilsa — Firebase bepul (Spark) tarifida oylik limit
juda katta (kichik maktab uchun yetarlicha), pul to'lash shart
emas.
