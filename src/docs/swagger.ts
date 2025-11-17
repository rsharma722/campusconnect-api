import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
definition: {
    openapi: '3.0.0',
    info: {
    title: 'CampusConnect API',
    version: '1.0.0',
    description: 'API for campus events, categories, and participants'
    }
    },
    apis: ['src/routes/*.ts']
};

export const swaggerSpec = swaggerJSDoc(options);
