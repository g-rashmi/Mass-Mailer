

   
 
    import React, { useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify'; 
import { MdEmail } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import { MdSubject } from "react-icons/md";

function App() {
  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
} const [check,setCheck]=useState(false) ;
  const [fromEmail, setFromEmail] = useState('');
  const [toEmail, setToEmail] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [subject, setSubject] = useState('');
 const handleaddemail =()=>{ 
    const newElement = document.createElement('p');
    if( isValidEmail(toEmail)==false){
      toast.error('Write valid email', { position: 'top-right' });
      return;
    } 
      newElement.innerHTML = toEmail;
      newElement.classList.add('card'); 
      newElement.style.padding='5px' ;document.getElementById('displayem').appendChild(newElement);
      setCheck(true);
  
 }
  const handleSendEmail = () => {
    if (!fromEmail || !check || !emailMsg||!subject) {
      // Show error message if any field is empty
      toast.error('Please fill out all fields.', { position: 'top-right' });
      return;
    }
    // Your email sending logic goes here
    // For now, let's just show a success message 
   
if( isValidEmail(fromEmail)==false){
  toast.error('Write valid email', { position: 'top-right' });
  return;
} 
    toast.success('Email sent successfully!', { position: 'top-right' });
  };

  return (
    <div>
    <div>   <h1 className="text-center">  <MdEmail /> Nodemailer</h1></div>
      <div className="container" style={{ width: '55%', fontSize: '1.2rem' }}>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
        <div className="container">
          <label>From:</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <MdOutlineMailOutline />
            </span>
            <input type="email" className="form-control" placeholder="@gmail.com" aria-label="From Email" aria-describedby="basic-addon1" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} required />
          </div>
        </div>
        <div className="container">  <label>Subject:</label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
          <MdSubject />
          </span>
          <input type="email" className="form-control" placeholder="write ur subject" aria-label="From Email" aria-describedby="basic-addon1" onChange={(e) => setSubject(e.target.value)} required />
        </div></div>
        <div className="container">
          <label>Email-MSG</label>
          <div className="input-group">
            <span className="input-group-text">Type Your MSG</span>
            <textarea className="form-control" aria-label="Email Message" value={emailMsg} onChange={(e) => setEmailMsg(e.target.value)} required />
          </div>
        </div>
        <div className="container">
          <label>To:</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <MdOutlineMailOutline />
            </span>
            <input type="email" className="form-control" placeholder="@gmail.com" aria-label="To Email" aria-describedby="basic-addon1" value={toEmail} onChange={(e) => setToEmail(e.target.value)} required />
            <button className="input-group-text" onClick={handleaddemail} id="basic-addon1">
              +
            </button>
          </div> 
          <div className="container " id="displayem"></div>
        </div>
        <div className="text-center container">
          <button type="button" className="btn btn-success" onClick={handleSendEmail}>
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
