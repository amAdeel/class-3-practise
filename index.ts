// there are two type of memory in computer.
//1st temporary 
//2nd parmanent memory
let myFirstName:string="Maher Adeel";
let mNumber:number=45;
console.log(myFirstName , mNumber);
//expalitry type which are predefine, var name:string="adeel"
// if (myFirstName==="adeel") {
//     console.log("Here adeel i here ");
//     if (mNumber) {
//         console.log("my physics test number"+mNumber);
        
//     } else {
//         console.log("that not my function");
        
//     }
// }
// else{
//     console.log(`Hello ${myFirstName}`);
    
//}
//-------------------------------------------
// Primitive data types:at a time we store one value in a variable their five type (string,number,boolean,undefine,null) :example 
//undefine : in js the default value is undefine.. or same in typecript:example var a=;\
// where we can't know any variable value that called null ... and if we want to shown a empty variable according to requirment that we use null.:let a= null;==>{}
var nullvalue=null;
console.log("🚀 ~ file: index.ts:27 ~ nullvalue:", nullvalue)//Here we use a extension name is terbo console ... and then click to the variable name and press *ctrl*+*Alt*+L then the folloing comes *console.log("🚀 ~ file: index.ts:27 ~ nullvalue:", nullvalue)*
// console.log(nullvalue);


//_-------implicit type
    //  At the time of decleartion of a variable we can't use a date type Because it's auto suggest the type  .. this is the benifit of typescript   :example var name="Adeel"  it's suggest it's type string .. but in javascript it's not auto suggest type .
                    
    // Based on declear variable  if we firstly pre define the data type .we can't change type at the type of decleation:: example var name ="adeel";
    //  name =56;==> error 
                                                
                        
    // but in javascript we can't get a error at the time of reasign a element.
    // example : var name ="adeel";
    //  name =56;==>  no error in js
//---------explicit case
    //              we pre-define type at the type decleartion
        //example :let name:string="Adeel";


//--------------------------------------------------------------
//                NON PRIMITIVe  Data type
// Define: 
        //   we can store more than one value in a variable .

// 
// 
// 
// 
// --------------------------------------------------------------------
// //Template literals
let myname="Adeel";
let secondname="Ashraf";
console.log("My Name is:",myname);
console.log("my name is:"+myname);
console.log("my name is:"+myname," and fathername is:"+ secondname);/* oldest way  */
// ---------------/* latest way  */
console.log(`my first name ${myname} and my last name ${secondname}`);
// --------(sthe ` is called `backticks`)
// 

//---------------------------to che=ck the type of a variable
console.log(typeof myname);
// ---------------------------operator
// there are four type of operator use in js and ts.
// 1-Arithmetic operators:
// 2-Assignment operators
// 3-Comparison operators:
// 4-Logical operators:
// ----------------------1-Arithmetic operators:--------------------------
//  +  , -  , * , / , ** it's shown power example: 2**2 =>4, % modulus return raimder 
console.log(2**2);//4 
console.log(9%2);//1

 
// ----------------------2-Assignment operators---------------------------
// --------interveiw question{
let n=45;
n=45-5;//40
n=45+5;//50 because n is now become 50
n=n-10;//40
console.log("🚀 ~ file: index.ts:85 ~ n:", n);
// }
let n1=60;
n1=60+6;
console.log(n1);
n1 += 6;
console.log(n1);
n1 -= 6;
console.log(n1);
// 
// -------------------------------3-Comparison operators:--------------------------
// ==  only check value and === check both value and datatype
// 
// ------------------------------4-Logical operators:-------------------------
// 
let n3 = 5;
console.log(n3 >= 5 && n < 10); //true or  false bacause we use and gate in it
console.log(n3 > 5 && n < 10); //basically false and output is also false bec we use and gate  (if both are true than true)
console.log(n3 >= 5 || n < 10); // basically true or true then ouput true.
console.log(n3 > 5 || n < 10); //Baically false or true then output  
console.log(!(n3 < 10)); //
console.log(!(n3 > 10)); //// 
// --------------------------------Git Bush------------------------
//1- install git
//2-git -v  
//3- git config -- global user.name"Maher Adeel";  /* for globaly name */
//4- git config -- global user.email"thisisadeelashraf@gmail.com"
//5- git config  
//6- go vs code and commit (intilize repo)option  
//7-install a extenion (GitLens) his benifits it's that it's shown how change our code and who change the code and shown its name.
