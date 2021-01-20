function calcFn(){
  var in1= document.getElementById('input_1').value;  
  var in2= document.getElementById('input_2').value;
  if (isNumber(in1 * 1) && isNumber(in2 * 1)) {
    document.getElementById('output').value =(in1 * 1 + in2 * 1);    
  }  else {
    alert("Only enter numbers.")
  }
}

// Returns if a value is really a number
function isNumber (value) {
return typeof value === 'number' && isFinite(value);
}
