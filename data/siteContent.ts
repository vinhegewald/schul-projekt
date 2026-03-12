import type { Locale } from '@/utils/localized';

type MenuItem = {
  id: string;
  label: string;
  href?: string;
  children?: MenuItem[];
};

type LegalSection = {
  heading?: string;
  paragraphs: string[];
};

type EventLocation = {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

type EventContent = {
  title: string;
  subtitle: string;
  contentHeader: string;
  description: string[];
  location: EventLocation;
  headerImageAlt: string;
};

type SiteContent = {
  sidebar: {
    toggleMenuAria: string;
    logoAlt: string;
    toggleLanguageAria: string;
    menuItems: MenuItem[];
  };
  footer: {
    schoolCompany: string;
    imprint: string;
    privacy: string;
  };
  home: {
    heroCta: string;
    heroSubtitle: string;
    aboutTitle: string;
    aboutParagraphs: string[];
  };
  products: {
    title: string;
    searchPlaceholder: string;
    countSingular: string;
    countPlural: string;
    sortDefault: string;
    sortNameAsc: string;
    sortNameDesc: string;
    learnMore: string;
    categoryLabel: string;
    back: string;
    notFound: string;
    categoryNotFound: string;
  };
  archive: {
    title: string;
    learnMore: string;
    previewAlt: string;
    articleNotFound: string;
  };
  events: {
    loadingMap: string;
    locationTitle: string;
    openInGoogleMaps: string;
    summerSale: EventContent;
    wirtschaftsLiveMesse: EventContent;
  };
  legal: {
    impressum: {
      title: string;
      sections: LegalSection[];
    };
    datenschutz: {
      title: string;
      sections: LegalSection[];
    };
  };
  contactForm: {
    salutation: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    optional: string;
    comment: string;
    privacyPrefix: string;
    privacyLink: string;
    privacySuffix: string;
    submit: string;
    selectPlaceholder: string;
    logLabel: string;
    salutations: {
      ms: string;
      mr: string;
      none: string;
    };
    alerts: {
      required: string;
      invalidEmail: string;
      privacy: string;
      success: string;
      error: string;
    };
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  de: {
    sidebar: {
      toggleMenuAria: 'Menü umschalten',
      logoAlt: 'Logo',
      toggleLanguageAria: 'Sprache wechseln',
      menuItems: [
        { id: 'home', label: 'Home', href: '/' },
        { id: 'contact', label: 'Kontakt', href: '/forms/contactForm' },
        {
          id: 'products',
          label: 'Produkte',
          children: [
            { id: 'products-all', label: 'Alle Produkte', href: '/produkte/' },
            { id: 'products-games', label: 'Spiele', href: '/produkte/kategorie/spiele' },
            { id: 'products-decor', label: 'Deko', href: '/produkte/kategorie/deko' },
            { id: 'products-trophies', label: 'Pokale', href: '/produkte/kategorie/pokale' },
            { id: 'products-everyday', label: 'Alltagshelfer', href: '/produkte/kategorie/alltagshelfer' },
          ],
        },
        {
          id: 'events',
          label: 'Events',
          children: [
            { id: 'event-summer-sale', label: 'Summer Sale', href: '/events/summer-sale' },
            { id: 'event-wlm', label: 'Wirtschafts Live Messe', href: '/events/wirtschafts-live-messe' },
          ],
        },
        { id: 'archive', label: 'Archiv', href: '/archiv' },
      ],
    },
    footer: {
      schoolCompany: 'Schülerfirma der BBS1 Lüneburg',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    },
    home: {
      heroCta: 'Alle Produkte',
      heroSubtitle: 'Ein Schülerunternehmen der BBS1 Lüneburg',
      aboutTitle: 'Über uns',
      aboutParagraphs: [
        'Unsere Schülerfirma ist ein kreatives und innovatives Startup-Projekt der Schüler/-innen der HA25B der einjährigen Berufsfachschule Wirtschaft mit den Schwerpunkten Handel und IT an den Berufsbildenden Schulen I Lüneburg.',
        'Wir haben uns auf den Bereich 3D-Druck spezialisiert und setzen unsere Ideen mit viel Motivation und Teamgeist in die Tat um. In einem Design-Thinking-Prozess haben wir durch Interviews mit potenziellen Kunden herausgefunden, welche Produkte gefragt sind – diese entwickeln und produzieren wir nun.',
        'Außerdem arbeiten wir in einer Kooperation mit der gewerblichen BBS II: Dort gefertigte Holzprodukte vermarkten wir als angehende Handelsprofis.',
        'Als Schülerunternehmen setzen wir auf Teamarbeit, Kreativität und gegenseitige Unterstützung. Jede Idee zählt, jeder Beitrag ist wertvoll. Wir sind ein offenes Team, das sich stetig weiterentwickelt und innovative Lösungen für spannende Projekte schafft.',
        'Unser Ziel: Mit unseren Produkten einen echten Mehrwert für die Gemeinschaft zu bieten – und dabei Erfahrung für unsere berufliche Zukunft zu sammeln.',
        'Unsere Schülerfirma steht für Kreativität, Motivation und eine starke, hilfsbereite Zusammenarbeit – und wir freuen uns darauf, noch viele spannende Projekte zu realisieren!',
      ],
    },
    products: {
      title: 'Produkte',
      searchPlaceholder: 'Produkt suchen...',
      countSingular: 'Produkt',
      countPlural: 'Produkte',
      sortDefault: 'Sortierung',
      sortNameAsc: 'Alphabetisch (A-Z)',
      sortNameDesc: 'Alphabetisch (Z-A)',
      learnMore: 'Mehr erfahren...',
      categoryLabel: 'Kategorie',
      back: 'Zurück',
      notFound: 'Produkt nicht gefunden',
      categoryNotFound: 'Kategorie nicht gefunden',
    },
    archive: {
      title: 'Archiv',
      learnMore: 'Mehr erfahren..',
      previewAlt: 'Vorschau',
      articleNotFound: 'Artikel nicht gefunden',
    },
    events: {
      loadingMap: 'Karte wird geladen...',
      locationTitle: 'Veranstaltungsort',
      openInGoogleMaps: 'In Google Maps öffnen →',
      summerSale: {
        title: 'Summer Sale',
        subtitle: 'Juni 2026',
        contentHeader: 'Summer Sale:',
        headerImageAlt: 'Summer Sale Banner',
        description: [
          'Weitere Informationen zu unserem Summer Sale folgen in Kürze.',
        ],
        location: {
          name: 'BBS1 Lüneburg',
          address: 'Spillbrunnenweg 1, 21337 Lüneburg, Deutschland',
          coordinates: {
            lat: 53.2467,
            lng: 10.4108,
          },
        },
      },
      wirtschaftsLiveMesse: {
        title: 'Wirtschafts Live Messe',
        subtitle: 'Besuchen Sie uns auf der Messe am 18.03.2026',
        contentHeader: 'Über die Veranstaltung:',
        headerImageAlt: 'Wirtschafts Live Messe Banner',
        description: [
          'Die Wirtschaft-Live-Messe der Schülerunternehmen findet dieses Jahr in der BBS Walsrode statt. Dort stellen etwa 20 Schülerunternehmen aus ganz Niedersachsen aus und messen sich in den Wettbewerben „bester Messestand“, „bester Messebandbeitrag“, „bester Imagefilm“ und „beste Fotopräsentation der Geschäftsidee“.',
          'Die Messe bietet Jugendlichen die Möglichkeit, ihre Geschäftsideen und Produkte einer breiten Öffentlichkeit vorzustellen. Ziel der Veranstaltung ist es, unternehmerisches Denken und Handeln praxisnah zu fördern, wirtschaftliche Kompetenzen zu stärken und den Austausch zwischen Schüler/-innen, Schulen, Wirtschaft und Politik zu unterstützen.',
        ],
        location: {
          name: 'BBS Walsrode',
          address: 'Am bhf 80, 29664 Walsrode, Deutschland',
          coordinates: {
            lat: 52.8704,
            lng: 9.5987,
          },
        },
      },
    },
    legal: {
      impressum: {
        title: 'Impressum',
        sections: [
          {
            heading: 'Angaben gemäß § 5 TMG',
            paragraphs: [
              'Print 4 Future',
              'Schülerfirma der BBS1 Lüneburg',
              'Spillbrunnenweg 1',
              '21337 Lüneburg',
            ],
          },
          {
            heading: 'Kontakt',
            paragraphs: ['E-Mail: info@bbs1-lueneburg.de', 'Telefon: 0413186300'],
          },
        ],
      },
      datenschutz: {
        title: 'Datenschutzerklärung',
        sections: [
          {
            heading: '1. Datenschutz auf einen Blick',
            paragraphs: [
              'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
            ],
          },
          {
            heading: '2. Verantwortliche Stelle',
            paragraphs: [
              'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
              'Print 4 Future',
              'Schülerfirma der BBS1 Lüneburg',
              'Spillbrunnenweg 1',
              '21337 Lüneburg',
              'E-Mail: info@bbs1-lueneburg.de',
              'Telefon: 0413186300',
            ],
          },
          {
            heading: '3. Datenerfassung auf dieser Website',
            paragraphs: [
            "Für die Bearbeitung von Kontaktanfragen verarbeiten wir Ihre E-Mail-Adresse sowie Ihren Vor- und Nachnamen. Zur Übermittlung Ihrer Nachrichten nutzen wir den Dienst EmailJS, an den diese Daten weitergegeben werden. Wir setzen keine Cookies, Analyse-Tools oder Tracking-Dienste ein.",
      "Beim Besuch der Website werden automatisch technische Informationen durch Ihren Browser an unseren Server übermittelt. Diese Daten werden ausschließlich zur technischen Bereitstellung der Website verwendet und nicht gespeichert oder ausgewertet.",
      "Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:",
      "• Browsertyp und Browserversion",
      "• Verwendetes Betriebssystem",
      "• Referrer URL",
      "• Hostname des zugreifenden Rechners",
      "• Uhrzeit der Serveranfrage",
      "• IP-Adresse",
      "Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.",
    ],
          },
          {
            heading: '4. Kontaktformular',
            paragraphs: [
              'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.',
              'Rechtsgrundlage: Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit durch eine Nachricht an uns widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird.',
              'Speicherdauer: Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.',
              'Bereitstellung der Daten: Die Angabe Ihrer personenbezogenen Daten im Kontaktformular ist freiwillig. Ohne Ihre Daten können wir Ihre Anfrage jedoch nicht bearbeiten.',
            ],
          },
          {
            heading: '5. Server-Log-Dateien',
            paragraphs: [
              'Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:',
              '• Browsertyp und Browserversion',
              '• Verwendetes Betriebssystem',
              '• Referrer URL',
              '• Hostname des zugreifenden Rechners',
              '• Uhrzeit der Serveranfrage',
              '• IP-Adresse',
              'Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.',
            ],
          },
          {
            heading: '6. OpenStreetMap',
            paragraphs: [
              'Wir nutzen den Kartendienst OpenStreetMap (OSM). Anbieter ist die OpenStreetMap Foundation, St John\'s Innovation Centre, Cowley Road, Cambridge, CB4 0WS, United Kingdom.',
              'Wenn Sie eine Seite mit eingebetteter OpenStreetMap-Karte aufrufen, wird eine Verbindung zu den Servern von OpenStreetMap hergestellt. Dabei können Daten wie Ihre IP-Adresse an OpenStreetMap übertragen werden.',
              'Die Nutzung von OpenStreetMap erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.',
              'Weitere Informationen finden Sie in der Datenschutzerklärung von OpenStreetMap: https://wiki.osmfoundation.org/wiki/Privacy_Policy',
            ],
          },
          {
            heading: '7. Ihre Rechte als betroffene Person',
            paragraphs: [
              'Sie haben folgende Rechte:',
              '• Recht auf Auskunft (Art. 15 DSGVO): Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.',
              '• Recht auf Berichtigung (Art. 16 DSGVO): Sie haben das Recht, unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.',
              '• Recht auf Löschung (Art. 17 DSGVO): Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.',
              '• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO): Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
              '• Recht auf Datenübertragbarkeit (Art. 20 DSGVO): Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.',
              '• Widerspruchsrecht (Art. 21 DSGVO): Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen.',
              '• Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO): Sie haben das Recht, Ihre erteilte Einwilligung jederzeit zu widerrufen.',
              '• Beschwerderecht (Art. 77 DSGVO): Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.',
              'Zuständige Aufsichtsbehörde für Niedersachsen: Die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover, Telefon: 0511/120-4500, E-Mail: poststelle@lfd.niedersachsen.de',
            ],
          },
          {
            heading: '8. Externe Links',
            paragraphs: [
              'Diese Website enthält Links zu externen Websites Dritter (z.B. Google Maps), auf deren Inhalte wir keinen Einfluss haben. Beim Klick auf externe Links werden Sie auf die jeweilige Website weitergeleitet und es gelten die Datenschutzbestimmungen des jeweiligen Anbieters.',
              'Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
            ],
          },
          {
            heading: '9. Änderungen der Datenschutzerklärung',
            paragraphs: [
              'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.',
              'Stand: Dezember 2025',
            ],
          },
        ],
      },
    },
    contactForm: {
      salutation: 'Anrede',
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail',
      phone: 'Telefon',
      optional: '(optional)',
      comment: 'Kommentar',
      privacyPrefix: 'Ich habe die',
      privacyLink: 'Datenschutzbestimmungen',
      privacySuffix: ' gelesen',
      submit: 'Senden',
      selectPlaceholder: 'Bitte auswählen',
      logLabel: 'Formulardaten:',
      salutations: {
        ms: 'Frau',
        mr: 'Herr',
        none: 'Keine Angabe',
      },
      alerts: {
        required: 'Bitte füllen Sie alle erforderlichen Felder aus.',
        invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        privacy: 'Bitte stimmen Sie den Datenschutzbestimmungen zu.',
        success: 'Formular erfolgreich gesendet!',
        error: 'Beim Senden des Formulars ist ein Fehler aufgetreten.',
      },
    },
  },
  en: {
    sidebar: {
      toggleMenuAria: 'Toggle menu',
      logoAlt: 'Logo',
      toggleLanguageAria: 'Switch language',
      menuItems: [
        { id: 'home', label: 'Home', href: '/' },
        { id: 'contact', label: 'Contact', href: '/forms/contactForm' },
        {
          id: 'products',
          label: 'Products',
          children: [
            { id: 'products-all', label: 'All Products', href: '/produkte/' },
            { id: 'products-games', label: 'Games', href: '/produkte/kategorie/spiele' },
            { id: 'products-decor', label: 'Decor', href: '/produkte/kategorie/deko' },
            { id: 'products-trophies', label: 'Trophies', href: '/produkte/kategorie/pokale' },
            { id: 'products-everyday', label: 'Everyday Helpers', href: '/produkte/kategorie/alltagshelfer' },
          ],
        },
        {
          id: 'events',
          label: 'Events',
          children: [
            { id: 'event-summer-sale', label: 'Summer Sale', href: '/events/summer-sale' },
            { id: 'event-wlm', label: 'Business Live Fair', href: '/events/wirtschafts-live-messe' },
          ],
        },
        { id: 'archive', label: 'Archive', href: '/archiv' },
      ],
    },
    footer: {
      schoolCompany: 'Student company of BBS1 Lüneburg',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
    },
    home: {
      heroCta: 'All Products',
      heroSubtitle: 'A student company of BBS1 Lüneburg',
      aboutTitle: 'About us',
      aboutParagraphs: [
        'Our student company is a creative and innovative startup project run by the students of class HA25B in the one-year vocational business school with a focus on trade and IT at Berufsbildende Schulen I Lüneburg.',
        'We specialize in 3D printing and turn our ideas into reality with great motivation and team spirit. Through a design-thinking process and interviews with potential customers, we discovered which products are in demand – and we now develop and produce them ourselves.',
        'We also cooperate with BBS II, the technical vocational school: we market the wooden products manufactured there as future trade professionals.',
        'As a student company, we believe in teamwork, creativity and mutual support. Every idea matters and every contribution is valuable. We are an open team that keeps growing and creates innovative solutions for exciting projects.',
        'Our goal is to create real added value for the community with our products – while gaining experience for our professional future.',
        'Our student company stands for creativity, motivation and strong, supportive collaboration – and we are excited to bring many more inspiring projects to life!',
      ],
    },
    products: {
      title: 'Products',
      searchPlaceholder: 'Search product...',
      countSingular: 'Product',
      countPlural: 'Products',
      sortDefault: 'Sort by',
      sortNameAsc: 'Alphabetical (A-Z)',
      sortNameDesc: 'Alphabetical (Z-A)',
      learnMore: 'Learn more...',
      categoryLabel: 'Category',
      back: 'Back',
      notFound: 'Product not found',
      categoryNotFound: 'Category not found',
    },
    archive: {
      title: 'Archive',
      learnMore: 'Learn more..',
      previewAlt: 'Preview',
      articleNotFound: 'Article not found',
    },
    events: {
      loadingMap: 'Map is loading...',
      locationTitle: 'Venue',
      openInGoogleMaps: 'Open in Google Maps →',
      summerSale: {
        title: 'Summer Sale',
        subtitle: 'June 2026',
        contentHeader: 'Summer Sale:',
        headerImageAlt: 'Summer Sale Banner',
        description: [
          'More information about our Summer Sale will follow shortly.',
        ],
        location: {
          name: 'BBS1 Lüneburg',
          address: 'Spillbrunnenweg 1, 21337 Lüneburg, Germany',
          coordinates: {
            lat: 53.2467,
            lng: 10.4108,
          },
        },
      },
      wirtschaftsLiveMesse: {
        title: 'Business Live Fair',
        subtitle: 'Visit us at the fair 18.03.2026',
        contentHeader: 'About the event:',
        headerImageAlt: 'Business Live Fair Banner',
        description: [
          'This year the Business Live Fair for student companies takes place in the BBS Walsrode. Around 20 student companies from across Lower Saxony present their work there and compete in categories such as “best trade fair booth”, “best fair magazine contribution”, “best image film” and “best photo presentation of the business idea”.',
          'The fair gives young people the opportunity to present their business ideas and products to a wider audience. Its goal is to promote entrepreneurial thinking and action in a practical way, strengthen business skills, and encourage exchange between students, schools, business and politics.',
        ],
        location: {
          name: 'BBS Walsrode',
          address: 'Am bhf 80, 29664 Walsrode, Deutschland',
          coordinates: {
            lat: 52.8704,
            lng: 9.5987,
          },
        },
      },
    },
    legal: {
      impressum: {
        title: 'Imprint',
        sections: [
          {
            heading: 'Information according to Section 5 TMG',
            paragraphs: [
              'Print 4 Future',
              'Student company of BBS1 Lüneburg',
              'Spillbrunnenweg 1',
              '21337 Lüneburg',
            ],
          },
          {
            heading: 'Contact',
            paragraphs: ['Email: info@bbs1-lueneburg.de', 'Phone: 0413186300'],
          },
        ],
      },
      datenschutz: {
        title: 'Privacy Policy',
        sections: [
          {
            heading: '1. Data protection at a glance',
            paragraphs: [
              'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally.',
            ],
          },
          {
            heading: '2. Responsible party',
            paragraphs: [
              'The party responsible for data processing on this website is:',
              'Print 4 Future',
              'Student company of BBS1 Lüneburg',
              'Spillbrunnenweg 1',
              '21337 Lüneburg',
              'Email: info@bbs1-lueneburg.de',
              'Phone: 0413186300',
            ],
          },
          {
            heading: '3. Data collection on this website',
            paragraphs: [
              "For processing contact requests, we process your email address as well as your first and last name. To transmit your messages, we use the service EmailJS, to which this data is passed on. We do not use any cookies, analytics tools, or tracking services.",
"When visiting the website, technical information is automatically transmitted to our server by your browser. This data is used exclusively for the technical provision of the website and is neither stored nor evaluated.",
"The provider of these pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:",
"• Browser type and browser version",
"• Operating system used",
"• Referrer URL",
"• Hostname of the accessing device",
"• Time of the server request",
"• IP address",
"This data is not merged with other data sources. The collection of this data is based on Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of their website.",
            ],
          },
          {
            heading: '4. Contact form',
            paragraphs: [
              'If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provide there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions.',
              'Legal basis: The data is processed on the basis of your consent (Art. 6 para. 1 lit. a GDPR). You may revoke this consent at any time by sending us a message, without affecting the lawfulness of processing carried out on the basis of the consent up to the time of revocation.',
              'Storage period: The data you enter in the contact form remains with us until you request deletion, revoke your consent to storage, or the purpose for storing the data no longer applies (e.g. after your request has been fully processed). Mandatory statutory provisions – especially retention periods – remain unaffected.',
              'Provision of data: Providing your personal data in the contact form is voluntary. However, without your data we cannot process your request.',
            ],
          },
          {
            heading: '5. Server log files',
            paragraphs: [
              'The provider of these pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:',
              '• Browser type and browser version',
              '• Operating system used',
              '• Referrer URL',
              '• Host name of the accessing computer',
              '• Time of the server request',
              '• IP address',
              'This data is not merged with other data sources. The collection of this data is based on Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of the website.',
            ],
          },
          {
            heading: '6. OpenStreetMap',
            paragraphs: [
              'We use the OpenStreetMap (OSM) map service. The provider is the OpenStreetMap Foundation, St John\'s Innovation Centre, Cowley Road, Cambridge, CB4 0WS, United Kingdom.',
              'When you access a page with an embedded OpenStreetMap map, a connection to OpenStreetMap servers is established. Data such as your IP address may be transmitted to OpenStreetMap.',
              'OpenStreetMap is used in the interest of an appealing presentation of our online offerings. This constitutes a legitimate interest within the meaning of Art. 6 para. 1 lit. f GDPR.',
              'Further information can be found in the OpenStreetMap privacy policy: https://wiki.osmfoundation.org/wiki/Privacy_Policy',
            ],
          },
          {
            heading: '7. Your rights as a data subject',
            paragraphs: [
              'You have the following rights:',
              '• Right of access (Art. 15 GDPR): You have the right to request information about the personal data we process about you.',
              '• Right to rectification (Art. 16 GDPR): You have the right to demand the immediate correction of inaccurate personal data stored by us or the completion of such data.',
              '• Right to erasure (Art. 17 GDPR): You have the right to request the deletion of your personal data stored by us, unless processing is necessary for exercising the right of freedom of expression and information, for compliance with a legal obligation, for reasons of public interest, or for the establishment, exercise or defense of legal claims.',
              '• Right to restriction of processing (Art. 18 GDPR): You have the right to request the restriction of the processing of your personal data.',
              '• Right to data portability (Art. 20 GDPR): You have the right to receive your personal data in a structured, commonly used and machine-readable format.',
              '• Right to object (Art. 21 GDPR): You have the right to object at any time, on grounds relating to your particular situation, to the processing of personal data concerning you.',
              '• Right to withdraw consent (Art. 7 para. 3 GDPR): You have the right to withdraw your consent at any time.',
              '• Right to lodge a complaint (Art. 77 GDPR): You have the right to lodge a complaint with a supervisory authority if you believe that the processing of your personal data violates the GDPR.',
              'Responsible supervisory authority for Lower Saxony: The State Commissioner for Data Protection Lower Saxony, Prinzenstraße 5, 30159 Hannover, Phone: 0511/120-4500, Email: poststelle@lfd.niedersachsen.de',
            ],
          },
          {
            heading: '8. External links',
            paragraphs: [
              'This website contains links to external third-party websites (e.g. Google Maps), over whose content we have no control. When clicking external links, you are redirected to the respective website and the privacy policies of the respective provider apply.',
              'The respective provider or operator of the linked pages is always responsible for the content of those pages.',
            ],
          },
          {
            heading: '9. Changes to this privacy policy',
            paragraphs: [
              'We reserve the right to adapt this privacy policy so that it always complies with current legal requirements or to implement changes to our services in the privacy policy.',
              'Status: December 2025',
            ],
          },
        ],
      },
    },
    contactForm: {
      salutation: 'Salutation',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone',
      optional: '(optional)',
      comment: 'Comment',
      privacyPrefix: 'I have read the',
      privacyLink: 'privacy policy',
      privacySuffix: '',
      submit: 'Send',
      selectPlaceholder: 'Please choose',
      logLabel: 'Form data:',
      salutations: {
        ms: 'Ms.',
        mr: 'Mr.',
        none: 'Prefer not to say',
      },
      alerts: {
        required: 'Please fill in all required fields.',
        invalidEmail: 'Please enter a valid email address.',
        privacy: 'Please agree to the privacy policy.',
        success: 'Form submitted successfully!',
        error: 'An error occurred. Please try again later.',
      },
    },
  },
};