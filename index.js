const express = require('express')
const app = express()

//set the template engine ejs
app.set('view engine', 'ejs')


//routes
app.get('/', (req, res) => {
	res.render('index')
})


let port_number = process.env.PORT || 3000;
server=app.listen(port_number, () => console.log("Server is Running on PORT "+ port_number));
