document.addEventListener("DOMContentLoaded", function(e) {
  var flexallcontainer = document.getElementById("justify7");
  var dropdownbtns = document.querySelectorAll(".dropdownbtn");
  var dropdownmenu = document.querySelector(".dropdownmenu");
  var items = document.querySelectorAll(".item");

  var openMenu = [];

  var flexProps = [
    "flex-direction: ",
    "justify-content: ",
    "align-items: ",
    "align-content: ",
    "align-self: "
  ];
  var flexPropertiesObject = {
    0: {
      0: "row",
      1: "column",
      2: "row-reverse",
      3: "column-reverse"
    },
    1: {
      0: "flex-start",
      1: "flex-end",
      2: "center",
      3: "space-around",
      4: "space-between"
    },
    2: {
      0: "flex-start",
      1: "flex-end",
      2: "center"
    },
    3: {
      0: "flex-start",
      1: "flex-end",
      2: "center",
      3: "space-around",
      4: "space-between"

    },
    4: {
      0: "flex-start",
      1: "flex-end",
      2: "center"
    }
  }
  //alignSelf class assignment
  Array.prototype.forEach.call(flexallcontainer.children, child => {
    child.addEventListener("click", function () {
      document.querySelector(".selectedChild").classList.remove("selectedChild");
      this.classList.add("selectedChild");
    });
  });
  //main button funcionality
  Array.prototype.forEach.call(dropdownbtns, (dropdownbtn, i) =>{
    var dropdownmenu = dropdownbtn.firstElementChild;
    // var dropdownmenu = dropdownbtn.children[1];
    //use index to distinguish each menu
    //need to use flexPropertiesObject to give each line the right function
    //use Array for each on dropdownmenu to access each menu item

    dropdownbtn.addEventListener("click" , function () {
      var open = dropdownmenu.classList.toggle("show");
      //handle logic to make sure multiple menus won't be open at the same time
      var closeMenu;
      //this closes the open menu in openMenu
      if (open) {
        closeMenu = openMenu.pop();
        if (closeMenu) {

          closeMenu.classList.toggle("show");

        }
        openMenu.push(dropdownmenu);
      }
      //this deletes the open menu from openMenu array
      if(!open) {
        closeMenu = openMenu.pop();

      }

      if (i==5) {
        Array.prototype.forEach.call(items, item => {

            item.classList.toggle("margin");

        });
      }

      Array.prototype.forEach.call(dropdownmenu.children, (menuitem, j) => {
        menuitem.addEventListener("click", function () {
          if (i==0){
            flexallcontainer.style.flexDirection = flexPropertiesObject[i][j];
            document.getElementById('styleTag1').innerHTML = flexProps[i] + flexPropertiesObject[i][j] + ";";
          }else if (i==1) {
            flexallcontainer.style.justifyContent = flexPropertiesObject[i][j];
            document.getElementById('styleTag2').innerHTML = flexProps[i] + flexPropertiesObject[i][j] + ";";

          }
          else if (i==2) {
            flexallcontainer.style.alignItems = flexPropertiesObject[i][j];
            document.getElementById('styleTag3').innerHTML = flexProps[i] + flexPropertiesObject[i][j] + ";";

          }
          else if (i==3) {
            flexallcontainer.style.alignContent = flexPropertiesObject[i][j];
            document.getElementById('styleTag4').innerHTML = flexProps[i] + flexPropertiesObject[i][j] + ";";

          }
          else if (i==4) {
            document.querySelector(".selectedChild").style.alignSelf = flexPropertiesObject[i][j];

            document.getElementById('styleTag5').innerHTML = flexProps[i] + flexPropertiesObject[i][j] + ";";

          }


        });
      });
    });
  });
});
