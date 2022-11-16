import React from 'react'
import { Carousel } from 'bootstrap'
import img5 from '../../../img/img5.png'
import img6 from '../../../img/img6.jpg'
import img7 from '../../../img/img7.jpg'
import img8 from '../../../img/img8.jpg'
import img4 from '../../../img/img4.jpeg'
import img2 from '../../../img/img2.jpg'
import img3 from '../../../img/img3.jpg'
import './home.css';

const Home = () => {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-8'>
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={img5} class="d-block w-100" alt="..." />
                                <h3 className='mt-2'>Boletim Informativo da AMOG - Edicao 4</h3>
                                <h4 className='primary mt-2'>Abril/Maio/Junho</h4>
                            </div>
                            <div class="carousel-item">
                                <img src={img6} class="d-block w-100" alt="..." />
                                <h3 className='mt-2'>Homenageados Membros da AMOG</h3>
                                <h4 className='primary mt-2'>Em cerimónia alusiva ao 46º aniversário do HCM</h4>
                            </div>
                            <div class="carousel-item">
                                <img src={img7} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={img8} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className='col-12'>
                            <div id="carousel" class="carousel slide" data-bs-ride="false">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={img4} class="d-block w-100" alt="..." />
                                        <p>Novo Corpo Directivo da AMOG Eleito</p>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={img3} class="d-block w-100 " alt="..." />
                                        <p>Novo Corpo Directivo da AMOG Eleito</p>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div id="carousel" class="carousel slide" data-bs-ride="false">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={img4} class="d-block w-100" alt="..." />
                                        <p>Novo Corpo Directivo da AMOG Eleito</p>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={img3} class="d-block w-100 " alt="..." />
                                        <p>Novo Corpo Directivo da AMOG Eleito</p>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home