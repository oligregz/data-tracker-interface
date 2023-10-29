import React, { useState, useEffect } from 'react';

const FormUser = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');

  useEffect(() => {
    console.log('Email:', email);
  }, [email]);

  useEffect(() => {
    console.log('Nome Completo:', name);
  }, [name]);

  useEffect(() => {
    console.log('Telefone/Whatsapp:', telephone);
  }, [telephone]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTelephoneChange = (event) => {
    setTelephone(event.target.value);
  };

  return (
    <div className="form-user">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="ex: seuemail@gemail.com"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Nome Completo</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="ex: João Severino Andrade"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Telefone/Whatsapp</label>
          <input
            type="text"
            className="form-control"
            id="telephone"
            placeholder="ex: 099 999999999"
            value={telephone}
            onChange={handleTelephoneChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ver fotos
        </button>
      </form>
    </div>
  );
};

export default FormUser;
