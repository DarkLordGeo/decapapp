import CardComponent from "./CardComponent"

function Catalog() {
    return (
        <>
            {/* <div className="h-screen flex items-center justify-center bg-[url(https://eigensinnig-wien.com/cdn/shop/files/all-black-women-outfits-eigensinnig-wien.webp?v=1738449239)] font-sans">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                <div className='w-2/3 grid grid-cols-3 grid-rows-2 gap-12  z-10 !mt-auto !mb-auto'>
                  
                </div>
            </div> */}

            <div className="relative h-auto w-full">
                {/* Background image */}
                <img
                    src="https://eigensinnig-wien.com/cdn/shop/files/all-black-women-outfits-eigensinnig-wien.webp?v=1738449239"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="background"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

                {/* Content (normal flow, not absolute) */}
                <div className="relative z-10 flex items-center justify-between h-full text-white flex-col text-center">
                    <div className="w-2/3 grid grid-cols-3 grid-rows-2 gap-12 !mt-72 !mb-32">
                        <CardComponent />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Catalog