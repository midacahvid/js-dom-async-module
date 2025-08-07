
const listItems = document.querySelectorAll("#to-do-list li");

listItems.forEach(li => {
  li.addEventListener("click", () => {
    const tickIcon = li.querySelector(".tick-icon");
    tickIcon.classList.toggle("active");
  });
});
