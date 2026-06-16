const chapters = [
  {
    number: "1",
    title: "HUMAN.EXE",
    theme: "Connection",
    question: "What makes us human?",
    status: "STATUS: CONNECTION RETAINED.",
    color: "var(--cyan)",
    href: "https://drsparrow11.github.io/human-exe/",
    youtube: "https://www.youtube.com/playlist?list=PL7NolO6GeT1BOtUsfCJOvJMiXSrmP3iUR",
    spotify: "https://open.spotify.com/album/61CsQULqATUZtFBFaqjOri?si=CosflNFITxuiExRIHc0xRQ",
    active: true,
    icon: "heart",
    image: "assets/chapter-icons/chapter-01-glyph-alpha.png?v=2",
  },
  {
    number: "2",
    title: "CONTINUITY//SELF",
    theme: "Memory",
    question: "What survives after moments end?",
    status: "STATUS: MEMORY RETAINED.",
    color: "var(--amber)",
    href: "https://drsparrow11.github.io/CONTINUITY-SELF/",
    youtube: "https://www.youtube.com/playlist?list=PL7NolO6GeT1BBuLlMmzs3wvOoFf3o92YO",
    spotify: "https://open.spotify.com/album/7ybqOx2RPFDJLHcew3rX9s?si=RlEM6B8RRj-SxcvxArcXsw",
    active: true,
    icon: "dna",
    image: "assets/chapter-icons/chapter-02-glyph-alpha.png?v=2",
  },
  {
    number: "3",
    title: "FALSE.ROOT",
    theme: "Truth",
    question: "What if the thing we blamed was never the real problem?",
    status: "STATUS: INTEGRITY COMPROMISED.",
    color: "var(--red)",
    href: "https://drsparrow11.github.io/false-root/",
    youtube: "https://www.youtube.com/playlist?list=PL7NolO6GeT1AZ8b-7UHl80roXRxTScGLx",
    spotify: "https://open.spotify.com/album/6G5XdXD4rN9znQawybYxcF?si=U-IYSyADRBqywQjxTPtS8Q",
    active: true,
    icon: "root",
    image: "assets/chapter-icons/chapter-03-glyph-alpha.png?v=2",
  },
  {
    number: "4",
    title: "GHOST.PROTOCOL",
    theme: "Absence",
    question: "Can someone be gone and still remain?",
    status: "STATUS: SIGNAL DETECTED.",
    color: "#cfd9e1",
    href: "https://drsparrow11.github.io/ghost.protocol/",
    youtube: "https://www.youtube.com/playlist?list=PL7NolO6GeT1Ct9RJmSJdHH-8osbngj3nD",
    active: true,
    icon: "ghost",
    image: "assets/chapter-icons/chapter-04-glyph-alpha.png?v=2",
  },
  {
    number: "5",
    title: "MIRROR.CACHE",
    theme: "Reflection",
    question: "Can the mirror remember you without erasing you?",
    status: "STATUS: CACHE RESTORED.",
    color: "#ff7ad9",
    href: "https://drsparrow11.github.io/mirror.cache/",
    youtube: "https://www.youtube.com/playlist?list=PL7NolO6GeT1DRbNExZtBVM4HUYzlJeGBe",
    active: true,
    icon: "fork",
    image: "assets/chapter-icons/chapter-05-glyph-alpha.png?v=2",
  },
  {
    number: "6",
    title: "DEAD.AIR",
    theme: "Doubt",
    question: "Who are you when nothing makes sense anymore?",
    status: "TRANSMISSION INTERRUPTED",
    color: "#d7e7f4",
    href: "https://drsparrow11.github.io/dead.air/",
    youtube: "https://www.youtube.com/watch?v=vDiTufIlPPE&list=PLIE9jS6fj9PI",
    icon: "deadair",
    image: "assets/chapter-icons/chapter-06-glyph-alpha.png?v=2",
  },
  {
    number: "7",
    status: "CORE SIGNAL DETECTED",
    color: "var(--red)",
    icon: "pulse",
    image: "assets/chapter-icons/chapter-07-glyph-alpha.png?v=2",
  },
  {
    number: "8",
    status: "LEGACY TRACE FOUND",
    color: "var(--cyan)",
    icon: "star",
    image: "assets/chapter-icons/chapter-08-glyph-alpha.png?v=2",
  },
  {
    number: "9",
    status: "SIGNAL FADING",
    color: "var(--violet)",
    icon: "bird",
    image: "assets/chapter-icons/chapter-09-glyph-alpha.png?v=2",
  },
  {
    number: "10",
    status: "FINAL ECHO LOCKED",
    color: "var(--teal)",
    icon: "horizon",
    image: "assets/chapter-icons/chapter-10-glyph-alpha.png?v=2",
  },
];

