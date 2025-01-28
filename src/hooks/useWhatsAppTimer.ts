import { useEffect } from 'react';
import { WHATSAPP_CONFIG } from '../utils/whatsapp';

export const useWhatsAppTimer = (setShowPopup: (show: boolean) => void) => {
    useEffect(() => {
        const { popupDuration, popupInterval } = WHATSAPP_CONFIG;

        const interval = setInterval(() => {
            setShowPopup(true);
            const timeout = setTimeout(() => {
                setShowPopup(false);
            }, popupDuration);

            return () => clearTimeout(timeout);
        }, popupInterval);

        return () => clearInterval(interval);
    }, [setShowPopup]);
};