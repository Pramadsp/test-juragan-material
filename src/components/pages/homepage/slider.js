import React from 'react'
import Swiper from 'react-id-swiper';
 
const Slider = (props) => {
    var {scrollToCampaign} = props
    const params = {
        pagination: {
            // el: '.swiper-pagination',s
            clickable: false,
            dynamicBullets: false
        },
        autoplay: {
            delay: 60000,
            disableOnInteraction: false
        },
        navigation: {
            // nextEl: '.swiper-button-next',
            // prevEl: '.swiper-button-prev'
        }
    }
    return(
        <React.Fragment>
        <img src="/assets/img/banner1.jpg" className='d-md-none' style={{width: '100%',height:'100%', objectFit: 'cover'}}/>
        <div className="container-fluid d-flex flex-md-column flex-row justify-content-between align-items-center px-0 slider-content">
            <div className="d-flex flex-row justify-content-between w-100">
                <div className="p-md-5 pb-5 px-4 d-flex align-items-center justify-content-center" style={{width: '600px'}}>
                    <div>
                        <span className="slide-text my-3"><b>Investasi di Bisnis atau Proyek Favoritmu Semudah Berbelanja di Toko Online</b></span>
                        <p style={{fontSize: '20px'}} className="my-3">Anda tidak perlu lagi menjadi milliuner untuk dapat berinvestasi ke Startup atau UKM favoritmu</p>
                        <a className="btn bg-blue text-white py-3 w-100 border-radius-10" type="button" href="#">Yuk, Mulai Sekarang!
                            <i className="fa fa-arrow-circle-down ml-2"></i>
                        </a>
                        {/* <div className="d-flex justify-content-between mt-3">
                            <a className="mr-2" target="_blank" href="https://play.google.com/store/apps/details?id=liku.id">
                                <img className="d-block" src="/assets/img/google-play.svg" style={{width: '100%', height: 'auto'}} />
                            </a>
                            <a className="ml-2" href="#" onClick={(e) => e.preventDefault()}>
                                <img className="d-block" src="/assets/img/app-store.svg" style={{width: '100%', height: 'auto'}} />
                            </a>
                        </div> */}
                        <div className="mt-5">
                            <div className='row d-flex flex-row align-items-center'>
                                <div className='col-md-5'>
                                    <h5>Berizin dan Diawasi oleh :</h5>
                                </div>
                                <div className='col-md-7'>
                                    <img src="assets/img/OJK/OJK.png" alt="ojk-logo" className="w-70"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pr-0 d-none d-md-block" style={{width: 'calc(100vw - 620px)'}}>
                    <Swiper {...params}>
                        <div className="d-xl-flex align-items-xl-center slider-fix-height">
                            <img src="/assets/img/banner1.jpg" style={{width: '80%',height:'100%', objectFit: 'cover'}}/>
                        </div>
                        <div className="d-xl-flex align-items-xl-center slider-fix-height">
                            <img src="/assets/img/banner1.jpg" style={{height:'100%', objectFit: 'cover'}}/>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
        </React.Fragment>
        )
}
 
export default Slider;

// class Slider extends Component {
//     render() {
//         return (
//             <div className="simple-slider">
//                 <div className="swiper-container">
//                     <div className="swiper-wrapper">
//                         <div className="d-xl-flex align-items-xl-center swiper-slide slider-homepage" style={{backgroundImage: 'url("%PUBLIC_URL%/assets/img/Group%201532.png)'}}>
//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-md-4">
//                                         <h1 className="text-white slide-text-heading">Ekuid</h1>
//                                         <span className="text-white slide-text text-blue">Equity Crowd Funding</span>
//                                         <p className="text-white">Now you can be an investor in your favourite creative projects!</p>
//                                         <button className="btn btn-lg bg-blue text-white" type="button">
//                                             Invest Now
//                                             <i className="fa fa-arrow-circle-o-down fa-lg ml-2"></i>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="swiper-slide slider-homepage" style={{backgroundImage:'url(https://cdn.bootstrapstudio.io/placeholders/1400x800.png)'}}></div>
//                         <div className="swiper-slide slider-homepage" style={{backgroundImage:'url(https://cdn.bootstrapstudio.io/placeholders/1400x800.png)'}}></div>
//                     </div>
//                     <div className="swiper-pagination"></div>
//                     <div className="swiper-button-prev"></div>
//                     <div className="swiper-button-next"></div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Slider