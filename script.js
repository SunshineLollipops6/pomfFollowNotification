const urlParams = new URLSearchParams(window.location.search);
const soundURL = urlParams.get('sound');
const streamer = urlParams.get('streamer');

function reconnect() {
  const exampleSocket = new WebSocket(
    "wss://pomf.tv/websocket/"
  );
  
  exampleSocket.onopen = (event) => {
    exampleSocket.send('{"roomId":"' + streamer + '","userId":"0","apikey":"Guest","action":"connect"}');
  };
  
  exampleSocket.onmessage = async (event) => {
    d = JSON.parse(event.data)
    if (d.type == 'new-subscriber') {
      await newSub(d.subscriber.colourName)
    }
  };
  
  exampleSocket.onclose = async (event) => {
    await new Promise(r => setTimeout(r, 10000));
    reconnect();
  };
}

var audio = new Audio(soundURL);

async function newSub(name) {

  document.getElementById("sub").innerHTML = name;
  //console.log("playing");
  try {
    audio.play();
  } finally {
    // ...
  }

}

reconnect();
