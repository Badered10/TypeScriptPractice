var str = "";
str = "HELLO WORLD";
function printMessage() {
    console.log(str);
}
try {
    printMessage();
    throw new Error("Somthing went wrong");
}
catch (err) {
    if (err instanceof Error)
        console.error("Error message: ", err);
    else
        console.error("Unknown error:", err);
}
