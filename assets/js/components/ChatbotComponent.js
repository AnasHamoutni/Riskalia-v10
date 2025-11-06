/**
 * Professional Chatbot Component for Riskalia
 * Deterministic chatbot with insurance/reinsurance expertise
 */

class ChatbotComponent {
  constructor() {
    this.isOpen = false;
    this.isMinimized = false;
    this.currentLang = localStorage.getItem("riskalia_lang") || "fr";
    this.conversationHistory = [];
    this.currentNode = "root"; // Track current position in decision tree
    this.navigationHistory = []; // Track navigation path
    this.init();
  }

  init() {
    this.createChatbotHTML();
    this.bindEvents();
    this.setupResponses();
    this.updateLanguage();
    this.initializeDecisionTree();
  }

  initializeDecisionTree() {
    // Initialize with root node (fallback to FR if missing)
    setTimeout(() => {
      const tree = this.decisionTree[this.currentLang] || {};
      const fallbackTree = this.decisionTree["fr"] || {};
      const rootNode = tree.root || fallbackTree.root;
      if (rootNode) {
        this.updateQuickActions(rootNode.actions);
      }
    }, 100);
  }

  createChatbotHTML() {
    // Create chatbot container
    const chatbotContainer = document.createElement("div");
    chatbotContainer.id = "riskalia-chatbot";
    chatbotContainer.innerHTML = this.getChatbotHTML();
    document.body.appendChild(chatbotContainer);
  }

  getChatbotHTML() {
    return `
      <!-- Chatbot Container -->
      <div class="chatbot-container">
        
        <!-- Chatbot Toggle Button -->
        <button class="chatbot-toggle-btn" id="chatbot-toggle">
          <div class="chatbot-icon">
            <svg class="chatbot-icon-svg" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 26.33H30V16.4916C30 15.4933 29.1907 14.684 28.1924 14.684H11.8076C10.8093 14.684 10 15.4933 10 16.4916V26.33ZM30 28.5908V27.5722H10V28.5908C10 29.5891 10.8093 30.3983 11.8076 30.3983H28.1924C29.1907 30.3983 30 29.5891 30 28.5908ZM15.6522 23.1934C16.6813 23.1934 17.5155 22.3591 17.5155 21.33C17.5155 20.3009 16.6813 19.4667 15.6522 19.4667C14.6231 19.4667 13.7888 20.3009 13.7888 21.33C13.7888 22.3591 14.6231 23.1934 15.6522 23.1934ZM26.2112 21.33C26.2112 22.3591 25.3769 23.1934 24.3478 23.1934C23.3187 23.1934 22.4845 22.3591 22.4845 21.33C22.4845 20.3009 23.3187 19.4667 24.3478 19.4667C25.3769 19.4667 26.2112 20.3009 26.2112 21.33Z" fill="#FFF"/>
              <path d="M21.8076 11.4092C21.8076 12.4075 20.9983 13.2168 20 13.2168C19.0017 13.2168 18.1924 12.4075 18.1924 11.4092C18.1924 10.4109 19.0017 9.60165 20 9.60165C20.9983 9.60165 21.8076 10.4109 21.8076 11.4092Z" fill="#FFF"/>
              <path d="M19.5481 12.3067H20.4519V15.0181H19.5481V12.3067Z" fill="#FFF"/>
            </svg>
          </div>
          <div class="chatbot-pulse"></div>
        </button>

        <!-- Chatbot Window -->
        <div class="chatbot-window" id="chatbot-window">
          
          <!-- Chatbot Header -->
          <div class="chatbot-header">
            <div class="chatbot-header-content">
              <div class="chatbot-avatar">
                <img src="/assets/Riskalia-Logo.png" alt="Riskalia Assistant" class="chatbot-avatar-img">
              </div>
              <div class="chatbot-header-info">
                <h3 class="chatbot-title" data-i18n="chatbot.title">Assistant Riskalia</h3>
                <p class="chatbot-subtitle" data-i18n="chatbot.subtitle">Expert en assurance & réassurance</p>
              </div>
            </div>
            <div class="chatbot-header-actions">
              <button class="chatbot-close-btn" id="chatbot-close" title="Fermer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Chatbot Messages -->
          <div class="chatbot-messages" id="chatbot-messages">
            <div class="chatbot-welcome">
              <div class="chatbot-message chatbot-message-bot">
                <div class="chatbot-message-avatar">
                  <img src="/assets/Riskalia-Logo.png" alt="Riskalia" class="chatbot-message-avatar-img">
                </div>
                <div class="chatbot-message-content">
                  <div class="chatbot-message-bubble">
                    <p data-i18n="chatbot.welcome">Bonjour ! Je suis votre assistant Riskalia. Comment puis-je vous aider avec vos besoins en assurance ou réassurance ?</p>
                  </div>
                  <div class="chatbot-message-time" data-i18n="chatbot.now">Maintenant</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="chatbot-quick-actions" id="chatbot-quick-actions">
            <!-- Dynamic quick actions will be populated here -->
          </div>

          <!-- Chatbot Input -->
          <div class="chatbot-input-container">
            <div class="chatbot-input-wrapper">
              <input type="text" class="chatbot-input" id="chatbot-input" placeholder="Tapez votre message..." data-ph="chatbot.inputPlaceholder">
              <button class="chatbot-send-btn" id="chatbot-send">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
            <div class="chatbot-typing" id="chatbot-typing" style="display: none;">
              <div class="chatbot-typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="chatbot-typing-text" data-i18n="chatbot.typing">Riskalia tape...</span>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  bindEvents() {
    // Toggle chatbot
    const toggleBtn = document.getElementById("chatbot-toggle");
    const minimizeBtn = null;
    const closeBtn = document.getElementById("chatbot-close");
    const sendBtn = document.getElementById("chatbot-send");
    const input = document.getElementById("chatbot-input");
    const quickActions = document.getElementById("chatbot-quick-actions");

    // Toggle chatbot open/close
    toggleBtn?.addEventListener("click", () => {
      this.toggleChatbot();
    });

    // Minimize chatbot
    // Minimize disabled

    // Close chatbot
    closeBtn?.addEventListener("click", () => {
      this.closeChatbot();
    });

    // Send message
    sendBtn?.addEventListener("click", () => {
      this.sendMessage();
    });

    // Send message on Enter key
    input?.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });

    // Quick action buttons
    quickActions?.addEventListener("click", (e) => {
      if (e.target.classList.contains("chatbot-quick-btn")) {
        const action = e.target.dataset.action;
        this.handleQuickAction(action);
      }
    });

    // Listen for language changes
    document.addEventListener("languageChanged", (e) => {
      this.currentLang = e.detail.language;
      this.updateLanguage();
    });

    // Close chatbot when clicking outside
    document.addEventListener("click", (e) => {
      const chatbot = document.getElementById("riskalia-chatbot");
      if (this.isOpen && !chatbot.contains(e.target)) {
        this.minimizeChatbot();
      }
    });
  }

  setupResponses() {
    // Enhanced decision tree structure
    this.decisionTree = {
      fr: {
        // Root level
        root: {
          title: "Comment puis-je vous aider ?",
          content:
            "Bonjour ! Je suis votre assistant Riskalia. Je peux vous orienter vers nos différentes solutions et services.",
          actions: [
            { key: "assurance", label: "Assurance", icon: "🛡️" },
            { key: "reassurance", label: "Réassurance", icon: "🔄" },
            { key: "climate", label: "Risques Climatiques", icon: "🌍" },
            { key: "services", label: "Services de Conseil", icon: "📊" },
            { key: "esg", label: "ESG", icon: "🌱" },
            { key: "contact", label: "Contact", icon: "📞" },
          ],
        },

        // Assurance branch
        assurance: {
          title: "Nos Solutions d'Assurance",
          content:
            "Riskalia propose des solutions d'assurance complètes. Quel type de client êtes-vous ?",
          actions: [
            { key: "assurance_entreprise", label: "Entreprise", icon: "🏢" },
            { key: "assurance_particulier", label: "Particulier", icon: "👤" },
            {
              key: "assurance_comparaison",
              label: "Comparer les offres",
              icon: "⚖️",
            },
            { key: "assurance_devis", label: "Demander un devis", icon: "📋" },
          ],
        },

        assurance_entreprise: {
          title: "Assurance Entreprise",
          content:
            "Nos solutions pour les entreprises incluent :\n\n• Multirisques Entreprise\n• Transport (marchandises)\n• Automobile & flotte\n• Responsabilité civile\n• Construction\n• Santé collective & prévoyance",
          actions: [
            { key: "multirisques", label: "Multirisques", icon: "🏭" },
            { key: "transport", label: "Transport", icon: "🚛" },
            { key: "flotte", label: "Flotte", icon: "🚗" },
            { key: "rc", label: "Responsabilité Civile", icon: "⚖️" },
            { key: "construction", label: "Construction", icon: "🏗️" },
            { key: "sante_collective", label: "Santé Collective", icon: "🏥" },
            { key: "devis_entreprise", label: "Devis Entreprise", icon: "📋" },
          ],
        },

        assurance_particulier: {
          title: "Assurance Particulier",
          content:
            "Nos solutions pour les particuliers incluent :\n\n• Santé\n• Accidents de la vie\n• Habitation\n• Assurance-vie & placements\n• Voyage Schengen\n• Retraite",
          actions: [
            { key: "sante", label: "Santé", icon: "🏥" },
            { key: "alv", label: "Accidents de la vie", icon: "🛡️" },
            { key: "habitation", label: "Habitation", icon: "🏠" },
            { key: "vie", label: "Assurance-vie", icon: "💰" },
            { key: "schengen", label: "Voyage Schengen", icon: "✈️" },
            { key: "retraite", label: "Retraite", icon: "👴" },
            {
              key: "devis_particulier",
              label: "Devis Particulier",
              icon: "📋",
            },
          ],
        },

        // Product-specific responses
        multirisques: {
          title: "Multirisques Entreprise",
          content:
            "Protection complète pour vos biens et activités :\n\n• Incendie, dégâts des eaux, bris de machines\n• Pertes d'exploitation (PDB)\n• Options CatNat & événements climatiques\n• Couverture stocks et machines\n• Valeur à neuf selon options\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        transport: {
          title: "Transport (marchandises)",
          content:
            "Couverture complète pour vos expéditions :\n\n• Tous risques facultés\n• RC transporteur / commissionnaire\n• Paramétriques météo en option\n• Couverture import/export\n• Logistique et transit\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        flotte: {
          title: "Automobile & Flotte",
          content:
            "Gestion complète de votre flotte (5 à 5000 véhicules) :\n\n• Tiers / Tous risques / Bris de glace\n• Assistance & véhicules de remplacement\n• Tableaux de bord sinistres\n• Télématique et prévention\n• Gestion centralisée\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        // Additional enterprise product-specific responses
        rc: {
          title: "Responsabilité Civile",
          content:
            "RC Générale / Professionnelle / Pollution / Produits :\n\n• RC exploitation et après livraison\n• RC professionnelle (PI)\n• RC environnementale\n• Couverture complète\n• Protection juridique\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        construction: {
          title: "Construction (CAR/EAR)",
          content:
            "Tous risques chantier & décennale selon projet :\n\n• Chantiers BTP, énergie, infrastructures\n• Pertes d'exploitation chantier\n• Couvertures par phase\n• Garantie décennale\n• Protection complète\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        sante_collective: {
          title: "Santé collective & Prévoyance",
          content:
            "Contrats pour salariés : frais médicaux et prévoyance :\n\n• Réseaux de soins & tiers payant\n• Couvertures cadres/non-cadres\n• Pilotage coûts & prévention\n• Gestion centralisée\n• Avantages sociaux\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        // Individual product-specific responses for Particuliers
        sante: {
          title: "Santé",
          content:
            "Remboursement soins, hospitalisation, optique & dentaire :\n\n• Réseau partenaires & tiers payant\n• Formules modulaires\n• Assistance 24/7\n• Couverture complémentaire\n• Remboursement rapide\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        alv: {
          title: "Accidents de la vie",
          content:
            "Indemnisation des accidents domestiques & loisirs :\n\n• Incapacité & invalidité\n• Rente éducation\n• Assistance à domicile\n• Couverture 24h/24\n• Indemnités forfaitaires\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        habitation: {
          title: "Biens (Habitation)",
          content:
            "Incendie, vol, dégâts des eaux, RC vie privée :\n\n• Valeur à neuf selon options\n• Protection juridique\n• Objets de valeur\n• Couverture complète\n• Assistance dépannage\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        vie: {
          title: "Assurance-vie & placements",
          content:
            "Épargne, transmission & capitalisation :\n\n• Fonds euros & unités de compte\n• Arbitrages & fiscalité\n• Options bénéficiaires\n• Capitalisation long terme\n• Transmission patrimoniale\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        schengen: {
          title: "Voyage Schengen",
          content:
            "Attestation conforme, visa & assistance :\n\n• Frais médicaux & rapatriement\n• Bagages & retard\n• Formules courte/longue durée\n• Couverture européenne\n• Assistance voyage\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        retraite: {
          title: "Retraite",
          content:
            "Constitution d'une rente/épargne long terme :\n\n• Versements programmés\n• Avantages fiscaux (selon cadre)\n• Options réversibilité\n• Épargne retraite\n• Complémentaire pension\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        // Réassurance branch
        reassurance: {
          title: "Services de Réassurance",
          content:
            "Nos services de réassurance incluent :\n\n• Traités QS/Surplus/XoL/Stop-Loss\n• Facultatives ciblées\n• Sinistres & arbitrages 24/7\n• Placement sur risques complexes\n• Négociation de clauses différenciantes",
          actions: [
            { key: "traites", label: "Traités", icon: "📜" },
            { key: "facultatives", label: "Facultatives", icon: "🎯" },
            { key: "sinistres", label: "Sinistres 24/7", icon: "🚨" },
            { key: "placement", label: "Placement", icon: "💼" },
            { key: "expertise_re", label: "Expertise Réassurance", icon: "👨‍💼" },
          ],
        },

        traites: {
          title: "Traités QS/Surplus/XoL/Stop-Loss",
          content:
            "Programmes clairs et robustes :\n\n• PML/AAL mesurés\n• Rétentions optimisées\n• Géométries comparées\n• Stabilisation du résultat technique\n• Sécurisation du capital\n• Soutien à la croissance\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        facultatives: {
          title: "Facultatives ciblées",
          content:
            "Placement sur risques complexes :\n\n• Property, RC, énergie, construction\n• Lignes financières, transport\n• Marchés A+/AA\n• Dossier technique solide\n• Négociation de clauses différenciantes\n• Suivi rigoureux jusqu'au bind\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        // Climate Risk branch
        climate: {
          title: "Risques Climatiques",
          content:
            "De l'analyse à l'action :\n\n• Cartographie & scénarios NGFS\n• Modélisation & transfert\n• Solutions paramétriques météo\n• Résilience & reporting TCFD/ISSB\n• Plans d'adaptation\n• Indicateurs de suivi",
          actions: [
            { key: "cartographie", label: "Cartographie", icon: "🗺️" },
            { key: "modelisation", label: "Modélisation", icon: "📊" },
            { key: "resilience", label: "Résilience", icon: "🌱" },
            {
              key: "parametrique_climat",
              label: "Solutions Paramétriques",
              icon: "📈",
            },
            { key: "expert_climat", label: "Expert Climat", icon: "👨‍💼" },
          ],
        },

        cartographie: {
          title: "Cartographie & Scénarios",
          content:
            "Analyse complète des risques climatiques :\n\n• Analyse physique et de transition\n• Scénarios NGFS et stress tests\n• Matérialité par sites et métiers\n• Priorisation des risques\n• Décisions d'investissement\n• Continuité d'activité\n\nPour toute question ou devis, contactez-nous via les options de contact disponibles.",
          actions: [],
        },

        // Services branch
        services: {
          title: "Services de Conseil",
          content:
            "Nos services de conseil spécialisés :\n\n• Conseil en Gestion des Risques\n• Évaluation des engagements sociaux\n• Formation sur mesure\n• Cartographies vivantes\n• Hypothèses auditées\n• Ateliers pratiques",
          actions: [
            { key: "conseil_risques", label: "Conseil Risques", icon: "📊" },
            {
              key: "evaluation_sociale",
              label: "Évaluation Sociale",
              icon: "👥",
            },
            { key: "formation", label: "Formation", icon: "🎓" },
            { key: "audit_risques", label: "Audit Risques", icon: "🔍" },
            { key: "expert_conseil", label: "Expert Conseil", icon: "👨‍💼" },
          ],
        },

        // ESG branch
        esg: {
          title: "Politique ESG",
          content:
            "Gouvernance, social, environnement :\n\n• Gouvernance & éthique\n• Personnes & diversité\n• Responsabilité environnementale\n• Code de conduite\n• Anticorruption\n• Cybersécurité",
          actions: [
            { key: "gouvernance", label: "Gouvernance", icon: "⚖️" },
            { key: "social", label: "Social", icon: "👥" },
            { key: "environnement", label: "Environnement", icon: "🌱" },
            { key: "audit_esg", label: "Audit ESG", icon: "🔍" },
            { key: "expert_esg", label: "Expert ESG", icon: "👨‍💼" },
          ],
        },

        // Contact branch
        contact: {
          title: "Contactez-nous",
          content:
            "Pour toute question ou demande :\n\n📞 Tél1: +212-666-756991\n📞 Tél2: +212-675-208909\n📧 Nabil: nabil.cherkaoui@riskalia.ma\n📧 Infos: contact@riskalia.ma\n\n📍 Siège: 16, Rue de Terves, 2ème Etage\nQuartier Mers Sultan, Casablanca\n\nNous répondons sous 24-48h.",
          actions: [
            { key: "appel_telephone", label: "Appeler", icon: "📞" },
            { key: "envoyer_email", label: "Email", icon: "📧" },
            { key: "rendez_vous", label: "Rendez-vous", icon: "📅" },
            { key: "localisation", label: "Localisation", icon: "📍" },
          ],
        },

        // Devis actions
        devis_entreprise: {
          title: "Devis Entreprise",
          content:
            "Pour obtenir un devis personnalisé pour votre entreprise :\n\n📧 Email: contact@riskalia.ma\n📞 Tél: +212-666-756991\n\nMerci de préciser :\n• Secteur d'activité\n• Taille de l'entreprise\n• Risques à couvrir\n• Budget approximatif",
          actions: [
            { key: "envoyer_email", label: "Envoyer Email", icon: "📧" },
            { key: "appel_telephone", label: "Appeler", icon: "📞" },
            {
              key: "retour_assurance",
              label: "← Retour Assurance",
              icon: "🔙",
            },
          ],
        },

        devis_particulier: {
          title: "Devis Particulier",
          content:
            "Pour obtenir un devis personnalisé :\n\n📧 Email: contact@riskalia.ma\n📞 Tél: +212-666-756991\n\nMerci de préciser :\n• Type de couverture souhaitée\n• Situation personnelle\n• Budget approximatif\n• Besoins spécifiques",
          actions: [
            { key: "envoyer_email", label: "Envoyer Email", icon: "📧" },
            { key: "appel_telephone", label: "Appeler", icon: "📞" },
            {
              key: "retour_assurance",
              label: "← Retour Assurance",
              icon: "🔙",
            },
          ],
        },
      },

      // English translations
      en: {
        root: {
          title: "How can I help you?",
          content:
            "Hello! I'm your Riskalia assistant. I can guide you to our different solutions and services.",
          actions: [
            { key: "assurance", label: "Insurance", icon: "🛡️" },
            { key: "reassurance", label: "Reinsurance", icon: "🔄" },
            { key: "climate", label: "Climate Risk", icon: "🌍" },
            { key: "services", label: "Advisory Services", icon: "📊" },
            { key: "esg", label: "ESG", icon: "🌱" },
            { key: "contact", label: "Contact", icon: "📞" },
          ],
        },
        assurance: {
          title: "Our Insurance Solutions",
          content:
            "Riskalia offers comprehensive insurance solutions. What type of client are you?",
          actions: [
            { key: "assurance_entreprise", label: "Business", icon: "🏢" },
            { key: "assurance_particulier", label: "Individual", icon: "👤" },
            {
              key: "assurance_comparaison",
              label: "Compare offers",
              icon: "⚖️",
            },
            { key: "assurance_devis", label: "Request quote", icon: "📋" },
          ],
        },
        // ... (English translations would continue here)
      },

      // Arabic translations
      ar: {
        // Root
        root: {
          title: "كيف يمكنني مساعدتك؟",
          content:
            "مرحباً! أنا مساعد ريسكاليا. يمكنني إرشادك إلى حلولنا وخدماتنا المختلفة.",
          actions: [
            { key: "assurance", label: "التأمين", icon: "🛡️" },
            { key: "reassurance", label: "إعادة التأمين", icon: "🔄" },
            { key: "climate", label: "مخاطر المناخ", icon: "🌍" },
            { key: "services", label: "الاستشارات", icon: "📊" },
            { key: "esg", label: "الاستدامة", icon: "🌱" },
            { key: "contact", label: "اتصال", icon: "📞" },
          ],
        },

        // Assurance branch
        assurance: {
          title: "حلول التأمين",
          content: "نقدم حلول تأمينية شاملة. ما هو نوع العميل؟",
          actions: [
            { key: "assurance_entreprise", label: "شركات", icon: "🏢" },
            { key: "assurance_particulier", label: "أفراد", icon: "👤" },
          ],
        },

        assurance_entreprise: {
          title: "تأمين الشركات",
          content:
            "حلولنا للشركات تشمل:\n\n• متعدد المخاطر\n• النقل\n• السيارات والأسطول\n• المسؤولية المدنية\n• البناء\n• الصحة الجماعية",
          actions: [
            { key: "multirisques", label: "متعدد المخاطر", icon: "🏭" },
            { key: "transport", label: "النقل", icon: "🚛" },
            { key: "flotte", label: "الأسطول", icon: "🚗" },
            { key: "rc", label: "المسؤولية المدنية", icon: "⚖️" },
            { key: "construction", label: "البناء", icon: "🏗️" },
            { key: "sante_collective", label: "الصحة الجماعية", icon: "🏥" },
          ],
        },

        assurance_particulier: {
          title: "تأمين الأفراد",
          content:
            "حلولنا للأفراد تشمل:\n\n• الصحة\n• حوادث الحياة\n• السكن\n• التأمين على الحياة\n• سفر شنغن\n• التقاعد",
          actions: [
            { key: "sante", label: "الصحة", icon: "🏥" },
            { key: "alv", label: "حوادث الحياة", icon: "🛡️" },
            { key: "habitation", label: "السكن", icon: "🏠" },
            { key: "vie", label: "تأمين الحياة", icon: "💰" },
            { key: "schengen", label: "سفر شنغن", icon: "✈️" },
            { key: "retraite", label: "التقاعد", icon: "👴" },
          ],
        },

        // Product-specific (Entreprise)
        multirisques: {
          title: "متعدد المخاطر للشركات",
          content:
            "حماية شاملة لأصول وأنشطة شركتك:\n\n• حريق، أضرار المياه، كسر الآلات\n• خسائر الاستغلال\n• خيارات الكوارث الطبيعية\n• تغطية المخزون والآلات\n• قيمة جديدة حسب الخيارات\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },
        transport: {
          title: "تأمين النقل (البضائع)",
          content:
            "تغطية كاملة لشحناتك:\n\n• أخطار شاملة للبضائع\n• مسؤولية الناقل\n• خيارات مناخية معيارية\n• تغطية للاستيراد/التصدير\n• لوجستيك وترانزيت\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },
        flotte: {
          title: "السيارات والأسطول",
          content:
            "إدارة كاملة لأسطولك (5 إلى 5000 مركبة):\n\n• طرف ثالث/شامل/زجاج\n• مساعدة ومركبات بديلة\n• لوحات متابعة الحوادث\n• تتبع وتقليل المخاطر\n• إدارة مركزية\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },
        rc: {
          title: "المسؤولية المدنية",
          content:
            "عامة/مهنية/بيئية/المنتجات:\n\n• الاستغلال وما بعد التسليم\n• المسؤولية المهنية\n• المسؤولية البيئية\n• حماية قانونية\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },
        construction: {
          title: "تأمين البناء (CAR/EAR)",
          content:
            "كل أخطار الورش والضمان العشري:\n\n• ورش البناء والطاقة والبنية التحتية\n• خسائر استغلال الورش\n• تغطية حسب المراحل\n• ضمان عشري\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },
        sante_collective: {
          title: "الصحة الجماعية والادخار",
          content:
            "عقود للموظفين: مصاريف طبية وادخار:\n\n• شبكات علاج ودفع مباشر\n• تغطيات للمديرين/غير المديرين\n• إدارة التكاليف والوقاية\n• إدارة مركزية\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },

        // Product-specific (Particulier)
        sante: {
          title: "تأمين الصحة",
          content:
            "استرجاع مصاريف العلاج والاستشفاء والبصريات والأسنان:\n\n• شبكات شركاء ودفع مباشر\n• صيغ مرنة\n• مساعدة 24/7\n• تغطية تكميلية\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },
        alv: {
          title: "حوادث الحياة",
          content:
            "تعويض عن الحوادث المنزلية والترفيهية:\n\n• عجز وإعاقة\n• معاش للأبناء\n• مساعدة منزلية\n• تغطية 24/24\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },
        habitation: {
          title: "تأمين السكن",
          content:
            "حريق، سرقة، أضرار مياه، مسؤولية مدنية:\n\n• قيمة جديدة حسب الخيارات\n• حماية قانونية\n• مقتنيات ثمينة\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },
        vie: {
          title: "تأمين الحياة والادخار",
          content:
            "ادخار، نقل، استثمار:\n\n• صناديق مضمونة ووحدات حساب\n• تحكم وضريبيات\n• خيارات المستفيدين\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },
        schengen: {
          title: "تأمين سفر شنغن",
          content:
            "شهادة مطابقة وتأشيرة ومساعدة:\n\n• مصاريف طبية وإرجاع\n• حقائب وتأخير\n• صيغ قصيرة/طويلة\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },
        retraite: {
          title: "التقاعد",
          content:
            "تكوين معاش/ادخار طويل الأمد:\n\n• دفعات مبرمجة\n• مزايا ضريبية (حسب الإطار)\n• خيارات عكسية\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },

        // Reassurance branch
        reassurance: {
          title: "خدمات إعادة التأمين",
          content:
            "تشمل خدماتنا:\n\n• معاهدات نسبية وغير نسبية\n• اختيارية مركزة\n• مطالبات وتحكيم 24/7\n• تنسيب على مخاطر معقدة",
          actions: [
            { key: "traites", label: "معاهدات", icon: "📜" },
            { key: "facultatives", label: "اختيارية", icon: "🎯" },
            { key: "sinistres", label: "مطالبات 24/7", icon: "🚨" },
            { key: "placement", label: "تنسيب", icon: "💼" },
          ],
        },
        traites: {
          title: "معاهدات (QS/Surplus/XoL/Stop-Loss)",
          content:
            "برامج واضحة ومتينة:\n\n• احتفاظات محسّنة\n• قياسات PML/AAL\n• استقرار النتائج\n• دعم النمو\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },
        facultatives: {
          title: "اختيارية مركزة",
          content:
            "تنسيب مخاطر معقدة (Property/RC/طاقة/بناء):\n\n• أسواق A+/AA\n• تفاوض على بنود مميزة\n• متابعة دقيقة حتى الربط\n\nللطلبات والاستفسارات، استخدم خيارات الاتصال.",
          actions: [],
        },
        sinistres: {
          title: "مطالبات وتحكيم 24/7",
          content: "دعم في إدارة المطالبات والتحصيل والتحكيم على مدار الساعة.",
          actions: [],
        },
        placement: {
          title: "تنسيب",
          content: "تنسيب البرامج لدى أفضل الأسواق مع تحسين الشروط والقدرات.",
          actions: [],
        },

        // Climate branch
        climate: {
          title: "مخاطر المناخ",
          content:
            "من التحليل إلى التنفيذ:\n\n• خرائط وسيناريوهات NGFS\n• نمذجة ونقل\n• حلول معيارية للطقس\n• المرونة والتقارير TCFD/ISSB",
          actions: [
            { key: "cartographie", label: "الخرائط", icon: "🗺️" },
            { key: "modelisation", label: "النمذجة", icon: "📊" },
            { key: "resilience", label: "المرونة", icon: "🌱" },
            { key: "parametrique_climat", label: "حلول معيارية", icon: "📈" },
          ],
        },
        cartographie: {
          title: "الخرائط والسيناريوهات",
          content:
            "تحليل شامل للمخاطر المناخية: فيزيائية وانتقالية، سيناريوهات NGFS، أولوية المخاطر وخطط التكيف.",
          actions: [],
        },
        modelisation: {
          title: "النمذجة والاختبارات",
          content:
            "نمذجة المخاطر، اختبارات ضغط، وقياس المادية على المواقع والأنشطة.",
          actions: [],
        },
        resilience: {
          title: "المرونة والخطط",
          content: "حلول عملية لتعزيز المرونة واستمرارية الأعمال.",
          actions: [],
        },
        parametrique_climat: {
          title: "حلول مناخية معيارية",
          content: "أغطية مناخية مبنية على مؤشرات قابلة للقياس لتسريع التعويض.",
          actions: [],
        },

        // Services branch
        services: {
          title: "الخدمات الاستشارية",
          content:
            "خدماتنا المتخصصة:\n\n• استشارات إدارة المخاطر\n• تقييم الالتزامات الاجتماعية\n• تدريب مخصص\n• تدقيق المخاطر",
          actions: [
            { key: "conseil_risques", label: "استشارات المخاطر", icon: "📊" },
            { key: "evaluation_sociale", label: "تقييم اجتماعي", icon: "👥" },
            { key: "formation", label: "تدريب", icon: "🎓" },
            { key: "audit_risques", label: "تدقيق المخاطر", icon: "🔍" },
          ],
        },
        conseil_risques: {
          title: "استشارات إدارة المخاطر",
          content: "أطر ومنهجيات لإدارة المخاطر وتحديد الأولويات.",
          actions: [],
        },
        evaluation_sociale: {
          title: "تقييم الالتزامات الاجتماعية",
          content: "افتراضات مدققة ونماذج شفافة لالتزامات الموظفين.",
          actions: [],
        },
        formation: {
          title: "تدريب مخصص",
          content: "برامج تدريب عملية لفرق الإدارة والتقنية.",
          actions: [],
        },
        audit_risques: {
          title: "تدقيق المخاطر",
          content: "تدقيق شامل للمخاطر وخرائط حية قابلة للتحديث.",
          actions: [],
        },

        // ESG branch
        esg: {
          title: "الاستدامة (ESG)",
          content:
            "الحوكمة، الاجتماعي، البيئة:\n\n• حوكمة وأخلاقيات\n• أشخاص وتنوع\n• مسؤولية بيئية\n• مدونة سلوك\n• مكافحة الفساد\n• الأمن السيبراني",
          actions: [
            { key: "gouvernance", label: "الحوكمة", icon: "⚖️" },
            { key: "social", label: "الاجتماعي", icon: "👥" },
            { key: "environnement", label: "البيئة", icon: "🌱" },
            { key: "audit_esg", label: "تدقيق ESG", icon: "🔍" },
          ],
        },
        gouvernance: {
          title: "الحوكمة",
          content: "امتثال وشفافية وأطر أخلاقية.",
          actions: [],
        },
        social: {
          title: "الاجتماعي",
          content: "تنوع ورفاه وتطوير قدرات.",
          actions: [],
        },
        environnement: {
          title: "البيئة",
          content: "بصمة كربونية واقتصاد دائري ومبادرات خضراء.",
          actions: [],
        },
        audit_esg: {
          title: "تدقيق ESG",
          content: "تقييم ممارسات ESG وإعداد التقارير.",
          actions: [],
        },

        // Contact
        contact: {
          title: "اتصل بنا",
          content:
            "لأي استفسار أو طلب عرض:\n\n📞 هاتف: +212-666-756991\n📧 بريد: contact@riskalia.ma\n\nالعنوان:\n16، شارع تيرفيس، الطابق الثاني\nحي مرس السلطان، الدار البيضاء\n\nنرد خلال 24-48 ساعة.",
          actions: [
            { key: "appel_telephone", label: "اتصال", icon: "📞" },
            { key: "envoyer_email", label: "بريد إلكتروني", icon: "📧" },
            { key: "rendez_vous", label: "موعد", icon: "📅" },
            { key: "localisation", label: "الموقع", icon: "📍" },
          ],
        },
      },
    };

    // Legacy responses for backward compatibility
    this.responses = {
      fr: {
        assurance: {
          title: "Nos Solutions d'Assurance",
          content:
            "Riskalia propose des solutions d'assurance complètes pour les entreprises et particuliers :\n\n• Multirisques Entreprise\n• Transport (marchandises)\n• Automobile & flotte\n• Responsabilité civile\n• Construction\n• Santé collective & prévoyance\n• Santé individuelle\n• Accidents de la vie\n• Habitation\n• Assurance-vie & placements\n• Voyage Schengen\n• Retraite\n\nSouhaitez-vous plus d'informations sur une solution spécifique ?",
          actions: ["Devis", "Contact", "Plus d'infos"],
        },
        reassurance: {
          title: "Services de Réassurance",
          content:
            "Nos services de réassurance incluent :\n\n• Traités QS/Surplus/XoL/Stop-Loss\n• Facultatives ciblées\n• Sinistres & arbitrages 24/7\n• Placement sur risques complexes\n• Négociation de clauses différenciantes\n• Suivi rigoureux jusqu'au bind\n\nNous travaillons avec des marchés A+/AA pour garantir la meilleure couverture.",
          actions: ["Devis", "Contact", "Expertise"],
        },
        climate: {
          title: "Risques Climatiques",
          content:
            "Nos services climatiques comprennent :\n\n• Cartographie & scénarios NGFS\n• Modélisation & transfert\n• Solutions paramétriques météo\n• Résilience & reporting TCFD/ISSB\n• Plans d'adaptation\n• Indicateurs de suivi\n\nNous vous accompagnons de l'analyse à l'action pour une gestion optimale des risques climatiques.",
          actions: ["Diagnostic", "Contact", "Formation"],
        },
        contact: {
          title: "Contactez-nous",
          content:
            "Pour toute question ou demande de devis :\n\n📞 Tél1: +212-666-756991\n📞 Tél2: +212-675-208909\n📧 Nabil: nabil.cherkaoui@riskalia.ma\n📧 Infos: contact@riskalia.ma\n\n📍 Siège: 16, Rue de Terves, 2ème Etage\nQuartier Mers Sultan, Casablanca\n\nNous répondons sous 24-48h.",
          actions: ["Devis", "Appel", "Email"],
        },
        default: {
          title: "Comment puis-je vous aider ?",
          content:
            "Je peux vous renseigner sur :\n\n• Nos solutions d'assurance\n• Nos services de réassurance\n• La gestion des risques climatiques\n• Nos services de conseil ESG\n• Nos formations sur mesure\n\nUtilisez les boutons ci-dessus ou posez-moi directement votre question !",
          actions: ["Assurance", "Réassurance", "Contact"],
        },
      },
      en: {
        assurance: {
          title: "Our Insurance Solutions",
          content:
            "Riskalia offers comprehensive insurance solutions for businesses and individuals:\n\n• Enterprise Multi-risk\n• Transport (goods)\n• Automobile & fleet\n• Civil liability\n• Construction\n• Group health & provident\n• Individual health\n• Life accidents\n• Home insurance\n• Life insurance & investments\n• Schengen travel\n• Retirement\n\nWould you like more information about a specific solution?",
          actions: ["Quote", "Contact", "More info"],
        },
        reassurance: {
          title: "Reinsurance Services",
          content:
            "Our reinsurance services include:\n\n• QS/Surplus/XoL/Stop-Loss treaties\n• Targeted facultative\n• Claims & arbitrations 24/7\n• Placement on complex risks\n• Differentiating clause negotiation\n• Rigorous follow-up to bind\n\nWe work with A+/AA markets to guarantee the best coverage.",
          actions: ["Quote", "Contact", "Expertise"],
        },
        climate: {
          title: "Climate Risks",
          content:
            "Our climate services include:\n\n• Mapping & NGFS scenarios\n• Modeling & transfer\n• Weather parametric solutions\n• Resilience & TCFD/ISSB reporting\n• Adaptation plans\n• Monitoring indicators\n\nWe accompany you from analysis to action for optimal climate risk management.",
          actions: ["Diagnostic", "Contact", "Training"],
        },
        contact: {
          title: "Contact us",
          content:
            "For any questions or quote requests:\n\n📞 Tel1: +212-666-756991\n📞 Tel2: +212-675-208909\n📧 Nabil: nabil.cherkaoui@riskalia.ma\n📧 Info: contact@riskalia.ma\n\n📍 Headquarters: 16, Rue de Terves, 2nd Floor\nMers Sultan District, Casablanca\n\nWe respond within 24-48h.",
          actions: ["Quote", "Call", "Email"],
        },
        default: {
          title: "How can I help you?",
          content:
            "I can inform you about:\n\n• Our insurance solutions\n• Our reinsurance services\n• Climate risk management\n• Our ESG advisory services\n• Our custom training\n\nUse the buttons above or ask me directly!",
          actions: ["Insurance", "Reinsurance", "Contact"],
        },
      },
      ar: {
        assurance: {
          title: "حلول التأمين لدينا",
          content:
            "تقدم ريسكاليا حلول تأمين شاملة للشركات والأفراد:\n\n• متعدد المخاطر للمؤسسات\n• النقل (البضائع)\n• السيارات والأسطول\n• المسؤولية المدنية\n• البناء\n• الصحة الجماعية والوقائية\n• الصحة الفردية\n• حوادث الحياة\n• التأمين على المنزل\n• تأمين الحياة والاستثمارات\n• السفر شنغن\n• التقاعد\n\nهل تريد المزيد من المعلومات حول حل معين؟",
          actions: ["عرض سعر", "اتصال", "مزيد من المعلومات"],
        },
        reassurance: {
          title: "خدمات إعادة التأمين",
          content:
            "تشمل خدمات إعادة التأمين لدينا:\n\n• معاهدات QS/Surplus/XoL/Stop-Loss\n• الاختيارية المستهدفة\n• المطالبات والتحكيم 24/7\n• التنسيب على المخاطر المعقدة\n• التفاوض على البنود المميزة\n• المتابعة الدقيقة حتى الربط\n\nنعمل مع أسواق A+/AA لضمان أفضل تغطية.",
          actions: ["عرض سعر", "اتصال", "خبرة"],
        },
        climate: {
          title: "مخاطر المناخ",
          content:
            "تشمل خدماتنا المناخية:\n\n• رسم الخرائط وسيناريوهات NGFS\n• النمذجة والتحويل\n• الحلول البارامترية للطقس\n• المرونة وإعداد التقارير TCFD/ISSB\n• خطط التكيف\n• مؤشرات المراقبة\n\nنرافقك من التحليل إلى العمل لإدارة مثلى لمخاطر المناخ.",
          actions: ["تشخيص", "اتصال", "تدريب"],
        },
        contact: {
          title: "اتصل بنا",
          content:
            "لأي أسئلة أو طلبات عرض سعر:\n\n📞 هاتف1: +212-666-756991\n📞 هاتف2: +212-675-208909\n📧 نبيل: nabil.cherkaoui@riskalia.ma\n📧 معلومات: contact@riskalia.ma\n\n📍 المقر: 16، شارع تيرفيس، الطابق الثاني\nحي مرس السلطان، الدار البيضاء\n\nنرد خلال 24-48 ساعة.",
          actions: ["عرض سعر", "مكالمة", "بريد إلكتروني"],
        },
        default: {
          title: "كيف يمكنني مساعدتك؟",
          content:
            "يمكنني إعلامك حول:\n\n• حلول التأمين لدينا\n• خدمات إعادة التأمين\n• إدارة مخاطر المناخ\n• خدمات الاستشارة ESG\n• تدريبنا المخصص\n\nاستخدم الأزرار أعلاه أو اسألني مباشرة!",
          actions: ["تأمين", "إعادة تأمين", "اتصال"],
        },
      },
    };
  }

  toggleChatbot() {
    this.isOpen = !this.isOpen;
    const chatbot = document.getElementById("riskalia-chatbot");
    const chatbotContainer = chatbot.querySelector(".chatbot-container");

    if (this.isOpen) {
      chatbotContainer.classList.add("chatbot-open");
      chatbotContainer.classList.remove("chatbot-minimized");
      this.isMinimized = false;
      document.getElementById("chatbot-input")?.focus();
    } else {
      chatbotContainer.classList.remove("chatbot-open");
    }
  }

  minimizeChatbot() {
    this.isMinimized = true;
    const chatbot = document.getElementById("riskalia-chatbot");
    const chatbotContainer = chatbot.querySelector(".chatbot-container");
    chatbotContainer.classList.add("chatbot-minimized");
    chatbotContainer.classList.remove("chatbot-open");
  }

  closeChatbot() {
    this.isOpen = false;
    this.isMinimized = false;
    const chatbot = document.getElementById("riskalia-chatbot");
    const chatbotContainer = chatbot.querySelector(".chatbot-container");
    chatbotContainer.classList.remove("chatbot-open", "chatbot-minimized");
  }

  sendMessage() {
    const input = document.getElementById("chatbot-input");
    const message = input.value.trim();

    if (!message) return;

    // Add user message
    this.addMessage(message, "user");

    // Clear input
    input.value = "";

    // Show typing indicator
    this.showTyping();

    // Process message and respond
    setTimeout(() => {
      this.hideTyping();
      const response = this.processMessage(message);
      this.addMessage(response.content, "bot", response.title);
    }, 1000 + Math.random() * 1000);
  }

  handleQuickAction(action) {
    // Handle special actions first
    if (action === "appel_telephone") {
      this.handlePhoneCall();
      return;
    }

    if (action === "envoyer_email") {
      this.handleEmail();
      return;
    }

    if (action === "rendez_vous") {
      this.handleAppointment();
      return;
    }

    if (action === "localisation") {
      this.handleLocation();
      return;
    }

    // Handle back navigation (support FR/EN/AR)
    if (
      action.includes("retour") ||
      action === "retour_universel" ||
      action === "رجوع" ||
      action === "عودة" ||
      action === "back"
    ) {
      this.goBack();
      return;
    }

    // Navigate to the specified node in the decision tree
    this.navigateToNode(action);
  }

  handlePhoneCall() {
    const phoneNumber = "+212-666-756991";
    const message = `Appel téléphonique vers ${phoneNumber}`;
    this.addMessage(message, "bot", "Appel téléphonique");

    // Create clickable phone link
    const phoneLink = document.createElement("a");
    phoneLink.href = `tel:${phoneNumber}`;
    phoneLink.textContent = `📞 Appeler ${phoneNumber}`;
    phoneLink.style.cssText = `
      display: inline-block;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 8px;
      transition: all 0.2s ease;
    `;

    const messagesContainer = document.getElementById("chatbot-messages");
    const lastMessage = messagesContainer.lastElementChild;
    if (lastMessage) {
      lastMessage
        .querySelector(".chatbot-message-content")
        .appendChild(phoneLink);
    }
  }

  handleEmail() {
    const email = "contact@riskalia.ma";
    const message = `Envoi d'email vers ${email}`;
    this.addMessage(message, "bot", "Envoi d'email");

    // Create clickable email link
    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = `📧 Envoyer un email`;
    emailLink.style.cssText = `
      display: inline-block;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 8px;
      transition: all 0.2s ease;
    `;

    const messagesContainer = document.getElementById("chatbot-messages");
    const lastMessage = messagesContainer.lastElementChild;
    if (lastMessage) {
      lastMessage
        .querySelector(".chatbot-message-content")
        .appendChild(emailLink);
    }
  }

