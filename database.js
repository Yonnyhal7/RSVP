var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Jonnyhal:Yonnyhal_07@cluster0-7wpgt.mongodb.net/test?retryWrites=true&w=majority";
var count = 0;
start();

function start() {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        //hi
        var myobj = [{ number: 2, name: "Jonathan Halbrook", numPeople: 4 }];
        // createCol(db, "people");

        // insertDB(db, "people", myobj);
        // var myquery = { name: "Jimmy Nabors" };
        // deleteDoc(db, "people", myquery);

        // selectAll("customers", db);
        var myobj = { name: "Matt Halbrook", numPeople: 3 };
        // console.log(myobj); 
        // myobj.number = 5;
        // var newobj = Object.entries(myobj);
        // console.log(newobj);
        // var newArr = myobj[0]
        // newArr.number = 5;
        // console.log(newArr);
        // myobj = newArr;
        // console.log(myobj);
        findLastAndInsert(db, "people", myobj);

        // selectIDs(db, "people");
        // var dbo = db.db("mydb");
        // var a = dbo.collection("people").find({}, { projection: { _id: 1, name: 1 } }).limit(1).toArray();
        // console.log(a);
        // db.close();
        // dbo.collection("customers").find({}).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     db.close();
        // });
    });
}

function deleteDoc(db, name, query) {
    var dbo = db.db("mydb");
    dbo.collection(name).deleteOne(query, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    })
}

function createCol(db, name) {
    var dbo = db.db("mydb");
    dbo.createCollection(name, function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
}

function findLastAndInsert(db, name, myobj) {
    var dbo = db.db("mydb");
    var a = dbo.collection(name).find({}, { projection: { _id: 0, number: 1 } }).toArray(function(err, result) {
        if (err) throw err;
        insertDB(db, name, newobj);
        db.close();
    });
    return a;
}

function insertDB(db, name, myobj) {
    var dbo = db.db("mydb");
    var newObj = Array.from(myobj);
    dbo.collection(name).insertMany(newObj, function(err, res) {
        if (err) throw err;
        console.log("You added a row!");
        db.close();
    });
}

function selectOne(db, name, query) {
    var dbo = db.db("mydb");
    dbo.collection(name).find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
}

function selectIDs(db, name) {
    var dbo = db.db("mydb");
    dbo.collection(name).find({}, { projection: { _id: 1 } }).toArray(function(err, result) {
        if (err) throw err;
        db.close();
        console.log(result.length);
        count = result.length;
        console.log(count);
    }); // console.log(result.length);
}

function selectAll(name, db) {
    var dbo = db.db("mydb");
    dbo.collection(name).find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
}