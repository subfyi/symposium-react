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

const PresentationOral = React.lazy(() =>
    import('./pages/Presentation/Orals')
);

const PresentationPoster = React.lazy(() =>
    import('./pages/Presentation/Posters')
);

const AddPresentation = React.lazy(() =>
    import('./pages/Presentation/Add')
);

export default function BasePage() {

    return (
        <Suspense fallback={<LayoutSplashScreen/>}>
            <Switch>
                {
                    <Redirect exact from="/" to="/presentation-oral"/>
                }

                <Route path="/profile" component={ProfileEdit}/>

                <Route path="/submission/:id/edit" component={AddSubmission}/>
                <Route path="/submission/create" component={AddSubmission}/>
                <Route path="/submissions" component={Submissions}/>

                <Route path="/presentation/:id/watch" component={AddPresentation}/>
                <Route path="/presentation-oral" component={PresentationOral}/>
                <Route path="/presentation-poster" component={PresentationPoster}/>

                <Redirect to="/error/error-v6"/>
            </Switch>
        </Suspense>
    );
}
