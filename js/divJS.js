window.onload = function(){
    genDivs();    
  //  loopTrace();
    eventTrace();
    evoTrace();
    
    
}


// I borrowed this from Stackoverflow. It helped me to develop the later table model.
//from:http://stackoverflow.com/questions/11083345/creating-a-dynamic-grid-of-divs-with-javascript
//need to add odd and even background colors for visualize

function genDivs(v){  
   
    
  var lengthAndWidth = v;    
    //default grid size
     if (typeof(v)==='undefined') v = 16;  
    
    lengthAndWidth = 960/v;
          
      var e = document.body; // whatever you want to append the rows to: 
    //make wrapper div
      var wrapper = document.createElement("div");
            wrapper.className = "wrapper";
            e.appendChild(wrapper);
    
    //loops to build v number of div columns
      for(var i = 0; i <= v-1; i++){ 
        var column = document.createElement("div"); 
        column.className = "column";
          
   //loops to add v number of divs per column      
        for(var x = 1; x <= v; x++){ 
            var cell = document.createElement("div");
          //  cell.innerText = (i * v) + x;
            column.appendChild(cell); 
            
           //add class to grid to make checkerboard appearance 
            if(x%2==0){
                cell.className = "gridsquare" + " " + "even"; 
            }else{
                cell.className = "gridsquare" + " " + "odd"; 
            }
            
            console.log(x, cell.className);
        } 
        wrapper.appendChild(column); 
      } 
    //  document.getElementById("code").innerText = e.innerHTML; 
  //Number of column divs
var colDivs = document.querySelectorAll('div.column').length;      
    
 //PAGE STYLE AND FORMAT:Apply CSS to float divs left, make grid. Why? does this work & not css stylesheet?   

$('.wrapper').css({
    'height': 'auto',
    'overflow':'auto',
    'max-height':'960px',
    'max-width': '960px',
    'border':'4px solid blue',
    'background-color':'rgba(211, 167, 61, 0.3)',    
    'opacity':'0.9',
    'margin': '0 0 0 0'});

$('.column').css('float','left');


$('.gridsquare').css({
    'width': lengthAndWidth + 'px',
    'height':lengthAndWidth + 'px',
    'border':'0px solid black',
    'background-color':'#FFFF9C',
    'margin': '0px 0px 0px 0px'});
    
   
    
 } 
  //end genDivs() function//



//reset grid with variable div size.
function resetGrid(){
    var tempNum = prompt("Please enter a numeric value for the new grid size please");
    newGridSize = parseInt(tempNum);   
    //remove previous wrapper div, test for new value
    if(tempNum){
    $('.wrapper').remove();
    }
    genDivs(newGridSize);
}


$('button#colorSolid').on('click',function(){ 
    resetGrid();
   // loopTrace();
    eventTrace();
    evoTrace();
});

$('button#colorChange').on('click',function(){ 
    resetGrid();
    colorTrace();
    eventTrace();
});

//Ready mouse tracer on EtchaSketch via searching through class .gridsquare
function loopTrace(){    
 $('div.gridsquare').on('mouseenter',  function(){    
 $(this).css('background-color', 'red') });    
 
}

function colorTrace(){    
 $('div.gridsquare').on('mouseenter',  function(){    
 $(this).css('background-color', randomColorGeneratorHex()) });    
 
}
//NEED TO GET THIS FUNCTION TO WORK CHANGING DIV COLORS BY EVENT!!!!
function eventTrace(){
$('div.gridsquare').on('mouseover',function(event){
    $('#log').html("clientX: " + event.clientX + " clientY: " + event.clientY)
    .css('font','1em fantasy');
    });
}

function evoTrace(){
    $('div.gridsquare').on('mouseover',function(event){
        if(event.clientX){
            $(this).css('background-color', 'black');
        }
    });
}
    
            


function randomColorGeneratorHex(){
    var inputs = ['a',0,3,'b',1,4,'c',2,5,'d',6,9,'e',8,'f'];
    var result = [];
    var temp = 0;
    var output = "";
    
    for(var i=0;i<=5;i++){
        temp = Math.floor(Math.random()*15 );
        result.push(inputs[temp]);
    }
    
    output = result.join("");
    return ("#" +  output);
 }   
    

        
 

 /*  MISC CODE FOR TESTING, make checkerboard

//was even and odd to add checkerboard patter to the div grid.
$('.even').css('background-color', 'gold');
$('.odd').css('background-color', 'gold');



      //Add background-color to square that mouse is hovering on.
$('.gridsquare').hover(
    function(){
        $(this).css('background-color','blue');
    }, function(){
        var evenSquare= $(this).hasClass('even');
        if(evenSquare){
            console.log(evenSquare);
            $(this).css('background-color','gold');
        }else{
            $(this).css('background-color','gold');
        }
    }
);
*/


/*

#wrapper {width:960px;
    border:1px solid blue;}

    
.even {background-color:red;}

.odd {background-color:blue;}

.gridsquare{width:60px;
    height:60px;
    border:1px solid black}
////////////
$('.gridsquare').on('mouseleave',function(){        
    var even = $(this).hasClass('even');
    var odd = $(this).hasClass('odd');
    var test = $(this);
    if(test === odd){
        $(test).css('background-color', 'gold');
    }else{
        (test).css('background-color', 'orange');
    }

        
    console.log(odd);
    
    
});
*/
