const express = require('express')
const app = express()
const  { body, validationResult} = require('express-validator')
const bin = require("binary-code");

app.use(express.urlencoded({extended:false}))

//set the template engine ejs
app.set('view engine', 'ejs')


//routes
app.get('/', (req, res) => {
	res.render('index')
})



app.post('/convert', function (req, res){

var plaintxt= req.body.plaintext;
var convertit = req.body.convertedText;

//res.send(`<script>alert('Clicked Successful! Click Ok To open git repo.'); {window.location.href = 'https://github.com/t4nny/B1nCrypti0n';}</script>`)


// for(var i=0; i<plaintxt.length; i++){
//     res.send(plaintxt.charAt(i))
// }

//res.send(plaintxt.split(''))

var arr=new Array (bin.binary(plaintxt))
//res.send(bin.binary(plaintxt).charAt(8).split('').join(' '))

for(var i=0; i<arr.length;i++)
{
    var io = arr[i]
    console.log(io + " ")
}

// arr.forEach(element => {
//     var io = arr[element]
//     console.log(io)
// });
//res.send(bin.text('0101010001100001011011100110111001111001'))

// for (var i=0; i<arr.length;i++) {
//     res.send(arr[i] + "<br>")
//     }

var tmp= bin.binary(plaintxt).split('')
console.log(tmp)

var emparr=new Array();

for(i=0;i<tmp.length;i++){
    var tmp2=tmp[i];
    if(tmp2==0){
       emparr.push("b0nod")
    
    }else{
        emparr.push("b1nod")
    }
}


console.log(emparr)


var emparr2=new Array();
    
    for(i=0;i<emparr.length;i++){
        var tmp3=emparr[i];
        if(tmp3=="b0nod"){
           emparr2.push(0)
        
        }else{
            emparr2.push(1)
        }
    }

    
    var finaldata= emparr2.join(" ")

    console.log(bin.text(finaldata))


})
let port_number = process.env.PORT || 3000;
server=app.listen(port_number, () => console.log("Server is Running on PORT "+ port_number));
