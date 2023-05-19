const database = {
    locations: [
        {
            street: '317 Broadway',
            city: 'Nashville',
            state: 'TN, 37201'
        },
        {
            street: '420 Skyline Dr',
            city: 'East Nashville',
            state: 'TN, 37014'
        },
        {
            street: '26 Rockcity Lane',
            city: 'Brentwood',
            state: 'TN, 37204'
        }

    ],

    fish: [
        {
            image: 'images/3600.jpg',
            name: "Bob",
            food: "crustaceans",
            size: 3,
            cute: true
        },
        {
            image: 'images/fish2.jpg',
            name: "Bill",
            food: "urchins",
            size: 5,
            cute: true
        },
        {
            image: 'images/fish3.jpg',
            name: "Gorlock",
            food: "cats",
            size: 15,
            cute: false
        }
    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}

