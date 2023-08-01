import {Express, Request, Response} from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options: swaggerJsdoc.Options = {
    definition:{
        openapi: "3.0.0",

        info:{
            title: "REST API docs",
            version: '0.0.1' // todo: load from package.json
        },

        components:{
            securitySchemas:{
                bearerAuth:{
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },

        security:
        [
            {
                bearerAuth: []
            }
        ]

    },

    apis: ["./src/routes.ts", 
    './src/entities/*.ts']
}

const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app: Express, port: number){

    // swagger page
    app.use('/docs', swaggerUi.serve,
    swaggerUi.setup(swaggerSpec))

    // docs in json fromat

    app.get('docs.json',
     (req: Request, res: Response) => {
        res.setHeader('Content-Type',
        'application/json' )
        res.send(swaggerSpec)
     })

     console.log(`Docs available at http://localhost:${port}/docs`)

}

export default swaggerDocs