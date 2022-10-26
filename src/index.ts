import { setup } from './config/setup'

const start = async () => {
  const setupResult = await setup({
    rootPath: './src',
  })

  console.log(setupResult)
}

start()
