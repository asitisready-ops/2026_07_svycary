# Progress – web projektu "Ochrana cenných ekosystémů a řízení udržitelné turistiky v okolí Brna"

Poslední aktualizace: 2026-09-11

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

Web je nasazen na produkci `https://www.projekt-udrzitelnyturismus.cz/` –
nasazení jede přes GitHub integraci na Vercelu, každý `git push origin main`
se automaticky nasadí (obvykle do pár minut).

### Průběžné úpravy živého webu (od 2026-08-25)
- Přidán a následně (2026-09-11) zase **odstraněn** modální popup "Web je
  právě ve výstavbě" (byl na 17 stránkách, včetně `assets/css/custom.css`
  sekce 14 a `assets/js/site-notice.js` – ten byl smazán, už se nikde
  nepoužívá).
- Text v hlavičce (vedle "Moravský kras") změněn z "Ochrana & udržitelný
  turismus" na "Udržitelný turismus a posílení biodiverzity" (ověřeno, že se
  vejde i na mobilní šířce 320px bez zalomení).
- V patičce (17 stránek) a na `partneri.html` (role Atregia s.r.o.) změněno
  "hlavní žadatel" → "hlavní řešitel". Věta o správci osobních údajů v
  `ochrana-soukromi.html` (GDPR odstavec: "hlavní žadatel a koordinátor
  projektu") byla **záměrně ponechána beze změny** – nebylo explicitně
  požádáno o úpravu tam.
- `udrzitelny-turismus.html` – popisek fotografie jeskyně (`03-jeskyne.jpg`
  v galerii "Fotografie z terénu") přejmenován na "Terénní průzkum v Lomu
  Seč" (alt text, lightbox popisek i viditelný štítek).
- `oblast-zajeci-potok.html` – rozšířena odpověď na FAQ otázku "Co bude s
  rybami v rybnících?" o podrobnosti k zarybnění a výzvu návštěvníkům,
  aby ryby do nádrží nevysazovali.
- Do hlavičky (17 aktivních stránek) přidáno logo povinné publicity
  "Program Švýcarsko-české spolupráce" vlevo nahoře nad hlavním menu
  (`.ws-header-required-logo` v `assets/css/custom.css`, obrázek
  `assets/img/logos/program-svycarsko-ceske-spoluprace.png`, stejný
  soubor jako v patičkovém funding disclaimeru). Na desktopu je logo
  absolutně pozicované v levém rohu hlavičky, pod 768px se přesune nad
  logo webu a je vycentrované, aby se nepřekrývalo s textem "Moravský
  kras". Ověřeno vizuálně na `index.html` a `kontakt.html` (desktop
  1440px i mobil 375px).

## Co ZBÝVÁ udělat
1. **Vizuální ověření v prohlížeči** – rozjeté, ale nedokončené. Plán byl:
   - lokální statický server (`node` + jednoduchý HTTP server na portu 8123)
   - `playwright-core` (nainstalováno do `/tmp/pw-test`) ovládající lokálně nainstalovaný
     Chrome (`C:\Program Files\Google\Chrome\Application\chrome.exe`) – `chromium-cli`
     nástroj v tomto prostředí není k dispozici
   - skript `verify.js` byl rozepsaný ve scratchpadu (screenshoty index/o-projektu/
     realizovane-oblasti/oblast-zajeci-potok + hover na dropdown menu) – **nebyl ještě spuštěný**
   - TODO: dokončit spuštění, zkontrolovat rozbité styly, chybějící obrázky, layout na mobilu
   - (9/2026: pro ad-hoc kontrolu responzivity teď funguje lokální
     `python -m http.server 8123` + chrome-devtools MCP `resize_page`, viz
     postup u úpravy hlavičky)
2. Doplnit reálné fotografie lokalit a loga (projektu, programu, partnerů) místo placeholderů
3. Zvážit smazání/úklid nepoužitých demo souborů šablony (viz výše)
4. Případně doplnit skutečný obsah do `aktuality.html` a `ke-stazeni.html`, jakmile budou k dispozici

## Jak pokračovat
Stačí říct např. *"pokračuj v práci na webu Moravský kras / Švýcaři"* – tento
soubor (`HTML/PROGRESS.md`) obsahuje vše potřebné pro navázání i bez historie
konverzace.
