
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    

<div class="row w-50">
  <!-- Content here -->
    <div>
        <div class=" mx-auto">
            <h1>PHP Calculator!</h1>
            <br></br>
            <h3>The two variables added together is: <?php $GET[var1] + </h3>


        
        </div> 
  <!-- Content here -->
    </div>
</div>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

    <!-- Option 2: jQuery, Popper.js, and Bootstrap JS
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    -->
  </body>
</html>
<?php
# ^ This starts a PHP script 

# The output of a script is dumped onto the user's web page 
# <- This creates a comment 
// This is also a comment, something I learned while making this 

/* 
This is a multi-line comment 
 */

# Variables 
$test = "Hello there!";
echo($test); // <- Echo is the equivalent of "print()" or cout<<

// # New lines in plain HTML = <br>
echo("<br>");

// # Variables are typeless 
$test = 2;
echo($test);
echo("<br>");

// # If Statements 
if(true)
    echo("hi");
else
    echo("this will never be executed!");

// # This is a function 
function printNewLine(){
    echo("<br>");
}

// # We call the function as usual 
printNewLine();
printNewLine();
printNewLine();
echo("See?");
printNewLine();

// # Arrays (associative and non-associative)
$test = ["See","this","works!"]; 

echo($test);
printNewLine();
printNewLine();

// //How about this?
var_dump($test);
printNewLine();
printNewLine();

$array = ["name" => "bob",
          "phone"=> "503-331-2012",
          "ssn"  => "000-000-0000"];

printNewLine();
printNewLine();
var_dump($array);

//Loops in PHP 
foreach ($array as $key => $item) {
    echo($key.": "); echo($item);
    printNewLine();
}

// #Stupid stuff 
echo("1"+1);

// Retrieve GET Request Variables 
// This retrieves the parameter with key "name" from the GET request 
// -> To send a variable in a GET request (from your browser), add "?name=storm" to the request URL 
// -> E.g.  "http://web.cecs.pdx.edu/~murphyd/php/test.php?name=storm"
echo("<h1> Hello ".$_GET["name"]."! </h1>");

