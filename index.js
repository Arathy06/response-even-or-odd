


var express = require('express')

var app=express()



app.listen(process.env.PORT || 3000,(error)=>{

    if(error)
    {
        console.log("Error occured")
    }
    else
    {
        console.log("Server started")
    }
})

app.get("/",(req,res)=>{

    res.send("This is a program to check number is even odd odd")
})


app.get("/check",(req,res)=>{
    var num=45;

    

    if(num%2==0)
{
    res.send("Even number")
}

else
{
    res.send("Odd number")
}
})

