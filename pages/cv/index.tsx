import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";

import { HiArrowSmLeft } from "react-icons/hi";

import Timeline from "../../components/timeline/Timeline";

import utilStyles from "../../styles/utils.module.css";
import styles from "./Curriculum.module.css";

const experience = [
  {
    image: "wit.jpg",
    title: "Estagiário de Desenvolvimento Web",
    subtitle: "Witseed - Rio de Janeiro",
    date: "2021 - hoje",
    items: [
      "Desenvolvedor Full-Stack usando Ruby on Rails e NextJS para alavancar a plataforma de educação corporativa Witseed",
      "Desenvolvi features como uma plataforma de administração de conteúdos e usuários, gamificação da aprendizagem e integração SSO",
    ],
  },
  {
    image: "nautica.png",
    title: "Equipe de Competição",
    subtitle: "Minerva Náutica, UFRJ - Rio de Janeiro",
    date: "2020 - 2021",
    items: [
      "Membro da equipe de competição de nautimodelismo, atuando na área de eletrônica",
      "Desenvolvi um simulador da competição para treinos de controle do barco usando a engine Unity",
    ],
  },
  {
    image: "junior.png",
    title: "Presidente de Miniempresa",
    subtitle: "Junior Achievement Brasil - Rio de Janeiro",
    date: "2016",
    items: [
      "Presidente da miniempresa Emplac S.A/E. do Programa Miniempresa da Junior Achievement",
      "A miniempresa foi ganhadora dos prêmios de Finanças (3º lugar), Produção (2º lugar) e Relatório Final (1º lugar)",
      "Ganhei o prêmio Shell Melhor Achiever, que me concedeu uma viagem ao fórum internacional de empreendedorismo Findinexa, no Piauí",
    ],
  },
];

const academic = [
  {
    title: "UFRJ - Universidade Federal do Rio de Janeiro",
    subtitle: "Bacharelado em Engenharia Eletrônica e de Computação",
    date: "2018-2024 (previsão)",
  },
  {
    title: "Colégio Anglo-Americano",
    subtitle: "Ensino Médio",
    date: "2015-2017",
  },
];

const prizes = [
  {
    title: "1º Lugar no Hackathon Hacking Help",
    subtitle: "Hacking Rio ",
    date: "2020",
    items: [
      "Vencedor da vertical “Assistência Social” com o aplicativo Neibor da Equipe Minerva Hackers",
    ],
  },
  {
    title: "Prêmio Shell Melhor Achiever 1º Lugar",
    subtitle: "Junior Achievement Brasil",
    date: "2016",
    items: [
      "Destaque no programa Miniempresa da Junior Achievement, no qual participei como presidente da minha miniempresa. O prêmio me concedeu uma viagem ao fórum internacional de empreendedorismo Findinexa, no Piauí",
    ],
  },
];

export default function Curriculum() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Currículo</title>
      </Head>
      <h2 className={utilStyles.headingXl}>Currículo 📝</h2>
      <br />
      <p>
        Sou um programador com espírito empreendedor, em busca de um desafio
        profissional para o crescimento na área de tecnologia, desenvolvimento
        de software e negócios. Atualmente estou trabalhando com desenvolvimento
        web, mas também sou interessado em mobile e em desenvolvimento de games.
        Criatividade, liderança e dedicação são o que me definem.
      </p>
      <br />
      <Timeline title="Experiência Profissional" items={experience}></Timeline>

      <Timeline title="Formação Acadêmica 🎓" items={academic}></Timeline>

      <Timeline title="Destaques" items={prizes}></Timeline>

      <h3 className={styles.title}>Competências</h3>
      <div className={styles.separator} />
      <ul>
        <li className={styles.list}>
          <b>Linguagens de programação:</b> JavaScript, Ruby, HTML, CSS, Python,
          C, C#, C++, Java{" "}
        </li>
        <li className={styles.list}>
          <b>Frameworks:</b> ReactJS, NextJS, Ruby on Rails
        </li>
        <li className={styles.list}>
          <b>Bancos de Dados:</b> SQL (PostgreSQL, MySQL)
        </li>
        <li className={styles.list}>
          <b>Utilidades:</b> Git, GitHub
        </li>
        <li className={styles.list}>
          <b>Outros:</b> Unity
        </li>
      </ul>
      <br />
      <Link href={"/"}>
        <div className={utilStyles.back}>
          <HiArrowSmLeft />
          <p className={utilStyles.link}>Voltar para página Inicial</p>
        </div>
      </Link>
    </Layout>
  );
}
