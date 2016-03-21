function randomColour() {
            var letters = '0123456789ABCDEF'.split('');
            var colour = '#';
            for (var i=0; i<6; i++)
                {
                    colour = colour + letters[Math.round(Math.random()*15)];
                }
            return colour;
        }
          
        var clickedTime;
        var createdTime;
        var reactionTime;
        
          function makeBox(){
            var time = Math.random();
            time=time*5000;
            setTimeout(function() {
                if(Math.random()>0.5)
                    {
                        document.getElementById("box").style.borderRadius="100px";
                    }
                else {
                    document.getElementById("box").style.borderRadius="0";
                }
                var tmar=Math.random();
                tmar=tmar*300;
                
                var lmar=Math.random();
                lmar=lmar*500;
                
                document.getElementById("box").style.marginTop= tmar +"px";
                document.getElementById("box").style.marginLeft= lmar +"px";
                document.getElementById("box").style.backgroundColor=randomColour();
                document.getElementById("box").style.display="block";
                 createdTime= Date.now();
           }, time);
             
        }
        
            document.getElementById("box").onclick= function() {
                clickedTime= Date.now();
                reactionTime=(clickedTime-createdTime)/1000;
                document.getElementById("time").innerHTML=reactionTime;
            document.getElementById("box").style.display="none"; 
                makeBox();
}  
  makeBox();
    