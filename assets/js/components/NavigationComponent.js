/**
 * Navigation Component
 * Simple, clean navigation component for Riskalia website
 */
class NavigationComponent {
  constructor(containerId = "navigation-container") {
    this.containerId = containerId;
    this.currentLang = localStorage.getItem("riskalia_lang") || "fr";
    this.searchComponent = new SearchComponent();
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
    // Set active page after a short delay to ensure DOM is ready
    setTimeout(() => {
      this.setActivePage();
    }, 100);
  }

  getNavigationHTML() {
    return `
      <header class="sticky top-0 bg-white shadow-lg z-50 border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16 lg:h-20 gap-4">
            
            <!-- Brand Logo -->
            <div class="flex-shrink-0">
              <a href="/index.html" class="flex items-center space-x-2">
                <img src="/assets/Riskalia-Logo.png" alt="Riskalia" class="h-14 lg:h-18 w-auto">
              </a>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-shrink-0">
              <a href="/index.html" data-page="index" class="nav-link text-gray-700 hover:text-[var(--c3)] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 relative whitespace-nowrap" data-i18n="nav.home">
                Accueil
              </a>
              
              <!-- Solutions Dropdown -->
              <div class="relative group">
                <button class="nav-link text-gray-700 hover:text-[var(--c3)] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1 whitespace-nowrap">
                  <span data-i18n="nav.solutions">Solutions</span>
                  <svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div class="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                  <div class="py-2">
                    <a href="/solutions.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] transition-colors duration-150" data-i18n="nav.assurance">
                      Assurance
                    </a>
                    <a href="/reinsurance.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] transition-colors duration-150" data-i18n="nav.re">
                      Réassurance
                    </a>
                  </div>
                </div>
              </div>

              <a href="/climate.html" data-page="climate" class="nav-link text-gray-700 hover:text-[var(--c3)] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap" data-i18n="nav.climate">
                Risques Climatiques
              </a>
              <a href="/services.html" data-page="services" class="nav-link text-gray-700 hover:text-[var(--c3)] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap" data-i18n="nav.services">
                Services de Conseil
              </a>
              <a href="/esg.html" data-page="esg" class="nav-link text-gray-700 hover:text-[var(--c3)] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap" data-i18n="nav.esg">
                ESG
              </a>
              <a href="/contact.html" data-page="contact" class="nav-link text-gray-700 hover:text-[var(--c3)] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap" data-i18n="nav.contact">
                Contact
              </a>
            </nav>

            <!-- Desktop Actions -->
            <div class="hidden lg:flex items-center space-x-3 flex-shrink-0">
              
              <!-- Search -->
              <div class="relative search-wrapper">
                <div class="search-container flex items-center bg-gray-50 rounded-full px-4 py-2 focus-within:bg-white focus-within:shadow-md focus-within:ring-2 focus-within:ring-[var(--c3)] focus-within:ring-opacity-20 transition-all duration-200">
                  <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  <input type="search" placeholder="Rechercher..." class="search-input bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 w-32 focus:w-48 transition-all duration-200" autocomplete="off">
                </div>
                <!-- Search Results Dropdown -->
                <div class="search-results absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible transition-all duration-200 transform translate-y-1 z-50 max-w-sm">
                  <div class="py-2 max-h-80 overflow-y-auto">
                    <!-- Results will be populated here -->
                  </div>
                </div>
              </div>

              <!-- Language Switcher Dropdown -->
              <div class="relative">
                <button class="cursor-pointer lang-dropdown-btn flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200">
                  <span class="lang-text">FR</span>
                  <svg class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div class="lang-dropdown absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible transition-all duration-200 transform translate-y-1">
                  <div class="py-2">
                    <button class="lang-option w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] transition-colors duration-150 flex items-center space-x-3" data-lang="fr">
                      <span class="font-medium">FR</span>
                      <span>Français</span>
                    </button>
                    <button class="lang-option w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] transition-colors duration-150 flex items-center space-x-3" data-lang="en">
                      <span class="font-medium">EN</span>
                      <span>English</span>
                    </button>
                    <button class="lang-option w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] transition-colors duration-150 flex items-center space-x-3" data-lang="ar">
                      <span class="font-medium">AR</span>
                      <span>العربية</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mobile Menu Button -->
            <div class="lg:hidden flex items-center space-x-2">
              <!-- Mobile Search Button -->
              <button class="mobile-search-btn p-2 text-gray-600 hover:text-[var(--c3)] hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              
              <!-- Hamburger Menu -->
              <button class="mobile-menu-toggle p-2 text-gray-600 hover:text-[var(--c3)] hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <svg class="hamburger-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path class="hamburger-top" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16"></path>
                  <path class="hamburger-middle" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16"></path>
                  <path class="hamburger-bottom" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu -->
          <div class="mobile-menu lg:hidden fixed inset-x-0 top-16 bg-white shadow-lg border-t border-gray-100 transform -translate-y-full opacity-0 invisible transition-all duration-300 z-40">
            <div class="px-4 py-6 space-y-4">
              
              <!-- Mobile Search -->
              <div class="mobile-search-container hidden">
                <div class="relative">
                  <div class="flex items-center bg-gray-50 rounded-lg px-4 py-3">
                    <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <input type="search" placeholder="Rechercher..." class="mobile-search-input bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 flex-1" autocomplete="off">
                  </div>
                  <!-- Mobile Search Results -->
                  <div class="mobile-search-results mt-2 bg-white rounded-lg shadow-lg border border-gray-100 hidden">
                    <div class="py-2 max-h-60 overflow-y-auto">
                      <!-- Results will be populated here -->
                    </div>
                  </div>
                </div>
              </div>

              <!-- Mobile Navigation Links -->
              <nav class="space-y-2">
                <a href="/index.html" data-page="index" class="mobile-nav-link block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] rounded-lg transition-colors duration-200 font-medium" data-i18n="nav.home">
                  Accueil
                </a>
                
                <!-- Mobile Solutions Dropdown -->
                <div class="mobile-dropdown">
                  <button class="mobile-dropdown-btn w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] rounded-lg transition-colors duration-200 font-medium">
                    <span data-i18n="nav.solutions">Solutions</span>
                    <svg class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div class="mobile-dropdown-content hidden pl-4 mt-2 space-y-2">
                    <a href="/solutions.html" class="block px-4 py-2 text-sm text-gray-600 hover:text-[var(--c3)] transition-colors duration-200" data-i18n="nav.assurance">
                      Assurance
                    </a>
                    <a href="/reinsurance.html" class="block px-4 py-2 text-sm text-gray-600 hover:text-[var(--c3)] transition-colors duration-200" data-i18n="nav.re">
                      Réassurance
                    </a>
                  </div>
                </div>

                <a href="/climate.html" data-page="climate" class="mobile-nav-link block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] rounded-lg transition-colors duration-200 font-medium" data-i18n="nav.climate">
                  Risques Climatiques
                </a>
                <a href="/services.html" data-page="services" class="mobile-nav-link block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] rounded-lg transition-colors duration-200 font-medium" data-i18n="nav.services">
                  Services de Conseil
                </a>
                <a href="/esg.html" data-page="esg" class="mobile-nav-link block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] rounded-lg transition-colors duration-200 font-medium" data-i18n="nav.esg">
                  ESG
                </a>
                <a href="/contact.html" data-page="contact" class="mobile-nav-link block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] rounded-lg transition-colors duration-200 font-medium" data-i18n="nav.contact">
                  Contact
                </a>
              </nav>

              <!-- Mobile Language Switcher -->
              <div class="border-t border-gray-100 pt-4">
                <div class="mobile-lang-switcher space-y-2">
                  <button class="mobile-lang-option w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] rounded-lg transition-colors duration-200" data-lang="fr">
                    <span class="font-bold text-sm bg-gray-100 px-2 py-1 rounded">FR</span>
                    <span class="font-medium">Français</span>
                  </button>
                  <button class="mobile-lang-option w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] rounded-lg transition-colors duration-200" data-lang="en">
                    <span class="font-bold text-sm bg-gray-100 px-2 py-1 rounded">EN</span>
                    <span class="font-medium">English</span>
                  </button>
                  <button class="mobile-lang-option w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] rounded-lg transition-colors duration-200" data-lang="ar">
                    <span class="font-bold text-sm bg-gray-100 px-2 py-1 rounded">AR</span>
                    <span class="font-medium">العربية</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  render() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error(
        `Navigation container with id "${this.containerId}" not found`
      );
      return;
    }

    container.innerHTML = this.getNavigationHTML();
  }

  bindEvents() {
    // Listen for language changes from the main i18n system
    document.addEventListener("languageChanged", (e) => {
      if (e.detail && e.detail.language) {
        this.updateLanguage(e.detail.language);
      }
    });

    // Apply initial translations
    setTimeout(() => {
      this.applyTranslations();
    }, 100);
    // Mobile menu toggle
    const mobileToggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const hamburgerIcon = document.querySelector(".hamburger-icon");

    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener("click", () => {
        // Check if menu is currently closed (has the closed classes)
        const isClosed = mobileMenu.classList.contains("-translate-y-full");

        if (isClosed) {
          // Open menu
          mobileMenu.classList.remove(
            "-translate-y-full",
            "opacity-0",
            "invisible"
          );
          mobileMenu.classList.add(
            "translate-y-0",
            "opacity-100",
            "visible",
            "nav-open"
          );
          hamburgerIcon?.classList.add("open");
        } else {
          // Close menu
          mobileMenu.classList.remove(
            "translate-y-0",
            "opacity-100",
            "visible",
            "nav-open"
          );
          mobileMenu.classList.add(
            "-translate-y-full",
            "opacity-0",
            "invisible"
          );
          hamburgerIcon?.classList.remove("open");
        }
      });
    }

    // Mobile search toggle
    const mobileSearchBtn = document.querySelector(".mobile-search-btn");
    const mobileSearchContainer = document.querySelector(
      ".mobile-search-container"
    );

    if (mobileSearchBtn && mobileSearchContainer) {
      mobileSearchBtn.addEventListener("click", () => {
        mobileSearchContainer.classList.toggle("hidden");
        if (!mobileSearchContainer.classList.contains("hidden")) {
          const searchInput = mobileSearchContainer.querySelector(
            ".mobile-search-input"
          );
          searchInput?.focus();
        }
      });
    }

    // Mobile dropdown toggle
    const mobileDropdownBtn = document.querySelector(".mobile-dropdown-btn");
    const mobileDropdownContent = document.querySelector(
      ".mobile-dropdown-content"
    );
    const mobileDropdownIcon = mobileDropdownBtn?.querySelector("svg");

    if (mobileDropdownBtn && mobileDropdownContent) {
      mobileDropdownBtn.addEventListener("click", () => {
        const isOpen = !mobileDropdownContent.classList.contains("hidden");

        if (isOpen) {
          mobileDropdownContent.classList.add("hidden");
          mobileDropdownIcon?.classList.remove("rotate-180");
        } else {
          mobileDropdownContent.classList.remove("hidden");
          mobileDropdownIcon?.classList.add("rotate-180");
        }
      });
    }

    // Desktop language dropdown
    const langDropdownBtn = document.querySelector(".lang-dropdown-btn");
    const langDropdown = document.querySelector(".lang-dropdown");
    const langDropdownIcon = langDropdownBtn?.querySelector("svg");

    if (langDropdownBtn && langDropdown) {
      langDropdownBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = langDropdown.classList.contains("opacity-100");

        if (isOpen) {
          langDropdown.classList.remove(
            "opacity-100",
            "visible",
            "translate-y-0"
          );
          langDropdown.classList.add("opacity-0", "invisible", "translate-y-1");
          langDropdownIcon?.classList.remove("rotate-180");
        } else {
          langDropdown.classList.remove(
            "opacity-0",
            "invisible",
            "translate-y-1"
          );
          langDropdown.classList.add("opacity-100", "visible", "translate-y-0");
          langDropdownIcon?.classList.add("rotate-180");
        }
      });
    }

    // Language switcher (both desktop and mobile)
    const langOptions = document.querySelectorAll(
      ".lang-option, .mobile-lang-option"
    );
    const flagIcon = document.querySelector(".flag-icon");
    const langText = document.querySelector(".lang-text");

    langOptions.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        this.currentLang = lang;
        localStorage.setItem("riskalia_lang", this.currentLang);

        // Update desktop dropdown button
        if (flagIcon && langText) {
          const flags = { fr: "🇫🇷", en: "🇺🇸", ar: "🇲🇦" };
          const texts = { fr: "FR", en: "EN", ar: "AR" };
          flagIcon.textContent = flags[lang];
          langText.textContent = texts[lang];
        }

        // Close dropdown
        if (langDropdown) {
          langDropdown.classList.remove(
            "opacity-100",
            "visible",
            "translate-y-0"
          );
          langDropdown.classList.add("opacity-0", "invisible", "translate-y-1");
          langDropdownIcon?.classList.remove("rotate-180");
        }

        // Close mobile menu
        if (mobileMenu) {
          mobileMenu.classList.remove(
            "translate-y-0",
            "opacity-100",
            "visible",
            "nav-open"
          );
          mobileMenu.classList.add(
            "-translate-y-full",
            "opacity-0",
            "invisible"
          );
          hamburgerIcon?.classList.remove("open");
        }

        // Trigger language change event
        document.dispatchEvent(
          new CustomEvent("languageChanged", {
            detail: { language: this.currentLang },
          })
        );
      });
    });

    // Search functionality
    this.setupSearch();

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      // Close language dropdown
      if (
        langDropdown &&
        !e.target.closest(".lang-dropdown-btn") &&
        !e.target.closest(".lang-dropdown")
      ) {
        langDropdown.classList.remove(
          "opacity-100",
          "visible",
          "translate-y-0"
        );
        langDropdown.classList.add("opacity-0", "invisible", "translate-y-1");
        langDropdownIcon?.classList.remove("rotate-180");
      }

      // Close search results
      if (
        !e.target.closest(".search-wrapper") &&
        !e.target.closest(".mobile-search-container")
      ) {
        this.hideAllSearchResults();
      }

      // Close mobile menu
      if (
        mobileMenu &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".mobile-menu-toggle") &&
        !e.target.closest(".mobile-search-btn")
      ) {
        mobileMenu.classList.remove(
          "translate-y-0",
          "opacity-100",
          "visible",
          "nav-open"
        );
        mobileMenu.classList.add("-translate-y-full", "opacity-0", "invisible");
        hamburgerIcon?.classList.remove("open");

        // Also close mobile search
        if (mobileSearchContainer) {
          mobileSearchContainer.classList.add("hidden");
        }
      }
    });

    // Initialize language display
    this.updateLanguageDisplay();
  }

  setActivePage() {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(
      ".nav-link[data-page], .mobile-nav-link[data-page]"
    );

    navLinks.forEach((link) => {
      const linkPage = link.getAttribute("href").split("/").pop();
      if (linkPage === currentPage) {
        // Add active styles
        link.classList.add("text-[var(--c3)]", "font-semibold", "active");
        link.classList.remove("text-gray-700");
      } else {
        // Remove active styles
        link.classList.remove("text-[var(--c3)]", "font-semibold", "active");
        link.classList.add("text-gray-700");
      }
    });
  }

  // Update language display
  updateLanguageDisplay() {
    const langText = document.querySelector(".lang-text");

    if (langText) {
      const texts = { fr: "FR", en: "EN", ar: "AR" };
      langText.textContent = texts[this.currentLang] || texts.fr;
    }

    // Update search placeholders
    this.updateSearchPlaceholders();
  }

  // Setup search functionality
  setupSearch() {
    const searchInput = document.querySelector(".search-input");
    const mobileSearchInput = document.querySelector(".mobile-search-input");
    const searchResults = document.querySelector(".search-results");
    const mobileSearchResults = document.querySelector(
      ".mobile-search-results"
    );

    // Desktop search
    if (searchInput && searchResults) {
      this.bindSearchInput(searchInput, searchResults);
    }

    // Mobile search
    if (mobileSearchInput && mobileSearchResults) {
      this.bindSearchInput(mobileSearchInput, mobileSearchResults);
    }
  }

  // Bind search input events
  bindSearchInput(input, resultsContainer) {
    let searchTimeout;

    input.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      const query = e.target.value.trim();

      if (query.length < 2) {
        this.hideSearchResults(resultsContainer);
        return;
      }

      // Debounce search
      searchTimeout = setTimeout(() => {
        const results = this.searchComponent.search(query);
        this.displaySearchResults(results, resultsContainer);
      }, 150);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.hideSearchResults(resultsContainer);
        input.blur();
      }
    });

    input.addEventListener("focus", () => {
      const query = input.value.trim();
      if (query.length >= 2) {
        const results = this.searchComponent.search(query);
        this.displaySearchResults(results, resultsContainer);
      }
    });
  }

  // Display search results
  displaySearchResults(results, container) {
    const resultsDiv = container.querySelector("div");

    if (results.length === 0) {
      resultsDiv.innerHTML = `
        <div class="px-4 py-3 text-sm text-gray-500 text-center">
          <span data-i18n="search.noResults">Aucun résultat trouvé</span>
        </div>
      `;
    } else {
      resultsDiv.innerHTML = results
        .map(
          (result) => `
        <a href="${result.url}" class="search-result-item block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--c3)] transition-colors duration-150 border-b border-gray-50 last:border-b-0">
          <div class="font-medium">${result.title}</div>
        </a>
      `
        )
        .join("");
    }

    // Show results - different logic for mobile vs desktop
    if (container.classList.contains("mobile-search-results")) {
      // Mobile: just remove hidden class
      container.classList.remove("hidden");
    } else {
      // Desktop: use opacity/visibility classes
      container.classList.remove("opacity-0", "invisible", "translate-y-1");
      container.classList.add("opacity-100", "visible", "translate-y-0");
    }

    // Add click handlers to results
    container.querySelectorAll(".search-result-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const url = item.getAttribute("href");
        this.hideAllSearchResults();
        window.location.href = url;
      });
    });

    // Apply translations to "no results" text if needed
    if (typeof window.applyTexts === "function") {
      window.applyTexts();
    }
  }

  // Hide search results
  hideSearchResults(container) {
    if (container.classList.contains("mobile-search-results")) {
      // Mobile: add hidden class
      container.classList.add("hidden");
    } else {
      // Desktop: use opacity/visibility classes
      container.classList.remove("opacity-100", "visible", "translate-y-0");
      container.classList.add("opacity-0", "invisible", "translate-y-1");
    }
  }

  // Hide all search results
  hideAllSearchResults() {
    const searchResults = document.querySelector(".search-results");
    const mobileSearchResults = document.querySelector(
      ".mobile-search-results"
    );

    if (searchResults) this.hideSearchResults(searchResults);
    if (mobileSearchResults) {
      mobileSearchResults.classList.add("hidden");
    }
  }

  // Update search placeholders based on language
  updateSearchPlaceholders() {
    const placeholders = {
      fr: "Rechercher...",
      en: "Search...",
      ar: "بحث...",
    };

    const placeholder = placeholders[this.currentLang] || placeholders.fr;

    document
      .querySelectorAll(".search-input, .mobile-search-input")
      .forEach((input) => {
        input.placeholder = placeholder;
      });
  }

  // Apply translations using the main i18n system
  applyTranslations() {
    if (typeof applyI18n === "function") {
      applyI18n();
    } else if (typeof window.I18N !== "undefined" && typeof t === "function") {
      // Fallback translation update
      const elements = document.querySelectorAll("[data-i18n]");
      elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key) {
          const text = t(key);
          if (text !== key) {
            if (el.querySelector(".caret")) {
              // Handle elements with child elements like caret
              const textNode = Array.from(el.childNodes).find(
                (n) => n.nodeType === Node.TEXT_NODE
              );
              if (textNode) {
                textNode.textContent = text + " ";
              } else {
                el.insertBefore(
                  document.createTextNode(text + " "),
                  el.firstChild
                );
              }
            } else {
              el.textContent = text;
            }
          }
        }
      });
    }
  }

  // Public methods
  updateLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem("riskalia_lang", lang);
    this.searchComponent.updateLanguage(lang);
    this.updateLanguageDisplay();
    this.applyTranslations();
    this.setActivePage();
  }

  // Public method to refresh active page highlighting
  refreshActivePage() {
    this.setActivePage();
  }

  destroy() {
    const container = document.getElementById(this.containerId);
    if (container) {
      container.innerHTML = "";
    }
  }
}

// Auto-initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.navigationComponent = new NavigationComponent();
});

// Export for manual use
window.NavigationComponent = NavigationComponent;
