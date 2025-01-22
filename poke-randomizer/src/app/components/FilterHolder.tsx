const Gen1Moves :string[] = ["Absorb","Acid","Acid Armor","Agility","Amnesia","Aurora Beam","Barrage","Barrier","Bide","Bind","Bite","Blizzard","Body Slam","Bone Club","Bonemerang","Bubble","Bubble Beam","Clamp","Comet Punch","Confuse Ray","Confusion","Constrict",
  "Conversion","Counter","Crabhammer","Cut","Defense Curl","Dig","Disable","Dizzy Punch","Double Kick","Double Slap","Double Team","Double-Edge","Dragon Rage","Dream Eater","Drill Peck","Earthquake","Egg Bomb","Ember","Explosion","Fire Blast","Fire Punch","Fire Spin",
  "Fissure","Flamethrower","Flash","Fly","Focus Energy","Fury Attack","Fury Swipes","Glare","Growl","Growth","Guillotine","Gust","Harden","Haze","Headbutt","High Jump Kick","Horn Attack","Horn Drill","Hydro Pump","Hyper Beam","Hyper Fang","Hypnosis","Ice Beam",
  "Ice Punch","Jump Kick","Karate Chop","Kinesis","Leech Life","Leech Seed","Leer","Lick","Light Screen","Lovely Kiss","Low Kick","Meditate","Mega Drain","Mega Kick","Mega Punch","Metronome","Mimic","Minimize","Mirror Move","Mist","Night Shade","Pay Day","Peck",
  "Petal Dance","Pin Missile","Poison Gas","Poison Powder","Poison Sting","Pound","Psybeam","Psychic","Psywave","Quick Attack","Rage","Razor Leaf","Razor Wind","Recover","Reflect","Rest","Roar","Rock Slide","Rock Throw","Rolling Kick","Sand Attack","Scratch",
  "Screech","Seismic Toss","Self-Destruct","Sharpen","Sing","Skull Bash","Sky Attack","Slam","Slash","Sleep Powder","Sludge","Smog","Smokescreen","Soft-Boiled","Solar Beam","Sonic Boom","Spike Cannon","Splash","Spore","Stomp","Strength","String Shot","Struggle",
  "Stun Spore","Submission","Substitute","Super Fang","Supersonic","Surf","Swift","Swords Dance","Tackle","Tail Whip","Take Down","Teleport","Thrash","Thunder","Thunder Punch","Thunder Shock","Thunder Wave","Thunderbolt","Toxic","Transform","Tri Attack","Twineedle",
  "Vine Whip","Vise Grip","Water Gun","Waterfall","Whirlwind","Wing Attack","Withdraw","Wrap"];

const Gen2Moves :string[] = ["Aeroblast","Ancient Power","Attract","Baton Pass","Beat Up","Belly Drum","Bone Rush","Charm","Conversion 2","Cotton Spore","Cross Chop","Crunch","Curse","Destiny Bond","Detect","Dragon Breath","Dynamic Punch","Encore",
  "Endure","Extreme Speed","False Swipe","Feint Attack","Flail","Flame Wheel","Foresight","Frustration","Fury Cutter","Future Sight","Giga Drain","Heal Bell","Hidden Power","Icy Wind","Iron Tail","Lock-On","Mach Punch","Magnitude","Mean Look",
  "Megahorn","Metal Claw","Milk Drink","Mind Reader","Mirror Coat","Moonlight","Morning Sun","Mud-Slap","Nightmare","Octazooka","Outrage","Pain Split","Perish Song","Powder Snow","Present","Protect","Psych Up","Pursuit","Rain Dance","Rapid Spin",
  "Return","Reversal","Rock Smash","Rollout","Sacred Fire","Safeguard","Sandstorm","Scary Face","Shadow Ball","Sketch","Sleep Talk","Sludge Bomb","Snore","Spark","Spider Web","Spikes","Spite","Steel Wing","Sunny Day","Swagger","Sweet Kiss",
  "Sweet Scent","Synthesis","Thief","Triple Kick","Twister","Vital Throw","Whirlpool","Zap Cannon"];

