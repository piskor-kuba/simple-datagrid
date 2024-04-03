import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { TagsPage } from './pages/TagsPage/Tags';
import { queryClient } from './services/queryClient';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TagsPage />
    </QueryClientProvider>
  </React.StrictMode>
);
