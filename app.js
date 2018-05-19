'use strict';

const express    = require('express');        
const app        = express();                
const bodyParser = require('body-parser');
const port 	   = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
app.post('/calcResPos', function (req, res) {
  
if(Object.keys(req.body).length === 0 && req.body.constructor === Object || req.body.zone == "" || req.body.x == "" || req.body.y == "" || req.body.direction == "" || req.body.move == "")
    {
      res.json("Please enter valid co-ordinate data.");
    }

  
  var zone = req.body.zone;
  var zoneX = zone.split("")[0];
  var zoneY = zone.split("")[1];
  var xStartPos = req.body.x;
  var yStartPos = req.body.y;
  var startDirection = req.body.direction.toLowerCase();
  var move = req.body.move.toLowerCase().split("");
  var x;
  var y;
  var pos;
  var tempArr = [];

function initMove(){
    x = parseInt(xStartPos);
    y = parseInt(yStartPos);
   pos = startDirection;
      actionCommand();
  }
  

  function actionCommand(){
   for(var a = 0; a < move.length; a++){
    if(move[a] == "m")
      movePos();
    else 
     rotate(move[a]);

   }
   
   if(Math.abs(x) < Math.abs(zoneX) && Math.abs(x) > -Math.abs(zoneX) && Math.abs(y) < Math.abs(zoneY) && Math.abs(y) > -Math.abs(zoneY) ){
     res.json(x.toString()+y.toString()+pos.toUpperCase());
   }else{
    res.json("Co-ordinates out of safe zone.")
   }
  }
 
  
  function movePos(){   
    if(pos == "w" || pos == "e"){
     if(pos == "e") {x++ };
     if(pos == "w") {x-- };
    };

    if(pos == "s" || pos == "n"){
     if(pos == "n") {y++ };
     if(pos == "s") {y-- };
    };

    tempArr.push(x.toString() +y.toString());
  }

  function rotate(d){
   
      if(d == "l" ){

      switch (pos) {
        case "e":
            pos = "n";
            break;
        case "n":
            pos = "w";
            break;
        case "w":
            pos = "s";
            break;
        case "s":
            pos = "e";
            break; 
      }

    }
    if(d == "r"){

       switch (pos) {
        case "w":
            pos = "n";
            break;
        case "n":
            pos = "e";
            break;
        case "e":
            pos = "s";
            break;
        case "s":
            pos = "w";
            break; 
      }
    }
  }

   
    
 initMove();

});


 


app.listen(port);

console.log(`App Runs on ${port}`);