import React from 'react';
import { Link } from 'react-router-dom';
import { tokenized } from '../api';

export default class extends React.Component {
    state = { };

    async componentDidMount() {
        const data = await tokenized.get('/api/warning');
        this.setState({ warnings: data.data });
    }

    render() {
        return <>
            { (this.state.warnings || []).map(a => <Link key={a.desc} to={a.link} className="navi-item">
                <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                        <div className="symbol-label">
                            <i className="flaticon-bell text-success icon-lg"></i>
                        </div>
                    </div>
                    <div className="navi-text">
                        <div className="font-weight-bold font-size-lg">
                            { a.desc }
                        </div>
                        <div className="text-muted">Reports based on sales</div>
                    </div>
                </div>
            </Link>) }
        </>;
    }
}
