import styled from "styled-components";

import imgHome from '../assets/Home/imgHome.png';

import imgDescubra1 from '../assets/Home/imgDescubra1.png';
import imgDescubra2 from '../assets/Home/imgDescubra2.png';
import imgDescubra3 from '../assets/Home/imgDescubra3.png';

import imgOndeEstamos from '../assets/Home/imgOndeEstamos.png';

import imgAcaiProduct from '../assets/Products/imgAcaiProduct.png';
import imgBananaSplitProduct from '../assets/Products/imgBanaSplit.png';
import imgCopoAcaiProduct from '../assets/Products/imgCopoAcaiProduct.png';
import imgCopoSorveteProduct from '../assets/Products/imgCopoSorveteProduct.png';
import imgSorveteExpressoProduct from '../assets/Products/imgSorveteExpresso.png';
import imgSundaeProduct from '../assets/Products/imgSundaeProduct.png';
import imgSorveteZeroProduct from '../assets/Products/imgSorveteZero.jpeg';
import imgBoloSorveteProduct from '../assets/Products/boloSorvete.jpeg';
import imgMilkShakeProduct from '../assets/Products/imgMilkShake.jpg';
import imgPetitGateauProduct from '../assets/Products/imgPetitGateau.jpeg';

import imgContainerInsta1 from '../assets/Outras/imgInsta1.png';
import imgContainerInsta2 from '../assets/Outras/imgInsta2.png';
import imgContainerInsta3 from '../assets/Outras/imgInsta3.png';
import imgContainerInsta4 from '../assets/Outras/imgInsta4.png';
import imgContainerInsta5 from '../assets/Outras/imgInsta5.png';
import imgContainerInsta6 from '../assets/Outras/imgInsta6.png';


import { FaInstagram } from "react-icons/fa";



const HomePage = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
    gap: 5%;
    overflow-x: hidden;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ImgHome = styled.img`
    width: 33%;
    height: 33%;

    @media screen and (max-width: 768px) {
        width: 300px;
    }

`;

const TextHome = styled.div`
    width: 26%;

    @media screen and (max-width: 768px){
        width: 300px;
    }
`;

const ContainerButtonHome = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;

`;

const StyledButtonHome = styled.button`
    background-color: #DDB362;
    border: none;
    padding: 17px 23px 17px 23px;
    color: #FFFFFF;
    font-family: bold;
    font-size: 18px;
    &:hover {
        background-color: #b4924f;
        cursor: pointer;
    }
`;

const ContainerDescubra = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;

    
`;

const ContainerItemsDescubra = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 0 20% 0 20%;

    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 0 0 0 0;
    }
`;

const ItemsDescubra = styled.div`
  font-size: 10px;
  text-align: left;

  @media screen and (max-width: 768px){
        padding: 0 3rem 0 0;
        text-align: center;
    }
  
`;

const ImgDescubra = styled.img`

    width: 350px;
    height: 246px;
`;

const ContainerOndeEstamos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    position: relative;

    
`;

const ImgFundoOndeEstamos = styled.img`
    width: 100%;
    height: 435px;
    
`;

const ButtonOndeEstamos = styled.button`
    background-color: #FFFFFF;
    border: none;
    padding: 17px 23px 17px 23px;
    color: #111111;
    font-family: bold;
    font-size: 18px;

    &:hover {
        background-color: #e6dede;
        cursor: pointer;
    }
`;

const TextoSobreImagem = styled.div`
    position: absolute;
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%); 
    text-align: center;
    color: white; 

    
`;

const ContainerProdutos = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 0 10rem 0 10rem;

    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 0 0 0 0;
        justify-content: center;
        align-items: center;
    }    
    
`;

const ItemsProdutos = styled.div`
    display: flex;
    width: calc(50% - 3rem);
    font-size: 10px;
    text-align: left;
    border: 1px #7E8690;
    padding: 0.5rem;
    border-style: dashed;

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        width: calc(60% - 3rem);
    }
`;

const ImgProducts = styled.img`

    width: 150px;
    height: 150px;
    align-items: center;
    margin-top: 1rem;

    @media screen and (max-width: 768px){
        width: 200px;
        height: 200px;
    }
    
`;

const ContainerAlignProducts = styled.div`

`;

const TextDescription = styled.p`
    font-size: 16px;
    color: #7E8690;
    font-family: 'Open Sans', sans-serif;
    margin-left: 1rem;

    
`;

const ContainerInstagramSiga = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    position: relative;

    
`;

const ImgFundoInstagramSiga = styled.img`
    width: 100%;
    height: 435px;
`;

