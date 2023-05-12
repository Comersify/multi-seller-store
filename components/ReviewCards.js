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

export const ReviewCard = () => {
  return (
    <div class="flex flex-wrap gap-4 w-full justify-center">
      <div class="border border-gray-200 rounded-lg w-80 p-4 h-56">
        <h2 class="text-lg font-medium text-gray-900 mb-2">Product Ratings</h2>
        <div class="flex items-center mb-2">
          <span class="w-20 font-medium text-gray-900 mr-2">5 stars</span>
          <div class="flex-1 h-2 relative">
            <div class="absolute w-full h-full bg-gray-200 rounded-full"></div>
            <div class="absolute h-full w-[85%] bg-yellow-300 rounded-full"></div>
          </div>
          <span class="ml-2 font-medium">80%</span>
        </div>
        <div class="flex items-center mb-2">
          <span class="w-20 font-medium text-gray-900 mr-2">4 stars</span>
          <div class="flex-1 h-2 relative">
            <div class="w-full absolute h-full bg-gray-200 rounded-full"></div>
            <div class="absolute h-full w-[85%] bg-yellow-300 rounded-full"></div>
          </div>
          <span class="ml-2 font-medium">15%</span>
        </div>
        <div class="flex items-center mb-2">
          <span class="w-20 font-medium text-gray-900 mr-2">3 stars</span>
          <div class="flex-1 h-2 relative">
            <div class="absolute w-full h-full bg-gray-200 rounded-full"></div>
            <div class="absolute w-[18%] h-full bg-yellow-300 rounded-full"></div>
          </div>
          <span class="ml-2 font-medium">3%</span>
        </div>
        <div class="flex items-center mb-2">
          <span class="w-20 font-medium text-gray-900 mr-2">2 stars</span>
          <div class="flex-1 h-2 relative">
            <div class="absolute w-full h-full bg-gray-200 rounded-full"></div>
            <div class="absolute w-[18%] h-full bg-yellow-300 rounded-full"></div>
          </div>
          <span class="ml-2 font-medium">1%</span>
        </div>
        <div class="flex items-center">
          <span class="w-20 font-medium text-gray-900 mr-2">1 star</span>
          <div class="flex-1 h-2 relative">
            <div class="absolute w-full h-full bg-gray-200 rounded-full"></div>
            <div class="absolute w-[6%] h-full bg-yellow-300 rounded-full"></div>
          </div>
          <span class="ml-2 font-medium">1%</span>
        </div>
      </div>
      {/* <!-------REEVIEWS STATS----->
        <!-------REEVIEWS -----> */}
      <div class="md:w-1/2">
        <div class="border border-gray-200 rounded-lg p-4 mb-4">
          <div class="flex items-center mb-2">
            <img
              class="w-10 h-10 rounded-full mr-4"
              src="user-avatar.jpg"
              alt="User Avatar"
            />
            <div>
              <h3 class="text-base font-medium text-gray-900">John Doe</h3>
              <div class="flex items-center">
                <span class="text-yellow-400 mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 0l2.932 6.459 6.818.938-4.939 4.656 1.465 6.821L10 15.465l-6.276 3.349 1.465-6.82L.25 7.397l6.818-.939L10 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span class="text-base font-medium text-gray-500">4.5</span>
              </div>
            </div>
          </div>
          <p class="text-gray-700 text-sm mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="text-gray-500 text-xs mb-2">Reviewed on May 8, 2023</div>
        </div>
      </div>
    </div>
  );
};
