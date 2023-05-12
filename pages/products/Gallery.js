export const Gallery = () => {
  return (
    <section class="mx-auto h-90 py-16 sm:col-span-1 md:col-span-2 lg:col-span-2 relative lg:gap-x-8 lg:px-8">
      <div class="flex justify-center">
        <div class="block space-y-4 mr-2">
          <img
            src="https://via.placeholder.com/450"
            class="max-w-[60px] max-h-[60px] cursor-pointer md:mb-2"
            onclick="showImage('small-image-1.jpg')"
          />
          <img
            src="https://via.placeholder.com/450"
            class="max-w-[60px] max-h-[60px] cursor-pointer md:mb-2"
            onclick="showImage('small-image-2.jpg')"
          />
          <img
            src="https://via.placeholder.com/450"
            class="max-w-[60px] max-h-[60px] cursor-pointer ring-2 ring-yellow-500 ring-offset-2"
            onclick="showImage('small-image-3.jpg')"
          />
        </div>
        <img
          src="https://via.placeholder.com/450"
          class="max-sm:max-w-[300px] max-sm:max-h-[300px] max-md:max-w-[400px] max-h-[400px]"
        />
      </div>
    </section>
  );
};
