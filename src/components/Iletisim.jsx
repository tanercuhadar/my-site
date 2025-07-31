import React, { useState } from 'react'
import './Iletisim.css'

const Iletisim = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:tcuhadar117@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`İsim: ${formData.name}\nEmail: ${formData.email}\n\nMesaj:\n${formData.message}`)}`;
    window.open(mailtoLink);
  };

  return (
    <div className='iletisim'>
      <h1 className='iletisim-baslik'>İletişim</h1>
      
      {/* İletişim Bilgileri */}
      <div className='iletisim-bilgiler'>
        <div className='iletisim-kart'>
          <div className='iletisim-icon'>📧</div>
          <h3>Email</h3>
          <p>tcuhadar117@gmail.com</p>
        </div>
        
        <div className='iletisim-kart'>
          <div className='iletisim-icon'>📱</div>
          <h3>Telefon</h3>
          <p>+90 545 696 45 63</p>
        </div>
        
        <div className='iletisim-kart'>
          <div className='iletisim-icon'>📍</div>
          <h3>Konum</h3>
          <p>Çorum, Türkiye</p>
        </div>
      </div>

      {/* Mail Gönderme Formu */}
      <div className='iletisim-form'>
        <h2 className='form-baslik'>Bana Ulaşın</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-grup'>
            <input
              type="text"
              name="name"
              placeholder="Adınız"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className='form-grup'>
            <input
              type="email"
              name="email"
              placeholder="Email Adresiniz"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className='form-grup'>
            <input
              type="text"
              name="subject"
              placeholder="Konu"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className='form-grup'>
            <textarea
              name="message"
              placeholder="Mesajınız..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" className='gonder-btn'>
            <span className='btn-icon'>📤</span>
            <span className='btn-text'>Mesaj Gönder</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Iletisim