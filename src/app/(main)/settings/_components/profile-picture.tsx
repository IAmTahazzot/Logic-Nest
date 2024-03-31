'use client';

import React from 'react';
import UploadCareButton from './upload-button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

type Props = {
  userImage: string | null;
  onDelete?: any;
  onUpload: any;
};

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter();

  const onRemoveProfileImage = async () => {
    const response = await onDelete();
    if (response) {
      router.refresh();
    }
  };

  return (
    <div className='flex flex-col'>
      <p className='text-lg text-white'> Profile Picture</p>
      <div className='flex flex-col mt-6'>
        {userImage ? (
          <div className='relative w-48'>
            <div className='relative h-28 w-28 rounded-full'>
              <Image
                src={userImage}
                alt='User_Image'
                fill
                className='object-cover rounded-full'
              />
              <Button
                variant={'secondary'}
                onClick={onRemoveProfileImage}
                size='icon'
                className='absolute right-0 top-0 z-20 rounded-full w-7 h-7 text-sm flex gap-x-1'
              >
                <X size={16} />
              </Button>
            </div>
          </div>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;
