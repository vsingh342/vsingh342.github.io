var wordArray = [];
 
 var addtoArray = function() {
    //console.log('something happened');
    var textEntered = document.getElementById('textboxElement').value;
    //console.log(textEntered);
    var paragraphEl = document.getElementById("pElement");
    
    wordArray.push(textEntered);


    paragraphEl.innerText = wordArray;
 }