export const HomeReviewCard = () => {
  return (
    <div className="max-w-[20rem] rounded-lg border relative border-gray-200 shadow-sm ">
      <img
        className="w-20 h-20 rounded-full absolute -top-8 -left-5 "
        src="https://via.placeholder.com/150"
      />
      <p className="text-black text-ms pt-10 pl-10 pr-4 pb-4">
        lorem ipsum dollar bmlkflbfl ckd s jMKJ SKJB JVBKM kmJ MK K SK kSH KMHk
        kH MKH kh MKH MKH QKH{" "}
      </p>
    </div>
  );
};

const StarBar = ({ value, starNum }) => {
  return (
    <div className="flex items-center mb-2">
      <span className="w-20 font-medium text-gray-900 mr-2">
        {starNum} stars
      </span>
      <div className="flex-1 h-2 relative">
        <div className="absolute w-[180px] py-1 h-full bg-gray-200 rounded-full"></div>
        <div
          className={`absolute h-full w-[${value}%] bg-yellow-300 rounded-full`}
        ></div>
      </div>
      <span className="ml-2 font-medium">{value}%</span>
    </div>
  );
};

const CustomerReview = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="user-avatar.jpg"
          alt="User Avatar"
        />
        <div>
          <h3 className="text-base font-medium text-gray-900">John Doe</h3>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0l2.932 6.459 6.818.938-4.939 4.656 1.465 6.821L10 15.465l-6.276 3.349 1.465-6.82L.25 7.397l6.818-.939L10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-base font-medium text-gray-500">4.5</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="text-gray-500 text-xs mb-2">Reviewed on May 8, 2023</div>
    </div>
  );
};

export const ReviewCard = () => {
  return (
    <div className="flex flex-wrap gap-4 w-full justify-center">
      <div className="border border-gray-200 rounded-lg w-80 p-4 h-56">
        <h2 className="text-lg font-medium text-gray-900 mb-2">
          Product Ratings
        </h2>
        <StarBar starNum={5} value={80} />
        <StarBar starNum={4} value={60} />
        <StarBar starNum={3} value={10} />
        <StarBar starNum={2} value={4} />
        <StarBar starNum={1} value={3} />
      </div>
      <div className="md:w-1/2">
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
      </div>
    </div>
  );
};
