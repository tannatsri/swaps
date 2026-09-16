/* ════════════════════════════════════════════════════════
   COZY CORNER  ·  script.js
   ════════════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════════════
   ★  PERSONALIZATION — edit everything in this block  ★
   ══════════════════════════════════════════════════════════ */
const PERSONALIZATION = {
    herName:       "HER_NAME",          // her name, shown on the landing
    myName:        "MY_NAME",           // your name, shown in the sign-off
    favoriteSnack: "HER_FAVORITE_SNACK",// used in the wishes card message
    favoriteDrink: "HER_FAVORITE_DRINK",// used in the warm-drink message
};


/* ══════════════════════════════════════════════════════════
   ★  CONTENT — edit the copy here  ★
   ══════════════════════════════════════════════════════════ */

/* Section 2 — Wishes
   Each card has: emoji, label, message (shown on tap)
   ─────────────────────────────────────────────────────── */
const WISHES = [
    {
        emoji:   "🫂",
        label:   "Give you a ridiculously long hug",
        message: "initiating extremely careful hug protocol… you cannot escape. this has been approved.",
    },
    {
        emoji:   "☕",
        label:   `Make you something warm`,
        message: `brewing the perfect cup, with an alarming amount of love and a completely normal amount of ${PERSONALIZATION.favoriteDrink}.`,
    },
    {
        emoji:   "🛏️",
        label:   "Tell you to stay in bed",
        message: "staying in bed is medically recommended. I'm not a doctor, but I am very confident about this.",
    },
    {
        emoji:   "🍫",
        label:   "Bring you snacks",
        message: `incoming: ${PERSONALIZATION.favoriteSnack}. no sharing required. this is a completely judgment-free zone.`,
    },
    {
        emoji:   "💆",
        label:   "Give you a head massage",
        message: "okay imagine my hands. doing the thing. right now. mentally. it's working, right?",
    },
    {
        emoji:   "🥺",
        label:   "Annoy you until you smile",
        message: "is it working yet. what about now. now? okay I'll keep going. this is non-negotiable.",
    },
];


/* Section 3 — Open When letters
   type: 'text'  → shows message text
   type: 'hug'   → shows cute hug animation + message
   type: 'game'  → scrolls to the bear game section
   accent: controls the top border colour (rose | lavender | honey | sage | rose2)
   ─────────────────────────────────────────────────────── */
const LETTERS = [
    {
        emoji:   "💌",
        label:   "you're hurting",
        hint:    "tap to open",
        accent:  "rose",
        type:    "text",
        message: `You don't have to hold it together right now.\n\nLet your body do its thing and I'll do mine, which is apparently making you websites at odd hours.\n\nI'm here. ❤️`,
    },
    {
        emoji:   "😤",
        label:   "everything is annoying",
        hint:    "tap to open",
        accent:  "lavender",
        type:    "text",
        message: "Everything is annoying and you are completely right.\n\nYou're allowed to be annoyed at literally everything. Including me.\n\n(Unfortunately for you, I'm still going to love you.)",
    },
    {
        emoji:   "🥺",
        label:   "you need a reminder",
        hint:    "tap to open",
        accent:  "honey",
        type:    "text",
        message: "You're doing better than you think you are.\n\nThis is not a biased statement from someone who is deeply biased. This is a totally objective fact from a completely neutral observer who definitely doesn't love you.",
    },
    {
        emoji:   "🫂",
        label:   "you need a hug",
        hint:    "tap to open",
        accent:  "sage",
        type:    "hug",
        message: "Sent with an unreasonable amount of warmth.\n\nI'd be there in person if I could.",
    },
    {
        emoji:   "🎲",
        label:   "you need a distraction",
        hint:    "tap to go",
        accent:  "rose2",
        type:    "game",
        message: "",
    },
];


/* Section 4 — Bear game
   Messages cycle through as she clicks.
   Add or edit freely.
   ─────────────────────────────────────────────────────── */
const BEAR_MESSAGES = [
    "click me",
    "hug received 🫂",
    "okay, one more",
    "okay fine, unlimited hugs",
    "you literally cannot stop",
    "deploying emergency cuddle protocol 🚨",
    "I'm not going anywhere 🐻",
    "still here. still hugging.",
    "this is going on your permanent record",
    "hug number {n}. impressive.",
    "at this point we're basically fused",
    "you cannot escape the hugs now",
    "okay but have you considered: more hugs",
    "I would do this forever and you know it",
];

const BEAR_HEARTS = ["❤️", "🩷", "💛", "🫧", "✨", "💗", "🌸"];


