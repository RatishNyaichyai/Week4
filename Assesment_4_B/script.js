const mongoose = require('mongoose');
const User = require('./test-model')

mongoose.connect('mongodb://localhost:27017/testdb', () => {
    console.log('connected')
},
    e => console.error(e)
)
run();

async function run() {
    try {
        const user = new User(
            {
                name: 'Ratish',
                age: 26,
                email: 'test@gmail.com'
            }
        )
        await user.save();
        console.log(user);



    } catch (e) {
        console.error(e.message)
    }


    // const user = new User({ name: "kyle", age: 26 })
    // await user.save()
}

