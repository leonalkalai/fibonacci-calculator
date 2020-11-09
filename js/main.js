"use strict";

let uservalue = null;
var userinput = null;
let number2 = null;

/*this are several ways to auto trigger flashing cursor in the input*/
$('#input_id').select();
//$('#input_id').focus(); 
//$('#input_id').trigger('focus');
//$('#input_id').trigger('click');


/* This is the function to be executed  for number > 35 */
function getFib(){
    uservalue = null;
    userinput = null;
    number2 = null;
    let temp = null;
    let number1 = 1;
    $('#loopdiv').html('');
    userinput = $('#input_id').val();
    $('infodiv').html(`<span class="infotext">Ο αριθμός που δώσατε είναι ο: </span><span id="numbertext"> ${userinput}</span>`);
    $('#loopdiv').append(`Ακολουθία fibonacci του αριθμού ${userinput}`);
    for (let i = 1; i<=userinput; i++) {
        temp = number1;
        number1 += number2;
        number2 = temp;
        $('#loopdiv').append( `<span><h2>${i}) </h2> <p>${number2}</p></span>` );    
    }
    $('#resultdiv').html(`<span class="infotext">Fibonacci <sub>${userinput}</sub> είναι ο: </span> <span class="fibtext">${number2}</span>`);    
}

/* This is the function to be executed  for number < 35 */
function getFibRecursive(number) {
    if (number < 2) return number;
    return getFibRecursive( number - 2) + getFibRecursive( number - 1); 
}

/* This is the main function */
function getNumber(){
    userinput = $('#input_id').val();
    $('.fibtext').html();
    $('#infodiv').empty()
    if((isNaN(uservalue))||($('#input_id').val().length === 0)){
        $('#infodiv').html(`Δεν δώσατε αριθμό`);
        $('#input_id').value = null;
        $('#resultdiv').empty();
        $('#loopdiv').empty();
        $('.info.headerborder').hide();
        $('.result.headerborder').hide();
    }
    else if(userinput>250){
        $('.info.headerborder').hide();
        $('.result.headerborder').hide();
        $('#infodiv').html(`Δεν μπορείτε να δώσετε αριθμό άνω του: <span id="numbertext">250</span>`);
        $('#loopdiv').html("");
        $('#resultdiv').empty();
        userinput = $('#input_id').val(''); 
    }
    else if(userinput>35){
        getFib();
        $('.info.headerborder').show();
        $('.result.headerborder').show();
    }
    else if(userinput<=35){
        $('#infodiv').html(`<span class="infotext">Ο αριθμός που δώσατε είναι ο: </span> <span id="numbertext"> ${userinput}</span>`);
        $('#resultdiv').html(`<span class="infotext">Fibonacci <sub>${userinput}</sub> είναι ο: </span><span class="fibtext">${getFibRecursive(userinput)}</span>`);
        $('#loopdiv').html("");
        $('#loopdiv').append(`Ακολουθία fibonacci του αριθμού ${userinput}`);
        for (let i=1;i<=userinput;i++){  
            $('#loopdiv').append(`<span><h2>${i}) </h2> <p>${getFibRecursive(i)}</p></span>`);     
        }
        userinput = $('#input_id').val('');  
        $('.info.headerborder').show();
        $('.result.headerborder').show();
        }
           
} 

/* When user press enter then button clicks and function executes */    
$('#input_id').keypress(function (e) {
    var key = e.which; //returns which keyboard key was pressed on event 
    if(key == 13)  // the enter key code
        {
            $('.btn').click();//trigger click
            return false;  
        }
}); 

/* Scroll to top button */

let scroll_top_button = $('#scrolltop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    scroll_top_button.addClass('show');
  } else {
    scroll_top_button.removeClass('show');
  }
});

scroll_top_button.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

