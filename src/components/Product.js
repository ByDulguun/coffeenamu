import { HearthCheckBox } from "@/assets/icon/HearthCheckBox";

export const Product = () => {
  return (
    <div className="w-full h-full my-5">
      <div className="mx-5 text-center">
        <h1 className="md:font-semibold md:text-3xl">Онцлох бүтээгдхүүн</h1>
        <p className="md:text-sm md:font-medium">
          Энэ сарын онцлох, дуусахаас өмнө захиалаарай!
        </p>
      </div>
      <div className="mx-5 my-5 grid grid-cols-2 gap-2 md:grid md:grid-cols-4">
        <div className="relative">
          <img src="/ProductAffogato.png" className="rounded-xl relative " />
          <p className="text-center md:font-semibold">Affogato</p>
          <div className="absolute z-10 top-4 right-4 md:right-20">
            <HearthCheckBox />
          </div>
        </div>

        <div className="relative">
          <img src="/ProductGreenTea.png" className="rounded-xl" />
          <p className="text-center md:font-semibold">Green Tea Smoothie</p>
          <div className="absolute z-10 top-4 right-4 md:right-20">
            <HearthCheckBox />
          </div>
        </div>

        <div className="relative">
          <img src="ProductGrapeFruit.png" className="rounded-xl" />
          <p className="text-center md:font-semibold">Grape Fruit Tea</p>
          <div className="absolute z-10 top-4 right-4 md:right-20">
            <HearthCheckBox />
          </div>
        </div>

        <div className="relative">
          <img src="ProductMocha.png" className="rounded-xl" />
          <p className="text-center md:text-center md:font-semibold"> Iced Mocha </p>
          <div className="absolute z-10 top-4 right-4 md:right-20">
            <HearthCheckBox />
          </div>
        </div>
      </div>
    </div>
  );
};
