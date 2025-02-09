import { useEffect, useState } from 'react';
import Notification from '../notification-ui/Notification';


const Contact = () => {
  const[showNoti , setshowNoti] = useState(false)
 useEffect(() => {
        if (showNoti) {
          const timer = setTimeout(() => setshowNoti(false), 3000); // Auto-close after 3 sec
          return () => clearTimeout(timer); // Cleanup on unmount
        }
      }, [showNoti]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure entry IDs are correct
    const formDataToSend = new FormData();
    formDataToSend.append('entry.600595829', formData.name); // Name entry ID
    formDataToSend.append('entry.29189374', formData.phone); // Phone entry ID
    formDataToSend.append('entry.338725172', formData.email); // Email entry ID
    formDataToSend.append('entry.1215679151', formData.course); // Course entry ID
    formDataToSend.append('entry.35380995', formData.comments); // Comments entry ID

    try {
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfLDiink8UkjNaKO5eoLA5C_iMRrwC8bSa78YjoOhiVSlZGFg/formResponse",
        {
          method: "POST",
          mode: "no-cors", // This avoids the CORS issue
          body: formDataToSend, // Fixed: Use formDataToSend instead of formData
        }
      );

      // Check for successful response
      if (response.ok || response.status === 0) {
        setshowNoti(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          course: '',
          comments: '',
        });
      } else {
        console.error('Error Response:', response);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form: ' + error.message);
    }
  };


  return (
    <div className="min-h-screen text-white p-8">
      {/* Contact Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Contact <span className="text-purple-400">Us</span>
        </h1>
        <div className="space-y-2 text-orange-300">
  <p>
    Email ID: 
    <a href="mailto:info@decodingbollywoodhits.in" className="text-white hover:underline">
      info@decodingbollywoodhits.in
    </a>
  </p>
  <p>
    Contact Number: 
    <a href="tel:9836311375" className="text-white hover:underline">
      9836311375
    </a>
  </p>
</div>

      </div>

      {/* Enquiry Form */}
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Enquire Now!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name:"
            className="w-full p-3 rounded-md bg-white text-gray-800"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone No:"
            className="w-full p-3 rounded-md bg-white text-gray-800"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID:"
            className="w-full p-3 rounded-md bg-white text-gray-800"
            required
          />

          {/* Course Dropdown */}
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm text-gray-800"
         >
            <option value="">Choose</option>
                    <option>Synthesizer</option>
                    <option>Tabla</option>
                    <option>Guitar </option>
                    <option>Base Guitar</option>
                    <option>Classiwood Music</option>
                    <option>Indian Classical Music</option>
          </select>

          {/* Comments Section */}
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Any comments or queries?"
            className="w-full p-3 rounded-md bg-white text-gray-800"
          />
          <div className="mt-4">
            <button
              type="submit"
              className="w-full p-3 rounded-md bg-purple-500 text-white hover:bg-purple-600 transition-colors"
            >
              Send Enquiry
            </button>
            {showNoti && (
  <div
    className="fixed inset-0 bg-black/30 flex items-end justify-center z-50"
    onClick={() => setshowNoti(false)} // Close when clicking outside
  >
    <div
      className="absolute bottom-10 rounded-md shadow-lg "
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      <Notification
        type="success"
        message="sales Team will Contact You Soon !"
        onClose={() => setshowNoti(false)}
      />
    </div>
  </div>
)}
          </div>
        </form>
        {/* <div className="text-center text-gray-300 my-4">OR</div> */}

        {/* Social Login Buttons */}
        {/* <div className="space-y-3">
          <button className="w-full p-3 rounded-md bg-white text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
            <img src="https://www.google.com/favicon.ico" alt="" className="w-5 h-5" />
            Continue with Google
          </button>
          <button className="w-full p-3 rounded-md bg-[#1877F2] text-white flex items-center justify-center gap-2 hover:bg-[#1865F2] transition-colors">
            <img src="https://www.facebook.com/favicon.ico" alt="" className="w-5 h-5" />
            Continue with Facebook
          </button>
          <button className="w-full p-3 rounded-md bg-black text-white flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
            <img src="https://www.apple.com/favicon.ico" alt="" className="w-5 h-5" />
            Continue with Apple ID
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;

