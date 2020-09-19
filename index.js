const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");
const bin = require("binary-code");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//set the template engine ejs
app.set("view engine", "ejs");

//routes
app.get("/", urlencodedParser, (req, res) => {
  var convertit = req.body.frm1txtConverted;
  var againPlainText;

  var newconvertit = req.body.frm2txtConverted;
  var newplaintext;

  res.render("index", {
    convertit: convertit,
    againPlain: againPlainText,
    plaintext: againPlainText,

    newconvertit: newconvertit,
    newplaintext: newplaintext,
  });
});

app.post("/Encrypt", urlencodedParser, function (req, res) {
  var plaintxt = req.body.frm1txtPlain;
  var newconvertit = req.body.frm2txtConverted;
  var newplaintext;

  var arr = new Array(bin.binary(plaintxt));

  for (var i = 0; i < arr.length; i++) {
    var io = arr[i];
    //console.log(io + " ");
  }

  var tmp = bin.binary(plaintxt).split("");
  //console.log(tmp);

  var emparr = new Array();

  for (i = 0; i < tmp.length; i++) {
    var tmp2 = tmp[i];
    if (tmp2 == 0) {
      emparr.push("b0nod");
    } else {
      emparr.push("b1nod");
    }
  }

  //console.log(emparr);

  convertit = emparr.join(" ");

  var emparr2 = new Array();

  // console.log(emparr.length)

  for (i = 0; i < emparr.length; i++) {
    var tmp3 = emparr[i];
    if (tmp3 == "b0nod") {
      emparr2.push(0);
    } else {
      emparr2.push(1);
    }
  }

  var finaldata = emparr2.join(" ");
  againPlainText = bin.text(finaldata);
  //console.log(againPlainText);

  res.render("index", {
    convertit: convertit,
    againPlain: againPlainText,
    plaintext: againPlainText,

    newconvertit: newconvertit,
    newplaintext: newplaintext,
  });
});

app.post("/Decrypt", urlencodedParser, function (req, res) {
  var convertit = req.body.frm1txtConverted;
  var newconvertit = req.body.frm2txtConverted;
  var newplaintext;
  var againPlainText;

  var newarr = newconvertit;

  var emparr3 = new Array();
  emparr3 = newarr.split(" ");

  var emparr4 = new Array();

  for (i = 0; i < emparr3.length; i++) {
    var tmp3 = emparr3[i];
    if (tmp3 == "b0nod") {
      emparr4.push(0);
    } else {
      emparr4.push(1);
    }
  }

  //console.log(againPlainText);

  var finaldata = emparr4.join(" ");
  newplaintext = bin.text(finaldata);
  //console.log(newplaintext);
  //console.log(finaldata);
  //console.log(emparr4);
  //console.log("emparr 3 " + emparr3);
  //console.log("new arr " + newarr);
  //console.log("new converted " + newconvertit);

  //console.log("is this wrking");

  res.render("index", {
    convertit: convertit,
    againPlain: againPlainText,
    plaintext: againPlainText,

    newconvertit: newconvertit,
    newplaintext: newplaintext,
  });
});

let port_number = process.env.PORT || 3001;
server = app.listen(port_number, () =>
  console.log("Server is Running on PORT " + port_number)
);
