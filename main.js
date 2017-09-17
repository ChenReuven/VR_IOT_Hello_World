const firstSphereElement = document.querySelector('.first-sphere');
firstSphereElement.addEventListener('mouseenter', function (evt) {
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

const pressAllButtonElement = document.querySelector('.press-all-btn');
pressAllButtonElement.addEventListener('mouseenter', function (evt) {
    pressAllButtonElement.setAttribute('color', 'orange');
    firstSphereElement.setAttribute('color', 'red');
    centerSphereElement.setAttribute('color', 'yellow');
    lastSphereElement.setAttribute('color', 'green');
});
pressAllButtonElement.addEventListener('mouseleave', function () {
    pressAllButtonElement.setAttribute('color', '#ffffff');
    firstSphereElement.setAttribute('color', '#ffffff');
    centerSphereElement.setAttribute('color', '#ffffff');
    lastSphereElement.setAttribute('color', '#ffffff');
});