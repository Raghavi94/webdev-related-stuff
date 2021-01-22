const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor=(selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;
};
console.log(getBGColor(pink));

//Event Listeners

var orangeColor = getBGColor(orange);

var cyanColor = getBGColor(cyan);

//putting the events into a method

var magicColor = (element,color)=>{
    element.addEventListener("mouseenter",()=>{
        return center.style.background = color;
    })
}
magicColor(red,getBGColor(red));
magicColor(cyan,getBGColor(cyan));
magicColor(violet,getBGColor(violet));
magicColor(orange,getBGColor(orange));
magicColor(pink,getBGColor(pink));

// orange.addEventListener("mouseenter",()=>{
//     center.style.background = orangeColor;
// })

//Click event

// cyan.addEventListener("click",()=>{
//     center.style.background = cyanColor;
// })
