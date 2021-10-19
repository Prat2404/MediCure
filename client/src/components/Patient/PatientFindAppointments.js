import React from 'react';

const PatientFindAppointments = (props) => {
  const { doctorId, name, degree, specialization, location } =
    (props.location && props.location.state) || {};
  return (
    <div>
      {doctorId}
      {name}
    </div>
  );
};

export default PatientFindAppointments;
