const express = require("express")
const path = require("path")
const app = express()
const hbs = require("hbs")
// const h=require("../src/home")
const LogInCollection = require("./mongodb")
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.static('tempelates'))

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))


// hbs.registerPartials(partialPath)


app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/', (req, res) => {
    res.render('login')
})
app.get('/home', (req, res) => {
    res.render('home')
})



// app.get('/home', (req, res) => {
//     res.render('home')
// })

app.post('/signup', async (req, res) => {
    
    // const data = new LogInCollection({
    //     name: req.body.name,
    //     password: req.body.password
    // })
    // await data.save()

    const data = {
        email: req.body.email
        
    }
    await LogInCollection.insertMany([data])
    res.render("home")
})


app.post('/login', async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ email: req.body.email })

        if (check.email === req.body.email) {
            res.render("home")
        }

        else {
            res.send("incorrect email")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
        

    }


})



app.listen(port, () => {
    console.log('port connected');
})