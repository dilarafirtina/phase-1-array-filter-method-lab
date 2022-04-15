// Code your solution here
const findMatching = (arr, str) => arr.filter(e => e.toUpperCase() == str.toUpperCase())

const fuzzyMatch = (arr, str) => {
    return arr.filter(e=>e[0].toUpperCase() === str[0].toUpperCase())
    //   return arr.filter(e => {        
    //     return !e.name.toUpperCase().includes(str.toUpperCase(), e.name.length - 1) && 
    //            !e.name.toUpperCase().includes(str.toUpperCase(), Math.floor(e.name.length / 2)) && 
    //            (e.name.toUpperCase().includes(str.toUpperCase()))
    // })
}

const matchName = (arr, str) => arr.filter(e => e.name == str)


const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];


