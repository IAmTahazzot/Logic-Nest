'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { menuOptions } from '@/lib/constants';
import clsx from 'clsx';
import { Separator } from '@/components/ui/separator';
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react';
import { ModeToggle } from '@/components/common/mode-toggle';
import Image from 'next/image';

type Props = {};

export const NavigationSidebar = (props: Props) => {
  const pathName = usePathname();

  return (
    <nav className='fixed left-0 top-0 w-[60px] dark:bg-black h-screen'>
      <div className='overflow-y-scroll overflow-x-hidden justify-between flex items-center flex-col gap-4 pb-4 h-full'>
        <div className='flex items-center justify-center flex-col gap-4'>
          <div className='h-16 flex items-center justify-center'>
            <Link className='flex font-bold flex-row ' href='/'>
              <Image
                src={'/favicon.ico'}
                height={28}
                width={28}
                alt='brand'
                className='rounded-full'
              />
            </Link>
          </div>
          <TooltipProvider>
            <ul className='flex flex-col gap-y-3'>
              {menuOptions.map(menuItem => (
                <li key={menuItem.name}>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      <Link
                        href={menuItem.href}
                        className={clsx(
                          'group h-5 w-5 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer',
                          {
                            'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                              pathName === menuItem.href,
                          }
                        )}
                      >
                        <menuItem.Component
                          selected={pathName === menuItem.href}
                        />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side='right'
                      className='bg-black/10 backdrop-blur-xl'
                    >
                      <p>{menuItem.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </TooltipProvider>
          <Separator />

          <div className='flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-[6px] px-[6px] rounded-full h-48 overflow-scroll border-[1px]'>
            <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
              <LucideMousePointerClick className='dark:text-white' size={18} />
              <div className='border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]' />
            </div>
            <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
              <GitBranch className='text-muted-foreground' size={18} />
              <div className='border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]'></div>
            </div>
            <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
              <Database className='text-muted-foreground' size={18} />
              <div className='border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]'></div>
            </div>
            <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
              <GitBranch className='text-muted-foreground' size={18} />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center flex-col gap-8'>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
