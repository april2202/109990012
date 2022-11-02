      //change border width
      function changeBorderWidth200() {
        document.getElementById("my_table").style.cssText = "width: 200px";
      }
      function changeBorderWidth500() {
        document.getElementById("my_table").style.cssText = "width: 500px";
      }

      function changeSpacing1() {
        document.getElementById("my_table").style.cssText =
          "border-spacing: 1px";
      }
      function changeSpacing15() {
        document.getElementById("my_table").style.cssText =
          "border-spacing: 15px";
      }
      function changeSpacing20() {
        document.getElementById("my_table").style.cssText =
          "border-spacing: 20px";
      }
      function changeColorRed() {
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