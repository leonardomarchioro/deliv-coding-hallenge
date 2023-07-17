# Iniciando Projeto

Antes de iniciar os serviços, certifique-se de que estão instalados na sua maquina o **Docker-compose e o Node.Js**

#### 1. Configurando variáveis
   > copie o arquivo .env.example para o arquivo .env, certifique-se que todas as variáveis possuam valores válidos.

```
cp .env.example .env
```

#### 2. Instalar Dependências

```shell
yarn install && yarn front:install
```

#### 3. Iniciar container Docker
> Esse comando irá rodar todas as instancias docker descritas no docker-compose
```shell
docker-compose up -d
```

> (Opcional visualizar logs)
```shell
docker-compose logs  -f  service name
```

#### 4. Abrindo a aplicação

Após rodar a aplicação, clique no link [App](http://localhost:3000/) para abrir o app no seu navegador.

# Rodando testes

## Testes unitários - Back-end:
Para rodar os testes unitários no back end execute o seguinte comando
```shell
yarn test
```
Para visualizar o coverage execute o seguinte comando
```shell
yarn test:cov
```

## Testes unitários - Front-end:
Para rodar os testes unitários no front end execute o seguinte comando
```shell
yarn test:front
```
