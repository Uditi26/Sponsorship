const mongoose=require("mongoose")

const db1=mongoose.connect("mongodb+srv://uditics21:2Icecreamplease@cluster0.mur6foz.mongodb.net/sponsorship")
// const db2=mongoose.connect("mongodb+srv://uditics21:2Icecreamplease@cluster0.mur6foz.mongodb.net/details")
.then(()=>{
    console.log('mongoose connected 1');
})
.catch((e)=>{
    console.log('failed 1');
})

const logInSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection

// mongoose.connect("mongodb+srv://uditics21:2Icecreamplease@cluster0.mur6foz.mongodb.net/details")
// .then(()=>{
//     console.log('mongoose connected 2');
// })
// .catch((e)=>{
//     console.log('failed 2');
// })

// const sponsors_schema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     poc:{
//         type:String,
//         required:true
//     },
//     mail:{
//         type:String,
//         required:true
//     },
//     contact:{
//         type:Number,
//         required:true
//     },
//     amt:{
//         type:Number,
//         required:true
//     },
//     bms:{
//         type:String,
//         required:true
//     },
//     bmsp:{
//         type:Number,
//         required:true
//     }
// })

// const sponsorship=new db1.model('sponsors',sponsors_schema)
// const LogInCollection=new db2.model('LogInCollection',logInSchema)

// module.exports=LogInCollection

// module.exports={sponsorship,LogInCollection}