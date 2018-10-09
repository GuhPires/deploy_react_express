const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// create a GET route
app.get('/api', (req, res) => {
  res.send({ express: 'Express connected to React' });
});

// If the app is in Production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "client/build"));

    // Handling SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/client/build/index.html'));
}

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));