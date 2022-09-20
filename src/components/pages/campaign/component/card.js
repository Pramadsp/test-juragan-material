import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Loader from 'react-loader-spinner'

class CardCampaign extends Component {
    constructor(props){
        super(props)

        this.state = {
            // DataCampaign: {},
            showCategory: false,
            loadMoreAnimationElem: null,
            selectedSectorList: [],
            selectedBusinessTypeList: [],
            securitiesType : 'utang',
            campaignStatus: 'latest'
        }

        this.sectorList = [
        ]

        this.businessTypeList = [
            'B2B',
            'B2C',
            'Mixed B2B/B2C'
        ]

        this.cardElem = []
        this.cardElemFunded = []
        this.campaignPage = 0
        this.loadCampaignStatus = {
            loadCount: 0,
            totalCount: 0,
        }
        this.loadCampaignSoon = {
            loadCount: 0,
            totalCount: 0,
        }

        this.campaignIds = null
        this.categories = []
    }
        
    componentDidMount = async () => {
        this.createLoadingAnimation()

        if(document.getElementById('campaign-card-footer')){
            document.getElementById('campaign-card-footer').classList.remove('d-none')
        }
    }

    componentDidUpdate = (prevProps,prevState) => {
        if(prevState.securitiesType !== this.state.securitiesType || (this.state.campaignStatus !== prevState.campaignStatus)){
            this.campaignPage = 0
        }
    }

    createLoadingAnimation = () => {
        ReactDOM.render(
            <div className="col-md-12 d-flex flex-column justify-content-center align-content-center">
                <Loader
                    className="loading d-flex justify-content-center align-content-center"
                    visible={true}
                    type="TailSpin"
                    color="#419DD0"
                    height={100}
                    width={100}
                />
                <span className="text-center text-blue">Memuat Data Campaign, Harap Tunggu</span>
            </div>
            ,document.getElementById(`card-campaign-${this.state.campaignStatus}`)
        ) 
    }

    toggleButtonAnimaton = (showLoadButton) => {
        if(showLoadButton){
            var loadMoreAnimationElem =          
                <React.Fragment>
                    <Loader
                        className="loading d-flex justify-content-center align-content-center"
                        visible={true}
                        type="ThreeDots"
                        color="#419DD0"
                        height={100}
                        width={100}
                    />
                    <span className="text-center text-blue">Memuat lebih banyak Data Campaign, Harap Tunggu!</span>
                </React.Fragment>

            this.setState({
                loadMoreAnimationElem : loadMoreAnimationElem
            })
        }else{
            var loadMoreAnimationElem =
                <button className="btn bg-blue text-white py-3 px-4 border-radius-10" type="button">Muat Lebih Banyak Penawaran
                    <i className="fa fa-arrow-circle-down ml-2"></i>
                </button>

            if(this.loadCampaignStatus.totalCount <= this.loadCampaignStatus.loadCount){
                this.setState({
                    loadMoreAnimationElem: null
                })
            }else{
                this.setState({
                    loadMoreAnimationElem : loadMoreAnimationElem
                })
            }

        }
    }

    changeSecuritiesType = (e,securitiesType) => {
        e.preventDefault()

        this.setState({
            securitiesType : securitiesType
        })
    }

    changeActiveTab = (tabName) => {
        this.setState({
            campaignStatus: tabName
        })
    }

    render() {
        return (
            <React.Fragment>
                <div id={`tab-campaign-latest`} className={`tab-pane active`} role="tabpanel">
                    <div className="d-flex flex-md-row flex-column-reverse justify-content-between">
                        <ul className="nav nav-tabs d-md-flex custom-tab mb-4">
                            <li className="nav-item"><a className={`btn bg-transparent btn-transparent ml-3`}>Kategori <i className="fa fa-sliders"></i></a></li>
                            
                            <li className="nav-item"><a className={`btn bg-blue text-white ml-3`}>Utang </a></li>
                            <li className="nav-item"><a className={`btn bg-transparent btn-transparent ml-3`}>Saham </a></li>
                        </ul>
                        <ul className="nav nav-tabs d-flex flex-row flex-md-column flex-lg-row custom-tab custom-tab-homepage mb-3 mb-md-4">
                            <li className="nav-item" style={{cursor: 'pointer'}}><a className={`nav-link active font-weight-bold mx-md-0 mx-3`} role="tab" data-toggle="tab">Penawaran Berlangsung</a></li>
                            <li className="nav-item" style={{cursor: 'pointer'}}><a className={`nav-link font-weight-bold`} role="tab" data-toggle="tab">Penawaran Berhasil</a></li>
                            <li className="nav-item" style={{cursor: 'pointer'}}><a className={`nav-link font-weight-bold`} role="tab" data-toggle="tab">Penawaran Akan Datang</a></li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row slide-card-campaign" id={`card-campaign-latest`}>
                            </div>
                            <div id="campaign-card-footer" className="d-none">
                                <div className="row mb-5">
                                    <div className="col-md-12 text-center" id="load-more-button">
                                        {this.state.loadMoreAnimationElem}
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col-md-6 offset-md-3 text-center">
                                        All early stage investment posted on Ekuid entail risk. Please read the educational found <a href="#" className="text-blue"><u>here</u></a> to understand the <a href="#" className="text-blue"><u>risks</u></a>.
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CardCampaign
