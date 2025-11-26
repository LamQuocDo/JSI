let cargoHold = [
  'oxygen tanks',
  'space suits',
  'parrot',
  'instruction manual',
  'meal packs',
  'slinky',
  'security blanket'
]
let newList = cargoHold.forEach((item,index) => {
    if(item === "slinky"){
        cargoHold[index] = "space tether";
    }
})
console.log(cargoHold)

//2.a xoa phan tu cuoi cung
cargoHold.pop()
console.log(cargoHold)
//2.b xoa phan tu dau tien
cargoHold.shift()
console.log(cargoHold)
// 3 them 1138 vao dau + them "20 meters" vao cuoi
cargoHold.unshift(1138)
cargoHold.push("20 meters")
console.log(cargoHold)
//4 in mang ken chieu dai
console.log(`Cargo Hold content: ${cargoHold.join(", ")} \n
Total items: ${cargoHold.length}
`)
