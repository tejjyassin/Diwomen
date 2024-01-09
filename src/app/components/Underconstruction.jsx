export default function Underconstruction() {
  return (
    <div className="bg-white">
      {/* Header */}

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[34rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>

          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 sm:pt-60 lg:px-8 ">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:justify-center lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold text-center tracking-tight text-gray-900 sm:text-6xl">
                    Something cool is coming soon!
                  </h1>
                  <p className="relative mt-6 text-lg text-center leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    {"Stay tuned for something amazing. We're working on it!"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mx-auto mt-32 max-w-7xl overflow-hidden px-6  lg:px-8">
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 Diwomen, All rights reserved.
        </p>
      </footer>
    </div>
  );
}
