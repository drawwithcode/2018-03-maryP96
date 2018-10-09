function preload(){
  // put preload code here
}
var colorList1 = ['#E0BBE4',
                 '#957DAD'];
var colorList2 = ['#D291BC',
                  '#FEC8D8'];

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background('#FFDFD3');
  frameRate(2);
}

function draw() {
  // put drawing code here

  //rettangoli 1
     for( var x= 0; x<width; x+=200){

         for(var y=0; y<height; y+=200){

          fill(color(random(colorList1)));
          noStroke();
  rect(x,y,90,90);
         }
       }
       for( var i= 90; i<width; i+=200){

           for(var t=90; t<height; t+=200){

          fill(color(random(colorList1)));
            noStroke();
      rect(i,t,90,90);
           }
         }


  //rettangoli 2
  for( var z= 0; z<width; z+=200){

      for(var m=0; m<height; m+=200){

       fill(color(random(colorList2)));
       noStroke();
  rect(z+20,m+20,70,70);
      }
    }
    for( var i= 90; i<width; i+=200){

        for(var t=90; t<height; t+=200){

         fill(color(random(colorList2)));
         noStroke();

   rect(i,t,70,70);
        }
      }
  //rettangoli 3
      for( var z= 0; z<width; z+=200){

          for(var m=0; m<height; m+=200){

           fill(color(random(colorList1)));
           noStroke();
      rect(z+40,m+40,50,50);
          }
        }
        for( var i= 90; i<width; i+=200){

            for(var t=90; t<height; t+=200){

             fill(color(random(colorList1)));
             noStroke();

       rect(i,t,50,50);
            }
          }
  //rettangoli 4
    for( var z= 0; z<width; z+=200){

      for(var m=0; m<height; m+=200){

           fill(color(random(colorList2)));
           noStroke();
        rect(z+60,m+60,30,30);
          }
        }
      for( var i= 90; i<width; i+=200){

        for(var t=90; t<height; t+=200){

             fill(color(random(colorList2)));
             noStroke();
           rect(i,t,30,30);
          }
        }

}
