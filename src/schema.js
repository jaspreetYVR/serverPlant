import { gql } from 'apollo-server-express'
import {find, remove} from 'lodash'

const plantsArray = [ {
    "id" : 1,
    "plantName" : "Astro Arugula",
    "rootVegetable" : false,
    "startSeason" : [
        "March", "April", "May", "June", "July", "August", "September", "October"
    ],
    "lightingRequirement" : "Partial Shade",
    "lightingDurationMinimum" : 3,
    "lightingDurationMaximum" : 6,
    "lightingIntensityMinimum" : 10000,
    "lightingIntensityMaximum" : 35000,
    "hardinessZoneMinimum" : 3,
    "hardinessZoneMaximum" : 11,
    "temperatureMinimum" : 10,
    "temperatureMaximum" : 20,
    "difficulty" : "Easy",
    "duration" : 40,
    "petFriendly" : true,
    "edible" : true,
    "potSize" : 5
},
{
    "id" : 2,
    "plantName" : "Beets",
    "rootVegetable" : true,
    "startSeason" : [
        "April", "May", "June", "July", "August"
    ],
    "lightingRequirement" : "Partial Shade",
    "lightingDurationMinimum" : 3,
    "lightingDurationMaximum" : 6,
    "lightingIntensityMinimum" : 10000,
    "lightingIntensityMaximum" : 35000,
    "temperatureMinimum" : 10,
    "temperatureMaximum" : 21,
    "difficulty" : "Easy",
    "duration" : 50,
    "petFriendly" : true
},
{
    "id" : 3,
    "plantName" : "Broccoli",
    "rootVegetable" : false,
    "startSeason" : [
        "March","April", "May", "June", "July"
    ],
    "lightingRequirement" : "Full Sun",
    "lightingDurationMinimum" : 6,
    "lightingDurationMaximum" : 10,
    "lightingIntensityMinimum" : 35000,
    "lightingIntensityMaximum" : 50000,
    "temperatureMinimum" : 18,
    "temperatureMaximum" : 26,
    "difficulty" : "Hard",
    "duration" : 70,
    "petFriendly" : true
},
{
    "id" : 4,
    "plantName" : "Cabbage",
    "rootVegetable" : false,
    "startSeason" : [
        "March","April", "May", "June", "July"
    ],
    "lightingRequirement" : "Full Sun",
    "lightingDurationMinimum" : 6,
    "lightingDurationMaximum" : 10,
    "lightingIntensityMinimum" : 35000,
    "lightingIntensityMaximum" : 50000,
    "temperatureMinimum" : 10,
    "temperatureMaximum" : 24,
    "difficulty" : "Medium",
    "duration" : 80,
    "petFriendly" : true
},
{
    "id" : 5,
    "plantName" : "Carrots",
    "rootVegetable" : true,
    "startSeason" : [
        "April", "May", "June", "July","August"
    ],
    "lightingRequirement" : "Full Sun",
    "lightingDurationMinimum" : 6,
    "lightingDurationMaximum" : 10,
    "lightingIntensityMinimum" : 35000,
    "lightingIntensityMaximum" : 50000,
    "temperatureMinimum" : 4,
    "temperatureMaximum" : 26,
    "difficulty" : "Medium",
    "duration" : 70,
    "petFriendly" : true
},
{
    "id" : 6,
    "plantName" : "Cauliflower",
    "rootVegetable" : false,
    "startSeason" : [
        "March","April", "May", "June", "July"
    ],
    "lightingRequirement" : "Full Sun",
    "lightingDurationMinimum" : 6,
    "lightingDurationMaximum" : 10,
    "lightingIntensityMinimum" : 35000,
    "lightingIntensityMaximum" : 50000,
    "temperatureMinimum" : 15,
    "temperatureMaximum" : 24,
    "difficulty" : "Medium",
    "duration" : 75,
    "petFriendly" : false
},
{
    "id" : 7,
    "plantName" : "Celery",
    "rootVegetable" : false,
    "startSeason" : [
        "March","April", "May", "June"
    ],
    "lightingRequirement" : "Full Sun",
    "lightingDurationMinimum" : 6,
    "lightingDurationMaximum" : 10,
    "lightingIntensityMinimum" : 35000,
    "lightingIntensityMaximum" : 50000,
    "temperatureMinimum" : 4,
    "temperatureMaximum" : 21,
    "difficulty" : "Hard",
    "duration" : 100,
    "petFriendly" : true
},
{
    "id" : 8,
    "plantName" : "Collards",
    "rootVegetable" : false,
    "startSeason" : [
        "April", "May", "June","July","August","September"
    ],
    "lightingRequirement" : "Full Sun",
    "lightingDurationMinimum" : 6,
    "lightingDurationMaximum" : 10,
    "lightingIntensityMinimum" : 35000,
    "lightingIntensityMaximum" : 50000,
    "temperatureMinimum" : 3,
    "temperatureMaximum" : 24,
    "difficulty" : "Easy",
    "duration" : 85,
    "petFriendly" : true
},
{
    "id" : 9,
    "plantName" : "Eggplant",
    "rootVegetable" : false,
    "startSeason" : [
        "April", "May", "June"
    ],
    "lightingRequirement" : "Full Sun",
    "lightingDurationMinimum" : 6,
    "lightingDurationMaximum" : 10,
    "lightingIntensityMinimum" : 35000,
    "lightingIntensityMaximum" : 50000,
    "temperatureMinimum" : 15,
    "temperatureMaximum" : 29,
    "difficulty" : "Easy",
    "duration" : 100,
    "petFriendly" : false
},
{
    "id" : 10,
    "plantName" : "Lettuce",
    "rootVegetable" : false,
    "startSeason" : [
        "March","April", "May", "June","July","August","September"
    ],
    "lightingRequirement" : "Partial Shade",
    "lightingDurationMinimum" : 3,
    "lightingDurationMaximum" : 6,
    "lightingIntensityMinimum" : 10000,
    "lightingIntensityMaximum" : 35000,
    "temperatureMinimum" : 0,
    "temperatureMaximum" : 30,
    "difficulty" : "Easy",
    "duration" : 30,
    "petFriendly" : true
},
{
    "id" : 11,
    "plantName" : "Sweet Onions",
    "rootVegetable" : false,
    "startSeason" : [
        "January","February","March","April","May"
    ],
    "lightingRequirement" : "Full Sun",
    "lightingDurationMinimum" : 6,
    "lightingDurationMaximum" : 10,
    "lightingIntensityMinimum" : 35000,
    "lightingIntensityMaximum" : 50000,
    "temperatureMinimum" : 12,
    "temperatureMaximum" : 23,
    "difficulty" : "Easy",
    "duration" : 90,
    "petFriendly" : false
},
{
    "id" : 12,
    "plantName" : "Scallions",
    "rootVegetable" : false,
    "startSeason" : [
        "April", "May", "June","July","August","September"
    ],
    "lightingRequirement" : "Partial Shade",
    "lightingDurationMinimum" : 3,
    "lightingDurationMaximum" : 6,
    "lightingIntensityMinimum" : 10000,
    "lightingIntensityMaximum" : 35000,
    "temperatureMinimum" : 7,
    "temperatureMaximum" : 26,
    "difficulty" : "Easy",
    "duration" : 80,
    "petFriendly" : false
},
{
    "id" : 13,
    "plantName" : "Parsley",
    "rootVegetable" : false,
    "startSeason" : [
        "May", "June"
    ],
    "lightingRequirement" : "Partial Shade",
    "lightingDurationMinimum" : 3,
    "lightingDurationMaximum" : 6,
    "lightingIntensityMinimum" : 10000,
    "lightingIntensityMaximum" : 35000,
    "temperatureMinimum" : 7,
    "temperatureMaximum" : 26,
    "difficulty" : "Easy",
    "duration" : 80,
    "petFriendly" : true
},
{
    "id" : 14,
    "plantName" : "Peppers",
    "rootVegetable" : false,
    "startSeason" : [
        "March","April", "May", "June"
    ],
    "lightingRequirement" : "Full Sun",
    "lightingDurationMinimum" : 6,
    "lightingDurationMaximum" : 10,
    "lightingIntensityMinimum" : 35000,
    "lightingIntensityMaximum" : 50000,
    "temperatureMinimum" : 16,
    "temperatureMaximum" : 35,
    "difficulty" : "Easy",
    "duration" : 75,
    "petFriendly" : true
},
{
    "id" : 15,
    "plantName" : "Radish",
    "rootVegetable" : true,
    "startSeason" : [
        "April", "May", "June","July","August","September"
    ],
    "lightingRequirement" : "Full Sun",
    "lightingDurationMinimum" : 6,
    "lightingDurationMaximum" : 10,
    "lightingIntensityMinimum" : 35000,
    "lightingIntensityMaximum" : 50000,
    "temperatureMinimum" : 4,
    "temperatureMaximum" : 29,
    "difficulty" : "Easy",
    "duration" : 45,
    "petFriendly" : true
},
{
    "id" : 16,
    "plantName" : "Spinach",
    "rootVegetable" : false,
    "startSeason" : [
        "April", "May", "June","September","October"
    ],
    "lightingRequirement" : "Partial Shade",
    "lightingDurationMinimum" : 3,
    "lightingDurationMaximum" : 6,
    "lightingIntensityMinimum" : 10000,
    "lightingIntensityMaximum" : 35000,
    "temperatureMinimum" : 1,
    "temperatureMaximum" : 24,
    "difficulty" : "Easy",
    "duration" : 45,
    "petFriendly" : true
},
{
    "id" : 17,
    "plantName" : "Tomatoes",
    "rootVegetable" : false,
    "startSeason" : [
        "April", "May", "June"
    ],
    "lightingRequirement" : "Full Sun",
    "lightingDurationMinimum" : 6,
    "lightingDurationMaximum" : 10,
    "lightingIntensityMinimum" : 35000,
    "lightingIntensityMaximum" : 50000,
    "temperatureMinimum" : 13,
    "temperatureMaximum" : 27,
    "difficulty" : "Easy",
    "duration" : 80,
    "petFriendly" : false
},
{
    "id" : 18,
    "plantName" : "Turnips",
    "rootVegetable" : true,
    "startSeason" : [
        "April", "May", "June","July","August"
    ],
    "lightingRequirement" : "Full Sun",
    "lightingDurationMinimum" : 6,
    "lightingDurationMaximum" : 10,
    "lightingIntensityMinimum" : 35000,
    "lightingIntensityMaximum" : 50000,
    "temperatureMinimum" : 4,
    "temperatureMaximum" : 24,
    "difficulty" : "Easy",
    "duration" : 45,
    "petFriendly" : true
},
{
    "id" : 19,
    "plantName" : "Spider Plants",
    "rootVegetable" : false,
    "startSeason" : [
        "April", "May", "June","July","August","September","October","November","December"
    ],
    "lightingRequirement" : "Low Sun",
    "lightingDurationMinimum" : 0,
    "lightingDurationMaximum" : 3,
    "lightingIntensityMinimum" : 0,
    "lightingIntensityMaximum" : 10000,
    "temperatureMinimum" : 13,
    "temperatureMaximum" : 27,
    "difficulty" : "Easy",
    "duration" : 100,
    "petFriendly" : true
},
{
    "id" : 20,
    "plantName" : "Peace Lily",
    "rootVegetable" : false,
    "startSeason" : [
        "April", "May", "June","July"
    ],
    "lightingRequirement" : "Low Sun",
    "lightingDurationMinimum" : 0,
    "lightingDurationMaximum" : 3,
    "lightingIntensityMinimum" : 0,
    "lightingIntensityMaximum" : 10000,
    "temperatureMinimum" : 14,
    "temperatureMaximum" : 29,
    "difficulty" : "Easy",
    "duration" : 180,
    "petFriendly" : false
},
{
    "id" : 21,
    "plantName" : "Bromeliad",
    "rootVegetable" : false,
    "startSeason" : [
        "April", "May", "June","July","August","September"
    ],
    "lightingRequirement" : "Low Sun",
    "lightingDurationMinimum" : 0,
    "lightingDurationMaximum" : 3,
    "lightingIntensityMinimum" : 0,
    "lightingIntensityMaximum" : 10000,
    "temperatureMinimum" : 10,
    "temperatureMaximum" : 32,
    "difficulty" : "Easy",
    "duration" : 720,
    "petFriendly" : true
},
{
    "id" : 22,
    "plantName" : "Chinese Evergreen",
    "rootVegetable" : false,
    "startSeason" : [
        "April", "May", "June","July","August","September"
    ],
    "lightingRequirement" : "Low Sun",
    "lightingDurationMinimum" : 0,
    "lightingDurationMaximum" : 3,
    "lightingIntensityMinimum" : 0,
    "lightingIntensityMaximum" : 10000,
    "temperatureMinimum" : 13,
    "temperatureMaximum" : 25,
    "difficulty" : "Easy",
    "duration" : 720,
    "petFriendly" : false
},
{
    "id" : 23,
    "plantName" : "Cast Iron Plant",
    "rootVegetable" : false,
    "startSeason" : [
        "April", "May", "June","July","August","September"
    ],
    "lightingRequirement" : "Low Sun",
    "lightingDurationMinimum" : 0,
    "lightingDurationMaximum" : 3,
    "lightingIntensityMinimum" : 0,
    "lightingIntensityMaximum" : 10000,
    "temperatureMinimum" : 7,
    "temperatureMaximum" : 29,
    "difficulty" : "Easy",
    "duration" : 720,
    "petFriendly" : true
},
{
    "id" : 24,
    "plantName" : "Peacock Plant",
    "rootVegetable" : false,
    "startSeason" : [
        "April", "May", "June","July","August","September"
    ],
    "lightingRequirement" : "Low Sun",
    "lightingDurationMinimum" : 0,
    "lightingDurationMaximum" : 3,
    "lightingIntensityMinimum" : 0,
    "lightingIntensityMaximum" : 10000,
    "temperatureMinimum" : 16,
    "temperatureMaximum" : 24,
    "difficulty" : "Easy",
    "duration" : 720,
    "petFriendly" : true
}
]

const typeDefs = gql`
    type Plant {
        id:Int!
        plantName:String!
        rootVegetable:Boolean!
        startSeason:[String]!
        lightingRequirement:String!
        lightingDurationMinimum:Int!
        lightingDurationMaximum:Int!
        lightingIntensityMinimum:Int!
        lightingIntensityMaximum:Int!
        temperatureMinimum:Int!
        temperatureMaximum:Int!
        difficulty:String!
        duration:Int!
        petFriendly:Boolean!
    }

    type Query {
        plants: [Plant]!
        plant(id:Int!):Plant
    }
  `

  const resolvers = {
    Query: {
        plants: () => plantsArray,
        plant: (parent, args, context, info) => {
            return find(plantsArray,{id:args.id})
        },

    }
}


  export { typeDefs,resolvers } 