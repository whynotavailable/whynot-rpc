import { lookupService } from 'dns/promises'
import * as fs from 'fs'
import { parse } from 'yaml'

fs.writeFileSync("test.txt", "asd")

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
let config = parse(data)

console.log(config)
