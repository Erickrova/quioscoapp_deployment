import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import { useRouter } from "next/router"



const Categoria = ({categoria}) => {
    const {nombre,icono,id} = categoria
    const {handleClickCategorias,categoriaActual} = useQuiosco()
    const router = useRouter()


  return (
    <div className={`${categoriaActual?.id === id && 'bg-amber-400'} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
        <Image width={70} height={70} src={`/assets/img/icono_${icono}.svg`} alt="imagen icono"/>
        <button type="button" 
            className="text-2xl font-bold hover:cursor-pointer"
            onClick={()=>{
              handleClickCategorias(id)
              router.push("/")    
            } 
           }
            
        >
            {nombre}
        </button>
    </div>
  )
}

export default Categoria