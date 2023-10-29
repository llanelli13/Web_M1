import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <Header />
            <Switch>
                <Route path="/teams">
                    {/* Your Teams Component */}
                    <Teams />
                </Route>
                <Route path="/rules">
                    {/* Your Rules Component */}
                    <Rules />
                </Route>
                <Route path="/results">
                    {/* Your Results Component */}
                    <Results />
                </Route>
                <Route path="/">
                    {/* Default Component, e.g. HomePage */}
                    <HomePage />
                </Route>
            </Switch>
        </div>
    );
}
