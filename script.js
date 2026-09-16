/* ════════════════════════════════════════════════════════
   COZY CORNER  ·  script.js
   ════════════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════════════
   ★  PERSONALIZATION — edit everything in this block  ★
   ══════════════════════════════════════════════════════════ */
const PERSONALIZATION = {
    herName:       "Bitchhhh",           // her name
    myName:        "Male Bitchhhhh",            // your name, shown in sign-off
    favoriteSnack: "tannnnnn", // used in the wishes card message
    favoriteDrink: "tannnnnn", // used in the warm-drink message
};


/* ══════════════════════════════════════════════════════════
   ★  CONTENT — edit the copy here  ★
   ══════════════════════════════════════════════════════════ */

/* Section 2 — Wishes */
const WISHES = [
    {
        emoji:   "🫂",
        label:   "Give you a ridiculously long hug",
        message: "initiating extremely careful hug protocol… you cannot escape. this has been approved.",
    },
    {
        emoji:   "☕",
        label:   "Make you something warm",
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
    {
        emoji:   "🎵",
        label:   "Make you a playlist",
        message: "playlist name: 'for when everything is too much.' song 1: the one you always skip but secretly need.",
    },
    {
        emoji:   "🎬",
        label:   "Watch something with you",
        message: "you pick. I will not complain. I will hold the snacks. this is a judgment-free viewing zone.",
    },
    {
        emoji:   "🌧️",
        label:   "Sit with you in the sad",
        message: "not to fix it. not to rush it. just to be right there with you in it. that's the whole plan.",
    },
    {
        emoji:   "✉️",
        label:   "Write you something",
        message: "a whole letter. that you can reread later. when today feels far away and better days feel closer.",
    },
];


/* Section 3 — Open When letters */
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
    {
        emoji:   "🌀",
        label:   "you're overthinking",
        hint:    "tap to open",
        accent:  "lavender",
        type:    "text",
        message: "I know your brain is being very loud right now.\n\nBut your brain is also the same brain that convinced you it was fine. It is not always right.\n\nHere is what's actually true: you are okay. This will pass. And I'm not going anywhere.",
    },
    {
        emoji:   "🌙",
        label:   "you miss me",
        hint:    "tap to open",
        accent:  "honey",
        type:    "text",
        message: "I miss you too. Probably more.\n\nI'm thinking about you right now. Somewhere between 'what is she doing' and 'I hope she's eating something nice.'\n\nThis website is proof that you take up a disproportionate amount of my brain. I'm fine with it. ❤️",
    },
    {
        emoji:   "😂",
        label:   "you need to laugh",
        hint:    "tap to open",
        accent:  "sage",
        type:    "text",
        message: "okay so:\n\nDucks have regional accents. Baby elephants suck their trunks like a pacifier. Sea otters hold hands while sleeping so they don't drift apart.\n\nYou're welcome. Also I love you. Also you're cute. Anyway.",
    },
];


/* Section 4 — Bear game messages */
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
    "the bear is fully committed",
    "emotionally? yes. physically? very soon.",
    "each one of these is from me, btw",
    "your hug quota for today: unlimited",
    "the bear has no complaints",
    "imagine a very warm person doing this. that's me.",
    "still here. still warm. still yours.",
    "hug {n} delivered ❤️",
    "you're very good at this",
    "scientifically: hugs = good",
    "bear status: fully operational",
    "this is the most important thing I've ever built",
    "no seriously. the bear cannot leave even if it wanted to.",
    "still going. love this for us.",
    "hug {n} and counting. no ceiling.",
    "ok at this point the bear IS you",
];

const BEAR_HEARTS = ["❤️", "🩷", "💛", "🫧", "✨", "💗", "🌸", "🩵", "💝", "🫀"];

// Bear emoji + milestone reactions
const BEAR_MILESTONES = [
    { at: 10,  emoji: "🐻‍❄️", speech: "you unlocked polar bear mode ❄️",              counter: "10 hugs. we are committed now." },
    { at: 25,  emoji: "🧸",    speech: "upgraded to Teddy Bear tier. you earned this.", counter: "25 hugs. this is a lifestyle." },
    { at: 50,  emoji: "🐨",    speech: "50 hugs!! statistically unhinged 🐨",           counter: "50 hugs. the bear is thriving." },
    { at: 100, emoji: "👑",    speech: "ONE HUNDRED HUGS. hug royalty. forever.",        counter: "100 hugs. we made history." },
];


