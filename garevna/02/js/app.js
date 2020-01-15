const group = [
    {
        name: "Vasa",
        lastName: "Vasan",
        age: 21,
        notebook: false
    },
    {
        name: "Petya",
        lastName: "Petyan",
        age: 20,
        notebook: true
    },
    {
        name: "Toha",
        lastName: "Tohan",
        age: 25,
        notebook: true
    }
]

function getStudentsList(arr) {
    arr.forEach((student) => {
        console.log(Object.keys(student).reduce((acc, key) => acc + `${key}: ${student[key]}, `, ''))
    })

}

getStudentsList(group)

function addNewStudent(arr, name, lastName, age, notebook) {
    if (!(arr && name && lastName && age)) return console.warn('Check input data')
    arr.push({name, lastName, age, notebook})

}

console.log('Let`s add mew user');
addNewStudent(group, 'Zolcman', 'Zordanich', 23, false)
getStudentsList(group)