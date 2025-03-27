function scuberGreetingForFeet(ride){
  if (ride <= 400){
    return `This one is on me!`;
  }
  if (ride > 400 && ride <= 2000){
    return `That will be twenty bucks.`;
  }
  if (ride > 2000 && ride < 2500){
    return `I will gladly take your thirty bucks.`;
  }
  if (ride > 2500){
    return `No can do.`;
  }
}

function ternaryCheckCity(city){
  switch(city){
    case 'NYC':
      return `Ok, sounds good.`;
      break;
    default:
      return `No go.`
  }
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return `Thank you so much.`;
      break;
    case 'not as generous':
      return `Thank you.`;
    default:
      return `Bye.`;
  }
}
