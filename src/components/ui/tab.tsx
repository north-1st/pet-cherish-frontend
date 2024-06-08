import React, { useState } from 'react';

import * as Tabs from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

interface TabsComponentProps {
  list: { label: string; content: React.ReactNode }[];
}

const Tab = ({ list }: TabsComponentProps) => {
  const [activeTab, setActiveTab] = useState(list[0].label);

  return (
    <Tabs.Root value={activeTab} onValueChange={(value) => setActiveTab(value)}>
      <Tabs.List className='border-b border-gray03' color='orange'>
        {list.map((tab) => (
          <Tabs.Trigger
            key={tab.label}
            value={tab.label}
            className={cn(
              'border-gray01 px-8 py-3 text-gray03 hover:border-b-2 hover:text-gray01 active:text-gray01',
              activeTab === tab.label && 'border-b-2 border-gray01 text-gray01'
            )}
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {list.map((tab) => (
        <Tabs.Content key={tab.label} value={tab.label} className='py-6'>
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default Tab;
