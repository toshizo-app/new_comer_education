// Reading progress bar
(function () {
  const bar = document.createElement('div');
  bar.style.cssText = 'position:fixed;top:0;left:0;height:4px;background:linear-gradient(90deg,#c75d2a,#f0c89a);z-index:9999;transition:width 0.1s;width:0%;';
  document.body.appendChild(bar);

  function update() {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = pct + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// Fade-in on scroll
(function () {
  if (!('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll('.chapter, .speech-bubble, .toc-list li');
  targets.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  targets.forEach((el) => observer.observe(el));
})();
