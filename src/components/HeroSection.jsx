import Image from 'next/image'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font  ">
  <div className="container mx-auto flex pl-14  py-24 md:flex-row flex-col items-center justify-between ">
    <div className="lg:flex-grow md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-6  font-medium text-gray-900 ">
  Your Health, Your Priority
  <br className="hidden lg:inline-block" />
  Book Your
  <br className="hidden lg:inline-block" />
   Doctor Appointment
</h1>
<p className="mb-8 leading-relaxed">
  Experience a seamless way to schedule your doctor visits. Whether for routine
  check-ups or specialized care, ensure your health is in safe hands. Our
  dedicated professionals are here to provide personalized, top-quality care
  for all your medical needs.
</p>

      <div className="flex justify-center gap-4">
      <Button varient={'outline'}>Button</Button>
      <Button>Apply As a Doctor</Button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 px-14 ">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        width={400}
        height={400}
        src={'https://images.unsplash.com/photo-1605684954998-685c79d6a018?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww'}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default HeroSection
