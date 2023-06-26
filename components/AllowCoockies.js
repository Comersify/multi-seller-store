import Link from "next/link";

export const AllowCockies = () => {
  const handleAccept = (e) => {
    e.preventDefault();
    localStorage.setItem("accpet-cockies", 1);
  };
  return (
    <div className="fixed bg-gray-100 border rounded-t-md bottom-0">
      <p>
        we use your cockies to perform better products suggesttion and help
        vendors to offer every thing you need
      </p>
      <div>
        <Link href="/privacy/">Learn More</Link>
        <button onClick={(e) => handleAccept(e)}>Accept</button>
      </div>
    </div>
  );
};
