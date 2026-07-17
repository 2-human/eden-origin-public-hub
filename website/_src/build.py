#!/usr/bin/env python3
"""Static-site builder for the Eden Origin website rebuild (prototype).

Wraps each page's body fragment (in _src/pages/) in a shared brand header/footer
and writes pretty-URL pages into website/. Depth-relative {{ROOT}} keeps the site
base-independent (works at edenorigin.nsc.agency/website/ or any sub-path).
Edit fragments + this file only; run `python3 build.py` to regenerate.

Customer-facing copy is Serbian (Latin), matching Eden Origin's market and feed.
"""
import os, shutil

SRC = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.dirname(SRC)  # website/

# (key, href, label, children) — children is None for a plain link, or a list of
# (href, label) for a dropdown. A child page sets its `active` to the parent key.
NAV = [
    ("home",     "index.html",   "Početna",   None),
    ("prica",    "prica/",       "Naša priča", None),
    ("proizvodi","proizvodi/",   "Proizvodi", [
        ("proizvodi/",                    "Svi proizvodi"),
        ("proizvodi/violaverde-vanila/",  "ViolaVerde &middot; vanila"),
        ("proizvodi/violaverde-borovnica/","ViolaVerde &middot; borovnica"),
        ("proizvodi/ramonda-sirup/",      "Ramonda sirup"),
    ]),
    ("recepti",  "recepti/",     "Recepti",   [
        ("recepti/",                    "Svi recepti"),
        ("recepti/viola-spritz/",       "Viola spritz"),
        ("recepti/lavanda-lemon-bliss/","Lavender Lemon Bliss"),
        ("recepti/viola-gin-tonik/",    "Viola gin &amp; tonik"),
        ("recepti/lavanda-limunada/",   "Limunada od lavande"),
        ("recepti/lavanda-cheesecake/", "Čizkejk od lavande"),
    ]),
    ("vodic",    "vodic/",       "Vodič",     [
        ("vodic/",                              "Svi vodiči"),
        ("vodic/kako-nastaje-liker-od-lavande/","Kako nastaje liker od lavande"),
        ("vodic/pokloni-od-lavande/",           "Pokloni od lavande"),
    ]),
]

HEAD = """<!doctype html>
<html lang="sr-Latn">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} | Eden Origin</title>
<meta name="description" content="{desc}">
<link rel="icon" href="{root}assets/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{root}assets/site.css">
{schema}
</head>
<body>
<div class="proto-note">Prototip sajta &middot; izradio North Star Communications za Eden Origin. Predlog za pregled, nije zvanični sajt.</div>
<header class="site-head"><div class="wrap site-head__in">
  <a class="brand" href="{root}index.html">{logo}<span class="brand__tag">organska lavanda &middot; Milićevci</span></a>
  <button class="navtoggle" aria-label="Meni" onclick="document.body.classList.toggle('nav-open')"><span></span><span></span><span></span></button>
  <nav class="nav">{nav}
    <a class="btn btn--sm nav__cta" href="https://ananas.rs/prodavnica/eden-origin" target="_blank" rel="noopener">Poruči</a>
  </nav>
</div></header>
<main>
"""

FOOT = """</main>
<footer class="site-foot"><div class="wrap">
  <div class="foot__grid">
    <div class="foot__brand">
      {logo_foot}
      <p>Organski liker i sirup od lavande, ubrani i pravljeni rukom u Milićevcima kraj Čačka. Mali proizvod, velika priča.</p>
    </div>
    <div>
      <h4>Proizvodi</h4>
      <a href="{root}proizvodi/violaverde-vanila/">ViolaVerde &middot; vanila</a>
      <a href="{root}proizvodi/violaverde-borovnica/">ViolaVerde &middot; borovnica</a>
      <a href="{root}proizvodi/ramonda-sirup/">Ramonda sirup</a>
      <a href="https://ananas.rs/prodavnica/eden-origin" target="_blank" rel="noopener">Poruči na Ananasu</a>
    </div>
    <div>
      <h4>Inspiracija</h4>
      <a href="{root}recepti/">Recepti i kokteli</a>
      <a href="{root}vodic/">Vodič i pokloni</a>
      <a href="{root}prica/">Naša priča</a>
    </div>
    <div>
      <h4>Kontakt</h4>
      <a href="{root}kontakt/">Pišite nam</a>
      <a href="https://www.instagram.com/eden.origin/" target="_blank" rel="noopener">Instagram</a>
      <a href="https://www.facebook.com/profile.php?id=100081009832761" target="_blank" rel="noopener">Facebook</a>
      <span style="display:block;padding:.22rem 0;color:var(--verde-pale)">Milićevci &middot; Čačak, Srbija</span>
    </div>
  </div>
  <div class="foot__bar">
    <span>&copy; 2026 Eden Origin. Prototip za demonstraciju &middot; North Star Communications.</span>
    <span>Uživajte odgovorno. 18+</span>
  </div>
</div></footer>
</body></html>"""

