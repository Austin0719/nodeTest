const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//ORM：資料庫負責維護關聯 ODM：開發者負責維護關聯
//但都是可以映射資料庫過來讓我們操作資料庫
//定義表格結構
const blogSchema = new Schema({
    title:{
        type : String,
        required : true
    },
    snippet:{
        type : String,
        required : true
    },
    body:{
        type : String,
        required : true
    }
},{timestamps : true});
//讓這個結構變成可以操作的 Model
const Blog = mongoose.model('Blog',blogSchema); //資料庫中為blogs mongoose會自動幫我們轉換
module.exports = Blog;