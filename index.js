// code your solution here
function saturdayFun(sport = "roller-skate"){
return (`This Saturday, I want to ${sport}!`)

}
saturdayFun();

function mondayWork(activity = ("go to the office")){
     return ((`This Monday, I will ${activity}.`))
    
}

function wrapAdjective(style = "*"){
  
 return function innerF(parameter = "special"){
     return `You are ${style}${parameter}${style}!`
 }

}