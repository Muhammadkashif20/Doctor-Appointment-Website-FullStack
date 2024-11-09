import ProfileForm from "@/components/ApplyForm";

export default  function ApplyDoctor(){
    return(
        <div className="pt-24 mx-4 px-8">
            <h1 className="font-bold text-2xl ">Apply As A Doctor In Our Modern Platform</h1>
            <p className="pt-2 text-gray-500">
            Join our dedicated team of healthcare professionals 
            and make a difference in the lives of patients.
             As a doctor, you'll have the opportunity
              to provide essential medical care,
               work alongside skilled colleagues, 
               and gain invaluable experience in a dynamic environment.
                We are looking for compassionate 
                and skilled individuals who are
                 committed to delivering the highest standards of care.
            </p>
            <ProfileForm/>
        </div>
    )
}