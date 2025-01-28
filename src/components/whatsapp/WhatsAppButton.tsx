import React, { useState, useEffect } from 'react';
import WhatsAppPopup from './WhatsAppPopup';
import WhatsAppIcon from './WhatsAppIcon';
import { useWhatsAppTimer } from '../../hooks/useWhatsAppTimer';
import { WHATSAPP_CONFIG, generateWhatsAppUrl } from '../../utils/whatsapp';
import '../../styles/whatsapp.css';

const WhatsAppButton: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { phoneNumber, defaultMessage } = WHATSAPP_CONFIG;

    useWhatsAppTimer(setShowPopup);

    const handleWhatsAppClick = () => {
        const url = generateWhatsAppUrl(phoneNumber, defaultMessage);
        window.open(url, '_blank');
    };

    return (
        <div className="relative whatsapp-container">
            <button
                onClick={handleWhatsAppClick}
                className="whatsapp-button"
                aria-label="Contact on WhatsApp"
            >
                <WhatsAppIcon />
            </button>
            <WhatsAppPopup show={showPopup} />
        </div>
    );
};

export default WhatsAppButton;