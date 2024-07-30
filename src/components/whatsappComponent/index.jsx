import React, { useState, useEffect } from 'react';
import whatsappBot from "../../assets/WhatsappBot.png";
import Modal from 'react-modal';
import './index.css';

const WhatsAppComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const openPopup = () => {
    setIsPopupOpen(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const closePopup = () => {
    const id = setTimeout(() => {
      setIsPopupOpen(false);
    }, 2000); // Adjust the timeout duration as needed (2000 milliseconds = 2 seconds)
    setTimeoutId(id);
  };


  const joinLink = 'https://chat.whatsapp.com/Eq3V7ejMadBDz2j8aTgv6X';

  useEffect(() => {
    return () => {
      // Clear timeout on component unmount to avoid memory leaks
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div>
      <div
        className='whatsapp-logo'
        style={{ position: 'fixed', bottom: '18px', left: '18px', cursor: 'pointer', zIndex: '9999' }}
        onMouseEnter={openPopup}
        onMouseLeave={closePopup}
      >
        <img src={whatsappBot} alt="" />
      </div>
      <div>
        <Modal
          id='whatsapp-modal-popup'
          isOpen={isPopupOpen}
          onRequestClose={closePopup}
          className='custom-modal'
          overlayClassName='custom-modal-overlay'
        >

          <div className='wtsplink-container'>

            <div className='wtsplink-section'>
              <div className='wtsplink-content'>
                <div className="poppins-regular" id='popup-title'>Medical Updates 2024</div>
                <div id='whatsapp-link'>
                  <a className="poppins-regular" href={joinLink} target='_blank' rel='noopener noreferrer'>
                    <img  src={whatsappBot} alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className='wtsplink-section'>
              <div className='wtsplink-content'>
                <div className="poppins-regular" id='popup-title'>Engineering Updates 2024</div>
                <div id='whatsapp-link'> <a className="poppins-regular" href="https://chat.whatsapp.com/FRdPyZKPwlPAN7t8qUv51t" target='_blank' rel='noopener noreferrer'>
                  <img src={whatsappBot} alt="" />
                </a></div>
              </div>
            </div>

            <div className='wtsplink-section'>
              <div className='wtsplink-content'>
                <div className="poppins-regular" id='popup-title'>Chat on WhatsApp</div>
                <div id='whatsapp-link'> <a className="poppins-regular" href="https://wa.me/7030300132" target='_blank' rel='noopener noreferrer'>
                  <img src={whatsappBot} alt="" />
                </a></div>
              </div>
            </div>


          </div>
        </Modal>
      </div>
    </div>
  );
};

export default WhatsAppComponent;

















