import { useEffect, useState } from "react"
import useQuiosco from "../hooks/useQuiosco"
import {formatearDinero} from '../helpers'
import Image from "next/image"


const ModalProducto = () => {

    const [cantidad,setCantidad] = useState(1)
    const [edicion,setEdicion] = useState(false)
    const {producto,handleChangeModal,handleAgregarPedido,pedido} = useQuiosco()
    const {nombre,precio,imagen} = producto
    const precioFormateado = formatearDinero(precio)
    
    useEffect(()=>{

        if(pedido.some(pd => pd.id === producto.id))
        {
            const cantidadActualizada = pedido.find(pd => pd.id === producto.id)
            setEdicion(true)
            setCantidad(cantidadActualizada.cantidad)
        }
    },[producto,pedido])

  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <Image 
                src={`/assets/img/${imagen}.jpg`}
                alt={`imagen platillo ${nombre}`}
                width={400}
                height={500}
            />
        </div>
        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button onClick={()=> handleChangeModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <div className="p-5">
                <h3 className="text-2xl font-bold">
                    {nombre}
                </h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{precioFormateado}</p>

                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={()=>{
                            if(cantidad<=1) return;
                             setCantidad((cantidad-1))
                            }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                    <p className="text-2xl font-bold">{cantidad}</p>

                    <button type="button" 
                    onClick={()=>{
                        if(cantidad>=10) return;
                         setCantidad((cantidad+1))
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
    
                </div>
                <button 
                type="button"
                className="rounded bg-indigo-600 hover:bg-indigo-800 text-white block w-full mt-5 p-3 uppercase font-bold"
                onClick={()=>{
                    handleAgregarPedido({
                        ...producto,
                        cantidad
                    })
                }}
                >
                {edicion ? "Guardar Cambios" : "Añadir al Pedido"}
                </button>
            </div>
        </div>
    </div>
  )
}

export default ModalProducto