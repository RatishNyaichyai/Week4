const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

//---Creating a database---
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     console.log('Database Created');
//     db.close();
// })

//----Creating collection------
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const dbo = db.db('mydb');
//     dbo.createCollection('customers', (err, res) => {
//         if (err) throw err;
//         console.log('collection created');
//         db.close();
//     })
// })

//---------inserting elements-----------
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     const dbo = db.db("mydb");
//     const myobj = [
//         { name: 'John', address: 'Highway 71' },
//         { name: 'Peter', address: 'Lowstreet 4' },
//         { name: 'Amy', address: 'Apple st 652' },
//         { name: 'Hannah', address: 'Mountain 21' },
//         { name: 'Michael', address: 'Valley 345' },
//     ];
//     dbo.collection("customers").insertMany(myobj, (err, res) => {
//         if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount);
//         db.close();
//     });
// });

//----------find in MOngodb---------------
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const dbo = db.db("mydb");
//     dbo.collection('customers').find({}).toArray((err, res) => {
//         if (err) throw err;
//         console.log(res);
//         db.close();

//     })
// })

//----------find using query-------- {to find particular elements}
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const dbo = db.db('mydb');
//     const query = { name: 'Peter' };
//     dbo.collection('customers').find(query).toArray((err, res) => {
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     })
// })

//-------------Sorting---------------

// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const dbo = db.db('mydb');
//     const mysort = { name: -1 };
//     dbo.collection('customers').find().sort(mysort).toArray((err, res) => {
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     })
// })

//----------Delete-------
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const dbo = db.db('mydb');
//     const myquery = { name: 'Michael' }
//     dbo.collection('customers').deleteOne(myquery, (err, obj) => {
//         if (err) throw err;
//         console.log('1 document deleted');
//         db.close();
//     })
// })

//---------Drop Collection----------

// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const dbo = db.db('mydb');
//     dbo.collection('customers').drop((err, delOK) => {
//         if (err) throw err;
//         if (delOK) console.log('collection deleted');
//         db.close();
//     })
// })

//---------Update collection---------

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db('mydb');
    const myquery = { 'address': 'Highway 71' };
    const newquery = { $set: { 'name': 'Ratish', 'address': 'Bhaktapur 5' } };
    dbo.collection('customers').updateOne(myquery, newquery, (err) => {
        if (err) throw err;
        console.log('1 query updated');

        db.close();
    })
})