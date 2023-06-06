import { useState, useEffect, useRef } from "react";
import { StarsInput } from "@/components/Stars";
import { ToggleSideBarButton } from "@/components/shared/Buttons";
import { useGetCategories } from "@/api/category";

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
        onChange={() => setChecked(!checked && open)}
        type="checkbox"
        className="mr-2 w-4 h-4"
      />
      <a href="#">Subcategory 1.1</a>
    </li>
  );
};

const CategoryItem = ({ setFilter, filter, name, id, subCategories }) => {
  const [open, setOpen] = useState(false);
  const handleOnClick = () => {
    let categories;
    setOpen(!open);
    if (!open) {
      filter.categories.push(id);
      categories = filter.categories;
    } else {
      categories = filter?.categories?.filter((catID) => catID != id);
    }
    setFilter((filter) => ({
      ...filter,
      categories: categories,
    }));
  };
  return (
    <li className="p-2">
      <div
        onClick={() => handleOnClick()}
        className={`font-bold pl-2 py-1 rounded-md ${
          open ? "bg-gray-200" : "hover:bg-gray-200"
        } flex items-center justify-start cursor-pointer`}
      >
        <input
          onChange={(e) => handleOnClick(e)}
          checked={open}
          type="checkbox"
          className="mr-2 w-4 h-4"
        />
        {name}
      </div>
    </li>
  );
};

const RatingFilter = ({ filter, setFilter }) => {
  return (
    <li className="block px-3 mb-3">
      <p className="pr-2 font-bold mb-2">Ratings:</p>
      <StarsInput
        stars={filter.stars}
        setStars={(num) => setFilter({ ...filter, stars: num })}
      />
    </li>
  );
};

const PriceFilter = ({ setFilter, filter }) => {
  const handleOnChange = (e) => {
    if (parseInt(e.target.value) || e.target.value == "") {
      e.target.className = e.target.className.replace(
        "focus:border-red-500 focus:ring focus:ring-red-200",
        "focus:border-blue-500 focus:ring focus:ring-blue-200"
      );
      setFilter((filter) => ({
        ...filter,
        [e.target.id]: parseInt(e.target.value) || "",
      }));
    } else {
      e.target.className = e.target.className.replace(
        "focus:border-blue-500 focus:ring focus:ring-blue-200",
        "focus:border-red-500 focus:ring focus:ring-red-200"
      );
    }
  };
  return (
    <li className="block p-3">
      <label htmlFor="price" className="font-bold">
        Price:
      </label>
      <div className="block">
        <div className="flex items-center justify-start">
          <label htmlFor="from" className=" w-12">
            From:
          </label>
          <input
            id="from"
            type="text"
            value={filter.from}
            onChange={(e) => handleOnChange(e)}
            className="p-1 ml-1 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 appearance-none border w-full border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-start items-center mt-2">
          <label htmlFor="from" className="px-2 w-12">
            To:
          </label>
          <input
            id="to"
            type="text"
            value={filter.to}
            onChange={(e) => handleOnChange(e)}
            className="p-1 ml-1 w-full border focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 appearance-none border-gray-300 rounded-md"
          />
        </div>
      </div>
    </li>
  );
};

export const FiltersSideBar = ({ setFilter, filter }) => {
  const [open, setOpen] = useState(false);
  const sideBarRef = useRef(null);
  const { categories } = useGetCategories({});

  useEffect(() => {
    function handleClickOutside(event) {
      if (sideBarRef.current && sideBarRef.current.contains(event.target)) {
        setOpen(false);
        document.removeEventListener("click", () => "");
      }
    }

    document.addEventListener("click", (e) => handleClickOutside(e));
  }, []);
  return (
    <>
      <div
        id="paper"
        ref={sideBarRef}
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
        <div className="hover:overflow-y-auto overflow-y-hidden  text-gray-900">
          <div className="p-2">
            <ul className="list-none p-0 m-0">
              <PriceFilter filter={filter} setFilter={setFilter} />
              <RatingFilter filter={filter} setFilter={setFilter} />
              {categories.map((category) => (
                <CategoryItem
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  filter={filter}
                  setFilter={setFilter}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
