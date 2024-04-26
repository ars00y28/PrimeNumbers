let SubmitBtn = document.getElementById("submit");
let CheckInputBox = document.getElementById("PrimeCheck");
let GetInputBox = document.getElementById("NthPrime");
let OutputParagraphOne = document.getElementById("OutputParagraphOne");
let OutputParagraphTwo = document.getElementById("OutputParagraphTwo");

SubmitBtn.addEventListener("click",SubmitFunc);


function SubmitFunc(){
    // check input
    let CheckValue = CheckInputBox.value;
    console.log(CheckValue);
    if(CheckValue !== ''){
        let prime = PrimeFinder(CheckValue); // either true or false
        TextOne = 'Prime:'
        OutputParagraphOne.innerHTML = TextOne.concat(' ',prime)
    } else{
        OutputParagraphOne.innerHTML = ""
    }
// get input
    if(GetInputBox.value !== ''){
        NthPrime = FindNthPrime(GetInputBox.value)
        if(NthPrime == 0){
            OutputParagraphTwo.innerHTML = " Zero or negative integer is not posible !!!"
        }
        else{
            if (GetInputBox.value == 1){
                TextTwo = 'st prime number is: '
            }else if(GetInputBox.value == 2){
                TextTwo = 'nd prime number is: '
            }else if(GetInputBox.value == 3){
                TextTwo = 'rd prime number is: '
            }else{
                TextTwo = 'th prime number is: '
            }
            TextOne = GetInputBox.value
            ResultText = TextOne.concat(TextTwo,NthPrime)
            console.log(ResultText)
            OutputParagraphTwo.innerHTML = ResultText

        }

    }else{
        OutputParagraphTwo.innerHTML =''
    }

}


function PrimeFinder(UserInput){
    if (UserInput <= 0 || UserInput == 1 || (UserInput > 2 && UserInput % 2 == 0 )){
        return false
    } else {
        let x = 3;
        while(x < UserInput){
            if(UserInput % x == 0){
                return false
            }
            x = x + 2
        
        }
        return true
    }
}

function FindNthPrime(NthPrime){
    let OutputString = ""
    if(NthPrime <= 0 ){
        return  0
        

    } else {
        let n = 2;
        let PrimeCount = 0;
        while(PrimeCount < NthPrime){
            let check = PrimeFinder(n); // true or false
            if(check){
                PrimeCount += 1
            }
            n+= 1
        }
       return (n-1)
    }
}