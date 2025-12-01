import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState } from "react";


const Destinos = () => {
    // lista de destinos (substitua as URLs por require(...) se tiver imagens locais)
    const destinos = [
        {
            imagem: 'https://s2-g1.glbimg.com/JsLq8C4FTm0aliODOg8QMKDYSuE=/0x0:1198x898/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/n/K/iiEAshQ8aethCsx2Azdw/padre-cicero-gustavo-pellizon-svm.jpeg',
            nomeDestino: "Horto do Padre Cícero",
            descricao:
                "O principal ponto turístico de Juazeiro do Norte é o Horto do Padre Cícero, onde se encontra a estátua de 27 metros do sacerdote na Colina do Horto. Outros pontos importantes incluem a Praça Padre Cícero, o Casarão do Padre Cícero (Museu Vivo), a Igreja Bom Jesus do Horto, e o Cruzeiro da Fé"
        },
        {
            imagem: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.2220749:1589930378/image/image.jpg?f=16x9&h=720&w=1280&$p$f$h$w=f76261b',
            nomeDestino: "Engenho Tupinambá",
            descricao:
                "Patrimônio cultural e arquitetônico de Barbalha, o Engenho Tupinambá preserva história canavieira. O prédio, com arquitetura rústica e quase 200 anos de construção, integra a recém-lançada Rota Cariri. O Engenho Tupinambá (Av. Lyrio Callou, S/N) está aberto à visitação de segunda a sexta-feira, de 8 às 18 horas. O acesso é gratuito. O ideal é agendar pelo telefone: (88) 99649.6463"
        },
        {
            imagem: 'https://www.anuariodoceara.com.br/wp-content/uploads/2023/07/PORTEIRAS_Fotos_Prefeitura-de-Porteiras-3-822x537.jpg',
            nomeDestino: "Pedra Branca - Porteiras, Ceará",
            descricao: "A Pedra Branca em Porteiras, Ceará, é um ponto turístico natural conhecido por suas trilhas e belezas naturais, incluindo cachoeiras. Embora existam diversas trilhas e cachoeiras na região, como a Cachoeira do Inferno e a Cachoeira do Urubu, é recomendável verificar a segurança e acesso, pois as condições podem variar."

        },
        {
            imagem: "https://s2.wklcdn.com/image_295/8865854/201096740/123360899.700x525.jpg",
            nomeDestino: "Cachoeira da Barriguda",
            descricao: "A Cachoeira da Barriguda, localizada no município de Porteiras, Ceará, é um atrativo turístico natural conhecido por suas águas cristalinas e beleza preservada,situada aos pés da Chapada do Araripe. É um destino para quem busca contato com a natureza, com acesso por trilhas e oportunidades de lazer e banho. Localização: Fica no município de Porteiras, Ceará, na região do Cariri."
        },
        {
            imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4mss1jAIUrWisER6Dfc7fJNG4LFrd5JaBPW1znJ3KdpoI5CjquEI2U5RIYdLg1d7YGLGcyQkVftZQ9kYVuHGaRzSHcXI2HGEvKxB2UI6LGlrHAcXYyqWLi4d2FfMFWQt2aYzk4g1QMYEv/s1600/foto+antonio+rodrigues.jpg",
            nomeDestino: "Parque Estadual Sitio Fundão",
            descricao: "O parque apresenta trilhas interpretativas como o Circuito das árvores, Sítio Fundão e Trilhas dos Sentidos, além do Circuito de Mountain bike. Abriga o Centro de Visitantes. A trilha e o centro de visitantes dispõem de EcoMapss (https://play.google.com/store/apps/details?id=joaoabreu.cursoflutter.uber_app), aplicativo disponível gratuitamente na Play Store com uso offline, que permite ao visitante maior integração e conhecimento dos atributos naturais, bem como a inclusão social."
        }

    ];

    // estado com o índice do destino atual
    const [index, setIndex] = useState(0);
    const total = destinos.length;
    const atual = destinos[index];


    const proximoDestino = () => {
        setIndex((prev) => (prev + 1) % total);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.card}>
                <Image source={{ uri: atual.imagem }} style={styles.image} resizeMode="cover" />
                <Text style={styles.title}>{atual.nomeDestino}</Text>
                <Text style={styles.description}>{atual.descricao}</Text>
                <Text style={styles.counter}>{index + 1} / {total}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={proximoDestino}>
                <Text style={styles.buttonText}>Próximo destino</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#faf6ec',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        width: '300',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 8,
        marginBottom: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#5ab334',
        marginBottom: 8,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    counter: {
        fontSize: 12,
        color: '#777',
    },
    button: {
        width: '100',
        height: 48,
        backgroundColor: '#5ab334',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
    },
});
export default Destinos
