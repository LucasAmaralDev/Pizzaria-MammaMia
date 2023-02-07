import './Navbar.css'

function Navbar() {
    return (
        <section className="section-nav">
            <div className="content">

                <div className="box-logo flex">
                    <img src="https://i.imgur.com/ah0Ggol.png" alt="Logo" />
                </div>

                <div className="navbuttons">

                    <a href='./'>
                        <img src="https://static.phdvasia.com/br/icons/inactive@2x.png" alt="" />
                        <p>Fazer Login</p>
                    </a>

                    <a href='./'>
                        <img src="https://static.phdvasia.com/br/icons/inactive@2x.png" alt="" />
                        <p>Criar Conta</p>
                    </a>

                </div>

            </div>
        </section>
    )
}

export default Navbar;