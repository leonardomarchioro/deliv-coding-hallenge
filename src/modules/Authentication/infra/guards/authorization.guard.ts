import {
    CanActivate,
    ExecutionContext,
    Injectable,
  } from '@nestjs/common'
import { AuthenticationService } from '../../adapter/services/authentication.service'
import { MissingAuthorizationTokenException } from '../../core/exceptions/missing-authorization-token.exception'
import { InvalidTokenException } from '../../core/exceptions/invalid-token.exception'
  
  @Injectable()
  export class AuthorizationGuard implements CanActivate {  
    constructor(private readonly service: AuthenticationService ) {}
  
    async canActivate(
      context: ExecutionContext,
    ): Promise<boolean> {
  
      const request = context.switchToHttp().getRequest()
  
      const { authorization } = request.headers
      if(!authorization){
        throw new MissingAuthorizationTokenException();
      }
      const [, token] = authorization.split(' ')

      const isValidToken = await this.service.checkToken(token)

      const { userId } = await this.service.decodedToken(token)

      const isExistsUser = await this.service.validateUserExists(userId)
      if(!isExistsUser){
        throw new InvalidTokenException();
      }

      request.userId = userId
  
      return isValidToken
    }
  }
  