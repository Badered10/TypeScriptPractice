{ // var used on the whole program 
    var un = undefined; var n; // syntax: ';' used to split each line of code from another.
    var bool = 1
    var str = bool
    var num = str;
    var c = console;
} 

{ // (let - const) used only on a scope 
    let un = undefined;
    let n = null;
    let bool = 1
    let str = bool
    let num = str;
    let c = console;
    c.log(un);
    c.log(n);
    c.log(bool);
    c.log(str);
    c.log(num);
    // c.log(c);
}

{ // js is key-sensitive

    let camelCase;

    c.log(camelCase); // works and shows undefined as value
    // c.log(CAMELcase); // wont run and will throw an error 
}

// "+ - * /" arithmitic opreators 
{
    let sub = 12 - 2;
    let add = 12 + 2;
    let mult = 12 * 2;
    let div = 12 / 2;

    let myVar = sub;

    { // all the same how to increment same to decrement  
        myVar++; // org : 10 and it will be 11
        myVar +=1; 
        myVar = myVar + 1;
    }
}

// divide by zero
{
    let inf = 1 / 0.0;
    c.log(inf)
}

// remainder Example
{
    let remainder = 11 % 2;

    console.log("number " + 11);
    if (remainder == 0)
        console.log(" is even !");
    else
        console.log(" is odd !");

}

// string quotes 

{
    let str = "hello world";
    let anotherStr = 'hello world';
    let quotesStr = 'hello "world" ';
    let anotherQuotesStr = "hello \"world\" ";

    let backticksStr = `'"hello \"world\""'`;

    if (quotesStr == anotherQuotesStr)
        console.log(true);
    else
        console.log(false);
    console.log(backticksStr);
}

// concatante two strings & show length and use backticks
{
    // say 3 hellos then world

    let hello = "hello";
    let conca = "";
    for(let i = 0; i < 3; i++)
        conca += hello + " ";
    conca += "," + " world!";
    console.log(conca + `\n INFOS: prevous str: "${conca}" has ${conca.length} chars !`);
}

//
{

}










