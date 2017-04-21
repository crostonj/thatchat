module.exports =
    chatSocket =
    function(io) {
        return {
            Init: Init = function() {


                io.sockets.on('connection', function(socket) {



                    socket.on('new message', function(data) {
                        // we tell the client to execute 'new message'
                        socket.broadcast.emit('new message', {
                            username: data.username,
                            message: data.message
                        });
                    });
                    // when the client emits 'add user', this listens and executes
                    socket.on('add user', function(username) {



                        // we store the username in the socket session for this client
                        socket.username = username;
                        socket.emit('login', {
                            username: socket.username
                        });
                        // echo globally (all clients) that a person has connected
                        socket.broadcast.emit('user joined', {
                            username: socket.username
                        });
                    });

                    // socket.on('user joined', function(username) {
                    //     socket.broadcast.emit('user joined', {
                    //         username: data.username
                    //     });
                    // });

                    // when the client emits 'typing', we broadcast it to others
                    socket.on('typing', function() {
                        socket.broadcast.emit('typing', {
                            username: socket.username
                        });
                    });

                    // when the client emits 'stop typing', we broadcast it to others
                    socket.on('stop typing', function() {
                        socket.broadcast.emit('stop typing', {
                            username: socket.username
                        });
                    });
                    socket.on('disconnect', function() {
                        // echo globally that this client has left

                        socket.broadcast.emit('user left', {
                            username: socket.username
                        });
                    });
                });
            }
        };
    };