import { FooterRightIcon } from "@/assets/icon/FooterRightIcon";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-[#F8F1E7]">
      <div className="px-5 py-7 bg-[#F8F1E7] flex">
        <img
          src="/FooterLogo.jpg"
          className="w-[62px] h-[62px] bg-transparent"
        />
        <div className="mt-4">
          <h1 className="text-base font-bold h-fit">coffee namu</h1>
          <h1 className="relative bottom-2">mongolia</h1>
        </div>
      </div>
      <p className="px-5">Утас: (976)7772-4422 coffeenamumongolia@gmail.com</p>
      <div className="flex gap-6 px-5 py-8">
        <img src="/FooterFacebookIcon.jpg" className="w-5 h-5 " />
        <img src="/FooterInstagramIcon.jpg" className="w-5 h-5 " />
        <img src="/FooterYoutubeIcon.jpg" className="w-5 h-5 " />
        <img src="/FooterSearchIcon.jpg" className="w-5 h-5" />
      </div>

      <div className="px-5 flex gap-16 py-5">
        <div className="grid gap-3">
          <h1 className="font-semibold">Бидний тухай</h1>
          <p className="flex align-baseline items-baseline gap-2">
            <FooterRightIcon />
            Байгууллага
          </p>
          <p className="flex align-baseline items-baseline gap-2 ">
            <FooterRightIcon />
            Бүтээгдхүүн
          </p>
        </div>
        <div className="grid gap-3">
          <h1 className="font-semibold">Захиалга</h1>
          <p className="flex align-baseline items-baseline gap-2">
            <FooterRightIcon /> Аппликэйшн
          </p>
          <p className="flex align-baseline items-baseline gap-2 ">
            <FooterRightIcon />
            Урамшуулал
          </p>
          <p className="flex align-baseline items-baseline gap-2">
            <FooterRightIcon />
            Салбарууд
          </p>
        </div>
      </div>
    </div>
  );
};
