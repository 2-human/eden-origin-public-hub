/* Eden Origin proposal hub — review widget config.
 *
 * The review overlay lets North Star and Eden Origin leave anchored comments on
 * the proposal. It is inert until ?review=1 (a floating "Komentari" button turns
 * it on). Loaded on the hub and on every website page.
 *
 * FIREBASE_CONFIG is intentionally empty, so comments are stored in THIS browser
 * only (localStorage) — fine for a demo review. To make comments SHARED across
 * reviewers, paste a Firebase Realtime Database web config below (apiKey,
 * databaseURL, etc.) and the widget switches to the shared backend automatically.
 */
window.EDEN_REVIEW_CONFIG = {
  FIREBASE_CONFIG: {},
  REVIEW_LABELS: {
    toggleButton: "Komentari",
    toggleButtonTitle: "Otvori režim za komentare",
    bannerTitle: "Režim pregleda · Predlog za Eden Origin",
    localOnly: "Samo lokalno — dodajte Firebase za deljene komentare",
    exit: "Izađi iz pregleda",
    sidebarTitle: "Komentari",
    empty: "Ovde još nema komentara. Pređite mišem preko bilo kog elementa i kliknite + da dodate komentar.",
    add: "+ Komentar",
    save: "Objavi komentar",
    cancel: "Otkaži",
    edit: "Izmeni",
    del: "Obriši",
    resolve: "Reši",
    reopen: "Ponovo otvori",
    tabOpen: "Otvoreni",
    tabResolved: "Rešeni",
    resolvePrompt: "Napomena o rešenju (šta je urađeno):",
    placeholder: "Vaš komentar…",
    replacementPlaceholder: "Predlog izmene (opciono)…",
    namePrompt: "Vaše ime (da tim zna ko je ostavio komentar):"
  }
};
