self.addEventListener('push', (event) => {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: 'https://pooltroopers.com/wp-content/uploads/2025/01/PoolTroopers-LogoSVG-Retina-1.svg',
    });
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow('https://tampa-links.netlify.app')); // Replace with your Netlify URL
});