/* Section 5 — Allowed today */
const ALLOWED = [
    "Stay in bed as long as you want",
    "Complain — loudly, if necessary",
    "Eat something delicious and not share it",
    "Ignore responsibilities for today",
    "Watch something completely mindless",
    "Ask for attention",
    "Get spoiled a little",
    "Do absolutely nothing and feel zero guilt about it",
    "Cry if you need to — it's just your body being honest",
    "Order the thing. You deserve the thing.",
    "Cancel plans without a detailed explanation",
    "Wear the comfy thing all day",
    "Ask to be held",
    "Be sad without trying to fix it",
];


/* Section 7 — Love Notes Jar
   These show up one at a time when she taps the jar.
   Write as many as you like — they cycle randomly.
   ─────────────────────────────────────────────────────── */
const LOVE_NOTES = [
    "I think about your laugh at the weirdest times. Like, I'll be doing something completely unrelated and suddenly — yeah. There it is.",
    "You are genuinely my favorite person and I think about that every single day.",
    "I don't know how you do it, but you make everything feel a little safer just by existing in it.",
    "I hope you know that on your worst days, you're still someone I'd choose immediately.",
    "There is nothing about you I would trade. Not one thing.",
    "The version of you that's struggling right now is still the best person I know.",
    "I keep finding little reasons to love you in completely ordinary moments.",
    "You deserve softness. So much softness. This website is my attempt at some of it.",
    "If I could send you one thing right now, it would just be this: you're doing okay. More than okay.",
    "I'm proud of you. For today. For all the tiny things you do that no one else sees.",
    "You're allowed to need things. You're allowed to ask. I'm not going anywhere.",
    "There is so much good in you. So much. I wish you could see it the way I do.",
    "Thank you for letting me be someone you trust. I don't take that lightly.",
    "On your hardest days you're still someone who makes the world better. That's just who you are.",
    "I love you in a way that doesn't require you to be okay. You can just be whatever you are right now.",
    "You're my favorite thing that happened to me. I don't say that enough.",
    "Somewhere right now I am probably thinking about you. This is not a rare occurrence.",
];


/* Section 6 — Photo captions */
const PHOTO_CAPTIONS = [
    "this one ❤️",
    "how are you this cute",
    "my favorite human",
    "honestly unfair",
    "I keep this one saved",
    "yeah okay",
];

const PHOTO_ROTATIONS = [-2.5, 1.8, -1.2, 2.8, -1.9, 1.3];
const PHOTO_COUNT = 6;


/* Random compliments — surprise button */
const COMPLIMENTS = [
    "you have the best laugh and I think about it constantly",
    "the way you exist is genuinely unfair to everyone else",
    "you're someone people feel lucky to know. I feel lucky to know you.",
    "your brain works in a way I find genuinely fascinating",
    "you're incredibly easy to love, in case nobody told you today",
    "when you're happy it makes the whole room different",
    "I don't know how you're this cute but please never stop",
    "you are allowed to take up space. a lot of it.",
    "there is literally no one else I'd rather be annoyed by",
    "you're doing so much better than you think you are",
    "I would choose you every single time. in every timeline.",
    "your heart is one of the best things I've ever encountered",
    "you make things better just by being there",
    "I like you so much it's actually a little embarrassing",
    "you smell like the best day I ever had",
    "I genuinely cannot believe I get to know you",
    "every time you walk into a room, it gets better",
    "you're funny in a way that makes me want to cry a little",
    "the version of you that exists right now? more than enough.",
    "loving you is very easy. I want you to know that.",
];

/* Section toasts — subtle affirmations as you scroll */
const SECTION_TOASTS = {
    "sec-wishes":  ["still thinking about you 💭", "wishing I could do all of these rn ✨", "you deserve all of this tbh"],
    "sec-letters": ["open whichever one you need 💌", "no wrong choice here", "take your time ❤️"],
    "sec-game":    ["emergency station is OPEN 🚨", "bear is fully staffed and ready", "hugs: unlimited supply"],
    "sec-allowed": ["all of this. officially. ✅", "no rules today. really.", "doctor's orders. see below."],
    "sec-photos":  ["look at you 🥺", "you are very cute, just saying 📸", "objectively adorable. I have data."],
    "sec-ending":  ["you made it ❤️", "thank you for being here 🌸", "come back whenever you need 💙"],
};

