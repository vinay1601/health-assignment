import React from 'react'
import {
    MdDashboard,
    MdHistory,
    MdCalendarToday,
    MdAssignment,
    MdBarChart,
    MdChat,
    MdSupportAgent,
    MdSettings,
} from 'react-icons/md'

const iconMap = {
    MdDashboard: MdDashboard,
    MdHistory: MdHistory,
    MdCalendarToday: MdCalendarToday,
    MdAssignment: MdAssignment,
    MdBarChart: MdBarChart,
    MdChat: MdChat,
    MdSupportAgent: MdSupportAgent,
    MdSettings: MdSettings,
}

const Sidebar = ({ sidebars }) => {

    const settingsSection = sidebars.find(section => section.section === null);
    const otherSections = sidebars.filter(section => section.section !== null);

    return (
        <>
            <div className='hidden md:block px-4 py-4'>
                <h2 className='font-bold text-3xl text-[#00C4CC]'>
                    Health<span className='text-[#273B7A]'>care.</span>
                </h2>
            </div>

            <aside className="flex flex-col justify-between p-4 w-full h-full" style={{ height: '100vh' }}>
                <div>
                    {otherSections.map((section, i) => (
                        <div key={i} className="mb-6">
                            <h2 className="text-xl font-semibold mb-3">{section.section}</h2>
                            <ul>
                                {section.items.map((item, idx) => {
                                    const Icon = iconMap[item.icon];
                                    return (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-3 mb-2 cursor-pointer hover:bg-gray-200 p-2 rounded"
                                        >
                                            {Icon && <Icon size={20} />}
                                            <span>{item.title}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </div>

                {settingsSection && (
                    <div className="mt-auto border-t pt-8">
                        <ul>
                            {settingsSection.items.map((item, idx) => {
                                const Icon = iconMap[item.icon];
                                return (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 p-2 rounded"
                                    >
                                        {Icon && <Icon size={20} />}
                                        <span>{item.title}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </aside>
        </>
    )
}


export default Sidebar
