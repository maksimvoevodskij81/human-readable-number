module.exports = function toReadable (number) {
  const convert = {
    oneTen:{
              '1' :'one',
              '2' :'two',
              '3' :'three',
              '4' :'four',
              '5' :'five',
              '6' :'six',
              '7' :'seven',
              '8' :'eight',
              '9' :'nine',
    },
    tenTwenty:{
     
      '1':'eleven',
      '2':'twelve',
      '3':'thirteen',
      '4':'fourteen',
      '5':'fifteen',
      '6':'sixteen',
      '7':'seventeen',
      '8':'eighteen',
      '9':'nineteen',
     
    },
    dozens:{
      '1':'ten',
      '2':'twenty',
      '4':'forty',
      '3':'thirty',
      '5':'fifty',
      '6':'sixty',
      '7':'seventy',
      '8':'eighty',
      '9':'ninety',
    }
        }
        
    
      let count=number.toString().length;
      let stringNumber=number.toString();
      let result='';
     if (number===0) {
       result='zero';
     }
      for (let i = 0; i < stringNumber.length; i++) {
        
          if (count===1){
                  for (let key in convert.oneTen ) {
                    if(key=== stringNumber[i]){
                      result+=convert.oneTen[key];
                        return result;
                    }
                   }    
          }else if(count===2){
              if (number>99&&stringNumber[i]>1){
                  for (let key in convert.dozens ) {
                    if(number%10==0){
                      if (key===stringNumber[i]) {
                        result+=' '+convert.dozens[key];
                      return result;
                      }
                    }
                    if (key===stringNumber[i]) {
                        result+=' '+convert.dozens[key]+' ';
                        count--;
                        break;
                }
              }
              }else if(number<=99&&number>19){
                for (let key in convert.dozens ) {
                  if(number%10==0){
                    if (key===stringNumber[i]) {
                      result+=convert.dozens[key];
                      return result;
                    }
                      
                  }else if (key===stringNumber[i]) {
                      result+=convert.dozens[key]+' ';
                      count--;
                      break;
                    }
            }
              }else if(number%10===0){
                for (let key in convert.dozens ) {
                  if(number==10){
                    return 'ten';
                  }
                  if (key=== stringNumber[i]) {
                    result+=' '+convert.dozens[key];
                   return result;
                  }
                }
              }else if(stringNumber[i]=='0'){
                for (let key in convert.oneTen ) {
                  if(key=== stringNumber[i+1]){
                    result+=' '+convert.oneTen[key];
                      return result;
                  }
                 }    
              }else if(stringNumber[i]=='1'){
                for (let key in convert.tenTwenty ) {

                  if(number>9&&number<20){
                    if(key===stringNumber[i+1]){
                      result+=convert.tenTwenty[key];
                     return result;
                    }
                  }
                  else if(key===stringNumber[i+1]){
                     result+=' '+convert.tenTwenty[key];
                    return result;
              }
            }
          }
        }else if(count===3){
              for (let key in convert.oneTen ) {
                if(key=== stringNumber[i]){
              result+=convert.oneTen[key]+' hundred';
              count--;
              break;
                }
               }
            
      
           }  
              
  }
       return result; 
      
}
