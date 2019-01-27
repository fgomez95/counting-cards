var count = 0; var testCount = [];
function cc(card) {
  let message="";
  switch(card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
          count++;
          break;
          
      case 7:
      case 8:
      case 9:
          break;
          
      case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
          count--;
          break;
          
      default:
          break;
  }
  if(count>0) message= `${count} Bet`;
  else message = `${count} Hold`;
  return message;
}

function appTest(expect, testFunc){
    function fail(message){
        return testCount.push(expect);
    }
    if(!testFunc()) fail(expect);
    else testCount.push("success");
}

appTest('expect to increment when given 2, 3, 4, 5, 6',()=>{
    count=0;
    cc(2); cc(3); cc(4); cc(5); cc(6);
    if(count === 5) return true;
    return false;
});


appTest('expect count to not change when given 7, 8, 9',()=>{
    count=0;
    cc(7); cc(8); cc(9); 
    if(count === 0) return true;
    return false;
});

appTest("expect to decrement when given 10, 'J', 'Q', 'K', 'A'",()=>{
    count=0;
    let valueCount=0;
    const myArr=[10, 'J', 'Q', 'K', 'A'];
    for(const val of myArr){ 
        cc(val);
        valueCount++;
    }
    if(count === -valueCount) return true;
    return false;
});

appTest("expect message to have 'Bet' when count greater than 0", ()=>{
    count=0;
    if(RegExp('Bet').test(cc(2))) return true;
    else return false;
});

appTest("expect message to have 'Hold' when count not greater than 0", ()=>{
    count=0;
    if(RegExp('Hold').test(cc(10))) return true;
    else return false;
});

testCount.forEach(testMessage=>console.log(testMessage));
