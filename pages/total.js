import Layout from '../layout/Layout'
import { useEffect, useState } from 'react'
import useQuiosco from '../hooks/useQuiosco'
import { formatearDinero } from '../helpers'


export default function Rotal() {

    const {pedido,nombre,setNombre,colocarOrden,total,comprobarPedido} = useQuiosco()



    useEffect(()=>{
        comprobarPedido()
    },[pedido])
 

    return(
        <Layout pagina={`Total y Confirmar Pedido`}>
            <h1 className='text-4xl font-black '>Total y Confirmar Pedido</h1>
            <p className='text-2xl my-10'>Confirma tu pedido a continuacion</p>

            <form
                onSubmit={colocarOrden}
            >
                <div>
                    <label htmlFor="nombre" className='block uppercase text-slate-800 font-bold text-xl'>Nombre</label>
                    <input type="text" name="nombre" id='nombre' className='bg-gray-200 w-full md:w-1/3 p-2 rounded-md mt-3' value={nombre} onChange={e=>setNombre(e.target.value)} />
                </div>
                <div className='mt-10'>
                    <p className='text-2xl'>Total a pagar: <span className='font-bold'>{formatearDinero(total)}</span></p>
                </div>
                <div className='mt-5'>
                    <input type="submit"
                        className={`${comprobarPedido() ? "bg-indigo-100" : "bg-indigo-600 hover:bg-indigo-800 cursor-pointer"} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-center text-white`}
                        value="confirmar pedido"
                        disabled={comprobarPedido()}

                    />
                </div>
            </form>


        </Layout>
    )
}