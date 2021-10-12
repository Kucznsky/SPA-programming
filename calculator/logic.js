var f= document.getElementById("first");
var s = document.getElementById("second");
var result;
function Sum()
{
    let first = parseInt(f);
    let second = parseInt(s);
    result = first + second;
    document.getElementById("result").innerHTML = result;
}