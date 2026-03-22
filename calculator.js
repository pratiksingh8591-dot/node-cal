const { sumhandler } = require('./sum')

const requesthandler = (req, res) => {
    console.log("METHOD:", req.method)
    console.log("URL:", req.url)
    console.log("MATCH:", req.url.toLowerCase() === "/calculator" && req.method === "POST")

    if (req.url === '/') {
        res.write(`
            <html lang="en">
            <body>
                <form action="/calculator" method="POST">
                    <input type="number" name="num1" placeholder="Enter number 1">
                    <p>+</p>
                    <input type="number" name="num2" placeholder="Enter number 2">
                    <br><br>
                    <input type="submit" value="Submit">
                </form>
            </body>
            </html>`)
        return res.end();
    } 
    
    if (req.url.toLowerCase() === "/calculator" && req.method === "POST") {
        sumhandler(req, res);
        return;
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`<html><body><p>404 error</p><a href="/">Go to home</a></body></html>`);
    res.end();
}

exports.requesthandler = requesthandler;