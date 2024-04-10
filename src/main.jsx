/* eslint-disable react-refresh/only-export-components */
import  { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { Home, LoginPage, SigninPage, AllPost, EditPost, AddPost, Post } from './pages/pageIndex.js';
import { AuthLayout } from './components/index.js';

// Lazy loading components
const LazyHome = lazy(() => import('./pages/Home'));
const LazyLoginPage = lazy(() => import('./pages/LoginPage'));
const LazySigninPage = lazy(() => import('./pages/SigninPage'));
const LazyAllPost = lazy(() => import('./pages/AllPost'));
const LazyEditPost = lazy(() => import('./pages/EditPost'));
const LazyAddPost = lazy(() => import('./pages/AddPost'));
const LazyPost = lazy(() => import('./pages/Post'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyHome />
          </Suspense>
        ),
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLoginPage />
            </Suspense>
          </AuthLayout>
        ),
      },
      {
        path: 'signup',
        element: (
          <AuthLayout authentication={false}>
            <Suspense fallback={<div>Loading...</div>}>
              <LazySigninPage />
            </Suspense>
          </AuthLayout>
        ),
      },
      {
        path: 'all-posts',
        element: (
          <AuthLayout authentication>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyAllPost />
            </Suspense>
          </AuthLayout>
        ),
      },
      {
        path: 'add-post',
        element: (
          <AuthLayout authentication>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyAddPost />
            </Suspense>
          </AuthLayout>
        ),
      },
      {
        path: 'edit-post/:slug',
        element: (
          <AuthLayout authentication>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyEditPost />
            </Suspense>
          </AuthLayout>
        ),
      },
      {
        path: 'post/:slug',
        element: (
          <AuthLayout authentication>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyPost />
            </Suspense>
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <Layout  />
    </RouterProvider>
  </Provider>
);
