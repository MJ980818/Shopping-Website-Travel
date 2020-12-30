const continents = [
    {
        "_id": 1,
        "name": "Africa"
    },
    {
        "_id": 2,
        "name": "Europe"
    },
    {
        "_id": 3,
        "name": "Asia"
    },
    {
        "_id": 4,
        "name": "North America"
    },
    {
        "_id": 5,
        "name": "South America"
    },
    {
        "_id": 6,
        "name": "Australia"
    },
    {
        "_id": 7,
        "name": "Antarctica"
    },
]

const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "$0 to $299",
        "array": [0, 299]
    },
    {
        "_id": 2,
        "name": "$300 to $599",
        "array": [300, 599]
    },
    {
        "_id": 3,
        "name": "$600 to $999",
        "array": [600, 999]
    },
    {
        "_id": 4,
        "name": "$1000 to $2999",
        "array": [1000, 2999]
    },
    {
        "_id": 5,
        "name": "More than $3000",
        "array": [3000, 1500000]
    },

]
export {
    continents,
    price
}