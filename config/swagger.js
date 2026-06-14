const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "VetCare API",
        description: "API RESTful para gerenciamento de atendimentos veterinários com autenticação JWT",
        version: "1.0.0"
    },
    host: "localhost:3000",
    schemes: ['http', 'https'],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: 'Insira o token JWT no formato: Bearer <seu_token>'
        }
    },
    security: [{ bearerAuth: [] }]
};

const outputFile = '../swagger_output.json';
const endpointsFiles = ['../app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
