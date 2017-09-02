function calculateYears(principal, interest, tax, desired) {
    if (principal === desired) return 0;
    var accumulated = principal;
    var count = 0;
    console.log("arguments: " + principal + "," + interest + "," + tax + "," + desired);
    while (accumulated <= desired) {
        count++;
        accumulated *= (1 + interest - interest * tax);
    }
    return count;
}

function parityOutlier(numbers) {
    var oddTemp = [],
        evenTemp = [];
    for (number in numbers) {
        (numbers[number] & 1) ? oddTemp.push(numbers[number]): evenTemp.push(numbers[number]);
        if (evenTemp.length > 1 && oddTemp.length == 1) return oddTemp[0];
        if (oddTemp.length > 1 && evenTemp.length == 1) return evenTemp[0];
    }
    return "wha";
}

function rearrangeInteger(int) {
    var char = int.toString().split('');
    return char.sort().reverse().join('');
}

function getMiddle(string) {
    var chars = string.split('');
    return (chars.length & 1) ? chars[((chars.length - 1) / 2)] : chars[Math.floor(((chars.length - 1) / 2))].concat(chars[Math.floor(((chars.length - 1) / 2)) + 1]);
}

function splitString(str) {
  var newArr = [];
  str += "_";
  for (var i=0;i<str.length-1;i++) {
      newArr.push(str[i]+str[i+1]);
      i++;
  }
  return newArr;
}

function whichAreIn(a1, a2) {
    var newArr = [];
    for (word in a1) {
        if (a2.toString().indexOf(a1[word].toLowerCase()) > -1 && newArr.indexOf(a1[word].toLowerCase()) == -1) {
            newArr.push(a1[word]);
        }
    }
    return newArr.sort();
}

function bothSidesEquals(array) {
    for (var i = 0; i < array.length; i++) {
        if ((array.slice(0, i + 1).reduce((a, b) => a + b, 0) - array[i]) == (array.slice(i + 1, array.length).reduce((a, b) => a + b, 0))) {
            return i;
        }
    }
    return -1;
}

function isPrime(num) {
    num = Math.abs(num);
    for (var i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function tripleDouble(num1, num2) {
    var matchTriple = num1.toString().match(/([0-9])\1{2}/g);
    if (matchTriple) {
        for (var i = 0; i < matchTriple.length; i++) {
            if (num2.toString().match(new RegExp(("([" + matchTriple[i].charAt(0) + "])\\1{1}"), "g"))) return 1;
        }
    }
    return 0;
}
    
function cakes(recipe,ingredients) {
    var num = [];
    for (key in recipe) {
        if (!ingredients[key]) return 0;
        num.push(Math.floor(ingredients[key]/recipe[key]));
    }
    return num.reduce((a, b) => Math.min(a,b));
}
