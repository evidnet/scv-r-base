import { RBaseApplication } from './src/RBaseApplication'

const app = new RBaseApplication()
export function start () {
  app.start(true, process.argv)
}
