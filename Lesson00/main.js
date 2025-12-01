"use strict";

{ // var used on the whole program , BUT they respect function scop !
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

// bracket notaion []
{
    // lets print first char of a word and last

    let word = "oleet";
    console.log("In Word : " + `"${word}"` + " the first char is : " + `'${word[0]}'`);
    console.log("In Word : " + `"${word}"` + " the last char is : " + `'${word[word.length - 1]}'`);
}

// 

{
    function wordBlancks(myNoun, myAdjevtive, myVerb, myAdverb)
    {
        let res = "";
        res += "The " + myAdjevtive + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "!";
        return(res);
    }
    console.log(wordBlancks("dog", "short", "ran", "slowly"));
    console.log(wordBlancks("cat", "tall", "walk", "fastly"));
    console.log(wordBlancks("boy", "litlle", "went", "fastly"));
}

// arrays on javaScript ! collection of all diff types in one var 
{
    let myArray = [1, "wow"];

    c.log(myArray[0]);
    c.log(myArray[1]);
}

// array of array !
{
    let myArray = [10, "hello"];
    let myArrayOfArray = [myArray , ["world", 20]];

    console.log(myArrayOfArray[0][1] , myArrayOfArray[1][0]);

}
// using bracket notation to modify a string not exists
{
    let myString = "hello";
    // myString[0] = "k"; // does nothing , error in strict mode
    c.log(myString); // will print : hello
}

// using bracket notation to modify an array exist (jsut elements) !

{
    let myString = "hello";
    // myString[0] = "k"; // does nothing , error in strict mode
    let myArray = [myString, "okeey"];

    myArray[0] = "k";
    c.log(myArray[0]); // will print : k
}

// push() method to add elements back to an array 
{
    var myArray = [10, "messi"];

    myArray.push("Lion");
    c.log(myArray[2]);
}

// pop() method removes the last element of an array and return it
{
    myArray.pop(); // will remove "Lion"
    c.log(myArray[2]); // should be undfined
    c.log(myArray[1]); // should be messi
}

// shift() method removes the first element of an array and return it
{
    c.log(myArray); // [10], [messi]
    let myTen = myArray.shift(); // removes [10]
    c.log(myArray); // [messi]
    c.log(myTen);
}

// unshift() method to add elements front to an array 
{
    let myArray = ["World !"];
    myArray.unshift("Hello ");
    c.log(myArray);
}

// function declariton syntax
{
    function sayHey()
    {
        var printMe = "AAAAAAAA";
        console.log("Hey !");
        console.log(printMe); // works perfectlly
    }
    sayHey();
    // console.log(printMe); // Error in both strict mode and normal mod
}
// sayHey(); // will works , error strict mode.


// exmp of func with parameters
{
    function sum(a, b)
    {
        return a + b;
    }
    let s = sum(1 , 3);
    c.log(s);
}

//
{
    function fun1()
    {
        // oopsGlobal = 10; // goes global automaticlly in browser but not in scrimba or node
        var oopsGlobal = 10; 
        c.log(oopsGlobal);
    }
    fun1(); // works
}
// c.log(oopsGlobal); // error !
// fun1(); // error

var useMe = 20; // globale sope
// exmp of local scope 
{
    function d()
    {
        var useMe = 10;
        c.log(useMe); // will print 10 not 20 , so local var takes precedent over global one inside a scope
    }
    c.log(useMe); //  will be not dfined ! if there is no same var name in globale scope
}

// no return ! so sum will have a default value
var sum = 0;
{
    function add(num)
    {
        sum += num;
    }
    function add2(num)
    {
        sum += num + num;
    }
    c.log(sum);
}


// qeue sim
{
    let arr = [1, 2, 3, 4]; // our qeue can sereve just 4 items

    function nextInLine(arr, item) // add new item to qeue and return first one
    {
        arr.push(item); // add [5]
        return (arr.shift()); // remove first and return : [1]
    }
    console.log("Before :" + JSON.stringify(arr));
    console.log(nextInLine(arr, 5));
    console.log("After :" + JSON.stringify(arr));

    function prevInLine(arr, item)
    {
        arr.unshift(item);// add at first [1]
        return (arr.pop()); // remove and return last [5]
    }
    console.log("Before :" + JSON.stringify(arr));
    console.log(prevInLine(arr, 1));
    console.log("After :" + JSON.stringify(arr));

}

// Equality Operators
{
    function strictTest(val)
    {
        if (val === 1337)
            c.log("equal both type and value");
        else
            c.log("even type or value not equal");
    }

    function normalTest(val)
    {
        if (val == 1337)
            c.log("equal in value");
        else
            c.log(" value not equal");
    }
    strictTest("1337");
    strictTest(1337);

    normalTest("1337");
    normalTest(1337);
}

//  And / Or Operators 
{
    function oneAreNegatvie(one , two)
    {
        if (one < 0 || two < 0)
            c.log("One of : " + one + ", " + two + " are : " + "Negative");
        else
            c.log("Both of : " + one + ", " + two + " are : " + "not Negative");
    }
    function bothAreNegatvie(one , two)
    {
        if (one < 0 && two < 0)
            c.log("Both ," + one + ", " + two + " are : " + "Negative");
        else
            c.log("One of : " + one + ", " + two + " are : " + "not Negative");
    }
    oneAreNegatvie(-1, 2);
    bothAreNegatvie(-1, -2);
}

// Not equal Operators
{
    function strictNotEqual(val)
    {
        if (val !== 1337)
            c.log("not equal in value or type");
        else
            c.log("equal in value and type");
    }

    function NotEqual(val)
    {
        if (val != 1337)
            c.log("not equal in value");
        else
            c.log("equal in value");
    }
    strictNotEqual("1337");
    strictNotEqual(1337);

    NotEqual("1337");
    NotEqual(1337);
}


// using switch case

{
    function CaseInSwitch(val)
    {
        let asnwer  = "";

        switch (val)
        {
            case 1:
                asnwer = "I";
                break;
            case 2:
                asnwer = "II";
                break;
            case 3:
                asnwer = "III"
                break;
            default :
                asnwer = "ELSE"
        }
        console.log(asnwer);
    }
    CaseInSwitch(1);
    CaseInSwitch(3);
    CaseInSwitch("assd");
    CaseInSwitch(231);
}

{
    function CaseAgeCheck(val)
    {
        let asnwer  = "";
        

        switch (val)
        {
            case 10:
            case 20:
            case 30:
                asnwer = "LOW";
                break;
            case 40:
            case 50:
            case 60:
                asnwer = "MID";
                break;
            case 70:
            case 80:
            case 90:
                asnwer = "HIGH"
                break;
            default :
                asnwer = "ERROR : Must be multiples of 10 and bet 10 - 90"
        }
        console.log(asnwer);
    }
    CaseAgeCheck(10);
    CaseAgeCheck(50);
    CaseAgeCheck(90);
    CaseAgeCheck("assd");
    CaseAgeCheck(231);
}

// boolean funcs

{
    function isPositive(val)
    {
        return (val > 0);
    }
    console.log(isPositive(32));
}


// check for inside sqr must be positive
{
    function abSqrt(a, b)
    {
        if (a < 0 || b < 0)
            return undefined;
        return Math.sqrt(a) + Math.sqrt(b);
    }
    console.log(abSqrt(-1, 1));
    console.log(abSqrt(1, 1));
}

// objects !!
{
    let human =
    {
        "name" : "",
        "age" : 0,
        "job" : ""
    }

    human.name = "bader";
    human.age = 18;
    human.job = "student";

    human['cat'] = "temnssiwin"; // add new element to an object 

    console.log(human);

    delete human.cat; // delet element from an object 

    console.log(human);
}


// std::map of javascript XD

{
    function lookUp(val)
    {
        let res = "";

        let map =
        {
            "1" : "ONE",
            "2" : "TWO",
            "3" : "THREE",
            "4" : "FOUR",
            "5" : "FIVE"
        }
        res = map[val];
        return (res);
    }

    console.log(lookUp(1));
    console.log(lookUp(3));
    console.log(lookUp(6));
}

// check if object have a prop
{
    let obj = 
    {
        skill: "fighter",
        spell: "holy",
        name: "molly",
        rank: "SSS"
    }
    function hasProp(obj, val)
    {
        if (obj.hasOwnProperty(val))
                return (obj[val]);
        return ("Not found");
    }
    console.log(hasProp(obj, "rank"));

}

 



















