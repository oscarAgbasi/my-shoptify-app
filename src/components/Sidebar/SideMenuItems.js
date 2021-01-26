import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";


export const SideMenuItems = [
    {
        title: 'Orders',
        path: '/order',
        icon: <MdIcons.MdLocalShipping />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <AiIcons.AiOutlineTeam />,
        cName: 'nav-text'
    },   
     {
        title: 'Inquiry',
        path: '/inquiry',
        icon: <FaIcons.FaChartBar />,
        cName: 'nav-text'
    }

]