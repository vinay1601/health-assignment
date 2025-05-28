import { calendarData } from '@/data/calendarAppointments';
import { FaTooth } from 'react-icons/fa';
import { FiActivity } from 'react-icons/fi';

const CalendarView = () => {
    const getAppointmentIcon = (type) => {
        switch (type) {
            case 'dentist':
                return <FaTooth className="text-indigo-600" />;
            case 'physiotherapy':
                return <FiActivity className="text-indigo-600" />;
            default:
                return null;
        }
    };

    return (
        <section className="calendar-section p-4">
            <h3 className="text-xl font-semibold mb-4">{calendarData.month}</h3>
            <div className="grid grid-cols-7 gap-4 text-center">
                {calendarData.slots.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center"
                    >
                        <div className="font-medium text-sm text-gray-600 mb-2">
                            {item.label}
                        </div>
                        {item.times.length === 0 ? (
                            <span className="text-gray-400 text-sm">—</span>
                        ) : (
                            item.times.map((time, i) => {
                                const isHighlighted = item.label === "Tue 26" && time === "09:00";
                                return (
                                    <div
                                        key={i}
                                        className={`${isHighlighted
                                            ? 'bg-indigo-300  text-blue-900'
                                            : ' text-indigo-700'
                                            } text-xs font-medium px-2 py-1 rounded-full my-1`}
                                    >
                                        {time}
                                    </div>
                                );
                            })
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-4 5xl:mt-8">
                <h4 className="text-lg 5xl:text-xl font-semibold 5xl:font-bold mb-2.5 5xl:mb-5">Appointments</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    {calendarData.appointments.map((appointment, index) => (
                        <div
                            key={index}
                            className="bg-indigo-50 p-4 5xl:p-6 rounded-lg shadow-md"
                        >
                            <div >
                                <span className='flex items-center gap-2 text-indigo-800 font-bold text-base md:text-[13px] 5xl:text-lg mb-1'>{getAppointmentIcon(appointment.type)}
                                    {appointment.title}</span>
                            </div>
                            <div className="text-[10px] 5xl:text-lg text-gray-600 mb-1">
                                {appointment.description}
                            </div>
                            <div className="text-[10px] 5xl:text-sm text-gray-500">
                                {new Date(appointment.start).toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}{" "}
                                -{" "}
                                {new Date(appointment.end).toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CalendarView;
