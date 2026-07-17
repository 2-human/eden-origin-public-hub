/* proposal-hub per-client CONTENT (window.HUB). Chassis (index.html) reads this.
   See the proposal-hub README 'Content map' + content.template.js for the schema.
   Voice: no em dashes anywhere, flowing connected prose, hedge audits with
   moglo/može. The whole hub is written in Serbian (Latin), Eden Origin's market. */
var WEB = "website/";
window.HUB = {
  title: "Predlog za Eden Origin · North Star Communications",
  brand: { proposalFor: "Eden Origin",
    foot: `North Star Communications.<br>Predlog za Eden Origin. Sve stranice su predlozi za pregled, a ne živi sajt.` },
  favicon: "favicon.svg",
  defaultView: "intro",
  nav: [
    { section: "Predlog", items: [
      { view: "intro",   label: "Uvod" },
      { view: "recs",    label: "Preporuke" },
      { view: "who",     label: "Ko smo mi" },
      { view: "people",  label: "Ključni ljudi" }
    ]},
    { section: "Sadržaj i sajt", items: [
      { view: "cluster",  label: "Klaster sadržaja" },
      { view: "articles", label: "Primeri članaka", badge: 5 },
      { view: "website",  label: "Sajt" }
    ]},
    { section: "Društvene mreže", items: [
      { view: "social", label: "Organske objave", badge: 6 }
    ]},
    { section: "SEO i GEO signali", items: [
      { view: "gbp", label: "Google profil" },
      { view: "tp",  label: "Trustpilot" }
    ]},
    { section: "CRM", items: [
      { view: "orders", label: "Porudžbine", badge: 6 }
    ]}
  ],
  /* LinkedIn/Facebook/Instagram chrome is only used by the built-in renderSocial.
     Eden Origin's real feed is Instagram + Facebook (no LinkedIn), and the brief is
     to reuse their EXISTING posts rather than author new ones, so Organic Posts is a
     static html.social view (gotcha #1). This stays present for the chassis's one
     no-op renderSocial(DATA=[]) call on load. */
  PF: {
    instagram: { name: "Instagram", cls: "ig", tag: "◉" },
    facebook:  { name: "Facebook",  cls: "fb", tag: "f" }
  },
  social: [],
  VIEWS: {
    intro:    { title: "Uvod", sub: "Zašto smo vam se javili", open: WEB, openLabel: "Otvori sajt ↗" },
    recs:     { title: "Preporuke", sub: "Šta bismo napravili i zašto svaki deo ima svoje mesto", open: WEB, openLabel: "Otvori sajt ↗" },
    who:      { title: "Ko smo mi", sub: "North Star Communications, naš pristup, usluge i dosadašnji rad", open: WEB, openLabel: "Otvori sajt ↗" },
    people:   { title: "Ključni ljudi", sub: "Ljudi koji bi vodili posao" },
    cluster:  { title: "Klaster sadržaja", sub: "Od vaših objava, preko izvedenih stranica, do porudžbine na Ananasu" },
    articles: { title: "Primeri članaka", sub: "Stranice koje bismo objavili na vašem brendu, prikazano pet, jedna u celini" },
    website:  { title: "Sajt", sub: "Funkcionalni prototip, dom u koji vaše objave vode", open: WEB, openLabel: "Otvori u novom tabu ↗", tbBadge: "Funkcionalni prototip" },
    social:   { title: "Organske objave", sub: "Vaše prave objave sa Instagrama i Facebooka, povezane sa stranicama na koje bi vodile", open: "https://www.instagram.com/eden.origin/", openLabel: "Otvori Instagram ↗" },
    orders:   { title: "Porudžbine", sub: "Jednostavan CRM, porudžbine sa količinom, popustom i ukupno plaćenim iznosom" },
    gbp:      { title: "Google profil", sub: "Google poslovni profil, recenzije, objave, proizvodi i pitanja", open: "https://www.google.com/maps/search/Eden+Origin+lavanda+Mili%C4%87evci", openLabel: "Otvori Google mape ↗" },
    tp:       { title: "Trustpilot", sub: "TrustScore, recenzije i potvrđen profil kao signal poverenja", open: "https://www.trustpilot.com/search?query=Eden%20Origin", openLabel: "Otvori Trustpilot ↗" }
  },
  clients: [
    {name:"Belgrade Waterfront", logo:"belgrade-waterfront.svg", desc:"Najveći projekat razvoja nekretnina na obali u jugoistočnoj Evropi.", did:"SEO, izrada sajta, vođenje društvenih mreža, digitalno oglašavanje i foto i video produkcija."},
    {name:"The Clorox Company", logo:"clorox.svg", desc:"Multinacionalna kompanija sa Fortune 500 liste, iza brendova za domaćinstvo poput Clorox, Glad, Brita, Pine-Sol i Burt's Bees.", did:"Potpuni tržišni test nove kategorije proizvoda. Napravili smo kompletan onlajn prodajni sajt i vodili kampanje na društvenim mrežama i Google-u, i doveli do 10.000 kupovina za tri meseca."},
    {name:"Citibank", logo:"citi.png", desc:"Globalna banka za građane iz sastava Citigroup-a, jedne od najvećih finansijskih institucija na svetu, prisutne na skoro 90 tržišta.", did:"Brzo testiranje tražnje za nove proizvode i ponude na tržištima Severne i Južne Amerike: sajtovi i kampanje sa brzim rokom za svaki kratak ciklus, koji su generisali hiljade kontakata."},
    {name:"Speechify", logo:"speechify.svg", desc:"Aplikacija za pretvaranje teksta u govor i veštačke glasove koja naglas čita knjige, PDF-ove i veb stranice, koju koristi preko 60 miliona ljudi.", did:"SEO i GEO motor sadržaja koji je objavljivao 50 hiljada reči mesečno, dok brend nije došao među prva tri rezultata za svaku ciljanu reč i postao lider kategorije."},
    {name:"Semrush", logo:"semrush.svg", desc:"Vodeća platforma za onlajn vidljivost i SEO koja pokriva pretragu, sadržaj, PPC i društvene mreže, koju marketing timovi koriste širom sveta.", did:"Pisali smo Semrush-ov sadržaj o novim trendovima, promenama publike i algoritama. Svaki članak je od prvog postao viralan, a rad nam je doneo mesto na njihovoj listi partnera."},
    {name:"Miss Universe", logo:"miss-universe.png", desc:"Jedan od najvećih i najgledanijih izbora lepote na svetu, koji se održava u desetinama zemalja.", did:"Vodili smo nacionalno izdanje od početka do kraja: brend, marketing, SEO, društvene mreže i ceo događaj (sponzori, takmičarke, prostor, mediji, budžet). Šou sa 1.000 gostiju, isporučen ispod budžeta, na vreme i sa profitom."},
    {name:"MVP Workshop", logo:"mvp-workshop.svg", desc:"Studio za Web3 i blockchain rešenja koji isporučuje proizvode od ideje do lansiranja.", did:"Podigli smo poziciju u pretrazi kroz matricu sadržaja sa šest stubova i tehničko SEO pisanje koje govori pravim kupcima, uz primetan rast rangiranja za ključne reči i saobraćaja ciljane publike."},
    {name:"Inery", logo:"inery.svg", desc:"Decentralizovana infrastruktura za podatke i alati za programere namenjeni distribuiranim sistemima, na nivou velikih preduzeća.", did:"Potpuno globalno lansiranje novog blockchain projekta (PR, partnerstva, zajednica, tim, oglasi) za dva meseca. Na dan lansiranja token je skočio sa 0,14 dolara na 0,69 dolara u roku od šest sati."}
  ],
  /* Illustrative TARGET-STATE data for the Google profile and Trustpilot mockups.
     Sample reviews/posts/products/Q&A show the optimized profile to build toward. */
  gbp: {
    name:"Eden Origin", category:"Liker i sirup od lavande &middot; Milićevci, Čačka",
    address:"Milićevci, 32000 Čačka, Srbija", hours:"Zatvara se u 17 h",
    phone:"+381 64 5302590", website:"edenorigin.nsc.agency",
    attrs:"Porodično &middot; Organska lavanda &middot; Ručna berba &middot; Dostava",
    photos:["hero-field.jpg","viola-spritz.jpg","gift.jpg","workshop.jpg","cheesecake.jpg"],
    rating:"5.0", reviewCount:42,
    reviews:[
      {author:"Jelena M.", when:"pre 2 nedelje", text:"Naručila sam ViolaVerde kao poklon za mamin rođendan i oduševila je i nju i mene. Ukus je mek i cvetni, nimalo nametljiv, a flaša izgleda predivno na stolu. Dostava je bila brza, pakovanje pažljivo. Definitivno se vraćam po još.", ownerReply:"Hvala vam, Jelena. Baš nam je drago što je mama uživala, a flaša zaista lepo stoji na stolu. Vidimo se ponovo, i pozdravite je od nas. Ana, Eden Origin"},
      {author:"Marko P.", when:"pre 3 nedelje", text:"Probao sam Viola spritz po njihovom receptu i sada je to naš letnji koktel broj jedan. Lavanda i vanila se savršeno slažu, osveži a nije sladunjavo. Preporuka svima koji vole nešto drugačije.", ownerReply:"Hvala, Marko. Viola spritz je i nama omiljen kad stegnu vrućine. Uživajte i javite kako su prošli gosti. Bojan, Eden Origin"},
      {author:"Ivana K.", when:"pre mesec dana", text:"Kupili smo za poslovne poklone i utisci su bili odlični. Domaći proizvod sa pravom pričom, lepo upakovan, svi su bili prijatno iznenađeni. Komunikacija je bila besprekorna od porudžbine do isporuke.", ownerReply:"Hvala vam na poverenju, Ivana. Poslovni pokloni su nam posebno dragi jer priča o lavandi ide dalje. Tu smo za sledeću priliku. Ana, Eden Origin"},
      {author:"Nikola S.", when:"pre mesec dana", text:"Ramonda sirup je hit i kod dece i kod nas. Limunada od lavande je nešto najosvežavajuće što smo probali ovog leta, bez alkohola a sa posebnim ukusom. Kupujemo ponovo.", ownerReply:"Hvala, Nikola. Baš nam je drago što je i najmlađima prijalo. Ramonda je naš način da lavandu probaju baš svi. Bojan, Eden Origin"},
      {author:"Milica J.", when:"pre 2 meseca", text:"Sve pohvale za trud i kvalitet. Vidi se da je rađeno rukom i sa ljubavlju, a ljubičasta boja i miris su neverovatni. Preporučujem od srca svakome ko traži domaći poklon sa dušom.", ownerReply:"Hvala vam od srca, Milica. Ručni rad traži vreme, pa ovakve reči znače najviše. Radujemo se sledećoj porudžbini. Ana, Eden Origin"}
    ],
    posts:[
      {type:"Novost", title:"Počela je berba lavande", body:"Nova sezona je krenula. Beremo rukom, struk po struk, i sušimo cvet za novu turu ViolaVerde likera i Ramonda sirupa. Pratite nas da vidite ceo put od polja do flaše.", cta:"Saznaj više"},
      {type:"Ponuda", title:"Poklon-pakovanja za svaku priliku", body:"Za rođendane, slave i poslovne poklone pripremamo pakovanja po želji, sa porukom i sušenom grančicom lavande. Javite priliku i broj komada, predložićemo kombinaciju.", cta:"Pošalji upit"},
      {type:"Novost", title:"Nagrada za našu malu baštu", body:"Naš rad je prepoznat i izvan Čačka: osvojili smo grant od 10.000 funti u konkurenciji od 80 prijavljenih. Hvala vam što ste deo ove priče.", cta:"Saznaj više"},
      {type:"Događaj", title:"Nađite nas na sajmu domaćih proizvoda", body:"Ovog vikenda delimo degustacije Viola koktela i sirupa. Svratite da probate i ponesete flašu kući. Vidimo se.", cta:"Pozovi"}
    ],
    qa:[
      {q:"Gde mogu da kupim ViolaVerde?", a:"Možete poručiti direktno kod nas uz dostavu, ili preko naše prodavnice na Ananasu. Na sajtu svaka stranica proizvoda ima dugme za porudžbinu."},
      {q:"Da li pravite poklon-pakovanja?", a:"Da. Pripremamo pakovanja po želji, sa porukom i sušenom lavandom, za lične i poslovne poklone. Javite nam priliku i broj komada."},
      {q:"Koliko alkohola ima liker?", a:"ViolaVerde ima 25% alkohola. Ramonda sirup je bez alkohola, pa je pogodan za celu porodicu."},
      {q:"Da li je proizvod organski?", a:"Da. Lavandu gajimo i beremo rukom u Milićevcima, bez hemijskih preparata, i pravimo je u malim serijama."},
      {q:"Da li dostavljate širom Srbije?", a:"Da, dostavljamo na kućnu adresu širom Srbije. Preko Ananasa dostava stiže za 48 sati ili brže."}
    ],
    products:[
      {name:"ViolaVerde &middot; vanila", price:"od 1.040 RSD", img:"violaverde-vanila.jpg", desc:"Prvi pravi liker od lavande, omekšan vanilom. 25% alkohola. Mek, cvetni ukus, kao digestiv ili u koktelu."},
      {name:"ViolaVerde &middot; borovnica", price:"Sezonski", img:"borovnica.jpg", desc:"Druga varijanta sa borovnicom, dublja i voćnija. Za punije koktele i digestiv sa karakterom."},
      {name:"Ramonda sirup", price:"Bez alkohola", img:"limunada.jpg", desc:"Sirup od lavande za limunade, čajeve i deserte. Osveženje za celu porodicu, bez veštačkih aroma."},
      {name:"Poklon-pakovanje", price:"Na upit", img:"gift.jpg", desc:"ViolaVerde i Ramonda u pakovanju po želji, sa porukom i sušenom lavandom. Za rođendane, slave i poslovne poklone."}
    ]
  },
  tp: {
    name:"Eden Origin", domain:"edenorigin.nsc.agency",
    score:"4.9", reviewCount:28, label:"Odlično",
    dist:[{s:5,p:90},{s:4,p:8},{s:3,p:1},{s:2,p:1},{s:1,p:0}],
    reviews:[
      {author:"Jelena M.", loc:"Beograd, RS", nrev:3, rating:5, when:"20. jun 2026.", title:"Poklon koji se pamti", body:"ViolaVerde sam naručila za mamin rođendan i bila je oduševljena. Ukus mek i cvetni, flaša predivna, dostava brza. Komunikacija besprekorna od početka do kraja. Vraćam se po još.", doe:"Jun 2026.", reply:"Hvala vam, Jelena. Drago nam je što je poklon pogodio pravo. Vidimo se ponovo. Ana, Eden Origin"},
      {author:"Marko P.", loc:"Novi Sad, RS", nrev:1, rating:5, when:"2. jun 2026.", title:"Naš letnji koktel broj jedan", body:"Viola spritz po njihovom receptu je postao obavezan kod nas. Lavanda i vanila savršeno idu zajedno, osveži a nije sladunjavo. Preporuka svima koji vole nešto drugačije.", doe:"Maj 2026.", reply:"Hvala, Marko. Viola spritz je i nama omiljen. Uživajte. Bojan, Eden Origin"},
      {author:"Ivana K.", loc:"Čačak, RS", nrev:2, rating:5, when:"18. maj 2026.", title:"Domaći proizvod sa pričom", body:"Kupili smo za poslovne poklone i svi su bili prijatno iznenađeni. Lepo upakovano, prava priča iza proizvoda, isporuka tačno na vreme. Ozbiljan pristup za malu porodičnu firmu.", doe:"Maj 2026.", reply:"Hvala na poverenju, Ivana. Poslovni pokloni su nam posebno dragi. Tu smo za sledeću priliku. Ana, Eden Origin"},
      {author:"Nikola S.", loc:"Kragujevac, RS", nrev:1, rating:4, when:"29. apr 2026.", title:"Odlična Ramonda za celu porodicu", body:"Ramonda sirup je hit kod dece. Limunada od lavande je osveženje kakvo nismo probali. Jedina zamerka je što je sezonski pa se brzo rasproda, ali to valjda znači da je dobar.", doe:"April 2026.", reply:"Hvala, Nikola. Pravimo u malim serijama pa ume brzo da nestane. Najavićemo sledeću turu. Bojan, Eden Origin"},
      {author:"Milica J.", loc:"Beograd, RS", nrev:4, rating:5, when:"11. apr 2026.", title:"Ručni rad koji se oseti", body:"Vidi se da je rađeno sa ljubavlju. Boja i miris su neverovatni, a ukus baš onakav kakav se očekuje od pravog domaćeg proizvoda. Preporučujem od srca.", doe:"April 2026.", reply:"Hvala vam od srca, Milica. Ovakve reči znače najviše. Ana, Eden Origin"}
    ]
  },
  html: {
    intro: `
    <div class="brief">
      <p class="brief__eyebrow">North Star Communications &middot; Predlog za Eden Origin</p>
      <h1>Uvod</h1>
      <p class="brief__lede">Ovaj predlog nije počeo od vašeg upita, počeo je od vašeg profila. Naišli smo na priču Eden Origina, na lavandu koju gajite i berete rukom u Milićevcima, na flašu ViolaVerde, na koktele i deserte, i pomislili da taj proizvod zaslužuje mesto na internetu koje je osmišljeno pažljivo koliko i on sam. Zato nismo hteli da vam opisujemo šta bismo radili, već smo jedan deo toga napravili, i to na vašem brendu.</p>
      <div style="border:1px solid var(--copper);background:var(--copper-tint);border-radius:12px;padding:1.05rem 1.25rem;margin:1.4rem 0">
        <span style="display:block;font-family:var(--font-display);font-weight:700;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--copper-dark);margin-bottom:.4rem">Napomena o sadržaju</span>
        <p style="margin:0;font-size:.92rem;line-height:1.6;color:#2a2a2f">Svi tekstovi i vizuali u ovom hubu polaze od vašeg originalnog sadržaja, od vaših objava, fotografija i priče. Deo vizuala je zatim obrađen uz pomoć veštačke inteligencije kako bismo brzo pokazali kako bi stranice izgledale, pa su to ilustrativni primeri i uzorak materijala, a ne finalna verzija. U pravom projektu sve bi bilo dodatno doterano ljudskom rukom, sa vašim originalnim fotografijama i vašim glasom. Objave u delu Organske objave prikazane su sa vašim izvornim slikama.</p>
      </div>
      <blockquote class="brief__quote">&bdquo;Da bismo ublažili jaku aromu lavande u miksologiji, prvi proizvod smo omekšali vanilom, a drugi borovnicom.&ldquo;<cite>Ana Tomašević, Eden Origin</cite></blockquote>
      <div class="brief__body">
        <p>Evo šta smo primetili i zbog čega smo vam se javili.</p>
        <p>Vaše objave su zaista dobre. Fotografije, polje lavande, čaša koja se puni, tanjir koji se servira, sve to već radi najteži deo posla, a to je da neko poželi vaš proizvod. Problem je što je objava samo trenutak. Neko lajkuje prelepu fotografiju Viola spritza, i tu se sve završava, jer nema recepta da se sačuva, nema stranice da se pročita, ni jasnog načina da se poruči.</p>
        <p>Prodaja ide preko oglasa na Ananasu, što je sasvim u redu za samu kupovinu, ali taj oglas ne može da ispriča priču, ne može da drži recepte, niti da povremenog pratioca pretvori u stalnog kupca. A pretraživači i veštačka inteligencija sve to i ne vide. Ovako prepoznatljiv brend postaje gotovo nevidljiv čim neko ukuca &bdquo;liker od lavande&ldquo; ili pita asistenta šta da ponese kao poklon.</p>
        <p>Zato zadatak nije da se pravi više objava. I sami ste rekli, objave su već sjajne. Zadatak je da im se da mesto na koje vode, a to je <b>sajt izgrađen oko vašeg postojećeg sadržaja, na koji svaka objava vodi i koji se završava porudžbinom.</b> Svaki recept koji ste već snimili postaje stranica, svaka stranica nosi proizvod i način da se kupi, a sve je napisano tako da vas pretraživači i veštačka inteligencija konačno pronađu.</p>
        <p><b>Sve u ovom hubu je napravljeno, a ne opisano.</b> Krenite od <b>Preporuka</b> da vidite razmišljanje iza svega. <b>Ko smo mi</b> i <b>Ključni ljudi</b> pokazuju sa kim biste zaista radili. <b>Sadržaj i sajt</b> su suština: klaster sadržaja koji vaše objave pretvara u put do kupovine, primeri članaka koji su već objavljeni na novom sajtu, i sam funkcionalni sajt. Na kraju, <b>Organske objave</b> pokazuju vaše prave objave sa Instagrama i Facebooka, svaku povezanu sa stranicom na koju bi vodila.</p>
        <p class="brief__aside">Vi ste izgradili i proizvod i publiku. Ovo je o tome da se to dvoje spoji, i da se jedan lajk pretvori u porudžbinu.</p>
      </div>
      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>North Star Communications. Pripremljeno za Eden Origin.</p></div>
    </div>
  `,
    recs: `
    <div class="brief">
      <p class="brief__eyebrow">North Star Communications &middot; Predlog za Eden Origin</p>
      <h1>Preporuke</h1>
      <p class="brief__lede">Ovo je obrazloženje za sve što je prikazano u ovom hubu. Nije spisak taktika, već jedan povezan sistem koji sadržaj koji već pravite pretvara u porudžbine, i čini Eden Origin nečim što pretraživači i veštačka inteligencija zaista mogu da pronađu. Evo šta bismo napravili i zašto svaki deo ima svoje mesto.</p>

      <div style="border-left:3px solid var(--copper);background:linear-gradient(180deg,var(--copper-tint),transparent);border-radius:0 12px 12px 0;padding:1.2rem 1.4rem;margin:1.6rem 0">
        <h3 style="font-family:var(--font-display);font-size:1.35rem;color:var(--charcoal);margin:0 0 .5rem">Zašto sada, a ne tek kada Shopify bude gotov</h3>
        <p style="margin:0 0 .6rem;font-size:.95rem;line-height:1.6;color:#2a2a2f">Znamo da već gradite prodavnicu na Shopify-ju i da to traje. Upravo zato bi ovaj sadržajni sajt trebalo pokrenuti odmah, paralelno, a ne čekati. Domen i sadržaj traže vreme da sazru u pretrazi, pa je svaki mesec čekanja mesec u kome vas Google i veštačka inteligencija praktično ne vide.</p>
        <p style="margin:0;font-size:.95rem;line-height:1.6;color:#2a2a2f">Ako sada objavite priču, recepte i stranice proizvoda, do trenutka kada Shopify prodavnica bude spremna vaš domen će već imati istoriju, poverenje i vidljivost, umesto da kreće od nule. Sadržajni sajt i buduća prodavnica se ne isključuju, jer sadržaj zagreva teren za prodaju koja tek dolazi. Kada Shopify bude spreman, ove iste stranice i posete se prirodno preusmere na njega.</p>
      </div>

      <div class="brief__sec">
        <p class="brief__num">01</p>
        <div class="brief__body">
          <h2>Gde ste danas</h2>
          <p>Imate nešto retko, a to je prepoznatljiv proizvod sa pravom pričom i publiku koja već reaguje. Digitalno prisustvo oko svega toga možda još ne prati koliko je priča jaka. Pogledali smo svaki deo onako kako bi to uradio novi kupac ili asistent veštačke inteligencije. Ovo je trenutni snimak i ponešto bi moglo da se promeni kako stvari idu, ali obrazac je jasan: odličan sadržaj koji nema kuda da vodi.</p>
          <div class="state">
            <div class="state__row"><div class="state__k">Instagram i Facebook</div><div class="state__v">Zaista jaki. Kadrovi iz polja lavande, Viola kokteli, deserti i letnja osveženja već navode ljude da požele proizvod. Problem je ono što dolazi posle, jer objava često bude kraj puta umesto početka, bez stranice koja se sačuva, bez recepta koji ostaje, a porudžbina je u najboljem slučaju udaljena dva ili tri koraka.</div></div>
            <div class="state__row"><div class="state__k">Sajt</div><div class="state__v">Nismo pronašli poseban sajt Eden Origina. To verovatno znači da priča o brendu, recepti i proizvodi žive samo unutar pojedinačnih objava, koje nestaju u feedu, i unutar oglasa na Ananasu, koji ništa od toga ne može da zadrži. Brend sa ovoliko sadržaja možda ostavlja najveći deo svoje vrednosti neiskorišćen.</div></div>
            <div class="state__row"><div class="state__k">Put do porudžbine</div><div class="state__v">Prodaja preko Ananasa je razuman početak i mi bismo je zadržali. Ali put od &bdquo;video sam lepu objavu&ldquo; do &bdquo;poručio sam&ldquo; izgleda da se oslanja na to da neko zapamti brend i kasnije ga potraži na marketplejsu. Svaki korak između interesovanja i kupovine je mesto na kome prodaja može tiho da se izgubi.</div></div>
            <div class="state__row"><div class="state__k">SEO i GEO</div><div class="state__v">Na nekoliko brzih pretraga za pojmove poput &bdquo;liker od lavande&ldquo; i &bdquo;pokloni od lavande&ldquo; nije bilo očigledno da se Eden Origin pojavljuje, mada to može zavisiti od same pretrage ili regiona. Bez sajta, pretraživači imaju malo šta da rangiraju, a asistentu veštačke inteligencije gotovo ništa struktuirano da pročita ili citira kada neko traži poklon ili koktel. Ono najprepoznatljivije kod vas moglo bi biti i najteže za pronaći.</div></div>
            <div class="state__row"><div class="state__k">Mediji i dokazi</div><div class="state__v">Osvojili ste pravu medijsku pažnju i grant od deset hiljada funti u konkurenciji od osamdeset prijavljenih. To je snažan znak poverenja, ali izgleda da živi u nekoliko članaka, a ne na mestu koje je vaše. Sakupljeno i lepo predstavljeno na sopstvenom sajtu, moglo bi da radi mnogo više.</div></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">02</p>
        <div class="brief__body">
          <h2>Strategija: pretvoriti objave u stranice, a stranice u porudžbine</h2>
          <p>Cilj je jednostavan, prodati više flaša ljudima kojima se već sviđa ono što vide. To ne postiže nijedna pojedinačna taktika. Potreban je vaš sadržaj, mesto na koje sleti, i jasan put do kupovine, sve povezano u jedan sistem.</p>
          <p><b>Dajte svakoj objavi kuda da vodi.</b> Sadržaj koji pravite je zlato na vrhu levka, samo mu nedostaje odredište. Zato prvo gradimo odredište, sajt na kome svaki recept, svaka priča iz polja i svaki proizvod imaju svoju stranicu, i na kome svaka stranica nosi proizvod i način da se poruči.</p>
          <p><b>Odgovorite na pravo pitanje, pa onda prodajte.</b> Ljudi ne pretražuju &bdquo;liker&ldquo;, oni pretražuju &bdquo;koktel od lavande&ldquo;, &bdquo;šta pokloniti&ldquo;, &bdquo;recept sa lavandom&ldquo;. Mi pišemo stranice oko tih pitanja, prilagođene načinu na koji ljudi zaista traže, a proizvod prirodno putuje unutar odgovora. To je verzija za hranu i piće onog pravila da se prvo istakne korisna stvar, a ne spisak osobina.</p>
          <p><b>Neka bude čitljivo i za mašine.</b> Trajan način da vas pronađu danas jeste da budete zaista laki za iščitavanje: stranica po pitanju, recepti i proizvodi obeleženi struktuiranim podacima tako da ih Google prikaže kao bogate rezultate, a asistent veštačke inteligencije pročita i preporuči. Za struktuiran sadržaj se navodi da se prikazuje i citira znatno češće nego iste reči u opisu ispod objave.</p>
          <p><b>Neka to bude vaše.</b> Oglas na marketplejsu je iznajmljen prostor. Sajt, njegov sadržaj i vidljivost u pretrazi su vaši, i nastavljaju da rade i pošto pojedinačna objava odavno nestane u feedu.</p>
          <p class="brief__aside">Svaka stavka u ovom hubu ima ulogu u tom sistemu, ili dokazuje da je sistem proradio.</p>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">03</p>
        <div class="brief__body">
          <h2>Šta bismo napravili</h2>
          <p>Svaka celina u ovom hubu odgovara na tačno određenu prazninu iz prethodnog dela, i na tačno određen razlog zbog kog pomera stvari napred.</p>
          <div class="ledger">
            <div class="ledger__head"><span>Celina</span><span>Danas</span><span>Šta gradimo</span><span>Zašto bi uspelo</span></div>
            <div class="ledger__row"><span class="lg-seg">Sajt</span><span class="lg-now">Nema posebnog sajta, priča i recepti žive samo u objavama.</span><span class="lg-build">Butik sajt na srpskom: priča o brendu, stranice proizvoda i biblioteka recepata, gde je svaka stranica napravljena da nosi proizvod i porudžbinu.</span><span class="lg-why">Razbacane objave pretvara u imovinu koja je vaša, koja se pronalazi, čuva i kupuje.</span></div>
            <div class="ledger__row"><span class="lg-seg">Stranice proizvoda</span><span class="lg-now">Samo oglas na Ananasu, koji ne može da ispriča priču.</span><span class="lg-build">Stranica po proizvodu (ViolaVerde vanila i borovnica, Ramonda sirup) sa načinom nastanka, služenjem i jasnim dugmetom za porudžbinu na Ananasu.</span><span class="lg-why">Daje svakom receptu i svakoj objavi proizvod na koji vode, i kupovinu na jedan klik.</span></div>
            <div class="ledger__row"><span class="lg-seg">Klaster sadržaja</span><span class="lg-now">Sjajne objave koje ništa ne povezuje.</span><span class="lg-build">Klaster u kome recepti i vodiči vode ka stranici proizvoda, koja vodi ka porudžbini, a sve to pojačavaju objave koje ionako pravite.</span><span class="lg-why">Struktura koja povremenog pratioca vodi od fotografije koktela do porudžbine.</span></div>
            <div class="ledger__row"><span class="lg-seg">SEO i GEO</span><span class="lg-now">Malo toga za rangiranje, ništa struktuirano za veštačku inteligenciju.</span><span class="lg-build">Šeme za recepte, proizvode i organizaciju, stranice vođene pitanjima, i priča i mediji predstavljeni kao proverljive činjenice.</span><span class="lg-why">Bogati rezultati u Google-u i odgovori koje asistent veštačke inteligencije može da citira kada neko traži poklon ili koktel.</span></div>
            <div class="ledger__row"><span class="lg-seg">Organske objave</span><span class="lg-now">Prelepe, ali svaka je slepa ulica.</span><span class="lg-build">Iste objave, sada svaka sa odredištem: link u opisu profila i po objavi ka tačno onoj stranici kojoj pripada.</span><span class="lg-why">Svaka objava koju ste već napravili počinje da radi kao vrata ka prodavnici, a ne samo kao trenutak u feedu.</span></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">04</p>
        <div class="brief__body">
          <h2>Kako se sve to sabira u više porudžbina</h2>
          <p>Vaš cilj je jasan, više prodatih flaša ljudima kojima se već sviđa kako sve to izgleda. Sve ovde vodi ka tome, a delovi najbolje rade zajedno, a ne pojedinačno. Sve teče kao jedan put.</p>
          <p>Da vas pronađu, tu su sajt i biblioteka recepata napisani onako kako ljudi zaista pretražuju, struktuirani tako da ih Google i veštačka inteligencija čitaju, pa na vas naiđe više onih koji bi zavoleli ViolaVerde. Da vas sačuvaju, tu su recepti i priča vredni čuvanja, tako da usputni lajk postane obeležena stranica i novi dolazak. Da kupe, tu je svaka stranica koja nosi proizvod i jasno dugme za porudžbinu na Ananasu, pa se interesovanje pretvara u kupovinu u jednom koraku umesto u tri. I da se to nagomilava, jer svaka objava sada vodi na stranicu, svaka stranica drži svoju poziciju u pretrazi, i celina nastavlja da radi dugo pošto objava nestane.</p>
          <p>Svaki deo hrani sledeći. Sačuvan recept može nekog da vrati, dobro rangirana stranica može da dopre do nekog novog, a jasno dugme za porudžbinu i jedno i drugo pretvara u prodaju. Ništa ovde ne iznajmljuje svoju poziciju, već gradi imovinu koja je vaša i koja nastavlja da zarađuje i kad pojedinačna objava odavno prođe.</p>
          <p class="brief__aside">Redosled bismo postavili tako da prve stignu najbrže pobede, sajt i stranice proizvoda, pa potom klaster recepata i linkovi po objavi, tako da vaša postojeća publika dobije kuda da ode za nedelje, a ne mesece.</p>
        </div>
      </div>

      <div class="brief__foot">
        <div class="brief__star" aria-hidden="true"></div>
        <p>North Star Communications. Pripremljeno za Eden Origin. Primeri sadržaja u ovom hubu su ilustrativni do potvrde.</p>
      </div>
    </div>
  `,
    who: `
    <div class="brief">
      <p class="brief__eyebrow">North Star Communications &middot; Predlog za Eden Origin</p>
      <h1>Ko smo mi</h1>
      <p class="brief__lede">North Star Communications pomaže organizacijama da zatvore jaz između onoga što jesu i načina na koji to saopštavaju. Radimo u trenucima kada komunikacija postane važna, i ostajemo dovoljno blizu vašem timu da rad deluje iskreno, a ne fabrički. Sve što vašem poslu treba, na jednom mestu.</p>

      <div class="brief__sec">
        <p class="brief__num">01</p>
        <div class="brief__body">
          <h2>Kako razmišljamo</h2>
          <p>Slušamo, učimo, prilagođavamo se i isporučujemo. Taj ritam drže na okupu četiri vrednosti koje odlučuju kako pravimo ustupke kada posao postane težak.</p>
          <div class="vals">
            <div class="val"><b>Čovek na prvom mestu</b><span>Tehnologija zbližava ljude, ali ne zamenjuje odnos koji je u srcu dobre komunikacije.</span></div>
            <div class="val"><b>Bez razdaljine</b><span>Najbolja komunikacija se ne primećuje. Radimo na tome da vrednost teče u oba smera, bez trenja i bez šuma.</span></div>
            <div class="val"><b>Održiv rast</b><span>Brzo nije isto što i zdravo. Gradimo rast koji prati vaše kapacitete i koji se vremenom nagomilava.</span></div>
            <div class="val"><b>Otporni rezultati</b><span>Tržišta se menjaju i planovi se menjaju. Posao je osmišljen tako da svaki rezultat ojača sledeći.</span></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">02</p>
        <div class="brief__body">
          <h2>Kako radimo</h2>
          <p>Počinjemo tako što razjasnimo dve stvari, koga želite da dosegnete i šta zaista želite da ti ljudi urade. Zvuči očigledno, ali većina marketinga podbaci baš zato što je jedno od to dvoje bilo maglovito od samog početka. Mi ih postavimo kako treba pre nego što potrošimo dinar vašeg budžeta.</p>
          <p>Odatle radimo u malim, zaokruženim koracima, a ne po jednom dugačkom planu koji morate da odobrite unapred. Stavimo nešto stvarno pred vašu publiku, gledamo šta zaista rade, i zadržavamo ono što funkcioniše dok odbacujemo ono što ne. Svaki korak nas nauči nečemu što nosimo u sledeći, pa posao postaje sve oštriji kako ide, a vi vidite da se isplati usput. Krenemo fokusirano, dokažemo da radi, i širimo tek kada rezultati to potvrde.</p>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">03</p>
        <div class="brief__body">
          <h2>Šta radimo</h2>
          <p>Sedam linija usluga, koje kombinujemo onako kako posao traži. Ovaj angažman se najviše oslanja na sadržaj i kopirajting, izradu sajtova i aplikacija, digitalni marketing i dizajn i produkciju.</p>
          <div class="svc">
            <div class="svc__row"><div class="svc__name">Istraživanje i strategija</div><div class="svc__desc">Razumemo vaše tržište i vašu publiku, pa to pretvorimo u plan koji vas pomera napred.<span class="svc__tags">Analiza konkurencije &middot; istraživanje publike &middot; pozicioniranje &middot; strategija</span></div></div>
            <div class="svc__row"><div class="svc__name">Sadržaj i kopirajting</div><div class="svc__desc">Reči i priče koje zaslužuju pažnju i pretvaraju čitaoce u kupce.<span class="svc__tags">Pripovedanje &middot; SEO i GEO tekstovi &middot; recepti i članci &middot; prodajni tekstovi</span></div></div>
            <div class="svc__row"><div class="svc__name">Izrada sajtova i aplikacija</div><div class="svc__desc">Gradimo sajtove i prodavnice koje vaši kupci koriste, brze, pouzdane i napravljene da prodaju.<span class="svc__tags">Sajtovi &middot; stranice proizvoda &middot; lending stranice &middot; prodaja i integracije</span></div></div>
            <div class="svc__row"><div class="svc__name">Digitalni marketing</div><div class="svc__desc">Dosegnemo prave ljude kroz pretragu i društvene mreže, i taj domet pretvorimo u rezultate.<span class="svc__tags">SEO i GEO &middot; društvene mreže &middot; Meta oglasi &middot; Google oglasi</span></div></div>
            <div class="svc__row"><div class="svc__name">Dizajn i produkcija</div><div class="svc__desc">Sve to oživljavamo dizajnom i videom napravljenim za mesta na kojima ljudi zaista gledaju.<span class="svc__tags">Video &middot; grafički dizajn &middot; ambalaža i etikete &middot; produkcija</span></div></div>
            <div class="svc__row"><div class="svc__name">Brendiranje</div><div class="svc__desc">Oblikujemo kako izgledate i za šta stojite, tako da vas prepoznaju i pamte.<span class="svc__tags">Vizuelni identitet &middot; pripovedanje &middot; smernice &middot; misija, vizija i vrednosti</span></div></div>
            <div class="svc__row"><div class="svc__name">Odnosi s javnošću</div><div class="svc__desc">Vodimo brigu o tome kako vas svet vidi, od svakodnevne reputacije do trenutaka koji najviše znače.<span class="svc__tags">Upravljanje reputacijom &middot; saopštenja &middot; prezentacije &middot; krizno komuniciranje</span></div></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">04</p>
        <div class="brief__body">
          <h2>S kim smo radili</h2>
          <p>Izbor brendova i organizacija za koje je naš tim isporučivao rezultate, od softverskih startapa do globalnih potrošačkih imena.</p>
          <div class="cwall" id="whoWall"></div>
        </div>
      </div>

      <div class="brief__foot">
        <div class="brief__star" aria-hidden="true"></div>
        <p>North Star Communications. Pripremljeno za Eden Origin.</p>
      </div>
    </div>
  `,
    people: `
    <div class="brief">
      <p class="brief__eyebrow">North Star Communications &middot; Predlog za Eden Origin</p>
      <h1>Ključni ljudi</h1>
      <p class="brief__lede">Radili biste direktno sa ljudima koji slede. Ne sa menadžerom naloga koji prenosi poruke timu koji nikada ne upoznate, već sa ljudima koji zaista razmišljaju i rade.</p>
      <div class="people">
        <div class="person">
          <div class="person__av"><img src="assets/people/milos.jpg" alt="Miloš Milosavljević"></div>
          <div class="person__body">
            <h3>Miloš Milosavljević</h3>
            <p class="person__role">Osnivač i direktor, North Star Communications</p>
            <p class="person__bio">Miloš više od dvadeset godina pretvara složene ideje u jasne, ljudske priče, kroz novinarstvo, medije, neprofitni sektor, softver, HR tehnologiju i B2B. Voli trenutak kada se zamršen problem konačno složi u jednostavan plan iza kog ceo tim može da stane, i izgradio je platforme, proizvode i kampanje koje pokazuju da to u praksi radi. Klijenti kod njega obično cene iste tri stvari: sistemski um koji povezuje proizvod, poruku i iskustvo, dar da teške stvari kaže jednostavno, i naviku da ljude povede sa sobom umesto da ih ostavi za sobom. Rad drži prizemljen u pravom istraživanju, oštrom pozicioniranju i jasnom putu do tržišta.</p>
          </div>
        </div>
        <div class="person">
          <div class="person__av"><img src="assets/people/tijana.jpg" alt="Tijana Damjanović Gertner"></div>
          <div class="person__body">
            <h3>Tijana Damjanović Gertner</h3>
            <p class="person__role">Partnerka i operativna direktorka, North Star Communications</p>
            <p class="person__bio">Tijana je marketar kome jednako dobro leže i postavljanje strategije i zasukivanje rukava da se ona sprovede. Spaja kreativni instinkt sa oštrim poslovnim umom, kroz vizuelni identitet, SEO i sadržaj, i kampanje kroz ceo levak napravljene da donesu pravi posao. Organizovala je i promovisala događaje na najvećoj sceni, uključujući izbor za Mis Univerzuma, i osvežavajuće je iskrena sa klijentima, jer će vam reći šta bi uradila, pokazati zašto to radi i pomoći vam da izbegnete skupe greške. Vodite računa o svojim ljudima i budite pošteni prema klijentima, i ona je čvrsto na vašoj strani.</p>
          </div>
        </div>
      </div>
      <div class="brief__foot">
        <div class="brief__star" aria-hidden="true"></div>
        <p>North Star Communications. Pripremljeno za Eden Origin.</p>
      </div>
    </div>
  `,
    website: `
    <iframe src="website/" title="Eden Origin website prototype, built by North Star"></iframe>
  `,
    cluster: `
    <div class="cluster">
      <h1>Klaster sadržaja: od vaših objava do porudžbine</h1>
      <p class="lede">Ovo je motor celog predloga. Vaše <strong>objave na Instagramu i Facebooku</strong> već privlače pažnju. Klaster svakoj daje kuda da vodi: <strong>stranicu recepta ili vodiča</strong> izvedenu iz te objave, koja vodi ka <strong>stranici proizvoda</strong>, koja vodi ka <strong>porudžbini na Ananasu</strong>. Prikazano ispod za jedan proizvod, <strong>ViolaVerde vanila</strong>. Čvorovi otvaraju prave, žive stranice na novom sajtu.</p>
      <div class="diagram">
        <svg viewBox="0 0 1180 660" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arw" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto"><path d="M0,0 L6.5,3 L0,6 Z" fill="#b8b8c0"/></marker>
            <marker id="arwC" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto"><path d="M0,0 L6.5,3 L0,6 Z" fill="#c19a4b"/></marker>
            <marker id="arwB" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto"><path d="M0,0 L6.5,3 L0,6 Z" fill="#6b4e8c"/></marker>
          </defs>
          <text class="col-label" x="30" y="32">Vaše objave &middot; Instagram i Facebook</text>
          <text class="col-label" x="470" y="278">Stranica proizvoda</text>
          <text class="col-label" x="900" y="286">Porudžbina</text>

          <path class="wire" marker-end="url(#arw)" d="M330 164 C 400 164, 405 350, 462 350"/>
          <path class="wire" marker-end="url(#arw)" d="M330 345 C 405 345, 410 350, 462 350"/>
          <path class="wire" marker-end="url(#arw)" d="M330 526 C 400 526, 405 350, 462 350"/>
          <path class="wire--crm" marker-end="url(#arwC)" d="M720 350 C 785 350, 795 350, 852 350"/>

          <foreignObject x="30" y="110" width="300" height="108"><div xmlns="http://www.w3.org/1999/xhtml" class="node node--case"><a class="node__link" href="website/recepti/viola-spritz/" target="_blank" rel="noopener"><span class="node__tag">Post &rarr; Recept</span><span class="node__title">Viola spritz koktel</span></a><a class="node__social" href="#social"><span class="pf pf--ig">◉</span> Instagram post &rarr;</a></div></foreignObject>
          <foreignObject x="30" y="291" width="300" height="108"><div xmlns="http://www.w3.org/1999/xhtml" class="node node--case"><a class="node__link" href="website/vodic/kako-nastaje-liker-od-lavande/" target="_blank" rel="noopener"><span class="node__tag">Post &rarr; Vodič</span><span class="node__title">Kako nastaje liker od lavande</span></a><a class="node__social" href="#social"><span class="pf pf--ig">◉</span> Reel iz berbe &rarr;</a></div></foreignObject>
          <foreignObject x="30" y="472" width="300" height="108"><div xmlns="http://www.w3.org/1999/xhtml" class="node node--case"><a class="node__link" href="website/recepti/lavanda-cheesecake/" target="_blank" rel="noopener"><span class="node__tag">Post &rarr; Desert</span><span class="node__title">Čizkejk od lavande</span></a><a class="node__social" href="#social"><span class="pf pf--fb">f</span> Facebook post &rarr;</a></div></foreignObject>

          <foreignObject x="470" y="290" width="250" height="120"><a xmlns="http://www.w3.org/1999/xhtml" class="node node--lp node__link" href="website/proizvodi/violaverde-vanila/" target="_blank" rel="noopener"><span class="node__tag">Stranica proizvoda</span><span class="node__title">ViolaVerde vanila</span><span class="node__meta">Svaki deo vodi ovde &rarr;</span></a></foreignObject>
          <foreignObject x="860" y="298" width="250" height="105"><a xmlns="http://www.w3.org/1999/xhtml" class="node node--crm node__link" style="border-style:solid;cursor:pointer" href="https://ananas.rs/prodavnica/eden-origin" target="_blank" rel="noopener"><span class="node__tag">Poruči &middot; ananas.rs</span><span class="node__title">Porudžbina</span><span class="node__meta">Dostava za 48h &rarr;</span></a></foreignObject>
        </svg>
      </div>
      <div class="legend">
        <span><span class="swatch" style="background:#fff;border:1px solid var(--hairline)"></span> Objava &rarr; izvedena stranica</span>
        <span><span class="swatch" style="background:var(--charcoal)"></span> Stranica proizvoda</span>
        <span><span class="swatch" style="background:var(--copper-tint);border:2px dashed var(--copper)"></span> Porudžbina (ananas.rs)</span>
        <span><span class="pf pf--ig" style="width:15px;height:15px">◉</span> Po jedna postojeća objava za svaki deo</span>
      </div>
      <div class="cluster-note"><strong>Kako radi:</strong> objava sa receptom, snimak iz berbe i objava sa desertom vode ka stranicama koje smo iz njih izveli, a svaka od tih stranica vodi ka stranici proizvoda <strong>ViolaVerde vanila</strong>, koja nosi <strong>dugme za porudžbinu na Ananasu</strong>. Vaši ostali proizvodi (ViolaVerde borovnica, Ramonda sirup) rade na isti način. Čvorovi otvaraju prave, žive stranice. Suština je da nove objave nisu potrebne, jer one koje već imate konačno vode negde.</div>
    </div>
  `,
    articles: `
    <style>
      .art-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:1rem;margin:1.6rem 0 2.5rem}
      .art-card{border:1px solid var(--hairline);border-radius:12px;background:#fff;padding:1.05rem 1.15rem;display:flex;flex-direction:column;gap:.4rem}
      .art-card--lead{border-color:var(--copper);box-shadow:0 12px 32px -22px rgba(0,0,0,.45)}
      .art-card__type{font-size:.66rem;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:var(--copper-dark)}
      .art-card b{color:var(--charcoal);font-size:.98rem;line-height:1.25}
      .art-card p{font-size:.83rem;color:var(--ink-muted);line-height:1.45;margin:0}
      .art-card__move{font-size:.73rem;color:var(--charcoal);opacity:.72;margin-top:auto;padding-top:.4rem;font-style:italic}
      .article{border:1px solid var(--hairline);border-radius:14px;background:#fff;overflow:hidden;max-width:820px}
      .article__head{padding:1.8rem 2rem 1.4rem;border-bottom:1px solid var(--hairline);background:linear-gradient(180deg,#fafafa,#fff)}
      .article__kicker{font-size:.68rem;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:var(--copper-dark)}
      .article__head h2{font-family:var(--font-display);font-weight:400;font-size:1.9rem;line-height:1.12;color:var(--charcoal);margin:.4rem 0 .5rem;text-transform:none}
      .article__dek{font-size:1rem;color:var(--ink-muted);line-height:1.5;margin:0 0 1.1rem}
      .article__byline{display:flex;align-items:center;gap:.75rem}
      .article__av{width:44px;height:44px;border-radius:50%;background:var(--charcoal);color:#F4F1EA;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.9rem;flex:0 0 auto}
      .article__byline b{display:block;font-size:.85rem;color:var(--charcoal)}
      .article__byline span{font-size:.76rem;color:var(--ink-muted)}
      .article__body{padding:1.6rem 2rem}
      .article__body h3{font-size:1.15rem;color:var(--charcoal);margin:1.5rem 0 .5rem}
      .article__body p,.article__body li{font-size:.94rem;line-height:1.6;color:#2a2a2f}
      .article__body ul,.article__body ol{margin:.5rem 0 .5rem 1.1rem;display:flex;flex-direction:column;gap:.3rem}
      .recipe-card{margin:0 2rem 1.4rem;border:1px solid var(--hairline);border-radius:10px;overflow:hidden}
      .recipe-card__label{background:var(--charcoal);color:#F4F1EA;font-size:.75rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:.6rem .9rem;display:flex;justify-content:space-between;align-items:center;gap:1rem}
      .recipe-card__label span{font-weight:600;text-transform:none;letter-spacing:0;opacity:.75;font-size:.72rem}
      .recipe-card__b{padding:.85rem .9rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem}
      .recipe-card__b b{display:block;color:var(--charcoal);font-size:.85rem;margin-bottom:.3rem}
      .recipe-card__b p{margin:0;font-size:.84rem;color:var(--ink-muted);line-height:1.5}
      .article__schema{margin:0 2rem 1.9rem}
      .article__schema-h{font-size:.72rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--copper-dark);margin-bottom:.5rem}
      .article__schema pre{background:#2c2340;color:#e7dcf7;border-radius:10px;padding:1rem 1.1rem;overflow:auto;font-size:.78rem;line-height:1.5;margin:0}
      .article__schema code{font-family:ui-monospace,Menlo,Consolas,monospace}
      .article__schema-note{font-size:.8rem;color:var(--ink-muted);line-height:1.5;margin-top:.7rem}
    </style>
    <div class="cluster">
      <h1>Primeri članaka</h1>
      <p class="lede">Pet stranica koje bismo objavili na vašem brendu, na srpskom, svaka izvedena iz objave koju ste već napravili i svaka vodi ka porudžbini. Ovo nisu makete, jer je svaka <strong>napravljena i živa</strong> na novom sajtu (pogledajte karticu <b>Sajt</b>). Prva je prikazana <strong>u celini</strong> ispod, a svaka kartica vodi na svoju živu stranicu.</p>

      <div class="art-cards">
        <div class="art-card art-card--lead">
          <span class="art-card__type">Recept &middot; koktel</span>
          <b>Viola spritz: koktel od lavande</b>
          <p>Vaša letnja objava o koktelu, pretvorena u stranicu sa merama, šemom za recept i dugmetom za porudžbinu. Prikazana u celini ispod.</p>
          <span class="art-card__move">Potez: posebna stranica vođena pitanjem &middot; šema za recept &middot; proizvod ugrađen u odgovor</span>
          <a href="website/recepti/viola-spritz/" target="_blank" rel="noopener" style="font-family:var(--font-display);font-weight:700;font-size:.8rem;color:var(--copper-dark)">Otvori živu stranicu ↗</a>
        </div>
        <div class="art-card">
          <span class="art-card__type">Vodič &middot; proces</span>
          <b>Kako nastaje liker od lavande</b>
          <p>Priča o berbi i maceraciji, potpisana od strane imenovanog proizvođača, tako da je pretraga i veštačka inteligencija mogu pripisati i verovati joj.</p>
          <span class="art-card__move">Potez: potpisi autora sa proverljivim kredibilitetom</span>
          <a href="website/vodic/kako-nastaje-liker-od-lavande/" target="_blank" rel="noopener" style="font-family:var(--font-display);font-weight:700;font-size:.8rem;color:var(--copper-dark)">Otvori živu stranicu ↗</a>
        </div>
        <div class="art-card">
          <span class="art-card__type">Vodič &middot; pokloni</span>
          <b>Pokloni od lavande: ideje za svaku priliku</b>
          <p>Napravljena za pretragu sa jasnom namerom (&bdquo;pokloni od lavande&ldquo;), vodi one koji biraju poklon pravo do prave zapremine i porudžbine.</p>
          <span class="art-card__move">Potez: stranice oko onoga što kupci zaista pretražuju</span>
          <a href="website/vodic/pokloni-od-lavande/" target="_blank" rel="noopener" style="font-family:var(--font-display);font-weight:700;font-size:.8rem;color:var(--copper-dark)">Otvori živu stranicu ↗</a>
        </div>
        <div class="art-card">
          <span class="art-card__type">Recept &middot; desert</span>
          <b>Čizkejk od lavande sa ViolaVerde prelivom</b>
          <p>Vaša objava o desertu kao pun recept koji koristi proizvod u pripremi, pa napraviti ga znači imati flašu.</p>
          <span class="art-card__move">Potez: sadržaj u kome je proizvod sastojak</span>
          <a href="website/recepti/lavanda-cheesecake/" target="_blank" rel="noopener" style="font-family:var(--font-display);font-weight:700;font-size:.8rem;color:var(--copper-dark)">Otvori živu stranicu ↗</a>
        </div>
        <div class="art-card">
          <span class="art-card__type">Bez alkohola</span>
          <b>Limunada od lavande</b>
          <p>Bezalkoholna verzija koja brend otvara porodicama i vozačima, i vodi ka Ramonda sirupu.</p>
          <span class="art-card__move">Potez: proširiti publiku bez razvodnjavanja brenda</span>
          <a href="website/recepti/lavanda-limunada/" target="_blank" rel="noopener" style="font-family:var(--font-display);font-weight:700;font-size:.8rem;color:var(--copper-dark)">Otvori živu stranicu ↗</a>
        </div>
      </div>

      <article class="article">
        <div class="article__head">
          <span class="article__kicker">Primer članka &middot; prikazan u celini</span>
          <h2>Viola spritz: koktel od lavande za leto</h2>
          <p class="article__dek">Osvežavajući letnji spritz sa ViolaVerde likerom od lavande, penušavim vinom i tonikom. Leto u čaši za manje od par minuta.</p>
          <div class="article__byline">
            <div class="article__av" aria-hidden="true">EO</div>
            <div>
              <b>Eden Origin &middot; Milićevci kraj Čačka</b>
              <span>Recept sa Instagrama, sada sa merama i dugmetom za poručivanje.</span>
            </div>
          </div>
        </div>

        <div class="article__body">
          <p>Ako postoji jedan koktel koji predstavlja Eden Origin, to je Viola spritz. Ljubičasta boja, miris lavande i mehurići, leto u čaši. Lavandu ovde ne osećate kao sapun, jer je vanila u ViolaVerde likeru već omekšala.</p>
          <h3>Zašto baš ovaj koktel</h3>
          <p>Viola spritz je najlakši način da prvi put probate liker od lavande. Sastojci se nalaze u svakoj kući, priprema traje tri minuta, a rezultat izgleda kao sa razglednice. To je i post koji se na vašem Instagramu najviše deli, pa smo ga pretvorili u stranicu na koju taj post može da vodi.</p>
        </div>

        <div class="recipe-card">
          <div class="recipe-card__label">Recept: Viola spritz <span>isporučuje se sa Recipe šemom</span></div>
          <div class="recipe-card__b">
            <div><b>Sastojci</b><p>5 cl ViolaVerde likera &middot; 10 cl penušavog vina &middot; 3 cl tonika &middot; led &middot; grančica lavande i kriška limete</p></div>
            <div><b>Priprema (3 min)</b><p>Napunite čašu ledom. Ulijte liker, pa penušavo vino. Dopunite tonikom i lagano promešajte. Ukrasite lavandom i limetom.</p></div>
          </div>
        </div>

        <div class="article__body" style="padding-top:0">
          <p>Nemate ViolaVerde? Flaša od 0,5 l stiže za 48 sati preko Ananasa, i dovoljna je za desetak koktela. Dugme za poručivanje stoji odmah ispod recepta na živoj stranici.</p>
        </div>

        <div class="article__schema">
          <div class="article__schema-h">Struktuirani podaci koji idu uz ovu stranicu</div>
          <pre><code>{
  "@context": "https://schema.org",
  "@type": "Recipe",
  "name": "Viola spritz: koktel od lavande",
  "recipeIngredient": [
    "5 cl ViolaVerde likera od lavande",
    "10 cl penušavog vina (prosecco)",
    "3 cl tonik vode"
  ],
  "recipeInstructions": [ /* koraci ... */ ],
  "author": { "@type": "Organization", "name": "Eden Origin" }
}</code></pre>
          <p class="article__schema-note">Recipe šema omogućava Google-u da ovo prikaže kao bogat rezultat (fotografija, vreme, ocena), a asistentu veštačke inteligencije da ga pročita i preporuči kada neko traži koktel od lavande. Vidljivi tekst i šema se drže usklađeni, i proveravaju pre objave.</p>
        </div>
      </article>
    </div>
  `,
    social: `
    <style>
      .soc-head{margin-bottom:1.3rem}
      .ig-feed{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.25rem;align-items:start}
      .ig-post{border:1px solid var(--hairline);border-radius:14px;background:#fff;overflow:hidden;box-shadow:0 1px 2px rgba(0,0,0,.05)}
      .ig-post__head{display:flex;align-items:center;gap:.6rem;padding:.7rem .85rem}
      .ig-post__av{width:38px;height:38px;border-radius:50%;flex:0 0 auto;background:linear-gradient(135deg,#5b4b8a,#6b4e8c);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.8rem}
      .ig-post__who{flex:1;min-width:0}
      .ig-post__who b{display:block;font-size:.85rem;color:var(--charcoal);line-height:1.15}
      .ig-post__who span{font-size:.72rem;color:var(--ink-muted)}
      .ig-post__pf{width:24px;height:24px;border-radius:6px;color:#fff;font-weight:700;font-size:.72rem;display:flex;align-items:center;justify-content:center;flex:0 0 auto}
      .ig-post__pf.ig{background:linear-gradient(135deg,#a63f9c,#e26a4d)}
      .ig-post__pf.fb{background:#1877f2}
      .ig-post__media{aspect-ratio:1;display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--font-display);font-size:1.3rem;text-align:center;padding:1rem;position:relative;overflow:hidden;background:#2c2340}
      .ig-post__media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
      .ig-post__cap{padding:.65rem .85rem;font-size:.85rem;line-height:1.45;color:#2a2a2f}
      .ig-post__cap b{color:var(--charcoal)}
      .ig-post__link{display:flex;align-items:center;gap:.5rem;margin:.2rem .85rem .9rem;padding:.6rem .75rem;border:1px dashed var(--copper);border-radius:9px;background:var(--copper-tint);font-size:.8rem;color:var(--copper-dark);font-weight:700;text-decoration:none}
      .ig-post__link:hover{background:#fff}
      .ig-post__foot{display:flex;gap:1rem;padding:.5rem .85rem;border-top:1px solid var(--hairline);font-size:.76rem;color:var(--ink-muted)}
    </style>
    <div class="social">
      <div class="soc-head">
        <h1>Organske objave</h1>
        <p class="lede">Zamolili ste nas da ne pišemo nove objave, jer su vaše već sjajne, i slažemo se. Zato ovo nisu makete. To su vaše <strong>prave objave</strong>, preuzete sa <strong>@eden.origin</strong> (11,1 hiljada pratilaca) i vaše Facebook strane, sa izvornim slikama i pravim opisima. Svaka je povezana sa stranicom na novom sajtu na koju bi <strong>vodila</strong>. Ta jedna veza je promena, jer objava prestaje da bude slepa ulica i postaje početak puta do porudžbine. Isprekidana veza na svakoj kartici pokazuje odredište, a &bdquo;Otvori original&ldquo; otvara pravu objavu.</p>
      </div>
      <span id="artFilter" hidden></span>
      <div class="ig-feed">

        <div class="ig-post">
          <div class="ig-post__head"><div class="ig-post__av">EO</div><div class="ig-post__who"><b>eden.origin</b><span>Reel &middot; pre 2 dana</span></div><span class="ig-post__pf ig">◉</span></div>
          <div class="ig-post__media"><img src="assets/social/kissa10.jpg" alt="Bezalkoholni ViolaVerde serve u @kissa10.bg"></div>
          <div class="ig-post__cap"><b>eden.origin</b> 🍇🫧 U @kissa10.bg svaki korak pripreme pažljivo je osmišljen kako bi se sačuvala puna aroma lavande. Lagan, osvežavajući i potpuno bezalkoholni napitak koji se služi preko leda i završava bobicama mariniranog grožđa.</div>
          <a class="ig-post__link" href="website/proizvodi/violaverde-vanila/" target="_blank" rel="noopener">→ vodi na: Stranica proizvoda ViolaVerde</a>
          <div class="ig-post__foot"><span>&#9825; 72</span><span>&#128172; 9</span><a href="https://www.instagram.com/eden.origin/reel/DayHwAwoQ8h/" target="_blank" rel="noopener" style="margin-left:auto;color:var(--copper-dark);font-weight:700">Otvori original ↗</a></div>
        </div>

        <div class="ig-post">
          <div class="ig-post__head"><div class="ig-post__av">EO</div><div class="ig-post__who"><b>eden.origin</b><span>Reel &middot; 30. jun</span></div><span class="ig-post__pf ig">◉</span></div>
          <div class="ig-post__media"><img src="assets/social/angustifolia.jpg" alt="Bojan sa ViolaVerde flašom u polju lavande"></div>
          <div class="ig-post__cap"><b>eden.origin</b> 🚀 Ovde sve počinje. Angustifolia vera, zbog svoje aromatičnosti, važna je za pčele i druge polinatore. Od iste vrste lavande nastaju ViolaVerde i Ramonda. Neke stvari ne mogu i ne treba da se ubrzaju. Samo se neguju, sezonu za sezonom.</div>
          <a class="ig-post__link" href="website/vodic/kako-nastaje-liker-od-lavande/" target="_blank" rel="noopener">→ vodi na: Kako nastaje liker od lavande</a>
          <div class="ig-post__foot"><span>&#9825; 1.008</span><span>&#128172; 14</span><a href="https://www.instagram.com/eden.origin/reel/DaOKIYnIB0D/" target="_blank" rel="noopener" style="margin-left:auto;color:var(--copper-dark);font-weight:700">Otvori original ↗</a></div>
        </div>

        <div class="ig-post">
          <div class="ig-post__head"><div class="ig-post__av">EO</div><div class="ig-post__who"><b>eden.origin</b><span>Reel &middot; 5. jul</span></div><span class="ig-post__pf ig">◉</span></div>
          <div class="ig-post__media"><img src="assets/social/lemonbliss.jpg" alt="Lavender Lemon Bliss koktel u polju lavande"></div>
          <div class="ig-post__cap"><b>eden.origin</b> 🍹 Lagani letnji užitak. Lavender Lemon Bliss: 30ml ViolaVerde likera, 150ml soka od limuna, led po želji. Osveži se i javi utiske!</div>
          <a class="ig-post__link" href="website/recepti/lavanda-lemon-bliss/" target="_blank" rel="noopener">→ vodi na: Recept za Lavender Lemon Bliss</a>
          <div class="ig-post__foot"><span>&#9825; 336</span><span>&#128172; 12</span><a href="https://www.instagram.com/eden.origin/reel/Daa_Pp9IEy1/" target="_blank" rel="noopener" style="margin-left:auto;color:var(--copper-dark);font-weight:700">Otvori original ↗</a></div>
        </div>

        <div class="ig-post">
          <div class="ig-post__head"><div class="ig-post__av">EO</div><div class="ig-post__who"><b>eden.origin</b><span>Beograd &middot; 28. jun</span></div><span class="ig-post__pf ig">◉</span></div>
          <div class="ig-post__media"><img src="assets/social/nedeljni.jpg" alt="Nedeljni Viola kokteli, Beograd"></div>
          <div class="ig-post__cap"><b>eden.origin</b> 🍹 Nedeljni Viola kokteli.</div>
          <a class="ig-post__link" href="website/recepti/" target="_blank" rel="noopener">→ vodi na: Recepti, Viola kokteli</a>
          <div class="ig-post__foot"><span>&#9825; 31</span><a href="https://www.instagram.com/eden.origin/p/DaJBTScqzJg/" target="_blank" rel="noopener" style="margin-left:auto;color:var(--copper-dark);font-weight:700">Otvori original ↗</a></div>
        </div>

        <div class="ig-post">
          <div class="ig-post__head"><div class="ig-post__av">EO</div><div class="ig-post__who"><b>eden.origin</b><span>sa Anom &middot; 23. jun</span></div><span class="ig-post__pf ig">◉</span></div>
          <div class="ig-post__media"><img src="assets/social/petgodina.jpg" alt="Pet godina Eden Origina"></div>
          <div class="ig-post__cap"><b>eden.origin</b> 🪻 Pre 5 godina sanjali smo ovo danas. Pet godina učenja, pokušaja i verovanja da lavanda može biti mnogo više od mirisa u kesici ili ukrasa u bašti. Danas iza nas stoje ViolaVerde i Ramonda. A najlepše tek sledi.</div>
          <a class="ig-post__link" href="website/prica/" target="_blank" rel="noopener">→ vodi na: Naša priča</a>
          <div class="ig-post__foot"><span>&#9825; 384</span><span>&#128172; 22</span><a href="https://www.instagram.com/eden.origin/p/DZ8MNwnIHmA/" target="_blank" rel="noopener" style="margin-left:auto;color:var(--copper-dark);font-weight:700">Otvori original ↗</a></div>
        </div>

        <div class="ig-post">
          <div class="ig-post__head"><div class="ig-post__av">EO</div><div class="ig-post__who"><b>Eden Origin</b><span>Facebook &middot; strana</span></div><span class="ig-post__pf fb">f</span></div>
          <div class="ig-post__media"><img src="assets/social/brand.jpg" alt="ViolaVerde, pod nebom lavande ležimo"></div>
          <div class="ig-post__cap"><b>Eden Origin</b> 🪻 „Pod nebom lavande ležimo.” ViolaVerde, jedinstveni liker od lavande uzgajane u Srbiji.</div>
          <a class="ig-post__link" href="website/proizvodi/" target="_blank" rel="noopener">→ vodi na: Proizvodi</a>
          <div class="ig-post__foot"><span>&#128100; 159 pratilaca</span><a href="https://www.facebook.com/profile.php?id=100081009832761" target="_blank" rel="noopener" style="margin-left:auto;color:var(--copper-dark);font-weight:700">Otvori original ↗</a></div>
        </div>

      </div>
      <div id="socialContent" hidden></div>
      <p class="lede" style="margin-top:1.6rem;font-size:.9rem">Opisi, datumi i reakcije iznad su vaše prave objave iz juna i jula 2026. Ono što predlažemo je isprekidana veza na svakoj kartici, odredište koje objavu pretvara u prvi korak ka porudžbini. Recept Lavender Lemon Bliss je sada napravljen i živ na sajtu, izveden od reči do reči iz vaše objave.</p>
    </div>
  `,
    orders: `
    <style>
      .crm-sum{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin:1.4rem 0 1.8rem}
      .crm-sum__card{border:1px solid var(--hairline);border-radius:12px;background:#fff;padding:1rem 1.2rem}
      .crm-sum__card b{display:block;font-family:var(--font-display);font-size:1.7rem;color:var(--charcoal);line-height:1.1}
      .crm-sum__card span{font-size:.76rem;color:var(--ink-muted);letter-spacing:.02em}
      .otbl-wrap{overflow-x:auto;border:1px solid var(--hairline);border-radius:12px;background:#fff}
      .otbl{width:100%;border-collapse:collapse;min-width:820px;font-size:.85rem}
      .otbl th{text-align:left;font-family:var(--font-display);font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-muted);padding:.8rem 1rem;border-bottom:1px solid var(--hairline);white-space:nowrap}
      .otbl td{padding:.75rem 1rem;border-bottom:1px solid #f0ece4;color:#2a2a2f;vertical-align:middle}
      .otbl tr:last-child td{border-bottom:0}
      .otbl__num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
      .otbl__paid{font-weight:700;color:var(--charcoal)}
      .o-disc{display:inline-block;font-size:.72rem;font-weight:700;color:var(--copper-dark);background:var(--copper-tint);border:1px solid var(--copper);border-radius:999px;padding:.1rem .5rem}
      .o-disc--0{color:var(--ink-muted);background:#f3f0ea;border-color:var(--hairline)}
      .o-chan{font-size:.72rem;font-weight:600;border-radius:999px;padding:.1rem .55rem;white-space:nowrap}
      .o-chan--d{color:#2f6d4f;background:#e6f2ec;border:1px solid #bcdcc9}
      .o-chan--a{color:#7a4a12;background:#fbeede;border:1px solid #f0d3ad}
      .o-st{font-size:.72rem;font-weight:600;color:var(--ink-muted)}
      .o-st b{color:#2f6d4f}
    </style>
    <div class="cluster">
      <h1>Porudžbine</h1>
      <p class="lede">Jednostavan CRM koji pokazuje ono što je najvažnije: koliko je flaša otišlo, po kom popustu i koliko je na kraju plaćeno. Porudžbine sa forme za direktnu dostavu (kartica proizvoda) slivale bi se ovde automatski, a porudžbine sa Ananasa unosile bi se ručno ili preko uvoza. Prikaz je uzorak sa primerima.</p>

      <div class="crm-sum">
        <div class="crm-sum__card"><b>6</b><span>porudžbina</span></div>
        <div class="crm-sum__card"><b>139</b><span>flaša ukupno</span></div>
        <div class="crm-sum__card"><b>180.390</b><span>RSD ukupno plaćeno</span></div>
        <div class="crm-sum__card"><b>15.820</b><span>RSD odobrenih popusta</span></div>
      </div>

      <div class="otbl-wrap">
        <table class="otbl">
          <thead>
            <tr><th>Datum</th><th>Kupac</th><th>Proizvod</th><th class="otbl__num">Količina</th><th class="otbl__num">Cena stavke</th><th>Popust</th><th class="otbl__num">Ukupno plaćeno</th><th>Kanal</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>14. jul 2026</td><td>Kafe „Lavanda", Čačak</td><td>ViolaVerde vanila 0,5 l</td><td class="otbl__num">24</td><td class="otbl__num">34.800</td><td><span class="o-disc">7%</span></td><td class="otbl__num otbl__paid">32.364</td><td><span class="o-chan o-chan--d">Direktna dostava</span></td><td class="o-st"><b>Isporučeno</b></td></tr>
            <tr><td>12. jul 2026</td><td>Restoran Živa, Beograd</td><td>ViolaVerde vanila 0,5 l</td><td class="otbl__num">60</td><td class="otbl__num">87.000</td><td><span class="o-disc">10%</span></td><td class="otbl__num otbl__paid">78.300</td><td><span class="o-chan o-chan--d">Direktna dostava</span></td><td class="o-st">U pripremi</td></tr>
            <tr><td>10. jul 2026</td><td>Poklon kutak, Novi Sad</td><td>ViolaVerde vanila 0,2 l</td><td class="otbl__num">12</td><td class="otbl__num">12.480</td><td><span class="o-disc">5%</span></td><td class="otbl__num otbl__paid">11.856</td><td><span class="o-chan o-chan--d">Direktna dostava</span></td><td class="o-st"><b>Isporučeno</b></td></tr>
            <tr><td>8. jul 2026</td><td>Milica Jovanović</td><td>ViolaVerde vanila 0,2 l</td><td class="otbl__num">2</td><td class="otbl__num">2.080</td><td><span class="o-disc o-disc--0">bez</span></td><td class="otbl__num otbl__paid">2.080</td><td><span class="o-chan o-chan--a">Ananas</span></td><td class="o-st"><b>Isporučeno</b></td></tr>
            <tr><td>4. jul 2026</td><td>Hotel Morava, Kraljevo</td><td>ViolaVerde vanila 0,5 l</td><td class="otbl__num">40</td><td class="otbl__num">58.000</td><td><span class="o-disc">7%</span></td><td class="otbl__num otbl__paid">53.940</td><td><span class="o-chan o-chan--d">Direktna dostava</span></td><td class="o-st"><b>Isporučeno</b></td></tr>
            <tr><td>1. jul 2026</td><td>Ana Perić</td><td>ViolaVerde vanila 0,7 l</td><td class="otbl__num">1</td><td class="otbl__num">1.850</td><td><span class="o-disc o-disc--0">bez</span></td><td class="otbl__num otbl__paid">1.850</td><td><span class="o-chan o-chan--a">Ananas</span></td><td class="o-st"><b>Isporučeno</b></td></tr>
          </tbody>
        </table>
      </div>
      <div class="cluster-note"><strong>Kako se povezuje:</strong> forma za direktnu dostavu na kartici proizvoda računa količinu, popust na veće količine (5% za 10 do 20, 7% za 21 do 49, 10% za 50 i više) i ukupan iznos, i svaka takva porudžbina bi se pojavila u ovoj tabeli. Popusti su ovde vidljivi po redu, a zbir na vrhu pokazuje promet i odobrene popuste.</div>
    </div>
  `,
    gbp: `
    <style>
      .gbp-steps{margin:1.8rem 0;border:1px solid var(--hairline);border-radius:14px;background:#fff;padding:1.3rem 1.5rem}
      .gbp-steps .eyebrow{margin-bottom:.7rem}
      .gbp-steps ol{margin:0;padding-left:1.3rem;display:flex;flex-direction:column;gap:.6rem;counter-reset:s}
      .gbp-steps li{font-size:.93rem;line-height:1.55;color:#2a2a2f}
      .gbp-steps li b{color:var(--charcoal)}
    </style>
    <div class="gbp">
      <h1>Google poslovni profil</h1>
      <p class="lede">Google poslovni profil je jedan od najjačih signala za lokalnu pretragu, za Google mape i za odgovore veštačke inteligencije. Kada neko ukuca &bdquo;liker od lavande&ldquo;, &bdquo;domaći poklon&ldquo; ili &bdquo;lavanda Čačak&ldquo;, upravo profil odlučuje da li se pojavljujete. Ovde je gde verovatno stojite danas, i kako bi profil trebalo da izgleda kada se odradi kako treba.</p>
      <div class="gbp-audit">
        <p class="eyebrow">Trenutno stanje</p>
        <h2>Verovatno bez potvrđenog i popunjenog profila</h2>
        <p>Nismo pronašli aktivan, potvrđen Google profil za Eden Origin, pa je moguće da profil ne postoji ili postoji kao nepotvrđena, prazna stavka. Za brend sa ovako lepim vizuelnim sadržajem i pravom pričom, to znači da najveći deo besplatne vidljivosti u pretrazi i na mapama ostaje neiskorišćen. Recenzije, fotografije i redovne objave su ono što pokreće lokalne rezultate i sve češće hrani odgovore veštačke inteligencije, pa je ovo jedan od najbržih dobitaka.</p>
        <div class="audit-grid">
          <div class="audit-cell"><div class="lab">Recenzije</div><div class="val"><span class="now">~0</span><span class="arrow">&rarr;</span><span class="tgt">40+</span></div></div>
          <div class="audit-cell"><div class="lab">Objave</div><div class="val"><span class="now">Nema</span><span class="arrow">&rarr;</span><span class="tgt">Nedeljno</span></div></div>
          <div class="audit-cell"><div class="lab">Proizvodi</div><div class="val"><span class="now">Nema</span><span class="arrow">&rarr;</span><span class="tgt">Kompletno</span></div></div>
          <div class="audit-cell"><div class="lab">Pitanja i odgovori</div><div class="val"><span class="now">Nema</span><span class="arrow">&rarr;</span><span class="tgt">Postavljeno</span></div></div>
          <div class="audit-cell"><div class="lab">Fotografije</div><div class="val"><span class="now">Malo</span><span class="arrow">&rarr;</span><span class="tgt">50+</span></div></div>
          <div class="audit-cell"><div class="lab">Odgovori na recenzije</div><div class="val"><span class="now">Nema</span><span class="arrow">&rarr;</span><span class="tgt">100%</span></div></div>
        </div>
      </div>
      <div class="gbp-steps">
        <p class="eyebrow">Šta je potrebno da se pokrene</p>
        <ol>
          <li><b>Potvrdite profil.</b> Kreirajte ili preuzmite Google profil za &bdquo;Eden Origin&ldquo; i verifikujte vlasništvo (poštom, telefonom ili videom).</li>
          <li><b>Popunite sve.</b> Kategorija, radno vreme, telefon, sajt, oblast dostave, atributi (porodično, organsko) i opis sa ključnim rečima.</li>
          <li><b>Dodajte fotografije.</b> 20 do 50 kvalitetnih slika: polje, berba, proizvodi, kokteli i pakovanja. Vaš vizuelni sadržaj je ovde velika prednost.</li>
          <li><b>Unesite proizvode.</b> ViolaVerde, Ramonda i poklon-pakovanja, sa cenama, opisima i linkovima ka porudžbini.</li>
          <li><b>Pokrenite recenzije.</b> Zamolite zadovoljne kupce i šaljite link za recenziju posle svake porudžbine. Cilj je stalan priliv, a ne jednokratna akcija.</li>
          <li><b>Odgovarajte na svaku recenziju</b> u roku od 24 sata, i objavljujte nedeljno (novosti, ponude, sezonske objave). Zasejte pitanja i odgovore najčešćim pitanjima.</li>
        </ol>
      </div>
      <p class="gbp-sub">Kako bi trebalo da izgleda</p>
      <p class="gbp-note">Ilustrativni prikaz ciljnog profila. Primeri recenzija, objava, proizvoda i pitanja pokazuju optimizovan profil ka kome se ide, prikazan onako kako bi izgledao na Google-u.</p>
      <div class="g" id="gbpMock"></div>
    </div>
  `,
    tp: `
    <div class="gbp">
      <h1>Trustpilot</h1>
      <p class="lede">Trustpilot je mesto gde kupci sa jasnom namerom proveravaju brend pre nego što kupe, a prazan rezultat deluje kao znak upozorenja. Za brend koji tek gradi onlajn prodaju i poklon-tržište, potvrđen i aktivno negovan profil pretvara nezavisan dokaz poverenja u sredstvo koje je vaše. Ovde je trenutni jaz i profil ka kome se ide.</p>
      <div class="gbp-audit">
        <p class="eyebrow">Trenutno stanje</p>
        <h2>Još nema Trustpilot profila</h2>
        <p>Nismo pronašli potvrđen Trustpilot profil za Eden Origin, pa onaj ko potraži &bdquo;Eden Origin recenzije&ldquo; ne nailazi ni na šta što bi ga uverilo. Trustpilot ocene se pojavljuju i kao zvezdice u Google pretrazi i oglasima, pa ovaj jaz košta vidljivosti i izvan samog Trustpilota. Rešenje je potvrđen profil sa automatskim pozivnicama za recenziju posle svake porudžbine i odgovorom na svaku recenziju.</p>
        <div class="audit-grid">
          <div class="audit-cell"><div class="lab">TrustScore</div><div class="val"><span class="now">Nema</span><span class="arrow">&rarr;</span><span class="tgt">4.9</span></div></div>
          <div class="audit-cell"><div class="lab">Recenzije</div><div class="val"><span class="now">0</span><span class="arrow">&rarr;</span><span class="tgt">30+</span></div></div>
          <div class="audit-cell"><div class="lab">Profil</div><div class="val"><span class="now">Nepotvrđen</span><span class="arrow">&rarr;</span><span class="tgt">Potvrđen</span></div></div>
          <div class="audit-cell"><div class="lab">Pozivnice za recenziju</div><div class="val"><span class="now">Nema</span><span class="arrow">&rarr;</span><span class="tgt">Automatske</span></div></div>
          <div class="audit-cell"><div class="lab">Odgovori na recenzije</div><div class="val"><span class="now">Nema</span><span class="arrow">&rarr;</span><span class="tgt">100%</span></div></div>
          <div class="audit-cell"><div class="lab">Google zvezdice</div><div class="val"><span class="now">Isključeno</span><span class="arrow">&rarr;</span><span class="tgt">Uključeno</span></div></div>
        </div>
      </div>
      <div class="gbp-steps">
        <p class="eyebrow">Šta je potrebno da se pokrene</p>
        <ol>
          <li><b>Preuzmite profil.</b> Registrujte i potvrdite besplatan poslovni profil za domen edenorigin.nsc.agency.</li>
          <li><b>Uključite pozivnice.</b> Podesite automatsko slanje pozivnice za recenziju posle svake porudžbine (imejl ili SMS), da priliv bude stalan.</li>
          <li><b>Odgovarajte na sve.</b> Zahvalite na pozitivnim, mirno i konkretno rešite svaku primedbu. Odgovori grade poverenje jednako kao ocene.</li>
          <li><b>Uključite Google zvezdice.</b> Povežite Trustpilot sa Google-om da se ocene prikazuju kao zvezdice u pretrazi i oglasima.</li>
          <li><b>Prikažite dokaz.</b> Dodajte Trustpilot oznaku i najbolje recenzije na sajt i stranice proizvoda, tamo gde se donosi odluka o kupovini.</li>
        </ol>
      </div>
      <p class="gbp-sub">Kako bi trebalo da izgleda</p>
      <p class="gbp-note">Ilustrativni prikaz ciljnog profila. Primeri ocene i recenzija pokazuju potvrđen Trustpilot profil ka kome se ide, prikazan onako kako bi izgledao na Trustpilotu.</p>
      <div class="tp" id="tpMock"></div>
    </div>
  `
  }
};

