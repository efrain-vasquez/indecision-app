const add = (a, b) => {
 //console.log(arguments)
 return a + b
}
console.log(add(55, 1, 1001))


const user = {
    name: 'Efrain',
    cities: ['Dallas', 'New York', 'Paris'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}
console.log(user.printPlacesLived())

const multiplier = {
    numbers: [1, 6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy)
  }
}
console.log(multiplier.multiply())
