document.addEventListener("DOMContentLoaded", () => {
  const $accordionQuestions = document.querySelectorAll(".accordion__question");

  if ($accordionQuestions) {
    $accordionQuestions.forEach(question => {
      const $accordionImage = question.querySelector(".accordion__img");
  
      question.addEventListener("click", () => {
        const $accordionContent = question.nextElementSibling;
        $accordionContent.classList.toggle("accordion__content--show");

        if ($accordionContent.classList.contains("accordion__content--show")) {
          $accordionImage.src = "./assets/images/icon-minus.svg";
        } else {
          $accordionImage.src = "./assets/images/icon-plus.svg";
        }
      });
    })
  }

});