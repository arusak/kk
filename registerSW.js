if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/kk/sw.js', { scope: '/kk/' })})}