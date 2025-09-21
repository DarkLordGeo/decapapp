import BackgroundSection from "./BackgroundSection"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function AboutUs() {

    const useFetchData = () => {
        return useQuery({
            queryKey: ['about'],
            queryFn: () => {
                return axios.get('public/content/about/about.json')
            }
        })
    }
    const { data, error, isLoading } = useFetchData()
    if (error) return (<><div><h1>Error</h1></div></>)
    if (isLoading) return (<><div><h1>Loading...</h1></div></>)
    const cmsData = data?.data
    return (
        <>
            <BackgroundSection height="auto" >
                <div className='relative w-4/5  min-h-[500px] lg:w-2/5 bg-white !px-6 !pt-10 !pb-8 !mt-72 !mb-32 sm:mx-auto rounded-lg'>
                    <h1 className='font-bold text-2xl lg:text-5xl !mb-5 lg:!mb-12 text-center'>{cmsData?.about_page_header || 'something test'}</h1>
                    <p className='text-base  w-auto'>{cmsData?.about_page_description || 'about us description'}</p>
                </div>
            </BackgroundSection>
        </>
    )
}
export default AboutUs