/**
 * ==============================================================================
 * CENDRIX CAPITAL - CORE INTERACTIVE ENGINE & ARCHITECTURE
 * ==============================================================================
 * Features:
 * - Dynamic Configuration Hydration (Founders, Branding, Legal)
 * - Graceful Founder Image Fallbacks & 4:5 Aspect Ratio Governance
 * - Live Global Market Session Monitor (Tokyo, London, New York)
 * - Illustrative Geometric Market Canvas (Hardware-accelerated)
 * - Scroll-Aware Sticky Navigation & Mobile Drawer
 * - Interactive Principle Deep-Dive Explorer
 * - Validated Contact Form with Functional Mailto & Clipboard Generation
 * - Local Founder Photo Preview Tool
 * ==============================================================================
 */

(function () {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', initCendrixApp);

  function initCendrixApp() {
    // 1. Hydrate content from CENDRIX_CONFIG
    hydrateConfiguration();

    // 2. Setup Founder Image Fallbacks & Listeners
    setupFounderImages();

    // 3. Initialize Live ICT Concept & Telemetry Engine (Time is Fractal)
    initIctEngine();

    // 4. Initialize Hero Geometric Market Canvas
    initHeroMarketCanvas();

    // 5. Initialize Navigation & Scroll-Spy
    initNavigation();

    // 6. Initialize Interactive Approach Principles
    initPrinciplesExplorer();

    // 7. Initialize Contact Form & Submission Flow
    initContactForm();
  }

  /* --------------------------------------------------------------------------
     1. HYDRATE CONFIGURATION
     -------------------------------------------------------------------------- */
  function hydrateConfiguration() {
    if (typeof CENDRIX_CONFIG === 'undefined') return;

    const { brand, founders, contact, legal } = CENDRIX_CONFIG;

    // Footer Copyright Year
    const yearEl = document.getElementById('footerYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Hydrate Founder 1
    if (founders && founders.founder) {
      const f = founders.founder;
      setElText('founder1Name', f.name);
      setElText('founder1Role', f.role);
      setElText('founder1Focus', f.focus);
      setElText('founder1Bio', f.bio);

      const linkEl = document.getElementById('founder1Linkedin');
      if (linkEl) {
        if (f.linkedin && f.linkedin.trim() !== '' && f.linkedin !== '#') {
          linkEl.href = f.linkedin;
          linkEl.style.display = 'inline-flex';
        } else {
          linkEl.style.display = 'none';
        }
      }
    }

    // Hydrate Founder 2 (Co-Founder)
    if (founders && founders.coFounder) {
      const cf = founders.coFounder;
      setElText('founder2Name', cf.name);
      setElText('founder2Role', cf.role);
      setElText('founder2Focus', cf.focus);
      setElText('founder2Bio', cf.bio);

      const linkEl = document.getElementById('founder2Linkedin');
      if (linkEl) {
        if (cf.linkedin && cf.linkedin.trim() !== '' && cf.linkedin !== '#') {
          linkEl.href = cf.linkedin;
          linkEl.style.display = 'inline-flex';
        } else {
          linkEl.style.display = 'none';
        }
      }
    }

    // Hydrate Contact Info
    if (contact) {
      setElText('contactEmailText', contact.email);
      const emailLink = document.getElementById('contactEmailLink');
      if (emailLink) {
        emailLink.href = `mailto:${contact.email}`;
      }
      setElText('contactInquiriesText', contact.inquiriesEmail);
      const inqLink = document.getElementById('contactInquiriesLink');
      if (inqLink) {
        inqLink.href = `mailto:${contact.inquiriesEmail}`;
      }
    }

    // Hydrate Legal Disclaimer
    if (legal && legal.disclaimerText) {
      setElText('legalDisclaimerText', legal.disclaimerText);
    }
  }

  function setElText(id, text) {
    const el = document.getElementById(id);
    if (el && text) {
      el.textContent = text;
    }
  }

  /* --------------------------------------------------------------------------
     2. FOUNDER IMAGES SYSTEM & GRACEFUL FALLBACK
     -------------------------------------------------------------------------- */
  function setupFounderImages() {
    const founder1Img = document.getElementById('founder1Img');
    const founder2Img = document.getElementById('founder2Img');

    if (typeof CENDRIX_CONFIG !== 'undefined' && CENDRIX_CONFIG.founders) {
      const { founder, coFounder } = CENDRIX_CONFIG.founders;

      if (founder1Img) {
        // Attempt custom image, fallback to architectural SVG
        founder1Img.src = founder.image || founder.fallbackImage;
        founder1Img.alt = founder.imageAlt || 'Founder Portrait';
        founder1Img.onerror = function () {
          this.onerror = null;
          this.src = founder.fallbackImage || 'assets/images/founder-placeholder.svg';
        };
      }

      if (founder2Img) {
        // Attempt custom image, fallback to architectural SVG
        founder2Img.src = coFounder.image || coFounder.fallbackImage;
        founder2Img.alt = coFounder.imageAlt || 'Co-Founder Portrait';
        founder2Img.onerror = function () {
          this.onerror = null;
          this.src = coFounder.fallbackImage || 'assets/images/cofounder-placeholder.svg';
        };
      }
    }
  }

  /* --------------------------------------------------------------------------
     3. LIVE ICT CONCEPT & TELEMETRY ENGINE (TIME IS FRACTAL)
     -------------------------------------------------------------------------- */
  function initIctEngine() {
    const headerStatus = document.getElementById('headerIctStatus');
    const islandStatus = document.getElementById('islandKillzoneStatus');
    const islandClock = document.getElementById('telemetryClock');
    const islandKzTitle = document.getElementById('telemetryKzTitle');
    const islandOffset = document.getElementById('telemetryMidnightOffset');
    const islandElement = document.getElementById('cendrixDynamicIsland');
    const expandTrigger = document.getElementById('islandExpandTrigger');
    const closeBtn = document.getElementById('islandCloseBtn');
    const kzPills = document.querySelectorAll('.kz-pill');

    // ICT Killzones definitions in New York Local Time (24h format)
    function getIctSessionInfo(nyHours, nyMinutes) {
      const totalMinutes = nyHours * 60 + nyMinutes;

      // 1. Asian Liquidity Range: 20:00 - 00:00 NY (1200 - 1440 min)
      if (totalMinutes >= 1200 && totalMinutes <= 1440) {
        return {
          id: 'asian',
          name: 'ASIAN LIQUIDITY RANGE',
          window: '20:00 – 00:00 NY',
          phase: 'Asian Range Consolidation / Initial Range Formation'
        };
      }
      // 2. True Day Open / Midnight Bias: 00:00 - 02:00 NY (0 - 120 min)
      if (totalMinutes >= 0 && totalMinutes < 120) {
        return {
          id: 'midnight',
          name: 'TRUE DAY MIDNIGHT OPEN',
          window: '00:00 – 02:00 NY',
          phase: 'IPDA Baseline Reference / Daily Bias Set'
        };
      }
      // 3. London Open Killzone: 02:00 - 05:00 NY (120 - 300 min)
      if (totalMinutes >= 120 && totalMinutes < 300) {
        return {
          id: 'london-open',
          name: 'LONDON OPEN KILLZONE',
          window: '02:00 – 05:00 NY',
          phase: 'Judas Swing / Daily High-Low Formation'
        };
      }
      // 4. Pre-NY Macro / London Expansion: 05:00 - 07:00 NY (300 - 420 min)
      if (totalMinutes >= 300 && totalMinutes < 420) {
        return {
          id: 'pre-ny',
          name: 'LONDON MACRO EXPANSION',
          window: '05:00 – 07:00 NY',
          phase: 'Pre-Market Order Flow Transition'
        };
      }
      // 5. New York AM Killzone: 07:00 - 10:00 NY (420 - 600 min)
      if (totalMinutes >= 420 && totalMinutes < 600) {
        return {
          id: 'ny-am',
          name: 'NEW YORK AM KILLZONE',
          window: '07:00 – 10:00 NY',
          phase: 'Prime Index & FX Distribution Wave'
        };
      }
      // 6. London Close Killzone: 10:00 - 12:00 NY (600 - 720 min)
      if (totalMinutes >= 600 && totalMinutes < 720) {
        return {
          id: 'london-close',
          name: 'LONDON CLOSE KILLZONE',
          window: '10:00 – 12:00 NY',
          phase: 'Institutional Profit Taking & Counter Retracement'
        };
      }
      // 7. NY Lunch Re-pricing: 12:00 - 13:30 NY (720 - 810 min)
      if (totalMinutes >= 720 && totalMinutes < 810) {
        return {
          id: 'lunch',
          name: 'NY LUNCH ALGORITHMIC PAUSE',
          window: '12:00 – 13:30 NY',
          phase: 'Algorithmic Consolidation / Re-Delivery'
        };
      }
      // 8. New York PM Killzone / Macro: 13:30 - 16:00 NY (810 - 960 min)
      if (totalMinutes >= 810 && totalMinutes < 960) {
        return {
          id: 'ny-pm',
          name: 'NEW YORK PM MACRO KILLZONE',
          window: '13:30 – 16:00 NY',
          phase: 'Afternoon Trend Continuation & Daily Settlement'
        };
      }
      // 9. Post-Market Liquidity Settlement: 16:00 - 20:00 NY (960 - 1200 min)
      return {
        id: 'post-close',
        name: 'POST-CLOSE SETTLEMENT',
        window: '16:00 – 20:00 NY',
        phase: 'Inter-day Liquidity Pool Reset'
      };
    }

    let cycleIndex = 0;

    function tickIct() {
      const now = new Date();
      // Accurate New York local time (EST / EDT)
      const nyDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
      const h = nyDate.getHours();
      const m = nyDate.getMinutes();
      const s = nyDate.getSeconds();

      const session = getIctSessionInfo(h, m);

      // Header Cycling Ticker (Time is Fractal - No time digits)
      if (headerStatus) {
        const phrases = [
          `TIME IS FRACTAL`,
          `TIME IS FRACTAL • ${session.name}`,
          `TIME IS FRACTAL • LIQUIDITY PRECEDES PRICE`
        ];
        headerStatus.textContent = phrases[cycleIndex % phrases.length];
      }

      // Compact Dynamic Island Ticker (No time digits)
      if (islandStatus) {
        islandStatus.textContent = session.name;
      }

      // Expanded Island Information (No time digits)
      if (islandClock) {
        islandClock.textContent = 'IPDA ALGORITHM';
      }
      if (islandKzTitle) {
        islandKzTitle.textContent = session.name;
      }
      if (islandOffset) {
        islandOffset.textContent = session.phase;
      }

      // Highlight active Killzone tag pill
      if (kzPills && kzPills.length > 0) {
        kzPills.forEach(pill => {
          const kz = pill.getAttribute('data-kz');
          if (kz === session.id) {
            pill.classList.add('active');
          } else {
            pill.classList.remove('active');
          }
        });
      }
    }

    tickIct();
    setInterval(tickIct, 1000); // 1s tick for real-time clock
    setInterval(() => { cycleIndex++; }, 5000); // cycle header text every 5s

    // Dynamic Island Expand / Collapse Interaction
    if (islandElement && expandTrigger) {
      expandTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        islandElement.classList.add('expanded');
      });
    }

    if (closeBtn && islandElement) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        islandElement.classList.remove('expanded');
      });
    }

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (islandElement && islandElement.classList.contains('expanded')) {
        if (!islandElement.contains(e.target)) {
          islandElement.classList.remove('expanded');
        }
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && islandElement && islandElement.classList.contains('expanded')) {
        islandElement.classList.remove('expanded');
      }
    });
  }

  /* --------------------------------------------------------------------------
     4. HERO MARKET CANVAS (RESTRAINED GEOMETRIC DEPTH)
     -------------------------------------------------------------------------- */
  function initHeroMarketCanvas() {
    const canvas = document.getElementById('heroMarketCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let animationFrameId;
    let t = 0;

    function resize() {
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    // Coordinate grid parameters
    const gridSize = 64;

    function render() {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle coordinate grid
      ctx.strokeStyle = 'rgba(198, 161, 91, 0.05)';
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw crosshairs at key intersections
      ctx.fillStyle = 'rgba(198, 161, 91, 0.15)';
      for (let x = gridSize; x < width; x += gridSize * 3) {
        for (let y = gridSize; y < height; y += gridSize * 3) {
          ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
        }
      }

      // 3. Draw ambient illustrative harmonic curves (purely structural)
      ctx.lineWidth = 1.2;

      // Curve 1 (Gold Accent Flow)
      ctx.strokeStyle = 'rgba(198, 161, 91, 0.22)';
      ctx.beginPath();
      for (let x = 0; x < width; x += 4) {
        const y = height * 0.58 +
                  Math.sin(x * 0.003 + t * 0.008) * 45 +
                  Math.cos(x * 0.007 - t * 0.006) * 25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Curve 2 (Subtle Secondary Wave)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.beginPath();
      for (let x = 0; x < width; x += 6) {
        const y = height * 0.64 +
                  Math.cos(x * 0.004 - t * 0.005) * 55 +
                  Math.sin(x * 0.008 + t * 0.004) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      t += 1;
      animationFrameId = requestAnimationFrame(render);
    }

    // Only run if user does not prefer reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      render();
    } else {
      // Static single draw
      resize();
      ctx.strokeStyle = 'rgba(198, 161, 91, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
    }
  }

  /* --------------------------------------------------------------------------
     5. NAVIGATION & SCROLL MANAGEMENT
     -------------------------------------------------------------------------- */
  function initNavigation() {
    const nav = document.getElementById('cendrixNav');
    const mobileToggle = document.getElementById('mobileNavToggle');
    const mobileDrawer = document.getElementById('mobileNavDrawer');
    const navLinks = document.querySelectorAll('.nav-link-scroll');

    // Sticky nav on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.contains('open');
        if (isOpen) {
          mobileDrawer.classList.remove('open');
          mobileToggle.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        } else {
          mobileDrawer.classList.add('open');
          mobileToggle.classList.add('open');
          mobileToggle.setAttribute('aria-expanded', 'true');
          document.body.style.overflow = 'hidden';
        }
      });
    }

    // Smooth scroll for all anchor navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            // Close mobile menu if open
            if (mobileDrawer && mobileDrawer.classList.contains('open')) {
              mobileDrawer.classList.remove('open');
              mobileToggle.classList.remove('open');
              mobileToggle.setAttribute('aria-expanded', 'false');
              document.body.style.overflow = '';
            }

            const headerOffset = 76;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     6. INTERACTIVE APPROACH PRINCIPLES
     -------------------------------------------------------------------------- */
  function initPrinciplesExplorer() {
    const principleCards = document.querySelectorAll('.principle-card');
    const drawer = document.getElementById('principleDetailDrawer');
    const drawerTitle = document.getElementById('drawerTitle');
    const drawerNumber = document.getElementById('drawerNumber');
    const drawerTagline = document.getElementById('drawerTagline');
    const drawerSummary = document.getElementById('drawerSummary');
    const drawerDetailsList = document.getElementById('drawerDetailsList');
    const drawerCloseBtn = document.getElementById('drawerCloseBtn');

    if (!drawer || typeof CENDRIX_CONFIG === 'undefined' || !CENDRIX_CONFIG.approach) return;

    const approachData = CENDRIX_CONFIG.approach;

    function openPrinciple(id) {
      const data = approachData.find(item => item.id === id);
      if (!data) return;

      if (drawerTitle) drawerTitle.textContent = data.title;
      if (drawerNumber) drawerNumber.textContent = `PRINCIPLE ${data.number}`;
      if (drawerTagline) drawerTagline.textContent = data.tagline;
      if (drawerSummary) drawerSummary.textContent = data.summary;

      if (drawerDetailsList) {
        drawerDetailsList.innerHTML = '';
        data.details.forEach(item => {
          const li = document.createElement('li');
          li.style.marginBottom = '0.75rem';
          li.style.color = '#F5F5F2';
          li.style.fontSize = '0.92rem';
          li.innerHTML = `<strong style="color: #C6A15B;">•</strong> ${item}`;
          drawerDetailsList.appendChild(li);
        });
      }

      drawer.classList.add('active');
      drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    principleCards.forEach(card => {
      const inspectBtn = card.querySelector('.principle-inspect-btn');
      const id = card.getAttribute('data-principle');

      if (inspectBtn) {
        inspectBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openPrinciple(id);
        });
      }

      card.addEventListener('click', () => {
        openPrinciple(id);
      });
    });

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', () => {
        drawer.classList.remove('active');
      });
    }
  }

  /* --------------------------------------------------------------------------
     7. CONTACT FORM & FUNCTIONAL SUBMISSION FLOW
     -------------------------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById('cendrixContactForm');
    const statusBox = document.getElementById('contactFormStatus');
    const directMailBtn = document.getElementById('directMailBtn');
    const copyMessageBtn = document.getElementById('copyMessageBtn');

    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const subjectInput = document.getElementById('contactSubject');
      const categoryInput = document.getElementById('contactCategory');
      const messageInput = document.getElementById('contactMessage');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        showValidation('contactNameFeedback', 'Full name is required.');
        isValid = false;
      } else {
        hideValidation('contactNameFeedback');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showValidation('contactEmailFeedback', 'Please provide a valid email address.');
        isValid = false;
      } else {
        hideValidation('contactEmailFeedback');
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 15) {
        showValidation('contactMessageFeedback', 'Message must be at least 15 characters long.');
        isValid = false;
      } else {
        hideValidation('contactMessageFeedback');
      }

      if (!isValid) return;

      // Prepare Mailto parameters
      const recipient = (typeof CENDRIX_CONFIG !== 'undefined' && CENDRIX_CONFIG.contact)
        ? CENDRIX_CONFIG.contact.email
        : 'contact@cendrixcapital.com';

      const category = categoryInput ? categoryInput.value : 'General Inquiry';
      const subject = encodeURIComponent(`[CENDRIX INQUIRY - ${category}] ${subjectInput.value.trim() || 'Direct Correspondence'}`);
      const bodyText = `From: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\nCategory: ${category}\n\nMessage:\n${messageInput.value.trim()}`;
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;

      // Display Honest Action Box (No fake server confirmations)
      if (statusBox) {
        statusBox.className = 'form-status-alert active info';
        statusBox.innerHTML = `
          <div style="font-weight: 600; color: #E2C889; margin-bottom: 0.4rem;">Inquiry Prepared for Transmission</div>
          <p style="margin-bottom: 0.75rem; font-size: 0.88rem; color: #F5F5F2;">
            To ensure end-to-end security, correspondence is routed directly through your email client to <strong>${recipient}</strong>.
          </p>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <a href="${mailtoUrl}" class="btn-cendrix-gold" style="padding: 0.5rem 1.25rem; font-size: 0.78rem;">
              Send via Email Client
            </a>
            <button type="button" id="copyInquiryBtn" class="btn-cendrix-outline" style="padding: 0.5rem 1.25rem; font-size: 0.78rem;">
              Copy Formatted Text
            </button>
          </div>
        `;

        const copyBtn = document.getElementById('copyInquiryBtn');
        if (copyBtn) {
          copyBtn.addEventListener('click', function () {
            navigator.clipboard.writeText(bodyText).then(() => {
              this.textContent = 'Copied to Clipboard!';
              setTimeout(() => {
                this.textContent = 'Copy Formatted Text';
              }, 2500);
            });
          });
        }
      }
    });

    function showValidation(id, msg) {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = msg;
        el.classList.add('active');
      }
    }

    function hideValidation(id) {
      const el = document.getElementById(id);
      if (el) {
        el.classList.remove('active');
      }
    }
  }

})();
