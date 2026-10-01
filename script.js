const pista = document.querySelector(".pista");


/* =========================
   CARROS ORIGINALES
========================= */

const carrosOriginales = Array.from(
    document.querySelectorAll(".car")
);


/* =========================
   CREAR 10 CARROS
========================= */

for (let i = carrosOriginales.length; i < 10; i++) {

    const original =
        carrosOriginales[i % carrosOriginales.length];

    const copia =
        original.cloneNode(true);

    pista.appendChild(copia);
}


/* =========================
   MOVIMIENTO DE TODOS
========================= */

const carros = document.querySelectorAll(".car");

carros.forEach((carro, index) => {

    /* Posición vertical */
    carro.style.top =
        (Math.random() * 90 + 3) + "%";


    /* Tamaño diferente */
    const tamaño =
        Math.random() * 35 + 40;

    carro.style.width =
        tamaño + "px";


    /* Dirección */
    const vaDerecha =
        index % 2 === 0;


    /* Velocidad */
    const velocidad =
        Math.random() * 9000 + 6000;


    /* Retraso para que no aparezcan todos juntos */
    const retraso =
        Math.random() * -15000;


    /* =========================
       CARROS HACIA LA DERECHA
    ========================= */

    if (vaDerecha) {

        carro.animate(

            [
                {
                    left: "-150px",
                    transform: "scaleX(1)"
                },

                {
                    left: "110%",
                    transform: "scaleX(1)"
                }
            ],

            {
                duration: velocidad,
                iterations: Infinity,
                delay: retraso,
                easing: "linear"
            }

        );

    }


    /* =========================
       CARROS HACIA LA IZQUIERDA
    ========================= */

    else {

        carro.animate(

            [
                {
                    left: "110%",
                    transform: "scaleX(-1)"
                },

                {
                    left: "-150px",
                    transform: "scaleX(-1)"
                }
            ],

            {
                duration: velocidad,
                iterations: Infinity,
                delay: retraso,
                easing: "linear"
            }

        );

    }

});


/* =========================
   MOVIMIENTO DEL CARRO CENTRAL
========================= */

document.addEventListener("mousemove", (e) => {

    const x =
        (e.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (e.clientY / window.innerHeight - 0.5) * 10;


    const centro =
        document.querySelector(".centro");


    centro.style.transform =
        `translate(
            calc(-50% + ${x}px),
            calc(-50% + ${y}px)
        )`;

});


/* =========================
   EFECTO AL HACER CLICK
========================= */

document.addEventListener("click", (e) => {

    for (let i = 0; i < 8; i++) {

        const particula =
            document.createElement("div");


        particula.style.position =
            "fixed";

        particula.style.left =
            e.clientX + "px";

        particula.style.top =
            e.clientY + "px";


        particula.style.width =
            "6px";

        particula.style.height =
            "6px";


        particula.style.borderRadius =
            "50%";


        particula.style.background =
            "white";


        particula.style.boxShadow =
            "0 0 10px #7c4dff";


        particula.style.pointerEvents =
            "none";


        particula.style.zIndex =
            "100";


        document.body.appendChild(
            particula
        );


        const angulo =
            Math.random() * Math.PI * 2;


        const distancia =
            Math.random() * 100 + 30;


        particula.animate(

            [
                {
                    transform:
                        "translate(0,0)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            ${Math.cos(angulo) * distancia}px,
                            ${Math.sin(angulo) * distancia}px
                        )`,

                    opacity: 0
                }
            ],

            {
                duration: 700,
                easing: "ease-out"
            }

        );


        setTimeout(() => {

            particula.remove();

        }, 700);

    }

});