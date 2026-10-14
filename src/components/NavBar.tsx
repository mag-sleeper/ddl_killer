import { NavLink } from "react-router";

const tabs = [
    {to: '/', label: 'Today'},
    {to: '/calendar', label: 'Calendar'},
    {to: 'plan', label: 'Plan'},
    {to: '/me', label: 'Me'},
]

export default function NavBar(){
    return(
        <nav className="navbar">
            {tabs.map((tab) =>(
                <NavLink key={tab.to} to ={tab.to} end className = "nav-link">
                    {tab.label}
                    </NavLink>
            ))}
        </nav>
    )
}

//tabs.map() turns the list into 4 links
//Navlink automatically adds an active class to the tab u r on