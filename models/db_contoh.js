var mongoose = require('mongoose');
var contohSchema = new mongoose.Schema({
    _id : String,
    name : String,
    description : String,
});

module.exports = mongoose.model("Contoh", contohSchema);