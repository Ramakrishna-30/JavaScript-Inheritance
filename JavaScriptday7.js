
function changeBgToGreyAndUpdateText() {
    document.getElementById("colorPickerContainer").style.backgroundColor = "#e0e0e0";
    document.getElementById("selectedColorHexCode").textContent = "#e0e0e0";
}

function changeBgToGreenAndUpdateText() {
    document.getElementById("colorPickerContainer").style.backgroundColor = "#6fcf97";
    document.getElementById("selectedColorHexCode").textContent = "#6fcf97";
}

function changeBgToBlueAndUpdateText() {
    document.getElementById("colorPickerContainer").style.backgroundColor = "#56ccf2";
    document.getElementById("selectedColorHexCode").textContent = "#56ccf2";
}

function changeBgToPurpleAndUpdateText() {
    document.getElementById("colorPickerContainer").style.backgroundColor = "#bb6bd9";
    document.getElementById("selectedColorHexCode").textContent = "#bb6bd9";
}



//inbuilt object
class Moment extends Date {
    constructor(year) {
      super(year);
    }}
  var m=new Moment("August 15, 1947 20:22:10");
  document.writeln("Year value:")
  document.writeln(m.getFullYear());

  document.write("<br></br>")



  //custom class
  class Bike  
  {  
    constructor()  
    {  
      this.company="Heroo";  
    }  
  }  
  class Vehicle extends Bike {  
    constructor(name,price) {  
     super();  
      this.name=name;  
      this.price=price;  
    }   
  }  


  var v = new Vehicle("CD-delux","70000");  
  document.writeln(v.company+" "+v.name+" "+v.price);  

  // abstraction------------------------------------

  class ATM {
    constructor(withdraw){
        this.balance=1000;
        this.withdraw=withdraw;

    }
    getAmount(){
        let minimum=500;
        if((this.balance - this.withdraw) >= (this.minimum)){
            console.log("Withdraw Successful")
        }
        else{
            console.log("Withdraw Unsuccessful")
        }
    }
  }

   let obj=new ATM(1000);
   obj.getAmount();

    

   document.write("<br></br>")


   function A()
   {
   }
   A.prototype.display=function()
   {
     return "A is invoked";
   }
   function B()
   {
     
   }
   
   B.prototype=Object.create(A.prototype);
   
   var a=[new A(), new B()]
   
   a.forEach(function(msg)
   {
     document.writeln(msg.display()+"<br>");
   });

