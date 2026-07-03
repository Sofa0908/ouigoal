export type Locale = 'zh' | 'en';

export const SITE = {
  companyZh: '邦加國際文教發展股份有限公司',
  companyEn: 'OuiGoal Consultancy Co. Ltd.',
  brand: 'OuiGoal',
  // TODO: confirm official email with Maggie before launch
  email: 'hello@ouigoal.com',
};

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface ServicePage {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  intro: string;
  items: ServiceItem[];
}

export interface Dict {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { home: string; about: string; services: string; contact: string };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    cta: string;
  };
  about: {
    heading: string;
    kicker: string;
    vision: string;
    pillars: { title: string; subtitle: string; desc: string }[];
    story: { kicker: string; heading: string; body: string[] };
  };
  services: {
    heading: string;
    kicker: string;
    sub: string;
    more: string;
  };
  contact: {
    heading: string;
    kicker: string;
    body: string;
    emailLabel: string;
  };
  footer: { rights: string };
  pages: Record<'explore' | 'work' | 'partner', ServicePage>;
}

const workPage: ServicePage = {
  slug: 'work-teach-live',
  name: 'Work, Teach & Live',
  subtitle: 'For International Educators',
  tagline: 'Your career in Taiwan, fully supported.',
  intro:
    'From your first contract to feeling at home, OuiGoal provides end-to-end support for international educators building a life in Taiwan.',
  items: [
    {
      title: 'Teaching Careers in Taiwan',
      desc: 'Placements with trusted public and private schools, matched to your qualifications, teaching style, and career goals.',
    },
    {
      title: 'Visa & ARC Services',
      desc: 'Full handling of work permits, visas, and Alien Resident Certificates — compliant, transparent, and stress-free.',
    },
    {
      title: 'Mandarin Learning',
      desc: 'Curated Chinese language courses and resources so you can thrive in the classroom and beyond.',
    },
    {
      title: 'Life & Settling-in Support',
      desc: 'Housing, banking, healthcare, and the everyday details — we help you land softly and live well.',
    },
  ],
};

