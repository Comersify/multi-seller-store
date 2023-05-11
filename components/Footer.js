export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold">Company Name</h2>
          <p className="mt-3">123 Main St, New York, NY 10001</p>
          <p className="mt-3">Phone: (555) 555-5555</p>
        </div>
        <div className="mt-6 md:mt-0">
          <a href="#" className="text-gray-300 hover:text-gray-100 mr-4">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-100 mr-4">
            Terms of Service
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-100">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};
