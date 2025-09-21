import { useLocation, useParams } from "react-router"
import BackgroundSection from "./BackgroundSection"
import products from '/src/content/products/products.json'

function ProductPage() {

    const { id } = useParams()
    const location = useLocation()
    const product_data = location?.state

    console.log(product_data);

    return (
        <>
            <BackgroundSection height="auto" imageUrl={'https://eigensinnig-wien.com/cdn/shop/files/all-black-women-outfits-eigensinnig-wien.webp?v=1738449239'}>
                <div className="w-3/4 relative flex flex-col lg:flex-row bg-white gap-6 lg:gap-12 !px-6 !pt-10 !pb-8 !mt-42 !mb-32 rounded-xl  justify-evenly">
                    <div className='h-full lg:min-h-[800px] w-full lg:w-[500px] items-center flex justify-center lg:!pb-12'>
                        <img
                            className='object-cover w-full h-full aspect-[2/3] '
                            src={product_data?.product_list[id]?.product_image}
                        />
                    </div>

                    <div className='flex items-start flex-col justify-center w-full gap-6 lg:w-1/2'>
                        {/* name */}
                        <div>
                            <h1 className='text-4xl font-bold mb-2'>
                                {product_data?.product_list[id]?.product_name}
                            </h1>
                        </div>

                        {/* size */}
                        <div>
                            <ul className='flex gap-6'>
                                {product_data?.product_list[id]?.product_sizes?.map((item, key) => (
                                    <li className='w-12 h-12 text-center flex items-center justify-center rounded-full bg-gray-400/50 text-xl' key={key}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        {/* avaialability */}
                        <div>
                            <h2 className={`
                                font-bold
                                text-center
                                ${product_data?.product_list[id]?.product_available
                                    ? `text-gray-900 line-through `
                                    : `text-green-800`
                                }
                            }`}>
                                {product_data?.product_list[id]?.product_available ? 'in stock' : 'in stock'}
                            </h2>
                        </div>

                        {/* price */}
                        <div>
                            <p className='text-4xl cursor-pointer hover:underline'>
                                {product_data?.product_list[id]?.product_price}
                            </p>
                        </div>
                        {/* message button */}
                        <div>
                            <button className='bg-blue-500 text-2xl font-bold text-white rounded-xl !py-2 !px-2 outline-none'>
                                {product_data?.product_list[id]?.message_text}
                            </button>
                        </div>


                    </div>


                </div>


            </BackgroundSection>
        </>
    )
}

export default ProductPage