const sumhandler= (req,res)=>{
    console.log(req.url,req.method);
    const body=[];
    req.on('data',chunk=>{
        body.push(chunk)
    })
    req.on('end',()=>{
        const fullbody=Buffer.concat(body).toString();
        const params= new URLSearchParams(fullbody);
        const newbody=Object.fromEntries(params);
        console.log(newbody);
        const result=Number(newbody.num1)+Number(newbody.num2);
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html><body><h2>Your result is: ${result}</h2>
        <a href="/">Go back</a></body></html>`);
        res.end();
    })
     
}
exports.sumhandler=sumhandler;