import {Router, Request, Response} from 'express'

export const routes = Router()

routes.get('/hello', (req: Request, res:Response) => {
    res.status(200).json({hello: 'Hello REST by Rogerio Silva!'})
})




