const findPalindromes = s => {
    console.log(s)
    const expandAroundCenter = (left, right) => {
        const palindromes = [];
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            palindromes.push(s.slice(left, right + 1));
            left--;
            right++;
        }
        return palindromes;
    };
    const allPalindromes = [];
    for (let i = 0; i < s.length; i++) {
        //Odd-length palindromes 
        allPalindromes.push(...expandAroundCenter(i, i));

        //Even-length palindromes
        allPalindromes.push(...expandAroundCenter(i, i + 1));
    }
    return allPalindromes;
}

const str = "abacdfgdcaba";
console.log(findPalindromes(str));