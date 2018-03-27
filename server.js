const express = require('express');

const app = express();

app.get('/api/customers',(req,res)=>{

    const customers = [

        {id:1 ,fistName:'kiran',lastName:'reddy'},
        {id:2 ,fistName:'krishna',lastName:'reddy2'},
        {id:3 ,fistName:'kishore',lastName:'reddy3'},
    ];
    res.json(customers);
});

const port = 5000;
app.listen(port,()=>{
    console.log('server is connected at ' + port);
})