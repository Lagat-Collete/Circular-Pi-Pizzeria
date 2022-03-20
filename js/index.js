

var price, crustPrice, toppingPrice;
let total = 0;

function orderPizza(size, crust, toppings, total) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.total = total;
}
$(document).ready(function () {
  $("#proceed").click(function (event) {
    let pizzaSize = $("#size-input option:selected").val();

    console.log('pizzaSize =' + pizzaSize);
    let pizzaCrust = $('#crust-input option:selected').val();
    console.log('pizzaCrust=' + pizzaCrust);
    let pizzaToppings = [];
    $.each($('input[name="toppings"]:checked'), function () {
      pizzaToppings.push($(this).val());
    });
    console.log(pizzaToppings.join(","));

    switch (pizzaSize) {
      case "Small -Ksh.500":
        price = 500;
        console.log(price);
        break;
      case "Medium - Ksh.600":
        price = 600;
        console.log(price);
        break;
      case "Large - Ksh.700":
        price = 700;
        console.log(price);
      default:
        console.log("Select pizza size");
    }
    switch (pizzaCrust) {
      case "Crispy - Ksh.100":
        crustPrice = 100;
        break;
      case "Stuffed - Ksh.100":
        crustPrice = 100;
        break;
      case "Gluten-free -Ksh.100":
        crustPrice = 100;
      default:
        console.log("Select Pizza Crust");
    }
    let toppings_value = pizzaToppings.length * 100;
    console.log("Toppings value:" + toppings_value);

    if ((pizzaSize == "0") && (pizzaCrust == "0")) {
      console.log("nothing selected");
      $(".proceed").show();
      $(".grand").hide();
      alert("Kindly order");
    } else {
      $("#proceed").hide();
      $(".grand").slideDown(800);
    }

    total = price + crustPrice + toppings_value;
    console.log(total);
    let checkTotal = 0;
    checkTotal = checkTotal + total;

    $("#pizzasize").html($("#size-input option:selected").val());
    $("#pizzcrust").html($("#crust-input option:selected").val());
    $("#pizzatoppings").html(pizzaToppings.join(","));
    $("#totals").html(total);
    $("morepizza").click(function () {
      let pizzaSize = $("#size-input option:selected").val();
      let pizzaCrust = $("#crust-input option:selected").val();
      let pizzaToppings = [];

      $.each($("input[name='toppings']:checked"), function () {
        pizzaToppings.push($(this).val());
      });
      console.log(pizzaToppings.join(","));
      switch (pizzaSize) {
        case "Small -Ksh.500":
          price = 500;
          console.log(price);
          break;
        case "Medium - Ksh.600":
          price = 600;
          console.log(price);
          break;
        case "Large - Ksh.700":
          price = 700;
          console.log(price);
        default:
          console.log("Select pizza size");
      }
      switch (pizzaCrust) {
        case "Crispy - Ksh.100":
          crustPrice = 100;
          break;
        case "Stuffed - Ksh.100":
          crustPrice = 100;
          break;
        case "Gluten-free -Ksh.100":
          crustPrice = 100;
        default:
          console.log("Select Pizza Crust");
      }
      var addOrder = new orderPizza(pizzaSize, pizzaCrust, pizzaToppings, total);
      $("#selected").append('<tr><td id="pizzasize">' + addOrder.size + '</td><td id="pizzacrust">' + addOrder.crust + '</td><td id="pizzatoppings">' + addOrder.topping + '</td><td id="totals">' + addOrder.total + '</td></tr>');
      console.log(addOrder);
    });
    $("#checkout").click(function () {
      $("#checkout").hide();
      $("#morepizza").hide();
      $("#deliver").slideDown(800);
      $("#delivery").slideDown(800);
      console.log("Total amount is Ksh." + checkTotal);
      $("#pizzatotal").append("The amount is Ksh." + checkTotal)
    });
    $("#deliver").click(function () {
      $(".checkout-table").hide();
      $(".grand h2").hide();
      $(".delivery").slideDown(800);
      $("#delivery").hide();
      $("#deliver").hide();
      $("#pizzatotal").hide();

      let deliveryamount = checkTotal + 100;
      console.log("The total amount will be Ksh. " + deliveryamount + "on delivery");
      $("#totalbill").append("Your amount plus delivery fee is:Ksh." + deliveryamount);
    });
    $("#last").click(function (event) {
      event.preventDefault();

      $("#pizzatotal").hide();
      $("#delivery").hide();
      $("#last").hide();

      let deliveryamount = checkTotal + 100;
      console.log("Final total is: " + deliveryamount);

      let person = $("#name").val();
      let number = $("#number").val();
      let location = $("#location").val();
      if ($("#name").val() && $("#number").val() && $("#location").val() != "") {
        $(".delivery").hide();
        $("#comment").append(person + ",We have recieved your order and it will be delivered to you at " + location + " for Ksh. " + deliveryamount + ". Pay on delivery.");
        $("#totalbill").hide();
        $("#comment").slideDown(800);
      } else {
        alert("Kindly provide your details.");
        $(".delivery").show();
        $("#last").show();
      }

    });

  });
})