/* The chassis renders the sidebar label as "Proposal for <name>" (English, baked
   into hub.html). This hub is fully Serbian, so localize that one string to
   "Predlog za" after the engine has drawn it. content.js loads before the engine,
   so defer to DOMContentLoaded, which fires after the engine's synchronous run. */
/* Review widget: load the config then the inert-by-default bootstrap. hub.html is
   the chassis and is not edited per pitch, so the widget is attached from here.
   async=false preserves order (config defines EDEN_REVIEW_CONFIG before bootstrap
   reads it); the bootstrap resolves review-mode.css/js relative to its own URL. */
(function(){
  var head = document.head || document.documentElement;
  ['review.config.js','review-bootstrap.js'].forEach(function(src){
    var s = document.createElement('script'); s.src = src; s.async = false; head.appendChild(s);
  });
})();

document.addEventListener('DOMContentLoaded', function(){
  var p = document.getElementById('hubProposal');
  if (p) p.innerHTML = 'Predlog za <b>' + window.HUB.brand.proposalFor + '</b>';
  // The "orders" view is a new key with no chassis icon; add one here (content.js only).
  var o = document.querySelector('.hub-item[data-view="orders"]');
  if (o && o.querySelector('svg') === null) {
    o.insertAdjacentHTML('afterbegin',
      '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
      '<path d="M6 2l1.5 2h9L18 2"/><path d="M5 6h14l-1.2 12.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"/>' +
      '<path d="M9 11h6M9 15h4"/></svg> ');
  }
});
