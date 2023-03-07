import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, price, slots } = option;

  return (
    <div className="card shadow-xl">
      <div className="card-body text-center  my-10">
        <h2 className="text-center text-secondary text-2xl font-bold">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white"
            onClick={() => setTreatment(option)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