/* Compliment emojis (paired randomly with compliment text) */
const COMPLIMENT_EMOJIS = ["💗", "🌸", "✨", "🩷", "💛", "🫧", "💝", "🌷", "⭐", "🫀"];


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
    buildSurpriseButton();
    buildSectionObserver();
    buildCursorTrail();
    initLandingHeartClick();
    initIdleToast();
    initTypingEaster();

    document.getElementById("enterBtn").addEventListener("click", enterSite);
});


/* ══════════════════════════════════════════════════════════
   PERSONALIZATION
   ══════════════════════════════════════════════════════════ */
function applyPersonalization() {
    const sig = document.getElementById("endingSig");
    if (sig) sig.textContent = `— ${PERSONALIZATION.myName}`;
}


/* ══════════════════════════════════════════════════════════
   GRAIN TEXTURE
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

    const symbols = ["✦", "✧", "♡", "·", "˚", "⋆", "✿", "❋"];
    const count   = 14;

    for (let i = 0; i < count; i++) {
        const el = document.createElement("span");
        el.className   = "float-el";
        el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        el.setAttribute("aria-hidden", "true");

        const size    = (Math.random() * 0.8 + 0.6).toFixed(2);
        const left    = (Math.random() * 92 + 2).toFixed(1);
        const dur     = (Math.random() * 8  + 9).toFixed(1);
        const delay   = (Math.random() * 14).toFixed(1);
        const opacity = (Math.random() * 0.10 + 0.08).toFixed(2);
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
   LANDING → MAIN TRANSITION  (with confetti burst!)
   ══════════════════════════════════════════════════════════ */
