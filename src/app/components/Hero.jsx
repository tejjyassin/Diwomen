export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div
        className="hidden lg:absolute lg:inset-0 lg:block"
        aria-hidden="true"
      >
        <svg
          className="absolute left-1/2 top-0 -translate-y-8 translate-x-64 transform"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y={72}
            width={640}
            height={640}
            className="text-gray-50"
            fill="currentColor"
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>

      <div className="relative pb-16 pt-6 sm:pb-24 lg:pb-32">
        <main className="mx-auto mt-16 max-w-7xl px-4 px-6 sm:mt-24 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl my-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="mt-1 block text-4xl font-bold leading-8 tracking-tight sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">DiWomen:</span>
                  <span className="block text-secondary">
                    Unveiling the Heroines of our Time
                  </span>
                </span>
              </h1>
              <p className="mt-3 xl:leading-8 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Empowering and Honoring Women Who Inspire. Join us in
                recognizing and celebrating the remarkable achievements of women
                who have made a significant impact in various fields.
              </p>

              <a
                href="#about"
                className="mt-5 w-full rounded-md border border-transparent bg-gray-800 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
              >
                Learn more
              </a>
            </div>
            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <svg
                className="absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  width={640}
                  height={640}
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative -mt-[100px] h-[600px] block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  {/* <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  /> */}

                  <video
                    className="-mt-[50px] w-full my-auto"
                    autoPlay
                    muted
                    loop
                  >
                    <source
                      src="https://diwomen.devagn.com/video/hero.mp4"
                      type="video/mp4"
                    />
                  </video>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
