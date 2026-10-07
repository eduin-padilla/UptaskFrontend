import { getUser } from "@/api/AuthApi";
import { useQuery } from "@tanstack/react-query";


export const useAuth = () => {

    const {data, isError, isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        retry: 1, //tiempo en renderizar la pagina de login
        refetchOnWindowFocus: false
    })

    return {data, isError, isLoading}

}


