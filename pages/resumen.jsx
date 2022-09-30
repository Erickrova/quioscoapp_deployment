import ResumenProducto from '../components/ResumenProducto'
import useQuiosco from '../hooks/useQuiosco'
import Layout from '../layout/Layout'

export default function resumen() {

    const {pedido} = useQuiosco()

    return(
        
        <Layout pagina={`Resumen`}>
            <h1 className='text-4xl font-black '>Resumen</h1>
            <p className='text-2xl my-10'>Revisa Tu Pedido</p>
            {pedido.length === 0 ? (
                <p className='text-center text-2xl'> No hay elementos en tu pedido  </p>
            ): (

                pedido.map(pd =>(
                    <ResumenProducto key={pd.id} producto={pd} />
                ))
            )
            }
        </Layout>
    )
}