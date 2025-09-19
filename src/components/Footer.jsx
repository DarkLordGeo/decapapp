

function Footer() {

    return (
        <>
            <footer className='w-full !py-10 bg-black flex text-center text-white items-center justify-center '>
                <div className="flex flex-col">
                    <div>
                        <h1 className='text-2xl !mb-6 lg:!mb-2'>Garter</h1>
                    </div>

                    <ul className='flex flex-col md:flex-row items-center w-full !pb-12 justify-center gap-5'>
                        <div className='flex gap-6 md:flex-row flex-col'>
                            <li className="">
                                მთავარი
                            </li>
                            <li className="">
                                კატალოგი
                            </li>
                            <li className="">
                                ჩვენ შესახებ
                            </li>
                        </div>
                        <div className='flex gap-6 md:flex-row flex-col'>
                            <li className="">
                                კონტაქტი
                            </li>
                            <li className="">
                                FAQ
                            </li>
                            <li className="">
                                სურვილების სია
                            </li>
                        </div>
                    </ul>

                    <div>
                        <p className='text-[16px]'>All rights reserved. Garter 2025</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer