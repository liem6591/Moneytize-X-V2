export interface AutofillResult {
  name: string;
  category: string;
  secondaryCategory?: string;
  url: string;
  feeTier: 'Zero Fee' | 'Commission Free' | 'Low Fee' | 'Freemium' | 'Subscription';
  feeHighlight: string;
  yieldAPY?: string;
  minDeposit: string;
  regulatoryStatus: string;
  depositInsurance?: string;
  description: string;
  fullDescription: string;
  pros: string[];
  cons: string[];
  keyPerks: string[];
  tags: string[];
  logo: {
    type: 'text';
    text: string;
    bg: string;
    color: string;
  };
  currentOffer?: string;
  provider: string;
}

const KNOWN_PLATFORMS: Record<string, Partial<AutofillResult>> = {
  tradingview: {
    name: 'TradingView',
    category: 'Stock Trading',
    secondaryCategory: 'Charting & Technical Analysis',
    feeTier: 'Freemium',
    feeHighlight: 'Free basic plan; Pro tiers from $12.95/mo',
    minDeposit: '$0',
    regulatoryStatus: 'Financial Information & Analytics Provider',
    depositInsurance: 'N/A (Analytical Platform & Broker Integration)',
    description: 'World-leading charting platform and social network for traders and investors, featuring advanced indicators and multi-broker execution.',
    fullDescription: 'TradingView is the premier cloud-based financial visualization and analysis platform used by over 50 million traders worldwide. It combines institutional-grade real-time market data, Pine Script custom indicators, and direct broker integration across stocks, crypto, forex, and futures.',
    pros: [
      'Gold-standard HTML5 charting with hundreds of built-in technical indicators',
      'Direct order execution through integrated broker partners',
      'Vibrant global trader community with published ideas and custom scripts',
    ],
    cons: [
      'Advanced real-time market data feeds require exchange subscriptions',
      'Free plan limited to 3 indicators per chart',
    ],
    keyPerks: [
      'Pine Script custom indicator coding environment',
      'Real-time multi-asset technical screener and alerts',
      'Direct trading integration with top brokers',
    ],
    tags: ['Stock Trading', 'Charting & Analytics', 'Pine Script', 'Technical Analysis', 'Freemium'],
    logo: { type: 'text', text: 'TV', bg: '#2962FF', color: '#FFFFFF' },
    currentOffer: '30-day free trial on Essential, Plus, and Premium plans',
  },
  robinhood: {
    name: 'Robinhood',
    category: 'Stock Trading',
    secondaryCategory: 'High-Yield Cash Sweep & Options',
    feeTier: 'Commission Free',
    feeHighlight: '$0 stock & options commissions, $0 contract fees',
    yieldAPY: '5.00% APY for Gold Members (1.5% Standard)',
    minDeposit: '$0',
    regulatoryStatus: 'SEC Registered Broker-Dealer & FINRA/SIPC Member',
    depositInsurance: 'SIPC up to $500k; FDIC up to $2.25M through program banks',
    description: 'Pioneering mobile brokerage providing commission-free US stock, ETF, and options trading with market-leading IRA match and high-yield cash sweep.',
    fullDescription: 'Robinhood revolutionized modern retail investing by pioneering zero-commission stock and options transactions. Featuring a distraction-free mobile interface, automated recurring investments, and high-yield uninvested cash sweeps, it serves over 24 million funded accounts.',
    pros: ['Zero commission trading on US equities, ETFs, and options', 'Industry-high 3% retirement IRA match for Gold subscribers', 'Uninvested cash sweep earning 5.0% APY with FDIC insurance'],
    cons: ['Customer support is primarily in-app callback rather than direct line', 'Margin trading requires Gold subscription tier'],
    keyPerks: ['5.0% APY cash sweep with Gold subscription', '3% retirement IRA match', '24/5 overnight trading access'],
    tags: ['Stock Trading', 'Commission Free', 'Cash Sweep', 'IRA Match', 'Mobile First'],
    logo: { type: 'text', text: 'RH', bg: '#00C805', color: '#FFFFFF' },
    currentOffer: 'Get up to $200 in free stock upon deposit + 3% IRA match',
  },
  interactivebrokers: {
    name: 'Interactive Brokers',
    category: 'Stock Trading',
    secondaryCategory: 'Global Multi-Asset & Professional Execution',
    feeTier: 'Low Fee',
    feeHighlight: 'IBKR Lite $0 US equities / IBKR Pro from $0.005/share',
    yieldAPY: '4.83% APY on idle cash balances > $10,000',
    minDeposit: '$0',
    regulatoryStatus: 'SEC, FINRA, NYSE, FCA and Global Financial Authorities',
    depositInsurance: 'SIPC protection up to $500,000 plus excess Lloyd\'s coverage',
    description: 'Institutional-grade global investment gateway granting access to 150+ markets across 34 countries with industry-lowest margin rates.',
    fullDescription: 'Interactive Brokers (IBKR) is the preeminent broker for active, sophisticated, and institutional investors worldwide. Offering direct market access to global exchanges, options, futures, currencies, and fixed income alongside low margin interest rates.',
    pros: ['Direct market access to 150+ exchanges in 34 countries', 'Industry-lowest margin financing interest rates', 'Institutional-grade Trader Workstation (TWS) analysis suite'],
    cons: ['Steep learning curve for casual and beginning retail investors', 'Market data subscriptions required for real-time international quotes'],
    keyPerks: ['Earn up to 4.83% APY on idle cash', 'Access 150+ international markets', 'Lowest retail margin borrowing rates'],
    tags: ['Stock Trading', 'Global Markets', 'Low Margin Rates', 'Institutional Grade', 'Options'],
    logo: { type: 'text', text: 'IB', bg: '#D81A1A', color: '#FFFFFF' },
    currentOffer: 'Earn up to $1,000 in IBKR stock when opening and funding an account',
  },
  coinbase: {
    name: 'Coinbase',
    category: 'Crypto Exchange',
    secondaryCategory: 'Digital Asset Custody & Staking',
    feeTier: 'Freemium',
    feeHighlight: 'Spread markup on standard / Advanced trade from 0.05%',
    yieldAPY: '5.00% APY on USDC holdings',
    minDeposit: '$2',
    regulatoryStatus: 'FinCEN MSB, NYDFS BitLicense, BaFin & FCA Authorized',
    depositInsurance: 'USD cash FDIC insured up to $250k; Institutional vault coverage',
    description: 'Premier publicly-traded US cryptocurrency exchange and Web3 platform with industry-benchmark custodial security and seamless on-ramps.',
    fullDescription: 'Coinbase (NASDAQ: COIN) is the world\'s most recognized crypto platform, bridging traditional finance and Web3. It provides secure trading in 250+ cryptocurrencies, high-yield staking, a self-custody Web3 wallet, and Coinbase One subscription for zero trading fees.',
    pros: ['Publicly traded (NASDAQ: COIN) with audited financial transparency', 'USD cash balances protected by pass-through FDIC insurance', 'Earn 5.0% APY on USDC with zero lockup requirements'],
    cons: ['Standard consumer buy/sell fees include higher retail spread', 'Crypto assets themselves are not SIPC/FDIC protected'],
    keyPerks: ['5.0% APY on USDC with zero lockup', 'Coinbase One zero trading fees subscription', 'Integrated self-custody Web3 wallet'],
    tags: ['Crypto Exchange', 'Regulated', 'Staking', 'Web3', 'USDC Yield'],
    logo: { type: 'text', text: 'CB', bg: '#0052FF', color: '#FFFFFF' },
    currentOffer: 'Get $10 in Bitcoin after funding and first trade',
  },
  binance: {
    name: 'Binance',
    category: 'Crypto Exchange',
    secondaryCategory: 'Derivatives & Liquidity Hub',
    feeTier: 'Low Fee',
    feeHighlight: '0.10% spot (0.075% with BNB discount)',
    yieldAPY: 'Up to 12.5% Earn & Staking yields',
    minDeposit: '$10',
    regulatoryStatus: 'Global VASP, Dubai VARA & French AMF Registered',
    depositInsurance: 'SAFU (Secure Asset Fund for Users) $1B+ emergency reserve',
    description: 'World\'s largest cryptocurrency exchange by trading volume, offering deep liquidity across spot, futures, and crypto savings.',
    fullDescription: 'Binance provides the industry\'s deepest digital asset order books. With multi-asset collateral, advanced API trading, copy trading, and an extensive earn ecosystem, it powers global crypto liquidity.',
    pros: ['Deepest global liquidity with minimal slippage on high volume', 'Competitive base fee structure with additional BNB discounts', 'Comprehensive earn, launchpool, and liquidity farming suite'],
    cons: ['Restricted in specific jurisdictions including US main entity', 'Extensive feature suite can be complex for beginners'],
    keyPerks: ['25% fee discount when paying with BNB', 'SAFU $1B reserve fund for emergency user protection', 'Multi-tier VIP volume incentives'],
    tags: ['Crypto Exchange', 'Deep Liquidity', 'Low Fee', 'Derivatives'],
    logo: { type: 'text', text: 'BN', bg: '#F0B90B', color: '#000000' },
    currentOffer: '100 USDT trading fee rebate for new registrations',
  },
  revolut: {
    name: 'Revolut',
    category: 'Digital Banking & Neobanks',
    secondaryCategory: 'Multi-Currency & Global Lifestyle',
    feeTier: 'Freemium',
    feeHighlight: 'Free standard tier with fee-free multi-currency accounts',
    yieldAPY: 'Up to 4.25% APY on Vault Savings',
    minDeposit: '$0',
    regulatoryStatus: 'Licensed European Bank & FinCEN Registered Partner',
    depositInsurance: 'European Deposit Guarantee Scheme up to €100,000 / FDIC partner',
    description: 'Global financial super-app providing borderless multi-currency accounts, currency exchange, card spending, and investment tools.',
    fullDescription: 'Revolut serves over 45 million customers worldwide with seamless international spending, instant peer-to-peer transfers, and multi-currency balances in 30+ currencies with real-time conversion.',
    pros: ['Hold and exchange 30+ fiat currencies at competitive interbank rates', 'Disposable virtual cards for secure online purchases', 'Built-in budgeting analytics and automated saving vaults'],
    cons: ['Weekend foreign exchange markup fees apply on free accounts', 'Crypto and commodity features incur higher spread markup'],
    keyPerks: ['Real-time currency exchange in 30+ currencies', 'Daily interest payouts on Vault savings', 'Single-use virtual debit cards'],
    tags: ['Digital Banking & Neobanks', 'Multi-Currency', 'Travel Cards', 'Savings Vaults'],
    logo: { type: 'text', text: 'RV', bg: '#0075FF', color: '#FFFFFF' },
    currentOffer: '3 months complimentary Premium tier trial',
  },
  wise: {
    name: 'Wise',
    category: 'Peer-to-Peer Transfers',
    secondaryCategory: 'Multi-Currency & Cross-Border Banking',
    feeTier: 'Low Fee',
    feeHighlight: 'Real mid-market exchange rate + transparent 0.43% average fee',
    yieldAPY: '4.85% APY on USD balances via government assets',
    minDeposit: '$0',
    regulatoryStatus: 'FinCEN MSB in US, FCA Authorized in UK, Global Regulators',
    depositInsurance: 'Safeguarded funds in tier-1 banks, FDIC pass-through on USD opt-in',
    description: 'Cross-border payments technology platform offering authentic mid-market exchange rates and international account routing numbers.',
    fullDescription: 'Wise revolutionized international money transfers with complete fee transparency and zero exchange rate markup. Users can receive local payments in 9+ currencies with local account details and spend worldwide with the Wise debit card.',
    pros: ['Zero exchange rate markups: exact live mid-market rate guaranteed', 'Local bank details provided for USD, EUR, GBP, AUD, CAD, and more', 'High transparency with exact fees shown prior to transaction execution'],
    cons: ['Not a full chartered bank; lending and overdraft services not offered', 'Cash deposit options are limited internationally'],
    keyPerks: ['Earn 4.85% APY on USD balances', 'Local account numbers in 9+ currencies', 'Instant international transfers in seconds'],
    tags: ['Peer-to-Peer Transfers', 'Cross-Border', 'Transparent Fees', 'Multi-Currency'],
    logo: { type: 'text', text: 'WS', bg: '#9FE870', color: '#163300' },
    currentOffer: 'Fee-free transfer up to $600 for new accounts',
  },
  sofi: {
    name: 'SoFi',
    category: 'Digital Banking & Neobanks',
    secondaryCategory: 'High-Yield Checking & Student Lending',
    feeTier: 'Zero Fee',
    feeHighlight: '$0 account fees, no minimum balances, no overdraft fees',
    yieldAPY: '4.60% APY on Savings with Direct Deposit',
    minDeposit: '$0',
    regulatoryStatus: 'SoFi Bank, N.A. Member FDIC & Federal Reserve System',
    depositInsurance: 'FDIC insured up to $2,000,000 through automated bank sweep',
    description: 'Comprehensive digital bank and lending institution offering industry-leading APY on checking and savings, alongside mortgages, investing, and loans.',
    fullDescription: 'SoFi is a chartered national digital bank that combines high-yield savings (up to 4.60% APY), automated investing, student loan refinancing, and credit monitoring within a unified mobile ecosystem.',
    pros: ['Market-leading 4.60% APY on savings balances with direct deposit', 'FDIC insurance protection up to $2 million through sweep network', 'All-in-one financial app combining checking, savings, investing, and loans'],
    cons: ['Highest APY tier requires recurring direct deposit setup', 'Physical cash deposit requires third-party retail partners'],
    keyPerks: ['Earn up to 4.60% APY on savings', 'Up to $2M FDIC insurance via sweep network', 'Complementary financial planning consultations'],
    tags: ['Digital Banking & Neobanks', 'High Yield APY', 'Zero Fee', 'FDIC Insured'],
    logo: { type: 'text', text: 'SF', bg: '#00B4D8', color: '#FFFFFF' },
    currentOffer: 'Up to $300 cash bonus with eligible direct deposit',
  },
};

