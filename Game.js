



var gameState=0
var LBback,LBfront,l=1,b=1,roboto,per,qwerty,bgMusic,z,zeq,c,raleway,s,t,w,p,e
var rc=220,gc=220,bc=220,sx=1510,tx=1510,wx=1510,px=1510,ex=1510


var timer=120,x=650,y=0,next=false

function preload(){
 roboto=loadFont("Roboto-Light.ttf")
 raleway=loadFont("Raleway-Regular.ttf")
 bgMusic=loadSound("bgMusic.mp3")


 s=loadImage("square.png")
 t=loadImage("triangle.png")
 w=loadImage("wall.png")
 p=loadImage("pl.png")
 e=loadImage("exit.png")


}

function setup(){
  createCanvas(1500,700)
  c1=color(0,0,0)
  c2=color(255,255,255)
  per=1
  z=0
 zeq=true
 c=0
 
}

function draw(){
 if(gameState===0){
  background(220)
  
  rectMode(CENTER)
  noStroke()
  fill(180)
  LBback=rect(750,500+c,300,30,50)
  noStroke()
 
  
  if(l<50){
    fill(157,21,70)
  }else if(l>49 && l<100){
    fill(131,43,101)
  }else if(l>99 && l<150){
    fill(107,63,131)
  }else if(l>149 && l<200){
    fill(82,83,159)
  }else if(l>199 && l<250){
    fill(28,130,226)
  }else if(l>249 && l<300){
    fill(4,150,255)
  }
  if(l===300){
    fill(4,150,255)
  }



  if(per<100){
    per=per+0.32
  //per=per+1.5
  }
 

  


  LBfront=rect(600+b,500+c,l,30,50)
  if(l<300){
  l=l+1
  b=b+0.5
  }
  fill(220)
  textFont(roboto)
  textSize(15)
  if(z<=400){
  text(round(per)+"%",590+b,505+c)
  }else{
    text('PLAY',590+b,505+c)
  }


 if(round(per)===100){

  fill(157,21,70)
  textSize(80)
  text("S",600-50,-50+z)
  fill(144,32,85)
  text("Q",645-50,-50+z)
  fill(128,46,105)
  text("U",690-50,-50+z)
  fill(112,59,125)
  text("A",735-50,-50+z)
  fill(93,76,148)
  text("R",780-50,-50+z)
  fill(77,89,168)
  text("A",825-50,-50+z)
  fill(61,102,186)
  text("N",870-50,-50+z)
  fill(45,115,205)
  text("G",915-50,-50+z)
  fill(29,129,255)
  text("L",960-50,-50+z)
  fill(4,150,255)
  text("E",1000-50,-50+z)

  if(zeq===true){
  if(z<400){
    z=z+1.5
  }
}else{
  z=z+2
  c=c+2
}


 }

 if(c>500){
  resizeCanvas(1,1)
clear ()
bgMusic.play()
bgMusic.loop()
gameState=1
}



}


if(gameState===1){
  resizeCanvas(1500,700)
  background(220)


// textSize(15)
 
  if(frameCount%30===0){
    timer=timer-1
  }

  if(timer%2===0){
   fill(157,21,70)
  }else{
   fill(4,150,255)
  }
  if(timer===0){
    timer=120
  }
 textSize(80)
textFont(roboto)
  text("INSTRUCTIONS",x-150,y)
  if(y<100){
 y=y+2
  }

if(y==100){
textFont(raleway)
 fill(rc,gc,bc)
 if(rc!==0){
     rc=rc-1
     gc=gc-1
     bc=bc-1
 }
textSize(25)

 text("Use WSAD to control square",75,175)
 text("Use ARROWS to control triangle",75,275)
 text("To teleport, get in front of teleporters and press ENTER",75,375)
 text("To open different types of WALLS press BUTTONS by standing on top of them",75,475)
 text("To continue to the next level, collect all the stars and proceed to the EXIT, their are a total of 5 levels",75,575)
 text("You can't retry in the last level",75,675)


 if(timer%2===0){
    fill(180,180,180)
   }else{
    fill(0,0,0)
   }

text("<< press anywhere to continue >>",600,650)
  
image(s,sx,125)
image(t,tx,225)
image(p,px,325,75,75)
image(w,wx,425,100,75)
image(e,ex,535,100,50)

if(sx!==425){
    sx=sx-5
}
if(tx!==455){
    tx=tx-5
}
if(px!==730){
    px=px-5
}
if(wx!==1000){
    wx=wx-5
}
if(ex!==1250){
    ex=ex-5
}
}
  if(next===true){
    resizeCanvas(1,1)
    clear ()
    gameState=2
  }

}



























if(gameState===2){
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
//starting matter.js
let engine = Matter.Engine.create();
let Events = Matter.Events;
let Bodies = Matter.Bodies;
let Body=Matter.Body;
let Detecter=Matter.Detector;
let Bounds=Matter.Bounds;
let Composites=Matter.Composites;


//starting render
let render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1500,
      height: 700, 
      wireframes: false,
      background: 'rgb(220,220,220)',
      hasBounds:true
  }
});
var canDrag = Matter.Body.nextGroup([isNonColliding=false]);
//starting mouse constraint
let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
          render: {visible: false}
      },
    //   collisionFilter:{
    //       category:0x0016,
    //       mask:200
      
    //   }
  });



render.mouse = mouse;


/////back


resetBtn=Matter.Bodies.circle(150,50,20,{
    render: { 
        sprite:{ 
            texture: '2.png'
        }
    },
    isStatic:true,
    collisionFilter:{
          category:0x0016,
          mask:200
     
      }
})











// limity jump height and can only jump while on ground

let squareContact=false
let triangleContact=false

///////////////////////////////////////// points
let point=0



// ///////////////////////////////////////////////// buttons


bn1=Matter.Bodies.trapezoid(1350,575,40,20,0.1,{
    isStatic:true,
    chamfer:1,
    friction:1,
    render: {
      fillStyle: 'rgb(0,137,255)',
     
  }
  })

bn2=Matter.Bodies.trapezoid(527,220,40,20,0.1,{
  isStatic:true,
  chamfer:1,
  friction:1,
  render: {
    fillStyle: 'rgb(255,247,0)',
   
}
})


bn3=Matter.Bodies.trapezoid(1075,220,40,20,0.1,{
    isStatic:true,
    chamfer:1,
    friction:1,
    render: {
      fillStyle: 'rgb(255,145,0)',
     
  }
  })

  Matter.World.add(engine.world,[bn1,bn2,bn3])


///////////////////////////////////////////////// walls



w1 = Matter.Bodies.rectangle(750,640,1500,120,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w2 = Matter.Bodies.rectangle(150,480,300,200,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w3 = Matter.Bodies.rectangle(600,300,300,150,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w4 = Matter.Bodies.rectangle(650,50,100,150,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w5 = Matter.Bodies.rectangle(1185,300,350,150,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});




Matter.World.add(engine.world,[w1,w2,w3,w4,w5])





///////////////////////////////////////////////// Cwalls

Cw1=Matter.Bodies.rectangle(150,370,350,25,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(255,0,68)'
       
    }
})

//1
Cw2=Matter.Bodies.rectangle(220,480,150,25,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(0,137,255)'
       
    }
})

Cw3=Matter.Bodies.rectangle(520,380,100,30,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(0,255,255)'
       
    }
})
//3
Cw4=Matter.Bodies.rectangle(650,175,30,100,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(255,145,0)'
       
    }
})
//2//565
Cw5=Matter.Bodies.rectangle(880,565,250,30,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(255,247,0)'
       
    }
})
//1
Cw6=Matter.Bodies.rectangle(525,280,150,25,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(0,137,255)'
       
    }
})

Cw7=Matter.Bodies.rectangle(1300,220,80,25,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(255,0,145)'
       
    }
})

////////////////////////////////////// covers
co1=Matter.Bodies.rectangle(220,480,160,40,{
    isStatic:true,
    render: {
        fillStyle: 'rgb(180,180,180)'
    }
})

co2=Matter.Bodies.rectangle(520,360,110,30,{
    isStatic:true,
    render: {
        fillStyle: 'rgb(180,180,180)'
    }
})

co3=Matter.Bodies.rectangle(650,70,40,110,{
    isStatic:true,
    render: {
        fillStyle: 'rgb(180,180,180)'
    }
})
co4=Matter.Bodies.rectangle(530,280,160,30,{
    isStatic:true,
    render: {
        fillStyle: 'rgb(180,180,180)'
    }
})

co5=Matter.Bodies.rectangle(1300,238,80,25,{
    isStatic:true,
    render: {
        fillStyle: 'rgb(180,180,180)'
    }
})

/////////////////////////////////////////// points

s1=Matter.Bodies.circle(100,230,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s2=Matter.Bodies.circle(695,170,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s3=Matter.Bodies.circle(1425,300,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})


Matter.World.add(engine.world,[s1,s2,s3])



// ///////////////////////////////////////////////// making square and triangle


let square=Matter.Bodies.rectangle(600,500,40,40,{
  mass:1
})
let triangle=Matter.Bodies.polygon(1200,500,3,27.5,{
  mass:1,
})

///////////////////////////////////////////////// exit


e=Matter.Bodies.rectangle(1200,160,45,45,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'exit.png',
           xScale: 0.1,
           yScale: 0.1
       }
   }
})

Matter.World.add(engine.world,[e])

///////////////////////////////////////////////// adding edges

e1=Matter.Bodies.rectangle(-10,350,20,700,{
    isStatic:true
})

e2=Matter.Bodies.rectangle(1510,350,20,700,{
    isStatic:true
})
e3=Matter.Bodies.rectangle(750,-10,1500,20,{
    isStatic:true
})




// ///////////////////////////////////////////////// key function

var keys = [];
document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
 
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});



// ///////////////////////////////////////////////// win blocks
// //10,250
wb1=Bodies.rectangle(-75,250,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(4,150,255)',
  }
})
Matter.Body.rotate(wb1,-2)

wb2=Bodies.rectangle(1575,250,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(216,17,89)',
  }
})
Matter.Body.rotate(wb2,2)


// ////////////////////////////////////////////////// counters for winning

let win=false



counter=0

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////level 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let square2Contact=false
let triangle2Contact=false

///////////////////////////////////////// point2s
let point2=0



// ///////////////////////////////////////////////// buttons

bn1_2=Matter.Bodies.trapezoid(150,1345,40,20,0.1,{
    isStatic:true,
    chamfer:1,
    friction:1,
    render: {
      fillStyle: 'rgb(1,38,34)',
     
  }
  })

bn2_2=Matter.Bodies.trapezoid(1180,820,40,20,0.1,{
  isStatic:true,
  chamfer:1,
  friction:1,
  render: {
    fillStyle: 'rgb(0,59,54)',
   
}
})


bn3_2=Matter.Bodies.trapezoid(600,940,40,20,0.1,{
    isStatic:true,
    chamfer:1,
    friction:1,
    render: {
      fillStyle: 'rgb(233,138,21)',
     
  }
  })


bn4_2=Matter.Bodies.trapezoid(1120,820,40,20,0.1,{
    isStatic:true,
    chamfer:1,
    friction:1,
    render: {
      fillStyle: 'rgb(89,17,77)',
     
  }
  })


bn5_2=Matter.Bodies.trapezoid(360,920,40,20,0.1,{
    isStatic:true,
    chamfer:1,
    friction:1,
    render: {
      fillStyle: 'rgb(187,68,48)',
     
  }
  })


  

  


// ///////////////////////////////////////////////// walls



w1_2 = Matter.Bodies.rectangle(400,1380,1000,60,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w2_2 = Matter.Bodies.rectangle(720,1355,250,200,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w2_2,-0.65)

w3_2 = Matter.Bodies.rectangle(915,1300,310,200,{
    isStatic:true,
   
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w4_2 = Matter.Bodies.rectangle(1400,1310,310,220,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w5_2 = Matter.Bodies.rectangle(1070,1310,20,220,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w6_2 = Matter.Bodies.rectangle(290,1075,700,45,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w7_2 = Matter.Bodies.rectangle(515,1020,250,150,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w8_2 = Matter.Bodies.trapezoid(700,1020,260,110,0.5,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w9_2 = Matter.Bodies.rectangle(415,940,300,30,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w10_2 = Matter.Bodies.trapezoid(562,943,30,30,0.5,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w11_2 = Matter.Bodies.trapezoid(638,963,30,30,0.5,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w12_2 = Matter.Bodies.rectangle(50,875,200,160,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w13_2 = Matter.Bodies.rectangle(1100,910,80,125,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w14_2 = Matter.Bodies.polygon(1135,891,3,82,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w14_2,0.53)

w15_2 = Matter.Bodies.trapezoid(1125,840,300,30,0.1,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////45-45,55,55


 
///////////////////////////////////////////////// tele

tele1_2 = Matter.Bodies.rectangle(950,1168,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl.png',
            xScale: 0.45,
            yScale: 0.45
        }
    }   
})

tele2_2 = Matter.Bodies.rectangle(50,1021,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl.png',
            xScale: 0.45,
            yScale: 0.45
        }
    }   
})

tele3_2 = Matter.Bodies.rectangle(450,890,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl2.png',
            xScale: 0.35,
            yScale: 0.35
        }
    }   
})

tele4_2 = Matter.Bodies.rectangle(1230,790,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl2.png',
            xScale: 0.35,
            yScale: 0.35
        }
    }   
})

tele1_2.collisionFilter.mask=200
tele1_2.collisionFilter.category=0x0008
tele2_2.collisionFilter.mask=200
tele2_2.collisionFilter.category=0x0008
tele3_2.collisionFilter.mask=200
tele3_2.collisionFilter.category=0x0008
tele4_2.collisionFilter.mask=200
tele4_2.collisionFilter.category=0x0008



///////////////////////////////////////////////// rotor_2_2

rotor_2=Matter.Bodies.rectangle(775,1140,20,110,{
    isStatic:true,
    chamfer:30,
    render: {
        fillStyle: 'rgb(255,188,66)'
       
    }

})


var options = {
    bodyA: rotor_2,
    pointB: {x:775,y:1140},
    stiffness: 0.04,
    length: 10
}

sling_2 = Matter.Constraint.create(options);


// ///////////////////////////////////////////////// Cwalls


// //10,250
Cw1_2=Matter.Bodies.rectangle(207.5,935,110,25,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(1,38,34)'
       
    }
})
//1
Cw2_2=Matter.Bodies.rectangle(700,910,25,150,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(0,59,54)'
       
    },
    angle:-0.5
})

Cw3_2=Matter.Bodies.rectangle(520,870,25,150,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(233,138,21)'
       
    }
})
// //3
Cw4_2=Matter.Bodies.rectangle(80,810,135,25,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(89,17,77)'
       
    }
})
// //2//565
Cw5_2=Matter.Bodies.rectangle(1400,1220,150,30,{
    chamfer:10,
    isStatic:true,
    render: {
        fillStyle: 'rgb(187,68,48)'
       
    }
})



// ////////////////////////////////////// covers
co1_2=Matter.Bodies.rectangle(775,1140,150,150,{
    isStatic:true,
    render: {
        fillStyle: 'rgb(220,220,220)'
    }
})

co1_2.collisionFilter.mask=200
co1_2.collisionFilter.category=0x00016

// /////////////////////////////////////////// point2s

s1_2=Matter.Bodies.circle(600,870,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s2_2=Matter.Bodies.circle(895,1020,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s3_2=Matter.Bodies.circle(1425,1000,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})




// // ///////////////////////////////////////////////// making square2 and triangle2


let square2=Matter.Bodies.rectangle(200,1000,40,40,{
  mass:1,
  render: {
    fillStyle: 'rgb(4,150,255)'
   
}
})
let triangle2=Matter.Bodies.polygon(400,1200,3,27.5,{
  mass:1
})

// ///////////////////////////////////////////////// exit


e_2=Matter.Bodies.rectangle(50,720,45,45,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'exit.png',
           xScale: 0.1,
           yScale: 0.1
       }
   }
})

// ///////////////////////////////////////////////// adding edges

e1_2=Matter.Bodies.rectangle(-10,1050,20,700,{
    isStatic:true
})

e2_2=Matter.Bodies.rectangle(1510,1050,20,700,{
    isStatic:true
})
e3_2=Matter.Bodies.rectangle(750,-710,1500,20,{
    isStatic:true
})




// // ///////////////////////////////////////////////// key function

var keys = [];
document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
 
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});



// // ///////////////////////////////////////////////// win_2 blocks
// // //10,250
wb1_2=Bodies.rectangle(-75,950,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(4,150,255)',
  }
})
Matter.Body.rotate(wb1_2,-2)

wb2_2=Bodies.rectangle(1575,950,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(216,17,89)',
  }
})
Matter.Body.rotate(wb2_2,2)


// // ////////////////////////////////////////////////// counters for doors and walls

let win_2=false

counter_2=0






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////level 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// limity jump height and can only jump while on ground

let squareContact_3=false
let triangleContact_3=false

///////////////////////////////////////// points
let point_3=0


// ///////////////////////////////////////////////// buttons

bn1_3=Matter.Bodies.trapezoid(150,2045,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(10,63,81)',
     
  }
  })

bn2_3=Matter.Bodies.trapezoid(50,1885,40,20,0.3,{
  isStatic:true,
  chamfer:0,
  friction:1,
  render: {
    fillStyle: 'rgb(26,113,126)',
   
}
})


bn3_3=Matter.Bodies.trapezoid(1200,2045,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(26,144,168)',
     
  }
  })


bn4_3=Matter.Bodies.trapezoid(100,1705,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(243,205,166)',
     
  }
  })





// // ///////////////////////////////////////////////// walls



w1_3 = Matter.Bodies.rectangle(750,2080,1500,60,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w2_3 = Matter.Bodies.rectangle(180,1900,375,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w3_3 = Matter.Bodies.rectangle(450,1982,250,20,{
    isStatic:true,  
   
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w3_3,0.75)



w4_3 = Matter.Bodies.rectangle(125,1730,250,40,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w5_3 = Matter.Bodies.rectangle(350,1755,275,30,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w6_3 = Matter.Bodies.polygon(220,1760,3,35,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w6_3,1.05)

w7_3 = Matter.Bodies.polygon(265,1740,3,35,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w7_3,1.05)
w8_3 = Matter.Bodies.polygon(488,1750,3,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w8_3,0.55)

w9_3 = Matter.Bodies.rectangle(150,1550,300,30,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w10_3 = Matter.Bodies.trapezoid(1300,1800,380,70,0.2,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w10_3,3.15)

w11_3 = Matter.Bodies.trapezoid(1300,1865,190,30,0.35,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w11_3,3.9)
w12_3 = Matter.Bodies.rectangle(1379,1748,220,50,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w13_3 = Matter.Bodies.polygon(1307,1702,3,45,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w13_3,-0.5)

w14_3 = Matter.Bodies.rectangle(1368,1702,120,90,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});


w15_3 = Matter.Bodies.trapezoid(1422,1520,220,30,0.3,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w16_3 = Matter.Bodies.trapezoid(290,1440,220,30,0.3,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w16_3,0.5)

w17_3 = Matter.Bodies.trapezoid(375,1395,220,30,0.3,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});
Matter.Body.rotate(w17_3,-1.5)

 
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////45-45,55,55


 
// ///////////////////////////////////////////////// tele

tele1_3 =  Matter.Bodies.rectangle(1200,1735,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl.png',
            xScale: 0.45,
            yScale: 0.45
        }
    }   
})

tele2_3 =  Matter.Bodies.rectangle(50,2020,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl.png',
            xScale: 0.45,
            yScale: 0.45
        }
    }   
})

tele3_3 =  Matter.Bodies.rectangle(50,1500,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl2.png',
            xScale: 0.35,
            yScale: 0.35
        }
    }   
})

tele4_3 =  Matter.Bodies.rectangle(600,2015,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl2.png',
            xScale: 0.35,
            yScale: 0.35
        }
    }   
})

tele1_3.collisionFilter.mask=200
tele1_3.collisionFilter.category=0x0008
tele2_3.collisionFilter.mask=200
tele2_3.collisionFilter.category=0x0008
tele3_3.collisionFilter.mask=200
tele3_3.collisionFilter.category=0x0008
tele4_3.collisionFilter.mask=200
tele4_3.collisionFilter.category=0x0008




// // ///////////////////////////////////////////////// Cwalls


// // //10,250
Cw1_3=Matter.Bodies.rectangle(1355,1985,25,150,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(10,63,81)'
       
    }
})
// //1
Cw2_3=Matter.Bodies.rectangle(1350,1590,25,140,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(26,113,128)'
       
    },

})

Cw3_3=Matter.Bodies.rectangle(150,1470,25,140,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(26,144,168)'
       
    }
})


/////////////////////////////////////////// last bridge



b1_3=Matter.Bodies.rectangle(500,1400,150,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(243,205,166)'
       
    }

})

b1c1_3 = Matter.Constraint.create({
    pointA: {x:440,y:1400},
    bodyB: b1_3,
    pointB:{x:-60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });

b1c2_3 = Matter.Constraint.create({
    pointA: {x:560,y:1400},
    bodyB: b1_3,
    pointB:{x:+60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 }); 
///////////////////////////////////////////
 b2_3=Matter.Bodies.rectangle(650,1400,150,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(243,205,166)'
       
    }

})

b2c1_3 = Matter.Constraint.create({
    pointA: {x:590,y:1400},
    bodyB: b2_3,
    pointB:{x:-60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });

b2c2_3 = Matter.Constraint.create({
    pointA: {x:710,y:1400},
    bodyB: b2_3,
    pointB:{x:+60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });  
///////////////////////////////////////////
 b3_3=Matter.Bodies.rectangle(800,1400,150,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(243,205,166)'
       
    }

})

b3c1_3 = Matter.Constraint.create({
    pointA: {x:740,y:1400},
    bodyB: b3_3,
    pointB:{x:-60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });

b3c2_3 = Matter.Constraint.create({
    pointA: {x:860,y:1400},
    bodyB: b3_3,
    pointB:{x:+60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 }); 
///////////////////////////////////////////
b4_3=Matter.Bodies.rectangle(950,1400,150,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(243,205,166)'
       
    }

})

b4c1_3 = Matter.Constraint.create({
    pointA: {x:890,y:1400},
    bodyB: b4_3,
    pointB:{x:-60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });

b4c2_3 = Matter.Constraint.create({
    pointA: {x:1010,y:1400},
    bodyB: b4_3,
    pointB:{x:+60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });  
///////////////////////////////////////////
b5_3=Matter.Bodies.rectangle(1100,1400,150,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(243,205,166)'
       
    }

})

b5c1_3 = Matter.Constraint.create({
    pointA: {x:1040,y:1400},
    bodyB: b5_3,
    pointB:{x:-60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });

b5c2_3 = Matter.Constraint.create({
    pointA: {x:1160,y:1400},
    bodyB: b5_3,
    pointB:{x:+60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 }); 
///////////////////////////////////////////
b6_3=Matter.Bodies.rectangle(1250,1400,150,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(243,205,166)'
       
    }

})

b6c1_3 = Matter.Constraint.create({
    pointA: {x:1190,y:1400},
    bodyB: b6_3,
    pointB:{x:-60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });

b6c2_3 = Matter.Constraint.create({
    pointA: {x:1310,y:1400},
    bodyB: b6_3,
    pointB:{x:+60,y:0},
    stiffness: 0.004,
    length: 0,
    render:{
        visible:true
    }
 });  



////////////////////////////////////////////rotor
//(247,62,59)(229,221,200)


r1_3=Matter.Bodies.rectangle(750,1900,175,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(247,62,59)'
       
    }

})



 con1_3 = Matter.Constraint.create({
    pointA: {x:750,y:1900},
    bodyB: r1_3,
    stiffness: 0.004,
    length: 10,
    render:{
        visible:true
    }
 });

 r2_3=Matter.Bodies.rectangle(750,1700,175,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: 'rgb(255,255,255)'
       
    }

})



 con2_3 = Matter.Constraint.create({
    pointA: {x:750,y:1700},
    bodyB: r2_3,
    stiffness: 0.004,
    length: 10,
    render:{
        visible:true
    }
 });





