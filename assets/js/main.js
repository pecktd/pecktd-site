(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && window.matchMedia('(max-width: 820px)').matches) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var emailEl = document.querySelector('.email-reveal');
  if (emailEl) {
    var u = 'peckpeckpeckpeckpeck';
    var d = 'gmail.com';
    var addr = u + '@' + d;
    emailEl.addEventListener('click', function () {
      emailEl.textContent = addr;
      window.location.href = 'mailto:' + addr;
    });
  }
})();
