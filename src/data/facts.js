// The corpus of daily science fun facts.
//
// Each fact carries:
//   id        – stable unique id
//   category  – key into CATEGORIES
//   teaser    – the intriguing "door" text shown on the option card (no spoiler)
//   title     – the headline of the fact, revealed after the pick
//   fact      – the 3–4 sentence explanation
//   scene     – which procedural <Scene> illustration accompanies it
//   keyPoints – 3 quick bullets for the deep dive
//   readMore  – a longer, richer explanation for the curious

export const FACTS = [
  // ───────────────────────────── ASTRONOMY ─────────────────────────────
  {
    id: 'astro-venus',
    category: 'astronomy',
    teaser: 'On one planet, you could outlive a whole day in an afternoon.',
    title: 'On Venus, a Day Is Longer Than a Year',
    fact: "Venus spins so sluggishly on its axis that a single Venusian day — one full rotation — takes about 243 Earth days. Yet Venus circles the Sun in only about 225 Earth days. That means the planet finishes an entire year before it completes a single turn. Stranger still, Venus rotates backwards, so the Sun there would rise in the west.",
    scene: 'orbits',
    keyPoints: [
      'Rotation: ~243 Earth days',
      'Orbit: ~225 Earth days',
      'Spins in reverse — sunrise in the west',
    ],
    readMore:
      "Astronomers think Venus's bizarre spin is the fossil of a violent past. A combination of massive early collisions and powerful gravitational tides from its thick atmosphere and the Sun may have slowed and even flipped its rotation over billions of years. Its dense carbon-dioxide air — about 90 times the pressure at Earth's surface — drags on the planet, helping lock it into this slow, retrograde turn.\n\nBecause the day and year are so close in length but run in opposite senses, the time from one sunrise to the next on Venus works out to about 117 Earth days — its own strange number, different again from a single rotation. A traveller standing on its searing surface would watch the Sun crawl across the sky from west to east over the course of months.",
  },
  {
    id: 'astro-neutron',
    category: 'astronomy',
    teaser: 'A single spoonful of something out there weighs as much as a mountain.',
    title: 'A Teaspoon of Neutron Star Weighs a Billion Tonnes',
    fact: "When a massive star dies, its core can collapse into a neutron star — so dense that protons and electrons are crushed together into neutrons. A single sugar-cube of this material would weigh around a billion tonnes on Earth, roughly the mass of a mountain. The whole star packs more matter than the Sun into a sphere about the size of a city.",
    scene: 'radiance',
    keyPoints: [
      'City-sized, yet heavier than the Sun',
      'A teaspoon ≈ a mountain',
      'Surface gravity ~100 billion × Earth',
    ],
    readMore:
      "Neutron stars sit right at the edge of what matter can endure before collapsing into a black hole. Their surface gravity is so extreme that lifting yourself a single millimetre would take more energy than a rocket needs to leave Earth. The star's entire mass is held up only by the quantum stubbornness of neutrons refusing to be squeezed any closer.\n\nMany neutron stars spin hundreds of times per second, sweeping beams of radiation across space like a lighthouse; we detect these as pulsars, some keeping time more precisely than atomic clocks. Their interiors may hold exotic states of matter — a frictionless 'neutron superfluid' — that physicists still cannot fully reproduce or explain.",
  },
  {
    id: 'astro-stars-sand',
    category: 'astronomy',
    teaser: 'Two impossibly huge numbers — and the sky wins.',
    title: 'There Are More Stars Than Grains of Sand on Earth',
    fact: "Estimates put the number of stars in the observable universe at around 10²² to 10²⁴ — a 1 followed by 22 to 24 zeros. If you counted every grain of sand on every beach and desert on Earth, you would reach a smaller number. The cosmos out-sparkles every shoreline on the planet combined.",
    scene: 'starfield',
    keyPoints: [
      'Up to ~2 trillion galaxies',
      '~100 billion stars per galaxy',
      'More stars than Earth has sand grains',
    ],
    readMore:
      "The comparison sounds like poetry, but it comes from real arithmetic. Scientists estimate Earth holds very roughly 7.5 × 10¹⁸ grains of sand across all its beaches and deserts. Deep images like the Hubble Deep Field let astronomers count galaxies in a tiny patch of sky and scale up to the whole sphere, giving hundreds of billions to perhaps two trillion galaxies.\n\nMultiply those galaxies by their tens to hundreds of billions of stars each, and the stars win by a wide margin — and that is only the observable universe, the part whose light has had time to reach us in 13.8 billion years. The true total, beyond our horizon, may be vastly larger still.",
  },
  {
    id: 'astro-sun-mass',
    category: 'astronomy',
    teaser: 'Almost everything you think of as "the Solar System" is a rounding error.',
    title: 'The Sun Is 99.86% of the Entire Solar System',
    fact: "For all the drama of planets, moons and comets, the Sun holds about 99.86% of all the mass in the Solar System. Everything else — Jupiter, Saturn, Earth and the rest — shares the leftover scraps. Jupiter alone accounts for most of that tiny remainder, leaving the rocky planets as little more than cosmic dust.",
    scene: 'radiance',
    keyPoints: [
      'Sun: 99.86% of all system mass',
      'Jupiter holds most of the rest',
      'Earth: about 0.0003% of the total',
    ],
    readMore:
      "The Sun's dominance is why the planets move the way they do — its gravity sets the rhythm of the entire system. Every second it fuses around 600 million tonnes of hydrogen into helium, converting roughly 4 million tonnes of matter directly into energy, yet it is so massive this barely dents it across billions of years.\n\nWhen we say the planets orbit the Sun, it is more accurate to say everything orbits a shared centre of mass. Thanks to heavyweight Jupiter, that balance point sometimes sits just outside the Sun's own surface, so technically the Sun wobbles around it too.",
  },
  {
    id: 'astro-footprints',
    category: 'astronomy',
    teaser: 'Some marks left by humans may outlast the human race itself.',
    title: 'The Footprints on the Moon Will Outlast Civilisation',
    fact: "The bootprints left by Apollo astronauts could stay crisp for millions of years. With almost no atmosphere, the Moon has no wind and no rain to erode them. Only the slow drizzle of micrometeorites and cosmic dust will eventually smooth them away.",
    scene: 'orbits',
    keyPoints: [
      'No wind, no rain, no liquid water',
      'Erosion only by micrometeorites',
      'Prints may persist for millions of years',
    ],
    readMore:
      "The Moon's lack of weather turns it into a kind of museum. Its grey soil, called regolith, is jagged and powdery because it has never been rounded by water or air — it was shattered over eons by relentless impacts. That same stillness preserves not just footprints but rover tracks and the landing sites themselves.\n\nOver very long timescales the constant rain of tiny meteoroids — a process called space weathering — slowly gardens the surface and will erase the marks. But on any human timescale they are effectively permanent monuments to the first time life left its world.",
  },
  {
    id: 'astro-saturn-float',
    category: 'astronomy',
    teaser: 'The Solar System hides a giant that could bob in your bathtub.',
    title: 'Saturn Would Float in a Bathtub',
    fact: "Saturn is the only planet less dense than water, at about 0.69 grams per cubic centimetre. In a large enough ocean, the giant planet would bob like a cork. Its beauty hides how insubstantial it is: a vast ball of hydrogen and helium with no solid surface to stand on.",
    scene: 'orbits',
    keyPoints: [
      'Density ~0.69 g/cm³ (water = 1.0)',
      'Mostly hydrogen and helium',
      'No solid surface anywhere',
    ],
    readMore:
      "Saturn's low density is a clue to what gas giants are made of. Beneath its pale gold cloud bands, pressure mounts until hydrogen behaves like a liquid metal deep inside, possibly wrapped around a small rocky-icy core. There is no boundary where 'atmosphere' becomes 'ground' — you would simply sink into ever-thicker gas.\n\nThe famous rings, by contrast, are almost absurdly delicate — only tens of metres thick in places while spanning hundreds of thousands of kilometres, and made of countless chunks of ice and rock. So the one planet that could float in water is wrapped in the most fragile grand structure in the Solar System.",
  },
  {
    id: 'astro-day-length',
    category: 'astronomy',
    teaser: "The 24-hour clock you live by didn't always tell the truth.",
    title: "Earth's Days Are Getting Longer",
    fact: "Earth's rotation is gradually slowing as the Moon's gravity drags on the oceans, tugging energy away from our spin. Roughly 1.4 billion years ago a single day lasted about 19 hours, and dinosaurs likely experienced days closer to 23 hours than 24. Today the slowdown adds only about 1.8 milliseconds per century, but multiplied across deep time it reshapes what a 'day' even means.",
    scene: 'orbits',
    keyPoints: [
      'Days lengthen by ~1.8 ms per century',
      '1.4 billion years ago: ~19-hour days',
      'Caused by lunar tidal drag on the oceans',
    ],
    readMore:
      "Scientists read this slowdown in an unlikely archive: the growth rings of ancient corals and stromatolites, whose daily and yearly banding preserves a fossil record of how many days once made up a year. Counting those bands shows a steady increase in day length stretching back hundreds of millions of years.\n\nThe Moon is the culprit and, in a sense, the victim — as it slows Earth's spin it steals angular momentum, and that energy pushes the Moon itself into a slightly wider orbit, receding by about 3.8 centimetres a year. Given enough time, Earth's day and the Moon's orbit will inch toward matching each other's rhythm, much as has already happened to the Moon, which keeps the same face turned toward us.",
  },
  {
    id: 'astro-diamond-planet',
    category: 'astronomy',
    teaser: 'One distant world may be worth more than every fortune ever made.',
    title: "There's a Planet That May Be Made Largely of Diamond",
    fact: "Roughly 40 light-years away orbits 55 Cancri e, a rocky 'super-Earth' whose carbon-rich composition may crystallise under pressure into vast seams of diamond. Some estimates suggest a third of its mass could be carbon, squeezed by heat and pressure until it hardens into gemstone. It's a stark reminder that chemistry, not rarity, is what actually makes a diamond a diamond.",
    scene: 'starfield',
    keyPoints: [
      'Orbits a star ~40 light-years away',
      'Possibly rich in carbon rather than silicate rock',
      'Extreme pressure could crystallise carbon into diamond',
    ],
    readMore:
      "55 Cancri e was first flagged as unusual because its density didn't match a typical rocky planet built from the same silicate minerals as Earth. Researchers proposed that if the system's carbon-to-oxygen ratio is high enough, the planet could have formed with abundant carbon instead of oxygen-rich rock, changing its entire internal chemistry.\n\nThe idea remains debated — later observations suggested a more ordinary, oxygen-rich interior is also possible, and the planet's blistering dayside temperature, hot enough to melt metal, complicates any simple story. Still, 'diamond planet' remains one of the more delightful hypotheses in exoplanet science, a reminder that a gemstone on Earth might just be commonplace geology somewhere else.",
  },
  {
    id: 'astro-titan-rain',
    category: 'astronomy',
    teaser: 'Somewhere out there, an alien coastline is misted in a fuel we burn.',
    title: 'One Moon Has Rivers, Lakes and Rain — of Methane',
    fact: "Saturn's moon Titan is the only place besides Earth known to have stable liquid on its surface — but instead of water, its rivers, lakes and seas are filled with liquid methane and ethane. Clouds of the same hydrocarbons drift through its hazy orange sky and occasionally rain down, carving channels into an icy bedrock. It's an entire weather system running on chemistry that, on Earth, we keep in fuel tanks.",
    scene: 'waves',
    keyPoints: [
      'Surface temperature: about −179°C',
      'Lakes and seas of liquid methane and ethane',
      "Only other body with a stable liquid cycle like Earth's",
    ],
    readMore:
      "The Cassini-Huygens mission mapped Titan's northern hemisphere and found seas larger than the Great Lakes, along with river networks strikingly similar in shape to those on Earth — evidence that the same physics of erosion and flow applies, just with a different liquid entirely. Titan's cycle of evaporation, cloud formation and rainfall mirrors Earth's water cycle so closely that planetary scientists call it a genuine analogue, just chilled to nearly −180°C.\n\nBeneath the icy crust, some models suggest a subsurface ocean of liquid water may exist too, kept from freezing by internal heat and dissolved salts. That would make Titan a place with two entirely different kinds of ocean stacked on top of each other — one of water hidden below, one of hydrocarbons pooling above.",
  },

  // ───────────────────────────── PHYSICS ─────────────────────────────
  {
    id: 'phys-sunlight',
    category: 'physics',
    teaser: 'You have never actually seen the sky as it is right now.',
    title: 'You See the Sun as It Was 8 Minutes Ago',
    fact: "Light is fast, but not infinite — it travels at about 300,000 kilometres per second. Sunlight takes roughly 8 minutes and 20 seconds to cross the gulf to Earth. So whenever you glance at the Sun, you are seeing it as it was eight minutes in the past. If it vanished, we wouldn't notice for over eight minutes.",
    scene: 'radiance',
    keyPoints: [
      'Light: ~299,792 km/s',
      'Sun → Earth: ~8 min 20 s',
      'Every glance at the sky looks into the past',
    ],
    readMore:
      "Because light has a finite speed, looking out into space is always looking back in time. The Moon you see is 1.3 seconds old; Jupiter is tens of minutes old; the nearest star beyond the Sun is over four years old. The faint smudge of the Andromeda galaxy is light that left it 2.5 million years ago, before our species existed.\n\nTelescopes are therefore time machines. The deepest images ever taken — of galaxies billions of light-years away — show the universe as it looked in its distant youth, long before the Earth or Sun had formed. We can never see the cosmos as it is 'now'; we only ever see its history arriving late.",
  },
  {
    id: 'phys-photon',
    category: 'physics',
    teaser: 'The light warming your face today is older than our species.',
    title: 'A Photon Spends ~100,000 Years Escaping the Sun',
    fact: "A particle of light born in the Sun's core takes an astonishingly long time to reach the surface — estimates range from tens of thousands to a few hundred thousand years. It zig-zags through dense plasma, absorbed and re-emitted countless times in a random walk. Yet once free in space, it crosses to Earth in just over eight minutes.",
    scene: 'radiance',
    keyPoints: [
      'Core → surface: ~100,000 years',
      'Surface → Earth: ~8 minutes',
      'Sunlight is ancient energy, finally freed',
    ],
    readMore:
      "The Sun's interior is so dense that light can barely move in a straight line. In the core, photons collide with electrons and ions almost immediately, scattering in random directions in what physicists call a 'drunkard's walk.' Each step is minuscule, and the photon's energy is repeatedly traded and degraded along the way.\n\nThe gamma rays born in fusion are gradually transformed into the gentler visible light we eventually see. So the sunlight warming your face was forged in the Sun's heart back when mammoths — or creatures far older — walked the Earth, and is only now completing its escape.",
  },
  {
    id: 'phys-timehead',
    category: 'physics',
    teaser: 'Two parts of your body are ageing at different rates right now.',
    title: 'Time Runs Faster at Your Head Than Your Feet',
    fact: "Einstein's general relativity says gravity slows time, and the effect is real even on human scales. Clocks closer to Earth's centre tick very slightly slower than clocks higher up. Atomic clocks are now precise enough to measure the difference across just a few centimetres. Over a lifetime, your head ages a few billionths of a second more than your feet.",
    scene: 'waves',
    keyPoints: [
      'Stronger gravity = slower time',
      'Measured across just 33 cm of height',
      'GPS satellites correct for it daily',
    ],
    readMore:
      "This is not a quirk of clumsy clocks — it is how the universe works. The phenomenon, gravitational time dilation, was first confirmed in 1959 and is now routine. GPS satellites orbit where gravity is weaker, so their clocks run faster than ours by about 38 microseconds a day; without correcting for relativity, navigation would drift by kilometres within hours.\n\nIn 2010, physicists measured the difference over a height of just 33 centimetres in the lab, making 'your head ages faster than your feet' a literally true, if utterly tiny, statement. Time is not a universal backdrop ticking the same everywhere — it bends with gravity and motion, unique to every observer.",
  },
  {
    id: 'phys-quantum-tunnel',
    category: 'physics',
    teaser: 'A wall is only solid if you happen to be large enough.',
    title: 'Particles Can Walk Through Solid Walls',
    fact: "In the quantum world, a particle facing a barrier it shouldn't be able to cross sometimes appears on the other side anyway. This 'quantum tunnelling' happens because particles behave like spread-out waves of probability, not tiny balls. The effect is vanishingly rare for big objects but constant for the very small. Without it, the Sun itself would not shine.",
    scene: 'waves',
    keyPoints: [
      'Particles are waves of probability',
      "They can 'leak' through barriers",
      'Powers fusion, flash memory & microscopes',
    ],
    readMore:
      "Tunnelling is one of the strangest yet most useful facts of nature. Inside the Sun, protons must overcome immense electrical repulsion to fuse, and classically they almost never have enough energy — but tunnelling lets them slip through the barrier just often enough to keep the stars burning.\n\nThe same effect erases data in the flash memory of your phone, drives the scanning tunnelling microscope that images individual atoms, and may even let molecules in your DNA occasionally mutate. In the quantum realm, a barrier is not a hard 'no' but a matter of probability — and given enough tries, the improbable becomes inevitable.",
  },
  {
    id: 'phys-absolute-zero',
    category: 'physics',
    teaser: 'There is a temperature the universe will never quite let you reach.',
    title: 'Nothing Can Ever Be Perfectly Still',
    fact: "Absolute zero (−273.15 °C) is the coldest temperature possible, where thermal motion would stop. But quantum mechanics forbids perfect stillness: even at absolute zero, particles keep a residual 'zero-point' jiggle. And absolute zero itself can never quite be reached — only approached ever more closely. The universe refuses to fully hold its breath.",
    scene: 'lattice',
    keyPoints: [
      'Absolute zero = −273.15 °C (0 kelvin)',
      'Unreachable — only approached',
      'A minimum quantum motion always remains',
    ],
    readMore:
      "The impossibility of reaching absolute zero is built into the laws of thermodynamics. Each step of cooling removes less heat than the last, so an infinite number of steps would be required to hit zero exactly. Labs have come breathtakingly close — within a billionth of a degree — using lasers and magnetic traps to slow atoms almost to a standstill.\n\nEven then, Heisenberg's uncertainty principle guarantees a minimum of motion: pin down a particle's energy completely and its position becomes infinitely uncertain, which nature will not allow. This leftover 'zero-point energy' is real, and it subtly influences everything from the stability of helium to tiny forces between mirrors in a vacuum.",
  },
  {
    id: 'phys-superfluid',
    category: 'physics',
    teaser: 'Chill a liquid enough and it starts climbing out of the cup by itself.',
    title: 'Supercold Helium Climbs Out of Its Own Container',
    fact: "Cool liquid helium below about 2 kelvin and it becomes a superfluid — a liquid with literally zero viscosity. It flows without any friction, slips through cracks too small for any ordinary liquid, and even creeps up and over the walls of its container to escape. It is one of the few quantum behaviours you can watch with the naked eye.",
    scene: 'waves',
    keyPoints: [
      'Zero viscosity below ~2.17 K',
      'Creeps up walls in a thin film',
      'Quantum weirdness you can actually see',
    ],
    readMore:
      "Superfluidity is what happens when quantum mechanics takes over an entire liquid at once. Below the so-called lambda point, a large fraction of the helium atoms drop into the same quantum state and move in perfect lockstep, behaving as a single coherent substance rather than countless jostling particles.\n\nWith no viscosity to stop it, the liquid forms a film just tens of atoms thick that flows up the container walls and drips off the bottom — the famous 'Rollin film.' Set it swirling in a ring and the current will keep circulating essentially forever, a frictionless flow that simply never winds down.",
  },
  {
    id: 'phys-lightning',
    category: 'physics',
    teaser: 'For an instant, the sky gets hotter than the star that lights it.',
    title: 'Lightning Is Hotter Than the Surface of the Sun',
    fact: "A bolt of lightning briefly heats the air around it to roughly 30,000 kelvin — about five times hotter than the Sun's visible surface, which sits at around 5,500°C. That superheated air expands explosively, creating the shockwave we hear as thunder. The flash lasts only millionths of a second, but for that instant the sky is the hottest thing for miles.",
    scene: 'radiance',
    keyPoints: [
      'Lightning channel: ~30,000 K',
      "Sun's surface: ~5,500°C",
      'Rapid air expansion produces thunder',
    ],
    readMore:
      "Lightning forms as electrical charge builds up inside storm clouds until it forces a path through the air, which is normally an excellent insulator. When the bolt strikes, it ionises the air along its path in a channel often no wider than a couple of centimetres, briefly transforming it into a plasma hotter than anything found naturally on Earth's surface.\n\nThat heat is so sudden that the surrounding air has no time to expand gradually — it detonates outward at supersonic speed, and the resulting shockwave decays into the rolling boom of thunder. Because light travels far faster than sound, counting the seconds between a flash and its thunder gives a rough measure of the storm's distance: about one kilometre for every three seconds.",
  },
  {
    id: 'phys-vacuum-silence',
    category: 'physics',
    teaser: 'No matter how loud the explosion, nobody out there would hear a thing.',
    title: 'Space Is Completely Silent',
    fact: "Sound is a vibration that needs a medium — air, water, or some other matter — to travel through. Space is a near-perfect vacuum, so even a star exploding nearby would produce no sound a human could hear. Every explosion in a sci-fi film's space battle is, physically, dead silent.",
    scene: 'starfield',
    keyPoints: [
      'Sound needs molecules to carry vibrations',
      'Space has almost no matter to vibrate',
      'Even supernovae make no audible sound',
    ],
    readMore:
      "On Earth, sound travels as a pressure wave, with molecules of air bumping into their neighbours to pass the vibration along. Remove the air — as in a vacuum chamber, or the vast near-emptiness of interstellar space — and there is nothing left to jostle, so the wave simply cannot propagate.\n\nThis is why astronauts on a spacewalk must communicate by radio rather than shouting, even standing right next to each other. NASA has famously released 'sounds' of black holes and nebulae, but these are actually pressure or electromagnetic data converted into audible tones for human ears — a translation of the cosmos, not a recording of it.",
  },
  {
    id: 'phys-neutrinos',
    category: 'physics',
    teaser: "Something invisible is streaming through your body right now, and you'll never feel it.",
    title: 'Trillions of Ghost Particles Pass Through You Every Second',
    fact: "Neutrinos are subatomic particles produced by the Sun in staggering numbers, and roughly 100 trillion of them pass through your body every single second. They interact with matter so rarely that the vast majority sail straight through the entire Earth without hitting a single atom. Detecting even a handful requires building enormous tanks buried deep underground.",
    scene: 'lattice',
    keyPoints: [
      '~100 trillion solar neutrinos pass through you per second',
      'Almost never interact with ordinary matter',
      'Detectors use giant underground tanks to catch rare collisions',
    ],
    readMore:
      "Neutrinos are produced whenever nuclear fusion happens, which means the Sun floods the Solar System with them constantly. Because neutrinos barely interact with anything, they stream outward from the Sun's core in about eight minutes — far faster than the light created in the same reactions, which can take tens of thousands of years to fight its way out.\n\nTo catch the occasional neutrino colliding with an atom, physicists build detectors like Super-Kamiokande in Japan: a tank holding 50,000 tonnes of ultra-pure water, buried a kilometre underground to shield it from other radiation. Even then, only a tiny fraction of the neutrinos passing through are ever registered — most continue on, utterly indifferent to the matter they pass through.",
  },

  // ───────────────────────────── BIOLOGY ─────────────────────────────
  {
    id: 'bio-microbiome',
    category: 'biology',
    teaser: 'By one count, only about half of "you" is actually you.',
    title: "Half of 'You' Isn't Human",
    fact: "Your body is home to roughly as many bacterial cells as human ones — tens of trillions of each. These microbes line your gut, skin and more, forming an ecosystem called the microbiome. Far from freeloaders, many help you digest food, train your immune system and even sway your mood. You are less a single individual than a walking colony.",
    scene: 'cells',
    keyPoints: [
      '~38 trillion microbes vs ~30 trillion human cells',
      'Most live in the gut',
      'They aid digestion, immunity and mood',
    ],
    readMore:
      "For years textbooks claimed microbes outnumbered our own cells ten to one, but a careful 2016 re-count revised the ratio to roughly one to one. Either way, the microbiome is staggering: collectively it carries far more genes than the human genome and behaves almost like a hidden organ.\n\nDisrupting it — with antibiotics or a poor diet — is linked to conditions from obesity to allergies to depression, while a diverse microbiome tends to track with good health. Some researchers now study 'psychobiotics': gut microbes that influence the brain through the chemicals they quietly manufacture inside you.",
  },
  {
    id: 'bio-octopus',
    category: 'biology',
    teaser: 'One animal on Earth runs on three hearts and blue blood.',
    title: 'Octopuses Have Three Hearts and Blue Blood',
    fact: "An octopus runs on three hearts: two pump blood through the gills, and one drives it around the rest of the body. Its blood is blue because it carries oxygen using copper-based haemocyanin instead of iron-based haemoglobin. Stranger still, the main heart stops beating when the animal swims — part of why octopuses prefer to crawl.",
    scene: 'cells',
    keyPoints: [
      'Two gill hearts + one body heart',
      'Copper-based blue blood',
      'Main heart pauses while swimming',
    ],
    readMore:
      "Octopus biology reads like an alien design document. Copper-based haemocyanin is less efficient than our haemoglobin at carrying oxygen, but it works better in the cold, low-oxygen water of the deep sea where many octopuses live.\n\nTwo-thirds of an octopus's neurons live in its arms rather than its brain, so each arm can taste, touch and react semi-independently. Combine that with the power to change colour and texture in an instant, squeeze through any gap larger than its beak, and even edit its own RNA on the fly, and the octopus becomes one of the strangest intelligences on Earth.",
  },
  {
    id: 'bio-dna-length',
    category: 'biology',
    teaser: 'Something coiled inside you could reach across the Solar System.',
    title: 'Your DNA Could Stretch to the Sun and Back — Many Times',
    fact: "If you uncoiled the DNA from every cell in your body and laid it end to end, it would stretch for billions of kilometres — far enough to reach the Sun and back dozens of times over. Each cell holds about two metres of DNA crammed into a nucleus just micrometres wide. Multiply by tens of trillions of cells and the numbers turn astronomical.",
    scene: 'helix',
    keyPoints: [
      '~2 metres of DNA per cell',
      'Tens of trillions of cells',
      'Total length dwarfs the Solar System',
    ],
    readMore:
      "The packing problem your cells solve is almost unbelievable. Two metres of DNA must fold into a nucleus around six micrometres across — like stuffing 40 kilometres of fishing line into a tennis ball, while keeping any single gene findable within seconds.\n\nCells manage it by winding the strand around protein spools called histones, then coiling those coils again and again into chromosomes. When a cell divides, it copies all 3 billion letters of your genome with astonishing speed and accuracy, leaving only about one uncorrected error per billion letters — a fidelity no human scribe has ever matched.",
  },
  {
    id: 'bio-tardigrade',
    category: 'biology',
    teaser: 'A creature smaller than a poppy seed has already survived open space.',
    title: 'Tardigrades Can Survive the Vacuum of Space',
    fact: "Tardigrades — microscopic 'water bears' under a millimetre long — are nearly indestructible. They can endure boiling heat, cold near absolute zero, crushing pressure, lethal radiation, and even the raw vacuum of open space. They do it by curling into a dried-out 'tun' state that all but switches off their metabolism. Add water years later and they simply walk away.",
    scene: 'cells',
    keyPoints: [
      'Survive vacuum, radiation and −272 °C',
      "Enter a desiccated 'tun' state",
      'Revived after decades dried out',
    ],
    readMore:
      "In 2007 scientists carried tardigrades into orbit and exposed them directly to the vacuum and radiation of space — and many survived. Their secret is cryptobiosis: when conditions turn hostile they expel almost all their water and produce protective molecules, including special proteins that turn their cells into a glass-like solid which shields delicate machinery.\n\nIn this state their metabolism can fall below 0.01% of normal, effectively pausing life itself. Tardigrades are not truly immortal and do not thrive in these extremes — they simply refuse to die, waiting out the catastrophe until the world becomes livable again.",
  },
  {
    id: 'bio-trees-network',
    category: 'biology',
    teaser: 'The quiet forest is running a hidden communications network.',
    title: 'Trees Talk Through an Underground Internet',
    fact: "Beneath a forest floor, tree roots are woven together by vast networks of fungal threads called mycorrhizae. Through this 'wood wide web,' trees trade sugar, water and nutrients, and even send chemical warnings about insect attacks. Older 'mother trees' can funnel resources to struggling seedlings. A forest, it turns out, behaves a little like one connected organism.",
    scene: 'network',
    keyPoints: [
      'Fungal threads link tree roots',
      'Trees share nutrients and warnings',
      "'Mother trees' nurse seedlings",
    ],
    readMore:
      "The partnership between trees and fungi is one of nature's oldest alliances. The fungi wrap around or even enter root tips, vastly extending a tree's reach into the soil in exchange for sugars the tree makes by photosynthesis. Experiments using traceable isotopes have shown carbon flowing from tree to tree through these fungal bridges, sometimes between entirely different species.\n\nScientists still debate just how cooperative — or competitive — this network really is. But it has reshaped how we picture forests: not as crowds of solitary individuals, but as communities quietly trading through a living, branching web beneath our feet.",
  },
  {
    id: 'bio-banana-dna',
    category: 'biology',
    teaser: 'Look in the fruit bowl: you are gazing at a distant relative.',
    title: 'You Share About Half Your DNA With a Banana',
    fact: "Humans and bananas split from a common ancestor over a billion years ago, yet we still share roughly half of our genes. The reason is that all life relies on the same basic toolkit: genes for copying DNA, releasing energy and building cells. A banana is family — just a very, very distant cousin.",
    scene: 'helix',
    keyPoints: [
      '~50–60% of genes in common',
      "Shared 'housekeeping' machinery",
      'All life uses one molecular toolkit',
    ],
    readMore:
      "The banana statistic sounds absurd until you remember what genes actually do. Most are not about being a person or a plant but about the fundamentals of being a living cell — turning food into energy, repairing DNA, assembling proteins. Those core processes were perfected in our shared single-celled ancestors and have barely changed since.\n\nWe share around 60% of our genes with fruit flies and about 98–99% with chimpanzees, a ladder of kinship that traces the whole tree of life back to a single root. Every living thing you have ever seen is, quite literally, a relative writing variations on the same ancient code.",
  },
  {
    id: 'bio-immortal-jellyfish',
    category: 'biology',
    teaser: 'One creature in the ocean has found a loophole around growing old.',
    title: 'One Jellyfish Can Reverse Its Own Ageing',
    fact: "Turritopsis dohrnii, a jellyfish barely the size of a fingernail, can respond to injury, starvation or old age by reverting its adult cells back into an earlier juvenile stage. In effect, it restarts its own life cycle instead of dying, a process no other known animal can fully perform. Biologists have nicknamed it the 'immortal jellyfish' — not because it can't be killed, but because ageing itself doesn't seem to be a dead end for it.",
    scene: 'cells',
    keyPoints: [
      'Can revert adult cells to a juvenile polyp stage',
      "Nicknamed the 'immortal jellyfish'",
      'Still dies from predators or disease',
    ],
    readMore:
      "The transformation relies on a process called transdifferentiation, where specialised adult cells — like those in muscle or nerve tissue — convert directly into a different cell type without going through an embryo-like reset first. The jellyfish essentially disassembles part of its adult body and reassembles it into the polyp stage it started life as, ready to mature all over again.\n\nThis doesn't make the species invincible: it can still be eaten, diseased, or killed by changing ocean conditions like any other animal. But it has made Turritopsis dohrnii a serious subject of ageing research, as scientists try to understand whether the cellular tricks it uses could ever inform how human tissue repairs and regenerates.",
  },
  {
    id: 'bio-naked-mole-rat',
    category: 'biology',
    teaser: 'A wrinkled, nearly blind rodent may be quietly rewriting the rules of biology.',
    title: 'One Mammal Almost Never Gets Cancer',
    fact: "Naked mole rats are small, hairless rodents that live in underground colonies almost like ants or bees — and they appear to be remarkably resistant to cancer. Their cells produce an unusually heavy, sugary molecule that seems to stop tumours from growing out of control. They also barely feel certain kinds of pain and can survive nearly 20 minutes without oxygen by switching their metabolism to run on fructose.",
    scene: 'network',
    keyPoints: [
      'Almost never develop tumours',
      'Live in eusocial colonies, unusual for mammals',
      'Can survive ~18 minutes with no oxygen',
    ],
    readMore:
      "Most mammal cells stop dividing once they get too crowded, a safeguard against runaway growth. Naked mole rat cells enforce this rule far more strictly than ours, partly thanks to a high-molecular-weight form of hyaluronan — a sugary molecule that makes their tissue unusually gooey and appears to trigger cells to stop multiplying at the first sign of overcrowding.\n\nTheir tolerance for low oxygen is just as strange: when oxygen runs short, their cells switch from burning glucose to burning fructose, a metabolic trick otherwise seen mainly in plants. Combined with lifespans of up to 30 years — extraordinary for a rodent that size — naked mole rats have become one of biology's favourite case studies in defying the usual rules of ageing and disease.",
  },

  // ───────────────────────────── CHEMISTRY ─────────────────────────────
  {
    id: 'chem-glass',
    category: 'chemistry',
    teaser: 'A material all around you fits neatly into no category at all.',
    title: 'Glass Is Neither a Normal Solid Nor a Liquid',
    fact: "Glass is an 'amorphous solid' — rigid like a solid, but with its molecules frozen in the jumbled arrangement of a liquid. Unlike ice or salt, it has no neat crystal structure and no sharp melting point; instead it softens gradually as it heats. And despite a popular myth, the glass in old cathedral windows is not slowly flowing downward.",
    scene: 'lattice',
    keyPoints: [
      'Rigid, yet molecularly disordered',
      'No single sharp melting point',
      'Old windows are uneven from making, not flow',
    ],
    readMore:
      "Glass occupies a strange middle ground that scientists still puzzle over. When molten glass cools, its molecules lose energy faster than they can settle into an orderly crystal, so they lock in place mid-shuffle — frozen like a snapshot of a liquid caught in the act.\n\nThe myth that medieval windows are thicker at the bottom because glass flows over centuries is false; that thickness comes from old crown-glass manufacturing, and glaziers simply set the heavier edge downward. How exactly a liquid becomes a glass remains one of the deepest unsolved problems in all of condensed-matter physics.",
  },
  {
    id: 'chem-carbon',
    category: 'chemistry',
    teaser: 'The hardest gem and the lead in your pencil are secretly identical.',
    title: 'Diamond and Pencil Lead Are the Same Element',
    fact: "A dazzling diamond and the soft grey graphite in a pencil are both made of pure carbon — nothing else. The staggering difference comes entirely from how the atoms are arranged. In diamond each carbon bonds to four others in a rigid 3-D cage; in graphite they form slippery sheets that slide apart. Same atoms, wildly different worlds.",
    scene: 'hexagons',
    keyPoints: [
      'Both are 100% carbon',
      'Diamond: rigid 3-D bonds',
      'Graphite: slippery stacked sheets',
    ],
    readMore:
      "Carbon's versatility comes from its ability to bond in different geometries, called allotropes. Diamond's tetrahedral lattice makes it the hardest natural material and a superb conductor of heat, while graphite's layered sheets let it conduct electricity and act as a dry lubricant.\n\nThe same element also forms hollow soccer-ball molecules (fullerenes), tiny tubes (nanotubes) and single-atom-thick sheets (graphene), the strongest material ever measured. Given enough heat and pressure, graphite can even be turned into diamond — and, almost imperceptibly slowly, every diamond is technically drifting back toward graphite.",
  },
  {
    id: 'chem-ice-floats',
    category: 'chemistry',
    teaser: 'One everyday substance breaks the rules — and life depends on it.',
    title: "Water Breaks Its Own Rules — and That's Why Life Exists",
    fact: "Almost every substance grows denser as it freezes, but water does the opposite: solid ice is lighter than liquid water, which is why it floats. As water cools toward freezing, its molecules lock into an open, hexagonal lattice that takes up more room. If ice sank instead, lakes and oceans would freeze solid from the bottom up.",
    scene: 'snowflake',
    keyPoints: [
      'Ice is ~9% less dense than water',
      'Open, six-sided crystal structure',
      'Floating ice shelters life through winter',
    ],
    readMore:
      "This single quirk of water has shaped life on Earth. Because ice floats, it forms an insulating lid over lakes and seas, protecting the liquid water — and the creatures within it — from freezing solid below. Fish, frogs and whole ecosystems survive winter only because of it.\n\nThe cause is hydrogen bonding: in liquid water the molecules jostle close together, but on freezing they arrange into a roomy six-sided crystal — the same six-fold symmetry you see in every snowflake. Water is full of such anomalies, from its surprisingly high boiling point to its power to dissolve almost anything, all of which make it the ideal medium for life.",
  },
  {
    id: 'chem-gallium',
    category: 'chemistry',
    teaser: 'There is a metal you could melt with nothing but your own hand.',
    title: 'A Metal That Melts in Your Hand',
    fact: "Gallium is a solid metal that looks a little like aluminium, but its melting point is only about 30 °C — below body temperature. Hold a piece in your palm and it slowly slumps into a silvery liquid puddle. It is harmless to touch, which makes it a favourite for chemistry demonstrations and 'disappearing spoon' pranks.",
    scene: 'lattice',
    keyPoints: [
      'Melts at ~29.8 °C — below body heat',
      'Solid at normal room temperature',
      'Vital in semiconductors and LEDs',
    ],
    readMore:
      "Gallium's low melting point makes it one of the most playful elements. A spoon cast from gallium will quietly dissolve into a hot cup of tea — the classic trick behind the book The Disappearing Spoon.\n\nBeyond party pranks, gallium is a workhorse of modern technology: gallium arsenide and gallium nitride power the high-speed chips, blue LEDs and radio transmitters inside phones and solar panels. It also stays liquid across an enormous range — up to around 2,400 °C — so it can be used in thermometers where mercury would simply boil away.",
  },
  {
    id: 'chem-mpemba',
    category: 'chemistry',
    teaser: 'A puzzle still hides in your freezer, and nobody has fully solved it.',
    title: 'Hot Water Can Freeze Faster Than Cold',
    fact: "Counter-intuitively, a container of hot water sometimes freezes more quickly than an identical one of cold water — a puzzle called the Mpemba effect. It was named after a Tanzanian student who noticed his hot ice-cream mix froze first. Scientists still argue over exactly why, suspecting evaporation, convection and dissolved gases. Sometimes the obvious answer is simply wrong.",
    scene: 'snowflake',
    keyPoints: [
      'Hot water can beat cold to freezing',
      'Named after student Erasto Mpemba (1963)',
      'The mechanism is still debated today',
    ],
    readMore:
      "The Mpemba effect is a reminder that even everyday physics still holds surprises. Aristotle noted it more than two thousand years ago, but it took a curious schoolboy in 1963 to drag it back into science after his teacher dismissed the idea as impossible.\n\nProposed explanations include faster evaporation shrinking the volume of hot water, convection currents redistributing heat, dissolved gases escaping, and subtle effects in how water's hydrogen bonds store energy. Frustratingly, the effect is hard to reproduce reliably, and some researchers argue it is not a single phenomenon at all — leaving a genuine open question chilling in your kitchen.",
  },
  {
    id: 'chem-aerogel',
    category: 'chemistry',
    teaser: "Some materials are so light they look like they shouldn't exist at all.",
    title: "The World's Lightest Solid Is Basically Frozen Smoke",
    fact: "Aerogel is a solid made by removing all the liquid from a gel and replacing it with air, leaving a rigid structure that is up to 99.8% empty space. It's so light that a block of it can rest on a flower without crushing the petals, earning nicknames like 'frozen smoke' and 'solid air.' Despite its ghostly appearance, aerogel is a superb insulator, capable of blocking a blowtorch's heat with a layer only a centimetre thick.",
    scene: 'lattice',
    keyPoints: [
      'Up to 99.8% air by volume',
      'One of the lightest solids ever made',
      'Extremely effective heat insulator',
    ],
    readMore:
      "Aerogels are made by growing a gel — often from silica — and then carefully replacing its liquid component with gas through a process called supercritical drying, which avoids the surface tension that would otherwise collapse the delicate structure as it dries. What's left is a tangled, nanoporous scaffold that is almost entirely empty, yet holds together as a solid.\n\nNASA has used silica aerogel to capture comet dust particles travelling at hypervelocity without vaporising them, and to insulate the wheels of Mars rovers against brutal overnight cold. Its ghostly blue tint comes from the same kind of light scattering that makes the sky blue — Rayleigh scattering off structures far smaller than the wavelength of visible light.",
  },
  {
    id: 'chem-salt',
    category: 'chemistry',
    teaser: 'Something you sprinkle on your dinner is built from two things that would kill you.',
    title: 'Table Salt Is Made From Two Deadly Elements',
    fact: "Ordinary table salt is sodium chloride — a compound of sodium, a metal so reactive it explodes on contact with water, and chlorine, a toxic gas used as a chemical weapon in the First World War. Combined, these two hazardous elements form a stable, harmless crystal that's essential to human life. It's a vivid example of how a compound's properties can bear no resemblance to the elements that built it.",
    scene: 'hexagons',
    keyPoints: [
      'Sodium metal reacts violently with water',
      'Chlorine gas is toxic on its own',
      'Together they form stable, life-sustaining salt',
    ],
    readMore:
      "The reason the combination is so different from its parts lies in how the two elements bond. Sodium desperately wants to give away a single electron, and chlorine desperately wants to accept one; when they react, sodium becomes a positively charged ion and chlorine a negatively charged one, locking together in a rigid ionic lattice. That new arrangement is far more chemically stable than either element was on its own, which is exactly why it no longer behaves like a metal or a gas.\n\nThis same logic explains countless everyday materials: chemical compounds are not averages of their ingredients but entirely new substances defined by how their atoms interact. It's part of why chemistry can feel almost magical — mixing two poisons can, under the right rules, produce something you eat by the spoonful.",
  },

  // ───────────────────────────── MEDICINE ─────────────────────────────
  {
    id: 'med-stomach',
    category: 'medicine',
    teaser: 'You carry an acid strong enough to dissolve metal — and survive it.',
    title: 'Your Stomach Re-Lines Itself Every Few Days',
    fact: "Your stomach produces hydrochloric acid strong enough to dissolve metal, so why doesn't it digest itself? A thick layer of mucus shields the stomach wall, and the lining is replaced so quickly — every few days — that any damage is constantly repaired. It is a living example of staying one step ahead of your own chemistry.",
    scene: 'ring-pulse',
    keyPoints: [
      'Stomach acid ~pH 1.5–2',
      'A mucus layer guards the wall',
      'The lining renews every few days',
    ],
    readMore:
      "The stomach is essentially a controlled acid bath that must avoid eating itself. Specialised cells pump out hydrochloric acid to break down food and kill pathogens, while neighbouring cells secrete a bicarbonate-rich mucus that neutralises the acid right at the surface.\n\nEven so, the lining takes constant punishment, so the body simply replaces it on a rolling basis, shedding and regrowing cells every few days. When this delicate balance fails — often because of the bacterium H. pylori or certain painkillers — the acid wins locally, and an ulcer is the result.",
  },
  {
    id: 'med-heartbeats',
    category: 'medicine',
    teaser: 'A single muscle in you will work billions of times without one break.',
    title: 'Your Heart Will Beat About 2.5 Billion Times',
    fact: "A human heart beats around 100,000 times a day, every day, without rest. Over an average lifetime that adds up to roughly 2.5 to 3 billion beats. In a single day it pushes about 7,500 litres of blood through some 100,000 kilometres of vessels — enough to wrap around the Earth twice.",
    scene: 'heartbeat',
    keyPoints: [
      '~100,000 beats per day',
      '~2.5–3 billion in a lifetime',
      'Blood vessels ~100,000 km long',
    ],
    readMore:
      "The heart is the body's most tireless muscle, and its endurance is astonishing. It begins beating about three weeks after conception and never stops for a lifetime, driven by its own internal electrical pacemaker that fires without any command from the brain.\n\nCuriously, across the animal kingdom most mammals get roughly the same lifetime budget of about a billion heartbeats — a mouse spends them in a couple of frantic years, an elephant over decades at a slow, heavy thud. Humans, with the help of modern medicine, are among the few animals to have cheated that ancient bargain.",
  },
  {
    id: 'med-cornea',
    category: 'medicine',
    teaser: 'One part of you is alive but has no blood supply at all.',
    title: 'One Part of Your Body Has No Blood Supply',
    fact: "The cornea — the clear dome at the front of your eye — contains no blood vessels at all. It must stay perfectly transparent to let light through, and blood vessels would cloud the view. Instead it draws oxygen directly from the air and nutrients from the tears and fluid around it. It is one of the only tissues in the body that breathes for itself.",
    scene: 'iris',
    keyPoints: [
      'No blood vessels — to stay transparent',
      'Takes oxygen straight from the air',
      'Rarely rejected when transplanted',
    ],
    readMore:
      "The cornea's lack of a blood supply is a clever answer to an optical problem. Any vessel would scatter light and blur your vision, so evolution kept it crystal clear by feeding it indirectly — oxygen diffuses in from the tear film, and nutrients arrive from the watery aqueous humour just behind it.\n\nThis is also why wearing contact lenses for too long can starve the cornea of oxygen. And because it has no blood, the cornea is largely hidden from the immune system, which is why corneal transplants are among the most successful and least-rejected of all human transplants.",
  },
  {
    id: 'med-bone',
    category: 'medicine',
    teaser: 'You are held up by a material that quietly outperforms steel.',
    title: 'Bone Is Stronger Than Steel, Pound for Pound',
    fact: "Bone is a living material that, weight for weight, can be stronger than steel and tougher than concrete. A block of bone the size of a matchbox can in principle bear the weight of several cars. Yet bone is light, flexible and forever rebuilding itself, dissolving and replacing its own structure throughout your life.",
    scene: 'ring-pulse',
    keyPoints: [
      'Stronger than steel by weight',
      'Light, flexible and self-repairing',
      'The skeleton renews every ~10 years',
    ],
    readMore:
      "Bone's strength comes from a brilliant composite design. It pairs hard mineral crystals — mostly calcium phosphate — for stiffness with springy collagen fibres for toughness, much like steel-reinforced concrete, but lighter and able to heal itself.\n\nSpecial cells are forever at work: osteoclasts dissolve old bone while osteoblasts lay down new, so your entire skeleton replaces itself roughly every decade. This constant remodelling lets bone respond to demand — astronauts lose bone in weightlessness, while a tennis player's racket arm grows visibly denser than the other.",
  },
  {
    id: 'med-fever',
    category: 'medicine',
    teaser: 'The thing that makes you feel awful is secretly on your side.',
    title: 'A Fever Is Your Ally, Not Your Enemy',
    fact: "A fever feels miserable, but it is a deliberate defensive move by your body, not a malfunction. Raising your core temperature speeds up immune cells and makes the body a less comfortable home for many bacteria and viruses. The brain's hypothalamus acts as a thermostat, turning the heat up on purpose. Within limits, a fever is your immune system fighting back.",
    scene: 'ring-pulse',
    keyPoints: [
      'The brain raises temperature on purpose',
      'Heat accelerates the immune response',
      'Many pathogens replicate poorly when hot',
    ],
    readMore:
      "For most of history fever was seen as the disease itself; we now know it is often part of the cure. When immune cells detect an invader they release signals telling the hypothalamus to reset the body's thermostat higher, which is why you shiver to generate heat as a fever climbs.\n\nThe elevated temperature speeds up the production and movement of infection-fighting cells while hampering temperature-sensitive microbes. This is why doctors increasingly advise letting a mild fever run its course — though very high or prolonged fevers, especially in the very young, still deserve real attention.",
  },
  {
    id: 'med-eye-lens',
    category: 'medicine',
    teaser: "A few cells in your body have never once been replaced since before you were born.",
    title: 'Some Cells in Your Eyes Are as Old as You Are',
    fact: "Most cells in your body are swapped out and renewed on a rolling basis, but the core fibre cells of your eye's lens are a strange exception — they form before birth and are never replaced. Instead of dying off and regenerating, they simply lose their nucleus and internal organelles, becoming stripped-down, transparent structures stacked in perfect layers. The very centre of your lens is, cellularly speaking, the same age as you are.",
    scene: 'iris',
    keyPoints: [
      'Central lens fibres form before birth',
      "They're never replaced afterward",
      'Loss of internal organelles keeps them transparent',
    ],
    readMore:
      "The lens has to stay perfectly clear to focus light, and living cells full of organelles would scatter that light and blur vision — much like why the cornea has no blood vessels. So during development, lens cells methodically destroy their own nucleus, mitochondria and other internal machinery, becoming little more than ordered, protein-packed shells.\n\nNew lens fibre cells are still added at the edges throughout life, pushing the original cells ever deeper toward the centre, which is why the very core of an elderly person's lens is developmentally the oldest tissue in their entire body. Over decades those ancient proteins slowly stiffen and yellow, which is a major reason reading glasses and cataracts become more common with age.",
  },
  {
    id: 'med-baby-bones',
    category: 'medicine',
    teaser: 'You have fewer parts now than you did on the day you were born.',
    title: 'Babies Are Born With More Bones Than Adults',
    fact: "A newborn baby has around 300 bones, but an adult ends up with only 206. The difference isn't lost bone — it's fusion: many bones that start out as separate pieces of cartilage or bone gradually knit together as a child grows, especially in the skull, spine and pelvis. It's one of the few times in life where 'more parts' actually means 'less finished.'",
    scene: 'ring-pulse',
    keyPoints: [
      'Newborns: ~300 bones',
      'Adults: 206 bones',
      'Separate pieces fuse together during growth',
    ],
    readMore:
      "Many of a newborn's 'extra' bones are really unfused sections of what will become a single adult bone — the skull, for instance, is made of separate plates connected by soft, flexible joints called fontanelles, which allow the head to compress slightly during birth and leave room for rapid brain growth afterward. Those plates don't fully fuse until well into childhood.\n\nSimilarly, the sacrum at the base of the spine starts as five separate vertebrae that fuse into one solid bone by early adulthood, and the pelvis begins as three separate bones on each side. This gradual fusion is part of why paediatric fractures often heal differently from adult ones, and why doctors can estimate a child's age surprisingly precisely just from an X-ray of which bones have joined and which haven't.",
  },
  {
    id: 'med-goosebumps',
    category: 'medicine',
    teaser: 'Your skin still tries to do something your body can no longer manage.',
    title: 'Goosebumps Are a Reflex From Fur You No Longer Have',
    fact: "When you're cold or startled, tiny muscles at the base of each hair follicle contract, pulling the hair upright and leaving the bumpy skin we call goosebumps. In a furrier ancestor, raised hair trapped a thicker layer of insulating air, or puffed up the animal's coat to look bigger and more threatening. Humans still run the same reflex, even though our comparatively sparse body hair means it accomplishes almost nothing anymore.",
    scene: 'ring-pulse',
    keyPoints: [
      'Caused by tiny muscles called arrector pili',
      'Once trapped heat or made animals look bigger',
      'Still triggered by cold, fear or strong emotion',
    ],
    readMore:
      "The reflex is controlled by the sympathetic nervous system, the same fight-or-flight circuitry that quickens your heartbeat and dilates your pupils, which is why goosebumps can appear during a scary moment or a piece of music just as easily as in the cold. In a fur-covered ancestor this had a real payoff: raised hair created extra insulating air pockets in freezing weather, and puffed up an animal's silhouette when it needed to look larger to a rival or predator.\n\nWith human body hair reduced to a fine, mostly useless covering, none of that works anymore — the reflex is a genuine evolutionary leftover, a bit like an appendix for your skin. It persists simply because the underlying nerve pathway never stopped being useful for the emotional alertness part of the response, even after the fur it once managed was long gone.",
  },

  // ─────────────────────────── NEUROSCIENCE ───────────────────────────
  {
    id: 'neuro-energy',
    category: 'neuroscience',
    teaser: 'The most powerful object you own runs on less power than a lamp.',
    title: 'Your Brain Runs on About 20 Watts',
    fact: "The brain is just 2% of your body weight but devours about 20% of your energy. In everyday terms that is around 20 watts of power — less than a dim lightbulb — yet it runs roughly 86 billion neurons. No computer comes close to that efficiency for the kind of thinking brains do effortlessly.",
    scene: 'network',
    keyPoints: [
      '~2% of body mass, ~20% of energy',
      'Runs on roughly 20 watts',
      'About 86 billion neurons',
    ],
    readMore:
      "The brain's hunger for energy never really switches off. Most of those 20 watts go not into active thought but into the constant baseline upkeep of neurons — endlessly pumping ions across membranes to stay poised and ready to fire.\n\nThat is why the brain burns nearly as much energy when you sleep or daydream as when you wrestle with a hard problem. Its astonishing efficiency — doing in 20 watts what would take a power-hungry data centre to crudely imitate — is a major reason engineers study brains for inspiration when designing low-power 'neuromorphic' chips.",
  },
  {
    id: 'neuro-speed',
    category: 'neuroscience',
    teaser: 'Your body reacts to danger before you have even decided to.',
    title: 'Your Nerves Fire Signals at Over 400 km/h',
    fact: "When you stub your toe, the message races to your brain along nerve fibres at up to about 120 metres per second — over 400 kilometres per hour. The fastest nerves are wrapped in a fatty insulation called myelin that lets signals leap along in jumps. It is why you yank your hand off a hot stove before you consciously decide to.",
    scene: 'network',
    keyPoints: [
      'Up to ~120 m/s (~430 km/h)',
      'Myelin insulation speeds the signal',
      'Reflexes act before conscious thought',
    ],
    readMore:
      "Not all nerves are equally fast, and the difference can be life-saving. Thickly myelinated fibres carry urgent signals — touch, sharp pain, muscle commands — at highway speeds, while thin unmyelinated fibres carrying dull ache or temperature crawl along at walking pace. That is why a stubbed toe hurts sharply first and only throbs later.\n\nThe myelin sheath works like the insulation on a wire, forcing the electrical impulse to skip between gaps in a process called saltatory conduction. When myelin is damaged, as in multiple sclerosis, these signals slow or fail, and the body's swift reflexes begin to falter.",
  },
  {
    id: 'neuro-gut',
    category: 'neuroscience',
    teaser: "There is a 'brain' inside you that can think without your head.",
    title: "You Have a 'Second Brain' in Your Gut",
    fact: "Lining your digestive tract is a web of around 500 million neurons — the enteric nervous system, often called the 'second brain.' It can run digestion entirely on its own, with no orders from your head. It also makes much of your body's serotonin, a chemical tied to mood, which helps explain gut feelings and the deep link between digestion and emotion.",
    scene: 'network',
    keyPoints: [
      '~500 million neurons in the gut',
      'Runs digestion independently',
      "Makes ~90% of the body's serotonin",
    ],
    readMore:
      "The gut's nervous system is so extensive and independent that scientists treat it as a brain in its own right. It can orchestrate the complex muscle contractions of digestion without any input from the central nervous system, and it talks back to the head through the vagus nerve in a constant two-way conversation.\n\nBecause gut microbes and enteric neurons help regulate serotonin and other signalling chemicals, the state of your gut can influence anxiety, mood and stress — and vice versa. This 'gut-brain axis' has become one of the most exciting frontiers in modern medicine.",
  },
  {
    id: 'neuro-memory',
    category: 'neuroscience',
    teaser: 'Each time you revisit the past, you quietly change it.',
    title: 'Every Time You Remember, You Rewrite the Memory',
    fact: "Memory isn't a video you replay — it is a story your brain rebuilds from fragments each time. And in the act of recalling, a memory becomes briefly editable before it is stored again, a process called reconsolidation. That means every recollection can subtly change, which is why confident memories can still be wrong. Your past is more reconstruction than recording.",
    scene: 'waves',
    keyPoints: [
      'Memories are rebuilt, not replayed',
      'Recall makes them briefly editable',
      'Confident memories can still be false',
    ],
    readMore:
      "The reconstructive nature of memory has profound consequences. When you recall an event, the brain reassembles it from scattered pieces — sights, sounds, feelings — and quietly fills the gaps with assumptions, so two people can vividly 'remember' the same moment in different ways.\n\nBecause each retrieval reopens the memory for editing before re-storing it, details can drift, merge with later information, or be implanted entirely; psychologists have planted wholly false childhood memories in willing volunteers. This fragility is also a hope: new therapies are exploring whether reconsolidation can be harnessed to soften traumatic memories as they are recalled.",
  },
  {
    id: 'neuro-tickle',
    category: 'neuroscience',
    teaser: 'There is one person in the world who can never tickle you.',
    title: "You Can't Tickle Yourself",
    fact: "Try as you might, you can't tickle yourself — and the reason reveals how your brain models the world. The cerebellum predicts the sensations your own movements will cause and cancels them out, so a self-touch feels dull. A surprise touch from someone else isn't predicted, so it triggers the ticklish reflex. Your brain is constantly subtracting 'you' to better notice everything else.",
    scene: 'ring-pulse',
    keyPoints: [
      'The cerebellum predicts self-touch',
      'Predicted sensations are dampened',
      'Surprise is what makes tickling work',
    ],
    readMore:
      "The reason you can't tickle yourself opens a window onto how brains work in general. To move smoothly, your brain constantly predicts the sensory consequences of its own actions and subtracts them, so it can tell the difference between the world acting on you and you acting on the world.\n\nA self-tickle is predicted and cancelled; another person's touch is unpredictable and slips straight through the filter. This same predictive machinery, when it misfires, may underlie symptoms in conditions like schizophrenia, where self-generated thoughts or movements can start to feel as though they come from somewhere outside.",
  },
  {
    id: 'neuro-brain-pain',
    category: 'neuroscience',
    teaser: 'The organ in charge of every ache you have ever felt cannot feel one itself.',
    title: 'Your Brain Cannot Feel Pain',
    fact: "Brain tissue itself contains no pain receptors, so the brain cannot feel pain directly — even though it's the organ that interprets every painful signal from the rest of your body. This is why neurosurgeons can operate on a fully conscious patient, probing brain tissue while the patient talks, with only local anaesthetic needed for the scalp and skull. The headaches you do get come from surrounding structures like blood vessels, muscles and the membranes covering the brain, not the brain itself.",
    scene: 'network',
    keyPoints: [
      'Brain tissue has no pain receptors',
      'Awake brain surgery is possible because of this',
      'Headaches originate in vessels, muscles or membranes, not the brain',
    ],
    readMore:
      "'Awake craniotomy' surgery takes direct advantage of this fact: after numbing the scalp and skull, surgeons can operate on a fully conscious patient, using gentle electrical stimulation to map out which areas control speech or movement before removing a tumour, all while chatting with the patient to confirm nothing critical is being damaged.\n\nWhat actually hurts during a headache or migraine is the tissue around the brain — swollen blood vessels, tense scalp and neck muscles, or irritation of the meninges, the protective membranes wrapping the brain, all of which are richly supplied with pain receptors the brain itself lacks. The organ that constructs your entire experience of pain is, in that narrow anatomical sense, numb to it.",
  },
  {
    id: 'neuro-blind-spot',
    category: 'neuroscience',
    teaser: "Right now, there's a hole in your vision that your brain is quietly hiding from you.",
    title: 'You Have a Blind Spot You Never Notice',
    fact: "Where the optic nerve exits each eye, there are no light-sensing cells at all, creating a small blind spot in your field of view. You never notice it because your brain fills the gap using surrounding visual information and data from your other eye, essentially painting over the hole in real time. The blind spot is there every waking moment — you simply can't see that it's missing.",
    scene: 'iris',
    keyPoints: [
      "Caused by the optic nerve's exit point on the retina",
      'Present in both eyes, in slightly different spots',
      'The brain fills the gap using nearby visual data',
    ],
    readMore:
      "You can find your own blind spot with a simple trick: close one eye, stare at a fixed point, and slowly move a small object off to the side at the right distance — at some point it will simply vanish, even though nothing is physically blocking it. With both eyes open the effect disappears entirely, since each eye's blind spot sits in a different part of the visual field and covers for the other.\n\nThe brain's ability to 'fill in' the missing patch — using colour, texture and pattern from the surrounding scene — is a striking example of vision being an active construction rather than a passive recording. It's the same predictive machinery that lets you perceive a complete, continuous world despite retinas that are, quite literally, punctured with a hole you'll never consciously see.",
  },
]

// Group fact ids by category for quick lookup during the daily draw.
export const FACTS_BY_CATEGORY = FACTS.reduce((acc, fact) => {
  ;(acc[fact.category] ||= []).push(fact)
  return acc
}, {})

export function getFactById(id) {
  return FACTS.find((f) => f.id === id)
}
