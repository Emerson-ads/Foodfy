const express = require ('express')
const nunjucks = require ('nunjucks')
const data = require ('./data')


const server = express ();
server.use(express.static("public"))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res){
    return res.render('home', {items : data })
})

server.get("/sobre", function (req, res){
    return res.render('sobre')
})

server.get("/receitas", function( req, res){
    
    return res.render('receita', {items: data })
})

server.get("/recipes/:index", function (req, res) {
    
    const recipeIndex = req.params.index;
  
    

    return res.render('receita-detail', {items: data[recipeIndex] })     
        
  })

server.listen(5000, function(){
    console.log('Server is running')
})