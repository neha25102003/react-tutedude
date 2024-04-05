import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Card from "./card.jsx";
import info from "./info.js";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
function createcard(info) {
  return <Card title={info.title} content={info.content} />;
}
root.render(<div>{info.map(createcard)}</div>);
/*card*/
import react from "react";
function card(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
export default card;
/*info*/
const info = [
  { title: "title1", content: "content1" },
  { title: "title2", content: "content2" },
  { title: "title3", content: "content3" },
];
export default info;
