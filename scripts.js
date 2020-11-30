function setText(e,text) {document.getElementById(e).innerHTML = text;}

function setValue(e,text) {
  if (!(e=="CopyButton")) {setValue("CopyButton","Copy");}
  document.getElementById(e).value = text;
}

function show() {
  document.getElementById("GeneratedDiv").style.display = "block";
}

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomChoice(l) {
  return l[Math.floor(Math.random() * l.length)];
}