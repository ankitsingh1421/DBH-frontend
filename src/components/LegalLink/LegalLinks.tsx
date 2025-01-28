import React from 'react';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal';
import TermsConditions from './TermsConditions';
import CancellationAndRefundPolicy from './PrivacyPolicy';

const LegalLinks: React.FC = () => {
    const {
        isOpen: isPrivacyOpen,
        openModal: openPrivacy,
        closeModal: closePrivacy
    } = useModal();

    const {
        isOpen: isTermsOpen,
        openModal: openTerms,
        closeModal: closeTerms
    } = useModal();

    return (
        <div className="text-sm text-gray-400">
            <span>©️ 2024 DecodingBollywoodHits website. All rights reserved.</span>

            {/* Links container on separate lines */}
            <div className="mt-2">
                <button
                    onClick={openTerms}
                    className="underline hover:text-gray-200"
                >
                    Terms & Conditions
                </button>
            </div>
            <div className="mt-1">
                <button
                    onClick={openPrivacy}
                    className="underline hover:text-gray-200"
                >
                    Cancellation and Refund Policy
                </button>
            </div>

            {/* Modals */}
            <Modal isOpen={isTermsOpen} onClose={closeTerms} title="Terms & Conditions">
                <TermsConditions />
            </Modal>

            <Modal isOpen={isPrivacyOpen} onClose={closePrivacy} title="Privacy Policy">
                <CancellationAndRefundPolicy />
            </Modal>
        </div>
    );
};

export default LegalLinks;
