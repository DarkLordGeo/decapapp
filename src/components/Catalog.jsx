import CardComponent from "./CardComponent"

function Catalog() {
    return (
        <>
            {/* <div className='w-full h-full !py-62 flex items-center justify-center bg-[url(https://eigensinnig-wien.com/cdn/shop/files/all-black-women-outfits-eigensinnig-wien.webp?v=1738449239)] '>
                <div className='w-2/3 h-full grid grid-cols-3 grid-rows-2 gap-12 !mt-5'>
                    <CardComponent />
                </div>
            </div> */}

            <div className=" h-screen bg-[url(https://eigensinnig-wien.com/cdn/shop/files/all-black-women-outfits-eigensinnig-wien.webp?v=1738449239)] font-sans">
                <div className='absolute inset-0 h-screen bg-black/50 backdrop-blur-[4px]'></div>
                <div className='relative z-10 h-full flex justify-between flex-col items-center'>
                    <div className='w-2/3 grid grid-cols-3 grid-rows-2 gap-12 h-auto '>
                        <CardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog