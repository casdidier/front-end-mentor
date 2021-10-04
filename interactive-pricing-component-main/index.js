// .chrome styling Vanilla JS

function showVal() {
    let newInput = document.getElementById("myRange").value;
    let newVal = '$' + newInput + '/month';
    console.log('new', newVal)
    document.getElementById("priceTag").innerHTML= newVal;
  };

