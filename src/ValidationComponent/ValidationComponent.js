import React, {Component} from 'react';

class ValidationComponent extends Component {

    render(){

        let infoMessage;

        if(this.props.length > 5){
            infoMessage = 'Text is long enough.';
        } else {
            infoMessage = 'Text is too short.'
        }

        return (
            <div>
                <p>{infoMessage}</p>
            </div>
        )
    }
}

export default ValidationComponent;