LOGO = ('<span class="brand__mark" aria-hidden="true">'
        '<svg viewBox="0 0 24 30" width="20" height="25"><path d="M12 1C8 7 6 11 6 15a6 6 0 0 0 12 0c0-4-2-8-6-14z" '
        'fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 9v12M9 13l3 2 3-2M9 17l3 2 3-2" '
        'fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg></span>'
        '<span class="brand__name">Eden Origin</span>')
LOGO_FOOT = ('<span class="brand brand--foot">' + LOGO + '</span>')

def nav_html(active, root):
    out = ""
    for key, href, label, children in NAV:
        act = ' active' if key == active else ''
        if not children:
            out += f'\n    <a class="nav__link{act}" href="{root}{href}">{label}</a>'
        else:
            sub = "".join(f'<a href="{root}{h}">{l}</a>' for h, l in children)
            out += (f'\n    <div class="nav__item">'
                    f'<a class="nav__link nav__parent{act}" href="{root}{href}">{label}<span class="nav__caret">&#9662;</span></a>'
                    f'<div class="nav__sub">{sub}</div></div>')
    return out

# (out_path, root, active, title, desc, fragment_file, schema_file_or_None)
PAGES = [
    ("index.html",                              "",      "home",      "Organski liker i sirup od lavande",
        "Eden Origin ViolaVerde: organski liker od lavande sa vanilom, ubran i pravljen rukom u Milićevcima kraj Čačka. Kokteli, deserti i pokloni od lavande.", "home.html", "schema-org.html"),
    ("prica/index.html",                        "../",   "prica",     "Naša priča: kako je nastao Eden",
        "Ana i Bojan, sestra i brat iz Čačka, na zapuštenom porodičnom imanju u Milićevcima zasadili su 2.500 struka lavande i napravili ViolaVerde.", "prica.html", None),

    # --- Proizvodi (product pillar + products) ---
    ("proizvodi/index.html",                    "../",   "proizvodi", "Proizvodi od lavande",
        "ViolaVerde liker od lavande sa vanilom i sa borovnicom, i Ramonda sirup. Organski, ručno pravljeni proizvodi Eden Origin.", "proizvodi/index.html", None),
    ("proizvodi/violaverde-vanila/index.html",  "../../","proizvodi", "ViolaVerde liker od lavande sa vanilom",
        "Prvi pravi liker od lavande u Srbiji, omekšan vanilom. 25% alkohola, dvostruka maceracija, ručna berba. Dostupan u 0,2 l, 0,5 l i 0,7 l.", "proizvodi/violaverde-vanila.html", "schema-product.html"),
    ("proizvodi/violaverde-borovnica/index.html","../../","proizvodi","ViolaVerde liker od lavande sa borovnicom",
        "Druga varijanta ViolaVerde: lavanda uravnotežena borovnicom. Dublji, voćni profil za koktele i digestiv.", "proizvodi/violaverde-borovnica.html", None),
    ("proizvodi/ramonda-sirup/index.html",      "../../","proizvodi", "Ramonda sirup od lavande (bez alkohola)",
        "Bezalkoholni sirup od lavande za limunade, čajeve i deserte. Cvet lavande bez veštačkih aroma i boja.", "proizvodi/ramonda-sirup.html", None),

    # --- Recepti (cluster spokes: cocktails & desserts) ---
    ("recepti/index.html",                      "../",   "recepti",   "Recepti sa lavandom: kokteli i deserti",
        "Kokteli, limunade i deserti sa ViolaVerde likerom i sirupom od lavande. Jednostavni recepti koje pravite kod kuće.", "recepti/index.html", None),
    ("recepti/viola-spritz/index.html",         "../../","recepti",   "Viola spritz: koktel od lavande za leto",
        "Osvežavajući letnji spritz sa ViolaVerde likerom od lavande, penušavim vinom i tonikom. Recept za jednu čašu.", "recepti/viola-spritz.html", "schema-recipe.html"),
    ("recepti/lavanda-lemon-bliss/index.html",  "../../","recepti",   "Lavender Lemon Bliss: koktel od lavande i limuna",
        "Lagani letnji koktel sa ViolaVerde likerom od lavande i sokom od limuna. Tri sastojka, dva minuta. Originalni recept sa Eden Origin Instagrama.", "recepti/lavanda-lemon-bliss.html", None),
    ("recepti/viola-gin-tonik/index.html",      "../../","recepti",   "Viola gin i tonik sa lavandom",
        "Klasičan gin i tonik podignut kašikom ViolaVerde likera od lavande. Elegantan aperitiv za goste.", "recepti/viola-gin-tonik.html", None),
    ("recepti/lavanda-limunada/index.html",     "../../","recepti",   "Limunada od lavande (bez alkohola)",
        "Domaća limunada sa Ramonda sirupom od lavande. Bezalkoholno osveženje za vrele dane, za celu porodicu.", "recepti/lavanda-limunada.html", None),
    ("recepti/lavanda-cheesecake/index.html",   "../../","recepti",   "Čizkejk od lavande sa ViolaVerde prelivom",
        "Kremasti čizkejk sa notom lavande i prelivom od ViolaVerde likera. Desert koji izgleda kao iz poslastičarnice.", "recepti/lavanda-cheesecake.html", None),

    # --- Vodič (cluster spokes: how-it's-made + gifting) ---
    ("vodic/index.html",                        "../",   "vodic",     "Vodič: sve o lavandi Eden Origin",
        "Kako nastaje liker od lavande, kako se služi i kako se poklanja. Vodiči i saveti iz zasada u Milićevcima.", "vodic/index.html", None),
    ("vodic/kako-nastaje-liker-od-lavande/index.html","../../","vodic","Kako nastaje liker od lavande, korak po korak",
        "Od ručne berbe 2.500 struka lavande do dvostruke maceracije sa vanilom. Ceo put nastanka ViolaVerde likera.", "vodic/kako-nastaje-liker-od-lavande.html", None),
    ("vodic/pokloni-od-lavande/index.html",     "../../","vodic",     "Pokloni od lavande: ideje za svaku priliku",
        "ViolaVerde i Ramonda kao poklon: za rođendan, slavu, kolege i venčanja. Kako izabrati zapreminu i upakovati.", "vodic/pokloni-od-lavande.html", None),

    ("kontakt/index.html",                       "../",   "kontakt",   "Kontakt i poručivanje",
        "Poručite ViolaVerde i Ramonda proizvode, pitajte za veleprodaju ili poklon-pakovanja. Eden Origin, Milićevci kraj Čačka.", "kontakt.html", None),
]

