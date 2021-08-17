import React from "react";

const RemoteSlides = React.lazy(() => import("host/Slides"));
// const RemoteNewsList = React.lazy(() => import("remote/NewsList"));
const RemoteNewsList = (await import("remote/NewsList")).default; // webpack5的新语法 topAwait

// React.lazy动态加载原理
function lazy(fn) {
  return class extends React.Component {
    state = { Component: null };
    componentDidMount() {
      fn().then((result) => {
        this.setState({
          Component: result.default,
        });
      });
    }
    render() {
      let { Component } = this.setState;
      return Component ? <Component /> : null;
    }
  };
}
const App = () => (
  <div>
    <h2>远程组件RemoteSlides,NewsList</h2>
    <React.Suspense fallback="Loading Slides">
      <RemoteSlides />
    </React.Suspense>
    <React.Suspense fallback="Loading NewsList">
      <RemoteNewsList />
    </React.Suspense>
  </div>
);
export default App;
