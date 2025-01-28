export const WHATSAPP_CONFIG = {
    phoneNumber: '9836311375',
    defaultMessage: 'Hii Saswat, i want to Know more about DecodingBollywoodHits (DBH) ',
    popupDuration: 3000, // 3 seconds
    popupInterval: 10000, // 20 seconds
};

export const generateWhatsAppUrl = (phoneNumber: string, message: string): string => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};