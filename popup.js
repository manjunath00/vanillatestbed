const replacelyForm = document.getElementById("replacely-form");
const searchText = document.getElementById("search");
const replaceText = document.getElementById("replace");
const showButton = document.getElementById("showButton");
const closeButton = document.getElementById("closeButton");

replacelyForm.onsubmit = function (e) {
  e.preventDefault();
  console.log("clicked");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "REPLACE_TEXT",
      find: searchText.value,
      replace: replaceText.value,
    });

    window.close();
  });

  console.log("replaced", searchText.value, replaceText.value);
};


showButton.onclick = function (e) {
  e.preventDefault();

  console.log("Show sidebar clicked");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "SHOW_SIDEBAR",
    });
  });
};
