import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function BackgroundSection({ imageUrl, children, height = 'h-screen' }) {

    const useFetchData = () => {
        return useQuery({
            queryKey: ['main'],
            queryFn: () => {
                return axios.get('/src/content/main/main.json')
            }
        })
    }
    
    const { data, error, isLoading } = useFetchData()
    const cmsData = data?.data

    return (
        <>
            <div className={`relative ${height} w-full flex items-center justify-center `}>
                {/* Background image */}
                <img
                    src={imageUrl || cmsData?.main_page_background}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="background"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                {/* children */}
                {children}
            </div>
        </>
    )
}

export default BackgroundSection