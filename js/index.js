
$(".btn1").click(function(){
    $("#order").show();
});
//Business logic
//constructor
function Pizza(size, crust, topping, quantity,total){
  this.mySize = size;
  this.myCrust = crust;
  this.myTop = topping;
  this.myQuantity = quantity;
  this.total = total;
}
//prototype
Pizza.prototype.totalCost = function(){
  return (mySize + myCrust + myTop)*(myQuantity)
}
//User interface
//submit button
$(document).ready(function(){
  $("#send").click(function(event){
      var mquantity = document.getElementById("quantity").value;
      if(mquantity == ""){
          alert("choose the quantity")
      }
      else{
          $("#send").hide();
          $(".checkout").show();
          $(".display").slideDown();
          $("#home").slideDown();
          $("#grand").slideDown();
          $("#neworder").hide();
      }
      function getSize(){
          var sizeCost = document.getElementById("pizza").value;
          return parseInt(sizeCost)
      }
      function getCrust(){
          var crustCost = document.getElementById("crust").value;
          return parseInt(crustCost)
      }
      function getNumber(){
          var myNumber = document.getElementById("quantity").value;
          return parseInt(myNumber)
      }
      function getTopping() {
          var myTopping = document.getElementById("topping").value;
          return parseInt(myTopping);
        }
        event.preventDefault();
      
     // Object for new customer;
      var newCustomer = new Pizza(getSize(), getCrust(), getTopping(), getNumber());
      // Total cost for the new customer:
      var totalCost = ((newCustomer.mySize + newCustomer.myCrust + newCustomer.myTop)*(newCustomer.myQuantity));
      // var newCost = newCost + totalCost
      $(".display").append("<h3> You have ordered " + newCustomer.myQuantity +" Pizza and your Total Bill is Ksh.: " + totalCost +"</h3>")
  });
  //delivery location
  $("#home").click(function(){
      $("#grand").hide();
      $(".display").hide();
      $(".checkout").hide();
      $(".userdeliver").show();
      $("#neworder").hide();
  });
  // checkout button details
  $("#grand").click(function(){
      $("#home").hide();
      $(".display").show();
      $(".checkout").hide();
      $(".userdeliver").hide();
      $("#neworder").show();
  });
  //new order
  $("#neworder").click(function(){
      $("#home").hide();
      $(".display").hide();
      $(".checkout").hide();
      $(".userdeliver").hide();
      $("#neworder").hide();
      $("#myForm").trigger("reset")
      $("#send").show();
      $(".grandorder").hide();
  });
      //final order button
      $("#finalorder").click(function(event){
          event.preventDefault();
          $("#home").hide();
          $(".display").hide();
          $(".checkout").hide();

          function getSize(){
              var sizeCost = document.getElementById("pizza").value;
              return parseInt(sizeCost)
          }
          function getCrust(){
              var crustCost = document.getElementById("crust").value;
              return parseInt(crustCost)
          }
          function getNumber(){
              var myNumber = document.getElementById("quantity").value;
              return parseInt(myNumber)
          }
          function getTopping() {
              var myTopping = document.getElementById("topping").value;
              return parseInt(myTopping);
            }
         // Object for new customer;
          var newCustomer = new Pizza(getSize(), getCrust(), getTopping(), getNumber());
          // Total cost for the new customer:
          var totalCost = ((newCustomer.mySize + newCustomer.myCrust + newCustomer.myTop)*(newCustomer.myQuantity));

          // confirm("The delivery amount is 200 ")
          var grandTotal = totalCost+200;
          // console.log("Your total bill is Ksh.: " + grandTotal);
          let customer = $("input#name").val();
          let phone = $("input#phone").val();
          let location= $("input#place").val();
          if ($("input#name").val() && $("input#phone").val() && $("input#place").val()!=""){
              $(".grandorder").append('<h3>'+ customer +" "+ " You have ordered " + newCustomer.myQuantity +" pizza, for " + totalCost + " We have recieved your order and it will be delivered to you at "+ location + ". Pay on delivery Ksh. "+grandTotal +'<h3>');
               $(".grandorder").slideDown(800);
               $(".userdeliver").hide();
               $("#neworder").show();
            }
            else {
              alert("Kindly fill in your details");
              $(".userdeliver").show();
              
            }
      });
});






