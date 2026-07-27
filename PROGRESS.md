# Progress – web projektu "Ochrana cenných ekosystémů a řízení udržitelné turistiky v okolí Brna"

Poslední aktualizace: 2026-07-13

## Kontext
Upravujeme šablonu ThemeForest **Artday** (e-shop šablona) na prezentační web
pro projekt financovaný z **Programu Švýcarsko-české spolupráce** (2025–2028),
žadatel **Atregia s.r.o.** Zdroj obsahu: `..\2. kolo_Plná projektová žádost\Final podání\PLNÁ PROJEKTOVÁ ŽÁDOST.docx`.

## Rozhodnutí (odsouhlaseno uživatelem)
- Sitemap: Domů, O projektu, Realizované oblasti (rozcestník + 4 podstránky),
  Udržitelný turismus, Aktuality, Partneři, Ke stažení, Kontakt
- Jazyk: pouze čeština
- E-shop prvky šablony (košík, checkout, my-account, topbar) → **kompletně odstraněny** z nové navigace/patičky
- Fotky/loga: zatím **placeholder** boxy (`.ws-photo-placeholder`), reálné podklady doplní uživatel později

## Hotovo
Soubory v `HTML/`:
- `assets/css/custom.css` – nové styly (hero, stats, area karty, timeline, partner karty, funding disclaimer, photo placeholder, badges)
- `assets/js/site.js` – lehká náhrada `main.js` (původní `main.js` bez podmínek volá Revolution Slider / Owl Carousel – bez těch pluginů by zamrzl loader; na nových stránkách proto `site.js` misto `main.js`)
- `index.html` – Domů (hero, stats 17 400 ha / 4 oblasti / 11 sčítačů / 5 partnerů, dlaždice 4 oblastí, CTA)
- `o-projektu.html` – environmentální problém, 3 cíle, územní vymezení, harmonogram, rozpočet
- `realizovane-oblasti.html` – rozcestník 4 oblastí
- `oblast-zajeci-potok.html`, `oblast-sokolnice.html`, `oblast-arboretum-krtiny.html`, `oblast-doubravka.html`
- `udrzitelny-turismus.html` – Plán udržitelného turismu, monitoring, spolupráce WSL
- `partneri.html` – 5 partnerů konsorcia + 4 podporovatelé
- `aktuality.html` – 4 ukázkové položky, jasně označené "Ukázkový obsah" (k nahrazení reálnými novinkami)
- `ke-stazeni.html` – připravená struktura, dokumenty zatím "Připravuje se"
- `kontakt.html` – kontaktní info (Atregia = žadatel, ASITIS = komunikace), formulář

Staré demo stránky šablony (`shop.html`, `checkout.html`, `my-account.html`,
`single-product.html`, `shopping-cart.html`, `second-header.html`,
`third-header.html`, `slider-fullwidth.html`, `slider-fullscreen.html`,
`3d-parallax.html`, `faq.html`, `about.html`, `contact.html`, `journal.html`)
zůstaly **beze změny na disku, ale nejsou nikam prolinkované** z nové navigace
– lze je smazat, nebo dál ignorovat.

## Co ZBÝVÁ udělat
1. **Vizuální ověření v prohlížeči** – rozjeté, ale nedokončené. Plán byl:
   - lokální statický server (`node` + jednoduchý HTTP server na portu 8123)
   - `playwright-core` (nainstalováno do `/tmp/pw-test`) ovládající lokálně nainstalovaný
     Chrome (`C:\Program Files\Google\Chrome\Application\chrome.exe`) – `chromium-cli`
     nástroj v tomto prostředí není k dispozici
   - skript `verify.js` byl rozepsaný ve scratchpadu (screenshoty index/o-projektu/
     realizovane-oblasti/oblast-zajeci-potok + hover na dropdown menu) – **nebyl ještě spuštěný**
   - TODO: dokončit spuštění, zkontrolovat rozbité styly, chybějící obrázky, layout na mobilu
2. Doplnit reálné fotografie lokalit a loga (projektu, programu, partnerů) místo placeholderů
3. Zvážit smazání/úklid nepoužitých demo souborů šablony (viz výše)
4. Případně doplnit skutečný obsah do `aktuality.html` a `ke-stazeni.html`, jakmile budou k dispozici

## Jak pokračovat
Stačí říct např. *"pokračuj v práci na webu Moravský kras / Švýcaři"* – tento
soubor (`HTML/PROGRESS.md`) obsahuje vše potřebné pro navázání i bez historie
konverzace.
