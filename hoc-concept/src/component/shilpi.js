import React,{Component} from 'react';
import Common from './hocSpecial'

class Shilpi extends Component{

    render(){
        return(
            <React.Fragment>
                <h3 className="mt-5">Fired Score:::{this.props.yourShots}</h3>
                <button className="btn btn-success" onClick={this.props.handleEvent}>Fire</button>
            </React.Fragment>
        )
    }
};

export default Common(Shilpi);
