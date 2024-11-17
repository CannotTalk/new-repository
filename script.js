{   //セットアップ

    //閲覧者の初期設定
    let viewers = Math.trunc(Math.random()*Math.pow(10,9));
    document.getElementById("viewersNum").innerHTML = viewers;
    if(!viewers){
        window.alert("You can't see \"The First\".");
        window.location.reload();
    }

    //タイマーの初期設定
    let virusLeft = Math.trunc(Math.random() * (300 - 240) + 240);
    setInterval(function(){
        document.getElementById("virusTimeLeft").innerHTML = virusLeft;
        virusLeft--;
    },1000);

    //文字「WARNING!!」の色を変更
    let virusAlertTitle = document.getElementById("virusAlertTitle");
    let i = 0;
    setInterval(function(){
        i++;
        if(i % 2 == 0){
            virusAlertTitle.style.color = "yellow";
        }else{
            virusAlertTitle.style.color = "black";
        }
    },500);

}



function openByClickVirusButton(){
    const newWindow = window.open("https://beinternetawesome.withgoogle.com/ja_jp/interland","_blank");
}

function reloading(){
    window.reload();
}

function generate4Num(){
    let numbers = "";
    let generatedNumbers = document.getElementById("make10numbers");
    for(let i=0;i<4;i++){
        numbers += Math.trunc(Math.random() * (9 - 1) + 1);
        numbers += "  "
    }
    generatedNumbers.innerHTML = numbers;
}