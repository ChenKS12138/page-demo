function display(){
    var b=document.body;
    var Opanum=0;
    b.style.opacity=Opanum;
    ttt=setInterval(function(){
        b.style.opacity=Opanum;
        Opanum+=0.01;
        if(Opanum>=1){
            clearInterval(ttt);
        }
    },2);
}//实现页面加载时，闪一下的效果
