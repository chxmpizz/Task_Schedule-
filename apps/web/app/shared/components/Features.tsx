import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Features = () => {
    return (
        <div className="px-60">
            <div className="rounded-2xl border border-gray-300"></div>
            <div className="mt-10 flex flex-col items-center justify-center gap-5">
                <h1 className="text-center text-5xl font-semibold">
                    Everything You Need
                </h1>
                <p className="text-xl text-gray-400">
                    Simple, powerful features to keep you organized
                </p>
            </div>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <FontAwesomeIcon icon={faChartArea} />
                        <h1>Dashboard</h1>
                        <p>
                            Get a comprehensive overview of your tasks and
                            productivity metrics at a glance.
                        </p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCircleCheck} />
                        <h1>Task Management</h1>
                        <p>
                            Create, organize, and prioritize tasks with an
                            intuitive interface.
                        </p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendar} />
                        <h1>Schedule Calendar</h1>
                        <p>
                            Plan your days with a beautiful calendar and daily
                            schedule view.
                        </p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                        <h1>Profile & Settings</h1>
                        <p>
                            Customize your experience with personalized settings
                            and preferences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
