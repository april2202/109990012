//change border width
function changeBorderWidth(val) {
  document.getElementById("my_table").style.cssText = "width:"+val+"px";
}

function changeSpacing(val) {
   document.getElementById("my_table").style.cssText = "border-spacing:"+val+"px";
}

function changeSpacing(clr) {
  document.getElementById("dog").style.cssText = "background-color:"+clr;
}
      function
       changeColorRed() {
        for (var i = 0; i < 12; i++)
          document.getElementsByTagName("td")[i].style.cssText =
            "background-color:red";
      }
      function changeColorCyan() {
        for (var i = 0; i < 12; i++)
          document.getElementsByTagName("td")[i].style.cssText =
            "background-color:cyan";
      }
      function changeColorPink() {
        for (var i = 0; i < 12; i++)
          document.getElementsByTagName("td")[i].style.cssText =
            "background-color:pink";
      }
      function changeColorLime() {
        for (var i = 0; i < 12; i++)
          document.getElementsByTagName("td")[i].style.cssText =
            "background-color:lime";
      }

      function resetShit() {
        document.getElementById("my_table").style.cssText =
          "border-spacing: 1px;width: 200px";
        for (var i = 0; i < 12; i++) {
          document.getElementsByTagName("td")[i].style.cssText =
            "background-color:yellow";
        }
      }