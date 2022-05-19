function addUser()
{
   user_name = document.getElementById("login_UI").value;
   localStorage.setItem("login_UI", user_name);
   window.location = "kwitter_room.html";
}