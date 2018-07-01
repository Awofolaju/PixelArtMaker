
let tableCanvas = $("#pixelCanvas");
let cells = $(".cells");

//Calling the makeGrid function
function makeGrid(col,row) {
        //Create the width and height
        for (x=0; x<col; x++){
            tableCanvas.append("<tr></tr>");
        }
        //Add rows to the grid
        for (y=0; y<row; y++){
            $("tr").append("<td class='cells'></td>");
        }    
    }
    


//Call the sizePicker function to store the user data
$("#sizePicker").submit(function(event){
    //To get the entered height by the user
    var enterdHeight=$("#inputHeight").val();
    //To get the entered width by the user
    var enteredWidth=$("#inputWidth").val();

    //Parse the height and weight to the makeGrid function
    makeGrid(parseInt(enterdHeight),parseInt(enteredWidth));
    
    //Activity listener for the event(click) function
    $('.cells').click(function(event){
        //set the precise color
        color = $('#colorPicker').val();
        
        // Check for already existing style attribute
        if ($(event.target).attr('style')){
            // Remove the previous color style attribute if present
            $(event.target).removeAttr('style')
        
        }else{
            // Input color style attribute on selected cell
            $(event.target).css('background-color',color )
        }
    });
    // Function to prevent default submission of page
    event.preventDefault();
});
