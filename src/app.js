const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express()
const allowedOrigins = ['http://localhost:5173', 'https://gyanicodereviewer.netlify.app'];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
        else{
            callback(new Error('Not allowed by CORS'));
        }
    }, // Replace with your frontend URL
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization',
}));
//if not use express.json then body will be undefined
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.use('/ai', aiRoutes);

module.exports = app