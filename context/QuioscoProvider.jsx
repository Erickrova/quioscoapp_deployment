import { useEffect,useState,createContext } from "react";
import axios from 'axios'
import {toast} from "react-toastify"
import { useRouter } from "next/router";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) =>{
    
    const router = useRouter()
    const [categorias,setCategorias] = useState([])
    const [categoriaActual,setCategoriaActual] = useState({})
    const [producto,setProducto] = useState({})
    const [modal,setModal] = useState(false)
    const [pedido,setPedido] = useState([])
    const [nombre,setNombre] = useState("")
    const [total,setTotal] = useState(0)



    const handleClickCategorias = (id) =>{
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }
    const handleSetProducto = (producto) =>{
        setProducto(producto)
    }
    const handleChangeModal = () =>{
        setModal(!modal)
    }
    
    const obtenerCategorias = async () =>{

        const url = `/api/categorias`
        const {data} = await axios(url);
        setCategorias(data)

    }
    const handleAgregarPedido = ({categoriaId,...producto}) =>{
        
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === 
                producto.id ? producto : pedidoState )
            setPedido(pedidoActualizado)
            toast.info("Producto Actualizado")
            setModal(false)
            return
        }
        setPedido([...pedido,producto])
        toast.success("Producto Agregado")
        setModal(false)
    }
    const handleEditarCantidades = (id) =>{
        const pedidoActualizar = pedido.find(pd => pd.id === id)
        setProducto(pedidoActualizar)
        handleChangeModal()
    }
    const handleEliminarProducto = (id) =>{
        const pedidoActualizado = pedido.filter(pd => pd.id !== id)
        setPedido(pedidoActualizado)
    }
    const colocarOrden = async (e)=>{
        e.preventDefault()
        try{
            await axios.post("/api/ordenes",{pedido,nombre,total,fecha: Date.now().toString()})

            // Resetear la app
  
            setCategoriaActual(categorias[0])
            setProducto({})
            setModal(false)
            setPedido([])
            setNombre("")
            setTotal(0)
            toast.success("Pedido Realizado Correctamente")
            setTimeout(()=>{
                router.push("/")

            },3000)
            
        
          

        }catch(error){
            console.log(error)
        }

    }
    useEffect(()=>{
        obtenerCategorias()
    },[])

    useEffect(()=>{
        const nuevoTotal = pedido.reduce((total,producto)=>(producto.precio * producto.cantidad) + total,0)
        setTotal(nuevoTotal)
    },[pedido])

    useEffect(()=>{
        setCategoriaActual(categorias[0])
    },[categorias])


    return(
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategorias,
                handleSetProducto,
                producto,
                handleChangeModal,
                modal,
                pedido,
                handleAgregarPedido,
                handleEditarCantidades,
                handleEliminarProducto,
                nombre,
                setNombre,
                colocarOrden,
                total
       
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export{
    QuioscoProvider
}
export default QuioscoContext


