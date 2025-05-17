import { useState } from "react"
import { assets } from "../../assets/assets"
import "./sidebar.css"
function Sidebar() {
    const [extended, setExtended] = useState(false)
    return (
        <div className="sidebar min-h-[100vh] inline-flex flex-col justify-between bg-white p-[25px 16px] ">
            <div className="top">
                <img onClick={() => setExtended((prev) => !prev)} src={assets.menu_icon} className="menu w-[20px]" alt="" />
                <div className="new-chat mt-12 inline-flex items-center gap-2.5 p-[10px 15px] bg-del rounded-2xl font-medium text-grey-400">
                    <img className="w-[20px]" src={assets.plus_icon} alt="" />
                    {extended ? <p>new chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img className="w-[20px]" src={assets.menu_icon} alt="" />
                            <p>What is react ...</p>
                        </div>
                    </div>
                    : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img className="w-[20px]" src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className="w-[20px]" src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className="w-[20px]" src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
