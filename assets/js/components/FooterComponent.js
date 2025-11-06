/**
 * Footer Component for Riskalia
 * Reusable footer with company info, links, and contact details
 */

class FooterComponent {
  constructor(containerId = "footer-container") {
    this.containerId = containerId;
    this.container = null;
    this.init();
  }

  init() {
    this.render();
    this.setupEventListeners();
    this.ensureChatbotAssets();
  }

  render() {
    this.container = document.getElementById(this.containerId);
    if (!this.container) return;

    this.container.innerHTML = this.getFooterHTML();
  }

getFooterHTML() {
  return `
    <footer class="footer-component bg-[#232b32] text-gray-200 py-10 text-sm">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          <!-- Col 1 : Riskalia -->
          <div>
              <img 
    src="../assets/logo-transparent.png" 
    alt="Riskalia" 
    class="h-10 w-auto"
  />
            <p class="leading-relaxed mb-3" data-i18n="footer.col1.address">
              Cabinet de courtage & stratégies agréé ACAPS.<br/>
              Siège : 16, Rue de Terves, 2ème étage,<br/>
              Quartier Mers Sultan, Casablanca.
            </p>
            <p class="text-xs text-gray-400 italic" data-i18n="footer.col1.notice">
              Intermédiaire d'assurance régi par la loi 17-99 portant code des assurances.<br/>
              Sous la décision n°COU5047.00000.0.C.2025.472.
            </p>
          </div>

          <!-- Col 2 : Navigation -->
          <div>
            <h4 class="text-white text-lg font-bold mb-3" data-i18n="footer.col2.title">Navigation</h4>
            <ul class="space-y-2">
              <li><a href="/index.html" data-i18n="nav.home" class="hover:text-white">Accueil</a></li>
              <li><a href="/solutions.html" data-i18n="nav.solutions" class="hover:text-white">Solutions</a></li>
              <li><a href="/reinsurance.html" data-i18n="nav.re" class="hover:text-white">Réassurance</a></li>
              <li><a href="/climate.html" data-i18n="nav.climate" class="hover:text-white">Risques climatiques</a></li>
              <li><a href="/esg.html" data-i18n="nav.esg" class="hover:text-white">ESG</a></li>
              <li><a href="/services.html" data-i18n="nav.services" class="hover:text-white">Conseil & Stratégie</a></li>
            </ul>
          </div>

          <!-- Col 3 : Assurance Particuliers -->
          <div>
            <h4 class="text-white text-lg font-bold mb-3" data-i18n="footer.col3.title">Assurance Particuliers</h4>
            <ul class="space-y-2">
              <li><a href="/Produits/auto.html" data-i18n="produits.auto">Auto</a></li>
              <li><a href="/Produits/habitation.html" data-i18n="produits.habitation">Habitation</a></li>
              <li><a href="/Produits/sante.html" data-i18n="produits.sante">Santé</a></li>
              <li><a href="/Produits/alv.html" data-i18n="produits.alv">Accidents de la vie</a></li>
              <li><a href="/Produits/vie.html" data-i18n="produits.vie">Vie</a></li>
              <li><a href="/Produits/retraite.html" data-i18n="produits.retraite">Retraite</a></li>
            </ul>
          </div>

          <!-- Col 4 : Assurance Entreprises -->
          <div>
              <h4 class="text-white text-lg font-bold mb-3" data-i18n="footer.col4.title">Assurance Entreprises</h4>
              <ul class="space-y-2">
                <li><a href="/Produits/multirisques.html" data-i18n="produits.multirisques">Multirisques</a></li>
                <li><a href="/Produits/flotte.html" data-i18n="produits.flotte">Flotte automobile</a></li>
                <li><a href="/Produits/rc.html" data-i18n="produits.rc">Responsabilité Civile</a></li>
                <li><a href="/Produits/construction.html" data-i18n="produits.construction">Construction</a></li>
                <li><a href="/Produits/santecollective.html" data-i18n="produits.santecollective">Santé collective</a></li>
                <li><a href="/Produits/transport.html" data-i18n="produits.transport">Transport</a></li>
              </ul>
          </div>

          <!-- Col 5 : Contact -->
          <div>
            <h4 class="text-white text-lg font-bold mb-3" data-i18n="footer.col5.title">Contact</h4>
            <p>
              <strong data-i18n="footer.col5.tel1label">Tél :</strong>
              <span data-i18n="footer.col5.tel1">+212 666 756 991</span><br/>
              <strong data-i18n="footer.col5.tel2label">Tél :</strong>
              <span data-i18n="footer.col5.tel2">+212 675 208 909</span><br/>
              <strong data-i18n="footer.col5.emailLabel">Email :</strong>
              <a href="mailto:contact@riskalia.ma" class="underline hover:text-white" data-i18n="footer.col5.email">contact@riskalia.ma</a>
            </p>
            <div class="flex gap-4 mt-4 text-lg text-gray-400">
              <a href="#" aria-label="LinkedIn" class="hover:text-white"><i class="fab fa-linkedin"></i></a>
              <a href="#" aria-label="YouTube" class="hover:text-white"><i class="fab fa-youtube"></i></a>
              <a href="#" aria-label="X" class="hover:text-white"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="Pinterest" class="hover:text-white"><i class="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4 text-xs">
          <p data-i18n="footer.copyright">© 2025 Riskalia. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  `;
}

