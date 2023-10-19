import { Component, Input, SimpleChanges } from '@angular/core';
import { MainPanelContent } from '../classes/MainPanelContent';
import { Subscription } from 'rxjs';
import { Language } from '../classes/Language';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent {
  @Input() isA4!: boolean;
  @Input() isEng!: boolean;
  langSubscription = new Subscription();
  aContent!: MainPanelContent;
  eng: Language = {
    itSkills: "IT Skills",
    experience: "Work Experience",
    educations: "Education",
    strengths: "Strengths",
    projects: "Projects",
    langs: "Spoken Languages",
    hobbies: "Hobbies"
  }
  hun: Language = {
    itSkills: "IT készségek",
    experience: "Munkatapasztalat",
    educations: "Tanulmányok",
    strengths: "Erősségek",
    projects: "Projektek",
    langs: "Nyelvek",
    hobbies: "Hobbik"
  }
  aLanguage: Language = this.eng;
  engContent = new MainPanelContent(
    {
      paragraphOne: "IT has always been a passion of mine. My dream is to work as a developer, and at the same time, the entire IT world inspires and attracts me. I have been studying web development for two years. I acquired my knowledge in a self-taught manner, mostly in English. Then, I organized, developed, and supplemented this knowledge through the Career Starter Kit course at Codecool.",
      paragraphTwo: "I am well-versed in the Angular framework, JavaScript, and TypeScript languages. I also have significant knowledge of Node.js, Java and Spring/Spring Boot. I know the principles of object-oriented programming, clean code and SOLID software development. My project work has required me to learn the basics of software testing. I have been working with NoSQL databases, but I also have a basic knowledge of SQL systems."
    },
    [
      {
        firstLine: "(2017-2021)",
        secondLine: "Various jobs (often parallel to each other)",
        desc: "During this period, I undertook various jobs, including assisting to an electrical safety specialist, interior design projects, data processing tasks and smaller IT projects."
      },
      {
        firstLine: "Contributor (2016)",
        secondLine: "MOL Hungary - Record Office",
        desc: "Digitization of drilling documents."
      },
      {
        firstLine: "Intern (2016, 2017)",
        secondLine: "MOL Hungary - HSE",
        desc: "Integration, formatting update, review, and preparation for release of the same subject area HSE regulations."
      }
    ],
    [
      {
        firstLine: "Career Starter Kit course (2022-2023)",
        secondLine: "Codecool",
        desc: ""
      },
      {
        firstLine: "Environmental Engineering Bsc (2013-2017)",
        secondLine: "Budapest University of Technology and Economics",
        desc: ""
      }
    ],
    "Among my strengths, I would highlight my perseverance and creativity. I always approach my tasks with enthusiasm and strive to complete them to the best of my ability. I enjoy creating new and useful things and thinking 'out of the box'. Whether working in a team or independently, I am comfortable and effective in both scenarios.",
    {
      beforeTheATag:"I have many great projects. Please check them out at ",
      src: "https://davi-hub.github.io/pd/projects",
      afterTheATag: "! Every project has a description, link to the deployed web app and link to its Github repository."
    },
    [
      { lang: "English", level: "Intermediate" },
      { lang: "German", level: "Basic" },
      { lang: "Hungarian", level: "Native" }
    ],
    [
      { name: "NFL", img: "assets/hobbies/football.png" },
      { name: "Hiking", img: "assets/hobbies/hiking.png" },
      { name: "DIY", img: "assets/hobbies/diy.png" },
      { name: "R.Pi, Arduino", img: "assets/hobbies/rpi_ardu.png" },
      { name: "Cycling", img: "assets/hobbies/cycling.png" }
    ]
  );

  hunContent: MainPanelContent = new MainPanelContent(
    {
      paragraphOne: "Az IT mindig is a szenvedélyem volt. Az az álmom, hogy fejlesztői pozícióban dolgozzak, ugyanakkor az egész IT-világ inspirál és vonz. Két éve tanulok webfejlesztést. Tudásomat autodidakta módon sajátítottam el, többnyire angol nyelven, majd a Codecool Career Starter Kit tanfolyamán rendszereztem, fejlesztettem és egészítettem ki.",
      paragraphTwo: "Jól ismerem az Angular keretrendszert, a JavaScript és TypeScript nyelveket, továbbá jelentős ismeretekkel rendelkezem a Node.js, Java és Spring/Spring Boot terén is. Ismerem az objektum-orientált programozás, a tiszta kód és a SOLID szoftverfejlesztés alapelveit. Projektmunkáim megkövetelték, hogy elsajátítsam a szoftvertesztelés alapjait. Idáig elsősorban NoSQL adatbázisokkal dolgoztam, de rendelkezem ismeretekkel SQL rendszerek terén is."
    },
    [
      {
        firstLine: "(2017-2021)",
        secondLine: "Alkalmi vagy időszakos munkák, munkahelyek",
        desc: "Ebben az időszakban különféle munkákat vállaltam, többek között elektromos biztonsági szakember asszisztenseként, részt vettem belsőépítészeti projektekben, vállaltam adatfeldolgozási feladatokat és kisebb informatikai, fejlesztői munkákat."
      },
      {
        firstLine: "Külső munkatárs (2016)",
        secondLine: "MOL Magyarország - Irattár",
        desc: "Fúrási dokumentumok digitalizálása."
      },
      {
        firstLine: "Gyakornok (2016, 2017)",
        secondLine: "MOL Magyarország - EBK",
        desc: "Részt vettem az azonos témája EBK szabályzatok egybeolvasztásában, formai frissítésében, ellenőrzésében, majd kiadásra való előkészítésében."
      }
    ],
    [
      {
        firstLine: "Career Starter Kit course (2022-2023)",
        secondLine: "Codecool",
        desc: ""
      },
      {
        firstLine: "Környezetmérnöki szak Bsc (2013-2017)",
        secondLine: "Budapesti Műszaki és Gazdaságtudományi Egyetem",
        desc: ""
      }
    ],
    "Erősségeim közül kiemelném a kitartásomat, kreativitásomat. Feladataimat mindig lelkesen és a legjobb tudásom szerint igyekszem elvégezni. Erős problémamegoldó képességgel rendelkezem, és figyelek a részletekre. Szeretek új dolgokat létrehozni és a 'dobozon kívül' gondolkodni. Kedvelem a csapatmunkát, ugyanakkor törekszem az önálló munkavégzésre.",
    {
      beforeTheATag:"Több remek projektem van. Kérlek, tekintsd meg ezeket a ",
      src: "https://davi-hub.github.io/pd/projects",
      afterTheATag: " címen! Minden projekthez tartozik egy rövid ismertető, egy link a működő web app-hoz és egy link a Github repository-hoz." 
    },
    [
      { lang: "Angol", level: "Középfok" },
      { lang: "Német", level: "Alapfok" },
      { lang: "Magyar", level: "Anyanyelv" }
    ],
    [
      { name: "NFL", img: "assets/hobbies/football.png" },
      { name: "Túrázás", img: "assets/hobbies/hiking.png" },
      { name: "Barkácsolás", img: "assets/hobbies/diy.png" },
      { name: "R.Pi, Arduino", img: "assets/hobbies/rpi_ardu.png" },
      { name: "Kerékpározás", img: "assets/hobbies/cycling.png" }
    ]
  );

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isEng']) {
      this.setLanguage(this.isEng);
    }
  }

  setLanguage(isEng: boolean) {
    if (isEng) {
      this.aContent = this.engContent;
      this.aLanguage = this.eng;
    } else {
      this.aContent = this.hunContent;
      this.aLanguage = this.hun;
    }
  }
}