const Gen3Moves :string[] = ["Aerial Ace","Air Cutter","Arm Thrust","Aromatherapy","Assist","Astonish","Blast Burn","Blaze Kick","Block","Bounce","Brick Break","Bulk Up","Bullet Seed","Calm Mind","Camouflage","Charge","Cosmic Power","Covet",
  "Crush Claw","Dive","Doom Desire","Dragon Claw","Dragon Dance","Endeavor","Eruption","Extrasensory","Facade","Fake Out","Fake Tears","Feather Dance","Flatter","Focus Punch","Follow Me","Frenzy Plant","Grass Whistle","Grudge","Hail","Heat Wave",
  "Helping Hand","Howl","Hydro Cannon","Hyper Voice","Ice Ball","Icicle Spear","Imprison","Ingrain","Iron Defense","Knock Off","Leaf Blade","Luster Purge","Magic Coat","Magical Leaf","Memento","Metal Sound","Meteor Mash","Mist Ball","Mud Shot",
  "Mud Sport","Muddy Water","Nature Power","Needle Arm","Odor Sleuth","Overheat","Poison Fang","Poison Tail","Psycho Boost","Recycle","Refresh","Revenge","Rock Blast","Rock Tomb","Role Play","Sand Tomb","Secret Power","Shadow Blast","Shadow Blitz",
  "Shadow Bolt","Shadow Break","Shadow Chill","Shadow Down","Shadow End","Shadow Fire","Shadow Half","Shadow Hold","Shadow Mist","Shadow Panic","Shadow Punch","Shadow Rave","Shadow Rush","Shadow Shed","Shadow Sky","Shadow Storm","Shadow Wave",
  "Sheer Cold","Shock Wave","Signal Beam","Silver Wind","Skill Swap","Sky Uppercut","Slack Off","Smelling Salts","Snatch","Spit Up","Stockpile","Superpower","Swallow","Tail Glow","Taunt","Teeter Dance","Tickle","Torment","Trick","Uproar",
  "Volt Tackle","Water Pulse","Water Sport","Water Spout","Weather Ball","Will-O-Wisp","Wish","Yawn"];

const Gen4Moves :string[] = ["Acupressure","Air Slash","Aqua Jet","Aqua Ring","Aqua Tail","Assurance","Attack Order","Aura Sphere","Avalanche","Brave Bird","Brine","Bug Bite","Bug Buzz","Bullet Punch","Captivate","Charge Beam","Chatter",
  "Close Combat","Copycat","Cross Poison","Crush Grip","Dark Pulse","Dark Void","Defend Order","Defog","Discharge","Double Hit","Draco Meteor","Dragon Pulse","Dragon Rush","Drain Punch","Earth Power","Embargo","Energy Ball","Feint","Fire Fang",
  "Flare Blitz","Flash Cannon","Fling","Focus Blast","Force Palm","Gastro Acid","Giga Impact","Grass Knot","Gravity","Guard Swap","Gunk Shot","Gyro Ball","Hammer Arm","Head Smash","Heal Block","Heal Order","Healing Wish","Heart Swap","Ice Fang",
  "Ice Shard","Iron Head","Judgment","Last Resort","Lava Plume","Leaf Storm","Lucky Chant","Lunar Dance","Magma Storm","Magnet Bomb","Magnet Rise","Me First","Metal Burst","Miracle Eye","Mirror Shot","Mud Bomb","Nasty Plot","Natural Gift",
  "Night Slash","Ominous Wind","Payback","Pluck","Poison Jab","Power Gem","Power Swap","Power Trick","Power Whip","Psycho Cut","Psycho Shift","Punishment","Roar of Time","Rock Climb","Rock Polish","Rock Wrecker","Roost","Seed Bomb","Seed Flare",
  "Shadow Claw","Shadow Force","Shadow Sneak","Spacial Rend","Stealth Rock","Stone Edge","Sucker Punch","Switcheroo","Tailwind","Thunder Fang","Toxic Spikes","Trick Room","Trump Card","U-turn","Vacuum Wave","Wake-Up Slap","Wood Hammer",
  "Worry Seed","Wring Out","X-Scissor","Zen Headbutt"];

