import { DynamicModule, ForwardReference, InjectionToken, Provider, Type } from '@nestjs/common'

interface IModule {
    providers?: Provider<any>[];
    controllers?: Type<any>[];
    imports?:
    | (
        | Type<any>
        | DynamicModule
        | Promise<DynamicModule>
        | ForwardReference<any>
      )[]
}

export function provider<T, K extends T>(
    abstraction: Type<T> | InjectionToken,
    implementationClass: Type<K>,
  ): Provider<T> {
    return {
      provide: abstraction,
      useClass: implementationClass,
    }
  }
  

export function generateModule({ controllers, imports, providers }: IModule){

    return {
        controllers,
        imports,
        providers,
        exports: [...providers]
    };
}