const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
//NEW
const landingPageRouter = require('./routes/landingPage.router');
const leaguePageRouter= require('./routes/leaguePage.router');
const ResultsPageRouter = require('./routes/ResultsPage.router')
const editPageRouter = require('./routes/editPage.router')
const ResultLevelRouter = require('./routes/ResultLevel.router')
const ResultDayRouter = require('./routes/ResultDay.router')
const MulRouter = require('./routes/mul.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
//NEW
app.use('/api/landingPage', landingPageRouter);
app.use('/api/leaguePage', leaguePageRouter)
app.use('/api/resultsPage', ResultsPageRouter)
app.use('/api/editPage', editPageRouter);
app.use('/api/level', ResultLevelRouter);
app.use('/api/day', ResultDayRouter);
app.use('/api/mul', MulRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
