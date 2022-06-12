const fs = require('fs');

const routeHandler = (req, res) => {

    const reqMethod = req.method;
    const reqURL = req.url;


    // home page 
    if (reqURL === '/' && reqMethod === 'GET') {
        // res.setHeader('Content-Type', 'text/html');
        // res.write('<html><body>Hello Rakshit</body></html>');
        // res.statusCode = 200;
        // return res.end();
        fs.readFile('form_data.html', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 400
                res.write('Error in Loading HTML : ' + err.toString());
                return res.end();
            }
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            return res.end();
        });
    } else if (reqURL === '/users' && reqMethod === 'GET') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>')
        res.write('<ul> <li> user 1 </li> <li> user 2 </li> </ul>');
        res.write('</body>');
        res.write('</html>');
        res.statusCode = 200;
        return res.end();

    } else if (reqURL === '/create-user' && reqMethod == 'POST') {
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
            res.setHeader('Location', '/');
            res.statusCode = 201;
            res.write("Data Accepted !")
            return res.end();
        })
    } else {
        res.statusCode = 405;
        res.write('Method not Allowed');
        return res.end();
    }
}

module.exports = routeHandler;