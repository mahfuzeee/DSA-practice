// function booWho(param){
//    return typeof param === "boolean";
// }

function maskEmail(email) {
   const address = email.slice(0, email.indexOf('@'));
   const domain = email.slice(email.indexOf('@'));
   const n = address.length;
   const result = address[0] + "*".repeat(n-2) + address[n - 1] + domain;
   console.log(address);
   console.log(domain);
   console.log(result);
   
}

const email = 'mahfuzmuzakkir@gmail.com';
maskEmail(email);