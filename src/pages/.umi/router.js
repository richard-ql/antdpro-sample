import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from '/home/huxuelin/repo/antdpro/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BlankLayout" */'../../layouts/BlankLayout'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/user",
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__UserLayout" */'../../layouts/UserLayout'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
        "routes": [
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "login",
            "path": "/user/login",
            "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__user__login__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/user/login/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__user__login" */'../user/login'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "name": "register-result",
            "path": "/user/register-result",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__user__register-result" */'../user/register-result'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "name": "register",
            "path": "/user/register",
            "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__user__register__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/user/register/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__user__register" */'../user/register'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/home/huxuelin/repo/antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/",
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
        "Routes": [require('../Authorized').default],
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/dashboard",
            "name": "dashboard",
            "icon": "dashboard",
            "routes": [
              {
                "name": "analysis",
                "path": "/dashboard/analysis",
                "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__dashboard__analysis__model.tsx' */'/home/huxuelin/repo/antdpro/src/pages/dashboard/analysis/model.tsx').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../dashboard/analysis'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "name": "monitor",
                "path": "/dashboard/monitor",
                "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__dashboard__monitor__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/dashboard/monitor/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../dashboard/monitor'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "name": "workplace",
                "path": "/dashboard/workplace",
                "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__dashboard__workplace__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/dashboard/workplace/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../dashboard/workplace'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/home/huxuelin/repo/antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/form",
            "icon": "form",
            "name": "form",
            "routes": [
              {
                "name": "basic-form",
                "path": "/form/basic-form",
                "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__form__basic-form__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/form/basic-form/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../form/basic-form'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "name": "step-form",
                "path": "/form/step-form",
                "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__form__step-form__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/form/step-form/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../form/step-form'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "name": "advanced-form",
                "path": "/form/advanced-form",
                "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__form__advanced-form__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/form/advanced-form/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../form/advanced-form'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/home/huxuelin/repo/antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/list",
            "icon": "table",
            "name": "list",
            "routes": [
              {
                "path": "/list/search",
                "name": "search-list",
                "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../list/search'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "routes": [
                  {
                    "path": "/list/search",
                    "redirect": "/list/search/articles",
                    "exact": true
                  },
                  {
                    "name": "articles",
                    "path": "/list/search/articles",
                    "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__list__search__articles__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/list/search/articles/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../list/search/articles'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "name": "projects",
                    "path": "/list/search/projects",
                    "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__list__search__projects__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/list/search/projects/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../list/search/projects'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "name": "applications",
                    "path": "/list/search/applications",
                    "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__list__search__applications__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/list/search/applications/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../list/search/applications'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                    "exact": true
                  },
                  {
                    "component": () => React.createElement(require('/home/huxuelin/repo/antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
                  }
                ]
              },
              {
                "name": "table-list",
                "path": "/list/table-list",
                "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__list__table-list__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/list/table-list/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../list/table-list'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "name": "basic-list",
                "path": "/list/basic-list",
                "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__list__basic-list__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/list/basic-list/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../list/basic-list'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "name": "card-list",
                "path": "/list/card-list",
                "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__list__card-list__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/list/card-list/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../list/card-list'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/home/huxuelin/repo/antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/profile",
            "name": "profile",
            "icon": "profile",
            "routes": [
              {
                "name": "basic",
                "path": "/profile/basic",
                "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__profile__basic__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/profile/basic/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../profile/basic'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "name": "advanced",
                "path": "/profile/advanced",
                "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__profile__advanced__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/profile/advanced/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../profile/advanced'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/home/huxuelin/repo/antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "name": "result",
            "icon": "check-circle-o",
            "path": "/result",
            "routes": [
              {
                "name": "success",
                "path": "/result/success",
                "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../result/success'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "name": "fail",
                "path": "/result/fail",
                "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../result/fail'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/home/huxuelin/repo/antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "name": "exception",
            "icon": "warning",
            "path": "/exception",
            "routes": [
              {
                "name": "403",
                "path": "/exception/403",
                "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../exception/403'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "name": "404",
                "path": "/exception/404",
                "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../exception/404'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "name": "500",
                "path": "/exception/500",
                "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../exception/500'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/home/huxuelin/repo/antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "name": "account",
            "icon": "user",
            "path": "/account",
            "routes": [
              {
                "name": "center",
                "path": "/account/center",
                "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__account__center__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/account/center/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../account/center'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "name": "settings",
                "path": "/account/settings",
                "component": _dvaDynamic({
  app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__account__settings__model.ts' */'/home/huxuelin/repo/antdpro/src/pages/account/settings/model.ts').then(m => { return { namespace: 'model',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../account/settings'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/home/huxuelin/repo/antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "name": "editor",
            "icon": "highlight",
            "path": "/editor",
            "routes": [
              {
                "name": "flow",
                "path": "/editor/flow",
                "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../editor/flow'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "name": "mind",
                "path": "/editor/mind",
                "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../editor/mind'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "name": "koni",
                "path": "/editor/koni",
                "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../editor/koni'),
  LoadingComponent: require('/home/huxuelin/repo/antdpro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/home/huxuelin/repo/antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/",
            "redirect": "/dashboard/analysis",
            "authority": [
              "admin",
              "user"
            ],
            "exact": true
          },
          {
            "component": () => React.createElement(require('/home/huxuelin/repo/antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": () => React.createElement(require('/home/huxuelin/repo/antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/home/huxuelin/repo/antdpro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
