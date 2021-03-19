import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    const inputList: string = core.getInput('list')
    const inputCommand: string = core.getInput('command')
    const list = JSON.parse(inputList)
    
    for (const item of list) {
      await exec.exec(`ITEM=${item}; ${inputCommand}`);
    }

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
