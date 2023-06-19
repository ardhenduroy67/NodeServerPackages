const http = require('http')
const fs = require('fs')

http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'text/html')
    let path = './HtmlFolder'
    switch(req.url) {
        case '/' : {
            path += '/index.html'
            break
        }
        case '/about' : {
            path += '/about.html'
            break
        }
        default : {
            path += '/error.html'
            res.statusCode = 404
            break
        }
    }

    fs.readFile(path, 'utf8', function(err, data) {
        if(err) {
            console.error(err)
            return
        }
        else {
            res.end(data)
        }
    })
}).listen(3000, 'localhost', function() {
    console.log('Server is Running...')
})