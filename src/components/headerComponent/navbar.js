import React, { Component } from "react";
import { NavLink  } from "react-router-dom";
import { subscribe } from 'redux-subscriber';

class Navbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            authenticate: '',
            username: this.props.store.getState().sessionAccount ? this.props.store.getState().sessionAccount : '' ,
            elemPhoto: <i className="fa fa-user-circle mr-2" style={{fontSize: '20px'}}></i>,
            toggleMenu : false
        }

        this.store = this.props.store

        this.popupSessionExpiredRef = React.createRef()
    }

    RenderLoginParts = (username,authenticate = false) => {
        var elem 

        elem = <React.Fragment>
                    <a className="btn mr-2 mt-4 mt-md-0 text-black" id="BtnMasuk" href="#">Masuk</a>
                    <a className="btn bg-blue border-radius-8 text-white btn-block-resp" id="BtnDaftar" href="#">Daftar</a>
                </React.Fragment>

        return elem
    }

    setToggle = () =>{
        this.setState({
            toggleMenu : !this.state.toggleMenu
        })
    }
    render() {
        const {
            logout,
        } = this.props

        return (
            <React.Fragment>
            <nav className="navbar navbar-light navbar-expand-md navigation-clean navbar-fixed-blur box-shadow-navbar">
                <div className="container-fluid">
                    <NavLink exact to="/" className="navbar-brand"><img width={'150px'} src="/assets/img/logo_black.png" /></NavLink>
                    <button data-toggle="collapse" className="navbar-toggler border-0" data-target="#navcol-1" onClick={() => this.setToggle()}>
                        <span className="sr-only">Toggle navigation</span>
                        <span className={`navbar-toggler-icon ${!this.state.toggleMenu ? '' : 'd-none'}`}></span>
                        <span className={`fas fa-times font-times ${this.state.toggleMenu ? '' : 'd-none'}`}></span>
                    </button>
                    <div className="collapse navbar-collapse resp-navbar"
                        id="navcol-1">
                        <ul className="nav navbar-nav mr-md-auto text-center text-md-left">
                            <li className={`dropdown nav-item d-none d-md-block`}><a className="nav-link text-black" data-toggle="dropdown" aria-expanded="false" href="#" style={{fontSize: '1rem'}}>Cara Kerja <i class="fas fa-angle-down"></i></a>
                                <div className="dropdown-menu" role="menu" style={{width: '270px'}}>
                                    <a className="dropdown-item radius-border-top" role="presentation" href="#"><img src="/assets/img/penerbit.svg" className="mx-4" style={{width: '10%'}}/>Menjadi Penerbit</a>
                                    <a className="dropdown-item" role="presentation" href="#"><img src="/assets/img/pemodal.svg" className="mx-4" style={{width: '10%'}}/>Menjadi Pemodal</a>
                                    <a className="dropdown-item" role="presentation" href="#"><img src="/assets/img/faq.png" className="mx-4" style={{width: '10%'}}/>FAQ</a>
                                    {/* <a className="dropdown-item" role="presentation" href="#"><img src="/assets/img/sekunder.svg" className="mx-4" style={{width: '10%'}}/>Pasar Sekunder</a>
                                    <a className="dropdown-item radius-border-bottom" role="presentation" href="#"><img src="/assets/img/info.svg" className="mx-4" style={{width: '10%'}}/>Education Center</a> */}
                                </div>
                            </li>
                            <li className={`nav-item d-md-none`}><a className="nav-link text-black" aria-expanded="false" href="#" style={{fontSize: '1rem'}}>Menjadi Penerbit</a></li>
                            <li className={`nav-item d-md-none`}><a className="nav-link text-black" aria-expanded="false" href="#" style={{fontSize: '1rem'}}>Menjadi Pemodal</a></li>
                            <li className={`nav-item d-md-none`}><a className="nav-link text-black" aria-expanded="false" href="#" style={{fontSize: '1rem'}}>FAQ</a></li>
                            <li className="dropdown nav-item d-none">
                                <a className="nav-link text-black" data-toggle="dropdown" aria-expanded="false" href="#" style={{fontSize: '1rem'}}>Experts</a>
                                <div className="dropdown-menu" role="menu">
                                    <a className="dropdown-item" role="presentation" href="#">Angel Investing</a>
                                    <a className="dropdown-item" role="presentation" href="#">Stock Trading</a>
                                </div>
                            </li>
                        </ul>
                        {this.RenderLoginParts(this.state.username,this.state.authenticate)}
                    </div>
                </div>
            </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;
