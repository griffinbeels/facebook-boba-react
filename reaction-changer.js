/**
 * Google Chrome extension to change the Facebook "Care" react png to a "Boba" react
 * underneath every post on Facebook's desktop site.
 *
 * By utilizing the css-element-queries (https://github.com/marcj/css-element-queries) 
 * library and jQuery, as well as analyzing Facebook's page structure, the reaction-changer.js
 * file allows us to replace any reaction emoji on Facebook.  This project was inspired by
 * a post on Subtle Asian Traits on Facebook (here: https://i.imgur.com/MGqFBUi.png).
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
 * By using ResizeSensor from css-element-queries, whenever the 
 * Facebook feed loads more posts, all Care react icons will 
 * be updated.
 */
function checkFeedUpdate(){
    // make sure we call this at least once even w/o resizes (might be unnecessary)
    replaceCareWithBoba();

    // id #contentArea represents the facebook feed that scrolls
    // NOTE: for whatever reason, you can't simply pass 
    // a function into ResizeSensor; instead, you need to 
    // create an anonymous function, and inside that, call whatever
    // method is needed.
    new ResizeSensor($("#contentArea"), function(){
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