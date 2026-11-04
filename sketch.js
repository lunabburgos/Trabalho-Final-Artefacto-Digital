/* ============================================
   THE LOST SPECIES
   3D Interactive Earth Atlas
   p5.js WEBGL
============================================ */

// ---------- DATA ----------

let species = [
  {
    name: "Dodó",
    scientific: "Raphus cucullatus",
    year: "1681",
    lat: -20.2,
    lon: 57.5,
    location: "Maurício, Oceano Índico",
    age: "Vários milhões de anos de história evolutiva",
    classification: "Animalia / Chordata / Aves / Columbiformes",
    description: "Uma ave columbiforme não voadora (com cerca de 1 metro de altura e peso de até 20 kg) que evoluiu nas ilhas Maurícias sem predadores terrestres, perdendo a capacidade de voar e tornando-se extremamente confiada. Esta falta de instinto de fuga facilitou a sua dizimação rápida após a chegada dos marinheiros europeus e dos animais invasores que estes trouxeram.",
    cause: "Caça por humanos, introdução de animais como ratos, porcos e macacos que destruíam os ninhos, e destruição severa de habitat.",
    image: "./dodo.jpg"
  },
  {
    name: "Tigre da Tasmânia",
    scientific: "Thylacinus cynocephalus",
    year: "1936",
    lat: -42,
    lon: 147,
    location: "Tasmânia, Austrália",
    age: "Milhões de anos de história evolutiva",
    classification: "Animalia / Chordata / Mammalia / Dasyuromorphia",
    description: "O maior marsupial carnívoro dos tempos modernos, caracterizado por riscas distintivas no dorso e uma mandíbula flexível capaz de abrir num ângulo impressionante de quase 180 graus. Embora fosse um predador noturno solitário de topo, foi implacavelmente perseguido por fazendeiros devido a acusações exageradas de ataques a ovelhas.",
    cause: "Caça intensiva incentivada por prémios governamentais, perseguição direta e alteração drástica dos habitats locais.",
    image: "./tigre_da_tasmania.jpg"
  },
  {
    name: "Pombo-passageiro",
    scientific: "Ectopistes migratorius",
    year: "1914",
    lat: 40,
    lon: -80,
    location: "Leste da América do Norte",
    age: "Milhões de anos de história evolutiva",
    classification: "Animalia / Chordata / Aves / Columbiformes",
    description: "Uma das aves mais abundantes do planeta outrora, cujos bandos colossais contavam com milhares de milhões de indivíduos e escureciam os céus norte-americanos durante dias inteiros. Eram animais altamente sociais que viajavam em busca de bolotas e sementes nas vastas florestas do continente.",
    cause: "Caça comercial em escala industrial para fornecer carne barata nos mercados urbanos e destruição generalizada das florestas antigas.",
    image: "./pombo_passageiro.jpg"
  },
  {
    name: "Sapo-dourado",
    scientific: "Incilius periglenes",
    year: "1989",
    lat: 10.3,
    lon: -84.8,
    location: "Monteverde, Costa Rica",
    age: "Desconhecido",
    classification: "Animalia / Chordata / Amphibia / Anura",
    description: "Um anfíbio de aspeto icónico com uma pele brilhante e cor de laranja-dourado intenso nos machos, que habitava os bosques nublados e húmidos da Costa Rica. A sua extinção súbita no final da década de 1980 é frequentemente apontada pelos cientistas como o primeiro aviso claro do impacto devastador das alterações climáticas globais combinadas com doenças fúngicas.",
    cause: "Variabilidade climática extrema, radiação UV aumentada e proliferação do fungo quitídio impulsionada por perturbações ambientais.",
    image: "./sapo_dourado.jpg"
  },
  {
    name: "Alca-gigante",
    scientific: "Pinguinus impennis",
    year: "1844",
    lat: 65,
    lon: -24,
    location: "Atlântico Norte",
    age: "Milhões de anos de história evolutiva",
    classification: "Animalia / Chordata / Aves / Charadriiformes",
    description: "Uma ave marinha de grande porte, excelente nadadora e mergulhadora, que preenchia o nicho ecológico dos pinguins no hemisfério norte. Eram animais extremamente desajeitados em terra, o que os tornava alvos fáceis quando se reuniam em colónias rochosas isoladas para reprodução.",
    cause: "Caça impiedosa e sistemática por marinheiros e pescadores para obtenção de carne, penas para enchimento e óleo combustível.",
    image: "./alca_gigante.jpg"
  },
  {
    name: "Vaca-marinha-de-Steller",
    scientific: "Hydrodamalis gigas",
    year: "1768",
    lat: 54,
    lon: 165,
    location: "Ilhas Comandante, Pacífico Norte",
    age: "Milhões de anos de história evolutiva",
    classification: "Animalia / Chordata / Mammalia / Sirenia",
    description: "Um colosso marinho herbívoro que podia atingir impressionantes 9 metros de comprimento e pesar cerca de 10 toneladas, aparentado com os modernos dugongos. Viviam em águas frias e rasas do Ártico, alimentando-se pacificamente de algas marinhas e tendo uma natureza lenta e sociável.",
    cause: "Caça intensiva e desenfreada por tripulações de caçadores de focas e lontras para obtenção de carne e gordura de alta densidade calórica.",
    image: "./vaca_marinha_de_steller.jpg"
  },
  {
    name: "Quagga",
    scientific: "Equus quagga quagga",
    year: "1883",
    lat: -34,
    lon: 20,
    location: "África do Sul",
    age: "História evolutiva da linhagem das zebras",
    classification: "Animalia / Chordata / Mammalia / Perissodactyla",
    description: "Uma subespécie única de zebra das planícies do sul da África, que se distinguia por apresentar riscas bem definidas e escuras apenas na metade dianteira do corpo, enquanto a parte traseira exibia uma pelagem castanha uniforme e sem riscas. Eram animais adaptados às savanas abertas.",
    cause: "Extermínio sistemático através de caça intensiva por colonizadores europeus para obtenção de carne e couro comercializável.",
    image: "./quagga.jpg"
  },
  {
    name: "Leão-do-Atlas",
    scientific: "Panthera leo leo",
    year: "1942",
    lat: 30.0,
    lon: 5.0,
    location: "Norte de África",
    age: "Milhares de anos de história evolutiva",
    classification: "Animalia / Chordata / Mammalia / Felidae",
    description: "Uma das maiores subespécies de leões conhecidas, imponente pela sua juba escura, densa e espessa que se estendia pelo peito e barriga, adaptada aos invernos frios das montanhas do Atlas. Eram animais robustos que caçavam veados e javalis nas florestas montanhosas do Norte de África.",
    cause: "Captura em massa para espetáculos e arenas do Império Romano, seguida mais tarde por campanhas deliberadas de abate e caça desportiva.",
    image: "./leao_do_atlas.jpg"
  },
  {
    name: "Tigre-do-Cáspio",
    scientific: "Panthera tigris virgata",
    year: "1970",
    lat: 45.45,
    lon: 68.83,
    location: "Ásia Central e Turquia",
    age: "Milhões de anos de história evolutiva",
    classification: "Animalia / Chordata / Mammalia / Felidae",
    description: "Um felino robusto, de pelagem densa e riscas castanhas mais acentuadas que habitava as densas florestas ribeirinhas e zonas húmidas desde a Turquia até às margens do mar Cáspio e Ásia Central. Era uma das maiores subespécies de tigres do mundo.",
    cause: "Conversão intensiva de juncais e florestas fluviais em terras agrícolas, abate de presas naturais e programas estatais de erradicação.",
    image: "./tigre_do_caspio.jpg"
  },
  {
    name: "Golfinho-do-Yangtzé",
    scientific: "Lipotes vexillifer",
    year: "2006",
    lat: 29.5,
    lon: 112.5,
    location: "Rio Yangtzé, China",
    age: "Milhões de anos de adaptação a água doce",
    classification: "Animalia / Chordata / Mammalia / Cetacea",
    description: "Também conhecido como Baiji, um cetáceo de água doce de tom azul-acinzentado pálido, com um focinho longo, estreito e ligeiramente recurvado para cima, altamente especializado em caçar peixes nas águas turvas do rio Yangtzé. Possuía uma visão extremamente reduzida, dependendo de um sistema de ecolocalização apurado.",
    cause: "Industrialização galopante do rio Yangtzé, poluição extrema, denso tráfego de embarcações comerciais e asfixia em redes de pesca industriais.",
    image: "./golfinho_do_yangtze.jpg"
  },
  {
    name: "Rinoceronte-negro-ocidental",
    scientific: "Diceros bicornis longipes",
    year: "2011",
    lat: 8.5,
    lon: 15.0,
    location: "África Central (Camarões)",
    age: "Milhões de anos de história evolutiva",
    classification: "Animalia / Chordata / Mammalia / Perissodactyla",
    description: "Uma subespécie africana robusta de rinoceronte, famosa pelos seus dois cornos proeminentes de queratina e comportamento solitário em savanas arborizadas e arbustivas. Desempenhava um papel ecológico crítico na manutenção da estrutura da vegetação e dispersão de sementes.",
    cause: "Caça furtiva desenfreada e impiedosa alimentada pela enorme procura ilegal de corno de rinoceronte nos mercados de medicina tradicional asiática.",
    image: "./rinoceronte_negro_ocidental.jpg"
  },
  {
    name: "Lobo-Japonês",
    scientific: "Canis lupus hodophilax",
    year: "1905",
    lat: 35.6,
    lon: 136.2,
    location: "Honshu, Japão",
    age: "Milhares de anos de isolamento",
    classification: "Animalia / Chordata / Mammalia / Canidae",
    description: "Uma subespécie de lobo cinzento de pequeno porte, adaptada aos ecossistemas montanhosos e florestais das ilhas japonesas. Eram animais altamente respeitados nas crenças locais e folclore japonês como protetores das colheitas contra javalis e veados.",
    cause: "Surtos de raiva introduzidos no gado doméstico e campanhas governamentais agressivas de extermínio promovidas durante a modernização da era Meiji.",
    image: "./lobo_japones.jpg"
  },
  {
    name: "Tigre-de-Java",
    scientific: "Panthera tigris sondaica",
    year: "1994",
    lat: -7.5,
    lon: 110.0,
    location: "Java, Indonésia",
    age: "Milhões de anos de história evolutiva",
    classification: "Animalia / Chordata / Mammalia / Felidae",
    description: "Uma subespécie de tigre de pequeno porte, esguia e altamente territorial, endémica da densamente povoada ilha indonésia de Java. Adaptou-se a viver nas franjas das florestas tropicais e plantações.",
    cause: "Crescimento populacional humano explosivo, conversão massiva de habitats florestais em campos agrícolas e envenenamento ou caça direta devido a conflitos.",
    image: "./tigre_de_java.jpg"
  },
  {
    name: "Cabra-dos-Pirenéus",
    scientific: "Capra pyrenaica pyrenaica",
    year: "2000",
    lat: 42.6,
    lon: 0.1,
    location: "Pirenéus (Espanha e França)",
    age: "Milhares de anos de adaptação à montanha",
    classification: "Animalia / Chordata / Mammalia / Bovidae",
    description: "Também conhecida como Bucardo, era uma das quatro subespécies de cabra-montesa ibérica, notável pelos seus cornos maciços, longos e recurvados para trás. Habitava as encostas rochosas íngremes e escarpadas da cordilheira dos Pirenéus.",
    cause: "Caça desportiva excessiva para troféus de grande porte, competição severa por pastagens com gado doméstico e infeções por doenças transmitidas por animais de quinta.",
    image: "./cabra_dos_pirineus.jpg"
  },
  {
    name: "Foca-monge-das-Caraíbas",
    scientific: "Monachus tropicalis",
    year: "2008",
    lat: 18.0,
    lon: -75.0,
    location: "Mar das Caraíbas e Golfo do México",
    age: "Milhões de anos de adaptação marinha",
    classification: "Animalia / Chordata / Mammalia / Phocidae",
    description: "O único pinípedi tropical nativo das águas quentes do Golfo do México e do Mar das Caraíbas, registado historicamente na primeira viagem de Cristóvão Colombo. Eram animais dóceis que formavam colónias em praias arenosas e recifes rasos, alimentando-se de peixes e crustáceos costeiros.",
    cause: "Exploração comercial intensiva para extração de óleo corporal, sobrepesca exaustiva das suas fontes de alimento e caça recreativa e agressiva por pescadores locais.",
    image: "./foca_monge_das_caraibas.jpg"
  }
];

