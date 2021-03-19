import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    const inputList: string = core.getInput('list')
    const list = JSON.parse(inputList)
    const inputCommand: string = core.getInput('command')

    for (const item of list) {
      await exec.exec(`echo ${item} | ${inputCommand}`);
    }

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
