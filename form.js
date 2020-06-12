class form{
constructor(){
    
}
display(){
 var title = createElement("h2"); 
 title.html("Survey");
 title.position(50,0);

 var Q1 = createElement("h3"); 
 Q1.html("Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
 Q1.position(50,240);
 
 var ratio = createRadio("h3")
 ratio.option("YES")
 ratio.option("NO")
 ratio.position(50,320);

 var Q2 = createElement("h3"); 
 Q2.html("Q2. How much per month would you be willing to pay?");
 Q2.position(50,400);

var ratio1 = createRadio("h3")
 ratio1.option("100")
 ratio1.option("500")
 ratio1.option("1000")
 ratio1.option("MORE")
 ratio1.position(50,480);

 var input = createInput("NAME");
 input.position(50,80);

 var input1 = createInput("EMAIL");
 input1.position(50,160);

 var button = createButton("SUBMIT")
 button.position(250,560)


 button.mousePressed(function(){
   var name = input.value();
   var email = input1.value();
   var question1 = ratio.value();
   var question2 = ratio1.value();
   personCount +=1
   player.Details(name,email,question1,question2);
   player.updateCount(personCount)
 })
}
}