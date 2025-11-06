/* FULL I18N — FR / EN / AR (global object) */
window.I18N = {
  fr: {
    meta: {
      title:
        "Riskalia — Courtage Assurance· Réassurance · Risques Climatiques · Politique ESG",
      desc: "Riskalia : Courtage et intermédiation toutes branches en assurance, réassurance (QS/Surplus/XoL/Stop-Loss, facultatives) et accompagnement ESG & climat (diagnostic, scénarios, paramétriques, reporting).",
    },
    nav: {
      home: "Accueil",
      solutions: "Solutions",
      assurance: "Assurance",
      re: "Réassurance",
      climate: "Risques Climatiques",
      services: "Services de Conseil",
      esg: "ESG",
      contact: "Contact",
    },
    hero: {
      title: "L'expertise qui rassure",
      slogan:
        "Nous transformons vos aléas opérationnels en croissance durable.",
      sub: "Courtage et intermédiation en assurance, toutes branches · Réassurance · Risques Climatiques · Services de Conseil en gestion des risques",
      cta1: "Nos Solutions",
      cta2: "Nous Contacter",
    },
    solutionsPage: {
      meta: {
        title: "Riskalia — Solutions d'assurance",
        desc: "Deux parcours : entreprises et particuliers. Assurance multirisques, transport, flotte, RC, construction, santé collective, auto, santé, habitation, vie et retraite.",
      },
      hero: {
        title: "Solutions d'assurance",
        subtitle:
          "Deux parcours : <strong>Entreprises</strong> et <strong>Particuliers</strong>. Produits inspirés des meilleures pratiques du marché (multirisques, transport, flotte, RC, construction… / auto, santé, habitation, vie, retraite).",
        badges: [
          "Mise en concurrence",
          "Gestion des sinistres",
          "Transparence totale",
        ],
      },
      tabs: { corp: "Entreprises", retail: "Particuliers" },
      ui: {
        clear: "Effacer",
        search: "Rechercher…",
        nores: "Aucun produit ne correspond à votre recherche.",
      },
      cta: {
        quote: "Obtenir un devis",
        learn: "En savoir plus",
        more: "Parler à un conseiller",
      },
      filters: {
        corp: [
          ["all", "Tous"],
          ["prop", "Biens"],
          ["trans", "Transport"],
          ["fleet", "Flotte"],
          ["liab", "Responsabilité"],
          ["const", "Construction"],
          ["health", "Santé"],
        ],
        retail: [
          ["all", "Tous"],
          ["auto", "Auto"],
          ["health", "Santé"],
          ["acc", "Accident"],
          ["home", "Habitation"],
          ["life", "Vie & placements"],
          ["ret", "Retraite"],
        ],
      },
      products: {
        corp: [
          {
            id: "multirisques",
            url: "Produits/multirisques.html",
            img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=60",
            cat: ["prop"],
            t: "Multirisques Entreprise",
            p: "Biens & pertes d'exploitation pour locaux, stocks, machines.",
            bul: [
              "Incendie, dégâts des eaux, bris de machines",
              "Pertes d'exploitation (PDB)",
              "Options CatNat & événements climatiques",
            ],
          },
          {
            id: "transport",
            url: "Produits/transport.html",
            img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=60",
            cat: ["trans"],
            t: "Transport (marchandises)",
            p: "Couvre vos expéditions import/export & logistique.",
            bul: [
              "Tous risques facultés",
              "RC transporteur / commissionnaire",
              "Paramétriques météo en option",
            ],
          },
          {
            id: "flotte",
            url: "Produits/flotte.html",
            img: "https://images.unsplash.com/photo-1704488473677-ae044ef0d289?auto=format&fit=crop&w=1200&q=60",
            cat: ["fleet"],
            t: "Automobile & Flotte",
            p: "De 5 à 5 000 véhicules, gestion sinistres & télématique.",
            bul: [
              "Tiers / Tous risques / Bris de glace",
              "Assistance & véhicules de remplacement",
              "Tableaux de bord sinistres",
            ],
          },
          {
            id: "rc",
            url: "Produits/rc.html",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=60",
            cat: ["liab"],
            t: "Responsabilité Civile",
            p: "RC Générale / Professionnelle / Pollution / Produits.",
            bul: [
              "RC exploitation et après livraison",
              "RC professionnelle (PI)",
              "RC environnementale",
            ],
          },
          {
            id: "construction",
            url: "Produits/construction.html",
            img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=60",
            cat: ["const"],
            t: "Construction (CAR/EAR)",
            p: "Tous risques chantier & décennale selon projet.",
            bul: [
              "Chantiers BTP, énergie, infrastructures",
              "Pertes d'exploitation chantier",
              "Couvertures par phase",
            ],
          },
          {
            id: "santecollective",
            url: "Produits/santecollective.html",
            img: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&w=1200&q=60",
            cat: ["health"],
            t: "Santé collective & Prévoyance",
            p: "Contrats pour salariés : frais médicaux et prévoyance.",
            bul: [
              "Réseaux de soins & tiers payant",
              "Couvertures cadres/non-cadres",
              "Pilotage coûts & prévention",
            ],
          },
        ],
        retail: [
          {
            id: "auto",
            url: "Produits/auto.html",
            img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=60",
            cat: ["auto"],
            t: "RISKALIA Auto",
            p: "Assurance automobile : Tiers+, Collision, Tous Risques Premium.",
            bul: [
              "Assistance 24/7 & réseau agréé",
              "Protection du conducteur & du véhicule",
              "3 niveaux : Tiers+, Collision, Tous Risques Premium",
            ],
          },
          {
            id: "sante",
            url: "Produits/sante.html",
            img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=60",
            cat: ["health"],
            t: "Santé",
            p: "Remboursement soins, hospitalisation, optique & dentaire.",
            bul: [
              "Réseau partenaires & tiers payant",
              "Formules modulaires",
              "Assistance 24/7",
            ],
          },
          {
            id: "alv",
            url: "Produits/alv.html",
            img: "https://images.unsplash.com/photo-1633158832532-f71e9c7ac6d6?auto=format&fit=crop&w=1200&q=60",
            cat: ["acc"],
            t: "Accidents de la vie",
            p: "Indemnisation des accidents domestiques & loisirs.",
            bul: [
              "Incapacité & invalidité",
              "Rente éducation",
              "Assistance à domicile",
            ],
          },
          {
            id: "habitation",
            url: "Produits/habitation.html",
            img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=60",
            cat: ["home"],
            t: "Biens (Habitation)",
            p: "Incendie, vol, dégâts des eaux, RC vie privée.",
            bul: [
              "Valeur à neuf selon options",
              "Protection juridique",
              "Objets de valeur",
            ],
          },
          {
            id: "vie",
            url: "Produits/vie.html",
            img: "https://img.freepik.com/photos-gratuite/famille-islamique-maison-vue-face_23-2149887070.jpg",
            cat: ["life"],
            t: "Assurance-vie & placements",
            p: "Épargne, transmission & capitalisation.",
            bul: [
              "Fonds dirhams & unités de compte",
              "Arbitrages & fiscalité",
              "Options bénéficiaires",
            ],
          },
          {
            id: "retraite",
            url: "Produits/retraite.html",
            img: "https://images.unsplash.com/photo-1562557082-7f2785d741e7?auto=format&fit=crop&w=1200&q=60",
            cat: ["ret"],
            t: "Retraite",
            p: "Constitution d'une rente/épargne long terme.",
            bul: [
              "Versements programmés",
              "Avantages fiscaux (selon cadre)",
              "Options réversibilité",
            ],
          },
        ],
      },
    },
    assurance: {
      label: "ASSURANCE",
      title: "Assurance",
      subtitle: "Des solutions claires pour tous",
      description:
        "Deux parcours : Entreprises et Particuliers, inspirés des meilleures pratiques du marché.",
      entreprises: {
        title: "Entreprises",
        item1: "Multirisques Entreprise",
        item2: "Transport (marchandises)",
        item3: "Automobile & flotte",
        item4: "Responsabilité civile",
        item5: "Construction",
        item6: "Santé collective & prévoyance",
        link: "Voir toutes les solutions →",
      },
      particuliers: {
        title: "Particuliers",
        item1: "Automobile",
        item2: "Santé",
        item3: "Accidents de la vie",
        item4: "Biens (Habitation)",
        item5: "Assurance-vie & placements",
        item6: "Retraite",
        link: "Voir toutes les solutions →",
      },
    },
    reassurance: {
      label: "RÉASSURANCE",
      title: "Réassurance en Traités & Cessions Facultatives :",
      subtitle: "Une maîtrise de bout en bout",
      traites: {
        title: "Traités sur mesure pour portefeuilles : De la conception à l’indemnisation",
        desc: "Nous concevons des programmes de réassurance clairs et pérennes, alignés sur vos objectifs techniques et financiers. Chaque traité est pensé pour garantir la stabilité, la transparence et la performance durable.",
      },
      facultatives: {
        title: "Cessions en réassurance facultatives : Vos facultatives. Notre expertise.",
        desc: "Des solutions de réassurance intégrées, adaptées aux besoins de chaque assuré ou assureur. Notre approche repose sur la sélection rigoureuse des marchés, la précision des clauses et un suivi contractuel exemplaire.",
      },
      sinistres: {
        title: "Gestion des Sinistres & accompagnement 24/7 : Réactivité, maitrise, rigueur",
        desc: "Dès la survenance du sinistre, nous mobilisons une équipe dédiée pour piloter les expertises, assurer une communication claire et garantir une résolution rapide. Chaque intervention renforce la confiance et la continuité du partenariat.",
      },
      cta: "Explorer la réassurance",
    },
    climate: {
      label: "RISQUES CLIMATIQUES",
      title: "Risques climatiques — de l'analyse à l'action",
      cartographie: {
        title: "Cartographie & scénarios",
        desc: "Analyse physique, de transition et stress tests. Une matérialité par sites, métiers et chaînes de valeur qui priorise les risques et éclaire les décisions d'investissement et de continuité d'activité.",
      },
      modelisation: {
        title: "Modélisation & transfert",
        desc: "Quantification PML/AAL climatique et solutions de transfert adaptées : paramétriques météo, captives, réassurance. Triggers simples et vérifiables pour des indemnisations rapides et prévisibles, alignées au risque.",
      },
      resilience: {
        title: "Résilience & reporting",
        desc: "Plans d'adaptation et CAPEX verts structurés, indicateurs TCFD/ISSB et exigences bailleurs. Un reporting utile aux dirigeants et auditeurs pour piloter les progrès et démontrer la crédibilité du dispositif.",
      },
      cta_button: "Découvrir l'offre Risques Climatiques",

      // Climate page specific content
      meta: {
        title: "Riskalia — Risques climatiques",
        desc: "Identifier, quantifier et piloter les risques climatiques : risques de transition, scénarios (RCP/SSP), feuille de route d'adaptation, transfert de risque et reporting.",
      },
      ui: { search: "🔎…" },
      aria: {
        nav: "Navigation principale",
        submenu_solutions: "Sous-menu Solutions",
        langswitch: "Sélecteur de langue",
      },
      title: "Risques climatiques",
      subtitle:
        "Identifier, quantifier et piloter les impacts liés au climat : risques de transition, scénarios (RCP/SSP), feuille de route d'adaptation, transfert de risque et reporting TCFD/ISSB.",
      method:
        "On part de vos pertes passées et de votre tolérance au risque. On simule plusieurs seuils et on retient celui qui équilibre coût, protection et capital.",
      cta: {
        contact: "Nous contacter",
        advisor: "Parler à un expert",
      },
      intro_climate: {
        title: "Le défi climatique au Maroc",
        content:
          "Le changement climatique est devenu l'un des premiers facteurs de risque pour les économies africaines et marocaines. Il est indispensable de passer d'une logique réactive à une approche anticipative : mesurer, planifier et couvrir.",
      },
      sec: {
        intro: {
          t: "Introduction",
          p1: "Le changement climatique est devenu l'un des premiers facteurs de risque pour les économies africaines et marocaines. Sécheresses récurrentes, stress hydrique, vagues de chaleur, inondations soudaines et feux de forêts : ces phénomènes ne sont plus exceptionnels mais tendent à se répéter et à s'intensifier.",
          impacts_title: "Au Maroc, les impacts sont déjà mesurables :",
          impact1: "pertes agricoles et baisse de rendements,",
          impact2:
            "dégâts aux infrastructures et perturbations des chaînes logistiques,",
          impact3: "hausse des coûts de l'énergie et de l'eau,",
          impact4: "effets sur la santé et la productivité des salariés.",
          conclusion:
            "Ces risques touchent toutes les catégories d'acteurs : assureurs, réassureurs, entreprises, collectivités, mais aussi ménages et investisseurs. Face à cette réalité, il est indispensable de passer d'une logique réactive (gérer après coup) à une approche anticipative (mesurer, planifier et couvrir).",
        },
        risks: {
          t: "Risques physiques & de transition",
          phys: { t: "Risques physiques" },
          distinction: "On distingue :",
          acute: "Les risques aigus",
          acute_desc:
            "événements soudains et destructeurs comme les inondations urbaines, les tempêtes violentes, les vagues de chaleur extrêmes ou les feux de forêts. Ils entraînent des dommages immédiats aux bâtiments, aux équipements, aux réseaux et peuvent interrompre l'activité.",
          chronic: "Les risques chroniques",
          chronic_desc:
            "effets progressifs mais durables comme la hausse des températures moyennes, la raréfaction de l'eau ou l'érosion côtière. Ils fragilisent les cultures, augmentent les coûts d'irrigation et modifient les conditions d'exploitation industrielle et agricole.",
          trans: { t: "Risques de transition" },
          trans_intro:
            "Ils découlent de l'évolution vers une économie bas carbone :",
          trans1:
            "nouvelles réglementations (taxes carbone, normes de reporting ESG),",
          trans2: "exigences des bailleurs et assureurs internationaux,",
          trans3:
            "transformation des chaînes de valeur mondiales (exportateurs soumis à des critères climatiques stricts),",
          trans4:
            "attentes sociétales et réputationnelles (investisseurs, consommateurs).",
          why_title: "Pourquoi c'est important ?",
          why_desc:
            "Parce qu'un acteur qui n'anticipe pas ces évolutions peut perdre des financements, voir ses coûts grimper, ou rater des opportunités de marché.",
        },
        data: {
          t: "Données & scénarios",
          collect: {
            t: "Collecte et analyse",
            p: "Nous partons de données concrètes : historiques de sinistres, bases climatiques disponibles au Maroc et à l'international, données locales de pluviométrie ou de température, mais aussi témoignages et retours d'expérience de vos équipes.",
          },
          map: {
            t: "Cartographie",
            intro: "Nous traduisons ces données en cartes claires :",
            conclusion:
              "Chaque carte met en évidence les actifs critiques et les points de fragilité de vos opérations.",
          },
          map1: "zones agricoles exposées à la sécheresse,",
          map2: "villes à risque d'inondation,",
          map3: "régions industrielles confrontées aux vagues de chaleur.",
          scen: {
            t: "Scénarios prospectifs",
            intro:
              "Nous construisons des trajectoires à horizon 2030 et 2050 pour tester la robustesse de vos stratégies :",
          },
          scen1: "combien de jours de chaleur extrême supplémentaires ?",
          scen2: "quelle fréquence d'inondations dans telle région ?",
          scen3: "quel impact sur la productivité agricole ou industrielle ?",
          kpi: {
            title: "Indicateurs clés",
            intro: "Nous traduisons tout cela en indicateurs simples :",
            aal: "Pertes annuelles moyennes",
            pml: "Perte maximale probable",
            costs: "Évolution des coûts",
            impact: "Impact financier",
          },
          objective: "Objectif",
          objective_desc:
            "rendre la donnée climatique lisible, comparable et directement exploitable dans vos décisions de gestion, de financement et d'assurance.",
        },
        strategy: {
          t: "Stratégie & feuille de route",
          intro:
            "Une bonne stratégie ne se limite pas à dresser un constat. Elle doit déboucher sur un plan d'action hiérarchisé et opérationnel.",
          steps_title: "Les 4 étapes",
          step1_title: "Mesurer",
          step1_desc:
            "identifier clairement vos vulnérabilités et estimer leur coût.",
          step2_title: "Réduire",
          step2_desc:
            "mettre en place des mesures d'adaptation (renforcer les infrastructures sensibles, investir dans des solutions d'irrigation efficientes, établir des plans de continuité d'activité).",
          step3_title: "Transférer",
          step3_desc:
            "compléter la prévention par des mécanismes d'assurance et de réassurance, classiques ou paramétriques.",
          step4_title: "Piloter",
          step4_desc:
            "suivre l'évolution des risques et mettre à jour régulièrement vos protections.",
          roadmap: { t: "La feuille de route Riskalia" },
          roadmap_intro:
            "Nous livrons une roadmap sur 12 à 24 mois, structurée en :",
          quickwins_title: "Quick wins",
          quickwins_desc: "mesures à faible coût mais à fort impact immédiat.",
          investments_title: "Investissements prioritaires",
          investments_desc: "actions de résilience à planifier et financer.",
          coverage_title: "Programme de couverture",
          coverage_desc:
            "assurance traditionnelle et/ou paramétrique adaptée à vos expositions.",
          benefit_title: "Bénéfice",
          benefit_desc:
            "vous disposez d'un plan clair, compréhensible par les dirigeants comme par les opérationnels, et qui peut être suivi dans le temps.",
        },
        finance: {
          t: "Financement & transfert de risque",
          fund: {
            t: "Financer l'adaptation",
            intro:
              "L'adaptation climatique a un coût. Mais des leviers existent :",
          },
          fund1:
            "subventions et programmes publics pour l'agriculture, l'eau et l'énergie,",
          fund2:
            "lignes de crédit vert des banques locales et internationales,",
          fund3:
            "garanties publiques (comme Tamwilcom) pour réduire le coût du risque,",
          fund4:
            "partenariats public-privé pour mutualiser les investissements de protection.",
          transfer: {
            t: "Transférer le risque",
            intro: "L'assurance joue un rôle clé :",
          },
          transfer1_title: "Produits traditionnels",
          transfer1_desc:
            "dommages, catastrophes naturelles, multirisque agricole.",
          transfer2_title: "Paramétriques météo",
          transfer2_desc:
            "déclenchement automatique si un indice (pluie, chaleur, vent, sécheresse) dépasse un seuil. Indemnisation rapide, moins de litiges, plus de prévisibilité.",
          transfer3_title: "Programmes mutualisés",
          transfer3_desc:
            "couverture de groupes d'agriculteurs, de coopératives ou de collectivités.",
          transfer4_title: "Réassurance et pools",
          transfer4_desc: "sécurisation de la capacité sur les périls majeurs.",
          blended: {
            t: "Blended finance",
            desc: "Dans certains cas, nous combinons subventions, prêts concessionnels et assurance pour rendre les projets bancables et atténuer le coût final pour les assurés.",
          },
          role: { t: "Rôle de Riskalia", intro: "Nous intervenons sur :" },
          role1: "Montage financier",
          role2: "Conception des couvertures",
          role3: "Sourcing de capacité",
          role4: "Gouvernance et traçabilité",
          promise_title: "Notre promesse",
          promise_desc:
            "transformer une contrainte financière en solution soutenable et durable.",
        },
        value: {
          t: "La valeur ajoutée de Riskalia",
          expertise_title: "Expertise locale et internationale",
          expertise_desc:
            "connaissance des réalités marocaines et benchmark des meilleures pratiques.",
          approach_title: "Approche pédagogique",
          approach_desc:
            "simplifier, vulgariser et impliquer tous les niveaux de décision.",
          solutions_title: "Solutions innovantes",
          solutions_desc:
            "assurance paramétrique, schémas mutualisés, partenariats public-privé.",
          impact_title: "Impact concret",
          impact_desc:
            "réduction des vulnérabilités, amélioration de la résilience et meilleur accès au financement.",
        },
        faq: { t: "FAQ" },
      },
      faq: {
        q1: "Par où commencer si nous avons peu de données ?",
        a1: "Un diagnostic rapide permet d'obtenir une première vision en 3–4 semaines, même avec des données limitées.",
        q2: "Combien de temps pour avoir un plan d'action ?",
        a2: "Un premier plan priorisé peut être livré en moins d'un mois, avec des actions rapides et une vision sur 12–24 mois.",
        q3: "La réassurance peut-elle couvrir les aléas climatiques ?",
        a3: "Oui, à travers des traités CatNat, mais aussi via des solutions paramétriques spécialement conçues pour sécheresse, inondations ou vagues de chaleur.",
        q4: "Qu'est-ce qu'une couverture paramétrique ?",
        a4: "C'est une assurance déclenchée par un indice (ex. volume de pluie, température). L'indemnité est versée automatiquement, sans attendre une expertise longue et coûteuse.",
      },
      contact: {
        title: "Prêt à anticiper les risques climatiques ?",
        subtitle:
          "Commençons par un diagnostic rapide de vos expositions et opportunités.",
      },
footer: {
    col1: {
      title: "Riskalia",
      address:
        "Cabinet de courtage & stratégies agréé ACAPS.<br/>Siège : 16, Rue de Terves, 2ème étage,<br/>Quartier Mers Sultan, Casablanca.",
      notice:
        "Intermédiaire d'assurance régi par la loi 17-99 portant code des assurances.<br/>Sous la décision n°COU5047.00000.0.C.2025.472."
    },
    col2: { title: "Navigation" },
    col3: { title: "Assurance Particuliers" },
    col4: { title: "Assurance Entreprises" },
    col5: {
      title: "Contact",
      tel1label: "Tél :",
      tel1: "+212 666 756 991",
      tel2label: "Tél :",
      tel2: "+212 675 208 909",
      emailLabel: "Email :",
      email: "contact@riskalia.ma"
    },
    copyright: "© " + new Date().getFullYear() + " Riskalia. Tous droits réservés."
  },

  produits: {
    auto: "Auto",
    habitation: "Habitation",
    sante: "Santé",
    alv: "Accidents de la vie",
    vie: "Vie",
    retraite: "Retraite",
    multirisques: "Multirisques",
    flotte: "Flotte automobile",
    rc: "Responsabilité Civile",
    construction: "Construction",
    santecollective: "Santé collective",
    transport: "Transport"
  },

  nav: {
    home: "Accueil",
    solutions: "Solutions",
    re: "Réassurance",
    climate: "Risques Climatiques",
    esg: "ESG",
    services: "Services de Conseil"
  },
},
    reinsurance: {
      hero: {
        title: "Réassurance — Programmes & Conseil",
        subtitle:
          "Des protections alignées sur vos priorités : stabilité des résultats, protection du capital, soutien à la croissance et conformité.",
      },
      toc: {
        promise: "Notre promesse",
        programs: "Programmes",
        markets: "Marchés",
        claims: "Sinistres",
        data: "Données",
        optimization: "Optimisation",
        compliance: "Conformité",
        faq: "FAQ",
      },
      s1: {
        title: "Notre promesse",
        intro:
          "Nous vous accompagnons dans la construction et l'optimisation de vos programmes de réassurance, de bout en bout.",
        concrete: {
          title: "Concret",
          item1:
            "Quota-share : vous cédez une part fixe des primes et des sinistres.",
          item2:
            "Utilité : soulager le capital et monter en capacité (croissance, nouvelles gammes).",
          item3: "Surplus : vous gardez une base et cédez l'excédent.",
        },
        method: {
          title: "Méthode",
          item1:
            "Analyse de vos données historiques et de votre appétence au risque.",
          item2:
            "Dimensionnement des programmes (rétentions, limites, géométries).",
          item3: "Négociation avec les marchés et suivi jusqu'au bind.",
        },
        example: {
          title: "Exemple",
          text: "Un assureur automobile : nous analysons sa sinistralité par classe de véhicule, nous dimensionnons un programme QS à 20% avec une limite de 2M€ par sinistre, et nous négocions avec 3 réassureurs A+ pour obtenir les meilleures conditions.",
        },
      },
      s2: {
        title: "Programmes",
        proportional: {
          title: "Proportionnels",
          qs: {
            title: "Quota-share",
            desc: "Vous cédez une part fixe des primes et des sinistres (ex: 20%).",
            utility:
              "Utilité : soulager le capital et monter en capacité (croissance, nouvelles gammes).",
            example:
              "Exemple : un assureur automobile cède 20% de son portefeuille pour libérer du capital et financer l'acquisition de nouvelles lignes.",
          },
          surplus: {
            title: "Surplus",
            desc: "Vous gardez une base et cédez l'excédent (ex: 1M€ de rétention, 4M€ de capacité).",
            utility:
              "Utilité : optimiser le capital tout en gardant une exposition maîtrisée.",
            example:
              "Exemple : un assureur garde 1M€ par sinistre et cède jusqu'à 4M€ pour optimiser son capital tout en gardant une exposition maîtrisée.",
          },
        },
        nonproportional: {
          title: "Non-proportionnels",
          xol: {
            title: "XoL (Excess of Loss)",
            desc: "Vous gardez une rétention et cédez l'excédent (ex: 500K€ de rétention, 2M€ de limite).",
            utility:
              "Utilité : protéger contre les sinistres majeurs tout en optimisant le capital.",
            example:
              "Exemple : un assureur garde 500K€ par sinistre et cède jusqu'à 2M€ pour protéger contre les sinistres majeurs.",
          },
          stoploss: {
            title: "Stop-Loss",
            desc: "Vous cédez l'excédent d'un ratio de sinistres (ex: 75% de ratio de sinistres).",
            utility:
              "Utilité : protéger contre la dégradation du résultat technique.",
            example:
              "Exemple : un assureur cède l'excédent de 75% de ratio de sinistres pour protéger contre la dégradation du résultat technique.",
          },
        },
        innovative: {
          title: "Innovants",
          parametric: {
            title: "Paramétriques",
            desc: "Déclenchement automatique si un indice dépasse un seuil (ex: pluie, température).",
            utility:
              "Utilité : indemnisation rapide, moins de litiges, plus de prévisibilité.",
            example:
              "Exemple : un assureur agricole utilise un indice de pluviométrie pour déclencher automatiquement les indemnisations.",
          },
          captive: {
            title: "Captives",
            desc: "Filiale d'assurance dédiée à la gestion des risques du groupe.",
            utility:
              "Utilité : optimiser le coût du risque et générer des revenus.",
            example:
              "Exemple : un groupe industriel crée une captive pour gérer ses risques et optimiser son coût du risque.",
          },
        },
        benchmark: {
          title: "Benchmark",
          text: "Nous comparons vos programmes avec ceux du marché pour identifier les opportunités d'optimisation.",
        },
      },
      s3: {
        title: "Marchés",
        strategy: {
          title: "Stratégie",
          intro:
            "Nous définissons votre stratégie de placement en fonction de vos objectifs et de votre appétence au risque.",
          steps: {
            step1:
              "Analyse de vos données historiques et de votre appétence au risque.",
            step2:
              "Définition de votre stratégie de placement (proportionnel vs non-proportionnel).",
            step3:
              "Dimensionnement des programmes (rétentions, limites, géométries).",
            step4: "Sélection des marchés et négociation des conditions.",
            step5: "Suivi et optimisation des programmes.",
          },
        },
        terms: {
          title: "Conditions",
          intro:
            "Nous négocions les meilleures conditions avec les marchés pour optimiser votre coût du risque.",
          items: {
            item1: "Taux de commission optimisés.",
            item2: "Clauses de révision adaptées à votre profil.",
            item3: "Conditions de sinistres favorables.",
            item4: "Garanties de capacité et de stabilité.",
          },
        },
        control: {
          title: "Contrôle",
          intro:
            "Nous assurons le suivi et le contrôle de vos programmes pour garantir leur efficacité.",
          items: {
            item1: "Suivi des ratios de sinistres et des commissions.",
            item2: "Contrôle des déclarations et des règlements.",
            item3: "Optimisation des programmes en fonction des résultats.",
            item4: "Reporting régulier sur la performance des programmes.",
          },
        },
        benefit: {
          title: "Bénéfice",
          text: "Vous disposez d'un programme de réassurance optimisé, adapté à votre profil de risque et à vos objectifs, avec un suivi rigoureux et une optimisation continue.",
        },
      },
      s4: {
        title: "Sinistres",
        objective: {
          title: "Objectif",
          text: "Nous vous accompagnons dans la gestion des sinistres pour garantir un règlement rapide et équitable.",
        },
      },
      s5: {
        title: "Données",
        goal: {
          title: "Objectif",
          text: "Nous vous aidons à structurer et analyser vos données pour optimiser vos programmes de réassurance.",
        },
      },
      s6: {
        title: "Optimisation",
        architecture: {
          title: "Architecture",
          intro:
            "Nous optimisons l'architecture de vos programmes pour maximiser leur efficacité.",
          items: {
            item1: "Analyse de la performance des programmes existants.",
            item2: "Identification des opportunités d'optimisation.",
            item3: "Redimensionnement des programmes si nécessaire.",
            item4: "Mise en place de nouveaux programmes si opportun.",
          },
        },
        efficiency: {
          title: "Efficacité",
          intro:
            "Nous améliorons l'efficacité de vos programmes pour réduire votre coût du risque.",
          items: {
            item1: "Optimisation des rétentions et des limites.",
            item2: "Amélioration des conditions de sinistres.",
            item3: "Négociation de meilleures commissions.",
            item4: "Mise en place de programmes innovants.",
          },
        },
        counterparties: {
          title: "Contreparties",
          intro:
            "Nous diversifions vos contreparties pour réduire votre concentration de risque.",
          items: {
            item1: "Sélection de contreparties solides et stables.",
            item2: "Diversification géographique et sectorielle.",
            item3: "Négociation de conditions préférentielles.",
            item4: "Suivi de la performance des contreparties.",
          },
        },
        examples: {
          title: "Exemples",
          intro:
            "Voici quelques exemples d'optimisation que nous avons réalisés :",
          examples: {
            ex1: "Un assureur automobile : optimisation du programme QS de 20% à 15% avec une meilleure commission.",
            ex2: "Un assureur habitation : mise en place d'un programme XoL pour protéger contre les sinistres majeurs.",
            ex3: "Un assureur santé : optimisation du programme Stop-Loss pour réduire le coût du risque.",
          },
        },
      },
      s7: {
        title: "Conformité",
        intro:
          "Nous vous accompagnons dans la conformité réglementaire de vos programmes de réassurance.",
        policy: {
          title: "Politique",
          intro:
            "Nous vous aidons à définir et mettre en œuvre votre politique de réassurance.",
          items: {
            item1:
              "Définition des objectifs et de la stratégie de réassurance.",
            item2: "Mise en place des processus et des contrôles.",
            item3: "Formation des équipes sur les enjeux de réassurance.",
            item4: "Suivi et reporting sur la performance des programmes.",
          },
        },
        orsa: {
          title: "ORSA",
          intro:
            "Nous vous accompagnons dans la réalisation de votre ORSA (Own Risk and Solvency Assessment).",
          items: {
            item1: "Analyse des risques et de la solvabilité.",
            item2: "Évaluation de l'adéquation des programmes de réassurance.",
            item3: "Recommandations d'amélioration des programmes.",
            item4: "Documentation et reporting pour les autorités.",
          },
        },
        reporting: {
          title: "Reporting",
          intro:
            "Nous vous aidons à mettre en place un reporting efficace sur vos programmes de réassurance.",
          items: {
            item1: "Définition des indicateurs de performance.",
            item2: "Mise en place des tableaux de bord.",
            item3: "Reporting régulier aux dirigeants.",
            item4: "Analyse des tendances et des opportunités.",
          },
        },
        deliverables: {
          title: "Livrables",
          intro: "Nous vous livrons des documents clairs et compréhensibles :",
          items: {
            item1: "Politique de réassurance documentée.",
            item2: "Programmes de réassurance optimisés.",
            item3: "Reporting sur la performance des programmes.",
            item4: "Recommandations d'amélioration continue.",
          },
        },
        purpose: {
          title: "Objectif",
          text: "Vous disposez d'un programme de réassurance conforme, optimisé et efficace, avec un suivi rigoureux et une amélioration continue.",
        },
      },
      s8: {
        title: "FAQ",
        q1: {
          question: "Qu'est-ce que la réassurance ?",
          answer:
            "La réassurance est l'assurance des assureurs. Elle permet de transférer une partie des risques à des réassureurs pour protéger le capital et optimiser la capacité.",
        },
        q2: {
          question: "Quels sont les types de réassurance ?",
          answer:
            "Il existe deux types principaux : proportionnel (quota-share, surplus) et non-proportionnel (XoL, Stop-Loss).",
        },
        q3: {
          question: "Comment optimiser un programme de réassurance ?",
          answer:
            "L'optimisation passe par l'analyse des données, le dimensionnement des programmes, la négociation des conditions et le suivi de la performance.",
        },
        q4: {
          question: "Quels sont les enjeux de conformité ?",
          answer:
            "La conformité réglementaire implique la mise en place d'une politique de réassurance, la réalisation d'un ORSA et un reporting régulier.",
        },
        q5: {
          question: "Comment choisir ses contreparties ?",
          answer:
            "Le choix des contreparties doit se baser sur leur solidité financière, leur stabilité, leur expertise et leurs conditions commerciales.",
        },
      },
      cta: {
        title: "Un besoin de réassurance ?",
        subtitle: "Décrivez votre projet : nous répondons sous 24–48 h.",
        contact: "Nous contacter",
      },
      contact: {
        title: "Contact",
        subtitle:
          "Nous sommes là pour vous accompagner dans vos projets de réassurance.",
        quote: "Obtenir un devis",
        advisor: "Contacter un conseiller",
      },
    },
    services: {
      label: "SERVICES DE CONSEIL",
      title:
        "Gestion des risques, Évaluation des engagements sociaux et Formation sur mesure",
      consulting: {
        title: "Conseil en Gestion des Risques",
        desc: "Cartographies vivantes, appétence clarifiée et tableaux de bord lisibles. Nous identifions, quantifions et priorisons les risques stratégiques, opérationnels et financiers pour un pilotage décidé et mesurable.",
      },
      evaluation: {
        title: "Évaluation des engagements sociaux",
        desc: "Évaluations actuarielles (IFC, retraite, prévoyance) alignées normes locales/IFRS. Hypothèses auditées, trajectoires de charges expliquées et leviers d'optimisation présentés avec transparence.",
      },
      formation: {
        title: "Formation sur mesure",
        desc: "Parcours modulaires mêlant gouvernance, outils d'analyse, assurance et transfert. Études de cas sectorielles et ateliers pratiques pour ancrer les acquis et accélérer la mise en œuvre terrain.",
      },
      cta: "Découvrir nos Services de Conseil",
    },
    esgSection: {
      label: "ESG",
      title: "Politique ESG — gouvernance, social, environnement",
      gouvernance: {
        title: "Gouvernance & éthique",
        desc: "Code de conduite, anticorruption, cybersécurité et canal d'alerte. Rôles, processus et contrôles documentés pour une conformité vivante et vérifiable.",
      },
      personnes: {
        title: "Personnes & diversité",
        desc: "Bien-être, apprentissage continu, inclusion et équité salariale. Entretiens structurés et plans de développement pour faire grandir les équipes durablement.",
      },
      environnement: {
        title: "Responsabilité Environnementale",
        desc: "Bilan GES, sobriété énergétique/numérique, mobilité douce et charte fournisseurs. Indicateurs suivis et plans d'amélioration concrets, revus périodiquement.",
      },
      cta: "Découvrir notre politique ESG",
    },
    team: {
      label: "ASSOCIÉS",
      title: "Notre Équipe",
      subtitle: "Des experts passionnés à votre service",
      nabil: {
        name: "Nabil Cherkaoui",
        title: "Associé dirigeant",
        bio: "Juriste de formation et spécialiste de la réassurance, Nabil Cherkaoui a dirigé au sein de la SCR (Groupe CDG) la gouvernance, la conformité, le juridique, les sinistres majeurs et le risque de contrepartie. Référence du marché pour la rédaction et la négociation des placements en réassurance, il a piloté les relations avec régulateurs, agences de notation et partenaires mondiaux. Dirigeant effectif de Riskalia, il garantit la solidité institutionnelle, la conformité et la qualité d'exécution. Chercheur associé à Paris-Dauphine, il apporte une rigueur académique au service de solutions robustes, alliant sécurité juridique, clarté contractuelle et valeur client.",
      },
      anasse: {
        name: "Anasse Youssfi",
        title: "Associé stratégique",
        bio: "Actuaire et dirigeant, Anasse Youssfi cumule plus de vingt ans d'expérience auprès d'assureurs, de réassureurs et d'institutions financières en Afrique et à l'international. Il conjugue vision et exigence méthodologique, enseigne comme maître de conférences et forme de nouvelles générations d'actuaires. Chez Riskalia, il apporte un appui technique sur les dossiers à fort enjeu : structuration de couvertures sur mesure, critères de souscription, programmes multi-lignes/réassurance et solutions paramétriques. Objectif : aligner précisément risques, coût et valeur client.",
      },
    },
    cta: {
      title: "Un besoin de couverture ?",
      subtitle: "Décrivez votre projet : nous répondons sous 24–48 h.",
      quote: "Obtenir un devis",
      advisor: "Contacter un conseiller",
      button1: "Obtenir un devis",
      button2: "Contacter un conseiller",
      write: "Écrire un message",
      call: "Voir nos coordonnées",
    },
    // Contact page specific translations
    contact: {
      hero: {
        title: "Contact",
        subtitle:
          "Demandes d'information, devis, partenariats ou rendez-vous — nous vous répondons rapidement.",
      },
      form: {
        title: "Nous écrire",
        desc: "Laissez-nous vos coordonnées et votre message. Nous revenons vers vous sous 1 jour ouvré.",
        fname: "Prénom",
        lname: "Nom",
        email: "E-mail",
        phone: "Téléphone",
        topic: "Sujet",
        msg: "Message",
        submit: "Envoyer",
        note: 'En cliquant "Envoyer", vous acceptez d\'être recontacté(e).',
        placeholders: {
          fname: "Ex. Sara",
          lname: "Ex. El Amrani",
          email: "vous@exemple.com",
          phone: "+212 …",
          msg: "Décrivez votre demande...",
        },
        opt: {
          quote: "Demande de devis",
          meeting: "Prendre rendez-vous",
          partner: "Partenariat",
          other: "Autre",
        },
      },
      box: {
        title: "Coordonnées",
        addr: {
          t: "Adresse:",
          v: "16, Rue de Terves, 2ème Etage. Quartier Mers Sultan, Casablanca",
        },
        phone1: { label: "Tél :", value: "+212-666-756991" },
        phone2: { label: "Tél :", value: "+212-675-208909" },
        email: {
          label: "Informations générales :",
          value: "contact@riskalia.ma",
        },
        hours: "Lun–Ven, 9:00–18:00 (UTC+1)",
        mapLabel: "Carte du cabinet Riskalia",
        mapTitle: "Carte — Riskalia, 16 Rue de Terves, Casablanca",
        mapBtn: "Ouvrir dans Google Maps",
      },
      cta: {
        title: "Parlons de votre besoin",
        subtitle:
          "Un conseiller vous répond rapidement pour clarifier votre demande et proposer les prochaines étapes.",
        write: "Écrire un message",
        call: "Voir nos coordonnées",
      },
    },
    // ESG page specific translations
    esg: {
      hero: {
        title: "🌱 Notre engagement ESG",
        subtitle:
          "Un cabinet de courtage responsable, transparent et engagé pour la société marocaine",
      },
      cta: {
        contact: "Nous contacter",
        discover: "Découvrir nos actions",
        partnership: "Partenariat ESG",
      },
      intro: {
        title: "Notre vision ESG",
        content:
          "Chez Riskalia, nous croyons qu'un cabinet de courtage doit être plus qu'un intermédiaire financier : il doit être un acteur responsable, transparent et engagé pour la société. Notre démarche ESG (Environnement, Social, Gouvernance) est conçue pour refléter nos valeurs, répondre aux attentes de nos clients et partenaires, et contribuer au développement durable du Maroc.",
      },
      governance: {
        kicker: "Gouvernance",
        title: "🔹 Gouvernance responsable",
        integrity: {
          title: "Intégrité et transparence",
          item1:
            "Relations transparentes avec clients, partenaires et régulateurs (ACAPS)",
          item2: "Respect strict des règles du marché",
          item3: "Communication claire et honnête sur nos pratiques",
        },
        ethics: {
          title: "Déontologie et indépendance",
          item1: "Gestion rigoureuse des conflits d'intérêt",
          item2: "Indépendance dans nos conseils et recommandations",
          item3: "Code de conduite strict appliqué par tous",
        },
        structure: {
          title: "Gouvernance claire",
          item1: "Décisions structurées et documentées",
          item2: "Processus proportionnés à notre taille",
          item3: "Alignement avec les meilleures pratiques du secteur",
        },
      },
      social: {
        kicker: "Social",
        title: "🔹 Engagement social",
        diversity: {
          title: "Égalité des chances et diversité",
          item1: "Recrutements basés sur les talents sans discrimination",
          item2: "Égalité de genre, d'origine et de parcours",
          item3: "Promotion de la diversité à tous les niveaux",
        },
        development: {
          title: "Développement des compétences",
          item1: "Plan de formation continue pour chaque collaborateur",
          item2: "Formation technique et développement personnel",
          item3: "Accompagnement dans l'évolution de carrière",
        },
        wellbeing: {
          title: "Bien-être au travail",
          item1: "Environnement respectueux et collaboratif",
          item2: "Équilibre vie professionnelle - vie personnelle",
          item3: "Conditions de travail favorisant l'épanouissement",
        },
        impact: {
          title: "Impact sociétal",
          item1: "Assurance inclusive pour PME et agriculteurs",
          item2: "Solutions innovantes face aux aléas climatiques",
          item3: "Partenariats associatifs et soutien à l'éducation",
        },
      },
      environment: {
        kicker: "Environnement",
        title: "🔹 Respect de l'environnement",
        energy: {
          title: "Sobriété énergétique et numérique",
          item1: "Réduction des consommations dans nos bureaux",
          item2: "Outils digitaux responsables",
          item3: "Optimisation de l'éclairage et climatisation",
        },
        mobility: {
          title: "Mobilité raisonnée",
          item1: "Limitation des déplacements inutiles",
          item2: "Recours privilégié à la visioconférence",
          item3: "Encouragement de la mobilité douce",
        },
        waste: {
          title: "Gestes simples, impacts concrets",
          item1: "Optimisation de l'usage du papier",
          item2: "Réduction et tri des déchets",
          item3: "Économies d'eau et d'électricité",
        },
      },
      procurement: {
        kicker: "Achats Responsables",
        title: "🔹 Achats responsables",
        local: {
          title: "Priorité au local",
          item1: "Privilégier les fournisseurs locaux",
          item2: "Soutien aux PME marocaines",
          item3: "Contribution au développement économique régional",
        },
        ethics: {
          title: "Critères éthiques",
          item1: "Intégration de critères éthiques dans nos choix",
          item2: "Soutien à l'économie sociale et solidaire",
          item3: "Évaluation de l'impact social de nos prestataires",
        },
      },
      vision: {
        title: "Notre ambition",
        content:
          "Avec cette démarche, Riskalia se positionne comme un courtier engagé, ancré dans son territoire et tourné vers l'avenir. Notre ambition est simple : accompagner nos clients tout en créant un impact positif et durable pour nos collaborateurs, nos partenaires et la société.",
      },
      contact: {
        title: "Rejoignez notre démarche ESG",
        subtitle:
          "Découvrez comment nous pouvons collaborer pour un avenir plus durable",
      },
    },
    search: {
      noResults: "Aucun résultat trouvé",
    },
    chatbot: {
      title: "Assistant Riskalia",
      subtitle: "Expert en assurance & réassurance",
      welcome:
        "Bonjour ! Je suis votre assistant Riskalia. Comment puis-je vous aider avec vos besoins en assurance ou réassurance ?",
      now: "Maintenant",
      inputPlaceholder: "Tapez votre message...",
      typing: "Riskalia tape...",
      quick: {
        assurance: "Assurance",
        reassurance: "Réassurance",
        climate: "Risques Climatiques",
        contact: "Contact",
      },
    },
    // Multirisques page specific translations
    multirisques: {
      title: "Multirisques Entreprise",
      subtitle:
        "Biens & Pertes d'exploitation • Incendie & dégâts des eaux • Vol & bris de machines • Événements climatiques & CatNat • Ingénierie de risque & prévention.",
      badges: [
        "Bâtiments, stocks, équipements",
        "Pertes d'exploitation (PDB)",
        "Prévention & conformité",
      ],
      tabs: {
        over: "Aperçu",
        cov: "Couvertures",
        opt: "Options & prévention",
        admin: "Tarification & mise en place",
        claim: "Sinistres",
        faq: "FAQ",
      },
      over: {
        t: "1. Aperçu",
        p: "Le contrat multirisques entreprise protège vos bâtiments, contenus et responsabilités indirectes via la perte d'exploitation (PDB). Nous combinons placement compétitif, ingénierie de risque, et calibrage des franchises/limites pour équilibrer protection et budget.",
        li: [
          "Cartographie des sites & expositions (incendie, eau, vol, météo).",
          "Paramétrage PDB : marge brute, période d'indemnisation (12–24–36 mois).",
          "Prévention pragmatique : détection, compartimentage, maintenance.",
        ],
        kpi: ["Capacité", "Période BI", "Ingénierie"],
        kpi_desc: [
          "Jusqu'à la capacité marché",
          "12–36 mois",
          "Visites & recommandations",
        ],
      },
      cov: {
        t: "2. Couvertures principales",
        c0: {
          t: "Biens",
          li: [
            "Incendie, explosion, foudre, fumées.",
            "Dégâts des eaux, tempête/grêle/inondation, CatNat.",
            "Vol, vandalisme, bris de glaces et enseignes.",
          ],
        },
        c1: {
          t: "Pertes d'exploitation (PDB)",
          li: [
            "Marge brute, frais supplémentaires d'exploitation.",
            "Période d'indemnisation 12–36 mois.",
            "Dommages de fournisseurs/clients (contingent BI).",
          ],
        },
        c2: {
          t: "Machines & utilités",
          li: [
            "Bris de machines & électroniques.",
            "Pannes utilités (énergie, vapeur, froid) selon options.",
            "Frais de remise en conformité (codes, normes).",
          ],
        },
      },
      opt: {
        t: "3. Options & prévention",
        c0: {
          t: "Climat & CatNat",
          li: [
            "Extensions tempête, grêle, inondation, submersion.",
            "Franchises différenciées par site & exposition.",
            "Couvertures paramétriques météo (en option).",
          ],
        },
        c1: {
          t: "Prévention & ingénierie",
          li: [
            "Audits sites, thermographie, essais sprinkler.",
            "Plan d'actions priorisé & suivi trimestriel.",
            "Guides continuité d'activité (BCP) & scénarios.",
          ],
        },
        c2: {
          t: "Paramètres de police",
          li: [
            "Sommes assurées & indexation, valeur à neuf.",
            "Sous-limites : marchandises réfrigérées, archives, données.",
            "Clauses de coassurance & stop-loss selon profil.",
          ],
        },
      },
      admin: {
        t: "4. Tarification & mise en place",
        c0: {
          t: "Données requises",
          li: [
            "Liste des sites : adresse, activité, construction, protections.",
            "Sommes assurées par rubrique (bâtiments, contenu, stocks).",
            "Marge brute & période BI souhaitée.",
            "Sinistralité 5 ans (fréquence & sévérité).",
          ],
        },
        c1: {
          t: "Processus",
          li: [
            "Pré-audit & recommandation de limites/franchises.",
            "Mise en concurrence & négociation des clauses clés.",
            "Binders, attestations et calendrier prévention.",
          ],
        },
        c2: {
          t: "Documents utiles",
          li: [
            "Plans & schémas de procédés, nomenclature machines.",
            "Rapports maintenance & conformité (sprinklers, élec.).",
            "Plan de continuité (BCP) & procédures d'urgence.",
          ],
        },
      },
      claim: {
        t: "5. Gestion des sinistres",
        sum: "Notre approche",
        li: [
          "Cellule d'urgence 24/7, mesures conservatoires & experts agréés.",
          "Estimation rapide BI & avances si prévu.",
          "Reporting & retour d'expérience pour réduire la récidive.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Comment fixer la période d'indemnisation BI ?",
        a0: "Selon les cycles d'approvisionnement, de production et de ventes. Beaucoup d'industries nécessitent 18–24 mois.",
        q1: "Paramétriques climatiques ou garanties classiques ?",
        a1: "Les paramétriques déclenchent sur un indice (pluie, vent…). Ils complètent utilement les garanties dommages/PDB pour réduire les délais.",
        q2: "Quelle valeur assurer (neuf, vétusté, valeur déclarée) ?",
        a2: "La valeur à neuf limite la sous-assurance mais peut coûter plus. Nous calibrons au cas par cas avec des évaluations.",
      },
      cta: {
        t: "Sécurisons vos actifs et votre continuité",
        p: "Nous calibrons Biens & PDB, les options climat et un plan de prévention pragmatique.",
        quote: "Obtenir un devis",
        talk: "Parler à un conseiller",
      },
      nav: {
        prev: "Santé collective & Prévoyance",
        next: "Transport (marchandises)",
      },
    },
    // Transport page specific translations
    transport: {
      title: "Transport (marchandises)",
      subtitle:
        "Tous risques facultés • RC transporteur/commissionnaire • Stock Throughput • War & SRCC • Conseils Incoterms • Options température & paramétriques météo.",
      badges: [
        "Maritime • Aérien • Route • Rail",
        "Flux import/export & domestiques",
        "Traçabilité & prévention emballage",
      ],
      tabs: {
        over: "Aperçu",
        cov: "Couvertures",
        opt: "Options & services",
        admin: "Tarification & mise en place",
        claim: "Sinistres",
        faq: "FAQ",
      },
      over: {
        t: "1. Aperçu",
        p: "Nous protégeons vos flux import/export et domestiques sur tous modes (mer, air, route, rail). La police cargo couvre les facultés (marchandises), la responsabilité des transporteurs/commissionnaires et, si besoin, un Stock Throughput (STP) continu entre sites, dépôts et transit.",
        li: [
          "Analyse des Incoterms pour clarifier le transfert de risques.",
          "Paramétrage des limites par expédition, véhicule, navire ou site.",
          "Conseils emballage, arrimage & traçabilité pour réduire la casse.",
        ],
        kpi: ["Modes", "Forme", "Déclaration"],
        kpi_desc: [
          "Mer • Air • Route • Rail",
          "Police ouverte annuelle",
          "Mensuelle / par envoi",
        ],
      },
      cov: {
        t: "2. Couvertures principales",
        c0: {
          t: "Facultés (cargo) — All Risks",
          li: [
            "Couvertures type ICC (A/B/C) selon profils & valeurs.",
            "Marchandises générales, vrac, conteneur, projets.",
            "Extensions : War & SRCC lorsque disponible.",
          ],
        },
        c1: {
          t: "RC transporteur / commissionnaire",
          li: [
            "Responsabilités légales du transport, stockage & manutention.",
            "Limites par événement / véhicule / privilège de limitation.",
            "Contrats & conditions standard gérés avec nos équipes.",
          ],
        },
        c2: {
          t: "Stock Throughput (STP)",
          li: [
            "Chaîne continue : origine → transit → dépôts → distribution.",
            "Pics saisonniers & valeurs cumulées par site.",
            "Paramètres température & rupture de chaîne du froid (option).",
          ],
        },
      },
      opt: {
        t: "3. Options & services",
        c0: {
          t: "Température & denrées sensibles",
          li: [
            "Clauses température / enregistreurs & IoT.",
            "Déviations froid/chaud & frais de sauvetage.",
            "Emballage & procédures HACCP.",
          ],
        },
        c1: {
          t: "Paramétriques météo & projet",
          li: [
            "Typhon, pluie extrême, vent — déclenchement rapide.",
            "Project cargo & heavy-lift : survey & escortes.",
            "Plans de route & escales à risques.",
          ],
        },
        c2: {
          t: "Sécurité & prévention",
          li: [
            "Itinéraires sécurisés, parkings agréés, double équipage.",
            "Scellés & géolocalisation, contrôle des sous-traitants.",
            "Audit emballage & arrimage (CTU Code).",
          ],
        },
      },
      admin: {
        t: "4. Tarification & mise en place",
        c0: {
          t: "Données requises",
          li: [
            "Flux par mode, origines/destinations, valeurs par envoi.",
            "Incoterms, emballages, fréquences & pics saisonniers.",
            "Sinistralité 3–5 ans & procédures de sûreté.",
          ],
        },
        c1: {
          t: "Processus",
          li: [
            "Police ouverte annuelle + déclarations (EDI possible).",
            "Certificats cargo pour lettres de crédit si besoin.",
            "Paramétrage des limites véhicules/navires/sites.",
          ],
        },
        c2: {
          t: "Documents utiles",
          li: [
            "B/L, AWB, CMR, listes de colisage & preuves d'emballage.",
            "Rapports de température / traceurs.",
            "Contrats transport & consignes aux transitaires.",
          ],
        },
      },
      claim: {
        t: "5. Gestion des sinistres",
        sum: "Notre approche",
        li: [
          "Instructions d'urgence : réserves, survey, sauvegarde des preuves.",
          "Lettre de protestation au transporteur dans les délais.",
          "Process digital & SLA de règlement accéléré.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Quand le risque passe-t-il avec les Incoterms ?",
        a0: "Selon l'Incoterm choisi (EXW, FOB, CIF, DDP…). Nous vérifions vos contrats pour aligner transfert des risques et police.",
        q1: "Les biens d'occasion sont-ils couverts ?",
        a1: "Oui sous conditions (état, emballage, test), parfois avec franchises/clauses spécifiques.",
        q2: "Les retards sont-ils indemnisés ?",
        a2: "Généralement non en dommage classique ; des solutions paramétriques peuvent compléter sur des seuils météo.",
      },
      cta: {
        t: "Sécurisons votre supply chain",
        p: "Nous calibrons vos couvertures cargo, RC & STP avec des options adaptées aux routes et marchandises.",
        quote: "Obtenir un devis",
        talk: "Parler à un conseiller",
      },
      nav: {
        prev: "Multirisques Entreprise",
        next: "Automobile & Flotte",
      },
    },

    // Flotte page specific translations
    flotte: {
      title: "Automobile & Flotte",
      subtitle:
        "RC auto • Dommages (tous risques/tiers) • Bris de glace • Vol & incendie • Conducteur & passagers • Assistance & véhicule de remplacement • Télématique & prévention.",
      badges: [
        "VL / VP / PL & engins",
        "Télématique & data",
        "Gestion sinistres 24/7",
      ],
      tabs: {
        over: "Aperçu",
        cov: "Couvertures",
        opt: "Options & services",
        admin: "Tarification & mise en place",
        claim: "Sinistres",
        faq: "FAQ",
      },
      over: {
        t: "1. Aperçu",
        p: "Des programmes flotte auto pour véhicules légers (VL/VP), poids lourds (PL) et engins. Structure tiers / tous risques, franchises adaptées, car policy et prévention pour réduire la sinistralité. Pilotage par télématique et réseau de garages agréés.",
        li: [
          "Tarification flotte (bonus-malus agrégé, SRCC/EVN selon marché).",
          "Car policy : conducteurs, usages, zones et horaires.",
          "Tableaux de bord : fréquence, gravité, coûts & immobilisation.",
        ],
        kpi: ["Taille de flotte", "Orientation garage", "Télématique"],
        kpi_desc: [
          "5 – 5 000+ véhicules",
          "< 48 h",
          "Boîtiers / app conducteur",
        ],
      },
      cov: {
        t: "2. Couvertures principales",
        c0: {
          t: "Responsabilité civile & défense",
          li: [
            "RC obligatoire : dommages corporels et matériels aux tiers.",
            "Défense/recours & protection juridique (option).",
            "Conducteurs nommés / tous conducteurs.",
          ],
        },
        c1: {
          t: "Dommages au véhicule",
          li: [
            "Tous risques / Tiers étendu (collision, vandalisme, EVN).",
            "Vol & incendie, bris de glace (pare-brise, optiques, capteurs).",
            "Valeur à neuf / valeur agréée selon l'âge.",
          ],
        },
        c2: {
          t: "Personnes & assistance",
          li: [
            "Individuelle conducteur & passagers.",
            "Assistance 24/7, remorquage, véhicule de remplacement.",
            "Étendue géographique (pays/UE) & carte verte.",
          ],
        },
      },
      opt: {
        t: "3. Options & services",
        c0: {
          t: "Télématique & prévention",
          li: [
            "Scoring conducteur, éco-conduite, alertes vitesse & fatigue.",
            "Géofencing, vol/immobilisation, récupération.",
            "Coaching & formations ciblées.",
          ],
        },
        c1: {
          t: "Réseau & pièces",
          li: [
            "Garages agréés, pièces d'origine ou équivalents qualité.",
            "Contrôle devis/factures & délais.",
            "Service mobile bris de glace.",
          ],
        },
        c2: {
          t: "Financier & équipements",
          li: [
            "Perte financière / GAP (LOA/LLD).",
            "Aménagements & équipements (benne, frigo, gyro…).",
            "Extensions conducteurs jeunes/occasionnels.",
          ],
        },
      },
      admin: {
        t: "4. Tarification & mise en place",
        c0: {
          t: "Données requises",
          li: [
            "Parc (immat., marque/modèle, énergie, âge, valeur).",
            "Usages & zones (pro/pre, urbain/route), km/an.",
            "Sinistres 3–5 ans (fréquence, coûts, responsabilités).",
          ],
        },
        c1: {
          t: "Processus",
          li: [
            "Police flotte (ajouts/retraits) & cartes vertes.",
            "Paramétrage franchises & car policy.",
            "Déploiement télématique & reporting.",
          ],
        },
        c2: {
          t: "Documents utiles",
          li: [
            "Cartes grises & permis.",
            "Constats amiables, photos, PV police.",
            "Devis/ factures & ordres de mission.",
          ],
        },
      },
      claim: {
        t: "5. Gestion des sinistres",
        sum: "Notre approche",
        li: [
          "Déclaration digitale ou via courtier — prise en charge immédiate.",
          "Orientation réseau & expertise rapide, pièces contrôlées.",
          "Recours tiers & suivi immobilisation jusqu'à restitution.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Jeunes conducteurs : conditions ?",
        a0: "Couvertures possibles avec franchises/conditions spécifiques selon car policy et usage.",
        q1: "Bris de glace sans franchise ?",
        a1: "Oui sur certains niveaux, avec réseau agréé et service mobile.",
        q2: "Véhicule de remplacement garanti ?",
        a2: "Selon formule (pannes/sinistres), durée et catégorie à définir au contrat.",
      },
      cta: {
        t: "Optimisons votre flotte",
        p: "Couvertures & franchises adaptées, réseau efficace et télématique pour moins d'accidents et d'immobilisation.",
        quote: "Obtenir un devis",
        talk: "Parler à un conseiller",
      },
      nav: {
        prev: "Transport (marchandises)",
        next: "Responsabilité Civile",
      },
    },
    rc: {
      title: "Responsabilité Civile",
      subtitle:
        "GL (Exploitation & Après livraison) • PI (Responsabilité Professionnelle) • Produits & rappel • Environnement & pollution. Structuration des limites, options contractuelles & internationales, attestations, gestion des sinistres.",
      badges: [
        "GL & Après livraison",
        "PI / Professionnelle",
        "Environnement & pollution",
      ],
      tabs: {
        over: "Aperçu",
        cov: "Couvertures",
        opt: "Options & structure",
        admin: "International & attestations",
        claim: "Sinistres",
        faq: "FAQ",
      },
      over: {
        t: "1. Aperçu",
        p: "La RC protège contre les dommages corporels, matériels et pertes financières causés à des tiers pendant l'exploitation ou du fait de vos produits/prestations. Un programme calibré rassure vos donneurs d'ordre et répond aux clauses contractuelles.",
        li: [
          "GL : exploitation & après livraison (completed ops).",
          "PI : erreurs/omissions, défense & intérêts.",
          "Produits & rappel, pollution & environnement.",
        ],
        kpi: ["Contrats", "Territoires", "Pilotage"],
        kpi0: "Contrats",
        kpi0l: "Clauses clients & bailleurs",
        kpi1: "Territoires",
        kpi1l: "Local & international",
        kpi2: "Pilotage",
        kpi2l: "Fréquence / sévérité / coût",
      },
      cov: {
        t: "2. Couvertures principales",
        c0: {
          t: "RC Générale (GL)",
          li: [
            "Atteintes corporelles & matérielles à des tiers.",
            "Après livraison / achèvement, locatifs, recours voisins.",
            "Immatériels consécutifs.",
          ],
        },
        c1: {
          t: "RC Professionnelle (PI)",
          li: [
            "Fautes, erreurs ou omissions.",
            "Frais de défense, expertises.",
            "Sous-/co-traitance (selon conditions).",
          ],
        },
        c2: {
          t: "Produits & rappel",
          li: [
            "Dommages causés par produits livrés.",
            "Retrait/rappel, communication de crise.",
            "USA/Canada en option.",
          ],
        },
        c3: {
          t: "Environnement & pollution",
          li: [
            "Pollution soudaine/accidentelle (et parfois graduelle).",
            "Frais de dépollution & biodiversité.",
            "Sites, chantiers, transport.",
          ],
        },
        note: 'Forme "occurrence" ou "claims-made" selon la ligne. Limites, franchises et juridictions ajustables.',
      },
      opt: {
        t: "3. Options & structure",
        c0: {
          t: "Contractuelles",
          li: [
            "Additional insured, waiver of subrogation, severability.",
            "Juridictions élargies, USA/Canada sous conditions.",
            "Clauses spécifiques secteurs (agro/pharma, énergie…).",
          ],
        },
        c1: {
          t: "Limites & capacités",
          li: [
            "Primaire + excédents (umbrella).",
            "Franchises, SIR, stop-loss.",
            "Coassurance & placements multi-marchés.",
          ],
        },
        c2: {
          t: "Prévention & pilotage",
          li: [
            "Revue clauses RC dans vos contrats.",
            "Plans d'action : procédures, LOTO, essais.",
            "KPI : fréquence, sévérité, coûts moyens.",
          ],
        },
      },
      admin: {
        t: "4. International & attestations",
        c0: {
          t: "Programmes internationaux",
          li: [
            "Master + polices locales (DIC/DIL).",
            "Conformité fiscale & réglementaire.",
            "Certificats & sinistres transfrontaliers.",
          ],
        },
        c1: {
          t: "Attestations",
          li: [
            "Multi-langues, formats clients/bailleurs.",
            "Suivi renouvellements & versions.",
            "Portails & centralisation.",
          ],
        },
        c2: {
          t: "Données & reporting",
          li: [
            "Tableaux de bord et tendances.",
            "Revue trimestrielle du programme.",
            "Arbitrages de structure.",
          ],
        },
      },
      claim: {
        t: "5. Gestion des sinistres",
        sum: "De la mise en cause à la résolution",
        li: [
          "Assistance réserves & préservation des preuves.",
          "Experts & avocats spécialisés.",
          "Médiation/transaction & RETEX.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: 'Occurrence vs "claims-made" ?',
        a0: "Occurrence couvre les faits survenus pendant la période. Claims-made couvre les réclamations reçues pendant la période (avec date rétroactive).",
        q1: "USA/Canada inclus ?",
        a1: "Souvent exclus d'office ; extensions et ajustements de limites possibles après analyse du risque.",
        q2: "PI : pénalités contractuelles couvertes ?",
        a2: "La plupart des amendes/astreintes ne sont pas assurables ; on renforce la prévention contractuelle et les clauses de limitation.",
      },
      cta: {
        quote: "Obtenir un devis",
        talk: "Parler à un conseiller",
      },
      nav: {
        prev: "Automobile & Flotte",
        next: "Construction (CAR/EAR)",
      },
    },
    construction: {
      title: "Construction (CAR/EAR)",
      subtitle:
        "Tous risques chantier • RC chantier • Montage & essais • Maintenance • ALoP/DSU (perte d'exploitation chantier) • Engins & biens de chantier.",
      badges: [
        "Maître d'ouvrage / EPC / Entreprises",
        "Projets énergie & infrastructures",
        "Wordings LMA/IUA",
      ],
      tabs: {
        over: "Aperçu",
        cov: "Couvertures",
        opt: "Options & DSU",
        req: "Documents",
        claim: "Sinistres",
        faq: "FAQ",
      },
      over: {
        t: "1. Aperçu",
        p: "Les polices CAR (Contractors' All Risks) et EAR (Erection All Risks) couvrent les dommages matériels aux travaux ainsi que la responsabilité civile chantier durant la construction, les essais et la maintenance. Elles s'adressent aux maîtres d'ouvrage, EPC/entreprises, sous-traitants et ingénieries.",
        li: [
          "Projets bâtiment, génie civil, énergie & industrie.",
          "Phases : chantier → essais → maintenance.",
          "Possibilité DSU/ALoP : pertes de marge dues à un retard d'ouverture.",
        ],
        kpi: ["Ligne RC", "Franchises", "Forme"],
      },
      cov: {
        t: "2. Couvertures de base",
        c0: {
          t: "Dommages aux travaux",
          li: [
            "Incendie, explosion, tempête, inondation, vol/effraction.",
            "Erreurs de construction, effondrement, glissement.",
            "Biens existants et avoisinants (selon sous-limites).",
          ],
        },
        c1: {
          t: "Responsabilité civile chantier",
          li: [
            "Dommages corporels & matériels aux tiers.",
            "Défense & recours, frais de justice.",
            "Cross-liability / renonciation à recours (si stipulé).",
          ],
        },
        c2: {
          t: "Biens & frais associés",
          li: [
            "Biens de chantier, baraques, entrepôts temporaires.",
            "Frais de déblai/démolition, prévention & sauvetage.",
            "Engins & matériel de chantier (CPM option).",
          ],
        },
      },
      opt: {
        t: "3. Options, extensions & DSU/ALoP",
        c0: {
          t: "Montage, essais & maintenance",
          li: [
            "Essais à chaud / à froid, dommages pendant la mise en service.",
            "Maintenance visite (12 mois) ou étendue (jusqu'à 24 mois).",
            "Faute professionnelle de conception (DE5/LEG — si prévu).",
          ],
        },
        c1: {
          t: "DSU / ALoP (retard d'ouverture)",
          li: [
            "Couvre la marge brute perdue due à un sinistre matériel garanti.",
            "Paramètres : période d'indemnisation, carence, profil de revenus.",
            "Données requises : planning, chemin critique, contrats O&M.",
          ],
        },
        c2: {
          t: "Autres extensions fréquentes",
          li: [
            "Stockage hors site & transit intérieur (marine inland).",
            "Biens avoisinants / existants, interférences de services.",
            "Clauses pollution accidentelle & nuisances (selon projet).",
          ],
        },
      },
      req: {
        t: "4. Documents & paramètres de souscription",
        c0: {
          t: "Données projet",
          li: [
            "Description & valeur du projet (VRT), calendrier, Gantt/chemin critique.",
            "Plans/méthodes, géotechnique, étude risques (QRA si applicable).",
            "Répartition MOA/EPC/lotissements, CCAP & contrats majeurs.",
          ],
        },
        c1: {
          t: "Paramètres de police",
          li: [
            "Limites, sous-limites, franchises par péril/activité.",
            "Périodes chantier, essais, maintenance & DSU.",
            "Forme PCIP (MOA) ou CCIP (contractor) selon gouvernance.",
          ],
        },
      },
      claim: {
        t: "5. Gestion des sinistres",
        sum: "Notre approche",
        li: [
          "Notification immédiate, mesures conservatoires & sécurisation site.",
          "Désignation experts, collecte preuves & suivi réparations.",
          "Cash-calls possibles, reporting & arbitrages si nécessaire.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "CAR vs EAR : quelle différence ?",
        a0: "CAR vise souvent le génie civil/bâtiment ; EAR s'applique aux montages/équipements industriels. Les principes de garanties sont proches.",
        q1: "Comment dimensionner la DSU/ALoP ?",
        a1: "Sur la marge brute attendue pendant la période d'indemnisation, avec carence et plafonds. Le planning et le chemin critique sont clés.",
        q2: "Qui doit être assuré ?",
        a2: "MOA, EPC/entreprises, sous-traitants, ingénieurs — avec renonciations croisées selon wording pour éviter les trous de couverture.",
      },
      cta: {
        t: "Parlez-nous de votre projet",
        p: "Nous préparons une note de présentation, un wording CAR/EAR et un calendrier marché.",
        quote: "Obtenir un devis",
        talk: "Parler à un conseiller",
      },
      nav: {
        prev: "Responsabilité Civile",
        next: "Santé collective & Prévoyance",
      },
    },
    santecollective: {
      title: "Santé collective & Prévoyance",
      subtitle:
        "Soins courants & hospitalisation • Dentaire & optique • Maternité • Vie / Décès, invalidité & accidents • Réseaux & tiers payant • Prévention & bien-être.",
      badges: [
        "PME à grands comptes",
        "Réseaux de soins & TPA",
        "Conformité locale",
      ],
      tabs: {
        over: "Aperçu",
        cov: "Couvertures",
        opt: "Options & réseaux",
        admin: "Tarification & mise en place",
        claim: "Sinistres",
        faq: "FAQ",
      },
      over: {
        t: "1. Aperçu",
        p: "Des programmes <strong>santé & prévoyance</strong> modulaires pour attirer et fidéliser : soins courants, hospitalisation et maternité, dentaire/optique, ainsi que <strong>vie/décès, invalidité, accidents</strong> et maladies graves. Gouvernance claire, <em>réseaux & tiers payant</em>, et pilotage des coûts.",
        li: [
          "Conception du plan : niveaux, plafonds, co-pays, franchises.",
          "Réseaux partenaires & gestion TPA pour remboursements rapides.",
          "Prévention & bien-être : bilans, vaccinations, santé mentale.",
        ],
        kpi: {
          0: "Population",
          1: "SLA remboursements",
          2: "Réseau",
        },
      },
      cov: {
        t: "2. Couvertures principales",
        c0: {
          t: "Santé (médical)",
          li: [
            "Soins ambulatoires, spécialistes & analyses.",
            "Hospitalisation & maternité (plafonds & carences).",
            "Optique & dentaire (barèmes, prothèses, orthodontie).",
          ],
        },
        c1: {
          t: "Prévoyance (risk benefits)",
          li: [
            "Vie/décès (capital, rente éducation).",
            "Invalidité (temporaire/perm., IPP/ITP).",
            "Accidents & maladies graves (CI).",
          ],
        },
        c2: {
          t: "Services",
          li: [
            "Réseaux tiers payant & TPA.",
            "Télé-médecine & EAP (assistance psycho-sociale).",
            "Évacuation & rapatriement (selon zones).",
          ],
        },
      },
      opt: {
        t: "3. Options & réseaux",
        c0: {
          t: "Réseaux & tiers payant",
          li: [
            "Cartes d'accès & applis partenaires.",
            "Accords tarifaires cliniques, dentistes & opticiens.",
            "Parcours hors réseau (remboursement au barème).",
          ],
        },
        c1: {
          t: "Expatriés & zones",
          li: [
            "Covers régionaux/monde, assistance internationale.",
            "Coordination sécurité sociale locale.",
            "Options maternité/CI spécifiques.",
          ],
        },
        c2: {
          t: "Pilotage & prévention",
          li: [
            "Tableaux de bord : sinistres & ratio (LR).",
            "Programmes bien-être & dépistage.",
            "Stop-loss/ASO (si auto-assuré).",
          ],
        },
      },
      admin: {
        t: "4. Tarification & mise en place",
        c0: {
          t: "Données requises (cotation)",
          li: [
            "Census anonymisé (âge/genre, ayants droit, effectifs).",
            "Historique sinistres 24–36 mois & ratio.",
            "Design du plan & budget cible.",
          ],
        },
        c1: {
          t: "Paramètres de plan",
          li: [
            "Plafonds, co-pays, franchises, carences.",
            "Eligibilité, périodes d'attente & portabilité.",
            "Contributif employeur/salarié & classes.",
          ],
        },
        c2: {
          t: "Administration & services",
          li: [
            "Onboarding, cartes & appli assurés.",
            "Télétransmission & e-réclamations.",
            "Comités trimestriels & actions de maîtrise.",
          ],
        },
      },
      claim: {
        t: "5. Gestion des sinistres",
        sum: "Notre approche",
        li: [
          "TPA & réseau : tiers payant prioritaire.",
          "Remboursements digitaux & SLA < 5–7 jours.",
          "Revues LR & mesures anti-surconsommation.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Prise en charge des antécédents ?",
        a0: "Au cas par cas selon assureur, taille & historique. Des clauses MHD/FMU peuvent s'appliquer.",
        q1: "Couverture hors réseau / à l'étranger ?",
        a1: "Possible avec barèmes & plafonds dédiés. Expatriés : zones et assistance à calibrer.",
        q2: "Délais de remboursement ?",
        a2: "Avec e-réclamations complètes, le SLA cible est de 5 à 7 jours ouvrés.",
      },
      cta: {
        t: "Construisons votre plan salariés",
        p: "Nous cadrons le design, les réseaux et le budget avec un calendrier de mise en place.",
        quote: "Obtenir un devis",
        talk: "Parler à un conseiller",
      },
      nav: {
        prev: "Construction (CAR/EAR)",
        next: "Multirisques Entreprise",
      },
    },
    sante: {
      title: "Santé (Particuliers)",
      subtitle:
        "Soins courants • Hospitalisation & maternité • Dentaire & optique • Télé-médecine • Réseaux & tiers payant • Formules adaptées au budget.",
      badges: [
        "Réseaux & tiers payant",
        "Formules modulaires",
        "Options dentaire/optique",
      ],
      tabs: {
        over: "Aperçu",
        cov: "Garanties",
        opt: "Options & réseaux",
        admin: "Tarifs & souscription",
        claim: "Sinistres",
        faq: "FAQ",
      },
      over: {
        t: "1. Aperçu",
        p: "Une assurance <strong>santé individuelle</strong> claire et modulable : soins de ville, hospitalisation et maternité, dentaire/optique, avec <em>réseaux & tiers payant</em> et télé-médecine. Des niveaux de couverture adaptés à votre budget et à votre situation familiale.",
        li: [
          "Formules progressives (Essentielle → Confort → Premium).",
          "Accès réseau : paiement direct chez partenaires (selon plan).",
          "Services digitaux : e-carte, appli, e-réclamations.",
        ],
        kpi: {
          0: "Délai de carence",
          1: "SLA remboursements",
          2: "Famille",
        },
      },
      cov: {
        t: "2. Garanties principales",
        c0: {
          t: "Soins courants (ambulatoires)",
          li: [
            "Médecins généralistes & spécialistes.",
            "Analyses, imagerie, pharmacie.",
            "Télé-médecine (selon plan).",
          ],
        },
        c1: {
          t: "Hospitalisation & maternité",
          li: [
            "Frais d'hospitalisation & chambre.",
            "Actes chirurgicaux & anesthésie.",
            "Maternité (plafonds & carences).",
          ],
        },
        c2: {
          t: "Dentaire & optique",
          li: [
            "Soins & prothèses dentaires.",
            "Optique : verres, montures, lentilles.",
            "Orthodontie (selon plan).",
          ],
        },
      },
      opt: {
        t: "3. Options & réseaux",
        c0: {
          t: "Réseaux & tiers payant",
          li: [
            "Cliniques, laboratoires & pharmacies partenaires.",
            "E-carte & prise en charge directe.",
            "Hors réseau possible (remboursement barémé).",
          ],
        },
        c1: {
          t: "International & voyage",
          li: [
            "Extensions temporaires hors pays.",
            "Assistance médicale & rapatriement.",
            "Coordination assurance voyage.",
          ],
        },
        c2: {
          t: "Famille & prévention",
          li: [
            "Conjoint & enfants, naissance/ajout simple.",
            "Bilans de santé & vaccination.",
            "Soutien santé mentale (EAP).",
          ],
        },
      },
      admin: {
        t: "4. Tarifs & souscription",
        c0: {
          t: "Comment est fixé le tarif ?",
          li: [
            "Âge, situation familiale, zone de soins.",
            "Niveau de garanties & franchises.",
            "Options (dentaire/optique, maternité…).",
          ],
        },
        c1: {
          t: "Souscription",
          li: [
            "Questionnaire médical simplifié (selon plan).",
            "Délais de carence éventuels.",
            "Date d'effet & e-carte immédiate.",
          ],
        },
        c2: {
          t: "Documents utiles",
          li: [
            "Pièce d'identité & RIB (si prélèvement).",
            "Justificatifs famille (si ayants droit).",
            "Attestations pour employeur/visa si besoin.",
          ],
        },
      },
      claim: {
        t: "5. Remboursements & prises en charge",
        sum: "Notre approche",
        li: [
          "Réseau & tiers payant privilégiés.",
          "E-réclamations & suivi en ligne (5–7 j ouvrés).",
          "Aide à la constitution du dossier si besoin.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Les antécédents sont-ils couverts ?",
        a0: "Selon la formule et l'assureur, des exclusions ou délais spécifiques peuvent s'appliquer. Nous vous guidons.",
        q1: "Y a-t-il des délais de carence ?",
        a1: "Oui, parfois (ex. maternité, dentaire). Ils sont précisés au contrat et varient selon le plan.",
        q2: "Puis-je consulter hors réseau ?",
        a2: "Oui, avec remboursement au barème prévu. Le réseau permet toutefois le tiers payant.",
      },
      cta: {
        t: "Obtenez votre couverture santé",
        p: "Nous comparons les offres et configurons la formule adaptée à vos besoins.",
        quote: "Obtenir un devis",
        talk: "Parler à un conseiller",
      },
      nav: {
        prev: "Retraite",
        next: "Accidents de la vie",
      },
    },
    alv: {
      title: "Accidents de la vie (Particuliers)",
      subtitle:
        "Décès & invalidité par accident • Barème IPP • Frais médicaux d'urgence • Indemnités journalières • Fractures & brûlures • Assistance & éducation • 24/7 monde.",
      badges: [
        "Forfait en cas d'accident",
        "Famille & éducation",
        "Monde 24/7",
      ],
      tabs: {
        over: "Aperçu",
        cov: "Garanties",
        opt: "Options & extensions",
        admin: "Tarifs & souscription",
        claim: "Sinistres",
        faq: "FAQ",
      },
      over: {
        t: "1. Aperçu",
        p: "L'assurance <strong>Accidents de la Vie (ALV)</strong> verse des indemnités en cas de décès ou d'atteinte à l'intégrité physique consécutifs à un accident (vie privée, loisirs, sport…). Des forfaits couvrent également les <em>frais d'urgence</em>, les <em>fractures/brûlures</em>, l'<em>hospitalisation</em> et l'<em>assistance</em>.",
        li: [
          "Couverture 24/7, y compris à l'étranger (selon plan).",
          "Capitaux au choix, barème d'invalidité (IPP) transparent.",
          "Pack famille & option rente éducation.",
        ],
        kpi: {
          0: "Capital décès",
          1: "Invalidité",
          2: "Franchise IJ",
        },
      },
      cov: {
        t: "2. Garanties principales",
        c0: {
          t: "Décès & Invalidité par accident",
          li: [
            "Capital en cas de décès accidentel.",
            "Capital/ rente selon IPP (barème contractuel).",
            "Aménagement du domicile (selon plan).",
          ],
        },
        c1: {
          t: "Frais médicaux & hospitalisation",
          li: [
            "Frais d'urgence (plafonds/an).",
            "Indemnité journalière d'hospitalisation (franchise 24–48 h).",
            "Prothèses/orthèses (selon plan).",
          ],
        },
        c2: {
          t: "Barèmes fractures & brûlures",
          li: [
            "Indemnités selon localisation & gravité.",
            "Chirurgie réparatrice/cosmétique post-accident.",
            "Invalidité permanente partielle/total.",
          ],
        },
        c3: {
          t: "Assistance & éducation",
          li: [
            "Rapatriement, aide à domicile, garde d'enfants.",
            "Rente éducation/ou capital études (option).",
            "Accompagnement social & psychologique.",
          ],
        },
      },
      opt: {
        t: "3. Options & extensions",
        c0: {
          t: "Capitaux & packs",
          li: [
            "Choix de capitaux (décès/invalidité) par tranche.",
            "Pack famille : tous les membres couverts.",
            "Indexation annuelle (optionnelle).",
          ],
        },
        c1: {
          t: "Sports & risques",
          li: [
            "Rachat d'exclusions pour sports à risques (liste).",
            'Extensions "monde +" (séjours longs).',
            "Exclusions usuelles : maladies, actes intentionnels…",
          ],
        },
        c2: {
          t: "Indemnités journalières",
          li: [
            "Montant au choix (franchise 24–48 h).",
            "Plafond jours/an selon plan.",
            "Cumulable avec garanties principales.",
          ],
        },
      },
      admin: {
        t: "4. Tarifs & souscription",
        c0: {
          t: "Comment est fixé le tarif ?",
          li: [
            "Âge et capitaux choisis.",
            "Activités & pratiques sportives déclarées.",
            "Options (IJ, extensions, pack famille).",
          ],
        },
        c1: {
          t: "Souscription",
          li: [
            "Déclaration simple (pas d'examen médical en général).",
            "Effet immédiat à l'adhésion (sous conditions).",
            "Âges limites d'adhésion/maintien précisés au contrat.",
          ],
        },
        c2: {
          t: "Documents utiles",
          li: [
            "Pièce d'identité et coordonnées.",
            "Déclaration d'activités/sports.",
            "RIB si prélèvement.",
          ],
        },
      },
      claim: {
        t: "5. Déclaration & indemnisation",
        sum: "Notre approche",
        li: [
          "Déclaration en ligne sous 5 jours ouvrés après l'accident.",
          "Pièces : rapport médical, factures, formulaire IPP.",
          "Indemnisation sur base barème & capitaux.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Les accidents sportifs sont-ils couverts ?",
        a0: "Oui pour la plupart des sports loisirs. Les sports à risques peuvent nécessiter une extension spécifique.",
        q1: "Et si l'accident implique un tiers ?",
        a1: "L'ALV indemnise indépendamment de la responsabilité d'un tiers. Les recours sont ensuite gérés par l'assureur.",
        q2: "Existe-t-il un délai de carence ?",
        a2: "Généralement non sur l'accident pur ; une franchise temps peut s'appliquer aux indemnités journalières.",
      },
      cta: {
        t: "Protégez votre famille contre les accidents de la vie",
        p: "Nous comparons les offres et configurons les capitaux adaptés à vos besoins.",
        quote: "Obtenir un devis",
        talk: "Parler à un conseiller",
      },
      nav: {
        prev: "Santé",
        next: "Biens (Habitation)",
      },
    },
    habitation: {
      title: "Biens (Habitation)",
      subtitle:
        "Incendie • Vol • Dégâts des eaux • Bris de glace • RC vie privée • Objets de valeur • Protection juridique • Assistance & relogement.",
      badges: [
        "Multirisques habitation",
        "Responsabilité civile",
        "Assistance 24/7",
      ],
      tabs: {
        over: "Aperçu",
        cov: "Garanties",
        opt: "Options",
        risks: "Exclusions",
        claim: "Sinistres & assistance",
        faq: "FAQ",
      },
      over: {
        t: "1. Aperçu",
        p: "L'assurance <strong>Habitation</strong> protège votre logement (maison, appartement) et vos biens contre les sinistres du quotidien tout en couvrant votre <em>responsabilité civile vie privée</em>.",
        li: [
          "Incendie, vol, dégâts des eaux, événements climatiques.",
          "RC : dommages causés à des tiers (vous, enfants, animaux).",
          "Services : assistance, relogement temporaire, dépannage.",
        ],
        kpi: {
          0: "Capital mobilier",
          1: "Franchise",
          2: "Assistance",
        },
      },
      cov: {
        t: "2. Garanties principales",
        c0: {
          t: "Dommages au logement",
          li: [
            "Incendie, explosion, fumées.",
            "Dégâts des eaux & gel.",
            "Événements climatiques (selon conditions).",
          ],
        },
        c1: {
          t: "Vol & vandalisme",
          li: [
            "Effraction, agression, escalade (selon garanties).",
            "Détérioration immobilière lors d'un vol.",
            "Objets de valeur : limites spécifiques.",
          ],
        },
        c2: {
          t: "Responsabilité civile",
          li: [
            "Vie privée (vous, enfants, animaux).",
            "Recours des voisins & des tiers.",
            "Défense & recours (juridique de base).",
          ],
        },
      },
      opt: {
        t: "3. Options & extensions",
        c0: {
          t: "Objets précieux",
          li: [
            "Bijoux, œuvres d'art : garanties dédiées.",
            "Évaluation & preuves d'achat requises.",
          ],
        },
        c1: {
          t: "Bris de glace & électroménager",
          li: [
            "Vitrages, vérandas, installations sanitaires.",
            "Pannes électriques (selon option).",
          ],
        },
        c2: {
          t: "Protection juridique",
          li: [
            "Litiges de voisinage et consommation.",
            "Accompagnement et prise en charge des frais selon plafonds.",
          ],
        },
      },
      risks: {
        t: "4. Principales exclusions (exemples)",
        li: [
          "Usure, vétusté, défaut d'entretien.",
          "Biens professionnels non déclarés.",
          "Vol sans effraction caractérisée (selon contrat).",
          "Événements non assurables (guerre…).",
        ],
        note: "Les conditions, plafonds et franchises varient selon la formule retenue et l'assureur. Le détail figure dans les notices contractuelles.",
      },
      claim: {
        t: "5. Sinistres & assistance",
        sum: "Que faire en cas de sinistre ?",
        li: [
          "Sécurisez les lieux et contactez l'assistance 24/7.",
          "Déclarez sous 5 jours ouvrés (2 jours en cas de vol).",
          "Conservez devis/factures/photos pour l'expert.",
          "Relogement temporaire si logement inhabitable (selon garanties).",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Quelle valeur d'indemnisation ?",
        a0: "Selon option : valeur à neuf, valeur agréée ou valeur d'usage avec coefficient de vétusté.",
        q1: "Les objets connectés sont-ils couverts ?",
        a1: "Oui, au titre du capital mobilier, avec plafonds par objet/ménage. Une facture peut être requise.",
        q2: "Puis-je assurer une résidence secondaire ?",
        a2: "Oui, via une garantie dédiée ou un contrat séparé selon l'assureur et l'usage (saisonnière, location…).",
      },
      cta: {
        t: "Protégez votre foyer en toute simplicité",
        p: "Nous calibrons ensemble capitaux, franchises et options selon votre logement et votre budget.",
        quote: "Obtenir un devis",
        talk: "Parler à un conseiller",
      },
      nav: {
        prev: "Accidents de la vie",
        next: "Assurance-vie & placements",
      },
    },
    vie: {
      title: "Assurance-vie & placements",
      subtitle:
        "Épargne long terme • Transmission • Supports en dirhams & unités de compte • Options de gestion • Rachats & avances • Fiscalité selon cadre.",
      badges: ["Épargne & succession", "Gestion pilotée", "Unités de compte"],
      tabs: {
        over: "Aperçu",
        cov: "Garanties",
        inv: "Supports d'investissement",
        ops: "Options & rachats",
        fees: "Frais & fiscalité",
        faq: "FAQ",
      },
      over: {
        t: "1. Aperçu",
        p: "L'assurance-vie est un cadre souple pour <strong>épargner</strong>, <strong>investir</strong> et <strong>transmettre</strong> dans la durée, via des versements libres ou programmés et un choix de supports.",
        li: [
          "Horizon conseillé : moyen/long terme (5–10 ans+).",
          "Clause bénéficiaire personnalisable (succession).",
          "Arbitrages et options de gestion automatiques.",
        ],
        kpi: {
          0: "Versements",
          1: "Profil",
          2: "Horizon",
          "0l": "libres / programmés",
          "1l": "prudent ↔ dynamique",
        },
      },
      cov: {
        t: "2. Prestations & garanties",
        c0: {
          t: "Décès",
          li: [
            "Capital transmis aux bénéficiaires désignés.",
            "Possibilité de garanties plancher/majorées (selon contrat).",
          ],
        },
        c1: {
          t: "Vie",
          li: [
            "Rachats partiels programmés ou ponctuels.",
            "Avances (prêt adossé au contrat) possibles.",
          ],
        },
        c2: {
          t: "Options de sortie",
          li: [
            "Capital ou rente (selon conditions).",
            "Clauses bénéficiaires démembrées ou à options.",
          ],
        },
      },
      inv: {
        t: "3. Supports d'investissement",
        c0: {
          t: "Support en dirhams",
          li: [
            "Objectif de préservation du capital (hors frais).",
            "Rendement annuel servi par l'assureur.",
          ],
        },
        c1: {
          t: "Unités de compte (UC)",
          li: [
            "Accès à des fonds actions/obligations/immobilier/monétaire…",
            "Risque et rendement variables, capital non garanti.",
          ],
        },
        c2: {
          t: "Gestion",
          li: [
            "Libre ou pilotée (mandats prudent/équilibré/dynamique).",
            "Rééquilibrage automatique, stop-loss, sécurisation des plus-values.",
          ],
        },
      },
      ops: {
        t: "4. Options & rachats",
        li: [
          "Rachats partiels sans clôture du contrat (selon frais/plafonds).",
          "Arbitrages entre supports (frais possibles).",
          "Avances possibles, remboursables, sans désinvestir.",
          "Clause bénéficiaire modulable à tout moment.",
        ],
        note: "Les modalités varient selon l'assureur (planchers, délais, frais, pièces). Nous vous guidons pour optimiser ces options.",
      },
      fees: {
        t: "5. Frais & fiscalité (aperçu)",
        c0: {
          t: "Frais",
          li: [
            "Frais sur versements & gestion du contrat.",
            "Frais de gestion des unités de compte (propres aux fonds).",
            "Frais d'arbitrage selon grille.",
          ],
        },
        c1: {
          t: "Fiscalité",
          li: [
            "Traitement fiscal variable selon le cadre juridique local.",
            "Avantages possibles à long terme et en transmission.",
            "Nous ne rendons pas d'avis fiscal : rapprochez-vous de votre conseil.",
          ],
        },
      },
      faq: {
        t: "6. FAQ",
        q0: "Puis-je changer de profil de gestion ?",
        a0: "Oui, via un arbitrage ou un passage en gestion pilotée. Des frais et délais peuvent s'appliquer.",
        q1: "Les performances passées sont-elles garanties ?",
        a1: "Non. En unités de compte, le capital n'est pas garanti et peut fluctuer à la hausse comme à la baisse.",
        q2: "Comment désigner mes bénéficiaires ?",
        a2: "Par clause libre (personnalisée). Nous vous aidons à la formuler et à la mettre à jour.",
      },
      cta: {
        t: "Donnez du sens à votre épargne",
        p: "Nous ajustons supports, frais et options à votre horizon, votre tolérance au risque et vos objectifs patrimoniaux.",
        quote: "Obtenir un devis",
        talk: "Parler à un conseiller",
      },
      nav: {
        prev: "Biens (Habitation)",
        next: "Riskalia Auto",
      },
    },
    auto: {
      title: "RISKALIA Auto",
      subtitle: "Assurance automobile — Tiers+, Collision, Tous Risques Premium.",
      desc: "Rigoureux. Transparent. Réactif. Trois niveaux de couverture adaptés à votre véhicule et à votre usage.",
      bullets: [
        "Assistance 24/7 & réseau agréé",
        "Protection du conducteur & du véhicule",
        "3 niveaux : Tiers+, Collision, Tous Risques Premium",
      ],
      hero: {
        cta1: "En savoir plus",
        cta2: "Obtenir un devis",
      },
      cards: {
        tiers: {
          title: "Tiers +",
          coverage: [
            "Responsabilité Civile obligatoire",
            "Défense & Recours",
            "Bris de glaces",
            "Incendie",
            "Option Vol",
          ],
          services:
            "<strong>Services inclus :</strong> Assistance 24/7, réseau agréé, suivi sinistre digitalisé.",
          eligibility:
            "<strong>Éligibilité :</strong> Tous véhicules particuliers • ≤ 20 ans • Usage privé ou professionnel léger.",
        },
        collision: {
          title: "Dommage Collision",
          coverage: [
            "Garanties Tiers +",
            "Dommages au véhicule (collision avec tiers identifié)",
            "Protection juridique",
          ],
          services:
            "<strong>Services inclus :</strong> Assistance renforcée (remorquage + dépannage sur site), véhicule de remplacement* (selon conditions), gestion prioritaire sinistre.",
          eligibility:
            "<strong>Éligibilité :</strong> Véhicules ≤ 15 ans • Bonus/malus conforme ACAPS • Souscription simple via courtier.",
        },
        premium: {
          title: "Tous Risques Premium",
          coverage: [
            "Garanties Dommage Collision +",
            "Dommages tous accidents",
            "Vol, incendie, bris de glaces, événements naturels",
            "Valeur à neuf / majorée",
            "Protection conducteur & passagers",
          ],
          services:
            "<strong>Services inclus :</strong> Valeur à neuf/majorée jusqu'à 36 mois, véhicule de remplacement premium (selon options), indemnisation accélérée.",
          eligibility:
            "<strong>Éligibilité :</strong> Véhicules récents/haut de gamme • Financement LOA/LLD • Conducteurs expérimentés ou flotte dirigeant.",
        },
      },
      intro: {
        title: "Une couverture adaptée à votre véhicule et à votre usage",
        text:
          "Trois niveaux clairs : <span class=\"font-semibold\">Tiers+</span> pour l’essentiel et le budget, <span class=\"font-semibold\">Dommage Collision</span> pour protéger votre véhicule en cas de choc avec tiers identifié, et <span class=\"font-semibold\">Tous Risques Premium</span> pour une protection étendue (tous accidents, valeur à neuf/majorée).",
      },
      value: {
        items: [
          {
            title: "Audit du profil conducteur & usage véhicule",
            text: "Identification des garanties pertinentes et réduction des coûts inutiles.",
          },
          {
            title: "Gestion sinistres & suivi digitalisé",
            text: "Transparence, rapidité et traçabilité du règlement.",
          },
          {
            title: "Conseil & prévention du risque",
            text: "Optimisation bonus/malus et accompagnement post-sinistre.",
          },
        ],
      },
      cta: {
        title: "Obtenir une proposition personnalisée",
        text: "Nous calibrons votre niveau de couverture selon l’âge du véhicule, l’usage et votre historique conducteur.",
        quote: "Obtenir un devis",
        talk: "Parler à un conseiller",
      },
      slogan:
        "RISKALIA Auto — <span class=\"rk-accent\">Rigoureux.</span> <span class=\"rk-accent\">Transparent.</span> <span class=\"rk-accent\">Réactif.</span>",
      nav: {
        prev: "← Assurance-vie & placements",
        next: "Retraite →",
      },
    },
    retraite: {
      title: "Retraite (épargne longue)",
      subtitle:
        "Versements programmés ou libres • Profils d'investissement • Sécurisation progressive • Sortie en rente et/ou capital • Bénéficiaires • Fiscalité selon cadre local.",
      badges: ["Long terme", "Profils d'allocation", "Rente ou capital"],
      tabs: {
        over: "Aperçu",
        cov: "Avantages",
        opt: "Options d'investissement",
        admin: "Frais & souscription",
        claim: "Prestations & rachats",
        faq: "FAQ",
      },
      over: {
        t: "1. Aperçu",
        p: "La solution Retraite permet de constituer une épargne de long terme via des versements programmés ou libres, investis sur des supports adaptés à votre horizon. À l'échéance, vous choisissez rente, capital ou une combinaison des deux.",
        li: [
          "Allègement du risque à l'approche de la retraite (lifecycle).",
          "Arbitrages possibles entre supports (selon contrat).",
          "Bénéficiaires désignés en cas de décès.",
        ],
        kpi: ["Horizon conseillé", "Versement min.", "Sortie"],
        kpi_values: [
          "10–25 ans",
          "souple (mensuel/ponctuel)",
          "rente, capital ou mixte",
        ],
      },
      cov: {
        t: "2. Avantages clés",
        c0: {
          t: "Disciplines d'épargne",
          li: [
            "Versements programmés automatisés.",
            "Possibilité de versements libres.",
            'Effet "coût moyen" dans le temps.',
          ],
        },
        c1: {
          t: "Cadre & fiscalité",
          li: [
            "Traitement fiscal selon réglementation locale.",
            "Transparence des frais et reporting.",
            "Portabilité possible (selon contrat).",
          ],
        },
        c2: {
          t: "Protection & transmission",
          li: [
            "Bénéficiaires désignés.",
            "Option rente réversible (selon assureur).",
            "Options de sécurisation progressive.",
          ],
        },
      },
      opt: {
        t: "3. Options d'investissement",
        c0: {
          t: "Profils",
          li: [
            "Sécurisé (obligataire/fonds dirham).",
            "Équilibré (mixte obligations/actions).",
            "Dynamique (actions/Thèmes/ESG).",
          ],
        },
        c1: {
          t: "Pilotage",
          li: [
            "Arbitrages libres (plafonds selon contrat).",
            "Désensibilisation automatique à l'approche de l'échéance (lifecycle).",
            "Sécurisation des plus-values (optionnelle).",
          ],
        },
        c2: {
          t: "Garanties",
          li: [
            "Plancher décès (selon support/assureur).",
            "Rente certaine / réversible.",
            "Indexation annuelle des rentes (optionnelle).",
          ],
        },
      },
      admin: {
        t: "4. Frais & souscription",
        c0: {
          t: "Frais (indicateurs)",
          li: [
            "Frais d'entrée/versement : selon contrat.",
            "Frais de gestion annuels (supports).",
            "Frais d'arbitrage (si applicables).",
          ],
        },
        c1: {
          t: "Souscription",
          li: [
            "Formulaire + pièce d'identité.",
            "Désignation des bénéficiaires.",
            "Relevé d'identité bancaire.",
          ],
        },
        c2: {
          t: "Âges & versements",
          li: [
            "Âges d'adhésion/maintien selon cadre.",
            "Seuils minimum de versement.",
            "Modulation possible dans le temps.",
          ],
        },
      },
      claim: {
        t: "5. Prestations & rachats",
        sum: "Fonctionnement",
        li: [
          "Sortie en rente viagère et/ou capital à l'échéance.",
          "Rachats partiels/totaux encadrés (conditions locales).",
          "Décès : transmission aux bénéficiaires désignés.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Puis-je changer de profil d'investissement ?",
        a0: "Oui, via des arbitrages (gratuits ou payants selon contrat). Un nombre maximum annuel peut s'appliquer.",
        q1: "Y a-t-il des cas de rachat anticipé ?",
        a1: "Selon la réglementation locale (ex. événements majeurs). Nous vous guidons au cas par cas.",
        q2: "Comment sont imposées les prestations ?",
        a2: "Le traitement fiscal dépend du cadre national et du type de sortie (rente/capital). Nous vous présentons les règles en vigueur avant la décision.",
      },
      cta: {
        t: "Construisez votre retraite sereinement",
        p: "Définissons ensemble votre horizon, votre budget et un profil d'investissement adapté.",
        quote: "Obtenir un devis",
        talk: "Parler à un conseiller",
      },
      nav: {
        prev: "Riskalia Auto",
        next: "Santé",
      },
    },
    // 404 Error page translations
    error: {
      title: "Page introuvable",
      sub: "Oups ! La page que vous recherchez n'existe pas ou a été déplacée.",
      homeBtn: "Retour à l'accueil",
      contactBtn: "Nous contacter",
      quickNavTitle: "Pages populaires",
      quickNavSub: "Trouvez rapidement ce que vous cherchez",
      solutionsDesc: "Produits pour entreprises et particuliers",
      reinsuranceDesc: "Traités, facultatives, sinistres & arbitrages",
      climateDesc: "Identification, Quantification, Pilotage & Reporting",
      esgDesc: "Gouvernance, Éthique, Bien-être, Diversité",
      contactDesc: "Demande de devis, sinistres, coordonnées",
      servicesDesc: "Formation, évaluation et accompagnement sur mesure",
      helpTitle: "Besoin d'aide ?",
      helpText:
        "Si vous pensez qu'il s'agit d'une erreur, n'hésitez pas à nous contacter.",
      emailBtn: "contact@riskalia.ma",
      phoneBtn: "+212 666 756 991",
    },
  },
  en: {
    meta: {
      title:
        "Riskalia — Insurance Broking · Reinsurance · Climate Risks · ESG Policy",
      desc: "Riskalia: all-lines insurance broking, reinsurance (QS/Surplus/XoL/Stop-Loss, facultative) and ESG & climate support (diagnostics, scenarios, parametrics, reporting).",
    },
    nav: {
      home: "Home",
      solutions: "Solutions",
      assurance: "Insurance",
      re: "Reinsurance",
      climate: "Climate Risks",
      services: "Advisory Services",
      esg: "ESG",
      contact: "Contact",
    },
    hero: {
      title: "Expertise that reassures",
      slogan: "We turn operational uncertainty into sustainable growth.",
      sub: "All-lines insurance broking · Reinsurance · Climate Risks · Risk Management Advisory",
      cta1: "Our Solutions",
      cta2: "Contact Us",
    },
    solutionsPage: {
      meta: {
        title: "Riskalia — Insurance Solutions",
        desc: "Two journeys: business and personal insurance. Property, cargo, fleet, liability, construction, group health, car, health, home, life and retirement.",
      },
      hero: {
        title: "Insurance solutions",
        subtitle:
          "Two paths: <strong>Businesses</strong> and <strong>Individuals</strong>. Products aligned with market best practices (property, cargo, fleet, liability, construction… / car, health, home, life & savings, retirement).",
        badges: [
          "Market benchmarking",
          "Claims handling",
          "Full transparency",
        ],
      },
      tabs: { corp: "Businesses", retail: "Individuals" },
      ui: {
        clear: "Clear",
        search: "Search…",
        nores: "No product matches your search.",
      },
      cta: {
        quote: "Get a quote",
        learn: "Learn more",
        more: "Talk to an advisor",
      },
      filters: {
        corp: [
          ["all", "All"],
          ["prop", "Property"],
          ["trans", "Cargo"],
          ["fleet", "Fleet"],
          ["liab", "Liability"],
          ["const", "Construction"],
          ["health", "Health"],
        ],
        retail: [
          ["all", "All"],
          ["auto", "Auto"],
          ["health", "Health"],
          ["acc", "Accident"],
          ["home", "Home"],
          ["life", "Life & savings"],
          ["ret", "Retirement"],
        ],
      },
      products: {
        corp: [
          {
            id: "multirisques",
            url: "Produits/multirisques.html",
            img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=60",
            cat: ["prop"],
            t: "Commercial Property (All Risks)",
            p: "Assets & Business Interruption for premises, stock, machinery.",
            bul: [
              "Fire, water damage, machinery breakdown",
              "Business interruption",
              "NatCat & climate options",
            ],
          },
          {
            id: "transport",
            url: "Produits/transport.html",
            img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=60",
            cat: ["trans"],
            t: "Cargo / Transport",
            p: "Covers imports/exports and logistics chain.",
            bul: [
              "All-risks cargo",
              "Carrier/Freight forwarder liability",
              "Optional weather parametrics",
            ],
          },
          {
            id: "flotte",
            url: "Produits/flotte.html",
            img: "https://images.unsplash.com/photo-1704488473677-ae044ef0d289?auto=format&fit=crop&w=1200&q=60",
            cat: ["fleet"],
            t: "Motor & Fleet",
            p: "From 5 to 5,000 vehicles, claims & telematics.",
            bul: [
              "TPL / Comprehensive / Glass",
              "Roadside assistance",
              "Claims dashboards",
            ],
          },
          {
            id: "rc",
            url: "Produits/rc.html",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=60",
            cat: ["liab"],
            t: "General / Professional Liability",
            p: "GL, PI, pollution, product liability.",
            bul: [
              "Operations & post-delivery",
              "Professional indemnity",
              "Environmental liability",
            ],
          },
          {
            id: "construction",
            url: "Produits/construction.html",
            img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=60",
            cat: ["const"],
            t: "Construction (CAR/EAR)",
            p: "Project all-risks and delay in start-up.",
            bul: [
              "Civil works, energy & infrastructure",
              "Business interruption on projects",
              "Phase-by-phase covers",
            ],
          },
          {
            id: "santecollective",
            url: "Produits/santecollective.html",
            img: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&w=1200&q=60",
            cat: ["health"],
            t: "Group Health & Benefits",
            p: "Employee medical plans and risk benefits.",
            bul: [
              "Provider networks & cashless",
              "Executive & non-executive tiers",
              "Cost control & prevention",
            ],
          },
        ],
        retail: [
          {
            id: "auto",
            url: "Produits/auto.html",
            img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=60",
            cat: ["auto"],
            t: "RISKALIA Auto",
            p: "Car insurance — Third Party+, Collision, or All-Risks Premium.",
            bul: [
              "24/7 roadside & partner network",
              "Driver and vehicle protection",
              "3 coverage levels: Third+, Collision, All-Risks Premium",
            ],
          },
          {
            id: "sante",
            url: "Produits/sante.html",
            img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=60",
            cat: ["health"],
            t: "Health",
            p: "Outpatient, inpatient, optical & dental.",
            bul: [
              "Partner networks & cashless",
              "Modular plans",
              "24/7 assistance",
            ],
          },
          {
            id: "alv",
            url: "Produits/alv.html",
            img: "https://images.unsplash.com/photo-1633158832532-f71e9c7ac6d6?auto=format&fit=crop&w=1200&q=60",
            cat: ["acc"],
            t: "Personal Accident",
            p: "Lump sums for domestic and leisure accidents.",
            bul: [
              "Disability benefits",
              "Education annuity",
              "Home assistance",
            ],
          },
          {
            id: "habitation",
            url: "Produits/habitation.html",
            img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=60",
            cat: ["home"],
            t: "Home (Property)",
            p: "Fire, theft, water damage, personal liability.",
            bul: [
              "New-for-old options",
              "Legal protection",
              "Valuables cover",
            ],
          },
          {
            id: "vie",
            url: "Produits/vie.html",
            img: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1200&q=60",
            cat: ["life"],
            t: "Life Insurance & Savings",
            p: "Wealth, succession & capital growth.",
            bul: [
              "Dirham funds & unit-linked",
              "Switches & tax guidance",
              "Beneficiary options",
            ],
          },
          {
            id: "retraite",
            url: "Produits/retraite.html",
            img: "https://images.unsplash.com/photo-1562557082-7f2785d741e7?auto=format&fit=crop&w=1200&q=60",
            cat: ["ret"],
            t: "Retirement",
            p: "Build long-term income/savings.",
            bul: [
              "Programmed contributions",
              "Tax efficiency (framework)",
              "Reversion options",
            ],
          },
        ],
      },
    },
    assurance: {
      label: "INSURANCE",
      title: "Insurance",
      subtitle: "Clear solutions for everyone",
      description:
        "Two pathways: Corporate and Personal, inspired by market best practices.",
      entreprises: {
        title: "Corporate",
        item1: "Multi-Risk Business",
        item2: "Transport (goods)",
        item3: "Motor & fleet",
        item4: "Civil liability",
        item5: "Construction",
        item6: "Group health & benefits",
        link: "View all solutions →",
      },
      particuliers: {
        title: "Personal",
        item1: "Car",
        item2: "Health",
        item3: "Personal accident",
        item4: "Property (Home)",
        item5: "Life insurance & investments",
        item6: "Retirement",
        link: "View all solutions →",
      },
    },
    reassurance: {
      label: "REINSURANCE",
      title: "Reinsurance in Treaties & Facultative Cessions:",
      subtitle: "End-to-end expertise",
      traites: {
        title: "Tailor-made treaties for portfolios: From design to claims settlement.",
        desc: "We design clear and lasting reinsurance programs aligned with your technical and financial goals. Each treaty is built to ensure stability, transparency, and long-term performance.",
      },
      facultatives: {
        title: "Facultative Reinsurance Cessions: Your facultatives. Our expertise.",
        desc: "Integrated reinsurance solutions tailored to each insurer or insured’s specific needs. Our approach combines selective market placement, precise contractual terms, and exemplary follow-up.",
      },
      sinistres: {
        title: "Claims Management & 24/7 Support: Responsiveness, control, precision.",
        desc: "From the moment a loss occurs, our dedicated team coordinates assessments, ensures transparent communication, and delivers swift resolution. Every step strengthens trust and long-term partnership.",
      },
      cta: "Explore reinsurance",
    },
    climate: {
      label: "CLIMATE RISKS",
      title: "Climate risks — from analysis to action",
      cartographie: {
        title: "Mapping & scenarios",
        desc: "Physical/transition analysis and stress tests. Materiality by sites, businesses and value chains that prioritizes risks and informs investment and business continuity decisions.",
      },
      modelisation: {
        title: "Modeling & transfer",
        desc: "Climate PML/AAL quantification and adapted transfer solutions: weather parametrics, captives, reinsurance. Simple and verifiable triggers for fast and predictable indemnifications, aligned to risk.",
      },
      resilience: {
        title: "Resilience & reporting",
        desc: "Structured adaptation plans and green CAPEX, TCFD/ISSB indicators and lender requirements. Useful reporting for executives and auditors to monitor progress and demonstrate system credibility.",
      },
      cta_button: "Discover Climate Risks offering",

      // Climate page specific content
      meta: {
        title: "Riskalia — Climate Risk",
        desc: "Identify, quantify and manage climate impacts: physical (acute/chronic) and transition risks, scenarios (RCP/SSP), adaptation roadmap, risk transfer and TCFD/ISSB reporting.",
      },
      ui: { search: "🔎…" },
      aria: {
        nav: "Main navigation",
        submenu_solutions: "Solutions submenu",
        langswitch: "Language switcher",
      },
      title: "Climate Risk",
      subtitle:
        "Identify, quantify and manage climate impacts: transition risks, scenarios (RCP/SSP), adaptation roadmap, risk transfer and TCFD/ISSB reporting.",
      method:
        "We start from your historical losses and risk tolerance, simulate several thresholds, and retain the one that balances cost, protection and capital.",
      cta: {
        contact: "Contact us",
        advisor: "Talk to an expert",
      },
      intro_climate: {
        title: "The climate challenge in Morocco",
        content:
          "Climate change has become a top risk driver for African and Moroccan economies. It is essential to shift from reactive to anticipatory logic: measure, plan and cover.",
      },
      sec: {
        intro: {
          t: "Introduction",
          p1: "Climate change has become a top risk driver for African and Moroccan economies. Recurring droughts, water stress, heatwaves, flash floods and wildfires are no longer exceptional but tend to repeat and intensify.",
          impacts_title: "In Morocco, impacts are already measurable:",
          impact1: "agricultural losses and yield decline,",
          impact2: "infrastructure damage and supply chain disruptions,",
          impact3: "rising energy and water costs,",
          impact4: "health impacts and reduced productivity.",
          conclusion:
            "These risks affect all categories of actors: insurers, reinsurers, companies, municipalities, as well as households and investors. Faced with this reality, it is essential to shift from reactive logic (manage after the fact) to anticipatory approach (measure, plan and cover).",
        },
        risks: {
          t: "Physical & transition risks",
          phys: { t: "Physical risks" },
          distinction: "We distinguish:",
          acute: "Acute risks",
          acute_desc:
            "sudden and destructive events such as urban floods, violent storms, extreme heatwaves or forest fires. They cause immediate damage to buildings, equipment, networks and can interrupt activity.",
          chronic: "Chronic risks",
          chronic_desc:
            "progressive but lasting effects such as rising average temperatures, water scarcity or coastal erosion. They weaken crops, increase irrigation costs and modify industrial and agricultural operating conditions.",
          trans: { t: "Transition risks" },
          trans_intro:
            "They stem from the evolution towards a low-carbon economy:",
          trans1: "new regulations (carbon taxes, ESG reporting standards),",
          trans2: "requirements from international lenders and insurers,",
          trans3:
            "transformation of global value chains (exporters subject to strict climate criteria),",
          trans4:
            "societal and reputational expectations (investors, consumers).",
          why_title: "Why it matters?",
          why_desc:
            "Because an actor who does not anticipate these changes may lose funding, see costs rise, or miss market opportunities.",
        },
        data: {
          t: "Data & scenarios",
          collect: {
            t: "Collection & analysis",
            p: "We start from concrete data: loss histories, climate databases available in Morocco and internationally, local rainfall or temperature data, as well as testimonies and feedback from your teams.",
          },
          map: {
            t: "Mapping",
            intro: "We translate this data into clear maps:",
            conclusion:
              "Each map highlights critical assets and fragility points of your operations.",
          },
          map1: "agricultural areas exposed to drought,",
          map2: "cities at flood risk,",
          map3: "industrial regions facing heatwaves.",
          scen: {
            t: "Forward scenarios",
            intro:
              "We build trajectories for 2030 and 2050 to test the robustness of your strategies:",
          },
          scen1: "how many additional extreme heat days?",
          scen2: "what flood frequency in which region?",
          scen3: "what impact on agricultural or industrial productivity?",
          kpi: {
            title: "Key indicators",
            intro: "We translate all this into simple indicators:",
            aal: "Average Annual Loss",
            pml: "Probable Maximum Loss",
            costs: "Cost evolution",
            impact: "Financial impact",
          },
          objective: "Objective",
          objective_desc:
            "make climate data readable, comparable and directly usable in your management, financing and insurance decisions.",
        },
        strategy: {
          t: "Strategy & roadmap",
          intro:
            "A good strategy is not limited to making an assessment. It must result in a prioritized and operational action plan.",
          steps_title: "The 4 steps",
          step1_title: "Measure",
          step1_desc:
            "clearly identify your vulnerabilities and estimate their cost.",
          step2_title: "Reduce",
          step2_desc:
            "implement adaptation measures (strengthen sensitive infrastructure, invest in efficient irrigation solutions, establish business continuity plans).",
          step3_title: "Transfer",
          step3_desc:
            "complement prevention with insurance and reinsurance mechanisms, traditional or parametric.",
          step4_title: "Steer",
          step4_desc:
            "monitor risk evolution and regularly update your protections.",
          roadmap: { t: "The Riskalia roadmap" },
          roadmap_intro: "We deliver a 12 to 24-month roadmap, structured in:",
          quickwins_title: "Quick wins",
          quickwins_desc: "low-cost measures with high immediate impact.",
          investments_title: "Priority investments",
          investments_desc: "resilience actions to plan and finance.",
          coverage_title: "Coverage program",
          coverage_desc:
            "traditional and/or parametric insurance adapted to your exposures.",
          benefit_title: "Benefit",
          benefit_desc:
            "you have a clear plan, understandable by both executives and operations, that can be tracked over time.",
        },
        finance: {
          t: "Financing & risk transfer",
          fund: {
            t: "Financing adaptation",
            intro: "Climate adaptation has a cost. But levers exist:",
          },
          fund1:
            "public grants and programs for agriculture, water and energy,",
          fund2: "green credit lines from local and international banks,",
          fund3: "public guarantees (like Tamwilcom) to reduce risk cost,",
          fund4: "public-private partnerships to pool protection investments.",
          transfer: {
            t: "Transfer risk",
            intro: "Insurance plays a key role:",
          },
          transfer1_title: "Traditional products",
          transfer1_desc:
            "property damage, natural disasters, agricultural multi-peril.",
          transfer2_title: "Weather parametrics",
          transfer2_desc:
            "automatic trigger if an index (rain, heat, wind, drought) exceeds a threshold. Fast compensation, fewer disputes, more predictability.",
          transfer3_title: "Pooled programs",
          transfer3_desc:
            "coverage for groups of farmers, cooperatives or municipalities.",
          transfer4_title: "Reinsurance and pools",
          transfer4_desc: "securing capacity on major perils.",
          blended: {
            t: "Blended finance",
            desc: "In some cases, we combine grants, concessional loans and insurance to make projects bankable and mitigate the final cost for the insured.",
          },
          role: { t: "Riskalia's role", intro: "We intervene on:" },
          role1: "Financial structuring",
          role2: "Coverage design",
          role3: "Capacity sourcing",
          role4: "Governance and traceability",
          promise_title: "Our promise",
          promise_desc:
            "transform a financial constraint into a sustainable and lasting solution.",
        },
        value: {
          t: "Riskalia's added value",
          expertise_title: "Local and international expertise",
          expertise_desc:
            "knowledge of Moroccan realities and benchmark of best practices.",
          approach_title: "Educational approach",
          approach_desc:
            "simplify, popularize and involve all decision levels.",
          solutions_title: "Innovative solutions",
          solutions_desc:
            "parametric insurance, pooled schemes, public-private partnerships.",
          impact_title: "Concrete impact",
          impact_desc:
            "reduced vulnerabilities, improved resilience and better access to financing.",
        },
        faq: { t: "FAQ" },
      },
      faq: {
        q1: "Where to start if we have little data?",
        a1: "A rapid assessment provides a first vision in 3-4 weeks, even with limited data.",
        q2: "How long to get an action plan?",
        a2: "A first prioritized plan can be delivered in less than a month, with quick actions and a 12-24 month vision.",
        q3: "Can reinsurance cover climate hazards?",
        a3: "Yes, through CatNat treaties, but also via parametric solutions specially designed for drought, floods or heatwaves.",
        q4: "What is parametric coverage?",
        a4: "It's insurance triggered by an index (e.g. rainfall volume, temperature). Compensation is paid automatically, without waiting for lengthy and costly expertise.",
      },
      contact: {
        title: "Ready to anticipate climate risks?",
        subtitle:
          "Let's start with a rapid assessment of your exposures and opportunities.",
      },
  footer: {
    col1: {
      title: "Riskalia",
      address:
        "Licensed insurance & strategy brokerage (ACAPS).<br/>Head office: 16 Rue de Terves, 2nd floor,<br/>Mers Sultan district, Casablanca.",
      notice:
        "Insurance intermediary governed by Law 17-99 on the Insurance Code.<br/>Under decision No. COU5047.00000.0.C.2025.472."
    },
    col2: { title: "Navigation" },
    col3: { title: "Individual Insurance" },
    col4: { title: "Corporate Insurance" },
    col5: {
      title: "Contact",
      tel1label: "Phone:",
      tel1: "+212 666 756 991",
      tel2label: "Phone:",
      tel2: "+212 675 208 909",
      emailLabel: "Email:",
      email: "contact@riskalia.ma"
    },
    copyright: "© " + new Date().getFullYear() + " Riskalia. All rights reserved."
  },

  produits: {
    auto: "Motor",
    habitation: "Home",
    sante: "Health",
    alv: "Personal Accident",
    vie: "Life",
    retraite: "Retirement",
    multirisques: "Business Package",
    flotte: "Fleet",
    rc: "Liability",
    construction: "Construction",
    santecollective: "Group Health",
    transport: "Transport"
  },

  nav: {
    home: "Home",
    solutions: "Solutions",
    re: "Reinsurance",
    climate: "Climate Risks",
    esg: "ESG",
    services: "Advisory Services"
  },
},
    reinsurance: {
      hero: {
        title: "Reinsurance — Programs & Advisory",
        subtitle:
          "Protections aligned with your priorities: results stability, capital protection, growth support and compliance.",
      },
      toc: {
        promise: "Our promise",
        programs: "Programs",
        markets: "Markets",
        claims: "Claims",
        data: "Data",
        optimization: "Optimization",
        compliance: "Compliance",
        faq: "FAQ",
      },
      s1: {
        title: "Our promise",
        intro:
          "We accompany you in building and optimizing your reinsurance programs, end-to-end.",
        concrete: {
          title: "Concrete",
          item1: "Quota-share: you cede a fixed share of premiums and claims.",
          item2:
            "Utility: relieve capital and increase capacity (growth, new lines).",
          item3: "Surplus: you keep a base and cede the excess.",
        },
        method: {
          title: "Method",
          item1: "Analysis of your historical data and risk appetite.",
          item2: "Program sizing (retentions, limits, geometries).",
          item3: "Negotiation with markets and follow-up until bind.",
        },
        example: {
          title: "Example",
          text: "An auto insurer: we analyze its claims by vehicle class, we size a 20% QS program with a 2M€ limit per claim, and we negotiate with 3 A+ reinsurers to get the best conditions.",
        },
      },
      s2: {
        title: "Programs",
        proportional: {
          title: "Proportional",
          qs: {
            title: "Quota-share",
            desc: "You cede a fixed share of premiums and claims (ex: 20%).",
            utility:
              "Utility: relieve capital and increase capacity (growth, new lines).",
            example:
              "Example: an auto insurer cedes 20% of its portfolio to free up capital and finance the acquisition of new lines.",
          },
          surplus: {
            title: "Surplus",
            desc: "You keep a base and cede the excess (ex: 1M€ retention, 4M€ capacity).",
            utility:
              "Utility: optimize capital while maintaining controlled exposure.",
            example:
              "Example: an insurer keeps 1M€ per claim and cedes up to 4M€ to optimize its capital while maintaining controlled exposure.",
          },
        },
        nonproportional: {
          title: "Non-proportional",
          xol: {
            title: "XoL (Excess of Loss)",
            desc: "You keep a retention and cede the excess (ex: 500K€ retention, 2M€ limit).",
            utility:
              "Utility: protect against major claims while optimizing capital.",
            example:
              "Example: an insurer keeps 500K€ per claim and cedes up to 2M€ to protect against major claims.",
          },
          stoploss: {
            title: "Stop-Loss",
            desc: "You cede the excess of a claims ratio (ex: 75% claims ratio).",
            utility: "Utility: protect against technical result deterioration.",
            example:
              "Example: an insurer cedes the excess of 75% claims ratio to protect against technical result deterioration.",
          },
        },
        innovative: {
          title: "Innovative",
          parametric: {
            title: "Parametric",
            desc: "Automatic trigger if an index exceeds a threshold (ex: rain, temperature).",
            utility:
              "Utility: fast indemnification, fewer disputes, more predictability.",
            example:
              "Example: an agricultural insurer uses a rainfall index to automatically trigger indemnifications.",
          },
          captive: {
            title: "Captives",
            desc: "Insurance subsidiary dedicated to group risk management.",
            utility: "Utility: optimize risk cost and generate revenue.",
            example:
              "Example: an industrial group creates a captive to manage its risks and optimize its risk cost.",
          },
        },
        benchmark: {
          title: "Benchmark",
          text: "We compare your programs with market ones to identify optimization opportunities.",
        },
      },
      s3: {
        title: "Markets",
        strategy: {
          title: "Strategy",
          intro:
            "We define your placement strategy based on your objectives and risk appetite.",
          steps: {
            step1: "Analysis of your historical data and risk appetite.",
            step2:
              "Definition of your placement strategy (proportional vs non-proportional).",
            step3: "Program sizing (retentions, limits, geometries).",
            step4: "Market selection and conditions negotiation.",
            step5: "Program follow-up and optimization.",
          },
        },
        terms: {
          title: "Terms",
          intro:
            "We negotiate the best conditions with markets to optimize your risk cost.",
          items: {
            item1: "Optimized commission rates.",
            item2: "Revision clauses adapted to your profile.",
            item3: "Favorable claims conditions.",
            item4: "Capacity and stability guarantees.",
          },
        },
        control: {
          title: "Control",
          intro:
            "We ensure the follow-up and control of your programs to guarantee their efficiency.",
          items: {
            item1: "Follow-up of claims ratios and commissions.",
            item2: "Control of declarations and settlements.",
            item3: "Program optimization based on results.",
            item4: "Regular reporting on program performance.",
          },
        },
        benefit: {
          title: "Benefit",
          text: "You have an optimized reinsurance program, adapted to your risk profile and objectives, with rigorous follow-up and continuous optimization.",
        },
      },
      s4: {
        title: "Claims",
        objective: {
          title: "Objective",
          text: "We accompany you in claims management to guarantee fast and fair settlement.",
        },
      },
      s5: {
        title: "Data",
        goal: {
          title: "Objective",
          text: "We help you structure and analyze your data to optimize your reinsurance programs.",
        },
      },
      s6: {
        title: "Optimization",
        architecture: {
          title: "Architecture",
          intro:
            "We optimize the architecture of your programs to maximize their efficiency.",
          items: {
            item1: "Analysis of existing program performance.",
            item2: "Identification of optimization opportunities.",
            item3: "Program resizing if necessary.",
            item4: "Implementation of new programs if opportune.",
          },
        },
        efficiency: {
          title: "Efficiency",
          intro:
            "We improve the efficiency of your programs to reduce your risk cost.",
          items: {
            item1: "Optimization of retentions and limits.",
            item2: "Improvement of claims conditions.",
            item3: "Negotiation of better commissions.",
            item4: "Implementation of innovative programs.",
          },
        },
        counterparties: {
          title: "Counterparties",
          intro:
            "We diversify your counterparties to reduce your risk concentration.",
          items: {
            item1: "Selection of solid and stable counterparties.",
            item2: "Geographic and sectoral diversification.",
            item3: "Negotiation of preferential conditions.",
            item4: "Follow-up of counterparty performance.",
          },
        },
        examples: {
          title: "Examples",
          intro: "Here are some examples of optimization we have carried out:",
          examples: {
            ex1: "An auto insurer: optimization of the QS program from 20% to 15% with better commission.",
            ex2: "A home insurer: implementation of an XoL program to protect against major claims.",
            ex3: "A health insurer: optimization of the Stop-Loss program to reduce risk cost.",
          },
        },
      },
      s7: {
        title: "Compliance",
        intro:
          "We accompany you in the regulatory compliance of your reinsurance programs.",
        policy: {
          title: "Policy",
          intro: "We help you define and implement your reinsurance policy.",
          items: {
            item1: "Definition of reinsurance objectives and strategy.",
            item2: "Implementation of processes and controls.",
            item3: "Team training on reinsurance issues.",
            item4: "Follow-up and reporting on program performance.",
          },
        },
        orsa: {
          title: "ORSA",
          intro:
            "We accompany you in carrying out your ORSA (Own Risk and Solvency Assessment).",
          items: {
            item1: "Analysis of risks and solvency.",
            item2: "Assessment of reinsurance program adequacy.",
            item3: "Recommendations for program improvement.",
            item4: "Documentation and reporting for authorities.",
          },
        },
        reporting: {
          title: "Reporting",
          intro:
            "We help you implement effective reporting on your reinsurance programs.",
          items: {
            item1: "Definition of performance indicators.",
            item2: "Implementation of dashboards.",
            item3: "Regular reporting to management.",
            item4: "Analysis of trends and opportunities.",
          },
        },
        deliverables: {
          title: "Deliverables",
          intro: "We deliver clear and understandable documents:",
          items: {
            item1: "Documented reinsurance policy.",
            item2: "Optimized reinsurance programs.",
            item3: "Reporting on program performance.",
            item4: "Continuous improvement recommendations.",
          },
        },
        purpose: {
          title: "Objective",
          text: "You have a compliant, optimized and efficient reinsurance program, with rigorous follow-up and continuous improvement.",
        },
      },
      s8: {
        title: "FAQ",
        q1: {
          question: "What is reinsurance?",
          answer:
            "Reinsurance is insurance for insurers. It allows transferring part of risks to reinsurers to protect capital and optimize capacity.",
        },
        q2: {
          question: "What are the types of reinsurance?",
          answer:
            "There are two main types: proportional (quota-share, surplus) and non-proportional (XoL, Stop-Loss).",
        },
        q3: {
          question: "How to optimize a reinsurance program?",
          answer:
            "Optimization involves data analysis, program sizing, conditions negotiation and performance follow-up.",
        },
        q4: {
          question: "What are compliance issues?",
          answer:
            "Regulatory compliance involves implementing a reinsurance policy, carrying out an ORSA and regular reporting.",
        },
        q5: {
          question: "How to choose counterparties?",
          answer:
            "Counterparty selection should be based on their financial strength, stability, expertise and commercial conditions.",
        },
      },
      cta: {
        title: "Need reinsurance?",
        subtitle: "Describe your project: we respond within 24-48 hours.",
        contact: "Contact us",
      },
      contact: {
        title: "Contact",
        subtitle: "We are here to accompany you in your reinsurance projects.",
        quote: "Get a quote",
        advisor: "Contact an advisor",
      },
    },
    services: {
      label: "ADVISORY SERVICES",
      title:
        "Risk management, Social commitments evaluation and Tailored training",
      consulting: {
        title: "Risk Management Advisory",
        desc: "Living risk maps, clarified appetite and readable dashboards. We identify, quantify and prioritize strategic, operational and financial risks for decisive and measurable management.",
      },
      evaluation: {
        title: "Social commitments evaluation",
        desc: "Actuarial evaluations (IFC, retirement, benefits) aligned with local/IFRS standards. Audited assumptions, explained cost trajectories and optimization levers presented with transparency.",
      },
      formation: {
        title: "Tailored training",
        desc: "Modular courses combining governance, analysis tools, insurance and transfer. Sectoral case studies and practical workshops to anchor learning and accelerate field implementation.",
      },
      cta: "Discover our Advisory Services",
    },
    esgSection: {
      label: "ESG",
      title: "ESG Policy — governance, social, environment",
      gouvernance: {
        title: "Governance & ethics",
        desc: "Code of conduct, anti-corruption, cybersecurity and whistleblowing channel. Documented roles, processes and controls for living and verifiable compliance.",
      },
      personnes: {
        title: "People & diversity",
        desc: "Well-being, continuous learning, inclusion and pay equity. Structured interviews and development plans to grow teams sustainably.",
      },
      environnement: {
        title: "Environmental Responsibility",
        desc: "GHG assessment, energy/digital sobriety, soft mobility and supplier charter. Monitored indicators and concrete improvement plans, reviewed periodically.",
      },
      cta: "Discover our ESG policy",
    },
    team: {
      label: "PARTNERS",
      title: "Our Team",
      subtitle: "Passionate experts at your service",
      nabil: {
        name: "Nabil Cherkaoui",
        title: "Managing Partner",
        bio: "A lawyer by training and reinsurance specialist, Nabil Cherkaoui led governance, compliance, legal affairs, major claims and counterparty risk at SCR (CDG Group). A market reference for drafting and negotiating reinsurance placements, he managed relationships with regulators, rating agencies and global partners. As Managing Director of Riskalia, he ensures institutional strength, compliance and execution quality. As an associate researcher at Paris-Dauphine, he brings academic rigor to robust solutions, combining legal security, contractual clarity and client value.",
      },
      anasse: {
        name: "Anasse Youssfi",
        title: "Strategic Partner",
        bio: "Actuary and executive, Anasse Youssfi brings over twenty years of experience with insurers, reinsurers and financial institutions in Africa and internationally. He combines vision with methodological rigor, teaches as a lecturer and trains new generations of actuaries. At Riskalia, he provides technical support on high-stakes cases: structuring tailor-made coverage, underwriting criteria, multi-line/reinsurance programs and parametric solutions. Objective: precisely align risks, cost and client value.",
      },
    },
    cta: {
      title: "Need coverage?",
      subtitle: "Describe your project: we respond within 24–48 hours.",
      quote: "Get a Quote",
      advisor: "Contact an Advisor",
      button1: "Get a quote",
      button2: "Contact an advisor",
      write: "Write a message",
      call: "See our contact details",
    },
    // Contact page specific translations
    contact: {
      hero: {
        title: "Contact",
        subtitle:
          "Information requests, quotes, partnerships or appointments — we respond quickly.",
      },
      form: {
        title: "Write to us",
        desc: "Leave us your details and message. We get back to you within 1 business day.",
        fname: "First Name",
        lname: "Last Name",
        email: "E-mail",
        phone: "Phone",
        topic: "Subject",
        msg: "Message",
        submit: "Send",
        note: 'By clicking "Send", you agree to be contacted.',
        placeholders: {
          fname: "e.g. Sara",
          lname: "e.g. El Amrani",
          email: "you@example.com",
          phone: "+212 …",
          msg: "Describe your request...",
        },
        opt: {
          quote: "Quote request",
          meeting: "Schedule appointment",
          partner: "Partnership",
          other: "Other",
        },
      },
      box: {
        title: "Contact Details",
        addr: {
          t: "Address:",
          v: "16, Rue de Terves, 2nd Floor. Mers Sultan District, Casablanca",
        },
        phone1: { label: "Phone:", value: "+212-666-756991" },
        phone2: { label: "Phone:", value: "+212-675-208909" },
        email: {
          label: "General information:",
          value: "contact@riskalia.ma",
        },
        hours: "Mon–Fri, 9:00–18:00 (UTC+1)",
        mapLabel: "Map of Riskalia office",
        mapTitle: "Map — Riskalia, 16 Rue de Terves, Casablanca",
        mapBtn: "Open in Google Maps",
      },
      cta: {
        title: "Let's discuss your needs",
        subtitle:
          "An advisor responds quickly to clarify your request and propose next steps.",
        write: "Write a message",
        call: "See our contact details",
      },
    },
    // ESG page specific translations
    esg: {
      hero: {
        title: "🌱 Our ESG Commitment",
        subtitle:
          "A responsible, transparent brokerage firm committed to Moroccan society",
      },
      cta: {
        contact: "Contact us",
        discover: "Discover our actions",
        partnership: "ESG Partnership",
      },
      intro: {
        title: "Our ESG Vision",
        content:
          "At Riskalia, we believe that a brokerage firm must be more than a financial intermediary: it must be a responsible, transparent actor committed to society. Our ESG (Environment, Social, Governance) approach is designed to reflect our values, meet the expectations of our clients and partners, and contribute to Morocco's sustainable development.",
      },
      governance: {
        kicker: "Governance",
        title: "🔹 Responsible governance",
        integrity: {
          title: "Integrity and transparency",
          item1:
            "Transparent relationships with clients, partners and regulators (ACAPS)",
          item2: "Strict respect for market rules",
          item3: "Clear and honest communication about our practices",
        },
        ethics: {
          title: "Ethics and independence",
          item1: "Rigorous management of conflicts of interest",
          item2: "Independence in our advice and recommendations",
          item3: "Strict code of conduct applied by all",
        },
        structure: {
          title: "Clear governance",
          item1: "Structured and documented decisions",
          item2: "Processes proportionate to our size",
          item3: "Alignment with sector best practices",
        },
      },
      social: {
        kicker: "Social",
        title: "🔹 Social commitment",
        diversity: {
          title: "Equal opportunities and diversity",
          item1: "Talent-based recruitment without discrimination",
          item2: "Gender, origin and background equality",
          item3: "Promoting diversity at all levels",
        },
        development: {
          title: "Skills development",
          item1: "Continuous training plan for each employee",
          item2: "Technical training and personal development",
          item3: "Support in career progression",
        },
        wellbeing: {
          title: "Workplace well-being",
          item1: "Respectful and collaborative environment",
          item2: "Work-life balance",
          item3: "Working conditions that promote fulfillment",
        },
        impact: {
          title: "Societal impact",
          item1: "Inclusive insurance for SMEs and farmers",
          item2: "Innovative solutions for climate risks",
          item3: "Associative partnerships and education support",
        },
      },
      environment: {
        kicker: "Environment",
        title: "🔹 Environmental respect",
        energy: {
          title: "Energy and digital sobriety",
          item1: "Reducing consumption in our offices",
          item2: "Responsible digital tools",
          item3: "Optimizing lighting and air conditioning",
        },
        mobility: {
          title: "Reasoned mobility",
          item1: "Limiting unnecessary travel",
          item2: "Privileged use of videoconferencing",
          item3: "Encouraging soft mobility",
        },
        waste: {
          title: "Simple gestures, concrete impacts",
          item1: "Optimizing paper usage",
          item2: "Waste reduction and sorting",
          item3: "Water and electricity savings",
        },
      },
      procurement: {
        kicker: "Responsible Purchasing",
        title: "🔹 Responsible purchasing",
        local: {
          title: "Local priority",
          item1: "Favoring local suppliers",
          item2: "Supporting Moroccan SMEs",
          item3: "Contributing to regional economic development",
        },
        ethics: {
          title: "Ethical criteria",
          item1: "Integrating ethical criteria in our choices",
          item2: "Supporting social and solidarity economy",
          item3: "Evaluating the social impact of our providers",
        },
      },
      vision: {
        title: "Our ambition",
        content:
          "With this approach, Riskalia positions itself as a committed broker, rooted in its territory and oriented towards the future. Our ambition is simple: to support our clients while creating a positive and sustainable impact for our employees, partners and society.",
      },
      contact: {
        title: "Join our ESG approach",
        subtitle:
          "Discover how we can collaborate for a more sustainable future",
      },
    },
    search: {
      noResults: "No results found",
    },
    chatbot: {
      title: "Riskalia Assistant",
      subtitle: "Insurance & reinsurance expert",
      welcome:
        "Hello! I'm your Riskalia assistant. How can I help you with your insurance or reinsurance needs?",
      now: "Now",
      inputPlaceholder: "Type your message...",
      typing: "Riskalia is typing...",
      quick: {
        assurance: "Insurance",
        reassurance: "Reinsurance",
        climate: "Climate Risks",
        contact: "Contact",
      },
    },
    // Multirisques page specific translations
    multirisques: {
      title: "Commercial Property & Business Interruption",
      subtitle:
        "Property & Business Interruption • Fire & Water Damage • Theft & Machinery Breakdown • Weather Events & Natural Disasters • Risk Engineering & Prevention.",
      badges: [
        "Buildings, stocks, equipment",
        "Business Interruption (BI)",
        "Prevention & compliance",
      ],
      tabs: {
        over: "Overview",
        cov: "Coverage",
        opt: "Options & prevention",
        admin: "Pricing & setup",
        claim: "Claims",
        faq: "FAQ",
      },
      over: {
        t: "1. Overview",
        p: "The commercial property policy protects your buildings, contents and indirect liabilities through business interruption (BI). We combine competitive placement, risk engineering, and franchise/limit calibration to balance protection and budget.",
        li: [
          "Site mapping & exposures (fire, water, theft, weather).",
          "BI setup: gross margin, indemnity period (12–24–36 months).",
          "Pragmatic prevention: detection, compartmentation, maintenance.",
        ],
        kpi: ["Capacity", "BI Period", "Engineering"],
        kpi_desc: [
          "Up to market capacity",
          "12–36 months",
          "Visits & recommendations",
        ],
      },
      cov: {
        t: "2. Main coverage",
        c0: {
          t: "Property",
          li: [
            "Fire, explosion, lightning, smoke.",
            "Water damage, storm/hail/flood, natural disasters.",
            "Theft, vandalism, glass breakage and signs.",
          ],
        },
        c1: {
          t: "Business Interruption (BI)",
          li: [
            "Gross margin, additional operating expenses.",
            "Indemnity period 12–36 months.",
            "Supplier/customer damage (contingent BI).",
          ],
        },
        c2: {
          t: "Machinery & utilities",
          li: [
            "Machinery & electronics breakdown.",
            "Utility failures (energy, steam, cold) according to options.",
            "Compliance restoration costs (codes, standards).",
          ],
        },
      },
      opt: {
        t: "3. Options & prevention",
        c0: {
          t: "Climate & Natural Disasters",
          li: [
            "Storm, hail, flood, submersion extensions.",
            "Differentiated franchises by site & exposure.",
            "Weather parametric coverage (optional).",
          ],
        },
        c1: {
          t: "Prevention & engineering",
          li: [
            "Site audits, thermography, sprinkler tests.",
            "Prioritized action plan & quarterly follow-up.",
            "Business continuity guides (BCP) & scenarios.",
          ],
        },
        c2: {
          t: "Policy parameters",
          li: [
            "Insured amounts & indexing, replacement value.",
            "Sub-limits: refrigerated goods, archives, data.",
            "Coinsurance clauses & stop-loss according to profile.",
          ],
        },
      },
      admin: {
        t: "4. Pricing & setup",
        c0: {
          t: "Required data",
          li: [
            "Site list: address, activity, construction, protections.",
            "Insured amounts by category (buildings, contents, stocks).",
            "Gross margin & desired BI period.",
            "5-year claims history (frequency & severity).",
          ],
        },
        c1: {
          t: "Process",
          li: [
            "Pre-audit & recommendation of limits/franchises.",
            "Competition & negotiation of key clauses.",
            "Binders, certificates and prevention schedule.",
          ],
        },
        c2: {
          t: "Useful documents",
          li: [
            "Process plans & diagrams, machinery nomenclature.",
            "Maintenance & compliance reports (sprinklers, electrical).",
            "Business continuity plan (BCP) & emergency procedures.",
          ],
        },
      },
      claim: {
        t: "5. Claims management",
        sum: "Our approach",
        li: [
          "24/7 emergency unit, protective measures & certified experts.",
          "Rapid BI estimation & advances if provided.",
          "Reporting & feedback to reduce recurrence.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "How to set the BI indemnity period?",
        a0: "According to supply, production and sales cycles. Many industries require 18–24 months.",
        q1: "Parametric weather or traditional guarantees?",
        a1: "Parametrics trigger on an index (rain, wind...). They usefully complement damage/BI guarantees to reduce delays.",
        q2: "What value to insure (new, depreciation, declared value)?",
        a2: "Replacement value limits underinsurance but may cost more. We calibrate case by case with assessments.",
      },
      cta: {
        t: "Secure your assets and continuity",
        p: "We calibrate Property & BI, climate options and a pragmatic prevention plan.",
        quote: "Get a quote",
        talk: "Talk to an advisor",
      },
      nav: {
        prev: "Group Health & Benefits",
        next: "Transport (goods)",
      },
    },
    // Transport page specific translations
    transport: {
      title: "Cargo / Transport",
      subtitle:
        "All-risks cargo • Carrier/Freight forwarder liability • Stock Throughput • War & SRCC • Incoterms advisory • Temperature & weather parametrics options.",
      badges: [
        "Sea • Air • Road • Rail",
        "Import/export & domestic flows",
        "Traceability & packaging prevention",
      ],
      tabs: {
        over: "Overview",
        cov: "Covers",
        opt: "Options & services",
        admin: "Pricing & rollout",
        claim: "Claims",
        faq: "FAQ",
      },
      over: {
        t: "1. Overview",
        p: "We protect your import/export and domestic flows across all modes. Cargo insurance covers the goods (faculties), carrier/forwarder liability and, where needed, a continuous Stock Throughput from origin to storage and distribution.",
        li: [
          "Incoterms review to clarify risk transfer.",
          "Limit setup per shipment, vehicle, vessel or site.",
          "Packaging, lashing & traceability advice to cut breakage.",
        ],
        kpi: ["Modes", "Form", "Declaration"],
        kpi_desc: [
          "Sea • Air • Road • Rail",
          "Annual open policy",
          "Monthly / per shipment",
        ],
      },
      cov: {
        t: "2. Core covers",
        c0: {
          t: "Cargo (faculties) — All Risks",
          li: [
            "ICC (A/B/C)-type covers adapted to profile & values.",
            "General goods, bulk, containerised, project cargo.",
            "Extensions: War & SRCC where available.",
          ],
        },
        c1: {
          t: "Carrier / Freight Forwarder Liability",
          li: [
            "Legal liabilities for transport, storage & handling.",
            "Event/vehicle limits & limitation privileges.",
            "Contracts & standard terms managed with our team.",
          ],
        },
        c2: {
          t: "Stock Throughput (STP)",
          li: [
            "Continuous chain: origin → transit → warehouses → distribution.",
            "Seasonal peaks & accumulated values per site.",
            "Temperature parameters & cold-chain break (optional).",
          ],
        },
      },
      opt: {
        t: "3. Options & services",
        c0: {
          t: "Temperature & perishables",
          li: [
            "Temperature clauses / data loggers & IoT.",
            "Hot/cold deviations & salvage costs.",
            "Packaging & HACCP procedures.",
          ],
        },
        c1: {
          t: "Weather parametrics & project",
          li: [
            "Typhoon, heavy rain, wind — fast trigger.",
            "Project/heavy-lift cargo: surveys & escorts.",
            "Route plans & high-risk stops.",
          ],
        },
        c2: {
          t: "Security & prevention",
          li: [
            "Secure routes, approved parking, dual crew.",
            "Seals & geofencing, subcontractor vetting.",
            "Packaging & lashing audit (CTU Code).",
          ],
        },
      },
      admin: {
        t: "4. Pricing & rollout",
        c0: {
          t: "Required data",
          li: [
            "Flows by mode, O/D pairs, shipment values.",
            "Incoterms, packaging, frequencies & seasonal peaks.",
            "3–5 year loss history & security procedures.",
          ],
        },
        c1: {
          t: "Process",
          li: [
            "Annual open policy + declarations (EDI possible).",
            "Cargo certificates for L/C where needed.",
            "Vehicle/vessel/site limit configuration.",
          ],
        },
        c2: {
          t: "Helpful docs",
          li: [
            "B/L, AWB, CMR, packing lists & packing evidence.",
            "Temperature reports / trackers.",
            "Transport contracts & forwarder instructions.",
          ],
        },
      },
      claim: {
        t: "5. Claims handling",
        sum: "Our approach",
        li: [
          "Emergency instructions: reservations, survey, preserve evidence.",
          "Protest letter to carrier within time bars.",
          "Digital process & accelerated settlement SLA.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "When does risk transfer under Incoterms?",
        a0: "Depends on the chosen term (EXW, FOB, CIF, DDP…). We align contracts and policy accordingly.",
        q1: "Are used goods covered?",
        a1: "Yes under conditions (state, packing, testing) and sometimes specific deductibles/clauses.",
        q2: "Are delays covered?",
        a2: "Typically not under traditional damage covers; parametric add-ons can complement.",
      },
      cta: {
        t: "Secure your supply chain",
        p: "We calibrate cargo, liability & STP covers with options tailored to routes and goods.",
        quote: "Get a quote",
        talk: "Talk to an advisor",
      },
      nav: {
        prev: "Commercial Property (All Risks)",
        next: "Motor & Fleet",
      },
    },

    // Flotte page specific translations
    flotte: {
      title: "Motor & Fleet",
      subtitle:
        "TPL • Own damage (comprehensive/third-party) • Glass • Theft & fire • Driver & passengers • Assistance & courtesy car • Telematics & prevention.",
      badges: [
        "Cars / LCV / HGV & plant",
        "Telematics & data",
        "24/7 claims handling",
      ],
      tabs: {
        over: "Overview",
        cov: "Covers",
        opt: "Options & services",
        admin: "Pricing & rollout",
        claim: "Claims",
        faq: "FAQ",
      },
      over: {
        t: "1. Overview",
        p: "Fleet programmes for cars/LCV, HGV and plant. Third-party/comprehensive structures with tailored deductibles, a clear car policy and prevention to cut losses. Steering via telematics and an approved repair network.",
        li: [
          "Fleet rating (aggregate B/M; SRCC/Nat per market).",
          "Car policy on drivers, usage, zones and hours.",
          "Dashboards on frequency, severity, costs & downtime.",
        ],
        kpi: ["Fleet size", "Repair routing", "Telematics"],
        kpi_desc: ["5 – 5,000+ vehicles", "< 48h", "Devices / driver app"],
      },
      cov: {
        t: "2. Core covers",
        c0: {
          t: "Third-party liability & legal",
          li: [
            "Mandatory TPL for bodily injury and property damage.",
            "Defense/recourse & legal protection (optional).",
            "Named drivers / any driver.",
          ],
        },
        c1: {
          t: "Own damage",
          li: [
            "Comprehensive / Extended third-party (collision, vandalism, NatCat).",
            "Theft & fire, glass (windscreen, optics, ADAS sensors).",
            "New-for-old / agreed value per vehicle age.",
          ],
        },
        c2: {
          t: "People & assistance",
          li: [
            "Driver personal accident & passengers.",
            "24/7 assistance, towing, courtesy car.",
            "Geographical scope (country/EU) & Green Card.",
          ],
        },
      },
      opt: {
        t: "3. Options & services",
        c0: {
          t: "Telematics & prevention",
          li: [
            "Driver scoring, eco-driving, speed/fatigue alerts.",
            "Geo-fencing, theft/immobiliser, recovery.",
            "Coaching & focused training.",
          ],
        },
        c1: {
          t: "Repair network & parts",
          li: [
            "Approved repairers, OEM or equivalent parts.",
            "Quote/invoice & lead-time control.",
            "Mobile glass service.",
          ],
        },
        c2: {
          t: "Financial & equipment",
          li: [
            "GAP/finance shortfall (leasing).",
            "Body/build & equipment (tipper, fridge, beacons…).",
            "Young/occasional driver extensions.",
          ],
        },
      },
      admin: {
        t: "4. Pricing & rollout",
        c0: {
          t: "Required data",
          li: [
            "Fleet list (plate, make/model, energy, age, value).",
            "Use & zones (private/pro, urban/road), km/year.",
            "3–5 year loss history (frequency, severity, liability).",
          ],
        },
        c1: {
          t: "Process",
          li: [
            "Fleet policy (add/delete) & Green Cards.",
            "Deductible & car-policy set-up.",
            "Telematics deployment & reporting.",
          ],
        },
        c2: {
          t: "Helpful docs",
          li: [
            "Registrations & licences.",
            "Accident statements, photos, police reports.",
            "Quotes/invoices & work orders.",
          ],
        },
      },
      claim: {
        t: "5. Claims handling",
        sum: "Our approach",
        li: [
          "Digital/broker notification — immediate handling.",
          "Directed to network & fast survey, parts controlled.",
          "Third-party recovery & downtime tracking until return.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Young drivers — conditions?",
        a0: "Possible with specific deductibles/terms depending on the car policy and usage.",
        q1: "Glass without deductible?",
        a1: "Yes on some levels when using the approved network/mobile service.",
        q2: "Courtesy car guaranteed?",
        a2: "Depending on option (breakdown/accident), duration and category set in the policy.",
      },
      cta: {
        t: "Let's optimise your fleet",
        p: "Right covers & deductibles, efficient repair network and telematics to reduce accidents and downtime.",
        quote: "Get a quote",
        talk: "Talk to an advisor",
      },
      nav: {
        prev: "Cargo / Transport",
        next: "General / Professional Liability",
      },
    },
    rc: {
      title: "Liability Insurance",
      subtitle:
        "GL (Operations & Completed) • PI (Professional Indemnity) • Products & Recall • Environmental/Pollution. Limit structuring, contractual & international options, certificates and claims handling.",
      badges: [
        "GL & Completed ops",
        "Professional Indemnity",
        "Environmental/Pollution",
      ],
      tabs: {
        over: "Overview",
        cov: "Covers",
        opt: "Options & structure",
        admin: "International & certificates",
        claim: "Claims",
        faq: "FAQ",
      },
      over: {
        t: "1. Overview",
        p: "Liability protects against bodily injury, property damage and financial loss suffered by third parties during operations or arising from products/services. A well-structured programme reassures principals and meets contractual clauses.",
        li: [
          "GL: operations & completed ops.",
          "PI: errors/omissions, defence costs.",
          "Products & recall, environmental/pollution.",
        ],
        kpi: ["Contracts", "Territories", "Steering"],
        kpi0: "Contracts",
        kpi0l: "Client & lender clauses",
        kpi1: "Territories",
        kpi1l: "Local & international",
        kpi2: "Steering",
        kpi2l: "Frequency / severity / cost",
      },
      cov: {
        t: "2. Core coverages",
        c0: {
          t: "General Liability (GL)",
          li: [
            "Bodily injury & property damage to third parties.",
            "Completed ops, tenants' liability, neighbours' recourse.",
            "Resulting financial loss.",
          ],
        },
        c1: {
          t: "Professional Indemnity (PI)",
          li: [
            "Negligence, errors or omissions.",
            "Defence costs & experts' fees.",
            "Sub-/co-contracting (subject to terms).",
          ],
        },
        c2: {
          t: "Products & Recall",
          li: [
            "Injury/damage caused by supplied products.",
            "Withdrawal/recall and crisis communications.",
            "USA/Canada optional.",
          ],
        },
        c3: {
          t: "Environmental Liability",
          li: [
            "Sudden/accidental (sometimes gradual) pollution.",
            "Clean-up costs & biodiversity damages.",
            "Sites, projects and transit.",
          ],
        },
        note: "Occurrence or claims-made depending on the line. Limits, deductibles and jurisdictions configurable.",
      },
      opt: {
        t: "3. Options & structure",
        c0: {
          t: "Contractual",
          li: [
            "Additional insured, waiver of subrogation, severability.",
            "Extended jurisdictions incl. USA/Canada where eligible.",
            "Sector-specific clauses (agri/pharma, energy…).",
          ],
        },
        c1: {
          t: "Limits & capacity",
          li: [
            "Primary + excess (umbrella).",
            "Deductibles, SIR, stop-loss.",
            "Co-insurance & multi-market placements.",
          ],
        },
        c2: {
          t: "Prevention & steering",
          li: [
            "Contract clause review (liability).",
            "Action plans: procedures, LOTO, testing.",
            "KPIs: frequency, severity, average cost.",
          ],
        },
      },
      admin: {
        t: "4. International & certificates",
        c0: {
          t: "International programmes",
          li: [
            "Master + local policies (DIC/DIL).",
            "Tax & regulatory compliance.",
            "Certificates & cross-border claims.",
          ],
        },
        c1: {
          t: "Certificates",
          li: [
            "Multilingual, client/lender formats.",
            "Renewal & version tracking.",
            "Portals & centralisation.",
          ],
        },
        c2: {
          t: "Data & reporting",
          li: [
            "Dashboards & trends.",
            "Quarterly programme reviews.",
            "Structure arbitrage.",
          ],
        },
      },
      claim: {
        t: "5. Claims handling",
        sum: "From allegation to resolution",
        li: [
          "Support with reservations & evidence.",
          "Specialised adjusters and counsel.",
          "Mediation/settlement & lessons learned.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Occurrence vs claims-made?",
        a0: "Occurrence covers acts during the period; claims-made covers claims first made during the period (with a retroactive date).",
        q1: "Are USA/Canada included?",
        a1: "Often excluded by default; extensions and limit changes possible after risk review.",
        q2: "Does PI cover penalties?",
        a2: "Most fines/penalties are uninsurable; focus on contractual prevention and limitation clauses.",
      },
      cta: {
        quote: "Get a quote",
        talk: "Talk to an advisor",
      },
      nav: {
        prev: "Motor & Fleet",
        next: "Construction (CAR/EAR)",
      },
    },
    construction: {
      title: "Construction (CAR/EAR)",
      subtitle:
        "All Risks construction • Third-party liability • Erection & testing • Maintenance • ALoP/DSU • Contractors' plant & site property.",
      badges: [
        "Owner / EPC / Contractors",
        "Energy & infrastructure projects",
        "LMA/IUA wordings",
      ],
      tabs: {
        over: "Overview",
        cov: "Covers",
        opt: "Options & ALoP",
        req: "Documents",
        claim: "Claims",
        faq: "FAQ",
      },
      over: {
        t: "1. Overview",
        p: "CAR (Contractors' All Risks) and EAR (Erection All Risks) protect the works plus third-party liability during construction, testing and maintenance. For owners, EPC/contractors, subcontractors and engineers.",
        li: [
          "Building, civil, energy & industrial projects.",
          "Phases: construction → testing → maintenance.",
          "Optional ALoP/DSU for delay in start-up.",
        ],
        kpi: ["TPL line", "Deductibles", "Form"],
      },
      cov: {
        t: "2. Core covers",
        c0: {
          t: "Material damage to the works",
          li: [
            "Fire, explosion, storm, flood, theft.",
            "Faulty workmanship, collapse, landslip.",
            "Existing & surrounding property (sublimits).",
          ],
        },
        c1: {
          t: "Third-party liability",
          li: [
            "Bodily injury & property damage to third parties.",
            "Defence & recovery costs.",
            "Cross-liability / waiver of subrogation if stipulated.",
          ],
        },
        c2: {
          t: "Ancillary property & costs",
          li: [
            "Site property, temporary facilities.",
            "Debris removal, prevention & salvage costs.",
            "Contractors' plant & equipment (option).",
          ],
        },
      },
      opt: {
        t: "3. Options, extensions & ALoP/DSU",
        c0: {
          t: "Erection, testing & maintenance",
          li: [
            "Cold/hot testing, commissioning.",
            "Visits maintenance (12m) or extended (up to 24m).",
            "Design defects cover (DE/LEG wording if agreed).",
          ],
        },
        c1: {
          t: "ALoP / DSU",
          li: [
            "Covers lost gross profit due to insured PD on the works.",
            "Settings: indemnity period, time deductible, revenue profile.",
            "Data: schedule, critical path, O&M contracts.",
          ],
        },
        c2: {
          t: "Other common extensions",
          li: [
            "Off-site storage & inland transit.",
            "Existing/surrounding property, service interference.",
            "Sudden & accidental pollution clauses where relevant.",
          ],
        },
      },
      req: {
        t: "4. Submission & policy settings",
        c0: {
          t: "Project data",
          li: [
            "Description & value, timetable, critical path.",
            "Drawings/method statements, geotech, risk study (QRA).",
            "Roles MOA/EPC/lots, major contracts & T&Cs.",
          ],
        },
        c1: {
          t: "Policy settings",
          li: [
            "Limits, sublimits, deductibles per peril/activity.",
            "Periods: construction, testing, maintenance, ALoP.",
            "PCIP (owner controlled) or CCIP (contractor controlled).",
          ],
        },
      },
      claim: {
        t: "5. Claims handling",
        sum: "Our approach",
        li: [
          "Immediate notice, site protection & mitigation.",
          "Loss adjusters, evidence, repair follow-up.",
          "Cash-calls possible, reporting & arbitration if needed.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "CAR vs EAR: what's the difference?",
        a0: "CAR is often used for civil/building; EAR for erection/industrial equipment. Cover principles are similar.",
        q1: "How to size ALoP/DSU?",
        a1: "Based on expected gross profit over the indemnity period, with waiting period and limits. Schedule & critical path are key.",
        q2: "Who should be insured?",
        a2: "Owner, EPC/contractors, subcontractors, engineers — with cross-waivers as per wording to avoid gaps.",
      },
      cta: {
        t: "Tell us about your project",
        p: "We'll prepare a placement note, CAR/EAR wording and a market calendar.",
        quote: "Get a quote",
        talk: "Talk to an advisor",
      },
      nav: {
        prev: "Liability",
        next: "Group Health & Benefits",
      },
    },
    santecollective: {
      title: "Group Health & Benefits",
      subtitle:
        "Outpatient & Hospitalization • Dental & Vision • Maternity • Life / Death, Disability & Accidents • Networks & Direct Billing • Prevention & Wellness.",
      badges: [
        "SME to Large Accounts",
        "Care Networks & TPA",
        "Local Compliance",
      ],
      tabs: {
        over: "Overview",
        cov: "Coverage",
        opt: "Options & Networks",
        admin: "Pricing & Setup",
        claim: "Claims",
        faq: "FAQ",
      },
      over: {
        t: "1. Overview",
        p: "Modular <strong>health & benefits</strong> programs to attract and retain: outpatient care, hospitalization and maternity, dental/vision, as well as <strong>life/death, disability, accidents</strong> and critical illness. Clear governance, <em>networks & direct billing</em>, and cost management.",
        li: [
          "Plan design: levels, limits, co-pays, deductibles.",
          "Partner networks & TPA management for fast reimbursements.",
          "Prevention & wellness: checkups, vaccinations, mental health.",
        ],
        kpi: {
          0: "Population",
          1: "Reimbursement SLA",
          2: "Network",
        },
      },
      cov: {
        t: "2. Main Coverage",
        c0: {
          t: "Health (medical)",
          li: [
            "Outpatient care, specialists & lab tests.",
            "Hospitalization & maternity (limits & waiting periods).",
            "Vision & dental (schedules, prosthetics, orthodontics).",
          ],
        },
        c1: {
          t: "Benefits (risk benefits)",
          li: [
            "Life/death (capital, education annuity).",
            "Disability (temporary/permanent, IPP/ITP).",
            "Accidents & critical illness (CI).",
          ],
        },
        c2: {
          t: "Services",
          li: [
            "Direct billing networks & TPA.",
            "Telemedicine & EAP (psycho-social assistance).",
            "Evacuation & repatriation (by zones).",
          ],
        },
      },
      opt: {
        t: "3. Options & Networks",
        c0: {
          t: "Networks & Direct Billing",
          li: [
            "Access cards & partner apps.",
            "Rate agreements with clinics, dentists & opticians.",
            "Out-of-network care (schedule reimbursement).",
          ],
        },
        c1: {
          t: "Expatriates & Zones",
          li: [
            "Regional/worldwide coverage, international assistance.",
            "Local social security coordination.",
            "Specific maternity/CI options.",
          ],
        },
        c2: {
          t: "Management & Prevention",
          li: [
            "Dashboards: claims & loss ratio (LR).",
            "Wellness & screening programs.",
            "Stop-loss/ASO (if self-insured).",
          ],
        },
      },
      admin: {
        t: "4. Pricing & Setup",
        c0: {
          t: "Required Data (Quoting)",
          li: [
            "Anonymized census (age/gender, dependents, headcount).",
            "24-36 month claims history & ratio.",
            "Plan design & target budget.",
          ],
        },
        c1: {
          t: "Plan Parameters",
          li: [
            "Limits, co-pays, deductibles, waiting periods.",
            "Eligibility, waiting periods & portability.",
            "Employer/employee contribution & classes.",
          ],
        },
        c2: {
          t: "Administration & Services",
          li: [
            "Onboarding, cards & member app.",
            "Electronic transmission & e-claims.",
            "Quarterly committees & cost control actions.",
          ],
        },
      },
      claim: {
        t: "5. Claims Management",
        sum: "Our Approach",
        li: [
          "TPA & network: priority direct billing.",
          "Digital reimbursements & SLA < 5-7 days.",
          "LR reviews & anti-overconsumption measures.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Pre-existing conditions coverage?",
        a0: "Case by case depending on insurer, size & history. MHD/FMU clauses may apply.",
        q1: "Out-of-network / abroad coverage?",
        a1: "Possible with dedicated schedules & limits. Expatriates: zones and assistance to calibrate.",
        q2: "Reimbursement delays?",
        a2: "With complete e-claims, target SLA is 5 to 7 business days.",
      },
      cta: {
        t: "Let's Build Your Employee Plan",
        p: "We frame the design, networks and budget with an implementation schedule.",
        quote: "Get a Quote",
        talk: "Talk to an Advisor",
      },
      nav: {
        prev: "Construction (CAR/EAR)",
        next: "Commercial Property",
      },
    },
    sante: {
      title: "Health (Individuals)",
      subtitle:
        "Outpatient • Inpatient & maternity • Dental & optical • Telemedicine • Networks & direct billing • Plans for every budget.",
      badges: [
        "Networks & direct billing",
        "Modular plans",
        "Dental/optical options",
      ],
      tabs: {
        over: "Overview",
        cov: "Benefits",
        opt: "Options & networks",
        admin: "Pricing & enrollment",
        claim: "Claims",
        faq: "FAQ",
      },
      over: {
        t: "1. Overview",
        p: "Clear, modular individual health insurance: outpatient care, inpatient & maternity, dental/optical, with provider networks, direct billing and telemedicine. Coverage levels tailored to your budget and family situation.",
        li: [
          "Tiered plans (Essential → Comfort → Premium).",
          "Network access with direct billing (by plan).",
          "Digital services: e-card, app, e-claims.",
        ],
        kpi: {
          0: "Waiting periods",
          1: "Claims SLA",
          2: "Family",
        },
      },
      cov: {
        t: "2. Core benefits",
        c0: {
          t: "Outpatient",
          li: [
            "GPs & specialists.",
            "Diagnostics, imaging, pharmacy.",
            "Telemedicine (by plan).",
          ],
        },
        c1: {
          t: "Inpatient & maternity",
          li: [
            "Hospital & room costs.",
            "Surgery & anaesthesia.",
            "Maternity (limits & waiting).",
          ],
        },
        c2: {
          t: "Dental & optical",
          li: [
            "Dental care & prosthetics.",
            "Optical: lenses, frames, contacts.",
            "Orthodontics (by plan).",
          ],
        },
      },
      opt: {
        t: "3. Options & networks",
        c0: {
          t: "Networks & direct billing",
          li: [
            "Partner clinics, labs & pharmacies.",
            "E-card & direct settlement.",
            "Out-of-network allowed (scheduled reimbursements).",
          ],
        },
        c1: {
          t: "International & travel",
          li: [
            "Temporary extensions abroad.",
            "Medical assistance & repatriation.",
            "Travel insurance coordination.",
          ],
        },
        c2: {
          t: "Family & prevention",
          li: [
            "Spouse & children; easy newborn add.",
            "Check-ups & vaccination.",
            "Mental health (EAP).",
          ],
        },
      },
      admin: {
        t: "4. Pricing & enrollment",
        c0: {
          t: "How is pricing set?",
          li: [
            "Age, family status, care zone.",
            "Benefit level & deductibles.",
            "Options (dental/optical, maternity…).",
          ],
        },
        c1: {
          t: "Enrollment",
          li: [
            "Short medical questionnaire (by plan).",
            "Possible waiting periods.",
            "Effective date & instant e-card.",
          ],
        },
        c2: {
          t: "Documents",
          li: [
            "ID & bank details (if debit).",
            "Family proofs (dependants).",
            "Employer/visa attestations if needed.",
          ],
        },
      },
      claim: {
        t: "5. Reimbursements & approvals",
        sum: "Our approach",
        li: [
          "Network & direct billing first.",
          "Digital claims with 5–7 day SLA.",
          "Help assembling claim documents.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Are pre-existing conditions covered?",
        a0: "Depends on plan and insurer; exclusions or specific delays may apply. We guide you.",
        q1: "Are there waiting periods?",
        a1: "Often for some benefits (e.g., maternity, dental). They vary by plan and are stated in the policy.",
        q2: "Can I go out-of-network?",
        a2: "Yes, with schedule-based reimbursements. The network enables direct billing.",
      },
      cta: {
        t: "Get your health cover",
        p: "We compare offers and configure the plan that fits your needs.",
        quote: "Get a quote",
        talk: "Talk to an advisor",
      },
      nav: {
        prev: "Retirement",
        next: "Personal Accident",
      },
    },
    alv: {
      title: "Personal Accident (Individuals)",
      subtitle:
        "Accidental death & disablement • Impairment scale • Emergency medical expenses • Daily hospital cash • Fractures/burns • Assistance & education • 24/7 worldwide.",
      badges: ["Accident lump sums", "Family & education", "24/7 worldwide"],
      tabs: {
        over: "Overview",
        cov: "Benefits",
        opt: "Options & extensions",
        admin: "Pricing & enrollment",
        claim: "Claims",
        faq: "FAQ",
      },
      over: {
        t: "1. Overview",
        p: "Personal Accident insurance pays benefits in case of accidental death or bodily impairment (private life, leisure, sports). Lump sums may also cover emergencies, fractures/burns, hospital cash and assistance.",
        li: [
          "24/7 cover including abroad (per plan).",
          "Selectable sums insured with a transparent impairment scale.",
          "Family pack & education annuity option.",
        ],
        kpi: {
          0: "Death sum insured",
          1: "Disablement",
          2: "Hospital cash excess",
        },
      },
      cov: {
        t: "2. Core benefits",
        c0: {
          t: "Accidental death & disablement",
          li: [
            "Lump sum for accidental death.",
            "Capital/annuity based on impairment scale.",
            "Home adaptation (per plan).",
          ],
        },
        c1: {
          t: "Medical expenses & hospital cash",
          li: [
            "Emergency expenses (annual limits).",
            "Daily hospital cash (24–48h excess).",
            "Prosthetics/orthotics (per plan).",
          ],
        },
        c2: {
          t: "Fracture & burn schedules",
          li: [
            "Benefits by location/severity.",
            "Reconstructive/cosmetic surgery after accident.",
            "Permanent partial/total disablement.",
          ],
        },
        c3: {
          t: "Assistance & education",
          li: [
            "Repatriation, home help, childcare.",
            "Education annuity / study capital (option).",
            "Social & psychological support.",
          ],
        },
      },
      opt: {
        t: "3. Options & extensions",
        c0: {
          t: "Sums & packs",
          li: [
            "Choose sums insured by tier.",
            "Family pack: cover all members.",
            "Optional annual indexation.",
          ],
        },
        c1: {
          t: "Sports & risks",
          li: [
            "Buy-back of hazardous sports exclusions (list).",
            '"World+" long-stay extensions.',
            "Usual exclusions: illness, intentional acts…",
          ],
        },
        c2: {
          t: "Daily hospital cash",
          li: [
            "Amount selectable (24–48h excess).",
            "Max days/year by plan.",
            "Stackable with core benefits.",
          ],
        },
      },
      admin: {
        t: "4. Pricing & enrollment",
        c0: {
          t: "How is pricing set?",
          li: [
            "Age and selected sums insured.",
            "Activities & declared sports.",
            "Options (cash, extensions, family pack).",
          ],
        },
        c1: {
          t: "Enrollment",
          li: [
            "Simple declaration (no medical exam generally).",
            "Immediate effect upon binding (conditions apply).",
            "Entry/exit ages detailed in the policy.",
          ],
        },
        c2: {
          t: "Documents",
          li: [
            "ID & contact details.",
            "Activities/sports declaration.",
            "Bank details if direct debit.",
          ],
        },
      },
      claim: {
        t: "5. Claim & payment",
        sum: "Our approach",
        li: [
          "Notify within 5 business days after the accident.",
          "Docs: medical report, invoices, impairment form.",
          "Payment per schedule & sums insured.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Are sports accidents covered?",
        a0: "Yes for most leisure sports. Hazardous sports may require a specific extension.",
        q1: "What if a third party is responsible?",
        a1: "PA pays regardless of third-party liability. Recourse is handled by the insurer.",
        q2: "Is there a waiting period?",
        a2: "Usually no for pure accidents; a time excess may apply to hospital cash.",
      },
      cta: {
        t: "Protect your family against life's accidents",
        p: "We compare offers and set sums that fit your needs.",
        quote: "Get a quote",
        talk: "Talk to an advisor",
      },
      nav: {
        prev: "Health",
        next: "Home (Property)",
      },
    },
    habitation: {
      title: "Home (Property)",
      subtitle:
        "Fire • Theft • Water damage • Glass breakage • Personal liability • Valuables • Legal protection • Assistance & temporary housing.",
      badges: ["Home all-risks", "Personal liability", "24/7 assistance"],
      tabs: {
        over: "Overview",
        cov: "Covers",
        opt: "Options",
        risks: "Exclusions",
        claim: "Claims & assistance",
        faq: "FAQ",
      },
      over: {
        t: "1. Overview",
        p: "Home insurance protects your house/apartment and contents against everyday losses while covering your personal liability.",
        li: [
          "Fire, theft, water damage, weather events.",
          "Liability: damage caused to others (you, children, pets).",
          "Services: assistance, temporary rehousing, emergency repairs.",
        ],
        kpi: {
          0: "Contents sum insured",
          1: "Deductible",
          2: "Assistance",
        },
      },
      cov: {
        t: "2. Main covers",
        c0: {
          t: "Damage to home",
          li: [
            "Fire, explosion, smoke.",
            "Water damage & frost.",
            "Weather events (as per wording).",
          ],
        },
        c1: {
          t: "Theft & vandalism",
          li: [
            "Break-in, assault, scaling (per cover).",
            "Damage to premises during burglary.",
            "Valuables: specific sub-limits.",
          ],
        },
        c2: {
          t: "Personal liability",
          li: [
            "Private life (you, children, pets).",
            "Neighbors' and third-party recourse.",
            "Defense & recovery (basic legal).",
          ],
        },
      },
      opt: {
        t: "3. Options & add-ons",
        c0: {
          t: "Valuables",
          li: [
            "Jewelry, art: dedicated covers.",
            "Valuation & proof of purchase required.",
          ],
        },
        c1: {
          t: "Glass & appliances",
          li: [
            "Windows, verandas, sanitary fixtures.",
            "Electrical breakdown (optional).",
          ],
        },
        c2: {
          t: "Legal protection",
          li: [
            "Neighborhood/consumer disputes.",
            "Support & fees covered up to limits.",
          ],
        },
      },
      risks: {
        t: "4. Key exclusions (examples)",
        li: [
          "Wear & tear, lack of maintenance.",
          "Undeclared professional property.",
          "Theft without clear break-in (per policy).",
          "Uninsurable events (war, etc.).",
        ],
        note: "Conditions, limits and deductibles vary by plan and insurer. Full details appear in the policy wording.",
      },
      claim: {
        t: "5. Claims & assistance",
        sum: "What to do after a loss?",
        li: [
          "Make safe and call assistance 24/7.",
          "Notify within 5 business days (2 for theft).",
          "Keep quotes/invoices/photos for the adjuster.",
          "Temporary rehousing if uninhabitable (per cover).",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "What settlement basis applies?",
        a0: "Depending on option: new-for-old, agreed value or actual cash value with depreciation.",
        q1: "Are smart devices covered?",
        a1: "Yes under contents, with per-item/household limits. Proof of purchase may be required.",
        q2: "Can I insure a second home?",
        a2: "Yes via a dedicated extension or a separate policy depending on insurer and use.",
      },
      cta: {
        t: "Protect your home with ease",
        p: "We tailor sums insured, deductibles and options to your home and budget.",
        quote: "Get a quote",
        talk: "Talk to an advisor",
      },
      nav: {
        prev: "Personal Accident",
        next: "Life & savings",
      },
    },
    vie: {
      title: "Life insurance & savings",
      subtitle:
        "Long-term savings • Estate planning • Dirhams & unit-linked funds • Managed options • Withdrawals & policy loans • Tax per framework.",
      badges: ["Savings & estate", "Managed portfolios", "Unit-linked"],
      tabs: {
        over: "Overview",
        cov: "Benefits",
        inv: "Investment options",
        ops: "Options & withdrawals",
        fees: "Fees & tax",
        faq: "FAQ",
      },
      over: {
        t: "1. Overview",
        p: "Life insurance is a flexible wrapper to save, invest and pass on wealth over time, with lump-sum or recurring contributions and a choice of funds.",
        li: [
          "Suggested horizon: medium/long term (5–10y+).",
          "Customisable beneficiary clause (estate planning).",
          "Switches and automated management options.",
        ],
        kpi: {
          0: "Contributions",
          1: "Risk profile",
          2: "Horizon",
          "0l": "lump-sum / recurring",
          "1l": "cautious ↔ dynamic",
        },
      },
      cov: {
        t: "2. Benefits",
        c0: {
          t: "Death",
          li: [
            "Lump sum paid to designated beneficiaries.",
            "Optional floor/boosted guarantees (per policy).",
          ],
        },
        c1: {
          t: "Survival",
          li: [
            "Partial withdrawals scheduled or ad-hoc.",
            "Policy loans (advances) where available.",
          ],
        },
        c2: {
          t: "Exit options",
          li: [
            "Capital or annuity (per terms).",
            "Advanced beneficiary wording (split/option clauses).",
          ],
        },
      },
      inv: {
        t: "3. Investment options",
        c0: {
          t: "Dirham (general account)",
          li: [
            "Capital preservation objective (net of market risk).",
            "Annual return credited by insurer.",
          ],
        },
        c1: {
          t: "Unit-linked funds",
          li: [
            "Access to equity/bond/real-estate/money-market funds.",
            "Variable risk/return; capital not guaranteed.",
          ],
        },
        c2: {
          t: "Management",
          li: [
            "Self-directed or managed mandates.",
            "Auto-rebalancing, stop-loss, profit-lock.",
          ],
        },
      },
      ops: {
        t: "4. Options & withdrawals",
        li: [
          "Partial withdrawals without closing the policy (limits/fees may apply).",
          "Switches between funds (possible fees).",
          "Policy loans without selling assets.",
          "Beneficiary clause update at any time.",
        ],
        note: "Terms differ by insurer (thresholds, timing, fees, documents). We help you optimise these levers.",
      },
      fees: {
        t: "5. Fees & tax (at a glance)",
        c0: {
          t: "Fees",
          li: [
            "Entry/ongoing contract fees.",
            "Underlying unit-linked fund fees.",
            "Switch fees as per schedule.",
          ],
        },
        c1: {
          t: "Tax",
          li: [
            "Tax treatment depends on local legal framework.",
            "Potential long-term and estate advantages.",
            "We don't give tax advice — consult your advisor.",
          ],
        },
      },
      faq: {
        t: "6. FAQ",
        q0: "Can I change risk profile?",
        a0: "Yes via a switch or by opting into managed mandates; fees/timing may apply.",
        q1: "Are past returns guaranteed?",
        a1: "No. For unit-linked funds, capital is not guaranteed and values can go up or down.",
        q2: "How do I set beneficiaries?",
        a2: "Through a free-form clause. We help you draft and update it.",
      },
      cta: {
        t: "Make your savings work",
        p: "We align funds, fees and options with your horizon, risk tolerance and wealth goals.",
        quote: "Get a quote",
        talk: "Talk to an advisor",
      },
      nav: {
        prev: "Home (Property)",
        next: "Car",
      },
    },
    auto: {
      title: "RISKALIA Auto",
      subtitle: "Car insurance — Third Party+, Collision, All-Risks Premium.",
      desc: "Rigorous. Transparent. Responsive. Three coverage levels tailored to your vehicle and usage.",
      bullets: [
        "24/7 roadside assistance & partner network",
        "Driver and vehicle protection",
        "3 levels: Third+, Collision, All-Risks Premium",
      ],
      hero: {
        cta1: "Learn more",
        cta2: "Get a quote",
      },
      cards: {
        tiers: {
          title: "Third Party +",
          coverage: [
            "Mandatory liability insurance",
            "Legal defense & recourse",
            "Glass breakage",
            "Fire",
            "Optional theft",
          ],
          services:
            "<strong>Included services:</strong> 24/7 roadside assistance, partner repair network, digital claims follow-up.",
          eligibility:
            "<strong>Eligibility:</strong> Private vehicles • ≤ 20 years old • Private or light professional use.",
        },
        collision: {
          title: "Collision Damage",
          coverage: [
            "Third+ guarantees",
            "Vehicle damage (collision with identified third party)",
            "Legal protection",
          ],
          services:
            "<strong>Included services:</strong> Enhanced assistance (tow truck + on-site repair), courtesy car* (per terms), priority claims handling.",
          eligibility:
            "<strong>Eligibility:</strong> Vehicles ≤ 15 years • Compliant bonus/malus • Streamlined onboarding via broker.",
        },
        premium: {
          title: "All-Risks Premium",
          coverage: [
            "Collision Damage +",
            "All accident coverage",
            "Theft, fire, glass, natural events",
            "Replacement or new value",
            "Driver & passenger protection",
          ],
          services:
            "<strong>Included services:</strong> New/replacement value up to 36 months, premium courtesy vehicle (per options), accelerated settlement pathway.",
          eligibility:
            "<strong>Eligibility:</strong> Recent or high-end vehicles • Leasing/financed cars • Experienced drivers or executive fleets.",
        },
      },
      intro: {
        title: "Coverage tailored to your vehicle and usage",
        text:
          "Three clear levels: <span class=\"font-semibold\">Third+</span> for essentials and budget, <span class=\"font-semibold\">Collision Damage</span> to protect your car against identified third parties, and <span class=\"font-semibold\">All-Risks Premium</span> for extended protection (all accidents, enhanced value).",
      },
      value: {
        items: [
          {
            title: "Driver profile & usage review",
            text: "Identifies relevant coverage and trims unnecessary costs.",
          },
          {
            title: "Digital claims management",
            text: "Transparency, speed, and traceable settlement steps.",
          },
          {
            title: "Risk advisory & prevention",
            text: "Optimised bonus/malus and post-claim support.",
          },
        ],
      },
      cta: {
        title: "Get a tailored proposal",
        text: "We right-size your coverage based on vehicle age, usage, and driving history.",
        quote: "Get a quote",
        talk: "Talk to an advisor",
      },
      slogan:
        "RISKALIA Auto — <span class=\"rk-accent\">Rigorous.</span> <span class=\"rk-accent\">Transparent.</span> <span class=\"rk-accent\">Responsive.</span>",
      nav: {
        prev: "← Life insurance & savings",
        next: "Retirement →",
      },
    },
    retraite: {
      title: "Retirement (long-term savings)",
      subtitle:
        "Scheduled or ad-hoc contributions • Investment profiles • Glide-path de-risking • Annuity and/or lump-sum payout • Beneficiaries • Tax per local framework.",
      badges: ["Long term", "Allocation profiles", "Annuity or lump sum"],
      tabs: {
        over: "Overview",
        cov: "Key benefits",
        opt: "Investment options",
        admin: "Fees & enrollment",
        claim: "Benefits & withdrawals",
        faq: "FAQ",
      },
      over: {
        t: "1. Overview",
        p: "The Retirement solution builds long-term savings through scheduled or ad-hoc contributions invested in wrappers suited to your horizon. At maturity, choose an annuity, a lump sum, or a mix.",
        li: [
          "Automatic de-risking as retirement nears (lifecycle).",
          "Switches between funds allowed (per policy).",
          "Designated beneficiaries on death.",
        ],
        kpi: ["Suggested horizon", "Min. contribution", "Payout"],
        kpi_values: [
          "10–25 years",
          "flexible (monthly/ad-hoc)",
          "annuity, lump sum or mixed",
        ],
      },
      cov: {
        t: "2. Key benefits",
        c0: {
          t: "Savings discipline",
          li: [
            "Automated scheduled contributions.",
            "Top-ups allowed.",
            "Cost-averaging over time.",
          ],
        },
        c1: {
          t: "Framework & tax",
          li: [
            "Tax treatment per national rules.",
            "Transparent fees & reporting.",
            "Possible portability (per policy).",
          ],
        },
        c2: {
          t: "Protection & legacy",
          li: [
            "Designated beneficiaries.",
            "Reversionary annuity option (per insurer).",
            "Progressive de-risking options.",
          ],
        },
      },
      opt: {
        t: "3. Investment options",
        c0: {
          t: "Profiles",
          li: [
            "Conservative (bonds/dirham fund).",
            "Balanced (bonds/equities mix).",
            "Dynamic (equities/Thematics/ESG).",
          ],
        },
        c1: {
          t: "Steering",
          li: [
            "Free switches (caps may apply).",
            "Lifecycle glide-path to maturity.",
            "Profit-lock mechanism (optional).",
          ],
        },
        c2: {
          t: "Guarantees",
          li: [
            "Death floor (depending on fund/insurer).",
            "Certain / reversionary annuity.",
            "Optional annuity indexation.",
          ],
        },
      },
      admin: {
        t: "4. Fees & enrollment",
        c0: {
          t: "Fees (indicators)",
          li: [
            "Entry/top-up fees as per policy.",
            "Annual management fees (funds).",
            "Switch fees where applicable.",
          ],
        },
        c1: {
          t: "Enrollment",
          li: [
            "Form + ID document.",
            "Beneficiary designation.",
            "Bank details.",
          ],
        },
        c2: {
          t: "Ages & payments",
          li: [
            "Entry/termination ages per framework.",
            "Minimum contribution thresholds.",
            "Amount can be adjusted over time.",
          ],
        },
      },
      claim: {
        t: "5. Benefits & withdrawals",
        sum: "How it works",
        li: [
          "Annuity and/or lump-sum payout at maturity.",
          "Partial/full withdrawals subject to local rules.",
          "On death: transfer to named beneficiaries.",
        ],
      },
      faq: {
        t: "6. FAQ",
        q0: "Can I change my investment profile?",
        a0: "Yes, via fund switches (free or charged depending on policy). An annual cap may apply.",
        q1: "Are early withdrawals allowed?",
        a1: "Subject to local regulations (e.g., major life events). We advise case by case.",
        q2: "How are payouts taxed?",
        a2: "Taxation depends on the national framework and payout type (annuity/lump sum). We brief you on the current rules before you decide.",
      },
      cta: {
        t: "Build your retirement with confidence",
        p: "Let's align your horizon, budget and an investment profile that fits.",
        quote: "Get a quote",
        talk: "Talk to an advisor",
      },
      nav: {
        prev: "Car",
        next: "Health",
      },
    },
    // 404 Error page translations
    error: {
      title: "Page not found",
      sub: "Oops! The page you're looking for doesn't exist or has been moved.",
      homeBtn: "Back to home",
      contactBtn: "Contact us",
      quickNavTitle: "Popular pages",
      quickNavSub: "Quickly find what you're looking for",
      solutionsDesc: "Products for businesses and individuals",
      reinsuranceDesc: "Treaties, facultative, claims & arbitrations",
      climateDesc: "Identification, Quantification, Management & Reporting",
      esgDesc: "Governance, Ethics, Well-being, Diversity",
      contactDesc: "Quote request, claims, contact details",
      servicesDesc: "Training, evaluation and customized support",
      helpTitle: "Need help?",
      helpText:
        "If you think this is an error, please don't hesitate to contact us.",
      emailBtn: "contact@riskalia.ma",
      phoneBtn: "+212 666 756 991",
    },
  },
  ar: {
    meta: {
      title:
        "ريسكاليا — وساطة التأمين · إعادة التأمين · مخاطر المناخ · سياسة الاستدامة",
      desc: "ريسكاليا: وساطة بجميع الفروع، إعادة التأمين (حصص/فائض/طبقات الخسارة/إيقاف الخسارة، عمليات اختيارية) ودعم الاستدامة والمناخ (تشخيص، سيناريوهات، تأمينات معيارية، تقارير).",
    },
    nav: {
      home: "الرئيسية",
      solutions: "الحلول",
      assurance: "التأمين",
      re: "إعادة التأمين",
      climate: "مخاطر المناخ",
      services: "الخدمات الاستشارية",
      esg: "الاستدامة",
      contact: "تواصل",
    },
    hero: {
      title: "خبرة تمنحك الاطمئنان",
      slogan: "نحوّل عدم اليقين التشغيلي إلى نمو مستدام.",
      sub: "وساطة شاملة · إعادة التأمين · مخاطر المناخ · إدارة المخاطر",
      cta1: "حلولنا",
      cta2: "تواصل معنا",
    },
    solutionsPage: {
      meta: {
        title: "ريسكاليا — حلول التأمين",
        desc: "مساران: حلول للشركات والأفراد. ممتلكات، نقل بضائع، أساطيل، مسؤولية، إنشاءات، تأمين صحي جماعي، سيارات، صحة، سكن، حياة وتقاعد.",
      },
      hero: {
        title: "حلول التأمين",
        subtitle:
          "مساران: <strong>الشركات</strong> و<strong>الأفراد</strong>. منتجات وفق أفضل الممارسات (ممتلكات، نقل بضائع، أساطيل، مسؤولية، إنشاءات… / سيارة، صحة، سكن، حياة وادخار، تقاعد).",
        badges: ["مقارنة عروض السوق", "إدارة المطالبات", "شفافية كاملة"],
      },
      tabs: { corp: "الشركات", retail: "الأفراد" },
      ui: {
        clear: "مسح",
        search: "ابحث…",
        nores: "لا توجد منتجات مطابقة لبحثك.",
      },
      cta: {
        quote: "اطلب عرضاً",
        learn: "تعرّف أكثر",
        more: "تحدث إلى مستشار",
      },
      filters: {
        corp: [
          ["all", "الكل"],
          ["prop", "ممتلكات"],
          ["trans", "نقل"],
          ["fleet", "أساطيل"],
          ["liab", "مسؤولية"],
          ["const", "إنشاءات"],
          ["health", "صحة"],
        ],
        retail: [
          ["all", "الكل"],
          ["auto", "سيارة"],
          ["health", "صحة"],
          ["acc", "حوادث"],
          ["home", "سكن"],
          ["life", "حياة وادخار"],
          ["ret", "تقاعد"],
        ],
      },
      products: {
        corp: [
          {
            id: "multirisques",
            url: "Produits/multirisques.html",
            img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=60",
            cat: ["prop"],
            t: "تأمين الممتلكات والأعمال",
            p: "يحمي الأصول وخسارة الأرباح للمقار والمخازن والآلات.",
            bul: [
              "حريق، أضرار مياه، كسر آلات",
              "خسارة الأرباح (PDB)",
              "خيارات الكوارث الطبيعية والمناخ",
            ],
          },
          {
            id: "transport",
            url: "Produits/transport.html",
            img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=60",
            cat: ["trans"],
            t: "نقل البضائع",
            p: "يغطي الواردات والصادرات وسلسلة الإمداد.",
            bul: [
              "تأمين جميع أخطار البضائع",
              "مسؤولية الناقل/السمسار",
              "حلول طقس معيارية اختيارية",
            ],
          },
          {
            id: "flotte",
            url: "Produits/flotte.html",
            img: "https://images.unsplash.com/photo-1704488473677-ae044ef0d289?auto=format&fit=crop&w=1200&q=60",
            cat: ["fleet"],
            t: "السيارات والأساطيل",
            p: "من 5 إلى 5000 مركبة، إدارة مطالبات وتليماتيك.",
            bul: [
              "مسؤولية/شامل/زجاج",
              "مساعدة وبدل مركبة",
              "لوحات متابعة المطالبات",
            ],
          },
          {
            id: "rc",
            url: "Produits/rc.html",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=60",
            cat: ["liab"],
            t: "المسؤولية العامة/المهنية",
            p: "مسؤولية عامة، مهنية، تلوث ومنتجات.",
            bul: [
              "تشغيل وما بعد التسليم",
              "مسؤولية مهنية",
              "مسؤولية بيئية",
            ],
          },
          {
            id: "construction",
            url: "Produits/construction.html",
            img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=60",
            cat: ["const"],
            t: "الإنشاءات (CAR/EAR)",
            p: "جميع أخطار المشاريع وضمان التأخير في التشغيل.",
            bul: [
              "مشاريع مدنية وطاقة وبنية تحتية",
              "خسارة أرباح المشروع",
              "تغطيات حسب مراحل المشروع",
            ],
          },
          {
            id: "santecollective",
            url: "Produits/santecollective.html",
            img: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&w=1200&q=60",
            cat: ["health"],
            t: "تأمين صحي جماعي ومزايا",
            p: "برامج طبية ومخاطر للموظفين.",
            bul: [
              "شبكات طبية وتيار دفع مباشر",
              "خطط للمديرين والموظفين",
              "إدارة التكاليف والوقاية",
            ],
          },
        ],
        retail: [
          {
            id: "auto",
            url: "Produits/auto.html",
            img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=60",
            cat: ["auto"],
            t: "ريسكاليا تأمين السيارات",
            p: "تأمين السيارات — المسؤولية المدنية+، التصادم، جميع الأخطار.",
            bul: [
              "مساعدة 24/7 وشبكة معتمدة",
              "حماية السائق والمركبة",
              "ثلاث مستويات تغطية",
            ],
          },
          {
            id: "sante",
            url: "Produits/sante.html",
            img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=60",
            cat: ["health"],
            t: "الصحة",
            p: "عيادات، استشفاء، بصريات وأسنان.",
            bul: [
              "شبكات وشركات طبية",
              "خطط مرنة",
              "مساعدة 24/7",
            ],
          },
          {
            id: "alv",
            url: "Produits/alv.html",
            img: "https://images.unsplash.com/photo-1633158832532-f71e9c7ac6d6?auto=format&fit=crop&w=1200&q=60",
            cat: ["acc"],
            t: "حوادث الحياة",
            p: "تعويضات عن الحوادث المنزلية والترفيهية.",
            bul: [
              "تعويضات العجز",
              "راتب التعليم",
              "مساعدة منزلية",
            ],
          },
          {
            id: "habitation",
            url: "Produits/habitation.html",
            img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=60",
            cat: ["home"],
            t: "السكن (الممتلكات)",
            p: "حريق، سرقة، أضرار مياه، مسؤولية خاصة.",
            bul: [
              "قيمة جديدة حسب الخيارات",
              "حماية قانونية",
              "تغطية المقتنيات الثمينة",
            ],
          },
          {
            id: "vie",
            url: "Produits/vie.html",
            img: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1200&q=60",
            cat: ["life"],
            t: "تأمين الحياة والادخار",
            p: "ادخار، نقل ثروة ونمو رأس المال.",
            bul: [
              "صناديق بالدرهم ووحدات استثمار",
              "تحويلات وإرشاد ضريبي",
              "خيارات المستفيد",
            ],
          },
          {
            id: "retraite",
            url: "Produits/retraite.html",
            img: "https://images.unsplash.com/photo-1562557082-7f2785d741e7?auto=format&fit=crop&w=1200&q=60",
            cat: ["ret"],
            t: "التقاعد",
            p: "بناء دخل أو ادخار طويل الأجل.",
            bul: [
              "دفعات مجدولة",
              "كفاءة ضريبية (حسب الإطار)",
              "خيارات تحويل المعاش",
            ],
          },
        ],
      },
    },
    assurance: {
      label: "التأمين",
      title: "التأمين",
      subtitle: "حلول واضحة للجميع",
      description: "مساران: الشركات والأفراد، مستوحيان من أفضل ممارسات السوق.",
      entreprises: {
        title: "الشركات",
        item1: "التأمين متعدد المخاطر للشركات",
        item2: "النقل (البضائع)",
        item3: "السيارات والأسطول",
        item4: "المسؤولية المدنية",
        item5: "البناء",
        item6: "الصحة الجماعية والضمان",
        link: "عرض جميع الحلول ←",
      },
      particuliers: {
        title: "الأفراد",
        item1: "الصحة",
        item2: "حوادث الحياة",
        item3: "الممتلكات (السكن)",
        item4: "التأمين على الحياة والاستثمارات",
        item5: "سفر شنغن",
        item6: "التقاعد",
        link: "عرض جميع الحلول ←",
      },
    },
    reassurance: {
      label: "إعادة التأمين",
      title: "إعادة التأمين في المعاهدات والتنازلات الاختيارية:",
      subtitle: "إتقان شامل من البداية إلى النهاية",
      traites: {
        title: "اتفاقيات إعادة تأمين مُصمَّمة خصيصًا للمحافظ: من التصميم إلى التعويض.",
        desc: "نصمم برامج إعادة تأمين واضحة ومستدامة، متوافقة مع أهدافكم التقنية والمالية. كل اتفاقية مُعدة لضمان الاستقرار والشفافية والأداء المستدام على المدى الطويل.",
      },
      facultatives: {
        title: "التنازلات في إعادة التأمين الاختيارية: تنازلاتكم... خبرتنا.",
        desc: "حلول إعادة تأمين متكاملة، مخصصة لاحتياجات كل مؤمَّن أو مؤمِّن. يقوم نهجنا على اختيار الأسواق بعناية، وصياغة بنود دقيقة، ومتابعة تعاقدية مثالية.",
      },
      sinistres: {
        title: "تدبير التعويضات والدعم على مدار الساعة: سرعة، إتقان، وانضباط.",
        desc: "من لحظة وقوع الحادث، نقوم بتعبئة فريق مخصص لتنسيق الخبرات، وضمان تواصل واضح، وتحقيق تسوية سريعة. كل خطوة تعزز الثقة واستمرارية الشراكة.",
      },
      cta: "استكشاف إعادة التأمين",
    },
    climate: {
      label: "مخاطر المناخ",
      title: "مخاطر المناخ — من التحليل إلى العمل",
      cartographie: {
        title: "رسم الخرائط والسيناريوهات",
        desc: "التحليل الفيزيائي والانتقالي واختبارات الضغط. أهمية نسبية حسب المواقع والأعمال وسلاسل القيمة تعطي الأولوية للمخاطر وتوضح قرارات الاستثمار واستمرارية الأعمال.",
      },
      modelisation: {
        title: "النمذجة والنقل",
        desc: "تقدير الحد الأقصى للخسارة المحتملة/متوسط الخسارة السنوية المناخية وحلول النقل المتكيفة: المعايير الجوية، الشركات التابعة، إعادة التأمين. محفزات بسيطة وقابلة للتحقق للتعويضات السريعة والمتوقعة، متماشية مع المخاطر.",
      },
      resilience: {
        title: "المرونة والتقارير",
        desc: "خطط التكيف المنظمة والنفقات الرأسمالية الخضراء، مؤشرات TCFD/ISSB ومتطلبات المقرضين. تقارير مفيدة للمديرين التنفيذيين والمراجعين لمراقبة التقدم وإثبات مصداقية النظام.",
      },
      cta_button: "اكتشف عرض مخاطر المناخ",

      // Climate page specific content
      meta: {
        title: "ريسكاليا — مخاطر المناخ",
        desc: "تحديد وقياس وإدارة آثار المناخ: مخاطر الانتقال، سيناريوهات RCP/SSP، خارطة طريق للتكيّف، نقل المخاطر والإفصاح TCFD/ISSB.",
      },
      ui: { search: "…🔎" },
      aria: {
        nav: "التنقل الرئيسي",
        submenu_solutions: "القائمة الفرعية للحلول",
        langswitch: "اختيار اللغة",
      },
      title: "مخاطر المناخ",
      subtitle:
        "تحديد وقياس وإدارة آثار المناخ: مخاطر الانتقال، سيناريوهات RCP/SSP، خارطة طريق للتكيّف، نقل المخاطر والإفصاح TCFD/ISSB.",
      method:
        "نبدأ من خسائركم السابقة وتحمّل المخاطر لديكم، نحاكي عدة عتبات ونختار ما يوازن الكلفة والحماية ورأس المال.",
      cta: {
        contact: "تواصل معنا",
        advisor: "تحدث مع خبير",
      },
      intro_climate: {
        title: "التحدي المناخي في المغرب",
        content:
          "أضحى تغيّر المناخ من أكبر عوامل المخاطر لاقتصادات إفريقيا والمغرب. من الضروري الانتقال من المنطق التفاعلي إلى النهج الاستباقي: قياس، تخطيط وتغطية.",
      },
      sec: {
        intro: {
          t: "مقدمة",
          p1: "أضحى تغيّر المناخ من أكبر عوامل المخاطر لاقتصادات إفريقيا والمغرب. الجفاف المتكرر وإجهاد المياه وموجات الحر والفيضانات السريعة وحرائق الغابات لم تعد استثنائية بل تميل للتكرار والتكثف.",
          impacts_title: "في المغرب، الآثار قابلة للقياس بالفعل:",
          impact1: "خسائر زراعية وتراجع المردودية،",
          impact2: "أضرار بالبنى التحتية واضطراب سلاسل الإمداد،",
          impact3: "ارتفاع تكاليف الطاقة والمياه،",
          impact4: "آثار صحية وتراجع الإنتاجية.",
          conclusion:
            "تطال هذه المخاطر جميع فئات الفاعلين: المؤمنون، معيدو التأمين، الشركات، الجماعات، وكذلك الأسر والمستثمرون. أمام هذا الواقع، من الضروري الانتقال من المنطق التفاعلي (الإدارة بعد الحدث) إلى النهج الاستباقي (قياس، تخطيط وتغطية).",
        },
        risks: {
          t: "المخاطر الفيزيائية والانتقالية",
          phys: { t: "المخاطر الفيزيائية" },
          distinction: "نميز:",
          acute: "المخاطر الحادة",
          acute_desc:
            "أحداث مفاجئة ومدمرة مثل الفيضانات الحضرية والعواصف العنيفة وموجات الحر الشديدة أو حرائق الغابات. تسبب أضراراً فورية للمباني والمعدات والشبكات ويمكن أن تقطع النشاط.",
          chronic: "المخاطر المزمنة",
          chronic_desc:
            "تأثيرات تدريجية لكن دائمة مثل ارتفاع متوسط درجات الحرارة وندرة المياه أو تآكل السواحل. تضعف المحاصيل وترفع تكاليف الري وتعدل ظروف التشغيل الصناعي والزراعي.",
          trans: { t: "مخاطر الانتقال" },
          trans_intro: "تنبع من التطور نحو اقتصاد منخفض الكربون:",
          trans1: "تنظيمات جديدة (ضرائب الكربون، معايير تقارير ESG)،",
          trans2: "متطلبات الممولين والمؤمنين الدوليين،",
          trans3:
            "تحول سلاسل القيمة العالمية (مصدرون خاضعون لمعايير مناخية صارمة)،",
          trans4: "توقعات مجتمعية وسمعة (مستثمرون، مستهلكون).",
          why_title: "لماذا هذا مهم؟",
          why_desc:
            "لأن الفاعل الذي لا يستبق هذه التطورات قد يفقد التمويل أو يرى التكاليف ترتفع أو يفوت فرص السوق.",
        },
        data: {
          t: "البيانات والسيناريوهات",
          collect: {
            t: "الجمع والتحليل",
            p: "نبدأ من بيانات ملموسة: سجلات الخسائر، قواعد بيانات مناخية متاحة في المغرب ودولياً، بيانات محلية للأمطار أو درجة الحرارة، وكذلك شهادات وملاحظات من فرقكم.",
          },
          map: {
            t: "رسم الخرائط",
            intro: "نترجم هذه البيانات إلى خرائط واضحة:",
            conclusion:
              "كل خريطة تبرز الأصول الحرجة ونقاط الهشاشة في عملياتكم.",
          },
          map1: "مناطق زراعية معرضة للجفاف،",
          map2: "مدن معرضة لخطر الفيضانات،",
          map3: "مناطق صناعية تواجه موجات حر.",
          scen: {
            t: "سيناريوهات مستقبلية",
            intro: "نبني مسارات لآفاق 2030 و2050 لاختبار قوة استراتيجياتكم:",
          },
          scen1: "كم يوماً إضافياً من الحر الشديد؟",
          scen2: "ما تكرار الفيضانات في أي منطقة؟",
          scen3: "ما التأثير على الإنتاجية الزراعية أو الصناعية؟",
          kpi: {
            title: "المؤشرات الرئيسية",
            intro: "نترجم كل هذا إلى مؤشرات بسيطة:",
            aal: "متوسط الخسائر السنوية",
            pml: "الخسارة القصوى المحتملة",
            costs: "تطور التكاليف",
            impact: "التأثير المالي",
          },
          objective: "الهدف",
          objective_desc:
            "جعل البيانات المناخية قابلة للقراءة والمقارنة والاستخدام المباشر في قرارات الإدارة والتمويل والتأمين.",
        },
        strategy: {
          t: "الاستراتيجية وخارطة الطريق",
          intro:
            "الاستراتيجية الجيدة لا تقتصر على إعداد تقييم. يجب أن تؤدي إلى خطة عمل مرتبة وعملية.",
          steps_title: "الخطوات الأربع",
          step1_title: "قياس",
          step1_desc: "تحديد نقاط ضعفكم بوضوح وتقدير تكلفتها.",
          step2_title: "تقليل",
          step2_desc:
            "تنفيذ تدابير التكيف (تعزيز البنية التحتية الحساسة، الاستثمار في حلول ري فعالة، وضع خطط استمرارية الأعمال).",
          step3_title: "نقل",
          step3_desc:
            "استكمال الوقاية بآليات التأمين وإعادة التأمين، التقليدية أو المعيارية.",
          step4_title: "توجيه",
          step4_desc: "مراقبة تطور المخاطر وتحديث حمايتكم بانتظام.",
          roadmap: { t: "خارطة طريق ريسكاليا" },
          roadmap_intro: "نسلم خارطة طريق لـ 12 إلى 24 شهراً، منظمة في:",
          quickwins_title: "انتصارات سريعة",
          quickwins_desc: "تدابير منخفضة التكلفة ذات تأثير فوري عالي.",
          investments_title: "استثمارات أولوية",
          investments_desc: "إجراءات مرونة للتخطيط والتمويل.",
          coverage_title: "برنامج تغطية",
          coverage_desc: "تأمين تقليدي و/أو معياري متكيف مع تعرضاتكم.",
          benefit_title: "الفائدة",
          benefit_desc:
            "لديكم خطة واضحة، مفهومة من قبل التنفيذيين والعمليات، يمكن تتبعها مع الوقت.",
        },
        finance: {
          t: "التمويل ونقل المخاطر",
          fund: {
            t: "تمويل التكيف",
            intro: "للتكيف المناخي كلفة. لكن توجد رافعات:",
          },
          fund1: "منح وبرامج عامة للزراعة والمياه والطاقة،",
          fund2: "خطوط ائتمان خضراء من البنوك المحلية والدولية،",
          fund3: "ضمانات عامة (مثل تمويلكم) لتقليل تكلفة المخاطر،",
          fund4: "شراكات عامة-خاصة لتجميع استثمارات الحماية.",
          transfer: {
            t: "نقل المخاطر",
            intro: "يلعب التأمين دوراً رئيسياً:",
          },
          transfer1_title: "منتجات تقليدية",
          transfer1_desc:
            "أضرار الممتلكات، كوارث طبيعية، متعدد المخاطر الزراعية.",
          transfer2_title: "معايير جوية",
          transfer2_desc:
            "تفعيل تلقائي إذا تجاوز مؤشر (مطر، حرارة، رياح، جفاف) عتبة. تعويض سريع، نزاعات أقل، قابلية تنبؤ أكثر.",
          transfer3_title: "برامج مجمعة",
          transfer3_desc: "تغطية لمجموعات المزارعين أو التعاونيات أو البلديات.",
          transfer4_title: "إعادة تأمين ومجمعات",
          transfer4_desc: "تأمين القدرة على المخاطر الكبرى.",
          blended: {
            t: "تمويل مختلط",
            desc: "في بعض الحالات، نجمع المنح والقروض التنازلية والتأمين لجعل المشاريع قابلة للتمويل المصرفي وتخفيف التكلفة النهائية للمؤمن عليهم.",
          },
          role: { t: "دور ريسكاليا", intro: "نتدخل في:" },
          role1: "الهيكلة المالية",
          role2: "تصميم التغطيات",
          role3: "مصادر القدرة",
          role4: "الحوكمة والتتبع",
          promise_title: "وعدنا",
          promise_desc: "تحويل قيد مالي إلى حل مستدام ودائم.",
        },
        value: {
          t: "القيمة المضافة لريسكاليا",
          expertise_title: "خبرة محلية ودولية",
          expertise_desc: "معرفة الواقع المغربي ومعايير أفضل الممارسات.",
          approach_title: "نهج تعليمي",
          approach_desc: "تبسيط، تعميم وإشراك جميع مستويات القرار.",
          solutions_title: "حلول مبتكرة",
          solutions_desc: "تأمين معياري، مخططات مجمعة، شراكات عامة-خاصة.",
          impact_title: "تأثير ملموس",
          impact_desc: "نقاط ضعف مخفضة، مرونة محسنة ووصول أفضل للتمويل.",
        },
        faq: { t: "الأسئلة الشائعة" },
      },
      faq: {
        q1: "من أين نبدأ إذا كانت لدينا بيانات قليلة؟",
        a1: "تقييم سريع يوفر رؤية أولى في 3-4 أسابيع، حتى مع بيانات محدودة.",
        q2: "كم يلزم من الوقت للحصول على خطة عمل؟",
        a2: "يمكن تسليم خطة أولى مرتبة في أقل من شهر، مع إجراءات سريعة ورؤية لـ 12-24 شهراً.",
        q3: "هل يمكن لإعادة التأمين تغطية المخاطر المناخية؟",
        a3: "نعم، من خلال معاهدات CatNat، وأيضاً عبر حلول معيارية مصممة خصيصاً للجفاف والفيضانات أو موجات الحر.",
        q4: "ما هي التغطية المعيارية؟",
        a4: "هو تأمين يُفعّل بمؤشر (مثل حجم الأمطار، درجة الحرارة). يُدفع التعويض تلقائياً، دون انتظار خبرة طويلة ومكلفة.",
      },
      contact: {
        title: "مستعد لاستباق المخاطر المناخية؟",
        subtitle: "لنبدأ بتقييم سريع لتعرضاتكم وفرصكم.",
      },
  footer: {
    col1: {
      title: "ريسكاليا",
      address:
        "شركة وساطة واستراتيجيات معتمدة من هيئة مراقبة التأمينات (ACAPS).<br/>المقر: 16 شارع تيرف، الطابق الثاني،<br/>حي مرس سلطان، الدار البيضاء.",
      notice:
        "وسيط تأمين يخضع للقانون 17-99 المتعلق بمدونة التأمينات.<br/>بموجب القرار رقم COU5047.00000.0.C.2025.472."
    },
    col2: { title: "التنقل" },
    col3: { title: "تأمين الأفراد" },
    col4: { title: "تأمين الشركات" },
    col5: {
      title: "الاتصال",
      tel1label: "هاتف:",
      tel1: "+212 666 756 991",
      tel2label: "هاتف:",
      tel2: "+212 675 208 909",
      emailLabel: "البريد الإلكتروني:",
      email: "contact@riskalia.ma"
    },
    copyright: "© " + new Date().getFullYear() + " ريسكاليا. جميع الحقوق محفوظة."
  },

  produits: {
    auto: "تأمين السيارات",
    habitation: "تأمين السكن",
    sante: "التأمين الصحي",
    alv: "تأمين الحوادث الفردية",
    vie: "تأمين الحياة",
    retraite: "تأمين التقاعد",
    multirisques: "تأمين متعدد الأخطار",
    flotte: "تأمين الأسطول",
    rc: "تأمين المسؤولية المدنية",
    construction: "تأمين البناء",
    santecollective: "تأمين صحي جماعي",
    transport: "تأمين النقل"
  },

  nav: {
    home: "الرئيسية",
    solutions: "الحلول",
    re: "إعادة التأمين",
    climate: "المخاطر المناخية",
    esg: "البيئة والمجتمع والحوكمة",
    services: "الخدمات والاستشارات"
  },
},
    reinsurance: {
      hero: {
        title: "إعادة التأمين — البرامج والاستشارة",
        subtitle:
          "حمايات متوافقة مع أولوياتكم: استقرار النتائج، حماية رأس المال، دعم النمو والامتثال.",
      },
      toc: {
        promise: "وعدنا",
        programs: "البرامج",
        markets: "الأسواق",
        claims: "المطالبات",
        data: "البيانات",
        optimization: "التحسين",
        compliance: "الامتثال",
        faq: "الأسئلة الشائعة",
      },
      s1: {
        title: "وعدنا",
        intro:
          "نرافقكم في بناء وتحسين برامج إعادة التأمين الخاصة بكم، من البداية إلى النهاية.",
        concrete: {
          title: "ملموس",
          item1: "حصص الحصة: تتنازلون عن حصة ثابتة من الأقساط والمطالبات.",
          item2:
            "الفائدة: تخفيف العبء على رأس المال وزيادة القدرة (النمو، خطوط جديدة).",
          item3: "الفائض: تحتفظون بقاعدة وتتنازلون عن الفائض.",
        },
        method: {
          title: "الطريقة",
          item1: "تحليل بياناتكم التاريخية وشهيتكم للمخاطر.",
          item2: "تحديد حجم البرامج (الاحتفاظ، الحدود، الهندسة).",
          item3: "التفاوض مع الأسواق والمتابعة حتى الربط.",
        },
        example: {
          title: "مثال",
          text: "شركة تأمين سيارات: نحلل مطالباتها حسب فئة المركبة، نحدد حجم برنامج حصص الحصة بنسبة 20% مع حد 2 مليون درهم لكل مطالبة، ونفاوض مع 3 شركات إعادة تأمين A+ للحصول على أفضل الشروط.",
        },
      },
      s2: {
        title: "البرامج",
        proportional: {
          title: "النسبية",
          qs: {
            title: "حصص الحصة",
            desc: "تتنازلون عن حصة ثابتة من الأقساط والمطالبات (مثال: 20%).",
            utility:
              "الفائدة: تخفيف العبء على رأس المال وزيادة القدرة (النمو، خطوط جديدة).",
            example:
              "مثال: شركة تأمين سيارات تتنازل عن 20% من محفظتها لتحرير رأس المال وتمويل اكتساب خطوط جديدة.",
          },
          surplus: {
            title: "الفائض",
            desc: "تحتفظون بقاعدة وتتنازلون عن الفائض (مثال: 1 مليون درهم احتفاظ، 4 ملايين درهم قدرة).",
            utility:
              "الفائدة: تحسين رأس المال مع الحفاظ على التعرض المتحكم فيه.",
            example:
              "مثال: شركة تأمين تحتفظ بمليون درهم لكل مطالبة وتتنازل حتى 4 ملايين درهم لتحسين رأس مالها مع الحفاظ على التعرض المتحكم فيه.",
          },
        },
        nonproportional: {
          title: "غير النسبية",
          xol: {
            title: "XoL (فائض الخسارة)",
            desc: "تحتفظون بالاحتفاظ وتتنازلون عن الفائض (مثال: 500 ألف درهم احتفاظ، 2 مليون درهم حد).",
            utility: "الفائدة: الحماية ضد المطالبات الكبرى مع تحسين رأس المال.",
            example:
              "مثال: شركة تأمين تحتفظ بـ 500 ألف درهم لكل مطالبة وتتنازل حتى 2 مليون درهم للحماية ضد المطالبات الكبرى.",
          },
          stoploss: {
            title: "إيقاف الخسارة",
            desc: "تتنازلون عن فائض نسبة المطالبات (مثال: 75% نسبة مطالبات).",
            utility: "الفائدة: الحماية ضد تدهور النتيجة التقنية.",
            example:
              "مثال: شركة تأمين تتنازل عن فائض 75% نسبة مطالبات للحماية ضد تدهور النتيجة التقنية.",
          },
        },
        innovative: {
          title: "المبتكرة",
          parametric: {
            title: "المعيارية",
            desc: "إطلاق تلقائي إذا تجاوز مؤشر عتبة (مثال: المطر، درجة الحرارة).",
            utility: "الفائدة: تعويض سريع، نزاعات أقل، قابلية تنبؤ أكبر.",
            example:
              "مثال: شركة تأمين زراعية تستخدم مؤشر هطول الأمطار لإطلاق التعويضات تلقائياً.",
          },
          captive: {
            title: "الشركات التابعة",
            desc: "شركة تأمين فرعية مخصصة لإدارة مخاطر المجموعة.",
            utility: "الفائدة: تحسين تكلفة المخاطر وتوليد الإيرادات.",
            example:
              "مثال: مجموعة صناعية تنشئ شركة تابعة لإدارة مخاطرها وتحسين تكلفة مخاطرها.",
          },
        },
        benchmark: {
          title: "المعيار المرجعي",
          text: "نقارن برامجكم مع برامج السوق لتحديد فرص التحسين.",
        },
      },
      s3: {
        title: "الأسواق",
        strategy: {
          title: "الاستراتيجية",
          intro: "نحدد استراتيجية وضعكم بناءً على أهدافكم وشهيتكم للمخاطر.",
          steps: {
            step1: "تحليل بياناتكم التاريخية وشهيتكم للمخاطر.",
            step2: "تعريف استراتيجية وضعكم (نسبية مقابل غير نسبية).",
            step3: "تحديد حجم البرامج (الاحتفاظ، الحدود، الهندسة).",
            step4: "اختيار الأسواق والتفاوض على الشروط.",
            step5: "متابعة وتحسين البرامج.",
          },
        },
        terms: {
          title: "الشروط",
          intro: "نفاوض أفضل الشروط مع الأسواق لتحسين تكلفة مخاطركم.",
          items: {
            item1: "معدلات عمولة محسنة.",
            item2: "بنود مراجعة متكيفة مع ملفكم الشخصي.",
            item3: "شروط مطالبات مواتية.",
            item4: "ضمانات القدرة والاستقرار.",
          },
        },
        control: {
          title: "التحكم",
          intro: "نضمن متابعة ومراقبة برامجكم لضمان فعاليتها.",
          items: {
            item1: "متابعة نسب المطالبات والعمولات.",
            item2: "مراقبة الإعلانات والتسويات.",
            item3: "تحسين البرامج بناءً على النتائج.",
            item4: "تقارير منتظمة عن أداء البرامج.",
          },
        },
        benefit: {
          title: "الفائدة",
          text: "لديكم برنامج إعادة تأمين محسن، متكيف مع ملفكم الشخصي للمخاطر وأهدافكم، مع متابعة صارمة وتحسين مستمر.",
        },
      },
      s4: {
        title: "المطالبات",
        objective: {
          title: "الهدف",
          text: "نرافقكم في إدارة المطالبات لضمان تسوية سريعة وعادلة.",
        },
      },
      s5: {
        title: "البيانات",
        goal: {
          title: "الهدف",
          text: "نساعدكم في هيكلة وتحليل بياناتكم لتحسين برامج إعادة التأمين الخاصة بكم.",
        },
      },
      s6: {
        title: "التحسين",
        architecture: {
          title: "الهندسة المعمارية",
          intro: "نحسن هندسة برامجكم لتعظيم فعاليتها.",
          items: {
            item1: "تحليل أداء البرامج الموجودة.",
            item2: "تحديد فرص التحسين.",
            item3: "إعادة تحديد حجم البرامج إذا لزم الأمر.",
            item4: "تنفيذ برامج جديدة إذا كان ذلك مناسباً.",
          },
        },
        efficiency: {
          title: "الكفاءة",
          intro: "نحسن كفاءة برامجكم لتقليل تكلفة مخاطركم.",
          items: {
            item1: "تحسين الاحتفاظ والحدود.",
            item2: "تحسين شروط المطالبات.",
            item3: "التفاوض على عمولات أفضل.",
            item4: "تنفيذ برامج مبتكرة.",
          },
        },
        counterparties: {
          title: "الطرف المقابل",
          intro: "ننوع طرفكم المقابل لتقليل تركيز مخاطركم.",
          items: {
            item1: "اختيار طرف مقابل قوي ومستقر.",
            item2: "تنويع جغرافي وقطاعي.",
            item3: "التفاوض على شروط تفضيلية.",
            item4: "متابعة أداء الطرف المقابل.",
          },
        },
        examples: {
          title: "أمثلة",
          intro: "إليكم بعض أمثلة التحسين التي قمنا بها:",
          examples: {
            ex1: "شركة تأمين سيارات: تحسين برنامج حصص الحصة من 20% إلى 15% مع عمولة أفضل.",
            ex2: "شركة تأمين منازل: تنفيذ برنامج XoL للحماية ضد المطالبات الكبرى.",
            ex3: "شركة تأمين صحة: تحسين برنامج إيقاف الخسارة لتقليل تكلفة المخاطر.",
          },
        },
      },
      s7: {
        title: "الامتثال",
        intro: "نرافقكم في الامتثال التنظيمي لبرامج إعادة التأمين الخاصة بكم.",
        policy: {
          title: "السياسة",
          intro: "نساعدكم في تعريف وتنفيذ سياسة إعادة التأمين الخاصة بكم.",
          items: {
            item1: "تعريف أهداف واستراتيجية إعادة التأمين.",
            item2: "تنفيذ العمليات والضوابط.",
            item3: "تدريب الفرق على قضايا إعادة التأمين.",
            item4: "متابعة وإعداد التقارير عن أداء البرامج.",
          },
        },
        orsa: {
          title: "ORSA",
          intro:
            "نرافقكم في إجراء تقييم المخاطر والملاءة المالية الخاصة بكم (ORSA).",
          items: {
            item1: "تحليل المخاطر والملاءة المالية.",
            item2: "تقييم ملاءمة برامج إعادة التأمين.",
            item3: "توصيات لتحسين البرامج.",
            item4: "التوثيق وإعداد التقارير للسلطات.",
          },
        },
        reporting: {
          title: "إعداد التقارير",
          intro:
            "نساعدكم في تنفيذ إعداد تقارير فعال عن برامج إعادة التأمين الخاصة بكم.",
          items: {
            item1: "تعريف مؤشرات الأداء.",
            item2: "تنفيذ لوحات المعلومات.",
            item3: "إعداد تقارير منتظمة للإدارة.",
            item4: "تحليل الاتجاهات والفرص.",
          },
        },
        deliverables: {
          title: "النتائج",
          intro: "نقدم وثائق واضحة ومفهومة:",
          items: {
            item1: "سياسة إعادة التأمين موثقة.",
            item2: "برامج إعادة التأمين محسنة.",
            item3: "تقارير عن أداء البرامج.",
            item4: "توصيات للتحسين المستمر.",
          },
        },
        purpose: {
          title: "الهدف",
          text: "لديكم برنامج إعادة تأمين متوافق ومحسن وفعال، مع متابعة صارمة وتحسين مستمر.",
        },
      },
      s8: {
        title: "الأسئلة الشائعة",
        q1: {
          question: "ما هو إعادة التأمين؟",
          answer:
            "إعادة التأمين هي تأمين شركات التأمين. تسمح بنقل جزء من المخاطر إلى شركات إعادة التأمين لحماية رأس المال وتحسين القدرة.",
        },
        q2: {
          question: "ما هي أنواع إعادة التأمين؟",
          answer:
            "هناك نوعان رئيسيان: نسبي (حصص الحصة، الفائض) وغير نسبي (XoL، إيقاف الخسارة).",
        },
        q3: {
          question: "كيف نحسن برنامج إعادة التأمين؟",
          answer:
            "التحسين يمر عبر تحليل البيانات، تحديد حجم البرامج، التفاوض على الشروط ومتابعة الأداء.",
        },
        q4: {
          question: "ما هي قضايا الامتثال؟",
          answer:
            "الامتثال التنظيمي يتضمن تنفيذ سياسة إعادة التأمين، إجراء ORSA وإعداد تقارير منتظمة.",
        },
        q5: {
          question: "كيف نختار الطرف المقابل؟",
          answer:
            "اختيار الطرف المقابل يجب أن يعتمد على قوته المالية، استقراره، خبرته وشروطه التجارية.",
        },
      },
      cta: {
        title: "تحتاجون إعادة تأمين؟",
        subtitle: "صفوا مشروعكم: نجيب خلال 24-48 ساعة.",
        contact: "اتصلوا بنا",
      },
      contact: {
        title: "الاتصال",
        subtitle: "نحن هنا لمرافقتكم في مشاريع إعادة التأمين الخاصة بكم.",
        quote: "احصلوا على عرض سعر",
        advisor: "اتصلوا بمستشار",
      },
    },
    services: {
      label: "الخدمات الاستشارية",
      title: "إدارة المخاطر، تقييم الالتزامات الاجتماعية والتدريب المخصص",
      consulting: {
        title: "استشارات إدارة المخاطر",
        desc: "خرائط مخاطر حية، شهية واضحة ولوحات معلومات مقروءة. نحدد ونقيس ونرتب أولويات المخاطر الاستراتيجية والتشغيلية والمالية لإدارة حاسمة وقابلة للقياس.",
      },
      evaluation: {
        title: "تقييم الالتزامات الاجتماعية",
        desc: "التقييمات الاكتوارية (مؤسسة التمويل الدولية، التقاعد، الضمان) متماشية مع المعايير المحلية/المعايير الدولية لإعداد التقارير المالية. فرضيات مدققة، مسارات التكاليف موضحة وروافع التحسين مقدمة بشفافية.",
      },
      formation: {
        title: "التدريب المخصص",
        desc: "مسارات نمطية تجمع بين الحوكمة وأدوات التحليل والتأمين والنقل. دراسات حالة قطاعية وورش عمل عملية لترسيخ المكتسبات وتسريع التنفيذ الميداني.",
      },
      cta: "اكتشف خدماتنا الاستشارية",
    },
    esgSection: {
      label: "الاستدامة",
      title: "سياسة الاستدامة — الحوكمة، الاجتماعية، البيئة",
      gouvernance: {
        title: "الحوكمة والأخلاق",
        desc: "مدونة السلوك، مكافحة الفساد، الأمن السيبراني وقناة الإبلاغ. أدوار وعمليات وضوابط موثقة للامتثال الحي والقابل للتحقق.",
      },
      personnes: {
        title: "الأشخاص والتنوع",
        desc: "الرفاهية، التعلم المستمر، الشمولية والعدالة في الأجور. مقابلات منظمة وخطط تطوير لنمو الفرق بشكل مستدام.",
      },
      environnement: {
        title: "المسؤولية البيئية",
        desc: "تقييم غازات الدفيئة، الاعتدال الطاقوي/الرقمي، التنقل الناعم وميثاق الموردين. مؤشرات متابعة وخطط تحسين ملموسة، تُراجع دورياً.",
      },
      cta: "اكتشف سياستنا للاستدامة",
    },
    team: {
      label: "الشركاء",
      title: "فريقنا",
      subtitle: "خبراء متحمسون في خدمتك",
      nabil: {
        name: "نبيل شرقاوي",
        title: "الشريك المدير",
        bio: "قانوني التكوين ومتخصص في إعادة التأمين، قاد نبيل شرقاوي في شركة إعادة التأمين المركزية (مجموعة صندوق الإيداع والتدبير) الحوكمة والامتثال والشؤون القانونية والمطالبات الكبرى ومخاطر الطرف المقابل. مرجع في الصياغة والتفاوض بشأن عمليات الإسناد في إعادة التأمين، أدار العلاقات مع المنظمين ووكالات التصنيف والشركاء العالميين. كمدير فعال لريسكاليا، يضمن القوة المؤسسية والامتثال وجودة التنفيذ. كباحث مشارك في جامعة باريس دوفين، يجلب الدقة الأكاديمية لخدمة حلول قوية، تجمع بين الأمان القانوني ووضوح العقود وقيمة العميل.",
      },
      anasse: {
        name: "أنس يوسفي",
        title: "الشريك الاستراتيجي",
        bio: "خبير اكتواري ومدير تنفيذي، يتمتع أنس يوسفي بأكثر من عشرين عامًا من الخبرة مع شركات التأمين وإعادة التأمين والمؤسسات المالية في أفريقيا وعلى المستوى الدولي. يجمع بين الرؤية والدقة المنهجية، ويدرّس كمحاضر ويدرّب أجيالاً جديدة من الخبراء الاكتواريين. في ريسكاليا، يقدم دعمًا تقنيًا في الملفات عالية المخاطر: هيكلة التغطيات المخصصة، ومعايير الاكتتاب، وبرامج متعددة الخطوط/إعادة التأمين والحلول المعيارية. الهدف: مواءمة المخاطر والتكلفة وقيمة العميل بدقة.",
      },
    },
    cta: {
      title: "تحتاج إلى تغطية؟",
      subtitle: "صف مشروعك: نجيب خلال 24-48 ساعة.",
      quote: "احصل على عرض أسعار",
      advisor: "تواصل مع مستشار",
      button1: "احصل على عرض أسعار",
      button2: "تواصل مع مستشار",
      write: "اكتب رسالة",
      call: "اطلع على بياناتنا",
    },
    // Contact page specific translations
    contact: {
      hero: {
        title: "تواصل",
        subtitle:
          "طلبات المعلومات، عروض الأسعار، الشراكات أو المواعيد — نجيب بسرعة.",
      },
      form: {
        title: "راسلنا",
        desc: "اترك لنا بياناتك ورسالتك. سنعود إليك خلال يوم عمل واحد.",
        fname: "الاسم الأول",
        lname: "اسم العائلة",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        topic: "الموضوع",
        msg: "الرسالة",
        submit: "إرسال",
        note: 'بالنقر على "إرسال"، فإنك توافق على أن يتم الاتصال بك.',
        placeholders: {
          fname: "مثال: سارة",
          lname: "مثال: العمراني",
          email: "you@example.com",
          phone: "+212 …",
          msg: "صف طلبك...",
        },
        opt: {
          quote: "طلب عرض أسعار",
          meeting: "حجز موعد",
          partner: "شراكة",
          other: "أخرى",
        },
      },
      box: {
        title: "بيانات الاتصال",
        addr: {
          t: "العنوان:",
          v: "16، شارع تيرفيس، الطابق الثاني. حي مرس السلطان، الدار البيضاء",
        },
        phone1: { label: "هاتف:", value: "+212-666-756991" },
        phone2: { label: "هاتف:", value: "+212-675-208909" },
        email: {
          label: "معلومات عامة:",
          value: "contact@riskalia.ma",
        },
        hours: "الإثنين–الجمعة، 9:00–18:00 (UTC+1)",
        mapLabel: "خريطة مقر ريسكاليا",
        mapTitle: "خريطة — ريسكاليا، 16 شارع تيرفيس، الدار البيضاء",
        mapBtn: "افتح في خرائط Google",
      },
      cta: {
        title: "لنناقش احتياجاتك",
        subtitle: "يجيب المستشار بسرعة لتوضيح طلبك واقتراح الخطوات التالية.",
        write: "اكتب رسالة",
        call: "اطلع على بياناتنا",
      },
    },
    // ESG page specific translations
    esg: {
      hero: {
        title: "🌱 التزامنا بالاستدامة",
        subtitle: "مكتب وساطة مسؤول وشفاف وملتزم بالمجتمع المغربي",
      },
      cta: {
        contact: "تواصل معنا",
        discover: "اكتشف أعمالنا",
        partnership: "شراكة الاستدامة",
      },
      intro: {
        title: "رؤيتنا للاستدامة",
        content:
          "في ريسكاليا، نؤمن أن مكتب الوساطة يجب أن يكون أكثر من وسيط مالي: يجب أن يكون فاعلاً مسؤولاً وشفافاً وملتزماً بالمجتمع. نهجنا في الاستدامة (البيئة، الاجتماع، الحوكمة) مصمم لعكس قيمنا وتلبية توقعات عملائنا وشركائنا والمساهمة في التنمية المستدامة للمغرب.",
      },
      governance: {
        kicker: "الحوكمة",
        title: "🔹 حوكمة مسؤولة",
        integrity: {
          title: "النزاهة والشفافية",
          item1: "علاقات شفافة مع العملاء والشركاء والمنظمين (ACAPS)",
          item2: "احترام صارم لقواعد السوق",
          item3: "تواصل واضح وصادق حول ممارساتنا",
        },
        ethics: {
          title: "الأخلاقيات والاستقلالية",
          item1: "إدارة صارمة لتضارب المصالح",
          item2: "الاستقلالية في نصائحنا وتوصياتنا",
          item3: "مدونة سلوك صارمة يطبقها الجميع",
        },
        structure: {
          title: "حوكمة واضحة",
          item1: "قرارات منظمة وموثقة",
          item2: "عمليات متناسبة مع حجمنا",
          item3: "التوافق مع أفضل ممارسات القطاع",
        },
      },
      social: {
        kicker: "اجتماعي",
        title: "🔹 الالتزام الاجتماعي",
        diversity: {
          title: "تكافؤ الفرص والتنوع",
          item1: "التوظيف القائم على المواهب دون تمييز",
          item2: "المساواة في الجنس والأصل والخلفية",
          item3: "تعزيز التنوع على جميع المستويات",
        },
        development: {
          title: "تطوير المهارات",
          item1: "خطة تدريب مستمرة لكل موظف",
          item2: "التدريب التقني والتطوير الشخصي",
          item3: "الدعم في التقدم المهني",
        },
        wellbeing: {
          title: "الرفاهية في العمل",
          item1: "بيئة محترمة وتعاونية",
          item2: "التوازن بين العمل والحياة",
          item3: "ظروف عمل تعزز الازدهار",
        },
        impact: {
          title: "التأثير المجتمعي",
          item1: "التأمين الشامل للمشاريع الصغيرة والمزارعين",
          item2: "حلول مبتكرة لمواجهة المخاطر المناخية",
          item3: "الشراكات الجمعياتية ودعم التعليم",
        },
      },
      environment: {
        kicker: "البيئة",
        title: "🔹 احترام البيئة",
        energy: {
          title: "ترشيد الطاقة والرقمنة",
          item1: "تقليل الاستهلاك في مكاتبنا",
          item2: "أدوات رقمية مسؤولة",
          item3: "تحسين الإضاءة وتكييف الهواء",
        },
        mobility: {
          title: "تنقل معقول",
          item1: "الحد من السفر غير الضروري",
          item2: "الاستخدام المفضل لمؤتمرات الفيديو",
          item3: "تشجيع التنقل المستدام",
        },
        waste: {
          title: "إجراءات بسيطة، تأثيرات ملموسة",
          item1: "تحسين استخدام الورق",
          item2: "تقليل النفايات وفرزها",
          item3: "توفير المياه والكهرباء",
        },
      },
      procurement: {
        kicker: "المشتريات المسؤولة",
        title: "🔹 المشتريات المسؤولة",
        local: {
          title: "الأولوية للمحلي",
          item1: "تفضيل الموردين المحليين",
          item2: "دعم الشركات الصغيرة المغربية",
          item3: "المساهمة في التنمية الاقتصادية الإقليمية",
        },
        ethics: {
          title: "المعايير الأخلاقية",
          item1: "دمج المعايير الأخلاقية في اختياراتنا",
          item2: "دعم الاقتصاد الاجتماعي والتضامني",
          item3: "تقييم التأثير الاجتماعي لمزودينا",
        },
      },
      vision: {
        title: "طموحنا",
        content:
          "بهذا النهج، تضع ريسكاليا نفسها كوسيط ملتزم، متجذر في إقليمه وموجه نحو المستقبل. طموحنا بسيط: مرافقة عملائنا مع خلق تأثير إيجابي ومستدام لموظفينا وشركائنا والمجتمع.",
      },
      contact: {
        title: "انضم إلى نهجنا للاستدامة",
        subtitle: "اكتشف كيف يمكننا التعاون من أجل مستقبل أكثر استدامة",
      },
    },
    search: {
      noResults: "لا توجد نتائج",
    },
    chatbot: {
      title: "مساعد ريسكاليا",
      subtitle: "خبير في التأمين وإعادة التأمين",
      welcome:
        "مرحباً! أنا مساعد ريسكاليا. كيف يمكنني مساعدتك في احتياجاتك للتأمين أو إعادة التأمين؟",
      now: "الآن",
      inputPlaceholder: "اكتب رسالتك...",
      typing: "ريسكاليا يكتب...",
      quick: {
        assurance: "التأمين",
        reassurance: "إعادة التأمين",
        climate: "مخاطر المناخ",
        contact: "اتصال",
      },
    },
    // Multirisques page specific translations
    multirisques: {
      title: "المخاطر المتعددة للمؤسسات",
      subtitle:
        "الأصول وفقدان الأرباح • الحريق وأضرار المياه • السرقة وتلف الآلات • الأحداث المناخية والكوارث الطبيعية • هندسة المخاطر والوقاية.",
      badges: [
        "المباني والمخزون والمعدات",
        "فقدان الأرباح (PDB)",
        "الوقاية والامتثال",
      ],
      tabs: {
        over: "نظرة عامة",
        cov: "التغطيات",
        opt: "الخيارات والوقاية",
        admin: "التسعير والإعداد",
        claim: "المطالبات",
        faq: "الأسئلة الشائعة",
      },
      over: {
        t: "1. نظرة عامة",
        p: "عقد المخاطر المتعددة للمؤسسات يحمي مبانيها ومحتوياتها والمسؤوليات غير المباشرة من خلال فقدان الأرباح (PDB). نجمع بين التنسيب التنافسي وهندسة المخاطر ومعايرة الفرنشايز/الحدود لتحقيق التوازن بين الحماية والميزانية.",
        li: [
          "رسم خرائط المواقع والتعرضات (حريق، ماء، سرقة، طقس).",
          "إعداد PDB: الهامش الإجمالي، فترة التعويض (12–24–36 شهر).",
          "الوقاية العملية: الكشف، التقسيم، الصيانة.",
        ],
        kpi: ["القدرة", "فترة BI", "الهندسة"],
        kpi_desc: ["حتى قدرة السوق", "12–36 شهر", "الزيارات والتوصيات"],
      },
      cov: {
        t: "2. التغطيات الرئيسية",
        c0: {
          t: "الأصول",
          li: [
            "الحريق، الانفجار، البرق، الدخان.",
            "أضرار المياه، العاصفة/البرد/الفيضان، الكوارث الطبيعية.",
            "السرقة، التخريب، كسر الزجاج واللافتات.",
          ],
        },
        c1: {
          t: "فقدان الأرباح (PDB)",
          li: [
            "الهامش الإجمالي، مصاريف التشغيل الإضافية.",
            "فترة التعويض 12–36 شهر.",
            "أضرار الموردين/العملاء (BI الطارئ).",
          ],
        },
        c2: {
          t: "الآلات والمرافق",
          li: [
            "تلف الآلات والإلكترونيات.",
            "أعطال المرافق (الطاقة، البخار، البرد) حسب الخيارات.",
            "تكاليف إعادة الامتثال (القوانين، المعايير).",
          ],
        },
      },
      opt: {
        t: "3. الخيارات والوقاية",
        c0: {
          t: "المناخ والكوارث الطبيعية",
          li: [
            "امتدادات العاصفة، البرد، الفيضان، الغمر.",
            "فرنشايز متمايزة حسب الموقع والتعرض.",
            "تغطية معيارية مناخية (اختيارية).",
          ],
        },
        c1: {
          t: "الوقاية والهندسة",
          li: [
            "تدقيق المواقع، التصوير الحراري، اختبارات الرشاشات.",
            "خطة عمل ذات أولوية ومتابعة ربع سنوية.",
            "دلائل استمرارية الأعمال (BCP) والسيناريوهات.",
          ],
        },
        c2: {
          t: "معاملات البوليصة",
          li: [
            "المبالغ المؤمن عليها والفهرسة، القيمة الجديدة.",
            "الحدود الفرعية: البضائع المبردة، الأرشيف، البيانات.",
            "بنود المشاركة في التأمين وإيقاف الخسارة حسب الملف.",
          ],
        },
      },
      admin: {
        t: "4. التسعير والإعداد",
        c0: {
          t: "البيانات المطلوبة",
          li: [
            "قائمة المواقع: العنوان، النشاط، البناء، الحمايات.",
            "المبالغ المؤمن عليها حسب الفئة (مباني، محتويات، مخزون).",
            "الهامش الإجمالي وفترة BI المرغوبة.",
            "تاريخ المطالبات 5 سنوات (التكرار والشدة).",
          ],
        },
        c1: {
          t: "العملية",
          li: [
            "ما قبل التدقيق وتوصية الحدود/الفرنشايز.",
            "المنافسة ومفاوضة البنود الرئيسية.",
            "الربطات، الشهادات وجدول الوقاية.",
          ],
        },
        c2: {
          t: "الوثائق المفيدة",
          li: [
            "مخططات العمليات والرسوم البيانية، تصنيف الآلات.",
            "تقارير الصيانة والامتثال (الرشاشات، الكهرباء).",
            "خطة استمرارية الأعمال (BCP) وإجراءات الطوارئ.",
          ],
        },
      },
      claim: {
        t: "5. إدارة المطالبات",
        sum: "نهجنا",
        li: [
          "وحدة الطوارئ 24/7، التدابير الوقائية والخبراء المعتمدون.",
          "تقدير سريع لـ BI والمدفوعات المقدمة إذا تم توفيرها.",
          "التقارير والتغذية الراجعة لتقليل التكرار.",
        ],
      },
      faq: {
        t: "6. الأسئلة الشائعة",
        q0: "كيفية تحديد فترة تعويض BI؟",
        a0: "حسب دورات التوريد والإنتاج والمبيعات. العديد من الصناعات تتطلب 18–24 شهر.",
        q1: "معايير الطقس أم الضمانات التقليدية؟",
        a1: "المعايير تتفعل على مؤشر (مطر، رياح...). تكمل بشكل مفيد ضمانات الأضرار/BI لتقليل التأخير.",
        q2: "أي قيمة للتأمين (جديد، إهلاك، قيمة معلنة)؟",
        a2: "القيمة الجديدة تحد من نقص التأمين ولكن قد تكلف أكثر. نعاير حسب الحالة مع التقييمات.",
      },
      cta: {
        t: "نؤمن أصولكم واستمراريتكم",
        p: "نعاير الأصول وPDB وخيارات المناخ وخطة وقاية عملية.",
        quote: "الحصول على عرض سعر",
        talk: "التحدث مع مستشار",
      },
      nav: {
        prev: "الصحة الجماعية والضمان",
        next: "النقل (البضائع)",
      },
    },
    // Transport page specific translations
    transport: {
      title: "تأمين نقل البضائع",
      subtitle:
        "جميع أخطار البضائع • مسؤولية الناقل/المخلص • تغطية المخزون عبر السلسلة (STP) • مخاطر حرب واضطرابات • استشارات الإنكوترمز • خيارات الحرارة والطقس البارامتري.",
      badges: [
        "بحر • جو • بر • سكة",
        "تدفقات استيراد/تصدير ومحلية",
        "تتبع ووقاية في التغليف",
      ],
      tabs: {
        over: "لمحة",
        cov: "التغطيات",
        opt: "الخيارات والخدمات",
        admin: "التسعير والتنفيذ",
        claim: "المطالبات",
        faq: "الأسئلة",
      },
      over: {
        t: "١. لمحة",
        p: "نؤمّن تدفقاتكم محلياً ودولياً عبر جميع الوسائط. تشمل الوثيقة بضائعكم، ومسؤولية الناقل/الوسيط، ويمكن توسيعها إلى تغطية سلسلة المخزون STP من المنشأ حتى المخازن والتوزيع.",
        li: [
          "مراجعة الإنكوترمز لتحديد انتقال الخطر.",
          "تحديد حدود لكل شحنة/مركبة/سفينة/موقع.",
          "نصائح التغليف والربط والتتبع للحد من التلف.",
        ],
        kpi: ["الوسائط", "الصيغة", "التصريح"],
        kpi_desc: [
          "بحر • جو • بر • سكة",
          "وثيقة سنوية مفتوحة",
          "شهرية / لكل شحنة",
        ],
      },
      cov: {
        t: "٢. التغطيات الأساسية",
        c0: {
          t: "البضائع — جميع الأخطار",
          li: [
            "تغطيات على نمط ICC (A/B/C) حسب الملف والقيم.",
            "بضائع عامة وسائبة وحاويات ومشاريع.",
            "امتدادات حرب واضطرابات عند التوفر.",
          ],
        },
        c1: {
          t: "مسؤولية الناقل/الوسيط",
          li: [
            "المسؤوليات القانونية للنقل والتخزين والمناولة.",
            "حدود لكل حادث/مركبة وحقوق تحديد المسؤولية.",
            "إدارة العقود والشروط القياسية مع فريقنا.",
          ],
        },
        c2: {
          t: "تغطية المخزون عبر السلسلة (STP)",
          li: [
            "سلسلة مستمرة: منشأ → عبور → مخازن → توزيع.",
            "ذروات موسمية وقيم مجمعة لكل موقع.",
            "معلمات الحرارة وكسر سلسلة التبريد (اختيارية).",
          ],
        },
      },
      opt: {
        t: "٣. الخيارات والخدمات",
        c0: {
          t: "الحرارة والمواد الحساسة",
          li: [
            "بنود حرارة ومسجلات بيانات وإنترنت الأشياء.",
            "انحرافات باردة/حارة وتكاليف إنقاذ.",
            "تغليف وإجراءات HACCP.",
          ],
        },
        c1: {
          t: "الطقس البارامتري والمشاريع",
          li: [
            "إعصار/أمطار غزيرة/رياح — تفعيل سريع.",
            "شحنات المشاريع والرفع الثقيل: خبرة ومرافقة.",
            "خطط مسارات ومحطات عالية المخاطر.",
          ],
        },
        c2: {
          t: "الأمن والوقاية",
          li: [
            "مسارات آمنة ومواقف معتمدة وطاقمان للسائقين.",
            "أختام وتتبع جغرافي وتدقيق المتعاقدين الفرعيين.",
            "تدقيق التغليف والربط (مدونة CTU).",
          ],
        },
      },
      admin: {
        t: "٤. التسعير والتنفيذ",
        c0: {
          t: "البيانات المطلوبة",
          li: [
            "التدفقات حسب الوسيط ومناشئ/وجهات وقيم الشحنات.",
            "الإنكوترمز والتغليف والتواتر والذروات الموسمية.",
            "سجل خسائر 3–5 سنوات وإجراءات الأمن.",
          ],
        },
        c1: {
          t: "العملية",
          li: [
            "وثيقة سنوية مفتوحة + تصاريح (إمكانية EDI).",
            "شهادات بضائع للاعتمادات المستندية عند الحاجة.",
            "تهيئة حدود المركبات/السفن/المواقع.",
          ],
        },
        c2: {
          t: "وثائق مساعدة",
          li: [
            "بوليصة شحن بحري B/L، جوي AWB، بري CMR، قوائم تعبئة وأدلة تغليف.",
            "تقارير حرارة/موقع.",
            "عقود النقل وتعليمات للوكلاء.",
          ],
        },
      },
      claim: {
        t: "٥. إدارة المطالبات",
        sum: "نهجنا",
        li: [
          "تعليمات عاجلة: تحفظات وخبير وحفظ الأدلة.",
          "خطاب اعتراض للناقل ضمن المدد القانونية.",
          "عملية رقمية ومدة تسوية معجلة.",
        ],
      },
      faq: {
        t: "٦. الأسئلة الشائعة",
        q0: "متى ينتقل الخطر وفق الإنكوترمز؟",
        a0: "بحسب الشرط المختار (EXW/FOB/CIF/DDP...). نطابق العقود مع الوثيقة.",
        q1: "هل تُغطّى السلع المستعملة؟",
        a1: "نعم بشروط (الحالة، التغليف، الاختبار) وقد تُطبق تحملات/بنود خاصة.",
        q2: "هل يشمل التأخير؟",
        a2: "عادة لا ضمن أضرار الممتلكات؛ يمكن إضافة حلول بارامترية.",
      },
      cta: {
        t: "أمّن سلسلة التوريد",
        p: "نضبط تغطيات البضائع والمسؤولية وSTP مع خيارات ملائمة للمسارات والبضائع.",
        quote: "اطلب عرضاً",
        talk: "تحدث إلى مستشار",
      },
      nav: {
        prev: "المخاطر المتعددة للمؤسسات",
        next: "السيارات والأساطيل",
      },
    },

    // Flotte page specific translations
    flotte: {
      title: "السيارات والأساطيل",
      subtitle:
        "مسؤولية تجاه الغير • أضرار المركبة (شامل/طرف ثالث) • الزجاج • سرقة وحريق • السائق والركاب • مساعدة وسيارة بديلة • تتبّع سلوكي وتيليماتكس.",
      badges: [
        "سيارات/نقل خفيف/ثقيل وآليات",
        "تيليماتكس وبيانات",
        "مطالبات 24/7",
      ],
      tabs: {
        over: "لمحة",
        cov: "التغطيات",
        opt: "الخيارات والخدمات",
        admin: "التسعير والتنفيذ",
        claim: "المطالبات",
        faq: "الأسئلة",
      },
      over: {
        t: "١. لمحة",
        p: "برامج أسطول للمركبات الخفيفة والثقيلة والآليات. هياكل طرف ثالث/شامل مع تحملات مناسبة، وسياسة استخدام واضحة، ووقاية لتقليل الحوادث. إدارة عبر التيليماتكس وشبكة ورش معتمدة.",
        li: [
          "تسعير أسطولي (مكافأة/جزاء مجمّع، مخاطر شغب/طبيعة حسب السوق).",
          "سياسة استخدام: السائقون، الاستعمال، المناطق والأوقات.",
          "لوحات قياس للتواتر والحدة والتكلفة وفترات التعطل.",
        ],
        kpi: ["حجم الأسطول", "توجيه للإصلاح", "تيليماتكس"],
        kpi_desc: ["5 – 5 000+ مركبة", "< 48 ساعة", "أجهزة/تطبيق سائق"],
      },
      cov: {
        t: "٢. التغطيات الأساسية",
        c0: {
          t: "مسؤولية مدنية وقانونية",
          li: [
            "مسؤولية إلزامية عن الإصابات والأضرار للغير.",
            "دفاع/رجوع وحماية قانونية (اختياري).",
            "سائقون محددون أو أي سائق.",
          ],
        },
        c1: {
          t: "أضرار المركبة",
          li: [
            "شامل/طرف ثالث موسّع (تصادم، تخريب، كوارث).",
            "سرقة وحريق، زجاج (باربريس، حساسات ADAS).",
            "قيمة جديدة/متفق عليها حسب عمر المركبة.",
          ],
        },
        c2: {
          t: "الأشخاص والمساعدة",
          li: [
            "تأمين سائق وحوادث ركاب.",
            "مساعدة 24/7 وقطر وسيارة بديلة.",
            "نطاق جغرافي (محلي/أوروبي) وبطاقة خضراء.",
          ],
        },
      },
      opt: {
        t: "٣. الخيارات والخدمات",
        c0: {
          t: "تيليماتكس ووقاية",
          li: [
            "تقييم سلوك السائق، قيادة اقتصادية، تنبيهات سرعة/إرهاق.",
            "سياج جغرافي ومنع تشغيل واسترجاع عند السرقة.",
            "تدريب وتوعية مركّزة.",
          ],
        },
        c1: {
          t: "شبكة الإصلاح وقطع الغيار",
          li: [
            "ورش معتمدة وقطع أصلية أو مكافئة.",
            "مراقبة عروض الأسعار والفواتير والمواعيد.",
            "خدمة متنقلة لإصلاح الزجاج.",
          ],
        },
        c2: {
          t: "مالية وتجهيزات",
          li: [
            "فجوة تمويل (GAP) للتأجير.",
            "هياكل وتجهيزات (قلاب، تبريد، إنارة...).",
            "توسعات للسائقين الجدد/غير الدائمين.",
          ],
        },
      },
      admin: {
        t: "٤. التسعير والتنفيذ",
        c0: {
          t: "البيانات المطلوبة",
          li: [
            "قائمة الأسطول (لوحة، طراز، طاقة، عمر، قيمة).",
            "الاستخدام والمناطق والكم/سنة.",
            "سجل خسائر 3–5 سنوات (تواتر/حدة/مسؤولية).",
          ],
        },
        c1: {
          t: "العملية",
          li: [
            "وثيقة أسطول (إضافة/حذف) وبطاقات خضراء.",
            "إعداد التحملات وسياسة الاستخدام.",
            "نشر التيليماتكس والتقارير.",
          ],
        },
        c2: {
          t: "وثائق مساعدة",
          li: [
            "استمارات المركبات ورخص القيادة.",
            "نماذج الحوادث وصور وتقارير الشرطة.",
            "عروض أسعار وفواتير وأوامر عمل.",
          ],
        },
      },
      claim: {
        t: "٥. إدارة المطالبات",
        sum: "نهجنا",
        li: [
          "تبليغ رقمي أو عبر الوسيط — معالجة فورية.",
          "توجيه لشبكة الإصلاح وخبرة سريعة ومراقبة القطع.",
          "رجوع على الطرف الثالث وتتبع التعطّل حتى التسليم.",
        ],
      },
      faq: {
        t: "٦. الأسئلة الشائعة",
        q0: "شروط السائقين الجدد؟",
        a0: "ممكن مع تحملات/شروط خاصة بحسب سياسة الاستخدام والاستعمال.",
        q1: "هل زجاج المركبة دون تحمّل؟",
        a1: "نعم في بعض المستويات ومع خدمة الشبكة/المتنقلة.",
        q2: "هل السيارة البديلة مضمونة؟",
        a2: "بحسب الخيار (عطل/حادث)، المدة والفئة تُحدد بالوثيقة.",
      },
      cta: {
        t: "لنُحسّن أسطولك",
        p: "تغطيات وتحملات مناسبة وشبكة فعّالة وتيليماتكس لخفض الحوادث وفترات التوقف.",
        quote: "اطلب عرضاً",
        talk: "تحدث إلى مستشار",
      },
      nav: {
        prev: "تأمين نقل البضائع",
        next: "المسؤولية العامة/المهنية",
      },
    },
    construction: {
      title: "الإنشاءات (CAR/EAR)",
      subtitle:
        "جميع أخطار المشاريع • مسؤولية طرف ثالث • التركيب والاختبارات • الصيانة • ALoP/DSU • معدات وممتلكات الموقع.",
      badges: [
        "المالك / EPC / المقاولون",
        "مشاريع الطاقة والبنية التحتية",
        "صياغات LMA/IUA",
      ],
      tabs: {
        over: "لمحة",
        cov: "التغطيات",
        opt: "خيارات وDSU",
        req: "المستندات",
        claim: "المطالبات",
        faq: "الأسئلة",
      },
      over: {
        t: "١. لمحة",
        p: "توفر CAR/EAR تغطية لأعمال المشروع ومسؤولية الغير خلال البناء والاختبارات وفترة الصيانة. مخصصة للمالك وEPC والمقاولين والمهندسين.",
        li: [
          "مبانٍ وأشغال مدنية وطاقة وصناعة.",
          "مراحل: تنفيذ → اختبارات → صيانة.",
          "خيار ALoP/DSU لتأخر التشغيل.",
        ],
        kpi: ["حد المسؤولية", "التحملات", "النموذج"],
      },
      cov: {
        t: "٢. التغطيات الأساسية",
        c0: {
          t: "أضرار بالأعمال",
          li: [
            "حريق، انفجار، عاصفة، فيضان، سرقة.",
            "أخطاء تنفيذ، انهيار، انهيال.",
            "الممتلكات القائمة والمجاورة (حدود فرعية).",
          ],
        },
        c1: {
          t: "مسؤولية الموقع",
          li: [
            "إصابات وأضرار للغير.",
            "الدفاع والرجوع القضائي.",
            "مسؤولية متبادلة/تنازل عن الرجوع حسب الصياغة.",
          ],
        },
        c2: {
          t: "ممتلكات وتكاليف مساندة",
          li: [
            "ممتلكات الموقع والمنشآت المؤقتة.",
            "إزالة الأنقاض وتكاليف الوقاية والإنقاذ.",
            "معدات وآليات المقاول (اختياري).",
          ],
        },
      },
      opt: {
        t: "٣. خيارات وامتدادات وDSU/ALoP",
        c0: {
          t: "التركيب والاختبارات والصيانة",
          li: [
            "اختبارات باردة/ساخنة أثناء التشغيل التجريبي.",
            "صيانة زيارات (١٢ شهراً) أو ممتدة (حتى ٢٤ شهراً).",
            "عيوب التصميم وفق بنود DE/LEG عند الاتفاق.",
          ],
        },
        c1: {
          t: "ALoP / DSU",
          li: [
            "خسارة الربح الإجمالي بسبب ضرر مادي مغطى.",
            "المعلمات: مدة التعويض، فترة انتظار، منحنى الإيرادات.",
            "البيانات: الجدول، المسار الحرج، عقود التشغيل والصيانة.",
          ],
        },
        c2: {
          t: "امتدادات شائعة أخرى",
          li: [
            "تخزين خارج الموقع ونقل داخلي.",
            "ممتلكات قائمة/مجاورة وتداخل الخدمات.",
            "تلوث فجائي وعارض حيث يلزم.",
          ],
        },
      },
      req: {
        t: "٤. المستندات ومعايير الوثيقة",
        c0: {
          t: "بيانات المشروع",
          li: [
            "الوصف والقيمة والجدول والمسار الحرج.",
            "رسومات وطرق التنفيذ وجيوتقنية ودراسة مخاطر.",
            "تقسيم أدوار المالك/EPC/العقود الرئيسية.",
          ],
        },
        c1: {
          t: "إعداد الوثيقة",
          li: [
            "حدود وتحت حدود وتحملات لكل خطر/نشاط.",
            "فترات البناء والاختبارات والصيانة وDSU.",
            "نموذج PCIP (مالك) أو CCIP (مقاول).",
          ],
        },
      },
      claim: {
        t: "٥. إدارة المطالبات",
        sum: "نهجنا",
        li: [
          "إخطار فوري وحماية الموقع وتقليل الخسائر.",
          "خبراء تسوية وأدلة ومتابعة الإصلاح.",
          "دفعات تحت الحساب وتقارير وتحكيم عند الحاجة.",
        ],
      },
      faq: {
        t: "٦. الأسئلة الشائعة",
        q0: "ما الفرق بين CAR وEAR؟",
        a0: "CAR غالباً للأعمال المدنية/المباني، وEAR للتركيب والمعدات الصناعية. المبادئ متقاربة.",
        q1: "كيف نحدد ALoP/DSU؟",
        a1: "وفق الربح الإجمالي المتوقع خلال مدة التعويض مع فترة انتظار وحدود. الجدول والمسار الحرج أساسيان.",
        q2: "من يجب إدراجه كمؤمَّن؟",
        a2: "المالك وEPC والمقاولون والمهندسون مع تنازلات متبادلة لتفادي فجوات التغطية.",
      },
      cta: {
        t: "حدثنا عن مشروعك",
        p: "نُعد مذكرة طرح، وصياغة CAR/EAR، ورزنامة سوق.",
        quote: "اطلب عرضاً",
        talk: "تحدّث إلى مستشار",
      },
      nav: {
        prev: "المسؤولية المدنية",
        next: "الصحة الجماعية والمزايا",
      },
    },
    rc: {
      title: "المسؤولية المدنية",
      subtitle:
        "عامّة (التشغيل وما بعد الإنجاز) • مهنية (PI) • المنتجات والسحب • البيئية/التلوث. هيكلة الحدود، خيارات تعاقدية ودولية، شهادات، وإدارة المطالبات.",
      badges: ["تشغيل وما بعد الإنجاز", "مسؤولية مهنية", "بيئية/تلوث"],
      tabs: {
        over: "نظرة عامة",
        cov: "التغطيات",
        opt: "الخيارات والهيكلة",
        admin: "الدولية والشهادات",
        claim: "المطالبات",
        faq: "الأسئلة الشائعة",
      },
      over: {
        t: "1. نظرة عامة",
        p: "المسؤولية المدنية تحمي من الأضرار الجسدية والمادية والخسائر المالية التي تُلحق بالغير أثناء التشغيل أو بسبب منتجاتك/خدماتك. برنامج مُعاير يطمئن أصحاب الطلبات ويستجيب للبنود التعاقدية.",
        li: [
          "GL: التشغيل وما بعد الإنجاز (العمليات المكتملة).",
          "PI: الأخطاء/السهو، الدفاع والمصالح.",
          "المنتجات والسحب، التلوث والبيئة.",
        ],
        kpi: ["العقود", "الأراضي", "التوجيه"],
        kpi0: "العقود",
        kpi0l: "بنود العملاء والمؤجرين",
        kpi1: "الأراضي",
        kpi1l: "محلي ودولي",
        kpi2: "التوجيه",
        kpi2l: "التكرار / الشدة / التكلفة",
      },
      cov: {
        t: "2. التغطيات الرئيسية",
        c0: {
          t: "المسؤولية المدنية العامة (GL)",
          li: [
            "إصابات جسدية ومادية للغير.",
            "بعد التسليم / الإنجاز، الإيجار، دعاوى الجيران.",
            "غير المادية التابعة.",
          ],
        },
        c1: {
          t: "المسؤولية المهنية (PI)",
          li: [
            "أخطاء أو سهو أو إغفال.",
            "تكاليف الدفاع، الخبرات.",
            "المقاولة الفرعية/المشتركة (حسب الشروط).",
          ],
        },
        c2: {
          t: "المنتجات والسحب",
          li: [
            "أضرار ناجمة عن المنتجات المسلمة.",
            "السحب/الاستدعاء، تواصل الأزمات.",
            "الولايات المتحدة/كندا كخيار.",
          ],
        },
        c3: {
          t: "البيئة والتلوث",
          li: [
            "تلوث مفاجئ/حادثي (وأحيانًا تدريجي).",
            "تكاليف إزالة التلوث والتنوع البيولوجي.",
            "المواقع، مواقع البناء، النقل.",
          ],
        },
        note: 'شكل "حدوث" أو "مطالبات" حسب الخط. حدود وخصومات واختصاصات قابلة للتعديل.',
      },
      opt: {
        t: "3. الخيارات والهيكلة",
        c0: {
          t: "تعاقدية",
          li: [
            "مؤمن إضافي، تنازل عن الاسترداد، قابلية الفصل.",
            "اختصاصات موسعة، الولايات المتحدة/كندا تحت شروط.",
            "بنود محددة للقطاعات (الزراعة/الصيدلة، الطاقة...).",
          ],
        },
        c1: {
          t: "الحدود والقدرات",
          li: [
            "أساسي + فائض (مظلة).",
            "خصومات، SIR، وقف الخسارة.",
            "التأمين المشترك والوضع متعدد الأسواق.",
          ],
        },
        c2: {
          t: "الوقاية والتوجيه",
          li: [
            "مراجعة بنود المسؤولية المدنية في عقودك.",
            "خطط العمل: إجراءات، LOTO، اختبارات.",
            "مؤشرات الأداء الرئيسية: التكرار، الشدة، التكاليف المتوسطة.",
          ],
        },
      },
      admin: {
        t: "4. الدولية والشهادات",
        c0: {
          t: "البرامج الدولية",
          li: [
            "رئيسي + بوالص محلية (DIC/DIL).",
            "امتثال ضريبي وتنظيمي.",
            "شهادات ومطالبات عبر الحدود.",
          ],
        },
        c1: {
          t: "الشهادات",
          li: [
            "متعددة اللغات، تنسيقات العملاء/المؤجرين.",
            "متابعة التجديدات والإصدارات.",
            "بوابات ومركزية.",
          ],
        },
        c2: {
          t: "البيانات والتقرير",
          li: [
            "لوحات تحكم واتجاهات.",
            "مراجعة ربع سنوية للبرنامج.",
            "تحكيم الهيكلة.",
          ],
        },
      },
      claim: {
        t: "5. إدارة المطالبات",
        sum: "من الاتهام إلى الحل",
        li: [
          "مساعدة الاحتياطيات والحفاظ على الأدلة.",
          "خبراء ومحامون متخصصون.",
          "وساطة/معاملة وRETEX.",
        ],
      },
      faq: {
        t: "6. الأسئلة الشائعة",
        q0: 'حدوث مقابل "مطالبات"؟',
        a0: "الحدوث يغطي الوقائع التي حدثت خلال الفترة. المطالبات تغطي المطالبات المستلمة خلال الفترة (مع تاريخ رجعي).",
        q1: "الولايات المتحدة/كندا مشمولة؟",
        a1: "غالبًا مستبعدة تلقائيًا؛ امتدادات وتعديلات الحدود ممكنة بعد تحليل المخاطر.",
        q2: "PI: العقوبات التعاقدية مغطاة؟",
        a2: "معظم الغرامات/الغرامات التهديدية غير قابلة للتأمين؛ نعزز الوقاية التعاقدية وبنود التحديد.",
      },
      cta: {
        quote: "الحصول على عرض سعر",
        talk: "تحدث إلى مستشار",
      },
      nav: {
        prev: "السيارات والأساطيل",
        next: "الإنشاءات (CAR/EAR)",
      },
    },
    santecollective: {
      title: "الصحة الجماعية والضمان",
      subtitle:
        "الرعاية الخارجية والمستشفيات • طب الأسنان والبصريات • الأمومة • الحياة/الوفاة، العجز والحوادث • الشبكات والدفع المباشر • الوقاية والعافية.",
      badges: [
        "الشركات الصغيرة والمتوسطة إلى الحسابات الكبيرة",
        "شبكات الرعاية وTPA",
        "الامتثال المحلي",
      ],
      tabs: {
        over: "نظرة عامة",
        cov: "التغطية",
        opt: "الخيارات والشبكات",
        admin: "التسعير والإعداد",
        claim: "المطالبات",
        faq: "الأسئلة الشائعة",
      },
      over: {
        t: "1. نظرة عامة",
        p: "برامج <strong>الصحة والضمان</strong> المعيارية لجذب والاحتفاظ: الرعاية الخارجية، المستشفيات والأمومة، طب الأسنان/البصريات، وكذلك <strong>الحياة/الوفاة، العجز، الحوادث</strong> والأمراض الحرجة. حوكمة واضحة، <em>الشبكات والدفع المباشر</em>، وإدارة التكاليف.",
        li: [
          "تصميم الخطة: المستويات، الحدود، المشاركة في الدفع، الخصومات.",
          "الشبكات الشريكة وإدارة TPA للمبالغ السريعة.",
          "الوقاية والعافية: الفحوصات، التطعيمات، الصحة النفسية.",
        ],
        kpi: {
          0: "السكان",
          1: "SLA المبالغ",
          2: "الشبكة",
        },
      },
      cov: {
        t: "2. التغطية الرئيسية",
        c0: {
          t: "الصحة (الطبية)",
          li: [
            "الرعاية الخارجية، المتخصصين والتحاليل المخبرية.",
            "المستشفيات والأمومة (الحدود وفترات الانتظار).",
            "البصريات وطب الأسنان (الجداول، الأطراف الصناعية، تقويم الأسنان).",
          ],
        },
        c1: {
          t: "الضمان (مزايا المخاطر)",
          li: [
            "الحياة/الوفاة (رأس المال، راتب التعليم).",
            "العجز (مؤقت/دائم، IPP/ITP).",
            "الحوادث والأمراض الحرجة (CI).",
          ],
        },
        c2: {
          t: "الخدمات",
          li: [
            "شبكات الدفع المباشر وTPA.",
            "الطب عن بُعد وEAP (المساعدة النفسية الاجتماعية).",
            "الإخلاء والإعادة (حسب المناطق).",
          ],
        },
      },
      opt: {
        t: "3. الخيارات والشبكات",
        c0: {
          t: "الشبكات والدفع المباشر",
          li: [
            "بطاقات الوصول وتطبيقات الشركاء.",
            "اتفاقيات الأسعار مع العيادات، أطباء الأسنان وأخصائيي البصريات.",
            "الرعاية خارج الشبكة (استرداد الجدول).",
          ],
        },
        c1: {
          t: "المغتربون والمناطق",
          li: [
            "التغطية الإقليمية/العالمية، المساعدة الدولية.",
            "تنسيق الضمان الاجتماعي المحلي.",
            "خيارات الأمومة/CI محددة.",
          ],
        },
        c2: {
          t: "الإدارة والوقاية",
          li: [
            "لوحات المعلومات: المطالبات ونسبة الخسارة (LR).",
            "برامج العافية والفحص.",
            "إيقاف الخسارة/ASO (إذا كان التأمين الذاتي).",
          ],
        },
      },
      admin: {
        t: "4. التسعير والإعداد",
        c0: {
          t: "البيانات المطلوبة (التسعير)",
          li: [
            "إحصاء مجهول (العمر/الجنس، المعالين، عدد الموظفين).",
            "تاريخ المطالبات 24-36 شهر ونسبة الخسارة.",
            "تصميم الخطة والميزانية المستهدفة.",
          ],
        },
        c1: {
          t: "معاملات الخطة",
          li: [
            "الحدود، المشاركة في الدفع، الخصومات، فترات الانتظار.",
            "الأهلية، فترات الانتظار والقابلية للنقل.",
            "مساهمة صاحب العمل/الموظف والفئات.",
          ],
        },
        c2: {
          t: "الإدارة والخدمات",
          li: [
            "الانضمام، البطاقات وتطبيق الأعضاء.",
            "النقل الإلكتروني والمطالبات الإلكترونية.",
            "اللجان الربعية وإجراءات السيطرة على التكاليف.",
          ],
        },
      },
      claim: {
        t: "5. إدارة المطالبات",
        sum: "نهجنا",
        li: [
          "TPA والشبكة: الدفع المباشر أولوية.",
          "المبالغ الرقمية وSLA < 5-7 أيام.",
          "مراجعات LR وإجراءات مكافحة الاستهلاك المفرط.",
        ],
      },
      faq: {
        t: "6. الأسئلة الشائعة",
        q0: "تغطية الحالات الموجودة مسبقاً؟",
        a0: "حسب كل حالة حسب المؤمن، الحجم والتاريخ. قد تنطبق شروط MHD/FMU.",
        q1: "التغطية خارج الشبكة / في الخارج؟",
        a1: "ممكن مع جداول وحدود مخصصة. المغتربون: المناطق والمساعدة لمعايرة.",
        q2: "تأخير المبالغ؟",
        a2: "مع المطالبات الإلكترونية الكاملة، SLA المستهدف هو 5 إلى 7 أيام عمل.",
      },
      cta: {
        t: "دعنا نبني خطة موظفيك",
        p: "نحدد التصميم والشبكات والميزانية مع جدول التنفيذ.",
        quote: "احصل على عرض سعر",
        talk: "تحدث مع مستشار",
      },
      nav: {
        prev: "الإنشاءات (CAR/EAR)",
        next: "المخاطر المتعددة للمؤسسات",
      },
    },
    sante: {
      title: "الصحة (الأفراد)",
      subtitle:
        "عيادات • تنويم وأمومة • أسنان ونظارات • طب عن بُعد • شبكات ودفع مباشر • باقات تناسب الميزانية.",
      badges: ["شبكات ودفع مباشر", "باقات مرنة", "خيارات الأسنان/النظارات"],
      tabs: {
        over: "لمحة",
        cov: "المنافع",
        opt: "الخيارات والشبكات",
        admin: "التسعير والاشتراك",
        claim: "المطالبات",
        faq: "الأسئلة",
      },
      over: {
        t: "١. لمحة",
        p: "تأمين صحي فردي واضح ومرن: رعاية خارجية، تنويم وأمومة، أسنان/نظارات، مع شبكات مقدمي الخدمة والدفع المباشر والطب عن بُعد. مستويات تغطية تناسب ميزانيتك ووضع أسرتك.",
        li: [
          "خطط متدرجة (أساسية → مريحة → مميزة).",
          "وصول للشبكة مع دفع مباشر (حسب الخطة).",
          "خدمات رقمية: بطاقة إلكترونية، تطبيق، مطالبات إلكترونية.",
        ],
        kpi: {
          0: "فترات الانتظار",
          1: "مدة التسوية",
          2: "العائلة",
        },
      },
      cov: {
        t: "٢. المنافع الأساسية",
        c0: {
          t: "رعاية خارجية",
          li: [
            "طب عام وتخصصات.",
            "تحاليل وتصوير وصيدلة.",
            "طب عن بُعد (حسب الخطة).",
          ],
        },
        c1: {
          t: "تنويم وأمومة",
          li: [
            "تكاليف المستشفى والغرفة.",
            "جراحات وتخدير.",
            "أمومة (حدود وفترات انتظار).",
          ],
        },
        c2: {
          t: "أسنان ونظارات",
          li: [
            "علاجات وتركيبات الأسنان.",
            "عدسة وإطارات وعدسة لاصقة.",
            "تقويم الأسنان (حسب الخطة).",
          ],
        },
      },
      opt: {
        t: "٣. الخيارات والشبكات",
        c0: {
          t: "الشبكات والدفع المباشر",
          li: [
            "عيادات ومختبرات وصيدليات شريكة.",
            "بطاقة إلكترونية وتسوية مباشرة.",
            "إمكانية خارج الشبكة (تعويض وفق الجداول).",
          ],
        },
        c1: {
          t: "دولي وسفر",
          li: [
            "امتدادات مؤقتة خارج البلد.",
            "مساعدة طبية وإعادة للوطن.",
            "تنسيق مع تأمين السفر.",
          ],
        },
        c2: {
          t: "العائلة والوقاية",
          li: [
            "إضافة الزوج/الأبناء بسهولة.",
            "فحوصات ولقاحات.",
            "دعم الصحة النفسية (EAP).",
          ],
        },
      },
      admin: {
        t: "٤. التسعير والاشتراك",
        c0: {
          t: "كيف يُحدد السعر؟",
          li: [
            "العمر والحالة العائلية ومنطقة الرعاية.",
            "مستوى المنافع والتحملات.",
            "خيارات (أسنان/نظارات، أمومة…).",
          ],
        },
        c1: {
          t: "الاشتراك",
          li: [
            "استبيان طبي مبسّط (حسب الخطة).",
            "فترات انتظار محتملة.",
            "تاريخ السريان وبطاقة إلكترونية فورية.",
          ],
        },
        c2: {
          t: "المستندات",
          li: [
            "هوية وحساب بنكي (إن لزم).",
            "إثباتات أفراد الأسرة.",
            "إفادات للعمل/التأشيرة إن لزم.",
          ],
        },
      },
      claim: {
        t: "٥. التعويضات والموافقات",
        sum: "نهجنا",
        li: [
          "الأولوية للشبكات والدفع المباشر.",
          "مطالبات رقمية بمدة 5–7 أيام عمل.",
          "مساعدة في تجهيز الملفات.",
        ],
      },
      faq: {
        t: "٦. الأسئلة الشائعة",
        q0: "هل تُغطّى الأمراض السابقة؟",
        a0: "يعتمد على الخطة وشركة التأمين؛ قد توجد استثناءات أو فترات انتظار. نرشدك بالتفصيل.",
        q1: "هل هناك فترات انتظار؟",
        a1: "نعم لبعض المنافع (مثل الأمومة والأسنان) وتختلف حسب الخطة وتُذكر في الوثيقة.",
        q2: "هل أستطيع العلاج خارج الشبكة؟",
        a2: "ممكن مع تعويض وفق الجداول. الشبكة تتيح الدفع المباشر.",
      },
      cta: {
        t: "احصل على تغطية صحية",
        p: "نقارن العروض ونضبط الخطة الأنسب لاحتياجاتك.",
        quote: "اطلب عرضاً",
        talk: "تحدّث إلى مستشار",
      },
      nav: {
        prev: "التقاعد",
        next: "حوادث الحياة",
      },
    },
    alv: {
      title: "الحوادث الشخصية (الأفراد)",
      subtitle:
        "الوفاة والعجز بسبب الحوادث • مقياس الإعاقة • المصاريف الطبية الطارئة • البدل اليومي للمستشفى • الكسور والحروق • المساعدة والتعليم • 24/7 عالمياً.",
      badges: ["مبالغ مقطوعة للحوادث", "العائلة والتعليم", "24/7 عالمياً"],
      tabs: {
        over: "نظرة عامة",
        cov: "الضمانات",
        opt: "الخيارات والامتدادات",
        admin: "التسعير والاشتراك",
        claim: "المطالبات",
        faq: "الأسئلة الشائعة",
      },
      over: {
        t: "1. نظرة عامة",
        p: "تأمين الحوادث الشخصية يدفع التعويضات في حالة الوفاة أو الإعاقة الجسدية بسبب الحوادث (الحياة الخاصة، الترفيه، الرياضة). المبالغ المقطوعة قد تغطي أيضاً الطوارئ، الكسور/الحروق، البدل اليومي للمستشفى والمساعدة.",
        li: [
          "تغطية 24/7، بما في ذلك في الخارج (حسب الخطة).",
          "مبالغ التأمين القابلة للاختيار مع مقياس إعاقة شفاف.",
          "باقة العائلة وخيار راتب التعليم.",
        ],
        kpi: {
          0: "مبلغ الوفاة",
          1: "العجز",
          2: "خصم البدل اليومي",
        },
      },
      cov: {
        t: "2. الضمانات الأساسية",
        c0: {
          t: "الوفاة والعجز بسبب الحوادث",
          li: [
            "مبلغ مقطوع في حالة الوفاة العرضية.",
            "رأس المال/الراتب حسب مقياس الإعاقة.",
            "تأهيل المنزل (حسب الخطة).",
          ],
        },
        c1: {
          t: "المصاريف الطبية والبدل اليومي للمستشفى",
          li: [
            "مصاريف الطوارئ (حدود سنوية).",
            "البدل اليومي للمستشفى (خصم 24–48 ساعة).",
            "الأطراف الصناعية/التقويمية (حسب الخطة).",
          ],
        },
        c2: {
          t: "جداول الكسور والحروق",
          li: [
            "التعويضات حسب الموقع والشدة.",
            "الجراحة الترميمية/التجميلية بعد الحادث.",
            "العجز الدائم الجزئي/الكلي.",
          ],
        },
        c3: {
          t: "المساعدة والتعليم",
          li: [
            "الإعادة، المساعدة المنزلية، رعاية الأطفال.",
            "راتب التعليم/رأس مال الدراسة (خيار).",
            "الدعم الاجتماعي والنفسي.",
          ],
        },
      },
      opt: {
        t: "3. الخيارات والامتدادات",
        c0: {
          t: "المبالغ والباقات",
          li: [
            "اختيار مبالغ التأمين حسب الفئة.",
            "باقة العائلة: تغطية جميع الأعضاء.",
            "التحديث السنوي (اختياري).",
          ],
        },
        c1: {
          t: "الرياضة والمخاطر",
          li: [
            "استرداد استثناءات الرياضات الخطرة (قائمة).",
            'امتدادات "العالم+" (الإقامات الطويلة).',
            "الاستثناءات المعتادة: المرض، الأفعال المتعمدة…",
          ],
        },
        c2: {
          t: "البدل اليومي للمستشفى",
          li: [
            "المبلغ قابل للاختيار (خصم 24–48 ساعة).",
            "حد الأيام/السنة حسب الخطة.",
            "قابل للتراكم مع الضمانات الأساسية.",
          ],
        },
      },
      admin: {
        t: "4. التسعير والاشتراك",
        c0: {
          t: "كيف يتم تحديد السعر؟",
          li: [
            "العمر ومبالغ التأمين المختارة.",
            "الأنشطة والرياضات المعلنة.",
            "الخيارات (البدل اليومي، الامتدادات، باقة العائلة).",
          ],
        },
        c1: {
          t: "الاشتراك",
          li: [
            "إعلان بسيط (لا فحص طبي عادة).",
            "تأثير فوري عند الاشتراك (شروط تنطبق).",
            "أعمار الدخول/الخروج محددة في العقد.",
          ],
        },
        c2: {
          t: "الوثائق المفيدة",
          li: [
            "بطاقة الهوية وتفاصيل الاتصال.",
            "إعلان الأنشطة/الرياضات.",
            "بيان الحساب المصرفي إذا كان الخصم المباشر.",
          ],
        },
      },
      claim: {
        t: "5. الإعلان والتعويض",
        sum: "نهجنا",
        li: [
          "الإعلان عبر الإنترنت خلال 5 أيام عمل بعد الحادث.",
          "الوثائق: التقرير الطبي، الفواتير، نموذج الإعاقة.",
          "التعويض حسب الجدول والمبالغ المؤمنة.",
        ],
      },
      faq: {
        t: "6. الأسئلة الشائعة",
        q0: "هل حوادث الرياضة مغطاة؟",
        a0: "نعم لمعظم الرياضات الترفيهية. الرياضات الخطرة قد تتطلب امتداداً محدداً.",
        q1: "ماذا لو كان طرف ثالث مسؤولاً؟",
        a1: "تأمين الحوادث الشخصية يعوض بغض النظر عن مسؤولية الطرف الثالث. يتم إدارة المطالبات بعد ذلك من قبل المؤمن.",
        q2: "هل هناك فترة انتظار؟",
        a2: "عادة لا للحوادث الخالصة؛ قد ينطبق خصم زمني على البدل اليومي.",
      },
      cta: {
        t: "احم عائلتك من حوادث الحياة",
        p: "نقارن العروض ونحدد المبالغ التي تناسب احتياجاتك.",
        quote: "احصل على عرض سعر",
        talk: "تحدث إلى مستشار",
      },
      nav: {
        prev: "الصحة",
        next: "الممتلكات (السكن)",
      },
    },
    habitation: {
      title: "السكن (الممتلكات)",
      subtitle:
        "حريق • سرقة • أضرار المياه • كسر الزجاج • مسؤولية مدنية • مقتنيات ثمينة • حماية قانونية • مساعدة وسكن مؤقت.",
      badges: ["تأمين سكن شامل", "مسؤولية مدنية", "مساعدة 24/7"],
      tabs: {
        over: "لمحة",
        cov: "التغطيات",
        opt: "الخيارات",
        risks: "الاستثناءات",
        claim: "المطالبات والمساعدة",
        faq: "الأسئلة الشائعة",
      },
      over: {
        t: "١. لمحة",
        p: "يحمي تأمين السكن المنزل/الشقة ومحتوياته من خسائر الحياة اليومية ويغطي المسؤولية المدنية الخاصة.",
        li: [
          "حريق، سرقة، أضرار مياه، أحوال جوية.",
          "مسؤولية عن الأضرار للغير (أنت/الأطفال/الحيوانات).",
          "خدمات: مساعدة، سكن مؤقت، إصلاحات طارئة.",
        ],
        kpi: {
          0: "مبلغ محتويات المنزل",
          1: "التحمل",
          2: "مساعدة",
        },
      },
      cov: {
        t: "٢. التغطيات الرئيسية",
        c0: {
          t: "أضرار المسكن",
          li: [
            "حريق وانفجار ودخان.",
            "أضرار مياه وتجمد.",
            "أحوال جوية (حسب الوثيقة).",
          ],
        },
        c1: {
          t: "سرقة وتخريب",
          li: [
            "اقتحام/اعتداء/تسلق (حسب الضمان).",
            "أضرار بالمبنى أثناء السرقة.",
            "مقتنيات ثمينة: حدود خاصة.",
          ],
        },
        c2: {
          t: "مسؤولية مدنية",
          li: [
            "الحياة الخاصة (أنت/الأطفال/الحيوانات).",
            "رجوع الجيران والغير.",
            "دفاع واسترجاع (قانوني أساسي).",
          ],
        },
      },
      opt: {
        t: "٣. خيارات وإضافات",
        c0: {
          t: "مقتنيات ثمينة",
          li: ["مجوهرات وفنون: تغطيات مخصصة.", "تقييم وفواتير مطلوبة."],
        },
        c1: {
          t: "كسر الزجاج والأجهزة",
          li: ["نوافذ وشرفات صحية.", "أعطال كهربائية (اختياري)."],
        },
        c2: {
          t: "حماية قانونية",
          li: ["نزاعات الجوار والاستهلاك.", "مساندة وتغطية الرسوم حتى الحدود."],
        },
      },
      risks: {
        t: "٤. أبرز الاستثناءات (أمثلة)",
        li: [
          "اهتراء/قدم/نقص صيانة.",
          "أغراض مهنية غير مصرّح بها.",
          "سرقة دون كسر واضح (حسب الوثيقة).",
          "أحداث غير قابلة للتأمين (حرب…).",
        ],
        note: "تختلف الشروط والحدود والتحمل حسب الخطة وشركة التأمين. التفاصيل في وثيقة البوليصة.",
      },
      claim: {
        t: "٥. المطالبات والمساعدة",
        sum: "ماذا أفعل عند وقوع ضرر؟",
        li: [
          "أمّن المكان واتصل بالمساعدة 24/7.",
          "أبلغ خلال 5 أيام عمل (يومان للسرقة).",
          "احتفظ بعروض الأسعار/الفواتير/الصور للخبير.",
          "سكن مؤقت إذا أصبح المنزل غير صالح (حسب التغطية).",
        ],
      },
      faq: {
        t: "٦. الأسئلة الشائعة",
        q0: "ما أساس التعويض؟",
        a0: "بحسب الخيار: قيمة جديدة، قيمة متفق عليها، أو قيمة حالية مع اهتلاك.",
        q1: "هل الأجهزة الذكية مشمولة؟",
        a1: "نعم ضمن محتويات المنزل مع حدود لكل غرض/أسرة. قد تُطلب فاتورة.",
        q2: "هل يمكن تأمين بيت ثانٍ؟",
        a2: "نعم عبر إضافة خاصة أو وثيقة منفصلة حسب الشركة والاستخدام.",
      },
      cta: {
        t: "احمِ منزلك بسهولة",
        p: "نحدد مبالغ التأمين والتحمل والخيارات وفق مسكنك وميزانيتك.",
        quote: "اطلب عرضاً",
        talk: "تحدث إلى مستشار",
      },
      nav: {
        prev: "حوادث الحياة",
        next: "تأمين الحياة والادخار",
      },
    },
    vie: {
      title: "تأمين الحياة والادخار",
      subtitle:
        "ادخار طويل الأجل • تخطيط وراثي • صناديق بالعملة المحلية ووحدات استثمار • إدارة مؤتمتة • سحوبات وقروض على الوثيقة • ضرائب حسب الإطار.",
      badges: ["ادخار ونقل الثروة", "إدارة مُدارة", "وحدات استثمار"],
      tabs: {
        over: "لمحة",
        cov: "المنافع",
        inv: "خيارات الاستثمار",
        ops: "الخيارات والسحوبات",
        fees: "الرسوم والضرائب",
        faq: "الأسئلة الشائعة",
      },
      over: {
        t: "١. لمحة",
        p: "إطار مرن للادخار والاستثمار ونقل الثروة عبر دفعات حرة أو دورية وباقة من الصناديق.",
        li: [
          "أفق مقترح: متوسط/طويل (5–10 سنوات+).",
          "بند مستفيد قابل للتخصيص (إرث).",
          "تحويلات وخيارات إدارة مؤتمتة.",
        ],
        kpi: {
          0: "الدفعات",
          1: "ملف المخاطر",
          2: "الأفق",
          "0l": "حرة / دورية",
          "1l": "حذر ↔ ديناميكي",
        },
      },
      cov: {
        t: "٢. المنافع",
        c0: {
          t: "الوفاة",
          li: [
            "رأس مال للمستفيدين المحددين.",
            "خيارات ضمانات دنيا/معزَّزة (حسب الوثيقة).",
          ],
        },
        c1: {
          t: "البقاء على قيد الحياة",
          li: ["سحوبات جزئية مبرمجة أو فورية.", "قروض على الوثيقة (إن توفرت)."],
        },
        c2: {
          t: "خيارات الخروج",
          li: ["رأس مال أو معاش (حسب الشروط).", "بنود مستفيدين متقدمة."],
        },
      },
      inv: {
        t: "٣. خيارات الاستثمار",
        c0: {
          t: "حساب عام (درهم)",
          li: [
            "هدف حماية رأس المال (بعد الرسوم).",
            "عائد سنوي من شركة التأمين.",
          ],
        },
        c1: {
          t: "وحدات استثمار",
          li: [
            "وصول لصناديق أسهم/سندات/عقار/نقدي.",
            "مخاطر وعوائد متغيرة، رأس المال غير مضمون.",
          ],
        },
        c2: {
          t: "الإدارة",
          li: ["حرة أو مُدارة.", "موازنة تلقائية، إيقاف خسائر، تأمين الأرباح."],
        },
      },
      ops: {
        t: "٤. الخيارات والسحوبات",
        li: [
          "سحوبات جزئية دون إقفال الوثيقة (قد توجد حدود/رسوم).",
          "تحويلات بين الصناديق (رسوم محتملة).",
          "قروض على الوثيقة دون البيع.",
          "تعديل بند المستفيدين في أي وقت.",
        ],
        note: "تختلف الشروط حسب الشركة (حدود، آجال، رسوم، مستندات). سنرشدك لتحسينها.",
      },
      fees: {
        t: "٥. الرسوم والضرائب (نظرة عامة)",
        c0: {
          t: "رسوم",
          li: [
            "رسوم على الدفعات وإدارة الوثيقة.",
            "رسوم صناديق الوحدات الاستثمارية.",
            "رسوم التحويل حسب الجدول.",
          ],
        },
        c1: {
          t: "ضرائب",
          li: [
            "المعاملة الضريبية بحسب الإطار القانوني المحلي.",
            "مزايا محتملة على المدى الطويل وفي الإرث.",
            "لا نقدم استشارات ضريبية — استشر خبيرك.",
          ],
        },
      },
      faq: {
        t: "٦. الأسئلة الشائعة",
        q0: "هل أستطيع تغيير ملف المخاطر؟",
        a0: "نعم عبر تحويلات أو إدارة مُدارة؛ قد تُطبق رسوم/آجال.",
        q1: "هل عوائد الماضي مضمونة؟",
        a1: "لا. في الوحدات الاستثمارية رأس المال غير مضمون وقد يرتفع أو ينخفض.",
        q2: "كيف أحدد المستفيدين؟",
        a2: "من خلال بند حر مخصص — نساعدك على صياغته وتحديثه.",
      },
      cta: {
        t: "اجعل ادخارك يعمل لصالحك",
        p: "نوفّق بين الصناديق والرسوم والخيارات وفق أفقك وتحملك للمخاطر وأهدافك.",
        quote: "اطلب عرضاً",
        talk: "تحدث إلى مستشار",
      },
      nav: {
        prev: "السكن (الممتلكات)",
        next: "سفر شنغن",
      },
    },
    auto: {
      title: "ريسكاليا تأمين السيارات",
      subtitle: "تأمين السيارات — المسؤولية المدنية+، التصادم، جميع الأخطار.",
      desc: "دقة. شفافية. سرعة. ثلاث مستويات من التغطية مصممة حسب نوع السيارة والاستخدام.",
      bullets: [
        "مساعدة على مدار الساعة وشبكة معتمدة",
        "حماية السائق والمركبة",
        "ثلاث مستويات تغطية: المسؤولية المدنية+، التصادم، جميع الأخطار",
      ],
      hero: {
        cta1: "اعرف المزيد",
        cta2: "احصل على عرض",
      },
      cards: {
        tiers: {
          title: "المسؤولية المدنية +",
          coverage: [
            "تأمين المسؤولية المدنية الإجباري",
            "الدفاع والمطالبة بالحقوق",
            "كسر الزجاج",
            "الحريق",
            "خيار السرقة",
          ],
          services:
            "<strong>الخدمات المتضمنة:</strong> مساعدة 24/7، شبكة ورش معتمدة، متابعة المطالبات رقمياً.",
          eligibility:
            "<strong>الأهلية:</strong> سيارات خاصة • عمر ≤ 20 سنة • استخدام خاص أو مهني خفيف.",
        },
        collision: {
          title: "أضرار التصادم",
          coverage: [
            "ضمانات المسؤولية المدنية +",
            "أضرار بالمركبة (تصادم مع طرف محدد)",
            "حماية قانونية",
          ],
          services:
            "<strong>الخدمات المتضمنة:</strong> مساعدة معززة (سحب + إصلاح ميداني)، سيارة بديلة* (حسب الشروط)، أولوية في معالجة المطالبات.",
          eligibility:
            "<strong>الأهلية:</strong> سيارات ≤ 15 سنة • سجل مكافأة/خصم مطابق • اكتتاب مبسط عبر الوسيط.",
        },
        premium: {
          title: "جميع الأخطار المميزة",
          coverage: [
            "ضمانات أضرار التصادم +",
            "تغطية لجميع الحوادث",
            "السرقة، الحريق، الكسر، الكوارث الطبيعية",
            "قيمة جديدة / مضافة",
            "حماية السائق والركاب",
          ],
          services:
            "<strong>الخدمات المتضمنة:</strong> قيمة جديدة/مضافة حتى 36 شهراً، سيارة بديلة مميزة (حسب الخيارات)، مسار تعويض سريع.",
          eligibility:
            "<strong>الأهلية:</strong> سيارات حديثة أو فاخرة • تمويل إيجاري/قروض • سائقون ذوو خبرة أو أساطيل تنفيذية.",
        },
      },
      intro: {
        title: "تغطية تناسب سيارتك واستخدامك",
        text:
          "ثلاث مستويات واضحة: <span class=\"font-semibold\">المسؤولية المدنية+</span> للأساسيات والميزانية، <span class=\"font-semibold\">أضرار التصادم</span> لحماية مركبتك ضد طرف محدد، و<span class=\"font-semibold\">جميع الأخطار المميزة</span> لحماية موسعة (كل الحوادث، قيمة جديدة/مضافة).",
      },
      value: {
        items: [
          {
            title: "تقييم ملف السائق واستخدام المركبة",
            text: "تحديد الضمانات المناسبة وتقليل التكاليف غير الضرورية.",
          },
          {
            title: "إدارة المطالبات رقمياً",
            text: "شفافية وسرعة وتتبع واضح لمسار التعويض.",
          },
          {
            title: "استشارة ووقاية من المخاطر",
            text: "تحسين نظام المكافآت/الخصومات ودعم ما بعد الحوادث.",
          },
        ],
      },
      cta: {
        title: "احصل على عرض مخصص",
        text: "نضبط مستوى التغطية وفق عمر المركبة، الاستخدام، وسجل السائق.",
        quote: "اطلب عرضاً",
        talk: "تحدث إلى مستشار",
      },
      slogan:
        "ريسكاليا للسيارات — <span class=\"rk-accent\">دقة.</span> <span class=\"rk-accent\">شفافية.</span> <span class=\"rk-accent\">سرعة.</span>",
      nav: {
        prev: "← تأمين الحياة والادخار",
        next: "التقاعد →",
      },
    },
    retraite: {
      title: "التقاعد (ادخار طويل الأجل)",
      subtitle:
        "دفعات مجدولة أو مرنة • ملفات استثمارية • خفض المخاطر تدريجياً • صرف على شكل راتب تقاعدي و/أو رأسمال • مستفيدون • ضرائب حسب الإطار المحلي.",
      badges: ["طويل الأجل", "ملفات توزيع", "راتب أو رأسمال"],
      tabs: {
        over: "لمحة",
        cov: "الفوائد الأساسية",
        opt: "خيارات الاستثمار",
        admin: "الرسوم والاشتراك",
        claim: "المنافع والسحب",
        faq: "الأسئلة الشائعة",
      },
      over: {
        t: "١. لمحة",
        p: "تساعدك خطة التقاعد على بناء ادخار طويل الأجل عبر دفعات مجدولة أو مرنة تُستثمر بما يناسب الأفق الزمني. عند الاستحقاق يمكنك الاختيار بين راتب تقاعدي، رأسمال، أو مزيج منهما.",
        li: [
          "تقليل المخاطر تلقائياً مع الاقتراب من التقاعد (Lifecycle).",
          "إمكانية التحويل بين الصناديق (حسب الوثيقة).",
          "تحديد المستفيدين في حال الوفاة.",
        ],
        kpi: ["الأفق المقترح", "الدفعة الدنيا", "طريقة الصرف"],
        kpi_values: [
          "10–25 سنة",
          "مرن (شهري/عرضي)",
          "راتب تقاعدي، رأسمال أو مختلط",
        ],
      },
      cov: {
        t: "٢. الفوائد الأساسية",
        c0: {
          t: "انضباط الادخار",
          li: [
            "دفعات مجدولة تلقائياً.",
            "إتاحة الدفعات الإضافية.",
            "متوسط التكلفة مع الزمن.",
          ],
        },
        c1: {
          t: "الإطار والضرائب",
          li: [
            "معاملة ضريبية حسب القوانين الوطنية.",
            "رسوم وتقارير بشفافية.",
            "إمكانية النقل (وفق الوثيقة).",
          ],
        },
        c2: {
          t: "الحماية والورثة",
          li: [
            "تعيين المستفيدين.",
            "خيار راتب تقاعدي قابل للاستمرار للورثة.",
            "خيارات خفض المخاطر تدريجياً.",
          ],
        },
      },
      opt: {
        t: "٣. خيارات الاستثمار",
        c0: {
          t: "ملفات",
          li: [
            "محافظ حذرة (سندات/صندوق مضمون).",
            "متوازنة (مزيج سندات/أسهم).",
            "ديناميكية (أسهم/محاور/ESG).",
          ],
        },
        c1: {
          t: "التوجيه",
          li: [
            "تحويلات حرة (قد تُحدد بعدد/حدود).",
            "خفض تلقائي للمخاطر قرب الاستحقاق.",
            "قفل الأرباح (اختياري).",
          ],
        },
        c2: {
          t: "ضمانات",
          li: [
            "حد أدنى للوفاة (بحسب الصندوق/الشركة).",
            "راتب تقاعدي مؤكد/قابل للاستمرار.",
            "فهرسة سنوية للرواتب (اختياري).",
          ],
        },
      },
      admin: {
        t: "٤. الرسوم والاشتراك",
        c0: {
          t: "الرسوم (مؤشرات)",
          li: [
            "رسوم دخول/دفعات بحسب الوثيقة.",
            "رسوم إدارة سنوية للصناديق.",
            "رسوم التحويل إن وُجدت.",
          ],
        },
        c1: {
          t: "الاشتراك",
          li: ["نموذج + هوية.", "تحديد المستفيدين.", "بيانات بنكية."],
        },
        c2: {
          t: "الأعمار والدفعات",
          li: [
            "أعمار الدخول/الاستمرار حسب الإطار.",
            "حدود دنيا للدفعات.",
            "إمكانية تعديل المبلغ مع الوقت.",
          ],
        },
      },
      claim: {
        t: "٥. المنافع والسحب",
        sum: "آلية العمل",
        li: [
          "صرف عند الاستحقاق كر راتب تقاعدي و/أو رأسمال.",
          "سحب جزئي/كلي وفق القوانين المحلية.",
          "في حالة الوفاة: تحويل للمستفيدين المحددين.",
        ],
      },
      faq: {
        t: "٦. الأسئلة الشائعة",
        q0: "هل أستطيع تغيير ملف الاستثمار؟",
        a0: "نعم عبر تحويلات بين الصناديق (قد تكون مجانية أو برسوم). قد يوجد حد سنوي.",
        q1: "هل يسمح بالسحب المبكر؟",
        a1: "وفق القوانين المحلية (مثلاً ظروف قاهرة). نرشدك لكل حالة على حدة.",
        q2: "كيف تُفرض الضرائب على الصرف؟",
        a2: "تختلف حسب الإطار الوطني ونوع الصرف (راتب/رأسمال). نوضح القواعد قبل القرار.",
      },
      cta: {
        t: "ابنِ تقاعدك بثقة",
        p: "نحدد معك الأفق والميزانية وملف الاستثمار الأنسب.",
        quote: "اطلب عرضاً",
        talk: "تحدث إلى مستشار",
      },
      nav: {
        prev: "سفر شنغن",
        next: "الصحة",
      },
    },
    // 404 Error page translations
    error: {
      title: "الصفحة غير موجودة",
      sub: "عذراً! الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
      homeBtn: "العودة للصفحة الرئيسية",
      contactBtn: "اتصل بنا",
      quickNavTitle: "الصفحات الشائعة",
      quickNavSub: "ابحث بسرعة عما تريد",
      solutionsDesc: "منتجات للشركات والأفراد",
      reinsuranceDesc: "معاهدات، اختيارية، مطالبات وتحكيم",
      climateDesc: "تحديد، قياس، إدارة وتقارير",
      esgDesc: "الحوكمة، الأخلاق، الرفاهية، التنوع",
      contactDesc: "طلب عرض سعر، مطالبات، بيانات الاتصال",
      servicesDesc: "تدريب، تقييم ودعم مخصص",
      helpTitle: "تحتاج مساعدة؟",
      helpText: "إذا كنت تعتقد أن هذا خطأ، لا تتردد في الاتصال بنا.",
      emailBtn: "contact@riskalia.ma",
      phoneBtn: "+212 666 756 991",
    },
  },
};

/* Helpers */
let lang = localStorage.getItem("riskalia_lang") || "fr";
if (!["fr", "en", "ar"].includes(lang)) lang = "fr";

// Make lang globally accessible
window.lang = lang;

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

function t(path) {
  // Always use the current lang from localStorage or window.lang
  const currentLang =
    window.lang || localStorage.getItem("riskalia_lang") || "fr";
  const ns = path.split(".");
  let cur = window.I18N?.[currentLang];
  for (const n of ns) {
    if (cur == null || !(n in cur)) return path;
    cur = cur[n];
  }
  return cur;
}

/* Translate attributes via data-i18n-attr="attr:key,attr2:key2" */
function applyI18nAttrs() {
  $$("[data-i18n-attr]").forEach((el) => {
    const pairs = el.dataset.i18nAttr
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
    for (const pair of pairs) {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const val = t(key);
      if (attr && val) el.setAttribute(attr, val);
    }
  });
}

/* Apply title & meta description */
function setMeta() {
  const m = window.I18N?.[lang]?.meta;
  if (m?.title) document.title = m.title;
  if (m?.desc) {
    let md = document.querySelector('meta[name="description"]');
    if (!md) {
      md = document.createElement("meta");
      md.setAttribute("name", "description");
      document.head.appendChild(md);
    }
    md.setAttribute("content", m.desc);
  }
}

/* Main apply */
function applyTexts() {
  // Update global lang variable from localStorage
  lang = localStorage.getItem("riskalia_lang") || "fr";
  window.lang = lang;

  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach((el) => (el.innerHTML = t(el.dataset.i18n)));
  applyI18nAttrs();

  $$(".lang-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === lang)
  );
  setMeta();
}

// Make functions globally available
window.applyTexts = applyTexts;
window.t = t;
window.applyI18n = applyTexts;

// Hoist shared footer/product labels out of the climate namespace so
// site-wide components (footer, navigation lists) can resolve them.
["fr", "en", "ar"].forEach((lng) => {
  const pack = window.I18N?.[lng];
  const climate = pack?.climate;
  if (!climate || !pack) return;

  ["footer", "produits"].forEach((key) => {
    if (climate[key] && !pack[key]) {
      pack[key] = climate[key];
    }
    if (climate[key]) delete climate[key];
  });
});


























