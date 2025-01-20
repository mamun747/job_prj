import Notifications from "./common/Notifications"

function Rightbar() {
  return (
    <div className="col-span-1 border-l dark:border-l-[#FFFFFF]/15 h-full dark:text-white dark:bg-[#2e2d2d]">
    <div className="p-4 bg-[#000000]/10]">
      <div className="py-2 pb-4">
        <p className="text-sm font-normal mb-3">Notifications</p>
        <Notifications subtitle="Just now" url="/Icon3.png">
          You fixed a bug.
        </Notifications>
        <Notifications subtitle="59 minutes ago" url="/Icon4.png">
          New user registered.
        </Notifications>
        <Notifications subtitle="12 hours ago" url="/Icon3.png">
          You fixed a bug.
        </Notifications>
        <Notifications subtitle="Today, 11:59 AM" url="/Icon5.png">
          Andi Lane subscribed to you.
        </Notifications>
      </div>
      <div className="py-2 pb-2">
        <p className="text-sm font-normal mb-3">Activities</p>
        <div className="relative">
          <Notifications subtitle="Just now" url="/Icon6.png">
            Changed the style.
          </Notifications>
          <img
            src="/Devider.png"
            className="invisible xl:visible absolute left-[19px] top-[37px]"
            alt=""
          />
          <Notifications subtitle="59 minutes ago" url="/Icon7.png">
            Released a new version.
          </Notifications>
          <img
            src="/Devider.png"
            className="invisible xl:visible absolute left-[19px] top-[89px]"
            alt=""
          />
          <Notifications subtitle="12 hours ago" url="/Icon8.png">
            Submitted a bug.
          </Notifications>
          <img
            src="/Devider.png"
            className="invisible xl:visible absolute left-[19px] top-[142px]"
            alt=""
          />
          <Notifications subtitle="Today, 11:59 AM" url="/Icon9.png">
            Modified A data in Page X.
          </Notifications>
          <img
            src="/Devider.png"
            className="invisible xl:visible absolute left-[19px] top-[193px]"
            alt=""
          />
          <Notifications subtitle="Feb 2, 2024" url="/Icon10.png">
            Deleted a page in Project X.
          </Notifications>
        </div>
      </div>
      <div className="py-2 pb-2">
        <p className="text-sm font-normal mb-3">Contacts</p>
        <div className="relative">
          <Notifications url="/Icon11.png">Natali Craig</Notifications>
          <Notifications url="/Icon12.png">Drew Cano</Notifications>
          <Notifications url="/Icon13.png">Andi Lane</Notifications>
          <Notifications url="/Icon14.png">Koray Okumus</Notifications>
          <Notifications url="/Icon15.png">Kate Morrison</Notifications>
          <Notifications url="/Icon16.png">Melody Macy</Notifications>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Rightbar