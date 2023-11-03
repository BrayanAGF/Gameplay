import { Slider } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ControlesReproduccion } from "./PlayerBar/ControlesReproduccion";
import { InfoCancion } from "./PlayerBar/InfoCancion";
import { OpcionesExtras } from "./PlayerBar/OpcionesExtras";
import { establecerAvance, establecerDuracion } from "../../Store/Principal/PrincipalSlice";
import { BarraProgresoCancion } from "./PlayerBar/BarraProgresoCancion";

export const PlayerBarComponent = () => {

    const Player = document.getElementById('Player');
    const { Reproduciendo, ProgresoReproduccion } = useSelector(state => state.Principal);
    const { Deslizando } = ProgresoReproduccion;

    const [ReproduciendoC, setReproduciendoC] = useState(true);
    const [LabelDuracion, setLabelDuracion] = useState('0:00');
    const [LabelTiempoActual, setLabelTiempoActual] = useState('0:00');
    const [FocusReproductor, setFocusReproductor] = useState(false);

    const dispatch = useDispatch();

    const handleLoadedMetadata = ({ target }) => {
        var minutos = Math.floor(target.duration / 60);
        var segundosRestantes = Math.round(target.duration % 60);
        var tiempo = `${minutos}:${segundosRestantes < 10 ? `0${segundosRestantes}` : segundosRestantes}`;
        setLabelDuracion(tiempo);
        dispatch(establecerDuracion(target.duration));
    };

    const handleTimeUpdate = ({ target }) => {
        if (!Deslizando) {
            var minutos = Math.floor(target.currentTime / 60);
            var segundosRestantes = Math.round(target.currentTime % 60);
            var tiempo = `${minutos}:${segundosRestantes < 10 ? `0${segundosRestantes}` : segundosRestantes}`;
            setLabelTiempoActual(tiempo);
            dispatch(establecerAvance(target.currentTime));
        }
    };

    useEffect(() => {
        setReproduciendoC(true);
    }, [Reproduciendo])


    return (
        <div className={`p-2 bg-background ${Object.keys(Reproduciendo).length > 0 ? 'flex flex-col' : 'hidden'} animacionReproductor`} onMouseLeave={() => setFocusReproductor(false)}>

            <BarraProgresoCancion />

            <div className="flex justify-between items-center my-0 Subtitulo">

                <ControlesReproduccion Player={Player} ReproduciendoC={ReproduciendoC} setReproduciendoC={setReproduciendoC} LabelTiempoActual={LabelTiempoActual} LabelDuracion={LabelDuracion} />
                <InfoCancion Cancion={Reproduciendo} />
                <OpcionesExtras Player={Player} Visible={FocusReproductor} setVisible={setFocusReproductor} />


                <audio id="Player" src="https://khbenkbqigsocavtzsri.supabase.co/storage/v1/object/sign/Soundtrack/metalslug.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTb3VuZHRyYWNrL21ldGFsc2x1Zy5tcDMiLCJpYXQiOjE2OTg2OTk1MDUsImV4cCI6NDg1MjI5OTUwNX0.DkKiRtw8JkLv5Grl9rPwNlzaRYkMQK4WjNdd51Zbw5Y&t=2023-10-30T20%3A58%3A25.830Z" controls
                    style={{ display: 'none' }}
                    onLoadedMetadata={(event) => handleLoadedMetadata(event)}
                    onTimeUpdate={(event) => handleTimeUpdate(event)}
                />

            </div>
        </div>
    )
}
