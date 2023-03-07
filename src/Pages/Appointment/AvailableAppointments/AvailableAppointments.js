import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointment, setAppointment] = useState([]);
  const date = format(selectedDate, "PP");
  const [treatment, setTreatment] = useState(null);
  const {
    data: appointment = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-pearl-three.vercel.app/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  // useEffect(() => {
  //   fetch("https://doctors-portal-server-pearl-three.vercel.app/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAppointment(data);
  //     });
  // }, []);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="my-16">
      <p className="text-secondary text-2xl text-center font-bold">
        Available Services on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointment.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
