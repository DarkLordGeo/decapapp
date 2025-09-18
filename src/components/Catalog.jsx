import CardComponent from "./CardComponent"
import BackgroundSection from "./BackgroundSection"

function Catalog() {
    return (
        <>

            <BackgroundSection height='auto' imageUrl={'https://eigensinnig-wien.com/cdn/shop/files/all-black-women-outfits-eigensinnig-wien.webp?v=1738449239'}>
                <div className="relative w-2/3 grid grid-cols-3 grid-rows-2 gap-12 !mt-72 !mb-32">
                    <CardComponent />
                </div>
            </BackgroundSection>

        </>
    )
}

export default Catalog