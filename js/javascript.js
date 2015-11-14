genDivs();



// I stole this from Stackoverflow & am not proud.
//from:http://stackoverflow.com/questions/11083345/creating-a-dynamic-grid-of-divs-with-javascript
//need to add odd and even background colors for visualize

function genDivs(v){ 
    
    //default grid size
     if (typeof(v)==='undefined') v = 16;    
          
      var e = document.body; // whatever you want to append the rows to: 
    //make wrapper div
      var wrapper = document.createElement("div");
            wrapper.className = "wrapper";
            e.appendChild(wrapper);
    
    //loops to build v number of div columns
      for(var i = 0; i <= v; i++){ 
        var column = document.createElement("div"); 
        column.className = "column";
          
   //loops to add v number of divs per column      
        for(var x = 1; x <= v; x++){ 
            var cell = document.createElement("div");
            cell.innerText = (i * v) + x;
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
        
    
 
    }



//Number of column divs
var colDivs = document.querySelectorAll('div.column').length;




//PAGE STYLE AND FORMAT:Apply CSS to float divs left, make grid. Why? does this work & not css stylesheet? 



$('.wrapper').css({
    'height': 'auto',
    'overflow':'auto',
    'min-width':'990px',    
    'border':'1px solid blue',
    'background-color':'rgba(211, 167, 61, 0.3)',    
    'opacity':'0.9'});

$('.column').css('float','left');


$('.gridsquare').css({
    'width':'60px',
    'height':'60px',
    'border':'1px solid black',
    'background-color':'gold'});



$('.gridsquare').on('mouseover', function(){
    $(this).css('background-color', 'red');
});


$('button').on('click',function(){
    genDivs();
    change();
  //  var tempNum = prompt("Please enter a numeric value for the new grid size please");
  //  newGridSize = parseInt(tempNum);
  //  genDivs(newGridSize);
   
    
    });

















































 /*   

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
