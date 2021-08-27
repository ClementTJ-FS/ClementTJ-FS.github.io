//Car Comparer

//App will use user-selected normal car and compare to user-selected ferrari

//display dropdown of normal cars and ferraris

//ask user to pick one of each

//function to get info from collection for each car and fill table with data

//display the comparioson to user in a table

//end

//code

//cars - using arrays for now
//[name, price, engine, hp, torque, mpg, topspeed, 0-60]

//normal
const corolla = ["2021 Toyota Corolla","From $20,025","2.0L I4","169 hp","126 lb-ft","31 city / 40 highway","118 mph","8.2 sec"];
const accord = ["2021 Honda Accord","From $24,970","2.0L Turbocharged I4","252 hp","273 lb-ft","30 city / 38 highway","115 mph","7.2 sec"];
const mustang = ["2021 Ford Mustang GT","From $36,285","5.0L Ti-VCT V-8","460 hp","420 lb-ft","15 city / 24 highway","155 mph","4.4 sec"];

//ferrari
const enzo = ["2003 Ferrari Enzo","From $643,330","6.0L DOHC V12","651 hp","485 lb-ft","8 city / 12 highway ","218 mph","3.3 sec"];
const italia = ["2015 Ferrari 458 Italia","From $245,000","4.5L V8","562 hp","398 lb-ft","13 city / 17 highway","202 mph","3.4 sec"];
const gtb = ["2022 Ferrari 296 GTB","From $321,000","3.0L Twin-Turbo V6/165hp Electric","819 hp","546 lb-ft","Unknown ","205 mph","2.9 sec"];

//wait for page to load before running
window.onload = function(){

    //assign button to variable and only run script if clicked
    let btn = document.getElementById('btn1');
    btn.onclick = function(){
        //assign the table to variable
        let resultTable = document.getElementById('compareTable');

        //make the table visible
        resultTable.style.visibility = "visible";

        //assign selected cars to variables
        let carN = document.getElementById('carN').value;
        let carF = document.getElementById('carF').value;

        //decide which nomral car is chosen.
        let chosenN;
        if(carN === 'corolla'){
            chosenN = corolla;
        }else if(carN === 'accord'){
            chosenN = accord;
        }else if(carN === 'mustang'){
            chosenN = mustang;
        }
        
        //decide which ferrari is chosen.
        let chosenF;
        if(carF === 'enzo'){
            chosenF = enzo;
        }else if(carF === 'italia'){
            chosenF = italia;
        }else if(carF === 'gtb'){
            chosenF = gtb;
        }

        //fill cells with data
        document.getElementById('nCarData0').innerHTML = chosenN[0];
        document.getElementById('nCarData1').innerHTML = chosenN[1];
        document.getElementById('nCarData2').innerHTML = chosenN[2];
        document.getElementById('nCarData3').innerHTML = chosenN[3];
        document.getElementById('nCarData4').innerHTML = chosenN[4];
        document.getElementById('nCarData5').innerHTML = chosenN[5];
        document.getElementById('nCarData6').innerHTML = chosenN[6];
        document.getElementById('nCarData7').innerHTML = chosenN[7];

        document.getElementById('fCarData0').innerHTML = chosenF[0];
        document.getElementById('fCarData1').innerHTML = chosenF[1];
        document.getElementById('fCarData2').innerHTML = chosenF[2];
        document.getElementById('fCarData3').innerHTML = chosenF[3];
        document.getElementById('fCarData4').innerHTML = chosenF[4];
        document.getElementById('fCarData5').innerHTML = chosenF[5];
        document.getElementById('fCarData6').innerHTML = chosenF[6];
        document.getElementById('fCarData7').innerHTML = chosenF[7];
        
    }
}