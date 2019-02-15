import { BuildImageCommand, TagValue, OptionModel } from '@evidnet/scv-core'
import { githubKey as token } from '../../secret.json'

enum AtlasVersion {
  Stable = '2.5',
  Edge = '2.6'
}

export class BuildCommand extends BuildImageCommand {
  substituteMap: Map<string, TagValue> = new Map<string, TagValue>([
    ['@base', 'amd64/ubuntu:18.04'],
    ['@tag', (tag: string) => tag.split('-')[0]],
    ['@atlas', (tag: string) => tag.split('-')[1]],
    ['@token', token]
  ])

  atlas: AtlasVersion[]

  tags: string[]

  imageName: string = 'evidnet/r-base'

  dockerFile: string = './assets/Dockerfile.template'

  constructor () {
    super()
    this.atlas = [AtlasVersion.Stable, AtlasVersion.Stable]
    this.tags = ['3.4.1', '3.4.2', '3.4.3', '3.4.4', '3.5.0', '3.5.1']
      .map(tag => this.atlas.map(key => `${tag}-${key}`))
      .reduce((subArr, val) => subArr.concat(val), [])
  }

  getOptions (): Array<OptionModel> {
    return []
  }

  getCommandAlias (): string {
    return 'b'
  }
}
