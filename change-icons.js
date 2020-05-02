const BOBA_NO_RING = chrome.runtime.getURL("img/boba-react-50.png");
const BOBA_RING = chrome.runtime.getURL("img/boba-react-50.png");

function changeByClassName(tag, size, img_src){
    var className = document.getElementsByClassName(tag)

    for (var i = 0; i < className.length; i++) {
        var parent = className.item(i).parentNode
        console.log(parent.children)
        for (var j = 0; j < parent.children.length; j++){
            if(parent.children[j].class == className.item(i).class){
                var img = document.createElement("IMG")
                img.src = img_src
                img.height = size
                img.width = size
                img.style.verticalAlign = "middle"
                parent.replaceChild(img, parent.children[j])
            }
        }
    }
}


function switchProfileLargeBox(){
    var list = document.getElementsByClassName("qoqs7rgl")

    for (var i = 0; i < list.length; i++) {
        list[i].src = BOBA_NO_RING
    }   
}



function switchProfileComments(){
    console.log("tests")
    changeByClassName("_906t", 18, BOBA_NO_RING)
}



function switchIconOnProfile(){
    changeByClassName("sp_izZH5h7b_O6_3x sx_0cb266", 20, BOBA_RING)
}

function switchFeedMultipleReacitons(){
    changeByClassName("sx_0cb266", 20, BOBA_RING)
}

// function setUpHoverChange(){
//     var like_buttons = document.getElementsByClassName("_77yo")
//     for (var i = 0; i < like_buttons.length; i++) {
//         console.log("yeet")
//         like_buttons.item(i).addEventListener("onmouseover", testfunc)
//     }
// }

// function testfunc(){
//     console.log("hello")
// }

function switchAllIcons(){
    console.log(document.getElementsByClassName("_1oxj"))
  //  setUpHoverChange()
    switchFeedMultipleReacitons()
    switchProfileComments()
    switchProfileLargeBox()
    switchIconOnProfile()
}


// todo, get on like button to work, animation, and change the specific kind of images
//document.getElementById("facebook").addEventListener("click", switchAllIcons)