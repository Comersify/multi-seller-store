export const Footer = () => {
  return (
    <footer class="bg-gray-900 text-gray-300 py-10">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="text-center md:text-left">
          <h2 class="text-3xl font-bold">Company Name</h2>
          <p class="mt-3">123 Main St, New York, NY 10001</p>
          <p class="mt-3">Phone: (555) 555-5555</p>
        </div>
        <div class="mt-6 md:mt-0">
          <a href="#" class="text-gray-300 hover:text-gray-100 mr-4">
            Privacy Policy
          </a>
          <a href="#" class="text-gray-300 hover:text-gray-100 mr-4">
            Terms of Service
          </a>
          <a href="#" class="text-gray-300 hover:text-gray-100">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};
