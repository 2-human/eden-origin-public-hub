/* proposal-hub — per-client CONTENT (window.HUB). Chassis (index.html) reads this.
   See the proposal-hub README 'Content map' + content.template.js for the schema.
   House style: no em-dashes, no emojis in agency voice, hedge audits with may/could/might.
   Agency voice = American English. Client-voice sample content (website, articles,
   posts) is written in Eden Origin's Serbian (Latin) for their real market. */
var WEB = "website/";
window.HUB = {
  title: "Proposal for Eden Origin · North Star Communications",
  brand: { proposalFor: "Eden Origin",
    foot: `North Star Communications.<br>A proposal for Eden Origin. Surfaces are review candidates, not the live site.` },
  favicon: "favicon.svg",
  defaultView: "intro",
  nav: [
    { section: "Project", items: [
      { view: "intro",   label: "Intro" },
      { view: "recs",    label: "Recommendations" },
      { view: "who",     label: "Who We Are" },
      { view: "people",  label: "Key People" }
    ]},
    { section: "Content Engine", items: [
      { view: "cluster",  label: "Content Cluster" },
      { view: "articles", label: "Sample Articles", badge: 5 },
      { view: "website",  label: "Website" }
    ]},
    { section: "Social Hub", items: [
      { view: "social", label: "Organic Posts", badge: 6 }
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
    intro:    { title: "Intro", sub: "Why we reached out to Eden Origin", open: WEB, openLabel: "Open the website ↗" },
    recs:     { title: "Recommendations", sub: "What we would build, and why each piece earns its place", open: WEB, openLabel: "Open the website ↗" },
    who:      { title: "Who We Are", sub: "North Star Communications · approach, services, and work", open: WEB, openLabel: "Open the website ↗" },
    people:   { title: "Key People", sub: "The people who would run the work" },
    cluster:  { title: "Content cluster", sub: "Your posts → derived pages → the order, on ananas.rs" },
    articles: { title: "Sample articles", sub: "Pieces we would publish on your brand · 5 shown, 1 in full" },
    website:  { title: "Website", sub: "Functional prototype · a home for your posts to link to", open: WEB, openLabel: "Open in new tab ↗", tbBadge: "Functional prototype" },
    social:   { title: "Organic posts", sub: "Your real Instagram and Facebook, mapped to the pages they would link to", open: "https://www.instagram.com/eden.origin/", openLabel: "Open Instagram ↗" }
  },
  clients: [
    {name:"Belgrade Waterfront", logo:"belgrade-waterfront.svg", desc:"The largest waterfront real estate development project in South East Europe.", did:"SEO, website development, social media management, digital advertising, and photo and video production."},
    {name:"The Clorox Company", logo:"clorox.svg", desc:"A Fortune 500 consumer goods multinational behind household brands including Clorox, Glad, Brita, Pine-Sol, and Burt's Bees.", did:"A full-scale market test of a new product category. We built a complete ecommerce website and ran social and Google Ads campaigns, driving 10,000 purchases in three months."},
    {name:"Citibank", logo:"citi.png", desc:"The global consumer bank of Citigroup, one of the world's largest financial institutions, operating across nearly 90 markets.", did:"Rapid demand-testing to validate new products and offerings across North and South American markets: fast-turnaround websites and campaigns for each short cycle, generating thousands of leads."},
    {name:"Speechify", logo:"speechify.svg", desc:"A text-to-speech and AI voice app that reads books, PDFs and web pages aloud, used by 60M+ people.", did:"An SEO and GEO content engine publishing 50k words a month, until the brand ranked top three for every target keyword and stood as a category leader."},
    {name:"Semrush", logo:"semrush.svg", desc:"A leading online-visibility and SEO platform spanning search, content, PPC and social, used by marketing teams worldwide.", did:"Wrote Semrush's thought-leadership content on emerging trends, audience shifts and algorithm changes. Every article went viral from the first, and the work earned us a place on their partner list."},
    {name:"Miss Universe", logo:"miss-universe.png", desc:"One of the world's largest and most-watched beauty pageants, staged across dozens of countries.", did:"Ran a national edition end to end: brand, marketing, SEO, social, and the full event (sponsors, contestants, venue, media, budget). A 1,000-guest show, delivered under budget, on time, and at a profit."},
    {name:"MVP Workshop", logo:"mvp-workshop.svg", desc:"A Web3 and blockchain solutions studio delivering end-to-end products, from idea to launch.", did:"Lifted SERP performance with a six-pillar content matrix and technical SEO writing that speaks to real buyers, driving a marked rise in top-keyword rankings and target-audience traffic."},
    {name:"Inery", logo:"inery.svg", desc:"Enterprise-grade decentralized data infrastructure and developer tooling for distributed systems.", did:"The full global launch of a new blockchain project (PR, partnerships, community, team, ads) in two months. On launch day the token jumped from its $0.14 ICO to $0.69 within six hours."}
  ],
  html: {
    intro: `
    <div class="brief">
      <p class="brief__eyebrow">North Star Communications &middot; Proposal for Eden Origin</p>
      <h1>Introduction</h1>
      <p class="brief__lede">This proposal did not begin with a brief from you. It began with your feed. We came across the Eden Origin story, the lavender you grow and pick by hand in Milićevci, the ViolaVerde bottle, the cocktails and the desserts, and thought the product deserves a home online as considered as the product itself. So rather than describe what we would do, we built a piece of it on your own brand.</p>
      <blockquote class="brief__quote">&ldquo;Da bismo ublažili jaku aromu lavande u miksologiji, prvi proizvod smo omekšali vanilom, a drugi borovnicom.&rdquo;<cite>Ana Tomašević, Eden Origin</cite></blockquote>
      <div class="brief__body">
        <p>Here is what we noticed, and why we reached out:</p>
        <ul>
          <li>Your posts are genuinely good. The photography, the field, the pour, the plating: they already do the hard part, which is making someone want the product.</li>
          <li>But a post is a moment. Someone taps a lovely photo of a Viola spritz, and then there is nowhere for that interest to land, no recipe to save, no page to read, and no obvious way to order.</li>
          <li>You sell through the ananas.rs listing, which is fine for a transaction, but it cannot tell the story, hold the recipes, or turn a casual follower into a repeat customer.</li>
          <li>Search and AI assistants cannot see any of it. A brand this distinctive is close to invisible the moment someone types "liker od lavande" or asks an assistant what to bring as a gift.</li>
        </ul>
        <p>So the job is not more posts. You said it yourself, the posts are already great. The job is to give them somewhere to go: <b>a website built around your existing content, that each post links to, and that leads to the order.</b> Every recipe you have already shot becomes a page. Every page carries the product and the way to buy it. And the whole thing is written so search and AI engines can finally find you.</p>
        <p><b>Everything in this hub is built, not described.</b> Start with <b>Recommendations</b> for the thinking. <b>Who We Are</b> and <b>Key People</b> show who you would actually work with. The <b>Content Engine</b> is the substance: a content cluster that turns your posts into a path to purchase, sample articles already live on the rebuilt site, and the functional website itself. Then <b>Organic Posts</b> shows your real Instagram and Facebook, each mapped to the page we would have it link to.</p>
        <p class="brief__aside">You built the product and the audience. This is about making the two meet, and turning a tap into an order.</p>
      </div>
      <div class="brief__foot"><div class="brief__star" aria-hidden="true"></div><p>North Star Communications. Prepared for Eden Origin.</p></div>
    </div>
  `,
    recs: `
    <div class="brief">
      <p class="brief__eyebrow">North Star Communications &middot; Proposal for Eden Origin</p>
      <h1>Recommendations</h1>
      <p class="brief__lede">This is the case for the work shown across this hub. Not a list of tactics, but one connected system that turns the content you already make into orders, and makes Eden Origin something search and AI assistants can actually find. Here is what we would build, and why each piece earns its place.</p>

      <div class="brief__sec">
        <p class="brief__num">01</p>
        <div class="brief__body">
          <h2>Where you stand today</h2>
          <p>You have a rare thing: a distinctive product with a real story and a following that already engages. The digital presence around it may not yet be doing that story justice. We looked at each asset the way a new customer, or an AI assistant, would. This is a snapshot and some of it could shift as things change, but a pattern comes through: excellent content, with nowhere for it to lead.</p>
          <div class="state">
            <div class="state__row"><div class="state__k">Instagram &amp; Facebook</div><div class="state__v">Genuinely strong. The lavender-field shots, the Viola cocktails, the desserts and the summer serves already make people want the product. The gap is what happens next: a post may be the end of the road rather than the start of one, with no page to save, no recipe to keep, and the order two or three taps away at best.</div></div>
            <div class="state__row"><div class="state__k">Website</div><div class="state__v">We could not find a dedicated Eden Origin website. That likely means the brand story, the recipes and the products live only inside individual posts, which disappear down the feed, and inside the ananas.rs listing, which cannot hold any of it. A brand with this much content may be leaving most of its value uncaptured.</div></div>
            <div class="state__row"><div class="state__k">Ordering path</div><div class="state__v">Selling through ananas.rs is a sensible start and we would keep it. But the path from "I saw a beautiful post" to "I placed an order" appears to rely on someone remembering the brand and searching a marketplace later. Every step between interest and checkout is a place the sale can quietly fall away.</div></div>
            <div class="state__row"><div class="state__k">SEO &amp; GEO</div><div class="state__v">On a few quick searches for terms like "liker od lavande" and "pokloni od lavande", it was not obvious that Eden Origin surfaces, though that could reflect the query or the region. With no website, there is little for search engines to rank and almost nothing structured for an AI assistant to read or cite when someone asks for a gift or a cocktail. The most distinctive thing about you could be the hardest thing to find.</div></div>
            <div class="state__row"><div class="state__k">Press &amp; proof</div><div class="state__v">You have earned real coverage and a grant of ten thousand pounds against eighty applicants. That is a strong trust signal, but it appears to live in a handful of articles rather than anywhere you own. Collected and framed on your own site, it could work far harder.</div></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">02</p>
        <div class="brief__body">
          <h2>The strategy: turn posts into pages, and pages into orders</h2>
          <p>The objective is simple: sell more bottles to the people who already like what they see. No single tactic does that. It takes your content, a place for it to land, and a clear path to purchase, working as one system.</p>
          <p><b>Give every post somewhere to go.</b> The content you make is top-of-funnel gold. What it lacks is a destination. So we build the destination first: a website where each recipe, each field story and each product has its own page, and where every page carries the product and the way to order it.</p>
          <p><b>Answer the real question, then sell.</b> People do not search for "liker"; they search for "koktel od lavande", "šta pokloniti", "recept sa lavandom". We write pages around those questions, matched to how people actually search, and let the product ride along inside the answer. It is the food-and-drink version of leading with the useful thing, not the feature list.</p>
          <p><b>Make it machine-readable.</b> The durable way to be found now is to be genuinely extractable: a page per question, recipes and products marked up with structured data so Google can show them as rich results and an AI assistant can read and recommend them. Structured content is reported to be surfaced and cited far more often than the same words in a caption.</p>
          <p><b>Own the asset.</b> A marketplace listing is rented space. A website, its content and its search visibility are yours, and they keep working after any single post scrolls away.</p>
          <p class="brief__aside">Every item in this hub plays a part in that system, or proves that it worked.</p>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">03</p>
        <div class="brief__body">
          <h2>What we would build</h2>
          <p>Each surface in this hub maps to a specific gap above, and to a specific reason it moves the needle.</p>
          <div class="ledger">
            <div class="ledger__head"><span>Surface</span><span>Today</span><span>What we build</span><span>Why it could win</span></div>
            <div class="ledger__row"><span class="lg-seg">Website</span><span class="lg-now">No dedicated site; story and recipes live only in posts.</span><span class="lg-build">A boutique Serbian website: brand story, product pages and a recipe library, each page built to carry the product and the order.</span><span class="lg-why">Turns scattered posts into an owned asset that gets found, gets saved, and gets shopped.</span></div>
            <div class="ledger__row"><span class="lg-seg">Product pages</span><span class="lg-now">Only the ananas.rs listing, which cannot tell the story.</span><span class="lg-build">A page per product (ViolaVerde vanila and borovnica, Ramonda sirup) with the making, the serving, and a clear order button to ananas.rs.</span><span class="lg-why">Gives every recipe and post a product to point at, and a one-tap path to buy.</span></div>
            <div class="ledger__row"><span class="lg-seg">Content cluster</span><span class="lg-now">Great posts with nothing linking them together.</span><span class="lg-build">A cluster: recipes and guides link to the product pillar, which links to the order, all amplified by the posts you already make.</span><span class="lg-why">A structure that carries a casual follower from a cocktail photo to a placed order.</span></div>
            <div class="ledger__row"><span class="lg-seg">SEO &amp; GEO</span><span class="lg-now">Little to rank; nothing structured for AI to read.</span><span class="lg-build">Recipe, Product and Organization schema, question-led pages, and the story and press framed as verifiable facts.</span><span class="lg-why">Rich results in Google and answers an AI assistant can quote when someone asks for a gift or a cocktail.</span></div>
            <div class="ledger__row"><span class="lg-seg">Organic posts</span><span class="lg-now">Beautiful, but each is a dead end.</span><span class="lg-build">The same posts, now each with a destination: a link in bio and per-post to the exact page it belongs to.</span><span class="lg-why">Every post you have already made starts working as a doorway to the shop, not just a moment in the feed.</span></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">04</p>
        <div class="brief__body">
          <h2>How it all adds up to more orders</h2>
          <p>Your goal is straightforward: more bottles sold to people who already love the look of it. Everything here points at that, and the pieces may work best together rather than alone. It runs as one path.</p>
          <p><b>Get found.</b> A website and recipe library written the way people actually search, structured so Google and AI engines can read it, so more of the people who would love ViolaVerde come across it in the first place. <b>Get saved.</b> Recipes and a story worth keeping, so a passing tap becomes a bookmark and a return visit. <b>Get bought.</b> Every page carries the product and a clear order button to ananas.rs, so interest turns into a purchase in one step rather than three. <b>Compound.</b> Each post now links to a page, each page holds its search ranking, and the whole thing keeps working long after the post scrolls away.</p>
          <p>Each part feeds the next. A saved recipe may bring someone back; a page that ranks may reach someone new; a clear order button turns both into a sale. Nothing here rents its position: it builds an asset you own that keeps earning after any single post is gone.</p>
          <p class="brief__aside">We would sequence it so the fastest wins move first: the website and product pages, then the recipe cluster and the per-post links, so your existing audience has somewhere to go within weeks, not months.</p>
        </div>
      </div>

      <div class="brief__foot">
        <div class="brief__star" aria-hidden="true"></div>
        <p>North Star Communications. Prepared for Eden Origin. Sample content shown across this hub is illustrative until confirmed.</p>
      </div>
    </div>
  `,
    who: `
    <div class="brief">
      <p class="brief__eyebrow">North Star Communications &middot; Proposal for Eden Origin</p>
      <h1>Who we are</h1>
      <p class="brief__lede">North Star Communications helps organizations close the gap between what they are and how they communicate. We work at the moments when communications become consequential, and we stay close enough to your team that the work feels genuine rather than produced. Everything your business needs, under one roof.</p>

      <div class="brief__sec">
        <p class="brief__num">01</p>
        <div class="brief__body">
          <h2>How we think</h2>
          <p>We listen, we learn, we adapt, and we deliver. That rhythm is held together by four values that decide how we make trade-offs when the work gets hard.</p>
          <div class="vals">
            <div class="val"><b>Human First</b><span>Technology brings people closer together. It does not replace the relationship at the center of good communication.</span></div>
            <div class="val"><b>Zero Distance</b><span>The best communications disappear. We work toward value flowing both ways, with no friction and no noise.</span></div>
            <div class="val"><b>Sustainable Growth</b><span>Fast is not the same as healthy. We build growth that matches your capacity and compounds over time.</span></div>
            <div class="val"><b>Resilient Outcomes</b><span>Markets shift and plans change. The work is designed so every outcome makes the next one stronger.</span></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">02</p>
        <div class="brief__body">
          <h2>How we work</h2>
          <p>We start by getting two things clear: who you are trying to reach, and what you actually want them to do. They sound obvious, but most marketing underdelivers because one of them was fuzzy from the start. We get them right before we spend any of your budget.</p>
          <p>From there we work in small, complete steps rather than one long plan you have to sign off up front. We put something real in front of your audience, watch what they actually do, and keep what works while dropping what does not. Each step teaches us something we carry into the next, so the work gets sharper as it goes and you can see it paying off along the way. We start focused, prove it out, and widen only once the results are there to back it.</p>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">03</p>
        <div class="brief__body">
          <h2>What we do</h2>
          <p>Seven service lines, drawn on in whatever combination the work calls for. This engagement leans on Content and Copywriting, Web and App Development, Digital Marketing, and Design and Production.</p>
          <div class="svc">
            <div class="svc__row"><div class="svc__name">Research &amp; Strategy</div><div class="svc__desc">Understand your market and your audience, then turn that into a plan built to move you forward.<span class="svc__tags">Competitive analysis &middot; audience research &middot; positioning &middot; strategy</span></div></div>
            <div class="svc__row"><div class="svc__name">Content &amp; Copywriting</div><div class="svc__desc">Words and stories that earn attention and turn readers into customers.<span class="svc__tags">Storytelling &middot; SEO and GEO copy &middot; recipes and articles &middot; conversion copy</span></div></div>
            <div class="svc__row"><div class="svc__name">Web &amp; App Development</div><div class="svc__desc">Build the websites and shops your customers use, fast, reliable, and made to convert.<span class="svc__tags">Websites &middot; product pages &middot; landing pages &middot; ecommerce and integrations</span></div></div>
            <div class="svc__row"><div class="svc__name">Digital Marketing</div><div class="svc__desc">Reach the right people across search and social, and turn that reach into results.<span class="svc__tags">SEO and GEO &middot; social media &middot; Meta Ads &middot; Google Ads</span></div></div>
            <div class="svc__row"><div class="svc__name">Design &amp; Production</div><div class="svc__desc">Bring it all to life with design and video made for where people actually watch.<span class="svc__tags">Video &middot; graphic design &middot; packaging and labels &middot; production</span></div></div>
            <div class="svc__row"><div class="svc__name">Branding</div><div class="svc__desc">Shape how you look and what you stand for, so you are recognized and remembered.<span class="svc__tags">Identity design &middot; storytelling &middot; guidelines &middot; mission, vision and values</span></div></div>
            <div class="svc__row"><div class="svc__name">PR</div><div class="svc__desc">Manage how the world sees you, from everyday reputation to the moments that matter most.<span class="svc__tags">Reputation management &middot; press releases &middot; presentations &middot; crisis response</span></div></div>
          </div>
        </div>
      </div>

      <div class="brief__sec">
        <p class="brief__num">04</p>
        <div class="brief__body">
          <h2>Who we have worked with</h2>
          <p>A selection of the brands and organizations our team has delivered for, from venture-backed software to global consumer names.</p>
          <div class="cwall" id="whoWall"></div>
        </div>
      </div>

      <div class="brief__foot">
        <div class="brief__star" aria-hidden="true"></div>
        <p>North Star Communications. Prepared for Eden Origin.</p>
      </div>
    </div>
  `,
    people: `
    <div class="brief">
      <p class="brief__eyebrow">North Star Communications &middot; Proposal for Eden Origin</p>
      <h1>Key people</h1>
      <p class="brief__lede">You would work directly with the people below. Not an account manager passing notes to a team you never meet, but the people actually doing the thinking and the work.</p>
      <div class="people">
        <div class="person">
          <div class="person__av"><img src="assets/people/milos.jpg" alt="Miloš Milosavljević"></div>
          <div class="person__body">
            <h3>Miloš Milosavljević</h3>
            <p class="person__role">Founder and CEO, North Star Communications</p>
            <p class="person__bio">Miloš has spent more than twenty years turning complicated ideas into clear, human stories, across journalism, media, non-profits, SaaS, HR tech and B2B. He loves the moment a messy problem finally clicks into a simple plan a whole team can get behind, and he has built the platforms, products and campaigns to show it works in practice. Clients tend to value the same three things in him: a systems mind that connects the product, the message and the experience; a knack for saying hard things simply; and a habit of bringing people along rather than leaving them behind. He keeps the work grounded in real discovery, sharp positioning, and a clear path to market.</p>
          </div>
        </div>
        <div class="person">
          <div class="person__av"><img src="assets/people/tijana.jpg" alt="Tijana Damjanović Gertner"></div>
          <div class="person__body">
            <h3>Tijana Damjanović Gertner</h3>
            <p class="person__role">Partner and COO, North Star Communications</p>
            <p class="person__bio">Tijana is the kind of marketer who is as comfortable setting the strategy as she is rolling up her sleeves to run it. She blends creative instinct with a sharp commercial head, across brand identity, SEO and content, and full-funnel campaigns built to bring in real business. She has organized and marketed events on the biggest stage, including Miss Universe, and she is refreshingly straight with clients: she will tell you what she would do, show you why it works, and help you avoid the expensive mistakes. Look after your people and do right by your clients, and she is firmly in your corner.</p>
          </div>
        </div>
      </div>
      <div class="brief__foot">
        <div class="brief__star" aria-hidden="true"></div>
        <p>North Star Communications. Prepared for Eden Origin.</p>
      </div>
    </div>
  `,
    website: `
    <iframe src="website/" title="Eden Origin website prototype, built by North Star"></iframe>
  `,
    cluster: `
    <div class="cluster">
      <h1>Content cluster: from your posts to the order</h1>
      <p class="lede">This is the engine of the whole pitch. Your <strong>Instagram and Facebook posts</strong> already earn attention. The cluster gives each one somewhere to go: a <strong>recipe or guide page</strong> derived from that post, which links up to the <strong>product pillar</strong>, which leads to the <strong>order on ananas.rs</strong>. Shown below for one product, <strong>ViolaVerde vanila</strong>. The nodes open the real, live pages on the rebuilt site.</p>
      <div class="diagram">
        <svg viewBox="0 0 1180 660" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arw" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto"><path d="M0,0 L6.5,3 L0,6 Z" fill="#b8b8c0"/></marker>
            <marker id="arwC" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto"><path d="M0,0 L6.5,3 L0,6 Z" fill="#c19a4b"/></marker>
            <marker id="arwB" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto"><path d="M0,0 L6.5,3 L0,6 Z" fill="#6b4e8c"/></marker>
          </defs>
          <text class="col-label" x="30" y="32">Your posts &middot; Instagram &amp; Facebook</text>
          <text class="col-label" x="470" y="278">Product pillar</text>
          <text class="col-label" x="880" y="286">The order</text>

          <path class="wire" marker-end="url(#arw)" d="M330 164 C 400 164, 405 350, 462 350"/>
          <path class="wire" marker-end="url(#arw)" d="M330 345 C 405 345, 410 350, 462 350"/>
          <path class="wire" marker-end="url(#arw)" d="M330 526 C 400 526, 405 350, 462 350"/>
          <path class="wire--crm" marker-end="url(#arwC)" d="M720 350 C 785 350, 795 350, 852 350"/>

          <foreignObject x="30" y="110" width="300" height="108"><div xmlns="http://www.w3.org/1999/xhtml" class="node node--case"><a class="node__link" href="website/recepti/viola-spritz/" target="_blank" rel="noopener"><span class="node__tag">Post &rarr; Recept</span><span class="node__title">Viola spritz koktel</span></a><a class="node__social" href="#social"><span class="pf pf--ig">◉</span> Instagram post &rarr;</a></div></foreignObject>
          <foreignObject x="30" y="291" width="300" height="108"><div xmlns="http://www.w3.org/1999/xhtml" class="node node--case"><a class="node__link" href="website/vodic/kako-nastaje-liker-od-lavande/" target="_blank" rel="noopener"><span class="node__tag">Post &rarr; Vodič</span><span class="node__title">Kako nastaje liker od lavande</span></a><a class="node__social" href="#social"><span class="pf pf--ig">◉</span> Reel iz berbe &rarr;</a></div></foreignObject>
          <foreignObject x="30" y="472" width="300" height="108"><div xmlns="http://www.w3.org/1999/xhtml" class="node node--case"><a class="node__link" href="website/recepti/lavanda-cheesecake/" target="_blank" rel="noopener"><span class="node__tag">Post &rarr; Desert</span><span class="node__title">Čizkejk od lavande</span></a><a class="node__social" href="#social"><span class="pf pf--fb">f</span> Facebook post &rarr;</a></div></foreignObject>

          <foreignObject x="470" y="290" width="250" height="120"><a xmlns="http://www.w3.org/1999/xhtml" class="node node--lp node__link" href="website/proizvodi/violaverde-vanila/" target="_blank" rel="noopener"><span class="node__tag">Product pillar</span><span class="node__title">ViolaVerde vanila</span><span class="node__meta">Every piece links here &rarr;</span></a></foreignObject>
          <foreignObject x="860" y="298" width="250" height="105"><a xmlns="http://www.w3.org/1999/xhtml" class="node node--crm node__link" style="border-style:solid;cursor:pointer" href="https://ananas.rs/prodavnica/eden-origin" target="_blank" rel="noopener"><span class="node__tag">Poruči &middot; ananas.rs</span><span class="node__title">The order</span><span class="node__meta">Dostava za 48h &rarr;</span></a></foreignObject>
        </svg>
      </div>
      <div class="legend">
        <span><span class="swatch" style="background:#fff;border:1px solid var(--hairline)"></span> Post &rarr; derived page</span>
        <span><span class="swatch" style="background:var(--charcoal)"></span> Product pillar</span>
        <span><span class="swatch" style="background:var(--copper-tint);border:2px dashed var(--copper)"></span> The order (ananas.rs)</span>
        <span><span class="pf pf--ig" style="width:15px;height:15px">◉</span> One existing post per piece</span>
      </div>
      <div class="cluster-note"><strong>How it works:</strong> a recipe post, a harvest reel and a dessert post each link to a page we derived from them, and every one of those pages links up to the <strong>ViolaVerde vanila</strong> product page, which carries the <strong>order button to ananas.rs</strong>. Your other products (ViolaVerde borovnica, Ramonda sirup) work the same way. Node links open the real, live pages. The point: no new posts needed, the ones you have finally lead somewhere.</div>
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
      <h1>Sample articles</h1>
      <p class="lede">Five pages we would publish on your brand, in Serbian, each derived from a post you have already made and each built to lead to the order. These are not mockups: every one is <strong>built and live</strong> on the rebuilt site (see the <b>Website</b> tab). The first is shown <strong>in full</strong> below, and each card links to its live page.</p>

      <div class="art-cards">
        <div class="art-card art-card--lead">
          <span class="art-card__type">Recept &middot; koktel</span>
          <b>Viola spritz: koktel od lavande</b>
          <p>Your summer cocktail post, turned into a page with measures, Recipe schema, and an order button. Shown in full below.</p>
          <span class="art-card__move">Move: dedicated question-led page &middot; Recipe schema &middot; product baked into the answer</span>
          <a href="website/recepti/viola-spritz/" target="_blank" rel="noopener" style="font-family:var(--font-display);font-weight:700;font-size:.8rem;color:var(--copper-dark)">Read the live page ↗</a>
        </div>
        <div class="art-card">
          <span class="art-card__type">Vodič &middot; proces</span>
          <b>Kako nastaje liker od lavande</b>
          <p>The harvest and maceration story, written by a named maker so search and AI engines can attribute it and trust it.</p>
          <span class="art-card__move">Move: author bios with verifiable credentials</span>
          <a href="website/vodic/kako-nastaje-liker-od-lavande/" target="_blank" rel="noopener" style="font-family:var(--font-display);font-weight:700;font-size:.8rem;color:var(--copper-dark)">Read the live page ↗</a>
        </div>
        <div class="art-card">
          <span class="art-card__type">Vodič &middot; pokloni</span>
          <b>Pokloni od lavande: ideje za svaku priliku</b>
          <p>Built for a high-intent search ("pokloni od lavande"), it guides gift-buyers straight to the right size and the order.</p>
          <span class="art-card__move">Move: pages around what buyers actually search</span>
          <a href="website/vodic/pokloni-od-lavande/" target="_blank" rel="noopener" style="font-family:var(--font-display);font-weight:700;font-size:.8rem;color:var(--copper-dark)">Read the live page ↗</a>
        </div>
        <div class="art-card">
          <span class="art-card__type">Recept &middot; desert</span>
          <b>Čizkejk od lavande sa ViolaVerde prelivom</b>
          <p>Your dessert post as a full recipe that uses the product in the method, so making it means owning a bottle.</p>
          <span class="art-card__move">Move: content where the product is the ingredient</span>
          <a href="website/recepti/lavanda-cheesecake/" target="_blank" rel="noopener" style="font-family:var(--font-display);font-weight:700;font-size:.8rem;color:var(--copper-dark)">Read the live page ↗</a>
        </div>
        <div class="art-card">
          <span class="art-card__type">Bez alkohola</span>
          <b>Limunada od lavande</b>
          <p>The non-alcoholic serve, opening the brand to families and drivers, and pointing at the Ramonda syrup.</p>
          <span class="art-card__move">Move: widen the audience without diluting the brand</span>
          <a href="website/recepti/lavanda-limunada/" target="_blank" rel="noopener" style="font-family:var(--font-display);font-weight:700;font-size:.8rem;color:var(--copper-dark)">Read the live page ↗</a>
        </div>
      </div>

      <article class="article">
        <div class="article__head">
          <span class="article__kicker">Sample article &middot; shown in full</span>
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
          <div class="recipe-card__label">Recept: Viola spritz <span>ships with Recipe schema</span></div>
          <div class="recipe-card__b">
            <div><b>Sastojci</b><p>5 cl ViolaVerde likera &middot; 10 cl penušavog vina &middot; 3 cl tonika &middot; led &middot; grančica lavande i kriška limete</p></div>
            <div><b>Priprema (3 min)</b><p>Napunite čašu ledom. Ulijte liker, pa penušavo vino. Dopunite tonikom i lagano promešajte. Ukrasite lavandom i limetom.</p></div>
          </div>
        </div>

        <div class="article__body" style="padding-top:0">
          <p>Nemate ViolaVerde? Flaša od 0,5 l stiže za 48 sati preko Ananasa, i dovoljna je za desetak koktela. Dugme za poručivanje stoji odmah ispod recepta na živoj stranici.</p>
        </div>

        <div class="article__schema">
          <div class="article__schema-h">The structured data that ships with this page</div>
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
          <p class="article__schema-note">Recipe schema lets Google show this as a rich result (photo, time, rating) and lets an AI assistant read and recommend it when someone asks for a lavender cocktail. The visible copy and the schema are kept in sync, and validated before publishing.</p>
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
      .ig-post__media{aspect-ratio:1;display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--font-display);font-size:1.3rem;text-align:center;padding:1rem;position:relative}
      .ig-post__cap{padding:.65rem .85rem;font-size:.85rem;line-height:1.45;color:#2a2a2f}
      .ig-post__cap b{color:var(--charcoal)}
      .ig-post__link{display:flex;align-items:center;gap:.5rem;margin:.2rem .85rem .9rem;padding:.6rem .75rem;border:1px dashed var(--copper);border-radius:9px;background:var(--copper-tint);font-size:.8rem;color:var(--copper-dark);font-weight:700;text-decoration:none}
      .ig-post__link:hover{background:#fff}
      .ig-post__foot{display:flex;gap:1rem;padding:.5rem .85rem;border-top:1px solid var(--hairline);font-size:.76rem;color:var(--ink-muted)}
    </style>
    <div class="social">
      <div class="soc-head">
        <h1>Organic posts</h1>
        <p class="lede">You asked us not to write new posts, because yours are already great, and we agree. So these are not mockups. They are your <strong>actual posts</strong>, pulled from <strong>@eden.origin</strong> (11.1K followers) and your Facebook page, with their real captions. Each is mapped to the page on the rebuilt site we would have it <strong>link to</strong>. That single link is the change: the post stops being a dead end and becomes the top of a path to the order. The dashed link on each card shows the destination; "Otvori original" opens the real post.</p>
      </div>
      <span id="artFilter" hidden></span>
      <div class="ig-feed">

        <div class="ig-post">
          <div class="ig-post__head"><div class="ig-post__av">EO</div><div class="ig-post__who"><b>eden.origin</b><span>Reel &middot; pre 2 dana</span></div><span class="ig-post__pf ig">◉</span></div>
          <div class="ig-post__media" style="background:linear-gradient(150deg,#5b4b8a,#3e3163)">Bezalkoholni serve<br>@kissa10.bg &middot; preko leda</div>
          <div class="ig-post__cap"><b>eden.origin</b> 🍇🫧 U @kissa10.bg svaki korak pripreme pažljivo je osmišljen kako bi se sačuvala puna aroma lavande. Lagan, osvežavajući i potpuno bezalkoholni napitak koji se služi preko leda i završava bobicama mariniranog grožđa.</div>
          <a class="ig-post__link" href="website/proizvodi/violaverde-vanila/" target="_blank" rel="noopener">→ vodi na: Stranica proizvoda ViolaVerde</a>
          <div class="ig-post__foot"><span>&#9825; 72</span><span>&#128172; 9</span><a href="https://www.instagram.com/eden.origin/reel/DayHwAwoQ8h/" target="_blank" rel="noopener" style="margin-left:auto;color:var(--copper-dark);font-weight:700">Otvori original ↗</a></div>
        </div>

        <div class="ig-post">
          <div class="ig-post__head"><div class="ig-post__av">EO</div><div class="ig-post__who"><b>eden.origin</b><span>Reel &middot; 30. jun</span></div><span class="ig-post__pf ig">◉</span></div>
          <div class="ig-post__media" style="background:linear-gradient(150deg,#6e7f5c,#4a5a3c)">Angustifolia vera<br>polje &middot; pčele i polinatori</div>
          <div class="ig-post__cap"><b>eden.origin</b> 🚀 Ovde sve počinje. Angustifolia vera, zbog svoje aromatičnosti, važna je za pčele i druge polinatore. Od iste vrste lavande nastaju ViolaVerde i Ramonda. Neke stvari ne mogu i ne treba da se ubrzaju. Samo se neguju, sezonu za sezonom.</div>
          <a class="ig-post__link" href="website/vodic/kako-nastaje-liker-od-lavande/" target="_blank" rel="noopener">→ vodi na: Kako nastaje liker od lavande</a>
          <div class="ig-post__foot"><span>&#9825; 1.008</span><span>&#128172; 14</span><a href="https://www.instagram.com/eden.origin/reel/DaOKIYnIB0D/" target="_blank" rel="noopener" style="margin-left:auto;color:var(--copper-dark);font-weight:700">Otvori original ↗</a></div>
        </div>

        <div class="ig-post">
          <div class="ig-post__head"><div class="ig-post__av">EO</div><div class="ig-post__who"><b>eden.origin</b><span>Reel &middot; 5. jul</span></div><span class="ig-post__pf ig">◉</span></div>
          <div class="ig-post__media" style="background:linear-gradient(150deg,#8f7bbf,#5b4b8a)">Lavender Lemon Bliss<br>recept &middot; ViolaVerde + limun</div>
          <div class="ig-post__cap"><b>eden.origin</b> 🍹 Lagani letnji užitak. Lavender Lemon Bliss: 30ml ViolaVerde likera, 150ml soka od limuna, led po želji. Osveži se i javi utiske!</div>
          <a class="ig-post__link" href="website/recepti/lavanda-lemon-bliss/" target="_blank" rel="noopener">→ vodi na: Recept za Lavender Lemon Bliss</a>
          <div class="ig-post__foot"><span>&#9825; 336</span><span>&#128172; 12</span><a href="https://www.instagram.com/eden.origin/reel/Daa_Pp9IEy1/" target="_blank" rel="noopener" style="margin-left:auto;color:var(--copper-dark);font-weight:700">Otvori original ↗</a></div>
        </div>

        <div class="ig-post">
          <div class="ig-post__head"><div class="ig-post__av">EO</div><div class="ig-post__who"><b>eden.origin</b><span>Beograd &middot; 28. jun</span></div><span class="ig-post__pf ig">◉</span></div>
          <div class="ig-post__media" style="background:linear-gradient(150deg,#4a3466,#2c2340)">Nedeljni Viola kokteli<br>bar &middot; Beograd</div>
          <div class="ig-post__cap"><b>eden.origin</b> 🍹 Nedeljni Viola kokteli.</div>
          <a class="ig-post__link" href="website/recepti/" target="_blank" rel="noopener">→ vodi na: Recepti, Viola kokteli</a>
          <div class="ig-post__foot"><span>&#9825; 31</span><a href="https://www.instagram.com/eden.origin/p/DaJBTScqzJg/" target="_blank" rel="noopener" style="margin-left:auto;color:var(--copper-dark);font-weight:700">Otvori original ↗</a></div>
        </div>

        <div class="ig-post">
          <div class="ig-post__head"><div class="ig-post__av">EO</div><div class="ig-post__who"><b>eden.origin</b><span>sa Anom &middot; 23. jun</span></div><span class="ig-post__pf ig">◉</span></div>
          <div class="ig-post__media" style="background:linear-gradient(150deg,#6e7f5c,#5c6d4a)">Pet godina Eden Origina<br>priča o počecima</div>
          <div class="ig-post__cap"><b>eden.origin</b> 🪻 Pre 5 godina sanjali smo ovo danas. Pet godina učenja, pokušaja i verovanja da lavanda može biti mnogo više od mirisa u kesici ili ukrasa u bašti. Danas iza nas stoje ViolaVerde i Ramonda. A najlepše tek sledi.</div>
          <a class="ig-post__link" href="website/prica/" target="_blank" rel="noopener">→ vodi na: Naša priča</a>
          <div class="ig-post__foot"><span>&#9825; 384</span><span>&#128172; 22</span><a href="https://www.instagram.com/eden.origin/p/DZ8MNwnIHmA/" target="_blank" rel="noopener" style="margin-left:auto;color:var(--copper-dark);font-weight:700">Otvori original ↗</a></div>
        </div>

        <div class="ig-post">
          <div class="ig-post__head"><div class="ig-post__av">EO</div><div class="ig-post__who"><b>Eden Origin</b><span>Facebook &middot; strana</span></div><span class="ig-post__pf fb">f</span></div>
          <div class="ig-post__media" style="background:linear-gradient(150deg,#c19a4b,#a07f34)">„Pod nebom lavande ležimo”<br>brend</div>
          <div class="ig-post__cap"><b>Eden Origin</b> 🪻 „Pod nebom lavande ležimo.” ViolaVerde, jedinstveni liker od lavande uzgajane u Srbiji.</div>
          <a class="ig-post__link" href="website/proizvodi/" target="_blank" rel="noopener">→ vodi na: Proizvodi</a>
          <div class="ig-post__foot"><span>&#128100; 159 pratilaca</span><a href="https://www.facebook.com/profile.php?id=100081009832761" target="_blank" rel="noopener" style="margin-left:auto;color:var(--copper-dark);font-weight:700">Otvori original ↗</a></div>
        </div>

      </div>
      <div id="socialContent" hidden></div>
      <p class="lede" style="margin-top:1.6rem;font-size:.9rem">Captions, dates and engagement above are your real posts from June and July 2026. The change we are proposing is the dashed link on each card, the destination that turns a post into the first step toward an order. The Lavender Lemon Bliss recipe is now built and live on the site, derived word for word from your own post.</p>
    </div>
  `
  }
};