const Gen5Moves :string[] = ["Acid Spray","Acrobatics","After You","Ally Switch","Autotomize","Bestow","Blue Flare","Bolt Strike","Bulldoze","Chip Away","Circle Throw","Clear Smog","Coil","Cotton Guard","Dragon Tail","Drill Run","Dual Chop",
  "Echoed Voice","Electro Ball","Electroweb","Entrainment","Fiery Dance","Final Gambit","Fire Pledge","Flame Burst","Flame Charge","Foul Play","Freeze Shock","Frost Breath","Fusion Bolt","Fusion Flare","Gear Grind","Glaciate","Grass Pledge",
  "Guard Split","Head Charge","Heal Pulse","Heart Stamp","Heat Crash","Heavy Slam","Hex","Hone Claws","Horn Leech","Hurricane","Ice Burn","Icicle Crash","Incinerate","Inferno","Leaf Tornado","Low Sweep","Magic Room","Night Daze",
  "Power Split","Psyshock","Psystrike","Quash","Quick Guard","Quiver Dance","Rage Powder","Razor Shell","Reflect Type","Relic Song","Retaliate","Round","Sacred Sword","Scald","Searing Shot","Secret Sword","Shell Smash","Shift Gear",
  "Simple Beam","Sky Drop","Sludge Wave","Smack Down","Snarl","Soak","Steamroller","Stored Power","Storm Throw","Struggle Bug","Synchronoise","Tail Slap","Techno Blast","Telekinesis","V-create","Venoshock","Volt Switch","Water Pledge",
  "Wide Guard","Wild Charge","Wonder Room","Work Up"];

const Gen6Moves :string[] = ["Aromatic Mist","Baby-Doll Eyes","Belch","Boomburst","Celebrate","Confide","Crafty Shield","Dazzling Gleam","Diamond Storm","Disarming Voice","Dragon Ascent","Draining Kiss","Eerie Impulse","Electric Terrain",
  "Electrify","Fairy Lock","Fairy Wind","Fell Stinger","Flower Shield","Flying Press","Forest's Curse","Freeze-Dry","Geomancy","Grassy Terrain","Happy Hour","Hold Back","Hold Hands","Hyperspace Fury","Hyperspace Hole","Infestation",
  "Ion Deluge","King's Shield","Land's Wrath","Light of Ruin","Magnetic Flux","Mat Block","Misty Terrain","Moonblast","Mystical Fire","Noble Roar","Nuzzle","Oblivion Wing","Origin Pulse","Parabolic Charge","Parting Shot",
  "Petal Blizzard","Phantom Force","Play Nice","Play Rough","Powder","Power-Up Punch","Precipice Blades","Rototiller","Spiky Shield","Steam Eruption","Sticky Web","Thousand Arrows","Thousand Waves","Topsy-Turvy","Trick-or-Treat",
  "Venom Drench","Water Shuriken"];

