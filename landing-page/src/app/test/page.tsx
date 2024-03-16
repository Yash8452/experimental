import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'

const page = () => {
    return (
        <>
            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    <div className='flex bg-black justify-center items-center item h-[100vh] center'>
                        <h1 className='text-4xl text-white'>WELCOME</h1>
                    </div>
                    <div className='flex justify-center items-center h-[100vh] center'>
                        <h1 className='text-4xl'>WELCOME</h1>
                    </div>
                    <div className='flex bg-black justify-center items-center h-[100vh] center'>
                        <h1 className='text-4xl text-white'>WELCOME</h1>
                    </div>
                </div>
            </TracingBeam>
        </>
    )
}

export default page