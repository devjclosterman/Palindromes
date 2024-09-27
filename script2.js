const isPalindrome = sentence => {
    //Remove non-alphanumeric characters and convert to lowercase
      const cleaned = sentence.toLowerCase().replace(/[^a-z0-9]/g, '');
    //Check if cleaned string is the same forwards and backwards
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

const sentence1 = "A man, a plan, a canal: Panama";
const sentence2 = "Hello, World!";

console.log(isPalindrome(sentence1)); // true
console.log(isPalindrome(sentence2)); // false