require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
//const mongoose = require('mongoose');
//const Course = require('./models/course');
//const User = require('./models/User');
//const authRoutes = require('./routes/authRoutes');
//const courseRoutes = require('./routes/courseRoutes');
const botRoutes = require('./routes/botRoutes');
//const cookieParser = require('cookie-parser');
const fuzz = require('fuzzball');
//const { requireAuth, checkUser, checkTeacher } = require('./middleware/authMiddleware');

// express app
const app = express();
const PORT = process.env.PORT || 3030;

// connect to mongodb
const dbURI = process.env.MONGO_URI;

//mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
//    .then((result) => app.listen(3000))
//    .catch((err) => console.log(err));

// Create a rate limiter for POST requests
const postLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 10 minutes
    max: 50, // Limit each IP to 100 requests per windowMs
    message: "Too many requests, please try again later.",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log('server started on port ${PORT}');
});

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded( { extended: true}));
app.use(morgan('dev'));
app.use(express.json());
app.use(postLimiter);
//app.use(cookieParser());

// routes
app.get('/', (req, res) =>{
    res.render('index', {title: 'Home'})
});
app.get('/test', (req, res) =>{
    res.render('test', {title: 'Home'})
});

// bot routes
app.use(botRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
}); 