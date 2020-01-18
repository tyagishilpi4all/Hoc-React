import React,{Component} from 'react';

const Common = (Score) =>{
    class NewScore extends Component{
        constructor(props){
            super(props);
            this.state={
                yourShots: 0
            }
        };

        handleEvent=()=>{

            let {yourShots}=this.state;
            console.log(yourShots)
            let localYourShots= yourShots
            this.setState({
                yourShots: localYourShots + 1
            })
            // this.setState(prevState=>{
            //     return{
            //         yourShots : prevState.yourShots +1
            //     }
            // })
        };

        render(){
            const {yourShots}=this.state;
            return(
                <React.Fragment>
                    <Score 
                    yourShots={yourShots}
                    handleEvent={this.handleEvent}
                    />
                </React.Fragment>
            )
        }
    }
    return NewScore;
}

export default Common;
