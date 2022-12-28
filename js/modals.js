(() => {
    const refs = {

      openModalBtn2: document.querySelector('[data-modal-open2]'),
      closeModalBtn2: document.querySelector('[data-modal-close2]'),
      modal2: document.querySelector('[data-modal2]'),

      openModalBtn3: document.querySelector('[data-modal-open3]'),
      closeModalBtn3: document.querySelector('[data-modal-close3]'),
      modal3: document.querySelector('[data-modal3]'),

      openModalBtn6: document.querySelector('[data-modal-open6]'),
      closeModalBtn6: document.querySelector('[data-modal-close6]'),
      modal6: document.querySelector('[data-modal6]'),

      openModalBtn7: document.querySelector('[data-modal-open7]'),
      closeModalBtn7: document.querySelector('[data-modal-close7]'),
      modal7: document.querySelector('[data-modal7]'),

      openModalBtn8: document.querySelector('[data-modal-open8]'),
      closeModalBtn8: document.querySelector('[data-modal-close8]'),
      modal8: document.querySelector('[data-modal8]'),

      openModalBtn9: document.querySelector('[data-modal-open9]'),
      closeModalBtn9: document.querySelector('[data-modal-close9]'),
      modal9: document.querySelector('[data-modal9]'),

      openModalBtn10: document.querySelector('[data-modal-open10]'),
      closeModalBtn10: document.querySelector('[data-modal-close10]'),
      modal10: document.querySelector('[data-modal10]'),

    };

    refs.openModalBtn2.addEventListener('click', toggleModal2);
    refs.closeModalBtn2.addEventListener('click', toggleModal2);

    refs.openModalBtn3.addEventListener('click', toggleModal3);
    refs.closeModalBtn3.addEventListener('click', toggleModal3);

    refs.openModalBtn6.addEventListener('click', toggleModal6);
    refs.closeModalBtn6.addEventListener('click', toggleModal6);

    refs.openModalBtn7.addEventListener('click', toggleModal7);
    refs.closeModalBtn7.addEventListener('click', toggleModal7);

    refs.openModalBtn8.addEventListener('click', toggleModal8);
    refs.closeModalBtn8.addEventListener('click', toggleModal8);

    refs.openModalBtn9.addEventListener('click', toggleModal9);
    refs.closeModalBtn9.addEventListener('click', toggleModal9);

    refs.openModalBtn10.addEventListener('click', toggleModal10);
    refs.closeModalBtn10.addEventListener('click', toggleModal10);


    function toggleModal2() {
      refs.modal2.classList.toggle('is-hidden2');
    }

    function toggleModal3() {
      refs.modal3.classList.toggle('is-hidden3');
    }

    function toggleModal6() {
      refs.modal6.classList.toggle('is-hidden6');
    }

    function toggleModal7() {
      refs.modal7.classList.toggle('is-hidden7');
    }

    function toggleModal8() {
      refs.modal8.classList.toggle('is-hidden8');
    }

    function toggleModal9() {
      refs.modal9.classList.toggle('is-hidden9');
    }

    function toggleModal10() {
      refs.modal10.classList.toggle('is-hidden10');
    }

  })();