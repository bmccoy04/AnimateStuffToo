window.shapes = (function(){
    function _go(){
        console.log("Go!");

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(10,0,150,75);

        ctx.moveTo(0,0);
        ctx.lineTo(500,600);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(95,50,40,0,2*Math.PI);
        ctx.strokeStyle = "#FF00EE";
        ctx.stroke();
    }
    return {
        go: _go
    }
})();