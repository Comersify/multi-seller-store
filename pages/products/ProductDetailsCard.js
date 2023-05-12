import { Stars } from "@/components/Stars";

const ProductDescription = () => {
  return (
    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
      {/* <!-- Description and details --> */}
      <div>
        <h3 className="sr-only">Description</h3>

        <div className="space-y-6">
          <p className="text-base text-gray-900">
            The Basic Tee 6-Pack allows you to fully express your vibrant
            personality with three grayscale options. Feeling adventurous? Put
            on a heather gray tee. Want to be a trendsetter? Try our exclusive
            colorway: &quot;Black&quot;. Need to add an extra pop of color to
            your outfit? Our white tee has you covered.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

        <div className="mt-4">
          <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
            <li className="text-gray-400">
              <span className="text-gray-600">Hand cut and sewn locally</span>
            </li>
            <li className="text-gray-400">
              <span className="text-gray-600">
                Dyed with our proprietary colors
              </span>
            </li>
            <li className="text-gray-400">
              <span className="text-gray-600">Pre-washed &amp; pre-shrunk</span>
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
            The 6-Pack includes two black, two white, and two heather gray Basic
            Tees. Sign up for our subscription service and be the first to get
            new, exciting colors, like our upcoming &quot;Charcoal Gray&quot;
            limited release.
          </p>
        </div>
      </div>
    </div>
  );
};

const Choice = () => {
  return (
    <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
      <input
        type="radio"
        name="size-choice"
        value="M"
        className="sr-only"
        aria-labelledby="size-choice-3-label"
      />
      <span id="size-choice-3-label">M</span>
      {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
      <span
        className="pointer-events-none absolute -inset-px rounded-md"
        aria-hidden="true"
      ></span>
    </label>
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

export const ProductChoices = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Size</h3>
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
          <Choice />
          <Choice />
          <Choice />
          <Choice />
          <Choice />
          <Choice />
          <Choice />
        </div>
      </fieldset>
    </div>
  );
};

export const ProductDetailsCard = () => {
  return (
    <div className="mx-auto w-90 px-4 pb-16 pt-10 col-span-2 lg:col-span-3 sm:px-6 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Basic Tee 6-Pack
        </h1>
      </div>

      {/* <!-- Options --> */}
      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight text-gray-900">$192</p>

        {/* <!-- Reviews --> */}
        <div className="mt-6">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <Stars />
            <a
              href="#"
              className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              117 reviews
            </a>
          </div>
        </div>

        <form className="mt-10">
          {/* <!-- Sizes --> */}
          <ProductChoices />

          <a
            type="submit"
            href="./cart.html"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to bag
          </a>
        </form>
      </div>

      <ProductDescription />
    </div>
  );
};
