import Image from "next/image"
import { formatearDinero } from "../helpers"
import useQuiosco  from "../hooks/useQuiosco"


const ResumenProducto = ({producto}) => {
    const {nombre,imagen,precio,cantidad,id} = producto
    const {handleEditarCantidades,handleEliminarProducto} = useQuiosco()

  return (
    <div className="shadow p-5 mb-3 md:flex gap-10 items-center">
        <div className="md:w-1/6">
            <Image width={300} height={400} src={`/assets/img/${imagen}.jpg`} alt={`imagen ${nombre}`} />
        </div>
        <div className="md:w-4/6">
            <p className="text-3xl font-bold">{nombre}</p>
            <p className="text-xl font-bold mt-2">cantidad: {cantidad}</p>
            <p className="text-xl font-bold mt-2 text-amber-500">precio: {formatearDinero(precio)}</p>
            <p className="text-sm text-gray-700 mt-2">subtotal: <span className="font-bold">{formatearDinero(cantidad*precio)}</span></p> 
        </div>
        <div className="md:w-1/6">
            <button type="button" className="bg-sky-700 uppercase rounded-md flex px-5 py-2 w-full font-bold mb-2 text-center text-white justify-between"
                onClick={()=>handleEditarCantidades(id)}
            >
                Editar
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                </svg>


            </button>
             <button type="button" className="bg-red-700 uppercase rounded-md flex px-5 py-2 w-full font-bold  text-white text-center justify-between" 
                    onClick={()=>handleEliminarProducto(id)}
             >
                Eliminar
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>

            </button>

        
        </div>

    </div>
  )
}

export default ResumenProducto