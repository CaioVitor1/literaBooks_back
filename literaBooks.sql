--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: favoriteGenre; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."favoriteGenre" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "genreId" integer NOT NULL
);


ALTER TABLE public."favoriteGenre" OWNER TO postgres;

--
-- Name: favoritegenre_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.favoritegenre_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favoritegenre_id_seq OWNER TO postgres;

--
-- Name: favoritegenre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.favoritegenre_id_seq OWNED BY public."favoriteGenre".id;


--
-- Name: futuresReadings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."futuresReadings" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "reviewId" integer NOT NULL
);


ALTER TABLE public."futuresReadings" OWNER TO postgres;

--
-- Name: futuresReadings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."futuresReadings_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."futuresReadings_id_seq" OWNER TO postgres;

--
-- Name: futuresReadings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."futuresReadings_id_seq" OWNED BY public."futuresReadings".id;


--
-- Name: genre; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.genre (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.genre OWNER TO postgres;

--
-- Name: genre_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.genre_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.genre_id_seq OWNER TO postgres;

--
-- Name: genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.genre_id_seq OWNED BY public.genre.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    title text NOT NULL,
    image text NOT NULL,
    author text NOT NULL,
    "genreId" integer NOT NULL,
    description text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_id_seq OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    image text NOT NULL,
    "nextReading" integer,
    "favoriteBook" text,
    "favoriteAuthor" text,
    "readingGoals" integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: favoriteGenre id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."favoriteGenre" ALTER COLUMN id SET DEFAULT nextval('public.favoritegenre_id_seq'::regclass);


--
-- Name: futuresReadings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."futuresReadings" ALTER COLUMN id SET DEFAULT nextval('public."futuresReadings_id_seq"'::regclass);


--
-- Name: genre id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genre ALTER COLUMN id SET DEFAULT nextval('public.genre_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
e7b305f8-b35f-499f-8c4d-51cb16292f3e	936d4060dd2c716fb648f3afb20584f8a6033ffe0fc6dc3eb31a67280edc2eb5	2022-10-07 23:27:01.321911-03	20221008022701_create_tables	\N	\N	2022-10-07 23:27:01.26561-03	1
22bee6d8-040f-4734-822e-809ec84cae22	eb51e629b61d082aec7d1b5980a2d6ef51fbe1931ad952bb1633358c2606064e	2022-10-07 23:28:35.928548-03	20221008022835_add_auto_increment_in_id_s	\N	\N	2022-10-07 23:28:35.916345-03	1
695c5e28-206f-4db5-90d8-a80b66238542	deadc846ca05f24daa34dc73e72999c485b039c3dab34f60b405855eb2bebcc4	2022-10-08 22:16:57.109724-03	20221009011657_	\N	\N	2022-10-08 22:16:57.099012-03	1
\.


--
-- Data for Name: favoriteGenre; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."favoriteGenre" (id, "userId", "genreId") FROM stdin;
1	3	8
2	3	1
3	3	2
\.


--
-- Data for Name: futuresReadings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."futuresReadings" (id, "userId", "reviewId") FROM stdin;
\.


--
-- Data for Name: genre; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.genre (id, name) FROM stdin;
1	biografia
2	infantil
3	romances
4	mangas
5	misterio
6	ficcao
7	suspense
8	ciencias
9	espiritual
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (id, title, image, author, "genreId", description, "userId") FROM stdin;
1	Frida: A biografia	https://m.media-amazon.com/images/I/51Em5wHyEQL.jpg	Hayden Herrera 	1	Todo mundo conhece Frida Kahlo, cuja imagem, de olhar complexo sob sobrancelhas espessas, cabelos negros e roupas coloridas, é quase tão difundida quanto a de Che Guevara. Todo mundo sabe que sofreu um gravíssimo acidente na juventude, que foi casada com o grande muralista Diego Rivera, e que foi amante de Leon Trotsky. Todo mundo sabe que tinha ideias radicais em política e hábitos modernos na vida, que pintava de modo radicalmente pessoal, e que teve uma existência tão tumultuada quanto o século XX em que viveu. O que poucos sabem é que tudo o que quase todo mundo sabe sobre Frida Kahlo está longe de resumir sua vida, ou de revelar a mulher por trás do ícone da arte latino-americana moderna. Finalmente traduzida para o português, Frida – a biografia foi um dos grandes impulsionadores do revival da artista nos Estados Unidos e em todo o mundo a partir de 1983. Como sintetizou a crítica, “Por meio de sua arte, Kahlo fez de si mesma uma artista e um ícone; por meio desta biografia, ganhou também dimensão humana”. Escrito por Hayden Herrera, reconhecida historiadora da arte, o livro traz, além da intimidade da história de Frida, detalhadas descrições e interpretações dos quadros de Kahlo, escritas com o rigor e a acuidade de uma especialista, mas também com a clareza, a fluidez e a sedução de uma amante dessa arte.	1
2	Gandhi: o despertar dos humilhados	https://m.media-amazon.com/images/I/41KqAdoRnqL.jpg	Jacques Attalli	1	Reconheço que estou totalmente indefeso diante da violência quando ela é feita pelos nossos; e, enquanto ouço falar sobre ela, um médico tomando o meu pulso logo constataria a aceleração dos batimentos cardíacos do meu coração. Tenho necessidade de alguns instantes, consagrados à espera da ajuda de Deus, para que o meu coração recupere um ritmo normal. Sou incapaz de remediar essa debilidade. Eu a alimento. Essa emotividade me permite continuar sendo apto a servir e a guiar, a permanecer humilde e guardar a confiança em Deus. Somente Ele sabe quando estarei suficientemente contrariado e comovido, pelos nossos atos de violência, para que se justifique um jejum temporário ou permanente. É a última arma do satyagrahi contra aqueles a quem se ama.	1
3	Freud: Uma vida para o nosso tempo	https://img.olx.com.br/images/40/401230322400145.jpg	 Peter Gay	1	Este livro é uma viagem pelo mundo de Sigmund Freud: a família, as relações, a cidade onde viveu, a formação, as dificuldades profissionais, inovações teóricas, os casos clínicos, a vida extraordinariamente produtiva e o contexto social e histórico em que ela foi vivida. Nenhum outro biógrafo conseguiu relacionar com tamanha perspicácia as concepções de Freud à sua vida. Historiador com formação psicanalítica, Peter Gay tem um interesse especial pelo período de efervescência intelectual e profunda instabilidade política que foi a segunda metade do século XIX e a primeira metade do século XX. Ao examinar as paixões, sondar o intelecto e expor com clareza as teorias de Freud, Peter Gay construiu uma obra que é considerada por muitos como a biografia definitiva do criador da psicanálise, um homem que ousou repensar radicalmente a cultura ocidental.	1
4	O Meu Pé de Laranja Lima	https://m.media-amazon.com/images/I/914xinLX3HL.jpg	José Mauro de Vasconcelos	2	Um clássico da literatura brasileira, com adaptações para a televisão, o cinema e o teatro, O Meu Pé de Laranja Lima é desses livros que marcam época. Lançado em 1968, trata-se de uma história fortemente autobiográfica, que demonstra a mão de um escritor experiente, ciente do efeito que pode provocar nos leitores com suas cenas e a composição de seus personagens. O protagonista Zezé tem 6 anos e mora num bairro modesto, na zona norte do Rio de Janeiro. O pai está desempregado, e a família passa por dificuldades. O menino vive aprontando, sem jamais se conformar com as limitações que o mundo lhe impõe – viaja com sua imaginação, brinca, explora, descobre, responde aos adultos, mete-se em confusões, causa pequenos desastres. As surras que lhe aplicam seu pai e sua irmã mais velha são seu suplício, a ponto de fazê-lo querer desistir da vida. No entanto, o apego ao mundo que criou felizmente sempre fala mais alto. Só não há remédio para a dor, para a perda. E Zezé muito cedo descobrirá isso. A alegria e a tristeza não poderiam estar mais bem combinadas do que nestas páginas. E isso, se não explica, justifica a imensa popularidade alcançada pelo livro.	1
5	O pequeno príncipe	https://m.media-amazon.com/images/I/81fXBeYYxpL.jpg	 Antoine de Saint-Exupéry	2	Nesta clássica história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma jornada filosófica e poética através de planetas que encerram a solidão humana. A edição conta com a clássica tradução do poeta imortal dom Marcos Barbosa, e é a versão mais consagrada da obra, publicada no Brasil desde 1952.	1
6	Um dia	https://5934488p.ha.azioncdn.net/capas-livros/9788580570458-david-nicholls-um-dia-3826118685.jpg	David Nicholls	3	Dexter Mayhew e Emma Morley se conheceram em 1988. Ambos sabem que no dia seguinte,após a formatura na universidade, deverão trilhar caminhos diferentes. Mas, depois de apenas um dia juntos, não conseguem parar de pensar um no outro.Os anos se passam e Dex e Em levam vidas isoladas - vidas muito diferentes daquelas que elessonhavam ter. Porém, incapazes de esquecer o sentimento muito especial que os arrebatou naquela primeira noite, surge uma extraordinária relação entre os dois. Ao longo dos vinte anos seguintes, flashes do relacionamento deles são narrados, um por ano, todos no mesmo dia: 15 de julho. Dexter e Emma enfrentam disputas e brigas, esperanças e oportunidades perdidas, risos e lágrimas. E, conforme o verdadeiro significado desse dia crucial é desvendado, eles precisam acertar contas com a essência do amor e da própria vida.	1
7	Orgulho e preconceito	https://m.media-amazon.com/images/I/81zxDaAx4WL.jpg	Jane Austen	3	Orgulho e preconceito é o livro mais famoso de Jane Austen e possui uma série de personagens inesquecíveis e um enredo memorável. Austen nos apresenta Elizabeth Bennet como heroína irresistível e seu pretendente aristocrático, o sr. Darcy. Nesse livro, aspectos diferentes são abordados: orgulho encontra preconceito, ascendência social confronta desprezo social, equívocos e julgamentos antecipados conduzem alguns personagens ao sofrimento e ao escândalo. O livro pode ser considerado a obra-prima da escritora, que equilibra comédia com seriedade, observação meticulosa das atitudes humanas e sua ironia refinada.	1
8	One-Punch Man Vol. 01 	https://img.assinaja.com/assets/tZ/099/img/359687_520x520.jpg	ONE e Yusuke Murata	4	Com apenas um soco!! Saitama se tornou forte a ponto de derrotar criaturas monstruosas com um único soco. E o que não falta são monstros para serem derrotados na Cidade Z, onde eles surgem a todo momento, seja das profundezas da Terra ou dos confins do espaço, como resultado de uma experiência maluca ou de uma mutação genética. O problema é justamente que ele os derrota com um golpe só! O objetivo agora é encontrar a emoção de um verdadeiro desafio! A lenda do mais poderoso e pacato herói começa aqui!!Acompanhe o dia a dia das incríveis batalhas concebidas pela mais talentosa dupla dos mangás: ONE, a mente por trás da história, e Yusuke Murata, o mestre das ilustrações!! 	1
9	Demon Slayer: Kimetsu No Yaiba, Vol. 1: Volume 	https://m.media-amazon.com/images/I/81ZNkhqRvVL.jpg	 Koyoharu Gotouge 	4	O dia-a-dia pacato de Tanjiro, um gentil garoto que vende carvão, se transforma radicalmente quando sua família é assassinada por um demônio. A única sobrevivente é Nezuko, sua irmã mais nova. Porém, agora, ela se transformou em um Oni. Diante dessa tragédia, os dois irmãos partem em uma jornada para derrotar o Oni que matou sua mãe e irmãozinhos. E assim tem início uma aventura sanguinolenta de espadachins!	1
10	Assassinato no Expresso do Oriente	https://m.media-amazon.com/images/I/71gOOKU1chL.jpg	 Agatha Christie	5	m meio a uma viagem, Hercule Poirot é surpreendido por um telegrama solicitando seu retorno a Londres. Então, o famoso detetive belga embarca no Expresso do Oriente, que está inesperadamente cheio para aquela época do ano. Pouco tempo após a meia-noite, o excesso de neve nos trilhos obriga o trem a parar. Na manhã seguinte, o corpo de um dos passageiros é encontrado, golpeado por múltiplas facadas. Com os passageiros isolados por conta da neve, e tendo um assassino entre eles, a única solução é que Poirot inicie uma investigação para descobrir quem é o criminoso ― antes que se faça mais uma vítima.	1
11	A Última Festa	https://m.media-amazon.com/images/I/71gayVVXUpL.jpg	Lucy Foley 	5	Programado para acontecer em um cenário idílico, o réveillon que Miranda, Katie e os outros amigos que conheceram na faculdade passarão juntos este ano promete refeições deliciosas regadas a champanhe, música, jogos e conversas descontraídas. No entanto, as tensões começam já na viagem de trem ― o grupo não tem mais nada em comum além de um passado de convivência, feridas jamais cicatrizadas e segredos potencialmente destrutivos.E então, em meio à grande festa da última noite do ano, o fio que os mantém unidos enfim arrebenta. No dia seguinte, alguém está morto e uma forte nevasca impede a vinda do resgate. Ninguém pode entrar. Ninguém pode sair. Nem o assassino. Contada em flashbacks a partir das perspectivas dos vários personagens, a história deste malfadado encontro é um daqueles mistérios de assassinato cheio de tensão e de ritmo perfeito. Com uma trama assustadora e brilhantemente construída, A última festa planta no leitor a semente da dúvida: será que velhos amigos são sempre os melhores amigos?	1
12	Admirável mundo novo	https://m.media-amazon.com/images/I/61hOp6UFvCL.jpg	 Aldous Leonard Huxley	6	Em uma sociedade organizada segundo princípios estritamente científicos, Bernard Marx, um psicólogo, sente-se inadequado quando se compara aos outros seres de sua casta. Ao descobrir uma “reserva histórica” que preserva costumes de uma sociedade anterior – muito semelhante à do leitor – Bernard vai perceber as diferenças entre esta civilização e a sua – e a partir de um sentimento de inconformismo ele desafiará o mundo. A história de Bernard se passa em um ambiente em que a literatura, a música e o cinema só têm a função de solidificar a alienação; um universo que louva o avanço da técnica, a produção em série, a uniformidade contra a diversidade.Muitas das previsões de Huxley vieram a ser confirmadas anos mais tarde, como a tecnologia reprodutiva, as supostas técnicas de aprendizado durante o sono e a manipulação pelo condicionamento psicológico. Ao lado de obras como Fahrenheit 451, de Ray Bradbury, e 1984, de George Orwell, que criticavam os governos totalitários de esquerda e de direita, Admirável Mundo Novo figura na lista dos livros mais relevantes e influentes de todos os tempos. O clássico de Huxley não é somente um hábil exercício de futurismo ou de ficção científica, mas um olhar acerca do autoritarismo no mundo desde que o livro foi publicado, em 1932, e que continua a nos assombrar.	1
13	O conto da aia	https://m.media-amazon.com/images/I/91AHNAr638L.jpg	 Margaret Atwood	6	O romance distópico O conto da aia, de Margaret Atwood, se passa num futuro muito próximo e tem como cenário uma república onde não existem mais jornais, revistas, livros nem filmes. As universidades foram extintas. Também já não há advogados, porque ninguém tem direito a defesa. Os cidadãos considerados criminosos são fuzilados e pendurados mortos no Muro, em praça pública, para servir de exemplo enquanto seus corpos apodrecem à vista de todos. Para merecer esse destino, não é preciso fazer muita coisa – basta, por exemplo, cantar qualquer canção que contenha palavras proibidas pelo regime, como “liberdade”. Nesse Estado teocrático e totalitário, as mulheres são as vítimas preferenciais, anuladas por uma opressão sem precedentes. O nome dessa república é Gilead, mas já foi Estados Unidos da América. Uma das obras mais importantes da premiada escritora canadense, conhecida por seu ativismo político, ambiental e em prol das causas femininas, O conto da aia foi escrito em 1985 e inspirou a série homônima (The Handmaid’s Tale, no original), produzida pelo canal de streaming Hulu em 2017. As mulheres de Gilead não têm direitos. Elas são divididas em categorias, cada qual com uma função muito específica no Estado. A Offred coube a categoria de aia, o que significa pertencer ao governo e existir unicamente para procriar, depois que uma catástrofe nuclear tornou estéril um grande número de pessoas. E sem dúvida, ainda que vigiada dia e noite e ceifada em seus direitos mais básicos, o destino de uma aia ainda é melhor que o das não-mulheres, como são chamadas aquelas que não podem ter filhos, as homossexuais, viúvas e feministas, condenadas a trabalhos forçados nas colônias, lugares onde o nível de radiação é mortífero. Com esta história assustadora, Margaret Atwood leva o leitor a refletir sobre liberdade, direitos civis, poder, a fragilidade do mundo tal qual o conhecemos, o futuro e, principalmente, o presente. Vencedor do Arthur C. Clarke Award.	1
14	O Homem de Giz	https://m.media-amazon.com/images/I/41LuOehnKtL.jpg	O Homem de Giz	7	Em 1986, Eddie e os amigos passam a maior parte dos dias andando de bicicleta pela pacata vizinhança em busca de aventuras. Os desenhos a giz são seu código secreto: homenzinhos rabiscados no asfalto; mensagens que só eles entendem. Mas um desenho misterioso leva o grupo de crianças até um corpo desmembrado e espalhado em um bosque. Depois disso, nada mais é como antes. Em 2016, Eddie se esforça para superar o passado, até que um dia ele e os amigos de infância recebem um mesmo aviso: o desenho de um homem de giz enforcado. Quando um dos amigos aparece morto, Eddie tem certeza de que precisa descobrir o que de fato aconteceu trinta anos atrás. Alternando habilidosamente entre presente e passado, O Homem de Giz traz o melhor do suspense: personagens maravilhosamente construídos, mistérios de prender o fôlego e reviravoltas que vão impressionar até os leitores mais escaldados.	1
15	Não conte a ninguém	https://m.media-amazon.com/images/I/814ppbYqHqL.jpg	Não conte a ninguém	7	O Dr. David Beck e sua esposa, Elizabeth, se conheceram ainda crianças, e desde o início souberam que seu amor seria eterno. Todos os anos, no dia do aniversário do primeiro beijo, eles voltavam ao lago Charmaine para gravar mais uma barra no tronco da árvore que tinha suas iniciais inscritas dentro de um coração. Mas, no 13o. ano, após terem cumprido seu ritual romântico, David e Elizabeth foram brutalmente atacados. Ele foi deixado inconsciente no lago para se afogar e ela, depois de ser sequestrada e ter o rosto marcado com ferro em brasa, foi encontrada morta - supostamente vítima de um serial killer. Oito anos após a tragédia, David ainda tenta reconstruir sua vida quando recebe um misterioso e-mail com as iniciais dele e da esposa seguidas de 21 barras, uma pergunta que só os dois saberiam responder e um pedido: Não conte a ninguém. Ao acessar o link enviado na mensagem - na hora marcada, 'a hora do beijo' -, David é redirecionado para um site onde surge a imagem de uma câmera de rua. Após alguns minutos sem que nada aconteça, Elizabeth aparece na tela e sussurra: 'Sinto muito.' Isso acende uma centelha de esperança: de alguma forma e em algum lugar, Elizabeth poderia estar viva. Em sua desesperada busca da verdade, David acaba sendo perseguido por inimigos poderosos. O FBI, após ter encontrado dois corpos no local do suposto assassinato de Elizabeth, passa a vê-lo como o principal suspeito da morte da esposa. Além disso, um milionário e antigo amigo da família Beck, sem nenhum interesse em ver a verdade revelada, contrata um assassino de aluguel para matar David. Em Não conte a ninguém, Harlan Coben constrói uma história envolvente e eletrizante sobre perda e redenção, segredos inconfessáveis e um amor capaz de resisitir a tudo.	1
16	Uma Breve História do Tempo	https://m.media-amazon.com/images/I/61AaXcdHXKS.jpg	Stephen Hawking 	8	Uma das mentes mais geniais do mundo moderno, Stephen Hawking guia o leitor na busca por respostas a algumas das maiores dúvidas da humanidade: Qual a origem do universo? Ele é infinito? E o tempo? Sempre existiu, ou houve um começo e haverá um fim? Existem outras dimensões além das três espaciais? E o que vai acontecer quando tudo terminar? Com ilustrações criativas e texto lúcido e bem-humorado, Hawking desvenda desde os mistérios da física de partículas até a dinâmica que movimenta centenas de milhões de galáxias por todo o universo. Para o iniciado, Uma breve história do tempo é uma bela representação de conceitos complexos; para o leigo, é um vislumbre dos segredos mais profundos da criação.	1
17	Sapiens: uma breve história da humanidade	https://m.media-amazon.com/images/I/71-ghLb8qML.jpg	Yuval Noah Harari	8	O que possibilitou ao Homo sapiens subjugar as demais espécies? O que nos torna capazes das mais belas obras de arte, dos avanços científicos mais impensáveis e das mais horripilantes guerras? Nossa capacidade imaginativa. Somos a única espécie que acredita em coisas que não existem na natureza, como Estados, dinheiro e direitos humanos. Partindo dessa ideia, Yuval Noah Harari, doutor em história pela Universidade de Oxford, aborda em Sapiens a história da humanidade sob uma perspectiva inovadora. Explica que o capitalismo é a mais bem-sucedida religião, que o imperialismo é o sistema político mais lucrativo, que nós, humanos modernos, embora sejamos muito mais poderosos que nossos ancestrais, provavelmente não somos mais felizes. Um relato eletrizante sobre a aventura de nossa extraordinária espécie ? de primatas insignificantes a senhores do mundo.	1
18	O Livro dos Espíritos	https://m.media-amazon.com/images/I/81uMDGIYMXL.jpg	 Allan Kardec	9	Esta singela obra, a primeira do Espírito Humberto de Campos psicografada por Chico Xavier, une uma série de esclarecedoras crônicas, em que o autor apresenta temas diversos, tais como longevidade, paz, verdade e justiça, além de retratar personalidades como Sócrates, Charles Richet, os apóstolos Pedro e Judas Iscariotes, entre outros. Em mais de um texto, o autor cita, por meio da ótica do mundo espiritual, a importância da Casa de Ismael (Federação Espírita Brasileira), no cenário espírita nacional, e da Doutrina Espírita como fonte de consolo e respostas para as aflições da humanidade.	1
19	As 7 leis espirituais do sucesso	https://m.media-amazon.com/images/I/81G7GJsELbL.jpg	 Deepak Chopra	9	Em As sete leis espirituais do sucesso, Deepak Chopra rompe com a ideia mais tradicional de sucesso. Transformador, o novo conceito transcende as barreiras daquilo que se restringe simplesmente à realização material, elevando sua definição a um nível muito mais pleno, estreitamente ligada à compreensão das necessidades da alma humana e daquilo que é capaz de realizá-la. É exatamente por isso que este livro faz tanto sucesso no mundo todo, já que se manteve entre os mais vendidos nos Estados Unidos por mais de 60 semanas seguidas. Em sua primeira edição, em 1994, Deepak Chopra abordou um tema que se mostra cada vez mais relevante: a realização pessoal. Identificou de forma prática e acessível os sete princípios que contribuem para que as pessoas abandonem a concepção equivocada de sucesso e o atinjam em sua plenitude. Segundo o autor, ninguém jamais se sentirá completamente realizado enquanto submeter a sua felicidade às conquistas materiais. As sete leis espirituais do sucesso apresenta uma visão mais clara e abrangente dos resultados positivos alcançados quando sugere que devemos nos manter atentos às leis simples e poderosas que regem a harmonia do universo.	1
23	Anjos e Demônios	https://m.media-amazon.com/images/I/41zzqil4SEL.jpg	Dan Brown	7	aaaaaaaaaaaaaaaaaaaaaaaaaa	3
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, image, "nextReading", "favoriteBook", "favoriteAuthor", "readingGoals") FROM stdin;
3	Caio	caiovitor@hotmail.com	$2b$10$pg2.c0M7T3.7GezlXTe1Y.qYy/wCyEjk30JeRbKeGUciuNoWOljCq	https://img.elo7.com.br/users/picture/7EC5DD.jpg?85888342	\N	Uma breve história do tempo	Stephen Hawking	3
4	Marina	marina@hotmail.com	$2b$10$06dG/8NigI83gj624.8vnuM/eJwPq.5UBmaIJe6ilSrC89wBlfwMa	https://i.pinimg.com/474x/1f/8f/35/1f8f35ef69ba029cb724b1172a8a00b3.jpg	\N	Orgulho e preconceito	Jane Austen	24
1	Admin	teste@hotmail.com	Caio123*	https://static.vecteezy.com/ti/vetor-gratis/p3/7166516-boss-administrator-head-avatar-profile-icon-with-tie-symbol-vector-illustration-vetor.jpg	\N	Um dia	Nicholas Sparks	10
\.


--
-- Name: favoritegenre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.favoritegenre_id_seq', 3, true);


--
-- Name: futuresReadings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."futuresReadings_id_seq"', 1, false);


--
-- Name: genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.genre_id_seq', 9, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reviews_id_seq', 23, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: favoriteGenre favoriteGenre_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."favoriteGenre"
    ADD CONSTRAINT "favoriteGenre_pkey" PRIMARY KEY (id);


--
-- Name: futuresReadings futuresReadings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."futuresReadings"
    ADD CONSTRAINT "futuresReadings_pkey" PRIMARY KEY (id);


--
-- Name: genre genre_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genre
    ADD CONSTRAINT genre_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- Name: favoriteGenre favoriteGenre_genreId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."favoriteGenre"
    ADD CONSTRAINT "favoriteGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES public.genre(id);


--
-- Name: favoriteGenre favoriteGenre_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."favoriteGenre"
    ADD CONSTRAINT "favoriteGenre_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: futuresReadings futuresReadings_reviewId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."futuresReadings"
    ADD CONSTRAINT "futuresReadings_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES public.reviews(id);


--
-- Name: futuresReadings futuresReadings_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."futuresReadings"
    ADD CONSTRAINT "futuresReadings_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: reviews reviews_genreId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT "reviews_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES public.genre(id);


--
-- Name: reviews reviews_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