const Gen7Moves :string[] = ["10,000,000 Volt Thunderbolt","Accelerock","Acid Downpour","All-Out Pummeling","Anchor Shot","Aurora Veil","Baddy Bad","Baneful Bunker","Beak Blast","Black Hole Eclipse","Bloom Doom","Bouncy Bubble","Breakneck Blitz",
  "Brutal Swing","Burn Up","Buzzy Buzz","Catastropika","Clanging Scales","Clangorous Soulblaze","Continental Crush","Core Enforcer","Corkscrew Crash","Darkest Lariat","Devastating Drake","Double Iron Bash","Dragon Hammer","Extreme Evoboost",
  "Fire Lash","First Impression","Fleur Cannon","Floaty Fall","Floral Healing","Freezy Frost","Gear Up","Genesis Supernova","Gigavolt Havoc","Glitzy Glow","Guardian of Alola","High Horsepower","Hydro Vortex","Ice Hammer","Inferno Overdrive",
  "Instruct","Laser Focus","Leafage","Let's Snuggle Forever","Light That Burns the Sky","Liquidation","Lunge","Malicious Moonsault","Menacing Moonraze Maelstrom","Mind Blown","Moongeist Beam","Multi-Attack","Nature's Madness","Never-Ending Nightmare",
  "Oceanic Operetta","Photon Geyser","Pika Papow","Plasma Fists","Pollen Puff","Power Trip","Prismatic Laser","Psychic Fangs","Psychic Terrain","Pulverizing Pancake","Purify","Revelation Dance","Sappy Seed","Savage Spin-Out","Searing Sunraze Smash",
  "Shadow Bone","Shattered Psyche","Shell Trap","Shore Up","Sinister Arrow Raid","Sizzly Slide","Smart Strike","Solar Blade","Soul-Stealing 7-Star Strike","Sparkling Aria","Sparkly Swirl","Spectral Thief","Speed Swap","Spirit Shackle",
  "Splintered Stormshards","Splishy Splash","Spotlight","Stoked Sparksurfer","Stomping Tantrum","Strength Sap","Subzero Slammer","Sunsteel Strike","Supersonic Skystrike","Tearful Look","Tectonic Rage","Throat Chop","Toxic Thread","Trop Kick",
  "Twinkle Tackle","Veevee Volley","Zing Zap","Zippy Zap"];

const Gen8Moves :string[] = ["Apple Acid","Astral Barrage","Aura Wheel","Barb Barrage","Behemoth Bash","Behemoth Blade","Bitter Malice","Bleakwind Storm","Body Press","Bolt Beak","Branch Poke","Breaking Swipe","Burning Jealousy","Ceaseless Edge",
  "Chloroblast","Clangorous Soul","Coaching","Corrosive Gas","Court Change","Decorate","Dire Claw","Dragon Darts","Dragon Energy","Drum Beating","Dual Wingbeat","Dynamax Cannon","Eerie Spell","Esper Wing","Eternabeam","Expanding Force",
  "False Surrender","Fiery Wrath","Fishious Rend","Flip Turn","Freezing Glare","G-Max Befuddle","G-Max Cannonade","G-Max Centiferno","G-Max Chi Strike","G-Max Cuddle","G-Max Depletion","G-Max Drum Solo","G-Max Finale","G-Max Fireball",
  "G-Max Foam Burst","G-Max Gold Rush","G-Max Gravitas","G-Max Hydrosnipe","G-Max Malodor","G-Max Meltdown","G-Max One Blow","G-Max Rapid Flow","G-Max Replenish","G-Max Resonance","G-Max Sandblast","G-Max Smite","G-Max Snooze","G-Max Steelsurge",
  "G-Max Stonesurge","G-Max Stun Shock","G-Max Sweetness","G-Max Tartness","G-Max Terror","G-Max Vine Lash","G-Max Volcalith","G-Max Volt Crash","G-Max Wildfire","G-Max Wind Rage","Glacial Lance","Grassy Glide","Grav Apple","Headlong Rush",
  "Infernal Parade","Jaw Lock","Jungle Healing","Lash Out","Life Dew","Lunar Blessing","Magic Powder","Max Airstream","Max Darkness","Max Flare","Max Flutterby","Max Geyser","Max Guard","Max Hailstorm","Max Knuckle","Max Lightning","Max Mindstorm",
  "Max Ooze","Max Overgrowth","Max Phantasm","Max Quake","Max Rockfall","Max Starfall","Max Steelspike","Max Strike","Max Wyrmwind","Meteor Assault","Meteor Beam","Misty Explosion","Mountain Gale","Mystical Power","No Retreat","Obstruct","Octolock",
  "Overdrive","Poltergeist","Power Shift","Psyshield Bash","Pyro Ball","Raging Fury","Rising Voltage","Sandsear Storm","Scale Shot","Scorching Sands","Shell Side Arm","Shelter","Skitter Smack","Snap Trap","Snipe Shot","Spirit Break",
  "Springtide Storm","Steel Beam","Steel Roller","Stone Axe","Strange Steam","Stuff Cheeks","Surging Strikes","Take Heart","Tar Shot","Teatime","Terrain Pulse","Thunder Cage","Thunderous Kick","Triple Arrows","Triple Axel","Victory Dance",
  "Wave Crash","Wicked Blow","Wildbolt Storm"];

