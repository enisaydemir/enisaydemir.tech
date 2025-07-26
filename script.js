// script.js

// DOM içeriği tamamen yüklendiğinde çalışacak ana fonksiyon
document.addEventListener('DOMContentLoaded', () => {
    // Navigasyon (Hamburger Menü) İşlevselliği
    setupMobileMenu();

    // Footer Telif Hakkı Yılı Güncelleme
    updateCopyrightYear();
});

/**
 * Mobil navigasyon menüsü için hamburger ikonunun tıklama olayını yönetir.
 * Menüyü açar/kapatır ve hamburger ikonunun animasyonunu kontrol eder.
 */
function setupMobileMenu() {
    const navBurger = document.getElementById('burger'); // Hamburger menü ikonu
    const navLinks = document.getElementById('nav-links'); // Menü linklerini içeren liste

    // Elementlerin varlığını kontrol et
    if (!navBurger || !navLinks) {
        console.warn('Navigasyon elementleri bulunamadı. Mobil menü başlatılamadı.');
        return;
    }

    // Hamburger ikonuna tıklama olay dinleyicisi ekle
    navBurger.addEventListener('click', () => {
        toggleMenu();
    });

    // Menü linklerine tıklama olay dinleyicisi ekle (menüyü kapatmak için)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Sadece mobil menü aktifse kapat
            if (navLinks.classList.contains('nav-active')) {
                toggleMenu();
            }
        });
    });

    /**
     * Menünün ve hamburger ikonunun açma/kapama durumunu değiştirir.
     */
    function toggleMenu() {
        navLinks.classList.toggle('nav-active'); // Menüyü göster/gizle
        navBurger.classList.toggle('toggle'); // Hamburger ikonuna animasyon uygula
        // Sayfa kaydırmasını engelle/aç (mobil menü açıkken)
        document.body.classList.toggle('no-scroll');
    }
}

/**
 * Footer'daki telif hakkı yılını mevcut yıla otomatik olarak günceller.
 */
function updateCopyrightYear() {
    const currentYearSpan = document.getElementById('current-year');

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    } else {
        console.warn('Telif hakkı yılını gösteren span elementi bulunamadı (#current-year).');
    }
}

// Yeni bir özellik eklemek isterseniz buraya başka fonksiyonlar ekleyebilirsiniz, örneğin:
// function setupScrollToTopButton() { ... }