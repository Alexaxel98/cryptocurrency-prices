    
    /* Socket front end and dimple(d3) */
    
    
     var socket = io.connect('https://test-alexaxel98.c9users.io');
        socket.on('message', function(data) {
        console.log(data.message);
        console.log(data.type);
        socket.emit('join', {my:'Hello World from client'});
        });
    
    
    
    
    
    /* -------------------------------------------------------------*/
    // Dimple end(D3js)
    
    var svg = dimple.newSvg("body", 800, 600);
    var data = [
      { "Word":"Hello", "Awesomeness":2000 },
      { "Word":"World", "Awesomeness":3000 }
    ];
    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Word");
    chart.addMeasureAxis("y", "Awesomeness");
    chart.addSeries(null, dimple.plot.bar);
    chart.draw();

