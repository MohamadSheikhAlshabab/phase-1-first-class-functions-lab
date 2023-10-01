const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(){
    const newDrivers = drivers;
    return newDrivers.slice(0,2)
}

function returnLastTwoDrivers(){
    const newDrivers = drivers;
    return newDrivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fare){
    return function fareMultiplier(){  
        let multiplier = 0; 
        return multiplier = fare * fare;
    }
}

const fareDoubler = (fare) => {
    function multiplierFareDoubler(){  
        let multiplier = 0; 
        multiplier = fare * 2;
        return multiplier
    }
    return multiplierFareDoubler()
}

const fareTripler =  (fare) => {
    // solution #1

    // function multiplierFareTripler(){  
    //     let multiplier = 0; 
    //     multiplier = fare * 3;
    //     return multiplier
    // }
    // return multiplierFareTripler()

    // solution #2
    
    return fareDoubler(fare) + fare;
}

function selectDifferentDrivers(drivers,selectingDrivers){
    return selectingDrivers()
}