const Gen9Moves :string[] = ["Alluring Voice","Aqua Cutter","Aqua Step","Armor Cannon","Axe Kick","Bitter Blade","Blazing Torque","Blood Moon","Burning Bulwark","Chilling Water","Chilly Reception","Collision Course","Combat Torque","Comeuppance",
  "Doodle","Double Shock","Dragon Cheer","Electro Drift","Electro Shot","Fickle Beam","Fillet Away","Flower Trick","Gigaton Hammer","Glaive Rush","Hard Press","Hydro Steam","Hyper Drill","Ice Spinner","Ivy Cudgel","Jet Punch","Kowtow Cleave",
  "Last Respects","Lumina Crash","Magical Torque","Make It Rain","Malignant Chain","Matcha Gotcha","Max Spirit","Mighty Cleave","Mortal Spin","Noxious Torque","Order Up","Population Bomb","Pounce","Psyblade","Psychic Noise","Rage Fist","Raging Bull",
  "Revival Blessing","Ruination","Salt Cure","Shed Tail","Silk Trap","Snowscape","Spicy Extract","Spin Out","Supercell Slam","Syrup Bomb","Tachyon Cutter","Temper Flare","Tera Blast","Tera Starstorm","Thunderclap","Tidy Up","Torch Song",
  "Trailblaze","Triple Dive","Twin Beam","Upper Hand","Wicked Torque"];

const Gen3Abilities :string[] = ["Stench","Drizzle","Speed Boost","Battle Armor","Sturdy","Damp","Limber","Sand Veil","Static","Volt Absorb","Water Absorb","Oblivious","Cloud Nine","Compound Eyes","Insomnia","Color Change","Immunity","Flash Fire","Shield Dust",
  "Own Tempo","Suction Cups","Intimidate","Shadow Tag","Rough Skin","Wonder Guard","Levitate","Effect Spore","Synchronize","Clear Body","Natural Cure","Lightning Rod","Serene Grace","Swift Swim","Chlorophyll","Illuminate","Trace","Huge Power","Poison Point",
  "Inner Focus","Magma Armor","Water Veil","Magnet Pull","Soundproof","Rain Dish","Sand Stream","Thick Fat","Early Bird","Flame Body","Run Away","Keen Eye","Hyper Cutter","Pickup","Truant","Hustle","Cute Charm","Plus","Minus","Forecast","Sticky Hold","Guts",
  "Marvel Scale","Liquid Ooze","Overgrow","Blaze","Torrent","Swarm","Rock Head","Drought","Arena Trap","Vital Spirit","White Smoke","Pure Power","Shell Armor","Air Lock"];

const Gen4Abilities :string[] = ["Tangled Feet","Motor Drive","Rivalry","Steadfast","Snow Cloak","Gluttony","Anger Point","Gluttony","Anger Point","Unburden","Heatproof","Simple","Dry Skin","Download","Iron Fist","Poison Heal","Adaptability","Skill Link",
  "Hydration","Solar Power","Quick Feet","Normalize","Sniper","Magic Guard","No Guard","Stall","Technician","Leaf Guard","Klutz","Mold Breaker","Super Luck","Aftermath","Forewarn","Unaware","Tinted Lens","Filter","Slow Start","Scrappy","Storm Drain","Ice Body",
  "Solid Rock","Snow Warning","Honey Gather","Frisk","Reckless","Multitype","Flower Gift","Bad Dreams"];

