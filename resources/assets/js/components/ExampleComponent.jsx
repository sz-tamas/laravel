import React from 'react';

export default class App() {
    componentDidMount() => console.log('Component mounted.');

    render() {
        return <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card card-default">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            I'm an example component.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}