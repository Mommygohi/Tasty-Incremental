var num_salt_water = 0;
var num_salt = 0;
var num_peppercorns = 0;
var num_ginger = 0;
var num_oregano = 0;
var num_dill = 0;
var num_turtles = 0;
var num_crabs = 0;
var num_birbs = 0;
var num_moles = 0;
var num_chipmunks = 0;
var num_rabbits = 0;

//Collection

function getSaltWater(input){
    num_salt_water = num_salt_water + input;
    document.getElementById("num_salt_water").innerHTML = "Salt Water: " + num_salt_water + "ml";
}

function dryWater(input){
    if(num_salt_water >= input){
      num_salt = num_salt + input;
      num_salt_water = num_salt_water - input;
      document.getElementById("num_salt_water").innerHTML = "Salt Water: " + num_salt_water + "ml";
      document.getElementById("num_salt").innerHTML = "Salt: " + num_salt + "g";
    }
}

function getPepperCorn(input){
    num_peppercorns = num_peppercorns + input;
    document.getElementById("num_peppercorns").innerHTML = "Peppercorns: " + num_peppercorns + "pc";
}

function getGinger(input){
    num_ginger = num_ginger + input;
    document.getElementById("num_ginger").innerHTML = "Ginger: " + num_ginger + "pc"
}

function getOregano(input){
    num_oregano = num_oregano + input;
    document.getElementById("num_oregano").innerHTML = "Oregano: " + num_oregano + "g"
}

function getDill(input){
    num_dill = num_dill + input;
    document.getElementById("num_dill").innerHTML = "Dill: " + num_dill + "g"
}

//Differences

function getDifference(producer_1, producer_2, resource_diff){
    var difference = producer_1 - producer_2;
    document.getElementById(resource_diff).innerHTML = "[" + difference + "]";
}

//Purchases

function buyTurtle(){
        var turtle_cost = Math.floor(10 * Math.pow(1.1,num_turtles));

        if(num_salt_water >= turtle_cost){
            num_turtles = num_turtles + 1;
            num_salt_water = num_salt_water - turtle_cost;
            document.getElementById('num_turtles').innerHTML = "Turtles: " + num_turtles;
            document.getElementById('num_salt_water').innerHTML = "Salt Water: " + num_salt_water + "ml";
            document.getElementById('salt_water_per_sec').innerHTML = "Per Sec: " + (num_turtles - num_crabs) + "ml/s"
            document.getElementById('turtle_salt_water_per_sec').innerHTML = "Per Sec: " + num_turtles + "ml/s"
        }

    var next_cost = Math.floor(10 * Math.pow(1.1,num_turtles));
    document.getElementById('turtle_cost').innerHTML = "Cost: " + next_cost + "ml water";
}

function buyCrab(){
        var crab_cost = Math.floor(10 * Math.pow(1.1,num_crabs));

        if(num_salt >= crab_cost){
            num_crabs = num_crabs + 1;
            num_salt = num_salt - crab_cost;
            document.getElementById('num_crabs').innerHTML = "Crabs: " + num_crabs;
            document.getElementById('num_salt').innerHTML = "Salt: " + num_salt + "g";
            document.getElementById('salt_per_sec').innerHTML = "Per Sec: " + num_crabs + "g/s"
            document.getElementById('salt_water_per_sec').innerHTML = "Per Sec: " + (num_turtles - num_crabs) + "ml/s"
            document.getElementById('crab_salt_per_sec').innerHTML = "Per Sec: " + num_crabs + "g/s"
        }

    var next_cost = Math.floor(10 * Math.pow(1.1,num_crabs));
    document.getElementById('crab_cost').innerHTML = "Cost: " + next_cost + "g salt";
}

