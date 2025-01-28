// import { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     course: '',
//     comments: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formEndpoint = 'https://docs.google.com/forms/d/e/1FAIpQLSdv-j9v3qxGlrkT6-nzZX_jk8jF1hB9oEGKpThwXbo6zUpwPA/formResponse';
//     const formDataToSend = new FormData();
//     formDataToSend.append('entry.1234567890', formData.name); // replace 'entry.1234567890' with your Google Form's entry ID
//     formDataToSend.append('entry.0987654321', formData.phone); // replace with your phone field's entry ID
//     formDataToSend.append('entry.1122334455', formData.email); // replace with your email field's entry ID
//     formDataToSend.append('entry.6677889900', formData.course); // replace with your course field's entry ID
//     formDataToSend.append('entry.5566778899', formData.comments); // replace with your comments field's entry ID

//     try {
//       const response = await fetch(formEndpoint, {
//         method: 'POST',
//         body: formDataToSend,
//       });

//       if (response.ok) {
//         alert('Form submitted successfully!');
//         setFormData({
//           name: '',
//           phone: '',
//           email: '',
//           course: '',
//           comments: '',
//         });
//       } else {
//         alert('Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('Error submitting form.');
//     }
//   };

//   return (
//     <div className="min-h-screen text-white p-8">
//       {/* Contact Header */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold mb-8">
//           Contact <span className="text-purple-400">Us</span>
//         </h1>
//         <div className="space-y-2 text-orange-300">
//           <p>Email ID: <span className="text-white">info@decodingbollywoodhits.in</span></p>
//           <p>Contact Number: <span className="text-white">9836311375</span></p>
//         </div>
//       </div>

//       {/* Enquiry Form */}
//       <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-8">
//         <h2 className="text-2xl font-semibold text-center mb-6">Enquire Now!</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name:"
//             className="w-full p-3 rounded-md bg-white text-gray-800"
//           />
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Phone No:"
//             className="w-full p-3 rounded-md bg-white text-gray-800"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email ID:"
//             className="w-full p-3 rounded-md bg-white text-gray-800"
//           />
//           <input
//             type="text"
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//             placeholder="Course:"
//             className="w-full p-3 rounded-md bg-white text-gray-800"
//           />

//           {/* Text Area */}
//           <textarea
//             name="comments"
//             value={formData.comments}
//             onChange={handleChange}
//             placeholder="Any comments or queries?"
//             className="w-full p-3 rounded-md bg-white text-gray-800"
//           />
//           <div className="mt-4">
//             <button
//               type="submit"
//               className="w-full p-3 rounded-md bg-purple-500 text-white hover:bg-purple-600 transition-colors"
//             >
//               Send Enquiry
//             </button>
//           </div>
// <div className="text-center text-gray-300 my-4">OR</div>

// {/* Social Login Buttons */}
// <div className="space-y-3">
//   <button className="w-full p-3 rounded-md bg-white text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
//     <img src="https://www.google.com/favicon.ico" alt="" className="w-5 h-5" />
//     Continue with Google
//   </button>
//   <button className="w-full p-3 rounded-md bg-[#1877F2] text-white flex items-center justify-center gap-2 hover:bg-[#1865F2] transition-colors">
//     <img src="https://www.facebook.com/favicon.ico" alt="" className="w-5 h-5" />
//     Continue with Facebook
//   </button>
//   <button className="w-full p-3 rounded-md bg-black text-white flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
//     <img src="https://www.apple.com/favicon.ico" alt="" className="w-5 h-5" />
//     Continue with Apple ID
//   </button>
// </div>

//           {/* Submit Button */}

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import { useState } from 'react';

const Contact = () => {
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


  // const handleSubmit = async (e) => {
  //   e.preventDefault();


  //   // Ensure entry IDs are correct
  //   const formDataToSend = new FormData();
  //   formDataToSend.append('entry.600595829', formData.name); // Replace with actual entry ID for Name
  //   formDataToSend.append('entry.29189374', formData.phone); // Replace with actual entry ID for Phone
  //   formDataToSend.append('entry.338725172', formData.email); // Replace with actual entry ID for Email
  //   formDataToSend.append('entry.1215679151', formData.course); // Replace with actual entry ID for Course
  //   formDataToSend.append('entry.35380995', formData.comments); // Replace with actual entry ID for Comments

  //   try {
  //     const response = await fetch(
  //       "https://docs.google.com/forms/d/e/1FAIpQLSfLDiink8UkjNaKO5eoLA5C_iMRrwC8bSa78YjoOhiVSlZGFg/formResponse",
  //       {
  //         method: "POST",
  //         mode: "no-cors", // This avoids the CORS issue
  //         body: formData,
  //       }
  //     );

  //     // Check for successful response
  //     if (response.ok || response.status === 0) {
  //       alert('Form submitted successfully!');
  //       setFormData({
  //         name: '',
  //         phone: '',
  //         email: '',
  //         course: '',
  //         comments: '',
  //       });
  //     } else {
  //       console.error('Error Response:', response);
  //       alert('Something went wrong. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     alert('Error submitting form: ' + error.message);
  //   }
  // };


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
        alert('Form submitted successfully!');
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
          <p>Email ID: <span className="text-white">info@decodingbollywoodhits.in</span></p>
          <p>Contact Number: <span className="text-white">9836311375</span></p>
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
            <option value="">Choose Course </option>
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

