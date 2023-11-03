import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

export const PlayerExpandidoComponent = () => {

    const { ReproductorExpandido, Reproduciendo } = useSelector(state => state.Principal);
    const [Visible, setVisible] = useState('hidden');

    useEffect(() => {
        ReproductorExpandido && setVisible('grid');
    }, [ReproductorExpandido])


    return (
        <div className={`bg-background h-[85.5%] z-20 w-full absolute top-0 place-items-center ${Visible} ${ReproductorExpandido ? 'animacionReproductorExpandidoIn' : 'animacionReproductorExpandidoOut'}`}
            onAnimationStart={() => {
                !ReproductorExpandido ? setTimeout(() => {
                    setVisible('hidden')
                }, 400)
                    :
                    setVisible('grid');
            }}
        >
            <div className="xs:w-[90%] xs:h-[60%] text-center">
                <img src={Reproduciendo.ImgURL} alt="cancion-imagen" className="w-full h-full rounded-lg" />
                <h3>{Reproduciendo.Nombre}</h3>
                <h4>{Reproduciendo.Artista}</h4>
            </div>
        </div>
    )
}
