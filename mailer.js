const http = require('http')
const mailer = require('nodemailer')


const transporter = mailer.createTransport({
    service: 'gmail', host: "smtp.gmail.com", post: '587', auth: {
        user: 'your email app goes here', pass: 'your password app goes here '
    }
});


const node = http.createServer(function (req, res) {

    let body = ""
    req.on('data', function (data) {
        body += data
    })
    req.on('end', function () {
        const object = JSON.parse(body)

        const mailOptions = {
            from: 'you email',
            to: object.email,
            subject: 'Sending Email using Node.js',
            html: '<html><style>body {font-family: Arial, Helvetica, sans-serif;}.container {padding: 20px; background-color: #f1f1f1;}</style><body><h2>Node mailer app</h2><div class="container"><h2><p>Message : ' + object.message + '</div></body></html>',

        };


        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })


        const html = '<h1>message successfully written to txt file</h1>\n'
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    })


})

const PORT = 3000


node.listen(PORT, 'localhost', function () {


    console.log(`localhost listening on port ${PORT}`)
})

