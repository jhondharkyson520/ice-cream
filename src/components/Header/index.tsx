import styled from "styled-components";
import logo from '../../assets/Header/logo.svg';
import { useState } from "react";
import { IoMenu} from "react-icons/io5";

const HeaderComponent = styled.header`
    justify-content: center;
`;


const MenuHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(3px);
    
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Logo = styled.img`
    width: 20%;
    position: relative;

    @media screen and (max-width: 768px) {
        padding-left: 40px;
        width: 200px;
    }
`;

const LinkMenu = styled.a`
    color: #000;
    text-decoration: none;
    font-size: 18px;
    width: 150px;
    font-family: 'Open Sans';    
    font-weight: 600;
    cursor: pointer;

    &:hover {
        color: #DDB362;
    }

    @media screen and (max-width: 768px) {
        color: black
    }
`;

const ContainerLinks = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const HamburguerBtIcon = styled(IoMenu)`
    size: 30;
    margin-right: 2rem;
`;



const ButtonHamburguer = styled.button`
    padding-right: 40px;
    background-color: transparent;
    border: none;
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            cursor: pointer;
            color: #DDB362;
        }
    }
`;

const ContainerListaHambuguerMenu = styled.div`
    background-color: white;    
    width: 100%;
    height: 350px;
    position: fixed;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    display: flex;
    align-items: baseline;
    border-radius: 0 0 0 15%;
   
    
`;

const ListaMenuHamburguer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    list-style-type: none;
    position: absolute;
`;

const ListaMenuHamburguerItem = styled.li`
    margin-bottom: 1rem;
    
`;

const LinkMenuHamburguer = styled.a`
    color: black;
    text-decoration: none;
    font-size: 18px;
    width: 150px;
    font-family: 'Open Sans';    
    font-weight: 600;
    position: relative;
    cursor: pointer;

    &:hover {
        color: #DDB362;
    }

    
`;


export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleContato = () => {
        window.open('https://api.whatsapp.com/send?phone=5534984307981&text=Olá, tudo bem? Gostaria de ', '_blank');
      };

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <HeaderComponent>           
                                    
            <MenuHeader>

                <Logo src={logo} alt=""/>
                <ButtonHamburguer onClick={toggleMenu}>
                    <HamburguerBtIcon size={35}/>
                </ButtonHamburguer>

                {openMenu ? (
                    <ContainerListaHambuguerMenu onClick={toggleMenu}>
                        

                        <ListaMenuHamburguer>
                        

                            <ListaMenuHamburguerItem>
                                <LinkMenuHamburguer href='#home' onClick={toggleMenu}>PÁGINA INICIAL</LinkMenuHamburguer>
                            </ListaMenuHamburguerItem>

                            <ListaMenuHamburguerItem>
                                <LinkMenuHamburguer href='#produtos' onClick={toggleMenu}>PRODUTOS</LinkMenuHamburguer>
                            </ListaMenuHamburguerItem>

                            <ListaMenuHamburguerItem>
                                <LinkMenuHamburguer href='#ondeestamos' onClick={toggleMenu}>ONDE ESTAMOS?</LinkMenuHamburguer>
                            </ListaMenuHamburguerItem>

                            <ListaMenuHamburguerItem>
                                <LinkMenuHamburguer onClick={handleContato}>FALE CONOSCO</LinkMenuHamburguer> 
                            </ListaMenuHamburguerItem>

                            <ListaMenuHamburguerItem>
                                <LinkMenuHamburguer onClick={toggleMenu}>FECHAR</LinkMenuHamburguer> 
                            </ListaMenuHamburguerItem>
                        </ListaMenuHamburguer>
                        

                    </ContainerListaHambuguerMenu>
                ) : (
                    <ContainerLinks>
                        <LinkMenu href='#home'>PÁGINA INICIAL</LinkMenu>
                        <LinkMenu href='#produtos'>PRODUTOS</LinkMenu>
                        <LinkMenu href='#ondeestamos'>ONDE ESTAMOS?</LinkMenu>
                        <LinkMenu onClick={handleContato}>FALE CONOSCO</LinkMenu> 
                    </ContainerLinks>
                )}
            </MenuHeader>
        </HeaderComponent>
    )
}
