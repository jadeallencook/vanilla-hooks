const countElement = document.getElementById("count");

const [count, setCount] = useState(1);

const handleIncrement = () => setCount((previousState) => ++previousState);
const handleDecrement = () => setCount((previousState) => --previousState);

useEffect(() => {
  countElement.innerText = count;
}, [count]);
