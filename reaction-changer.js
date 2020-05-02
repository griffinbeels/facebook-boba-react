/**
 * Waits for all elements on the page to load, 
 * and retrieves all Care react elements based on
 * their aria label.
 * 
 * @returns {Array} Array containing all loaded Care react
 * elements 
 */
function getCareReacts() {

}

/**
 * Replaces all images contained in each provided
 * Care element with a png depicting Boba.
 */
function replaceCareWithBoba() {
    console.log("lolll");
}

/**
 * Gets the height of the overall document content,
 * agnostic to which browser the user is using.
 * 
 * https://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom
 * 
 * @returns {Number} Height of document content as 
 */
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

/**
 * Detects when the user reaches the end of the current 
 * Facebook timeline and loads more content into page.
 * When the page loads more content, any new Care reacts
 * need to be replaced with Boba reacts.
 * 
 */
function scrollHandler(){
    if($(window).scrollTop() + $(window).height() == getDocHeight()) {
        alert("bottom!");
        replaceCareWithBoba();
    }
}
