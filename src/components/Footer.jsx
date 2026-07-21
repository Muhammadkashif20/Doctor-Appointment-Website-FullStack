import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              Doctor<span className="text-gray-500">.</span>
              <span className="font-light">Appointment</span>
            </h2>

            <p className="mt-4 text-sm text-gray-500 leading-6">
              Book appointments with trusted healthcare professionals and
              manage your medical visits with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>

              <Link
                href="/SeeDoctors"
                className="hover:text-black transition-colors"
              >
                Doctors
              </Link>

              <Link
                href="/Appointment"
                className="hover:text-black transition-colors"
              >
                Appointments
              </Link>

              <Link
                href="/SeeDoctors/ApplyDoctor"
                className="hover:text-black transition-colors"
              >
                Apply as Doctor
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contact</h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">
              <p>support@doctorappointment.com</p>
              <p>+92 300 1234567</p>
              <p>Karachi, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © 2026 Doctor Appointment System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;