  setupEventListeners() {
    // Listen for language changes to update footer content
    document.addEventListener("languageChanged", (e) => {
      this.updateTranslations();
    });

    // Update translations on initial load
    setTimeout(() => {
      this.updateTranslations();
    }, 100);
  }

  updateTranslations() {
    // Apply translations if the translation system is available
    if (typeof window.applyI18n === "function") {
      window.applyI18n();
    } else if (typeof window.t === "function") {
      // Fallback translation update
      const elements = document.querySelectorAll(
        ".footer-component [data-i18n]"
      );
      elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key) {
          const text = window.t(key);
          if (text !== key) {
            if (/<br\s*\/?>/i.test(el.innerHTML)) {
              el.innerHTML = text;
            } else {
              el.textContent = text;
            }
          }
        }
      });
    }
  }

  // Method to update footer content dynamically
  updateContent(newContent) {
    const footer = document.querySelector(".footer-component");
    if (footer && newContent) {
      // Update specific sections if needed
      Object.keys(newContent).forEach((key) => {
        const element = footer.querySelector(`[data-footer-${key}]`);
        if (element) {
          element.innerHTML = newContent[key];
        }
      });
    }
  }

  // Method to add custom links
  addCustomLink(href, text, position = "end") {
    const linksContainer = document.querySelector(".footer-links");
    if (linksContainer) {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = text;

      if (position === "start") {
        linksContainer.insertBefore(link, linksContainer.firstChild);
      } else {
        linksContainer.appendChild(link);
      }
    }
  }

  ensureChatbotAssets() {
    const head = document.head || document.getElementsByTagName("head")[0];
    if (!head) return;

    // Ensure chatbot styles are loaded once
    if (
      !document.querySelector('link[data-chatbot-css]') &&
      !document.querySelector('link[href*="chatbot.css"]')
    ) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = FooterComponent.resolveAssetUrl(
        "../../css/components/chatbot.css"
      );
      link.setAttribute("data-chatbot-css", "true");
      head.appendChild(link);
    }

    const instantiateChatbot = () => {
      if (window.ChatbotComponent && !window.chatbotComponent) {
        window.chatbotComponent = new ChatbotComponent();
      }
      if (typeof window.applyTexts === "function") {
        window.applyTexts();
      }
    };

    if (window.ChatbotComponent) {
      instantiateChatbot();
      return;
    }

    if (document.querySelector('script[data-chatbot-loader="true"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = FooterComponent.resolveAssetUrl("ChatbotComponent.js");
    script.defer = true;
    script.setAttribute("data-chatbot-loader", "true");
    script.addEventListener("load", instantiateChatbot, { once: true });
    (document.body || document.documentElement).appendChild(script);
  }

  static resolveAssetUrl(relativePath) {
    if (!FooterComponent.baseScriptUrl) {
      const scripts = [...document.getElementsByTagName("script")];
      const footerScript =
        document.currentScript?.src?.includes("FooterComponent.js")
          ? document.currentScript
          : scripts
              .reverse()
              .find((s) => s.src && s.src.includes("FooterComponent.js"));

      const baseUrl = footerScript
        ? new URL(footerScript.getAttribute("src"), window.location.href)
        : new URL("assets/js/components/FooterComponent.js", window.location.href);

      FooterComponent.baseScriptUrl = baseUrl;
    }

    return new URL(relativePath, FooterComponent.baseScriptUrl).href;
  }
}

// Auto-initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Only initialize if footer container exists
  if (document.getElementById("footer-container") && !window.footerComponent) {
    window.footerComponent = new FooterComponent();
  }
});

// Export for manual initialization if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = FooterComponent;
}

if (typeof window !== "undefined") {
  window.FooterComponent = FooterComponent;
}




