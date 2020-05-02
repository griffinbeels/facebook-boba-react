const SRC_IMAGE = "https://cdn.discordapp.com/attachments/705952273586716712/705975429915476048/Screen_Shot_2020-05-01_at_1.20.30_PM.png"

function changeByClassName(tag, size){
    var className = document.getElementsByClassName(tag)

    for (var i = 0; i < className.length; i++) {
        var parent = className.item(i).parentNode
        console.log(parent.children)
        for (var j = 0; j < parent.children.length; j++){
            if(parent.children[j].class == className.item(i).class){
                var img = document.createElement("IMG")
                img.src = SRC_IMAGE
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
        list[i].src = SRC_IMAGE
    }   
}



function switchProfileComments(){
    console.log("tests")
    changeByClassName("_906t", 18)
}



function switchIconOnProfile(){
    changeByClassName("sp_izZH5h7b_O6_3x sx_0cb266", 20)
}

function switchFeedMultipleReacitons(){
    changeByClassName("sx_0cb266", 20)
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
document.getElementById("facebook").addEventListener("click", switchAllIcons)