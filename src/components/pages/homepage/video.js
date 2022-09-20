import React, { Component } from 'react'

class Video extends Component {
    constructor(props){
        super(props)

        this.state = {
            emailSubscribe : '',
        }

        this.formEmailRef = React.createRef()
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })

        if(e.target.value.length !== 0){
            document.getElementById(e.target.id).classList.remove('is-invalid')
        }
    }

    render() {
        return (
            <div className="container">
                    {/* <div className="row mb-5">
                    <div className="col-md-12 d-flex justify-content-center">
                        <span className="mt-5 mb-2 h3 text-center">Mengapa Ekuid Securities Crowdfunding?</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <video width="1000" controls>
                        <source src="" type="video/mp4" />
                    </video>
                </div>
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <a className="btn bg-blue text-white py-3 border-radius-10" style={{width: '20%'}} type="button" href="/welcome">Mulai Disini</a>
                    </div>
                </div> */}
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <span className="mt-5 h3 text-center">Jadilah yang Pertama untuk mendapatkan info terkini dari Ekuid!</span>    
                    </div>
                    <div className="container d-flex justify-content-center">
                        <div class="input-group mb-3 mt-5 w-75">
                            <input type="text" class="form-control" name="emailSubscribe" id="emailSubscribe" placeholder="Masukkan Alamat Email Anda" ref={this.formEmailRef}/>
                            <div class="input-group-append">
                                <a class="btn bg-blue text-white" id="BtnKirimNewsletter" href='#'>Kirim</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video