import * as core from '@actions/core'
import {exec} from 'child_process'

async function run(): Promise<void> {
  try {
    const inputList: string = core.getInput('list')
    const list = JSON.parse(inputList)
    const inputCommand: string = core.getInput('command')

    for (const item of list) {
      core.info(await promiseExec(`${inputCommand}`, {item}))
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

function promiseExec(
  command: string,
  env?: {[key: string]: string}
): Promise<string> {
  return new Promise<string>((res, reject) => {
    exec(command, {env}, function (error, stdout) {
      if (error) {
        return reject(error)
      }
      return res(stdout)
    })
  })
}
