function changeText(){
        var textsArray = ["Red","Green", "Blue", "Yellow", "Grey"]
        var number = getRandNum(0,textsArray.length - 1)
        console.log("Index: ", number)
        document.getElementById("heading").innerHTML = textsArray[number];
    }
    
    function getRandNum(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }