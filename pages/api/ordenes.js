import { PrismaClient } from "@prisma/client"

export default async function handler (req,res){
    
    const prisma = new PrismaClient()

    if(req.method === "POST"){
        const orden = await prisma.orden.create({
            data:{
                nombre: req.body.nombre,
                fecha: req.body.fecha,
                total: req.body.total,
                pedido: req.body.pedido,
            },
        })
        res.json(orden)
    }else{
        
        res.status(200).json({ordenes: "aqui iran las ordenes"})
    }
}