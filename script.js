
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(function(element) {
      element.style.opacity = '1';
    });
    
    const profileContainers = document.querySelectorAll('.profile-container');
    const downloadButtons = document.querySelectorAll('.download');
    const profileImages = document.querySelectorAll('.profile-img');
    const profileOverlays = document.querySelectorAll('.profile-overlay');
    const timelineEntries = document.querySelectorAll('.timeline-entry');
    
    profileContainers.forEach(element => element.style.opacity = '1');
    downloadButtons.forEach(element => element.style.opacity = '1');
    profileImages.forEach(element => element.style.opacity = '1');
    profileOverlays.forEach(element => element.style.opacity = '1');
    
    timelineEntries.forEach((entry, index) => {
      setTimeout(() => {
        entry.style.opacity = '1';
      }, 100 + (index * 150));
    });
  }, 0);
});