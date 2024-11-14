{
    let virusLeft = Math.trunc(Math.random() * (300 - 240) + 240);
    setInterval(function(){
        document.getElementById("virusTimeLeft").innerHTML = virusLeft;
        virusLeft--;
    },1000);
}

function openByClickVirusButton(){
    window.open("https://beinternetawesome.withgoogle.com/ja_jp/interland","_blank")
}
