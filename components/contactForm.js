"use client";
import React,{useState} from 'react';
import axios from 'axios';

const ContactForm = () => {

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name:'',
    email: '',
    number:'',
    select:'',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name:'',
        email: '',
        number:'',
        select:'',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mpzgoqyo',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          '¡Mensaje enviado! Te contactaremos pronto.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main className="lg:p-14 rounded-xl">
    <form onSubmit={handleOnSubmit} className="flex flex-col  mt-0">
      <div className=' mb-10'>
      <label type="textarea" htmlFor='name' className=" h-10 text-white block text-2xl mb-5 font-medium  border-l-4 border-[#32CD32] pl-4">Nombre</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleOnChange}
        required
        value={inputs.name}
        className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-2xl rounded-lg block w-full p-2.5"
        placeholder='Nombre'
      />
      </div>
      <div className=' mb-10'>
      <label htmlFor="email" className=' h-10 text-white block text-2xl mb-2 font-medium mt-4 border-l-4 border-[#32CD32] pl-4'>Email</label>
      <input
        id="email"
        type="email"
        name="_replyto"
        onChange={handleOnChange}
        required
        value={inputs.email}
        className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-2xl rounded-lg block w-full p-2.5"
        placeholder='Email'
      />
      </div>

      <div className=' mb-10'>
      <label htmlFor="number" className=' h-10 text-white block text-2xl mb-2 font-medium mt-4 border-l-4 border-[#32CD32] pl-4'>Teléfono</label>
      <input
        id="number"
        type="tel"
        name="number"
        onChange={handleOnChange}
        required
        value={inputs.number}
        className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-2xl rounded-lg block w-full p-2.5"
        placeholder='Número de Teléfono'
      />
      </div>

      <div className=' mb-10'>
      <label htmlFor="select" className=' h-10 text-white block text-2xl mb-2 font-medium mt-4 border-l-4 border-[#32CD32] pl-4'>Servicio</label>
      <select  id="select"
        name="select"
        onChange={handleOnChange}
        value={inputs.option}
        className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-2xl rounded-lg block w-full p-2.5"
        >
           <option value="" disabled selected>Selecciona un servicio</option>
            <option value="Diseño web">Diseño web</option>
            <option value="Desarrollo web">Desarrollo web</option>
            <option value="Mantenimiento web">Mantenimiento web</option>
            <option value="SEO">SEO</option>
            <option value="Otros">Otros</option>

      </select>
       
        
      
      </div>
      
      <div className=' mb-5'>
      <label htmlFor="message" className="h-10 text-white block text-2xl mb-2 font-medium mt-4 border-l-4 border-[#32CD32] pl-4"
      >Mensaje</label>
      <textarea
        id="message"
        name="message"
        onChange={handleOnChange}
        required
        value={inputs.message}
        className="bg-white h-40  border border-[#33353F] placeholder-[#9CA2A9] text-black text-2xl rounded-lg block w-full p-2.5 mt-2"
        placeholder='Escriba su mensaje'
      />
      </div>
      <button type="submit" disabled={status.submitting} className="bg-blue-600 border hover:bg-blue-700 border-[#33353F]  text-gray-100 text-4xl rounded-lg block w-full p-3 mt-6 uppercase font-bold">
        {!status.submitting
          ? !status.submitted
            ? 'Enviar'
            : 'Enviado'
          : 'Enviando...'}
      </button>
    </form>
    {status.info.error && (
      <div className="error">Error: {status.info.msg}</div>
    )}
    {!status.info.error && status.info.msg && <p className='text-green-600 mt-3 text-center'>{status.info.msg}</p>}
  </main>
);
  
}

export default ContactForm;