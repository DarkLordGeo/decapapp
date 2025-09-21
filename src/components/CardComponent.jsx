import products from '/src/content/products/products.json'



function CardComponent() {

    const asd = [
        {
            "message_text": "Exercitation asperio",
            "product_image": "https://americantall.com/cdn/shop/products/American-Tall-Men-Essential-SLIM-FIT-Crew-Neck-Tees-White-front.jpg?v=1673367625",
            "product_name": "Nadine House",
            "product_sizes": [
                "Corporis eiusmod aut",
                "Similique eius nisi ",
                "Vel voluptate assume"
            ],
            "product_price": "292",
            "product_available": true
        }
    ]

    console.log(products);

    return (
        <>
            {products.product_list?.map((item, key) => (
                <div className="flex w-5/6 h-full flex-col items-center justify-center bg-white">
                    <a className='overflow-hidden cursor-pointer w-full flex items-center justify-center'>
                        <img
                            className="h-full aspect-[2/3] object-cover  hover:scale-105 transition-all duration-200"
                            src={item.product_image}
                            alt={item.message_text} />
                    </a>
                    <div className="mt-4 pb-5">
                        <a>
                            <h5 className="text-center tracking-tight text-gray-500">{item.product_name}</h5>
                        </a>
                        <div className=" flex justify-center">
                            <p>
                                <span className="text-sm font-bold text-gray-900">{item.product_price}</span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            {/* <div className="flex w-5/6 h-full flex-col items-center justify-center bg-white">
                <a className='overflow-hidden cursor-pointer w-full flex items-center justify-center'>
                    <img
                        className="h-full object-cover aspect-square hover:scale-105 transition-all duration-200"
                        src="https://static.vecteezy.com/system/resources/thumbnails/041/486/723/small_2x/ai-generated-colorful-hoodie-with-glasses-fashion-model-pose-photo.jpg"
                        alt="product image" />
                </a>
                <div className="mt-4 pb-5">
                    <a>
                        <h5 className="text-center tracking-tight text-gray-500">Piped Linen Blend Blazer</h5>
                    </a>
                    <div className=" flex justify-center">
                        <p>
                            <span className="text-sm font-bold text-gray-900">$179</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex w-5/6 h-full flex-col items-center justify-center bg-white">
                <a className='overflow-hidden cursor-pointer w-full flex items-center justify-center'>
                    <img
                        className="h-full object-cover aspect-square hover:scale-105 transition-all duration-200"
                        src="https://static.vecteezy.com/system/resources/thumbnails/041/486/723/small_2x/ai-generated-colorful-hoodie-with-glasses-fashion-model-pose-photo.jpg"
                        alt="product image" />
                </a>
                <div className="mt-4 pb-5">
                    <a>
                        <h5 className="text-center tracking-tight text-gray-500">Piped Linen Blend Blazer</h5>
                    </a>
                    <div className=" flex justify-center">
                        <p>
                            <span className="text-sm font-bold text-gray-900">$179</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex w-5/6 h-full flex-col items-center justify-center bg-white">
                <a className='overflow-hidden cursor-pointer w-full flex items-center justify-center'>
                    <img
                        className="h-full object-cover aspect-square hover:scale-105 transition-all duration-200"
                        src="https://static.vecteezy.com/system/resources/thumbnails/041/486/723/small_2x/ai-generated-colorful-hoodie-with-glasses-fashion-model-pose-photo.jpg"
                        alt="product image" />
                </a>
                <div className="mt-4 pb-5">
                    <a>
                        <h5 className="text-center tracking-tight text-gray-500">Piped Linen Blend Blazer</h5>
                    </a>
                    <div className=" flex justify-center">
                        <p>
                            <span className="text-sm font-bold text-gray-900">$179</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex w-5/6 h-full flex-col items-center justify-center bg-white">
                <a className='overflow-hidden cursor-pointer w-full flex items-center justify-center'>
                    <img
                        className="h-full object-cover aspect-square hover:scale-105 transition-all duration-200"
                        src="https://static.vecteezy.com/system/resources/thumbnails/041/486/723/small_2x/ai-generated-colorful-hoodie-with-glasses-fashion-model-pose-photo.jpg"
                        alt="product image" />
                </a>
                <div className="mt-4 pb-5">
                    <a>
                        <h5 className="text-center tracking-tight text-gray-500">Piped Linen Blend Blazer</h5>
                    </a>
                    <div className=" flex justify-center">
                        <p>
                            <span className="text-sm font-bold text-gray-900">$179</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex w-5/6 h-full flex-col items-center justify-center bg-white">
                <a className='overflow-hidden cursor-pointer w-full flex items-center justify-center'>
                    <img
                        className="h-full object-cover aspect-square hover:scale-105 transition-all duration-200"
                        src="https://static.vecteezy.com/system/resources/thumbnails/041/486/723/small_2x/ai-generated-colorful-hoodie-with-glasses-fashion-model-pose-photo.jpg"
                        alt="product image" />
                </a>
                <div className="mt-4 pb-5">
                    <a>
                        <h5 className="text-center tracking-tight text-gray-500">Piped Linen Blend Blazer</h5>
                    </a>
                    <div className=" flex justify-center">
                        <p>
                            <span className="text-sm font-bold text-gray-900">$179</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex w-5/6 h-full flex-col items-center justify-center bg-white">
                <a className='overflow-hidden cursor-pointer w-full flex items-center justify-center'>
                    <img
                        className="h-full object-cover aspect-square hover:scale-105 transition-all duration-200"
                        src="https://static.vecteezy.com/system/resources/thumbnails/041/486/723/small_2x/ai-generated-colorful-hoodie-with-glasses-fashion-model-pose-photo.jpg"
                        alt="product image" />
                </a>
                <div className="mt-4 pb-5">
                    <a>
                        <h5 className="text-center tracking-tight text-gray-500">Piped Linen Blend Blazer</h5>
                    </a>
                    <div className=" flex justify-center">
                        <p>
                            <span className="text-sm font-bold text-gray-900">$179</span>
                        </p>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default CardComponent