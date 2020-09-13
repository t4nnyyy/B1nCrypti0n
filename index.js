const express = require('express')
const app = express()
const  { body, validationResult} = require('express-validator')
app.use(express.urlencoded({extended:false}))

//set the template engine ejs
app.set('view engine', 'ejs')


//routes
app.get('/', (req, res) => {
	res.render('index')
})



app.post('/convert', function (req, res){

var plaintxt= req.body.plaintxt;
var convertit = req.body.convertedText;


})
let port_number = process.env.PORT || 3000;
server=app.listen(port_number, () => console.log("Server is Running on PORT "+ port_number));
