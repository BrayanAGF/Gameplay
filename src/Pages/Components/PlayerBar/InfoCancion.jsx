export const InfoCancion = ({Cancion}) => {
    return (
        <div className="sm:flex xs:hidden gap-1">
            <img src={Cancion.ImgURL} alt="imagen-cancion" width={50} height={50} style={{ borderRadius: 8 }} />
            <div>
                <p>{Cancion.Nombre}</p>
                <p>{Cancion.Artista} / {Cancion.Album} </p>
            </div>
        </div>
    )
}