/* Section 5 — Allowed today
   ─────────────────────────────────────────────────────── */
const ALLOWED = [
    "Stay in bed as long as you want",
    "Complain — loudly, if necessary",
    "Eat something delicious and not share it",
    "Ignore responsibilities for today",
    "Watch something completely mindless",
    "Ask for attention",
    "Get spoiled a little",
    "Do absolutely nothing and feel zero guilt about it",
];


/* Section 6 — Photo captions
   Must match the number of photos you add.
   Photos go in:  assets/photos/photo1.jpg, photo2.jpg, …
   ─────────────────────────────────────────────────────── */
const PHOTO_CAPTIONS = [
    "this one ❤️",
    "how are you this cute",
    "my favorite human",
    "honestly unfair",
    "I keep this one saved",
    "yeah okay",
];

// Rotation (deg) for each polaroid — edit if you want different tilts
const PHOTO_ROTATIONS = [-2.5, 1.8, -1.2, 2.8, -1.9, 1.3];

// How many photo slots to try (matching photo1.jpg … photo6.jpg)
const PHOTO_COUNT = 6;


/* ══════════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
    applyPersonalization();
    buildGrain();
    buildBgFloats();
    buildWishes();
    buildLetters();
    buildAllowed();
    buildPhotos();
    buildAudio();
    initBear();

    // Entry button
    document.getElementById("enterBtn").addEventListener("click", enterSite);
});


/* ══════════════════════════════════════════════════════════
   PERSONALIZATION
   ══════════════════════════════════════════════════════════ */
function applyPersonalization() {
    // Sign-off at the bottom
    const sig = document.getElementById("endingSig");
    if (sig) sig.textContent = `— ${PERSONALIZATION.myName}`;
}


/* ══════════════════════════════════════════════════════════
   GRAIN TEXTURE  (canvas-generated noise)
   ══════════════════════════════════════════════════════════ */
function buildGrain() {
    const grain = document.getElementById("grain");
    if (!grain) return;

    const size = 220;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const img = ctx.createImageData(size, size);

    for (let i = 0; i < img.data.length; i += 4) {
        const v = Math.random() * 255;
        img.data[i]     = v;
        img.data[i + 1] = v;
        img.data[i + 2] = v;
        img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);

    grain.style.backgroundImage = `url(${canvas.toDataURL()})`;
    grain.style.backgroundSize  = `${size}px ${size}px`;
}


/* ══════════════════════════════════════════════════════════
   BACKGROUND FLOATING ELEMENTS
   ══════════════════════════════════════════════════════════ */
function buildBgFloats() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = document.getElementById("bg-floats");
    if (!container) return;

    const symbols  = ["✦", "✧", "♡", "·", "˚", "⋆", "✿", "❋"];
    const count    = 14;

    for (let i = 0; i < count; i++) {
        const el = document.createElement("span");
        el.className  = "float-el";
        el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        el.setAttribute("aria-hidden", "true");

        const size    = (Math.random() * 0.8 + 0.6).toFixed(2);   // 0.6–1.4rem
        const left    = (Math.random() * 92 + 2).toFixed(1);       // 2–94%
        const dur     = (Math.random() * 8  + 9).toFixed(1);       // 9–17s
        const delay   = (Math.random() * 14).toFixed(1);           // 0–14s
        const opacity = (Math.random() * 0.10 + 0.08).toFixed(2);  // 0.08–0.18
        const rot     = Math.random() > 0.5 ? 180 : -180;

        el.style.cssText = `
      --el-size:    ${size}rem;
      --el-dur:     ${dur}s;
      --el-delay:   ${delay}s;
      --el-opacity: ${opacity};
      --el-rot:     ${rot}deg;
      left: ${left}%;
    `;

        container.appendChild(el);
    }
}


/* ══════════════════════════════════════════════════════════
   LANDING → MAIN TRANSITION
   ══════════════════════════════════════════════════════════ */
function enterSite() {
    const landing = document.getElementById("sec-landing");
    const main    = document.getElementById("main-content");

    // Animate landing out
    landing.classList.add("exiting");

    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 550;

    setTimeout(() => {
        landing.hidden = true;
        main.removeAttribute("hidden");
        main.removeAttribute("aria-hidden");
        window.scrollTo({ top: 0, behavior: "instant" });
    }, duration);
}

// Called from the "come back" button at the bottom
function scrollToTop() {
    const landing = document.getElementById("sec-landing");
    const main    = document.getElementById("main-content");

    main.hidden = true;
    main.setAttribute("aria-hidden", "true");
    landing.hidden = false;
    landing.classList.remove("exiting");

    window.scrollTo({ top: 0, behavior: "instant" });
}


