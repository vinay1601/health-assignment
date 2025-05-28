import React from 'react'
import SectionHeading from '../atoms/SectionHeading'
import Humancontain from './Humancontain'
import { Chart } from '../atoms/Chart'
import CalendarView from '../atoms/CalendarView'
import UpcomingSchedule from '../atoms/UpcomingSchedule'

const DashboardMainContent = () => {
    return (
        <>
            <div className='border-2 border-indigo-700 grid grid-cols-2 h-fit'>
                <div className='col-span-2 md:col-span-1 w-full h-full'>
                    <SectionHeading
                        title="Dashboard"
                        link
                        linkHref="/"
                        linkLabel="This Week"
                    />
                    <div className='py-5 md:py-2'>
                        <Humancontain />
                    </div>
                    <div>
                        <Chart />
                    </div>
                </div>
                <div className='col-span-2 md:col-span-1 w-full h-full'>
                    <div>
                        <CalendarView />
                        <UpcomingSchedule />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardMainContent
