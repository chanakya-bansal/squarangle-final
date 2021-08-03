 
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

cover3_5.collisionFilter.mask=200
cover3_5.collisionFilter.category=0x0008

// cover4_5 = Matter.Bodies.rectangle(1000,2285,45,10,{
//     isStatic:true,
//     chamfer:0,
//     render: {
//         fillStyle: 'rgb(220,220,220)'
       
//     },
//     angle:0
// });

// cover3_5.collisionFilter.mask=200
// cover3_5.collisionFilter.category=0x0008

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
tele4_5.collisionFilter.mask=200
tele4_5.collisionFilter.category=0x0008
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




carStack_5=0
carTStack_5=0

















// // // ///////////////////////////////////////////////// draw function (only updated)
Events.on(engine, "beforeTick", function(event) {

  
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

   above=false
 if(Cw3_5.angle<=1.55){
       Matter.Body.rotate(Cw3_5,0.01)

 }
 if(Cw3_5.position.y!==3200){
     Matter.Body.setPosition(Cw3_5,{x:Cw3_5.position.x,y:Cw3_5.position.y-1})
 }
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
 

 
}
if(render.bounds.max.y!==3500){
    Bounds.translate(render.bounds, {x:0,y:700});
    }


 })
  // end draw function




///bn,walls,cover,meshes

// // //running everything and adding bodies
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
Matter.World.add(engine.world, [square_5,triangle_5,box_5,mouseConstraint]);
Matter.World.add(engine.world, [e1_5,e2_5,e3_5,e4_5,e5_5,e6_5,e7_5]);
Matter.World.add(engine.world,[car_5,car2_5,car3_5,car4_5])
Matter.World.add(engine.world, [wb1_5,wb2_5]);

Matter.Engine.run(engine);
Matter.Render.run(render);
