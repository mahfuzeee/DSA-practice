//Finding first unique character
function findUnique(input) {
  const data = input.split("\n");
  const n = Number(data[0]);
  const strArray = data.slice(1);

  function getUniqueChar(str) {
    let freq = {};

    for (const char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }

    for (const char of str) {
      if (freq[char] === 1) {
        console.log(char);
        return;
      }
    }

    console.log("N");
  }

  strArray.forEach((element) => {
    getUniqueChar(element);
  });
}

findUnique(`100
cabaccaa
caccb
cbbbacbbaaacbacc
bbcccbacacaba
cbbaabaabababa
aabcacaaab
cbbbacaccccabacbac
babccacbcbcacaba
accacaabaaccaca
ccacaaacaaabbbbaa
aabcabaaabccbaaab
bb
cbbbbccbacaaabba
cbccaccbbbab
cbbccaacacccbabb
bacaca
cbccc
aca
cacacacab
ccabcaacccbabcacaa
bcccabcb
ccba
ccbbabbc
bccbbacacacaabcaacc
caaabaacaab
bbbca
b
ccccbccbcbc
ab
acaaabaabbcb
abaaacacabc
ccccbcac
abbcbbc
ccbacbbbabcabcaaaabc
cbbaacaaacbaabcababc
caaa
abaaccba
bacccbcbaacbaaab
aabcabbacaccbabbabc
bcccacbacc
bbcccacabcab`);
