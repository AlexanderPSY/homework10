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