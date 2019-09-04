// Show Todo Texts
{
  const todos = ["Write the letter", "Eat some lunch", "Run around the city"];

  const showTodos = data => {
    for (let index = 0; index < data.length; index++) {
      const item = data[index];

      console.log(`[${index + 1}] ${item}`);
    }
  };

  showTodos(todos);

  console.log("");
  // Search Todo Texts

  const searchTodos = (data, textToSearch) => {
    let newTodos = [];

    for (let index = 0; index < data.length; index++) {
      const item = data[index];

      const lowerCasedItem = item.toLowerCase();
      const lowerCasedText = textToSearch.toLowerCase();

      if (lowerCasedItem.includes(lowerCasedText)) {
        newTodos.push(item);
      }
    }

    return newTodos;
  };
  const foundTodos = searchTodos(todos, "run");
  // ['Run around the city']
  showTodos(foundTodos);
  console.log("");
  const foundTodos2 = searchTodos(todos, "THE");
  // ['Write the letter', 'Run around the city']
  showTodos(foundTodos2);
}

console.log("");
console.log("");

// JavaScript Complex

// Array of Todo Objects
const myTodos = [
  {
    id: 1,
    text: "Write the letter",
    tags: ["important", "writing"],
    favorite: true,
    completed: true
  },
  {
    id: 2,
    text: "Eat some lunch",
    tags: ["food"],
    completed: false,
    favorite: true
  },
  {
    id: 3,
    text: "Run around the city",
    favorite: false,
    completed: true
  }
];

// Show Todos
const showTodos = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    let itemString = ``;

    itemString += item.completed ? `☑` : `x`; // Example: ☑
    itemString += ` ${item.text} `; // Example: The todo text
    itemString += item.favorite ? `★` : `x`; // Example: ★
    // ☐ The todo text ★

    console.log(itemString);
  }
};
showTodos(myTodos);

console.log("");

// Search Todos Text
const searchTodosText = (data, searchText) => {
  let newTodos = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    const lowerCasedItemText = item.text.toLowerCase();
    const lowerCasedSearchText = searchText.toLowerCase();

    if (lowerCasedItemText.includes(lowerCasedSearchText)) {
      newTodos.push(item);
    }
  }

  return newTodos;
};

const foundTodos = searchTodosText(myTodos, "the");

showTodos(foundTodos);
