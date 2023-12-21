import { Route, Routes } from "react-router-dom";

import ROUTES from "./ROUTES";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/register/RegisterPage";
import Error404Page from "../pages/404/Error404Page";
import LoginPage from "../pages/login/LoginPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import Css1Component from "../playground/l1/Css1Component";
import SandboxPage from "../pages/Sandbox/SandboxPage";
import Effect1 from "../playground/l7/Effect1";
import Effect2 from "../playground/l7/Effect2";
import Effect3Page from "../playground/l7/Effect3Page";
import StateCompo from "../playground/l7/stateCompo";
import CounterPage from "../playground/l7/CustomHooks/CounterPage";
import RenderPage9 from "../playground/l9/memo/RenderPage9";
import AnimalComponent from "../playground/l9/useCallback/AnimalComponent";
import CounterL9Page from "../playground/l9/useCallback/CounterL9Page";
import UseMemoPage from "../playground/l9/useMemo/UseMemoPage";
import CarTargilPage from "../playground/l9/targil/CarTargilPage";
import CounterDisplay from "../playground/l11/CounterDisplay";
import CounterActionsPage from "../playground/l11/CounterActionsPage";
import CreateCardPage from "../pages/CreateCardPage/CreateCardPage";
import AuthGuard from "../Guard/AuthGuard";
import BizGuard from "../Guard/BizGuard";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route
        path={ROUTES.CREATECARD}
        element={
          <AuthGuard>
            <BizGuard>
              <CreateCardPage />
            </BizGuard>
          </AuthGuard>
        }
      />
      <Route path={`${ROUTES.EDITCARD}/:id`} element={<EditCardPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandboxPage />}>
        <Route path="l1css" element={<Css1Component />} />
        <Route path="effect1" element={<Effect1 />} />
        <Route path="effect2" element={<Effect2 />} />
        <Route path="effect3" element={<Effect3Page />} />
        <Route path="state" element={<StateCompo />} />
        <Route path="hooks" element={<CounterPage />} />
      </Route>
      <Route path="/l9">
        <Route path="render" element={<RenderPage9 />} />
        <Route path="callback" element={<AnimalComponent />} />
        <Route path="callback2" element={<CounterL9Page />} />
        <Route path="usememo" element={<UseMemoPage />} />
        <Route path="targil" element={<CarTargilPage />} />
      </Route>
      <Route path="/l11" element={<CounterDisplay />}>
        <Route path="action" element={<CounterActionsPage />} />
      </Route>
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};
export default Router;
