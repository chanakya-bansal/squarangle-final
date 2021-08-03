 
//starting matter.js
let engine = Matter.Engine.create();
let Events = Matter.Events;
let Bodies = Matter.Bodies;
let Body=Matter.Body;
let Detecter=Matter.Detector;
let Bounds = Matter.Bounds;
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
      hasBounds:true,
      showMousePosition:true
  }
});

//starting mouse constraint
let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
          render: {visible: false}
      }
  });
render.mouse = mouse;

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

cover3_4.collisionFilter.mask=200
cover3_4.collisionFilter.category=0x0008

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












// // // ///////////////////////////////////////////////// draw function (only updated)
Events.on(engine, "beforeTick", function(event) {


  
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
if(render.bounds.max.y!==2800){
    Bounds.translate(render.bounds, {x:0,y:700});
    }


 })
  // end draw function






// //running everything and adding bodies

Matter.World.add(engine.world,[bn1_4,bn2_4,bn3_4,bn4_4,bn5_4,bn6_4,bn7_4,bn8_4])
Matter.World.add(engine.world,[Cw1_4,Cw2_4,Cw3_4,Cw5_4,Cw5con1_4,Cw5con2_4,Cw6_4,Cw7_4,Cw8_4,Cw8con_4,Cw4_4,Cw4con1_4,Cw4con2_4])

Matter.World.add(engine.world,[w1_4,w2_4,w3_4,w4_4,w5_4,w6_4,w7_4,w8_4,w9_4,w10_4,w11_4,w12_4,w13_4,w14_4,w15_4,w16_4,w17_4,w18_4,w19_4,w20_4,
    w21_4,w22_4,w23_4,w24_4,w25_4,w26_4,w27_4,w28_4,w29_4,w30_4,w31_4,w32_4,w33_4,w34_4,w35_4,w36_4,w37_4])
Matter.World.add(engine.world,[cover1_4,cover2_4,cover3_4,cover4_4])
Matter.World.add(engine.world,[stack1_4,stack2_4,stack3_4,wall_4])
Matter.World.add(engine.world,[tele1_4,tele2_4,tele3_4,tele4_4])
Matter.World.add(engine.world,[s1_4,s2_4,s3_4])
Matter.World.add(engine.world, [e_4]);
Matter.World.add(engine.world, [square_4,triangle_4,box_4,mouseConstraint]);
 Matter.World.add(engine.world, [e1_4,e2_4,e3_4]);
Matter.World.add(engine.world, [wb1_4,wb2_4]);

Matter.Engine.run(engine);
Matter.Render.run(render);