function enterSite() {
    const btn     = document.getElementById("enterBtn");
    const landing = document.getElementById("sec-landing");
    const main    = document.getElementById("main-content");

    // Confetti burst from button
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const rect = btn.getBoundingClientRect();
        spawnConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 18);
    }

    landing.classList.add("exiting");

    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 550;
    setTimeout(() => {
        landing.hidden = true;
        main.removeAttribute("hidden");
        main.removeAttribute("aria-hidden");
        window.scrollTo({ top: 0, behavior: "instant" });
    }, duration);
}

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

            if (letter.type === "hug" && isOpen) {
                const parts = card.querySelectorAll(".hug-left, .hug-right, .hug-mid");
                parts.forEach((p) => {
                    p.style.animation = "none";
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
   SECTION 4 — BEAR GAME  (with milestones + evolution)
   ══════════════════════════════════════════════════════════ */
function initBear() {
    const btn     = document.getElementById("bearBtn");
    const speech  = document.getElementById("bearSpeech");
    const counter = document.getElementById("hugCounter");
    const field   = document.getElementById("heartField");
    const emoji   = document.getElementById("bearEmoji");
    if (!btn) return;

    let hugCount = 0;
    let currentMilestoneIdx = 0;

    const getMsg = (n) => {
        // After we exhaust the list, cycle through the last few messages
        const idx = n < BEAR_MESSAGES.length
            ? n
            : BEAR_MESSAGES.length - 1 - (n % 5);
        return (BEAR_MESSAGES[Math.max(0, idx)] || BEAR_MESSAGES[BEAR_MESSAGES.length - 1])
            .replace("{n}", n);
    };

    const spawnBearHeart = () => {
        if (!field) return;
        const h = document.createElement("span");
        h.className   = "pop-heart";
        h.textContent = BEAR_HEARTS[Math.floor(Math.random() * BEAR_HEARTS.length)];
        h.setAttribute("aria-hidden", "true");

        const ox = (Math.random() - 0.5) * 120;
        h.style.left     = `calc(50% + ${ox}px)`;
        h.style.bottom   = "40%";
        h.style.fontSize = `${Math.random() * 0.7 + 0.9}rem`;

        field.appendChild(h);
        setTimeout(() => h.remove(), 1200);
    };

    const checkMilestone = (n) => {
        if (currentMilestoneIdx >= BEAR_MILESTONES.length) return;
        const ms = BEAR_MILESTONES[currentMilestoneIdx];
        if (n === ms.at) {
            currentMilestoneIdx++;
            emoji.textContent   = ms.emoji;
            speech.textContent  = ms.speech;
            counter.textContent = ms.counter;

            // Flash the screen with a warm glow
            const flash = document.createElement("div");
            flash.className = "milestone-flash";
            document.body.appendChild(flash);
            setTimeout(() => flash.remove(), 900);

            // Big heart burst
            if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                for (let i = 0; i < 12; i++) {
                    setTimeout(spawnBearHeart, i * 60);
                }
            }
        }
    };

    const handleHug = () => {
        hugCount++;

        btn.classList.remove("shaking");
        void btn.offsetWidth;
        btn.classList.add("shaking");
        setTimeout(() => btn.classList.remove("shaking"), 360);

        speech.textContent = getMsg(hugCount);

        if (hugCount >= 5) {
            counter.textContent = `hug ${hugCount} delivered 🫂`;
        }

        const burstCount = Math.min(2 + Math.floor(hugCount / 8), 6);
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            for (let i = 0; i < burstCount; i++) {
                setTimeout(spawnBearHeart, i * 80);
            }
        }

        checkMilestone(hugCount);
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
        img.src     = `assets/photos/photo${i}.jpg`;
        img.alt     = caption;
        img.loading = "lazy";

        img.onerror = () => {
            img.style.display = "none";
            const placeholder = document.createElement("div");
            placeholder.className = "polaroid-placeholder";
            placeholder.setAttribute("aria-hidden", "true");
            placeholder.textContent = "📷";
            wrap.insertBefore(placeholder, img);
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
   SECTION 7 — LOVE NOTES JAR
   Tap the jar → pulls a random note, typewriter-style.
   No setup needed. Zero user effort. Just love.
   ══════════════════════════════════════════════════════════ */
function buildAudio() {
    const card = document.getElementById("audioCard");
    if (!card) return;

    // Rename the section heading while we're at it
    const section = document.getElementById("sec-audio");
    if (section) section.setAttribute("aria-label", "Love notes jar");

    let lastIdx   = -1;
    let typing    = false;

    card.innerHTML = `
      <div class="jar-wrap" id="jarWrap" role="button" tabindex="0"
           aria-label="Tap to pull a love note">
        <span class="jar-emoji" id="jarEmoji" aria-hidden="true">🫙</span>
        <p class="jar-prompt" id="jarPrompt">tap the jar</p>
        <p class="jar-sub"    id="jarSub">there are notes inside</p>
      </div>
      <div class="note-display" id="noteDisplay" aria-live="polite" hidden>
        <p class="note-text handwrite" id="noteText"></p>
        <button class="note-next-btn" id="noteNextBtn" aria-label="Pull another note">
          pull another ↻
        </button>
      </div>
    `;

    const jarWrap   = card.querySelector("#jarWrap");
    const jarEmoji  = card.querySelector("#jarEmoji");
    const jarPrompt = card.querySelector("#jarPrompt");
    const jarSub    = card.querySelector("#jarSub");
    const display   = card.querySelector("#noteDisplay");
    const noteText  = card.querySelector("#noteText");
    const nextBtn   = card.querySelector("#noteNextBtn");

    const pickNote = () => {
        let idx;
        do { idx = Math.floor(Math.random() * LOVE_NOTES.length); }
        while (idx === lastIdx && LOVE_NOTES.length > 1);
        lastIdx = idx;
        return LOVE_NOTES[idx];
    };

    const typeNote = (text) => {
        if (typing) return;
        typing     = true;
        noteText.textContent = "";
        display.hidden       = false;
        nextBtn.style.opacity = "0";

        let i = 0;
        const speed = 22; // ms per character

        const tick = () => {
            if (i < text.length) {
                noteText.textContent += text[i++];
                setTimeout(tick, speed + Math.random() * 14);
            } else {
                typing = false;
                nextBtn.style.opacity = "1";
            }
        };
        tick();
    };

    const shakeAndReveal = () => {
        if (typing) return;

        // Shake the jar
        jarEmoji.classList.remove("jar-shake");
        void jarEmoji.offsetWidth;
        jarEmoji.classList.add("jar-shake");

        // Fade out the prompt
        jarPrompt.style.opacity = "0";
        jarSub.style.opacity    = "0";

        setTimeout(() => {
            typeNote(pickNote());
        }, 350);
    };

    jarWrap.addEventListener("click", shakeAndReveal);
    jarWrap.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); shakeAndReveal(); }
    });

    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (typing) return;
        noteText.style.opacity = "0";
        setTimeout(() => {
            noteText.style.opacity = "1";
            typeNote(pickNote());
        }, 200);
    });
}


