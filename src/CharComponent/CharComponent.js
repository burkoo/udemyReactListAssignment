import React, {Component} from 'react';

class CharComponent extends Component {

    render(){
        return (
            <div>
                <p onClick={this.props.click}>{this.props.char}</p>
            </div>
        )
    }
}

export default CharComponent;

