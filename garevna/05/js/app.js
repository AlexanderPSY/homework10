const names = ['Vasa', 'Petya', 'Zoi'], lastNames = ['Vasandr', 'Petyan', 'Zolian', 'Bus']
const newArray = []

function getFullNames(namesArr,lastNamesArr,fullArray) {
    let i=Math.max(namesArr.length,lastNamesArr.length)-1
    while (i>=0) {
        fullArray.unshift(`${namesArr[i]? namesArr[i]: 'No name'} ${lastNamesArr[i]? lastNamesArr[i]: 'No last name'}`)
        i--
    }
    return fullArray
}

console.log(getFullNames(names,lastNames,newArray))
