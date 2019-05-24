function getContacts(str) {

var splitsatu = str.split(',')

var splitdua =[]
for (i = 0 ; i < splitsatu.length ; i++){
 splitdua[i]= splitsatu[i].toString().split(':')
  }



return splitdua
 }
// return splitdua


var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';
console.log(getContacts(text))
// [
//   ['dimitri', 'dimitri@mail.com', 'male'],
//   ['icha', 'icha@mail.com', 'female'],
//   ['windi', 'windi@mail.com', 'female']
// ]