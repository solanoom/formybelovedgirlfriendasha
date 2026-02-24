(function () {
  'use strict';

  // Halaman pembuka: klik Enter → sembunyikan overlay, tampilkan konten, putar musik
  function initIntro() {
    var overlay = document.getElementById('intro-overlay');
    var enterBtn = document.getElementById('intro-enter');
    var audio = document.getElementById('bg-music');

    if (!enterBtn) return;

    enterBtn.addEventListener('click', function () {
      document.body.classList.add('intro-done');
      if (audio) {
        var p = audio.play();
        if (p && typeof p.then === 'function') p.catch(function () {});
      }
    });
  }

  // Format tanggal hari ini atau custom
  function formatDate() {
    const d = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return d.toLocaleDateString('id-ID', options);
  }

  function initDate() {
    const el = document.getElementById('dynamic-date');
    if (el) el.textContent = formatDate();
  }

  // Lightbox untuk gallery
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('lightbox-close');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryFrames = document.querySelectorAll('.gallery-frame');

    function openLightbox(src, alt) {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    galleryFrames.forEach(function (frame) {
      frame.addEventListener('click', function () {
        const img = frame.querySelector('img');
        if (img && img.src) openLightbox(img.src, img.alt || 'Foto kenangan');
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (lightbox) {
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // Scroll-triggered animations (optional enhancement)
  function initScrollAnimations() {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.birthday-card, .gallery-section').forEach(function (el) {
      observer.observe(el);
    });
  }

  // Ganti nama pengirim (bisa diubah di sini atau lewat URL)
  function initSenderName() {
    var params = new URLSearchParams(window.location.search);
    var name = params.get('from') || 'Abi Teja';
    var el = document.getElementById('sender-name');
    if (el) el.textContent = '— ' + name;
  }

  initIntro();
  initDate();
  initSenderName();
  initLightbox();
  initScrollAnimations();
})();
