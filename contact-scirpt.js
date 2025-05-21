document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    const allElements = document.querySelectorAll('*:not(body)');
    allElements.forEach(function (element) {
      element.style.opacity = '1';
    });

    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links li');
    const title = document.querySelector('.title');

    if (navbar) navbar.style.opacity = '1';
    if (title) title.style.opacity = '1';

    navLinks.forEach((link, index) => {
      setTimeout(() => {
        link.style.opacity = '1';
      }, 100 + index * 100);
    });

    const heading = document.querySelector('h2');
    if (heading) {
      setTimeout(() => {
        heading.style.opacity = '1';
      }, 200);
    }

    const contactParagraphs = document.querySelectorAll('.contact p');
    contactParagraphs.forEach((p, index) => {
      setTimeout(() => {
        p.style.opacity = '1';
      }, 300 + index * 200);
    });

  }, 0);
});
