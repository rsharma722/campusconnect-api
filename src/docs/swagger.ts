import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CampusConnect API',
      version: '1.0.0',
      description: 'API for campus events, categories, and participants',
    },

    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },

      schemas: {
        Event: {
          type: 'object',
          properties: {
            title: { type: 'string', example: 'Hackathon' },
            description: { type: 'string', example: 'Coding event' },
            categoryId: { type: 'string', example: 'abc123' },
            date: { type: 'string', example: '2025-01-05T10:00:00Z' },
          },
        },
      },
    },
  },

  apis: ['src/routes/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
