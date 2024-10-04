import * as fs from 'fs'
import { parse } from 'yaml'

/**
 * @returns {Hello}
 */
function name() {
  return {
    name: "hi"
  }

}

console.log(name().name)

let data = fs.readFileSync("./examples/example.yaml", { encoding: 'utf8' })

/**
 * @type {Config}
 */
let config = parse(data)

console.log(config)
