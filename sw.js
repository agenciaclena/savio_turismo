self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("admin-v1").then(cache =>
      cache.addAll(["./","index-admin.html"])
    )
  );
});
