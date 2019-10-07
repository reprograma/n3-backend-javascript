const TYPES = [
  'fire',
  'ice',
  'grass',
  'electric',
  'poison',
  'flying',
  'psychic',
  'rock',
  'ground',
  'normal',
  'ghost',
  'water',
  'bug',
  'fighting'
]
const POKEMON = {
  pokemon: [{
    id: 1,
    name: 'Bulbasaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
    type: [
      2,
      4
    ],
    height: 0.71,
    weight: 6.9,
    candy: 'Bulbasaur Candy',
    candy_count: 25,
    egg: '2 km',
    spawn_chance: 0.69,
    avg_spawns: 69,
    spawn_time: '20:00',
    multipliers: [1.58],
    weaknesses: [
      0,
      1,
      5,
      6
    ],
    next_evolution: [2]
  }, {
    id: 2,
    name: 'Ivysaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
    type: [
      2,
      4
    ],
    height: 0.99,
    weight: 13.0,
    candy: 'Bulbasaur Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.042,
    avg_spawns: 4.2,
    spawn_time: '07:00',
    multipliers: [
      1.2,
      1.6
    ],
    weaknesses: [
      0,
      1,
      5,
      6
    ],
    prev_evolution: [1],
    next_evolution: [3]
  }, {
    id: 3,
    name: 'Venusaur',
    img: 'http://www.serebii.net/pokemongo/pokemon/003.png',
    type: [
      2,
      4
    ],
    height: 2.01,
    weight: 100.0,
    candy: 'Bulbasaur Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.017,
    avg_spawns: 1.7,
    spawn_time: '11:30',
    multipliers: null,
    weaknesses: [
      0,
      1,
      5,
      6
    ],
    prev_evolution: [1]
  }, {
    id: 4,
    name: 'Charmander',
    img: 'http://www.serebii.net/pokemongo/pokemon/004.png',
    type: [
      0
    ],
    height: 0.61,
    weight: 8.5,
    candy: 'Charmander Candy',
    candy_count: 25,
    egg: '2 km',
    spawn_chance: 0.253,
    avg_spawns: 25.3,
    spawn_time: '08:45',
    multipliers: [1.65],
    weaknesses: [
      11,
      8,
      7
    ],
    next_evolution: [5]
  }, {
    id: 5,
    name: 'Charmeleon',
    img: 'http://www.serebii.net/pokemongo/pokemon/005.png',
    type: [
      0
    ],
    height: 1.09,
    weight: 19.0,
    candy: 'Charmander Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.012,
    avg_spawns: 1.2,
    spawn_time: '19:00',
    multipliers: [1.79],
    weaknesses: [
      11,
      8,
      7
    ],
    prev_evolution: [4],
    next_evolution: [6]
  }, {
    id: 6,
    name: 'Charizard',
    img: 'http://www.serebii.net/pokemongo/pokemon/006.png',
    type: [
      0,
      5
    ],
    height: 1.70,
    weight: 90.5,
    candy: 'Charmander Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0031,
    avg_spawns: 0.31,
    spawn_time: '13:34',
    multipliers: null,
    weaknesses: [
      11,
      3,
      7
    ],
    prev_evolution: [4]
  }, {
    id: 7,
    name: 'Squirtle',
    img: 'http://www.serebii.net/pokemongo/pokemon/007.png',
    type: [
      11
    ],
    height: 0.51,
    weight: 9.0,
    candy: 'Squirtle Candy',
    candy_count: 25,
    egg: '2 km',
    spawn_chance: 0.58,
    avg_spawns: 58,
    spawn_time: '04:25',
    multipliers: [2.1],
    weaknesses: [
      3,
      2
    ],
    next_evolution: [8]
  }, {
    id: 8,
    name: 'Wartortle',
    img: 'http://www.serebii.net/pokemongo/pokemon/008.png',
    type: [
      11
    ],
    height: 0.99,
    weight: 22.5,
    candy: 'Squirtle Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.034,
    avg_spawns: 3.4,
    spawn_time: '07:02',
    multipliers: [1.4],
    weaknesses: [
      3,
      2
    ],
    prev_evolution: [7],
    next_evolution: [9]
  }, {
    id: 9,
    name: 'Blastoise',
    img: 'http://www.serebii.net/pokemongo/pokemon/009.png',
    type: [
      11
    ],
    height: 1.60,
    weight: 85.5,
    candy: 'Squirtle Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0067,
    avg_spawns: 0.67,
    spawn_time: '00:06',
    multipliers: null,
    weaknesses: [
      3,
      2
    ],
    prev_evolution: [7]
  }, {
    id: 10,
    name: 'Caterpie',
    img: 'http://www.serebii.net/pokemongo/pokemon/010.png',
    type: [
      12
    ],
    height: 0.30,
    weight: 2.9,
    candy: 'Caterpie Candy',
    candy_count: 12,
    egg: '2 km',
    spawn_chance: 3.032,
    avg_spawns: 303.2,
    spawn_time: '16:35',
    multipliers: [1.05],
    weaknesses: [
      0,
      5,
      7
    ],
    next_evolution: [11]
  }, {
    id: 11,
    name: 'Metapod',
    img: 'http://www.serebii.net/pokemongo/pokemon/011.png',
    type: [
      12
    ],
    height: 0.71,
    weight: 9.9,
    candy: 'Caterpie Candy',
    candy_count: 50,
    egg: 'Not in Eggs',
    spawn_chance: 0.187,
    avg_spawns: 18.7,
    spawn_time: '02:11',
    multipliers: [
      3.55,
      3.79
    ],
    weaknesses: [
      0,
      5,
      7
    ],
    prev_evolution: [10],
    next_evolution: [12]
  }, {
    id: 12,
    name: 'Butterfree',
    img: 'http://www.serebii.net/pokemongo/pokemon/012.png',
    type: [
      12,
      5
    ],
    height: 1.09,
    weight: 32.0,
    candy: 'Caterpie Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.022,
    avg_spawns: 2.2,
    spawn_time: '05:23',
    multipliers: null,
    weaknesses: [
      0,
      3,
      1,
      5,
      7
    ],
    prev_evolution: [10]
  }, {
    id: 13,
    name: 'Weedle',
    img: 'http://www.serebii.net/pokemongo/pokemon/013.png',
    type: [
      12,
      4
    ],
    height: 0.30,
    weight: 3.2,
    candy: 'Weedle Candy',
    candy_count: 12,
    egg: '2 km',
    spawn_chance: 7.12,
    avg_spawns: 712,
    spawn_time: '02:21',
    multipliers: [
      1.01,
      1.09
    ],
    weaknesses: [
      0,
      5,
      6,
      7
    ],
    next_evolution: [14]
  }, {
    id: 14,
    name: 'Kakuna',
    img: 'http://www.serebii.net/pokemongo/pokemon/014.png',
    type: [
      12,
      4
    ],
    height: 0.61,
    weight: 10.0,
    candy: 'Weedle Candy',
    candy_count: 50,
    egg: 'Not in Eggs',
    spawn_chance: 0.44,
    avg_spawns: 44,
    spawn_time: '02:30',
    multipliers: [
      3.01,
      3.41
    ],
    weaknesses: [
      0,
      5,
      6,
      7
    ],
    prev_evolution: [13],
    next_evolution: [15]
  }, {
    id: 15,
    name: 'Beedrill',
    img: 'http://www.serebii.net/pokemongo/pokemon/015.png',
    type: [
      12,
      4
    ],
    height: 0.99,
    weight: 29.5,
    candy: 'Weedle Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.051,
    avg_spawns: 5.1,
    spawn_time: '04:50',
    multipliers: null,
    weaknesses: [
      0,
      5,
      6,
      7
    ],
    prev_evolution: [13]
  }, {
    id: 16,
    name: 'Pidgey',
    img: 'http://www.serebii.net/pokemongo/pokemon/016.png',
    type: [
      9,
      5
    ],
    height: 0.30,
    weight: 1.8,
    candy: 'Pidgey Candy',
    candy_count: 12,
    egg: '2 km',
    spawn_chance: 15.98,
    avg_spawns: 1.598,
    spawn_time: '01:34',
    multipliers: [
      1.71,
      1.92
    ],
    weaknesses: [
      3,
      7
    ],
    next_evolution: [17]
  }, {
    id: 17,
    name: 'Pidgeotto',
    img: 'http://www.serebii.net/pokemongo/pokemon/017.png',
    type: [
      9,
      5
    ],
    height: 1.09,
    weight: 30.0,
    candy: 'Pidgey Candy',
    candy_count: 50,
    egg: 'Not in Eggs',
    spawn_chance: 1.02,
    avg_spawns: 102,
    spawn_time: '01:30',
    multipliers: [1.79],
    weaknesses: [
      3,
      7
    ],
    prev_evolution: [16],
    next_evolution: [18]
  }, {
    id: 18,
    name: 'Pidgeot',
    img: 'http://www.serebii.net/pokemongo/pokemon/018.png',
    type: [
      9,
      5
    ],
    height: 1.50,
    weight: 39.5,
    candy: 'Pidgey Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.13,
    avg_spawns: 13,
    spawn_time: '01:50',
    multipliers: null,
    weaknesses: [
      3,
      7
    ],
    prev_evolution: [16]
  }, {
    id: 19,
    name: 'Rattata',
    img: 'http://www.serebii.net/pokemongo/pokemon/019.png',
    type: [
      9
    ],
    height: 0.30,
    weight: 3.5,
    candy: 'Rattata Candy',
    candy_count: 25,
    egg: '2 km',
    spawn_chance: 13.05,
    avg_spawns: 1.305,
    spawn_time: '01:55',
    multipliers: [
      2.55,
      2.73
    ],
    weaknesses: [
      13
    ],
    next_evolution: [20]
  }, {
    id: 20,
    name: 'Raticate',
    img: 'http://www.serebii.net/pokemongo/pokemon/020.png',
    type: [
      9
    ],
    height: 0.71,
    weight: 18.5,
    candy: 'Rattata Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.41,
    avg_spawns: 41,
    spawn_time: '01:56',
    multipliers: null,
    weaknesses: [
      13
    ],
    prev_evolution: [19]
  }, {
    id: 21,
    name: 'Spearow',
    img: 'http://www.serebii.net/pokemongo/pokemon/021.png',
    type: [
      9,
      5
    ],
    height: 0.30,
    weight: 2.0,
    candy: 'Spearow Candy',
    candy_count: 50,
    egg: '2 km',
    spawn_chance: 4.73,
    avg_spawns: 473,
    spawn_time: '12:25',
    multipliers: [
      2.66,
      2.68
    ],
    weaknesses: [
      3,
      7
    ],
    next_evolution: [22]
  }, {
    id: 22,
    name: 'Fearow',
    img: 'http://www.serebii.net/pokemongo/pokemon/022.png',
    type: [
      9,
      5
    ],
    height: 1.19,
    weight: 38.0,
    candy: 'Spearow Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.15,
    avg_spawns: 15,
    spawn_time: '01:11',
    multipliers: null,
    weaknesses: [
      3,
      7
    ],
    prev_evolution: [21]
  }, {
    id: 23,
    name: 'Ekans',
    img: 'http://www.serebii.net/pokemongo/pokemon/023.png',
    type: [
      4
    ],
    height: 2.01,
    weight: 6.9,
    candy: 'Ekans Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 2.27,
    avg_spawns: 227,
    spawn_time: '12:20',
    multipliers: [
      2.21,
      2.27
    ],
    weaknesses: [
      8,
      6
    ],
    next_evolution: [24]
  }, {
    id: 24,
    name: 'Arbok',
    img: 'http://www.serebii.net/pokemongo/pokemon/024.png',
    type: [
      4
    ],
    height: 3.51,
    weight: 65.0,
    candy: 'Ekans Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.072,
    avg_spawns: 7.2,
    spawn_time: '01:50',
    multipliers: null,
    weaknesses: [
      8,
      6
    ],
    prev_evolution: [23]
  }, {
    id: 25,
    name: 'Pikachu',
    img: 'http://www.serebii.net/pokemongo/pokemon/025.png',
    type: [
      3
    ],
    height: 0.41,
    weight: 6.0,
    candy: 'Pikachu Candy',
    candy_count: 50,
    egg: '2 km',
    spawn_chance: 0.21,
    avg_spawns: 21,
    spawn_time: '04:00',
    multipliers: [2.34],
    weaknesses: [
      8
    ],
    next_evolution: [26]
  }, {
    id: 26,
    name: 'Raichu',
    img: 'http://www.serebii.net/pokemongo/pokemon/026.png',
    type: [
      3
    ],
    height: 0.79,
    weight: 30.0,
    candy: 'Pikachu Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0076,
    avg_spawns: 0.76,
    spawn_time: '23:58',
    multipliers: null,
    weaknesses: [
      8
    ],
    prev_evolution: [25]
  }, {
    id: 27,
    name: 'Sandshrew',
    img: 'http://www.serebii.net/pokemongo/pokemon/027.png',
    type: [
      8
    ],
    height: 0.61,
    weight: 12.0,
    candy: 'Sandshrew Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 1.11,
    avg_spawns: 111,
    spawn_time: '01:58',
    multipliers: [2.45],
    weaknesses: [
      11,
      2,
      1
    ],
    next_evolution: [28]
  }, {
    id: 28,
    name: 'Sandslash',
    img: 'http://www.serebii.net/pokemongo/pokemon/028.png',
    type: [
      8
    ],
    height: 0.99,
    weight: 29.5,
    candy: 'Sandshrew Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.037,
    avg_spawns: 3.7,
    spawn_time: '12:34',
    multipliers: null,
    weaknesses: [
      11,
      2,
      1
    ],
    prev_evolution: [27]
  }, {
    id: 29,
    name: 'Nidoran ♀ (Female)',
    img: 'http://www.serebii.net/pokemongo/pokemon/029.png',
    type: [
      4
    ],
    height: 0.41,
    weight: 7.0,
    candy: 'Nidoran ♀ (Female) Candy',
    candy_count: 25,
    egg: '5 km',
    spawn_chance: 1.38,
    avg_spawns: 138,
    spawn_time: '01:51',
    multipliers: [
      1.63,
      2.48
    ],
    weaknesses: [
      8,
      6
    ],
    next_evolution: [30]
  }, {
    id: 30,
    name: 'Nidorina',
    img: 'http://www.serebii.net/pokemongo/pokemon/030.png',
    type: [
      4
    ],
    height: 0.79,
    weight: 20.0,
    candy: 'Nidoran ♀ (Female) Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.088,
    avg_spawns: 8.8,
    spawn_time: '07:22',
    multipliers: [
      1.83,
      2.48
    ],
    weaknesses: [
      8,
      6
    ],
    prev_evolution: [29],
    next_evolution: [31]
  }, {
    id: 31,
    name: 'Nidoqueen',
    img: 'http://www.serebii.net/pokemongo/pokemon/031.png',
    type: [
      4,
      8
    ],
    height: 1.30,
    weight: 60.0,
    candy: 'Nidoran ♀ (Female) Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.012,
    avg_spawns: 1.2,
    spawn_time: '12:35',
    multipliers: null,
    weaknesses: [
      11,
      1,
      8,
      6
    ],
    prev_evolution: [29]
  }, {
    id: 32,
    name: 'Nidoran ♂ (Male)',
    img: 'http://www.serebii.net/pokemongo/pokemon/032.png',
    type: [
      4
    ],
    height: 0.51,
    weight: 9.0,
    candy: 'Nidoran ♂ (Male) Candy',
    candy_count: 25,
    egg: '5 km',
    spawn_chance: 1.31,
    avg_spawns: 131,
    spawn_time: '01:12',
    multipliers: [
      1.64,
      1.7
    ],
    weaknesses: [
      8,
      6
    ],
    next_evolution: [33]
  }, {
    id: 33,
    name: 'Nidorino',
    img: 'http://www.serebii.net/pokemongo/pokemon/033.png',
    type: [
      4
    ],
    height: 0.89,
    weight: 19.5,
    candy: 'Nidoran ♂ (Male) Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.083,
    avg_spawns: 8.3,
    spawn_time: '09:02',
    multipliers: [1.83],
    weaknesses: [
      8,
      6
    ],
    prev_evolution: [32],
    next_evolution: [34]
  }, {
    id: 34,
    name: 'Nidoking',
    img: 'http://www.serebii.net/pokemongo/pokemon/034.png',
    type: [
      4,
      8
    ],
    height: 1.40,
    weight: 62.0,
    candy: 'Nidoran ♂ (Male) Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.017,
    avg_spawns: 1.7,
    spawn_time: '12:16',
    multipliers: null,
    weaknesses: [
      11,
      1,
      8,
      6
    ],
    prev_evolution: [32]
  }, {
    id: 35,
    name: 'Clefairy',
    img: 'http://www.serebii.net/pokemongo/pokemon/035.png',
    type: [
      9
    ],
    height: 0.61,
    weight: 7.5,
    candy: 'Clefairy Candy',
    candy_count: 50,
    egg: '2 km',
    spawn_chance: 0.92,
    avg_spawns: 92,
    spawn_time: '03:30',
    multipliers: [
      2.03,
      2.14
    ],
    weaknesses: [
      13
    ],
    next_evolution: [36]
  }, {
    id: 36,
    name: 'Clefable',
    img: 'http://www.serebii.net/pokemongo/pokemon/036.png',
    type: [
      9
    ],
    height: 1.30,
    weight: 40.0,
    candy: 'Clefairy Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.012,
    avg_spawns: 1.2,
    spawn_time: '03:29',
    multipliers: null,
    weaknesses: [
      13
    ],
    prev_evolution: [35]
  }, {
    id: 37,
    name: 'Vulpix',
    img: 'http://www.serebii.net/pokemongo/pokemon/037.png',
    type: [
      0
    ],
    height: 0.61,
    weight: 9.9,
    candy: 'Vulpix Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.22,
    avg_spawns: 22,
    spawn_time: '13:43',
    multipliers: [
      2.74,
      2.81
    ],
    weaknesses: [
      11,
      8,
      7
    ],
    next_evolution: [38]
  }, {
    id: 38,
    name: 'Ninetales',
    img: 'http://www.serebii.net/pokemongo/pokemon/038.png',
    type: [
      0
    ],
    height: 1.09,
    weight: 19.9,
    candy: 'Vulpix Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0077,
    avg_spawns: 0.77,
    spawn_time: '01:32',
    multipliers: null,
    weaknesses: [
      11,
      8,
      7
    ],
    prev_evolution: [37]
  }, {
    id: 39,
    name: 'Jigglypuff',
    img: 'http://www.serebii.net/pokemongo/pokemon/039.png',
    type: [
      9
    ],
    height: 0.51,
    weight: 5.5,
    candy: 'Jigglypuff Candy',
    candy_count: 50,
    egg: '2 km',
    spawn_chance: 0.39,
    avg_spawns: 39,
    spawn_time: '08:46',
    multipliers: [1.85],
    weaknesses: [
      13
    ],
    next_evolution: [40]
  }, {
    id: 40,
    name: 'Wigglytuff',
    img: 'http://www.serebii.net/pokemongo/pokemon/040.png',
    type: [
      9
    ],
    height: 0.99,
    weight: 12.0,
    candy: 'Jigglypuff Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.018,
    avg_spawns: 1.8,
    spawn_time: '12:28',
    multipliers: null,
    weaknesses: [
      13
    ],
    prev_evolution: [39]
  }, {
    id: 41,
    name: 'Zubat',
    img: 'http://www.serebii.net/pokemongo/pokemon/041.png',
    type: [
      4,
      5
    ],
    height: 0.79,
    weight: 7.5,
    candy: 'Zubat Candy',
    candy_count: 50,
    egg: '2 km',
    spawn_chance: 6.52,
    avg_spawns: 652,
    spawn_time: '12:28',
    multipliers: [
      2.6,
      3.67
    ],
    weaknesses: [
      3,
      1,
      6,
      7
    ],
    next_evolution: [42]
  }, {
    id: 42,
    name: 'Golbat',
    img: 'http://www.serebii.net/pokemongo/pokemon/042.png',
    type: [
      4,
      5
    ],
    height: 1.60,
    weight: 55.0,
    candy: 'Zubat Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.42,
    avg_spawns: 42,
    spawn_time: '02:15',
    multipliers: null,
    weaknesses: [
      3,
      1,
      6,
      7
    ],
    prev_evolution: [41]
  }, {
    id: 43,
    name: 'Oddish',
    img: 'http://www.serebii.net/pokemongo/pokemon/043.png',
    type: [
      2,
      4
    ],
    height: 0.51,
    weight: 5.4,
    candy: 'Oddish Candy',
    candy_count: 25,
    egg: '5 km',
    spawn_chance: 1.02,
    avg_spawns: 102,
    spawn_time: '03:58',
    multipliers: [1.5],
    weaknesses: [
      0,
      1,
      5,
      6
    ],
    next_evolution: [44]
  }, {
    id: 44,
    name: 'Gloom',
    img: 'http://www.serebii.net/pokemongo/pokemon/044.png',
    type: [
      2,
      4
    ],
    height: 0.79,
    weight: 8.6,
    candy: 'Oddish Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.064,
    avg_spawns: 6.4,
    spawn_time: '11:33',
    multipliers: [1.49],
    weaknesses: [
      0,
      1,
      5,
      6
    ],
    prev_evolution: [43],
    next_evolution: [45]
  }, {
    id: 45,
    name: 'Vileplume',
    img: 'http://www.serebii.net/pokemongo/pokemon/045.png',
    type: [
      2,
      4
    ],
    height: 1.19,
    weight: 18.6,
    candy: 'Oddish Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0097,
    avg_spawns: 0.97,
    spawn_time: '23:58',
    multipliers: null,
    weaknesses: [
      0,
      1,
      5,
      6
    ],
    prev_evolution: [43]
  }, {
    id: 46,
    name: 'Paras',
    img: 'http://www.serebii.net/pokemongo/pokemon/046.png',
    type: [
      12,
      2
    ],
    height: 0.30,
    weight: 5.4,
    candy: 'Paras Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 2.36,
    avg_spawns: 236,
    spawn_time: '01:42',
    multipliers: [2.02],
    weaknesses: [
      0,
      1,
      4,
      5,
      12,
      7
    ],
    next_evolution: [47]
  }, {
    id: 47,
    name: 'Parasect',
    img: 'http://www.serebii.net/pokemongo/pokemon/047.png',
    type: [
      12,
      2
    ],
    height: 0.99,
    weight: 29.5,
    candy: 'Paras Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.074,
    avg_spawns: 7.4,
    spawn_time: '01:22',
    multipliers: null,
    weaknesses: [
      0,
      1,
      4,
      5,
      12,
      7
    ],
    prev_evolution: [46]
  }, {
    id: 48,
    name: 'Venonat',
    img: 'http://www.serebii.net/pokemongo/pokemon/048.png',
    type: [
      12,
      4
    ],
    height: 0.99,
    weight: 30.0,
    candy: 'Venonat Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 2.28,
    avg_spawns: 228,
    spawn_time: '02:31',
    multipliers: [
      1.86,
      1.9
    ],
    weaknesses: [
      0,
      5,
      6,
      7
    ],
    next_evolution: [49]
  }, {
    id: 49,
    name: 'Venomoth',
    img: 'http://www.serebii.net/pokemongo/pokemon/049.png',
    type: [
      12,
      4
    ],
    height: 1.50,
    weight: 12.5,
    candy: 'Venonat Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.072,
    avg_spawns: 7.2,
    spawn_time: '23:40',
    multipliers: null,
    weaknesses: [
      0,
      5,
      6,
      7
    ],
    prev_evolution: [48]
  }, {
    id: 50,
    name: 'Diglett',
    img: 'http://www.serebii.net/pokemongo/pokemon/050.png',
    type: [
      8
    ],
    height: 0.20,
    weight: 0.8,
    candy: 'Diglett Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.40,
    avg_spawns: 40,
    spawn_time: '02:22',
    multipliers: [2.69],
    weaknesses: [
      11,
      2,
      1
    ],
    next_evolution: [51]
  }, {
    id: 51,
    name: 'Dugtrio',
    img: 'http://www.serebii.net/pokemongo/pokemon/051.png',
    type: [
      8
    ],
    height: 0.71,
    weight: 33.3,
    candy: 'Dugtrio',
    egg: 'Not in Eggs',
    spawn_chance: 0.014,
    avg_spawns: 1.4,
    spawn_time: '12:37',
    multipliers: null,
    weaknesses: [
      11,
      2,
      1
    ],
    prev_evolution: [50]
  }, {
    id: 52,
    name: 'Meowth',
    img: 'http://www.serebii.net/pokemongo/pokemon/052.png',
    type: [
      9
    ],
    height: 0.41,
    weight: 4.2,
    candy: 'Meowth Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.86,
    avg_spawns: 86,
    spawn_time: '02:54',
    multipliers: [1.98],
    weaknesses: [
      13
    ],
    next_evolution: [53]
  }, {
    id: 53,
    name: 'Persian',
    img: 'http://www.serebii.net/pokemongo/pokemon/053.png',
    type: [
      9
    ],
    height: 0.99,
    weight: 32.0,
    candy: 'Meowth Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.022,
    avg_spawns: 2.2,
    spawn_time: '02:44',
    multipliers: null,
    weaknesses: [
      13
    ],
    prev_evolution: [52]
  }, {
    id: 54,
    name: 'Psyduck',
    img: 'http://www.serebii.net/pokemongo/pokemon/054.png',
    type: [
      11
    ],
    height: 0.79,
    weight: 19.6,
    candy: 'Psyduck Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 2.54,
    avg_spawns: 254,
    spawn_time: '03:41',
    multipliers: [2.27],
    weaknesses: [
      3,
      2
    ],
    next_evolution: [55]
  }, {
    id: 55,
    name: 'Golduck',
    img: 'http://www.serebii.net/pokemongo/pokemon/055.png',
    type: [
      11
    ],
    height: 1.70,
    weight: 76.6,
    candy: 'Psyduck Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.087,
    avg_spawns: 8.7,
    spawn_time: '23:06',
    multipliers: null,
    weaknesses: [
      3,
      2
    ],
    prev_evolution: [54]
  }, {
    id: 56,
    name: 'Mankey',
    img: 'http://www.serebii.net/pokemongo/pokemon/056.png',
    type: [
      13
    ],
    height: 0.51,
    weight: 28.0,
    candy: 'Mankey Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.92,
    avg_spawns: 92,
    spawn_time: '12:52',
    multipliers: [
      2.17,
      2.28
    ],
    weaknesses: [
      5,
      6,
      'Fairy'
    ],
    next_evolution: [57]
  }, {
    id: 57,
    name: 'Primeape',
    img: 'http://www.serebii.net/pokemongo/pokemon/057.png',
    type: [
      13
    ],
    height: 0.99,
    weight: 32.0,
    candy: 'Mankey Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.031,
    avg_spawns: 3.1,
    spawn_time: '12:33',
    multipliers: null,
    weaknesses: [
      5,
      6,
      'Fairy'
    ],
    prev_evolution: [56]
  }, {
    id: 58,
    name: 'Growlithe',
    img: 'http://www.serebii.net/pokemongo/pokemon/058.png',
    type: [
      0
    ],
    height: 0.71,
    weight: 19.0,
    candy: 'Growlithe Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.92,
    avg_spawns: 92,
    spawn_time: '03:57',
    multipliers: [
      2.31,
      2.36
    ],
    weaknesses: [
      11,
      8,
      7
    ],
    next_evolution: [59]
  }, {
    id: 59,
    name: 'Arcanine',
    img: 'http://www.serebii.net/pokemongo/pokemon/059.png',
    type: [
      0
    ],
    height: 1.91,
    weight: 155.0,
    candy: 'Growlithe Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.017,
    avg_spawns: 1.7,
    spawn_time: '03:11',
    multipliers: null,
    weaknesses: [
      11,
      8,
      7
    ],
    prev_evolution: [58]
  }, {
    id: 60,
    name: 'Poliwag',
    img: 'http://www.serebii.net/pokemongo/pokemon/060.png',
    type: [
      11
    ],
    height: 0.61,
    weight: 12.4,
    candy: 'Poliwag Candy',
    candy_count: 25,
    egg: '5 km',
    spawn_chance: 2.19,
    avg_spawns: 219,
    spawn_time: '03:40',
    multipliers: [
      1.72,
      1.73
    ],
    weaknesses: [
      3,
      2
    ],
    next_evolution: [61]
  }, {
    id: 61,
    name: 'Poliwhirl',
    img: 'http://www.serebii.net/pokemongo/pokemon/061.png',
    type: [
      11
    ],
    height: 0.99,
    weight: 20.0,
    candy: 'Poliwag Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.13,
    avg_spawns: 13,
    spawn_time: '09:14',
    multipliers: [1.95],
    weaknesses: [
      3,
      2
    ],
    prev_evolution: [60],
    next_evolution: [62]
  }, {
    id: 62,
    name: 'Poliwrath',
    img: 'http://www.serebii.net/pokemongo/pokemon/062.png',
    type: [
      11,
      13
    ],
    height: 1.30,
    weight: 54.0,
    candy: 'Poliwag Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.011,
    avg_spawns: 1.1,
    spawn_time: '01:32',
    multipliers: null,
    weaknesses: [
      3,
      2,
      5,
      6,
      'Fairy'
    ],
    prev_evolution: [60]
  }, {
    id: 63,
    name: 'Abra',
    img: 'http://www.serebii.net/pokemongo/pokemon/063.png',
    type: [
      6
    ],
    height: 0.89,
    weight: 19.5,
    candy: 'Abra Candy',
    candy_count: 25,
    egg: '5 km',
    spawn_chance: 0.42,
    avg_spawns: 42,
    spawn_time: '04:30',
    multipliers: [
      1.36,
      1.95
    ],
    weaknesses: [
      12,
      10,
      'Dark'
    ],
    next_evolution: [64]
  }, {
    id: 64,
    name: 'Kadabra',
    img: 'http://www.serebii.net/pokemongo/pokemon/064.png',
    type: [
      6
    ],
    height: 1.30,
    weight: 56.5,
    candy: 'Abra Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.027,
    avg_spawns: 2.7,
    spawn_time: '11:25',
    multipliers: [1.4],
    weaknesses: [
      12,
      10,
      'Dark'
    ],
    prev_evolution: [63],
    next_evolution: [65]
  }, {
    id: 65,
    name: 'Alakazam',
    img: 'http://www.serebii.net/pokemongo/pokemon/065.png',
    type: [
      6
    ],
    height: 1.50,
    weight: 48.0,
    candy: 'Abra Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0073,
    avg_spawns: 0.73,
    spawn_time: '12:33',
    multipliers: null,
    weaknesses: [
      12,
      10,
      'Dark'
    ],
    prev_evolution: [63]
  }, {
    id: 66,
    name: 'Machop',
    img: 'http://www.serebii.net/pokemongo/pokemon/066.png',
    type: [
      13
    ],
    height: 0.79,
    weight: 19.5,
    candy: 'Machop Candy',
    candy_count: 25,
    egg: '5 km',
    spawn_chance: 0.49,
    avg_spawns: 49,
    spawn_time: '01:55',
    multipliers: [
      1.64,
      1.65
    ],
    weaknesses: [
      5,
      6,
      'Fairy'
    ],
    next_evolution: [67]
  }, {
    id: 67,
    name: 'Machoke',
    img: 'http://www.serebii.net/pokemongo/pokemon/067.png',
    type: [
      13
    ],
    height: 1.50,
    weight: 70.5,
    candy: 'Machop Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.034,
    avg_spawns: 3.4,
    spawn_time: '10:32',
    multipliers: [1.7],
    weaknesses: [
      5,
      6,
      'Fairy'
    ],
    prev_evolution: [66],
    next_evolution: [68]
  }, {
    id: 68,
    name: 'Machamp',
    img: 'http://www.serebii.net/pokemongo/pokemon/068.png',
    type: [
      13
    ],
    height: 1.60,
    weight: 130.0,
    candy: 'Machop Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0068,
    avg_spawns: 0.68,
    spawn_time: '02:55',
    multipliers: null,
    weaknesses: [
      5,
      6,
      'Fairy'
    ],
    prev_evolution: [66]
  }, {
    id: 69,
    name: 'Bellsprout',
    img: 'http://www.serebii.net/pokemongo/pokemon/069.png',
    type: [
      2,
      4
    ],
    height: 0.71,
    weight: 4.0,
    candy: 'Bellsprout Candy',
    candy_count: 25,
    egg: '5 km',
    spawn_chance: 1.15,
    avg_spawns: 115,
    spawn_time: '04:10',
    multipliers: [1.57],
    weaknesses: [
      0,
      1,
      5,
      6
    ],
    next_evolution: [70]
  }, {
    id: 70,
    name: 'Weepinbell',
    img: 'http://www.serebii.net/pokemongo/pokemon/070.png',
    type: [
      2,
      4
    ],
    height: 0.99,
    weight: 6.4,
    candy: 'Bellsprout Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.072,
    avg_spawns: 7.2,
    spawn_time: '09:45',
    multipliers: [1.59],
    weaknesses: [
      0,
      1,
      5,
      6
    ],
    prev_evolution: [69],
    next_evolution: [71]
  }, {
    id: 71,
    name: 'Victreebel',
    img: 'http://www.serebii.net/pokemongo/pokemon/071.png',
    type: [
      2,
      4
    ],
    height: 1.70,
    weight: 15.5,
    candy: 'Bellsprout Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0059,
    avg_spawns: 0.59,
    spawn_time: '12:19',
    multipliers: null,
    weaknesses: [
      0,
      1,
      5,
      6
    ],
    prev_evolution: [69]
  }, {
    id: 72,
    name: 'Tentacool',
    img: 'http://www.serebii.net/pokemongo/pokemon/072.png',
    type: [
      11,
      4
    ],
    height: 0.89,
    weight: 45.5,
    candy: 'Tentacool Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.81,
    avg_spawns: 81,
    spawn_time: '03:20',
    multipliers: [2.52],
    weaknesses: [
      3,
      8,
      6
    ],
    next_evolution: [73]
  }, {
    id: 73,
    name: 'Tentacruel',
    img: 'http://www.serebii.net/pokemongo/pokemon/073.png',
    type: [
      11,
      4
    ],
    height: 1.60,
    weight: 55.0,
    candy: 'Tentacool Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.082,
    avg_spawns: 8.2,
    spawn_time: '23:36',
    multipliers: null,
    weaknesses: [
      3,
      8,
      6
    ],
    prev_evolution: [72]
  }, {
    id: 74,
    name: 'Geodude',
    img: 'http://www.serebii.net/pokemongo/pokemon/074.png',
    type: [
      7,
      8
    ],
    height: 0.41,
    weight: 20.0,
    candy: 'Geodude Candy',
    candy_count: 25,
    egg: '2 km',
    spawn_chance: 1.19,
    avg_spawns: 119,
    spawn_time: '12:40',
    multipliers: [
      1.75,
      1.76
    ],
    weaknesses: [
      11,
      2,
      1,
      13,
      8,
      'Steel'
    ],
    next_evolution: [75]
  }, {
    id: 75,
    name: 'Graveler',
    img: 'http://www.serebii.net/pokemongo/pokemon/075.png',
    type: [
      7,
      8
    ],
    height: 0.99,
    weight: 105.0,
    candy: 'Geodude Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.071,
    avg_spawns: 7.1,
    spawn_time: '04:53',
    multipliers: [
      1.64,
      1.72
    ],
    weaknesses: [
      11,
      2,
      1,
      13,
      8,
      'Steel'
    ],
    prev_evolution: [74],
    next_evolution: [76]
  }, {
    id: 76,
    name: 'Golem',
    img: 'http://www.serebii.net/pokemongo/pokemon/076.png',
    type: [
      7,
      8
    ],
    height: 1.40,
    weight: 300.0,
    candy: 'Geodude Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0047,
    avg_spawns: 0.47,
    spawn_time: '12:16',
    multipliers: null,
    weaknesses: [
      11,
      2,
      1,
      13,
      8,
      'Steel'
    ],
    prev_evolution: [74]
  }, {
    id: 77,
    name: 'Ponyta',
    img: 'http://www.serebii.net/pokemongo/pokemon/077.png',
    type: [
      0
    ],
    height: 0.99,
    weight: 30.0,
    candy: 'Ponyta Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.51,
    avg_spawns: 51,
    spawn_time: '02:50',
    multipliers: [
      1.48,
      1.5
    ],
    weaknesses: [
      11,
      8,
      7
    ],
    next_evolution: [78]
  }, {
    id: 78,
    name: 'Rapidash',
    img: 'http://www.serebii.net/pokemongo/pokemon/078.png',
    type: [
      0
    ],
    height: 1.70,
    weight: 95.0,
    candy: 'Ponyta Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.011,
    avg_spawns: 1.1,
    spawn_time: '04:00',
    multipliers: null,
    weaknesses: [
      11,
      8,
      7
    ],
    prev_evolution: [77]
  }, {
    id: 79,
    name: 'Slowpoke',
    img: 'http://www.serebii.net/pokemongo/pokemon/079.png',
    type: [
      11,
      6
    ],
    height: 1.19,
    weight: 36.0,
    candy: 'Slowpoke Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 1.05,
    avg_spawns: 105,
    spawn_time: '07:12',
    multipliers: [2.21],
    weaknesses: [
      3,
      2,
      12,
      10,
      'Dark'
    ],
    next_evolution: [80]
  }, {
    id: 80,
    name: 'Slowbro',
    img: 'http://www.serebii.net/pokemongo/pokemon/080.png',
    type: [
      11,
      6
    ],
    height: 1.60,
    weight: 78.5,
    candy: 'Slowpoke Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.036,
    avg_spawns: 3.6,
    spawn_time: '02:56',
    multipliers: null,
    weaknesses: [
      3,
      2,
      12,
      10,
      'Dark'
    ],
    prev_evolution: [79]
  }, {
    id: 81,
    name: 'Magnemite',
    img: 'http://www.serebii.net/pokemongo/pokemon/081.png',
    type: [
      3
    ],
    height: 0.30,
    weight: 6.0,
    candy: 'Magnemite Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.71,
    avg_spawns: 71,
    spawn_time: '04:04',
    multipliers: [
      2.16,
      2.17
    ],
    weaknesses: [
      0,
      11,
      8
    ],
    next_evolution: [82]
  }, {
    id: 82,
    name: 'Magneton',
    img: 'http://www.serebii.net/pokemongo/pokemon/082.png',
    type: [
      3
    ],
    height: 0.99,
    weight: 60.0,
    candy: 'Magnemite Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.023,
    avg_spawns: 2.3,
    spawn_time: '15:25',
    multipliers: null,
    weaknesses: [
      0,
      11,
      8
    ],
    prev_evolution: [81]
  }, {
    id: 83,
    name: "Farfetch'd",
    img: 'http://www.serebii.net/pokemongo/pokemon/083.png',
    type: [
      9,
      5
    ],
    height: 0.79,
    weight: 15.0,
    candy: 'None',
    egg: '5 km',
    spawn_chance: 0.0212,
    avg_spawns: 2.12,
    spawn_time: '01:09',
    multipliers: null,
    weaknesses: [
      3,
      7
    ]
  }, {
    id: 84,
    name: 'Doduo',
    img: 'http://www.serebii.net/pokemongo/pokemon/084.png',
    type: [
      9,
      5
    ],
    height: 1.40,
    weight: 39.2,
    candy: 'Doduo Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.52,
    avg_spawns: 52,
    spawn_time: '05:10',
    multipliers: [
      2.19,
      2.24
    ],
    weaknesses: [
      3,
      7
    ],
    next_evolution: [85]
  }, {
    id: 85,
    name: 'Dodrio',
    img: 'http://www.serebii.net/pokemongo/pokemon/085.png',
    type: [
      9,
      5
    ],
    height: 1.80,
    weight: 85.2,
    candy: 'Doduo Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.22,
    avg_spawns: 22,
    spawn_time: '02:12',
    multipliers: null,
    weaknesses: [
      3,
      7
    ],
    prev_evolution: [84]
  }, {
    id: 86,
    name: 'Seel',
    img: 'http://www.serebii.net/pokemongo/pokemon/086.png',
    type: [
      11
    ],
    height: 1.09,
    weight: 90.0,
    candy: 'Seel Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.28,
    avg_spawns: 28,
    spawn_time: '06:46',
    multipliers: [
      1.04,
      1.96
    ],
    weaknesses: [
      3,
      2
    ],
    next_evolution: [87]
  }, {
    id: 87,
    name: 'Dewgong',
    img: 'http://www.serebii.net/pokemongo/pokemon/087.png',
    type: [
      11,
      1
    ],
    height: 1.70,
    weight: 120.0,
    candy: 'Seel Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.013,
    avg_spawns: 1.3,
    spawn_time: '06:04',
    multipliers: null,
    weaknesses: [
      3,
      2,
      13,
      7
    ],
    prev_evolution: [86]
  }, {
    id: 88,
    name: 'Grimer',
    img: 'http://www.serebii.net/pokemongo/pokemon/088.png',
    type: [
      4
    ],
    height: 0.89,
    weight: 30.0,
    candy: 'Grimer Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.052,
    avg_spawns: 5.2,
    spawn_time: '15:11',
    multipliers: [2.44],
    weaknesses: [
      8,
      6
    ],
    next_evolution: [89]
  }, {
    id: 89,
    name: 'Muk',
    img: 'http://www.serebii.net/pokemongo/pokemon/089.png',
    type: [
      4
    ],
    height: 1.19,
    weight: 30.0,
    candy: 'Grimer Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0031,
    avg_spawns: 0.31,
    spawn_time: '01:28',
    multipliers: null,
    weaknesses: [
      8,
      6
    ],
    prev_evolution: [88]
  }, {
    id: 90,
    name: 'Shellder',
    img: 'http://www.serebii.net/pokemongo/pokemon/090.png',
    type: [
      11
    ],
    height: 0.30,
    weight: 4.0,
    candy: 'Shellder Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.52,
    avg_spawns: 52,
    spawn_time: '07:39',
    multipliers: [2.65],
    weaknesses: [
      3,
      2
    ],
    next_evolution: [91]
  }, {
    id: 91,
    name: 'Cloyster',
    img: 'http://www.serebii.net/pokemongo/pokemon/091.png',
    type: [
      11,
      1
    ],
    height: 1.50,
    weight: 132.5,
    candy: 'Shellder Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.015,
    avg_spawns: 1.5,
    spawn_time: '02:33',
    multipliers: null,
    weaknesses: [
      3,
      2,
      13,
      7
    ],
    prev_evolution: [90]
  }, {
    id: 92,
    name: 'Gastly',
    img: 'http://www.serebii.net/pokemongo/pokemon/092.png',
    type: [
      10,
      4
    ],
    height: 1.30,
    weight: 0.1,
    candy: 'Gastly Candy',
    candy_count: 25,
    egg: '5 km',
    spawn_chance: 0.79,
    avg_spawns: 79,
    spawn_time: '04:21',
    multipliers: [1.78],
    weaknesses: [
      8,
      6,
      10,
      'Dark'
    ],
    next_evolution: [93]
  }, {
    id: 93,
    name: 'Haunter',
    img: 'http://www.serebii.net/pokemongo/pokemon/093.png',
    type: [
      10,
      4
    ],
    height: 1.60,
    weight: 0.1,
    candy: 'Gastly Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.052,
    avg_spawns: 5.2,
    spawn_time: '00:10',
    multipliers: [
      1.56,
      1.8
    ],
    weaknesses: [
      8,
      6,
      10,
      'Dark'
    ],
    prev_evolution: [92],
    next_evolution: [94]
  }, {
    id: 94,
    name: 'Gengar',
    img: 'http://www.serebii.net/pokemongo/pokemon/094.png',
    type: [
      10,
      4
    ],
    height: 1.50,
    weight: 40.5,
    candy: 'Gastly Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0067,
    avg_spawns: 0.67,
    spawn_time: '03:55',
    multipliers: null,
    weaknesses: [
      8,
      6,
      10,
      'Dark'
    ],
    prev_evolution: [92]
  }, {
    id: 95,
    name: 'Onix',
    img: 'http://www.serebii.net/pokemongo/pokemon/095.png',
    type: [
      7,
      8
    ],
    height: 8.79,
    weight: 210.0,
    candy: 'None',
    egg: '10 km',
    spawn_chance: 0.10,
    avg_spawns: 10,
    spawn_time: '01:18',
    multipliers: null,
    weaknesses: [
      11,
      2,
      1,
      13,
      8,
      'Steel'
    ]
  }, {
    id: 96,
    name: 'Drowzee',
    img: 'http://www.serebii.net/pokemongo/pokemon/096.png',
    type: [
      6
    ],
    height: 0.99,
    weight: 32.4,
    candy: 'Drowzee Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 3.21,
    avg_spawns: 321,
    spawn_time: '01:51',
    multipliers: [
      2.08,
      2.09
    ],
    weaknesses: [
      12,
      10,
      'Dark'
    ],
    next_evolution: [97]
  }, {
    id: 97,
    name: 'Hypno',
    img: 'http://www.serebii.net/pokemongo/pokemon/097.png',
    type: [
      6
    ],
    height: 1.60,
    weight: 75.6,
    candy: 'Drowzee Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.10,
    avg_spawns: 10,
    spawn_time: '02:17',
    multipliers: null,
    weaknesses: [
      12,
      10,
      'Dark'
    ],
    prev_evolution: [96]
  }, {
    id: 98,
    name: 'Krabby',
    img: 'http://www.serebii.net/pokemongo/pokemon/098.png',
    type: [
      11
    ],
    height: 0.41,
    weight: 6.5,
    candy: 'Krabby Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 2.12,
    avg_spawns: 212,
    spawn_time: '03:33',
    multipliers: [
      2.36,
      2.4
    ],
    weaknesses: [
      3,
      2
    ],
    next_evolution: [99]
  }, {
    id: 99,
    name: 'Kingler',
    img: 'http://www.serebii.net/pokemongo/pokemon/099.png',
    type: [
      11
    ],
    height: 1.30,
    weight: 60.0,
    candy: 'Krabby Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.062,
    avg_spawns: 6.2,
    spawn_time: '03:44',
    multipliers: null,
    weaknesses: [
      3,
      2
    ],
    prev_evolution: [98]
  }, {
    id: 100,
    name: 'Voltorb',
    img: 'http://www.serebii.net/pokemongo/pokemon/100.png',
    type: [
      3
    ],
    height: 0.51,
    weight: 10.4,
    candy: 'Voltorb Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.65,
    avg_spawns: 65,
    spawn_time: '04:36',
    multipliers: [
      2.01,
      2.02
    ],
    weaknesses: [
      8
    ],
    next_evolution: [101]
  }, {
    id: 101,
    name: 'Electrode',
    img: 'http://www.serebii.net/pokemongo/pokemon/101.png',
    type: [
      3
    ],
    height: 1.19,
    weight: 66.6,
    candy: 'Voltorb Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.02,
    avg_spawns: 2,
    spawn_time: '04:10',
    multipliers: null,
    weaknesses: [
      8
    ],
    prev_evolution: [100]
  }, {
    id: 102,
    name: 'Exeggcute',
    img: 'http://www.serebii.net/pokemongo/pokemon/102.png',
    type: [
      2,
      6
    ],
    height: 0.41,
    weight: 2.5,
    candy: 'Exeggcute Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.78,
    avg_spawns: 78,
    spawn_time: '09:09',
    multipliers: [
      2.7,
      3.18
    ],
    weaknesses: [
      0,
      1,
      4,
      5,
      12,
      10,
      'Dark'
    ],
    next_evolution: [103]
  }, {
    id: 103,
    name: 'Exeggutor',
    img: 'http://www.serebii.net/pokemongo/pokemon/103.png',
    type: [
      2,
      6
    ],
    height: 2.01,
    weight: 120.0,
    candy: 'Exeggcute Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.014,
    avg_spawns: 1.4,
    spawn_time: '12:34',
    multipliers: null,
    weaknesses: [
      0,
      1,
      4,
      5,
      12,
      10,
      'Dark'
    ],
    prev_evolution: [102]
  }, {
    id: 104,
    name: 'Cubone',
    img: 'http://www.serebii.net/pokemongo/pokemon/104.png',
    type: [
      8
    ],
    height: 0.41,
    weight: 6.5,
    candy: 'Cubone Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.61,
    avg_spawns: 61,
    spawn_time: '01:51',
    multipliers: [1.67],
    weaknesses: [
      11,
      2,
      1
    ],
    next_evolution: [105]
  }, {
    id: 105,
    name: 'Marowak',
    img: 'http://www.serebii.net/pokemongo/pokemon/105.png',
    type: [
      8
    ],
    height: 0.99,
    weight: 45.0,
    candy: 'Cubone Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.02,
    avg_spawns: 2,
    spawn_time: '03:59',
    multipliers: null,
    weaknesses: [
      11,
      2,
      1
    ],
    prev_evolution: [104]
  }, {
    id: 106,
    name: 'Hitmonlee',
    img: 'http://www.serebii.net/pokemongo/pokemon/106.png',
    type: [
      13
    ],
    height: 1.50,
    weight: 49.8,
    candy: 'None',
    egg: '10 km',
    spawn_chance: 0.02,
    avg_spawns: 2,
    spawn_time: '03:59',
    multipliers: null,
    weaknesses: [
      5,
      6,
      'Fairy'
    ]
  }, {
    id: 107,
    name: 'Hitmonchan',
    img: 'http://www.serebii.net/pokemongo/pokemon/107.png',
    type: [
      13
    ],
    height: 1.40,
    weight: 50.2,
    candy: 'None',
    egg: '10 km',
    spawn_chance: 0.022,
    avg_spawns: 2.2,
    spawn_time: '05:58',
    multipliers: null,
    weaknesses: [
      5,
      6,
      'Fairy'
    ]
  }, {
    id: 108,
    name: 'Lickitung',
    img: 'http://www.serebii.net/pokemongo/pokemon/108.png',
    type: [
      9
    ],
    height: 1.19,
    weight: 65.5,
    candy: 'None',
    egg: '5 km',
    spawn_chance: 0.011,
    avg_spawns: 1.1,
    spawn_time: '02:46',
    multipliers: null,
    weaknesses: [
      13
    ]
  }, {
    id: 109,
    name: 'Koffing',
    img: 'http://www.serebii.net/pokemongo/pokemon/109.png',
    type: [
      4
    ],
    height: 0.61,
    weight: 1.0,
    candy: 'Koffing Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.20,
    avg_spawns: 20,
    spawn_time: '08:16',
    multipliers: [1.11],
    weaknesses: [
      8,
      6
    ],
    next_evolution: [110]
  }, {
    id: 110,
    name: 'Weezing',
    img: 'http://www.serebii.net/pokemongo/pokemon/110.png',
    type: [
      4
    ],
    height: 1.19,
    weight: 9.5,
    candy: 'Koffing Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.016,
    avg_spawns: 1.6,
    spawn_time: '12:17',
    multipliers: null,
    weaknesses: [
      8,
      6
    ],
    prev_evolution: [109]
  }, {
    id: 111,
    name: 'Rhyhorn',
    img: 'http://www.serebii.net/pokemongo/pokemon/111.png',
    type: [
      8,
      7
    ],
    height: 0.99,
    weight: 115.0,
    candy: 'Rhyhorn Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 0.63,
    avg_spawns: 63,
    spawn_time: '03:21',
    multipliers: [1.91],
    weaknesses: [
      11,
      2,
      1,
      13,
      8,
      'Steel'
    ],
    next_evolution: [112]
  }, {
    id: 112,
    name: 'Rhydon',
    img: 'http://www.serebii.net/pokemongo/pokemon/112.png',
    type: [
      8,
      7
    ],
    height: 1.91,
    weight: 120.0,
    candy: 'Rhyhorn Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.022,
    avg_spawns: 2.2,
    spawn_time: '05:50',
    multipliers: null,
    weaknesses: [
      11,
      2,
      1,
      13,
      8,
      'Steel'
    ],
    prev_evolution: [111]
  }, {
    id: 113,
    name: 'Chansey',
    img: 'http://www.serebii.net/pokemongo/pokemon/113.png',
    type: [
      9
    ],
    height: 1.09,
    weight: 34.6,
    candy: 'None',
    egg: '10 km',
    spawn_chance: 0.013,
    avg_spawns: 1.3,
    spawn_time: '04:46',
    multipliers: null,
    weaknesses: [
      13
    ]
  }, {
    id: 114,
    name: 'Tangela',
    img: 'http://www.serebii.net/pokemongo/pokemon/114.png',
    type: [
      2
    ],
    height: 0.99,
    weight: 35.0,
    candy: 'None',
    egg: '5 km',
    spawn_chance: 0.228,
    avg_spawns: 22.8,
    spawn_time: '23:13',
    multipliers: null,
    weaknesses: [
      0,
      1,
      4,
      5,
      12
    ]
  }, {
    id: 115,
    name: 'Kangaskhan',
    img: 'http://www.serebii.net/pokemongo/pokemon/115.png',
    type: [
      9
    ],
    height: 2.21,
    weight: 80.0,
    candy: 'None',
    egg: '5 km',
    spawn_chance: 0.0086,
    avg_spawns: 0.86,
    spawn_time: '02:40',
    multipliers: null,
    weaknesses: [
      13
    ]
  }, {
    id: 116,
    name: 'Horsea',
    img: 'http://www.serebii.net/pokemongo/pokemon/116.png',
    type: [
      11
    ],
    height: 0.41,
    weight: 8.0,
    candy: 'Horsea Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 1.13,
    avg_spawns: 113,
    spawn_time: '02:53',
    multipliers: [2.23],
    weaknesses: [
      3,
      2
    ],
    next_evolution: [117]
  }, {
    id: 117,
    name: 'Seadra',
    img: 'http://www.serebii.net/pokemongo/pokemon/117.png',
    type: [
      11
    ],
    height: 1.19,
    weight: 25.0,
    candy: 'Horsea Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.034,
    avg_spawns: 3.4,
    spawn_time: '03:18',
    multipliers: null,
    weaknesses: [
      3,
      2
    ],
    prev_evolution: [116]
  }, {
    id: 118,
    name: 'Goldeen',
    img: 'http://www.serebii.net/pokemongo/pokemon/118.png',
    type: [
      11
    ],
    height: 0.61,
    weight: 15.0,
    candy: 'Goldeen Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 2.18,
    avg_spawns: 218,
    spawn_time: '03:14',
    multipliers: [
      2.15,
      2.2
    ],
    weaknesses: [
      3,
      2
    ],
    next_evolution: [119]
  }, {
    id: 119,
    name: 'Seaking',
    img: 'http://www.serebii.net/pokemongo/pokemon/119.png',
    type: [
      11
    ],
    height: 1.30,
    weight: 39.0,
    candy: 'Goldeen Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.08,
    avg_spawns: 8,
    spawn_time: '05:21',
    multipliers: null,
    weaknesses: [
      3,
      2
    ],
    prev_evolution: [118]
  }, {
    id: 120,
    name: 'Staryu',
    img: 'http://www.serebii.net/pokemongo/pokemon/120.png',
    type: [
      11
    ],
    height: 0.79,
    weight: 34.5,
    candy: 'Staryu Candy',
    candy_count: 50,
    egg: '5 km',
    spawn_chance: 1.95,
    avg_spawns: 195,
    spawn_time: '22:59',
    multipliers: [
      2.38,
      2.41
    ],
    weaknesses: [
      3,
      2
    ],
    next_evolution: [121]
  }, {
    id: 121,
    name: 'Starmie',
    img: 'http://www.serebii.net/pokemongo/pokemon/121.png',
    type: [
      11,
      6
    ],
    height: 1.09,
    weight: 80.0,
    candy: 'Staryu Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.034,
    avg_spawns: 3.4,
    spawn_time: '06:57',
    multipliers: null,
    weaknesses: [
      3,
      2,
      12,
      10,
      'Dark'
    ],
    prev_evolution: [120]
  }, {
    id: 122,
    name: 'Mr. Mime',
    img: 'http://www.serebii.net/pokemongo/pokemon/122.png',
    type: [
      6
    ],
    height: 1.30,
    weight: 54.5,
    candy: 'None',
    egg: '10 km',
    spawn_chance: 0.0031,
    avg_spawns: 0.31,
    spawn_time: '01:51',
    multipliers: null,
    weaknesses: [
      12,
      10,
      'Dark'
    ]
  }, {
    id: 123,
    name: 'Scyther',
    img: 'http://www.serebii.net/pokemongo/pokemon/123.png',
    type: [
      12,
      5
    ],
    height: 1.50,
    weight: 56.0,
    candy: 'None',
    egg: '10 km',
    spawn_chance: 0.14,
    avg_spawns: 14,
    spawn_time: '05:43',
    multipliers: null,
    weaknesses: [
      0,
      3,
      1,
      5,
      7
    ]
  }, {
    id: 124,
    name: 'Jynx',
    img: 'http://www.serebii.net/pokemongo/pokemon/124.png',
    type: [
      1,
      6
    ],
    height: 1.40,
    weight: 40.6,
    candy: 'None',
    egg: '10 km',
    spawn_chance: 0.35,
    avg_spawns: 35,
    spawn_time: '05:41',
    multipliers: null,
    weaknesses: [
      0,
      12,
      7,
      10,
      'Dark',
      'Steel'
    ]
  }, {
    id: 125,
    name: 'Electabuzz',
    img: 'http://www.serebii.net/pokemongo/pokemon/125.png',
    type: [
      3
    ],
    height: 1.09,
    weight: 30.0,
    candy: 'None',
    egg: '10 km',
    spawn_chance: 0.074,
    avg_spawns: 7.4,
    spawn_time: '04:28',
    multipliers: null,
    weaknesses: [
      8
    ]
  }, {
    id: 126,
    name: 'Magmar',
    img: 'http://www.serebii.net/pokemongo/pokemon/126.png',
    type: [
      0
    ],
    height: 1.30,
    weight: 44.5,
    candy: 'None',
    egg: '10 km',
    spawn_chance: 0.10,
    avg_spawns: 10,
    spawn_time: '20:36',
    multipliers: null,
    weaknesses: [
      11,
      8,
      7
    ]
  }, {
    id: 127,
    name: 'Pinsir',
    img: 'http://www.serebii.net/pokemongo/pokemon/127.png',
    type: [
      12
    ],
    height: 1.50,
    weight: 55.0,
    candy: 'None',
    egg: '10 km',
    spawn_chance: 0.99,
    avg_spawns: 99,
    spawn_time: '03:25',
    multipliers: null,
    weaknesses: [
      0,
      5,
      7
    ]
  }, {
    id: 128,
    name: 'Tauros',
    img: 'http://www.serebii.net/pokemongo/pokemon/128.png',
    type: [
      9
    ],
    height: 1.40,
    weight: 88.4,
    candy: 'None',
    egg: '5 km',
    spawn_chance: 0.12,
    avg_spawns: 12,
    spawn_time: '00:37',
    multipliers: null,
    weaknesses: [
      13
    ]
  }, {
    id: 129,
    name: 'Magikarp',
    img: 'http://www.serebii.net/pokemongo/pokemon/129.png',
    type: [
      11
    ],
    height: 0.89,
    weight: 10.0,
    candy: 'Magikarp Candy',
    candy_count: 400,
    egg: '2 km',
    spawn_chance: 4.78,
    avg_spawns: 478,
    spawn_time: '14:26',
    multipliers: [
      10.1,
      11.8
    ],
    weaknesses: [
      3,
      2
    ],
    next_evolution: [130]
  }, {
    id: 130,
    name: 'Gyarados',
    img: 'http://www.serebii.net/pokemongo/pokemon/130.png',
    type: [
      11,
      5
    ],
    height: 6.50,
    weight: 235.0,
    candy: 'Magikarp Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0032,
    avg_spawns: 0.32,
    spawn_time: '02:15',
    multipliers: null,
    weaknesses: [
      3,
      7
    ],
    prev_evolution: [129]
  }, {
    id: 131,
    name: 'Lapras',
    img: 'http://www.serebii.net/pokemongo/pokemon/131.png',
    type: [
      11,
      1
    ],
    height: 2.49,
    weight: 220.0,
    candy: 'None',
    egg: '10 km',
    spawn_chance: 0.006,
    avg_spawns: 0.6,
    spawn_time: '08:59',
    multipliers: null,
    weaknesses: [
      3,
      2,
      13,
      7
    ]
  }, {
    id: 132,
    name: 'Ditto',
    img: 'http://www.serebii.net/pokemongo/pokemon/132.png',
    type: [
      9
    ],
    height: 0.30,
    weight: 4.0,
    candy: 'None',
    egg: 'Not in Eggs',
    spawn_chance: 0,
    avg_spawns: 0,
    spawn_time: 'N/A',
    multipliers: null,
    weaknesses: [
      13
    ]
  }, {
    id: 133,
    name: 'Eevee',
    img: 'http://www.serebii.net/pokemongo/pokemon/133.png',
    type: [
      9
    ],
    height: 0.30,
    weight: 6.5,
    candy: 'Eevee Candy',
    candy_count: 25,
    egg: '10 km',
    spawn_chance: 2.75,
    avg_spawns: 275,
    spawn_time: '05:32',
    multipliers: [
      2.02,
      2.64
    ],
    weaknesses: [
      13
    ],
    next_evolution: [134, 135, 136]
  }, {
    id: 134,
    name: 'Vaporeon',
    img: 'http://www.serebii.net/pokemongo/pokemon/134.png',
    type: [
      11
    ],
    height: 0.99,
    weight: 29.0,
    candy: 'Eevee Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.014,
    avg_spawns: 1.4,
    spawn_time: '10:54',
    multipliers: null,
    weaknesses: [
      3,
      2
    ],
    prev_evolution: [133]
  }, {
    id: 135,
    name: 'Jolteon',
    img: 'http://www.serebii.net/pokemongo/pokemon/135.png',
    type: [
      3
    ],
    height: 0.79,
    weight: 24.5,
    candy: 'None',
    egg: 'Not in Eggs',
    spawn_chance: 0.012,
    avg_spawns: 1.2,
    spawn_time: '02:30',
    multipliers: null,
    weaknesses: [
      8
    ],
    prev_evolution: [133]
  }, {
    id: 136,
    name: 'Flareon',
    img: 'http://www.serebii.net/pokemongo/pokemon/136.png',
    type: [
      0
    ],
    height: 0.89,
    weight: 25.0,
    candy: 'Eevee Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.017,
    avg_spawns: 1.7,
    spawn_time: '07:02',
    multipliers: null,
    weaknesses: [
      11,
      8,
      7
    ],
    prev_evolution: [133]
  }, {
    id: 137,
    name: 'Porygon',
    img: 'http://www.serebii.net/pokemongo/pokemon/137.png',
    type: [
      9
    ],
    height: 0.79,
    weight: 36.5,
    candy: 'None',
    egg: '5 km',
    spawn_chance: 0.012,
    avg_spawns: 1.2,
    spawn_time: '02:49',
    multipliers: null,
    weaknesses: [
      13
    ]
  }, {
    id: 138,
    name: 'Omanyte',
    img: 'http://www.serebii.net/pokemongo/pokemon/138.png',
    type: [
      7,
      11
    ],
    height: 0.41,
    weight: 7.5,
    candy: 'Omanyte Candy',
    candy_count: 50,
    egg: '10 km',
    spawn_chance: 0.14,
    avg_spawns: 14,
    spawn_time: '10:23',
    multipliers: [2.12],
    weaknesses: [
      3,
      2,
      13,
      8
    ],
    next_evolution: [139]
  }, {
    id: 139,
    name: 'Omastar',
    img: 'http://www.serebii.net/pokemongo/pokemon/139.png',
    type: [
      7,
      11
    ],
    height: 0.99,
    weight: 35.0,
    candy: 'None',
    egg: 'Omanyte Candy',
    spawn_chance: 0.0061,
    avg_spawns: 0.61,
    spawn_time: '05:04',
    multipliers: null,
    weaknesses: [
      3,
      2,
      13,
      8
    ],
    prev_evolution: [138]
  }, {
    id: 140,
    name: 'Kabuto',
    img: 'http://www.serebii.net/pokemongo/pokemon/140.png',
    type: [
      7,
      11
    ],
    height: 0.51,
    weight: 11.5,
    candy: 'Kabuto Candy',
    candy_count: 50,
    egg: '10 km',
    spawn_chance: 0.10,
    avg_spawns: 10,
    spawn_time: '00:05',
    multipliers: [
      1.97,
      2.37
    ],
    weaknesses: [
      3,
      2,
      13,
      8
    ],
    next_evolution: [141]
  }, {
    id: 141,
    name: 'Kabutops',
    img: 'http://www.serebii.net/pokemongo/pokemon/141.png',
    type: [
      7,
      11
    ],
    height: 1.30,
    weight: 40.5,
    candy: 'Kabuto Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0032,
    avg_spawns: 0.32,
    spawn_time: '23:40',
    multipliers: null,
    weaknesses: [
      3,
      2,
      13,
      8
    ],
    prev_evolution: [140]
  }, {
    id: 142,
    name: 'Aerodactyl',
    img: 'http://www.serebii.net/pokemongo/pokemon/142.png',
    type: [
      7,
      5
    ],
    height: 1.80,
    weight: 59.0,
    candy: 'None',
    egg: '10 km',
    spawn_chance: 0.018,
    avg_spawns: 1.8,
    spawn_time: '23:40',
    multipliers: null,
    weaknesses: [
      11,
      3,
      1,
      7,
      'Steel'
    ]
  }, {
    id: 143,
    name: 'Snorlax',
    img: 'http://www.serebii.net/pokemongo/pokemon/143.png',
    type: [
      9
    ],
    height: 2.11,
    weight: 460.0,
    candy: 'None',
    egg: '10 km',
    spawn_chance: 0.016,
    avg_spawns: 1.6,
    spawn_time: '23:40',
    multipliers: null,
    weaknesses: [
      13
    ]
  }, {
    id: 144,
    name: 'Articuno',
    img: 'http://www.serebii.net/pokemongo/pokemon/144.png',
    type: [
      1,
      5
    ],
    height: 1.70,
    weight: 55.4,
    candy: 'None',
    egg: 'Not in Eggs',
    spawn_chance: 0,
    avg_spawns: 0,
    spawn_time: 'N/A',
    multipliers: null,
    weaknesses: [
      0,
      3,
      7,
      'Steel'
    ]
  }, {
    id: 145,
    name: 'Zapdos',
    img: 'http://www.serebii.net/pokemongo/pokemon/145.png',
    type: [
      3,
      5
    ],
    height: 1.60,
    weight: 52.6,
    candy: 'None',
    egg: 'Not in Eggs',
    spawn_chance: 0,
    avg_spawns: 0,
    spawn_time: 'N/A',
    multipliers: null,
    weaknesses: [
      1,
      7
    ]
  }, {
    id: 146,
    name: 'Moltres',
    img: 'http://www.serebii.net/pokemongo/pokemon/146.png',
    type: [
      0,
      5
    ],
    height: 2.01,
    weight: 60.0,
    candy: 'None',
    egg: 'Not in Eggs',
    spawn_chance: 0,
    avg_spawns: 0,
    spawn_time: 'N/A',
    multipliers: null,
    weaknesses: [
      11,
      3,
      7
    ]
  }, {
    id: 147,
    name: 'Dratini',
    img: 'http://www.serebii.net/pokemongo/pokemon/147.png',
    type: [
      'Dragon'
    ],
    height: 1.80,
    weight: 3.3,
    candy: 'Dratini Candy',
    candy_count: 25,
    egg: '10 km',
    spawn_chance: 0.30,
    avg_spawns: 30,
    spawn_time: '06:41',
    multipliers: [
      1.83,
      1.84
    ],
    weaknesses: [
      1,
      'Dragon',
      'Fairy'
    ],
    next_evolution: [148]
  }, {
    id: 148,
    name: 'Dragonair',
    img: 'http://www.serebii.net/pokemongo/pokemon/148.png',
    type: [
      'Dragon'
    ],
    height: 3.99,
    weight: 16.5,
    candy: 'Dratini Candy',
    candy_count: 100,
    egg: 'Not in Eggs',
    spawn_chance: 0.02,
    avg_spawns: 2,
    spawn_time: '11:57',
    multipliers: [2.05],
    weaknesses: [
      1,
      'Dragon',
      'Fairy'
    ],
    prev_evolution: [147],
    next_evolution: [149]
  }, {
    id: 149,
    name: 'Dragonite',
    img: 'http://www.serebii.net/pokemongo/pokemon/149.png',
    type: [
      'Dragon',
      5
    ],
    height: 2.21,
    weight: 210.0,
    candy: 'Dratini Candy',
    egg: 'Not in Eggs',
    spawn_chance: 0.0011,
    avg_spawns: 0.11,
    spawn_time: '23:38',
    multipliers: null,
    weaknesses: [
      1,
      7,
      'Dragon',
      'Fairy'
    ],
    prev_evolution: [147]
  }, {
    id: 150,
    name: 'Mewtwo',
    img: 'http://www.serebii.net/pokemongo/pokemon/150.png',
    type: [
      6
    ],
    height: 2.01,
    weight: 122.0,
    candy: 'None',
    egg: 'Not in Eggs',
    spawn_chance: 0,
    avg_spawns: 0,
    spawn_time: 'N/A',
    multipliers: null,
    weaknesses: [
      12,
      10,
      'Dark'
    ]
  }, {
    id: 151,
    name: 'Mew',
    img: 'http://www.serebii.net/pokemongo/pokemon/151.png',
    type: [
      6
    ],
    height: 0.41,
    weight: 4.0,
    candy: 'None',
    egg: 'Not in Eggs',
    spawn_chance: 0,
    avg_spawns: 0,
    spawn_time: 'N/A',
    multipliers: null,
    weaknesses: [
      12,
      10,
      'Dark'
    ]
  }]
}
