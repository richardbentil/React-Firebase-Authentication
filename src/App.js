import React, {Suspense} from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";
import {
  Home,
  LoginSignUp,
  EmailSent,
  SuccessOnRegistration,
  SuccessOnPasswordReset,
  PageNotFound,
} from "./routes";
import {Spinner} from "./components/"

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="mx-auto">
              <Spinner />
            </div>
          }>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/sign-in">
              <LoginSignUp />
            </Route>
            <Route path="/email-sent">
              <EmailSent />
            </Route>
            <Route path="/success-registration">
              <SuccessOnRegistration />
            </Route>
            <Route path="/success-password-reset">
              <SuccessOnPasswordReset />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
