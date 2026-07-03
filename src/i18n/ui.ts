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
  about: { heading: string; kicker: string; body: string[] };
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

// Page B (Work, Teach & Live) is English-only by spec — shared by both locales.
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
      body: [
        'OuiGoal（邦加國際文教發展股份有限公司）是一個國際教育一站式整合平台，串聯跨國留遊學顧問、外籍師資招募管理，以及公私立學校與機構的合規對接。',
        '我們相信教育不該被框架限制 — 每一位學生、每一位教師、每一所學校，都值得一個精準的配對。從短期興趣探索到長期升學規劃，從外師來台的第一份文件到落地生活的每個細節，OuiGoal 以專業與嚴謹，讓跨越國界這件事變得安心而簡單。',
      ],
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
      work: workPage,
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
      body: [
        'OuiGoal Consultancy Co. Ltd. is a one-stop international education platform connecting study-abroad consulting, international educator recruitment and management, and compliant partnerships with public and private schools and institutions.',
        'We believe education should never be confined by convention — every student, every teacher, and every school deserves a precise match. From short-term exploration to long-term academic planning, from a teacher’s first visa document to the details of settling into life in Taiwan, OuiGoal makes crossing borders simple and secure.',
      ],
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
