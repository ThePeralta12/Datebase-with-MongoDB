var MongoClient = require('mongodb').MongoClient;

//var url = "mongodb://localhost:27017/assignment-05"; //This is being called in Mongod Local
var url = "mongodb+srv://dbuser:123123123@cluster0-jnbfi.mongodb.net/test?retryWrites=true&w=majority" //This is being called in Mongodb Atlas

//This code welcomes you 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Welcome to MongoDB");
  
//This creates the Customers Collection
  // MongoClient.connect(url, function(err, db) {
  // if (err) throw err;
  // var dbo = db.db("assignment-05");
  // dbo.createCollection("Customers", function(err, res) {
  //   if (err) throw err;
  //   console.log("Collection created!");
  //   db.close();
  // });
 // });
  //This inserts a document to the Customers collection
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("assignment-05");
  //   var myobj = { title: "Mr", firstName: "Carl",surname: "Peralta", mobile: "123-123-1234", 
  // email: "carl.peralta.2019@mumail.ie",home_id: "5ea189f18636a26f446ccaef",shipping_id: "5ea189f18636a26f446ccaef" };
  //   dbo.collection("Customers").insertOne(myobj, function(err, res) {
  //     if (err) throw err;
  //     console.log("1 document inserted");
  //     db.close()
  //   });
  // });

  //This inserts a number of documents to the Customers collection
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("assignment-05");
  //   var myobj = [
  //     { title: "Mr", firstName: "Nathan",surname: "Daly", mobile: "123-321-1321", email: "nathan.daly.2019@mumail.ie",home_id:"5ea189f18636a26f446ccaf3",shipping_id:"5ea189f18636a26f446ccaf3"},
  //     { title: "Dr", firstName: "Ronan",surname: "Philip", mobile: "543-123-1245", email: "ronan.philip.2019@mumail.ie",home_id: "5ea189f18636a26f446ccaf0",shipping_id:"5ea189f18636a26f446ccaf0"},
  //     { title: "Mrs", firstName: "Jeana",surname: "Perez", mobile: "087-654-1234", email: "jeana.perez.2019@mumail.ie",home_id: "5ea189f18636a26f446ccaef",shipping_id:"5ea189f18636a26f446ccaef"},
  //     { title: "", firstName: "Josh",surname: "Kobe", mobile: "643-123-732", email: "josh.kobe.2019@mumail.ie",home_id: "5ea189f18636a26f446ccaf0",shipping_id:"5ea189f18636a26f446ccaf0"},
  //     { title: "Mx", firstName: "Alex",surname: "Ghost", mobile: "123-643-1737", email: "alex.ghost.2019@mumail.ie",home_id: "5ea189f18636a26f446ccaef",shipping_id:"5ea189f18636a26f446ccaef"},
  //     { title: "", firstName: "Lana",surname: "Rhodes", mobile: "123-456-7890", email: "lana.rhodes.2019@mumail.ie",home_id: "5ea189f18636a26f446ccaf2",shipping_id:"5ea189f18636a26f446ccaf2"},
  //     { title: "Ms", firstName: "Anna",surname: "Galvin", mobile: "890-567-1234", email: "anna.galvin.2019@mumail.ie",home_id: "5ea189f18636a26f446ccaf4",shipping_id:"5ea189f18636a26f446ccaf4"},
  //     { title: "Miss", firstName: "Pia",surname: "Smith", mobile: "122-133-1222", email: "pia.smith.2019@mumail.ie",home_id: "5ea189f18636a26f446ccaef4",shipping_id:"5ea189f18636a26f446ccaef4"},
  //     { title: "Mr", firstName: "Steve",surname: "Rogers", mobile: "999-999-999", email: "captain.america.2019@mumail.ie",home_id: "5ea189f18636a26f446ccaf3",shipping_id:"5ea189f18636a26f446ccaf3"},
  //     { title: "", firstName: "Tony",surname: "Stark", mobile: "555-555-5555", email: "iron.man.2019@mumail.ie",home_id: "5ea189f18636a26f446ccaf3",shipping_id:"5ea189f18636a26f446ccaf3"}
  //   ];
  //   dbo.collection("Customers").insertMany(myobj, function(err, res) {
  //     if (err) throw err;
  //     console.log("Number of documents inserted: " + res.insertedCount);
  //     db.close();
  //   });
});
//This creates the Home collection
//  MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("assignment-05");
//   dbo.createCollection("Home", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
//This inserts a number of documents to the Home collection
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    var myobj = [
      { Address_Line_1: "123 Yellow Lane", Address_Line_2: "Black Creck", Town: "Holytown", County: "Kildare", eircode: "KD EK24"},
      { Address_Line_1: "12 Black Road", Address_Line_2: "Mount Teem", Town: "Javawood", County: "Galway", eircode: "GW JE23"},
      { Address_Line_1: "51 Belgree Park", Address_Line_2: "", Town: "Blanchardstown", County: "Dublin", eircode: "D15 WE24"},
      { Address_Line_1: "15 Belgree Lane", Address_Line_2: "Tyrrelstown", Town: "Blanchardstown", County: "Dublin", eircode: ""},
      { Address_Line_1: "69 Red Rise", Address_Line_2: "", Town: "Holytown", County: "Galway", eircode: "KD EK21"},
      { Address_Line_1: "420 Blue Cresant", Address_Line_2: "Black Creck", Town: "Holytown", County: "Kildare", eircode: ""},
      { Address_Line_1: "23 Green Grove ", Address_Line_2: "", Town: "Holytown", County: "Kildare", eircode: ""}
    ];
    dbo.collection("Home").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
});
//This creates the Shipping collection
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("assignment-05");
  dbo.createCollection("Shipping", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
//This inserts a number of documents to the Shipping collection
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    var myobj = [
      { Address_Line_1: "123 Yellow Lane", Address_Line_2: "Black Creck", Town: "Holytown", County: "Kildare", eircode: "KD EK24"},
      { Address_Line_1: "12 Black Road", Address_Line_2: "Mount Teem", Town: "Javawood", County: "Galway", eircode: "GW JE23"},
      { Address_Line_1: "51 Belgree Park", Address_Line_2: "", Town: "Blanchardstown", County: "Dublin", eircode: "D15 WE24"},
      { Address_Line_1: "15 Belgree Lane", Address_Line_2: "Tyrrelstown", Town: "Blanchardstown", County: "Dublin", eircode: ""},
      { Address_Line_1: "69 Red Rise", Address_Line_2: "", Town: "Holytown", County: "Galway", eircode: "KD EK21"},
      { Address_Line_1: "420 Blue Cresant", Address_Line_2: "Black Creck", Town: "Holytown", County: "Kildare", eircode: ""},
      { Address_Line_1: "23 Green Grove ", Address_Line_2: "", Town: "Holytown", County: "Kildare", eircode: ""}
    ];
    dbo.collection("Shipping").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
});
//This creates the Phones collection
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("assignment-05");
  dbo.createCollection("Phones", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); 