export const dict: Record<Locale, Dict> = {
  zh: {
    htmlLang: 'zh-Hant-TW',
    meta: {
      title: 'OuiGoal 邦加國際文教 — 國際教育一站式整合平台',
      description:
        '跨國留遊學顧問、外籍師資招募管理、公私立學校與機構合規對接 — OuiGoal 邦加國際文教發展股份有限公司。',
    },
    nav: { home: '首頁', about: '關於我們', services: '服務項目', contact: '聯絡我們' },
    hero: {
      eyebrow: 'OuiGoal Consultancy',
      headline: "Your future is not a guess.\nIt's a match.",
      sub: '跨國留遊學顧問 × 外籍師資管理 × 學校機構合規對接 — 打破傳統框架的國際教育一站式整合平台。',
      cta: '立即諮詢',
    },
    about: {
      heading: '關於我們',
      kicker: 'About OuiGoal',
      vision:
        '邦加國際文教發展股份有限公司（OuiGoal Consultancy Co. Ltd.）是一家立足台灣、對接全球的頂尖教育諮詢與師資整合機構。我們深信每位學員、教師與機構皆具備獨一無二的潛力，因此不套用傳統公式，致力於為三大核心領域提供最專業的制度支持與客製化解決方案。',
      pillars: [
        {
          title: '留遊學規劃',
          subtitle: 'Global Education',
          desc: '為從幼兒園到高中、有志於海外深造的學員與家長，擘劃最具前瞻性的國際升學路徑。',
        },
        {
          title: '外師職涯引領',
          subtitle: 'Educator Careers',
          desc: '為優秀的海外外籍教師提供全方位的來台執教機會、法規簽證（ARC）代辦與完整的落地安家照顧。',
        },
        {
          title: '機構與標案合作',
          subtitle: 'Institutional Solutions',
          desc: '為公私立學校、機構與政府專案提供高效、合規的國際師資招募與優質的雙語教學支持方案。',
        },
      ],
      story: {
        kicker: 'The OuiGoal Story',
        heading: '品牌故事',
        body: [
          '品牌名稱「OuiGoal」融合了法文「Oui」（意為 Yes），象徵對傳統教育框架的翻轉與突圍，呼應我們的核心理念——「打破框架，翻轉未來（Learn beyond the box）」。我們鼓勵跳脫僵化的思維窠臼，更想向所有與我們合作的家長、外師與機構承諾：當您準備好的那一刻，OuiGoal 已經為您打通了與世界接軌的每一步路。',
          '「OuiGoal」亦蘊含「We Go」的深刻寓意——這是一場攜手並進的旅程。不論是赴外深造、來台教學，或是機構的國際化轉型，在追求卓越的路上，邦加都將與您一路同行。',
        ],
      },
    },
    services: {
      heading: '服務項目',
      kicker: 'Our Services',
      sub: '三大專區，對應你所在的位置與想去的方向。',
      more: '進入專區',
    },
    contact: {
      heading: '聯絡我們',
      kicker: 'Contact Us',
      body: '無論你是學生與家長、外籍教師，或是學校與機構夥伴，歡迎來信，我們將盡快與你聯繫。',
      emailLabel: '官方信箱',
    },
    footer: { rights: '版權所有' },
    pages: {
      explore: {
        slug: 'explore-study',
        name: '留遊學專區',
        subtitle: 'Explore & Study',
        tagline: 'Learn beyond the box — 打破常規的國際學習體驗。',
        intro:
          '從一次短期探索到一份完整的升學藍圖，OuiGoal 陪你把「想出去看看」變成一條清晰可行的路。',
        items: [
          {
            title: '短期興趣探索',
            desc: '主題式短期課程與遊學體驗，從興趣出發，探索世界、也探索自己的可能性。',
          },
          {
            title: '留遊學規劃',
            desc: '依據個人特質與目標量身打造留學路徑，精準配對最適合的學校與環境 — It’s a match!',
          },
          {
            title: '升學顧問',
            desc: '從選校策略、申請文件到面試準備，一對一顧問全程陪伴，穩健邁向理想學府。',
          },
        ],
      },
      work: {
        slug: 'work-teach-live',
        name: '外國人專區',
        subtitle: 'Work, Teach & Live',
        tagline: '在台灣的職涯與生活，一路安心。',
        intro:
          '從第一份合約到真正安身，OuiGoal 為來台發展的外籍教師提供一條龍的職涯與生活支持。',
        items: [
          {
            title: '外師來台職涯',
            desc: '媒合值得信賴的公私立學校教職機會，依據資歷、教學風格與職涯目標精準配對。',
          },
          {
            title: '簽證與 ARC 辦理',
            desc: '工作許可、簽證與居留證（ARC）全程合規代辦，流程透明、省心省力。',
          },
          {
            title: '中文學習',
            desc: '精選中文課程與學習資源，讓外師在課堂內外都能如魚得水。',
          },
          {
            title: '生活安家照顧',
            desc: '租屋、銀行開戶、就醫與日常大小事 — 我們陪你安穩落地、好好生活。',
          },
        ],
      },
      partner: {
        slug: 'partner-solutions',
        name: '學校/私立機構合作專區',
        subtitle: 'Partner Solutions',
        tagline: '合規、專業、可信賴的國際人才對接夥伴。',
        intro:
          '面向公私立學校、教育機構與企業，OuiGoal 提供符合法規的外籍人才招募與管理方案，架構嚴謹、流程透明，值得官方信賴。',
        items: [
          {
            title: '公私立學校外師招募',
            desc: '合規的外籍教師招募、資格審核與到任管理，完整支援學校的雙語與國際化教學需求。',
          },
          {
            title: '企業外籍人才支持',
            desc: '協助企業引進與管理外籍專業人才，涵蓋工作許可合規代辦與在台生活支持。',
          },
        ],
      },
    },
  },
  en: {
    htmlLang: 'en',
    meta: {
      title: 'OuiGoal Consultancy — One-stop International Education Platform',
      description:
        'Study-abroad consulting, international educator recruitment and management, and compliant school & institution partnerships — OuiGoal Consultancy Co. Ltd.',
    },
    nav: { home: 'Home', about: 'About Us', services: 'Services', contact: 'Contact Us' },
    hero: {
      eyebrow: 'OuiGoal Consultancy',
      headline: "Your future is not a guess.\nIt's a match.",
      sub: 'Study-abroad consulting × international educator management × compliant school partnerships — a one-stop international education platform that learns beyond the box.',
      cta: 'Get in Touch',
    },
    about: {
      heading: 'About Us',
      kicker: 'About OuiGoal',
      vision:
        'OuiGoal Consultancy Co. Ltd. is a premium educational consulting and teacher integration agency, rooted in Taiwan and connected to the world. We believe in the uniqueness and developmental potential of every student, educator, and institution — so instead of applying a standard formula, we chart customized paths through three core pillars.',
      pillars: [
        {
          title: 'Global Education',
          subtitle: '留遊學規劃',
          desc: 'Professional consulting and bespoke pathways for students from preschool to high school aspiring to study abroad.',
        },
        {
          title: 'Educator Careers',
          subtitle: '外師職涯引領',
          desc: 'Comprehensive career opportunities, visa (ARC) assistance, and complete relocation support for foreign teachers in Taiwan.',
        },
        {
          title: 'Institutional Solutions',
          subtitle: '機構與標案合作',
          desc: 'Compliant, high-quality foreign teacher recruitment and institutional solutions for public and private schools and government projects.',
        },
      ],
      story: {
        kicker: 'The OuiGoal Story',
        heading: 'Our Story',
        body: [
          'The name “OuiGoal” incorporates “Oui” — “yes” in French — symbolizing a willingness to learn beyond the confines of traditional education. It resonates with our slogan, “Learn beyond the box”: a departure from fixed mindsets and conventional patterns of thinking. And to every parent, teacher, and partner institution, it is a promise — when you are ready, the future is ready too.',
          'Another layer of OuiGoal lies in its sound: “Oui” as we, “Goal” as go. Whether you are heading abroad to study, coming to Taiwan to teach, or taking your institution global — proceed without worries. We will be with you every step of the way.',
        ],
      },
    },
    services: {
      heading: 'Our Services',
      kicker: 'What We Do',
      sub: 'Three dedicated tracks — for where you are, and where you’re going.',
      more: 'Explore',
    },
    contact: {
      heading: 'Contact Us',
      kicker: 'Get in Touch',
      body: 'Whether you’re a student or parent, an international educator, or a school and institution partner — write to us and we’ll get back to you shortly.',
      emailLabel: 'Official Email',
    },
    footer: { rights: 'All rights reserved.' },
    pages: {
      explore: {
        slug: 'explore-study',
        name: 'Explore & Study',
        subtitle: '留遊學專區',
        tagline: 'Learn beyond the box.',
        intro:
          'From a first short-term adventure to a complete academic roadmap, OuiGoal turns “I want to see the world” into a clear, achievable path.',
        items: [
          {
            title: 'Short-term Exploration',
            desc: 'Theme-based short courses and study tours that start from curiosity — explore the world, and your own possibilities.',
          },
          {
            title: 'Study-Abroad Planning',
            desc: 'Tailored study pathways built on your strengths and goals, precisely matched to the right school and environment — it’s a match!',
          },
          {
            title: 'Academic Consulting',
            desc: 'From school selection and applications to interview preparation — one-on-one guidance all the way to your dream school.',
          },
        ],
      },
      work: workPage,
      partner: {
        slug: 'partner-solutions',
        name: 'Partner Solutions',
        subtitle: '學校/私立機構合作專區',
        tagline: 'A compliant, professional, and trusted partner for international talent.',
        intro:
          'For schools, educational institutions, and enterprises — OuiGoal delivers fully compliant recruitment and management of international talent, with rigorous structure and transparent process.',
        items: [
          {
            title: 'Teacher Recruitment for Schools',
            desc: 'Compliant recruitment, credential screening, and onboarding management of international teachers for public and private schools.',
          },
          {
            title: 'Corporate Talent Support',
            desc: 'Helping enterprises bring in and manage international professionals — from work-permit compliance to on-the-ground support.',
          },
        ],
      },
    },
  },
};

/** Base-aware, locale-aware URL builder. */
export function localeUrl(locale: Locale, path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const prefix = locale === 'en' ? '/en' : '';
  const clean = path === '/' ? '/' : path.replace(/\/+$/, '') + '/';
  return `${base}${prefix}${clean}`;
}
