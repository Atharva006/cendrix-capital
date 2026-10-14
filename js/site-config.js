/**
 * ==============================================================================
 * CENDRIX CAPITAL - CLIENT CONFIGURATION & CONTENT SPECIFICATION
 * ==============================================================================
 * Edit this file to easily update founder names, biographies, photos, contact info,
 * and social links without modifying the core HTML or CSS files.
 * ==============================================================================
 */

const CENDRIX_CONFIG = {
  // Brand Identity
  brand: {
    name: "CENDRIX CAPITAL",
    tagline: "Precision. Discipline. Performance.",
    subtitle: "Financial Markets Research & Proprietary Execution",
    description: "An independent proprietary trading firm specializing in global foreign exchange and futures liquidity. Driven by mathematical discipline, deep market structure analysis, and non-negotiable risk parameters.",
    year: new Date().getFullYear(),
  },

  // Leadership / Founders Information
  founders: {
    founder: {
      name: "Amit Kumar",
      role: "Founder & Managing Partner",
      focus: "Quantitative Market Structure & Futures Execution",
      image: "assets/images/amit-kumar.jpg",
      fallbackImage: "assets/images/founder-placeholder.svg",
      imageAlt: "Amit Kumar - Founder, Cendrix Capital",
      bio: "Directs the firm's strategic market research, quantitative futures execution models, and structural edge development. Oversees multi-venue liquidity analysis and systematic framework architecture with an emphasis on high-probability risk-reward asymmetry.",
      linkedin: "",
      email: ""
    },
    coFounder: {
      name: "Atharva Bhosale",
      role: "Co-Founder & Partner",
      focus: "Macro Dynamics & Risk Architecture",
      image: "assets/images/atharva-bhosale.jpg",
      fallbackImage: "assets/images/cofounder-placeholder.svg",
      imageAlt: "Atharva Bhosale - Co-Founder, Cendrix Capital",
      bio: "Oversees foreign exchange liquidity modeling, macro-economic catalyst research, and firm-wide risk containment protocols. Focuses on volatility-adjusted position sizing, drawdown governance, and continuous execution auditing.",
      linkedin: "",
      email: "atharva.bhosale@yahoo.com"
    }
  },

  // Contact Details
  contact: {
    email: "atharva.bhosale@yahoo.com",
    inquiriesEmail: "atharva.bhosale@yahoo.com",
    addressPlaceholder: "Independent Proprietary Trading Group",
    linkedinCompanyUrl: "", // e.g. "https://www.linkedin.com/company/cendrix-capital"
    xTwitterUrl: "",
    responseNotice: "Direct correspondence is reviewed by the trading desk. Proprietary inquiries only."
  },

  // Approach: The 4 Core Principles
  approach: [
    {
      id: "research",
      number: "01",
      title: "Market Research",
      tagline: "Understanding market structure and relevant information",
      icon: "assets/icons/research.svg",
      summary: "In-depth analysis of global order book depth, liquidity imbalance zones, intermarket interest rate differentials, and institutional order flow.",
      details: [
        "Granular order book microstructure across global Forex and Futures venues.",
        "Systematic tracking of central bank policy shifts, macroeconomic releases, and volatility catalysts.",
        "Quantitative identification of structural inefficiencies rather than speculative noise."
      ]
    },
    {
      id: "strategy",
      number: "02",
      title: "Strategy",
      tagline: "Developing and evaluating structured trading approaches",
      icon: "assets/icons/strategy.svg",
      summary: "Formulating rule-based, asymmetric execution models tested across varied market regimes with strictly defined invalidation thresholds.",
      details: [
        "Mathematical hypothesis generation grounded in auction market theory.",
        "Comprehensive walk-forward stress testing across multi-year macroeconomic regimes.",
        "Clear demarcation between algorithmic execution and discretionary risk overlay."
      ]
    },
    {
      id: "risk",
      number: "03",
      title: "Risk Discipline",
      tagline: "Prioritising defined risk and consistent processes",
      icon: "assets/icons/risk.svg",
      summary: "Non-negotiable capital preservation frameworks, dynamic volatility-adjusted sizing, and strict predetermined portfolio stop boundaries.",
      details: [
        "Inviolable maximum intraday and weekly drawdown gates enforced programmatically.",
        "Position sizing scaled to instantaneous market volatility rather than nominal account size.",
        "Capital protection takes absolute precedence over potential profit capture."
      ]
    },
    {
      id: "improvement",
      number: "04",
      title: "Continuous Improvement",
      tagline: "Reviewing decisions, learning, and refining methods",
      icon: "assets/icons/improvement.svg",
      summary: "Rigorous post-trade forensic analysis, statistical execution auditing, and iterative refinement of mathematical assumptions.",
      details: [
        "Exhaustive post-trade behavioral and quantitative trade journaling.",
        "Constant monitoring of model slippage, fill quality, and alpha decay.",
        "Iterative calibration loops that update parameter sensitivity as structural regimes shift."
      ]
    }
  ],

  // Legal Disclaimer
  legal: {
    disclaimerText: "Cendrix Capital is an independent proprietary trading and financial markets research brand. All content on this website is provided solely for informational and educational purposes and does not constitute investment advice, financial promotion, or an offer or solicitation to buy or sell any security, currency, or futures contract. Cendrix Capital trades exclusively with proprietary firm capital and does not manage outside client funds, operate a public investment fund, or provide brokerage services. Trading Forex, Futures, and derivative instruments carries substantial risk of loss and is not suitable for all investors."
  }
};

// Export for module or browser environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CENDRIX_CONFIG;
}
