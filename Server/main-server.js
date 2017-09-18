'use strict';

var Cylon = require('cylon');

Cylon.robot({
    name: 'rosie',
    events: ['test'],

    connections: {
        //arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
    },

    devices: {
        //led: { driver: 'led', pin: 13 }
    },

    work: function() {
        every((2).seconds(), function() {
            console.log('workkkkkkkkk');
            this.emit('test', { data: 'test param is over'});
        }.bind(this) ,2000)



        // for this example with sockets
        // we are going to be interacting
        // with the robot using the code in
        // ./**-client.html
    }
});

// ensure you install the API plugin first:
// $ npm install cylon-api-socket-io
Cylon.api(
    'socketio', {
        host: '127.0.0.1',
        port: '3000'
    });

Cylon.start();