// // /////////////////////////////////////////// points
s1_3=Matter.Bodies.circle(400,2000,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s2_3=Matter.Bodies.circle(200,1475,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s3_3=Matter.Bodies.circle(1450,1700,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})





// // // ///////////////////////////////////////////////// making square and triangle


let square_3=Matter.Bodies.rectangle(1400,2000,40,40,{
  mass:1,
  render: {
    fillStyle: 'rgb(4,150,255)'
   
}
})
let triangle_3=Matter.Bodies.polygon(350,1700,3,27.5,{
  mass:1,
  render: {
    fillStyle: 'rgb(216,17,89)'
   
}
})

// // ///////////////////////////////////////////////// exit


e_3=Matter.Bodies.rectangle(1450,1420,45,45,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'exit.png',
           xScale: 0.1,
           yScale: 0.1
       }
   }
})


// // ///////////////////////////////////////////////// adding edges

e1_3=Matter.Bodies.rectangle(-10,1750,20,700,{
    isStatic:true
})

e2_3=Matter.Bodies.rectangle(1510,1750,20,700,{
    isStatic:true
})
e3_3=Matter.Bodies.rectangle(750,1390,1500,20,{
    isStatic:true
})




// // // ///////////////////////////////////////////////// key function

var keys = [];
document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
 
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});



// // // ///////////////////////////////////////////////// win blocks
// // // //10,250
wb1_3=Bodies.rectangle(-75,1650,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(4,150,255)',
  }
})
Matter.Body.rotate(wb1_3,-2)

wb2_3=Bodies.rectangle(1575,1650,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(216,17,89)',
  }
})
Matter.Body.rotate(wb2_3,2)


// // // ////////////////////////////////////////////////// counters for doors and walls

 let win_3=false

 let counter_3=0
 let counterB_3=0





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////level 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// limity jump height and can only jump while on ground

let squareContact_4=false
let triangleContact_4=false

// ///////////////////////////////////////// points
 let point_4=0


// // ///////////////////////////////////////////////// buttons
//(93,108,137),(54,214,231),(254,176,106),(255,255,255),(255,39,104),(251,229,200)
bn1_4=Matter.Bodies.trapezoid(50,2675,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(93,108,137)',
     
  }
  })

bn2_4=Matter.Bodies.trapezoid(400,2752,40,20,0.3,{
  isStatic:true,
  chamfer:0,
  friction:1,
  render: {
    fillStyle: 'rgb(54,214,231)',
   
}
})


bn3_4=Matter.Bodies.trapezoid(800,2752,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(254,176,106)',
     
  }
  })


bn4_4=Matter.Bodies.trapezoid(1100,2752,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(219,31,72)',
     
  }
  })

bn5_4=Matter.Bodies.trapezoid(1300,2675,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(255,255,255)',
     
  }
  })  

bn6_4=Matter.Bodies.trapezoid(220,2345,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(255,39,104)',
     
  }
  })    

bn7_4=Matter.Bodies.trapezoid(850,2180,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(251,229,200)',
     
  }
  })  

bn8_4=Matter.Bodies.trapezoid(1000,2252,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(103,89,94)',
     
  }
  })  
// 

// // // ///////////////////////////////////////////////// walls



w1_4 = Matter.Bodies.rectangle(750,2780,1500,40,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w2_4 = Matter.Bodies.trapezoid(125,2725,500,80,0.5,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w3_4 = Matter.Bodies.trapezoid(1375,2725,500,80,0.5,{
    isStatic:true,  
   
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w4_4 = Matter.Bodies.rectangle(200,2160,20,150,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:-0.4
});

w5_4 = Matter.Bodies.rectangle(200,2290,20,150,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0.4
});

w6_4 = Matter.Bodies.rectangle(200,2420,20,150,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:-0.4
});

w7_4 = Matter.Bodies.trapezoid(210,2510,100,20,0.4,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:-0.6
});

w8_4 = Matter.Bodies.trapezoid(1350,2640,140,20,0.4,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:-1.57
});

w9_4 = Matter.Bodies.trapezoid(350,2520,250,20,0.25,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
 
});

w10_4 = Matter.Bodies.trapezoid(475,2486,100,20,0.25,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:-0.9
});

w11_4 = Matter.Bodies.trapezoid(820,2520,250,20,0.25,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
 
});

w12_4 = Matter.Bodies.trapezoid(695,2486,100,20,0.25,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0.9
});

w13_4 = Matter.Bodies.trapezoid(955,2550,100,20,0,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0.6
});

w14_4 = Matter.Bodies.rectangle(1090,2575,200,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w15_4 = Matter.Bodies.rectangle(1190,2535,20,100,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w16_4 = Matter.Bodies.rectangle(1220,2470,80,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:-0.6
});

w17_4 = Matter.Bodies.trapezoid(1295,2450,117,20,0.2,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w18_4 = Matter.Bodies.rectangle(250,2370,125,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:-0.5
});

w19_4 = Matter.Bodies.rectangle(385,2340,170,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w20_4 = Matter.Bodies.polygon(470,2343,3,14,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:-0.5
});

w21_4 = Matter.Bodies.trapezoid(300,2301,100,20,0.3,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:-1.57
});

w22_4 = Matter.Bodies.rectangle(210,2375,50,30,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w23_4 = Matter.Bodies.rectangle(216,2365,76,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w24_4 = Matter.Bodies.rectangle(290,2190,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    }
});

w25_4 = Matter.Bodies.rectangle(385,2177,60,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:-0.5
});

w26_4 = Matter.Bodies.rectangle(830,2250,175,125,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0
});

w27_4 = Matter.Bodies.rectangle(877,2340,80,70,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0
});

w28_4 = Matter.Bodies.rectangle(820,2315,120,50,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0.9
});

w29_4 = Matter.Bodies.rectangle(720,2310,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0
});

w30_4 = Matter.Bodies.rectangle(720,2197.5,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0
});

w31_4 = Matter.Bodies.polygon(645,2194.5,3,14,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0.5
});

w32_4 = Matter.Bodies.rectangle(1010,2270,200,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0
});

w33_4 = Matter.Bodies.rectangle(1145,2242.5,100,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:-0.6
});

w34_4 = Matter.Bodies.rectangle(1255,2215,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0
});

w35_4 = Matter.Bodies.rectangle(1305,2242.5,100,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0.6
});

w36_4 = Matter.Bodies.polygon(1330,2211,3,13,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0.5
});

w37_4 = Matter.Bodies.polygon(1345,2267,3,13,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(180,180,180)'
       
    },
    angle:0.95
});


 
// // ///////////////////////////////////////////////// covers


cover1_4 = Matter.Bodies.rectangle(246,2480,20,40,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(220,220,220)'
       
    },
    angle:-0.4
});

cover1_4.collisionFilter.mask=200
cover1_4.collisionFilter.category=0x0008

cover2_4 = Matter.Bodies.rectangle(473,2520,20,40,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(220,220,220)'
       
    },
    angle:0.65
});

cover2_4.collisionFilter.mask=200
cover2_4.collisionFilter.category=0x0008

cover3_4 = Matter.Bodies.rectangle(697,2520,20,40,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(220,220,220)'
       
    },
    angle:-0.65
});

cover3_4.collisionFilter.mask=300
cover3_4.collisionFilter.category=0x0016

cover4_4 = Matter.Bodies.rectangle(1000,2285,45,10,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(220,220,220)'
       
    },
    angle:0
});

cover3_4.collisionFilter.mask=200
cover3_4.collisionFilter.category=0x0008




// // ///////////////////////////////////////////////// meshs


stack1_4=Composites.stack(80,2160,4,2,0,0,function(x,y) {
    return Bodies.circle(x, y, 15,{
        render:{
            visible:false
        },
        density:0.0002,
        mass:0.1
    });
});
stack1_4.bodies[0].isStatic = true;
stack1_4.bodies[3].isStatic = true;

stack2_4=Composites.stack(-10,2300,4,2,0,0,function(x,y) {
    return Bodies.circle(x, y, 15,{
        render:{
            visible:false
        },
        density:0.0002,
        mass:0.1
    });
});
stack2_4.bodies[0].isStatic = true;
stack2_4.bodies[3].isStatic = true;

stack3_4=Composites.stack(80,2440,4,2,0,0,function(x,y) {
    return Bodies.circle(x, y, 15,{
        render:{
            visible:false
        },
        density:0.0002,
        mass:0.1
    });
});
stack3_4.bodies[0].isStatic = true;
stack3_4.bodies[3].isStatic = true;


wall_4=Composites.stack(190,2550,3,6,0,0,function(x,y) {
    return Bodies.circle(x, y, 10,{
        render:{
            visible:false
        },
        density:0.0002,
        mass:0.1
    });
});
wall_4.bodies[0].isStatic = true;
wall_4.bodies[2].isStatic = true;
wall_4.bodies[15].isStatic = true;
wall_4.bodies[17].isStatic = true;



Matter.Composites.mesh(stack1_4,4,2, false,{ stiffness: 0.8, render: { type: 'line', anchors: false } }) 
Matter.Composites.mesh(stack2_4,4,2, false,{ stiffness: 0.8, render: { type: 'line', anchors: false } })
Matter.Composites.mesh(stack3_4,4,2, false,{ stiffness: 0.8, render: { type: 'line', anchors: false } }) 

Matter.Composites.mesh(wall_4,3,6, false,{ stiffness: 0.8, render: { type: 'line', anchors: false } }) 



Matter.Body.setPosition(stack1_4.bodies[0],{x:stack1_4.bodies[0].position.x,y:2220})
Matter.Body.setPosition(stack1_4.bodies[4],{x:stack1_4.bodies[4].position.x,y:2260})

Matter.Body.setPosition(stack2_4.bodies[3],{x:stack2_4.bodies[3].position.x,y:2360})
Matter.Body.setPosition(stack2_4.bodies[7],{x:stack2_4.bodies[7].position.x,y:2400})

Matter.Body.setPosition(stack3_4.bodies[0],{x:stack3_4.bodies[0].position.x,y:2500})
Matter.Body.setPosition(stack3_4.bodies[4],{x:stack3_4.bodies[4].position.x,y:2540})









// // ///////////////////////////////////////////////// tele

tele1_4 =  Matter.Bodies.rectangle(1160,2700,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl.png',
            xScale: 0.45,
            yScale: 0.45
        }
    } ,
    angle:-0.55 
})

tele2_4 =  Matter.Bodies.rectangle(685,2268,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl.png',
            xScale: 0.45,
            yScale: 0.45
        }
    }   
})

tele3_4 =  Matter.Bodies.rectangle(380,2295,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl2.png',
            xScale: 0.35,
            yScale: 0.35
        }
    }   
})

tele4_4 =  Matter.Bodies.rectangle(735,2152.5,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl2.png',
            xScale: 0.35,
            yScale: 0.35
        }
    }   
})

tele1_4.collisionFilter.mask=200
tele1_4.collisionFilter.category=0x0008
tele2_4.collisionFilter.mask=200
tele2_4.collisionFilter.category=0x0008
tele3_4.collisionFilter.mask=200
tele3_4.collisionFilter.category=0x0008
tele4_4.collisionFilter.mask=200
tele4_4.collisionFilter.category=0x0008



// // // ///////////////////////////////////////////////// Cwalls


// // // //10,250
Cw1_4=Matter.Bodies.rectangle(1010,2675,25,190,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(93,108,137)'
       
    }
})
// // //1
Cw2_4=Matter.Bodies.rectangle(740,2645,25,240,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(54,214,231)'
       
    },

})

Cw3_4=Matter.Bodies.trapezoid(10,2160,80,25,0.4,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(254,176,106)'
       
    },
    angle:1.55
})
////////Cw4
Cw4_4 = Composites.stack(410,2170, 10, 1, 10, 10, function(x, y) {
    return Bodies.rectangle(x, y, 25, 10,{
        render:{
            fillStyle:'rgb(219,31,72)'
        }
    });
});


Cw4con1_4 = Matter.Constraint.create({
    pointA: {x:410,y:2155},
    bodyB: Cw4_4.bodies[0],
    stiffness: 0.06,
    length: 10,
    render:{
        visible:true,
        type:'line',
        anchors:false
    }
});

Cw4con2_4 = Matter.Constraint.create({
    pointA: {x:470,y:2155},
    bodyB: Cw4_4.bodies[9],
    stiffness: 0.06,
    length: 10,
    render:{
        visible:true,
        type:'line',
        anchors:false
    }
});

Composites.chain(Cw4_4, 0.5, 0, -0.5, 0, { stiffness: 0.2, length: 0, render: { type: 'line' } });


//Cw4 end

Cw5_4=Matter.Bodies.rectangle(585,2750,140,25,{
    chamfer:0,
    isStatic:false,
    render: {
        fillStyle: 'rgb(255,255,255)'
       
    },

})

Cw5con1_4 = Matter.Constraint.create({
    pointA: {x:520,y:2435},
    bodyB: Cw5_4,
    pointB:{x:-60,y:0},
    stiffness: 0.004,
    length: 300,
    render:{
        visible:true
    }
 });

Cw5con2_4 = Matter.Constraint.create({
    pointA: {x:650,y:2435},
    bodyB: Cw5_4,
    pointB:{x:60,y:0},
    stiffness: 0.004,
    length: 300,
    render:{
        visible:true
    }
 }); 

Cw6_4=Matter.Bodies.rectangle(875,2440,25,140,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(255,39,104)'
       
    }
})

Cw7_4=Matter.Bodies.rectangle(655,2150,25,100,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(103,89,94)'
       
    }
})

Cw8_4=Matter.Bodies.rectangle(1425,2540,25,130,{
    chamfer:0,
    isStatic:false,
    render: {
        fillStyle: 'rgb(251,229,200)'
       
    }
})

Cw8con_4 = Matter.Constraint.create({
    pointA: {x:1425,y:2540},
    bodyB: Cw8_4,
    stiffness: 0.4,
    length: 5,
    render:{
        visible:true,
        type:'line',
        anchors:false
    }
});






// // // /////////////////////////////////////////// points

s1_4=Matter.Bodies.circle(1060,2510,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s2_4=Matter.Bodies.circle(280,2460,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s3_4=Matter.Bodies.circle(1420,2640,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})





// // // // ///////////////////////////////////////////////// making square and triangle

let square_4=Matter.Bodies.rectangle(580,2650,40,40,{
  mass:1,
  render: {
    fillStyle: 'rgb(4,150,255)'
   
}
})
let triangle_4=Matter.Bodies.polygon(530,2650,3,27.5,{
  mass:1,
  render: {
    fillStyle: 'rgb(216,17,89)'
   
}
})
let box_4=Matter.Bodies.rectangle(1080,2200,40,40,{
    mass:1,
    render:{
    fillStyle:'rgb(255,188,66)'
    }
  })

// // // ///////////////////////////////////////////////// exit


e_4=Matter.Bodies.rectangle(270,2130,1,1,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'exit.png',
           xScale: 0.1,
           yScale: 0.1
       }
   }
})


// // // ///////////////////////////////////////////////// adding edges

e1_4=Matter.Bodies.rectangle(-10,2450,20,700,{
    isStatic:true
})

e2_4=Matter.Bodies.rectangle(1510,2450,20,700,{
    isStatic:true
})
e3_4=Matter.Bodies.rectangle(750,2090,1500,20,{
    isStatic:true
})




// // // // ///////////////////////////////////////////////// key function

var keys = [];
document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
 
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});



// // // // ///////////////////////////////////////////////// win blocks
// // // // //10,250
wb1_4=Bodies.rectangle(-75,2350,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(4,150,255)',
  }
})
Matter.Body.rotate(wb1_4,-2)

wb2_4=Bodies.rectangle(1575,2350,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(216,17,89)',
  }
})
Matter.Body.rotate(wb2_4,2)


// // // // ////////////////////////////////////////////////// counters for doors and walls

let win_4=false

let counter_4=0


rotatingAmount_4=-0.325

balls=[]

ballWait=0

thrown=false
reset=false

i=0





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////level 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// limity jump height and can only jump while on ground

let squareContact_5=false
let triangleContact_5=false

// ///////////////////////////////////////// points
 let point_5=0

// colors
x_5='rgb(236,236,209)'
y_5='rgb(245,90,60)'
z_5='rgb(245,210,89)'
w_5='rgb(6,62,123)'


// // // ///////////////////////////////////////////////// buttons
// //(255,255,255),(231,,242,248),(116,189,203),(255,163,132),(239,231,188),(53,54,67),(67,88,97),(4,236,240)
bn1_5=Matter.Bodies.trapezoid(325,2900,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(231,242,248)',
      strokeStyle: x_5,
     lineWidth:5
  }
  })

bn2_5=Matter.Bodies.trapezoid(1235,2938,40,20,0.3,{
  isStatic:true,
  chamfer:0,
  friction:1,
  render: {
    fillStyle: 'rgb(116,189,203)',
    strokeStyle: y_5,
    lineWidth:5
   
},
angle:1.55
})


bn3_5=Matter.Bodies.trapezoid(1295,2877,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(255,163,132)',
      strokeStyle: z_5,
      lineWidth:5
     
  }
  })


bn4_5=Matter.Bodies.trapezoid(295,3057,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(255,255,255)',
      strokeStyle: w_5,
      lineWidth:5
  }
  })

bn5_5=Matter.Bodies.trapezoid(320,3147,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(239,231,188)',
      strokeStyle: x_5,
      lineWidth:5
  },
  angle:-0.3
  })  

bn6_1_5=Matter.Bodies.trapezoid(120,3480,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(53,54,67)',
      strokeStyle: y_5,
      lineWidth:5
  }
  })    

  bn6_2_5=Matter.Bodies.trapezoid(30,3155,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(53,54,67)',
      strokeStyle: y_5,
      lineWidth:5
  },
  angle:-0.3
  })      

bn7_5=Matter.Bodies.trapezoid(35,2980,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(67,88,97)',
      strokeStyle: z_5,
      lineWidth:5
  }
  })  

bn8_5=Matter.Bodies.trapezoid(525,3480,40,20,0.3,{
    isStatic:true,
    chamfer:0,
    friction:1,
    render: {
      fillStyle: 'rgb(4,236,240)',
      strokeStyle: w_5,
      lineWidth:5
  }
  })  
// 
// // // // ///////////////////////////////////////////////// walls

w1_5 = Matter.Bodies.rectangle(150,3280,800,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: x_5
       
    }
});

w2_5 = Matter.Bodies.rectangle(1350,3280,800,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: y_5
       
    }
});
//

w3_5 = Matter.Bodies.rectangle(60,3165,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: z_5
       
    },
    angle:-0.3
});



w4_5 = Matter.Bodies.rectangle(195,3165,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: w_5
       
    },
    angle:0.3
});

w5_5 = Matter.Bodies.rectangle(330,3165,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: x_5
       
    },
    angle:-0.3
});

w6_5 = Matter.Bodies.rectangle(465,3165,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: y_5
       
    },
    angle:0.3
});
//
w7_5 = Matter.Bodies.rectangle(1440,3165,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: z_5
       
    },
    angle:0.3
});



w8_5 = Matter.Bodies.rectangle(1305,3165,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: w_5
       
    },
    angle:-0.3
});

w9_5 = Matter.Bodies.rectangle(1170,3165,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: x_5
       
    },
    angle:0.3
});

w10_5 = Matter.Bodies.rectangle(1035,3165,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: y_5
       
    },
    angle:-0.3
});
//
w11_5 = Matter.Bodies.rectangle(60,3400,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: z_5
       
    },
    angle:0.3
});



w12_5 = Matter.Bodies.rectangle(195,3400,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: w_5
       
    },
    angle:-0.3
});

w13_5 = Matter.Bodies.rectangle(330,3400,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: x_5
       
    },
    angle:0.3
});

w14_5 = Matter.Bodies.rectangle(465,3400,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: y_5
       
    },
    angle:-0.3
});

//
w15_5 = Matter.Bodies.rectangle(1440,3400,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: z_5
       
    },
    angle:-0.3
});



w16_5 = Matter.Bodies.rectangle(1305,3400,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: w_5
       
    },
    angle:0.3
});

w17_5 = Matter.Bodies.rectangle(1170,3400,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: x_5
       
    },
    angle:-0.3
});

w18_5 = Matter.Bodies.rectangle(1035,3400,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle:    y_5
       
    },
    angle:0.3
});

w19_5 = Matter.Bodies.rectangle(30,2995,60,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: z_5
       
    }
});

w20_5 = Matter.Bodies.rectangle(97,2976,90,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: w_5
       
    },
    angle:-0.5
});

w21_5 = Matter.Bodies.rectangle(97,3014,90,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: x_5
       
    },
    angle:0.5
});


w22_5 = Matter.Bodies.rectangle(165,2956,70,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: y_5
       
    }
});

w23_5 = Matter.Bodies.rectangle(165,3034,70,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: z_5
       
    }
});

w24_5 = Matter.Bodies.rectangle(235,2976,90,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: w_5
       
    },
    angle:0.5
});

w25_5 = Matter.Bodies.rectangle(235,3014,90,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: x_5
       
    },
    angle:-0.5
});



w26_5 = Matter.Bodies.rectangle(235,2938,90,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: y_5
       
    },
    angle:-0.5
});

w27_5 = Matter.Bodies.rectangle(235,3052,90,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: z_5
       
    },
    angle:0.5
});
w28_5 = Matter.Bodies.rectangle(328,2918,120,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: w_5
       
    }
});

w29_5 = Matter.Bodies.polygon(387,2921,3,14,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: x_5
       
    },
    angle:1.55
});

w30_5 = Matter.Bodies.rectangle(343,2995,150,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: y_5
       
    }
});

w31_5 = Matter.Bodies.polygon(417,2998,3,14,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: z_5
       
    },
    angle:1.55
});

w32_5 = Matter.Bodies.rectangle(310,3005,100,15,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: w_5
       
    }
});

w33_5 = Matter.Bodies.polygon(360,3003,3,10,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: x_5
       
    },
    angle:0.5
});



w34_5 = Matter.Bodies.rectangle(310,3072,80,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: y_5
       
    },
    angle:0
});

w35_5 = Matter.Bodies.rectangle(364,3077,40,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: z_5
       
    },
    angle:0.3
});

w36_5 = Matter.Bodies.rectangle(1100,3080,20,125,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle:w_5
       
    },
    angle:-0.2
});

w37_5 = Matter.Bodies.rectangle(1125,3095,20,155,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: x_5

       
    },
    angle:-0.5
});

w38_5 = Matter.Bodies.rectangle(925,3160,140,15,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: y_5
       
    },
    angle:0.3
});

w39_5 = Matter.Bodies.rectangle(905,3140,90,15,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: z_5
       
    },
    angle:0
});

w40_5 = Matter.Bodies.rectangle(1295,2895,120,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: w_5
       
    },
    angle:0
});

w41_5 = Matter.Bodies.polygon(1347,2885,3,15,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: x_5
       
    },
    angle:0
});

w42_5 = Matter.Bodies.rectangle(1232,2855,20,80,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: y_5
       
    },
    angle:-0.45
});

w43_5 = Matter.Bodies.rectangle(1217,2895,20,140,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: z_5
       
    },
    angle:0
});

w44_5 = Matter.Bodies.rectangle(1440,2980,120,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: w_5
       
    },
    angle:0
});

w45_5 = Matter.Bodies.rectangle(1370,2976,30,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: x_5
       
    },
    angle:0.3
});

w46_5 = Matter.Bodies.rectangle(1220,3410,15,45,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: y_5
       
    },
    angle:-0.35
});

w47_5 = Matter.Bodies.rectangle(1236,3408,15,45,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: z_5
       
    },
    angle:0.6
});


w48_5 = Matter.Bodies.rectangle(450,3495,900,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: w_5
       
    },
    angle:0
});

w49_5 = Matter.Bodies.rectangle(1470,3495,200,20,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: x_5
       
    },
    angle:0
});


// // // ///////////////////////////////////////////////// covers


cover1_5 = Matter.Bodies.rectangle(325,2930,45,10,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(220,220,220)'
       
    },
    angle:0
});

cover1_5.collisionFilter.mask=200
cover1_5.collisionFilter.category=0x0008

cover2_5 = Matter.Bodies.rectangle(295,3082,45,10,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(220,220,220)'
       
    },
    angle:0
});

cover2_5.collisionFilter.mask=200
cover2_5.collisionFilter.category=0x0008

cover3_5 = Matter.Bodies.rectangle(145,2950,40,70,{
    isStatic:true,
    chamfer:0,
    render: {
        fillStyle: 'rgb(220,220,220)'
       
    },
    angle:0
});

cover3_5.collisionFilter.mask=400
cover3_5.collisionFilter.category=0x00016


// // // ///////////////////////////////////////////////// meshs


