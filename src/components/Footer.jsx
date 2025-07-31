import React from 'react'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer-content'>
                {/* Üst Footer Bölümü */}
                <div className='footer-ust'>
                    <div className='footer-bolum'>
                        <h3>Taner Çuhadar</h3>
                        <p>Bilgisayar Mühendisi</p>
                        <p>Mobil uygulama geliştirme ve yapay zeka alanlarında çalışmalar yapan tutkulu bir yazılımcı.</p>
                    </div>

                    <div className='footer-bolum'>
                        <h3>Hızlı Linkler</h3>
                        <ul>
                            <li><a href="#home">Ana Sayfa</a></li>
                            <li><a href="#about">Hakkımda</a></li>
                            <li><a href="#projects">Projeler</a></li>
                            <li><a href="#cv">CV&Eğitim</a></li>
                            <li><a href="#contact">İletişim</a></li>
                        </ul>
                    </div>

                    <div className='footer-bolum'>
                        <h3>Teknolojiler</h3>
                        <ul>
                            <li>Kotlin (Android)</li>
                            <li>Python</li>
                            <li>React.js</li>
                            <li>Firebase</li>
                            <li>TensorFlow</li>
                        </ul>
                    </div>

                    <div className='footer-bolum'>
                        <h3>İletişim</h3>
                        <div className='footer-iletisim'>
                            <p>📧 tcuhadar117@gmail.com</p>
                            <p>📱 +90 545 696 45 63</p>
                            <p>📍 Çorum, Türkiye</p>
                        </div>
                        <div className='footer-sosyal'>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='sosyal-link'>
                                <span className='sosyal-icon'>🐙</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='sosyal-link'>
                                <span className='sosyal-icon'>💼</span>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='sosyal-link'>
                                <span className='sosyal-icon'>🐦</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Alt Footer Bölümü */}
                <div className='footer-alt'>
                    <div className='footer-copyright'>
                        <p>&copy; {currentYear} Taner Çuhadar. Tüm hakları saklıdır.</p>
                    </div>
                    <div className='footer-made'>
                        <p>Made with ❤️ by Taner Çuhadar</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer 