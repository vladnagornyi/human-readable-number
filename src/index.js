module.exports = function toReadable (number) {
    const num0to19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const num20to90 = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  if (number <= 19) {
    return read0to19(number);
  } else if (number <=99) {
    return read20to99(number);
  } else {
    return read100to999(number);
  };
  
  function read0to19 (number) {
    let result = num0to19[number];
    return result;
  };
  
  function read20to99 (number) {
    if (number % 10 === 0) {
      return num20to90[number / 10];
    } else {
      return `${num20to90[Math.floor(number / 10)]} ${num0to19[number % 10]}`;
    }
  };
  
  function read100to999 (number) {
    if (number % 100 === 0) {
      return `${num0to19[number / 100]} hundred`;
    } else if(number % 100 <= 19) {
      return `${num0to19[Math.floor(number / 100)]} hundred ${read0to19(number % 100)}`;
    } else {
      return `${num0to19[Math.floor(number / 100)]} hundred ${read20to99(number % 100)}`;
    }
  };

  }