/* ══════════════════════════════════════════════════════════
   SECTION 2 — WISHES
   ══════════════════════════════════════════════════════════ */
function buildWishes() {
    const grid = document.getElementById("wishesGrid");
    if (!grid) return;

    WISHES.forEach((wish) => {
        const card = document.createElement("div");
        card.className  = "wish-card";
        card.tabIndex   = 0;
        card.setAttribute("role", "listitem");
        card.setAttribute("aria-expanded", "false");

        card.innerHTML = `
      <span class="wish-emoji" aria-hidden="true">${wish.emoji}</span>
      <p class="wish-label">${wish.label}</p>
      <p class="wish-message" aria-live="polite">${wish.message}</p>
    `;

        const toggle = () => {
            const isOpen = card.classList.toggle("expanded");
            card.setAttribute("aria-expanded", String(isOpen));
        };

        card.addEventListener("click", toggle);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
        });

        grid.appendChild(card);
    });
}


/* ══════════════════════════════════════════════════════════
   SECTION 3 — OPEN WHEN LETTERS
   ══════════════════════════════════════════════════════════ */
function buildLetters() {
    const grid = document.getElementById("lettersGrid");
    if (!grid) return;

    LETTERS.forEach((letter) => {
        const card = document.createElement("div");
        card.className = "letter-card";
        card.tabIndex  = 0;
        card.setAttribute("role", "listitem");
        card.setAttribute("data-accent", letter.accent);
        card.setAttribute("aria-label", `Open when ${letter.label}`);

        // Special back content
        let backHTML = "";
        if (letter.type === "hug") {
            backHTML = `
        <div class="hug-anim" aria-label="hug animation">
          <span class="hug-left"  aria-hidden="true">🤗</span>
          <span class="hug-mid"   aria-hidden="true">🫂</span>
          <span class="hug-right" aria-hidden="true">🤗</span>
        </div>
        <p class="letter-back-text">${letter.message.replace(/\n/g, "<br>")}</p>
        <p class="letter-close">tap to close</p>
      `;
        } else if (letter.type === "game") {
            backHTML = `
        <p class="letter-back-text" style="font-style:italic; color: var(--rose)">
          okay, going there now… 🐻
        </p>
      `;
        } else {
            backHTML = `
        <p class="letter-back-text">${letter.message.replace(/\n/g, "<br>")}</p>
        <p class="letter-close">tap to close</p>
      `;
        }

        card.innerHTML = `
      <div class="letter-front">
        <span class="letter-icon" aria-hidden="true">${letter.emoji}</span>
        <div>
          <p class="letter-label">open when ${letter.label}</p>
          <p class="letter-hint">${letter.hint}</p>
        </div>
      </div>
      <div class="letter-back">${backHTML}</div>
    `;

        const handleOpen = () => {
            if (letter.type === "game") {
                // Scroll to game
                const gameSection = document.getElementById("sec-game");
                if (gameSection) {
                    setTimeout(() => {
                        gameSection.scrollIntoView({ behavior: "smooth", block: "center" });
                    }, 200);
                }
                return;
            }

            const isOpen = card.classList.toggle("open");
            card.setAttribute("aria-expanded", String(isOpen));

            // Re-trigger hug animation each time it opens
            if (letter.type === "hug" && isOpen) {
                const parts = card.querySelectorAll(".hug-left, .hug-right, .hug-mid");
                parts.forEach((p) => {
                    p.style.animation = "none";
                    // Force reflow
                    void p.offsetWidth;
                    p.style.animation = "";
                });
            }
        };

        card.addEventListener("click", handleOpen);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleOpen(); }
        });

        grid.appendChild(card);
    });
}


/* ══════════════════════════════════════════════════════════
   SECTION 4 — BEAR GAME
   ══════════════════════════════════════════════════════════ */
