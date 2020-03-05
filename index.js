const express = require('express');
const path = require('path')
const app = express();
const file = path.join(__dirname,'/public/views');

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    res.sendFile(`${file}/index.html`);
});
app.get('/estudios',(req,res)=>{
    res.sendFile(`${file}/estudios.html`);
});
app.get('/referencias',(req,res)=>{
    res.sendFile(`${file}/referencias.html`);
});
app.get('/experiencias',(req,res)=>{
    res.sendFile(`${file}/experiencias.html`);
});
app.get('/contactos',(req,res)=>{
    res.sendFile(`${file}/contactos.html`);
});
app.get('/confirmacion',(req,res)=>{
    res.sendFile(`${file}/confirmacion.html`);
});
app.listen(4200,() => {
    console.log("server en post  4200")
})