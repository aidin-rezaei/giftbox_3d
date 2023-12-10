const Header = () => {
    return (
        <section className="w-full h-[calc(100vh_-_45px)] bg-[#ffe7e7] grid grid-cols-2 items-center justify-center">
            <div className="w-full h-full flex justify-center items-center flex-col gap-10">
                <div className=" h-full flex justify-center items-start flex-col gap-10">

                    <h1 className="pacifico text-7xl text-[#ff8a8a]">Register and <br /> get a gift</h1>
                    <p className="amatic text-4xl font-bold">Have a chance in <br /> this lottery by registering on this page</p>
                    <div>
                        <a className="p-2 bg-[#ff8a8a] rounded-md text-white" href="">Learn more</a>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </section>
    );
}

export default Header;