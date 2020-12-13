module.exports = function controller (input) {
  input = input.toUpperCase()
  let out = ''
  let last
  let count = 0

  for (let i = 0; i < input.length; i++) {
    if (!last) {
      out += input[i]
      last = input[i]
      count++
    } else if (last === input[i]) {
      count++
    } else {
      out += count + input[i]
      last = input[i]
      count = 1
    }

    if (i === input.length-1) {
      out += count
    }
  }

  return out
}