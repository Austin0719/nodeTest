const express = require('express');
const morgan = require('morgan');
const mongoose =require('mongoose');

const blogRoutes = require('./routes/blogRoutes');
//express app
const app = express();

//connect to MongoDB
const dbURI ='mongodb+srv://austin:test1234@nodetuts.8tezm.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodetuts'
mongoose.connect(dbURI ,{useNewUrlParser: true,useUnifiedTopology: true})
    .then((result)=>{ app.listen(3000);})
    .catch((err) => {console.log(err)});

//register view engine
app.set('view engine','ejs');

//listen for request


//middleware static files 這個public資料夾內的靜態文件就會被提供到前端，此資料夾外的css等等都不會被套用 除了在這資料夾內部的
//所以head.ejs 內的CSS程式碼可以單獨放進public資料夾
app.use(express.static('public'))

//讓前端POST資料能傳過來
app.use(express.urlencoded({extended:true}));

//透過morgan套件更舒服地顯示儀表板資訊
app.use(morgan('dev'));


//routes
app.get('/',(req,res)=>{
    res.redirect('/blogs')
})

app.get('/about',(req,res)=>{
    // res.send('<p>1234</p>'); //會自動設定header跟status code   
    // res.sendFile('./views/about.html',{root: __dirname});
    res.render('about',{title : 'about'});
})


//blog routes
app.use('/blogs',blogRoutes);


//middle ware
//use = use this function for everying incoming request，只要上面幾個get方法沒對應到，就一定會執行這個方法，
//所以放的位置重要，如果放在上面，依照順序他就會先執行不管下面有沒有對應
app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root: __dirname})
    res.status(404).render('404',{title : '404'});
})

// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// })
