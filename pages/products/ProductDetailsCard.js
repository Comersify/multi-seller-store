import { useAddProductToCart } from "@/api/cart";
import { useProductInWishList } from "@/api/wish-list";
import { Stars } from "@/components/Stars";
import { SaveButton } from "@/components/shared/Buttons";
import Image from "next/image";

const ProductDescription = ({ description }) => {
  return (
    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
      {/* <!-- Description and details --> */}
      {description || (
        <>
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">
                The Basic Tee 6-Pack allows you to fully express your vibrant
                personality with three grayscale options. Feeling adventurous?
                Put on a heather gray tee. Want to be a trendsetter? Try our
                exclusive colorway: &quot;Black&quot;. Need to add an extra pop
                of color to your outfit? Our white tee has you covered.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Hand cut and sewn locally
                  </span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Dyed with our proprietary colors
                  </span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Pre-washed &amp; pre-shrunk
                  </span>
                </li>
                <li className="text-gray-400">
                  <span className="text-gray-600">Ultra-soft 100% cotton</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">
                The 6-Pack includes two black, two white, and two heather gray
                Basic Tees. Sign up for our subscription service and be the
                first to get new, exciting colors, like our upcoming
                &quot;Charcoal Gray&quot; limited release.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Choice = ({ image, title, currentPack, addPackID, id }) => {
  return (
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        addPackID();
      }}
      className="w-16 h-20"
    >
      <label
        className={`group ${
          id == currentPack && "ring-2 ring-indigo-500"
        } w-16 h-18 relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm`}
      >
        <input
          type="radio"
          name="size-choice"
          value="M"
          className="sr-only"
          aria-labelledby="size-choice-3-label"
        />
        {/* <!--
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
        --> */}
        <Image
          src={image}
          width={60}
          height={60}
          alt="Pack"
          id="size-choice-3-label"
          className="pointer-events-none absolute -inset-px rounded-md"
        />
      </label>
      <p
        id="size-choice-3-label"
        className={`text-center mt-2 ${
          currentPack == id ? "text-indigo-500" : "text-gray-900"
        } font-bold`}
      >
        {title || "M"}
      </p>
    </button>
  );
};

const NotAvialableChoice = () => {
  return (
    <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-not-allowed bg-gray-50 text-gray-200">
      <input
        type="radio"
        name="size-choice"
        value="XXS"
        disabled
        className="sr-only"
        aria-labelledby="size-choice-0-label"
      />
      <span id="size-choice-0-label">XXS</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
      >
        <svg
          className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          stroke="currentColor"
        >
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="0"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </span>
    </label>
  );
};

export const ProductChoices = ({ packs, packID, addPackID }) => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">
          {packs?.name || "size"}
        </h3>
        <a
          href="#"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Size guide
        </a>
      </div>

      <fieldset className="mt-4">
        <legend className="sr-only">Choose a size</legend>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
          {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
          <NotAvialableChoice />
          {packs?.map((pack) => {
            <Choice
              id={pack.id}
              currentPack={packID}
              addPackID={() => addPackID(pack.id)}
              image={pack.image}
              title={pack.title}
            />;
          })}
          <Choice
            id={1}
            currentPack={packID}
            addPackID={() => addPackID(1)}
            image={"/"}
            title={"pack.title"}
          />
          <Choice
            id={2}
            currentPack={packID}
            addPackID={() => addPackID(2)}
            image={"/"}
            title={"pack.title"}
          />
          <Choice
            id={3}
            currentPack={packID}
            addPackID={() => addPackID(3)}
            image={"/"}
            title={"pack.title"}
          />
          <Choice
            id={4}
            currentPack={packID}
            addPackID={() => addPackID(4)}
            image={"/"}
            title={"pack.title"}
          />
          <Choice
            id={5}
            currentPack={packID}
            addPackID={() => addPackID(5)}
            image={"/"}
            title={"pack.title"}
          />
          <Choice
            id={6}
            currentPack={packID}
            addPackID={() => addPackID(6)}
            image={"/"}
            title={"pack.title"}
          />
        </div>
      </fieldset>
    </div>
  );
};

export const ProductDetailsCard = ({
  title,
  price,
  stars,
  starsCount,
  description,
  discount,
  id,
  packs,
}) => {
  const { handleAddToWishList, added } = useProductInWishList(id);
  const { handleAddProductToCart, packID, addPackID } = useAddProductToCart();
  return (
    <div className="mx-auto w-90 px-4 pb-8 pt-10 col-span-2 lg:col-span-3 sm:px-6 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-10 lg:pt-16">
      <div className="lg:col-span-2 lg:border-r flex items-center justify-between lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </h1>
        <SaveButton saved={added} onClick={() => handleAddToWishList()} />
      </div>

      {/* <!-- Options --> */}
      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight text-gray-900">
          ${price || "888"}
        </p>

        {/* <!-- Reviews --> */}
        <div className="mt-6">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <Stars num={stars} />
            <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
              {starsCount || "122 stars"}
            </span>
          </div>
        </div>

        <form className="mt-10">
          {/* <!-- Sizes --> */}
          <ProductChoices packs={packs} packID={packID} addPackID={addPackID} />
          <button
            onClick={(e) => handleAddProductToCart(e)}
            type="submit"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to bag
          </button>
        </form>
      </div>

      <ProductDescription description={description} />
    </div>
  );
};
