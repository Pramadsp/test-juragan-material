import React, { Component } from 'react'

class Footer extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: {
                alamat1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                alamat2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                alamat3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                noTelp: '089987655263',
                emailSupport: 'email@test.com',
                jamOperational: '08.00 - 16.00 WIB',
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="footer-disclaimer border-top mt-5">
                    <div className="container-fluid">
                        <div className="row mx-md-5 mx-sm-3">
                            <div className="col-md-12">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-blue bg-blue-footer text-white mb-3">
                    <footer>
                        <div className="container-fluid">
                            <div className="mx-md-5 grid-footer">
                                <div className="alamat mb-4 d-md-block">
                                    <p>PT TEST</p>
                                    <p>{this.state.data.alamat1}</p>
                                    <p>{this.state.data.alamat2}</p>
                                    <p>{this.state.data.alamat3}</p>
                                </div>
                                <div className="download mb-4 d-md-block">
                                    <a target="_blank" href="#">
                                        <img className="d-block mb-4" src="/assets/img/Footer/Play Store.png" style={{width: '170px', height: 'auto'}} />
                                    </a>
                                    <a href="#" onClick={(e) => {e.preventDefault()}}>
                                        <img className="d-block" src="/assets/img/appstore-cs.png" style={{width: '170px', height: 'auto'}} />
                                    </a>
                                </div>
                                <div className="tentangkami text-center">
                                    <h3>Tentang Kami</h3>
                                    <ul className="font-12">
                                        <li><a href="#">Tentang Ekuid</a></li>
                                        <li><a href="#">Hubungi kami</a></li>
                                    </ul>
                                </div>
                                <div className="untukpengguna text-center">
                                    <h3>Untuk Pengguna</h3>
                                    <ul className="font-12">
                                        <li><a href="#">Cara Kerja</a></li>
                                        <li><a href="#">FAQ</a></li>
                                    </ul>
                                </div>
                                <div className="tautanlangsung text-center">
                                    <h3>Tautan Langsung</h3>
                                    <ul className="font-12">
                                        <li><a href="#">Syarat dan Ketentuan</a></li>
                                        <li><a href="#">Kebijakan Privasi</a></li>
                                        <li><a href="#">Kebijakan Cookie</a></li>
                                        <li><a href="#">Peringatan Risiko</a></li>
                                        <li><a href="#">Biaya Pengguna</a></li>
                                        <li><a href="#">Layanan Pengaduan</a></li>
                                    </ul>
                                </div>
                                <div className="mediasosial mb-4">
                                    <h3>Media Sosial</h3>
                                    <ul className="font-12 ul-medsos-footer">
                                        <li>
                                            <a href="#" id='BtnInstagram' target="_blank" class="d-flex justify-content-start align-items-center">
                                                <i className="fa fa-instagram mr-3"></i>
                                                <span>@ekuidofficial</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" id='BtnLinkedin' target="_blank" class="d-flex justify-content-start align-items-center">
                                                <i className="fa fa-linkedin-square mr-3"></i>
                                                <span>Ekuid</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" id='BtnYoutube' target="_blank" class="d-flex justify-content-start align-items-center">
                                                <i className="fa fa-youtube-play mr-3"></i>
                                                <span>Ekuid Official</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row ml-5">
                                <div className="col-md-12 d-none d-md-block contact-view">
                                    <ul>
                                        <li>
                                            <i className="fa fa-whatsapp mr-3" style={{fontSize: '1rem'}}></i>
                                            <span>{this.state.data.noTelp}</span>
                                        </li>
                                        <li>
                                            <i className="far fa-envelope mr-3"></i>
                                            <span>{this.state.data.emailSupport}</span>
                                        </li>
                                        <li>
                                        <i className="far fa-clock mr-3"></i>
                                            <span>{this.state.data.jamOperational}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                <div className="footer-white mb-3">
                    <div className="container-fluid">
                        <div className="grid-footer-copyright mx-md-5">
                            <div className="logo-vers d-flex align-items-center">
                                <img className="d-block mr-3 w-20" src="/assets/img/logo_black.png"/>
                                <span className="d-flex align-items-center">Version 0.0.1 | Hak Cipta 2021 - PT. TEST</span>
                            </div>
                            <div className="likuid-company d-flex justify-content-end align-items-center">
                                <a href="#" target="_blank">
                                    <img className="d-block" src="/assets/img/likuid-company.png" style={{width: '50%'}}/>
                                </a>
                            </div>
                            <div className="company-text">
                                <p className="font-weight-bold">PT TEST sudah berizin dan diawasi oleh Otoritas Jasa Keuangan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer