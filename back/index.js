const express = require('express');
const UserRouter = require("./routers/userRouter");
const FurnitureRouter = require("./routers/furnitureRouter");
const FeedbackRouter = require("./routers/feedbackRouter");
const UtilRouter = require("./routers/utils");  
const cors = require('cors');

const port = 5000;

// initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173']
}));
app.use( '/user', UserRouter );
app.use( '/furniture', FurnitureRouter );
app.use( '/utils', UtilRouter );
app.use( '/feedback', FeedbackRouter );

app.use(express.static('./statics/uploads'));

// route
app.get('/', (req, res) => {
    res.send('Response From Express')
});

app.get('/add', (req, res) => {
    res.send('Response From Add Route')
});

app.get('/getall', (req, res) => {
    res.send('Response From Get All Route')
});

app.get('/getbyid', (req, res) => {
    res.send('Response From Get by Id Route')
});

app.get('/update', (req, res) => {
    res.send('Response From Update Route')
});

app.get('/delete', (req, res) => {
    res.send('Response From Delete Route')
});





app.listen(port, () => {console.log('Server Started..!!');});