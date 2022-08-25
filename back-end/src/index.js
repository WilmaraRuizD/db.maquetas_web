const express = require ('express');
const app=express();
const dev=require('dotenv').config();
const morgan =require('morgan')
const cors=require('cors');
const swaggerUi=require('swagger-ui-express');
const swaggerJsDoc=require('swagger-jsdoc');



//middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(cors());

//Documentation
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'API REST UMBRA 3D.STUDIO', 
        description: 'Esta es la documentación de la API en node js-Mysql, creada como requisito de la prueba técnica de desarrollador back-end', 
        contact: {
            name: 'Wilmara Ruiz Diaz', 
            email: 'wilmara_andreina93@hotmail.com'
        }, 
        servers: ['http://localhost:3010'], 
        version: '1.0'
    }
}, 
apis: [`./src/docs/*.js`]

}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


//configurcion del servidor 
app.set('port', process.env.PORT||3000)

app.use('/api/', require('./routes/inmuebles'))

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
 })

