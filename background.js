/*
* Adds a listener for changes in tab content 
* (in the context of this project, swapping between
* subpages on Facebook, like Home -> Profile), as well 
* as whether or not the tab has finished initially loading.
* 
* It will then relay this information to anyone who 
* is listening for it -- which would be the reaction-changer.js
* listener, who is waiting for both of these cases.
* 
* This functionality needed to be in a separate background.js
* file because content_scripts are unable to use the tabs module,
* and therefore we need to relay the event (which reaction-changer 
* listens to using the runtime module).  
*
*/
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