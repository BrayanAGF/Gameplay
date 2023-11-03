import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

export const PlayerExpandidoComponent = () => {

    const { ReproductorExpandido, Reproduciendo } = useSelector(state => state.Principal);
    const [Visible, setVisible] = useState('hidden');

    useEffect(() => {
        ReproductorExpandido && setVisible('grid');
    }, [ReproductorExpandido])


    return (
        <div className={`bg-background xs:h-[82%] md:h-[calc(100%_-_11px)] z-20 w-full absolute top-0 place-items-center ${Visible} ${ReproductorExpandido ? 'animacionReproductorExpandidoIn' : 'animacionReproductorExpandidoOut'}`}
            onAnimationStart={() => {
                !ReproductorExpandido ? setTimeout(() => {
                    setVisible('hidden')
                }, 400)
                    :
                    setVisible('grid');
            }}
        >
            <div>
                <Image src={Reproduciendo.ImgURL} isBlurred className="w-[calc(100vw_-_50px)] h-[50vh]" />
                <div className="flex flex-col items-center Subtitulo">
                    <h3>{Reproduciendo.Nombre}</h3>
                    <h4>{Reproduciendo.Artista}</h4>
                </div>
            </div>
        </div>
    )
}
