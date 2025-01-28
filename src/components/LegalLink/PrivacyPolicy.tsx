import React from 'react';

const CancellationAndRefundPolicy: React.FC = () => {
    return (
        <div className="prose max-w-none px-6 py-4">
            <h1>Cancellation and Refund Policy</h1>
            <p className="text-sm text-gray-600">Last updated on 12-12-2024 13:26:28</p>

            <p>
                At Decoding Bollywood Hits Academy, we aim to provide a seamless and enriching learning
                experience for all our students. However, we understand that sometimes you may need to cancel or
                request a refund. This policy outlines the terms under which cancellations and refunds are allowed.
            </p>

            <h2>1. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <strong>Course Enrollment:</strong> Once you have enrolled in a course, you may cancel your enrollment
                    within a specified period to be eligible for a refund, as described below.
                </li>
                <li>
                    <strong>Cancellation Process:</strong> To cancel your enrollment, please contact us via email at
                    <span className="text-blue-600"> info@decodingbollywoodhits.in </span> or use the "Cancel" option on your account page (if applicable).
                    You must provide your enrollment details, including your full name, email address, and course title.
                </li>
            </ul>

            <h2>2. Refund Policy</h2>
            <p>
                Our refund policy depends on the course type and the timing of your cancellation. Please review the
                specific refund terms for each course at the time of enrollment. The general refund terms are as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <strong>Refund for Courses with No Access Yet:</strong> If you cancel your enrollment before accessing
                    the course content, you are eligible for a full refund within 7 days of purchase. This refund will be
                    processed back to the original payment method.
                </li>
                <li>
                    <strong>Refund for Courses After Accessing Content:</strong>
                    <ul className="list-disc pl-6">
                        <li>Within 14 days of purchase: You may request a partial refund of 50% of the course fee.</li>
                        <li>
                            After 14 days of purchase: Unfortunately, no refunds will be provided if more than 14 days
                            have passed after enrollment, as the content has been accessed.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Special Programs and Workshops:</strong>
                    <ul className="list-disc pl-6">
                        <li>
                            Special Event/Workshop: No refunds will be offered for special events or workshops once
                            the registration is confirmed.
                        </li>
                        <li>
                            Early Bird Discounts: If you enrolled using an early bird or promotional discount, refunds
                            may be subject to the specific terms of the offer.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Refund Exceptions:</strong>
                    <ul className="list-disc pl-6">
                        <li>If you’ve completed more than 50% of the course or program.</li>
                        <li>If you’ve attended live sessions or accessed exclusive content.</li>
                        <li>If you’ve violated any of the Academy’s Terms and Conditions.</li>
                    </ul>
                </li>
            </ul>

            <h2>3. How Refunds Are Processed</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    Refunds will be processed to the original method of payment within 7–10 business days.
                </li>
                <li>You will receive a notification once your refund has been processed.</li>
                <li>
                    Please note that depending on your payment provider or bank, it may take additional time
                    for the funds to be reflected in your account.
                </li>
            </ul>

            <h2>4. Non-Refundable Fees</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>Any administrative or processing fees (if applicable) may not be refunded.</li>
                <li>
                    Course materials such as eBooks, PDFs, or downloadable content that were accessed or
                    distributed prior to cancellation are non-refundable.
                </li>
            </ul>

            <h2>5. Course Transfers</h2>
            <p>
                If you are unable to continue with the course but would like to transfer to another course, we may
                allow one-time course transfers under certain conditions. You must contact the Academy support
                team to discuss transfer options. A transfer fee may apply.
            </p>

            <h2>6. Cancellation and Refund for Subscription Plans</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    If you have enrolled in a subscription-based plan, you may cancel your subscription at any time by
                    logging into your account and adjusting your subscription settings. However, please note:
                    <ul className="list-disc pl-6">
                        <li>
                            Cancellations made before the end of the current billing period will prevent automatic
                            renewal for the following period.
                        </li>
                        <li>Payments for the current billing period are non-refundable.</li>
                    </ul>
                </li>
            </ul>

            <h2>7. Contact Us for Cancellation or Refund Requests</h2>
            <p>
                To initiate a cancellation or request a refund, please contact our support team at:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Email:  support@decodingbollywoodhits.in </li>
                <li>Phone:  9836311375/6290384035</li>
                <li>Website: decodingbollywoodhits.in </li>
            </ul>
            <p>Please allow 5–7 business days for processing.</p>

            <h2>8. Changes to the Cancellation and Refund Policy</h2>
            <p>
                Decoding Bollywood Hits Academy reserves the right to modify this Cancellation and Refund Policy at
                any time. Any updates to the policy will be posted on this page. Changes will apply to all future
                enrollments and will not affect the refund or cancellation terms for previous purchases.
            </p>
        </div>
    );
};

export default CancellationAndRefundPolicy;
