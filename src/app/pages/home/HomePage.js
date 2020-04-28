import React, {Suspense, lazy} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Builder from "./Builder";
import Dashboard from "./Dashboard";
import DocsPage from "./docs/DocsPage";

import 'react-dual-listbox/lib/react-dual-listbox.css';

const GoogleMaterialPage = lazy(() =>
    import("./google-material/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
    import("./react-bootstrap/ReactBootstrapPage")
);

const ProfileEdit = React.lazy(() =>
    import('../Profile/Edit')
);

const Submissions = React.lazy(() =>
    import('../Submission/List')
);

const AddSubmission = React.lazy(() =>
    import('../Submission/Add')
);

export default function HomePage() {
    return (
        <Suspense>
            <Switch>
                {
                    <Redirect exact from="/" to="/submissions"/>
                }

                <Route path="/profile" basename="Profilim" component={ProfileEdit} />

                <Route path="/submission/:id/edit" basename="Edit Submission" component={AddSubmission}/>
                <Route path="/submission/create" basename="Add Submission" component={AddSubmission}/>
                <Route path="/submissions" basename="Submissions" component={Submissions}/>
n
                <Route path="/profile" basename="My Profile" component={ProfileEdit} />

                <Redirect to="/error/error-v1"/>
            </Switch>
        </Suspense>
    );
}
