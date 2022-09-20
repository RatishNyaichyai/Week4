const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const user = new Schema(
    {
        name: {
            type: String
        },
        address: {
            type: String
        },
        dob: {
            type: Date
        },
        creatdedAt: {
            type: Date,
            default: () => Date.now()

        },
        updatedAt: {
            type: Date,
            default: () => Date.now()
        }
    },
    { collection: "User" }
)
const users = mongoose.model('users', user);

module.exports = {
    users
}
