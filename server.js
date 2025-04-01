const express = require('express');

const app = express();
const PORT = 9000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully running and App is listening on port 9000" )
    else 
        console.log("Error occurred, server can't start", error);
    }
);