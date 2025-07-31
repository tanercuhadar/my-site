import React from 'react'
import './Giris.css'
import profileImage from '../assets/img.jpg' // Fotoğrafı import ediyoruz


const Giris = () => {
    return (
        <div className='giriş'>
            <h1 className='giriş-başlık'>Taner Çuhadar <br /> Bilgisayar Mühendisi</h1>
            <p className='giriş-paragraf'>Merhaba, ben Taner Çuhadar. Bilgisayar Mühendisiyim. Bu benim portfolio sayfam. Burada benim hakkımda bilgileri bulabilirsiniz.</p>
            <div className='giriş-fotoğraf'>
                <img src={profileImage} alt="Taner Çuhadar" />
            </div>

        </div>
    )
}

export default Giris