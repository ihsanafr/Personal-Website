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