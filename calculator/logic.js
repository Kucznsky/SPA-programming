var result;

function Addition ()
{
    let first = parseInt(document.getElementById("first").value);
    let second = parseInt(document.getElementById("second").value);
    if(!isNaN(first)&&!isNaN(second))
    {
        result = first + second;
        document.getElementById("symbol").innerHTML = "+";
        document.getElementById("result").innerHTML = "= " + result;
    }
    else
        document.getElementById("result").innerHTML = "Only numbers allowed!!!";
}

function Subtraction()
{
    let first = parseInt(document.getElementById("first").value);
    let second = parseInt(document.getElementById("second").value);
    if(!isNaN(first)&&!isNaN(second))
    {
        result = first - second;
        document.getElementById("symbol").innerHTML = "-";
        document.getElementById("result").innerHTML = "= " + result;
    }
    else
        document.getElementById("result").innerHTML = "Only numbers allowed!!!";
}

function Multiplication()
{
    let first = parseInt(document.getElementById("first").value);
    let second = parseInt(document.getElementById("second").value);
    if(!isNaN(first)&&!isNaN(second))
    {
        result = first * second;
        document.getElementById("symbol").innerHTML = "*";
        document.getElementById("result").innerHTML = "= " + result;
    }
    else
        document.getElementById("result").innerHTML = "Only numbers allowed!!!";
}

function Division()
{
    let first = parseInt(document.getElementById("first").value);
    let second = parseInt(document.getElementById("second").value);
    if(!isNaN(first)&&!isNaN(second))
        if(second!=0)
        {
            result = first / second;
            document.getElementById("symbol").innerHTML = "/";
            document.getElementById("result").innerHTML = "= " + result;
        }
        else
            document.getElementById("result").innerHTML = "You can't divide by zero!!!";
    else
        document.getElementById("result").innerHTML = "Only numbers allowed!!!";
}

function Exponentiation()
{
    let first = parseInt(document.getElementById("first").value);
    let second = parseInt(document.getElementById("second").value);
    if(!isNaN(first)&&!isNaN(second))
        if(second!=0)
        {
            result = first;
            for(let i=0; i<second-1; i++)
                result= result*first;
            document.getElementById("symbol").innerHTML = "^";
            document.getElementById("result").innerHTML = "= " + result;
        }
        else
        {
            result = 1
            document.getElementById("symbol").innerHTML = "^";
            document.getElementById("result").innerHTML = "= " + result;
        }
    else
        document.getElementById("result").innerHTML = "Only numbers allowed!!!";
}

//==========================================================================================
function toRad(Value) 
{
    return Value * Math.PI / 180
}
function toNauticalMiles(Value)
{
    return Value * 0.539956803;
}
function CalculateDistance() 
{
    let x1 = toRad(document.getElementById("x1").value);
    let x2 = toRad(document.getElementById("x2").value);
    let y1 = toRad(document.getElementById("y1").value);
    let y2 = toRad(document.getElementById("y2").value);
    let R = 6371;
    var dLat = x2 - x1;
    var dLon = y2 - y1;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(x1) * Math.cos(x2)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    var d = R * c
    document.getElementById("distance").innerHTML = "distance (in nautical miles): " + toNauticalMiles(d);
}
//==========================================================================================

//==========================================================================================
function ChangeView()
{
        $(".calculator").hide();
        $(".nautical_mile").show();
    $("#miles").click(function(){
        $(".nautical_mile").hide();
        $(".calculator").show();
    });
}
