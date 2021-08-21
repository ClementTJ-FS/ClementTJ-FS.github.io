//Car Comparer

//App will use user-selected normal car and compare to user-selected ferrari

//Alert user - Explain app 

//display list of normal cars 

//ask user to pick one

//display list of ferrari

//ask user to pick one

//function to get info from collection for each car and arrange in legible way

//display the comparioson to user

//end

//code

//cars - using arrays for now
//[name, price, engine, hp, torque, mpg, topspeed, 0-60]
//["","","","","","","",""]
//normal
const corolla = ["[1] 2021 Toyota Corolla","From $20,025","2.0L I4","169 hp","126 lb-ft","31 city / 40 highway","118 mph","8.2 sec"];
const accord = ["[2] 2021 Honda Accord", "From $24,970","2.0L Turbocharged I4","252 hp","273 lb-ft","30 city / 38 highway","115 mph","7.2 sec"];
const mustang = ["[3] 2021 Ford Mustang GT","From $36,285","5.0L Ti-VCT V-8","460 hp","420 lb-ft","15 city / 24 highway","155 mph","4.4 sec"];

//ferrari
const italia = ["2015 Ferrari 458 Italia","From $245,000","4.5L V8","562 hp","398 lb-ft","13 city / 17 highway","202 mph","3.4 sec"];
const enzo = ["2003 Ferrari Enzo","Was $643,330 / Now $2,530,000","6.0L DOHC V12","651 hp","485 lb-ft","8 city / 12 highway","218 mph","3.3 sec"];
const gtb = ["2022 Ferrari 296 GTB","$321,000","3.0L Twin-Turbo V6/165hp Electric","819 hp","546 lb-ft","Unknown","205 mph","2.9 sec"];

//The script should only run if the link is clicked.
// Wait for the page to load first
window.onload = function() {

    //Get a reference to the link on the page
    // with an id of "compareL"
    var a = document.getElementById("compareL");

    //Set code to run when the link is clicked
    // by assigning a function to "onclick"
    a.onclick = function() {

        //ask user to choose normal car
        alert("This tool will let you see the difference between modern normal cars and a Ferrari!");
        let nChoice = Number(prompt("First, please choose a normal car:\r\n"
        + corolla[0]+"\r\n"+accord[0]+"\r\n"+mustang[0]+"\r\nPlease eenter the number of the car you would like."));
        
        //validate input
        while(isNaN(nChoice) || nChoice < 1 || nChoice > 3)
        {
            alert("Not a valid input, please only enter the number of the car you would like to choose.");
            nChoice = Number(prompt("First, please choose a normal car:\r\n"
            + corolla[0]+"\r\n"+accord[0]+"\r\n"+mustang[0]+"\r\nPlease eenter the number of the car you would like."));
        }
        
        //ask user to chose ferrari
        
        let fChoice = Number(prompt("Now, please chose a Ferrari!:\r\n"
        + enzo[0]+"\r\n"+italia[0]+"\r\n"+gtb[0]+"\r\nPlease eenter the number of the car you would like."));

        //validate input 
        while(isNaN(fChoice) || fChoice < 1 || fChoice > 3)
        {
            alert("Not a valid input, please only enter the number of the car you would like to choose.");
            fChoice = Number(prompt("Now, please chose a Ferrari!:\r\n"
            + enzo[0]+"\r\n"+italia[0]+"\r\n"+gtb[0]+"\r\nPlease eenter the number of the car you would like."));
        }
        DisplayCompare(nChoice,fChoice);

        return false;
    }

    //function to display comparison
    function DisplayCompare(n,f){
        //decide which car is chosen.
        if(n === 1){
            
        }
    }

}