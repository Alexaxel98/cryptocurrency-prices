    
    var date ;
    var chart;
    /* Socket front end and dimple(d3) */
    var crypt = [];
    var cryptoCoin = []; 
    var socket = io.connect('https://test-alexaxel98.c9users.io');
    
        socket.on('message', function(data) {
       //console.log(data.type);
       crypt = data;
       //console.log(crypt);
        socket.emit('join', {my:'Hello World from client'});
        
        });
    
    
    
    if(crypt.length == 0){
      
      setTimeout(function(){
            //console.log(crypt.type[0]);
            //console.log(crypt.type[crypt.type.length -1]);
           // console.log(crypt.type.length);
    
    /* -------------------------------------------------------------*/
    // Dimple start(D3js)
    
            for (var i = 0; i < crypt.type.length ; i++){
                if(!isNaN(crypt.type[i].timestamp)){
                    if((crypt.type[i+1] == undefined) || (crypt.type[i].timestamp != crypt.type[i+1].timestamp)){
                        cryptoCoin.push({'Timestamp': date = new Date(crypt.type[i].timestamp *1000)  , 'Price':crypt.type[i].ticker.price})
                
            }
        }
        //console.log(cryptoCoin);
    }
    //console.log('test');
var y;
var x;



    /* --------------------------------------------------------------*/
    // supporting function for reducing ticks
    
    
     // Pass in an axis object and an interval.
 var cleanAxis = function (axis, oneInEvery) {
     // This should have been called after draw, otherwise do nothing
     if (axis.shapes.length > 0) {
         // Leave the first label
         var del = false;
         // If there is an interval set
         if (oneInEvery > 1) {
             // Operate on all the axis text
             axis.shapes.selectAll("text")
             .each(function (d) {
                 // Remove all but the nth label
                 if (del % oneInEvery !== 0) {
                     this.remove();
                     // Find the corresponding tick line and remove
                     axis.shapes.selectAll("line").each(function (d2) {
                         if (d === d2) {
                             this.remove();
                         }
                     });
                 }
                 del += 1;
             });
         }
     }
 };
    /* --------------------------------------------------------------*/ 
    // D3 DimpleJS continued

console.log(cryptoCoin);
var svg = dimple.newSvg(".container .jumbotron", 1000,1000); 

 chart = new dimple.chart(svg,cryptoCoin);
    chart.setBounds(60, 30, 510, 305)

x=chart.addCategoryAxis("x","Timestamp"); 
y = chart.addMeasureAxis("y","Price");
//chart.addLogAxis("y", "Price",5);
y.overrideMin= 600;

chart.addSeries(null, dimple.plot.line); 
chart.draw();



cleanAxis(x,9);

},500)

    }
   /*     var svg = dimple.newSvg("body", 800, 600);
    var info = [
      { "Word":"hello","Awesomeness":2000 },
      { "Word":"World", "Awesomeness":3000 }
    ];
    var chart = new dimple.chart(svg, info);
    chart.addCategoryAxis("x", "Word");
    chart.addMeasureAxis("y", "Awesomeness");
    chart.addSeries(null, dimple.plot.line);
    chart.draw();
    */

