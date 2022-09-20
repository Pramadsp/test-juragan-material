import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

class Loading extends Component {

    constructor(props){
        super(props)

        this.state = {
            show: false,
            visible: false,
        }
    
        this.unsubscribe = '';
    }


    componentDidMount(){
        let store = this.props.store;
    
        this.toggleLoading(store.getState().showloading)
    
        this.unsubscribe = store.subscribe(() => {
            this.toggleLoading(store.getState().showloading)
        })
    }

    toggleLoading(status = false){    

        if(!(status instanceof Array) && status){
            this.setState({
                show: 'd-flex',
                visible: status
            })
        }else{
            this.setState({
                show: 'd-none',
                visible: false
            })
        }
    }

    render() {
        return (
            <div className={ 'loading-container flex-column align-content-center justify-content-center '+this.state.show } >
                <Loader
                    className="loading d-flex justify-content-center align-content-center"
                    visible={this.state.visible}
                    type="TailSpin"
                    color="#419DD0"
                    height={100}
                    width={100}
                />
                 <span className="text-center text-blue">Processing Please Wait....</span>
            </div>
        )
    }
}

export default Loading
