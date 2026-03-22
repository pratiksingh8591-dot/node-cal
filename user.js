const http =require('http');
const {requesthandler}=require('./calculator')
const server=http.createServer(requesthandler);
const port=3000;
server.listen(port,()=>{
   console.log(`the system is running  on http://localhost:${port}`); 
})