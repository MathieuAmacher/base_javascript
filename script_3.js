let number = "";
let a = "#"
let b =" "


number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log(`votre réponse est ${number}`);





for ( var i = 0; i < number; i++ ) {

   d = b.repeat(number-i);
   c = a.repeat(1+i);
   
   
   
   
   console.log(d+c);
    

}