stack1_5=Composites.stack(1420,2835,7,2,0,0,function(x,y) {
    return Bodies.rectangle(x, y, 15,15,{
        render:{
            visible:false
        },
        density:0.0002,
        mass:0.1
    });
});
 stack1_5.bodies[0].isStatic = true;
 stack1_5.bodies[6].isStatic = true;


wall_5=Composites.stack(190,2800,4,6,0,0,function(x,y) {
    return Bodies.circle(x, y, 10,{
        render:{
            visible:false
        },
        density:0.0002,
        mass:0.1
    });
});
wall_5.bodies[0].isStatic = true;
wall_5.bodies[1].isStatic = true;
wall_5.bodies[2].isStatic = true;
wall_5.bodies[3].isStatic = true;
wall_5.bodies[20].isStatic = true;
wall_5.bodies[21].isStatic = true;
wall_5.bodies[22].isStatic = true;
wall_5.bodies[23].isStatic = true;



Matter.Composites.mesh(stack1_5,7,2, false,{ stiffness: 0.8, render: { type: 'line', anchors: false } }) 

Matter.Composites.mesh(wall_5,4,6, false,{ stiffness: 0.8, render: { type: 'line', anchors: false } }) 



Matter.Body.setPosition(stack1_5.bodies[0],{x:1410,y:2810})
Matter.Body.setPosition(stack1_5.bodies[6],{x:1505,y:2855})

Matter.Body.setPosition(wall_5.bodies[20],{x:wall_5.bodies[20].position.x,y:2937})
Matter.Body.setPosition(wall_5.bodies[21],{x:wall_5.bodies[21].position.x,y:2930})
Matter.Body.setPosition(wall_5.bodies[22],{x:wall_5.bodies[22].position.x,y:2920})

Matter.Body.setPosition(wall_5.bodies[1],{x:wall_5.bodies[1].position.x,y:2815})
Matter.Body.setPosition(wall_5.bodies[2],{x:wall_5.bodies[2].position.x,y:2815})





// // // ///////////////////////////////////////////////// tele

tele1_5 =  Matter.Bodies.rectangle(290,2960,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl.png',
            xScale: 0.35,
            yScale: 0.35
        }
    } ,
    angle:0
})

tele2_5 =  Matter.Bodies.rectangle(895,3107,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl.png',
            xScale: 0.35,
            yScale: 0.35
        }
    }   
})

tele3_5 =  Matter.Bodies.rectangle(1440,3128,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl2.png',
            xScale: 0.25,
            yScale: 0.25
        }
    }  ,
    angle:0.3 
})

tele4_5 =  Matter.Bodies.rectangle(155,3000,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl2.png',
            xScale: 0.25,
            yScale: 0.25
        }
    }   
})

tele5_5 =  Matter.Bodies.rectangle(85,3122,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl3.png',
            xScale: 0.1,
            yScale: 0.1
        }
    }  ,
    angle:-0.3 
})

tele6_5 =  Matter.Bodies.rectangle(50,3460,1,1,{
    isStatic:true,
    chamfer:30,
    render: {
        sprite:{ 
            texture: 'pl3.png',
            xScale: 0.1,
            yScale: 0.1
        }
    }   
})

tele1_5.collisionFilter.mask=200
tele1_5.collisionFilter.category=0x0008
tele2_5.collisionFilter.mask=200
tele2_5.collisionFilter.category=0x0008
tele3_5.collisionFilter.mask=200
tele3_5.collisionFilter.category=0x0008
tele4_5.collisionFilter.mask=400
tele4_5.collisionFilter.category=0x0032
tele5_5.collisionFilter.mask=200
tele5_5.collisionFilter.category=0x0008
tele6_5.collisionFilter.mask=200
tele6_5.collisionFilter.category=0x0008



// // // // ///////////////////////////////////////////////// Cwalls
// //(255,255,255),(231,,242,248),(116,189,203),(255,163,132),(239,231,188),(53,54,67),(67,88,97),(4,236,240)


// // // //10,250
Cw1_5=Matter.Bodies.rectangle(50,2860,25,180,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(231,242,248)',
        strokeStyle:x_5,
        lineWidth:5
       
    },
    angle:0.7
})
// // // //1
Cw2_5=Matter.Bodies.trapezoid(1435,2963,80,15,0.3,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(116,189,203)',
        strokeStyle:y_5,
        lineWidth:5
    },
    angle:3.15

})

Cw3_5=Matter.Bodies.rectangle(750,3335,390,25,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(255,163,132)',
        strokeStyle:z_5,
        lineWidth:5
       
    },
    angle:0.2
})
// ////////Cw4
Cw4_5 =Matter.Bodies.rectangle(1300,3110,100,25,{
        render:{
            fillStyle:'rgb(255,255,255)',
            strokeStyle:w_5,
        lineWidth:5
        }
    });



Cw4con1_5 = Matter.Constraint.create({
    pointA: {x:1240,y:2910},
    bodyB: Cw4_5,
      pointB:{x:-40,y:0},
    stiffness: 0.06,
    length: 230,
    render:{
        visible:true,
        
    }
});

Cw4con2_5 = Matter.Constraint.create({
    pointA: {x:1320,y:2910},
    bodyB: Cw4_5,
    pointB:{x:40,y:0},
    stiffness: 0.06,
    length: 210,
    render:{
        visible:true,
       
    }
});


// //Cw4 end

Cw5_5=Composites.stack(1370,3060, 6, 1, 10, 10, function(x, y) {
    return Bodies.rectangle(x, y, 25, 10,{
        render:{
            fillStyle:'rgb(239,231,188)',
            strokeStyle:x_5,
        lineWidth:5,
       
        }
    });
});

Cw5con1_5 = Matter.Constraint.create({
    pointA: {x:1350,y:3120},
    bodyB: Cw5_5.bodies[0],
    pointB:{x:-10,y:0},
    stiffness: 0.1,
    length: 10,
    render:{
        visible:true,
        type:'line'
    }
 });

Cw5con2_5 = Matter.Constraint.create({
    pointA: {x:1470,y:3000},
    bodyB: Cw5_5.bodies[5],
    pointB:{x:10,y:0},
    stiffness: 0.1,
    length: 10,
    render:{
        visible:true,
        type:'line'
    }
 }); 
Composites.chain(Cw5_5, 0.5, 0, -0.5, 0, { stiffness: 0.4, length: 0, render: { type: 'line' } });

Cw6_5=Matter.Bodies.rectangle(150,3090,25,110,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(53,54,67)',
        strokeStyle:y_5,
        lineWidth:5
       
    }
})

Cw7_1_5=Matter.Bodies.trapezoid(230,3459,140,25,0.3,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(67,88,97)',
        strokeStyle:z_5,
        lineWidth:5
       
    },
    angle:-0.8
})

Cw7_2_5=Matter.Bodies.trapezoid(445,3459,140,25,0.3,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(67,88,97)',
        strokeStyle:z_5,
        lineWidth:5
       
    },
    angle:-0.8
})

Cw8_1_5=Matter.Bodies.rectangle(980,3700,140,20,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(4,236,240)',
        strokeStyle:w_5,
        lineWidth:5
       
    }
})

Cw8_2_5=Matter.Bodies.rectangle(1135,3700,140,20,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(4,236,240)',
        strokeStyle:w_5,
        lineWidth:5
       
    }
})

Cw8_3_5=Matter.Bodies.rectangle(1290,3700,140,20,{
    chamfer:0,
    isStatic:true,
    render: {
        fillStyle: 'rgb(4,236,240)',
        strokeStyle:w_5,
        lineWidth:5
       
    }
})


wallBall_5=Matter.Bodies.circle(10,2810,20,{
    render:{
        fillStyle:z_5
    },
    mass:5
})




// // // // /////////////////////////////////////////// rotor


rotor1_5=Matter.Bodies.rectangle(535,2975,150,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: x_5
       
    }

})



 con1_5 = Matter.Constraint.create({
    pointA: {x:535,y:2975},
    bodyB: rotor1_5,
    stiffness: 0.004,
    length: 10,
    render:{
        visible:true
    }
 });

 rotor2_5=Matter.Bodies.rectangle(985,3040,140,20,{
    isStatic:false,
    chamfer:0,
    render: {
        fillStyle: z_5
       
    }

})


con2_5 = Matter.Constraint.create({
    pointA: {x:985,y:3040},
    bodyB: rotor2_5,
    stiffness: 0.004,
    length: 10,
    render:{
        visible:true
    }
 });


// // // // /////////////////////////////////////////// points

s1_5=Matter.Bodies.circle(400,3451,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s2_5=Matter.Bodies.circle(1465,3070,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.08,
           yScale: 0.08
       }
   }
})

s3_5=Matter.Bodies.circle(200,2990,25,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'star.png',
           xScale: 0.075,
           yScale: 0.075
       }
   }
})





// // // // ///////////////////////////////////////////////// making square and triangle

let square_5=Matter.Bodies.rectangle(350,2950,40,40,{
  mass:1,
  render: {
    fillStyle: 'rgb(4,150,255)'
   
}
})
let triangle_5=Matter.Bodies.polygon(220,3120,3,27.5,{
  mass:1,
  render: {
    fillStyle: 'rgb(216,17,89)'
   
}
 })
let box_5=Matter.Bodies.rectangle(310,3440,40,40,{
    mass:1,
    render:{
    fillStyle:y_5
    }
  })

// // // // ///////////////////////////////////////////////// exit


e_5=Matter.Bodies.rectangle(1450,3440,1,1,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'exit.png',
           xScale: 0.07,
           yScale: 0.07
       }
   }
})


// // // // ///////////////////////////////////////////////// adding edges

e1_5=Matter.Bodies.rectangle(-10,2990,20,380,{
    isStatic:true
})

e2_5=Matter.Bodies.rectangle(1510,2990,20,380,{
    isStatic:true
})
e3_5=Matter.Bodies.rectangle(750,2790,1500,20,{
    isStatic:true
})

e4_5=Matter.Bodies.rectangle(-10,3440,20,120,{
    isStatic:true
})
e5_5=Matter.Bodies.rectangle(1510,3440,20,120,{
    isStatic:true
})

e6_5=Matter.Bodies.rectangle(-200,3150,20,700,{
    isStatic:true
})

e7_5=Matter.Bodies.rectangle(2100,3150,20,700,{
    isStatic:true
})



// // // // // ///////////////////////////////////////////////// key function

var keys = [];
document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
 
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});



// // // // // ///////////////////////////////////////////////// win blocks
// // // // // //10,250
wb1_5=Bodies.rectangle(-75,3050,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(4,150,255)',
  }
})
Matter.Body.rotate(wb1_5,-2)

wb2_5=Bodies.rectangle(1575,3050,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(216,17,89)',
  }
})
Matter.Body.rotate(wb2_5,2)


// // // // ////////////////////////////////////////////////// counters for doors and walls

let win_5=false

let counter_5=0


 i_5=0


 ballsColor_5='rgb(236,236,209)'
 

a=true
b=false
above=true

loop1_5=0
loop2_5=0

 car_5=Matter.Composites.car(80,3225, 85, 25,22) 
 car2_5=Matter.Composites.car(350,3225, 85, 25,22) 
 car3_5=Matter.Composites.car(1420,3225, 85, 25,22) 
 car4_5=Matter.Composites.car(1150,3225, 85, 25,22) 


balls_5=[]
ballsThrown=false
megaBtn=false

carStack_5=0
carTStack_5=0

removedS=false
removedT=false


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////level 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



hasWon1=false
hasWon2=false
hasWon3=false
hasWon4=false
hasWon5=false











winFace=Matter.Bodies.rectangle(10750,350,1,1,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'you win.png'
       }
   }
})





loseFace=Matter.Bodies.rectangle(11750,350,1,1,{
    isStatic:true,
   render: { 
       sprite:{ 
           texture: 'you lose.png'
       }
   }
})























mouseClick=0
//150,50,20




