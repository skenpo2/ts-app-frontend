import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // or false
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <NuqsAdapter>
            <App />
            <Toaster />
          </NuqsAdapter>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
