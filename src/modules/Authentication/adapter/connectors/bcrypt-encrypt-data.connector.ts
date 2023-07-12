import { hash } from 'bcryptjs'
import { Injectable } from '@nestjs/common'
import { EncryptDataFeature } from '../../core/features/encrypt-data.feature'
@Injectable()
export class BcryptEncryptDataConnector implements EncryptDataFeature {
  private readonly SALTS = 8

  perform(data: string): Promise<string> {
    return hash(data, this.SALTS)
  }
}
