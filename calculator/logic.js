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