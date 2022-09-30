import {categorias} from "./Data/categorias"
import {productos} from "./Data/productos"
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

const main = async () =>{
    try{
        await prisma.categoria.createMany({
            data: categorias
        })
        await prisma.producto.createMany({
            data: productos
        })
    }catch(error){
        console.log(error)
    }
}

main()


