import React, { useState } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(false);
  const [srcImage, setSrcImage] = useState('');

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleModalImage = (e) => {
    setSrcImage(e.target.src);
    setModalImage(!modalImage);
  };

  //jika loading nilainya true
  //maka akan dirender loading component
  if (loading) {
    return <div className="loading_screen">loading please wait.......</div>;
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <h1>Ini Modal</h1>
          <button onClick={handleModal}>Close Modal</button>
        </div>
      )}

      {modalImage && (
        <div className="modal">
          <img src={srcImage} alt="" onClick={handleModalImage} />
        </div>
      )}

      <div>
        <h1>Hello App</h1>
        <button onClick={handleModal}>Show Modal</button>
      </div>
      <div className="image_container">
        <img
          src="https://images.pexels.com/photos/8123145/pexels-photo-8123145.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          onClick={handleModalImage}
        />

        <img
          src="https://images.pexels.com/photos/5840867/pexels-photo-5840867.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          onClick={handleModalImage}
        />

        <img
          src="https://images.pexels.com/photos/9509207/pexels-photo-9509207.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          onClick={handleModalImage}
        />
      </div>
    </>
  );
}
