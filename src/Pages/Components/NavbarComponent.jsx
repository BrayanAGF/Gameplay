import { Button, Avatar } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { cambiarMenu } from "../../Store/Principal/PrincipalSlice";

export const NavbarComponent = () => {

    const dispatch = useDispatch();


    return (
        <div >
            <div className="flex justify-between items-center px-3 h-[65px] border-content1 border-b-1">

                <div className="flex gap-4">
                    <Button isIconOnly className="hidden sm:flex rounded-full bg-transparent hover:bg-overlay" onClick={() => dispatch(cambiarMenu())}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </Button>
                    <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-shadows" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8 7a.5.5 0 0 1 0-1h3.5c.032 0 .063.003.093.009A7.032 7.032 0 0 0 12.9 13H8a.5.5 0 0 1 0-1h5.745c.22-.315.415-.65.581-1H8a.5.5 0 0 1 0-1h6.71a7.03 7.03 0 0 0 .22-1H8a.5.5 0 0 1 0-1h7c0-.34-.024-.673-.07-1H8a.5.5 0 0 1 0-1h6.71a6.949 6.949 0 0 0-.384-1H8a.5.5 0 0 1 0-1h5.745a7.035 7.035 0 0 0-.846-1H8a.5.5 0 0 1 0-1h3.608A7 7 0 1 0 8 15Z" />
                        </svg>
                        <p className="font-bold text-xl uppercase Titulo tracking-wide">GamePlay</p>
                    </div>
                </div>

                <Avatar size="sm" src="./assets/images/Perfil2.jpg" />

            </div>
        </div>
    )
}