const iconPaths = {
  heart: `<path d="M24 39s-15-8.7-18-19.2C4 12.8 8.2 7 14.8 7c4 0 7.2 2.2 9.2 5.5C26 9.2 29.2 7 33.2 7 39.8 7 44 12.8 42 19.8 39 30.3 24 39 24 39Z" />`,
  dna: `<path d="M16 6c15 10 15 20 0 30s-15 20 0 30M32 6C17 16 17 26 32 36s15 20 0 30" /><path d="M16 17h16M12 30h24M16 43h16M12 56h24" />`,
  root: `<path d="M24 6 39 14v18L24 40 9 32V14L24 6Z" /><path d="M24 15 31 19v8l-7 5-7-5v-8l7-4Z" /><path d="M24 40v8M24 48 13 58M24 48l11 10M17 55l-7 11M31 55l7 11" />`,
  ghost: `<path d="M24 7c-11 0-18 10-16 23 1 8 7 14 12 21 3 4 3 8 4 13 1-5 2-9 5-13 5-7 11-13 12-21C43 17 35 7 24 7Z" /><path d="M14 38c-3 5-5 10-5 18M34 38c3 5 5 10 5 18M17 30c5 3 10 3 15 0" />`,
  fork: `<path d="M24 68V34M24 34 10 16M24 34l14-18M10 16v14M38 16v14" /><path d="M24 34V12M17 20l7-8 7 8" />`,
  deadair: `<path d="M4 25h12l4-11 7 25 10-34 7 20h20" /><path d="M14 37c7 6 34 6 42 0" />`,
  pulse: `<path d="M4 25h15l4-12 9 26 11-35 8 21h15" />`,
  star: `<path d="M24 20l4 12 12 4-12 4-4 13-4-13-12-4 12-4 4-12Z" /><path d="M42 4 15 31M35 3 13 24" />`,
  bird: `<path d="M5 32c17-4 27-13 36-27-1 14 7 23 31 26-16 5-26 12-32 23-3-9-12-16-35-22Z" /><path d="M36 28c-9 4-18 8-26 17" />`,
  horizon: `<path d="M5 33c8-13 50-13 58 0" /><path d="M11 41h46M20 48h28" />`,
};

const chaptersEl = document.querySelector("#chapters");
const selectedNode = document.querySelector("#selected-node");
const chapterLibrary = document.querySelector("#chapter-library");

function chapterIcon(chapter) {
  return `<img src="${chapter.image}" alt="" aria-hidden="true" />`;
}

function chapterActions(chapter) {
  if (!chapter.active) return "";

  const spotifyAction = chapter.spotify
    ? `<a class="chapter-action" href="${chapter.spotify}" target="_blank" rel="noopener noreferrer" title="Open Spotify album" aria-label="Open ${chapter.title} Spotify album">♬</a>`
    : `<span class="chapter-action disabled" title="Spotify album pending" aria-label="${chapter.title} Spotify album pending">♬</span>`;

  return `
    <span class="chapter-actions" aria-label="${chapter.title} actions">
      <a class="chapter-action" href="${chapter.href}" target="_blank" rel="noopener noreferrer" title="Open chapter site" aria-label="Open ${chapter.title} chapter site">↗</a>
      <a class="chapter-action" href="${chapter.youtube}" target="_blank" rel="noopener noreferrer" title="Open YouTube playlist" aria-label="Open ${chapter.title} YouTube playlist">▶</a>
      ${spotifyAction}
    </span>
  `;
}

function renderChapters() {
  chaptersEl.innerHTML = chapters
    .map((chapter, index) => {
      const locked = !chapter.active;
      const activeClass = index === 0 ? " active" : "";
      const title = locked
        ? ``
        : `<span class="chapter-name-row">
             <span class="chapter-name">${chapter.title}</span>
             ${chapterActions(chapter)}
           </span>
           <span class="chapter-theme">${chapter.theme}</span>
           <p class="chapter-question">${chapter.question}</p>`;

      return `
        <article
          class="chapter-card${locked ? " locked" : ""}${activeClass}"
          role="button"
          tabindex="0"
          style="color: ${chapter.color}"
          data-index="${index}"
          aria-label="${locked ? `Chapter ${chapter.number}, ${chapter.status}` : `Chapter ${chapter.number}, ${chapter.title}`}"
        >
          <span class="chapter-number">${chapter.number}</span>
          <span class="chapter-icon">${chapterIcon(chapter)}</span>
          <span class="chapter-copy">
            ${title}
            <span class="chapter-status">${chapter.status}</span>
          </span>
        </article>
      `;
    })
    .join("");
}

