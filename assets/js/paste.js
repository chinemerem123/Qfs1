
const pasteButton = document.querySelector('#paste-button');

// Type 2
pasteButton.addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector("#address").textContent;
  await navigator.clipboard.writeText(text);
  pasteButton.textContent="Copied"
  setInterval(() => {
      pasteButton.textContent="Copy"
  }, 5000);
}