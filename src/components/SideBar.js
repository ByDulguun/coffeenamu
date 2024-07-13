import { SideBarBonus } from "@/assets/icon/SideBarBonus";
import { SideBarMenu } from "@/assets/icon/SideBarMenu";
import { SideBarOrder } from "@/assets/icon/SideBarOrder";

export const SideBar = () => {
  return (
    <div className="sidebar w-full h-[600px]  m-auto">
      <div className="py-6 px-4 grid gap-8">
        <ul className="shadow-lg grid gap-8 py-4 ">
          <li className="flex px-5 py-1 gap-2">
            <SideBarMenu />
            Меню
          </li>
          <li className="flex px-5 py-1 gap-2">
            <SideBarBonus />
            Бонус
          </li>
          <li className="flex px-5 py-1 gap-2">
            <SideBarOrder />
            Захиалга
          </li>
        </ul>
        <div className="flex gap-8">
          <button className="border rounded-lg border-[#AA714A] w-36 ">
            <p className="px-4 py-1 text-[#AA714A]">Нэвтрэх</p>
          </button>
          <button className=" rounded-lg bg-[#AA714A] w-36">
            <p className="px-4 py-1 text-white">Бүртгүүлэх</p>
          </button>
        </div>
      </div>
    </div>
  );
};
