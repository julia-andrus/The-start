console.log('hello world');
// alert('waz up')
//comment

//variables
var b = 'j';
// console.log(b)

var num = 35
// console.log(num)


//change code on html page

// document.getElementById('someheader').innerHTML='Helloooo';
// document.getElementById('h2').innerHTML= 'waz up';

// var age =prompt('what is ur age?');
// document.getElementById('sometext').innerHTML= age //shows age in the html page


//Numbers in JavaScript: -, +, /, %, 
var num1 =10;
console.log(4*1)
num1--; //decrease by 1
num1++// increase by 1
// console.log(num1);

// increment/decrement
num1 +=10 //increment by 10
// console.log(num1)

/*functions
1) create a funtion
2) call the funtion
*/

/*function fun (){
    //   alert('hey');//creating a function
    }
    fun(); //call the function

    function yo (yourName){
        // var name= prompt('what is you name?');
        var result = 'hello '  +   yourName;  //-------string concatenasion
        console.log(result)
    }
   
    var name= prompt('what is you name?');
    yo(name);




//How do argumeents work in functions
    //adding 2 numbers together in a function
        function sumNum(num1 , num2){
            var result = num1 + num2;
            console.log(result)
        }

        sumNum( 10, 20 );
        sumNum( '10', 10)



//While loops 
       /* let t = 0;
        // while( num< 300){ //if while(true) == it will run,  if while(false)==it won't run
            t +=1; // increase by 1 all the way to 100 
            //console.log(t)
        }



// For loops
for(let y = 0; y <= 100; y++){
    console.log(y);
} */


// Data types
    // number data types
    let yourAge= 20; //number
    let po = 'hello'; //string
    let name = {first: 'po' , lastname: 'Andrus'}; //Object
    let truth = false; //boolean
    let storeHave= ['shrimp', 'chocolate', 'appl']; //array
    let random; //undefined
    let empty = null; //value null


// strings in javaScript
    let fruit = 'apple' 
    let moreFruits = 'bannana\napple' // \n == written in a new line

    console.log(moreFruits)
    console.log(fruit.length) //counting letters of apple
    console.log(fruit.indexOf('p')); //finding with the string; p = be found within 1 in apple
    console.log(fruit.slice( 1, 4)); //slicing the string
    console.log(fruit.replace('app', '345')); //345le
    console.log(fruit.toUpperCase(fruit)); //APPLE
    console.log(fruit.toLowerCase(fruit)); //apple
    console.log(fruit.charAt(3)); //l
    console.log(fruit[3]) //l same as charAt
    console.log(fruit.split('  , ' )) // split by comma
    console.log(fruit.split('')) // split by character



//Array
let sweet = ['snicker', 'butterfingers', 'yum'];
    sweet = new Array ('snicker', 'butterfingers', 'yum')
    console.log(sweet[2]); // access value at index 2nd

    sweet[0] = 'pear' // replacing snicker with pear
    console.log(sweet); 
for(let i = 0 ; i < sweet.length; i++){
    console.log(sweet[i]);
}


// array common methods
console.log('toString', sweet.toString());
console.log(sweet.join('-'))
console.log(sweet.join(' * '))
console.log( sweet, sweet.pop(), sweet); //pop == taking last item out
console.log(sweet.push('berries'), sweet) //appends==removes last itemd ad and add the berries in 
console.log(sweet[2]);
    sweet[2]= 'new fruit' //same thing as push  
    console.log(sweet)
sweet.shift(); // remove first element from array/list in python
console.log(sweet);
sweet.unshift('lollipop'); //adding to the array/list
console.log(sweet)

let veg = ['carrots', 'peppers', 'basil'];
let combination = sweet.concat(veg) //combings two lists together == concat
console.log(combination); // op two lists in 1 list
console.log(combination.slice(2 ,4)); 
console.log(combination.reverse()); 
console.log(combination.sort()); //sorting in alphabet


//sorting numbers in array
let somenum = [ 3, 5 ,53, 3, 5, 3, 2, 100, 24, 567 ]; 
console.log(somenum.sort(function(a , b ){return( a-b)})); // sorted in ascending order ====== descented order = return(b-a)
console.log(somenum.sort(function(a , b ){return( b-a)})); // descending order



let emptyArray= new Array ();
for( let numm = 0; numm < 10; numm ++){
    emptyArray.push(numm);
}

console.log(emptyArray); // 0-10




// objects in JavaScript ==== dictionary in python
    let student = {

    first: 'juju', 
    lastname: 'and', 
    age: 1, 
    height: 60,
    studentInfo: function(){
        return this.first + '\n' + this.lastname + '\n' + this.age; // '\n' == making a new line
    }
};

    console.log(student);
    console.log(student.first);
    console.log(student.lastname);
    console.log(student.lastname);
    student.first = 'notjuju'; //change value
    console.log(student.first);
    student.age++ // increase 1
    console.log(student.age);
    console.log(student.studentInfo());


    // condtionals, control flows, (if else)

/*  let  age = prompt('what is your age', '')
        if((age => 18) && (age <= 35)){
            status = 'target demo'
        }
        else{
            status = 'not my demo';
        }
    console.log(status);
    */


//Switch statements ==easier than if statments
//differentiating between weekdat vs weekened ==== day 0 is Sunday and day 6 is saturday, and day 4 is thurs
        switch (6) {
            case 0:
                text = 'weekend'; // if 6, then return weekend
                break; //breaking the loop
            case 5: 
            text = 'weekend';
            break;
    
            case 6: 
            text  = 'weekend';
            break;

            default: 
            text = 'weekday';
        }

console.log(text);


/*.json ====json is used to represent data == java object notation
we have 2 students

    [
      {
        "name" : "juju",
        "age" : 67,
        "height": 20
      },
        {
        "name" : "po",
        "age" : 1,
        "height": 36
        }
    ]

puting the json into html. ===== json is a valid javaScript

           <script>
       let students =   `[
    {
        "name" : "juju",
        "age" : 67,
        "height": 20
    },
    {
        "name" : "po",
        "age" : 1,
        "height": 36
    }
]`

console.log(JSON.parse(students)[1].age);
   </script>
   
backticks (turning whole thing into a string) the json code in html.
*/

