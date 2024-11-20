
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

const copyAmt=document.getElementById("copy-amt");

alert("feee");
copyAmt.addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let am = document.querySelector("#amt-d").value;
  await navigator.clipboard.writeText(am);
  copyAmt.textContent="Copied"
  setInterval(() => {
      copyAmt.textContent="Copy"
  }, 5000);
}