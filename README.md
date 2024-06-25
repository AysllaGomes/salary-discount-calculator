## Salary Discount API

This API calculates the net salary based on the gross salary, optional discounts, and the number of dependents. The calculation includes INSS contributions and IRRF deductions.

## Configuration

### Prerequisites

- [Node.js](https://nodejs.org/en/blog/release/v18.19.0) v.18.19.0
- [NestJS](https://nestjs.com/)

## Installation

1. Clone the repository:

    ```bash
        https://github.com/AysllaGomes/salary-discount-calculator.git
    ```
2. Install the dependencies:

    ```bash
      npm install
    ```
3. Running the Application:

    ```bash
    # development
    $ npm run start
    
    # watch mode
    $ npm run start:dev
    
    # production mode
    $ npm run start:prod
    ```

The API will be available at http://localhost:3000.

## Swagger

The API uses Swagger to provide interactive documentation. You can access full documentation of available endpoints and test API calls directly through the Swagger UI.

To access the Swagger documentation:

- Start the application.
- Navigate to http://localhost:3000/api-docs.

## Endpoints
`GET /discount`

Calculates the net salary based on the provided parameters.

### Query Parameters

- (required) salary: The gross salary.
- (optional) discount: Additional discounts applied to the gross salary.
- (optional) dependents: Number of dependents.

### Example Request

    curl --location '{{port}}/discount?salary=10000&discount=500&dependents=2'

### Example Response

    {
      "valorPorDependente": "379.18",
      "contribuicaoINSS": "751.79",
      "descontoIRRF": "142.80",
      "salarioLiquido": "8726.41"
    }

## Changelog

All major changes to this project are documented in the file [CHANGELOG.md](./CHANGELOG.md).

## License

This project is licensed under the MIT License - see the [MIT licensed](LICENSE) file for details.


## Contributing

1. Fork the project.

2. Create a branch for your feature (git checkout -b feature/feature-name).

3. Commit your changes (git commit -am 'Add a new feature').

4. Push to the original repository (git push origin feature/feature-name).

5. Create a new Pull Request.
