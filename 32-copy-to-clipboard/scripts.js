const button = document.getElementById("copy");
const p = document.getElementById("p");
const message = document.getElementById("message");

function copyTo(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  message.classList.add("after_click");
}
