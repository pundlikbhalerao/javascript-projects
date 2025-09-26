function calulateAge() {
  var birthdateInput = document.getElementById("birth").value;
  var birthdate = new Date(birthdateInput);
  var today = new Date();

  var age = today.getFullYear() - birthdate.getFullYear();
  var month = today.getMonth() - birthdate.getMonth();
  var day = today.getDate() - birthdate.getDate();

  if (
    today.getMonth() < birthdate.getMonth() ||(today.getMonth() === birthdate.getMonth() &&  today.getDate() < birthdate.getDate()))
     {
    age--;
    month = 12 + today.getMonth() - birthdate.getMonth();
    day = 31 + today.getDate() - birthdate.getDate();
    }
  document.getElementById("result").innerHTML =
    "Your age is : " +
    age +
    " years, " +
    month +
    " months and " +
    day +
    " days";
}
