const userTextElement = document.getElementById("user-text");
const userInputElement = document.getElementById("user-input");

const [user, setUser] = useState("Jane Doe");

const handleUserChange = (event) => setUser(event.target.value);

useEffect(() => {
  userTextElement.innerText = user;
  userInputElement.value = user;
}, [user]);
