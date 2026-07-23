import AppointmentForm from "./AppointmentForm";
import Reveal from "./Reveal";

export default function AppointmentSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-light">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark mb-4">
            Make An Appointment
          </h2>
          <p className="text-slate-600 max-w-md">
            Fill in the form and our team will get back to you to confirm your booking and
            answer any questions about our cleaning services.
          </p>
        </Reveal>
        <Reveal direction="right" delay={0.1}>
          <AppointmentForm />
        </Reveal>
      </div>
    </section>
  );
}
