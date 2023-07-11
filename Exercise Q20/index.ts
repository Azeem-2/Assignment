// Task 20: creating object
interface Mountain {
    name : string
    height : number
    location:string
}
const everest:Mountain = {
    name : "Everest",
    height : 8848,
    location : "Nepal/China"
}
const k2:Mountain = {
    name:"K2",
    height:8611,
    location:"Pakistan/China"

}
const NangaParbat:Mountain = {
    name:"Nanga Parbat",
    height:8126,
    location:"Pakistan"
}
const TirichMir:Mountain = {
    name:"Tirich Mir",
    height:7708,
    location:"Pakistan"
}
const makalu: Mountain = {
  name: "Makalu",
  height: 8463,
  location: "Nepal/China"
}
const mountains: Mountain[] = [everest, k2, NangaParbat, TirichMir, makalu]
console.log("The list of mountains:");
console.log(mountains);