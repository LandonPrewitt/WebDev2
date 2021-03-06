function randColor() {
   
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i=0; i<6; i++) {
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}
            
function changeShape() {
                
    // Get a start size
    var size = Math.floor(Math.random()*200 + 15);

    // Assign Initial Shape
    document.getElementById("shape").style.backgroundColor = randColor();
    document.getElementById("shape").style.width = size;
    document.getElementById("shape").style.height = size;
    if (Math.random() >= 0.5) document.getElementById("shape").style.borderRadius = "50%";
    else document.getElementById("shape").style.borderRadius = "0%";
    document.getElementById("shape").style.opacity = Math.random() + 0.2;
    document.getElementById("shape").style.left = Math.floor(Math.random()*400 + 1);
    document.getElementById("shape").style.top = Math.floor(Math.random()*300 + 1);
}
            
            
var start = new Date().getTime();
var count = 0;
var times = new Array();

// Reload Shape
changeShape(); 

// Remove the shape when clicked
document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";

    var end = new Date().getTime();
    var time = end - start;
    times[count] = time;
    count++;

    // Print Current Time
    var seconds = parseInt(time / 1000, 10);
    var mili = time - seconds*1000;
    document.getElementById("timeText").innerHTML = "Your Time: " + seconds + "." + mili + " seconds";

    // Print Average Time
    var sum = 0;
    for(var i=0; i<count; i++) {
        sum += times[i];
    }
    sum = Math.round(sum/count);
    seconds = parseInt(sum / 1000, 10);
    mili = sum - seconds*1000;
    document.getElementById("avgText").innerHTML = "Your Average: " + seconds + "." + mili + " seconds";

    // Update Shape and Time
    document.getElementById("shape").style.display = "none";
   /* start = new Date().getTime();
    var randTime = Math.floor(Math.random()*2000 + 1);
    while(end-start <= randTime) {
        end = new Date().getTime();
    }
    if(end-start <= randTime) changeShape();
 */   
    changeShape();
    start = new Date().getTime();
    end = new Date().getTime();
    document.getElementById("shape").style.display = "";
}