const Gen5Abilities :string[] = ["Pickpocket","Sheer Force","Contrary","Unnerve","Defiant","Defeatist","Cursed Body","Healer","Friend Guard","Weak Armor","Heavy Metal","Light Metal","Multiscale","Toxic Boost","Flare Boost","Harvest","Telepathy","Moody",
  "Overcoat","Poison Touch","Regenerator","Big Pecks","Sand Rush","Wonder Skin","Analytic","Illusion","Imposter","Infiltrator","Mummy","Moxie","Justified","Rattled","Magic Bounce","Sap Sipper","Prankster","Sand Force","Iron Barbs","Zen Mode","Victory Star",
  "Turboblaze","Teravolt"];

const Gen6Abilities :string[] = ["Aroma Veil","Flower Veil","Cheek Pouch","Protean","Fur Coat","Magician","Bulletproof","Competitive","Strong Jaw","Refrigerate","Sweet Veil","Stance Change","Gale Wings","Mega Launcher","Grass Pelt","Symbiosis","Tough Claws",
  "Pixilate","Gooey","Aerilate","Parental Bond","Dark Aura","Fairy Aura","Aura Break","Primordial Sea","Desolate Land","Delta Stream"];

const Gen7Abilities :string[] = ["Stamina","Wim Out","Emergency Exit","Water Compaction","Merciless","Shields Down","Stakeout","Water Bubble","Steelworker","Berserk","Slush Rush","Long Reach","Liquid Voice","Triage","Galvanize","Surge Surfer","Schooling",
  "Disguise","Battle Bond","Power Construct","Corrosion","Comatose","Queenly Majesty","Innards Out","Dancer","Battery","Fluffy","Dazzling","Soul-Heart","Tangling Hair","Receiver","Power of Alchemy","Beast Boost","RKS System","Electric Surge","Psychic Surge",
  "Misty Surge","Grassy Surge","Full Metal Body","Shadow Shield","Prism Armor","Neuroforce"];

const Gen8Abilities :string[] = ["Intrepid Body","Dauntless Sword","Libero","Ball Fetch","Cotton Down","Propeller Tail","Mirror Armor","Gulp Missile","Stalwart","Steam Engine","Punk Rock","Sand Spit","Ice Scales","Ripen","Ice Face","Mimicry","Screen Cleaner",
  "Steely Spirit","Perish Body","Wandering Spirit","Gorilla Tactics","Neutralizing Gas","Pastel Veil","Hunger Switch","Quick Draw","Unseen Fist","Curious Medicine","Transistor","Dragon's Maw","Chilling Neigh","Grim Neigh","As One","As One"];

const Gen9Abilities :string[] = ["Lingering Aroma","Seed Sower","Thermal Exchange","Anger Shell","Purifying Salt","Well-Baked Body","Wind Rider","Guard Dog","Rocky Payload","Wind Power","Zero to Hero","Commander","Electromorphosis","Protosynthesis","Quark Drive",
  "Good as Gold","Vessel of Ruin","Sword of Ruin","Tablets of Ruin","Beads of Ruin","Orichalcum Pulse","Hadron Engine","Opportunist","Cud Chew","Sharpness","Supreme Overload","Costar","Toxic Debris","Armor Tail","Earth Eater","Mycelium Might","Hospitality",
  "Mind's Eye","Embody Aspect","Embody Aspect","Embody Aspect","Embody Aspect","Toxic Chain","Supersweet Syrup","Tera Shift","Tera Shell","Teraform Zero","Poison Puppeteer"];

