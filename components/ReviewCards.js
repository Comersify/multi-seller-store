import Image from "next/image";
import { Star } from "./Stars";

export const HomeReviewCard = ({ image, review }) => {
  return (
    <div className="overflow-hidden py-10">
      <div className="w-[20rem] rounded-lg border relative border-gray-200 shadow-sm ">
        <Image
          className="rounded-full absolute -top-10 left-[35%]"
          width={90}
          height={90}
          src={image}
        />
        <p className="text-black text-ms pt-14 text-center px-4 pb-4 ">
          {review}
        </p>
      </div>
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

const CustomerReview = ({ image, stars, review, date }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <Image
          className="w-12 h-12 border border-gray-200 rounded-full mr-4"
          width={40}
          height={40}
          src={image}
          alt="User Avatar"
        />
        <div>
          <h3 className="text-base font-medium text-gray-900">John Doe</h3>
          <div className="flex items-center">
            <Star active />
            <span className="text-base font-medium text-gray-500">{stars}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-2">
        {review ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.`}
      </p>
      <div className="text-gray-500 text-xs mb-2">
        Reviewed on {date || "May 8, 2023"}
      </div>
    </div>
  );
};

export const ReviewCard = ({ reviews }) => {
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
        {reviews?.map((review) => {
          <CustomerReview
            image={review?.image}
            review={review?.review}
            fulllName={review?.fulllName}
            date={review?.date}
          />;
        })}
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
      </div>
    </div>
  );
};
