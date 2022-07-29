import Link from 'next/link';
import { useDark } from '@context/ProviderDark';

export default function Nav() {
  const navigations = [
    { label: 'Home', href: '/dashboard', current: true },
    { label: 'Emotions', href: '/emotions', current: false },
    { label: 'Thoughts', href: '/thoughts', current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const { renderThemeChanger } = useDark();

  return (
    <nav className="Nav">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <Link href={'/'}>
          <h1 className="text-2xl font-bold capitalize text-white">AppEmotions</h1>
        </Link>
        <ul className="Nav--menu">
          {navigations.map((nav) => (
            <li key={nav.href} className="Nav--menu__item">
              <Link href={nav.href}>
                <a
                  className={classNames(
                    nav.current ? 'bg-secondary hover:bg-tertiary dark:bg-gray-900 dark:hover:bg-gray-700 text-white font-semibold' : 'text-white hover:bg-secondary dark:hover:bg-gray-900',
                    'px-3 py-2 rounded-md text-sm font-medium'
                  )}
                  aria-current={nav.current ? 'page' : undefined}
                >
                  {nav.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="Nav--button">
        <Link href="/">
          <a className="px-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" className="text-white" />
            </svg>
          </a>
        </Link>
        {renderThemeChanger()}
      </div>
    </nav>
  );
}