/* ══════════════════════════════════════════════════════════
   ★  NEW: SURPRISE COMPLIMENT BUTTON
   Injected into the "allowed" section after the doctor note
   ══════════════════════════════════════════════════════════ */
function buildSurpriseButton() {
    const doctorNote = document.querySelector(".doctor-note");
    if (!doctorNote) return;

    const btn = document.createElement("button");
    btn.className   = "surprise-btn";
    btn.textContent = "✦ give me a random compliment";
    btn.setAttribute("aria-label", "Show a random compliment");

    let lastIdx = -1;

    btn.addEventListener("click", () => {
        // Pick a new one (no repeat)
        let idx;
        do { idx = Math.floor(Math.random() * COMPLIMENTS.length); }
        while (idx === lastIdx && COMPLIMENTS.length > 1);
        lastIdx = idx;

        showComplimentOverlay(COMPLIMENTS[idx]);

        // Little sparkle burst from button
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const rect = btn.getBoundingClientRect();
            spawnConfetti(rect.left + rect.width / 2, rect.top, 8);
        }
    });

    doctorNote.insertAdjacentElement("afterend", btn);
}

function showComplimentOverlay(text) {
    const overlay = document.createElement("div");
    overlay.className = "compliment-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Compliment");

    const emoji = COMPLIMENT_EMOJIS[Math.floor(Math.random() * COMPLIMENT_EMOJIS.length)];

    overlay.innerHTML = `
    <div class="compliment-card">
      <span class="compliment-emoji" aria-hidden="true">${emoji}</span>
      <p class="compliment-text">"${text}"</p>
      <span class="compliment-close">tap anywhere to close</span>
    </div>
  `;

    const close = () => {
        overlay.classList.add("leaving");
        setTimeout(() => overlay.remove(), 300);
    };

    overlay.addEventListener("click", close);
    document.body.appendChild(overlay);
    overlay.querySelector(".compliment-card").focus?.();
}


/* ══════════════════════════════════════════════════════════
   ★  NEW: SECTION SCROLL TOASTS
   One subtle toast fires the first time each section enters view
   ══════════════════════════════════════════════════════════ */
let toastQueue = [];
let toastShowing = false;

function showToast(msg, delay = 0) {
    toastQueue.push({ msg, delay });
    if (!toastShowing) drainToastQueue();
}

function drainToastQueue() {
    if (toastQueue.length === 0) { toastShowing = false; return; }
    toastShowing = true;
    const { msg, delay } = toastQueue.shift();

    setTimeout(() => {
        const toast = document.createElement("div");
        toast.className   = "site-toast";
        toast.textContent = msg;
        toast.setAttribute("role", "status");
        toast.setAttribute("aria-live", "polite");

        toast.addEventListener("click", () => dismiss(toast));
        document.body.appendChild(toast);

        const dismiss = (el) => {
            el.classList.add("leaving");
            setTimeout(() => { el.remove(); drainToastQueue(); }, 300);
        };

        setTimeout(() => dismiss(toast), 3800);
    }, delay);
}

function buildSectionObserver() {
    if (!("IntersectionObserver" in window)) return;

    const seen = new Set();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            if (seen.has(id)) return;
            seen.add(id);

            const options = SECTION_TOASTS[id];
            if (!options) return;

            const msg = options[Math.floor(Math.random() * options.length)];
            showToast(msg, 600);
        });
    }, { threshold: 0.25 });

    Object.keys(SECTION_TOASTS).forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
}


/* ══════════════════════════════════════════════════════════
   ★  NEW: CURSOR SPARKLE TRAIL (desktop / fine pointer only)
   ══════════════════════════════════════════════════════════ */
function buildCursorTrail() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return; // skip on touch

    const symbols = ["✦", "✧", "♡", "✿", "·", "˚", "⋆", "❋"];
    let lastSpawn = 0;
    const THROTTLE = 90; // ms

    document.addEventListener("mousemove", (e) => {
        const now = Date.now();
        if (now - lastSpawn < THROTTLE) return;
        lastSpawn = now;

        // 40% chance to spawn — keeps it sparse
        if (Math.random() > 0.40) return;

        const el = document.createElement("span");
        el.className   = "cursor-sparkle";
        el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        el.setAttribute("aria-hidden", "true");
        el.style.left     = `${e.clientX}px`;
        el.style.top      = `${e.clientY}px`;
        el.style.fontSize = `${Math.random() * 0.5 + 0.65}rem`;
        el.style.color    = `hsl(${Math.random() * 40 + 340}, 70%, 70%)`; // rosy range

        document.body.appendChild(el);
        setTimeout(() => el.remove(), 900);
    });
}


