function solve(arr){
  var mlen = 0
  var mvlen = 0
  var res = ""
  
  for(let i = 0; i < arr.length; i++){
    if(isEnglish(arr[i]) == false){
      continue
    }
    else{
      if(arr[i].length > mlen){
        mlen = arr[i].length
        var tmp = 0
        for(var j in arr[i]){
          if(arr[i][j] == 'a' || arr[i][j] == 'e' || arr[i][j] == 'i' || arr[i][j] == 'o' || arr[i][j] == 'u'){
            tmp += 1
          }
        }
        vlen = tmp
        res = arr[i]
      }
      
      else if(arr[i].length == mlen){
        var tmp = 0
        for(var j in arr[i]){
          if(arr[i][j] == 'a' || arr[i][j] == 'e' || arr[i][j] == 'i' || arr[i][j] == 'o' || arr[i][j] == 'u'){
            tmp += 1
          }
        }
        
        if(tmp > vlen){
          tmp = vlen
          res = arr[i]
        }
      }
    }
  }
  
  console.log(res)
}


function isEnglish(s){
  for(var i in s){
    if(s[i] >= 'a' && s[i] <= 'z'){
      continue
    }
    else return false
  }
  return true
}

var str = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"

var a = str.split(/[ ,]+/)

solve(a)