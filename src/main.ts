import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    const inputList: string = core.getInput('list')
    const inputCommand: string = core.getInput('command')
    const list = JSON.parse(inputList)
    
    for (const _ of list) {
      await exec.exec(`${inputCommand}`);
    }

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
