import React from 'react'

function Contact() {
  const contactInformations= {
    email : 'dhiafamal616@gmail.com',
    phoneNumber: '+21620322353',
    adress : { 
      city : ' Sfax',
      coutry : 'Tunisia',
      street : ' route tunis km 2',
      postalCode : 3069
    }
  }
  return (
    <div>
      <p> <i class="bi bi-envelope"></i> {contactInformations.email} </p>
      <p> <i class="bi bi-telephone"></i> { contactInformations.phoneNumber} </p>
      <p>  <i class="bi bi-geo-alt"></i> { contactInformations.adress.street}; {contactInformations.adress.city}; { contactInformations.adress.coutry} </p>
    </div>
  )
}

export default Contact