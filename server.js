const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');


app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/auth', authRoutes);
app.use('/chat', chatRoutes);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'chat.html'));
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
