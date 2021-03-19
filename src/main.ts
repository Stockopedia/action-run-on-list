import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    const inputList: string = core.getInput('list')
    const list = JSON.parse(inputList)
    
    for (const item of list) {
      await exec.exec(`echo $FOO`, undefined, { env: { "FOO": item }});
    }

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
