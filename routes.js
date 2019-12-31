// const fs = require('fs');

// const requeetHandler = (req,res) => {
//     const url = req.url;
//     const method = req.method;
//     // console.log(req.url,req.method,req.headers);
//     // console.log(req);
//     // process.exit();
//     if(url === '/'){
//     res.setHeader('content-type','text/html');
//     res.write('<html><body><h1>');
//     res.write('Hello</h1>');
//     res.write('<form method="POST" action="/message"><input type="text"></input><input type="submit"></input></form>')
//     res.write('</body><html>');
//     return res.end();
//     }
    
//     if(url === '/message' && method ==='POST'){
//         const body = [];
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         }); 
//         req.on('end', () => {
//             const parseBody = Buffer.concat(body).toString();
//             const message = parseBody.split('=')[1];
//             fs.writeFileSync('message.txt', message);
//         })
//         // fs.writeFileSync('message.txt', 'DUMMY');
//         res.statusCode = 302;
//         res.setHeader('Location','/');
//         return res.end();
//     }
//     res.setHeader('content-type','text/html');
//     res.write('<html><body><h1>');
//     res.write('Welcome .node.js');
//     res.write('</h1></body><html>');
//     res.end();
// }

// module.exports = {
//     handler: requeetHandler,
//     someText: 'Some hard coded text'
// };