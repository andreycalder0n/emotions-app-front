import Image from 'next/image';

import Link from 'next/link';

export default function Home() {

  return (
    <>
      <div className="relative overflow-hidden bg-white dark:bg-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-white dark:bg-gray-700 z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-gray-700 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Data to enrich your</span> <span className="block text-tertiary xl:inline">online business</span>
                </h1>
                <p className="mt-3 text-base text-gray-700 dark:text-gray-50 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href={'/login'}>
                      <a
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tertiary hover:bg-primary dark:bg-gray-900 dark:hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
                      >
                        Sign In
                      </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href={'/login'}>
                      <a
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-gray-200 hover:bg-gray-300 md:py-4 md:text-lg md:px-10"
                      >
                        Register
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/img/norway.jpg"
            alt=""
            layout='fill'
          />
        </div>
      </div>
    </>
  );
}
