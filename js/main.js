"use strict";

let uservalue = null;
var userinput = null;
let number2 = null;

$('#input_id').select();
//$('#input_id').focus(); 
//$('#input_id').trigger('focus');
//$('#input_id').trigger('click');

function getFib(){
    uservalue = null;
    userinput = null;
    number2 = null;
    let number1 = 1;
    let temp = null;
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
    userinput = $('#input_id').val(''); 
    
}


function getFibRecursive(number) {
    if (number < 2) return number;
    return getFibRecursive( number - 2) + getFibRecursive( number - 1); 
}

function getNumber(){
    userinput = $('#input_id').val();
    $('.fibtext').html();
    if((isNaN(uservalue))||($('#input_id').val().length === 0)){
        $('#infodiv').html(`Δεν δώσατε αριθμό`);
        $('#input_id').value = null;
        $('#resultdiv').empty();
        $('#loopdiv').empty();
        $('.info.headerborder').hide();
        $('.result.headerborder').hide();
    }
    else if(userinput>250){
        $('#infodiv').html(`Δεν μπορείτε να δώσετε αριθμό άνω του: <span id="numbertext">250</span>`);
        $('#loopdiv').html("");
        $('#resultdiv').empty();
        userinput = $('#input_id').val('');  
        $('.info.headerborder').hide();
        $('.result.headerborder').hide();
    }
    else if(userinput>35){
        getFib()
        $('.info.headerborder').show();
        $('.result.headerborder').show();
    }
    else if(userinput<=35){
        document.getElementById('infodiv').innerHTML = `<span class="infotext">Ο αριθμός που δώσατε είναι ο: </span> <span id="numbertext"> ${userinput}</span>`;
        document.getElementById('resultdiv').innerHTML = `<span class="infotext">Fibonacci <sub>${userinput}</sub> είναι ο: </span><span class="fibtext">${getFibRecursive(userinput)}</span>`;
        document.getElementById('loopdiv').innerHTML="";
        $('#loopdiv').append(`Ακολουθία fibonacci του αριθμού ${userinput}`);
                for (let i=1;i<=userinput;i++){  
                    $('#loopdiv').append( `<span><h2>${i}) </h2> <p>${getFibRecursive(i)}</p></span>` );     
            }
            userinput = $('#input_id').val('');  
            $('.info.headerborder').show();
            $('.result.headerborder').show();
        }
           
    } 

$('#input_id').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
        {
        $('.btn').click();
        return false;  
        }
    });   

