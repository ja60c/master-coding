const pokemon = [
    {
        "name": "bulbasaur",
        "id": 1,
        "height": 7,
        "weight": 69,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "ivysaur",
        "id": 2,
        "height": 10,
        "weight": 130,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "venusaur",
        "id": 3,
        "height": 20,
        "weight": 1000,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "charmander",
        "id": 4,
        "height": 6,
        "weight": 85,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "charmeleon",
        "id": 5,
        "height": 11,
        "weight": 190,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "charizard",
        "id": 6,
        "height": 17,
        "weight": 905,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "squirtle",
        "id": 7,
        "height": 5,
        "weight": 90,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "wartortle",
        "id": 8,
        "height": 10,
        "weight": 225,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "blastoise",
        "id": 9,
        "height": 16,
        "weight": 855,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "caterpie",
        "id": 10,
        "height": 3,
        "weight": 29,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "metapod",
        "id": 11,
        "height": 7,
        "weight": 99,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "butterfree",
        "id": 12,
        "height": 11,
        "weight": 320,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "weedle",
        "id": 13,
        "height": 3,
        "weight": 32,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "kakuna",
        "id": 14,
        "height": 6,
        "weight": 100,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "beedrill",
        "id": 15,
        "height": 10,
        "weight": 295,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "pidgey",
        "id": 16,
        "height": 3,
        "weight": 18,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "pidgeotto",
        "id": 17,
        "height": 11,
        "weight": 300,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "pidgeot",
        "id": 18,
        "height": 15,
        "weight": 395,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "rattata",
        "id": 19,
        "height": 3,
        "weight": 35,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "raticate",
        "id": 20,
        "height": 7,
        "weight": 185,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "spearow",
        "id": 21,
        "height": 3,
        "weight": 20,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "fearow",
        "id": 22,
        "height": 12,
        "weight": 380,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "ekans",
        "id": 23,
        "height": 20,
        "weight": 69,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "arbok",
        "id": 24,
        "height": 35,
        "weight": 650,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "pikachu",
        "id": 25,
        "height": 4,
        "weight": 60,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "raichu",
        "id": 26,
        "height": 8,
        "weight": 300,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "sandshrew",
        "id": 27,
        "height": 6,
        "weight": 120,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "sandslash",
        "id": 28,
        "height": 10,
        "weight": 295,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "nidoran-f",
        "id": 29,
        "height": 4,
        "weight": 70,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "nidorina",
        "id": 30,
        "height": 8,
        "weight": 200,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "nidoqueen",
        "id": 31,
        "height": 13,
        "weight": 600,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "nidoran-m",
        "id": 32,
        "height": 5,
        "weight": 90,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "nidorino",
        "id": 33,
        "height": 9,
        "weight": 195,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "nidoking",
        "id": 34,
        "height": 14,
        "weight": 620,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "clefairy",
        "id": 35,
        "height": 6,
        "weight": 75,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "clefable",
        "id": 36,
        "height": 13,
        "weight": 400,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "vulpix",
        "id": 37,
        "height": 6,
        "weight": 99,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "ninetales",
        "id": 38,
        "height": 11,
        "weight": 199,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "jigglypuff",
        "id": 39,
        "height": 5,
        "weight": 55,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "wigglytuff",
        "id": 40,
        "height": 10,
        "weight": 120,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "zubat",
        "id": 41,
        "height": 8,
        "weight": 75,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "golbat",
        "id": 42,
        "height": 16,
        "weight": 550,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "oddish",
        "id": 43,
        "height": 5,
        "weight": 54,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "gloom",
        "id": 44,
        "height": 8,
        "weight": 86,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "vileplume",
        "id": 45,
        "height": 12,
        "weight": 186,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "paras",
        "id": 46,
        "height": 3,
        "weight": 54,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "parasect",
        "id": 47,
        "height": 10,
        "weight": 295,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "venonat",
        "id": 48,
        "height": 10,
        "weight": 300,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "venomoth",
        "id": 49,
        "height": 15,
        "weight": 125,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "diglett",
        "id": 50,
        "height": 2,
        "weight": 8,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "dugtrio",
        "id": 51,
        "height": 7,
        "weight": 333,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "meowth",
        "id": 52,
        "height": 4,
        "weight": 42,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "persian",
        "id": 53,
        "height": 10,
        "weight": 320,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "psyduck",
        "id": 54,
        "height": 8,
        "weight": 196,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "golduck",
        "id": 55,
        "height": 17,
        "weight": 766,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "mankey",
        "id": 56,
        "height": 5,
        "weight": 280,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "primeape",
        "id": 57,
        "height": 10,
        "weight": 320,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "growlithe",
        "id": 58,
        "height": 7,
        "weight": 190,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "arcanine",
        "id": 59,
        "height": 19,
        "weight": 1550,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "poliwag",
        "id": 60,
        "height": 6,
        "weight": 124,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "poliwhirl",
        "id": 61,
        "height": 10,
        "weight": 200,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "poliwrath",
        "id": 62,
        "height": 13,
        "weight": 540,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "abra",
        "id": 63,
        "height": 9,
        "weight": 195,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "kadabra",
        "id": 64,
        "height": 13,
        "weight": 565,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "alakazam",
        "id": 65,
        "height": 15,
        "weight": 480,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "machop",
        "id": 66,
        "height": 8,
        "weight": 195,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "machoke",
        "id": 67,
        "height": 15,
        "weight": 705,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "machamp",
        "id": 68,
        "height": 16,
        "weight": 1300,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "bellsprout",
        "id": 69,
        "height": 7,
        "weight": 40,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "weepinbell",
        "id": 70,
        "height": 10,
        "weight": 64,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "victreebel",
        "id": 71,
        "height": 17,
        "weight": 155,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "tentacool",
        "id": 72,
        "height": 9,
        "weight": 455,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "tentacruel",
        "id": 73,
        "height": 16,
        "weight": 550,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "geodude",
        "id": 74,
        "height": 4,
        "weight": 200,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "graveler",
        "id": 75,
        "height": 10,
        "weight": 1050,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "golem",
        "id": 76,
        "height": 14,
        "weight": 3000,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "ponyta",
        "id": 77,
        "height": 10,
        "weight": 300,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "rapidash",
        "id": 78,
        "height": 17,
        "weight": 950,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "slowpoke",
        "id": 79,
        "height": 12,
        "weight": 360,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "slowbro",
        "id": 80,
        "height": 16,
        "weight": 785,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "magnemite",
        "id": 81,
        "height": 3,
        "weight": 60,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "magneton",
        "id": 82,
        "height": 10,
        "weight": 600,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "steel",
                    "url": "https://pokeapi.co/api/v2/type/9/"
                }
            }
        ]
    },
    {
        "name": "farfetchd",
        "id": 83,
        "height": 8,
        "weight": 150,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "doduo",
        "id": 84,
        "height": 14,
        "weight": 392,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "dodrio",
        "id": 85,
        "height": 18,
        "weight": 852,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "seel",
        "id": 86,
        "height": 11,
        "weight": 900,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "dewgong",
        "id": 87,
        "height": 17,
        "weight": 1200,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "grimer",
        "id": 88,
        "height": 9,
        "weight": 300,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "muk",
        "id": 89,
        "height": 12,
        "weight": 300,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "shellder",
        "id": 90,
        "height": 3,
        "weight": 40,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "cloyster",
        "id": 91,
        "height": 15,
        "weight": 1325,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "gastly",
        "id": 92,
        "height": 13,
        "weight": 1,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "haunter",
        "id": 93,
        "height": 16,
        "weight": 1,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "gengar",
        "id": 94,
        "height": 15,
        "weight": 405,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ghost",
                    "url": "https://pokeapi.co/api/v2/type/8/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "onix",
        "id": 95,
        "height": 88,
        "weight": 2100,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "drowzee",
        "id": 96,
        "height": 10,
        "weight": 324,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "hypno",
        "id": 97,
        "height": 16,
        "weight": 756,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "krabby",
        "id": 98,
        "height": 4,
        "weight": 65,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "kingler",
        "id": 99,
        "height": 13,
        "weight": 600,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "voltorb",
        "id": 100,
        "height": 5,
        "weight": 104,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "electrode",
        "id": 101,
        "height": 12,
        "weight": 666,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "exeggcute",
        "id": 102,
        "height": 4,
        "weight": 25,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "exeggutor",
        "id": 103,
        "height": 20,
        "weight": 1200,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "cubone",
        "id": 104,
        "height": 4,
        "weight": 65,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "marowak",
        "id": 105,
        "height": 10,
        "weight": 450,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            }
        ]
    },
    {
        "name": "hitmonlee",
        "id": 106,
        "height": 15,
        "weight": 498,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "hitmonchan",
        "id": 107,
        "height": 14,
        "weight": 502,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                }
            }
        ]
    },
    {
        "name": "lickitung",
        "id": 108,
        "height": 12,
        "weight": 655,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "koffing",
        "id": 109,
        "height": 6,
        "weight": 10,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "weezing",
        "id": 110,
        "height": 12,
        "weight": 95,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "name": "rhyhorn",
        "id": 111,
        "height": 10,
        "weight": 1150,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "rhydon",
        "id": 112,
        "height": 19,
        "weight": 1200,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ground",
                    "url": "https://pokeapi.co/api/v2/type/5/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            }
        ]
    },
    {
        "name": "chansey",
        "id": 113,
        "height": 11,
        "weight": 346,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "tangela",
        "id": 114,
        "height": 10,
        "weight": 350,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            }
        ]
    },
    {
        "name": "kangaskhan",
        "id": 115,
        "height": 22,
        "weight": 800,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "horsea",
        "id": 116,
        "height": 4,
        "weight": 80,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "seadra",
        "id": 117,
        "height": 12,
        "weight": 250,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "goldeen",
        "id": 118,
        "height": 6,
        "weight": 150,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "seaking",
        "id": 119,
        "height": 13,
        "weight": 390,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "staryu",
        "id": 120,
        "height": 8,
        "weight": 345,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "starmie",
        "id": 121,
        "height": 11,
        "weight": 800,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "mr-mime",
        "id": 122,
        "height": 13,
        "weight": 545,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "fairy",
                    "url": "https://pokeapi.co/api/v2/type/18/"
                }
            }
        ]
    },
    {
        "name": "scyther",
        "id": 123,
        "height": 15,
        "weight": 560,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "jynx",
        "id": 124,
        "height": 14,
        "weight": 406,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "electabuzz",
        "id": 125,
        "height": 11,
        "weight": 300,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "magmar",
        "id": 126,
        "height": 13,
        "weight": 445,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "pinsir",
        "id": 127,
        "height": 15,
        "weight": 550,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    },
    {
        "name": "tauros",
        "id": 128,
        "height": 14,
        "weight": 884,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "magikarp",
        "id": 129,
        "height": 9,
        "weight": 100,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "gyarados",
        "id": 130,
        "height": 65,
        "weight": 2350,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "lapras",
        "id": 131,
        "height": 25,
        "weight": 2200,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            }
        ]
    },
    {
        "name": "ditto",
        "id": 132,
        "height": 3,
        "weight": 40,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "eevee",
        "id": 133,
        "height": 3,
        "weight": 65,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "vaporeon",
        "id": 134,
        "height": 10,
        "weight": 290,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "jolteon",
        "id": 135,
        "height": 8,
        "weight": 245,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            }
        ]
    },
    {
        "name": "flareon",
        "id": 136,
        "height": 9,
        "weight": 250,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "name": "porygon",
        "id": 137,
        "height": 8,
        "weight": 365,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "omanyte",
        "id": 138,
        "height": 4,
        "weight": 75,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "omastar",
        "id": 139,
        "height": 10,
        "weight": 350,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "kabuto",
        "id": 140,
        "height": 5,
        "weight": 115,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "kabutops",
        "id": 141,
        "height": 13,
        "weight": 405,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "name": "aerodactyl",
        "id": 142,
        "height": 18,
        "weight": 590,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "rock",
                    "url": "https://pokeapi.co/api/v2/type/6/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "snorlax",
        "id": 143,
        "height": 21,
        "weight": 4600,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
        ]
    },
    {
        "name": "articuno",
        "id": 144,
        "height": 17,
        "weight": 554,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "ice",
                    "url": "https://pokeapi.co/api/v2/type/15/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "zapdos",
        "id": 145,
        "height": 16,
        "weight": 526,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "electric",
                    "url": "https://pokeapi.co/api/v2/type/13/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "moltres",
        "id": 146,
        "height": 20,
        "weight": 600,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "dratini",
        "id": 147,
        "height": 18,
        "weight": 33,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "dragonair",
        "id": 148,
        "height": 40,
        "weight": 165,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            }
        ]
    },
    {
        "name": "dragonite",
        "id": 149,
        "height": 22,
        "weight": 2100,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "dragon",
                    "url": "https://pokeapi.co/api/v2/type/16/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "name": "mewtwo",
        "id": 150,
        "height": 20,
        "weight": 1220,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    },
    {
        "name": "mew",
        "id": 151,
        "height": 4,
        "weight": 40,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
        "is_default": true,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/type/14/"
                }
            }
        ]
    }
]


