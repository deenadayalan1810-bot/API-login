import express from "express"
import iplRoutes from "./routes/Ipl.route.js"

const app = express()


app.get('/', (req, res)=>{
    res.json("hello Users")
})

app.use("/ipl", iplRoutes)

app.listen(5000, ()=>{
    console.log("app running at http://localhost:5000")
})