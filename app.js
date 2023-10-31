const numbers = document.querySelectorAll(".number"),
  prevNextBtn = document.querySelectorAll(".btn"),
  startBtn = document.querySelector(".start_btn"),
  previousBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  endBtn = document.querySelector(".end_btn");

console.log(prevNextBtn);

let currentStep = 0;

const updateBtn = () => {
  if (currentStep === 4) {
    nextBtn.disabled = true;
    endBtn.disabled = true;
  } else if (currentStep === 0) {
    startBtn.disabled = true;
    previousBtn.disabled = true;
  } else {
    startBtn.disabled = false;
    previousBtn.disabled = false;
    nextBtn.disabled = false;
    endBtn.disabled = false;
  }
};

numbers.forEach((num, index) => {
  num.addEventListener("click", (e) => {
    e.preventDefault();

    currentStep = index;
    document.querySelector(".active").classList.remove("active");
    num.classList.add("active");
    updateBtn();
  });
});

prevNextBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    currentStep += e.target.id === "next" ? 1 : -1;
    numbers.forEach((number, index) => {
      number.classList.toggle("active", index === currentStep);
      updateBtn();
    });
  });
});

startBtn.addEventListener("click", (e) => {
  document.querySelector(".active").classList.remove("active");
  numbers[0].classList.add("active");
  currentStep = 0;
  console.log(currentStep);
  updateBtn();
  nextBtn.disabled = false;
  endBtn.disabled = false;
});

endBtn.addEventListener("click", (e) => {
  document.querySelector(".active").classList.remove("active");
  numbers[4].classList.add("active");
  currentStep = 4;
  console.log(currentStep);
  updateBtn();
  startBtn.disabled = false;
  previousBtn.disabled = false;
});
