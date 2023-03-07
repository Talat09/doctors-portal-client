import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whiting from "../../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades. Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums. Tooth enamel is the outer protective layer of each tooth.",
      icon: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Many options are available for tooth fillings, and all of them have their pros and cons. Types of tooth fillings include gold, silver amalgam (a composite of mercury, silver, and other metals), tooth-colored composite material, porcelain, and a special type of glass.",
      icon: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "The most reliable and effective teeth whitening treatment is professional chairside teeth whitening. Also known as in-office tooth whitening, the treatment takes place at the dentist's office and only takes 90 minutes of your time.",
      icon: whiting,
    },
  ];
  return (
    <div className="mt-16">
      <h2 className="text-secondary text-center font-bold text-xl">
        OUR SERVICES
      </h2>
      <h2 className="text-accent text-center text-4xl">Services We Provide</h2>
      <div className="grid gap-8  mt-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 ">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
