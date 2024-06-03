import { servicesList } from "../constants";
import { Button } from "../components";

const Services = () => {
  return (
    <section id="services" className="bg-[hsla(202,100%,35%,0.3)] p-4">
      <div className="section-container query-container pb-10">
        <div>
          <p className="section-subtitle">Services Offered</p>
          <h1 className="section-header mb-4">
            Building Trust in the Digital Market
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesList.map((serve) => (
            <div key={serve.id} className="border p-2 text-center">
              <div className="">
                <h1>
                  <serve.icon />
                  {serve.title}
                </h1>
                <p>{serve.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="my-10 text-center">
          <Button link="/shop" type="services">
            Let's Get It Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
