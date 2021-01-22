//convert distance in kilometer to meter

function kilometerToMeter(distanceInKilometer) {

    if (distanceInKilometer <= 0) {
        return "Distance can never be negative or zero";
    }

    distanceInMeter = distanceInKilometer * 1000; // 1 kilometer = 1000 meter
    return distanceInMeter;
}

//console.log(kilometerToMeter(5));

//total budget 

function budgetCalculator(numberOfWatches, numberOfPhones, numberOfLaptops) {

    if (numberOfWatches <= 0 || numberOfPhones <= 0 || numberOfLaptops <= 0) {
        return "quantity of any item cannot be negative or zero"
    }

    totalCostOfWatches = numberOfWatches * 50;    //cost of each watch is 50
    totalCostOfPhones = numberOfPhones * 100;    //cost of each phone is 100
    totalCostOfLaptops = numberOfLaptops * 500;    //cost of each laptop is 500

    totalBudget = totalCostOfWatches + totalCostOfPhones + totalCostOfLaptops;

    return totalBudget;

}
//console.log(budgetCalculator(2,2,2));

// hotel cost

function hotelCost(numberOfDaysStayed) {

    if (numberOfDaysStayed <= 0) {
        return "Days can never be negative or zero. You must stay atleast one day";
    }

    if (numberOfDaysStayed <= 10) {
        totalCost = numberOfDaysStayed * 100; //cost of per day for first ten days is 100tk
        return totalCost;
    }
    else if (numberOfDaysStayed <= 20) {
        firstTenDaysCost = 10 * 100;
        remainingDays = numberOfDaysStayed - 10;
        remainingDaysCost = remainingDays * 80; //cost of per day from 11th to 20th day is 80tk
        totalCost = firstTenDaysCost + remainingDaysCost;
        return totalCost;
    }
    else {
        firstTenDaysCost = 10 * 100;
        secondTenDaysCost = 10 * 80;
        remainingDays = numberOfDaysStayed - 20;
        remainingDaysCost = remainingDays * 50;    //cost of per day from 21st to rest of the day is 50tk
        totalCost = firstTenDaysCost + secondTenDaysCost + remainingDaysCost;
        return totalCost;
    }
}
//console.log(hotelCost(22));

// find the friend name whose name is bigger
function megaFriend(friendsNameList) {

    //console.log(friendsNameList);
    if (friendsNameList.length == 0) {
        return "Array of friends name is empty!!!"
    }

    var maximumLength = 0;
    var position = 0;

    for (var i = 0; i < friendsNameList.length; i++) {
        var name = friendsNameList[i];
        //console.log(name);
        var valid = true;

        if(!((name[0]>='A'&& name[0]<='Z') || (name[0]>='a'&& name[0]<='z'))){    //name cannot be digits
            //console.log(name);
            valid = false;
            return "Name cannot consist of any whitespace or digit or any other symbols as well as the array should be with valid names!!!";
        }
        else{
            for (var j=0; j<name.length; j++){
                if((name[j]>='A'&& name[j]<='Z') || (name[j]>='a'&& name[j]<='z')){    /*name should 
                                                                                        be letters*/
                    //console.log(name[j]);
                    valid = true;
    
                }
                else{
                    valid = false;
                    return "Name cannot consist of any whitespace or digit or any other symbols as well as the array should be with valid names!!!";
                }
            }
        }
       
        

        if(valid==true){
            var nameLength = name.length;       //calculate length of string name
            if (nameLength > maximumLength) {     //to find the maximum length of the name
                maximumLength = nameLength;
                position = i;                   //to find the position of the maximum length name
            }
        }
 
    }

    return friendsNameList[position];
}

//console.log(megaFriend(["tania", "rima", "nafiaMehzabin","ishrat","ayesha"]));
