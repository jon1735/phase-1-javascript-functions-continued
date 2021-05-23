// Your code here
function saturdayFun(activity = 'roller-skate'){ 
    return "This Saturday, I want to " + (activity)+"!"
}
const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight = '*'){
    return function(message = "special"){
        return `You are ${highlight}${message}${highlight}!`
    }
}

