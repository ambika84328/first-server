const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html')

    if(req.url=="/" && req.method=="GET"){
        fs.readFile('formData.txt',(err,data) =>{
            if(err){
                console.log(err);
                res.statusCode = 500;
                return res.end("<h1>Internal Server Error</h1>")
            }
            res.statusCode = 200;
            res.end(
            `
                <form action="/" method="POST">
                    <h1>${data}</h1>
                    <input type="text" name="message"/>
                    <button type="submit">Submit</button>
                </form>
            `
            )
        })
    }else if(req.url=="/" && req.method=="POST"){
        let datachunks = [];

        req.on('data',(chunks)=>{
            console.log(chunks)
            datachunks.push(chunks)
        })

        req.on('end',()=>{
            let combinedBuffer = Buffer.concat(datachunks);
            let formData = combinedBuffer.toString();
            const formValues = formData.split("=")[1];
            fs.writeFile('formData.txt',formValues,(err)=>{
                if(err){
                    console.log(err)
                }else{
                    res.statusCode = 302;
                    res.setHeader('Location',"/");
                    res.end();
                }
            })
        })
    }else{
        res.statusCode = 404;
        res.end("<h1>Page Not Found</h1>")
    }
})

server.listen(3000,()=>{
    console.log("listing in port 3000")
})

