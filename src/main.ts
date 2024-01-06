const items = document.querySelectorAll(".item");

const closeAll = () => {
  const open_items = document.querySelectorAll(".item.open");
  open_items.forEach((element) => {
    element.classList.remove("open");
  });
};
items.forEach((element) => {
  element.addEventListener("click", (e: Event) => {
    e.preventDefault();
    if (element.classList.contains("open")) {
      element.classList.remove("open");
    } else {
      closeAll();
      element.classList.add("open");
    }
  });
});
