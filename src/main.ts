import * as core from '@actions/core'
import { exec } from 'child_process'

async function run(): Promise<void> {
  try {
    const inputList: string = core.getInput('list')
    const list = JSON.parse(inputList)
    const inputCommand: string = core.getInput('command')

    for (const item of list) {
      promiseExec(`${inputCommand}`, { item });
    }

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

function promiseExec(command: string, env?: {[key: string]: string}) {
  return new Promise<void>((res, rej) => {
    exec(command, { env }, function(error, stdout, stderr) {
      if(error) {
        return rej()
      }
      console.log(stdout);
  
      return res()
    });
  })
} 