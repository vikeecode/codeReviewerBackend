const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express()
app.use(cors({
    origin: ['http://localhost:5173',"https://gyanicodereviewer.netlify.app"], // Replace with your frontend URL
    methods: ['GET', 'POST'],
    credentials: true,
}));
//if not use express.json then body will be undefined
app.use(express.json());
app.get('/', (req, res)=>{
   res.send('Hello World'); 
})
app.use('/ai', aiRoutes);

module.exports = app