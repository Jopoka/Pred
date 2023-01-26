const express = require("express")
const bodyParser = require("body-parser")
const app = express();

const pageContacts = require("./home/car_sale")
const aboutME = require("./home/about_me")
const shop = require("./home/spare_parts_store")
const sponsors = require("./home/workers")


app.get('/', (request, response) => {
    const student = {
        name: 'Maks',
        surname: "Ifw",
        age: "19",
        group: "IS-22-11",
        floor: "Male"
    }
    res.send("<h1>Привет я заголовок</h1>")
})

app.get('/studend', (request, response) => {
    response.send(shop)
})




app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})