const ContainerButtonSobreImagens = styled.button`
    border: none;
    padding: 3px 18px 3px 18px;
    font-family: bold;
    font-size: 18px;
    position: absolute;
    background-color: #DDB362;    
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
        background-color: #b4924f;
        cursor: pointer;
    }
`;

const ContainerExtraInformations = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

const ContainerExtInf01 =  styled.div`
    width: 370px;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContainerExtInf02 =  styled.div`
    background-color: #F8F8F8;
    width: 370px;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TextExtInf = styled.p`
    font-size: 30px;
    font-family: 'Cardo', sans-serif;
    font-weight: bold;
    text-align: center;
    white-space: pre-line; 
    word-wrap: break-word;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }
`;

const TextTitle = styled.h1`
    font-size: 42px;
    font-family: 'Cardo', sans-serif;
    font-weight: bold;
    text-align: justify;

    @media screen and (max-width: 768px) {
        font-size: 25px;
        text-align: start;
        
    }
`;

const SubTitleText = styled.h1`
    font-family: 'Cardo';
    font-weight: bold;
    font-size: 20px;
    margin-left: 1rem;
`;

const TextLargeImage = styled.h1`
    font-family: 'Cardo';
    font-weight: bold;
    font-size: 35px;

    @media screen and (max-width: 768px) {
        font-size: 25px;
        
    }
`;

const TextSmallImage = styled.p`
    font-family: 'Cookie';
    font-size: 27.2px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
        
    }
`;

