## API de Descontos Salariais

A API de Descontos Salariais é uma aplicação Node.js construída com NestJS que fornece serviços para calcular descontos salariais, incluindo INSS e IRRF.

## Instalação

Para instalar e executar a API localmente, siga estas etapas:

1. Clone o repositório:

    ```bash
        https://github.com/AysllaGomes/salary-discount-calculator.git
    ```
2. Instale as dependências:

    ```bash
      npm install
    ```
3. Execute a API:

    ```bash
    # development
    $ npm run start
    
    # watch mode
    $ npm run start:dev
    
    # production mode
    $ npm run start:prod
    ```
   
## Endpoints
`GET /discount`

Calcula o salário líquido com base no salário bruto fornecido

### Parâmetros da Consulta (Query Parameters)

    salary: O salário bruto do funcionário.

### Exemplo de Requisição

    curl --location '{{port}}/discount?salary=3000'

### Exemplo de Resposta

    {
        "netSalary": 2686.1152500000003
    }

## Contribuindo

Se você quiser contribuir com este projeto, sinta-se à vontade para enviar uma pull request.

## License

Este projeto está licenciado sob [MIT licensed](LICENSE).
