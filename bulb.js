var a = document.querySelector("#bulb")
var b = document.querySelector("#on")
var c = document.querySelector("#off")
var flag=0


b.addEventListener("click",function(){
    if(flag==0){
        a.style.backgroundColor = "yellow"
        flag=1
}
})

c.addEventListener("click",function(){
    if(flag==1){
        a.style.backgroundColor = "white"
        flag=0
}
})

