import React from 'react';

interface WhatsAppPopupProps {
    show: boolean;
}

const WhatsAppPopup: React.FC<WhatsAppPopupProps> = ({ show }) => {
    if (!show) return null;

    return (
        <div className="whatsapp-popup" >
            <div className="popup-content">
                <span>WhatsApp Now!</span>
            </div>
            <div className="popup-arrow"></div>
        </div>
    );
};

export default WhatsAppPopup;