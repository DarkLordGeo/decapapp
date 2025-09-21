import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchData = () => {

    
    return useQuery({
        queryKey: ['main'],
        queryFn: () =>{
            return axios.get('/src/content/main/main.json')
        }
    })
}
// export const