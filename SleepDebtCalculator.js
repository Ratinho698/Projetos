const getSleepHours = day => {
    switch (day){
      //you can change amount of sleep you had in each day of the week here
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 6;
        break;
      case 'wednesday':
        return 7;
        break;
      case 'thursday':
        return 8;
        break;
      case 'friday':
        return 5;
        break;
      case 'saturday':
        return 4;
        break;
      case 'sunday':
        return 9;
        break;
    }
  }
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep this week!');
    } else if (actualSleepHours > idealSleepHours){
      console.log(`You got ${actualSleepHours - idealSleepHours} extra hour(s) of sleep this week. You got more sleep than needed!`);
    } else {
      console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less of sleep than you needed this week. You should rest more!`);
    }
  }
  calculateSleepDebt();
