const request = require("request");
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const apiKey = "755b45bb7cbba9bf98a9f846e5291876"

// let city = "Chicago"

// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`



app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    let city = req.body.city
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function(err,res,body){

    if(err){
        console.log(`Error: ${err}`)
    } else{
        // console.log(`Body: ${body}`)

        let weather = JSON.parse(body)

        let message = `It is ${weather.main.temp} degrees outside in ${weather.name}`

        console.log(message)



    }


})


})



// request(url, function (err, res, body) {

//     if (err) {
//         console.log(`Error: ${err}`)
//     } else {
//         console.log(`Body: ${body}`)

//         let weather = JSON.parse(body)

//         let message = `It is ${weather.main.temp} degrees outside in ${weather.name}`

//         console.log(message)



//     }


// })


const port = 5000
app.listen(port, () => {
    console.log(`This server is running on ${port}`)
})