const closeButton = document.getElementById("closeButton");

closeButton.onclick = function (e) {
  console.log("Clicking close button");
  e.preventDefault();

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "SHOW_SIDEBAR",
    });
  });
};
