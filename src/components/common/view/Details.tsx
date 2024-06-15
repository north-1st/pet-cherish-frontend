import React from 'react';

import Empty from './Empty';

export default function Details({ content }: { content?: string }) {
  if (!content) {
    return <Empty />;
  }

  return <>{content}</>;
}
