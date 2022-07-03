/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useAuth } from '@hooks/useAuth';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Emotions', href: '/emotions', current: false },
  { name: 'Thoughts', href: '/thoughts', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const auth = useAuth();

  console.log(auth);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="data:image/png;base64,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"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="data:image/png;base64,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"
                    alt="Workflow"
                  /> */}
                  <h1 className="text-2xl font-bold text-white capitalize">AppEmotions</h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
