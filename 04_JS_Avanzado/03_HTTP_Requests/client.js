const request = require("request");

request.get('https://pokeapi.co/api/v2/pokemon/ditto', (err, res, body) => {
    console.log(res.statusCode);
    const pokemon = JSON.parse(body);
    console.log(`Hola, mi nombre es ${pokemon.name}`);
});

request.get('https://api.nasa.gov/planetary/apod?api_key=SjkPhGcZdzRzqj6ZMkAbbVFanS6B4Wi9oaQKlKv0', (err, res, body) => {
    console.log(res.statusCode);
    const foto = JSON.parse(body);
    console.log(`Esta foto se llama ${foto.title} y su descripción es: ${foto.explanation}`)
});