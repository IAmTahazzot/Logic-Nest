import { InfoBar } from '@/components/infobar';
import { NavigationSidebar } from '@/components/sidebar';

type MainLayoutProps = { children: React.ReactNode };

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='flex overflow-hidden h-screen'>
      <NavigationSidebar />

      <div className='ml-[60px] w-full'>
        <InfoBar />

        <div className='border-l-[1px] border-t-[1px] pb-20 px-6 pt-4 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll bg-background'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
