import React from 'react'
import SectionHeading from '../atoms/SectionHeading'
import Humancontain from './Humancontain'
import { Chart } from '../atoms/Chart'
import CalendarView from '../atoms/CalendarView'
import UpcomingSchedule from '../atoms/UpcomingSchedule'

const DashboardMainContent = () => {
    return (
        <>
            <div className='grid grid-cols-2'>
                <div className='col-span-2 lg:col-span-1 w-full h-full'>
                    <SectionHeading
                        title="Dashboard"
                        link
                        linkHref="/"
                        linkLabel="This Week"
                    />
                    <div className='py-5 md:py-2'>
                        <Humancontain />
                    </div>
                    <div className='5xl:mt-16'>
                        <Chart />
                    </div>
                </div>
                <div className='col-span-2 lg:col-span-1 w-full h-full'>
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
