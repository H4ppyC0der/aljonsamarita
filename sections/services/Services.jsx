import React from "react";
import ServiceCard from "@/components/service-card/ServiceCard";
import { servicesData } from "@/data/Services";

const Services = () => {
    return (
        <section
            id="services"
            className="h-fit min-h-screen bg-transparent py-5"
        >
            <h2 className="text-center text-slate-100 font-black text-sm underline">
                services
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2rem] p-10">
                {servicesData.map((service) => (
                    <ServiceCard
                        key={service.name}
                        name={service.name}
                        description={service.description}
                        image={service.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
