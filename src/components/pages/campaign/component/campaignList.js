import React from 'react'
import CardCampaign from './card'

export default function CampaignList({store}) {
    return (
        <div className="container" id="homepage-campaign">
            <div className="row">
                <div className="col-md-12">
                    <div className="tab-content">
                        <CardCampaign store={store}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
