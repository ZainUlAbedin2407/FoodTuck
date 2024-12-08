import React from 'react'
import Image from 'next/image'


const BlogCards = () => {
  return (
    
    <div className='flex gap-6 justify-center flex-wrap'>
        <div className='border border-background md:w-[423px] w-[323px] '>
        <div className=''>
            <Image src={"/Images/Image Placeholder.png"} width={423} height={300} alt=''></Image>
        </div>
        <div className='flex flex-col gap-8 py-[30px] px-[43px]'>
            <div className='flex flex-col gap-4'>
                <p className='font-inter text-base font-normal text-primary'>10 February 2022 </p>
                <p className='text-background font-helvetica text-2xl font-bold'>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-inter text-background'>Learn More</p>
                <div className='flex gap-2'>
                    <Image src={"/Icons/ThumbsUp.png"} alt='' className='w-5 h-5' width={423} height={300}></Image>
                    <Image src={"/Icons/ChatDots.png"} alt='' className='w-5 h-5' width={423} height={300}></Image>
                    <Image src={"/Icons/ShareNetwork.png"} alt='' className='w-5 h-5' width={423} height={300}></Image>
                </div>
            </div>
        </div>
    </div>

    <div className='border border-background md:w-[423px] w-[323px]'>
        <div className=''>
            <Image src={"/Images/Image Placeholder (1).png"} alt='' width={423} height={300}></Image>
        </div>
        <div className='flex flex-col gap-8 py-[30px] px-[43px]'>
            <div className='flex flex-col gap-4'>
                <p className='font-inter text-base font-normal text-primary'>10 February 2022 </p>
                <p className='text-background font-helvetica text-2xl font-bold'>Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-inter text-background'>Learn More</p>
                <div className='flex gap-2'>
                    <Image src={"/Icons/ThumbsUp.png"} alt='' className='w-5 h-5' width={423} height={300}></Image>
                    <Image src={"/Icons/ChatDots.png"} alt='' className='w-5 h-5' width={423} height={300}></Image>
                    <Image src={"/Icons/ShareNetwork.png"} alt='' className='w-5 h-5' width={423} height={300}></Image>
                </div>
            </div>
        </div>
    </div>

    <div className='border border-background md:w-[423px] w-[323px]'>
        <div className=''>
            <Image src={"/Images/Image Placeholder (2).png"} alt='' width={423} height={300}></Image>
        </div>
        <div className='flex flex-col gap-8 py-[30px] px-[43px]'>
            <div className='flex flex-col gap-4'>
                <p className='font-inter text-base font-normal text-primary'>10 February 2022 </p>
                <p className='text-background font-helvetica text-2xl font-bold'>Curabitur rutrum velit ac congue malesuada</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-inter text-background'>Learn More</p>
                <div className='flex gap-2'>
                    <Image src={"/Icons/ThumbsUp.png"} alt='' className='w-5 h-5' width={423} height={300}></Image>
                    <Image src={"/Icons/ChatDots.png"} alt='' className='w-5 h-5' width={423} height={300}></Image>
                    <Image src={"/Icons/ShareNetwork.png"} alt='' className='w-5 h-5' width={423} height={300}></Image>
                </div>
            </div>
        </div>
    </div>
    </div>

    
  )
}

export default BlogCards