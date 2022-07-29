const addBtn = document.getElementById("addNotes");
const notes = document.getElementById("notes");
const input = document.getElementById("input");

addBtn.addEventListener("click", () => {
  if (input.value !== "") {
    let card = document.createElement("div");
    card.className = "card";
    card.id = "card";

    let cardHeader = document.createElement("div");
    cardHeader.className = "card-header";

    let heading = document.createElement("h3");
    heading.id = "heading";
    heading.innerText = "Note";

    let i = document.createElement("i");
    i.className = "bx bx-x bx-sm";
    i.id = "del";

    cardHeader.appendChild(heading);
    cardHeader.appendChild(i);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.id = "text";
    cardBody.innerText = `${input.value}`;

    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    notes.appendChild(card);

    if (notes.children.length > 0) {
      cardEvents();
    }
  }
});

function cardEvents() {
  const heading = document.querySelectorAll("#heading");
  const text = document.querySelectorAll("#text");
  const delBtn = document.querySelectorAll("#del");

  heading.forEach((l) =>
    l.addEventListener("click", (e) => {
      e.target.contentEditable = true;
      e.target.style.outline = "none";
      e.target.spellcheck = false;
    })
  );

  text.forEach((l) =>
    l.addEventListener("click", (e) => {
      e.target.contentEditable = true;
      e.target.style.outline = "none";
      e.target.spellcheck = false;
    })
  );

  delBtn.forEach((l) =>
    l.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
    })
  );

  input.value = "";
}
