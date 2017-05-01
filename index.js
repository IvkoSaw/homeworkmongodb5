var MongoClient = require('mongodb').MongoClient;

// ---------------------------------------------5----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    // console.log("Connected correctly to server");
    db.collection("posts")
        .find({'name':{$exists:true}})
        .count(function (err, docs) {
            if(err){
                return console.log(err);
            }
            console.log("#5", docs);
            db.close();
        });
});
// ---------------------------------------------5----------------------------------------------







// ---------------------------------------------6----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    // console.log("Connected correctly to server");
    db.collection("posts")
        .find({'comments':{$size:5}})
        .count(function (err, docs) {
            if(err){
                return console.log(err);
            }
            console.log("#6",docs);
            db.close();
        });
});
// ---------------------------------------------6----------------------------------------------





// ---------------------------------------------7----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    // console.log("Connected correctly to server");
    db.collection("posts")
        .find({$or:[{'comments':{$size:10}},{"author.age":{$gt:28}}]})
        .count(function (err, docs) {
            if(err){
                return console.log(err);
            }
            console.log("#7",docs);
            db.close();
        });
});
// ---------------------------------------------7----------------------------------------------







// ---------------------------------------------8----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    // console.log("Connected correctly to server");
    db.collection("posts")
        .find({"author.age":{$gt:25}})
        .count(function (err, docs) {
            if(err){
                return console.log(err);
            }
            console.log("#8",docs);
            db.close();
        });
});
// ---------------------------------------------8----------------------------------------------





// ---------------------------------------------9----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    // console.log("Connected correctly to server");
    db.collection("posts")
        .find({"author.age":{$gte:18}, "author.age":{$lte:35}})
        .count(function (err, docs) {
            if(err){
                return console.log(err);
            }
            console.log("#9",docs);
            db.close();
        });
});
// ---------------------------------------------9----------------------------------------------





// ---------------------------------------------10----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    // console.log("Connected correctly to server");
    db.collection("posts")
        .find({$or:[{"published":true},{"author.eyeColor": "green"}]})
        .count(function (err, docs) {
            if(err){
                return console.log(err);
            }
            console.log("#10",docs);
            db.close();
        });
});
// ---------------------------------------------10----------------------------------------------



// ---------------------------------------------11----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    // console.log("Connected correctly to server");
    db.collection("posts")
        .find({"author.gender": "female", "author.age":{$lt:40}})
        .count(function (err, docs) {
            if(err){
                return console.log(err);
            }
            console.log("#11",docs);
            db.close();
        });
});
// ---------------------------------------------11----------------------------------------------





// ---------------------------------------------12----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    console.log("Connected correctly to server");
    db.collection("posts")
        .find({$or:[{
            "published": true
        },{
            "tags":{$nin:[{
                "tags":{$size:1}
                },{
                "tags":{$size:2}
                },{
                "tags":{$size:3}
                },{
                "tags":{$size:4}
                },{
                "tags":{$size:5}
            }]}
        }]})
        .count(function (err,docs) {
            if (err) {
                return console.log(err);
            }
            console.log(docs);
            db.close();
        })
});
// ---------------------------------------------12----------------------------------------------







// ---------------------------------------------13----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    // console.log("Connected correctly to server");
    db.collection("posts").deleteMany({"published": false},function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("#13 success");
        db.close();
    })
});
// ---------------------------------------------13----------------------------------------------











// ---------------------------------------------14----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    // console.log("Connected correctly to server");
    db.collection("posts")
        .updateMany({"author.age":{$lt:18}},{$set:{"школата":true}},function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("#14 success");
            db.close();
        })
});
// ---------------------------------------------14----------------------------------------------








// ---------------------------------------------15----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    // console.log("Connected correctly to server");
    db.collection("posts")
        .updateMany({"tags":{$elemMatch:{$eq:"adipisicing"}}},{$set:{"published":false}},function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("#15 success");
            db.close();
        });
});
// ---------------------------------------------15----------------------------------------------






// ---------------------------------------------16----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    // console.log("Connected correctly to server");
    db.collection("posts")
        .updateMany({"tags":{$all:["occaecat","anim"]}},{$set:{"comments":[]}},function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("#16 success");
            db.close();
        });
});
// ---------------------------------------------16----------------------------------------------







// ---------------------------------------------17----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    // console.log("Connected correctly to server");
    db.collection("posts")
        .find({"comments":{$elemMatch:{"author.eyeColor":"blue"}}})
        .count(function (err, docs) {
            if(err){
                return console.log(err);
            }
            console.log("#17",docs);
            db.close();
        })
});
// ---------------------------------------------17----------------------------------------------




// ---------------------------------------------18----------------------------------------------
MongoClient.connect("mongodb://localhost:27017/gsclasses", function (err, db) {
    console.log("Connected correctly to server");
    db.collection("posts")
        .updateMany({"comments":{$elemMatch:{"author.age":{$lt:18}}}},{$set:{"comments":[]}},function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("#18 success");
            db.close();
        });
});
// ---------------------------------------------18----------------------------------------------