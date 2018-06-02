var MongoClient = require('mongodb').MongoClient;

exports.createConnection = function(){
  MongoClient.connect("mongodb://arvinth:arvinth@ds211088.mlab.com:11088/projector").then(function(client){
    exports.database = client.db("projector");
    console.log("Connected to projector");
  });

}
