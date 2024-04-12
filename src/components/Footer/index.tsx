import styled from "styled-components";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaMapLocationDot } from "react-icons/fa6";

const ContainerFooter = styled.footer`
    background-color: #151515;
    display: flex;
    justify-content: center;
    gap: 10rem;
    width: 100%;
    height: 250px;

  
    @media (max-width: 1152px) {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
`;

const ContainerFooterItem = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: 2rem;
    
`;

const TextTituloFooter = styled.h1`
    font-family: 'Cardo';
    font-weight: bold;
    font-size: 18px;
`;

const ContainerFooterSocialMedias = styled.div`
    display: flex;
    gap: 1rem;
`;

const TextFooter = styled.p`
    color: #7E8690;
    font-size: 16px;
    font-family: 'Open Sans';
`;

const ContainerItemsContato = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const TextFooterWhiteBold = styled.p`
    font-family: 'Cardo';
    font-weight: bold;
    font-size: 16px;
`;

const ContainerFuncionamento = styled.div`

`;

const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const InstagramIcon = styled(FaInstagram)`
    cursor: pointer;
    transition: transform 0.9s;

    &:hover {
        transform: scale(1.2);
    }
`;

const WhatsappIcon = styled(FaWhatsapp)`
    cursor: pointer;
    transition: transform 0.9s;

    &:hover {
        transform: scale(1.2);
    }
`;

export default function Footer(){
    return(
        
        <ContainerFooter>

            <ContainerFooterItem>

                <TextTituloFooter>
                    Redes Sociais
                </TextTituloFooter>

                <ContainerFooterSocialMedias>
                    <StyledLink href="https://www.instagram.com/seu-usuario-do-instagram" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon size={20}/>
                    </StyledLink>
                    <StyledLink href="https://api.whatsapp.com/send?phone=5534984307981&text=Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de" target="_blank" rel="noopener noreferrer">
                        <WhatsappIcon size={20}/>
                    </StyledLink>
                </ContainerFooterSocialMedias>
                
            </ContainerFooterItem>

            <ContainerFooterItem>    

                <TextTituloFooter>
                    Contato
                </TextTituloFooter>

                   <ContainerItemsContato>
                        <TfiEmail  size={20}/>
                        <TextFooter>
                            sorveteriapinguim4@gmail.com
                        </TextFooter>
                   </ContainerItemsContato>

                    <ContainerItemsContato>
                        <FaMapLocationDot size={20}/>
                        <TextFooter>
                            Av. Aurélio Luiz Mistieri, 200, Sala1 - <br/>Fronteira, MG
                        </TextFooter>
                    </ContainerItemsContato>

            </ContainerFooterItem>

            <ContainerFooterItem>

                <ContainerFuncionamento>

                    <TextTituloFooter>
                        Funcionamento
                    </TextTituloFooter>

                    <TextFooter>
                        Segunda - Quinta
                    </TextFooter>                
                    <TextFooterWhiteBold>
                        12:00 - 22:00
                    </TextFooterWhiteBold>

                    <TextFooter>
                        Sexta - Domingo
                    </TextFooter>
                    <TextFooterWhiteBold>
                        13:00 - 23:00
                    </TextFooterWhiteBold>

                </ContainerFuncionamento>

            </ContainerFooterItem>

        </ContainerFooter>

    )
}