const endpoint = "https://jsonplaceholder.typicode.com/comments?postId=1";
const [comments, setComments] = useState([]);

useEffect(async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  setComments(data);
}, []);

useEffect(() => {
  const commentsListElement = document.getElementById("comments");
  commentsListElement.innerHTML = "";
  comments.forEach((comment) => {
    const listItem = document.createElement("li");
    listItem.innerText = comment.body;
    commentsListElement.appendChild(listItem);
  });
}, [comments]);
