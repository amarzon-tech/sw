/* Salt Whisperer — offline cache for replay-pics */
const CACHE_VERSION = "salt-whisperer-replay-v2";
const ASSETS = ["./", "index.html", "sw.js", "images/food-eggs.webp", "images/food-oat.webp", "images/food-banana.webp", "images/food-apple.webp", "images/food-bread.webp", "images/food-bagel.webp", "images/food-tortilla.webp", "images/food-rice.webp", "images/food-pasta.webp", "images/food-deli.webp", "images/food-bacon.webp", "images/food-sausage.webp", "images/food-soup.webp", "images/food-broth.webp", "images/food-lowbroth.webp", "images/food-cheese.webp", "images/food-chips.webp", "images/food-pretzels.webp", "images/food-nuts_unsalted.webp", "images/food-nuts_salted.webp", "images/food-veg.webp", "images/food-pickles.webp", "images/food-soy.webp", "images/food-lowssoy.webp", "images/food-ketchup.webp", "images/food-bbq.webp", "images/food-salad_dress.webp", "images/food-frozen_dinner.webp", "images/food-ramen_pack.webp", "images/food-cottage.webp", "images/food-yogurt.webp", "images/food-breaded_chx.webp", "images/food-rotisserie.webp", "images/food-tuna_can.webp", "images/food-tuna_low.webp", "images/food-beans_can.webp", "images/food-beans_nsa.webp", "images/food-tomato_can.webp", "images/food-tomato_nsa.webp", "images/meal-am_chx_plate.webp", "images/meal-am_burger_combo.webp", "images/meal-am_home_burger.webp", "images/meal-am_pizza.webp", "images/meal-am_breakfast.webp", "images/meal-am_soup_sand.webp", "images/meal-am_grill_fish.webp", "images/meal-am_fried_chx.webp", "images/meal-am_chili.webp", "images/meal-am_chili_home.webp", "images/meal-am_mac.webp", "images/meal-as_teriyaki.webp", "images/meal-as_stirfry_ls.webp", "images/meal-as_pho_lessbroth.webp", "images/meal-as_ramen_full.webp", "images/meal-as_sushi.webp", "images/meal-as_sushi_lows.webp", "images/meal-as_padthai.webp", "images/meal-as_rice_bowl.webp", "images/meal-as_miso.webp", "images/meal-as_bibimbap.webp", "images/meal-as_friedrice.webp", "images/meal-in_dal_rice.webp", "images/meal-in_butterchx.webp", "images/meal-in_chana.webp", "images/meal-in_biryani.webp", "images/meal-in_idli.webp", "images/meal-in_upma.webp", "images/meal-in_tikka.webp", "images/meal-in_papad.webp", "images/meal-in_samosa.webp", "images/meal-in_khichdi.webp", "images/meal-md_bowl.webp", "images/meal-md_gyro.webp", "images/meal-md_fish_plate.webp", "images/meal-md_hummus_pita.webp", "images/meal-md_greek_salad.webp", "images/meal-md_greek_salad_home.webp", "images/meal-md_shakshuka.webp", "images/meal-md_olives.webp", "images/meal-md_falafel.webp", "images/meal-md_falafel_home.webp", "images/food-soup_low.webp"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetched = fetch(event.request).then(resp => {
        if (resp && resp.ok && (event.request.url.startsWith(self.location.origin))) {
          const copy = resp.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, copy));
        }
        return resp;
      }).catch(() => cached);
      // Cache-first so the app works offline; update cache when online (stale-while-revalidate).
      return cached || fetched;
    })
  );
});
