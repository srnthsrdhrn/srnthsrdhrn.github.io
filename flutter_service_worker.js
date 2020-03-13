'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "00f24d554630f186a835f5812e162a9f",
"/assets\favicon.ico": "1ec1b0eb7373dde0f47c62d11d17e0c6",
"/assets\FontManifest.json": "3f80277ff839f9c7cc9a28e80b8966dc",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "3e0ac52485a92fe54638a54d3cfbaf63",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets\third_party\Rubik-Medium.ttf": "c87313aa86b7caa31a9a0accaa584970",
"/assets\yu.png": "f922e8811bf675448ccc5fb50971cd94",
"/index.html": "f2157b6c78a08ee9f6c7e8859627aa40",
"/main.dart.js": "569fc8f1fb46bd2ed44b9d9398376f51"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
