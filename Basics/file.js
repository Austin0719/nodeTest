const fs = require("fs"); //導入file system

//reading files
// readFile 本身是非同步的：不會阻塞程式執行，所以 lastline 會先印出
// callback 的機制：可以當作參數傳遞的函數，在readfile()方法內會等到讀取完再執行這個callback 每個方法不同
// 所以整個執行順序是：
// 開始讀取檔案（非同步）
// 立即執行 lastline
// 檔案讀取完成
// 執行 callback 內的 console.log

// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// }
// )

// console.log('lastline')

//writing files

//覆寫已有檔案，若沒有這檔案則會自動新增
// fs.writeFile("./docs/blog1.txt", "Hello,world", () => {
//   console.log("file was written");
// });

//directories 資料夾操作
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder delete');
//   });
// }

//deleting files 刪除檔案
// if (fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('file deleted');
//     })
// }