export const convertNumbers = (number) => {
  if (number) {
    if (number < 1000) {
      return number;
    } else if (number >= 1000 && number < 1000000) {
      return (
        number.toString().slice(0, -3) +
        "." +
        number.toString().slice(-3, -1) +
        "K"
      );
    } else if (number >= 1000000 && number < 1000000000) {
      return (
        number.toString().slice(0, -6) +
        "." +
        number.toString().slice(-6, -4) +
        "M"
      );
    } else if (number >= 1000000000) {
      return (
        number.toString().slice(0, -9) +
        "." +
        number.toString().slice(-9, -7) +
        "B"
      );
    }
  }
};


// convertNumber function2
/*export const convertNumber = (number) => {
  const numberWithCommas = number.toLocaleString();
  var arr = numberWithCommas.split(",");
  if (arr.length == 5) {
    //Trillions
    return arr[0] + "." + arr[1].slice(0, 2) + "T";
  } else if (arr.length == 4) {
    //Billions
    return arr[0] + "." + arr[1].slice(0, 2) + "B";
  } else if (arr.length == 3) {
    // Millions
    return arr[0] + "." + arr[1].slice(0, 2) + "M";
  } else if (arr.length == 2) {
    // Thousands
    return arr[0] + "." + arr[1].slice(0, 2) + "K";
  } else {
    // Hundreds
    return number.toLocaleString();
  }
};*/ 