console.warn("Hello World.............");

const replaceText = (find, replace) => {
  const FIND = find;
  const REPLACE_WITH = replace;

  const regex = new RegExp(FIND, "gi");

  const contents = document.querySelectorAll("p,a,li,h1,h2,h3,h4,h5,h6,span");

  for (const snippet of contents) {
    snippet.textContent = snippet.textContent.replace(regex, REPLACE_WITH);
  }
};

const createIframe = () => {
  const iframe = document.createElement("iframe");
  // iframe.style.background = "gray";
  iframe.style.height = "700px";
  iframe.setAttribute("id", "iframe");
  iframe.style.width = "400px";
  iframe.style.display = "none";
  iframe.style.position = "fixed";
  iframe.style.top = "50px";
  iframe.style.right = "0px";
  iframe.style.zIndex = "9000000000";
  iframe.style.border = "1px solid black";
  iframe.src = chrome.extension.getURL("frame.html");

  document.body.appendChild(iframe);
  console.log("Executed iframe");
};

const toggleIframe = () => {
  const iframe = document.getElementById("iframe");
  const value = iframe.style.display;
  let iframeDisplay;

  if (value === "none") {
    iframeDisplay = "block";
  } else {
    iframeDisplay = "none";
  }

  iframe.style.display = iframeDisplay;

  console.log("Toggling.........");
};

chrome.runtime.onMessage.addListener(function (message) {
  console.log(message);

  if (message.action === "REPLACE_TEXT") {
    replaceText(message.find, message.replace);
    createIframe();
  }

  if (message.action === "SHOW_SIDEBAR") {
    toggleIframe();
  }
});

createIframe();
