import React from 'react'
import './Cv.css'


const Cv = () => {
    // CV indirme fonksiyonu
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'Taner_Cuhadar_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='cv'>
            <h1 className='cv-baslik'>CV&Eğitim</h1>

            {/* CV İndirme Butonu */}
            <div className='cv-download-section'>
                <button className='cv-download-btn' onClick={downloadCV}>
                    <span className='btn-icon'>📄</span>
                    <span className='btn-text'>CV'mi İndir</span>
                </button>
            </div>

            {/* Yetkinlikler Bölümü */}
            <div className='yetkinlikler'>
                <h2 className='yetkinlik-baslik'>Yetkinliklerim</h2>
                <div className='yetkinlik-grid'>
                    <div className='yetkinlik-kart'>
                        <h3>Programlama Dilleri</h3>
                        <ul>
                            <li>Kotlin (Android)</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>C++</li>
                            <li>Java</li>
                        </ul>
                    </div>

                    <div className='yetkinlik-kart'>
                        <h3>Teknolojiler & Framework'ler</h3>
                        <ul>
                            <li>React.js</li>
                            <li>Firebase</li>
                            <li>SQLite</li>
                            <li>Room Database</li>
                            <li>TensorFlow Lite</li>
                        </ul>
                    </div>

                    <div className='yetkinlik-kart'>
                        <h3>Araçlar & Platformlar</h3>
                        <ul>
                            <li>Android Studio</li>
                            <li>Qt Creator</li>
                            <li>Unity</li>
                            <li>Git & GitHub</li>
                            <li>VS Code</li>
                        </ul>
                    </div>

                    <div className='yetkinlik-kart'>
                        <h3>Yapay Zeka & ML</h3>
                        <ul>
                            <li>MediaPipe</li>
                            <li>Q-Learning</li>
                            <li>Computer Vision</li>
                            <li>NLP</li>
                            <li>Model Training</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Staj Bölümü */}
            <div className='staj'>
                <h2 className='staj-baslik'>Staj Deneyimi</h2>
                <p className='staj-paragraf'>STAJIMI TÜRK HAVACILIK VE UZAY
                    SANAYİİ 'DE(TUSAŞ) SİMÜLASYON
                    EKİBİNDE YAPTIM. <br /> Kullandığım teknolojiler C++, QT CREATOR, UDP,
                    CMAKE, SQL
                    C++ ve QT kullanarak soket programlama
                    uygulaması yaptım. Ve bu uygulamaya QT ile
                    arayüz tasarladım. Bu proje sayesinde 2
                    bilgisayar arasında client server işlevlerini yerine
                    getirerek haberleşmelerini sağladım.
                    Diğer Uygulama olarak QT ve SQL kullanarak bir
                    arayüz tasarladım. Bu arayüzde SQL sorgularını
                    QT ile tasarladığım arayüz üzerinden yaptım. Ve
                    QT üzerinden kullanıcı arayüzü sağlayarak bir
                    uygulama yaptım. </p>
            </div>
        </div>
    )
}

export default Cv