  handleAppointment() {
    const message =
      "Pour prendre rendez-vous, veuillez nous contacter :\n\n📞 Tél: +212-666-756991\n📧 Email: contact@riskalia.ma\n\nNous vous proposerons un créneau adapté à vos disponibilités.";
    this.addMessage(message, "bot", "Rendez-vous");
  }

  handleLocation() {
    const message =
      "Notre siège social :\n\n📍 16, Rue de Terves, 2ème Etage\nQuartier Mers Sultan, Casablanca\n\n🕒 Horaires d'ouverture :\nLundi - Vendredi : 9h00 - 18h00\nSamedi : 9h00 - 13h00";
    this.addMessage(message, "bot", "Localisation");

    // Create Google Maps link
    const mapsLink = document.createElement("a");
    mapsLink.href = "https://maps.google.com/?q=16+Rue+de+Terves+Casablanca";
    mapsLink.target = "_blank";
    mapsLink.textContent = "🗺️ Voir sur Google Maps";
    mapsLink.style.cssText = `
      display: inline-block;
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 8px;
      transition: all 0.2s ease;
    `;

    const messagesContainer = document.getElementById("chatbot-messages");
    const lastMessage = messagesContainer.lastElementChild;
    if (lastMessage) {
      lastMessage
        .querySelector(".chatbot-message-content")
        .appendChild(mapsLink);
    }
  }

