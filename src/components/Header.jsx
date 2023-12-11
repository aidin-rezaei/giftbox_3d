const Header = () => {
    const handelLearnMore = () => {
        const el = document.querySelector('#second')
        window.scrollTo({
            top: el?.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <section className="w-full h-[calc(100vh_-_45px)] bg-[#ffe4f2] grid grid-cols-2 items-center justify-center" >
            <div className="w-full h-full flex justify-center items-center flex-col gap-10" id="header">
                <div className=" h-full flex justify-center items-start flex-col gap-10">

                    <h1 className="pacifico text-7xl text-[#c96894]">Register and <br /> get a gift</h1>
                    <p className="amatic text-4xl font-bold">Have a chance in <br /> this lottery by registering on this page</p>
                    <div>
                        <p className="p-2 bg-[#c96894] rounded-md text-white" onClick={handelLearnMore}>Learn more</p>
                    </div>
                </div>
            </div>
            <div>
                <img className="mix-blend-multiply -scale-x-100" src="car.webp" alt="" />
            </div>
        </section>
    );
}

export default Header;