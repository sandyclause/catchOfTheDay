import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        const storename = this.myInput.value.value;
        this.props.history.push(`/store/${storename}`)
    }
    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder='Store Name' 
                    defaultValue={getFunName()}/>
                <button type='submit'>Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;