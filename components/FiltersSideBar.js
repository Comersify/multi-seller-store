import { useState } from "react";
import { StarsInput } from "./Stars";
import { ToggleSideBarButton } from "./Button";

const SubCategoryItem = ({ open, name, id }) => {
  const [checked, setChecked] = useState(false && open);
  return (
    <li
      onClick={() => setChecked(!checked)}
      className={`py-1 mt-2 pl-2 cursor-pointer rounded-md ${
        checked && open ? "bg-gray-200" : "hover:bg-gray-200"
      }`}
    >
      <input
        checked={checked && open}
        onClick={() => setChecked(!checked && open)}
        type="checkbox"
        className="mr-2 w-4 h-4"
      />
      <a href="#">Subcategory 1.1</a>
    </li>
  );
};

const CategoryItem = ({ name, id, subCategories }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="p-3">
      <a
        onClick={() => setOpen(!open)}
        href="#"
        className={`font-bold pl-2 py-1 rounded-md ${
          open ? "bg-gray-200" : "hover:bg-gray-200"
        } flex items-center justify-start`}
      >
        <input checked={open} type="checkbox" className="mr-2 w-4 h-4" />
        Category 1
      </a>
      <ul className={`list-none animation pl-5 ${!open && "hidden"}`}>
        <SubCategoryItem open={open} />
        <SubCategoryItem open={open} />
        <SubCategoryItem open={open} />
        <SubCategoryItem open={open} />
        <SubCategoryItem open={open} />
        <SubCategoryItem open={open} />
      </ul>
    </li>
  );
};

const RatingFilter = () => {
  return (
    <li className="block px-3">
      <p className="pr-2 font-bold mb-2">Ratings:</p>
      <StarsInput />
    </li>
  );
};

const PriceFilter = () => {
  return (
    <li className="block p-3">
      <label for="price" className="font-bold">
        Price:
      </label>
      <div className="block">
        <div className="flex items-center justify-start">
          <label for="from" className="pr-1">
            From:{" "}
          </label>
          <input
            type="text"
            className="p-1 ml-1 border w-full border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-start items-center mt-2">
          <label for="from" className="px-2">
            To:{" "}
          </label>
          <input
            type="text"
            className="p-1 ml-1 w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </li>
  );
};

export const FiltersSideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        id="paper"
        className={`${
          !open && "hidden"
        } absolute z-20 w-[99vw] h-screen bg-gray-900 opacity-40`}
      ></div>
      <div
        id="sidebar"
        className={`flex animation h-screen ${
          !open && "hidden-side"
        } border absolute z-30 border-r-slate-300 bg-gray-50 flex-col w-64`}
      >
        <ToggleSideBarButton open={open} setOpen={setOpen} />
        <div className="overflow-y-auto text-gray-900">
          <div className="p-2">
            <ul className="list-none p-0 m-0">
              <PriceFilter />
              <RatingFilter />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

{
}
