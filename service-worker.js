// Nome do cache para armazenar as respostas em cache
const CACHE_NAME = 'my-app-cache';

// Lista de arquivos a serem armazenados em cache durante a instalação
const FILES_TO_CACHE = [
    '/',
    '/*'
  ];

// Tempo de validade do cache em segundos (4 dias neste exemplo)
const CACHE_EXPIRATION = 4 * 24 * 60 * 60;

// Evento de instalação do service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Evento de ativação do service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// ...

// Evento fetch - Intercepta as solicitações de rede
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(response => {
        // Verifica se a resposta está em cache
        if (response) {
          return response;
        }

        // Faz a solicitação de rede
        return fetch(event.request).then(networkResponse => {
          // Verifica se a resposta da rede é válida
          if (
            networkResponse.status === 200 &&
            networkResponse.type === 'basic'
          ) {
            // Clona a resposta da rede
            const clonedResponse = networkResponse.clone();

            // Armazena a resposta em cache
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, clonedResponse);
            });
          }

          // Retorna a resposta da rede
          return networkResponse;
        });
      });
    })
  );
});

// ...
