import { supabase } from '../Api'
export const useDatabase = () => {
    
    const consultarCanciones = async() => {
        const {data} = await supabase.from("Canciones").select();
        return data;
    }
    
    return {
        //Metodos
        consultarCanciones
    }
}
