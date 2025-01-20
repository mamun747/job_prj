import { Link } from "react-router-dom"
import { Account, Blog, Corporate, FolderNotch, Icon1, IdentificationBadge, ShoppingBagOpen, Snowui, Social } from "../../Icons/Icon"
import Collapsible from "../common/Collapsible"

function Dash2Sidebar() {
  return (
    <>
    <div className="p-4 border-r dark:border-r-[#ffffff]/15 dark:bg-[#2e2d2d] h-full dark:text-white">
    <div>
        <div className="pb-6 ps-3">
            <Snowui/>
        </div>
    </div>
        <div>
          <div className="flex flex-col gap-1">
            <Link to="/">
            <div className="py-2 ps-7 flex items-center gap-2 font-[400] text-sm hover:bg-slate-100 transition-all rounded-md group cursor-pointer">
              <Icon1 />
              <p className="dark:hover:text-black dark:group-hover:text-black">
                Overview
              </p>
            </div>
            </Link>
            <div>
              <Collapsible url={<ShoppingBagOpen />} isOpen={false}>
                eCommerce
              </Collapsible>
              <Collapsible url={<FolderNotch />} isOpen={false}>
                Projects
              </Collapsible>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Collapsible url={<IdentificationBadge />} isOpen={true}>
              User Profile
            </Collapsible>
          </div>
        </div>
        <div>
          <Collapsible url={<Account />} isOpen={false}>
            Account
          </Collapsible>
          <Collapsible url={<Corporate />} isOpen={false}>
            Corporate
          </Collapsible>
          <Collapsible url={<Blog />} isOpen={false}>
            Blog
          </Collapsible>
          <Collapsible url={<Social />} isOpen={false}>
            Social
          </Collapsible>
        </div>
        <div className="absolute bottom-6">
        <div className="flex items-center gap-2">
              <img className="w-6 h-6 rounded-full" src="/Frame.png" alt="" />
              <p className="text-sm font-semibold">ByeWind</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Dash2Sidebar