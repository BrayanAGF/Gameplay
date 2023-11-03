import { useSelector } from "react-redux"
import { NavbarComponent, PlayerBarComponent, SidebarComponent, PlayerExpandidoComponent, NavbarMobileComponent,  } from "../Components"

export const Layout = ({ children }) => {

  const { MenuExpandido } = useSelector(state => state.Principal)

  return (
    <div className="h-screen relative">
      <NavbarComponent />
      <div className="flex h-[91%] w-full">
        <SidebarComponent />
        <div className={`${!MenuExpandido ? 'w-full sm:w-[88%] md:w-[90%] lg:w-[92%] xl:w-[94%]' : "md:w-[82%] xl:w-[90%]"} relative`}>
          <div className={`p-2`}>
            {children}
          </div>
          <PlayerExpandidoComponent />
        </div>
      </div>
      <div className="absolute bottom-0 w-full xs:h-32 md:h-16 flex flex-col bg-background z-40">
        <PlayerBarComponent />
        <NavbarMobileComponent />
      </div>
    </div>
  )
}
