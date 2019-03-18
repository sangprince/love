window.onload = function(){
  
  var canvas = document.getElementById("canvas"),
      c= canvas.getContext("2d"),
  
      particles = { },
      particleIndex = 0,
      particleNum = 4;
  
      canvas.width = 300;
      canvas.height = 200;
  
      document.body.appendChild(canvas);
  
      
  
  
     function Particle(){
          this.x = canvas.width * Math.random();
          this.y = Math.random();
    
          this.vx = Math.random() * 1 ;
          this.vy = Math.random() * 10 ;
     
         
          particleIndex++;
          particles[particleIndex] = this;
          this.id = particleIndex;
          this.life = 0;
          this.maxLife = Math.random() * 5 + 5;
          this.color = "hsla("+parseInt(Math.random()*360, 10)+",100%,100%,0.5)";
    
    
    
          }
  
     Particle.prototype.draw = function(){
    
          this.x += this.vx;
          this.y += this.vy;
      
         
  
           this.life++;
           if(this.life >= this.maxLife){
         
               delete particles[this.id];
           }
     
           c.fillStyle = this.color;
           c.fillRect(this.x, this.y, Math.random() + 2, Math.random() + 2);
    
      
    
  }
  
  
  
  
  setInterval(function(){
       c.fillStyle = "rgba(0, 0, 0, 0.2)";
       c.clearRect(0, 0, canvas.width, canvas.height);
    
       for ( var i = 0; i < particleNum; i++){
         new Particle();
       }
       for ( var i in particles){
         particles[i].draw();
       }
    
    
    
  }, 30);
  
  
  
};