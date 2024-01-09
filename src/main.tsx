import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layouts/root'
import { DashboardPage } from './pages/dashboard/page'
import { MedicineListPage } from './pages/medicine-list/page'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MedicinePage } from './pages/medicine/page'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <DashboardPage />,
      },
      {
        path: 'medicines',
        element: <MedicineListPage />,
      },
      {
        path: 'medicines/:id',
        element: <MedicinePage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
