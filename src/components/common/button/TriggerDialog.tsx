import React from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export function TriggerDialog({
  triggerChildren,
  title,
  contentChildren,
  closeDialogRef,
}: {
  triggerChildren: React.ReactNode;
  title: string;
  contentChildren: React.ReactNode;
  closeDialogRef: React.RefObject<HTMLButtonElement>;
}) {
  return (
    <Dialog>
      <DialogTrigger className='cursor-pointer' asChild>
        {triggerChildren}
      </DialogTrigger>
      <DialogContent className='p-0'>
        <ScrollArea className='max-h-screen w-full'>
          <div className='p-6'>
            <DialogHeader className='mb-4'>
              <DialogTitle className='text-start'>{title}</DialogTitle>
            </DialogHeader>
            {contentChildren}
          </div>
        </ScrollArea>
      </DialogContent>
      <DialogClose ref={closeDialogRef} />
    </Dialog>
  );
}

export default TriggerDialog;
