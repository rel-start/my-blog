import React, {
  lazy,
  Suspense,
} from 'react';
import { Route, Switch, RouteProps } from 'react-router-dom';
import NotFound from '@pages/NotFound/NotFound';
import Loading from '@components/loading/loading';

/**
 * @name 页面组件
 */
const Home = lazy(() =>
  import(/* webpackChunkName:"home" */ "@pages/Home/Home")
);
const Login = lazy(() =>
  import(/* webpackChunkName:"login" */ "@pages/Login/Login")
);
const List = lazy(() =>
  import(/* webpackChunkName:"list" */ "@pages/List/List")
);

interface RingProps extends RouteProps {

}

/**
 * @name 路由列表
 */
const routes: RingProps[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/list",
    exact: true,
    component: List,
  }
];

/**
 * @name 生成路由
 */
const generateRoutes = (routes: RouteProps[], NotFound: any) => () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {
        routes.map((r, idx) => {
          const { path, exact, component } = r;
          return (
            <Route
              path={path}
              exact={exact}
              component={component}
              key={idx}
            />)
        })
      }

      <Route component={NotFound} />
    </Switch>
  </Suspense>
);



const IndexRoutes = generateRoutes(routes, NotFound);

export default IndexRoutes;