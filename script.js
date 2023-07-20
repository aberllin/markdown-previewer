import { markdownContent } from "./__fixtures__/markdown.js";

const markdownInput = document.getElementById("editor");
const renderMarkdown = () => {
  markdownInput.innerHTML = markdownContent;
  const editorValue = markdownInput.value;

  const parsedMarkdown = marked(editorValue);
  const preview = document.getElementById("preview");
  console.log("parsedMarkdown", parsedMarkdown);
  preview.innerHTML =
    parsedMarkdown === "" ? "💅 Gimme some markdown 💅" : parsedMarkdown;
};

markdownInput.addEventListener("input", renderMarkdown);
window.onload = renderMarkdown;
