var Seven = function() {
  this.size = rInt(8,60);
  this.left = rInt(0,1000)/10;
  this.top = rInt(0,1000)/10;
  this.color = "rgb(" + rInt(0,255) + "," + rInt(0,255) + "," + rInt(0,255) + ")";
};

function rInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateSeven = function(){
  var seven = new Seven();
  var html = "<p style='position:absolute;top:"+seven.top+"%;left:"+seven.left+"%;font-size:"+seven.size+"px;color:"+seven.color+"'>7</p>";
  document.getElementById('body').innerHTML += html;
};

  setInterval(function(){
    if(rInt(0,777)==7){
      generateSeven();
    }
  }, 1);
