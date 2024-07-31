const minusone_btn=document.getElementById("one");
const btn_0=document.getElementById("zero");
const plusone_btn=document.getElementById("two");
const reset_btn=document.getElementById("third");

minusone_btn.addEventListener("click", () => {
    const value = Number(btn_0.innerText);
    if (value > 0) {
      btn_0.innerText = value - 1;
    } else {
      alert("Negative value not allowed");
    }
  });
  
  // for increment button click
  plusone_btn.addEventListener("click", () => {
    const value = Number(btn_0.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      btn_0.innerText = value + 1;
    }
  });
  
  // for reset button click
  reset_btn.addEventListener("click", () => {
    btn_0.innerText = 0;
  });