/**
 * Simple Search Component for Riskalia
 * Provides quick page navigation - just takes users to the right page
 */
class SearchComponent {
  constructor() {
    this.searchData = this.getSearchData();
    this.currentLang = localStorage.getItem("riskalia_lang") || "fr";
  }

  // Simple page data - just the essentials
  getSearchData() {
    return {
      fr: [
        {
          title: "Accueil",
          url: "/index.html",
          keywords: ["accueil", "home", "principal"],
        },
        {
          title: "Solutions d'Assurance",
          url: "/solutions.html",
          keywords: [
            "solutions",
            "assurance",
            "produits",
            "entreprise",
            "particulier",
          ],
        },
        {
          title: "Réassurance",
          url: "/reinsurance.html",
          keywords: ["réassurance", "traités", "facultatives"],
        },
        {
          title: "Risques Climatiques",
          url: "/climate.html",
          keywords: ["climat", "climatiques", "environnement", "risques"],
        },
        {
          title: "Services de Conseil",
          url: "/services.html",
          keywords: ["conseil", "services", "formation", "évaluation"],
        },
        {
          title: "ESG",
          url: "/esg.html",
          keywords: [
            "esg",
            "durabilité",
            "gouvernance",
            "environnement",
            "social",
          ],
        },
        {
          title: "Contact",
          url: "/contact.html",
          keywords: ["contact", "devis", "conseiller", "rendez-vous"],
        },

        // Main insurance products
        {
          title: "Multirisques Entreprise",
          url: "/Produits/multirisques.html",
          keywords: ["multirisques", "entreprise", "business"],
        },
        {
          title: "Transport",
          url: "/Produits/transport.html",
          keywords: ["transport", "marchandises", "cargo"],
        },
        {
          title: "Automobile & Flotte",
          url: "/Produits/flotte.html",
          keywords: ["auto", "automobile", "flotte", "véhicules"],
        },
        {
          title: "Responsabilité Civile",
          url: "/Produits/rc.html",
          keywords: ["responsabilité", "civile", "RC"],
        },
        {
          title: "Construction",
          url: "/Produits/construction.html",
          keywords: ["construction", "bâtiment", "travaux"],
        },
        {
          title: "Santé Collective",
          url: "/Produits/santecollective.html",
          keywords: ["santé", "collective", "groupe", "employés"],
        },
        {
          title: "Santé",
          url: "/Produits/sante.html",
          keywords: ["santé", "médical", "soins"],
        },
        {
          title: "Accidents de la Vie",
          url: "/Produits/alv.html",
          keywords: ["accidents", "vie", "ALV", "individuelle"],
        },
        {
          title: "Habitation",
          url: "/Produits/habitation.html",
          keywords: ["habitation", "logement", "maison", "appartement"],
        },
        {
          title: "Assurance Vie",
          url: "/Produits/vie.html",
          keywords: ["vie", "épargne", "placement", "investissement"],
        },
        {
          title: "Voyage Schengen",
          url: "/Produits/schengen.html",
          keywords: ["voyage", "schengen", "visa", "étranger"],
        },
        {
          title: "Retraite",
          url: "/Produits/retraite.html",
          keywords: ["retraite", "pension", "épargne"],
        },
      ],
      en: [
        {
          title: "Home",
          url: "/index.html",
          keywords: ["home", "main", "homepage"],
        },
        {
          title: "Insurance Solutions",
          url: "/solutions.html",
          keywords: [
            "solutions",
            "insurance",
            "products",
            "corporate",
            "personal",
          ],
        },
        {
          title: "Reinsurance",
          url: "/reinsurance.html",
          keywords: ["reinsurance", "treaties", "facultative"],
        },
        {
          title: "Climate Risks",
          url: "/climate.html",
          keywords: ["climate", "environmental", "risks", "TCFD"],
        },
        {
          title: "Advisory Services",
          url: "/services.html",
          keywords: ["advisory", "consulting", "services", "training"],
        },
        {
          title: "ESG",
          url: "/esg.html",
          keywords: [
            "esg",
            "sustainability",
            "governance",
            "environment",
            "social",
          ],
        },
        {
          title: "Contact",
          url: "/contact.html",
          keywords: ["contact", "quote", "advisor", "meeting"],
        },

        // Main insurance products
        {
          title: "Multi-Risk Business",
          url: "/Produits/multirisques.html",
          keywords: ["multi-risk", "business", "corporate"],
        },
        {
          title: "Transport",
          url: "/Produits/transport.html",
          keywords: ["transport", "cargo", "goods"],
        },
        {
          title: "Motor & Fleet",
          url: "/Produits/flotte.html",
          keywords: ["motor", "fleet", "vehicles", "auto"],
        },
        {
          title: "Civil Liability",
          url: "/Produits/rc.html",
          keywords: ["liability", "civil", "responsibility"],
        },
        {
          title: "Construction",
          url: "/Produits/construction.html",
          keywords: ["construction", "building", "works"],
        },
        {
          title: "Group Health",
          url: "/Produits/santecollective.html",
          keywords: ["health", "group", "collective", "employees"],
        },
        {
          title: "Health",
          url: "/Produits/sante.html",
          keywords: ["health", "medical", "healthcare"],
        },
        {
          title: "Personal Accident",
          url: "/Produits/alv.html",
          keywords: ["accident", "personal", "individual"],
        },
        {
          title: "Home",
          url: "/Produits/habitation.html",
          keywords: ["home", "property", "house", "apartment"],
        },
        {
          title: "Life Insurance",
          url: "/Produits/vie.html",
          keywords: ["life", "savings", "investment"],
        },
        {
          title: "Schengen Travel",
          url: "/Produits/schengen.html",
          keywords: ["travel", "schengen", "visa", "abroad"],
        },
        {
          title: "Retirement",
          url: "/Produits/retraite.html",
          keywords: ["retirement", "pension", "savings"],
        },
      ],
      ar: [
        {
          title: "الرئيسية",
          url: "/index.html",
          keywords: ["الرئيسية", "الصفحة الرئيسية"],
        },
        {
          title: "حلول التأمين",
          url: "/solutions.html",
          keywords: ["حلول", "تأمين", "منتجات", "شركات", "أفراد"],
        },
        {
          title: "إعادة التأمين",
          url: "/reinsurance.html",
          keywords: ["إعادة التأمين", "معاهدات", "اختيارية"],
        },
        {
          title: "مخاطر المناخ",
          url: "/climate.html",
          keywords: ["مناخ", "بيئة", "مخاطر"],
        },
        {
          title: "الخدمات الاستشارية",
          url: "/services.html",
          keywords: ["استشارة", "خدمات", "تدريب"],
        },
        {
          title: "الاستدامة",
          url: "/esg.html",
          keywords: ["استدامة", "حوكمة", "بيئة", "اجتماعي"],
        },
        {
          title: "تواصل",
          url: "/contact.html",
          keywords: ["تواصل", "عرض أسعار", "مستشار"],
        },
      ],
    };
  }

  // Simple search function - just match and return results
  search(query) {
    if (!query || query.length < 2) return [];

    const data = this.searchData[this.currentLang] || this.searchData.fr;
    const normalizedQuery = query.toLowerCase().trim();

    return data
      .filter((item) => {
        // Check title
        if (item.title.toLowerCase().includes(normalizedQuery)) return true;

        // Check keywords
        return item.keywords.some((keyword) =>
          keyword.toLowerCase().includes(normalizedQuery)
        );
      })
      .slice(0, 6); // Limit to 6 results max
  }

  // Navigate to page
  navigateToPage(url) {
    window.location.href = url;
  }

  // Update language
  updateLanguage(lang) {
    this.currentLang = lang;
  }
}

// Make it globally available
window.SearchComponent = SearchComponent;
