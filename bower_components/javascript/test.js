    
    /* Socket front end and dimple(d3) */
    var crypt = [];
    var cryptoCoin = []; 
     var socket = io.connect('https://test-alexaxel98.c9users.io');
        socket.on('message', function(data) {
       //console.log(data.type);
       crypt = data;
       console.log(crypt);
        socket.emit('join', {my:'Hello World from client'});
        
        });
    
    
    
    if(crypt.length == 0){
      setTimeout(function(){
        console.log(crypt.type[0]);
        console.log(crypt.type[crypt.type.length -1]);
      
        console.log(crypt.type.length);
      
    
    /* -------------------------------------------------------------*/
    // Dimple end(D3js)
    
    for (var i = 0; i < crypt.type.length ; i++){
        if(!isNaN(crypt.type[i].timestamp)){
            if((crypt.type[i+1] == undefined) || (crypt.type[i].timestamp != crypt.type[i+1].timestamp)){
        cryptoCoin.push({'Timestamp':crypt.type[i].timestamp , 'Price':crypt.type[i].ticker.price})
                
            }
        }
        console.log(cryptoCoin);
    }
    console.log('test');
    
    
var y;
console.log(cryptoCoin);
var svg = dimple.newSvg("body", 1000,1000); 

var chart = new dimple.chart(svg,cryptoCoin);
    //chart.setBounds(60, 30, 510, 305)

chart.addCategoryAxis("x","Timestamp"); 
y = chart.addMeasureAxis("y","Price");
//chart.addLogAxis("y", "Price",5);
y.overrideMin= 600;
chart.addSeries(null, dimple.plot.line); 
chart.draw(); 


    
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

