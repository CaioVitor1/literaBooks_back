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
1	Frida: A biografia	https://m.media-amazon.com/images/I/51Em5wHyEQL.jpg	Hayden Herrera 	1	Todo mundo conhece Frida Kahlo, cuja imagem, de olhar complexo sob sobrancelhas espessas, cabelos negros e roupas coloridas, ?? quase t??o difundida quanto a de Che Guevara. Todo mundo sabe que sofreu um grav??ssimo acidente na juventude, que foi casada com o grande muralista Diego Rivera, e que foi amante de Leon Trotsky. Todo mundo sabe que tinha ideias radicais em pol??tica e h??bitos modernos na vida, que pintava de modo radicalmente pessoal, e que teve uma exist??ncia t??o tumultuada quanto o s??culo XX em que viveu. O que poucos sabem ?? que tudo o que quase todo mundo sabe sobre Frida Kahlo est?? longe de resumir sua vida, ou de revelar a mulher por tr??s do ??cone da arte latino-americana moderna. Finalmente traduzida para o portugu??s, Frida ??? a biografia foi um dos grandes impulsionadores do revival da artista nos Estados Unidos e em todo o mundo a partir de 1983. Como sintetizou a cr??tica, ???Por meio de sua arte, Kahlo fez de si mesma uma artista e um ??cone; por meio desta biografia, ganhou tamb??m dimens??o humana???. Escrito por Hayden Herrera, reconhecida historiadora da arte, o livro traz, al??m da intimidade da hist??ria de Frida, detalhadas descri????es e interpreta????es dos quadros de Kahlo, escritas com o rigor e a acuidade de uma especialista, mas tamb??m com a clareza, a fluidez e a sedu????o de uma amante dessa arte.	1
2	Gandhi: o despertar dos humilhados	https://m.media-amazon.com/images/I/41KqAdoRnqL.jpg	Jacques Attalli	1	Reconhe??o que estou totalmente indefeso diante da viol??ncia quando ela ?? feita pelos nossos; e, enquanto ou??o falar sobre ela, um m??dico tomando o meu pulso logo constataria a acelera????o dos batimentos card??acos do meu cora????o. Tenho necessidade de alguns instantes, consagrados ?? espera da ajuda de Deus, para que o meu cora????o recupere um ritmo normal. Sou incapaz de remediar essa debilidade. Eu a alimento. Essa emotividade me permite continuar sendo apto a servir e a guiar, a permanecer humilde e guardar a confian??a em Deus. Somente Ele sabe quando estarei suficientemente contrariado e comovido, pelos nossos atos de viol??ncia, para que se justifique um jejum tempor??rio ou permanente. ?? a ??ltima arma do satyagrahi contra aqueles a quem se ama.	1
3	Freud: Uma vida para o nosso tempo	https://img.olx.com.br/images/40/401230322400145.jpg	 Peter Gay	1	Este livro ?? uma viagem pelo mundo de Sigmund Freud: a fam??lia, as rela????es, a cidade onde viveu, a forma????o, as dificuldades profissionais, inova????es te??ricas, os casos cl??nicos, a vida extraordinariamente produtiva e o contexto social e hist??rico em que ela foi vivida. Nenhum outro bi??grafo conseguiu relacionar com tamanha perspic??cia as concep????es de Freud ?? sua vida. Historiador com forma????o psicanal??tica, Peter Gay tem um interesse especial pelo per??odo de efervesc??ncia intelectual e profunda instabilidade pol??tica que foi a segunda metade do s??culo XIX e a primeira metade do s??culo XX. Ao examinar as paix??es, sondar o intelecto e expor com clareza as teorias de Freud, Peter Gay construiu uma obra que ?? considerada por muitos como a biografia definitiva do criador da psican??lise, um homem que ousou repensar radicalmente a cultura ocidental.	1
4	O Meu P?? de Laranja Lima	https://m.media-amazon.com/images/I/914xinLX3HL.jpg	Jos?? Mauro de Vasconcelos	2	Um cl??ssico da literatura brasileira, com adapta????es para a televis??o, o cinema e o teatro, O Meu P?? de Laranja Lima ?? desses livros que marcam ??poca. Lan??ado em 1968, trata-se de uma hist??ria fortemente autobiogr??fica, que demonstra a m??o de um escritor experiente, ciente do efeito que pode provocar nos leitores com suas cenas e a composi????o de seus personagens. O protagonista Zez?? tem 6 anos e mora num bairro modesto, na zona norte do Rio de Janeiro. O pai est?? desempregado, e a fam??lia passa por dificuldades. O menino vive aprontando, sem jamais se conformar com as limita????es que o mundo lhe imp??e ??? viaja com sua imagina????o, brinca, explora, descobre, responde aos adultos, mete-se em confus??es, causa pequenos desastres. As surras que lhe aplicam seu pai e sua irm?? mais velha s??o seu supl??cio, a ponto de faz??-lo querer desistir da vida. No entanto, o apego ao mundo que criou felizmente sempre fala mais alto. S?? n??o h?? rem??dio para a dor, para a perda. E Zez?? muito cedo descobrir?? isso. A alegria e a tristeza n??o poderiam estar mais bem combinadas do que nestas p??ginas. E isso, se n??o explica, justifica a imensa popularidade alcan??ada pelo livro.	1
5	O pequeno pr??ncipe	https://m.media-amazon.com/images/I/81fXBeYYxpL.jpg	 Antoine de Saint-Exup??ry	2	Nesta cl??ssica hist??ria que marcou gera????es de leitores em todo o mundo, um piloto cai com seu avi??o no deserto do Saara e encontra um pequeno pr??ncipe, que o leva a uma jornada filos??fica e po??tica atrav??s de planetas que encerram a solid??o humana. A edi????o conta com a cl??ssica tradu????o do poeta imortal dom Marcos Barbosa, e ?? a vers??o mais consagrada da obra, publicada no Brasil desde 1952.	1
6	Um dia	https://5934488p.ha.azioncdn.net/capas-livros/9788580570458-david-nicholls-um-dia-3826118685.jpg	David Nicholls	3	Dexter Mayhew e Emma Morley se conheceram em 1988. Ambos sabem que no dia seguinte,ap??s a formatura na universidade, dever??o trilhar caminhos diferentes. Mas, depois de apenas um dia juntos, n??o conseguem parar de pensar um no outro.Os anos se passam e Dex e Em levam vidas isoladas - vidas muito diferentes daquelas que elessonhavam ter. Por??m, incapazes de esquecer o sentimento muito especial que os arrebatou naquela primeira noite, surge uma extraordin??ria rela????o entre os dois. Ao longo dos vinte anos seguintes, flashes do relacionamento deles s??o narrados, um por ano, todos no mesmo dia: 15 de julho. Dexter e Emma enfrentam disputas e brigas, esperan??as e oportunidades perdidas, risos e l??grimas. E, conforme o verdadeiro significado desse dia crucial ?? desvendado, eles precisam acertar contas com a ess??ncia do amor e da pr??pria vida.	1
7	Orgulho e preconceito	https://m.media-amazon.com/images/I/81zxDaAx4WL.jpg	Jane Austen	3	Orgulho e preconceito ?? o livro mais famoso de Jane Austen e possui uma s??rie de personagens inesquec??veis e um enredo memor??vel. Austen nos apresenta Elizabeth Bennet como hero??na irresist??vel e seu pretendente aristocr??tico, o sr. Darcy. Nesse livro, aspectos diferentes s??o abordados: orgulho encontra preconceito, ascend??ncia social confronta desprezo social, equ??vocos e julgamentos antecipados conduzem alguns personagens ao sofrimento e ao esc??ndalo. O livro pode ser considerado a obra-prima da escritora, que equilibra com??dia com seriedade, observa????o meticulosa das atitudes humanas e sua ironia refinada.	1
8	One-Punch Man Vol. 01 	https://img.assinaja.com/assets/tZ/099/img/359687_520x520.jpg	ONE e Yusuke Murata	4	Com apenas um soco!! Saitama se tornou forte a ponto de derrotar criaturas monstruosas com um ??nico soco. E o que n??o falta s??o monstros para serem derrotados na Cidade Z, onde eles surgem a todo momento, seja das profundezas da Terra ou dos confins do espa??o, como resultado de uma experi??ncia maluca ou de uma muta????o gen??tica. O problema ?? justamente que ele os derrota com um golpe s??! O objetivo agora ?? encontrar a emo????o de um verdadeiro desafio! A lenda do mais poderoso e pacato her??i come??a aqui!!Acompanhe o dia a dia das incr??veis batalhas concebidas pela mais talentosa dupla dos mang??s: ONE, a mente por tr??s da hist??ria, e Yusuke Murata, o mestre das ilustra????es!! 	1
9	Demon Slayer: Kimetsu No Yaiba, Vol. 1: Volume 	https://m.media-amazon.com/images/I/81ZNkhqRvVL.jpg	 Koyoharu Gotouge 	4	O dia-a-dia pacato de Tanjiro, um gentil garoto que vende carv??o, se transforma radicalmente quando sua fam??lia ?? assassinada por um dem??nio. A ??nica sobrevivente ?? Nezuko, sua irm?? mais nova. Por??m, agora, ela se transformou em um Oni. Diante dessa trag??dia, os dois irm??os partem em uma jornada para derrotar o Oni que matou sua m??e e irm??ozinhos. E assim tem in??cio uma aventura sanguinolenta de espadachins!	1
10	Assassinato no Expresso do Oriente	https://m.media-amazon.com/images/I/71gOOKU1chL.jpg	 Agatha Christie	5	m meio a uma viagem, Hercule Poirot ?? surpreendido por um telegrama solicitando seu retorno a Londres. Ent??o, o famoso detetive belga embarca no Expresso do Oriente, que est?? inesperadamente cheio para aquela ??poca do ano. Pouco tempo ap??s a meia-noite, o excesso de neve nos trilhos obriga o trem a parar. Na manh?? seguinte, o corpo de um dos passageiros ?? encontrado, golpeado por m??ltiplas facadas. Com os passageiros isolados por conta da neve, e tendo um assassino entre eles, a ??nica solu????o ?? que Poirot inicie uma investiga????o para descobrir quem ?? o criminoso ??? antes que se fa??a mais uma v??tima.	1
11	A ??ltima Festa	https://m.media-amazon.com/images/I/71gayVVXUpL.jpg	Lucy Foley 	5	Programado para acontecer em um cen??rio id??lico, o r??veillon que Miranda, Katie e os outros amigos que conheceram na faculdade passar??o juntos este ano promete refei????es deliciosas regadas a champanhe, m??sica, jogos e conversas descontra??das. No entanto, as tens??es come??am j?? na viagem de trem ??? o grupo n??o tem mais nada em comum al??m de um passado de conviv??ncia, feridas jamais cicatrizadas e segredos potencialmente destrutivos.E ent??o, em meio ?? grande festa da ??ltima noite do ano, o fio que os mant??m unidos enfim arrebenta. No dia seguinte, algu??m est?? morto e uma forte nevasca impede a vinda do resgate. Ningu??m pode entrar. Ningu??m pode sair. Nem o assassino. Contada em flashbacks a partir das perspectivas dos v??rios personagens, a hist??ria deste malfadado encontro ?? um daqueles mist??rios de assassinato cheio de tens??o e de ritmo perfeito. Com uma trama assustadora e brilhantemente constru??da, A ??ltima festa planta no leitor a semente da d??vida: ser?? que velhos amigos s??o sempre os melhores amigos?	1
12	Admir??vel mundo novo	https://m.media-amazon.com/images/I/61hOp6UFvCL.jpg	 Aldous Leonard Huxley	6	Em uma sociedade organizada segundo princ??pios estritamente cient??ficos, Bernard Marx, um psic??logo, sente-se inadequado quando se compara aos outros seres de sua casta. Ao descobrir uma ???reserva hist??rica??? que preserva costumes de uma sociedade anterior ??? muito semelhante ?? do leitor ??? Bernard vai perceber as diferen??as entre esta civiliza????o e a sua ??? e a partir de um sentimento de inconformismo ele desafiar?? o mundo. A hist??ria de Bernard se passa em um ambiente em que a literatura, a m??sica e o cinema s?? t??m a fun????o de solidificar a aliena????o; um universo que louva o avan??o da t??cnica, a produ????o em s??rie, a uniformidade contra a diversidade.Muitas das previs??es de Huxley vieram a ser confirmadas anos mais tarde, como a tecnologia reprodutiva, as supostas t??cnicas de aprendizado durante o sono e a manipula????o pelo condicionamento psicol??gico. Ao lado de obras como Fahrenheit 451, de Ray Bradbury, e 1984, de George Orwell, que criticavam os governos totalit??rios de esquerda e de direita, Admir??vel Mundo Novo figura na lista dos livros mais relevantes e influentes de todos os tempos. O cl??ssico de Huxley n??o ?? somente um h??bil exerc??cio de futurismo ou de fic????o cient??fica, mas um olhar acerca do autoritarismo no mundo desde que o livro foi publicado, em 1932, e que continua a nos assombrar.	1
13	O conto da aia	https://m.media-amazon.com/images/I/91AHNAr638L.jpg	 Margaret Atwood	6	O romance dist??pico O conto da aia, de Margaret Atwood, se passa num futuro muito pr??ximo e tem como cen??rio uma rep??blica onde n??o existem mais jornais, revistas, livros nem filmes. As universidades foram extintas. Tamb??m j?? n??o h?? advogados, porque ningu??m tem direito a defesa. Os cidad??os considerados criminosos s??o fuzilados e pendurados mortos no Muro, em pra??a p??blica, para servir de exemplo enquanto seus corpos apodrecem ?? vista de todos. Para merecer esse destino, n??o ?? preciso fazer muita coisa ??? basta, por exemplo, cantar qualquer can????o que contenha palavras proibidas pelo regime, como ???liberdade???. Nesse Estado teocr??tico e totalit??rio, as mulheres s??o as v??timas preferenciais, anuladas por uma opress??o sem precedentes. O nome dessa rep??blica ?? Gilead, mas j?? foi Estados Unidos da Am??rica. Uma das obras mais importantes da premiada escritora canadense, conhecida por seu ativismo pol??tico, ambiental e em prol das causas femininas, O conto da aia foi escrito em 1985 e inspirou a s??rie hom??nima (The Handmaid???s Tale, no original), produzida pelo canal de streaming Hulu em 2017. As mulheres de Gilead n??o t??m direitos. Elas s??o divididas em categorias, cada qual com uma fun????o muito espec??fica no Estado. A Offred coube a categoria de aia, o que significa pertencer ao governo e existir unicamente para procriar, depois que uma cat??strofe nuclear tornou est??ril um grande n??mero de pessoas. E sem d??vida, ainda que vigiada dia e noite e ceifada em seus direitos mais b??sicos, o destino de uma aia ainda ?? melhor que o das n??o-mulheres, como s??o chamadas aquelas que n??o podem ter filhos, as homossexuais, vi??vas e feministas, condenadas a trabalhos for??ados nas col??nias, lugares onde o n??vel de radia????o ?? mort??fero. Com esta hist??ria assustadora, Margaret Atwood leva o leitor a refletir sobre liberdade, direitos civis, poder, a fragilidade do mundo tal qual o conhecemos, o futuro e, principalmente, o presente. Vencedor do Arthur C. Clarke Award.	1
14	O Homem de Giz	https://m.media-amazon.com/images/I/41LuOehnKtL.jpg	O Homem de Giz	7	Em 1986, Eddie e os amigos passam a maior parte dos dias andando de bicicleta pela pacata vizinhan??a em busca de aventuras. Os desenhos a giz s??o seu c??digo secreto: homenzinhos rabiscados no asfalto; mensagens que s?? eles entendem. Mas um desenho misterioso leva o grupo de crian??as at?? um corpo desmembrado e espalhado em um bosque. Depois disso, nada mais ?? como antes. Em 2016, Eddie se esfor??a para superar o passado, at?? que um dia ele e os amigos de inf??ncia recebem um mesmo aviso: o desenho de um homem de giz enforcado. Quando um dos amigos aparece morto, Eddie tem certeza de que precisa descobrir o que de fato aconteceu trinta anos atr??s. Alternando habilidosamente entre presente e passado, O Homem de Giz traz o melhor do suspense: personagens maravilhosamente constru??dos, mist??rios de prender o f??lego e reviravoltas que v??o impressionar at?? os leitores mais escaldados.	1
15	N??o conte a ningu??m	https://m.media-amazon.com/images/I/814ppbYqHqL.jpg	N??o conte a ningu??m	7	O Dr. David Beck e sua esposa, Elizabeth, se conheceram ainda crian??as, e desde o in??cio souberam que seu amor seria eterno. Todos os anos, no dia do anivers??rio do primeiro beijo, eles voltavam ao lago Charmaine para gravar mais uma barra no tronco da ??rvore que tinha suas iniciais inscritas dentro de um cora????o. Mas, no 13o. ano, ap??s terem cumprido seu ritual rom??ntico, David e Elizabeth foram brutalmente atacados. Ele foi deixado inconsciente no lago para se afogar e ela, depois de ser sequestrada e ter o rosto marcado com ferro em brasa, foi encontrada morta - supostamente v??tima de um serial killer. Oito anos ap??s a trag??dia, David ainda tenta reconstruir sua vida quando recebe um misterioso e-mail com as iniciais dele e da esposa seguidas de 21 barras, uma pergunta que s?? os dois saberiam responder e um pedido: N??o conte a ningu??m. Ao acessar o link enviado na mensagem - na hora marcada, 'a hora do beijo' -, David ?? redirecionado para um site onde surge a imagem de uma c??mera de rua. Ap??s alguns minutos sem que nada aconte??a, Elizabeth aparece na tela e sussurra: 'Sinto muito.' Isso acende uma centelha de esperan??a: de alguma forma e em algum lugar, Elizabeth poderia estar viva. Em sua desesperada busca da verdade, David acaba sendo perseguido por inimigos poderosos. O FBI, ap??s ter encontrado dois corpos no local do suposto assassinato de Elizabeth, passa a v??-lo como o principal suspeito da morte da esposa. Al??m disso, um milion??rio e antigo amigo da fam??lia Beck, sem nenhum interesse em ver a verdade revelada, contrata um assassino de aluguel para matar David. Em N??o conte a ningu??m, Harlan Coben constr??i uma hist??ria envolvente e eletrizante sobre perda e reden????o, segredos inconfess??veis e um amor capaz de resisitir a tudo.	1
16	Uma Breve Hist??ria do Tempo	https://m.media-amazon.com/images/I/61AaXcdHXKS.jpg	Stephen Hawking 	8	Uma das mentes mais geniais do mundo moderno, Stephen Hawking guia o leitor na busca por respostas a algumas das maiores d??vidas da humanidade: Qual a origem do universo? Ele ?? infinito? E o tempo? Sempre existiu, ou houve um come??o e haver?? um fim? Existem outras dimens??es al??m das tr??s espaciais? E o que vai acontecer quando tudo terminar? Com ilustra????es criativas e texto l??cido e bem-humorado, Hawking desvenda desde os mist??rios da f??sica de part??culas at?? a din??mica que movimenta centenas de milh??es de gal??xias por todo o universo. Para o iniciado, Uma breve hist??ria do tempo ?? uma bela representa????o de conceitos complexos; para o leigo, ?? um vislumbre dos segredos mais profundos da cria????o.	1
17	Sapiens: uma breve hist??ria da humanidade	https://m.media-amazon.com/images/I/71-ghLb8qML.jpg	Yuval Noah Harari	8	O que possibilitou ao Homo sapiens subjugar as demais esp??cies? O que nos torna capazes das mais belas obras de arte, dos avan??os cient??ficos mais impens??veis e das mais horripilantes guerras? Nossa capacidade imaginativa. Somos a ??nica esp??cie que acredita em coisas que n??o existem na natureza, como Estados, dinheiro e direitos humanos. Partindo dessa ideia, Yuval Noah Harari, doutor em hist??ria pela Universidade de Oxford, aborda em Sapiens a hist??ria da humanidade sob uma perspectiva inovadora. Explica que o capitalismo ?? a mais bem-sucedida religi??o, que o imperialismo ?? o sistema pol??tico mais lucrativo, que n??s, humanos modernos, embora sejamos muito mais poderosos que nossos ancestrais, provavelmente n??o somos mais felizes. Um relato eletrizante sobre a aventura de nossa extraordin??ria esp??cie ? de primatas insignificantes a senhores do mundo.	1
18	O Livro dos Esp??ritos	https://m.media-amazon.com/images/I/81uMDGIYMXL.jpg	 Allan Kardec	9	Esta singela obra, a primeira do Esp??rito Humberto de Campos psicografada por Chico Xavier, une uma s??rie de esclarecedoras cr??nicas, em que o autor apresenta temas diversos, tais como longevidade, paz, verdade e justi??a, al??m de retratar personalidades como S??crates, Charles Richet, os ap??stolos Pedro e Judas Iscariotes, entre outros. Em mais de um texto, o autor cita, por meio da ??tica do mundo espiritual, a import??ncia da Casa de Ismael (Federa????o Esp??rita Brasileira), no cen??rio esp??rita nacional, e da Doutrina Esp??rita como fonte de consolo e respostas para as afli????es da humanidade.	1
19	As 7 leis espirituais do sucesso	https://m.media-amazon.com/images/I/81G7GJsELbL.jpg	 Deepak Chopra	9	Em As sete leis espirituais do sucesso, Deepak Chopra rompe com a ideia mais tradicional de sucesso. Transformador, o novo conceito transcende as barreiras daquilo que se restringe simplesmente ?? realiza????o material, elevando sua defini????o a um n??vel muito mais pleno, estreitamente ligada ?? compreens??o das necessidades da alma humana e daquilo que ?? capaz de realiz??-la. ?? exatamente por isso que este livro faz tanto sucesso no mundo todo, j?? que se manteve entre os mais vendidos nos Estados Unidos por mais de 60 semanas seguidas. Em sua primeira edi????o, em 1994, Deepak Chopra abordou um tema que se mostra cada vez mais relevante: a realiza????o pessoal. Identificou de forma pr??tica e acess??vel os sete princ??pios que contribuem para que as pessoas abandonem a concep????o equivocada de sucesso e o atinjam em sua plenitude. Segundo o autor, ningu??m jamais se sentir?? completamente realizado enquanto submeter a sua felicidade ??s conquistas materiais. As sete leis espirituais do sucesso apresenta uma vis??o mais clara e abrangente dos resultados positivos alcan??ados quando sugere que devemos nos manter atentos ??s leis simples e poderosas que regem a harmonia do universo.	1
23	Anjos e Dem??nios	https://m.media-amazon.com/images/I/41zzqil4SEL.jpg	Dan Brown	7	aaaaaaaaaaaaaaaaaaaaaaaaaa	3
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, image, "nextReading", "favoriteBook", "favoriteAuthor", "readingGoals") FROM stdin;
3	Caio	caiovitor@hotmail.com	$2b$10$pg2.c0M7T3.7GezlXTe1Y.qYy/wCyEjk30JeRbKeGUciuNoWOljCq	https://img.elo7.com.br/users/picture/7EC5DD.jpg?85888342	\N	Uma breve hist??ria do tempo	Stephen Hawking	3
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