/* ══════════════════════════════════════════════════════════
   ★  NEW: LANDING HEART CLICK BURST
   Click the ❤️ in the title → mini confetti
   ══════════════════════════════════════════════════════════ */
function initLandingHeartClick() {
    const heart = document.querySelector(".pulse-heart");
    if (!heart) return;

    heart.style.cursor = "pointer";

    heart.addEventListener("click", (e) => {
        e.stopPropagation();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const rect = heart.getBoundingClientRect();
        spawnConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 14);
        showToast("💗 caught you clicking the heart");
    });
}


/* ══════════════════════════════════════════════════════════
   ★  NEW: CONFETTI BURST UTILITY
   ══════════════════════════════════════════════════════════ */
function spawnConfetti(cx, cy, count = 12) {
    const pieces = ["❤️", "🩷", "✨", "💛", "🌸", "💗", "✦", "🫧", "💝", "⭐"];

    for (let i = 0; i < count; i++) {
        const el = document.createElement("span");
        el.className   = "confetti-piece";
        el.textContent = pieces[Math.floor(Math.random() * pieces.length)];
        el.setAttribute("aria-hidden", "true");

        const angle  = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
        const dist   = Math.random() * 80 + 50;
        const dx     = Math.round(Math.cos(angle) * dist);
        const dy     = Math.round(Math.sin(angle) * dist - 30);
        const rot    = Math.round((Math.random() - 0.5) * 360);
        const dur    = (Math.random() * 0.5 + 0.9).toFixed(2);
        const delay  = (Math.random() * 0.12).toFixed(2);

        el.style.cssText = `
      left: ${cx}px;
      top:  ${cy}px;
      font-size: ${Math.random() * 0.6 + 0.8}rem;
      --cf-x:     ${dx}px;
      --cf-y:     ${dy}px;
      --cf-rot:   ${rot}deg;
      --cf-dur:   ${dur}s;
      --cf-delay: ${delay}s;
    `;

        document.body.appendChild(el);
        setTimeout(() => el.remove(), (parseFloat(dur) + parseFloat(delay)) * 1000 + 100);
    }
}


/* ══════════════════════════════════════════════════════════
   ★  NEW: IDLE TOAST
   After 45 s of no mouse / touch activity → gentle check-in
   ══════════════════════════════════════════════════════════ */
function initIdleToast() {
    const IDLE_MS = 45_000;
    const IDLE_MESSAGES = [
        "still here if you need me 💙",
        "not going anywhere 🐻",
        "take your time. really.",
        "I made this with a lot of love 💗",
        "you don't have to do anything right now ✨",
    ];

    let timer;
    let fired = false;

    const reset = () => {
        if (fired) return;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fired = true;
            const msg = IDLE_MESSAGES[Math.floor(Math.random() * IDLE_MESSAGES.length)];
            showToast(msg);
        }, IDLE_MS);
    };

    ["mousemove", "click", "keydown", "touchstart", "scroll"].forEach((ev) => {
        window.addEventListener(ev, reset, { passive: true });
    });

    reset(); // start
}


/* ══════════════════════════════════════════════════════════
   ★  NEW: TYPING EASTER EGG
   Type "love" anywhere → confetti shower + compliment
   ══════════════════════════════════════════════════════════ */
function initTypingEaster() {
    const TARGET = "love";
    let buffer = "";

    document.addEventListener("keydown", (e) => {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        // Only single printable characters
        if (e.key.length !== 1) { buffer = ""; return; }

        buffer = (buffer + e.key.toLowerCase()).slice(-TARGET.length);

        if (buffer === TARGET) {
            buffer = "";
            triggerLoveEasterEgg();
        }
    });
}

function triggerLoveEasterEgg() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Big confetti shower from center
    spawnConfetti(window.innerWidth / 2, window.innerHeight / 2, 28);

    // Also show a compliment
    const idx  = Math.floor(Math.random() * COMPLIMENTS.length);
    setTimeout(() => showComplimentOverlay(COMPLIMENTS[idx]), 400);
}
