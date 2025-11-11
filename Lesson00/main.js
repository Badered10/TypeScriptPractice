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
    c.log(c);
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






