import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import EmailIcon from '@mui/icons-material/Email';
function AnyQuestion() {
  return (
    <>
        <div className='flex justify-center align-center w-full mt-20 mb-20'>
            <div>
                <div className='text-[#2B1B12]'>
                    <h1 className='text-4xl font-extrabold'>Do You Have Any Question? </h1>
                    <h1 className='text-4xl font-extrabold py-4'>Get Help From Us</h1>
                </div>

                <div className='flex justify-center align-center gap-20 text-[#2B1B12] py-4'>
                    <div className='flex justify-center align-center gap-4 text-sm'>
                        <VerifiedIcon fontSize='small'/>
                        <p>Chat live with our support team</p>
                    </div>
                    <div className='flex justify-center align-center gap-4 text-sm'>
                        <VerifiedIcon fontSize='small'/>
                        <p>Browse our FAQ</p>
                    </div>
                </div>


                <div className='flex justify-center align-center gap-20 py-4 text-[#2B1B12]'>
                    <div className='flex justify-start align-center gap-2 border border-white px-5 py-2 rounded-lg bg-[#DDC7BB] w-[400px]'>
                        <EmailIcon />
                        <input type="text" placeholder='Enter your email address...' className='outline-none' />
                    </div>
                    <button className='border border-white bg-[#2B1B12] px-6 py-2 text-white rounded-lg'>Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AnyQuestion