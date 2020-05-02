/**
 * Google Chrome extension to change the Facebook "Care" react png to a "Boba" react
 * underneath every post on Facebook's desktop site.
 *
 * By utilizing the clay.js (https://github.com/zzarcon/clay) library for resizing and jQuery,
 * as well as analyzing Facebook's page structure, this allows for the
 * replacement of any reaction emoji on Facebook; in this specific case,
 * we focus on the Care react and changing it to Boba.  This project was inspired by
 * a post on Subtle Asian Traits on Facebook (here: https://i.imgur.com/MGqFBUi.png).
 * 
 * Currently replaces Care react with Boba react for: 
 * - Any post after first opening Facebook
 * - Any post that loads after the user scrolls down
 * 
 * Handles switching between pages (e.g., Home -> Profile -> Home -> Messenger, etc).
 * Ideally a solution would be reached for this without having to refresh the page,
 * but Facebook's system might place limitations on this.
 * 
 * @link   https://github.com/griffinbeels/facebook-boba-react
 * @author Griffin Beels, Conrad Zborowski.
 * @since  5/1/2020
 */

// Child of top-most div for Facebook feed content; id chosen arbitrarily,
// but mainly because "content" makes sense as the id for the user's Facebook feed.
const fbContentId = "#content"

/*
* Add a listener for two types of requests using the 
* Chrome API runtime package.  Messages sent from background.js.
*
* On a reload message, refresh the page, which is necessary because
* otherwise the DOM element representing the content feed never changes.
* 
* On a start message, begin checking for feed updates,
* which ties the change-icons.js functions to whenever the current
* feed resizes.
*/
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      // listen for messages sent from background.js
      if (request.message === 'reload') {
        location.reload();
      } else if (request.message === 'start'){
        checkFeedUpdate()
      }
  });

/**
 * Continuously checks to see if the Facebook feed has updated
 * (i.e., changed in height), and if so, replaces any new 
 * Care react icons with Boba react icons.
 * 
 * By using clay.js' resize whenever the Facebook feed loads more posts,
 * clay.js will detect a resize of the feed, and all Care react icons will be updated.
 */
function checkFeedUpdate(){
    // Make sure to switch any icons that were initially active w/o resize
    switchAllIcons()

    // resize occurs whenever the user scrolls down or a comment loads
    // on a prexisting post
    new Clay(fbContentId).on('resize', function() {
        switchAllIcons()
    });
}