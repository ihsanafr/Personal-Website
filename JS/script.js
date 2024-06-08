// Navbar===============================================
document.getElementById('navbar-toggle').addEventListener('click', function () {
  var nav = document.getElementById('navbar-default');
  if (nav.classList.contains('hidden')) {
    nav.classList.remove('hidden');
  } else {
    nav.classList.add('hidden');
  }
});
// Navbar===============================================



// Mengatur waktu tunggu splash screen (dalam milidetik)
const splashScreenDuration = 5000; // 5 detik

// Fungsi untuk menyembunyikan splash screen dan menampilkan konten utama
function hideSplashScreen() {
  document.getElementById('splash-screen').style.display = 'none'; // Menyembunyikan splash screen
  document.getElementById('main-content').style.display = 'block'; // Menampilkan konten utama
}

// Menunggu selama durasi splash screen, kemudian panggil fungsi hideSplashScreen
setTimeout(hideSplashScreen, splashScreenDuration);

function hideSplashScreen() {
  const splashScreen = document.getElementById('splash-screen');
  const mainContent = document.getElementById('main-content');

  // Mengatur opacity dari splash screen menjadi 0 secara bertahap
  splashScreen.style.opacity = '0';

  // Setelah transisi selesai, sembunyikan splash screen dan tampilkan konten utama
  setTimeout(() => {
    splashScreen.style.display = 'none';
    mainContent.style.display = 'block';
    mainContent.classList.add('show'); // Menambah kelas 'show' untuk menampilkan konten utama dengan opacity 1
  }, 500); // Menunggu 500ms (durasi transisi) sebelum menyembunyikan splash screen
}

// fade on load================================================
// Optional: Add a class to trigger the animation on load
// JavaScript untuk menambahkan class 'fade-in' pada elemen ketika halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua elemen dengan class 'fade-in'
  const fadeIns = document.querySelectorAll('.fade-in');

  // Loop melalui setiap elemen dan tambahkan class 'fade-in'
  fadeIns.forEach(function (element) {
    element.classList.add('fade-in');
  });
});

// fade on load================================================

// scrool animation =================================

const AnimateOnScroll = function ({
  offset
} = {
  offset: 10
}) {
  // Define a dobra superior, inferior e laterais da tela
  const windowTop = (offset * window.innerHeight) / 100;
  const windowBottom = window.innerHeight - windowTop;
  const windowLeft = 0;
  const windowRight = window.innerWidth;

  this.start = (element) => {
    window.requestAnimationFrame(() => {
      // Seta os atributos customizados
      element.style.animationDelay = element.dataset.animationDelay;
      element.style.animationDuration = element.dataset.animationDuration;

      // Inicia a animacao setando a classe para animar
      element.classList.add(element.dataset.animation);

      // Seta o elemento como animado
      element.dataset.animated = "true";
    });
  };

  this.inViewport = (element) => {
    // Obtem o boundingbox do elemento
    const elementRect = element.getBoundingClientRect();
    const elementTop =
      elementRect.top + parseInt(element.dataset.animationOffset) ||
      elementRect.top;
    const elementBottom =
      elementRect.bottom - parseInt(element.dataset.animationOffset) ||
      elementRect.bottom;
    const elementLeft = elementRect.left;
    const elementRight = elementRect.right;

    // Verifica se o elemento esta na tela
    return (
      elementTop <= windowBottom &&
      elementBottom >= windowTop &&
      elementLeft <= windowRight &&
      elementRight >= windowLeft
    );
  };

  // Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
  this.verifyElementsInViewport = (els = elements) => {
    for (let i = 0, len = els.length; i < len; i++) {
      // Passa para o proximo laço se o elemento ja estiver animado
      if (els[i].dataset.animated) continue;

      this.inViewport(els[i]) && this.start(els[i]);
    }
  };

  // Obtem todos os elementos a serem animados
  this.getElements = () =>
    document.querySelectorAll("[data-animation]:not([data-animated])");

  // Atualiza a lista de elementos a serem animados
  this.update = () => {
    elements = this.getElements();
    elements && this.verifyElementsInViewport(elements);
  };

  // Inicia os eventos
  window.addEventListener("load", this.update, false);
  window.addEventListener(
    "scroll",
    () => this.verifyElementsInViewport(elements), {
      passive: true
    }
  );
  window.addEventListener(
    "resize",
    () => this.verifyElementsInViewport(elements), {
      passive: true
    }
  );
};

// Initialize
const options = {
  offset: 15 // percentage of the window
};

const animation = new AnimateOnScroll(options);

// fade in on scrool bawah ================================= end