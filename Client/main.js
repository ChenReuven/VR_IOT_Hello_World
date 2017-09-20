window.onload = function() {

    /* Socket */
    const socket = io('ws://192.168.14.171:3000/api/robots/led-robot');

    socket.on('connect', function () {
        console.log('you have been connected');
    });
    socket.on('disconnect', function () {
        console.log('you have been disconnected');
    });
    socket.on('test', function () {
        console.log('U Get Test message from the server');
    });


    const firstSphereElement = document.querySelector('.first-sphere');
    firstSphereElement.addEventListener('mouseenter', function (evt) {
        firstSphereElement.setAttribute('color', 'red');
        socket.emit('turned_toggle_red');
    });
    firstSphereElement.addEventListener('mouseleave', function () {
        firstSphereElement.setAttribute('color', '#ffffff');
        socket.emit('turned_toggle_red');
    });

    const centerSphereElement = document.querySelector('.center-sphere');
    centerSphereElement.addEventListener('mouseenter', function (evt) {
        centerSphereElement.setAttribute('color', 'yellow');
        socket.emit('turned_toggle_yellow');
    });
    centerSphereElement.addEventListener('mouseleave', function () {
        centerSphereElement.setAttribute('color', '#ffffff');
        socket.emit('turned_toggle_yellow');
    });

    const lastSphereElement = document.querySelector('.last-sphere');
    lastSphereElement.addEventListener('mouseenter', function (evt) {
        lastSphereElement.setAttribute('color', 'green');
        socket.emit('turned_toggle_green');
    });
    lastSphereElement.addEventListener('mouseleave', function () {
        lastSphereElement.setAttribute('color', '#ffffff');
        socket.emit('turned_toggle_green');
    });

    const pressAllButtonElement = document.querySelector('.press-all-btn');
    pressAllButtonElement.addEventListener('mouseenter', function (evt) {
        pressAllButtonElement.setAttribute('color', 'orange');
        firstSphereElement.setAttribute('color', 'red');
        centerSphereElement.setAttribute('color', 'yellow');
        lastSphereElement.setAttribute('color', 'green');
        socket.emit('turned_toggle_all');
    });
    pressAllButtonElement.addEventListener('mouseleave', function () {
        pressAllButtonElement.setAttribute('color', '#ffffff');
        firstSphereElement.setAttribute('color', '#ffffff');
        centerSphereElement.setAttribute('color', '#ffffff');
        lastSphereElement.setAttribute('color', '#ffffff');
        socket.emit('turned_toggle_all');
    });

}