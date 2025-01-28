import { CircleAnimation } from './CircleAnimation';
import { Logo } from './Logo';
import { useState, useEffect } from 'react';

export function Hero() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false); // New state for the burger menu
  const [isFormSubmitted, setFormSubmitted] = useState(false); // Track form submission

  // Automatically open form after 3 seconds if not submitted
  useEffect(() => {
    if (!isFormSubmitted) {
      const timer = setTimeout(() => {
        if (!isFormSubmitted && !isFormOpen) {
          setFormOpen(true); // Open form only if it's not already open and not submitted
        }
      }, 55000); // 3 seconds interval

      return () => clearTimeout(timer);
    }
  }, [isFormSubmitted, isFormOpen]); // Re-run effect if form submission state or form open state changes

  // Close form when clicking outside it
  const handleClickOutside = (e: any) => {
    if (e.target.id === 'form-overlay') {
      setFormOpen(false);
    }
  };

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [status, setStatus] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfVFQ60OvlI9SAr6-yah7kxhOopp1nMtxP4ms3RZoafS20Wng/formResponse";

    const formPayload = new FormData();
    formPayload.append("entry.1451727019", formData.name);
    formPayload.append("entry.180394246", formData.email);
    formPayload.append("entry.1618493652", formData.phone);
    formPayload.append("entry.2076460102", formData.course);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formPayload,
        mode: "no-cors",
      });

      setStatus("Form submitted successfully!");
      setShowSuccess(true);

      // Reset form data, close form, and mark as submitted
      setFormData({ name: "", email: "", phone: "", course: "" });
      setFormSubmitted(true); // Mark form as submitted to stop auto-opening
      setTimeout(() => {
        setFormOpen(false); // Close form after success
        setShowSuccess(false);
      }, 2000); // Show success message for 2 seconds
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error submitting the form.");
    }
  };

  // Button to open the enquiry form
  const handleEnquiryButtonClick = () => {
    setFormOpen(true); // Open the form when the enquiry button is clicked
  };


  return (
    <div className="relative min-h-screen overflow-hidden bg-navy-900 sm:height-100px" id="home">
      {/* <div className="relative min-h-screen overflow-hidden bg-navy-900"  style={{ boxShadow: "0 10px 20px rgba(139, 92, 246, 0.4)" }} id="home"> */}
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-60" style={{ marginTop: "-60px" }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
         
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="block">
                Unveiling <span className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Voices
                </span>
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              <span className="block">
                Empowering  <span className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Music
                </span>
              </span>
            </h2>
            <button
              onClick={() => setFormOpen(true)}
              className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
            >
              Enquire Now
            </button>
          </div>

          <div className="flex-1 relative flex items-center justify-center">
            <div className="relative w-48 h-48 md:w-72 md:h-72 -mt-8 md:-mt-0"> 
              <div className="absolute inset-0 blur-[160px] bg-blue-600/50 rounded-full" />
              <div className="absolute inset-0 blur-[100px] bg-purple-600/40 rounded-full" />
              {/* <div className="absolute inset-0 animate-spin-slow">
                <CircleAnimation />
              </div> */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center shadow-[0_0_150px_rgba(37,99,235,0.5)] relative">
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(37,99,235,0.3)]" />
                  <div className="absolute inset-0 rounded-full shadow-[0_0_80px_rgba(139,92,246,0.4)]" />
                  <Logo />
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>


      {/* Burger Navigation Menu */}
      <div
        className={`fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-50 transition-transform ${isNavOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <button
          onClick={() => setFormOpen(true)} // Trigger form opening manually
          className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 text-sm"
        >
          Enquiry
        </button>

        <button
          onClick={() => setNavOpen(false)}
          className="text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90"
        >
          Close Menu
        </button>
      </div>


      {isFormOpen && (
        <div
          id="form-overlay"
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={handleClickOutside}
        >
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-10/12 max-w-sm relative">
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-3">Enquiry Form</h2>
            <div>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
                    placeholder="Enter your email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select a Course
                  </label>
                  <select
                    id="course"
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose</option>
                    <option>Synthesizer</option>
                    <option>Tabla</option>
                    <option>Harmonium</option>
                    <option>Cajon</option>
                    <option>Darbuka</option>
                    <option>Guitar (Optional)</option>
                    <option>Indian Classical Music</option>
                    <option>Bollywood Music</option>
                    <option>Vocal Grooming</option>
                    <option>Music Production Program</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 text-sm"
                >
                  Submit
                </button>
              </form>
              {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}





