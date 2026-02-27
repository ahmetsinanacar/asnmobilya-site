// ----------------------------
// HAMBURGER MENÜ
// ----------------------------
const hamburger = document.querySelector('.hamburger');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if(!menuOpen) {
        hamburger.classList.add('open');
        alert('Menü açıldı (demo)'); // Menü açma simülasyonu
        menuOpen = true;
    } else {
        hamburger.classList.remove('open');
        alert('Menü kapandı (demo)');
        menuOpen = false;
    }
});

// ----------------------------
// TR / EN DİL BUTONLARI
// ----------------------------
const trBtn = document.querySelector('.lang-buttons button:nth-child(1)');
const enBtn = document.querySelector('.lang-buttons button:nth-child(2)');

trBtn.addEventListener('click', () => {
    document.getElementById('about').innerText = 'Hakkımızda';
    document.getElementById('projects').innerText = 'Projeler / Ürünler';
    document.getElementById('contact').innerText = 'İletişim';
    alert('Dil Türkçe olarak değiştirildi');
});

enBtn.addEventListener('click', () => {
    document.getElementById('about').innerText = 'About';
    document.getElementById('projects').innerText = 'Projects / Products';
    document.getElementById('contact').innerText = 'Contact';
    alert('Language changed to English');
});

// ----------------------------
// BASİT CHATBOT SIMÜLASYONU
// ----------------------------
function chatBotDemo() {
    const userMessage = prompt("Merhaba! Sorunuzu yazın:");
    if(userMessage) {
        alert("ASN Mobilya Asistanı: Şu an demo modundayım. İletişim için bize mail veya WhatsApp'tan ulaşabilirsiniz!");
    }
}

// Örnek: Chatbot butonunu çağırmak için
// chatBotDemo();