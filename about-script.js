document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const allElements = document.querySelectorAll('*:not(body)');
    allElements.forEach(function(element) {
      element.style.opacity = '1';
    });
    
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links li');
    const title = document.querySelector('.title');
    
    navbar.style.opacity = '1';
    title.style.opacity = '1';
    
    navLinks.forEach((link, index) => {
      setTimeout(() => {
        link.style.opacity = '1';
      }, 100 + (index * 100));
    });
    
    const schoolSections = document.querySelectorAll('.school');
    
    schoolSections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = '1';
        
        const img = section.querySelector('.school-img');
        const p = section.querySelector('p');
        
        setTimeout(() => {
          if (img) img.style.opacity = '1';
        }, 200);
        
        setTimeout(() => {
          if (p) p.style.opacity = '1';
        }, 400);
        
      }, 300 + (index * 300));
    });
    
    const heading = document.querySelector('h2');
    if (heading) {
      setTimeout(() => {
        heading.style.opacity = '1';
      }, 200);
    }
    
  }, 0);
});