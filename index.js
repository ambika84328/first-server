const http = require('http')
const app = require('express')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res, next) =>{
    res.send(
        `
        <form action="/product" method="POST">
            <label for="title">Product</label>
            <input type="text" name="title"/>
            <br>
            <label for="size">Size</label>
            <input type="number" name="size"/>
            <br>
            <button type="submit">Add Product</button>
        </form>
        `
    )
})

app.post("/",(req,res,next) => {
    console.log(req.body)
    res.redirect("/")
})

app.listen(3000)

