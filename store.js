//var http = require('http');
var fs = require('fs');
var Key = "";

/// initialization of data 
var obj = {
    store: []
};
obj.store.push({ Key: "omg", value: "oh my god" });
obj.store.push({ Key: "urw", value: "you are welcome" });


/// For creating a server : 
/*http.createServer(function (req, res) {
 var method = req.method;
 var url = (req.url).split("/");
 var pp = url[1];
 var ele1 = parseInt(url[2]);
 var ele2 = parseInt(url[3]);
  //append data is DONE  //*/

var json = JSON.stringify(obj);
console.log(json);
fs.writeFile('filesys.json', json, 'utf8');
var myArgs = process.argv.slice(2);

console.log('myArgs: ', myArgs.toString());

var jsonFile = require('jsonfile')
var fileName = 'filesys.json';

/// The Functions : 

// add data in json file 
const add = (key, value) => {
    jsonFile.readFile(fileName, function (err, jsonData) {
        if (err) throw err;
        jsonData.store.push({ key: myArgs[1], value: myArgs[2] });
        var json2 = JSON.stringify(jsonData); //convert it back to json
        fs.writeFile('filesys.json', json2, 'utf8');

    });
}
// list data from json file 
const list = () => {
    jsonFile.readFile(fileName, function (err, jsonData) {
        if (err) throw err;
        console.log("Dictionary : " + JSON.stringify(jsonData));
    });
}
// get data from json file 
const get = (key) => {
    jsonFile.readFile(fileName, function (err, jsonData) {
        if (err) throw err;

        console.log(JSON.stringify(jsonData).match(myArgs[1]));

    });
}
const remove = (key) => {
    jsonFile.readFile(fileName, function (err, jsonData) {
        if (err) throw err;

        delete JSON.stringify(jsonData).match(myArgs[1]);

        fs.writeFile('filesys.json', jsonData, 'utf8');
    });
}
// clear data from json file 
const clear = () => {
    var obj3 = {
    };
    obj3.store.push('');
    var json2 = JSON.stringify(obj3);
    fs.writeFile('filesys.json', json2, 'utf8');
}

///For checking the user action :

switch (myArgs[0]) {

    case 'add':
        add();
        break;

    case 'list':
        list();
        break;

    case 'get':
        get();
        break;

    case 'remove':
        remove();
        break;

    case 'clear':
        clear();
        break;

    default:
        console.log('Sorry,this is an order not defined :)');
}