var test = require('tap').test;
var gamma = require('../');

test('integrate', function (t) {
    // gamma(z) = integral(0, inf, e^(-t)*t^(z - 1))
    
    var zs = [ 0.84, 1.31, 2.54, 3.01, 5.2, 6.1 ];
    
    zs.forEach(function (z) {
        // integration by rectangles
        var res = 0;
        var dx = 0.0001;
        for (var x = 0.000001; x < 40; x += dx) {
            res += Math.exp(-x) * Math.pow(x, z - 1) * dx;
        }
        
        t.equal(
            Math.round(res * 10) / 10,
            Math.round(gamma(z) * 10) / 10,
            'z = ' + z
        );
    });
    
    t.end();
});