// ///////////////////////////////////////////////// draw function (only updated)
Events.on(engine, "beforeTick", function(event) {


Events.on(mouseConstraint, "mousedown", function(event){
    if(mouseClick==0){

    if(counter==0){
    if(mouse.position.x>130 && mouse.position.x<170 && mouse.position.y>30 && mouse.position.y<70){
       Matter.Body.setPosition(square,{x:600,y:500})
       Matter.Body.setPosition(triangle,{x:1200,y:500})
       point=0
       Matter.Body.setPosition(s1,{x:100,y:230})
       Matter.Body.setPosition(s2,{x:695,y:170})
       Matter.Body.setPosition(s3,{x:1425,y:300})
       s1.render.visible=true
       s2.render.visible=true
       s3.render.visible=true
    }
    }
  
    if(counter_2==0){
        if(mouse.position.x>1320 && mouse.position.x<1370 && mouse.position.y>1320 && mouse.position.y<1370){
            Matter.Body.setPosition(square2,{x:200,y:1000})
            Matter.Body.setPosition(triangle2,{x:400,y:1200})
            point2=0
            Matter.Body.setPosition(s1_2,{x:600,y:870})
            Matter.Body.setPosition(s2_2,{x:895,y:1020})
            Matter.Body.setPosition(s3_2,{x:1425,y:1000})
            s1_2.render.visible=true
            s2_2.render.visible=true
            s3_2.render.visible=true

            Matter.Body.setPosition(Cw4_2,{x:80,y:Cw4_2.position.y})
    }
    }
 
    if(counter_3==0){
        if(mouse.position.x>1320 && mouse.position.x<1370 && mouse.position.y>2055 && mouse.position.y<2095){
            Matter.Body.setPosition(square_3,{x:1400,y:2000})
            Matter.Body.setPosition(triangle_3,{x:350,y:1700})
            point_3=0
            Matter.Body.setPosition(s1_3,{x:400,y:2000})
            Matter.Body.setPosition(s2_3,{x:200,y:1475})
            Matter.Body.setPosition(s3_3,{x:1450,y:1700})
            s1_3.render.visible=true
            s2_3.render.visible=true
            s3_3.render.visible=true

            Matter.Body.setPosition(b1_3,{x:500,y:1400})
            Matter.Body.setPosition(b2_3,{x:650,y:1400})
            Matter.Body.setPosition(b3_3,{x:800,y:1400})
            Matter.Body.setPosition(b4_3,{x:950,y:1400})
            Matter.Body.setPosition(b5_3,{x:1100,y:1400})
            Matter.Body.setPosition(b6_3,{x:1250,y:1400})
    }
    }


    if(counter_4==0){
        if(mouse.position.x>1320 && mouse.position.x<1370 && mouse.position.y>2720 && mouse.position.y<2770){
            Matter.Body.setPosition(square_4,{x:580,y:2650})
            Matter.Body.setPosition(triangle_4,{x:530,y:2650})
            Matter.Body.setPosition(box_4,{x:1080,y:2200})
            point_4=0
            Matter.Body.setPosition(s1_4,{x:1060,y:2510})
            Matter.Body.setPosition(s2_4,{x:280,y:2460})
            Matter.Body.setPosition(s3_4,{x:1420,y:2640})
            s1_4.render.visible=true
            s2_4.render.visible=true
            s3_4.render.visible=true
          
            Cw4con2_4.pointA.x=470
            Cw4con2_4.pointA.y=2155
           
    }
    }

//     if(counter_5==0){
//         if(mouse.position.x>1120 && mouse.position.x<1170 && mouse.position.y>2830 && mouse.position.y<2870){
//           // 350-2950 220-3120 310-3440 ,400-3451, 1465-3070, 200-2990

//             if(removedS==false){
//                 Matter.Body.setPosition(square_5,{x:350,y:2950})
//                 Matter.Body.setVelocity(square_5,{x:0,y:0})
//             }else{
             
//                 Matter.Body.setPosition(square_5,{x:350,y:2950})
//                 Matter.World.remove(engine.world,[stackSquare_5])
//                 removedS=false
//             }
//             if(removedT==false){
            
//                 Matter.Body.setVelocity(triangle_5,{x:0,y:0})
//                 Matter.Body.setVelocity(triangle_5,{x:0,y:0})
//             }else{
//                 Matter.World.add(engine.world,[triangle_5])
//                 Matter.Body.setPosition(triangle_5,{x:220,y:3120})
//                 Matter.World.remove(engine.world,[stackTriangle_5])
//                 removedT=false

//             }
// // 80-350-1420-1150 3225

//             Matter.Body.setPosition(box_5,{x:310,y:3440})
//             Matter.Body.setPosition(wallBall_5,{x:10,y:2810})

//             Matter.Body.setPosition(car_5.bodies[0],{x:80,y:3225})
//             Matter.Body.setPosition(car2_5.bodies[0],{x:350,y:3225})
//             Matter.Body.setPosition(car3_5.bodies[0],{x:1420,y:3225})
//             Matter.Body.setPosition(car4_5.bodies[0],{x:1150,y:3225})

//             Matter.Body.setPosition(car_5.bodies[1],{x:80,y:3225})
//             Matter.Body.setPosition(car2_5.bodies[1],{x:350,y:3225})
//             Matter.Body.setPosition(car3_5.bodies[1],{x:1420,y:3225})
//             Matter.Body.setPosition(car4_5.bodies[1],{x:1150,y:3225})

//             Matter.Body.setPosition(car_5.bodies[2],{x:80,y:3225})
//             Matter.Body.setPosition(car2_5.bodies[2],{x:350,y:3225})
//             Matter.Body.setPosition(car3_5.bodies[2],{x:1420,y:3225})
//             Matter.Body.setPosition(car4_5.bodies[2],{x:1150,y:3225})

//             Matter.Body.setVelocity(car_5.bodies[0],{x:0,y:0})
//             Matter.Body.setVelocity(car2_5.bodies[0],{x:0,y:0})
//             Matter.Body.setVelocity(car3_5.bodies[0],{x:0,y:0})
//             Matter.Body.setVelocity(car4_5.bodies[0],{x:0,y:0})
//             //4224

//             Matter.Body.setPosition(e6_5,{x:-200,y:e6_5.position.y})
//             Matter.Body.setPosition(e7_5,{x:2100,y:e7_5.position.y})

//             above=true
//             Matter.Body.setAngle(Cw3_5, -0.2500000000000001)
//             a=12345
//             loop2_5=1

//             if(ballsThrown==true){
//             Matter.World.remove(engine.world,[balls_5[0],balls_5[1],balls_5[2],balls_5[3]])
//             i_5=0
//             balls_5.splice(0, balls_5.length) 
//             ballsThrown=false
//             }

//             if(megaBtn==true){
//             Matter.Body.setAngle(Cw3_5, -0.2500000000000001)
//             Matter.Body.setPosition(Cw3_5,{x:750,y:3335})
//             above=true
//             }

//             point_5=0
//             Matter.Body.setPosition(s1_5,{x:400,y:3451})
//             Matter.Body.setPosition(s2_5,{x:1465,y:3070})
//             Matter.Body.setPosition(s3_5,{x:200,y:2990})
//             s1_5.render.visible=true
//             s2_5.render.visible=true
//             s3_5.render.visible=true
          
            
//     }
//     }


    mouseClick=1
}
})

Events.on(mouseConstraint, "mouseup", function(event){mouseClick=0})

/////balls_5[0,1,2,3,4].remove,  i_5=0,  clear balls_5 array, set cw3_5.angle to 0.2 nad position to 750-3335 ,above=true





// /////////////////////////////////////////////////collision variables
// /////////////////////////////////////////////////C=collision, S=square, T=triangle, B=buttons, numbers indicate block

var CST = Matter.SAT.collides(square,triangle);
   

var CS1 = Matter.SAT.collides(square,w1);
var CS2 = Matter.SAT.collides(square,w2);
var CS3 = Matter.SAT.collides(square,w3);
var CS4 = Matter.SAT.collides(square,w4);
var CS5 = Matter.SAT.collides(square,w5);

var CS6 = Matter.SAT.collides(square,Cw1);
var CS7 = Matter.SAT.collides(square,Cw3);
var CS8 = Matter.SAT.collides(square,Cw5)
var CS9 = Matter.SAT.collides(square,Cw7);
var CS10 = Matter.SAT.collides(square,Cw2)
var CS11 = Matter.SAT.collides(square,Cw6);




var CS12 = Matter.SAT.collides(square,s1);
var CS13 = Matter.SAT.collides(square,s2);
var CS14 = Matter.SAT.collides(square,s3);


  
var CT1 = Matter.SAT.collides(triangle,w1);
var CT2 = Matter.SAT.collides(triangle,w2);
var CT3 = Matter.SAT.collides(triangle,w3);
var CT4 = Matter.SAT.collides(triangle,w4);
var CT5 = Matter.SAT.collides(triangle,w5);

var CT6 = Matter.SAT.collides(triangle,Cw1);
var CT7 = Matter.SAT.collides(triangle,Cw3);
var CT8 = Matter.SAT.collides(triangle,Cw5);
var CT9 = Matter.SAT.collides(triangle,Cw7);
var CT10 = Matter.SAT.collides(triangle,Cw2)
var CT11 = Matter.SAT.collides(triangle,Cw6);


var CT12 = Matter.SAT.collides(triangle,s1);
var CT13 = Matter.SAT.collides(triangle,s2);
var CT14 = Matter.SAT.collides(triangle,s3);


var CSB1=Matter.SAT.collides(square,bn1)
var CSB2=Matter.SAT.collides(square,bn2)
var CSB3=Matter.SAT.collides(square,bn3)

var CTB1=Matter.SAT.collides(triangle,bn1)
var CTB2=Matter.SAT.collides(triangle,bn2)
var CTB3=Matter.SAT.collides(triangle,bn3)


var WINS=Matter.SAT.collides(square,e)
var WINT=Matter.SAT.collides(triangle,e)


// // square colliders check
if (CS1.collided ||CS2.collided ||CS3.collided ||CS4.collided ||CS5.collided ||CS6.collided ||CS7.collided ||CS8.collided ||
CS9.collided ||CS10.collided ||CS11.collided ){
 
  squareContact=true

 }

// // triangle colliders check
if (CT1.collided ||CT2.collided ||CT3.collided ||CT4.collided ||CT5.collided ||CT6.collided ||CT7.collided ||CT8.collided ||
CT9.collided ||CT10.collided ||CT11.collided  ){
  
  triangleContact=true

 }
////////////////////// points
  if(CS12.collided || CT12.collided){
      s1.render.visible=false
      Matter.Body.setPosition(s1,{x:2000,y:20})
      point=point+1
  }
  if(CS13.collided || CT13.collided){
    s2.render.visible=false
    Matter.Body.setPosition(s2,{x:2000,y:20})
    point=point+1
  }
  if(CS14.collided || CT14.collided){
    s3.render.visible=false
    Matter.Body.setPosition(s3,{x:2000,y:20})
    point=point+1
  }



// // square key controls  

if(win===false){

if (keys[87] && squareContact) {
square.force={x:0,y:-0.004}
const func = () => {
squareContact=false
}
setTimeout(func, 0.125 * 1000);
if(keys[87]&&keys[65]){
square.force = {      x: -0.0025,      y:-0.0025 }
}
if(keys[87]&&keys[68]){
square.force = {      x: 0.0025,      y:-0.0025 }
}
}
if (keys[65] ) {
square.force = {      x: -0.004,      y:0 }
} 
if (keys[68] ) {
square.force = {      x: 0.004,      y: 0 }
}
   

// // triangle key controls
if (keys[38] && triangleContact) {
triangle.force = {      x: 0,      y: -0.004 };
const func = () => {
triangleContact=false
}
setTimeout(func, 0.125 * 1000);
if(keys[38]&&keys[37]){
triangle.force = {      x: -0.0025,      y:-0.0025 }
}
if(keys[38]&&keys[39]){
triangle.force = {      x: 0.0025,      y:-0.0025 }
}
}
if (keys[37] ) {
triangle.force = {      x: -0.0025,      y:0 }
} 
if (keys[39] ) {
triangle.force = {      x: 0.0025,      y: 0 }
}


}
      
// // button clicked
// //1st
if(CSB1.collided || CTB1.collided){
 // 575
    if(bn1.position.y!==600){
        Matter.Body.setPosition(bn1, { x:  bn1.position.x, y:bn1.position.y+0.5 });
    }
    if(bn1.position.y>=590){
     //220+ 525-
   
     if(Cw2.position.x!==350){
        Matter.Body.setPosition(Cw2, { x:  Cw2.position.x+2, y:Cw2.position.y });
     }

     if(Cw6.position.x>450){
        Matter.Body.setPosition(Cw6, { x:  Cw6.position.x-2, y:Cw6.position.y });
     }
    }

}else{

    if(bn1.position.y!==575){
        Matter.Body.setPosition(bn1, { x:  bn1.position.x, y:bn1.position.y-0.25 });
    }
    if(bn1.position.y<=588){
    if(Cw2.position.x!==220){
        Matter.Body.setPosition(Cw2, { x:  Cw2.position.x-2, y:Cw2.position.y });
     }
     if(Cw6.position.x<525){
        Matter.Body.setPosition(Cw6, { x:  Cw6.position.x+2, y:Cw6.position.y });
     }
    }


    
}

// // 2nd

if(CSB2.collided || CTB2.collided){
  if(bn2.position.y!==240){
    Matter.Body.setPosition(bn2, { x:  bn2.position.x, y:bn2.position.y+0.5 });
}
if(bn2.position.y>=235){   
    if(Cw5.position.y>=250){
        Matter.Body.setPosition(Cw5, { x:  Cw5.position.x, y:Cw5.position.y-2 });
     }
}
}else{
    if(bn2.position.y!==220){
        Matter.Body.setPosition(bn2, { x:  bn2.position.x, y:bn2.position.y-0.25 });
    }
    if(bn2.position.y<=235){
        if(Cw5.position.y!==565){
            Matter.Body.setPosition(Cw5, { x:  Cw5.position.x, y:Cw5.position.y+2 });
         }  
        }
 }

// // 3rd 

if(CSB3.collided || CTB3.collided){
 //220,175

 
 if(bn3.position.y!==240){
    Matter.Body.setPosition(bn3, { x:  bn3.position.x, y:bn3.position.y+0.5 });
}



if(bn3.position.y>=234){
    
    if(Cw4.position.y>=80){
        Matter.Body.setPosition(Cw4, { x:  Cw4.position.x, y:Cw4.position.y-2 });
     }


}





}
else{
 

    if(bn3.position.y!==220){
        Matter.Body.setPosition(bn3, { x:  bn3.position.x, y:bn3.position.y-0.25 });
    }


    if(bn3.position.y<=235){
        if(Cw4.position.y!==175){
            Matter.Body.setPosition(Cw4, { x:  Cw4.position.x, y:Cw4.position.y+2 });
         }
       
        }

}

///////////// winning condition
if(square.position.x>=1130 && square.position.x<=1260 && square.position.y>=120 && square.position.y<=230 &&
    triangle.position.x>=1130 && triangle.position.x<=1260 && triangle.position.y>=120 && triangle.position.y<=230 && 
     point===3){
  win=true
}
if(win==true ){
    hasWon1=true
  counter+=1
  if(counter>=400){
      Matter.Body.setPosition(square,{x:9999,y:9999})
  }
  if(wb1.position.x!==10){
    Matter.Body.setPosition(wb1,{x:wb1.position.x+1,y:wb1.position.y})
    Matter.Body.setPosition(wb2,{x:wb2.position.x-1,y:wb1.position.y})
   
  }
  if(wb1.position.x===10){
  Matter.World.add(engine.world, [
    qled_2= Matter.Bodies.rectangle(75,220,20,10),
    oled= Matter.Bodies.rectangle(1425,220,20,10)
    
    ])
    qled_2.force={x:0.006,y:-0.003}
    oled.force={x:-0.0061,y:-0.003}
    qled_2.collisionFilter.mask=200
    qled_2.collisionFilter.category=0x0008
    wb1.collisionFilter.category=0x0008
    wb1.collisionFilter.mask=200
     oled.collisionFilter.mask=200
    oled.collisionFilter.category=0x0008
    wb2.collisionFilter.category=0x0008
    wb2.collisionFilter.mask=200
  
   
  }
 

 
}
///


if(keys[32]){
  console.log(win,win_2,win_3)
}






































// /////////////////////////////////////////////////collision variables
// /////////////////////////////////////////////////C=collision, S=square2, T=triangle2, B=buttons, numbers indicate block

var CST = Matter.SAT.collides(square2,triangle2);
 
var CS1_2 = Matter.SAT.collides(square2,w1_2);
var CS2_2 = Matter.SAT.collides(square2,w2_2);
var CS3_2 = Matter.SAT.collides(square2,w3_2);
var CS4_2 = Matter.SAT.collides(square2,w4_2);
var CS5_2 = Matter.SAT.collides(square2,w5_2);
var CS6_2 = Matter.SAT.collides(square2,w6_2);
var CS7_2 = Matter.SAT.collides(square2,w7_2);
var CS8_2 = Matter.SAT.collides(square2,w8_2);
var CS9_2 = Matter.SAT.collides(square2,w9_2);
var CS10_2 = Matter.SAT.collides(square2,w10_2);
var CS11_2 = Matter.SAT.collides(square2,w11_2);
var CS12_2 = Matter.SAT.collides(square2,w12_2);
var CS13_2 = Matter.SAT.collides(square2,w13_2);
var CS14_2 = Matter.SAT.collides(square2,w14_2);
var CS15_2 = Matter.SAT.collides(square2,w15_2);

var C1_2 = Matter.SAT.collides(square2,Cw1_2);
var C2_2 = Matter.SAT.collides(square2,Cw2_2);
var C3_2 = Matter.SAT.collides(square2,Cw3_2)
var C4_2 = Matter.SAT.collides(square2,Cw4_2);
var C5_2 = Matter.SAT.collides(square2,Cw5_2)





var Spoint1_2 = Matter.SAT.collides(square2,s1_2);
var Spoint2_2 = Matter.SAT.collides(square2,s2_2);
var Spoint3_2 = Matter.SAT.collides(square2,s3_2);


  
var CT1_2 = Matter.SAT.collides(triangle2,w1_2);
var CT2_2 = Matter.SAT.collides(triangle2,w2_2);
var CT3_2 = Matter.SAT.collides(triangle2,w3_2);
var CT4_2 = Matter.SAT.collides(triangle2,w4_2);
var CT5_2 = Matter.SAT.collides(triangle2,w5_2);
var CT6_2 = Matter.SAT.collides(triangle2,w6_2);
var CT7_2 = Matter.SAT.collides(triangle2,w7_2);
var CT8_2 = Matter.SAT.collides(triangle2,w8_2);
var CT9_2 = Matter.SAT.collides(triangle2,w9_2);
var CT10_2 = Matter.SAT.collides(triangle2,w10_2);
var CT11_2 = Matter.SAT.collides(triangle2,w11_2);
var CT12_2 = Matter.SAT.collides(triangle2,w12_2);
var CT13_2 = Matter.SAT.collides(triangle2,w13_2);
var CT14_2 = Matter.SAT.collides(triangle2,w14_2);
var CT15_2 = Matter.SAT.collides(triangle2,w15_2);

var CTI1_2 = Matter.SAT.collides(triangle2,Cw1_2);
var CTI2_2 = Matter.SAT.collides(triangle2,Cw2_2);
var CTI3_2 = Matter.SAT.collides(triangle2,Cw3_2)
var CTI4_2 = Matter.SAT.collides(triangle2,Cw4_2);
var CTI5_2 = Matter.SAT.collides(triangle2,Cw5_2)


var Tpoint1_2 = Matter.SAT.collides(triangle2,s1_2);
var Tpoint2_2 = Matter.SAT.collides(triangle2,s2_2);
var Tpoint3_2 = Matter.SAT.collides(triangle2,s3_2);


var CSB1_2=Matter.SAT.collides(square2,bn1_2)
var CSB2_2=Matter.SAT.collides(square2,bn2_2)
var CSB3_2=Matter.SAT.collides(square2,bn3_2)
var CSB4_2=Matter.SAT.collides(square2,bn4_2)
var CSB5_2=Matter.SAT.collides(square2,bn5_2)



var CTB1_2=Matter.SAT.collides(triangle2,bn1_2)
var CTB2_2=Matter.SAT.collides(triangle2,bn2_2)
var CTB3_2=Matter.SAT.collides(triangle2,bn3_2)
var CTB4_2=Matter.SAT.collides(triangle2,bn4_2)
var CTB5_2=Matter.SAT.collides(triangle2,bn5_2)



// // square2 colliders check
if (CS1_2.collided ||CS2_2.collided ||CS3_2.collided ||CS4_2.collided ||CS5_2.collided ||CS6_2.collided ||CS7_2.collided ||CS8_2.collided ||
    CS9_2.collided ||CS10_2.collided ||CS11_2.collided  ||CS13_2.collided ||CS14_2.collided ||CS15_2.collided ||C1_2.collided||
    C4_2.collided ||C5_2.collided ){
     
      square2Contact=true
    
     }
    
    if(CS12_2.collided){
        square2Contact=false
    } 
    
    // // triangle2 colliders check
    if (CT1_2.collided ||CT2_2.collided ||CT3_2.collided ||CT4_2.collided ||CT5_2.collided ||CT6_2.collided ||CT7_2.collided ||CT8_2.collided ||
    CT9_2.collided ||CT10_2.collided ||CT11_2.collided||CT12_2.collided ||CT13_2.collided ||CT14_2.collided ||CT15_2.collided ||CTI1_2.collided||
    CTI4_2.collided ||CTI5_2.collided  ){
      
      triangle2Contact=true
    
     }
    
    if(CTI2_2.collided){
        triangle2.frictionAir=0.5
    } else{
        triangle2.frictionAir=0.01
    }
////////////////////// point2s
  if(Spoint1_2.collided || Tpoint1_2.collided){
      s1_2.render.visible=false
      Matter.Body.setPosition(s1_2,{x:2000,y:720})
      point2=point2+1
  }
  if(Spoint2_2.collided || Tpoint2_2.collided){
    s2_2.render.visible=false
    Matter.Body.setPosition(s2_2,{x:2000,y:720})
    point2=point2+1
  }
  if(Spoint3_2.collided || Tpoint3_2.collided){
    s3_2.render.visible=false
    Matter.Body.setPosition(s3_2,{x:2000,y:720})
    point2=point2+1
  }



// // square2 key controls  

if(win_2===false){

if (keys[87] && square2Contact) {
square2.force={x:0,y:-0.004}
const func = () => {
square2Contact=false
}
setTimeout(func, 0.125 * 1000);
if(keys[87]&&keys[65]){
square2.force = {      x: -0.0025,      y:-0.0025 }
}
if(keys[87]&&keys[68]){
square2.force = {      x: 0.0025,      y:-0.0025 }
}
}
if (keys[65] ) {
square2.force = {      x: -0.004,      y:0 }
} 
if (keys[68] ) {
square2.force = {      x: 0.004,      y: 0 }
}
   

// // triangle2 key controls
if (keys[38] && triangle2Contact) {
triangle2.force = {      x: 0,      y: -0.004 };
const func = () => {
triangle2Contact=false
}
setTimeout(func, 0.125 * 1000);
if(keys[38]&&keys[37]){
triangle2.force = {      x: -0.0025,      y:-0.0025 }
}
if(keys[38]&&keys[39]){
triangle2.force = {      x: 0.0025,      y:-0.0025 }
}
}
if (keys[37] ) {
triangle2.force = {      x: -0.0025,      y:0 }
} 
if (keys[39] ) {
triangle2.force = {      x: 0.0025,      y: 0 }

}
}
if(keys[32]){
    
// // console.log(mouse.position)
// //Matter.World.remove(engine.world,[square2,triangle2,Cw1_2,Cw2_2,Cw3_2,Cw4_2,Cw5_2])
// Matter.World.clear(engine.world,false)
//  Matter.Engine.clear(engine)
// Matter.Render.stop(render)
// //Matter.render.options.width=100
// Bounds.translate(render.bounds, {x:0,y:1});
// console.log(render.bounds.max.y)
// // //render.options.width=200

 }

// if(keys[13]){
//     Matter.Engine.run(engine)
//     Matter.Render.run(render)
//     ball=Matter.Bodies.circle(200,200 ,40) 
//     Matter.World.add(engine.world,ball)
// }
      
// // button clicked
// //1st
if(CSB1_2.collided || CTB1_2.collided){
    // 575
       if(bn1_2.position.y!==1370){
           Matter.Body.setPosition(bn1_2, { x:  bn1_2.position.x, y:bn1_2.position.y+0.5 });
       }
       if(bn1_2.position.y>=1360){
        //220+ 525-
      
        if(Cw1_2.position.y!==1040){
           Matter.Body.setPosition(Cw1_2, { x:  Cw1_2.position.x, y:Cw1_2.position.y+1 });
        }
   
       
       }
   
   }
   else{
   
       if(bn1_2.position.y!==1345){
           Matter.Body.setPosition(bn1_2, { x:  bn1_2.position.x, y:bn1_2.position.y-0.25 });
       }
       if(bn1_2.position.y<=1358){
       if(Cw1_2.position.y!==935){
           Matter.Body.setPosition(Cw1_2, { x:  Cw1_2.position.x, y:Cw1_2.position.y-1 });
        }
      
        }
   
   
       
    }
   
   // // // 2nd
   
   if(CSB2_2.collided || CTB2_2.collided){
     if(bn2_2.position.y!==843){
       Matter.Body.setPosition(bn2_2, { x:  bn2_2.position.x, y:bn2_2.position.y+0.5 });
   }
   if(bn2_2.position.y>=833){  
       if(Cw2_2.position.y<=1030){
           Matter.Body.setPosition(Cw2_2, { x:  Cw2_2.position.x+0.5, y:Cw2_2.position.y+1 });
        }
   }
   }
   else{
       if(bn2_2.position.y!==820){
           Matter.Body.setPosition(bn2_2, { x:  bn2_2.position.x, y:bn2_2.position.y-0.25 });
       }
       if(bn2_2.position.y<=831){
           if(Cw2_2.position.y!==910){
               Matter.Body.setPosition(Cw2_2, { x:  Cw2_2.position.x-0.5, y:Cw2_2.position.y-1 });
            }  
           }
    }
   
   // // // 3rd 
   
   if(CSB3_2.collided || CTB3_2.collided){
    //220,175
   
    
    if(bn3_2.position.y!==950){
       Matter.Body.setPosition(bn3_2, { x:  bn3_2.position.x, y:bn3_2.position.y+1 });
   }
   
   
   
   if(bn3_2.position.y>=945){
       
       if(Cw3_2.position.y<=1000){
           Matter.Body.setPosition(Cw3_2, { x:  Cw3_2.position.x, y:Cw3_2.position.y+1 });
        }
   
   
   }
   
   }
   else{
    
   
       if(bn3_2.position.y!==940){
           Matter.Body.setPosition(bn3_2, { x:  bn3_2.position.x, y:bn3_2.position.y-0.5 });
       }
   
   
       if(bn3_2.position.y<=943){
           if(Cw3_2.position.y!==870){
               Matter.Body.setPosition(Cw3_2, { x:  Cw3_2.position.x, y:Cw3_2.position.y-1 });
            }
          
           }
   
    }
   
    ////// 4th
   
    if(CSB4_2.collided || CTB4_2.collided){
       // 575
          if(bn4_2.position.y<=843){
              Matter.Body.setPosition(bn4_2, { x:  bn4_2.position.x, y:bn4_2.position.y+0.5 });
          }
          if(bn4_2.position.y>=833){
           //220+ 525-
         
           if(Cw4_2.position.x!==920){
              Matter.Body.setPosition(Cw4_2, { x:  Cw4_2.position.x+2, y:Cw4_2.position.y });
              if(Cw4_2.position.x==920){
               Matter.Body.setVelocity(Cw4_2, { x: 0, y: 0 });
               }else{
                Matter.Body.setVelocity(Cw4_2, { x: 0.65, y: 0 });    
               }
           }
      
          
          }
      
      }
      else{
      
          if(bn4_2.position.y!==820){
              Matter.Body.setPosition(bn4_2, { x:  bn4_2.position.x, y:bn4_2.position.y-0.25 });
          }
          if(bn4_2.position.y<=831){
          if(Cw4_2.position.x!==80){
              Matter.Body.setPosition(Cw4_2, { x:  Cw4_2.position.x-1, y:Cw4_2.position.y });
              if(Cw4_2.position.x==80){
              Matter.Body.setVelocity(Cw4_2, { x: 0, y: 0 });
              }else{
               Matter.Body.setVelocity(Cw4_2, { x: -1, y: 0 });    
              }
           }
         
           }
      
      
          
       }
    
   // 5th
   
   if(CSB5_2.collided || CTB5_2.collided){
       // 575
          if(bn5_2.position.y!==943){
              Matter.Body.setPosition(bn5_2, { x:  bn5_2.position.x, y:bn5_2.position.y+0.5 });
          }
          if(bn5_2.position.y>=933){
           //220+ 525-
         
           if(Cw5_2.position.y!==840){
              Matter.Body.setPosition(Cw5_2, { x:  Cw5_2.position.x, y:Cw5_2.position.y-2 });
           }
      
          
          }
      
      }
      else{
      
          if(bn5_2.position.y!==920){
              Matter.Body.setPosition(bn5_2, { x:  bn5_2.position.x, y:bn5_2.position.y-0.25 });
          }
          if(bn5_2.position.y<=931){
          if(Cw5_2.position.y!==1220){
              Matter.Body.setPosition(Cw5_2, { x:  Cw5_2.position.x, y:Cw5_2.position.y+1 });
           }
         
           }
      
      
          
       }
//////////////////////////////////////////////////// teleportation




if(keys[13]){


if(square2.position.x>=25 && square2.position.x<=70 && square2.position.y<=1050 && square2.position.y>=990){
    Matter.Body.setPosition(square2,{x:tele1_2.position.x,y:tele1_2.position.y})
}else if(square2.position.x>=920 && square2.position.x<=970 && square2.position.y<1200){
    Matter.Body.setPosition(square2,{x:tele2_2.position.x,y:tele2_2.position.y})
}else if(square2.position.x>=430 && square2.position.x<=470 && square2.position.y<=925 && square2.position.y>=850){
    Matter.Body.setPosition(square2,{x:tele4_2.position.x,y:tele4_2.position.y})
}else if(square2.position.x>=1200 && square2.position.x<=1250 && square2.position.y<=820 && square2.position.y>=750){
    Matter.Body.setPosition(square2,{x:tele3_2.position.x,y:tele3_2.position.y})
} 


if(triangle2.position.x>=25 && triangle2.position.x<=70 && triangle2.position.y<=1050 && triangle2.position.y>=990){
    Matter.Body.setPosition(triangle2,{x:tele1_2.position.x,y:tele1_2.position.y})
}else if(triangle2.position.x>=920 && triangle2.position.x<=970 && triangle2.position.y<1200){
    Matter.Body.setPosition(triangle2,{x:tele2_2.position.x,y:tele2_2.position.y})
}else if(triangle2.position.x>=430 && triangle2.position.x<=470 && triangle2.position.y<=925 && triangle2.position.y>=850){
    Matter.Body.setPosition(triangle2,{x:tele4_2.position.x,y:tele4_2.position.y})
}else if(triangle2.position.x>=1200 && triangle2.position.x<=1250 && triangle2.position.y<=820 && triangle2.position.y>=750){
    Matter.Body.setPosition(triangle2,{x:tele3_2.position.x,y:tele3_2.position.y})
} 


}





// ///////////// win_2ning condition
if(square2.position.x>=0 && square2.position.x<=140 && square2.position.y>=730 && square2.position.y<=790 &&
    triangle2.position.x>=0 && triangle2.position.x<=140 && triangle2.position.y>=730 && triangle2.position.y<=790 && 
    point2===3){
   win_2=true
   
 }
 if(win_2==true){
     hasWon2=true
    counter_2+=1
  if(wb1_2.position.x!==5){
    Matter.Body.setPosition(wb1_2,{x:wb1_2.position.x+1,y:wb1_2.position.y})
    Matter.Body.setPosition(wb2_2,{x:wb2_2.position.x-1,y:wb1_2.position.y})
   
  }
  if(wb1_2.position.x===5 && counter_2<=450){
     
  Matter.World.add(engine.world, [
    qled_2= Matter.Bodies.rectangle(75,920,20,10),
    oled_2= Matter.Bodies.rectangle(1425,920,20,10)
    
    ])
    qled_2.force={x:0.0063,y:-0.003}
    oled_2.force={x:-0.0063,y:-0.003}
    qled_2.collisionFilter.mask=200
    qled_2.collisionFilter.category=0x0008
    wb1_2.collisionFilter.category=0x0008
    wb1_2.collisionFilter.mask=200
     oled_2.collisionFilter.mask=200
    oled_2.collisionFilter.category=0x0008
    wb2_2.collisionFilter.category=0x0008
    wb2_2.collisionFilter.mask=200
  
   
  }
 

 
}

Matter.Body.rotate(rotor_2,0.15)











































  
// // /////////////////////////////////////////////////collision variables
// // /////////////////////////////////////////////////C=collision, S=square, T=triangle, B=buttons, numbers indicate block

// var CST = Matter.SAT.collides(square,triangle);
   
 


var CS1_3 = Matter.SAT.collides(square_3,w1_3);
var CS2_3 = Matter.SAT.collides(square_3,w2_3);
var CS3_3 = Matter.SAT.collides(square_3,w3_3);
var CS4_3 = Matter.SAT.collides(square_3,w4_3);
var CS5_3 = Matter.SAT.collides(square_3,w5_3);
var CS6_3 = Matter.SAT.collides(square_3,w6_3);
var CS7_3 = Matter.SAT.collides(square_3,w7_3);
var CS8_3 = Matter.SAT.collides(square_3,w8_3);
var CS9_3 = Matter.SAT.collides(square_3,w9_3);
var CS10_3 = Matter.SAT.collides(square_3,w10_3);
var CS11_3 = Matter.SAT.collides(square_3,w11_3);
var CS12_3 = Matter.SAT.collides(square_3,w12_3);
var CS13_3 = Matter.SAT.collides(square_3,w13_3);
var CS14_3 = Matter.SAT.collides(square_3,w14_3);
var CS15_3 = Matter.SAT.collides(square_3,w15_3);
var CS16_3 = Matter.SAT.collides(square_3,w16_3);
var CS17_3 = Matter.SAT.collides(square_3,w17_3);

var CSBR1_3 = Matter.SAT.collides(square_3,b1_3);
var CSBR2_3 = Matter.SAT.collides(square_3,b2_3);
var CSBR3_3 = Matter.SAT.collides(square_3,b3_3);
var CSBR4_3 = Matter.SAT.collides(square_3,b4_3);
var CSBR5_3 = Matter.SAT.collides(square_3,b5_3);
var CSBR6_3 = Matter.SAT.collides(square_3,b6_3);




var C1_3 = Matter.SAT.collides(square_3,Cw1_3);
var C2_3 = Matter.SAT.collides(square_3,Cw2_3);
var C3_3 = Matter.SAT.collides(square_3,Cw3_3)






var Spoint1_3 = Matter.SAT.collides(square_3,s1_3);
var Spoint2_3 = Matter.SAT.collides(square_3,s2_3);
var Spoint3_3 = Matter.SAT.collides(square_3,s3_3);



var CT1_3 = Matter.SAT.collides(triangle_3,w1_3);
var CT2_3 = Matter.SAT.collides(triangle_3,w2_3);
var CT3_3 = Matter.SAT.collides(triangle_3,w3_3);
var CT4_3 = Matter.SAT.collides(triangle_3,w4_3);
var CT5_3 = Matter.SAT.collides(triangle_3,w5_3);
var CT6_3 = Matter.SAT.collides(triangle_3,w6_3);
var CT7_3 = Matter.SAT.collides(triangle_3,w7_3);
var CT8_3 = Matter.SAT.collides(triangle_3,w8_3);
var CT9_3 = Matter.SAT.collides(triangle_3,w9_3);
var CT10_3 = Matter.SAT.collides(triangle_3,w10_3);
var CT11_3 = Matter.SAT.collides(triangle_3,w11_3);
var CT12_3 = Matter.SAT.collides(triangle_3,w12_3);
var CT13_3 = Matter.SAT.collides(triangle_3,w13_3);
var CT14_3 = Matter.SAT.collides(triangle_3,w14_3);
var CT15_3 = Matter.SAT.collides(triangle_3,w15_3);
var CT16_3 = Matter.SAT.collides(triangle_3,w16_3);
var CT17_3 = Matter.SAT.collides(triangle_3,w17_3);


var CTBR1_3 = Matter.SAT.collides(triangle_3,b1_3);
var CTBR2_3 = Matter.SAT.collides(triangle_3,b2_3);
var CTBR3_3 = Matter.SAT.collides(triangle_3,b3_3);
var CTBR4_3 = Matter.SAT.collides(triangle_3,b4_3);
var CTBR5_3 = Matter.SAT.collides(triangle_3,b5_3);
var CTBR6_3 = Matter.SAT.collides(triangle_3,b6_3);


var CTI1_3 = Matter.SAT.collides(triangle_3,Cw1_3);
var CTI2_3 = Matter.SAT.collides(triangle_3,Cw2_3);
var CTI3_3 = Matter.SAT.collides(triangle_3,Cw3_3)


var Tpoint1_3 = Matter.SAT.collides(triangle_3,s1_3);
var Tpoint2_3 = Matter.SAT.collides(triangle_3,s2_3);
var Tpoint3_3 = Matter.SAT.collides(triangle_3,s3_3);


var CSB1_3=Matter.SAT.collides(square_3,bn1_3)
var CSB2_3=Matter.SAT.collides(square_3,bn2_3)
var CSB3_3=Matter.SAT.collides(square_3,bn3_3)
var CSB4_3=Matter.SAT.collides(square_3,bn4_3)



var CTB1_3=Matter.SAT.collides(triangle_3,bn1_3)
var CTB2_3=Matter.SAT.collides(triangle_3,bn2_3)
var CTB3_3=Matter.SAT.collides(triangle_3,bn3_3)
var CTB4_3=Matter.SAT.collides(triangle_3,bn4_3)


var CSR1_3=Matter.SAT.collides(square_3,r1_3)
var CSR2_3=Matter.SAT.collides(square_3,r2_3)
var CTR1_3=Matter.SAT.collides(triangle_3,r1_3)
var CTR2_3=Matter.SAT.collides(triangle_3,r2_3)





// // // square colliders check
if (CS1_3.collided ||CS2_3.collided ||CS3_3.collided ||CS4_3.collided ||CS5_3.collided ||CS6_3.collided ||CS7_3.collided ||CS8_3.collided ||
    CS9_3.collided ||CS10_3.collided ||CS11_3.collided  ||CS13_3.collided ||CS14_3.collided ||CS15_3.collided ||C1_3.collided || CSR1_3.collided ||CSR2_3.collided
    ||CSBR1_3.collided||CSBR2_3.collided||CSBR3_3.collided||CSBR4_3.collided||CSBR5_3.collided||CSBR6_3.collided){
     
      squareContact_3=true
    
     }
    
    // // triangle colliders check
    if (CT1_3.collided ||CT2_3.collided ||CT3_3.collided ||CT4_3.collided ||CT5_3.collided ||CT6_3.collided ||CT7_3.collided ||CT8_3.collided ||
    CT9_3.collided ||CT10_3.collided ||CT11_3.collided||CT12_3.collided ||CT13_3.collided ||CT14_3.collided ||CT15_3.collided ||CTI1_3.collided ||
    CTR1_3.collided ||CTR2_3.collided||CTBR1_3.collided||CTBR2_3.collided||CTBR3_3.collided||CTBR4_3.collided||CTBR5_3.collided||CTBR6_3.collided){
      
      triangleContact_3=true
    
     }
    
    if(b1c1_3.length<=30 && (CSBR1_3.collided||CSBR2_3.collided||CSBR3_3.collided||CSBR4_3.collided||CSBR5_3.collided||CSBR6_3.collided)){
        Matter.Body.setPosition(square_3,{x:square_3.position.x,y:1450})
    }
    
    if(b1c1_3.length<=30 &&(CTBR1_3.collided||CTBR2_3.collided||CTBR3_3.collided||CTBR4_3.collided||CTBR5_3.collided||CTBR6_3.collided)){
        Matter.Body.setPosition(triangle_3,{x:triangle_3.position.x,y:1450})
    }
    
     
    
    
    // ////////////////////// points
    if(Spoint1_3.collided || Tpoint1_3.collided){
        s1_3.render.visible=false
        Matter.Body.setPosition(s1_3,{x:2000,y:20})
        point_3=point_3+1
    }
    if(Spoint2_3.collided || Tpoint2_3.collided){
      s2_3.render.visible=false
      Matter.Body.setPosition(s2_3,{x:2000,y:20})
      point_3=point_3+1
    }
    if(Spoint3_3.collided || Tpoint3_3.collided){
      s3_3.render.visible=false
      Matter.Body.setPosition(s3_3,{x:2000,y:20})
      point_3=point_3+1
    }
    

// // // square key controls  

if(win_3===false){

    if (keys[87] && squareContact_3) {
    square_3.force={x:0,y:-0.004}
    const func = () => {
    squareContact_3=false
    }
    setTimeout(func, 0.125 * 1000);
    if(keys[87]&&keys[65]){
    square_3.force = {      x: -0.0025,      y:-0.0025 }
    }
    if(keys[87]&&keys[68]){
    square_3.force = {      x: 0.0025,      y:-0.0025 }
    }
    }
    if (keys[65] ) {
    square_3.force = {      x: -0.004,      y:0 }
    } 
    if (keys[68] ) {
    square_3.force = {      x: 0.004,      y: 0 }
    }
       
    
    // // triangle_3 key controls
    if (keys[38] && triangleContact_3 ) {
    triangle_3.force = {      x: 0,      y: -0.004 };
    const func = () => {
    triangleContact_3=false
    }
    setTimeout(func, 0.125 * 1000);
    if(keys[38]&&keys[37]){
    triangle_3.force = {      x: -0.0025,      y:-0.0025 }
    }
    if(keys[38]&&keys[39]){
    triangle_3.force = {      x: 0.0025,      y:-0.0025 }
    }
    }
    if (keys[37] ) {
    triangle_3.force = {      x: -0.0025,      y:0 }
    } 
    if (keys[39] ) {
    triangle_3.force = {      x: 0.0025,      y: 0 }
    
     }
     if(keys[32]){
        
     //console.log(mouse.position)
    //console.log(bn1.position.y)
    //console.log(win)
    
    // b1c1.length=b1c1.length-1
    
     }
    }
    
    





// // // button clicked
// // //1st

if(CSB1_3.collided || CTB1_3.collided){
    // 575
       if(bn1_3.position.y!==2060){
           Matter.Body.setPosition(bn1_3, { x:  bn1_3.position.x, y:bn1_3.position.y+0.5 });
       }
       if(bn1_3.position.y>=2055){
        //220+ 525-
      
        if(Cw1_3.position.y!==2135){
           Matter.Body.setPosition(Cw1_3, { x:  Cw1_3.position.x, y:Cw1_3.position.y+1 });
        }
   
       
       }
   
   }
   else{
   
       if(bn1_3.position.y!==2045){
           Matter.Body.setPosition(bn1_3, { x:  bn1_3.position.x, y:bn1_3.position.y-0.25 });
       }
       if(bn1_3.position.y<=2052){
       if(Cw1_3.position.y!==1985){
           Matter.Body.setPosition(Cw1_3, { x:  Cw1_3.position.x, y:Cw1_3.position.y-1 });
        }
      
        }
   
   
       
    }
   
   // // // // 2nd
   
   if(CSB2_3.collided || CTB2_3.collided){
     if(bn2_3.position.y!==1900){
       Matter.Body.setPosition(bn2_3, { x:  bn2_3.position.x, y:bn2_3.position.y+0.5 });
   }
   if(bn2_3.position.y>=1890){  
       if(Cw2_3.position.y<=1730){
           Matter.Body.setPosition(Cw2_3, { x:  Cw2_3.position.x, y:Cw2_3.position.y+1 });
        }
   }
   }
   else{
       if(bn2_3.position.y!==1885){
           Matter.Body.setPosition(bn2_3, { x:  bn2_3.position.x, y:bn2_3.position.y-0.25 });
       }
       if(bn2_3.position.y<=1887){
           if(Cw2_3.position.y!==1590){
               Matter.Body.setPosition(Cw2_3, { x:  Cw2_3.position.x, y:Cw2_3.position.y-1 });
            }  
           }
    }
   
   // // // // 3rd 
   
   if(CSB3_3.collided || CTB3_3.collided){
       // 575
          if(bn3_3.position.y!==2058){
              Matter.Body.setPosition(bn3_3, { x:  bn3_3.position.x, y:bn3_3.position.y+0.5 });
          }
          if(bn3_3.position.y>=2055){
           //220+ 525-
         
           if(Cw3_3.position.y!==1330){
              Matter.Body.setPosition(Cw3_3, { x:  Cw3_3.position.x, y:Cw3_3.position.y-1 });
           }
      
          
          }
      
      }
      else{
      
          if(bn3_3.position.y!==2045){
              Matter.Body.setPosition(bn3_3, { x:  bn3_3.position.x, y:bn3_3.position.y-0.25 });
          }
          if(bn3_3.position.y<=2052){
          if(Cw3_3.position.y!==1470){
              Matter.Body.setPosition(Cw3_3, { x:  Cw3_3.position.x, y:Cw3_3.position.y+1 });
           }
         
          }
      
      
          
       }

//  ////// 4th

if(CSB4_3.collided || CTB4_3.collided){
    // 575
       if(bn4_3.position.y!==1720){
           Matter.Body.setPosition(bn4_3, { x:  bn4_3.position.x, y:bn4_3.position.y+0.5 });
       }
       if(bn4_3.position.y>=1710){
        //220+ 525-
     


      if(b1c1_3.length!==300){
          b1c1_3.length=b1c1_3.length+2
      }
      if(b1c2_3.length!==260){
         b1c2_3.length=b1c2_3.length+2
      }
      //
      if(b2c1_3.length<=250){
        b2c1_3.length=b2c1_3.length+2
    }
    if(b2c2_3.length<=210){
       b2c2_3.length=b2c2_3.length+2
    }
    //
    if(b3c1_3.length!==200){
        b3c1_3.length=b3c1_3.length+2
    }
    if(b3c2_3.length!==190){
       b3c2_3.length=b3c2_3.length+2
    }
    //
    if(b4c1_3.length!==200){
        b4c1_3.length=b4c1_3.length+2
    }
    if(b4c2_3.length!==230){
       b4c2_3.length=b4c2_3.length+2
    }
    //
    if(b5c1_3.length!==220){
        b5c1_3.length=b5c1_3.length+2
    }
    if(b5c2_3.length!==180){
       b5c2_3.length=b5c2_3.length+2
    }
    //
    if(b6c1_3.length!==170){
        b6c1_3.length=b6c1_3.length+2
    }
    if(b6c2_3.length!==130){
       b6c2_3.length=b6c2_3.length+2
    }
    
        
   
       
       }
   
   }
    else{
   
       if(bn4_3.position.y!==1705){
           Matter.Body.setPosition(bn4_3, { x:  bn4_3.position.x, y:bn4_3.position.y-0.25 });
       }
        if(bn4_3.position.y<=1708){
            if(b1c1_3.length!==0){
                counterB_3=counterB_3+1
                if(counterB_3>=400){
                    if(b1c1_3.length!==0){
                        b1c1_3.length=b1c1_3.length-2
                    }
                    if(b1c2_3.length!==0){
                       b1c2_3.length=b1c2_3.length-2
                    }
                    //
                    if(b2c1_3.length!==0){
                      b2c1_3.length=b2c1_3.length-2
                  }
                  if(b2c2_3.length!==0){
                     b2c2_3.length=b2c2_3.length-2
                  }
                  //
                  if(b3c1_3.length!==0){
                      b3c1_3.length=b3c1_3.length-2
                  }
                  if(b3c2_3.length!==0){
                     b3c2_3.length=b3c2_3.length-2
                  }
                  //
                  if(b4c1_3.length!==0){
                      b4c1_3.length=b4c1_3.length-2
                  }
                  if(b4c2_3.length!==0){
                     b4c2_3.length=b4c2_3.length-2
                  }
                  //
                  if(b5c1_3.length!==0){
                      b5c1_3.length=b5c1_3.length-2
                  }
                  if(b5c2_3.length!==0){
                     b5c2_3.length=b5c2_3.length-2
                  }
                  //
                  if(b6c1_3.length!==0){
                      b6c1_3.length=b6c1_3.length-2
                  }
                  if(b6c2_3.length!==0){
                     b6c2_3.length=b6c2_3.length-2
                  }
                  if(b1c1_3.length==0){
                 
                      counterB_3=0
                  }
                }
            }
          
      
         }
   
   
       
    }
 


// //////////////////////////////////////////////////// teleportation




if(keys[13]){


    if(square_3.position.x>=22 && square_3.position.x<=76 && square_3.position.y>=1980 && square_3.position.y<=2050){
        Matter.Body.setPosition(square_3,{x:tele1_3.position.x,y:tele1_3.position.y})
    }else if(square_3.position.x>=1170 && square_3.position.x<=1225 && square_3.position.y>=1700 &&square_3.position.y<=1765){
        Matter.Body.setPosition(square_3,{x:tele2_3.position.x,y:tele2_3.position.y})
    }else if(square_3.position.x>=20 && square_3.position.x<=75 && square_3.position.y>=1460 && square_3.position.y<=1530){
        Matter.Body.setPosition(square_3,{x:tele4_3.position.x,y:tele4_3.position.y})
    }else if(square_3.position.x>=565 && square_3.position.x<=630 && square_3.position.y>=1980 && square_3.position.y<=2040){
        Matter.Body.setPosition(square_3,{x:tele3_3.position.x,y:tele3_3.position.y})
    } 
    
    if(triangle_3.position.x>=22 && triangle_3.position.x<=76 && triangle_3.position.y>=1980 && triangle_3.position.y<=2050){
        Matter.Body.setPosition(triangle_3,{x:tele1_3.position.x,y:tele1_3.position.y})
    }else if(triangle_3.position.x>=1170 && triangle_3.position.x<=1225 && triangle_3.position.y>=1700 &&triangle_3.position.y<=1765){
        Matter.Body.setPosition(triangle_3,{x:tele2_3.position.x,y:tele2_3.position.y})
    }else if(triangle_3.position.x>=20 && triangle_3.position.x<=75 && triangle_3.position.y>=1460 && triangle_3.position.y<=1530){
        Matter.Body.setPosition(triangle_3,{x:tele4_3.position.x,y:tele4_3.position.y})
    }else if(triangle_3.position.x>=565 && triangle_3.position.x<=630 && triangle_3.position.y>=1980 && triangle_3.position.y<=2040){
        Matter.Body.setPosition(triangle_3,{x:tele3_3.position.x,y:tele3_3.position.y})
    } 
    


}


//////////////////////////////////////////rotor rotation
Matter.Body.rotate(r1_3,0.125)
Matter.Body.rotate(r2_3,0.125)

// // ///////////// winning condition
if(square_3.position.x>=1375  && square_3.position.y>=1400 && square_3.position.y<=1500 &&
    triangle_3.position.x>=1375  && triangle_3.position.y>=1400 && triangle_3.position.y<=1500 && 
    point_3==3){
   win_3=true
 }
if(win_3==true){
    hasWon3=true
    counter_3+=1
  if(wb1_3.position.x!==5){
    Matter.Body.setPosition(wb1_3,{x:wb1_3.position.x+1,y:wb1_3.position.y})
    Matter.Body.setPosition(wb2_3,{x:wb2_3.position.x-1,y:wb1_3.position.y})
   
  }
  if(wb1_3.position.x===5){
  Matter.World.add(engine.world, [
    qled= Matter.Bodies.rectangle(75,1620,20,10),
    oled= Matter.Bodies.rectangle(1425,1620,20,10)
    
    ])
    qled.force={x:0.006,y:-0.003}
    oled.force={x:-0.0061,y:-0.003}
    qled.collisionFilter.mask=200
    qled.collisionFilter.category=0x0008
    wb1_3.collisionFilter.category=0x0008
    wb1_3.collisionFilter.mask=200
     oled.collisionFilter.mask=200
    oled.collisionFilter.category=0x0008
    wb2_3.collisionFilter.category=0x0008
    wb2_3.collisionFilter.mask=200
  
   
  }
 

 
}



































// // // /////////////////////////////////////////////////collision variables
// // // /////////////////////////////////////////////////C=collision, S=square, T=triangle, B=buttons, numbers indicate block

// // var CST = Matter.SAT.collides(square,triangle);
   
 


var CS1_4 = Matter.SAT.collides(square_4,w1_4);
var CS2_4 = Matter.SAT.collides(square_4,w2_4);
var CS3_4 = Matter.SAT.collides(square_4,w3_4);
var CS8_4 = Matter.SAT.collides(square_4,w8_4);
var CS9_4 = Matter.SAT.collides(square_4,w9_4);
var CS10_4 = Matter.SAT.collides(square_4,w10_4);
var CS11_4 = Matter.SAT.collides(square_4,w11_4);
var CS12_4 = Matter.SAT.collides(square_4,w12_4);
var CS13_4 = Matter.SAT.collides(square_4,w13_4);
var CS14_4 = Matter.SAT.collides(square_4,w14_4);
var CS15_4 = Matter.SAT.collides(square_4,w15_4);
var CS16_4 = Matter.SAT.collides(square_4,w16_4);
var CS17_4 = Matter.SAT.collides(square_4,w17_4);
var CS18_4 = Matter.SAT.collides(square_4,w18_4);
var CS19_4 = Matter.SAT.collides(square_4,w19_4);
var CS20_4 = Matter.SAT.collides(square_4,w20_4);
var CS21_4 = Matter.SAT.collides(square_4,w21_4);
var CS22_4 = Matter.SAT.collides(square_4,w22_4);
var CS23_4 = Matter.SAT.collides(square_4,w23_4);
var CS24_4 = Matter.SAT.collides(square_4,w24_4);
var CS25_4 = Matter.SAT.collides(square_4,w25_4);
var CS26_4 = Matter.SAT.collides(square_4,w26_4);
var CS29_4 = Matter.SAT.collides(square_4,w29_4);
var CS30_4 = Matter.SAT.collides(square_4,w30_4);
var CS31_4 = Matter.SAT.collides(square_4,w31_4);
var CS32_4 = Matter.SAT.collides(square_4,w32_4);
var CS33_4 = Matter.SAT.collides(square_4,w33_4);
var CS34_4 = Matter.SAT.collides(square_4,w34_4);
var CS36_4 = Matter.SAT.collides(square_4,w36_4);
var CS37_4 = Matter.SAT.collides(square_4,w37_4);







var Spoint1_4 = Matter.SAT.collides(square_4,s1_4);
var Spoint2_4 = Matter.SAT.collides(square_4,s2_4);
var Spoint3_4 = Matter.SAT.collides(square_4,s3_4);



var CT1_4 = Matter.SAT.collides(triangle_4,w1_4);
var CT2_4 = Matter.SAT.collides(triangle_4,w2_4);
var CT3_4 = Matter.SAT.collides(triangle_4,w3_4);
var CT8_4 = Matter.SAT.collides(triangle_4,w8_4);
var CT9_4 = Matter.SAT.collides(triangle_4,w9_4);
var CT10_4 = Matter.SAT.collides(triangle_4,w10_4);
var CT11_4 = Matter.SAT.collides(triangle_4,w11_4);
var CT12_4 = Matter.SAT.collides(triangle_4,w12_4);
var CT13_4 = Matter.SAT.collides(triangle_4,w13_4);
var CT14_4 = Matter.SAT.collides(triangle_4,w14_4);
var CT15_4 = Matter.SAT.collides(triangle_4,w15_4);
var CT16_4 = Matter.SAT.collides(triangle_4,w16_4);
var CT17_4 = Matter.SAT.collides(triangle_4,w17_4);
var CT18_4 = Matter.SAT.collides(triangle_4,w18_4);
var CT19_4 = Matter.SAT.collides(triangle_4,w19_4);
var CT20_4 = Matter.SAT.collides(triangle_4,w20_4);
var CT21_4 = Matter.SAT.collides(triangle_4,w21_4);
var CT22_4 = Matter.SAT.collides(triangle_4,w22_4);
var CT23_4 = Matter.SAT.collides(triangle_4,w23_4);
var CT24_4 = Matter.SAT.collides(triangle_4,w24_4);
var CT25_4 = Matter.SAT.collides(triangle_4,w25_4);
var CT26_4 = Matter.SAT.collides(triangle_4,w26_4);
var CT29_4 = Matter.SAT.collides(triangle_4,w29_4);
var CT30_4 = Matter.SAT.collides(triangle_4,w30_4);
var CT31_4 = Matter.SAT.collides(triangle_4,w31_4);
var CT32_4 = Matter.SAT.collides(triangle_4,w32_4);
var CT33_4 = Matter.SAT.collides(triangle_4,w33_4);
var CT34_4 = Matter.SAT.collides(triangle_4,w34_4);
var CT36_4 = Matter.SAT.collides(triangle_4,w36_4);
var CT37_4 = Matter.SAT.collides(triangle_4,w37_4);




var Tpoint1_4 = Matter.SAT.collides(triangle_4,s1_4);
var Tpoint2_4 = Matter.SAT.collides(triangle_4,s2_4);
var Tpoint3_4 = Matter.SAT.collides(triangle_4,s3_4);


var CSB1_4=Matter.SAT.collides(square_4,bn1_4)
var CSB2_4=Matter.SAT.collides(square_4,bn2_4)
var CSB3_4=Matter.SAT.collides(square_4,bn3_4)
var CSB4_4=Matter.SAT.collides(square_4,bn4_4)
var CSB5_4=Matter.SAT.collides(square_4,bn5_4)
var CSB6_4=Matter.SAT.collides(square_4,bn6_4)
var CSB7_4=Matter.SAT.collides(square_4,bn7_4)
var CSB8_4=Matter.SAT.collides(square_4,bn8_4)



var CTB1_4=Matter.SAT.collides(triangle_4,bn1_4)
var CTB2_4=Matter.SAT.collides(triangle_4,bn2_4)
var CTB3_4=Matter.SAT.collides(triangle_4,bn3_4)
var CTB4_4=Matter.SAT.collides(triangle_4,bn4_4)
var CTB5_4=Matter.SAT.collides(triangle_4,bn5_4)
var CTB6_4=Matter.SAT.collides(triangle_4,bn6_4)
var CTB7_4=Matter.SAT.collides(triangle_4,bn7_4)
var CTB8_4=Matter.SAT.collides(triangle_4,bn8_4)

var boxCol1_4=Matter.SAT.collides(box_4,bn8_4)
var boxCol2_4=Matter.SAT.collides(box_4,bn4_4)

var Cw5SCol_4=Matter.SAT.collides(square_4,Cw5_4)
var Cw5TCol_4=Matter.SAT.collides(triangle_4,Cw5_4)


var Cw4S1_4=Matter.SAT.collides(square_4,Cw4_4.bodies[0])
var Cw4S2_4=Matter.SAT.collides(square_4,Cw4_4.bodies[1])
var Cw4S3_4=Matter.SAT.collides(square_4,Cw4_4.bodies[2])
var Cw4S4_4=Matter.SAT.collides(square_4,Cw4_4.bodies[3])
var Cw4S5_4=Matter.SAT.collides(square_4,Cw4_4.bodies[4])
var Cw4S6_4=Matter.SAT.collides(square_4,Cw4_4.bodies[5])
var Cw4S7_4=Matter.SAT.collides(square_4,Cw4_4.bodies[6])
var Cw4S8_4=Matter.SAT.collides(square_4,Cw4_4.bodies[7])
var Cw4S9_4=Matter.SAT.collides(square_4,Cw4_4.bodies[8])
var Cw4S10_4=Matter.SAT.collides(square_4,Cw4_4.bodies[9])

var Cw4T1_4=Matter.SAT.collides(triangle_4,Cw4_4.bodies[0])
var Cw4T2_4=Matter.SAT.collides(triangle_4,Cw4_4.bodies[1])
var Cw4T3_4=Matter.SAT.collides(triangle_4,Cw4_4.bodies[2])
var Cw4T4_4=Matter.SAT.collides(triangle_4,Cw4_4.bodies[3])
var Cw4T5_4=Matter.SAT.collides(triangle_4,Cw4_4.bodies[4])
var Cw4T6_4=Matter.SAT.collides(triangle_4,Cw4_4.bodies[5])
var Cw4T7_4=Matter.SAT.collides(triangle_4,Cw4_4.bodies[6])
var Cw4T8_4=Matter.SAT.collides(triangle_4,Cw4_4.bodies[7])
var Cw4T9_4=Matter.SAT.collides(triangle_4,Cw4_4.bodies[8])
var Cw4T10_4=Matter.SAT.collides(triangle_4,Cw4_4.bodies[9])




 // square colliders check
if (CS1_4.collided ||CS2_4.collided ||CS3_4.collided  ||CS8_4.collided ||CS9_4.collided ||CS10_4.collided ||CS11_4.collided  || CS12_4.collided ||
    CS13_4.collided ||CS14_4.collided ||CS15_4.collided ||CS16_4.collided ||CS17_4.collided ||CS18_4.collided ||CS19_4.collided ||CS20_4.collided ||
    CS21_4.collided ||CS22_4.collided ||CS23_4.collided ||CS24_4.collided ||CS25_4.collided ||CS26_4.collided  ||CS29_4.collided ||CS30_4.collided ||
    CS31_4.collided  || CS32_4.collided ||CS33_4.collided ||CS34_4.collided ||  CS36_4.collided ||CS37_4.collided ||Cw5SCol_4.collided ||
    Cw4S1_4.collided || Cw4S2_4.collided || Cw4S3_4.collided || Cw4S4_4.collided || Cw4S5_4.collided || Cw4S6_4.collided || Cw4S7_4.collided ||
    Cw4S8_4.collided || Cw4S9_4.collided || Cw4S10_4.collided ){
      squareContact_4=true
     }
    
 // triangle colliders check
if (CT1_4.collided ||CT2_4.collided ||CT3_4.collided  ||CT8_4.collided ||CT9_4.collided ||CT10_4.collided ||CT11_4.collided  || CT12_4.collided ||
    CT13_4.collided ||CT14_4.collided ||CT15_4.collided ||CT16_4.collided ||CT17_4.collided ||CT18_4.collided ||CT19_4.collided ||CT20_4.collided ||
    CT21_4.collided ||CT22_4.collided ||CT23_4.collided ||CT24_4.collided ||CT25_4.collided ||CT26_4.collided  ||CT29_4.collided ||CT30_4.collided ||
    CT31_4.collided  || CT32_4.collided ||CT33_4.collided ||CT34_4.collided ||  CT36_4.collided ||CT37_4.collided || Cw5TCol_4.collided ||
    Cw4T1_4.collided || Cw4T2_4.collided || Cw4T3_4.collided || Cw4T4_4.collided || Cw4T5_4.collided || Cw4T6_4.collided || Cw4T7_4.collided ||
    Cw4T8_4.collided || Cw4T9_4.collided || Cw4T10_4.collided){
      
      triangleContact_4=true
    
     }
 
     
    
    
    // ////////////////////// points
    if(Spoint1_4.collided || Tpoint1_4.collided){
        s1_4.render.visible=false
        Matter.Body.setPosition(s1_4,{x:2000,y:20})
        point_4=point_4+1
    }
    if(Spoint2_4.collided || Tpoint2_4.collided){
      s2_4.render.visible=false
      Matter.Body.setPosition(s2_4,{x:2000,y:20})
      point_4=point_4+1
    }
    if(Spoint3_4.collided || Tpoint3_4.collided){
      s3_4.render.visible=false
      Matter.Body.setPosition(s3_4,{x:2000,y:20})
      point_4=point_4+1
    }
    

// // // // square key controls  

if(win_4===false){

    if (keys[87] && squareContact_4) {
    square_4.force={x:0,y:-0.004}
    const func = () => {
    squareContact_4=false
    }
    setTimeout(func, 0.125 * 1000);
    if(keys[87]&&keys[65]){
    square_4.force = {      x: -0.0025,      y:-0.0025 }
    }
    if(keys[87]&&keys[68]){
    square_4.force = {      x: 0.0025,      y:-0.0025 }
    }
    }
    if (keys[65] ) {
    square_4.force = {      x: -0.004,      y:0 }
    } 
    if (keys[68] ) {
    square_4.force = {      x: 0.004,      y: 0 }
    }
       
    
    // // triangle_4 key controls
    if (keys[38] && triangleContact_4) {
    triangle_4.force = {      x: 0,      y: -0.004 };
    const func = () => {
    triangleContact_4=false
    }
    setTimeout(func, 0.125 * 1000);
    if(keys[38]&&keys[37]){
    triangle_4.force = {      x: -0.0025,      y:-0.0025 }
    }
    if(keys[38]&&keys[39]){
    triangle_4.force = {      x: 0.0025,      y:-0.0025 }
    }
    }
    if (keys[37] ) {
    triangle_4.force = {      x: -0.0025,      y:0 }
    } 
    if (keys[39] ) {
    triangle_4.force = {      x: 0.0025,      y: 0 }
    
     }
     if(keys[32]){
        
    
     }
    }
  
// // // // button clicked

/// //1st




if(balls.length===16){
    var balls1_4=Matter.SAT.collides(balls[0],bn1_4)
    var balls2_4=Matter.SAT.collides(balls[1],bn1_4)
    var balls3_4=Matter.SAT.collides(balls[2],bn1_4)
    var balls4_4=Matter.SAT.collides(balls[3],bn1_4)
    var balls5_4=Matter.SAT.collides(balls[4],bn1_4)
    var balls6_4=Matter.SAT.collides(balls[5],bn1_4)
    var balls7_4=Matter.SAT.collides(balls[6],bn1_4)
    var balls8_4=Matter.SAT.collides(balls[7],bn1_4)
    var balls9_4=Matter.SAT.collides(balls[8],bn1_4)
    var balls10_4=Matter.SAT.collides(balls[9],bn1_4)
    var balls12_4=Matter.SAT.collides(balls[10],bn1_4)
    var balls13_4=Matter.SAT.collides(balls[11],bn1_4)
    var balls14_4=Matter.SAT.collides(balls[12],bn1_4)
    var balls15_4=Matter.SAT.collides(balls[13],bn1_4)
    var balls16_4=Matter.SAT.collides(balls[14],bn1_4)
  
 //   console.log("yes15")


    
if(balls1_4.collided || balls2_4.collided || balls3_4.collided ||balls4_4.collided || balls5_4.collided || balls6_4.collided ||balls7_4.collided || balls8_4.collided || balls9_4.collided ||balls10_4.collided || balls16_4.collided || balls12_4.collided ||balls13_4.collided ||balls14_4.collided||balls15_4.collided){
    // 575
    //console.log("yeahhh!!!!")
       if(bn1_4.position.y!==2690){
           Matter.Body.setPosition(bn1_4, { x:  bn1_4.position.x, y:bn1_4.position.y+0.5 });
       }
       if(bn1_4.position.y>=2680){
        //220+ 525-
      
        if(Cw1_4.position.y!==2885){
           Matter.Body.setPosition(Cw1_4, { x:  Cw1_4.position.x, y:Cw1_4.position.y+1 });
        }
   
       
       }
   
   }else{
   
       if(bn1_4.position.y!==2675){
           Matter.Body.setPosition(bn1_4, { x:  bn1_4.position.x, y:bn1_4.position.y-0.25 });
       }
       if(bn1_4.position.y<=2679){
       if(Cw1_4.position.y!==2675){
           Matter.Body.setPosition(Cw1_4, { x:  Cw1_4.position.x, y:Cw1_4.position.y-1 });
        }
      
        }
   
   
       
    }
}else if(balls.length==15){
    var balls1_4=Matter.SAT.collides(balls[0],bn1_4)
    var balls2_4=Matter.SAT.collides(balls[1],bn1_4)
    var balls3_4=Matter.SAT.collides(balls[2],bn1_4)
    var balls4_4=Matter.SAT.collides(balls[3],bn1_4)
    var balls5_4=Matter.SAT.collides(balls[4],bn1_4)
    var balls6_4=Matter.SAT.collides(balls[5],bn1_4)
    var balls7_4=Matter.SAT.collides(balls[6],bn1_4)
    var balls8_4=Matter.SAT.collides(balls[7],bn1_4)
    var balls9_4=Matter.SAT.collides(balls[8],bn1_4)
    var balls10_4=Matter.SAT.collides(balls[9],bn1_4)
    var balls12_4=Matter.SAT.collides(balls[10],bn1_4)
    var balls13_4=Matter.SAT.collides(balls[11],bn1_4)
    var balls14_4=Matter.SAT.collides(balls[12],bn1_4)
    var balls15_4=Matter.SAT.collides(balls[13],bn1_4)
    
    //console.log("yes14")


     
if(balls1_4.collided || balls2_4.collided || balls3_4.collided ||balls4_4.collided || balls5_4.collided || balls6_4.collided ||balls7_4.collided || balls8_4.collided || balls9_4.collided ||balls10_4.collided|| balls12_4.collided ||balls13_4.collided ||balls14_4.collided||balls15_4.collided){
    // 575
    //console.log("yeahhh!!!!")
       if(bn1_4.position.y!==2690){
           Matter.Body.setPosition(bn1_4, { x:  bn1_4.position.x, y:bn1_4.position.y+0.5 });
       }
       if(bn1_4.position.y>=2680){
        //220+ 525-
      
        if(Cw1_4.position.y!==2885){
           Matter.Body.setPosition(Cw1_4, { x:  Cw1_4.position.x, y:Cw1_4.position.y+1 });
        }
   
       
       }
   
   }else{
   
       if(bn1_4.position.y!==2675){
           Matter.Body.setPosition(bn1_4, { x:  bn1_4.position.x, y:bn1_4.position.y-0.25 });
       }
       if(bn1_4.position.y<=2679){
       if(Cw1_4.position.y!==2675){
           Matter.Body.setPosition(Cw1_4, { x:  Cw1_4.position.x, y:Cw1_4.position.y-1 });
        }
      
        }
   
   
       
    }




}else if(balls.length==14){
    var balls1_4=Matter.SAT.collides(balls[0],bn1_4)
    var balls2_4=Matter.SAT.collides(balls[1],bn1_4)
    var balls3_4=Matter.SAT.collides(balls[2],bn1_4)
    var balls4_4=Matter.SAT.collides(balls[3],bn1_4)
    var balls5_4=Matter.SAT.collides(balls[4],bn1_4)
    var balls6_4=Matter.SAT.collides(balls[5],bn1_4)
    var balls7_4=Matter.SAT.collides(balls[6],bn1_4)
    var balls8_4=Matter.SAT.collides(balls[7],bn1_4)
    var balls9_4=Matter.SAT.collides(balls[8],bn1_4)
    var balls10_4=Matter.SAT.collides(balls[9],bn1_4)
    var balls12_4=Matter.SAT.collides(balls[10],bn1_4)
    var balls13_4=Matter.SAT.collides(balls[11],bn1_4)
    var balls14_4=Matter.SAT.collides(balls[12],bn1_4)
  //  console.log("yes13")

     
if(balls1_4.collided || balls2_4.collided || balls3_4.collided ||balls4_4.collided || balls5_4.collided || balls6_4.collided ||balls7_4.collided || balls8_4.collided || balls9_4.collided ||balls10_4.collided || balls12_4.collided ||balls13_4.collided ||balls14_4.collided){
    // 575
  //  console.log("yeahhh!!!!")
       if(bn1_4.position.y!==2690){
           Matter.Body.setPosition(bn1_4, { x:  bn1_4.position.x, y:bn1_4.position.y+0.5 });
       }
       if(bn1_4.position.y>=2680){
        //220+ 525-
      
        if(Cw1_4.position.y!==2885){
           Matter.Body.setPosition(Cw1_4, { x:  Cw1_4.position.x, y:Cw1_4.position.y+1 });
        }
   
       
       }
   
   }else{
   
       if(bn1_4.position.y!==2675){
           Matter.Body.setPosition(bn1_4, { x:  bn1_4.position.x, y:bn1_4.position.y-0.25 });
       }
       if(bn1_4.position.y<=2679){
       if(Cw1_4.position.y!==2675){
           Matter.Body.setPosition(Cw1_4, { x:  Cw1_4.position.x, y:Cw1_4.position.y-1 });
        }
      
        }
   
   
       
    }
}else if(balls.length==12){
    var balls1_4=Matter.SAT.collides(balls[0],bn1_4)
    var balls2_4=Matter.SAT.collides(balls[1],bn1_4)
    var balls3_4=Matter.SAT.collides(balls[2],bn1_4)
    var balls4_4=Matter.SAT.collides(balls[3],bn1_4)
    var balls5_4=Matter.SAT.collides(balls[4],bn1_4)
    var balls6_4=Matter.SAT.collides(balls[5],bn1_4)
    var balls7_4=Matter.SAT.collides(balls[6],bn1_4)
    var balls8_4=Matter.SAT.collides(balls[7],bn1_4)
    var balls9_4=Matter.SAT.collides(balls[8],bn1_4)
    var balls10_4=Matter.SAT.collides(balls[9],bn1_4)
    var balls12_4=Matter.SAT.collides(balls[10],bn1_4)
    var balls13_4=Matter.SAT.collides(balls[11],bn1_4) 
    //console.log("yes14")
     
if(balls1_4.collided || balls2_4.collided || balls3_4.collided ||balls4_4.collided || balls5_4.collided || balls6_4.collided ||balls7_4.collided || balls8_4.collided || balls9_4.collided ||balls10_4.collided  || balls12_4.collided ||balls13_4.collided ){
    // 575
  //  console.log("yeahhh!!!!")
       if(bn1_4.position.y!==2690){
           Matter.Body.setPosition(bn1_4, { x:  bn1_4.position.x, y:bn1_4.position.y+0.5 });
       }
       if(bn1_4.position.y>=2680){
        //220+ 525-
      
        if(Cw1_4.position.y!==2885){
           Matter.Body.setPosition(Cw1_4, { x:  Cw1_4.position.x, y:Cw1_4.position.y+1 });
        }
   
       
       }
   
   }else{
   
       if(bn1_4.position.y!==2675){
           Matter.Body.setPosition(bn1_4, { x:  bn1_4.position.x, y:bn1_4.position.y-0.25 });
       }
       if(bn1_4.position.y<=2679){
       if(Cw1_4.position.y!==2675){
           Matter.Body.setPosition(Cw1_4, { x:  Cw1_4.position.x, y:Cw1_4.position.y-1 });
        }
      
        }
   
   
       
    }
}


// // // //2nd

if(CSB2_4.collided || CTB2_4.collided){
    // 575
       if(bn2_4.position.y!==2767){
           Matter.Body.setPosition(bn2_4, { x:  bn2_4.position.x, y:bn2_4.position.y+0.5 });
       }
       if(bn2_4.position.y>=2762){
        //220+ 525-
      
        if(Cw2_4.position.y!==2885){
           Matter.Body.setPosition(Cw2_4, { x:  Cw2_4.position.x, y:Cw2_4.position.y+1 });
        }
   
       
       }
   
   }
   else{
   
       if(bn2_4.position.y!==2752){
           Matter.Body.setPosition(bn2_4, { x:  bn2_4.position.x, y:bn2_4.position.y-0.25 });
       }
       if(bn2_4.position.y<=2761){
       if(Cw2_4.position.y>=2645){
           Matter.Body.setPosition(Cw2_4, { x:  Cw2_4.position.x, y:Cw2_4.position.y-5 });
        }
      
        }
   
   
       
    }
   
//    // // // //3rd
   
   if(CSB3_4.collided || CTB3_4.collided){
     if(bn3_4.position.y!==2767){
       Matter.Body.setPosition(bn3_4, { x:  bn3_4.position.x, y:bn3_4.position.y+0.5 });
   }
   if(bn3_4.position.y>=2757){  
    if(i<=15){
    ball=Matter.Bodies.circle(25,2120,15)
    Matter.World.add(engine.world,[ball])
    balls.push(ball)
    ball.force={x:0.02,y:0.01}
    i++
    }
    if(i>=15){ 
        thrown=true
    }
   }
   }
   else{
       if(bn3_4.position.y!==2752){
           Matter.Body.setPosition(bn3_4, { x:  bn3_4.position.x, y:bn3_4.position.y-0.25 });
       }
       if(bn3_4.position.y<=2752){    
           }
    }
    if(thrown==true){
        ballWait++
        if(ballWait>=400){
            for (j = 0; j < balls.length; j++) {
                balls[j].collisionFilter.mask=200
                balls[j].collisionFilter.category=0x0008
               if(j==balls.length-1){        
                if(balls.length>10){
                    balls.splice(0, balls.length) 
                }
                thrown=false
                ballWait=0
                i=0  
               }
              }
        }
    }
    if(balls.length==0){
        if(bn1_4.position.y!==2675){
            Matter.Body.setPosition(bn1_4, { x:  bn1_4.position.x, y:bn1_4.position.y-0.25 });
        }
        if(bn1_4.position.y<=2679){
        if(Cw1_4.position.y!==2675){
            Matter.Body.setPosition(Cw1_4, { x:  Cw1_4.position.x, y:Cw1_4.position.y-1 });
         }
         }
    }
  

//    // // // // 4th 
   
   if(CSB4_4.collided || CTB4_4.collided || boxCol2_4.collided){
       // 575
          if(bn4_4.position.y!==2767){
              Matter.Body.setPosition(bn4_4, { x:  bn4_4.position.x, y:bn4_4.position.y+0.5 });
          }
          if(bn4_4.position.y>=2762){
           //220+ 525-
           if(Cw4con2_4.pointA.x!==650  ){
         Cw4con2_4.pointA={x:Cw4con2_4.pointA.x+1,y:Cw4con2_4.pointA.y}
           }
           if(Cw4con2_4.pointA.y!==2305){
            Cw4con2_4.pointA={x:Cw4con2_4.pointA.x,y:Cw4con2_4.pointA.y+1}

           }
          }
      
      }
      else{
      
          if(bn4_4.position.y!==2752){
              Matter.Body.setPosition(bn4_4, { x:  bn4_4.position.x, y:bn4_4.position.y-0.25 });
          }
          if(bn4_4.position.y<=2761){
            if(Cw4con2_4.pointA.x!==470){
                Cw4con2_4.pointA={x:Cw4con2_4.pointA.x-1,y:Cw4con2_4.pointA.y}
                  }
                  if(Cw4con2_4.pointA.y!==2155){
                   Cw4con2_4.pointA={x:Cw4con2_4.pointA.x,y:Cw4con2_4.pointA.y-1}
       
                  }
          }
      
      
          
       }

// //  ////// 5th
if(CSB5_4.collided || CTB5_4.collided){
    // 575
    if(bn5_4.position.y!==2690){
        Matter.Body.setPosition(bn5_4, { x:  bn5_4.position.x, y:bn5_4.position.y+0.5 });
    }
        if(bn5_4.position.y>=2682){
            if(Cw5con1_4.length!==0){
                Cw5con1_4.length=Cw5con1_4.length-1
            }
            if(Cw5con2_4.length!==0){
                Cw5con2_4.length=Cw5con1_4.length-1
            }
       }
   
   }
   else{
   
    if(bn5_4.position.y!==2675){
        Matter.Body.setPosition(bn5_4, { x:  bn5_4.position.x, y:bn5_4.position.y-0.25 });
    }
       if(bn5_4.position.y<=2678){
        if(Cw5con1_4.length!==300){
            Cw5con1_4.length=Cw5con1_4.length+1
        }
        if(Cw5con2_4.length!==300){
            Cw5con2_4.length=Cw5con1_4.length+1
        }
       }
   
   
       
    }

    //6th

    if(CSB6_4.collided || CTB6_4.collided){
        // 575
           if(bn6_4.position.y!==2360){
               Matter.Body.setPosition(bn6_4, { x:  bn6_4.position.x, y:bn6_4.position.y+0.5 });
           }
           if(bn6_4.position.y>=2350){
            //220+ 525-
          
            if(Cw6_4.position.y!==2300){
               Matter.Body.setPosition(Cw6_4, { x:  Cw6_4.position.x, y:Cw6_4.position.y-1 });
            }
       
           
           }
       
       }
       else{
       
           if(bn6_4.position.y!==2345){
               Matter.Body.setPosition(bn6_4, { x:  bn6_4.position.x, y:bn6_4.position.y-0.25 });
           }
           if(bn6_4.position.y<=2348){
           if(Cw6_4.position.y!==2440){
               Matter.Body.setPosition(Cw6_4, { x:  Cw6_4.position.x, y:Cw6_4.position.y+1 });
            }
          
            }
       
       
           
        }

        //7th

        if(CSB7_4.collided || CTB7_4.collided){
               if(bn7_4.position.y!==2195){
                   Matter.Body.setPosition(bn7_4, { x:  bn7_4.position.x, y:bn7_4.position.y+0.5 });
               }
               if(bn7_4.position.y>=2187){
                Matter.Body.rotate(Cw8_4,0.225)
               }
           }
           else{
               if(bn7_4.position.y!==2180){
                   Matter.Body.setPosition(bn7_4, { x:  bn7_4.position.x, y:bn7_4.position.y-0.25 });
               }   
            }

        // 8th

        if(CSB8_4.collided || CTB8_4.collided || boxCol1_4.collided){
            // 575
               if(bn8_4.position.y!==2267){
                   Matter.Body.setPosition(bn8_4, { x:  bn8_4.position.x, y:bn8_4.position.y+0.5 });
               }
               if(bn8_4.position.y>=2260){
                //220+ 525-
              
                if(Cw7_4.position.y!==2050){
                   Matter.Body.setPosition(Cw7_4, { x:  Cw7_4.position.x, y:Cw7_4.position.y-1 });
                }
           
               
               }
           
           }
           else{
           
               if(bn8_4.position.y!==2252){
                   Matter.Body.setPosition(bn8_4, { x:  bn8_4.position.x, y:bn8_4.position.y-0.25 });
               }
               if(bn8_4.position.y<=2257){
               if(Cw7_4.position.y!==2150){
                   Matter.Body.setPosition(Cw7_4, { x:  Cw7_4.position.x, y:Cw7_4.position.y+1 });
                }
              
                }
           
           
               
            }

// // //////////////////////////////////////////////////// teleportation




if(keys[13]){


    if(square_4.position.x>=1130 && square_4.position.x<=1180 && square_4.position.y>=2680 && square_4.position.y<=2725){
        Matter.Body.setPosition(square_4,{x:tele2_4.position.x,y:tele2_4.position.y})
    }else if(square_4.position.x>=650 && square_4.position.x<=700 && square_4.position.y>=2225 &&square_4.position.y<=2300){
        Matter.Body.setPosition(square_4,{x:tele1_4.position.x,y:tele1_4.position.y})
    }else if(square_4.position.x>=350 && square_4.position.x<=410 && square_4.position.y>=2250 && square_4.position.y<=2320){
        Matter.Body.setPosition(square_4,{x:tele4_4.position.x,y:tele4_4.position.y})
    }else if(square_4.position.x>=700 && square_4.position.x<=770 && square_4.position.y>=2115 && square_4.position.y<=2185){
        Matter.Body.setPosition(square_4,{x:tele3_4.position.x,y:tele3_4.position.y})
    } 
    
    if(triangle_4.position.x>=1130 && triangle_4.position.x<=1180 && triangle_4.position.y>=2680 && triangle_4.position.y<=2725){
        Matter.Body.setPosition(triangle_4,{x:tele2_4.position.x,y:tele2_4.position.y})
    }else if(triangle_4.position.x>=650 && triangle_4.position.x<=700 && triangle_4.position.y>=2225 &&triangle_4.position.y<=2300){
        Matter.Body.setPosition(triangle_4,{x:tele1_4.position.x,y:tele1_4.position.y})
    }else if(triangle_4.position.x>=350 && triangle_4.position.x<=410 && triangle_4.position.y>=2250 && triangle_4.position.y<=2320){
        Matter.Body.setPosition(triangle_4,{x:tele4_4.position.x,y:tele4_4.position.y})
    }else if(triangle_4.position.x>=700 && triangle_4.position.x<=770 && triangle_4.position.y>=2115 && triangle_4.position.y<=2185){
        Matter.Body.setPosition(triangle_4,{x:tele3_4.position.x,y:tele3_4.position.y})
    } 
   
    


}


// //////////////////////////////////////////rotor rotation

Matter.Body.rotate(Cw8_4,rotatingAmount_4)

// // // ///////////// winning condition
if(square_4.position.x>=200 && square_4.position.x<=370 && square_4.position.y<=2500 && square_4.position.y<=2175 &&
    triangle_4.position.x>=200 && triangle_4.position.x<=370 && triangle_4.position.y<=2500 && triangle_4.position.y<=2175 && 
    point_4===3){
   win_4=true
 }
if(win_4==true){
    hasWon4=true
    counter_4+=1
  if(wb1_4.position.x!==5){
    Matter.Body.setPosition(wb1_4,{x:wb1_4.position.x+1,y:wb1_4.position.y})
    Matter.Body.setPosition(wb2_4,{x:wb2_4.position.x-1,y:wb1_4.position.y})
   
  }
  if(wb1_4.position.x===5){
  Matter.World.add(engine.world, [
    qled= Matter.Bodies.rectangle(75,2320,20,10),
    oled= Matter.Bodies.rectangle(1425,2320,20,10)
    
    ])
    qled.force={x:0.006,y:-0.003}
    oled.force={x:-0.0061,y:-0.003}
    qled.collisionFilter.mask=200
    qled.collisionFilter.category=0x0008
    wb1_4.collisionFilter.category=0x0008
    wb1_4.collisionFilter.mask=200
     oled.collisionFilter.mask=200
    oled.collisionFilter.category=0x0008
    wb2_4.collisionFilter.category=0x0008
    wb2_4.collisionFilter.mask=200
  
   
  }
 

 
}
























  
// // // /////////////////////////////////////////////////collision variables
// // // /////////////////////////////////////////////////C=collision, S=square, T=triangle, B=buttons, numbers indicate block

// // // var CST = Matter.SAT.collides(square,triangle);
   
 


var CS1_5 = Matter.SAT.collides(square_5,w1_5);
var CS2_5 = Matter.SAT.collides(square_5,w2_5);
var CS3_5 = Matter.SAT.collides(square_5,w3_5);
var CS4_5 = Matter.SAT.collides(square_5,w4_5);
var CS5_5 = Matter.SAT.collides(square_5,w5_5);
var CS6_5 = Matter.SAT.collides(square_5,w6_5);
var CS7_5 = Matter.SAT.collides(square_5,w7_5);
var CS8_5 = Matter.SAT.collides(square_5,w8_5);
var CS9_5 = Matter.SAT.collides(square_5,w9_5);
var CS10_5 = Matter.SAT.collides(square_5,w10_5);
var CS11_5 = Matter.SAT.collides(square_5,w11_5);
var CS12_5 = Matter.SAT.collides(square_5,w12_5);
var CS13_5 = Matter.SAT.collides(square_5,w13_5);
var CS14_5 = Matter.SAT.collides(square_5,w14_5);
var CS15_5 = Matter.SAT.collides(square_5,w15_5);
var CS16_5 = Matter.SAT.collides(square_5,w16_5);
var CS17_5 = Matter.SAT.collides(square_5,w17_5);
var CS18_5 = Matter.SAT.collides(square_5,w18_5);
var CS19_5 = Matter.SAT.collides(square_5,w19_5);
var CS20_5 = Matter.SAT.collides(square_5,w20_5);
var CS21_5 = Matter.SAT.collides(square_5,w21_5);
var CS22_5 = Matter.SAT.collides(square_5,w22_5);
var CS23_5 = Matter.SAT.collides(square_5,w23_5);
var CS24_5 = Matter.SAT.collides(square_5,w24_5);
var CS25_5 = Matter.SAT.collides(square_5,w25_5);
var CS26_5 = Matter.SAT.collides(square_5,w26_5);
var CS27_5 = Matter.SAT.collides(square_5,w27_5);
var CS28_5 = Matter.SAT.collides(square_5,w28_5);
var CS29_5 = Matter.SAT.collides(square_5,w29_5);
var CS30_5 = Matter.SAT.collides(square_5,w30_5);
var CS31_5 = Matter.SAT.collides(square_5,w31_5);
var CS32_5 = Matter.SAT.collides(square_5,w32_5);
var CS33_5 = Matter.SAT.collides(square_5,w33_5);
var CS34_5 = Matter.SAT.collides(square_5,w34_5);
var CS35_5 = Matter.SAT.collides(square_5,w35_5);
var CS36_5 = Matter.SAT.collides(square_5,w36_5);
var CS37_5 = Matter.SAT.collides(square_5,w37_5);
var CS38_5 = Matter.SAT.collides(square_5,w38_5);
var CS39_5 = Matter.SAT.collides(square_5,w39_5);
var CS40_5 = Matter.SAT.collides(square_5,w40_5);
var CS41_5 = Matter.SAT.collides(square_5,w41_5);
var CS42_5 = Matter.SAT.collides(square_5,w42_5);
var CS43_5 = Matter.SAT.collides(square_5,w43_5);
var CS44_5 = Matter.SAT.collides(square_5,w44_5);
var CS45_5 = Matter.SAT.collides(square_5,w45_5);
var CS46_5 = Matter.SAT.collides(square_5,w46_5);
var CS47_5 = Matter.SAT.collides(square_5,w47_5);
var CS48_5 = Matter.SAT.collides(square_5,w48_5);
var CS49_5 = Matter.SAT.collides(square_5,w49_5);







var Spoint1_5 = Matter.SAT.collides(square_5,s1_5);
var Spoint2_5 = Matter.SAT.collides(square_5,s2_5);
var Spoint3_5 = Matter.SAT.collides(square_5,s3_5);





var CT1_5 = Matter.SAT.collides(triangle_5,w1_5);
var CT2_5 = Matter.SAT.collides(triangle_5,w2_5);
var CT3_5 = Matter.SAT.collides(triangle_5,w3_5);
var CT4_5 = Matter.SAT.collides(triangle_5,w4_5);
var CT5_5 = Matter.SAT.collides(triangle_5,w5_5);
var CT6_5 = Matter.SAT.collides(triangle_5,w6_5);
var CT7_5 = Matter.SAT.collides(triangle_5,w7_5);
var CT8_5 = Matter.SAT.collides(triangle_5,w8_5);
var CT9_5 = Matter.SAT.collides(triangle_5,w9_5);
var CT10_5 = Matter.SAT.collides(triangle_5,w10_5);
var CT11_5 = Matter.SAT.collides(triangle_5,w11_5);
var CT12_5 = Matter.SAT.collides(triangle_5,w12_5);
var CT13_5 = Matter.SAT.collides(triangle_5,w13_5);
var CT14_5 = Matter.SAT.collides(triangle_5,w14_5);
var CT15_5 = Matter.SAT.collides(triangle_5,w15_5);
var CT16_5 = Matter.SAT.collides(triangle_5,w16_5);
var CT17_5 = Matter.SAT.collides(triangle_5,w17_5);
var CT18_5 = Matter.SAT.collides(triangle_5,w18_5);
var CT19_5 = Matter.SAT.collides(triangle_5,w19_5);
var CT20_5 = Matter.SAT.collides(triangle_5,w20_5);
var CT21_5 = Matter.SAT.collides(triangle_5,w21_5);
var CT22_5 = Matter.SAT.collides(triangle_5,w22_5);
var CT23_5 = Matter.SAT.collides(triangle_5,w23_5);
var CT24_5 = Matter.SAT.collides(triangle_5,w24_5);
var CT25_5 = Matter.SAT.collides(triangle_5,w25_5);
var CT26_5 = Matter.SAT.collides(triangle_5,w26_5);
var CT27_5 = Matter.SAT.collides(triangle_5,w27_5);
var CT28_5 = Matter.SAT.collides(triangle_5,w28_5);
var CT29_5 = Matter.SAT.collides(triangle_5,w29_5);
var CT30_5 = Matter.SAT.collides(triangle_5,w30_5);
var CT31_5 = Matter.SAT.collides(triangle_5,w31_5);
var CT32_5 = Matter.SAT.collides(triangle_5,w32_5);
var CT33_5 = Matter.SAT.collides(triangle_5,w33_5);
var CT34_5 = Matter.SAT.collides(triangle_5,w34_5);
var CT35_5 = Matter.SAT.collides(triangle_5,w35_5);
var CT36_5 = Matter.SAT.collides(triangle_5,w36_5);
var CT37_5 = Matter.SAT.collides(triangle_5,w37_5);
var CT38_5 = Matter.SAT.collides(triangle_5,w38_5);
var CT39_5 = Matter.SAT.collides(triangle_5,w39_5);
var CT40_5 = Matter.SAT.collides(triangle_5,w40_5);
var CT41_5 = Matter.SAT.collides(triangle_5,w41_5);
var CT42_5 = Matter.SAT.collides(triangle_5,w42_5);
var CT43_5 = Matter.SAT.collides(triangle_5,w43_5);
var CT44_5 = Matter.SAT.collides(triangle_5,w44_5);
var CT45_5 = Matter.SAT.collides(triangle_5,w45_5);
var CT46_5 = Matter.SAT.collides(triangle_5,w46_5);
var CT47_5 = Matter.SAT.collides(triangle_5,w47_5);
var CT48_5 = Matter.SAT.collides(triangle_5,w48_5);
var CT49_5 = Matter.SAT.collides(triangle_5,w49_5);



var Tpoint1_5 = Matter.SAT.collides(triangle_5,s1_5);
var Tpoint2_5 = Matter.SAT.collides(triangle_5,s2_5);
var Tpoint3_5 = Matter.SAT.collides(triangle_5,s3_5);




var CSB1_5=Matter.SAT.collides(square_5,bn1_5)
var CSB2_5=Matter.SAT.collides(square_5,bn2_5)
var CSB3_5=Matter.SAT.collides(square_5,bn3_5)
var CSB4_5=Matter.SAT.collides(square_5,bn4_5)
var CSB5_5=Matter.SAT.collides(square_5,bn5_5)
var CSB6_1_5=Matter.SAT.collides(square_5,bn6_1_5)
var CSB6_2_5=Matter.SAT.collides(square_5,bn6_2_5)
var CSB7_5=Matter.SAT.collides(square_5,bn7_5)
var CSB8_5=Matter.SAT.collides(square_5,bn8_5)


var CTB1_5=Matter.SAT.collides(triangle_5,bn1_5)
var CTB2_5=Matter.SAT.collides(triangle_5,bn2_5)
var CTB3_5=Matter.SAT.collides(triangle_5,bn3_5)
var CTB4_5=Matter.SAT.collides(triangle_5,bn4_5)
var CTB5_5=Matter.SAT.collides(triangle_5,bn5_5)
var CTB6_1_5=Matter.SAT.collides(triangle_5,bn6_1_5)
var CTB6_2_5=Matter.SAT.collides(triangle_5,bn6_2_5)
var CTB7_5=Matter.SAT.collides(triangle_5,bn7_5)
var CTB8_5=Matter.SAT.collides(triangle_5,bn8_5)

var wallBallCol_5=Matter.SAT.collides(wallBall_5,bn7_5)
var boxCol_5=Matter.SAT.collides(box_5,bn8_5)



var Cw3ColS_5=Matter.SAT.collides(square_5,Cw3_5)
var Cw4ColS_5=Matter.SAT.collides(square_5,Cw4_5)
var rot1ColS_5=Matter.SAT.collides(square_5,rotor1_5)
var rot2ColS_5=Matter.SAT.collides(square_5,rotor2_5)


var Cw3ColT_5=Matter.SAT.collides(triangle_5,Cw3_5)
var Cw4ColT_5=Matter.SAT.collides(triangle_5,Cw4_5)
var rot1ColT_5=Matter.SAT.collides(triangle_5,rotor1_5)
var rot2ColT_5=Matter.SAT.collides(triangle_5,rotor2_5)


var car1_0_5=Matter.SAT.collides(square_5,car_5.bodies[0])
var car1_1_5=Matter.SAT.collides(square_5,car_5.bodies[1])
var car1_2_5=Matter.SAT.collides(square_5,car_5.bodies[2])
var car2_0_5=Matter.SAT.collides(square_5,car2_5.bodies[0])
var car2_1_5=Matter.SAT.collides(square_5,car2_5.bodies[1])
var car2_2_5=Matter.SAT.collides(square_5,car2_5.bodies[2])
var car3_0_5=Matter.SAT.collides(square_5,car3_5.bodies[0])
var car3_1_5=Matter.SAT.collides(square_5,car3_5.bodies[1])
var car3_2_5=Matter.SAT.collides(square_5,car3_5.bodies[2])
var car4_0_5=Matter.SAT.collides(square_5,car4_5.bodies[0])
var car4_1_5=Matter.SAT.collides(square_5,car4_5.bodies[1])
var car4_2_5=Matter.SAT.collides(square_5,car4_5.bodies[2])


var carT1_0_5=Matter.SAT.collides(triangle_5,car_5.bodies[0])
var carT1_1_5=Matter.SAT.collides(triangle_5,car_5.bodies[1])
var carT1_2_5=Matter.SAT.collides(triangle_5,car_5.bodies[2])
var carT2_0_5=Matter.SAT.collides(triangle_5,car2_5.bodies[0])
var carT2_1_5=Matter.SAT.collides(triangle_5,car2_5.bodies[1])
var carT2_2_5=Matter.SAT.collides(triangle_5,car2_5.bodies[2])
var carT3_0_5=Matter.SAT.collides(triangle_5,car3_5.bodies[0])
var carT3_1_5=Matter.SAT.collides(triangle_5,car3_5.bodies[1])
var carT3_2_5=Matter.SAT.collides(triangle_5,car3_5.bodies[2])
var carT4_0_5=Matter.SAT.collides(triangle_5,car4_5.bodies[0])
var carT4_1_5=Matter.SAT.collides(triangle_5,car4_5.bodies[1])
var carT4_2_5=Matter.SAT.collides(triangle_5,car4_5.bodies[2])



/////////////////// car, square, triangle collision

if(square_5.position.y>=3500 || triangle_5.position.y>=3500){
    const func = () => {
        Matter.Body.setPosition(loseFace,{x:750,y:3150})
        }
        setTimeout(func,  2500);
        win_5=true
    
} 



if(car1_0_5.collided || car1_1_5.collided || car1_2_5.collided || car2_0_5.collided || car2_1_5.collided || car2_2_5.collided ||
    car3_0_5.collided || car3_1_5.collided || car3_2_5.collided ||car4_0_5.collided || car4_1_5.collided || car4_2_5.collided ){
    if(carStack_5<1){
        
stackSquare_5=Composites.stack(square_5.position.x,square_5.position.y,4,4,0,0, function(x, y) {
    return Bodies.rectangle(x, y, 10, 10,{
        render:{
            fillStyle:'rgb(4,150,255)'
       
        }
    });
  
});
Matter.World.add(engine.world,[stackSquare_5])
Matter.World.remove(engine.world,[square_5])
    }

    const func = () => {
        Matter.Body.setPosition(loseFace,{x:750,y:3150})
        }
        setTimeout(func,  2500);
win_5=true
carStack_5+=1
}

if(carT1_0_5.collided || carT1_1_5.collided || carT1_2_5.collided || carT2_0_5.collided || carT2_1_5.collided || carT2_2_5.collided ||
    carT3_0_5.collided || carT3_1_5.collided || carT3_2_5.collided ||carT4_0_5.collided || carT4_1_5.collided || carT4_2_5.collided ){
    if(carTStack_5<1){
        
stackTriangle_5=Composites.pyramid(triangle_5.position.x,triangle_5.position.y,4,4,0,0, function(x, y) {
    return Bodies.polygon(x, y, 3, 7,{
        render:{
            fillStyle:'rgb(216,17,89)'
       
        }
    });
  
});
Matter.World.add(engine.world,[stackTriangle_5])
Matter.World.remove(engine.world,[triangle_5])

    }

    const func = () => {
        Matter.Body.setPosition(loseFace,{x:750,y:3150})
        }
        setTimeout(func,  2500);
        win_5=true

carTStack_5+=1
}











 // square colliders check
if (CS1_5.collided ||CS2_5.collided ||CS3_5.collided  ||CS4_5.collided ||CS5_5.collided ||CS6_5.collided  ||CS7_5.collided ||CS8_5.collided ||CS9_5.collided ||CS10_5.collided ||CS11_5.collided  || CS12_5.collided ||
    CS13_5.collided ||CS14_5.collided ||CS15_5.collided ||CS16_5.collided ||CS17_5.collided ||CS18_5.collided ||CS19_5.collided ||CS20_5.collided ||
    CS21_5.collided ||CS22_5.collided ||CS23_5.collided ||CS24_5.collided ||CS25_5.collided ||CS26_5.collided  ||CS27_5.collided ||CS28_5.collided   ||CS30_5.collided ||
    CS34_5.collided ||CS35_5.collided  ||CS37_5.collided  ||CS39_5.collided    ||
  CS48_5.collided  || Cw3ColS_5.collided||Cw4ColS_5.collided||rot1ColS_5.collided||rot2ColS_5.collided  ){
      squareContact_5=true
     }
    
 // triangle colliders check
 if (CT1_5.collided ||CT2_5.collided ||CT3_5.collided  ||CT4_5.collided ||CT5_5.collided ||CT6_5.collided  ||CT7_5.collided ||CT8_5.collided ||CT9_5.collided ||CT10_5.collided ||CT11_5.collided  || CT12_5.collided ||
    CT13_5.collided ||CT14_5.collided ||CT15_5.collided ||CT16_5.collided ||CT17_5.collided ||CT18_5.collided ||CT19_5.collided ||CT20_5.collided ||
    CT21_5.collided ||CT22_5.collided ||CT23_5.collided ||CT24_5.collided ||CT25_5.collided ||CT26_5.collided  ||CT27_5.collided ||CT28_5.collided   ||CT30_5.collided ||
    CT34_5.collided ||CT35_5.collided  ||CT37_5.collided  ||CT39_5.collided    ||
   CT48_5.collided  || Cw3ColT_5.collided||Cw4ColT_5.collided||rot1ColT_5.collided||rot2ColT_5.collided  ){
    triangleContact_5=true
     }
 
     
    
    
//     // ////////////////////// points
    if(Spoint1_5.collided || Tpoint1_5.collided){
        s1_5.render.visible=false
        Matter.Body.setPosition(s1_5,{x:2000,y:20})
        point_5=point_5+1
    }
    if(Spoint2_5.collided || Tpoint2_5.collided){
      s2_5.render.visible=false
      Matter.Body.setPosition(s2_5,{x:2000,y:20})
      point_5=point_5+1
    }
    if(Spoint3_5.collided || Tpoint3_5.collided){
      s3_5.render.visible=false
      Matter.Body.setPosition(s3_5,{x:2000,y:20})
      point_5=point_5+1
    }
    

// // // // // square key controls  

if(win_5===false){

    if (keys[87]&& squareContact_5 ) {
    square_5.force={x:0,y:-0.004}
    const func = () => {
    squareContact_5=false
    }
    setTimeout(func, 0.125 * 1000);
    if(keys[87]&&keys[65]){
    square_5.force = {      x: -0.0025,      y:-0.0025 }
    }
    if(keys[87]&&keys[68]){
    square_5.force = {      x: 0.0025,      y:-0.0025 }
    }
    }
    if (keys[65] ) {
    square_5.force = {      x: -0.004,      y:0 }
    } 
    if (keys[68] ) {
    square_5.force = {      x: 0.004,      y: 0 }
    }
       
    
    // // triangle_5 key controls
    if (keys[38] && triangleContact_5 ) {
    triangle_5.force = {      x: 0,      y: -0.004 };
    const func = () => {
    triangleContact_5=false
    }
    setTimeout(func, 0.125 * 1000);
    if(keys[38]&&keys[37]){
    triangle_5.force = {      x: -0.0025,      y:-0.0025 }
    }
    if(keys[38]&&keys[39]){
    triangle_5.force = {      x: 0.0025,      y:-0.0025 }
    }
    }
    if (keys[37] ) {
    triangle_5.force = {      x: -0.0025,      y:0 }
    } 
    if (keys[39] ) {
    triangle_5.force = {      x: 0.0025,      y: 0 }
    
     }
     if(keys[32]){
       console.log(car2_5.bodies[0].position.y)
     }
    }




//////////////////////// car works




if(above==true){

    
if(car_5.bodies[0].position.x>1520){
    Matter.Body.setPosition(car_5.bodies[0],{x:30,y:3225})
    Matter.Body.setPosition(car_5.bodies[1],{x:30,y:3225})
    Matter.Body.setPosition(car_5.bodies[2],{x:30,y:3225})
}
if(car2_5.bodies[0].position.x>1520){
    Matter.Body.setPosition(car2_5.bodies[0],{x:30,y:3225})
    Matter.Body.setPosition(car2_5.bodies[1],{x:30,y:3225})
    Matter.Body.setPosition(car2_5.bodies[2],{x:30,y:3225})
    loop1_5+=1
}

if(car3_5.bodies[0].position.x< -20){
    Matter.Body.setPosition(car3_5.bodies[0],{x:1470,y:3225})
    Matter.Body.setPosition(car3_5.bodies[1],{x:1470,y:3225})
    Matter.Body.setPosition(car3_5.bodies[2],{x:1470,y:3225})
}
if(car4_5.bodies[0].position.x< -20){
    Matter.Body.setPosition(car4_5.bodies[0],{x:1470,y:3225})
    Matter.Body.setPosition(car4_5.bodies[1],{x:1470,y:3225})
    Matter.Body.setPosition(car4_5.bodies[2],{x:1470,y:3225})
    loop2_5+=1
}    

if(a==true){
    Matter.Body.rotate(Cw3_5,-0.01)
}
if(Cw3_5.angle==-0.2500000000000001){
  Matter.Body.rotate(Cw3_5,0.01)
  car3_5.bodies[0].force = {      x: -0.03,      y: 0 }
  car4_5.bodies[0].force = {      x: -0.03,      y: 0 }
}
if(a==false){
    Matter.Body.rotate(Cw3_5,0.01)
}
if(Cw3_5.angle==0.26000000000000006){
   Matter.Body.rotate(Cw3_5,-0.01)
   car_5.bodies[0].force = {      x: 0.03,      y: 0 }
   car2_5.bodies[0].force = {      x: 0.03,      y: 0 }
 
}



if(loop2_5==1){
    car3_5.bodies[0].force = {      x: 0.0025,      y: 0 }
    car4_5.bodies[0].force = {      x: 0.0025,      y: 0 }
    setTimeout(() => {  
      a=false
     }, 2500);
     setTimeout(() => {  
        loop2_5=0
       }, 3000);
}

if(loop1_5==1){
    car_5.bodies[0].force = {      x: -0.0025,      y: 0 }
    car2_5.bodies[0].force = {      x: -0.0025,      y: 0 }
    setTimeout(() => {  
      a=true
     }, 2500);
     setTimeout(() => {  
        loop1_5=0
       }, 3000);
}
}


///////////////////////////car works





// // // // // button clicked

// /// //1st


if(CSB1_5.collided || CTB1_5.collided){
    // 575
       if(bn1_5.position.y!==2915){
           Matter.Body.setPosition(bn1_5, { x:  bn1_5.position.x, y:bn1_5.position.y+0.5 });
       }
       if(bn1_5.position.y>=2905){
        //220+ 525-
      
        if(Cw1_5.position.x!==-70){
           Matter.Body.setPosition(Cw1_5, { x:  Cw1_5.position.x-1, y:Cw1_5.position.y+1 });
        }
   
       
       }
   
   }
   else{
   
       if(bn1_5.position.y!==2900){
           Matter.Body.setPosition(bn1_5, { x:  bn1_5.position.x, y:bn1_5.position.y-0.25 });
       }
       if(bn1_5.position.y<=2902){
       if(Cw1_5.position.x!==50){
           Matter.Body.setPosition(Cw1_5, { x:  Cw1_5.position.x+1, y:Cw1_5.position.y-1 });
        }
      
        }
   
   
       
    }
   

// // // // //2nd

if(CSB2_5.collided || CTB2_5.collided){
    // 575
       if(bn2_5.position.x!==1220){
           Matter.Body.setPosition(bn2_5, { x:  bn2_5.position.x-0.5, y:bn2_5.position.y });
       }
       if(bn2_5.position.y>=1225){
        //220+ 525-
      ballsThrown=true

       if(i_5==1 || i_5==5){
            ballsColor_5='rgb(245,90,60)'
        }else if(i_5==2){
            ballsColor_5='rgb(245,210,89)'
        }else if(i_5==3){
            ballsColor_5='rgb(6,62,123)'
        }else if(i_5==4){
            ballsColor_5='rgb(236,236,209)'
        }
        if(i_5<5){
        ball_5=Matter.Bodies.circle(1425,2930,15,{
            render:{
                fillStyle:ballsColor_5
            }
        })
       Matter.World.add(engine.world,[ball_5])
       balls_5.push(ball_5)
        ball_5.force={x:0,y:-0.045}
        }
        i_5+=1
        
       
       }
   
   }
   else{
   
       if(bn2_5.position.x!==1235){
           Matter.Body.setPosition(bn2_5, { x:  bn2_5.position.x+0.25, y:bn2_5.position.y });
       }
  
       
    }
    
   
// //    // // // //3rd
   if(balls_5.length==5){

    var   balls1=Matter.SAT.collides(balls_5[0],bn3_5)
    var   balls2=Matter.SAT.collides(balls_5[1],bn3_5)
    var   balls3=Matter.SAT.collides(balls_5[2],bn3_5)
    var   balls4=Matter.SAT.collides(balls_5[3],bn3_5)
    var   balls5=Matter.SAT.collides(balls_5[4],bn3_5)

   if(balls1.collided ||balls2.collided ||balls3.collided ||balls4.collided ||balls5.collided ){
     if(bn3_5.position.y!==2890){
       Matter.Body.setPosition(bn3_5, { x:  bn3_5.position.x, y:bn3_5.position.y+0.5 });
   }
   if(bn3_5.position.y>=2885){  
megaBtn=true
   above=false
 if(Cw3_5.angle<=1.55){
       Matter.Body.rotate(Cw3_5,0.01)

 }
 if(Cw3_5.position.y!==3200){
     Matter.Body.setPosition(Cw3_5,{x:Cw3_5.position.x,y:Cw3_5.position.y-1})
 }
 //-200,2100
Matter.Body.setPosition(e6_5,{x:-10,y:e6_5.position.y})
Matter.Body.setPosition(e7_5,{x:1510,y:e7_5.position.y})
if(car_5.bodies[0].position.y<=3415){
   car_5.bodies[0].force = {      x: -0.0025,      y: 0 }
}else{
    car_5.bodies[0].force = {      x: 0.03,      y: 0 }

}

   if(car2_5.bodies[0].position.y<=3415){
    car2_5.bodies[0].force = {      x: -0.0025,      y: 0 }
   }else{
    car2_5.bodies[0].force = {      x: 0.03,      y: 0 }
   }
   if(car3_5.bodies[0].position.y<=3415){
    car3_5.bodies[0].force = {      x: 0.0025,      y: 0 }
   }else{
    car3_5.bodies[0].force = {      x: 0.03,      y: 0 }
   }
   if(car4_5.bodies[0].position.y<=3415){
    car4_5.bodies[0].force = {      x: 0.0025,      y: 0 }
}else{
    car4_5.bodies[0].force = {      x: 0.03,      y: 0 }
   }

   if(w11_5.position.y!==3380){
    Matter.Body.setPosition(w11_5,{x:w11_5.position.x,y:w11_5.position.y-1})
    Matter.Body.setPosition(w12_5,{x:w12_5.position.x,y:w12_5.position.y-1})
    Matter.Body.setPosition(w13_5,{x:w13_5.position.x,y:w13_5.position.y-1})
    Matter.Body.setPosition(w14_5,{x:w14_5.position.x,y:w14_5.position.y-1})
}








   }
   }
   else{
       if(bn3_5.position.y!==2877){
           Matter.Body.setPosition(bn3_5, { x:  bn3_5.position.x, y:bn3_5.position.y-0.25 });
       }
    
    }
   }

// //    // // // // 4th 
   
   if(CSB4_5.collided || CTB4_5.collided){
       // 575
          if(bn4_5.position.y!==3072){
              Matter.Body.setPosition(bn4_5, { x:  bn4_5.position.x, y:bn4_5.position.y+0.5 });
          }
          if(bn4_5.position.y>=3062){
           //220+ 525-
         if(Cw4con1_5.length!==70){
             Cw4con1_5.length=Cw4con1_5.length-1
         }
         if(Cw4con2_5.length!==70){
             Cw4con2_5.length=Cw4con2_5.length-1
         }
          }
      
      }
      else{
      
          if(bn4_5.position.y!==3057){
              Matter.Body.setPosition(bn4_5, { x:  bn4_5.position.x, y:bn4_5.position.y-0.25 });
          }
          if(bn4_5.position.y<=3060){
            if(Cw4con1_5.length!==230){
             Cw4con1_5.length=Cw4con1_5.length+1
         }
         if(Cw4con2_5.length!==210){
             Cw4con2_5.length=Cw4con2_5.length+1
         }
          }
      
      
          
       }

// // //  ////// 5th
if(CSB5_5.collided || CTB5_5.collided){
    // 575
    if(bn5_5.position.y!==3262){
        Matter.Body.setPosition(bn5_5, { x:  bn5_5.position.x, y:bn5_5.position.y+0.5 });
    }
        if(bn5_5.position.y>=3152){
            if(Cw5con1_5.pointA.y!==3000){
          Cw5con1_5.pointA= {x:Cw5con1_5.pointA.x,y:Cw5con1_5.pointA.y-1}
            }
            if(Cw5con1_5.pointA.x!==1380){
          Cw5con1_5.pointA= {x:Cw5con1_5.pointA.x+1,y:Cw5con1_5.pointA.y}
            }
       }
   
   }
   else{
   
    if(bn5_5.position.y!==3147){
        Matter.Body.setPosition(bn5_5, { x:  bn5_5.position.x, y:bn5_5.position.y-0.25 });
    }
       if(bn5_5.position.y<=3149){
        if(Cw5con1_5.pointA.y!==3120){
          Cw5con1_5.pointA= {x:Cw5con1_5.pointA.x,y:Cw5con1_5.pointA.y+1}
            }
            if(Cw5con1_5.pointA.x!==1350){
          Cw5con1_5.pointA= {x:Cw5con1_5.pointA.x-1,y:Cw5con1_5.pointA.y}
            }
       }
   
   
       
    }

//     //6th

     if(CSB6_1_5.collided || CTB6_1_5.collided){
        // 575
           if(bn6_1_5.position.y!==3495){
               Matter.Body.setPosition(bn6_1_5, { x:  bn6_1_5.position.x, y:bn6_1_5.position.y+0.5 });
           }
           if(bn6_1_5.position.y>=3485){
            //220+ 525-
          
            if(Cw6_5.position.y!==2980){
               Matter.Body.setPosition(Cw6_5, { x:  Cw6_5.position.x, y:Cw6_5.position.y-1 });
            }
       
           
           }
       
       }
       else{
       
           if(bn6_1_5.position.y!==3480){
               Matter.Body.setPosition(bn6_1_5, { x:  bn6_1_5.position.x, y:bn6_1_5.position.y-0.25 });
           }
           if(bn6_1_5.position.y<=3482&&(CSB6_2_5.collided==false && CTB6_2_5.collided==false)){

           if(Cw6_5.position.y!==3090){
               Matter.Body.setPosition(Cw6_5, { x:  Cw6_5.position.x, y:Cw6_5.position.y+1 });
            }
          
            }
       
       
           
        }

    if(CSB6_2_5.collided || CTB6_2_5.collided){
        // 575
           if(bn6_2_5.position.y!==3170){
               Matter.Body.setPosition(bn6_2_5, { x:  bn6_2_5.position.x, y:bn6_2_5.position.y+0.5 });
           }
           if(bn6_2_5.position.y>=3160){
            //220+ 525-
          
            if(Cw6_5.position.y!==2980){
               Matter.Body.setPosition(Cw6_5, { x:  Cw6_5.position.x, y:Cw6_5.position.y-1 });
            }
       
           
           }
       
       }
       else{
       
           if(bn6_2_5.position.y!==3155){
               Matter.Body.setPosition(bn6_2_5, { x:  bn6_2_5.position.x, y:bn6_2_5.position.y-0.25 });
           }
           if(bn6_2_5.position.y<=3157 &&(CSB6_1_5.collided==false && CTB6_1_5.collided==false)){
           if(Cw6_5.position.y!==3090){
               Matter.Body.setPosition(Cw6_5, { x:  Cw6_5.position.x, y:Cw6_5.position.y+1 });
            }
          
            }
       
       
           
        }

//         //7th

        if(wallBallCol_5.collided){
               if(bn7_5.position.y!==2995){
                   Matter.Body.setPosition(bn7_5, { x:  bn7_5.position.x, y:bn7_5.position.y+0.5 });
               }
               if(bn7_5.position.y>=2985){
                   if(Cw7_1_5.position.y!==3520){
                       Matter.Body.setPosition(Cw7_1_5,{x:Cw7_1_5.position.x,y:Cw7_1_5.position.y+1})
                   }
                    if(Cw7_2_5.position.y!==3520){
                       Matter.Body.setPosition(Cw7_2_5,{x:Cw7_2_5.position.x,y:Cw7_2_5.position.y+1})
                   }
               }
           }
           else{
               if(bn7_5.position.y!==2980){
                   Matter.Body.setPosition(bn7_5, { x:  bn7_5.position.x, y:bn7_5.position.y-0.25 });
               }   
            }

        // 8th

        if(CSB8_5.collided || CTB8_5.collided || boxCol_5.collided){
            // 575
               if(bn8_5.position.y!==3495){
                   Matter.Body.setPosition(bn8_5, { x:  bn8_5.position.x, y:bn8_5.position.y+0.5 });
               }
               if(bn8_5.position.y>=3485){
                //220+ 525-
              if(Cw8_1_5.position.y!==3495){
                Matter.Body.setPosition(Cw8_1_5, { x:  Cw8_1_5.position.x, y:Cw8_1_5.position.y-5 });
    
              }
              if(Cw8_1_5.position.y==3495){
                   if(Cw8_2_5.position.y!==3495){
                Matter.Body.setPosition(Cw8_2_5, { x:  Cw8_2_5.position.x, y:Cw8_2_5.position.y-5 });
    
              }
              }
              if(Cw8_2_5.position.y==3495){
                   if(Cw8_3_5.position.y!==3495){
                Matter.Body.setPosition(Cw8_3_5, { x:  Cw8_3_5.position.x, y:Cw8_3_5.position.y-5 });
    
              }
              }
              
               
               }
           
           }
           else{
           
               if(bn8_5.position.y!==3480){
                   Matter.Body.setPosition(bn8_5, { x:  bn8_5.position.x, y:bn8_5.position.y-0.25 });
               }
               if(bn8_5.position.y<=3482){
    
              if(Cw8_1_5.position.y!==3700){
                Matter.Body.setPosition(Cw8_1_5, { x:  Cw8_1_5.position.x, y:Cw8_1_5.position.y+5 });
    
              }
              if(Cw8_1_5.position.y==3700){
                   if(Cw8_2_5.position.y!==3700){
                Matter.Body.setPosition(Cw8_2_5, { x:  Cw8_2_5.position.x, y:Cw8_2_5.position.y+5 });
    
              }
              }
              if(Cw8_2_5.position.y==3700){
                   if(Cw8_3_5.position.y!==3700){
                Matter.Body.setPosition(Cw8_3_5, { x:  Cw8_3_5.position.x, y:Cw8_3_5.position.y+5 });
    
              }
              }
           
               }
               
            }
    
// // // //////////////////////////////////////////////////// teleportation


if(keys[13]){


    if(square_5.position.x>=265 && square_5.position.x<=310 && square_5.position.y>=2930 && square_5.position.y<=2990){
        Matter.Body.setPosition(square_5,{x:tele2_5.position.x,y:tele2_5.position.y})
    }else if(square_5.position.x>=870 && square_5.position.x<=920 && square_5.position.y>=3080 &&square_5.position.y<=3130){
        Matter.Body.setPosition(square_5,{x:tele1_5.position.x,y:tele1_5.position.y})
    }else if(square_5.position.x>=1400 && square_5.position.x<=1470 && square_5.position.y>=3090 && square_5.position.y<=3140){
        Matter.Body.setPosition(square_5,{x:tele4_5.position.x,y:tele4_5.position.y})
    }else if(square_5.position.x>=120 && square_5.position.x<=175 && square_5.position.y>=2960 && square_5.position.y<=3020){
        Matter.Body.setPosition(square_5,{x:tele3_5.position.x,y:tele3_5.position.y})
    }else if(square_5.position.x>=60 && square_5.position.x<=100 && square_5.position.y>=3090 && square_5.position.y<=3140){
        Matter.Body.setPosition(square_5,{x:tele6_5.position.x,y:tele6_5.position.y})
    }else if(square_5.position.x>=30 && square_5.position.x<=75 && square_5.position.y>=3420 && square_5.position.y<=3485){
        Matter.Body.setPosition(square_5,{x:tele5_5.position.x,y:tele5_5.position.y})
    }  
    
    if(triangle_5.position.x>=265 && triangle_5.position.x<=310 && triangle_5.position.y>=2930 && triangle_5.position.y<=2990){
        Matter.Body.setPosition(triangle_5,{x:tele2_5.position.x,y:tele2_5.position.y})
    }else if(triangle_5.position.x>=870 && triangle_5.position.x<=920 && triangle_5.position.y>=3080 &&triangle_5.position.y<=3130){
        Matter.Body.setPosition(triangle_5,{x:tele1_5.position.x,y:tele1_5.position.y})
    }else if(triangle_5.position.x>=1400 && triangle_5.position.x<=1470 && triangle_5.position.y>=3090 && triangle_5.position.y<=3140){
        Matter.Body.setPosition(triangle_5,{x:tele4_5.position.x,y:tele4_5.position.y})
    }else if(triangle_5.position.x>=120 && triangle_5.position.x<=175 && triangle_5.position.y>=2960 && triangle_5.position.y<=3020){
        Matter.Body.setPosition(triangle_5,{x:tele3_5.position.x,y:tele3_5.position.y})
    }else if(triangle_5.position.x>=60 && triangle_5.position.x<=100 && triangle_5.position.y>=3090 && triangle_5.position.y<=3140){
        Matter.Body.setPosition(triangle_5,{x:tele6_5.position.x,y:tele6_5.position.y})
    }else if(triangle_5.position.x>=30 && triangle_5.position.x<=75 && triangle_5.position.y>=3420 && triangle_5.position.y<=3485){
        Matter.Body.setPosition(triangle_5,{x:tele5_5.position.x,y:tele5_5.position.y})
    }  
    


}


// // //////////////////////////////////////////rotor rotation

Matter.Body.rotate(rotor1_5,0.2)
Matter.Body.rotate(rotor2_5,0.2)



// // // ///////////// winning condition
if(square_5.position.x>=1375 && square_5.position.x<=1500 && square_5.position.y>=3400 && square_5.position.y<=3500 &&
    triangle_5.position.x>=1375 && triangle_5.position.x<=1500 && triangle_5.position.y>=3400 && triangle_5.position.y<=3500 && 
    point_5===3){
   win_5=true
 }
if(win_5==true){
    hasWon5=true
    counter_5+=1
  if(wb1_5.position.x!==5){
    Matter.Body.setPosition(wb1_5,{x:wb1_5.position.x+1,y:wb1_5.position.y})
    Matter.Body.setPosition(wb2_5,{x:wb2_5.position.x-1,y:wb1_5.position.y})
   
  }
  if(wb1_5.position.x===5){
  Matter.World.add(engine.world, [
    qled= Matter.Bodies.rectangle(75,3020,20,10),
    oled= Matter.Bodies.rectangle(1425,3020,20,10)
    
    ])
    qled.force={x:0.006,y:-0.003}
    oled.force={x:-0.0061,y:-0.003}
    qled.collisionFilter.mask=200
    qled.collisionFilter.category=0x0008
    wb1_5.collisionFilter.category=0x0008
    wb1_5.collisionFilter.mask=200
     oled.collisionFilter.mask=200
    oled.collisionFilter.category=0x0008
    wb2_5.collisionFilter.category=0x0008
    wb2_5.collisionFilter.mask=200
  
   
  }
 
  if(counter_5>=300){
    Matter.Body.setPosition(winFace,{x:750,y:3150})
      }
    

 
}


if(keys[32]){
    console.log(counter_5)
}




































































if(counter>=450){
    if(render.bounds.max.y!==1400){
    Bounds.translate(render.bounds, {x:0,y:2});
    }
    if(render.bounds.max.y==1398){
      Matter.World.clear(engine.world,false)
      win=false
      Matter.World.add(engine.world,[bn1_2,bn2_2,bn3_2,bn4_2,bn5_2])
      Matter.World.add(engine.world, [tele1_2,tele2_2,tele3_2,tele4_2]);
      Matter.World.add(engine.world,sling_2);
      Matter.World.add(engine.world,[s1_2,s2_2,s3_2])
      Matter.World.add(engine.world,[e_2])
      Matter.World.add(engine.world, [Cw1_2,Cw2_2,Cw3_2,Cw4_2,Cw5_2,co1_2]);
      Matter.World.add(engine.world, [square2,triangle2]);
      Matter.World.add(engine.world,[w1_2,w2_2,w3_2,w4_2,w5_2,w6_2,w7_2,w8_2,w9_2,w10_2,w11_2,w12_2,w13_2,w14_2,w15_2])
      Matter.World.add(engine.world, [e1_2,e2_2,e3_2]);
      Matter.World.add(engine.world, [rotor_2,wb1_2,wb2_2]);
      Matter.World.add(engine.world,[resetBtn])
    
  Matter.Body.setPosition(resetBtn,{x:1350,y:1350})
  
  
     
    }
  
  
  }
  
  
  
  if(counter_2>=450){
      counter=0
      win_2=false
      win=false
      if(render.bounds.max.y!==2100){
      Bounds.translate(render.bounds, {x:0,y:2});
      }
      if(render.bounds.max.y==2098){
        Matter.World.clear(engine.world,false)
       win_2=false
       win=false
        Matter.World.add(engine.world,[bn1_3,bn2_3,bn3_3,bn4_3])
  Matter.World.add(engine.world, [tele1_3,tele2_3,tele3_3,tele4_3]);
  Matter.World.add(engine.world,[Cw1_3,Cw2_3,Cw3_3])
  Matter.World.add(engine.world,[b1_3,b1c1_3,b1c2_3,b2_3,b2c1_3,b2c2_3,b3_3,b3c1_3,b3c2_3,b4_3,b4c1_3,b4c2_3,b5_3,b5c1_3,b5c2_3,b6_3,b6c1_3,b6c2_3])
  Matter.World.add(engine.world,[s1_3,s2_3,s3_3])
  Matter.World.add(engine.world,[e_3])
  Matter.World.add(engine.world,[w1_3,w2_3,w3_3,w4_3,w5_3,w6_3,w7_3,w8_3,w9_3,w10_3,w11_3,w12_3,w13_3,w14_3,w15_3,w16_3,w17_3])
  Matter.World.add(engine.world,[r1_3,con1_3,r2_3,con2_3])
  Matter.World.add(engine.world, [square_3,triangle_3]);
  Matter.World.add(engine.world, [e1_3,e2_3,e3_3]);
  Matter.World.add(engine.world, [wb1_3,wb2_3]);
  Matter.World.add(engine.world,[resetBtn])
 
  Matter.Body.setPosition(resetBtn,{x:1350,y:2075})
       
      }
      if(render.bounds.max.y==2100){
          win_2=false
          win=false
      }
    
    
    }
  
  
  
    if(counter_3>=450){
      counter=0
      counter_2=0
      point=0
      point2=0
      point_3=0
      if(render.bounds.max.y!==2800){
      Bounds.translate(render.bounds, {x:0,y:2});
      }
      if(render.bounds.max.y==2798){
        Matter.World.clear(engine.world,false)
        win_3=false
       win_2=false
       win=false
     
       
  Matter.World.add(engine.world,[bn1_4,bn2_4,bn3_4,bn4_4,bn5_4,bn6_4,bn7_4,bn8_4])
  Matter.World.add(engine.world,[Cw1_4,Cw2_4,Cw3_4,Cw5_4,Cw5con1_4,Cw5con2_4,Cw6_4,Cw7_4,Cw8_4,Cw8con_4,Cw4_4,Cw4con1_4,Cw4con2_4])
  
  Matter.World.add(engine.world,[w1_4,w2_4,w3_4,w4_4,w5_4,w6_4,w7_4,w8_4,w9_4,w10_4,w11_4,w12_4,w13_4,w14_4,w15_4,w16_4,w17_4,w18_4,w19_4,w20_4,
      w21_4,w22_4,w23_4,w24_4,w25_4,w26_4,w27_4,w28_4,w29_4,w30_4,w31_4,w32_4,w33_4,w34_4,w35_4,w36_4,w37_4])
  Matter.World.add(engine.world,[cover1_4,cover2_4,cover3_4,cover4_4])
  Matter.World.add(engine.world,[stack1_4,stack2_4,stack3_4,wall_4])
  Matter.World.add(engine.world,[tele1_4,tele2_4,tele3_4,tele4_4])
  Matter.World.add(engine.world,[s1_4,s2_4,s3_4])
  Matter.World.add(engine.world, [e_4]);
  Matter.World.add(engine.world, [square_4,triangle_4,box_4]);
   Matter.World.add(engine.world, [e1_4,e2_4,e3_4]);
  Matter.World.add(engine.world, [wb1_4,wb2_4]);
  Matter.World.add(engine.world,[resetBtn])

  Matter.Body.setPosition(resetBtn,{x:1350,y:2750})
       
  
  
      }
      if(render.bounds.max.y==2800){
          win_2=false
          win=false
          win_3=false
      }
    
    
    }  
  
  
  
  
    if(counter_4>=450){
      counter=0
      counter_2=0
      counter_3=0
      point=0
      point2=0
      point_3=0
      point_4=0
      if(render.bounds.max.y!==3500){
      Bounds.translate(render.bounds, {x:0,y:2});
      }
      if(render.bounds.max.y==3498){
        Matter.World.clear(engine.world,false)
        win_4=false
        win_3=false
       win_2=false
       win=false
     
     
  
       Matter.World.add(engine.world,[bn1_5,bn2_5,bn3_5,bn4_5,bn5_5,bn6_1_5,bn6_2_5,bn7_5,bn8_5])
       Matter.World.add(engine.world,[Cw1_5,Cw2_5,Cw3_5,Cw4_5,Cw4con1_5,Cw4con2_5,Cw5_5,Cw5con1_5,Cw5con2_5,Cw6_5,cover3_5,Cw7_1_5,Cw7_2_5,Cw8_1_5,Cw8_2_5,Cw8_3_5,wallBall_5])
       Matter.World.add(engine.world,[cover1_5,cover2_5])
       Matter.World.add(engine.world,[w1_5,w2_5,w3_5,w4_5,w5_5,w6_5,w7_5,w8_5,w9_5,w10_5,w11_5,w12_5,w13_5,w14_5,w15_5,w16_5,w17_5,w18_5,w19_5,w20_5,w21_5,
           w22_5,w23_5,w24_5,w25_5,w26_5,w27_5,w28_5,w29_5,w30_5,w31_5,w32_5,w33_5,w34_5,w35_5,w36_5,w37_5,w38_5,w39_5,w40_5,w41_5,
           w42_5,w43_5,w44_5,w45_5,w46_5,w47_5,w48_5,w49_5])
       
       Matter.World.add(engine.world,[wall_5,stack1_5])
       Matter.World.add(engine.world,[tele1_5,tele2_5,tele3_5,tele4_5,tele5_5,tele6_5])
       Matter.World.add(engine.world,[s1_5,s2_5,s3_5,rotor1_5,rotor2_5,con1_5,con2_5])
       Matter.World.add(engine.world, [e_5]);
       Matter.World.add(engine.world, [square_5,triangle_5,box_5]);
       Matter.World.add(engine.world, [e1_5,e2_5,e3_5,e4_5,e5_5,e6_5,e7_5]);
       Matter.World.add(engine.world,[car_5,car2_5,car3_5,car4_5])
       Matter.World.add(engine.world, [wb1_5,wb2_5,winFace,loseFace]);
//        Matter.World.add(engine.world,[resetBtn])
 
//   Matter.Body.setPosition(resetBtn,{x:1150,y:2850})
       
  
  
  
  
  
  
      }
      if(render.bounds.max.y==2800){
          win_2=false
          win=false
          win_3=false
          win_4=false
      }
    
    
    }  
  
  


 })
// // end draw function
// //10,250




//running everything and adding bodies



Matter.World.add(engine.world, [square,triangle]);
Matter.World.add(engine.world, [e1,e2,e3]);
Matter.World.add(engine.world, [wb1,wb2]);

Matter.World.add(engine.world, [Cw1,Cw2,Cw3,Cw4,Cw5,Cw6,Cw7]);
Matter.World.add(engine.world, [co1,co2,co3,co4,co5]);

Matter.World.add(engine.world,[resetBtn,winFace])

Matter.Engine.run(engine);
Matter.Render.run(render);






    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////























noLoop() 

}




















}




function mouseReleased() {
  if(gameState===0 && round(per)===100 && z===400.5){
  zeq=false
 
if(z>700){
  resizeCanvas(1,1)
clear ()
bgMusic.play()
gameState=2
}
  }

 if(gameState===1){
   next=true
 }




  
}







