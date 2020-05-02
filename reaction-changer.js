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
 * @link   https://github.com/griffinbeels/facebook-boba-react
 * @author Griffin Beels, Conrad Zborowski.
 * @since  5/1/2020
 */

// on DOM load, watch for future feed scrolling
document.addEventListener('DOMContentLoaded', checkFeedUpdate(), false);

/**
 * Continuously checks to see if the Facebook feed has updated
 * (i.e., changed in height), and if so, replaces any new 
 * Care react icons with Boba react icons.
 * 
 * By using clay.js' resize whenever the Facebook feed loads more posts,
 * clay.js will detect a resize of the feed, and all Care react icons will be updated.
 */
function checkFeedUpdate(){
    // id #contentArea represents the facebook feed
    var fbFeed = new Clay("#contentArea");

    // resize occurs whenever the user scrolls down or a comment loads
    // on a prexisting post
    fbFeed.on('resize', function() {
        replaceCareWithBoba()
    });
}

// /**
//  * Replaces all images contained in each provided
//  * Care element with a png depicting Boba.
//  */
function replaceCareWithBoba() {
    console.log("lolll");
}

// /**
//  * Waits for all elements on the page to load, 
//  * and retrieves all Care react elements based on
//  * their aria label.
//  * 
//  * @returns {Array} Array containing all loaded Care react
//  * elements 
//  */
function getCareReacts() {

}