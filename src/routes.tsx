import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router";
import { Loader } from "./components";
import FrontPage from "./pages/front-page/front-page";
// import { MainLayout, ReviewLayout, AdminLayout } from "./layout";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

// * BASE COMPONENTS PAGE
const BaseComponents = Loadable(
  lazy(() => import("./pages/base-components/components"))
);

const routes: RouteObject[] = [
  {
    path: "*",
    // element: <MainLayout />,
    children: [
      {
        index: true,
        element: <FrontPage />,
      },
      // {
      //   path: "profile/:id",
      //   element: <Profile />,
      // },
      // {
      //   path: "profile/update/:id",
      //   element: <ProfileEdit />,
      // },
      // {
      //   path: "faqs",
      //   element: <Faqs />,
      // },
      // {
      //   path: "contact-us",
      //   element: <ContactUs />,
      // },
      // {
      //   path: "company-registration",
      //   element: <CompanyRegistration />,
      // },
      // {
      //   path: "privacy-policy",
      //   element: <PrivacyPolicy />,
      // },
      // {
      //   path: "terms-conditions",
      //   element: <TermsConditions />,
      // },
      // {
      //   path: "search",
      //   element: <SearchPage />,
      // },
      // {
      //   path: "search/:name",
      //   element: <SearchPage />,
      // },
      // {
      //   path: "brand/:id/review/create",
      //   element: (
      //     <ReviewLayout>
      //       <BrandReview />
      //     </ReviewLayout>
      //   ),
      // },
      // {
      //   path: "brand/:brand_id/review/update/:review_id",
      //   element: (
      //     <ReviewLayout>
      //       <ReviewEdit />
      //     </ReviewLayout>
      //   ),
      // },
      // {
      //   path: "product/:product_id/review/update/:review_id",
      //   element: (
      //     <ReviewLayout>
      //       <ReviewEdit />
      //     </ReviewLayout>
      //   ),
      // },
      // {
      //   path: "product/:id/review/create",
      //   element: (
      //     <ReviewLayout>
      //       <ProductReview />
      //     </ReviewLayout>
      //   ),
      // },
      // {
      //   path: "brand/:id",
      //   element: <BrandAndProduct />,
      // },
      // {
      //   path: "Product/:id",
      //   element: <BrandAndProduct />,
      // },
      // {
      //   path: "dashboard",
      //   element: <AdminLayout />,
      //   children: [
      //     {
      //       index: true,
      //       element: <Dashboard />,
      //     },
      //     {
      //       path: "users",
      //       element: <Users />,
      //     },
      //     {
      //       path: "brands",
      //       element: <Brand />,
      //     },
      //     {
      //       path: "brand/add",
      //       element: <AddBrand />,
      //     },
      //     {
      //       path: "brand/edit/:id",
      //       element: <BrandEdit />,
      //     },
      //     {
      //       path: "products",
      //       element: <Product />,
      //     },
      //     {
      //       path: "product/add",
      //       element: <AddProduct />,
      //     },
      //     {
      //       path: "product/edit/:id",
      //       element: <EditProduct />,
      //     },
      //     {
      //       path: "privacy-policy",
      //       element: <Privacy />,
      //     },
      //     {
      //       path: "terms-and-conditions",
      //       element: <TermsAndConditios />,
      //     },
      //     {
      //       path: "add-faqs",
      //       element: <AddFaqs />,
      //     },
      //     { path: "user/:id", element: <UserDetails /> },
      //     {
      //       path: "brand/:id",
      //       element: <BrandDetails />,
      //     },
      //     {
      //       path: "product/:id",
      //       element: <ProductDetails />,
      //     },
      //     {
      //       path: "reviews",
      //       element: <Reviews />,
      //     },
      //     {
      //       path: "review/:id",
      //       element: <ReviewDetails />,
      //     },
      //   ],
      // },

      //   {
      //     path: '404',
      //     element: <NotFound />
      //   },
      //   {
      //     path: '500',
      //     element: <ServerError />
      //   },
      //   {
      //     path: '*',
      //     element: <NotFound />
      //   }
    ],
  },
  {
    path: "base-components",
    children: [
      {
        index: true,
        element: <BaseComponents />,
      },
    ],
  },
];

export default routes;
