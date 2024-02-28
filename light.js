function onBulb(){
    document.getElementById("img").src="img/pic_bulbon.gif"
    document.getElementById("text-1").style.color = "red"
    document.getElementById("text-1").innerHTML = "Let's ON the Bulb"
}

function offBulb(){
    document.getElementById("img").src ="img/pic_bulboff.gif"
    document.getElementById("text-1").style.color = "blue"
    document.getElementById("text-1").innerHTML = "Let's OFF the Bulb"
 
}