import * as core from '@actions/core'
import { exec } from 'child_process'

async function run(): Promise<void> {
  try {
    const inputList: string = core.getInput('list')
    const list = JSON.parse(inputList)
    const inputCommand: string = core.getInput('command')

    for (const item of list) {
      await promiseExec(`${inputCommand}`, { item });
    }

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

function promiseExec(command: string, env?: {[key: string]: string}) {
  return new Promise<void>((res, reject) => {
    exec(command, { env }, function(error) {
      if(error) {
        return reject(error)
      }  
      return res()
    });
  })
} 