import Image from "next/image";

const services = [
  {
    category: "ART",
    image: "/images/services section logo.png",
    services: ["FASHION", "MUSIC", "CINEMA"],
  },
  { category: "BUSINESS", services: ["FASHION", "MUSIC", "CINEMA"] },
];

const ServiceSection = () => {
  return (
    <section className="bg-black text-white md:py-[250px] py-[200px] md:px-[152px] px-4">
      <div className="mx-auto">
        <h2
          className="text-white font-semibold w-full mb-20 md:text-[100px] text-[80px]"
          style={{ lineHeight: "76px" }}
        >
          <span className="hidden md:inline">
            PHOTOGRAPHER BASED <br /> IN OSAKA — TOKYO
          </span>
          <span className="md:hidden">
            PHOTOGR
            <br />
            APHER <br /> BASED IN <br />
            OSAKA —<br />
            TOKYO
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index}>
              <div className="flex items-center space-x-3">
                <div className="flex items-start">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.category}
                      width={117}
                      height={0}
                      className="rounded-md h-auto md:w-[117px] w-[93px]"
                      unoptimized
                    />
                  )}
                  <h2 className="text-lg font-semibold md:text-[100px] text-[80px] md:leading-[98px] leading-[76px]">
                    {service.category}
                  </h2>
                </div>
              </div>
              <div className="mt-3 md:space-y-10 space-y-[8px]">
                {service.services.map((item, i) => (
                  <h2 className="text-gray-400 text-lg font-semibold md:text-[100px] text-[80px] md:leading-[98px] leading-[76px]">
                    {item}
                  </h2>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