  navigateToNode(nodeKey, skipHistory = false) {
    const tree = this.decisionTree[this.currentLang] || {};
    const fallbackTree = this.decisionTree["fr"] || {};
    const node = tree[nodeKey] || fallbackTree[nodeKey];

    if (!node) {
      console.warn(
        `Node ${nodeKey} not found in decision tree for lang ${this.currentLang}`
      );
      return;
    }

    // Add to navigation history only if not skipping (for back navigation)
    if (!skipHistory && this.currentNode !== nodeKey) {
      this.navigationHistory.push(this.currentNode);
    }
    this.currentNode = nodeKey;

    this.showTyping();
    setTimeout(() => {
      this.hideTyping();
      this.addMessage(node.content, "bot", node.title);
      this.updateQuickActions(node.actions);
    }, 800);
  }

  updateQuickActions(actions) {
    const quickActionsContainer = document.getElementById(
      "chatbot-quick-actions"
    );
    if (!quickActionsContainer || !actions) return;

    // Clear existing actions
    quickActionsContainer.innerHTML = "";

    // Add new actions
    actions.forEach((action) => {
      const button = document.createElement("button");
      button.className = "chatbot-quick-btn";
      button.dataset.action = action.key;
      button.innerHTML = `
        <span class="chatbot-quick-icon">${action.icon}</span>
        <span class="chatbot-quick-label">${action.label}</span>
      `;

      // Add click handler
      button.addEventListener("click", () => {
        this.handleQuickAction(action.key);
      });

      quickActionsContainer.appendChild(button);
    });

    // Add universal back button if not at root and no existing back button
    if (
      this.currentNode !== "root" &&
      !actions.some((action) => action.key.includes("retour"))
    ) {
      this.addBackButton(quickActionsContainer);
    }
  }