export default function Home(){

    const handleOndeEstamos = () => {
        window.open('https://www.google.com/maps/dir//Avenida+Aur%C3%A9lio+Luiz+Mistiere+270+Andar+2+sl+13,+Fronteira+-+MG,+38230-000/@-20.2814494,-49.2864693,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94bcddaa5ba1111d:0xa9dabde054b21a18!2m2!1d-49.2040676!2d-20.2814687?entry=ttu', '_blank');
      };
    const handleFaleConosco = () => {
        window.open('https://www.instagram.com/sorveteria.pinguim_/', '_blank');
    };

    const handleSigaAGente = () => {
        window.open('https://www.instagram.com/sorveteria.pinguim_/', '_blank');
    };

    return(
        <main>
            <HomePage id="home">
                <ImgHome src={imgHome}/>
                <TextHome>
                    <TextTitle>O jeito doce de viver a vida!</TextTitle>
                    <TextDescription>
                        Sorveteria Pinguim o Refúgio dos Amantes de Sorvete!
                        Na agitação do dia a dia, há sempre um momento para se deliciar com algo verdadeiramente especial. Na Sorveteria Pinguim, não apenas servimos sorvetes; nós entregamos uma experiência sensorial que eleva os sentidos e aquece os corações. Somos mais do que uma sorveteria; somos os guardiões do sabor mais doce da vida.
                        Desde a nossa fundação, cultivamos uma tradição de excelência, onde cada colherada é uma jornada através de camadas de felicidade. Nosso compromisso com a qualidade é incomparável - cada sabor é meticulosamente criado com ingredientes frescos e paixão inigualável. Da cremosidade do clássico baunilha à explosão de sabores das frutas exóticas, cada opção em nosso cardápio é um convite para explorar novas sensações.
                        Mas na Sorveteria Pinguim, não é apenas sobre os sorvetes. É sobre a comunidade que construímos, onde famílias se reúnem para compartilhar risos e memórias, e amigos se reconectam em torno de uma taça gelada. Nossa atmosfera é calorosa e acolhedora, um verdadeiro oásis em meio ao calor do dia.
                        "O jeito doce de viver a vida" não é apenas uma frase para nós; é o nosso mantra, o nosso compromisso com você, nosso estimado cliente. Quer esteja celebrando uma conquista ou simplesmente desejando um momento de indulgência, a Sorveteria Pinguim está aqui para tornar cada momento especial.
                        Então, da próxima vez que você estiver buscando uma experiência que vai além do comum, venha nos visitar. Deixe-nos guiá-lo através de um mundo de sabor e prazer, onde cada colherada é uma celebração da vida. Sorveteria Pinguim - onde a doçura encontra seu lar.
                    </TextDescription>
                </TextHome>                
            </HomePage>

            <ContainerButtonHome>
                <StyledButtonHome>#SorveteriaPinguim</StyledButtonHome>
            </ContainerButtonHome>

            <ContainerDescubra id='descubra'>                
                    <TextTitle>Descubra o Doce Segredo da Felicidade!</TextTitle>
            </ContainerDescubra>
                
            <ContainerItemsDescubra>

                    <ItemsDescubra>
                        <ImgDescubra src={imgDescubra1} />
                       
                            <SubTitleText>Qualidade Superior dos Ingredientes</SubTitleText>
                            <TextDescription>
                                Na Sorveteria Pinguim, acreditamos que a felicidade começa com a qualidade dos ingredientes. Utilizamos apenas os melhores produtos frescos para criar nossos sorvetes, garantindo uma experiência de sabor excepcional a cada colherada.
                            </TextDescription>
                                              
                    </ItemsDescubra>

                    <ItemsDescubra>
                        <ImgDescubra src={imgDescubra2} />
                       
                            <SubTitleText>Arte e Dedicação na Produção</SubTitleText>
                            <TextDescription>
                                Na Sorveteria Pinguim, cada sorvete é uma obra de arte meticulosamente elaborada. Nossos mestres sorveteiros dedicam-se a criar misturas perfeitas de sabores, texturas e aromas que encantam os sentidos.
                            </TextDescription>
                        
                    </ItemsDescubra>

                    <ItemsDescubra>
                        <ImgDescubra src={imgDescubra3} />
                        
                            <SubTitleText>Qualidade Superior dos Ingredientes</SubTitleText>
                            <TextDescription>
                                Com anos de experiência e uma tradição de excelência, a Sorveteria Pinguim é reconhecida como um símbolo de qualidade e confiança na comunidade.
                                Repetidamente para desfrutar de nossos sorvetes feitos com carinho. Ao longo dos anos, mantivemos nossa dedicação à excelência e nosso compromisso com a felicidade de nossos clientes, tornando-nos um destino confiável para aqueles que buscam o doce segredo da verdadeira satisfação.
                            </TextDescription>
                       
                    </ItemsDescubra>

            </ContainerItemsDescubra>

            <ContainerOndeEstamos id='ondeestamos'>
                <ImgFundoOndeEstamos src={imgOndeEstamos} />
                <TextoSobreImagem>
                    <TextLargeImage>Em Fronteira - MG, o sorriso se mistura ao sabor de cada sorvete da nossa sorveteria</TextLargeImage>
                    <TextSmallImage>+ de 60 sabores de sorvetes, incluindo sorvetes zero açúcar e açaís artesanais.</TextSmallImage>
                    <ButtonOndeEstamos onClick={handleOndeEstamos}>ONTE ESTAMOS?</ButtonOndeEstamos>
                </TextoSobreImagem>
            </ContainerOndeEstamos>

            <ContainerDescubra>                
                    <TextTitle>Alguns de nossos produtos!</TextTitle>
            </ContainerDescubra>

            <ContainerProdutos id='produtos'>
                    <ItemsProdutos>

                            <ImgProducts src={imgSorveteExpressoProduct} />
                            <ContainerAlignProducts>
                                <SubTitleText>Sorvete Expresso</SubTitleText>
                                <TextDescription>
                                    Uma explosão de sabor e frescor em cada colherada. Feito com os melhores ingredientes, é uma experiência que vai encantar seus sentidos.
                                </TextDescription>
                            </ContainerAlignProducts>                           
                                              
                    </ItemsProdutos>

                    <ItemsProdutos>

                            <ImgProducts src={imgBananaSplitProduct} />
                            <ContainerAlignProducts>
                                <SubTitleText>Banana Split</SubTitleText>
                                <TextDescription>
                                    Uma combinação perfeita de frutas frescas e sorvete cremoso. É um festival de sabores em cada colherada.
                                </TextDescription>
                            </ContainerAlignProducts>                    
                                                    
                    </ItemsProdutos>

                    <ItemsProdutos>

                            <ImgProducts src={imgAcaiProduct} />
                            <ContainerAlignProducts>
                                <SubTitleText>Açaí</SubTitleText>
                                <TextDescription>
                                    Feito com os melhores ingredientes e uma paixão inigualável, cada tigela é uma explosão de vitalidade e frescor.
                                </TextDescription>
                            </ContainerAlignProducts>                      
                                                   
                    </ItemsProdutos>

                    <ItemsProdutos>

                            <ImgProducts src={imgSundaeProduct} />
                            <ContainerAlignProducts>
                                <SubTitleText>Sundae</SubTitleText>
                                <TextDescription>
                                    Uma explosão de sabor e frescor em cada colherada. Feito com os melhores ingredientes, é uma experiência que vai encantar seus sentidos.
                                </TextDescription>
                            </ContainerAlignProducts>                     
                                                                         
                    </ItemsProdutos>

                    <ItemsProdutos>

                            <ImgProducts src={imgCopoAcaiProduct} />
                            <ContainerAlignProducts>
                                <SubTitleText>Copo de Açaí</SubTitleText>
                                <TextDescription>
                                    Refresque-se e revitalize-se com nosso Copo de Açaí, uma explosão de sabor e energia em cada colherada. Feito com frutas frescas e amor genuíno, cada colher é uma dose de vitalidade.
                                </TextDescription>
                            </ContainerAlignProducts>                                                  
                        
                    </ItemsProdutos>

                    <ItemsProdutos>

                            <ImgProducts src={imgCopoSorveteProduct} />
                            <ContainerAlignProducts>
                                <SubTitleText>Copo de Sorvete</SubTitleText>
                                <TextDescription>
                                    Transforme seu dia com nosso Copo de Sorvete, escolha entre uma variedade de sabores premium e mergulhe em uma experiência de sorvete como nenhuma outra.
                                </TextDescription>
                            </ContainerAlignProducts>                      
                                                   
                    </ItemsProdutos>

                    <ItemsProdutos>
                        <ImgProducts src={imgPetitGateauProduct} />
                        <ContainerAlignProducts>
                            <SubTitleText>Petit Gateau</SubTitleText>
                            <TextDescription>
                                Mime-se com nosso Petit Gateau, uma explosão de sabor em cada mordida. Experimente a perfeita combinação de bolo quente e recheio derretido, com certeza você vai ficar querendo mais.
                            </TextDescription>
                        </ContainerAlignProducts>
                    </ItemsProdutos>

                    <ItemsProdutos>
                        <ImgProducts src={imgMilkShakeProduct} />
                        <ContainerAlignProducts>
                            <SubTitleText>Milkshake</SubTitleText>
                            <TextDescription>
                                Refresque-se com nosso Milkshake, uma mistura irresistível de cremosidade e sabor. Escolha entre uma variedade de opções e saboreie a combinação perfeita de sabor e frescor.
                            </TextDescription>
                        </ContainerAlignProducts>
                    </ItemsProdutos>

                    <ItemsProdutos>
                        <ImgProducts src={imgSorveteZeroProduct} />
                        <ContainerAlignProducts>
                            <SubTitleText>Sorvete Zero Açúcar</SubTitleText>
                            <TextDescription>
                                Desfrute do prazer do sorvete sem culpa com nosso Sorvete Zero. Delicie-se com sabores premium sem adição de açúcar, uma experiência deliciosa sem comprometer sua dieta.
                            </TextDescription>
                        </ContainerAlignProducts>
                    </ItemsProdutos>

                    <ItemsProdutos>
                        <ImgProducts src={imgBoloSorveteProduct} />
                        <ContainerAlignProducts>
                            <SubTitleText>Bolo de Sorvete</SubTitleText>
                            <TextDescription>
                                Celebre cada momento com nosso Bolo de Sorvete, uma fusão perfeita de texturas e sabores. Permita-se uma experiência única com camadas de sorvete cremoso e recheios deliciosos.
                            </TextDescription>
                        </ContainerAlignProducts>
                    </ItemsProdutos>


            </ContainerProdutos>

            <ContainerButtonHome id='contato'>
                    <StyledButtonHome onClick={handleFaleConosco}>Fale Conosco!</StyledButtonHome>
            </ContainerButtonHome>

            <ContainerInstagramSiga>
                <ImgFundoInstagramSiga src={imgContainerInsta1}/>
                <ImgFundoInstagramSiga src={imgContainerInsta2}/>
                <ImgFundoInstagramSiga src={imgContainerInsta3}/>
                <ImgFundoInstagramSiga src={imgContainerInsta4}/>
                <ImgFundoInstagramSiga src={imgContainerInsta5}/>
                <ImgFundoInstagramSiga src={imgContainerInsta6}/>
                <ContainerButtonSobreImagens onClick={handleSigaAGente}>
                    <FaInstagram size={25}/>  <p>Siga a gente!</p>
                </ContainerButtonSobreImagens>
            </ContainerInstagramSiga>

            <ContainerExtraInformations>
                <ContainerExtInf01>
                    <TextExtInf>Mais de 10 anos de <br/>história.</TextExtInf>
                </ContainerExtInf01>
                    
                <ContainerExtInf02>
                    <TextExtInf>Com mais de 60 <br/>sabores.</TextExtInf>
                </ContainerExtInf02>
                    
                <ContainerExtInf01>
                    <TextExtInf>Localizada em <br/>Fronteira - MG</TextExtInf>
                </ContainerExtInf01>
            </ContainerExtraInformations>
                       
        </main>
    )
}