// ---------- VARIABLES ----------

let earthTexture;
let earthLoaded = false;

let selected = -1;

let rotX = -0.25;
let rotY = 3.5;       
let targetX = -0.25;
let targetY = 3.5;    

let dragging = false;
let lastX = 0;
let lastY = 0;

let globeRadius;
let markerButtons = [];

let infoPanel;
let stars = [];

let fontLoaded = false;

// ---------- PRELOAD ----------

function preload() {

  earthTexture = loadImage(
    "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",

    () => {
      earthLoaded = true;
      console.log("Earth texture loaded");
    },

    () => {
      earthLoaded = false;
      console.log("Earth texture could not load");
    }
  );
}

// ---------- SETUP ----------

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);

  setAttributes("antialias", true);

  angleMode(RADIANS);


  createInfoPanel();

  // Create geographic markers
  species.forEach((animal, i) => {

    let btn = createButton("●");

    btn.addClass("map-marker");

    btn.mousePressed(() => {
      selectAnimal(i);
    });

    markerButtons.push(btn);
  });

  // Background stars
  randomSeed(20);

  for (let i = 0; i < 160; i++) {

    stars.push({
      x: random(-width, width),
      y: random(-height, height),
      size: random(1, 2.5)
    });
  }

  updateGlobeSize();
}

