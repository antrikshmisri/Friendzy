const express = require('express')
const path  = require('path')
const app = express()

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , '/views'))
app.use(express.static(__dirname + '/public'));
app.use('/styles', express.static(__dirname + '/public'));
app.get('/' , (req , res) =>{
    res.render('index')
})

app.listen(5050 , ()=>{
    console.log('listening on port 5050')
})