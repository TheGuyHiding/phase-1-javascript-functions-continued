// code your solution here
function saturdayFun(funThing = "roller-skate",) {
    return (`This Saturday, I want to ${funThing}!`);

}

saturdayFun("roller-skate");

function mondayWork(boringThing = "go to the office") {
    return `This Monday, I will ${boringThing}.`;
}

function wrapAdjective(something = "*"){
    return function wrap(wrap2 = "special"){
        return `You are ${something}${wrap2}${something}!`;
    }
}