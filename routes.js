const fs = require('fs');

const requestHandler = (req, res) => {
    const requestURL = req.url;
    const requestMethod = req.method
    if (requestURL === '/') {
        res.write('<html>')
        res.write('<head>Input Form</head>')
        res.write(
            '<body><form method="post" action ="/message"><input type="text" name= "msg" /> <button type="submit">SEND </button></form></body>'
        )
        res.write('</html>')
        // res.writeHead(200, "Accepted Response");
        return res.end();
    }
    if (requestURL === '/message' && requestMethod === 'POST') {
        const requestBody = []
        req.on('data', (chunk) => {
            // gives out Buffer as chunk type
            console.log('Chunk Obtained, %O', chunk);
            requestBody.push(chunk);
        });
        // forcing to execute this function before returning 
        return req.on('end', () => {
            console.log('Chunk processing done');
            const parsedBody = Buffer.concat(requestBody).toString();
            console.debug('Parsed Body  : %O', parsedBody);
            res.statusCode = 302;
            res.setHeader('Location', '/')
            return res.end();
        })

    }
}

module.exports = requestHandler;