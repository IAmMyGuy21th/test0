function a(){
    alert("hello!")
}
if(window.addEventListener) {
    window.addEventListener('load',a,false); //W3C
} else {
    window.attachEvent('onload',a); //IE
}
