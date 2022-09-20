
const process = require('process');
const fs = require('fs');

const { obj2csv, csv2obj } = require('./csv-parser.js')

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';
const arg = process.argv;

const userInfo = [
    { name: 'John Doe', address: 'New York', dob: '1992-12-03' },
    { name: 'Jane Doe', address: 'Washington DC', dob: '1999-09-30' },
]
header_col = [
    'name',
    'address',
    'dob'
]

if (arg[2] === 'create-csv') {
    obj2csv(userInfo, header_col)
}

MongoClient.connect(url, (err, db) => {
    if (err) {
        console.log(`error: ${err}`);
    }
    console.log('DB connected Successfully!');
    const dbo = db.db('UserInfoDB');

    if (arg[2] === 'write') {
        dbo.collection('users').insertMany(csv2obj(), (err, res) => {
            if (err) {
                console.log(`error: ${err}`);
            }
        })
    } else if (arg[2] === 'read') {
        dbo.collection(arg[3]).find().toArray((err, data) => {
            if (err) {
                console.log(`error: ${err}`);
            } else {
                obj2csv(data, header_col)
            }
        })
    } else {
        console.log('invalid argument');
    }
})