function buyBirb(){
        var birb_cost = Math.floor(20 * Math.pow(1.1,num_birbs));

        if(num_salt >= birb_cost && num_salt_water >= birb_cost){
            num_birbs = num_birbs + 1;
            num_salt = num_salt - birb_cost;
            num_salt_water = num_salt_water - birb_cost;
            document.getElementById('num_birbs').innerHTML = "Birbs: " + num_birbs;
            document.getElementById('num_salt').innerHTML = "Salt: " + num_salt + "g";
            document.getElementById('num_salt_water').innerHTML = "Salt Water: " + num_salt_water + "ml";
            document.getElementById('peppercorns_per_sec').innerHTML = "Per Sec: " + num_birbs + "pc/s"
            document.getElementById('birb_peppercorns_per_sec').innerHTML = "Per Sec: " + num_birbs + "pc/s"
        }

    var next_cost = Math.floor(20 * Math.pow(1.1,num_birbs));
    document.getElementById('birb_cost').innerHTML = "Cost: " + next_cost + "ml water" + ", " + next_cost + "g salt";
}

function buyMole(){
        var mole_cost = Math.floor(20 * Math.pow(1.1,num_moles));

        if(num_peppercorns >= mole_cost){
            num_moles = num_moles + 1;
            num_peppercorns = num_peppercorns - mole_cost;
            document.getElementById('num_moles').innerHTML = "Moles: " + num_moles;
            document.getElementById('num_peppercorns').innerHTML = "Peppercorns: " + num_peppercorns + "pc";
            document.getElementById('ginger_per_sec').innerHTML = "Per Sec: " + num_moles + "pc/s"
            document.getElementById('mole_ginger_per_sec').innerHTML = "Per Sec: " + num_moles + "pc/s"
        }

    var next_cost = Math.floor(20 * Math.pow(1.1,num_moles));
    document.getElementById('mole_cost').innerHTML = "Cost: " + next_cost + "pc pepper";
}

function buyChipmunk(){
        var chipmunk_cost = Math.floor(40 * Math.pow(1.1,num_chipmunks));

        if(num_ginger >= chipmunk_cost){
            num_chipmunks = num_chipmunks + 1;
            num_ginger = num_ginger - chipmunk_cost;
            document.getElementById('num_chipmunks').innerHTML = "Chipmunks: " + num_chipmunks;
            document.getElementById('num_ginger').innerHTML = "Ginger: " + num_ginger + "pc";
            document.getElementById('oregano_per_sec').innerHTML = "Per Sec: " + num_chipmunks + "g/s"
            document.getElementById('chipmunk_oregano_per_sec').innerHTML = "Per Sec: " + num_chipmunks + "g/s"
        }

    var next_cost = Math.floor(40 * Math.pow(1.1,num_chipmunks));
    document.getElementById('chipmunk_cost').innerHTML = "Cost: " + next_cost + "pc ginger";
}

function buyRabbit(){
        var rabbit_cost = Math.floor(40 * Math.pow(1.1,num_rabbits));

        if(num_ginger >= rabbit_cost){
           num_rabbits = num_rabbits + 1;
            num_ginger = num_ginger - rabbit_cost;
            document.getElementById('num_rabbits').innerHTML = "Rabbits: " + num_rabbits;
            document.getElementById('num_oregano').innerHTML = "Oregano: " + num_oregano + "g";
            document.getElementById('dill_per_sec').innerHTML = "Per Sec: " + num_rabbits + "g/s";
            document.getElementById('rabbit_dill_per_sec').innerHTML = "Per Sec: " + num_rabbits + "g/s";
        }
    
    var next_cost = Math.floor(40 * Math.pow(1.1,num_rabbits));
    document.getElementById('rabbit_cost').innerHTML = "Cost: " + next_cost + "g oregano";
}

window.setInterval(function(){
    getSaltWater(num_turtles);
}, 1000);

window.setInterval(function(){
    dryWater(num_crabs);
}, 1000);

window.setInterval(function(){
    getPepperCorn(num_birbs);
}, 1000);

window.setInterval(function(){
    getGinger(num_moles);
}, 1000);

window.setInterval(function(){
    getOregano(num_chipmunks);
}, 1000);

window.setInterval(function(){
    getDill(num_rabbits);
}, 1000);
