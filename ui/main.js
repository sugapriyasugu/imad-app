console.log('Loaded!');
// change the content of main-text div
var ele=document.getElementById('main-text');
ele.innerHTML="Hello world";
//move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft+=1;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};