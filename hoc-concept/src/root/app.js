import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Shilpi from '../component/shilpi';
import Sunny from '../component/sunny';

class App extends Component{

    render(){
        return(
            <React.Fragment>
                <h3 className="hoc">HOC</h3>
                <div className="col-md-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h5 className="hoc">Shilpi Score</h5>
                                <Shilpi />
                            </div>
                            <div className="col-md-6">
                                <h5 className="hoc">Sunny Score</h5>
                                <Sunny />
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx="true">
                    {
                        `.hoc{
                            text-align:center;
                        }
                        `
                    }
                </style>
            </React.Fragment>
        )
    }
};

export default App;