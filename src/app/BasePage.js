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

const TypePresentationList = React.lazy(() =>
    import('./pages/TypePresentation/List')
);

const TypePresentationAdd = React.lazy(() =>
    import('./pages/TypePresentation/Add')
);

const TypeTopicList = React.lazy(() =>
    import('./pages/TypeTopic/List')
);

const TypeTopicAdd = React.lazy(() =>
    import('./pages/TypeTopic/Add')
);

const TypePublishList = React.lazy(() =>
    import('./pages/TypePublish/List')
);

const TypePublishAdd = React.lazy(() =>
    import('./pages/TypePublish/Add')
);

const TypeLanguageList = React.lazy(() =>
    import('./pages/TypeLanguage/List')
);

const TypeLanguageAdd = React.lazy(() =>
    import('./pages/TypeLanguage/Add')
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

                <Route path="/typepresentation/:id/edit" component={TypePresentationAdd}/>
                <Route path="/typepresentation/create"  component={TypePresentationAdd}/>
                <Route path="/typepresentation"  component={TypePresentationList}/>

                <Route path="/typetopic/:id/edit" component={TypeTopicAdd}/>
                <Route path="/typetopic/create"  component={TypeTopicAdd}/>
                <Route path="/typetopic"  component={TypeTopicList}/>

                <Route path="/typepublish/:id/edit" component={TypePublishAdd}/>
                <Route path="/typepublish/create"  component={TypePublishAdd}/>
                <Route path="/typepublish"  component={TypePublishList}/>

                <Route path="/typelanguage/:id/edit" component={TypeLanguageAdd}/>
                <Route path="/typelanguage/create"  component={TypeLanguageAdd}/>
                <Route path="/typelanguage"  component={TypeLanguageList}/>

                <Redirect to="/error/error-v6"/>
            </Switch>
        </Suspense>
    );
}
