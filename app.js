
const express = require('express');

const app = express();

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', 'IHM');


app.get("/", (req,res) => {
    res.status(200).render("index");
})

app.get("/services", (req,res) => {
    res.status(200).render("services");
})

app.get("/contact_us", (req,res) => {
    res.status(200).render("contact_us")
})

app.use((req,res) => {
    res.status(404).sendFile("./IHM/error",{root : __dirname});   
})


app.listen(3000);