// ---------- MAIN DRAW ----------

function draw() {

  background(4, 9, 19);

  // Smooth rotation
rotX += (targetX - rotX) * 0.08;
rotY += (targetY - rotY) * 0.08;

  drawStars();

  // Orthographic camera: prevents the globe becoming elliptical
  ortho(
    -width / 2,
    width / 2,
    -height / 2,
    height / 2,
    -10000,
    10000
  );

  drawEarth();
  drawMarkers();

  updateMarkerButtons();
}

// ---------- GLOBE DIMENSIONS ----------

function updateGlobeSize() {

  if (selected === -1) {

    globeRadius = min(
      width * 0.30,
      height * 0.36
    );

  } else {

    globeRadius = min(
      width * 0.17,
      height * 0.25
    );
  }
}

function globeCenterX() {

  if (selected === -1) {
    return 0;
  }

  return width * 0.18;
}

// ---------- COORDINATE ROTATION ----------

function rotateCoordinate(lat, lon, r) {
  let a = radians(lat);
  let b = radians(lon) + PI; // Added + PI to align with the texture map's prime meridian

  // Original geographic coordinates
  let x = r * cos(a) * sin(b);
  let y = -r * sin(a);
  let z = r * cos(a) * cos(b);

  // Apply Y rotation first
  let x1 = x * cos(rotY) + z * sin(rotY);
  let z1 = -x * sin(rotY) + z * cos(rotY);

  // Apply X rotation second
  let y1 = y * cos(rotX) - z1 * sin(rotX);
  let z2 = y * sin(rotX) + z1 * cos(rotX);

  return {
    x: x1,
    y: y1,
    z: z2
  };
}

