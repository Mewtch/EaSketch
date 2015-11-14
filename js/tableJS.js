
$(document).ready(function(){    
  generateTable();    
    
});


//------Page generation at start------//
function generateTable(size){
    
    var wrapper = $('<div id="wrapper"></div>');    
    var table = $('<table id="table"></table>');
       
    
    if (typeof(size)==='undefined') size = 16;
    
    var squareSize = 960/size;
    
    $('body').append(wrapper);
    $(wrapper).append(table);
    
    
    for(var i=0; i<size; i++){
     var tableRow =  $('<tr id = "tableRow"></tr>');    
        
        for(var j=0;j<=size-1;j++){
            var tableCell = $('<td id="tableCell"></td>');
            $(tableRow).append(tableCell);
        }        
        $(table).append(tableRow);
    }  
    
   styleDiv();
   styleTable();
   tableCells(squareSize);
   blackTrace();
 
}
        


//-----Style Div's and table------//
function styleDiv(){
    $('div#wrapper').css({
        'max-height':'960px',
        'max-width':'960px',
        'overflow':'hidden',
        'border':'3px solid grey',
        
    });
}

function styleTable(){
    $('table').css({
      'border-collapse':'collapse',
      'border':'1px solid blue',
      'height':'100%'});    
}

    
function tableCells(squareSize){
    $('td#tableCell').css({
        'width': squareSize + 'px',
        'height': squareSize + 'px',
        'border':'1px solid black',
        'margin': '0px'}).addClass('startBackground');
    
}

//------Functions for etch a sketch trace------//
function blackTrace(){
   $('td').on('mouseenter',  function(){    
   $(this).css('background-color', 'black') });
    
}

function colorsTrace(){    
 $('td').on('mouseenter',  function(){    
 $(this).css('background-color', randomColorGeneratorHex()) });    
 
}

function randomColorTrace(){ 
 var callOnce = randomColorGeneratorHex();
 $('td').on('mouseenter',  function(){    
 $(this).css('background-color', callOnce) });
}

      
//------Reset page and button controls------//    
function resetGrid(){   
    var tempNum = getInteger();
    newGridSize = parseInt(tempNum);   
    //remove previous wrapper div, test for new value
    if(tempNum){
    $('div#wrapper').remove();
    }
    generateTable(newGridSize);
}

var getInteger = function(){
    var tempNum = prompt("Please enter a numeric value for grid size- between 16-140 for optimum results. No value will leave grid as is, but change random trace color, if selected.");                
    if(isNaN(tempNum)){
        alert("You must enter numbers to reset grid!!");
        return false;
    }    
    return tempNum;
}
    
    
$('button#colorSolid').on('click',function(){ 
    resetGrid();  
    blackTrace();
});

$('button#randomColorSolid').on('click',function(){ 
    resetGrid();  
    randomColorTrace();
});

$('button#colorChange').on('click',function(){ 
    resetGrid();
    colorsTrace();    
});


$('button#background').on('click',function(){    
    $('td').css('background-color', randomColorGeneratorHex());    
});

//-----Random color generator function------//
function randomColorGeneratorHex(){
    var inputs = ['a',0,3,'b',1,4,'c',2,5,'d',6,9,'e',8,'f',7];
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

