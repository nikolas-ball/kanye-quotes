var url = "https://api.kanye.rest/?format=text";
var xhrbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var axiosbtn = document.querySelector("#axios");
var display = document.querySelector("#quote");

xhrbtn.addEventListener("click", function () {
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var quote = XHR.responseText;
      display.innerText = quote;
    }
  };
  XHR.open("GET", url);
  XHR.send();
});

fetchbtn.addEventListener("click", function () {
  fetch(url)
    .then(function (req) {
      req.text().then(function (data) {
        display.innerText = data;
      });
    })
    .catch(function () {
      alert("ERROR!");
    });
});

$("#jquery").click(function () {
  $.get(url).done(function (data) {
    $("#quote").text(data);
  });
});

axiosbtn.addEventListener("click", function () {
  axios
    .get(url)
    .then(function (res) {
      display.innerText = res.data;
    })
    .catch(function () {
      alert("ERROR!");
    });
});
