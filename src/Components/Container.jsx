import NavBar from "./Navbar"
const Container = () =>{
    const menuItems = [
        {
            text: 'Shampoo',
            link: '/shampoo',
            subMenuItems:[
                {text: 'Shampoo Normal', link: '/Shampoo1'},
                {text: 'Shampoo Graso', link: '/Shampoo2'},
                {text: 'Shampoo Seco', link: '/Shampoo3'}
            ],
        },
        {
            text: 'Crema Enjuague',
            link: '/enjuague',
            subMenuItems:[
                {text: 'Crema Enjuague', link: '/Crema1'},
                ],
        },
        {
            text: 'Bombas Efervecentes',
            link: '/bombas',
            subMenuItems:[
                {text: 'Bombas Efervecentes', link: '/bombas1'},
                {text: 'Bombas con Semillas', link: '/bombas2'},
            ],
        }
    ]
    return(<>
        <NavBar menuItems={menuItems} />
    
    </>
    )
}
export default Container;