  addBackButton(container) {
    const backButton = document.createElement("button");
    backButton.className = "chatbot-quick-btn chatbot-back-btn";
    backButton.dataset.action = "retour_universel";

    // Determine appropriate back label based on current node
    const backLabel = this.getBackLabel();

    backButton.innerHTML = `
      <span class="chatbot-quick-icon">🔙</span>
      <span class="chatbot-quick-label">${backLabel}</span>
    `;

    // Add click handler
    backButton.addEventListener("click", () => {
      this.handleQuickAction("retour_universel");
    });

    container.appendChild(backButton);
  }

  getBackLabel() {
    // Derive a semantic parent group from the current node
    const nodeToParent = {
      // Assurance
      assurance_entreprise: "assurance",
      assurance_particulier: "assurance",
      multirisques: "entreprise",
      transport: "entreprise",
      flotte: "entreprise",
      rc: "entreprise",
      construction: "entreprise",
      sante_collective: "entreprise",
      sante: "particulier",
      alv: "particulier",
      habitation: "particulier",
      vie: "particulier",
      schengen: "particulier",
      retraite: "particulier",

      // Réassurance
      traites: "reassurance",
      facultatives: "reassurance",
      sinistres: "reassurance",
      placement: "reassurance",

      // Climat
      cartographie: "climate",
      modelisation: "climate",
      resilience: "climate",
      parametrique_climat: "climate",

      // Services
      conseil_risques: "services",
      evaluation_sociale: "services",
      formation: "services",
      audit_risques: "services",

      // ESG
      gouvernance: "esg",
      social: "esg",
      environnement: "esg",
      audit_esg: "esg",
    };

    const parent = nodeToParent[this.currentNode];

    const labels = {
      fr: {
        default: "← Retour",
        assurance: "← Retour Assurance",
        entreprise: "← Retour Entreprise",
        particulier: "← Retour Particulier",
        reassurance: "← Retour Réassurance",
        climate: "← Retour Climat",
        services: "← Retour Services",
        esg: "← Retour ESG",
      },
      en: {
        default: "← Back",
        assurance: "← Back to Insurance",
        entreprise: "← Back to Business",
        particulier: "← Back to Individual",
        reassurance: "← Back to Reinsurance",
        climate: "← Back to Climate",
        services: "← Back to Services",
        esg: "← Back to ESG",
      },
      ar: {
        default: "← رجوع",
        assurance: "← رجوع إلى التأمين",
        entreprise: "← رجوع إلى الشركات",
        particulier: "← رجوع إلى الأفراد",
        reassurance: "← رجوع إلى إعادة التأمين",
        climate: "← رجوع إلى مخاطر المناخ",
        services: "← رجوع إلى الاستشارات",
        esg: "← رجوع إلى الاستدامة",
      },
    };

    const langLabels = labels[this.currentLang] || labels.fr;
    if (!parent) return langLabels.default;
    return langLabels[parent] || langLabels.default;
  }

