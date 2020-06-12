class  person{
constructor(){

}
getCount(){
    var personCountRef = database.ref("personCount")
    personCountRef.on("value",function(data){
    personCount = data.val()
    })
}
    updateCount(Count){
        database.ref("/").update({
            personCount: Count
        })
    
    }
    Details(name,email,q1,q2){
        var personIndex = "person"+personCount
        database.ref(personIndex).set(
     {
         name: name,
         email: email,
         Q1: q1,
         Q2: q2
     }       
        )
    } 
}         