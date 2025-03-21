import SideBarContent from "../components/SideBarContent"


export default function SideBar() {

    return (
        <div className="hidden md:block min-h-full w-1/4 border-r border-gray-300 pt-8 flex flex-col text-base font-semibold">
            <SideBarContent />
        </div>
    )
}