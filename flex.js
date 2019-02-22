document.addEventListener("DOMContentLoaded", function(e) {
  // Justify Content
  var cen = document.getElementById("cen");
  var fe = document.getElementById("fe");
  var fs = document.getElementById("fs");
  var sa = document.getElementById("sa");
  var sb = document.getElementById("sb");
  var justify1 = document.getElementById("justify1");


  cen.addEventListener("click", function() {
    justify1.style.justifyContent = "center";
    document.getElementById('styleTag1').innerHTML = "justify-content: center;";
    document.querySelector(".selected1").classList.remove("selected1");
    cen.classList.add("selected1");

  });
  fe.addEventListener("click", function() {
    justify1.style.justifyContent = "flex-end";
    document.getElementById('styleTag1').innerHTML = "justify-content: flex-end;";
    document.querySelector(".selected1").classList.remove("selected1");
    fe.classList.add("selected1");

  });
  fs.addEventListener("click", function() {
    justify1.style.justifyContent = "flex-start";
    document.getElementById('styleTag1').innerHTML = "justify-content: flex-start;";
    document.querySelector(".selected1").classList.remove("selected1");
    fs.classList.add("selected1");
  });
  sa.addEventListener("click", function() {
    justify1.style.justifyContent = "space-around";
    document.getElementById('styleTag1').innerHTML = "justify-content: space-around;";
    document.querySelector(".selected1").classList.remove("selected1");
    sa.classList.add("selected1");

  });
  sb.addEventListener("click", function() {
    justify1.style.justifyContent = "space-between";
    document.getElementById('styleTag1').innerHTML = "justify-content: space-between;";
    document.querySelector(".selected1").classList.remove("selected1");
    sb.classList.add("selected1");

  });


  // FLEX DIRECTION
  var row = document.getElementById("row");
  var rowrev = document.getElementById("row-rev");
  var col = document.getElementById("col");
  var colrev = document.getElementById("col-rev");
  var justify2 = document.getElementById("justify2");


  row.addEventListener("click", function() {
    justify2.style.flexDirection = "row";
    document.getElementById('styleTag2').innerHTML = "flex-direction: row;";
    document.querySelector(".selected2").classList.remove("selected2");
    row.classList.add("selected2");

  });
  rowrev.addEventListener("click", function() {
    justify2.style.flexDirection = "row-reverse";
    document.getElementById('styleTag2').innerHTML = "flex-direction: row-reverse;";
    document.querySelector(".selected2").classList.remove("selected2");
    rowrev.classList.add("selected2");
  });
  col.addEventListener("click", function() {
    justify2.style.flexDirection = "column";
    document.getElementById('styleTag2').innerHTML = "flex-direction: column;";
    document.querySelector(".selected2").classList.remove("selected2");
    col.classList.add("selected2");
  });
  colrev.addEventListener("click", function() {
    justify2.style.flexDirection = "column-reverse";
    document.getElementById('styleTag2').innerHTML = "flex-direction: column-reverse;";
    document.querySelector(".selected2").classList.remove("selected2");
    colrev.classList.add("selected2");
  });


  // Align Items
  var aifs = document.getElementById("aifs");
  var aife = document.getElementById("aife");
  var aicen = document.getElementById("aicen");

  var justify3 = document.getElementById("justify3");


  aifs.addEventListener("click", function() {
    justify3.style.alignItems = "flex-start";
    document.getElementById('styleTag3').innerHTML = "align-items: flex-start;";
    document.querySelector(".selected3").classList.remove("selected3");
    aifs.classList.add("selected3");

  });
  aife.addEventListener("click", function() {
    justify3.style.alignItems = "flex-end";
    document.getElementById('styleTag3').innerHTML = "align-items: flex-end;";
    document.querySelector(".selected3").classList.remove("selected3");
    aife.classList.add("selected3");
  });
  aicen.addEventListener("click", function() {
    justify3.style.alignItems = "center";
    document.getElementById('styleTag3').innerHTML = "align-items: center;";
    document.querySelector(".selected3").classList.remove("selected3");
    aicen.classList.add("selected3");
  });


  // Align Content
  var acfs = document.getElementById("acfs");
  var acfe = document.getElementById("acfe");
  var accen = document.getElementById("accen");
  var acsa = document.getElementById("acsa");
  var acsb = document.getElementById("acsb");

  var justify4 = document.getElementById("justify4");


  acfs.addEventListener("click", function() {
    justify4.style.alignContent = "flex-start";
    document.getElementById('styleTag4').innerHTML = "align-content: flex-start;";
    document.querySelector(".selected4").classList.remove("selected4");
    acfs.classList.add("selected4");

  });
  acfe.addEventListener("click", function() {
    justify4.style.alignContent = "flex-end";
    document.getElementById('styleTag4').innerHTML = "align-content: flex-end;";
    document.querySelector(".selected4").classList.remove("selected4");
    acfe.classList.add("selected4");
  });
  accen.addEventListener("click", function() {
    justify4.style.alignContent = "center";
    document.getElementById('styleTag4').innerHTML = "align-content: center;";
    document.querySelector(".selected4").classList.remove("selected4");
    accen.classList.add("selected4");
  });
  acsa.addEventListener("click", function() {
    justify4.style.alignContent = "space-around";
    document.getElementById('styleTag4').innerHTML = "align-content: space-around;";
    document.querySelector(".selected4").classList.remove("selected4");
    acsa.classList.add("selected4");
  });
  acsb.addEventListener("click", function() {
    justify4.style.alignContent = "space-between";
    document.getElementById('styleTag4').innerHTML = "align-content: space-between;";
    document.querySelector(".selected4").classList.remove("selected4");
    acsb.classList.add("selected4");
  });

  //Align self
  var asfs = document.getElementById("asfs");
  var asfe = document.getElementById("asfe");
  var ascen = document.getElementById("ascen");

  var justify5 = document.getElementById("justify5");
  
  Array.prototype.forEach.call(justify5.children, child => {
    child.addEventListener("click", function () {
      document.querySelector(".selectedChild").classList.remove("selectedChild");
      this.classList.add("selectedChild");
    });
  });


  asfs.addEventListener("click", function() {
    document.querySelector(".selectedChild").style.alignSelf = "flex-start";
    document.getElementById('styleTag5').innerHTML = "align-self: flex-start;";
    document.querySelector(".selected5").classList.remove("selected5");
    asfs.classList.add("selected5");

  });
  asfe.addEventListener("click", function() {
    document.querySelector(".selectedChild").style.alignSelf = "flex-end";
    document.getElementById('styleTag5').innerHTML = "align-self: flex-end;";
    document.querySelector(".selected5").classList.remove("selected5");
    asfe.classList.add("selected5");
  });
  ascen.addEventListener("click", function() {
    document.querySelector(".selectedChild").style.alignSelf = "center";
    document.getElementById('styleTag5').innerHTML = "align-self: center;";
    document.querySelector(".selected5").classList.remove("selected5");
    ascen.classList.add("selected5");
  });

  var togetherrow = document.getElementById("togetherrow");
  var togethercolumn = document.getElementById("togethercolumn");
  var togetherfs = document.getElementById("togetherfs");
  var togetherfe = document.getElementById("togetherfe");
  var togethercen = document.getElementById("togethercen");
  var togethersa = document.getElementById("togethersa");
  var togethersb = document.getElementById("togethersb");

  var justify6 = document.getElementById("justify6");


  togetherrow.addEventListener("click", function() {
    justify6.style.flexDirection = "row";
    document.getElementById('styleTag6').innerHTML = "flex-direction: row;";
    document.querySelector(".selected6").classList.remove("selected6");
    togetherrow.classList.add("selected6");

  });

  togethercolumn.addEventListener("click", function() {
    justify6.style.flexDirection = "column";
    document.getElementById('styleTag6').innerHTML = "flex-direction: column;";
    document.querySelector(".selected6").classList.remove("selected6");
    togethercolumn.classList.add("selected6");
  });

  togetherfs.addEventListener("click", function() {
    justify6.style.justifyContent = "flex-start";
    document.getElementById('styleTag7').innerHTML = "justify-content: flex-start;";
    document.querySelector(".selected7").classList.remove("selected7");
    togetherfs.classList.add("selected7");
  });

  togetherfe.addEventListener("click", function() {
    justify6.style.justifyContent = "flex-end";
    document.getElementById('styleTag7').innerHTML = "justify-content: flex-end;";
    document.querySelector(".selected7").classList.remove("selected7");
    togetherfe.classList.add("selected7");
  });

  togethercen.addEventListener("click", function() {
    justify6.style.justifyContent = "center";
    document.getElementById('styleTag7').innerHTML = "justify-content: center;";
    document.querySelector(".selected7").classList.remove("selected7");
    togethercen.classList.add("selected7");
  });

  togethersa.addEventListener("click", function() {
    justify6.style.justifyContent = "space-around";
    document.getElementById('styleTag7').innerHTML = "justify-content: space-around;";
    document.querySelector(".selected7").classList.remove("selected7");
    togethersa.classList.add("selected7");
  });

  togethersb.addEventListener("click", function() {
    justify6.style.justifyContent = "space-between";
    document.getElementById('styleTag7').innerHTML = "justify-content: space-between;";
    document.querySelector(".selected7").classList.remove("selected7");
    togethersb.classList.add("selected7");
  });




});


