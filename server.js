const http = require('http')



const node = http.createServer(function (req, res) {
    if (req.method === "GET" && req.url === "/") {
        console.log(req.url)
        const html = '<h1>Hello Node!!!!</h1>\n'
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    }
    if (req.method === "POST" && req.url === "/") {
        let body = ""
        req.on('data', function (data) {
            body += data
        })
        req.on('end', function () {
            const object = JSON.parse(body)
            const html = '<h1>Hello ' + object.name + '</h1>\n'
            res.writeHeader(200, {"Content-Type": "text/html"});
            res.write(html);
            res.end();
        })


    }


})

const PORT = 3000


node.listen(PORT, 'localhost', function () {


    console.log(`localhost listening on port ${PORT}`)
})

