import React from 'react'
import { GiLungs, GiTooth, GiBoneKnife } from "react-icons/gi";

const iconMap = {
    Lungs: <GiLungs className="text-2xl text-red-500" />,
    Teeth: <GiTooth className="text-2xl text-gray-500" />,
    Bone: <GiBoneKnife className="text-2xl text-orange-400" />,
};

const progressWidth = {
    Critical: "30%",
    Moderate: "60%",
    Good: "90%",
};

const Organsection = ({ organdatas }) => {
    return (
        <>
            <div className="p-4 space-y-4 max-w-[380px] md:max-w-[210px] mx-auto">
                {organdatas.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#ebf3fc] rounded-xl p-4 shadow-md space-y-2"
                    >
                        <div className='flex justify-start'>
                            {iconMap[item.organ]}
                            <span className="text-md font-bold text-gray-800 px-3">{item.organ}</span>
                        </div>
                        <div className="text-sm text-gray-400">Date: {item.date}</div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div
                                className="h-full rounded-full"
                                style={{
                                    width: progressWidth[item.status],
                                    backgroundColor: item.color,
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Organsection
