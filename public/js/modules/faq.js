//********************** accordion ************************
// ✅ accordion
const accordionTitles = document.querySelectorAll(".accordion-faq");

for (let i = 0; i < accordionTitles.length; i++) {
    accordionTitles[i].addEventListener("click", function () {
        console.log(this);
        this.classList.toggle("accordion-faq--open");
    });
}