def build():
    for out_path, root, active, title, desc, frag, schema in PAGES:
        body = open(os.path.join(SRC, "pages", frag), encoding="utf-8").read()
        schema_html = ""
        if schema:
            schema_html = open(os.path.join(SRC, "pages", schema), encoding="utf-8").read()
        page = (HEAD.format(title=title, desc=desc, root=root, nav=nav_html(active, root),
                            schema=schema_html, logo=LOGO)
                + body + FOOT.format(root=root, logo_foot=LOGO_FOOT))
        page = page.replace("{{ROOT}}", root)
        dest = os.path.join(OUT, out_path)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        open(dest, "w", encoding="utf-8").write(page)
        print("wrote", out_path)
    os.makedirs(os.path.join(OUT, "assets"), exist_ok=True)
    shutil.copy(os.path.join(SRC, "site.css"), os.path.join(OUT, "assets", "site.css"))
    shutil.copy(os.path.join(SRC, "favicon.svg"), os.path.join(OUT, "assets", "favicon.svg"))
    # copy image assets (photos + generated on-brand imagery)
    img_src = os.path.join(SRC, "assets", "img")
    if os.path.isdir(img_src):
        shutil.copytree(img_src, os.path.join(OUT, "assets", "img"), dirs_exist_ok=True)
    print("done")

if __name__ == "__main__":
    build()
