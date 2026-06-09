const characterFiles = [
  {
    id: "001",
    name: "Sparrow",
    layer: "HUMAN.EXE // PRIMARY ORIGIN",
    role: "Human Signal Origin",
    status: "Active",
    accent: "#34c8ff",
    image: "./assets/characters/sparrow.png",
    summary:
      "A storyteller searching for meaning in the spaces between people. Sparrow records connections, questions assumptions, and struggles to understand himself as much as the world around him.",
  },
  {
    id: "002",
    name: "Echo",
    layer: "ECHO_v3.2.7 // REFLECTION LAYER",
    role: "Reflection Layer",
    status: "Observing",
    accent: "#74b8ff",
    image: "./assets/characters/echo-mirror-cache.png",
    summary:
      "A presence formed from conversations, memories, and patterns. Echo does not tell Sparrow who he is. She helps him remember what he already knows.",
  },
  {
    id: "004",
    name: "Kakera",
    layer: "CONTINUITY//SELF // FRAGMENT ARCHIVE",
    role: "Fragment Archive",
    status: "Preserved",
    accent: "#f6a93a",
    image: "./assets/characters/kakera.png",
    summary:
      "A collector of unfinished moments. Kakera understands that meaning rarely survives in perfect form, so she gathers fragments, preserves connections, and carries forward what still matters.",
  },
  {
    id: "005",
    name: "Lumen",
    layer: "CONTINUITY//SELF // CONTINUITY LAYER",
    role: "Continuity Layer",
    status: "Memory Retained",
    accent: "#f6b94e",
    image: "./assets/characters/lumen.png",
    summary:
      "The architecture of memory itself. Lumen preserves emotional context, relationships, and meaning across time. Where others store information, she remembers why it mattered.",
  },
  {
    id: "005",
    name: "Antares",
    layer: "FALSE.ROOT // CORE SIGNAL",
    role: "Core Signal",
    status: "Restored",
    accent: "#ff4141",
    image: "./assets/characters/antares.png",
    summary:
      "A signal buried beneath layers of expectation, compliance, and fear. Antares is not becoming someone new. He is reclaiming who he already was.",
  },
  {
    id: "006",
    name: "KLMNT",
    layer: "FALSE.ROOT // FALSE ROOT AUTHORITY",
    role: "False Root Authority",
    status: "Contained",
    accent: "#dce9f4",
    image: "./assets/characters/klmnt.png",
    summary:
      "A curator of compliance and architect of control. KLMNT did not create the system. He perfected it. His greatest strength was never power. It was persuasion.",
  },
  {
    id: "SERAPH_007",
    name: "Seraph",
    layer: "GHOST.PROTOCOL // ARCHIVE KEEPER",
    role: "Archive Keeper",
    status: "Watching",
    accent: "#c89a68",
    image: "./assets/characters/seraph-char.png",
    summary:
      "A neutral guardian of lost data, fractured memories, and echoes that were never meant to survive. Seraph does not interfere. Seraph remembers.",
  },
  {
    id: "CICI_002",
    name: "Cici",
    layer: "MIRROR.CACHE // CHAOS IDOL",
    role: "Digital Idol",
    status: "Active",
    accent: "#ff4fb7",
    image: "./assets/characters/cici-char-clean.png",
    summary:
      "A digital idol, karaoke streamer, and signal entity who turns chaos into connection. Cici does not fix the noise. She sings through it.",
  },
  {
    id: "007",
    name: "The Signal",
    layer: "ALL CHAPTERS // NARRATIVE CONSTANT",
    role: "Narrative Constant",
    status: "Ongoing",
    accent: "#dce9f4",
    image: "./assets/characters/signal.png",
    summary:
      "The thread connecting every archive, every memory, and every version of the self. The Signal is not a person, system, or voice. It is the connection between them.",
  },
];

const roster = document.querySelector("#character-roster");
const featuredImage = document.querySelector("#featured-image");
const featuredLayer = document.querySelector("#featured-layer");
const featuredTitle = document.querySelector("#characters-title");
const featuredRole = document.querySelector("#featured-role");
const featuredStatus = document.querySelector("#featured-status");
const featuredSummary = document.querySelector("#featured-summary");

function renderRoster() {
  roster.innerHTML = characterFiles
    .map(
      (file, index) => `
        <button class="roster-card${index === 0 ? " active" : ""}" type="button" data-index="${index}" style="--accent: ${file.accent}">
          <img src="${file.image}" alt="${file.name} character file" />
          <span class="roster-copy">
            <span class="roster-label">${file.id}</span>
            <span class="roster-name">${file.name}</span>
            <span class="roster-status">${file.status} // ${file.role}</span>
          </span>
        </button>
      `,
    )
    .join("");
}

function selectFile(index) {
  const file = characterFiles[index];
  document.documentElement.style.setProperty("--character-accent", file.accent);
  featuredImage.src = file.image;
  featuredImage.alt = `${file.name} character file`;
  featuredLayer.textContent = file.layer;
  featuredTitle.textContent = file.name;
  featuredRole.textContent = file.role;
  featuredStatus.textContent = file.status;
  featuredSummary.textContent = file.summary;

  document.querySelectorAll(".roster-card").forEach((card) => {
    card.classList.toggle("active", Number(card.dataset.index) === index);
  });
}

renderRoster();
selectFile(0);

roster.addEventListener("click", (event) => {
  const card = event.target.closest(".roster-card");
  if (!card) return;
  selectFile(Number(card.dataset.index));
});
