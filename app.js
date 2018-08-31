var express             = require('express')
    app                 = express()
    mongoose            = require('mongoose')
    bodyParser          = require('body-parser')
    configDB            = require('./database.js')
    methodOverride      = require('method-override')
    Fruit               = require('./models/db_contoh')
    Hasil               = require('./models/db_hasil')

    mongoose.connect(configDB.url, { useNewUrlParser: true }); // connect to our database
    app.set('view engine', 'ejs'); // set up ejs for templating
    app.use(bodyParser.json()); // get information from html forms
    app.use(bodyParser.urlencoded({ extended: true })); // ini harus true, nanti tidak bisa diedit
    app.use(methodOverride("_method"));

    // var tambah_data = new Fruit({
    //         name : "Grape",
    //         description : "The grape color is purple"
    // });

    // tambah_data.save(function (err, hasil){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         console.log(hasil);
    //     }
    // });

    app.get("/", function(req,res){ //form
        Fruit.find({}, function(err, keluarin){
            if(err){
                console.log(err);
            } else {
                // console.log(keluarin);
                res.render("lihat", {hasil_keluarin: keluarin});
            }
        });
    });


    app.get("/getnew/:id",(req,res)=>{
        id = req.params.id;
        Fruit.find({name:id}, function(err, out){ //
            if(err){
                console.log(err);
            } else {
                res.json(out);
            }
        });
    });


    app.post("/new/", function(req,res){ //input data
        var selectnya = req.body.selectnya;
        var textnya = req.body.textnya;
        var input = {selectnya : selectnya, textnya  : textnya}; //input to db
        Hasil.create(input, function(err, hasilnya){ 
            if(err){
                console.log(err);
            } else {
                console.log(hasilnya);
                res.json({oke : hasilnya});
            }
        });
    });


    app.get("*", function(req,res){
        res.send("404");
    });

    app.listen(4000, function(req,res){
        console.log("Server contoh sudah jalan");
    });