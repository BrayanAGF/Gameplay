import { useEffect, useState } from "react"
import { useDatabase } from '../../Hook'
import { Avatar, Button, Card, CardFooter, ScrollShadow } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { cargarCancion } from "../../Store/Principal/PrincipalSlice";

export const Home = () => {

  const { MenuExpandido } = useSelector(state => state.Principal);
  const Player = document.getElementById('Player');
  const { consultarCanciones } = useDatabase();
  const dispatch = useDispatch();
  const [Canciones, setCanciones] = useState([]);

  const [scrollPorcentaje, setscrollPorcentaje] = useState(0);

  useEffect(() => {
    consultarCanciones().then(Can => {
      setCanciones(Can);
    });
  }, []);

  const reproducirCancion = (value) => {
    dispatch(cargarCancion(value));
    Player.src = value.URL;
    Player.load();
    Player.play();
  }

  const handleScroll = (cantidad) => {
    const element = document.getElementById("VolverEscuchar")
    element.scrollLeft += cantidad;

    const scrollPosition = element.scrollLeft;
    // Obtener la altura total del contenido desplazable
    const scrollHeight = element.scrollWidth;
    // Obtener la altura visible del contenido en el viewport
    const clientHeight = element.clientWidth;
    // Calcular cuánto se ha desplazado en porcentaje
    const scrollPercentage = (scrollPosition / (scrollHeight - clientHeight) * 100);

    setscrollPorcentaje(scrollPercentage);
  }

  return (
    <div>

      <div className="flex justify-between my-1 ">
        <div className="flex gap-2 items-center">
          <Avatar className="w-10" src="./assets/images/Perfil2.jpg"/>
          <div className="flex-col">
            <h5 className="text-md Subtitulo">Brayan Alberto</h5>
            <h3 className="text-3xl font-bold Titulo">Volver a escuchar</h3>
          </div>
        </div>
        <div className="self-end flex gap-2">
          <Button isIconOnly disabled={scrollPorcentaje < 1 ? true : false} className="bg-transparent hover:bg-overlay rounded-full" onClick={() => handleScroll(-220)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          </Button>
          <Button isIconOnly disabled={scrollPorcentaje >= 100 ? true : false} className="bg-transparent hover:bg-overlay rounded-full" onClick={() => handleScroll(220)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </Button>
        </div>
      </div>

      
        <ScrollShadow id="VolverEscuchar" className="scroll-smooth p-2" orientation="horizontal" isEnabled hideScrollBar>
          <div className="flex flex-row gap-3 w-fit">
            {
              Canciones.map((value, index) => (
                <div key={index} className="relative">
                  <span className="rounded-full z-20 absolute top-16 left-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                      <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                    </svg>
                  </span>
                  <Card isFooterBlurred isPressable className="relative hover:opacity-[0.6] hover:cursor-pointer w-[200px] h-[200px] Subtitulo" onClick={() => reproducirCancion(value)}>
                    <img src={value.ImgURL} style={{ width: 300, height: 300 }} />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p>{value.Artista}</p>
                      <p className="text-tiny">{value.Nombre}</p>
                    </CardFooter>
                  </Card>
                </div>
              ))
            }
          </div>
        </ScrollShadow>
 


    </div>
  )
}
