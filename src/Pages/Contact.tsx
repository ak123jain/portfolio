const Contact = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <div className="bg-gray-100 rounded-lg shadow p-6 w-full max-w-md space-y-4">
          <div>
            <h3 className="text-lg font-medium">Email</h3>
            <p className="text-blue-600">
              <a href="mailto:aj9882854@gmail.com">aj9882854@gmail.com</a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Phone</h3>
            <p className="text-gray-700">+91 76685 97362</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  