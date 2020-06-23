import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LayoutSplashScreen } from "../_metronic/layout";



const ProfileEdit = React.lazy(() =>
    import('./pages/Profile/Edit')
);

const Submissions = React.lazy(() =>
    import('./pages/Submission/List')
);

const AddSubmission = React.lazy(() =>
    import('./pages/Submission/Add')
);

const Presentation = React.lazy(() =>
    import('./pages/Presentation/List')
);

const AddPresentation = React.lazy(() =>
    import('./pages/Presentation/Add')
);

export default function BasePage() {
    // useEffect(() => {
    //   console.log('Base page');
    // }, []) // [] - is required if you need only one call
    // https://reactjs.org/docs/hooks-reference.html#useeffect

    return (
        <Suspense fallback={<LayoutSplashScreen/>}>
            <Switch>
                {
                    <Redirect exact from="/" to="/submissions"/>
                }

                <Route path="/profile" component={ProfileEdit}/>

                <Route path="/submission/:id/edit" component={AddSubmission}/>
                <Route path="/submission/create" component={AddSubmission}/>
                <Route path="/submissions" component={Submissions}/>

                <Route path="/presentation/:id/watch" component={AddPresentation}/>
                <Route path="/presentation" component={Presentation}/>

                <Redirect to="/error/error-v6"/>
            </Switch>
        </Suspense>
    );
}
