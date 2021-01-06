# socketio-weather
Real Time data polling using socket-io
This is mocking a real time server by giving the real time weather data for every 10 seconds. 

* Make npm install on both the client and server directories.

* Run the server from socket-io-server. : node app

* Run the client React app. : yarn run start

#
# Some Learnings
Long Polling New

### More information Required:-

* When there is loss of internet on a device, there has to be a way to re-establish the connection.
* Have to maintain, scale the backend infrastructure to incorporate the continuously increasing traffic.
----------------------------------------------------------------------------------------------------------------------------------------

### AJAX:-

* To send req to server, we use ajax without page load. 
* The req is initiated by client and would req/send specific data from/to server.
----------------------------------------------------------------------------------------------------------------------------------------

### Polling:-

* Req the server periodically.
* eg setInterval ajax for every 10 sec
* This is polling as we are continuously asking the server, do you have anything new??

* This is performance hit. As a lot of traffic is going travelling both ways. 
* A lot of clients can req a server simultaneously. When there is no new data, yet the req is happening.
----------------------------------------------------------------------------------------------------------------------------------------

### Push Technology:-

* Server wants to send data to client. 
* Client is not aware that the new data is available. But whenever available with the server, it sends it down to the client.
* Other words, server will only send the data when it is available.
----------------------------------------------------------------------------------------------------------------------------------------

### Long Polling:-

* Client req new data from server.
* But the server does not respond utill there is data available.
* Uptil then, the connection remains open to the server. And client accepts the new data when the server sends it.

* Uses xhr to at client side.
* Server will subscribe to the request and will emit the necessary data.
* Will need some server setup like Node.JS with its event emitter.

* Note: The client still needs to initate a request loop
----------------------------------------------------------------------------------------------------------------------------------------

### Web Sockets:-

* Websocket is a full duplex ( i.e 2 way ) TCP connection.
* Its independent of HTTP req/res cycle.
* Being full duplex, the client can send data to the server, and the server can send data to the client simultaneously without any http requests. 
* Since websockets are much lighter weight, the server is able to handle significantly more websocket connections than http connections.
* The downside is that it is not fully supported across all popular borwsers, as IE 8.
----------------------------------------------------------------------------------------------------------------------------------------

### SocketIO

* Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers.
* io.on method listens to any clientside connection. when client loads the req with SocketIO, a new connection is established
* Then, it will emit a message to every available socket

* good for real time data
* static data needs to be emitted only once. Whereas, dynamic data needs to be emitted on each mutatation.
