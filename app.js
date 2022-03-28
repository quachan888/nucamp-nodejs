const rect = require('./rectangle');

function solveRect(l, w) {
    console.log(` ################ Solving for rectangle ${l} x ${w} ################`);

    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR: ', err.message);
        } else {
            console.log(`Area of rectangle ${l} x ${w}: ${rectangle.area()}`);
            console.log(`Perimeter of rectangle ${l} x ${w}: ${rectangle.perimeter()}`);
        }
    });
    console.log('This statement is logged after the call to react()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
