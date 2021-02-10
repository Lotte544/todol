(function() {
  // global variables
  var width = 400;
  var height = 400;

  var canvas = document.getElementById('sunflower');
  var context = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;

  drawPetals();
  drawFlorets();

  function drawPetals() {
    var x0 = 200;
    var y0 = 200
    var d = 235;

    var x1  = 200 - x0;
    var y1  = 200 - d;
    var c1x = 250 - x0;
    var c1y = 80  - d;
    var c2x = 150 - x0;
    var c2y = 20  - d;
    var x2  = 200 - x0;
    var y2  = 200 - d;

    for (var i = 0; i <= 23; i++) {
        var angle =  Math.PI/180 * 105 * i; // convert degree to radian

        // rotate each point with matrix transformation
        
        // start point
        var xR1     =  Math.cos(angle) * x1 + Math.sin(angle) * y1 + x0;
        var yR1     = -Math.sin(angle) * x1 + Math.cos(angle) * y2 + y0;
        
        // end point
        var xR2     =  Math.cos(angle) * x2 + Math.sin(angle) * y2 + x0;
        var yR2     = -Math.sin(angle) * x2 + Math.cos(angle) * y2 + y0;

        // control point 1
        var c1xR    =  Math.cos(angle) * c1x + Math.sin(angle) * c1y + x0;
        var c1yR    = -Math.sin(angle) * c1x + Math.cos(angle) * c1y + y0;
        
        // control point 2
        var c2xR    =  Math.cos(angle) * c2x + Math.sin(angle) * c2y + x0;
        var c2yR    = -Math.sin(angle) * c2x + Math.cos(angle) * c2y + y0;
        
        
        context.beginPath();
        context.moveTo(xR1,yR1);
        context.bezierCurveTo(c1xR, c1yR, c2xR, c2yR, xR2, yR2);
        
        context.lineWidth = 4;
        context.strokeStyle = "rgb(250, 181, 42)";
        context.stroke();
        
        context.fillStyle = "rgb(255, 247, 0)";
        context.fill();
    }
  }

  function drawFlorets() {
    for (var i = 1; i <= 500; i++) {
        var r = 2.5 * Math.sqrt(i);

        // 137.5 is golden angle, see http://en.wikipedia.org/wiki/Golden_angle for more info
        var angle = Math.PI/180 * 137.5 * i; // convert degree to radian

        var x = r * Math.cos(angle) + 200;
        var y = r * Math.sin(angle) + 200;

        context.beginPath();
        context.arc(x, y, 3, 0, 2 * Math.PI, true);

        context.lineWidth = 2;
        context.strokeStyle = "rgb(92, 78, 57)";
        context.stroke();

        context.fillStyle = "rgb(189, 162, 28)";
        context.fill();
    }
  }
})();   