import { Button } from "@nextui-org/react";

export const ControlesReproduccion = ({Player,ReproduciendoC, setReproduciendoC, LabelTiempoActual, LabelDuracion}) => {
    return (
        <div className="flex gap-2 items-center Subtitulo">
            <div className="flex gap-2">
                <Button isIconOnly className="rounded-full bg-transparent hover:bg-overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-skip-start" viewBox="0 0 16 16">
                        <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0V4zm7.5.633L5.696 8l5.804 3.367V4.633z" />
                    </svg>
                </Button>
                {
                    ReproduciendoC
                        ?
                        <Button isIconOnly className="rounded-full bg-transparent hover:bg-overlay" onClick={() => { Player.pause(); setReproduciendoC(!ReproduciendoC) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pause-fill" viewBox="0 0 16 16">
                                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                            </svg>
                        </Button>
                        :
                        <Button isIconOnly className="rounded-full bg-transparent hover:bg-overlay" onClick={() => { Player.play(); setReproduciendoC(!ReproduciendoC) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                                <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                            </svg>
                        </Button>
                }
                <Button isIconOnly className="rounded-full bg-transparent hover:bg-overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-skip-end" viewBox="0 0 16 16">
                        <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.713 3.31 4 3.655 4 4.308v7.384c0 .653.713.998 1.233.696L11.5 8.752V12a.5.5 0 0 0 1 0V4zM5 4.633 10.804 8 5 11.367V4.633z" />
                    </svg>
                </Button>
            </div>
            <div>
                <p>{LabelTiempoActual} / {LabelDuracion}</p>
            </div>
        </div>
    )
}
