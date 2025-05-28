import React from 'react';
import { FaHeart } from "react-icons/fa";
import { GiLeg } from "react-icons/gi";
import bodyImage from '../../../public/assets/ato.webp';
import Image from "next/legacy/image";
import Organsection from '../molecules/Organsection';
import { organData } from '@/data/healthStatus'

const HumanContain = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='w-full h-full flex justify-center col-span-2 md:col-span-1 items-center p-4 mt-3.5'>
                <div className='relative w-[170px] md:w-[150px] lg:w-[210px]'>
                    <Image src={bodyImage}
                        alt="Human Anatomy"
                        className='w-full object-contain'
                        layout="responsive"
                        priority />

                    <div className='absolute top-[18%] right-[-46%] lg:right-[-32%] bg-blue-600 text-white px-3 py-1 rounded-full shadow-md text-sm md:text-[11px] flex items-center gap-1'>
                        <FaHeart className='text-red-600 text-[12px]' /> Healthy Heart
                    </div>

                    <div className='absolute bottom-[24%] left-[-40%] lg:left-[-20%] md:left-[-32%] bg-teal-500 text-white px-3 py-1 rounded-full shadow-md text-sm md:text-[11px] flex items-center gap-1'>
                        <GiLeg className='text-orange-400 text-[12px]' /> Healthy Leg
                    </div>
                </div>
            </div>
            <div className=' col-span-2 md:col-span-1'>
                <Organsection organdatas={organData} />
            </div>
        </div>
    );
};

export default HumanContain;
