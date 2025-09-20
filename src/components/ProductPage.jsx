import BackgroundSection from "./BackgroundSection"

function ProductPage() {
    return (
        <>
            <BackgroundSection height="auto" imageUrl={'https://eigensinnig-wien.com/cdn/shop/files/all-black-women-outfits-eigensinnig-wien.webp?v=1738449239'}>
                <div className="w-3/4 relative flex flex-col lg:flex-row bg-white gap-6 lg:gap-12 !px-6 !pt-10 !pb-8 !mt-42 !mb-32 rounded-xl  justify-evenly">
                    <div className='h-96  w-full lg:w-1/2'>
                        <img className='object-cover w-fit h-full' src={"https://static.vecteezy.com/system/resources/thumbnails/041/486/723/small_2x/ai-generated-colorful-hoodie-with-glasses-fashion-model-pose-photo.jpg"} />
                    </div>
                    <div className='flex items-start flex-col justify-center w-full gap-6 lg:w-1/2'>
                        {/* name */}
                        <div>
                            <h1 className='text-4xl font-bold mb-2'>Some name</h1>
                        </div>

                        {/* size */}
                        <div>
                            <ul className='flex gap-6'>
                                <li className='w-12 h-12 text-center flex items-center justify-center rounded-full bg-gray-400/50 text-xl'>S</li>
                                <li className='w-12 h-12 text-center flex items-center justify-center rounded-full bg-gray-400/50 text-xl'>S</li>

                            </ul>
                        </div>

                        {/* avaialability */}
                        <div>
                            <h2 className='text-green-700'>In stock</h2>
                        </div>

                        {/* price */}
                        <div>
                            <p className='text-4xl cursor-pointer hover:underline'>32$ </p>
                        </div>
                        {/* message button */}
                        <div>
                            <button className='bg-blue-500 text-2xl font-bold text-white rounded-xl !py-2 !px-2 outline-none'>message now!</button>
                        </div>


                    </div>
                </div>
            </BackgroundSection>
        </>
    )
}

export default ProductPage