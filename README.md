# Practising React with Namaste Javascript tutorials
# No copyright infringement.
# using resources/URL for learning purpose only.

# Parcel
- Dev Build
- Local Server
- HMR : Hot Module Replacement
- File watching algorithm - Written in C++
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostics
- Error Handling
- Tree shaking : remove unsed code


# Reconciliation Algorith(React Fiber)
- New way of finding the div and updating the DOM.

# 2 Types of routing in web apps
- Client Side Routing : Normal react routing where no network call is done and all the code is in the app.
- Server Side Routing : When you clicks on a route, network call is made and the html comes from the server and renders on the web app.

# Lazy Loading using lazy and Suspense
- const <Component-Name> = lazy(() => import(<component-path>));
- Router under <Suspense><Component-name></Suspense> : We do this because component takes time to load and the react gets to know we are lazy loading the component.

# Redux Toolkit
- Install library : npm install @reduxjs/toolkit and react-redux 
- build our store
- connect our store to our app
- slice cart slice
- dispatch actions
- selector