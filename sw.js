self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("excursao-v1").then(cache=>{
      return cache.addAll([
        "./",
        "login.html",
        "index-admin.html"
      ]);
    })
  );
});