  goBack() {
    if (this.navigationHistory.length > 0) {
      const previousNode = this.navigationHistory.pop();

      // Show typing indicator
      this.showTyping();

      setTimeout(() => {
        this.hideTyping();
        this.navigateToNode(previousNode, true); // Skip adding to history
      }, 500);
    } else {
      // If no history, go to root
      this.showTyping();
      setTimeout(() => {
        this.hideTyping();
        this.navigateToNode("root", true); // Skip adding to history
      }, 500);
    }
  }

  processMessage(message) {
    const responses = this.responses[this.currentLang];
    const lowerMessage = message.toLowerCase();

    // Enhanced keyword matching with synonyms and patterns
    const keywordPatterns = {
      assurance: [
        // French
        "assurance",
        "assurances",
        "couverture",
        "couvertures",
        "protection",
        "protections",
        "garantie",
        "garanties",
        "sécurité",
        "sécurisation",
        "multirisques",
        "multirisque",
        "transport",
        "flotte",
        "automobile",
        "voiture",
        "véhicule",
        "véhicules",
        "responsabilité",
        "civile",
        "rc",
        "construction",
        "bâtiment",
        "bâtiments",
        "santé",
        "santé collective",
        "prévoyance",
        "habitation",
        "logement",
        "maison",
        "vie",
        "assurance-vie",
        "épargne",
        "placement",
        "placements",
        "schengen",
        "voyage",
        "voyages",
        "retraite",
        "pension",
        "accidents",
        "accident",
        "dommages",
        "dommage",
        "incendie",
        "vol",
        "vols",
        "dégâts",
        "dégât",
        "bris",
        "bris de glace",
        "tiers",
        "tous risques",
        "comprehensive",
        // English
        "insurance",
        "coverage",
        "coverages",
        "protection",
        "protections",
        "guarantee",
        "guarantees",
        "security",
        "multi-risk",
        "multirisk",
        "liability",
        "civil",
        "health",
        "life",
        "home",
        "house",
        "property",
        "vehicle",
        "vehicles",
        "fleet",
        "auto",
        "car",
        "cars",
        "building",
        "travel",
        "retirement",
        "pension",
        "damage",
        "damages",
        "fire",
        "theft",
        "comprehensive",
        "third party",
        "all risks",
        // Arabic
        "تأمين",
        "تأمينات",
        "تغطية",
        "تغطيات",
        "حماية",
        "حمايات",
        "ضمان",
        "ضمانات",
        "أمان",
        "أمانات",
        "متعدد المخاطر",
        "نقل",
        "أسطول",
        "سيارات",
        "مركبات",
        "مسؤولية",
        "مدنية",
        "بناء",
        "صحة",
        "حياة",
        "سكن",
        "منزل",
        "سفر",
        "تقاعد",
        "معاش",
        "حوادث",
        "أضرار",
        "حريق",
        "سرقة",
        "شامل",
      ],
      reassurance: [
        // French
        "réassurance",
        "réassureur",
        "réassureurs",
        "traité",
        "traités",
        "facultative",
        "facultatives",
        "surplus",
        "quotas",
        "quota",
        "stop-loss",
        "stop loss",
        "xol",
        "excess",
        "sinistre",
        "sinistres",
        "arbitrage",
        "arbitrages",
        "placement",
        "placements",
        "marché",
        "marchés",
        "capacité",
        "capacités",
        "rétention",
        "rétentions",
        // English
        "reinsurance",
        "reinsurer",
        "reinsurers",
        "treaty",
        "treaties",
        "facultative",
        "surplus",
        "quota",
        "excess",
        "loss",
        "claims",
        "arbitration",
        "placement",
        "market",
        "markets",
        "capacity",
        "retention",
        "retentions",
        "cedant",
        "cedants",
        "retrocession",
        // Arabic
        "إعادة التأمين",
        "معاهدة",
        "معاهدات",
        "اختيارية",
        "فائض",
        "نسبة",
        "نسب",
        "فائض الخسارة",
        "مطالبات",
        "تحكيم",
        "تنسيب",
        "سوق",
        "أسواق",
        "قدرة",
        "قدرات",
        "احتفاظ",
      ],
      climate: [
        // French
        "climat",
        "climatique",
        "climatiques",
        "environnement",
        "environnemental",
        "environnementaux",
        "carbone",
        "carbone",
        "émissions",
        "émission",
        "durable",
        "durabilité",
        "transition",
        "énergétique",
        "énergie",
        "renouvelable",
        "renouvelables",
        "écologique",
        "écologiques",
        "green",
        "greens",
        "ngfs",
        "tcfd",
        "issb",
        "paramétrique",
        "paramétriques",
        "météo",
        "météorologique",
        "résilience",
        "adaptation",
        "mitigation",
        "atténuation",
        "scénario",
        "scénarios",
        "stress",
        "test",
        "tests",
        "cartographie",
        "modélisation",
        // English
        "climate",
        "climatic",
        "environment",
        "environmental",
        "carbon",
        "emissions",
        "emission",
        "sustainable",
        "sustainability",
        "transition",
        "energy",
        "renewable",
        "ecological",
        "green",
        "ngfs",
        "tcfd",
        "issb",
        "parametric",
        "weather",
        "meteorological",
        "resilience",
        "adaptation",
        "mitigation",
        "scenario",
        "scenarios",
        "stress",
        "test",
        "tests",
        "mapping",
        "modeling",
        "modelling",
        // Arabic
        "مناخ",
        "مناخي",
        "مناخية",
        "بيئة",
        "بيئي",
        "بيئية",
        "كربون",
        "انبعاثات",
        "انبعاث",
        "مستدام",
        "استدامة",
        "انتقال",
        "طاقة",
        "متجددة",
        "بيئي",
        "أخضر",
        "معياري",
        "طقس",
        "مناخي",
        "مرونة",
        "تكيف",
        "تخفيف",
        "سيناريو",
        "سيناريوهات",
        "اختبار",
        "اختبارات",
        "خرائط",
        "نمذجة",
      ],
      contact: [
        // French
        "contact",
        "contacter",
        "contacter",
        "téléphone",
        "tél",
        "tel",
        "appeler",
        "appel",
        "appels",
        "email",
        "mail",
        "courriel",
        "écrire",
        "écrit",
        "message",
        "messages",
        "rendez-vous",
        "rendez vous",
        "meeting",
        "rencontre",
        "rencontres",
        "adresse",
        "adresses",
        "localisation",
        "localiser",
        "siège",
        "bureau",
        "bureaux",
        "équipe",
        "équipes",
        "conseiller",
        "conseillers",
        "expert",
        "experts",
        "spécialiste",
        "spécialistes",
        "support",
        "aide",
        "aider",
        "assistance",
        "assister",
        // English
        "contact",
        "contacts",
        "phone",
        "telephone",
        "call",
        "calls",
        "calling",
        "email",
        "mail",
        "message",
        "messages",
        "meeting",
        "meetings",
        "appointment",
        "appointments",
        "address",
        "addresses",
        "location",
        "locations",
        "office",
        "offices",
        "team",
        "teams",
        "advisor",
        "advisors",
        "expert",
        "experts",
        "specialist",
        "specialists",
        "support",
        "help",
        "assistance",
        "assist",
        // Arabic
        "اتصال",
        "اتصالات",
        "هاتف",
        "تلفون",
        "مكالمة",
        "مكالمات",
        "بريد",
        "إلكتروني",
        "رسالة",
        "رسائل",
        "موعد",
        "مواعيد",
        "لقاء",
        "لقاءات",
        "عنوان",
        "عناوين",
        "موقع",
        "مواقع",
        "مكتب",
        "مكاتب",
        "فريق",
        "فرق",
        "مستشار",
        "مستشارون",
        "خبير",
        "خبراء",
        "متخصص",
        "متخصصون",
        "دعم",
        "مساعدة",
      ],
      devis: [
        // French
        "devis",
        "devis",
        "prix",
        "prix",
        "tarif",
        "tarifs",
        "coût",
        "coûts",
        "budget",
        "budgets",
        "estimation",
        "estimations",
        "évaluation",
        "évaluations",
        "calcul",
        "calculs",
        "simulation",
        "simulations",
        "proposition",
        "propositions",
        "offre",
        "offres",
        "commercial",
        "commerciaux",
        "commerciale",
        "commerciales",
        "demande",
        "demandes",
        "demander",
        "solliciter",
        "sollicitation",
        "obtenir",
        "recevoir",
        "récupérer",
        "télécharger",
        "téléchargement",
        // English
        "quote",
        "quotes",
        "quotation",
        "quotations",
        "price",
        "prices",
        "pricing",
        "cost",
        "costs",
        "budget",
        "budgets",
        "estimate",
        "estimates",
        "estimation",
        "estimations",
        "evaluation",
        "evaluations",
        "calculation",
        "calculations",
        "simulation",
        "simulations",
        "proposal",
        "proposals",
        "offer",
        "offers",
        "commercial",
        "request",
        "requests",
        "ask",
        "asking",
        "obtain",
        "receive",
        "get",
        "download",
        "downloading",
        // Arabic
        "عرض",
        "عروض",
        "سعر",
        "أسعار",
        "تسعير",
        "تكلفة",
        "تكاليف",
        "ميزانية",
        "ميزانيات",
        "تقدير",
        "تقديرات",
        "تقييم",
        "تقييمات",
        "حساب",
        "حسابات",
        "محاكاة",
        "محاكاة",
        "اقتراح",
        "اقتراحات",
        "عرض",
        "عروض",
        "تجاري",
        "طلب",
        "طلبات",
        "سؤال",
        "أسئلة",
        "الحصول",
        "استلام",
        "تحميل",
        "تحميلات",
      ],
    };

    // Check for keyword matches with enhanced patterns
    for (const [category, keywords] of Object.entries(keywordPatterns)) {
      const hasMatch = keywords.some((keyword) =>
        lowerMessage.includes(keyword)
      );
      if (hasMatch) {
        switch (category) {
          case "assurance":
            return responses.assurance;
          case "reassurance":
            return responses.reassurance;
          case "climate":
            return responses.climate;
          case "contact":
            return responses.contact;
          case "devis":
            return {
              title:
                this.currentLang === "fr"
                  ? "Demande de Devis"
                  : this.currentLang === "en"
                  ? "Quote Request"
                  : "طلب عرض سعر",
              content:
                this.currentLang === "fr"
                  ? "Pour obtenir un devis personnalisé, veuillez nous contacter :\n\n📧 Email: contact@riskalia.ma\n📞 Tél: +212-666-756991\n\nNous vous répondrons sous 24-48h avec une proposition adaptée à vos besoins."
                  : this.currentLang === "en"
                  ? "To get a personalized quote, please contact us:\n\n📧 Email: contact@riskalia.ma\n📞 Tel: +212-666-756991\n\nWe will respond within 24-48h with a proposal adapted to your needs."
                  : "للحصول على عرض سعر مخصص، يرجى الاتصال بنا:\n\n📧 البريد الإلكتروني: contact@riskalia.ma\n📞 الهاتف: +212-666-756991\n\nسنرد خلال 24-48 ساعة مع اقتراح مناسب لاحتياجاتك.",
            };
        }
      }
    }

    // Fallback to default response
    return responses.default;
  }

