import SalesImg from "/images/new-arrival.png";

const Sales = () => {
    return (
        <section id="sales">
            <div className="section-container query-container pb-10">
                <div className="flex flex-col items-start md:items-center md:flex-row justify-evenly gap-3">
                    <div className="flex flex-col gap-4 md:max-w-[60%]">
                        <div className="mb-2">
                            <p className="section-subtitle">Announcements</p>
                            <h1 className="section-header">Upcoming Sales</h1>
                        </div>
                        <p className="section-content indent-2 md:max-w-[90%]">
                            Gear up for our highly anticipated customer appreciation sales
                            event featuring exclusive deals on top-tier tech gadgets.
                        </p>
                        <p className="section-content indent-2 md:max-w-[90%]">
                            Elevate your tech lifestyle effortlessly. Trust in our commitment
                            to quality and service excellence. Shop now and let us redefine
                            your tech experience.
                        </p>
                    </div>
                    <div className="md:max-w-[40%] duration-500 ease-in-out hover:scale-110">
                        <img className="rounded-xl" src={SalesImg} alt="sales-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sales;
