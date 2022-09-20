import React, { Component } from 'react'
import SmoothScroll from 'smooth-scroll'
import Slider from './slider'
import License from './license'
import { addURL } from '../../../redux/actions/url'
import CampaignList from '../campaign/component/campaignList'
import Video from './video'

class Homepage extends Component {
    constructor(props){
        super(props)

        this.popupSendEmailRef = React.createRef()
        
    }

    componentWillMount(){
        let store = this.props.store;
        store.dispatch(addURL(this.props.location.pathname))
    }

    componentDidMount = async () => {
        window.scrollTo(0, 0);
    }

    scrollToCampaign = () => {
        var elem = document.getElementById('homepage-campaign').getBoundingClientRect()
        
        var scroll = new SmoothScroll();
        scroll.animateScroll(elem.y - 70);
    }
    
    render() {
        return (
            <React.Fragment>
                <Slider scrollToCampaign={this.scrollToCampaign}/>
                <CampaignList store={this.props.store} />
                <Video store={this.props.store}/>
                {/* <License /> */}
            </React.Fragment>
        )
    }
}

export default Homepage
