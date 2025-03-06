const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')

//  ----------Routes-------------
const  adminRoute=require('./routes/Adminroute')
const  productRoute=require('./routes/ProductRoute')
const UserRoute=require('./routes/UserRoute')
//cors is use to share resource form one server to another

app.use(cors());
const bodyparser=require('body-parser');
require('dotenv').config();

mongoose.connect(process.env.DBCONECTION).then(()=>{
    console.log('DB Connected!!!');
    
})
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/admin", adminRoute);
app.use("/product", productRoute);
app.use("/users", UserRoute)
app.use('/Images',express.static('Images'));


let port=process.env.PORT || 8000;

app.listen(8000,()=>{
    console.log(`server run on ${port}` );
    
})