// createServer 定義處理請求的方式
// listen 開始監聽，等待請求
// 有請求來才會執行 createServer 的 callback
// listen 和 createServer 的 callback 
// listen 的 callback 在服務器成功啟動並開始監聽端口時觸發一次。

const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res)=>{
    //loadash
    const num = _.random(0,20);






    // res.setHeader('Content-Type','text/plane');
    // res.write('hello,world');
    // res.end();

    // res.setHeader('Content-Type','text/html');
    // res.write('<p>hello,world</p>');
    // res.write('<p>hello again ,world</p>');
    // res.end();

    res.setHeader('Content-Type','text/html');

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        //重定向redirects
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }



    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);如果只想回傳一個東西，可以寫進end()
            res.end(data);
        }
    })
});

server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000')
});
