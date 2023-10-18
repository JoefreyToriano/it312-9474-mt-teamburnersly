async function userExists(){
    let userList = JSON.parse(localStorage.getItem("allUsers"))
    for(let i = 0; i <userList.length; i++){
        var user = userList[i]
        var userName = document.getElementById("username").value
        var password = document.getElementById("password").value
        if(user.userName==userName){
            if(user.password==password){
                localStorage.setItem("User ID",user.userid)
                window.location.href="profile.html"
                return
            } else {
                document.getElementById("message").innerHTML="Your password is wrong"
            }
        } else {
            document.getElementById("message").innerHTML="User does not exit"
        }
    } 
}

function initializeLogIn(){
    if(!(localStorage.getItem("User ID")==null)){
        window.location.href = "profile.html" 
    }
}
initializeLogIn()