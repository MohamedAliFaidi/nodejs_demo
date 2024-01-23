const http = require('http')
const  generator = require('generate-password');




const node = http.createServer(function (req, res) {



    const pass = generator.generate({
        length: 10,
        numbers: true
    })

    const html = '<h1>password : '+pass+' </h1>\n'
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();





})

const PORT = 3000


node.listen(PORT, 'localhost', function () {


    console.log(`localhost listening on port ${PORT}`)
})

