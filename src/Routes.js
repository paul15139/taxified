import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/statistics">
                <QuizPage />
            </Route>
            <Route exact path="/customers">
                <h1>Customers Page</h1>
            </Route>
            <Route exact path="/diagrams">
                <h1>Diagrams Page</h1>
            </Route>
            <Route exact path="/test">
                <h1>Test page</h1>
            </Route>
        </Switch>
    );
};

export default Routes;
