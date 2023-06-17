let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let UserSchema = Schema({
    id: Number,
    name: Date,
    userName: String,
    motdepasse: Boolean
});

UserSchema.plugin(aggregatePaginate);


module.exports = mongoose.model('users', UserSchema);