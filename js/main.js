function getTotal() {
  var total = 0;
  var burgerArray = document.getElementsByClassName("order-item");

  for (var i = 0; i < burgerArray.length; i++) {
    if (burgerArray[i].checked) {
      total += parseFloat(burgerArray[i].value);
    }
  }
  document.getElementById("totalPrice").innerHTML =
    "<h3>Total price: <strong>$" + total.toFixed(2) + "</strong></h3>";
}

function resetOrder() {
  $(".order-item").prop("checked", false);

  document.getElementById("totalPrice").innerHTML = "";
}

// Open the menu and hide the "Welcome" div
function openMenu() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("welcome").style.display = "none";
}

// Close the menu and show the "Welcome" div
function closeMenu() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("welcome").style.display = "block";
}
