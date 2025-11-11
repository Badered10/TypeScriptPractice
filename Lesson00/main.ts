
var str : string = "";

str = "HELLO WORLD"

function printMessage(): void
{
    console.log(str);
}

try
{
    printMessage();
    throw new Error("Somthing went wrong");
}

catch (err)
{
    if (err instanceof Error)
        console.error("Error message: ", err);
    else
        console.error("Unknown error:", err);
}