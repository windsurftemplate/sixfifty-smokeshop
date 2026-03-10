// ============================================================
//  SIX FIFTY — script.js
// ============================================================

// ── SVG product art library ───────────────────────────────────
const SVG = {
  beaker: `<svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g1a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#8a6a20"/></linearGradient>
      <linearGradient id="g1w" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4a9eff" stop-opacity=".28"/><stop offset="100%" stop-color="#1a4a8a" stop-opacity=".45"/></linearGradient>
    </defs>
    <path d="M40 80 L24 155 Q22 167 34 167 L86 167 Q98 167 96 155 L80 80Z" stroke="url(#g1a)" stroke-width="2" fill="rgba(200,168,75,.05)"/>
    <path d="M24 145 Q60 138 96 145 L96 155 Q98 167 86 167 L34 167 Q22 167 24 155Z" fill="url(#g1w)"/>
    <rect x="49" y="24" width="22" height="56" rx="2" stroke="url(#g1a)" stroke-width="2" fill="rgba(200,168,75,.04)"/>
    <rect x="46" y="13" width="28" height="13" rx="2" stroke="url(#g1a)" stroke-width="2" fill="rgba(200,168,75,.05)"/>
    <ellipse cx="60" cy="108" rx="24" ry="6" stroke="url(#g1a)" stroke-width="1.5" fill="rgba(200,168,75,.05)"/>
    <line x1="84" y1="108" x2="84" y2="145" stroke="url(#g1a)" stroke-width="1.5"/>
    <line x1="36" y1="108" x2="36" y2="145" stroke="url(#g1a)" stroke-width="1.5"/>
    <line x1="55" y1="102" x2="40" y2="128" stroke="url(#g1a)" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="35" cy="132" rx="9" ry="7" stroke="url(#g1a)" stroke-width="1.5" fill="rgba(200,168,75,.1)"/>
    <line x1="51" y1="52" x2="56" y2="62" stroke="url(#g1a)" stroke-width="1.5"/>
    <line x1="69" y1="52" x2="64" y2="62" stroke="url(#g1a)" stroke-width="1.5"/>
    <line x1="51" y1="66" x2="56" y2="76" stroke="url(#g1a)" stroke-width="1.5"/>
    <line x1="69" y1="66" x2="64" y2="76" stroke="url(#g1a)" stroke-width="1.5"/>
    <line x1="53" y1="28" x2="53" y2="72" stroke="rgba(255,255,255,.08)" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  straight: `<svg viewBox="0 0 80 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g2a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#8a6a20"/></linearGradient>
      <linearGradient id="g2w" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4a9eff" stop-opacity=".28"/><stop offset="100%" stop-color="#1a4a8a" stop-opacity=".45"/></linearGradient>
    </defs>
    <rect x="30" y="12" width="20" height="168" rx="4" stroke="url(#g2a)" stroke-width="2" fill="rgba(200,168,75,.04)"/>
    <rect x="27" y="8" width="26" height="10" rx="3" stroke="url(#g2a)" stroke-width="2" fill="rgba(200,168,75,.05)"/>
    <rect x="24" y="175" width="32" height="18" rx="4" stroke="url(#g2a)" stroke-width="2" fill="rgba(200,168,75,.07)"/>
    <ellipse cx="40" cy="193" rx="16" ry="5" stroke="url(#g2a)" stroke-width="1.5" fill="rgba(200,168,75,.05)"/>
    <rect x="30" y="155" width="20" height="22" fill="url(#g2w)"/>
    <ellipse cx="40" cy="120" rx="10" ry="3" stroke="url(#g2a)" stroke-width="1.5" fill="rgba(200,168,75,.05)"/>
    <line x1="30" y1="120" x2="30" y2="155" stroke="url(#g2a)" stroke-width="1.5"/>
    <line x1="50" y1="120" x2="50" y2="155" stroke="url(#g2a)" stroke-width="1.5"/>
    <line x1="36" y1="115" x2="28" y2="140" stroke="url(#g2a)" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="25" cy="144" rx="7" ry="5" stroke="url(#g2a)" stroke-width="1.5" fill="rgba(200,168,75,.1)"/>
    <line x1="34" y1="65" x2="40" y2="75" stroke="url(#g2a)" stroke-width="1.5"/>
    <line x1="46" y1="65" x2="40" y2="75" stroke="url(#g2a)" stroke-width="1.5"/>
    <line x1="34" y1="80" x2="40" y2="90" stroke="url(#g2a)" stroke-width="1.5"/>
    <line x1="46" y1="80" x2="40" y2="90" stroke="url(#g2a)" stroke-width="1.5"/>
    <line x1="33" y1="18" x2="33" y2="60" stroke="rgba(255,255,255,.08)" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  rig: `<svg viewBox="0 0 130 170" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g3a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#8a6a20"/></linearGradient>
      <linearGradient id="g3w" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4a9eff" stop-opacity=".28"/><stop offset="100%" stop-color="#1a4a8a" stop-opacity=".45"/></linearGradient>
    </defs>
    <path d="M38 80 L26 138 Q25 148 36 148 L74 148 Q85 148 84 138 L72 80Z" stroke="url(#g3a)" stroke-width="2" fill="rgba(200,168,75,.05)"/>
    <path d="M26 132 Q55 127 84 132 L84 138 Q85 148 74 148 L36 148 Q25 148 26 138Z" fill="url(#g3w)"/>
    <rect x="46" y="34" width="18" height="46" rx="2" stroke="url(#g3a)" stroke-width="1.5" fill="rgba(200,168,75,.04)"/>
    <rect x="43" y="23" width="24" height="13" rx="2" stroke="url(#g3a)" stroke-width="1.5" fill="rgba(200,168,75,.05)"/>
    <path d="M64 60 Q86 60 86 76 Q86 90 73 92" stroke="url(#g3a)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <rect x="62" y="88" width="22" height="24" rx="3" stroke="url(#g3a)" stroke-width="2" fill="rgba(200,168,75,.1)"/>
    <ellipse cx="73" cy="88" rx="11" ry="4" stroke="url(#g3a)" stroke-width="1.5" fill="rgba(200,168,75,.07)"/>
    <ellipse cx="55" cy="106" rx="14" ry="5" stroke="url(#g3a)" stroke-width="1.5" fill="rgba(200,168,75,.05)"/>
    <line x1="41" y1="106" x2="55" y2="135" stroke="url(#g3a)" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="55" cy="138" rx="8" ry="6" stroke="url(#g3a)" stroke-width="1.5" fill="rgba(200,168,75,.1)"/>
    <line x1="48" y1="30" x2="48" y2="66" stroke="rgba(255,255,255,.08)" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  spoon: `<svg viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g4a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#8a6a20"/></linearGradient></defs>
    <ellipse cx="134" cy="50" rx="34" ry="30" stroke="url(#g4a)" stroke-width="2" fill="rgba(200,168,75,.06)"/>
    <ellipse cx="134" cy="50" rx="22" ry="19" stroke="url(#g4a)" stroke-width="1.5" fill="rgba(200,168,75,.04)"/>
    <path d="M100 50 Q75 40 44 46 Q26 49 12 47" stroke="url(#g4a)" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M100 50 Q75 60 44 54 Q26 51 12 53" stroke="url(#g4a)" stroke-width="8" stroke-linecap="round" fill="none"/>
    <ellipse cx="10" cy="50" rx="9" ry="7" stroke="url(#g4a)" stroke-width="1.5" fill="rgba(200,168,75,.07)"/>
    <circle cx="115" cy="36" r="4" fill="rgba(200,168,75,.35)" stroke="url(#g4a)" stroke-width="1"/>
    <path d="M36 46 Q60 42 84 46" stroke="rgba(255,255,255,.1)" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  sherlock: `<svg viewBox="0 0 190 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g5a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#8a6a20"/></linearGradient></defs>
    <ellipse cx="148" cy="84" rx="30" ry="26" stroke="url(#g5a)" stroke-width="2" fill="rgba(200,168,75,.06)"/>
    <ellipse cx="148" cy="84" rx="19" ry="16" stroke="url(#g5a)" stroke-width="1.5" fill="rgba(200,168,75,.04)"/>
    <path d="M118 84 Q95 80 78 55 Q62 32 38 30 Q22 28 12 35" stroke="url(#g5a)" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M118 90 Q96 88 80 65 Q64 42 40 40 Q24 38 12 45" stroke="url(#g5a)" stroke-width="8" stroke-linecap="round" fill="none"/>
    <ellipse cx="10" cy="40" rx="9" ry="7" stroke="url(#g5a)" stroke-width="1.5" fill="rgba(200,168,75,.07)"/>
    <circle cx="130" cy="72" r="4" fill="rgba(200,168,75,.35)" stroke="url(#g5a)" stroke-width="1"/>
  </svg>`,

  chillum: `<svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g6a" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#8a6a20"/></linearGradient></defs>
    <rect x="16" y="32" width="168" height="16" rx="8" stroke="url(#g6a)" stroke-width="2" fill="rgba(200,168,75,.06)"/>
    <ellipse cx="184" cy="40" rx="10" ry="10" stroke="url(#g6a)" stroke-width="2" fill="rgba(200,168,75,.09)"/>
    <ellipse cx="184" cy="40" rx="5" ry="5" stroke="url(#g6a)" stroke-width="1.5" fill="rgba(200,168,75,.07)"/>
    <ellipse cx="16" cy="40" rx="6" ry="8" stroke="url(#g6a)" stroke-width="2" fill="rgba(200,168,75,.06)"/>
    <path d="M30 33 Q100 28 170 33" stroke="rgba(255,255,255,.09)" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  bubbler: `<svg viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g7a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#8a6a20"/></linearGradient>
      <linearGradient id="g7w" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4a9eff" stop-opacity=".28"/><stop offset="100%" stop-color="#1a4a8a" stop-opacity=".45"/></linearGradient>
    </defs>
    <ellipse cx="60" cy="125" rx="44" ry="36" stroke="url(#g7a)" stroke-width="2" fill="rgba(200,168,75,.05)"/>
    <path d="M16 125 Q60 118 104 125 L104 135 Q104 161 60 161 Q16 161 16 135Z" fill="url(#g7w)"/>
    <rect x="50" y="36" width="20" height="74" rx="3" stroke="url(#g7a)" stroke-width="2" fill="rgba(200,168,75,.04)"/>
    <rect x="47" y="24" width="26" height="14" rx="3" stroke="url(#g7a)" stroke-width="2" fill="rgba(200,168,75,.05)"/>
    <path d="M70 80 Q88 78 88 95 Q88 110 76 112" stroke="url(#g7a)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <ellipse cx="72" cy="114" rx="10" ry="8" stroke="url(#g7a)" stroke-width="1.5" fill="rgba(200,168,75,.1)"/>
    <line x1="53" y1="30" x2="53" y2="72" stroke="rgba(255,255,255,.08)" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  grinder4: `<svg viewBox="0 0 140 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g8a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#8a6a20"/></linearGradient></defs>
    <ellipse cx="70" cy="36" rx="50" ry="14" stroke="url(#g8a)" stroke-width="2" fill="rgba(200,168,75,.1)"/>
    <path d="M20 36 L20 52 Q20 68 70 68 Q120 68 120 52 L120 36" stroke="url(#g8a)" stroke-width="2" fill="rgba(200,168,75,.06)"/>
    <line x1="46" y1="22" x2="46" y2="31" stroke="url(#g8a)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="60" y1="19" x2="60" y2="28" stroke="url(#g8a)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="74" y1="19" x2="74" y2="28" stroke="url(#g8a)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="88" y1="22" x2="88" y2="31" stroke="url(#g8a)" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="70" cy="68" rx="50" ry="14" stroke="url(#g8a)" stroke-width="1.5" fill="rgba(200,168,75,.07)"/>
    <path d="M20 68 L20 82 Q20 98 70 98 Q120 98 120 82 L120 68" stroke="url(#g8a)" stroke-width="2" fill="rgba(200,168,75,.04)"/>
    <ellipse cx="70" cy="98" rx="50" ry="14" stroke="url(#g8a)" stroke-width="1.5" fill="rgba(200,168,75,.07)"/>
    <path d="M20 98 L20 112 Q20 128 70 128 Q120 128 120 112 L120 98" stroke="url(#g8a)" stroke-width="2" fill="rgba(200,168,75,.03)"/>
    <ellipse cx="70" cy="128" rx="50" ry="14" stroke="url(#g8a)" stroke-width="1.5" fill="rgba(200,168,75,.06)"/>
    <path d="M32 112 Q70 108 108 112" stroke="url(#g8a)" stroke-width="1" stroke-dasharray="3,3" opacity=".45"/>
    <circle cx="70" cy="36" r="7" stroke="url(#g8a)" stroke-width="1.5" fill="rgba(200,168,75,.15)"/>
  </svg>`,

  grinder2: `<svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g9a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#8a6a20"/></linearGradient></defs>
    <ellipse cx="70" cy="30" rx="54" ry="16" stroke="url(#g9a)" stroke-width="2" fill="rgba(200,168,75,.1)"/>
    <path d="M16 30 L16 52 Q16 72 70 72 Q124 72 124 52 L124 30" stroke="url(#g9a)" stroke-width="2" fill="rgba(200,168,75,.05)"/>
    <ellipse cx="70" cy="72" rx="54" ry="16" stroke="url(#g9a)" stroke-width="1.5" fill="rgba(200,168,75,.07)"/>
    <line x1="44" y1="15" x2="44" y2="25" stroke="url(#g9a)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="58" y1="12" x2="58" y2="22" stroke="url(#g9a)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="72" y1="12" x2="72" y2="22" stroke="url(#g9a)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="86" y1="15" x2="86" y2="25" stroke="url(#g9a)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="100" y1="19" x2="100" y2="28" stroke="url(#g9a)" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="70" cy="30" r="8" stroke="url(#g9a)" stroke-width="1.5" fill="rgba(200,168,75,.14)"/>
  </svg>`,

  papers: `<svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g10a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#8a6a20"/></linearGradient></defs>
    <rect x="20" y="18" width="60" height="104" rx="4" stroke="url(#g10a)" stroke-width="2" fill="rgba(200,168,75,.06)"/>
    <rect x="24" y="22" width="52" height="96" rx="3" stroke="url(#g10a)" stroke-width="1" opacity=".35"/>
    <line x1="20" y1="46" x2="80" y2="46" stroke="url(#g10a)" stroke-width="1.5"/>
    <text x="50" y="72" font-size="11" fill="rgba(200,168,75,.85)" text-anchor="middle" font-family="Inter,sans-serif" font-weight="700">RAW</text>
    <text x="50" y="88" font-size="7" fill="rgba(200,168,75,.5)" text-anchor="middle" font-family="Inter,sans-serif" letter-spacing="1">ORGANIC</text>
    <line x1="36" y1="100" x2="64" y2="100" stroke="url(#g10a)" stroke-width="1" opacity=".35"/>
    <line x1="36" y1="108" x2="64" y2="108" stroke="url(#g10a)" stroke-width="1" opacity=".25"/>
    <line x1="36" y1="116" x2="58" y2="116" stroke="url(#g10a)" stroke-width="1" opacity=".2"/>
  </svg>`,

  tray: `<svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g11a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#8a6a20"/></linearGradient></defs>
    <rect x="12" y="28" width="156" height="86" rx="8" stroke="url(#g11a)" stroke-width="2" fill="rgba(200,168,75,.05)"/>
    <rect x="18" y="34" width="144" height="74" rx="6" stroke="url(#g11a)" stroke-width="1" opacity=".3"/>
    <ellipse cx="50" cy="62" rx="18" ry="8" stroke="url(#g11a)" stroke-width="1.5" fill="rgba(200,168,75,.07)"/>
    <path d="M32 62 L32 77 Q32 85 50 85 Q68 85 68 77 L68 62" stroke="url(#g11a)" stroke-width="1.5" fill="rgba(200,168,75,.05)"/>
    <ellipse cx="50" cy="77" rx="18" ry="8" stroke="url(#g11a)" stroke-width="1" fill="rgba(200,168,75,.06)"/>
    <rect x="88" y="48" width="18" height="30" rx="3" stroke="url(#g11a)" stroke-width="1.5" fill="rgba(200,168,75,.06)"/>
    <path d="M91 48 Q97 40 103 48" stroke="url(#g11a)" stroke-width="1.2" fill="none"/>
    <path d="M120 50 L150 50 L148 82 L118 82Z" stroke="url(#g11a)" stroke-width="1.5" fill="rgba(200,168,75,.05)"/>
    <line x1="122" y1="62" x2="146" y2="62" stroke="url(#g11a)" stroke-width="1" opacity=".35"/>
  </svg>`,

  lighter: `<svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g12a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c8a84b"/><stop offset="100%" stop-color="#8a6a20"/></linearGradient></defs>
    <rect x="26" y="58" width="48" height="78" rx="8" stroke="url(#g12a)" stroke-width="2" fill="rgba(200,168,75,.07)"/>
    <line x1="26" y1="80" x2="74" y2="80" stroke="url(#g12a)" stroke-width="1.5" opacity=".45"/>
    <ellipse cx="50" cy="58" rx="14" ry="5" stroke="url(#g12a)" stroke-width="1.5" fill="rgba(200,168,75,.1)"/>
    <line x1="42" y1="55" x2="44" y2="61" stroke="url(#g12a)" stroke-width="1"/>
    <line x1="50" y1="53" x2="50" y2="63" stroke="url(#g12a)" stroke-width="1"/>
    <line x1="58" y1="55" x2="56" y2="61" stroke="url(#g12a)" stroke-width="1"/>
    <path d="M50 46 Q44 30 50 18 Q56 30 50 46" stroke="url(#g12a)" stroke-width="1.5" fill="rgba(200,168,75,.25)" stroke-linecap="round"/>
    <path d="M50 40 Q47 28 50 20 Q53 28 50 40" fill="rgba(255,200,60,.35)" stroke="none"/>
    <rect x="32" y="108" width="10" height="20" rx="2" stroke="url(#g12a)" stroke-width="1" opacity=".35"/>
    <rect x="45" y="110" width="10" height="18" rx="2" stroke="url(#g12a)" stroke-width="1" opacity=".35"/>
    <rect x="58" y="108" width="8" height="20" rx="2" stroke="url(#g12a)" stroke-width="1" opacity=".25"/>
  </svg>`
};

// ── Product catalog ───────────────────────────────────────────
const PRODUCTS = [
  { id: 1,  name: '12" Beaker Base Rig',           cat: 'rigs',        price: 89,  badge: 'Best Seller', art: 'beaker'  },
  { id: 2,  name: '14" Straight Tube Bong',         cat: 'rigs',        price: 110, badge: null,          art: 'straight'},
  { id: 3,  name: 'Mini Dab Rig',                   cat: 'rigs',        price: 75,  badge: 'New',         art: 'rig'     },
  { id: 4,  name: 'Slate Ceramic Hand Pipe',        cat: 'essentials',  price: 75,  badge: 'Featured',    art: 'spoon'   },
  { id: 5,  name: 'Iridescent Sherlock Pipe',       cat: 'essentials',  price: 32,  badge: null,          art: 'sherlock'},
  { id: 6,  name: 'Glass Chillum / One-Hitter',     cat: 'essentials',  price: 12,  badge: null,          art: 'chillum' },
  { id: 7,  name: 'Borosilicate Bubbler',           cat: 'essentials',  price: 45,  badge: 'New',         art: 'bubbler' },
  { id: 8,  name: '4-Piece Aerospace Grinder',      cat: 'grinders',    price: 45,  badge: 'Best Seller', art: 'grinder4'},
  { id: 9,  name: '2-Piece CNC Aluminum Grinder',   cat: 'grinders',    price: 22,  badge: null,          art: 'grinder2'},
  { id: 10, name: 'RAW King Size Papers (3-Pack)',  cat: 'essentials',  price: 10,  badge: null,          art: 'papers'  },
  { id: 11, name: 'Bamboo Rolling Tray',            cat: 'essentials',  price: 24,  badge: 'New',         art: 'tray'    },
  { id: 12, name: 'Torch Lighter',                  cat: 'essentials',  price: 18,  badge: null,          art: 'lighter' },
];

// ── Cart ──────────────────────────────────────────────────────
const cart = [];

function addToCart(id, btn) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  existing ? existing.qty++ : cart.push({ ...product, qty: 1 });
  document.getElementById('cart-badge').textContent = cart.reduce((s, i) => s + i.qty, 0);
  btn.textContent = 'Added ✓';
  btn.classList.add('added');
  setTimeout(() => { btn.textContent = 'Add to Cart'; btn.classList.remove('added'); }, 1800);
}

// ── Render products ───────────────────────────────────────────
function renderProducts(filter = 'all') {
  const items = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  document.getElementById('products-grid').innerHTML = items.map(p => `
    <div class="p-card">
      <div class="p-art">
        ${p.badge ? `<span class="p-badge${p.badge === 'New' ? ' new-badge' : ''}">${p.badge}</span>` : ''}
        ${SVG[p.art] || ''}
      </div>
      <div class="p-info">
        <span class="p-cat-tag">${p.cat}</span>
        <div class="p-name">${p.name}</div>
        <div class="p-price">$${p.price}.00</div>
        <button class="p-add" onclick="addToCart(${p.id}, this)">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

// ── Filter tabs ───────────────────────────────────────────────
document.getElementById('filter-tabs').addEventListener('click', e => {
  const tab = e.target.closest('.ftab');
  if (!tab) return;
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderProducts(tab.dataset.cat);
});

// ── Blueprint card clicks → filter products ───────────────────
document.querySelectorAll('.bp-cta').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const filter = link.dataset.target || 'all';
    document.querySelectorAll('.ftab').forEach(t => {
      t.classList.toggle('active', t.dataset.cat === filter || (filter === 'all' && t.dataset.cat === 'all'));
    });
    renderProducts(filter);
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  });
});

// ── Footer newsletter ─────────────────────────────────────────
const footerForm = document.getElementById('footer-nl-form');
if (footerForm) {
  footerForm.addEventListener('submit', e => { e.preventDefault(); });
}

// ── Mobile nav ────────────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('open');
});
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobile-menu').classList.remove('open'));
});

// ── Nav hide on scroll down ───────────────────────────────────
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.getElementById('navbar').style.transform = (y > lastY && y > 80) ? 'translateY(-100%)' : 'translateY(0)';
  lastY = y;
}, { passive: true });

// ── Newsletter ────────────────────────────────────────────────
document.getElementById('nl-form').addEventListener('submit', e => {
  e.preventDefault();
  e.target.style.display = 'none';
  document.getElementById('nl-success').style.display = 'block';
});

// ── Init ──────────────────────────────────────────────────────
renderProducts();
