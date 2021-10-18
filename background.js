console.log("Background script is running");

const iconRules = [
  {
    conditions: [
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: "medium.com" },
      }),
    ],

    actions: [new chrome.declarativeContent.ShowPageAction()],
  },
];

chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  console.log("Executed");
  chrome.declarativeContent.onPageChanged.addRules(iconRules);
});

//  fired on click of extension icon. Only works when there is no popup.html
/* chrome.pageAction.onClicked.addListener(function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "REPLACE_TEXT" });
  });
});

 */