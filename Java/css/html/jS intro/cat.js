// alert("yo mofo");

let pics =  [
    
    "cat-cover.jpg",    //too access data out of arrays; each array have numbers //this is 0
    "po1.jpeg",         //1
    "po2.jpeg",         //2
    "po3.png",          //3
    "po4.jpeg"          //4
                        //5

 ];

 let btn = document.querySelector("button");

let img = document.querySelector("img"); //img from html

let picsarray = 0;

 btn.addEventListener("click", function(){
    //  img.src = "po2.jpeg" //when you click it changes to a new photo
    if( picsarray ===5){ // when this gets to 5, it loops back to 0 
        picsarray = 0;
    };

    img.src =pics[picsarray]
    picsarray= picsarray +1;
    
 });

