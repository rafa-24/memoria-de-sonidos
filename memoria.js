const cardHouse = document.getElementById('casa');
const cardDog = document.getElementById('perro');
const cardLuna = document.getElementById('luna');
const cardSol = document.getElementById('sol');

// respuesta correcta
const respuestaCasa = document.getElementById('respuesta-casa');
const respuestaPerro = document.getElementById('respuesta-perro');
const respuestaLuna = document.getElementById('respuesta-luna');
const respuestaSol = document.getElementById('respuesta-sol');


cardHouse.addEventListener('click', function () {
  // obtiene el sonido
  const sound = this.getAttribute('data-sound');
  if (sound) {
    const audio = new Audio(sound);
    audio.play();

    setTimeout(() => {
      // ocultar los demas cartas de la izquierda
      cardHouse.style.visibility = 'hidden';
      cardDog.style.visibility = 'hidden';
      cardLuna.style.visibility = 'hidden';
      cardSol.style.visibility = 'hidden';

      // decirle que elija una opcion
      Swal.fire({
        title: "Selecciona la opcion correcta para el sonido que escuchaste",
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    }, 6000);

    // Elije la opcion correcta casa
    respuestaCasa.addEventListener('click', function () {
      Swal.fire({
        title: "Felicidades respuesta correcta.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
      });
      cardHouse.style.visibility = 'visible';
      cardDog.style.visibility = 'visible';
      cardLuna.style.visibility = 'visible';
      cardSol.style.visibility = 'visible';

      setTimeout(() => {
        location.reload();
      }, 3000);
    });

    // Respuesta incorrecta
    respuestaPerro.addEventListener('click', function () {
      Swal.fire({
        title: "Respuesta incorrecta",
        icon: 'warning',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    });

    respuestaLuna.addEventListener('click', function () {
      Swal.fire({
        title: "Respuesta incorrecta",
        icon: 'warning',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    });

    respuestaSol.addEventListener('click', function () {
      Swal.fire({
        title: "Respuesta incorrecta",
        icon: 'warning',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    });
  }
});


cardDog.addEventListener('click', function () {
  console.log('perro', this);
  // obtiene el sonido
  const sound = this.getAttribute('data-sound');
  if (sound) {
    const audio = new Audio(sound);
    audio.play();

    setTimeout(() => {
      // ocultar los demas cartas de la izquierda
      cardHouse.style.visibility = 'hidden';
      cardDog.style.visibility = 'hidden';
      cardLuna.style.visibility = 'hidden';
      cardSol.style.visibility = 'hidden';

      // decirle que elija una opcion
      Swal.fire({
        title: "Selecciona la opcion correcta para el sonido que escuchaste",
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    }, 6000);

    // Elije la opcion correcta casa
    respuestaPerro.addEventListener('click', function () {
      Swal.fire({
        title: "Felicidades respuesta correcta.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
      });
      cardHouse.style.visibility = 'visible';
      cardDog.style.visibility = 'visible';
      cardLuna.style.visibility = 'visible';
      cardSol.style.visibility = 'visible';

      setTimeout(() => {
        location.reload();
      }, 3000);
    });

    // Respuesta incorrecta
    respuestaCasa.addEventListener('click', function () {
      Swal.fire({
        title: "Respuesta incorrecta",
        icon: 'warning',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    });

    respuestaLuna.addEventListener('click', function () {
      Swal.fire({
        title: "Respuesta incorrecta",
        icon: 'warning',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    });

    respuestaSol.addEventListener('click', function () {
      Swal.fire({
        title: "Respuesta incorrecta",
        icon: 'warning',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    });

  }
});

cardLuna.addEventListener('click', function () {
  console.log('casa', this);
  // obtiene el sonido
  const sound = this.getAttribute('data-sound');
  if (sound) {
    const audio = new Audio(sound);
    audio.play();

    setTimeout(() => {
      // ocultar los demas cartas de la izquierda
      cardHouse.style.visibility = 'hidden';
      cardDog.style.visibility = 'hidden';
      cardLuna.style.visibility = 'hidden';
      cardSol.style.visibility = 'hidden';

      // decirle que elija una opcion
      Swal.fire({
        title: "Selecciona la opcion correcta para el sonido que escuchaste",
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    }, 6000);

    // Elije la opcion correcta casa
    respuestaLuna.addEventListener('click', function () {
      Swal.fire({
        title: "Felicidades respuesta correcta.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
      });
      cardHouse.style.visibility = 'visible';
      cardDog.style.visibility = 'visible';
      cardLuna.style.visibility = 'visible';
      cardSol.style.visibility = 'visible';

      setTimeout(() => {
        location.reload();
      }, 3000);
    });

    // Respuesta incorrecta
    respuestaPerro.addEventListener('click', function () {
      Swal.fire({
        title: "Respuesta incorrecta",
        icon: 'warning',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    });

    respuestaCasa.addEventListener('click', function () {
      Swal.fire({
        title: "Respuesta incorrecta",
        icon: 'warning',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    });

    respuestaSol.addEventListener('click', function () {
      Swal.fire({
        title: "Respuesta incorrecta",
        icon: 'warning',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    });
  }
});

cardSol.addEventListener('click', function () {
  console.log('casa', this);
  // obtiene el sonido
  const sound = this.getAttribute('data-sound');
  if (sound) {
    const audio = new Audio(sound);
    audio.play();
    setTimeout(() => {
      // ocultar los demas cartas de la izquierda
      cardHouse.style.visibility = 'hidden';
      cardDog.style.visibility = 'hidden';
      cardLuna.style.visibility = 'hidden';
      cardSol.style.visibility = 'hidden';

      // decirle que elija una opcion
      Swal.fire({
        title: "Selecciona la opcion correcta para el sonido que escuchaste",
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    }, 6000);

    // Elije la opcion correcta casa
    respuestaSol.addEventListener('click', function () {
      Swal.fire({
        title: "Felicidades respuesta correcta.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
      });
      cardHouse.style.visibility = 'visible';
      cardDog.style.visibility = 'visible';
      cardLuna.style.visibility = 'visible';
      cardSol.style.visibility = 'visible';

      setTimeout(() => {
        location.reload();
      }, 3000);
    });

    // Respuesta incorrecta
    respuestaCasa.addEventListener('click', function () {
      Swal.fire({
        title: "Respuesta incorrecta",
        icon: 'warning',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    });

    respuestaLuna.addEventListener('click', function () {
      Swal.fire({
        title: "Respuesta incorrecta",
        icon: 'warning',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    });

    respuestaPerro.addEventListener('click', function () {
      Swal.fire({
        title: "Respuesta incorrecta",
        icon: 'warning',
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      })
    });
  }
});