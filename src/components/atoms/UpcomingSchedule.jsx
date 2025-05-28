import { upcomingAppointments } from '@/data/upcomingAppointments';
import * as MdIcons from 'react-icons/md';

export default function UpcomingSchedule() {
    return (
        <section className="p-3 bg-white rounded-lg lg:pt-5">
            <h2 className="text-lg lg:text-xl lg:font-bold font-semibold mb-2.5 text-gray-800">The Upcoming Schedule</h2>

            {upcomingAppointments.map((group, index) => (
                <div key={index} className="mb-6">
                    <h4 className="text-md md:text-sm lg:text-lg text-gray-500 font-medium mb-3 lg:mb-4">{group.day}</h4>
                    <div className="flex flex-wrap gap-4">
                        {group.appointments.map((item, idx) => {
                            const IconComponent = MdIcons[item.icon] || null;

                            return (
                                <div
                                    key={idx}
                                    className="bg-indigo-50 text-indigo-800 px-4 py-3 rounded-2xl w-full md:w-48  lg:w-80 flex flex-col justify-between shadow-sm"
                                >
                                    <span className="flex text-2xl md:text-[11px] lg:text-lg justify-between items-center font-bold">{item.title}
                                        {IconComponent && <IconComponent className="text-3xl md:text-lg" />}
                                    </span>
                                    <div className="flex justify-between items-center mt-2 text-lg lg:text-sm md:text-[10px]">
                                        <span>{item.time}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </section>
    );
}
