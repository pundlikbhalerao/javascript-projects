const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `<div class = "key">
  <big>Event.key :<big>
  ${event.key === " " ? "space" : event.key}
 </div>

 <div class="key">
 <big>Event.keyCode </big>:
 ${event.keyCode}
 </div>

 <div class="key ">
 <big>Event.code </big>
   ${event.code}
 </div>
`;
});
