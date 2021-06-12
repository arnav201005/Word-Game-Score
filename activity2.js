function back()
{
     window.location="activity_1.html";

}
function Getscore()
{
   sa=localStorage.getItem("score")
    document.getElementById("update").innerHTML = "score- "+sa
}