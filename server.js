const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');   //this will convert json format to java script object
const cors = require('cors');

const app = express();

//import routesc

//const postRoutes = require('./routes/posts');


const ResRoutes = require('./routes/postsRes');

const customerRoutes = require('./routes/Customer.routes');
const requestRoutes = require('./routes/Request.routes');
const basicSalaryRoutes = require('./routes/basicSalary');
const income_expenditureRoutes = require('./routes/income_expenditure');

//services-sudaraka
const serviceRoutes = require('./routes/services');
const supplierRoutes = require('./routes/suppliers');



//app middleware
app.use(bodyParser.json());
app.use(cors());


//route middleware

// app.use(postRoutes);
app.use(supplierRoutes);

app.use(ResRoutes);

app.use(customerRoutes);
app.use(requestRoutes);
app.use(basicSalaryRoutes);
app.use(income_expenditureRoutes);
app.use(serviceRoutes);




const PORT = 8000;
//const DB_URL = 'mongodb+srv://twg:twg123@cluster0.g6c3p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const DB_URL = 'mongodb+srv://ITP_users:BmOeCla3ag6huxYm@cluster0.vmcdh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
.then(() =>{
     console.log('DB connected');
})
.catch((err) => console.log('DB connection ERROR',err));



app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});