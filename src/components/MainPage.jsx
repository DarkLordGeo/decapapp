import BackgroundSection from "./BackgroundSection"
import ProductCards from "./ProductCards"

function MainPage() {
    return (
        <>
            <BackgroundSection imageUrl={'https://eigensinnig-wien.com/cdn/shop/files/all-black-women-outfits-eigensinnig-wien.webp?v=1738449239'}>
                <div className="relative z-10 flex items-center justify-between h-full w-full text-white flex-col text-center">
                    <div className="w-full text-center py-32 collapse xl:visible">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white">Garter</h1>
                    </div>
                    <h1 className="text-3xl lg:text-[3rem] xl:text-[4rem] text-white">Your confidence starts here</h1>
                    <div className="w-full py-[125px] ">
                        <ul className="flex w-full grow-1">
                            <li className="text-center text-white bg-black/70 font-thin w-full !py-2 md:!py-6 lg:!py-8 xl:!py-10 sm:text-xl lg:text-2xl xl:text-3xl hover:scale-95 transition-all cursor-pointer">Bed linen</li>
                            <li className="text-center text-white bg-black/70 font-thin w-full !py-2 md:!py-6 lg:!py-8 xl:!py-10 sm:text-xl lg:text-2xl xl:text-3xl hover:scale-95 transition-all cursor-pointer">Swimsuits</li>
                            <li className="text-center text-white bg-black/70 font-thin w-full !py-2 md:!py-6 lg:!py-8 xl:!py-10 sm:text-xl lg:text-2xl xl:text-3xl hover:scale-95 transition-all cursor-pointer">Gifts</li>
                            <li className="text-center text-white bg-black/70 font-thin w-full !py-2 md:!py-6 lg:!py-8 xl:!py-10 sm:text-xl lg:text-2xl xl:text-3xl hover:scale-95 transition-all cursor-pointer">So on</li>
                        </ul>
                    </div>
                </div>
            </BackgroundSection>
            <ProductCards />
        </>
    )
}

export default MainPage