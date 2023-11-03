import { Button } from "@nextui-org/react"

export const NavbarMobileComponent = () => {
  return (
    <div className='absolute bottom-0 w-full xs:flex sm:flex md:hidden bg-background Subtitulo'>
      <Button className="h-[50px] w-full flex bg-transparent hover:bg-overlay justify-center p-8">
        <div className="flex flex-col gap-1' items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
          </svg>
          <h5 className="text-lg">Inicio</h5>
        </div>
      </Button>
      <Button className="h-[50px] w-full flex bg-transparent hover:bg-overlay justify-center p-8">
        <div className="flex flex-col gap-1' items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-compass" viewBox="0 0 16 16">
            <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
            <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
          </svg>
          <h5  className="text-lg">Explorar</h5>
        </div>
      </Button>
      <Button className="h-[50px] w-full flex bg-transparent hover:bg-overlay justify-center p-8">
        <div className="flex flex-col gap-1' items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cassette" viewBox="0 0 16 16">
            <path d="M4 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 6a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2H7Z" />
            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13ZM1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-.691l-1.362-2.724A.5.5 0 0 0 12 10H4a.5.5 0 0 0-.447.276L2.19 13H1.5a.5.5 0 0 1-.5-.5v-9ZM11.691 11l1 2H3.309l1-2h7.382Z" />
          </svg>
          <h5  className="text-lg">Biblioteca</h5>
        </div>
      </Button>
    </div>
  )
}
