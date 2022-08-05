
function calculate() {
   let height1 = document.getElementById('height').value;
   let weight1 = document.getElementById('weight').value;
   let bmi = weight1 / Math.pow((height1/100),2);

   let bmical = (bmi.toFixed(2));

   document.getElementById("result").innerHTML="Your BMI is " + bmical;

   let status = document.getElementById("status")
   status.innerHTML = fresult()
   
   function fresult(){
       if(bmical<18.5)
       {
           return "You are Underweight"
       }
       else if(bmical>=18.5 && bmical<24.9)
       {
           return "You weight is Normal"
       }
       else if(bmical>=25 && bmical<29.9)
       {
           return "You are Overweight"
       }
       else
       {
           return "You are Obesity"
       }
   }
}

function reset(){
    document.getElementById('weight').value = 0;
    document.getElementById('height').value = 0;
    document.getElementById('status').innerText = "";
 }

