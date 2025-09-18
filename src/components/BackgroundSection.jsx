
function BackgroundSection({ imageUrl, children, height = 'h-screen' }) {
    return (
        <>
            <div className={`relative ${height} w-full flex items-center justify-center `}>
                {/* Background image */}
                <img
                    src={imageUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="background"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

                {/* children */}
                {children}
            </div>
        </>
    )
}

export default BackgroundSection