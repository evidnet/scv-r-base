import { BuildImageCommand } from '@evidnet/scv-core'

type TagCallback = ((tag: string) => string)
type TagValue = string | TagCallback

export class BuildCommand extends BuildImageCommand {
  substituteMap: Map<string, TagValue> = new Map<string, TagValue>([
    ['@base', 'amd64/ubuntu:18.04'],
    ['@tag', (tag: string) => tag]
  ])

  tags: string[] = ['3.3.3', '3.4.0', '3.4.1', '3.4.2', '3.4.3', '3.4.4', '3.5.0', '3.5.1']

  imageName: string = 'evidnet/r-base'

  dockerFile: string = './assets/Dockerfile.template'

  getCommandAlias (): string {
    return 'b'
  }
}