  addMessage(content, sender, title = null) {
    const messagesContainer = document.getElementById("chatbot-messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = `chatbot-message chatbot-message-${sender}`;

    const time = new Date().toLocaleTimeString(
      this.currentLang === "fr"
        ? "fr-FR"
        : this.currentLang === "en"
        ? "en-US"
        : "ar-MA",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );

    if (sender === "bot") {
      messageDiv.innerHTML = `
        <div class="chatbot-message-avatar">
          <img src="/assets/Riskalia-Logo.png" alt="Riskalia" class="chatbot-message-avatar-img">
        </div>
        <div class="chatbot-message-content">
          ${title ? `<div class="chatbot-message-title">${title}</div>` : ""}
          <div class="chatbot-message-bubble">
            <p>${content.replace(/\n/g, "<br>")}</p>
          </div>
          <div class="chatbot-message-time">${time}</div>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="chatbot-message-content">
          <div class="chatbot-message-bubble">
            <p>${content}</p>
          </div>
          <div class="chatbot-message-time">${time}</div>
        </div>
      `;
    }

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Store in conversation history
    this.conversationHistory.push({
      sender,
      content,
      title,
      timestamp: new Date(),
    });
  }

  showTyping() {
    const typing = document.getElementById("chatbot-typing");
    if (typing) {
      typing.style.display = "flex";
      const messagesContainer = document.getElementById("chatbot-messages");
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  hideTyping() {
    const typing = document.getElementById("chatbot-typing");
    if (typing) {
      typing.style.display = "none";
    }
  }

  updateLanguage() {
    // Update placeholders and text content
    const input = document.getElementById("chatbot-input");
    if (input) {
      const placeholders = {
        fr: "Tapez votre message...",
        en: "Type your message...",
        ar: "اكتب رسالتك...",
      };
      input.placeholder = placeholders[this.currentLang] || placeholders.fr;
    }

    // Reset decision tree navigation
    this.currentNode = "root";
    this.navigationHistory = [];

    // Initialize with root node for new language
    setTimeout(() => {
      const tree = this.decisionTree[this.currentLang];
      const rootNode = tree.root;
      if (rootNode) {
        this.updateQuickActions(rootNode.actions);
      }
    }, 100);

    // Apply translations if available
    if (typeof window.applyTexts === "function") {
      window.applyTexts();
    }
  }

  // Public method to add custom responses
  addCustomResponse(key, response) {
    if (!this.responses[this.currentLang]) {
      this.responses[this.currentLang] = {};
    }
    this.responses[this.currentLang][key] = response;
  }

  // Public method to get conversation history
  getConversationHistory() {
    return this.conversationHistory;
  }

  // Public method to clear conversation
  clearConversation() {
    this.conversationHistory = [];
    const messagesContainer = document.getElementById("chatbot-messages");
    if (messagesContainer) {
      const welcomeMessage =
        messagesContainer.querySelector(".chatbot-welcome");
      messagesContainer.innerHTML = "";
      if (welcomeMessage) {
        messagesContainer.appendChild(welcomeMessage);
      }
    }
  }
}

// Auto-initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.chatbotComponent = new ChatbotComponent();
});

// Export for manual use
window.ChatbotComponent = ChatbotComponent;
