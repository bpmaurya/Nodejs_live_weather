const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');

const port = process.env.PORT || 4001;
const index = require('./routes/index');

const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
  console.log('New client connected'),
  setInterval(() => getApiAndEmit(socket), 4000);
  socket.on('disconnect', () => console.log('Client disconnected'));
});

const getApiAndEmit = async socket => {
  try {
    const res = await axios.get(
      'http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=ddf47f22792be5a972dc728150cefc8f'
    );
    socket.emit('FromAPI',res.data.main.temp);
    socket.emit('API',res.data.main.temp_min);
    socket.emit('max',res.data.main.temp_max);
    socket.emit('city',res.data.name);

  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

server.listen(port, () => console.log(`Listening on port ${port}`));