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
    security: [{ bearerAuth: [] }],
    definitions: {
        UsuarioCriado: {
            $id: 1,
            $nome: "Admin",
            $usuario: "admin",
            $perfil: "admin"
        },
        NovoUsuario: {
            $nome: "Admin",
            $usuario: "admin",
            $senha: "senha123",
            $perfil: "admin"
        },
        LoginUsuario: {
            $usuario: "admin",
            $senha: "senha123"
        },
        LoginResposta: {
            $token: "eyJhbGciOiJIUzI1NiIsInR5c...",
            $usuario: {
                $id: 1,
                $nome: "Admin",
                $usuario: "admin",
                $perfil: "admin"
            }
        },
        Pet: {
            $id: 1,
            $nome: "Spike",
            $especie: "cachorro",
            $criada_em: "2026-06-12T01:35:18.000Z",
            $atualizada_em: "2026-06-12T01:35:18.000Z"
        },
        NovoPet: {
            $nome: "Spike",
            $especie: "cachorro"
        },
        Atendimento: {
            $id: 1,
            $data_hora: "2026-06-11T14:30:00.000Z",
            $motivo: "Consulta de rotina e vacinação",
            $status: "agendado",
            $pet_id: 1,
            $usuario_id: 4,
            $criada_em: "2026-06-12T01:45:19.000Z",
            $atualizada_em: "2026-06-12T01:45:19.000Z"
        },
        NovoAtendimento: {
            $data_hora: "2026-06-11T14:30:00.000Z",
            $motivo: "Consulta de rotina e vacinação",
            $pet_id: 1
        }
    }
};

const outputFile = '../swagger_output.json';
const endpointsFiles = ['../app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
