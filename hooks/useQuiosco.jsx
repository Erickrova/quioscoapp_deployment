import QuioscoContext from "../context/QuioscoProvider"
import { useContext } from "react"


const useQuiosco = () => {
  return useContext(QuioscoContext)
}

export default useQuiosco