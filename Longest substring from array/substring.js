const nextIndexOfArray = 2;

var nodes = {      // input
    1: "ABCDEFGH",
    2: "ABCDEFG",
    3: "BCDEF",
    4: "ABCDxE",
    5: "EDXBCDAAB",
    6: "PBCDP",
    7: "BCXXXXXXXBCDXXXXXXXBC"

}

var MakeSortedArrayFromNodes = function(nodes)
{
    var array=[]
    Object.keys(nodes).forEach(function(key) {
        array.push(nodes[key])
    })
    array.sort((a,b) => b.length-a.length)
    return array
}

var GetSubstringOfTwoStrings = function(leftString,rightString)
{
    var temp=""
    var tempArray=[]
    for(var i=0;i<leftString.length;i++)
    {
        for(var j=0;j<rightString.length;j++)
        {
            if(leftString[i]==rightString[j])
            {
                for(var k=0;(k+i)<=leftString.length;k++)
                {
                    if((leftString[i+k]==rightString[j+k]) && (k+i)<leftString.length){
                        temp+=leftString[i+k]
                    }           
                    else{
                        tempArray.push(temp)
                        temp="" 
                        break
                    }
                } 
            }
        }
    }
    tempArray.sort((a,b) => b.length-a.length)
    return tempArray[0]
}

var ReturnLargestSubstring = function(leftString,rightString,nextIndexOfArray,array){
    var substring = GetSubstringOfTwoStrings(leftString,rightString)
    if(substring == undefined) return undefined
    else if(nextIndexOfArray>=array.length) return substring
    else return ReturnLargestSubstring(array[nextIndexOfArray],substring,nextIndexOfArray+1,array)
}

var FindLargestSubstringInNodes = function(nodes)
{
    var array=MakeSortedArrayFromNodes(nodes)
    return ReturnLargestSubstring(array[0],array[1],nextIndexOfArray,array)
}

var output = FindLargestSubstringInNodes(nodes)
console.log(output)