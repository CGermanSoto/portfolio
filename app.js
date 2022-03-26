require('dotenv').config()
const express = require('express')
const app = express()


app.use(express.static(__dirname + '/public'))


const port = process.env.PORT

const connect = ()=>{
    try {
        app.listen(port,()=>{
            console.log('Runing')
        })
    } catch (error) {
        console.log(`error n° ${error} ` )
    }
}
connect()