//This inserts a number of documents to the Phones collection
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    var myobj = [
      { Manufactor: "Apple", Model: "iPhone XS", Price: "650"},
      { Manufactor: "Apple", Model: "iPhone 11", Price: "760"},
      { Manufactor: "Apple", Model: "iPhone 11 Pro Max", Price: "1180"},
      { Manufactor: "Apple", Model: "iPhone XR", Price: "650"},
      { Manufactor: "Samsung", Model: "Galaxy S10 Plus", Price: "830"},
      { Manufactor: "Samsung", Model: "Galaxy S10", Price: "590"},
      { Manufactor: "Sunsung", Model: "Galaxy S11", Price: "650"},
      { Manufactor: "Huawei", Model: "P30", Price: "440"},
      { Manufactor: "Huawei", Model: "P30 Pro", Price: "500"},
      { Manufactor: "Huawei", Model: "P30 Lite", Price: "230"} 
    ];
    dbo.collection("Phones").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
});
//This will delete a document in the Customers collection
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("assignment-05");
  var myquery = { surname: 'Smith',email: 'pia.smith.2019@mumail.ie', };
  dbo.collection("Customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
//THis will udate a document in the Customers collection
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("assignment-05");
  var myquery = { surname: "Kobe" };
  var newvalues = { $set: {title: 'Mx', email:'blackmamba@kobe.com',} };
  dbo.collection("Customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    var myquery = { surname: "Kobe" };
    var newvalues = { $set: {title: 'Mx', email:'blackmamba@kobe.com',} };
    dbo.collection("Customers").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });
 //This updates a document in the Home collection
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    var myquery = { Address_Line_1: "12 Black Road"};
    var newvalues = { $set: {County:'Meath', eircode:'ME 2341'} };
    dbo.collection("Home").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });


//This creates an Orders collection
 MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("assignment-05");
  dbo.createCollection("Orders", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
  //This inserted a document to the Orders collection
 MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    var myobj = {
          Customers:{
            customers_id:"5ea192bea47e963344427fbe",

            Orders:{
              item_id1:"5ea19c3313782260d807511f",
              item_id2:"5ea19c3313782260d8075121",
            }
        }
    };
    dbo.collection("Orders").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close()
    });
  }); 
   //This inserted a document to the Orders collection
   MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    var myobj = {
          Customers : {
            customers_id:"5ea1911370bd735ed4b31b7e",
            Orders:{
              item_id1:"5ea19c3313782260d8075122",
              item_id2:"5ea19c3313782260d8075125",
              item_id3:"5ea19c3313782260d8075126",
            }
        }
    };
    dbo.collection("Orders").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close()
    });
  }); 
  //This inserted a document to the Orders collection
 MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("assignment-05");
    var myobj = {
          Customers:{
            customers_id:"5ea1911370bd735ed4b31b87",
            Orders:{
              item_id1:"5ea19c3313782260d8075120",
            }
        }
    };
    dbo.collection("Orders").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close()
    });
  }); 
