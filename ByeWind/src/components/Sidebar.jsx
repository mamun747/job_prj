import { Link } from "react-router-dom"
import { Account, Blog, Corporate, FolderNotch, Icon1, IdentificationBadge, ShoppingBagOpen, Social } from "../Icons/Icon"
import Collapsible from "./common/Collapsible"
function Sidebar() {
    return (
        <>
        <div className="p-4 border-r dark:border-r-[#ffffff]/15 dark:bg-[#2e2d2d] h-full dark:text-white">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6 rounded-full" src="/Frame.png" alt="" />
              <p className="text-sm font-semibold">ByeWind</p>
            </div>
            <div className="mt-4 flex gap-2 items-center">
              <p className="text-sm text-[#000000]/40 dark:text-[#FFFFFF]/40 px-2 py-1 hover:translate-x-1 transition-all hover:bg-slate-100 rounded-lg hover:text-black cursor-pointer dark:hover:text-black">
                Favorites
              </p>
              <p className="text-sm text-[#000000]/20 dark:text-[#FFFFFF]/20 px-2 py-1 hover:-translate-x-1 transition-all hover:bg-slate-100 rounded-lg cursor-pointer hover:text-black dark:hover:text-black">
                Recently
              </p>
            </div>
            <div className="mt-1">
              <Link to="/Dashboard2">
              <div className="flex py-2 p-2 items-center gap-2 group">
                <span className="size-[6px] rounded-full bg-[#000000]/20 dark:bg-[#ffffff]/20"></span>
                <p className="text-sm group-hover:translate-x-1 transition-all cursor-pointer">
                  Overview
                </p>
              </div>
              </Link>
              <div className="flex py-2 p-2 mt-1 items-center gap-2 group">
                <span className="size-[6px] rounded-full bg-[#000000]/20 dark:bg-[#ffffff]/20"></span>
                <p className="text-sm group-hover:translate-x-1 transition-all cursor-pointer">
                  Projects
                </p>
              </div>
            </div>
            <div className="mt-2 mb-2 pb-3">
              <p className="px-3 py1 font-[400] text-[#000000]/40 dark:text-[#FFFFFF]/40 text-sm">
                Dashboards
              </p>
              <div className="flex flex-col gap-1">
               <Link to="/">
               <div className="py-2 ps-7 flex items-center gap-2 font-[400] text-sm hover:bg-slate-100 transition-all rounded-md group cursor-pointer">
                  <Icon1/>
                  <p className="dark:hover:text-black dark:group-hover:text-black">Overview</p>
                </div>
               </Link>
                <div>
                  <Collapsible url={<ShoppingBagOpen/>} isOpen={false}>
                    eCommerce
                  </Collapsible>
                  <Collapsible url={<FolderNotch/>} isOpen={false}>
                    Projects
                  </Collapsible>
                </div>
              </div>
            </div>
            <div>
              <p className="px-3 py1 font-[400] text-[#000000]/40 text-sm dark:text-[#ffffff]/40">
                Pages
              </p>
              <div>
                <Collapsible url={<IdentificationBadge/>} isOpen={true}>
                  User Profile
                </Collapsible>
              </div>
            </div>
            <div>
              <Collapsible url={<Account/>} isOpen={false}>
                Account
              </Collapsible>
              <Collapsible url={<Corporate/>} isOpen={false}>
                Corporate
              </Collapsible>
              <Collapsible url={<Blog/>} isOpen={false}>
                Blog
              </Collapsible>
              <Collapsible url={<Social/>} isOpen={false}>
                Social
              </Collapsible>
            </div>
          </div>
        </>
    )
}

export default Sidebar