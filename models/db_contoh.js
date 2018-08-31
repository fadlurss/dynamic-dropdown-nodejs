var mongoose = require('mongoose');
var contohSchema = new mongoose.Schema({
    
    name : String,
    description : String,
});

module.exports = mongoose.model("Contoh", contohSchema);