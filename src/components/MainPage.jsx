import ProductCards from "./ProductCards"
function MainPage() {
    return (
        <>
            <div className="h-screen bg-[url(https://eigensinnig-wien.com/cdn/shop/files/all-black-women-outfits-eigensinnig-wien.webp?v=1738449239)] font-sans">
                <div className='absolute inset-0 h-screen bg-black/50 backdrop-blur-[4px]'></div>
                <div className='relative z-10 h-full flex justify-between flex-col items-center'>
                    
                    <div className="w-full text-center py-32">
                        <h1 className="text-4xl text-white">Garter</h1>
                    </div>
                    <h1 className="text-[4rem] text-white">Your confidence starts here</h1>
                    <div className="w-full py-[125px] ">
                        <ul className="flex w-full grow-1">
                            <li className="text-center text-white bg-black/70 font-thin w-full !py-10 text-3xl hover:scale-95 transition-all cursor-pointer">Bed linen</li>
                            <li className="text-center text-white bg-black/70 font-thin w-full !py-10 text-3xl hover:scale-95 transition-all cursor-pointer">Swimsuits</li>
                            <li className="text-center text-white bg-black/70 font-thin w-full !py-10 text-3xl hover:scale-95 transition-all cursor-pointer">Gifts</li>
                            <li className="text-center text-white bg-black/70 font-thin w-full !py-10 text-3xl hover:scale-95 transition-all cursor-pointer">So on</li>

                        </ul>
                    </div>
                </div>
                <ProductCards />
            </div>
        </>
    )
}

export default MainPage