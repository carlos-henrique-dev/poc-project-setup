import { setup } from './config/setup'

const start = async () => {
 await setup({
    rootPath: './src',
  })
}

start()
