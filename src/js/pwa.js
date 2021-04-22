if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('https://smartlist.ga/dashboard/sw.js', {
        scope: '.' // <--- THIS BIT IS REQUIRED
    })
    .then(() => { console.log('Service Worker Registered'); });
}
let deferredPrompt;
const addBtn = document.querySelector('.add-button');
// addBtn.style.display = 'none';
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  addBtn.style.display = 'block';
  addBtn.addEventListener('click', () => {
    addBtn.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});
