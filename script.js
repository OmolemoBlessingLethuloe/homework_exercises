// dates
function date() {
  return Date();
}
console.log("Hello World. The date is: " + date());

// is divisible by 5 
function is_div_by_five(number) {
     if (number%5==0) {
       return true;
     } else {
       return false;
     }
   }
console.log(is_div_by_five(220)); // returns true

// divisibile by 5 or 3
function either_only(number2) {
     if (number2%5==0 || number2%3==0) {
       return true;
     } else {
       return false;
     }s
   }
console.log(either_only(19)); // returns false
  
// larger number
function larger_number(num1,num2) {
     if (num1>num2) {
       return num1;
     } else {
       return num2;
     }
   }
console.log(larger_number(3,6)); // returns 6

// checking word length
function word_check(word) {
    if (word.length>6) {
      return "long";
    } else if (word.length<6) {
      return "short";
    } else {
      return "medium";
    }
  }
console.log("Length of word: " + word_check("jopjop")); // returns medium

// number of E
count = 0;
i = 0; 
function count_e(word1) {
    while (i<word1.length) {
      let char = word1[i];
      if (char == "e" || char == "E") {
        count++;
        i++;
      } else {
        i++;
      }
    } 
    return count;
  }
console.log("Number of E's: " + count_e("Eeeggsee"));  // returns 5 

// Count A
counter = 0;
i = 0;
function count_a(word2) {
    while(1 < word2.length) {
        let char2 = word2[i];
        if (char2 == 'a' || char2 == 'A') {
            counter++
            i++
        } else {
            i++
        }
    }
    return counter;
}
console.log("Number of A's: " + count_a("Autonaaaomy")); // returns 4

// count Vowels
counter1 = 0;
z = 0;
function count_vowels(word3) {
  while (z < word3.length) {
    let char3 = word3[z];
    if (char3 == 'a' || char3 == 'e' ||char3 == 'i' ||char3 == 'o' ||char3 == 'u') {
      counter1++;
      z++;
    } else {
      z++
    }
  }
  return counter1;
}
console.log("Number of Vowels: " + count_vowels("aeuiokc")); // returns 5

// Sum Nums
function sum_nums(max) {
  sum = 1;
  while(max >= 1) {
    sum += max;
    max--;
  }
  return sum;
}
console.log(sum_nums(4)); // returns 11

// factorial
function factorial(num) {
  product = 1;
  while (num >= 1) {
    product *= num;
    num--;
  }
  return product;
}
console.log(factorial(4)); // returns 24

// Reverse
function reverse(word4) {
  return word4.split('').reverse().join('');
}
console.log(reverse("Dogs")); // returns "sgoD"

// Goodbye
function goodbye(name) {
  return "Goodbye " + name;
}
console.log(goodbye("Omolemo")); // returns Goodbye Omolemo