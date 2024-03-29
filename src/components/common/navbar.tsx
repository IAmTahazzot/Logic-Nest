import Image from 'next/image';
import Link from 'next/link';

import { MenuIcon } from 'lucide-react';
import { HoverBorderGradient } from '../ui/button-hover-border-radient';

type Props = {};

export const Navbar = async ({}: Props) => {
  return (
    <header className='fixed right-0 left-0 top-0 py-4 px-6 z-[100] flex items-center justify-between'>
      <aside className='flex items-center gap-[2px]'>
        <p className='text-3xl font-bold'>Logic</p>
        <Image
          src='/images/storm.png'
          width={15}
          height={15}
          alt='fuzzie logo'
          className='shadow-sm'
        />
        <p className='text-3xl font-bold'>Nest</p>
      </aside>

      <nav className='absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block'>
        <ul className='flex items-center gap-5 list-none'>
          <li>
            <Link href='#'>Products</Link>
          </li>
          <li>
            <Link href='#'>Pricing</Link>
          </li>
          <li>
            <Link href='#'>Clients</Link>
          </li>
          <li>
            <Link href='#'>Resources</Link>
          </li>
          <li>
            <Link href='#'>Documentation</Link>
          </li>
          <li>
            <Link href='#'>Enterprise</Link>
          </li>
        </ul>
      </nav>

      <aside className='flex items-center gap-4'>
        <Link href='/dashboard'>
          <HoverBorderGradient
            containerClassName='rounded-full h-10'
            as='button'
            className='dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2'
          >
            <span>{true ? 'Dashboard' : 'Get Started'}</span>
          </HoverBorderGradient>
        </Link>
        {/* {user ? <UserButton afterSignOutUrl="/" /> : null} */}
        <MenuIcon className='md:hidden' />
      </aside>
    </header>
  );
};
