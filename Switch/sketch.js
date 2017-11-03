    //Boolean 
    // Switch, mouseispressed

    function setup(){

        createCanvas(800,800);    
    }

    function draw(){

        background(0);

            swnt();
                

        if (mouseIsPressed && mouseX < 480 && mouseX > 280 && mouseY > 200 && mouseY < 580){
            swp();
            }
        }
        function swnt(){

            fill('gold');
            rect(280,200,200,400);

            stroke('yellow');
            fill('lightyellow')
            quad(280,200,480,200,465,580,295,580)

            noStroke()
            fill(255);
            ellipse(650,100,75,75);
            
            fill(0);
            ellipse(660,90,75,75);
            }

        function swp(){
            background('skyblue');

            fill('gold');
            rect(280,200,200,400);

            stroke('yellow');
            fill('lightyellow')
            quad(280,200,480,200,475,595,285,595)

            noStroke()
            fill('yellow');
            ellipse(650,100,95,95);
            }