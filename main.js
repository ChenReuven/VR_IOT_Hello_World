const firstSphereElement = document.querySelector('.first-sphere');
firstSphereElement.addEventListener('mouseenter', function (evt) {
    console.log(firstSphereElement);
    firstSphereElement.setAttribute('color', 'red');
});
firstSphereElement.addEventListener('mouseleave', function () {
    firstSphereElement.setAttribute('color', '#ffffff');
});

const centerSphereElement = document.querySelector('.center-sphere');
centerSphereElement.addEventListener('mouseenter', function (evt) {
    centerSphereElement.setAttribute('color', 'yellow');
});
centerSphereElement.addEventListener('mouseleave', function () {
    centerSphereElement.setAttribute('color', '#ffffff');
});

const lastSphereElement = document.querySelector('.last-sphere');
lastSphereElement.addEventListener('mouseenter', function (evt) {
    lastSphereElement.setAttribute('color', 'green');
});
lastSphereElement.addEventListener('mouseleave', function () {
    lastSphereElement.setAttribute('color', '#ffffff');
});