import CardComponent from "./CardComponent"

function ProductCards() {
    return (
        <>
            <div className='w-full h-full flex items-center justify-start flex-col gap-2'>
                <div className='text-center !py-12'>
                    <h1 className='text-3xl font-bold'>Latest goods</h1>
                </div>
                <div className='w-2/3 h-full grid grid-cols-3 grid-rows-2'>
                    <CardComponent />
                </div>
            </div>
        </>
    )
}

export default ProductCards