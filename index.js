$("document").ready(function() {
  var close = document.getElementsByClassName("closebtn");
  var i;

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.opacity = "0";
      setTimeout(function() {
        div.style.display = "none";
      }, 600);
    };
  }
  $("#login").click(function() {
    document.getElementById("success").style.display = "block";
  });
});

function myFunction() {
  alert("Successfull Login!");
}