function initBear() {
    const btn     = document.getElementById("bearBtn");
    const speech  = document.getElementById("bearSpeech");
    const counter = document.getElementById("hugCounter");
    const field   = document.getElementById("heartField");
    if (!btn) return;

    let hugCount = 0;

    const getMsg = (n) => {
        const idx = Math.min(n, BEAR_MESSAGES.length - 1);
        return BEAR_MESSAGES[idx].replace("{n}", n);
    };

    const spawnHeart = () => {
        if (!field) return;
        const h = document.createElement("span");
        h.className   = "pop-heart";
        h.textContent = BEAR_HEARTS[Math.floor(Math.random() * BEAR_HEARTS.length)];
        h.setAttribute("aria-hidden", "true");

        // Random horizontal position within the button area
        const ox = (Math.random() - 0.5) * 100;
        h.style.left   = `calc(50% + ${ox}px)`;
        h.style.bottom = "40%";
        h.style.fontSize = `${Math.random() * 0.7 + 0.9}rem`;

        field.appendChild(h);
        setTimeout(() => h.remove(), 1200);
    };

    const handleHug = () => {
        hugCount++;

        // Shake
        btn.classList.remove("shaking");
        void btn.offsetWidth; // reflow
        btn.classList.add("shaking");
        setTimeout(() => btn.classList.remove("shaking"), 360);

        // Update text
        const msgTemplate = getMsg(hugCount);
        speech.textContent = msgTemplate;

        // Counter
        if (hugCount >= 5) {
            counter.textContent = `hug ${hugCount} delivered 🫂`;
        }

        // Hearts
        const burstCount = Math.min(2 + Math.floor(hugCount / 8), 5);
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            for (let i = 0; i < burstCount; i++) {
                setTimeout(spawnHeart, i * 80);
            }
        }
    };

    btn.addEventListener("click", handleHug);
    btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleHug(); }
    });
}


/* ══════════════════════════════════════════════════════════
   SECTION 5 — ALLOWED TODAY
   ══════════════════════════════════════════════════════════ */
function buildAllowed() {
    const list = document.getElementById("allowedList");
    if (!list) return;

    ALLOWED.forEach((text, i) => {
        const li = document.createElement("li");
        li.className = "allowed-item";
        li.style.animationDelay = `${i * 0.07}s`;
        li.innerHTML = `
      <span class="check-icon" aria-hidden="true">☑</span>
      <span class="allowed-text">${text}</span>
    `;
        list.appendChild(li);
    });
}


/* ══════════════════════════════════════════════════════════
   SECTION 6 — PHOTOS
   ══════════════════════════════════════════════════════════ */
function buildPhotos() {
    const grid = document.getElementById("photosGrid");
    if (!grid) return;

    for (let i = 1; i <= PHOTO_COUNT; i++) {
        const caption  = PHOTO_CAPTIONS[i - 1] || "";
        const rotation = PHOTO_ROTATIONS[i - 1] || 0;

        const wrap = document.createElement("div");
        wrap.className = "polaroid";
        wrap.style.setProperty("--rot", `${rotation}deg`);

        const img = document.createElement("img");
        img.src  = `assets/photos/photo${i}.jpg`;
        img.alt  = caption;
        img.loading = "lazy";

        // If the photo doesn't exist, show placeholder instead
        img.onerror = () => {
            img.style.display = "none";
            const placeholder = document.createElement("div");
            placeholder.className = "polaroid-placeholder";
            placeholder.setAttribute("aria-hidden", "true");
            placeholder.textContent = "📷";
            wrap.insertBefore(placeholder, img);

            // If this is one of the first two slots and no real photo, hide entirely
            // (so the grid doesn't look broken with lots of placeholders)
            // Comment this out if you want to always show all slots:
            wrap.classList.add("hidden");
        };

        const captionEl = document.createElement("p");
        captionEl.className   = "polaroid-caption";
        captionEl.textContent = caption;

        wrap.appendChild(img);
        wrap.appendChild(captionEl);
        grid.appendChild(wrap);
    }
}


/* ══════════════════════════════════════════════════════════
   SECTION 7 — AUDIO
   ══════════════════════════════════════════════════════════ */
function buildAudio() {
    const card = document.getElementById("audioCard");
    if (!card) return;

    // Probe the audio file without autoplaying
    const probe = document.createElement("audio");
    probe.preload = "metadata";
    probe.src     = "assets/audio/message.mp3";

    probe.addEventListener("loadedmetadata", () => {
        // File exists — show real player
        card.innerHTML = `
      <span class="audio-icon" aria-hidden="true">🎙️</span>
      <p class="audio-title">A tiny message from me</p>
      <p class="audio-sub">no pressure to listen right now</p>
      <audio controls preload="none">
        <source src="assets/audio/message.mp3" type="audio/mpeg">
        Your browser doesn't support audio. Try opening the file directly.
      </audio>
    `;
    });

    probe.addEventListener("error", () => {
        // File missing — show placeholder
        card.innerHTML = `
      <span class="audio-icon" aria-hidden="true">🎙️</span>
      <p class="audio-title">A tiny message from me</p>
      <p class="audio-placeholder-note">
        (coming soon — drop a voice memo into<br>
        <code>assets/audio/message.mp3</code> when you're ready)
      </p>
    `;
    });
}
 