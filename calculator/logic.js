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

function CalculateDistance()
{
    let x = parseInt(document.getElementById("x2").value)-parseInt(document.getElementById("x1").value);
    let y = parseInt(document.getElementById("y2").value)-parseInt(document.getElementById("y1").value);
    result= Math.sqrt(x**2+y**2)
    //result = Math.sqrt(((x2-x1)**2)+((Math.cos((x1*3.14)/180)*(y2-y1))**2))*(40075.704/360);
    document.getElementById("distance").innerHTML = "distance between both locations (in nautical miles): " + result;
}
//========================================================================================
function ChangeView()
{
        $(".calculator").hide();
        $(".nautical_mile").show();
    $("#miles").click(function(){
        $(".nautical_mile").hide();
        $(".calculator").show();
    });
}
