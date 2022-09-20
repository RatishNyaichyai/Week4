const process = require('process');
const fs = require('fs');

const arg = process.argv;

function obj2csv(obj, header_col, filepath) {
    const csvString = [
        header_col,
        ...obj.map(item => [
            item.name,
            item.address,
            item.dob
        ])
    ]
        .map(e => e.join(","))
        .join('\n')
    // console.log(csvString);
    fs.writeFileSync(filepath, csvString)
}

function csv2obj(filepath) {
    var dataCollection = []
    data = fs.readFileSync(filepath, 'utf-8');
    data = data.split('\n').slice(1, data.length - 1)
    for (d of data) {
        dict = {}
        dict.name = d.split(',')[0]
        dict.address = d.split(',')[1]
        dict.dob = d.split(',')[2]
        dataCollection.push(dict)

    }
    return dataCollection
}

module.exports = {
    obj2csv,
    csv2obj
}
