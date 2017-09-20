'use strict';

var Cylon = require('cylon');

Cylon.robot({
    name: 'led-robot',
    events: ['toggle'],

    connections: {
        arduino: { adaptor: 'firmata', port: '/dev/tty.usbmodem1411' }
    },

    devices: {
        led13: { driver: 'led', pin: 13 },
        led12: { driver: 'led', pin: 12 },
        led11: { driver: 'led', pin: 11 }
    },

    // Events/Commands To The server From Outside
    // In <-
    commands: function() {
        return {
            turned_toggle_red: this.turnedToggleRedHandler,
            turned_toggle_yellow: this.turnedToggleYellowHandler,
            turned_toggle_green: this.turnedToggleGreenHandler,
            turned_toggle_all: this.turnedToggleAllHandler
        };
    },

    turnedToggleRedHandler: function() {
        if(this.led13){
            this.led13.toggle();
        }
    },

    turnedToggleYellowHandler: function () {
        if(this.led12){
            this.led12.toggle();
        }
    },

    turnedToggleGreenHandler: function () {
        if(this.led11){
            this.led11.toggle();
        }
    },

    turnedToggleAllHandler: function () {
        this.turnedToggleRedHandler();
        this.turnedToggleYellowHandler();
        this.turnedToggleGreenHandler();
    },

    work: function() {
    }
});

// ensure you install the API plugin first:
// $ npm install cylon-api-socket-io
Cylon.api(
    'socketio', {
        host: '0.0.0.0',
        port: '3000'
    });

Cylon.start();