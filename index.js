// https://docs.pokemontcg.io/
const pokemon = require('pokemontcgsdk')
var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')
var axios = require('axios')


var server = express()

server.set('view engine', 'ejs')
server.use(express.static('views'))
server.set('views', __dirname+'/views')

server.get('/', function(request, response){
    response.render('home.ejs')
})


server.get('/lightning', function(request, response){
    var url = 'https://api.pokemontcg.io/v1/cards?'
   
    pokemon.card.where({ page: 1, pageSize: 1000})
    .then(cards => {
        var wantedData = {
            cards: [ ]
        }
        cards.forEach(function(card){
            if ( card.types && card.types.indexOf('Lightning') >= 0 ) {
                wantedData.cards.push(card)
            }
        })
           console.log(Object.keys(cards))
          response.render('lightning.ejs', {data: wantedData})

    })
})

server.get('/fire', function(request, response){
    var url = 'https://api.pokemontcg.io/v1/cards?subtypes=EX'
    
 pokemon.card.where({ page: 1, pageSize: 1000})
    .then(cards => {
        var wantedData = {
            cards: [ ]
        }
        cards.forEach(function(card){
            if ( card.types && card.types.indexOf('Fire') >= 0 ) {
                wantedData.cards.push(card)
            }
        })
           console.log(Object.keys(cards))
          response.render('fire.ejs', {data: wantedData})
    })
})


server.get('/grass', function(request, response){
    var url = 'https://api.pokemontcg.io/v1/cards?'
    
    pokemon.card.where({ page: 1, pageSize: 1000})
    .then(cards => {
        var wantedData = {
            cards: [ ]
        }
        cards.forEach(function(card){
            if ( card.types && card.types.indexOf('Grass') >= 0 ) {
                wantedData.cards.push(card)
            }
        })
           console.log(Object.keys(cards))
          response.render('grass.ejs', {data: wantedData})
    })
})


server.get('/fairy', function(request, response){
 var url = 'https://api.pokemontcg.io/v1/cards?'
    
  pokemon.card.where({ page: 1, pageSize: 1000})
    .then(cards => {
        var wantedData = {
            cards: [ ]
        }
        cards.forEach(function(card){
            if ( card.types && card.types.indexOf('Fairy') >= 0 ) {
                wantedData.cards.push(card)
            }
        })
           console.log(Object.keys(cards))
          response.render('fairy.ejs', {data: wantedData})
    })
})

server.get('/darkness', function(request, response){
    var url = 'https://api.pokemontcg.io/v1/cards?'
    pokemon.card.where({ page: 1, pageSize: 1000})
    .then(cards => {
        var wantedData = {
            cards: [ ]
        }
        cards.forEach(function(card){
            if ( card.types && card.types.indexOf('Darkness') >= 0 ) {
                wantedData.cards.push(card)
            }
        })
           console.log(Object.keys(cards))
          response.render('darkness.ejs', {data: wantedData})
    })
})


server.get('/metal', function(request, response){
     var url = 'https://api.pokemontcg.io/v1/cards?'
    
   pokemon.card.where({ page: 1, pageSize: 1000})
    .then(cards => {
        var wantedData = {
            cards: [ ]
        }
        cards.forEach(function(card){
            if ( card.types && card.types.indexOf('Metal') >= 0 ) {
                wantedData.cards.push(card)
            }
        })
           console.log(Object.keys(cards))
          response.render('metal.ejs', {data: wantedData})
    })
})


server.get('/water', function(request, response){
    var url = 'https://api.pokemontcg.io/v1/cards?'
   
   pokemon.card.where({ page: 1, pageSize: 1000})
//   function getNextPage(){
//     fetch(nextPage)
    .then(cards => {
        var wantedData = {
            cards: [ ]
        }
        cards.forEach(function(card){
            if ( card.types && card.types.indexOf('Water') >= 0 ) {
                wantedData.cards.push(card)
            }
        })
          console.log(Object.keys(cards))
        // nextPage = pokemon.card.next

          response.render('water.ejs', {data: wantedData})
    })
})

server.get('/colorless', function(request, response){
     var url = 'https://api.pokemontcg.io/v1/cards?'

     pokemon.card.where({ page: 1, pageSize: 1000})
    .then(cards => {
        var wantedData = {
            cards: [ ]
        }
        cards.forEach(function(card){
            if ( card.types && card.types.indexOf('Colorless') >= 0 ) {
                wantedData.cards.push(card)
            }
        })
           console.log(Object.keys(cards))
          response.render('colorless.ejs', {data: wantedData})
    })
})


server.get('/psychic', function(request, response){
     var url = 'https://api.pokemontcg.io/v1/cards?'
    
   pokemon.card.where({ page: 1, pageSize: 1000})
    .then(cards => {
        var wantedData = {
            cards: [ ]
        }
        cards.forEach(function(card){
            if ( card.types && card.types.indexOf('Psychic') >= 0 ) {
                wantedData.cards.push(card)
            }
        })
           console.log(Object.keys(cards))
          response.render('psychic.ejs', {data: wantedData})
    })
})

server.get('/fighting', function(request, response){
     var url = 'https://api.pokemontcg.io/v1/cards?'
    
    pokemon.card.where({ page: 1, pageSize: 1000})
    .then(cards => {
        var wantedData = {
            cards: [ ]
        }
        cards.forEach(function(card){
            if ( card.types && card.types.indexOf('Fighting') >= 0 ) {
                wantedData.cards.push(card)
            }
        })
           console.log(Object.keys(cards))
          response.render('fighting.ejs', {data: wantedData})
    })
})

server.get('/dragon', function(request, response){
 var url = 'https://api.pokemontcg.io/v1/cards?'
    
  pokemon.card.where({ page: 1, pageSize: 1000})
    .then(cards => {
        var wantedData = {
            cards: [ ]
        }
        cards.forEach(function(card){
            if ( card.types && card.types.indexOf('Dragon') >= 0 ) {
                wantedData.cards.push(card)
            }
        })
           console.log(Object.keys(cards))
          response.render('dragon.ejs', {data: wantedData})
    })
})


var port =  process.env.PORT


server.listen(port, () => {
    console.log('Server running on port: ' + port)
})