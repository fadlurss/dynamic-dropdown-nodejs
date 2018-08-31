var mongoose = require('mongoose');
var hasilSchema = new mongoose.Schema({
        contoh_id : {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Contoh"
        },
        selectnya : String,
        textnya : String
});

module.exports = mongoose.model("Hasil", hasilSchema);