// ---------- EARTH ----------

function drawEarth() {

  push();

  translate(globeCenterX(), 0, 0);

  rotateX(rotX);
  rotateY(rotY);

  noFill();
  stroke(35, 135, 220, 35);
  strokeWeight(16);

  sphere(globeRadius * 1.01, 48, 32);

  noStroke();

  if (earthLoaded) {

    texture(earthTexture);

    sphere(globeRadius, 100, 70);

  } else {

    ambientMaterial(15, 65, 110);

    sphere(globeRadius, 100, 70);

    drawFallbackContinents();
  }

  noFill();
  stroke(55, 150, 220, 90);
  strokeWeight(1.5);

  sphere(globeRadius * 1.005, 64, 48);

  pop();
}

// Fallback simplified land shapes
function drawFallbackContinents() {

  push();

  noStroke();
  fill(45, 130, 105);

  // Simplified continent patches
  for (let lat = -70; lat <= 70; lat += 5) {

    beginShape(POINTS);

    for (let lon = -180; lon <= 180; lon += 5) {

      if (isLand(lat, lon)) {

        let p = rotateCoordinate(
          lat,
          lon,
          globeRadius + 2
        );

        vertex(p.x, p.y, p.z);
      }
    }

    endShape();
  }

  pop();
}

function isLand(lat, lon) {

  if (lon > -170 && lon < -50 && lat > 10 && lat < 75) return true;

  if (lon > -82 && lon < -34 && lat > -55 && lat < 12) return true;

  if (lon > -18 && lon < 52 && lat > -35 && lat < 72) return true;

  if (lon > 45 && lon < 175 && lat > 5 && lat < 75) return true;

  if (lon > 112 && lon < 155 && lat > -45 && lat < -10) return true;

  return false;
}

// ---------- MARKERS ----------

function drawMarkers() {

  for (let i = 0; i < species.length; i++) {

    let p = rotateCoordinate(
      species[i].lat,
      species[i].lon,
      globeRadius + 3
    );

    if (p.z <= 0) continue;

    push();

    translate(
      globeCenterX() + p.x,
      p.y,
      p.z
    );

    noStroke();
    emissiveMaterial(255, 90, 55);
    sphere(5, 12, 12);

    pop();
  }
}

// ---------- HTML MARKER POSITIONS ----------

