import React from 'react'
import './Projeler.css'
import fotograf from '../assets/fotograf.jpg'
import yemek from '../assets/yemek.jpeg'
import flappy from '../assets/flappy.jpeg'
import labirent from '../assets/labirent.jpeg'
import yuz from '../assets/yuz.jpeg'
import asl from '../assets/asl.png'


const Projeler = () => {
    return (
        <div className='projeler'>
            <h1 className='projeler-baslik'>Projelerim</h1>
            <div className='proje-bir'>
                <h1>Fotoğraf Paylaşma Uygulaması</h1>
                <img src={fotograf} alt="" />
                <p>Kotlin ile yapılmış bir uygulamadır. Kullanıcılar bu
                    uygulamaya giriş yapabiliyor, fotoğraf paylaşabiliyor ve
                    yorum yapabiliyor.
                    Bu uygulamada backend olarak firebase kullandım.
                    Farklı iş parçacıkları birbirlerini bloke etmemesi için
                    de coroutines teknolojisinden yararlandım. Veri
                    tabanı olarak da sqlite kullandım. </p>
            </div>
            <div className='proje-iki'>
                <h1> YEMEK KİTABI UYGULAMASI </h1>
                <img src={yemek} alt="" />
                <p>Bu uygulamamda da kotlin kullandım. Kullanıcı kaydetmek
                    istediği yemeğin görselini, adını ve içindeki malzemelerini
                    kaydedebiliyor. Kullandığım teknolojiler ise room veri
                    tabanı ve rxJava </p>
            </div>
            <div className='proje-üç'>
                <h1>  İŞARET DİLİ MOBİL UYGULAMASI </h1>
                <img src={asl} alt="" />
                <p>Kotlin ve python kullanarak yaptığım projemdir. Modelin
                    veri toplamasından eğitilmesine kadar kendim eğittiğim
                    işaret dili modelini kotlin ile kullanıcıya sunduğum projem.
                    Projemde hem kameradan hem de metin olarak girdi
                    giren kullanıcıların işaret dilini çeviren bir uygulamadır. </p>
            </div>
            <div className='proje-dört'>
                <h1> LABİRENT VE X-O-X OYUNU </h1>
                <img src={labirent} alt="" />
                <p>  Python ile yapılmış 2 tane farklı oyundur. Ortamdaki ajanı
                    tecrübelerine(q-Table) dayanarak eğittiğim oyundur.  </p>
            </div>
            <div className='proje-beş'>
                <h1> METİN TANIMA / YÜZ TANIMA UYGULAMASI </h1>
                <img src={yuz} alt="" />
                <p>Google'ın ml kit kütüphanesini kullanarak yaptığım mobil
                    uygulamalar.</p>
            </div>
            <div className='proje-altı'>
                <h1> FLAPPY BİRD / ZOMBİ OYUNU </h1>
                <img src={flappy} alt="" />
                <p>   Unity tarafından geliştirdiğim 2 ve 3 boyutlu oyunlardır. </p>
            </div>

        </div>
    )
}

export default Projeler