function filterSymbols(string) {
    return string.split('').filter((val) => val.charCodeAt(0) <= 1103 && val.charCodeAt(0) >= 1040).join('')
}

console.log(filterSymbols("Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик"))