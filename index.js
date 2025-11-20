// variables
// buttons =>
const add = document.querySelector(".main__buttonAdd");
const complete = document.querySelector(".main__buttonComplete");
const edit = document.querySelector(".main__buttonEdit");
const yourDelete = document.querySelector(".main__buttonDelete");

// others =>
const cards = document.querySelector(".main__cards");
const cards2 = document.querySelector(".main__cards2");
const boxGet = document.querySelector(".main__box");

// events
add.addEventListener("click", (addEvent) => {
  // creating title for box =>
  const title = document.createElement("h3");
  title.setAttribute("class", "main__title");
  title.textContent = "Enter task!";
  title.style.cssText = `display: block`;

  // creating input =>
  const input = document.createElement("input");
  input.setAttribute("class", "main__input");
  input.placeholder = "One more task";

  // creating box for input =>
  const boxGet = document.createElement("div");
  boxGet.setAttribute("class", "main__box");

  // creating button (delete) for box =>
  const newDelete = document.createElement("div");
  newDelete.innerHTML = `<div><i class="main__icon ri-delete-bin-2-line"></i></div>`;
  newDelete.setAttribute("class", ",main__buttonDelete main__button");

  // creating container for input and bin =>
  const container = document.createElement("div");
  container.setAttribute("class", "main__container");
  container.append(input, newDelete);

  // adding input to box =>
  boxGet.append(title, container);
  cards2.append(boxGet);

  newDelete.addEventListener("click", (deleteEvent) => {
    const deleteButton = boxGet;
    deleteButton.remove();
  });
});

edit.addEventListener("click", (editEvent) => {});
