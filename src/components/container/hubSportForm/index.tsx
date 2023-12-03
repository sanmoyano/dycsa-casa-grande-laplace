'use client'

import React from 'react'
import HubspotForm from 'react-hubspot-form'

const HubSpotContactForm = () => {
  return (
    <div className='w-full p-12'>
      <HubspotForm
        formId='a16a98ad-eaf1-482a-8790-d002dcd70887'
        loading={<div>Loading...</div>}
        portalId='5734234'
        onReady={(form:string) => console.log('Form ready!')}
        onSubmit={() => console.log('Submit!')}
      />
    </div>
  )
}

export default HubSpotContactForm
