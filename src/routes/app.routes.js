import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import { PrivateRoute } from "./PrivateRoute";
import { route } from "../utils/constants/route";

import {
  AuthPage,
  JeopardyPage,
  MainPage,
  NotFoundPage,
  StatisticPage,
} from "../pages";

export const AppRoutes = () => {
  const { isEntrance } = useSelector((state) => state.entrance);
  console.log(isEntrance);
  return [
    {
      path: route.INNER_PAGE,
      element: (
        <MainPage>
          <Outlet />
        </MainPage>
      ),
      children: [
        {
          path: route.INNER_PAGE,
          element: (
            <PrivateRoute
              Component={<JeopardyPage />}
              isAllowed={isEntrance}
              fallback={route.AUTH}
            />
          ),
        },
        {
          path: route.STATISTIC,
          element: (
            <PrivateRoute
              Component={<StatisticPage />}
              fallback={route.INNER_PAGE}
              isAllowed={isEntrance}
            />
          ),
        },
      ],
    },
    {
      path: route.AUTH,
      element: (
        <PrivateRoute
          Component={<AuthPage />}
          isAllowed={!isEntrance}
          fallback={route.INNER_PAGE}
        />
      ),
    },
    {
      path: route.NOT_FOUND,
      element: <NotFoundPage />,
    },
  ];
};
