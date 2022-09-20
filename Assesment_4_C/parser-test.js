const { obj2csv, csv2obj } = require('./csv-parser.js');
const fs = require('fs');
const { test } = require('./test-condtion.js')

const obj = [
    { name: 'Ratish', address: 'Bhaktapur', dob: '2055-03-16' }
]
header_col = [
    'name',
    'address',
    'dob'
]
// obj2csv(obj, header_col, './users.csv');
const data = fs.readFileSync('users.csv', 'utf-8')

// const obj2 = csv2obj('./users.csv');
// console.log(obj2);
// console.log(obj)
// test(obj, obj2);

const expected = `name,address,dob
// Ratish,Bhaktapur,2055-03-16`
// console.log(data);
test(data, expected);