function setSelected(index) {
  const chapter = chapters[index];
  document.querySelectorAll(".chapter-card").forEach((card) => {
    card.classList.toggle("active", Number(card.dataset.index) === index);
  });

  if (chapter.active) {
    selectedNode.innerHTML = `
      NODE ${chapter.number} OPEN: ${chapter.title} //
      ${chapter.status}
      <a class="inline-link" href="${chapter.href}" target="_blank" rel="noopener noreferrer">CONTINUE TO TRANSMISSION</a>
    `;
    return;
  }

  selectedNode.textContent = `NODE ${chapter.number}: ${chapter.status}. NAME REDACTED UNTIL SIGNAL STABILIZES.`;
}

renderChapters();
setSelected(0);

function renderChapterLibrary() {
  if (!chapterLibrary) return;

  chapterLibrary.innerHTML = chapters
    .map((chapter, index) => {
      const number = chapter.number.padStart(2, "0");
      const title = chapter.active ? chapter.title : "UNRESOLVED NODE";
      const theme = chapter.active ? chapter.theme : "Signal pending";
      const question = chapter.active
        ? chapter.question
        : "Name withheld until the archive receives enough signal.";
      const action = chapter.active ? "Open transmission" : "Locked";
      const tag = chapter.active ? "a" : "button";
      const href = chapter.active
        ? ` href="${chapter.href}" target="_blank" rel="noopener noreferrer"`
        : "";
      const disabled = chapter.active ? "" : ` type="button" aria-disabled="true"`;

      return `
        <${tag}
          id="chapter-${chapter.number}"
          class="library-card${chapter.active ? " open" : " locked"}"
          style="--accent: ${chapter.color}"
          ${href}
          ${disabled}
        >
          <span class="library-image">
            <img src="assets/chapter-panels/chapter-${number}-panel.png?v=2" alt="" aria-hidden="true" />
          </span>
          <span class="library-copy">
            <span class="library-number">${number}</span>
            <span class="library-title">${title}</span>
            <span class="library-theme">${theme}</span>
            <span class="library-question">${question}</span>
            <span class="library-status">${chapter.status}</span>
            <span class="library-action">${action}</span>
          </span>
        </${tag}>
      `;
    })
    .join("");
}

renderChapterLibrary();

const bootScreen = document.querySelector("#splash");
const enterButton = document.querySelector("#enterButton");

function closeBoot() {
  if (!bootScreen) return;
  bootScreen.classList.add("hidden");
  if (!window.location.hash || window.location.hash === "#splash") {
    window.history.replaceState(null, "", "#archive");
  }
}

if (enterButton) {
  enterButton.addEventListener("click", closeBoot);
}

if (bootScreen) {
  bootScreen.addEventListener("click", (event) => {
    if (event.target === bootScreen) closeBoot();
  });
}

if (window.location.hash && window.location.hash !== "#splash") {
  closeBoot();
}

chaptersEl.addEventListener("click", (event) => {
  if (event.target.closest(".chapter-action")) return;

  const card = event.target.closest(".chapter-card");
  if (!card) return;

  activateChapterCard(card);
});

chaptersEl.addEventListener("keydown", (event) => {
  if (event.target.closest(".chapter-action")) return;
  if (event.key !== "Enter" && event.key !== " ") return;

  const card = event.target.closest(".chapter-card");
  if (!card) return;

  event.preventDefault();
  activateChapterCard(card);
});

function activateChapterCard(card) {
  const index = Number(card.dataset.index);
  const chapter = chapters[index];
  setSelected(index);

  if (chapter.active) {
    selectedNode.animate(
      [
        { boxShadow: "0 0 0 rgba(52, 200, 255, 0)" },
        { boxShadow: "0 0 42px rgba(52, 200, 255, 0.22)" },
        { boxShadow: "0 0 0 rgba(52, 200, 255, 0)" },
      ],
      { duration: 720, easing: "ease-out" },
    );
  }
}

document.querySelector(".sound-toggle").addEventListener("click", (event) => {
  const pressed = event.currentTarget.getAttribute("aria-pressed") === "true";
  event.currentTarget.setAttribute("aria-pressed", String(!pressed));
  event.currentTarget.lastChild.textContent = pressed ? "Quiet Mode" : "Signal Mode";
  document.body.classList.toggle("signal-mode", !pressed);
});