let parametro = 1200

const pokemonesPesados = pokemon.filter(
    (elementoPokemon) => {
        //console.log(elementoPokemon)
        if (elementoPokemon.weight >= parametro) {
            return true
            console.log("ya no me voy a ejecutar")
        } else {
            return false
        }

    })

console.log(pokemonesPesados)



//filtrar por 
//a) los que sean is_default 

// let parametroDefault = 1200

// const pokemonesDefault = pokemonDefault.filter(
//     (isDefault) => {
//         // console.log(isDefault)
//         if (isDefault.is_default = true) {
//         }

//     })

// console.log(pokemonesPesados)





//b) tengan type psychic, fight, dark, electric
// ----------------------------------------------------
// let parametroType = "psyhic"

// const pokemonPsychic = pokemon.filter((typePoke) => {
//     return true
//     console.log("Sy pokemon psychic");
//     } else {
//         return false
//     } 
// )
// -------------------------------
const parameter = "psychic"

const typePysichc = pokemon.filter((elementoPokemon) =>{
    console.log(elementoPokemon.types)
    console.log(elementoPokemon.types[0])
    console.log(elementoPokemon.types[0].type)
    console.log(elementoPokemon.types[0].type.name)
    console.log(elementoPokemon.types[0].type.name)

    const found = elementoPokemon.types.some((pokemonType) =>{
        pokemonType.type.name === parameter
    })

    if(elementoPokemon.types[0].type.name===parameter){
        return true
    { else {
        return false
    }
    })



})





//c) ordenar los pokemones alfabéticamente

//-----------ejemplo de internet--------
// var name = ['guindas', 'manzanas', 'bananas'];
// frutas.sort(); // ['bananas', 'guindas', 'manzanas']


// const pokemon = [{"name"}];

//---------------
// var pokeAlfabeto = pokemon[{"name"}]
// pokeAlfabeto.sort()
// console.log(pokeAlfabeto)


// pokemonName = pokemon.result[5]


// const pkmnNamesSorted = pkmnNames.sort()
// ​
// ​
// console.log({pkmnNamesSorted})