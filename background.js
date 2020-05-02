chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo) {
      // read changeInfo data and do something with it
      if (changeInfo.url) {
        chrome.tabs.sendMessage( tabId, {
          message: 'reload'
        })
      } else if (changeInfo.status === 'complete'){
          chrome.tabs.sendMessage( tabId, {
              message: 'start'
          })
      }
    }
  );