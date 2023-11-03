import { Slider } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { establecerAvance, establecerDeslizando } from "../../../Store/Principal/PrincipalSlice";

export const BarraProgresoCancion = () => {

    const Player = document.getElementById('Player');
    const { ProgresoReproduccion, Reproduciendo } = useSelector(state => state.Principal);
    const { Avance, Duracion } = ProgresoReproduccion;
    const dispatch = useDispatch();
    const [TiempoActual, setTiempoActual] = useState(0);

    const handleOnChangeSlider = ({ target }) => {
        dispatch(establecerAvance(target.value));//Establecemos el avance de la barra
        setTiempoActual(target.value);
    }

    const handleOnChangeCommitedSlider = (event) => {
        Player.currentTime = TiempoActual;
        dispatch(establecerDeslizando(false));
    }

    return (
        <div className="absolute md:bottom-9 xs:bottom-11 lg:bottom-11 left-0 z-40 w-[100%]">
            <Slider
            sx={{ color: 'white'}}
            size="small"
            value={Avance}
            max={Duracion}
            onChange={(event) => { dispatch(establecerDeslizando(true)); handleOnChangeSlider(event) }}
            onChangeCommitted={(event) => handleOnChangeCommitedSlider(event)}
        />
        </div>
    )
}
