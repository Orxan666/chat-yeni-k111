var closeChat=document.querySelector("#chat .close-chat")
var chat=document.getElementById("chat")
var miniChat=document.getElementById("mini-chat")
var chatText=document.getElementById("chat-text")
var main=document.querySelector("#chat main")

closeChat.onclick=function(e){
    // console.log(e.target)
    chat.classList.add("active")
}
miniChat.onclick=function(){
    chat.classList.remove("active")
}
//keypress,keydown,keyup
chatText.addEventListener("keyup",function(a){
    if(a.keyCode==13){
        // debugger;
        if(chatText.value.trim()!=""){
            if(chatText.value[0].toUpperCase() == chatText.value[0]){
               AddChat("support")
            }else{
                AddChat("user")
            }
        }
        
        chatText.value=""
    }
})
function AddChat(clName){
    debugger;
     var dt=new Date();
    main.insertAdjacentHTML("beforeend",`
      <div class="message ${clName}">
        <p>${chatText.value}</p>
        <p class="time">${dt.getHours()+":"+dt.getMinutes()}</p>
     </div>
    `)
    main.scrollTop=main.scrollHeight
}



