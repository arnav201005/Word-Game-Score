var s =0;
function update() 
{
    s = s+1;
    document.getElementById("score").innerHTML= "score: "+ s;

}
function save()
{
    localStorage.setItem("score",s);
}
function next()
{
    window.location="activity_2.html"
}