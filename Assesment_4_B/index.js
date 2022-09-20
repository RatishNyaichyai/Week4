const mongoose = require('mongoose')
const { users } = require('./model')

// mongoose.connect('mongodb://localhost:27017/<database-name>');
let uri = "mongodb://localhost:27017/UserDb";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function () {
    console.log('mongoose database connection succesfully');
    // insertData();
    fetchData();
})

insertData = () => {
    let data = [
        {
            name: 'John',
            address: 'Bhaktapur',
            dob: '2055-03-16'
        },
        {
            name: 'Jane',
            address: 'Bhaktapur',
            dob: '2054-10-16'
        },
    ];
    users.insertMany(data, function (err, result) {
        if (err) {
            console.log("error", err);
        } else {
            console.log("results", result);
        }
    });
}
fetchData = () => {
    users.find({}, function (err, result) {
        if (err) {
            console.log("error", err);
        } else {
            console.log("result", result);
        }
    });
}
