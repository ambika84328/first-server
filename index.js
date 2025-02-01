const http = require('http')
const route = require("./route")

const server = http.createServer(route.handler)

server.listen(3000,()=>{
    console.log("listing in port 3000")
})

