const todoListElement = document.getElementById("todo-list");
const todoInputElement = document.getElementById("todo-input");
const addTodoButtonElement = document.getElementById("add-todo-button");

const [items, setItems] = useState(["Write more JavaScript"]);

addTodoButtonElement.addEventListener("click", () =>
  setItems((previousState) => [...previousState, todoInputElement.value])
);

useEffect(() => {
  todoListElement.innerHTML = "";
  todoInputElement.value = "";
  items.map((item, index) => {
    const todoItem = document.createElement("li");
    const removeItemButtonElement = document.createElement("button");
    removeItemButtonElement.innerText = "Remove";
    removeItemButtonElement.addEventListener("click", () => {
      setItems((previousState) => {
        previousState.splice(index, 1);
        return previousState;
      });
    });
    todoItem.innerText = item;
    todoItem.appendChild(removeItemButtonElement);
    todoListElement.appendChild(todoItem);
  });
}, [items]);
