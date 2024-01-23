const fs = require('fs')
const http = require('http')



const node = http.createServer(function (req, res) {

        let body = ""
        req.on('data', function (data) {
            body += data
        })
        req.on('end', function () {
            const object = JSON.parse(body)
            fs.writeFile( "file.txt",object.message, function(err,written){
             if(err){
                 console.log(err)
                 const html = '<h1>error</h1>\n'
                 res.writeHeader(200, {"Content-Type": "text/html"});
                 res.write(html);
                 res.end();
             }
                const html = '<h1>message successfully written to txt file</h1>\n'
                res.writeHeader(200, {"Content-Type": "text/html"});
                res.write(html);
                res.end();

            })
        })





})

const PORT = 3000


node.listen(PORT, 'localhost', function () {


    console.log(`localhost listening on port ${PORT}`)
})

