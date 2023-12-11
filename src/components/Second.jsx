const Second = () => {
    const handelLearnMore = () => {
        const el = document.querySelector('#third')
        window.scrollTo({
            top: el?.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <section className=" w-full h-screen bg-white grid grid-cols-2 items-center justify-center" id="second">
            <div>
            </div>
            <div className="w-full h-full flex justify-center items-center flex-col gap-10 opacity-0" id="c-second">
                <div className=" h-full flex justify-center items-start flex-col gap-10">

                    <h1 className="pacifico text-7xl text-[#c96894]">50 gifts <br /> worth $50,000</h1>
                    <p className="amatic text-4xl font-bold ">Maybe this is your lucky person</p>
                    <div>
                        <p className="p-2 bg-[#c96894] rounded-md text-white" onClick={handelLearnMore}>Learn more</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Second;