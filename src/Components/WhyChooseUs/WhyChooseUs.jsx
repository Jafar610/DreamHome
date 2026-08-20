import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HandshakeIcon from '@mui/icons-material/Handshake';
function WhyChooseUs() {
  return (
    <>
        <div className='w-full mt-30'>
            <div className='flex justify-center align-center mx-20'>
                <div className='text-[#2A1B12]'>
                    <h1 className='text-5xl font-extrabold py-2 text-center'>Why Choose Us</h1>
                    <p className='py-2 text-center'>Elevating Your Home Buying Experience with Expertise, Integrity,<br /> and Unmatched Personalized Service</p>
                    <div className='flex justify-center align-center gap-6 py-6'>
                        <div className='border border-[#DDC7BB] rounded-lg bg-[#DDC7BB] px-4 py-2'>
                            <div className='bg-white p-2 w-[50px] rounded-lg my-2'>
                                <LocationOnIcon fontSize='large'/>
                            </div>

                            <h2 className='text-lg font-bold py-2'>Expert Guidance</h2>
                            <p>Benefit from our team's seasoned expertise for a smooth buying experience</p>
                        </div>

                        <div className='border border-[#DDC7BB] rounded-lg bg-[#DDC7BB] px-4 py-2'>
                            <div className='bg-white p-2 w-[50px] rounded-lg my-2'>
                                <PersonIcon fontSize='large'/>
                            </div>
                            
                            <h2 className='text-lg font-bold py-2'>Personalized Service</h2>
                            <p>Our services adapt to your unique needs, making your journey stress-free</p>
                        </div>

                        <div className='border border-[#DDC7BB] rounded-lg bg-[#DDC7BB] px-4 py-2'>
                            <div className='bg-white p-2 w-[50px] rounded-lg my-2'>
                                <AssignmentIcon fontSize='large'/>
                            </div>
                            
                            <h2 className='text-lg font-bold py-2'>Transparent Process</h2>
                            <p>Stay informed with our clear and honest approach to buying your home</p>
                        </div>

                        <div className='border border-[#DDC7BB] rounded-lg bg-[#DDC7BB] px-4 py-2'>
                            <div className='bg-white p-2 w-[50px] rounded-lg my-2'>
                                <HandshakeIcon fontSize='large'/>
                            </div>
                            
                            <h2 className='text-lg font-bold py-2'>Exceptional Support</h2>
                            <p>Benefit from our team's seasoned expertise for a smooth buying experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhyChooseUs