function getConfirmation()
{
    var retVal = "confirmation";
    if( retVal == "confirmation" )
    {
    console.log("User wants to continue!");
    return true;
    }
    else
    {
    console.log("User does not want to continue!");
    return false;
    } 
}
var stored = getConfirmation()
console.log("the sum of no are "+stored)