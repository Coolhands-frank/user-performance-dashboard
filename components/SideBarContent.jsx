"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faFile, faAward } from "@fortawesome/free-solid-svg-icons";

export default function SideBarContent() {
    return (
        <>
            <div className="p-4 mr-4 flex items-center">
                <FontAwesomeIcon icon={faChartBar} size="sm" className="text-black w-6 h-6 mr-2" />
                <h3>Dashboard</h3>
            </div>

            <div className="p-4 mr-4 text-blue-800 flex items-center bg-gray-200 rounded-r-full">
                <FontAwesomeIcon icon={faAward} className="w-6 h-6 mr-2" />
                <h3>Skill Test</h3>
            </div>

            <div className="p-4 mr-4 flex items-center">
                <FontAwesomeIcon icon={faFile} className="w-6 h-6 text-black mr-2" />
                <h3>Internship</h3>
            </div>
        </>
    )
}