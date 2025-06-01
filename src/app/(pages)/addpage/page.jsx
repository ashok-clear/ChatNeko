import React from 'react'
import Image from 'next/image';


const addpage = ({ title, subtitle = [], version = "v-1" }) => {

    return (
        <section className='w-full relative overflow-hidden max-w-[1920px] bg-white mx-auto min-h-[400px] xl:min-h-[632px] lg:min-h-[480px] py-[45px] lg:py-[100px] flex flex-col justify-center'>
            <div className="absolute w-full h-full inset-0 block">
                <Image src="/images/blue-gradient-man-using-silo-browser.png" alt="blue-gradient-man" width={158} height={23} className='w-full max-w-full align-top border-0 h-full ' />
            </div>
            <div className="container">
                <div className='max-w-[712px] ml-0'>
                    <h1 className='font-[500] text-[32px] sm:text-[42px] md:text-[46px] lg:text-[52px] xl:text-[62px] leading-[1.2] tracking-normal mb-[12px] lg:mb-[15px] text-white'>Silo Web Isolation Platform</h1>
                    <h4 className='font-[500] leading-[1.13] tracking-normal text-white max-w-[640px] text-[20px] md:text-[24px] lg:text-[28px]'>Silo shifts your risk to an isolated cloud-native environment that you control. Silo can be configured specifically to meet your most demanding requirements.</h4>
                    <div className='mt-[15px] lg:mt-[32px]'>
                        <a className='px-[30px] py-[10px]  lg:px-[40px] lg:py-[16px] mt-0 text-center inline-block relative outline-none text-[14px] lg:text-[16px] font-bold cursor-pointer transition-all duration-300 ease-in-out bg-[#68be62] border-2 border-transparent rounded-[5px] overflow-hidden align-middle text-white no-underline ' href="">
                            <span className='inline-block text-[14px] lg:text-[16px] leading-[1.25] relative left-0 font-sans text-white uppercase transition-all duration-300 ease-in-out'>GET A DEMO</span>
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default addpage;
