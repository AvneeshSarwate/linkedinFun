chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({spinning: true}, function() {
    console.log("Is Linkedin Spinning?", true);
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.linkedin.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});