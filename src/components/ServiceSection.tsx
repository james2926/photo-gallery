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
    <section className="bg-black text-white" style={{ padding: "250px 152px" }}>
      <div className="mx-auto">
        <h2
          className="text-white font-semibold w-full mb-20"
          style={{ fontSize: "100px", lineHeight: "1" }}
        >
          PHOTOGRAPHER BASED <br /> IN OSAKA — TOKYO
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
                      className="rounded-md h-auto"
                      unoptimized
                    />
                  )}
                  <h2
                    className="text-lg font-semibold"
                    style={{ fontSize: "100px", lineHeight: "1" }}
                  >
                    {service.category}
                  </h2>
                </div>
              </div>
              <div className="mt-3 space-y-10">
                {service.services.map((item, i) => (
                  <h2
                    className="text-gray-400 text-lg font-semibold"
                    style={{ fontSize: "100px", lineHeight: "0.5" }}
                  >
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
