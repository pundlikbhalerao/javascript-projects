const cat_Result = document.getElementById("gallery");
const errorData = document.getElementById("error-box");

btn_generate.addEventListener("click", function () {
  const nums = document.getElementById("input-box").value;

  errorData.innerHTML = "";

  if (!nums.match(/^[0-9]+$/)) {
    return (errorData.innerHTML = "Enter valid Number");
  }
  if (parseInt(nums) > 100) {
    return (errorData.innerHTML = "Number should be less than or equal 100");
  }

  allimages = "";

  fetch(
    `https://api.thecatapi.com/v1/images/search?limit=1${nums}&page=10&order=desc`
  )
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < nums; i++) {
        allimages += `<img src=${res[i].url}>`;
      }
      cat_Result.innerHTML = allimages;
    });
});
