function checkScore(){
    console.log(input.value);
   
    if(input.value < 40){
        alert("You failed F")
    } else if(input.value >= 70){
        alert("Excellent A")
    } else if(input.value <= 50 ){
        alert("Try harder D")
    } else if(input.value <=60){
        alert("Good C")
    } else if(input.value >=61){
        alert('Very Good B')
    }

}