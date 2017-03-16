const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (new_kit) {
  kittens.push(new_kit)
}

function destructivelyPrependKitten (new_kit) {
  kittens.unshift(new_kit)
}

function destructivelyRemoveLastKitten (new_kit){
  kittens.pop(new_kit)
}

function destructivelyRemoveFirstKitten (new_kit) {
  kittens.shift(new_kit)
}

function appendKitten (new_kit) {
  return [...kittens, new_kit]
}

function prependKitten (new_kit) {
  return [new_kit,...kittens ]

}

function removeFirstKitten (new_kit){
  return kittens.slice(1)
}

function removeLastKitten (new_kit){
  return kittens.slice(0, kittens.length - 1)
}
