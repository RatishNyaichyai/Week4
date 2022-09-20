// const fs = require('fs');

//----------Opening a file -----------------------------
// // Try catch method for error
// try {
//     fd = fs.openSync('./example.txt', 'r');
// } catch (err) {
//     console.error(err);
// }

//--------------------Writing File---------------------

// fs.writeFile('example.txt', 'Hello World!', (err, data) => {   //call back require because it is asynchronous
//     if (err) {
//         console.error(err);
//     };
//     console.log(data);
// })

// fs.writeFileSync('example2.txt', 'how are you?'); //call back not required

//------------- Reading File --------------------------
// fs.readFile('./example.txt', 'utf-8', (err, data) => {
//     if (err) {

//         console.error(err);
//     }
//     console.log(data);
// })


// const data = fs.readFileSync('./example2.txt', 'utf-8');
// console.log(data);

//----------File Status -----------------
// const fs = require('fs');
// fs.stat('./example.txt', (err, stats) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
//     console.log(stats.isSymbolicLink());
//     console.log(stats.size);
// })

//using Promisses
// const fs = require('fs/promises')

// async function example() {
//     try {
//         const stats = await fs.stat('./example2.txt');
//         console.log(stats.isFile());
//         console.log(stats.isDirectory());
//         console.log(stats.isSymbolicLink());
//         console.log(stats.size);
//     } catch (err) {
//         console.error(err);
//     }
// }
// example();


//------------------Paths-------------------
// const path = require('path');

// const file = './example.txt'

// console.log(path.basename(file));
// console.log(path.extname(file));
// console.log(path.dirname(file));
// console.log(path.join('helo', __filename));

// console.log(path.resolve('example.txt'));


//-----------------Folder manipulation---------------

// const fs = require('fs');

// const folderPath = './test';

// // try {
// //     if (!fs.existsSync(folderName)) {
// //         fs.mkdirSync(folderName);
// //     }
// // } catch (err) {
// //     console.error(err);
// // }
// //--renaming a folder---
// fs.rename('./test', './test2', err => {
//     if (err) throw err;
//     console.log('Rename Succesfull');
// })

//--renaming a folder using Promisses

// const fs = require('fs/promises');

// async function example() {
//     try {
//         await fs.rename('./test2', 'test');
//     } catch (err) {
//         console.log(err);
//     }
// }
// example();

//------------Removing a folder-------

const fs = require('fs-extra');

const dir = './test'
// fs.mkdir(dir, err => {
//     if (err) throw err;
//     console.log('folder succesfully created');
// });
// fs.rmdir(dir, err => {
//     if (err) throw err;
//     console.log(`${dir} has been removed`);
// })
//--using promises---
fs.remove(dir)
    .then(() => {
        console.log('Folder remove successful')
    }).catch(err => {
        console.error(err);
    })

