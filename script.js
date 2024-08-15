/*const exampleSocket = new WebSocket(
  "wss://pomf.tv/websocket/"
);

exampleSocket.onopen = (event) => {
  exampleSocket.send('{"roomId":"ktgd420","userId":"0","apikey":"Guest","action":"connect"}');
};

exampleSocket.onmessage = (event) => {
  console.log(event.data);
  d = JSON.parse(event.data)
  console.log(d.type);
};*/
setTimeout(async function() {
  await newSub("abc");
  await newSub("def");
  await newSub("ghi");
}, 2000)

var audio = new Audio('https://files.catbox.moe/wxdzax.mp3');

async function newSub(name) {
  document.getElementById("sub").textContent = name;
  console.log("showing");
  document.getElementById("main").classList.add("show");
  console.log("playing");
  audio.play();
  console.log("waiting");
  await new Promise(r => setTimeout(r, 10000));
  console.log("hiding");
  document.getElementById("main").classList.remove("show");
  console.log("waiting");
  await new Promise(r => setTimeout(r, 2000));
}