function updateMarkerButtons() {

  let cx = width / 2 + globeCenterX();
  let cy = height / 2;

  for (let i = 0; i < species.length; i++) {

    let p = rotateCoordinate(
      species[i].lat,
      species[i].lon,
      globeRadius + 3
    );

    let btn = markerButtons[i];

    if (p.z > 0) {

      // Orthographic projection
      let screenX = cx + p.x;
      let screenY = cy + p.y;

      btn.position(
        screenX - 13,
        screenY - 13
      );

      btn.style("display", "block");

    } else {

      btn.style("display", "none");
    }
  }
}

// ---------- SPECIES SELECTION ----------

function selectAnimal(i) {
  selected = i;
  let animal = species[i];

  console.log("Selected species:", animal.name);
  console.log("Latitude:", animal.lat);
  console.log("Longitude:", animal.lon);

  // Desired target angle for longitude
  let desiredY = -radians(animal.lon) - PI;

  // Calculate the shortest path to prevent endless spinning from accumulated drags
  let diffY = desiredY - targetY;
  diffY = diffY - TWO_PI * round(diffY / TWO_PI);
  targetY = targetY + diffY;

  // Set target latitude
  targetX = -radians(animal.lat);

  updateGlobeSize();

  renderInformation(animal);

  infoPanel.style("display", "block");
}

// ---------- INFORMATION PANEL ----------

function createInfoPanel() {

  infoPanel = createDiv("");

  infoPanel.addClass("info-panel");

  infoPanel.style("display", "none");

  let close = createButton("← VOLTAR AO GLOBO");

  close.parent(infoPanel);
  close.addClass("back-button");

  close.mousePressed(() => {

    selected = -1;

    updateGlobeSize();

    infoPanel.style("display", "none");
  });

  let content = createDiv("");

  content.id("species-content");
  content.parent(infoPanel);
}

function renderInformation(animal) {

  let content = select("#species-content");

  content.html("");

  // Name
  createDiv("ESPÉCIES PERDIDAS / ARQUIVO")
    .parent(content)
    .addClass("eyebrow");

  createElement("h1", animal.name)
    .parent(content);

  createElement("p", animal.scientific)
    .parent(content)
    .addClass("scientific");

  // Image
  let img = createImg(animal.image, animal.name);

  img.parent(content);
  img.addClass("animal-photo");

  img.attribute("loading", "eager");

  img.elt.onerror = function() {
    this.alt = "Imagem indisponível: " + animal.name;
    this.style.background = "#183044";
    this.style.height = "120px";
  };

  // Information fields
  addInformation(content, "ANO DE EXTINÇÃO", animal.year);

  addInformation(content, "LOCALIZAÇÃO GEOGRÁFICA", animal.location);

  addInformation(content, "TEMPO NA TERRA", animal.age);

  addInformation(content, "CLASSIFICAÇÃO CIENTÍFICA", animal.classification);

  addInformation(content, "SOBRE A ESPÉCIE", animal.description);

  addInformation(content, "CAUSA DA EXTINÇÃO", animal.cause);
}

function addInformation(parent, heading, value) {

  let section = createDiv("");

  section.parent(parent);
  section.addClass("info-section");

  createDiv(heading)
    .parent(section)
    .addClass("info-heading");

  createP(value)
    .parent(section)
    .addClass("info-text");
}

// ---------- STARS ----------

function drawStars() {

  push();

  resetMatrix();

  translate(-width / 2, -height / 2);

  noStroke();

  for (let s of stars) {

    fill(130, 175, 210, 90);

    circle(
      (s.x + width * 2) % width,
      (s.y + height * 2) % height,
      s.size
    );
  }

  pop();
}

// ---------- MOUSE ROTATION ----------

function mousePressed() {

  if (selected >= 0 && mouseX < width * 0.43) {
    return;
  }

  lastX = mouseX;
  lastY = mouseY;

  dragging = true;
}

function mouseDragged() {

  const velocity = 0.0018;

  if (!dragging) return;

  let dx = mouseX - lastX;
  let dy = mouseY - lastY;

  // Natural rotation: follow the mouse direction
  targetY += dx * velocity;
  targetX -= dy * velocity;

  lastX = mouseX;
  lastY = mouseY;
}

function mouseReleased() {

  dragging = false;
}

// ---------- RESIZE ----------

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

  updateGlobeSize();

  stars = [];

  for (let i = 0; i < 160; i++) {

    stars.push({
      x: random(-width, width),
      y: random(-height, height),
      size: random(1, 2.5)
    });
  }
}