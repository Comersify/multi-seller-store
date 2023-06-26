export default function Privacy() {
  const handleReject = () => {
    localStorage.setItem("accpet-cockies", "0&0");
  };
  const handleAccept = () => {
    localStorage.setItem("accpet-cockies", 1);
  };

  return (
    <div>
      <p></p>
      <div className="flex items-start justify-center">
        <button onClick={() => handleReject()}>Reject</button>
        <button onClick={() => handleAccept()}>Accept</button>
      </div>
    </div>
  );
}