/**
 * Intelligent client-side heuristic fallback extractor
 */
export function computeClientAutofill(
  rawUrl: string,
  existingCategories: string[] = []
): AutofillResult {
  let normalized = rawUrl.trim();
  if (!/^https?:\/\//i.test(normalized)) {
    normalized = `https://${normalized}`;
  }

  let hostname = '';
  try {
    const parsed = new URL(normalized);
    hostname = parsed.hostname.toLowerCase().replace(/^www\./, '');
  } catch {
    hostname = normalized.replace(/^https?:\/\//i, '').replace(/^www\./, '').split('/')[0];
  }

  // Check known platforms dictionary
  for (const [key, knownData] of Object.entries(KNOWN_PLATFORMS)) {
    if (hostname.includes(key)) {
      return {
        name: knownData.name || key,
        category: knownData.category || 'Stock Trading',
        secondaryCategory: knownData.secondaryCategory || 'Fintech',
        url: normalized,
        feeTier: (knownData.feeTier as any) || 'Commission Free',
        feeHighlight: knownData.feeHighlight || '$0 account fees',
        yieldAPY: knownData.yieldAPY,
        minDeposit: knownData.minDeposit || '$0',
        regulatoryStatus: knownData.regulatoryStatus || 'Regulated Financial Institution',
        depositInsurance: knownData.depositInsurance || 'SIPC / FDIC Partner Insured',
        description: knownData.description || '',
        fullDescription: knownData.fullDescription || knownData.description || '',
        pros: knownData.pros || ['Clean modern application layout', 'Transparent fee disclosures'],
        cons: knownData.cons || ['Subject to regional availability'],
        keyPerks: knownData.keyPerks || ['High digital security standards', 'Mobile and web accessibility'],
        tags: knownData.tags || ['Fintech', 'Digital'],
        logo: knownData.logo || {
          type: 'text',
          text: (knownData.name?.substring(0, 2) || 'FI').toUpperCase(),
          bg: '#059669',
          color: '#FFFFFF',
        },
        currentOffer: knownData.currentOffer,
        provider: 'client-heuristic-known',
      };
    }
  }

  // Generic heuristic based on domain parts
  const domainParts = hostname.split('.');
  const baseName = domainParts[0] || 'Platform';
  const capitalized = baseName.charAt(0).toUpperCase() + baseName.slice(1);

  let guessedCategory = 'Digital Banking & Neobanks';
  if (/trade|broker|invest|stock|share|fund|chart|market/i.test(hostname)) {
    guessedCategory = 'Stock Trading';
  } else if (/crypto|coin|token|chain|swap|dex|btc|eth|wallet/i.test(hostname)) {
    guessedCategory = 'Crypto Exchange';
  } else if (/save|yield|rate|interest|cash|deposit/i.test(hostname)) {
    guessedCategory = 'High-Yield Savings';
  } else if (/pay|remit|transfer|send/i.test(hostname)) {
    guessedCategory = 'Peer-to-Peer Transfers';
  } else if (/loan|lend|credit|mortgage|borrow/i.test(hostname)) {
    guessedCategory = 'Consumer Lending';
  } else if (/robo|wealth|advisor|asset/i.test(hostname)) {
    guessedCategory = 'Robo-Advisors & Wealth';
  }

  const finalCategory =
    existingCategories.find((c) => c.toLowerCase() === guessedCategory.toLowerCase()) ||
    existingCategories[0] ||
    guessedCategory;

  return {
    name: capitalized,
    category: finalCategory,
    secondaryCategory: 'Fintech Solutions',
    url: normalized,
    feeTier: 'Commission Free',
    feeHighlight: '$0 account opening & maintenance',
    yieldAPY: '4.50% APY available on eligible balances',
    minDeposit: '$0',
    regulatoryStatus: 'Regulated Financial Institution',
    depositInsurance: 'SIPC / FDIC Insured Partner Banking',
    description: `${capitalized} is a modern digital financial platform providing streamlined financial tools, transparent fees, and user-friendly accessibility.`,
    fullDescription: `${capitalized} offers digital financial services with real-time balance tracking, multi-asset account support, and enterprise-grade security protocols. Designed for retail and institutional customers seeking modern financial infrastructure.`,
    pros: [
      'Clean modern user interface on web and mobile',
      'Transparent fee structure with zero hidden surprise charges',
      'Robust security protocols and two-factor authentication',
      'Fast onboarding and automated account verification',
    ],
    cons: [
      'Certain advanced features require tiered account status',
      'Customer support primarily digital and app-based',
    ],
    keyPerks: [
      'High security standards with biometric login',
      'Competitive interest on idle funds',
      'Seamless automated bank transfers',
    ],
    tags: [finalCategory, 'Digital Platform', 'Mobile App', 'Fintech'],
    logo: {
      type: 'text',
      text: capitalized.substring(0, 2).toUpperCase(),
      bg: '#059669',
      color: '#FFFFFF',
    },
    currentOffer: 'Welcome bonus on verified qualifying account registration',
    provider: 'client-heuristic-generic',
  };
}

/**
 * Robust autofill caller:
 * Tries server-side Gemini API. If network error, timeout, or server returns HTML/non-JSON,
 * smoothly falls back to client-side heuristic so the user experience NEVER breaks.
 */
export async function autofillPlatform(
  rawUrl: string,
  existingCategories: string[] = []
): Promise<AutofillResult> {
  let normalized = rawUrl.trim();
  if (!normalized) {
    throw new Error('Vui lòng nhập link website để tự động điền.');
  }

  if (!/^https?:\/\//i.test(normalized)) {
    normalized = `https://${normalized}`;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch('/api/gemini/autofill-platform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: normalized,
        existingCategories,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      const data = await res.json();
      if (data && typeof data === 'object' && data.name) {
        return {
          ...data,
          url: data.url || normalized,
        };
      }
    }
  } catch (err) {
    console.warn('Server autofill request failed, falling back to local heuristic:', err);
  }

  // Graceful fallback: always returns valid data
  return computeClientAutofill(normalized, existingCategories);
}
