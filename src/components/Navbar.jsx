import { Link } from "react-router"

function Navbar() {

    // const navigate = useNavigate()

    return (
        <>
            <nav className="flex flex-row items-center justify-center gap-4 z-11 text-xl w-2/3 rounded-xl absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ul className="flex flex-row justify-between py-12 w-full bg-gray-300/10 text-white rounded-2xl">
                    <Link to={'/'}>
                        <li className="font-bold !py-5 !w-full text-center border-r-2  hover:bg-white/50  transition-all duration-95 cursor-pointer">
                            მთავარი
                        </li>
                    </Link>
                    <Link to={"/catalog"}>
                        <li className="font-bold !py-5 !w-full text-center border-r-2  hover:bg-white/50 transition-all duration-95 cursor-pointer">
                            კატალოგი
                        </li>
                    </Link>
                    <li className="font-bold !py-5 !w-full text-center border-r-2  hover:bg-white/50 transition-all duration-95 cursor-pointer">
                        ჩვენ შესახებ
                    </li>
                    <li className="font-bold !py-5 !w-full text-center border-r-2  hover:bg-white/50 transition-all duration-95 cursor-pointer">
                        კონტაქტი
                    </li>
                    <li className="font-bold !py-5 !w-full text-center border-r-2 hover:bg-white/50 transition-all duration-95 cursor-pointer">
                        FAQ
                    </li>
                    <li className="font-bold !py-5 !w-full text-center  hover:bg-white/50 transition-all duration-95 cursor-pointer">
                        სურვილების სია
                    </li>
                </ul>
            </nav>
        </>
    )

}

export default Navbar