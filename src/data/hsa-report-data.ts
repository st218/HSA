// HSA Investment Report - Enhanced Data Layer
// Extracted from "PSA for Hermès Bags: Decision-Grade Trust Infrastructure Memo"
// All data marked with source verification status

// =============================================================================
// KEY METRICS (Summary data used across pages)
// =============================================================================

export const keyMetrics = {
    psaMarketCap: { value: 700, source: "Take-private announcement 2020", isVerified: true },
    psaRevenue: { value: 78.9, source: "SEC 10-K FY2020", isVerified: true },
    psaGrossMargin: { value: 57.3, source: "SEC 10-K FY2020", isVerified: true },
    hsaPriceRange: { low: 149, high: 499, source: "Product tier design", isVerified: false },
    entrupyPrice: { value: 119, source: "Entrupy website", isVerified: true },
    hsaBreakEven: { low: 4000, high: 6000, source: "Model estimate", isVerified: false },
    falsificationTests: { total: 8, critical: 4 },
    fraudVectors: { total: 14 },
    productTiers: { total: 5 },
    riskRegister: { total: 10, high: 6, critical: 2 },
};

// =============================================================================
// EXECUTIVE SUMMARY
// =============================================================================

export const executiveSummary = {
    decision: "PROCEED WITH CONSTRAINTS",
    decisionDetail:
        "Run a tightly-scoped 12–18 month build with explicit kill criteria and a trust-first operating model (authentication + rating/grading + guarantee + chain-of-custody artifact), not a GMV-first marketplace.",
    keyPremise:
        "HSA can be 'the PSA of Hermès' only if it becomes the reference standard for (i) authenticity determination, and (ii) auditable, repeatable condition/originality grading that becomes legible to buyers, resellers, insurers, and marketplaces.",
    biggestRisks: [
        "Standard failure: inconsistent grading, tag decoupling, or guarantee blow-ups that collapse trust",
        "Brand/IP pressure: luxury tends to litigate more aggressively than hobby collectibles",
        "Counterfeit adaptation targeting HSA's weakest link (chain-of-custody and re-sale verification)",
    ],
    icMessage: `HSA is viable only if we treat it as a trust infrastructure company with a cryptographically bound "digital slab" and a defensible grading standard—not as a marketplace feature. PSA's success is not magic; it's the repeated execution of multi-rater grading, a tamper-evident artifact, public verification rails, and financial accountability that the market can price into transactions.

Hermès is harder than cards because bags change state (spa/repair/parts). That means HSA must introduce validity states and re-auth triggers, and its seal system must resist cloning/replay/transplant. NFC done naïvely fails; cryptographic NFC + tamper loops + backend verification is table stakes.

We proceed because (a) unit economics for trust services can be excellent (PSA scale shows this), and (b) China and global resale behavior shows escalating demand for "authenticate-first" workflows, but no cross-market Hermès grading standard exists yet.

We kill the project fast if reliability, tag security, or loss ratio fails the falsification checklist.`,
};

// =============================================================================
// DEFINITIONS & TAXONOMY
// =============================================================================

export const definitions = [
    { term: "Authentication", definition: "A determination that an item is genuine (or not) based on evidence and expert judgment; it is not 'title.' eBay explicitly distinguishes that its authenticity certificate is a 'tool' and 'does not represent title to the physical good.'", source: "eBay Authenticity Guarantee" },
    { term: "Grading", definition: "A standardized evaluation of physical state/quality (often numeric) intended to be comparable across items; PSA grades on a 1–10 scale and positions its grade as a market signal.", source: "PSA FAQ" },
    { term: "Rating", definition: "A categorical or tiered condition signal (often not as granular as a formal grade).", source: "Industry standard" },
    { term: "Certificate", definition: "A verifiable record asserting authentication and/or grade; for resilience it must be bound to an immutable identifier and ideally to evidence (photos, measurements). Entrupy certificates are hosted on Entrupy's servers and meant to be validated by entering the certificate link.", source: "Entrupy" },
    { term: "Chain-of-custody", definition: "Documented control states describing when the certifier had physical possession vs when the item is 'out of custody,' which changes what can be guaranteed.", source: "Design principle" },
    { term: "Tamper-evident", definition: "Physical design where attempts to open/alter leave evidence; PSA describes holder tamper evidence via 'frosting' and changes in plastic rigidity after sonic weld violation.", source: "PSA Security Guide" },
    { term: "Registry", definition: "A database of certified items and their attributes; PSA provides certification verification and encourages public cert checks.", source: "PSA" },
    { term: "Population report", definition: "Aggregate data describing how many items exist in each grade; PSA markets its Population Report as a core collector resource.", source: "PSA Population Report" },
    { term: "SLA", definition: "A service level agreement defining turnaround + dispute handling, essential because PSA and others explicitly warn turnaround times are estimates and can change with capacity.", source: "PSA Terms" },
    { term: "Loss ratio", definition: "For HSA, payouts + refunds + dispute costs divided by revenue or declared value; must be bounded for a viable guarantee product.", source: "Insurance industry" },
    { term: "Chargeback", definition: "Payments reversed by card networks; in trust services, chargebacks correlate with disputed authenticity/condition.", source: "Payments industry" },
    { term: "False positive", definition: "For authentication: authentic item rejected (customer pain, reputational cost).", source: "Statistical definition" },
    { term: "False negative", definition: "Counterfeit certified authentic (existential trust failure).", source: "Statistical definition" },
    { term: "Secure element", definition: "Hardware designed to store cryptographic secrets and execute secure operations.", source: "NFC security" },
    { term: "Cryptographic NFC", definition: "Systems where tags prove authenticity via cryptographic operations, not static identifiers. NXP's NTAG 424 DNA describes AES-based SUN messages and backend verification.", source: "NXP Datasheet" },
];

// =============================================================================
// PSA FINANCIALS (SEC-VERIFIED)
// =============================================================================

export const psaFinancials = [
    { metric: "Net Revenues", fy2020: 78891000, fy2019: 68449000, source: "SEC 10-K", isVerified: true, url: "https://www.sec.gov/Archives/edgar/data/1089143/000149315220016754/form10-k.htm" },
    { metric: "Cost of Revenues", fy2020: 33655000, fy2019: 28694000, source: "SEC 10-K", isVerified: true, url: "https://www.sec.gov/Archives/edgar/data/1089143/000149315220016754/form10-k.htm" },
    { metric: "Gross Profit", fy2020: 45236000, fy2019: 39755000, source: "SEC 10-K", isVerified: true, url: "https://www.sec.gov/Archives/edgar/data/1089143/000149315220016754/form10-k.htm" },
    { metric: "Gross Margin", fy2020: "57.3%", fy2019: "58.1%", source: "Calculated from SEC", isVerified: true },
    { metric: "Operating Income", fy2020: 14102000, fy2019: 12124000, source: "SEC 10-K", isVerified: true },
    { metric: "Operating Margin", fy2020: "17.9%", fy2019: "17.7%", source: "Calculated from SEC", isVerified: true },
];

export const psaSegments = [
    { segment: "Coins", netRevenue: 41599000, operatingIncome: 11995000, marginPercent: 28.8, source: "SEC 10-K" },
    { segment: "Trading Cards & Autographs", netRevenue: 33673000, operatingIncome: 9328000, marginPercent: 27.7, source: "SEC 10-K" },
];

export const psaCostDrivers = [
    { category: "Labor", description: "Primary cost; includes authenticators, graders, QC staff", isVariable: true },
    { category: "Production costs", description: "Materials, slabs, packaging", isVariable: true },
    { category: "Credit card fees", description: "Transaction processing", isVariable: true },
    { category: "Warranty expense", description: "Guarantee payouts and corrections", isVariable: true },
    { category: "Occupancy", description: "Facility rent and utilities", isVariable: false },
    { category: "Security", description: "Physical and vault security", isVariable: false },
    { category: "Insurance", description: "Liability and inventory coverage", isVariable: false },
];

// =============================================================================
// PSA TRUST MECHANICS
// =============================================================================

export const psaTrustMechanics = [
    {
        mechanic: "Multi-Rater Review",
        description: "Two or more graders must agree upon a grade before certification",
        whyItMatters: "Reduces individual bias and error; creates accountability",
        source: "PSA FAQ",
        url: "https://www.psacard.com/support/faq",
        hsaAnalog: "Two-person grading + QC adjudication",
    },
    {
        mechanic: "Financial Guarantee",
        description: "PSA will buy back or refund the difference in value if a grade is later determined incorrect",
        whyItMatters: "Converts grade into an insurable economic claim that market participants can underwrite",
        source: "PSA Financial Guarantee",
        url: "https://www.psacard.com/support/faq",
        hsaAnalog: "Capped guarantee tied to declared value with reserve pricing",
    },
    {
        mechanic: "Tamper-Evident Holder",
        description: "Case has frosting and other controls; any attempt to open damages the holder in ways described in 'PSA Security—A Buyer's Guide'",
        whyItMatters: "Creates artifact that travels with the grade; attempting to substitute different card is detectable",
        source: "PSA Security Guide",
        url: "https://www.psacard.com/services/psasecurityabuyersguide",
        hsaAnalog: "Digital Slab: NFC + tamper loop + backend verification",
    },
    {
        mechanic: "Certification Verification",
        description: "PSA runs public cert lookup; encourages buyers to verify before purchase",
        whyItMatters: "Network effect: every verification reinforces the registry's value",
        source: "PSA Cert Verification",
        url: "https://www.psacard.com/cert",
        hsaAnalog: "Public API verification rail with tap-to-verify",
    },
    {
        mechanic: "Population Report",
        description: "Public data on how many of each item exist at each grade",
        whyItMatters: "Creates scarcity transparency and pricing data layer",
        source: "PSA Population Report",
        url: "https://www.psacard.com/pop",
        hsaAnalog: "Bag census: registry of all certified bags by model/color/grade",
    },
    {
        mechanic: "Set Registry",
        description: "Collectors can compete on set completion; creates status game",
        whyItMatters: "Gamification + lock-in: switching to different grader breaks your registry position",
        source: "PSA Set Registry",
        url: "https://www.psacard.com/setregistry",
        hsaAnalog: "Future state: collector rankings for Hermès collections",
    },
];

// =============================================================================
// PSA TIMELINE (EXPANDED WITH SUCCESS/FAILURE FACTORS)
// =============================================================================

export const psaTimeline = [
    // 1980s - Foundation Era
    {
        date: "1986",
        year: 1986,
        event: "PCGS Founded - First Third-Party Grading",
        mechanism: "Professional Coin Grading Service creates slab-based grading + tamper-evident holder pattern that becomes industry standard",
        evidence: "Collectors Universe 10-K",
        successFactor: "SUCCESS: Created a verifiable artifact (the slab) that made grades trustable and portable across transactions. Buyers no longer needed to trust sellers—they could trust the slab.",
        category: "industry" as const,
    },
    {
        date: "1991",
        year: 1991,
        event: "PSA Founded for Trading Cards",
        mechanism: "Applies PCGS model to sports cards; creates 1-10 grading scale that becomes the market's price signal",
        evidence: "Collectors Universe 10-K",
        successFactor: "SUCCESS: First-mover in cards. The 1-10 scale became the 'language' of card transactions. Competitors had to explain their grades relative to PSA's.",
        category: "psa" as const,
    },
    {
        date: "1994",
        year: 1994,
        event: "BGS (Beckett) Enters Card Grading",
        mechanism: "Competition emerges with subgrades for corners, edges, centering, surface",
        evidence: "Industry history",
        successFactor: "MIXED: BGS gained share with subgrades (more detail) but PSA's simpler 1-10 became default for liquidity. Lesson: simplicity + network effects > analytical precision.",
        category: "competitor" as const,
    },
    {
        date: "1998",
        year: 1998,
        event: "PSA Launches Certification Database",
        mechanism: "Public cert verification enables instant authenticity checks; reduces slab forgery risk",
        evidence: "PSA website history",
        successFactor: "SUCCESS: Verification rail became table stakes. Could check any PSA slab before buying. Competitors had to match this or face trust discount.",
        category: "psa" as const,
    },
    {
        date: "1999",
        year: 1999,
        event: "Collectors Universe IPO",
        mechanism: "PSA parent goes public; provides capital for expansion and signals institutional credibility",
        evidence: "SEC filings",
        successFactor: "SUCCESS: Public markets validated the trust infrastructure business model. Created currency for acquisitions.",
        category: "psa" as const,
    },
    {
        date: "2001",
        year: 2001,
        event: "PSA Set Registry Launched",
        mechanism: "Formalizes collecting competition + status incentives; strengthens network effects and switching costs",
        evidence: "PSA Set Registry article",
        successFactor: "SUCCESS: Gamified collecting. Collectors now had reason to stay PSA-only (mixed registries lose ranking). Massively increased switching costs.",
        category: "psa" as const,
    },
    {
        date: "2003",
        year: 2003,
        event: "Population Reports Formalized",
        mechanism: "Aggregate data on how many items exist at each grade becomes core resource for pricing and rarity assessment",
        evidence: "PSA Population Report",
        successFactor: "SUCCESS: Population data became irreplaceable for serious collectors. Made PSA the 'census bureau' of cards—even non-PSA collectors checked PSA pop reports.",
        category: "psa" as const,
    },
    {
        date: "2007",
        year: 2007,
        event: "Multi-Tier Service Launch",
        mechanism: "Price/speed segmentation: Economy ($12, 65-day), Regular ($18, 20-day), Express ($65, 5-day)",
        evidence: "PSA price history",
        successFactor: "SUCCESS: Demand throttling via price. High-value submitters pay more for speed; volume submitters subsidize overhead. Core to margin preservation.",
        category: "psa" as const,
    },
    {
        date: "2009",
        year: 2009,
        event: "Financial Crisis Impact",
        mechanism: "Collectibles market contracts; PSA volumes decline but company survives",
        evidence: "SEC filings",
        successFactor: "MIXED: Revenue declined 15-20% but trust infrastructure proved recession-resilient. Grading becomes MORE important in downturns (buyers demand verification).",
        category: "industry" as const,
    },
    {
        date: "2016",
        year: 2016,
        event: "CGC (Comics) Acquired by Blackstone",
        mechanism: "Private equity recognizes trust infrastructure value in adjacent collectible category",
        evidence: "Industry news",
        successFactor: "SUCCESS (Industry): Validated trust infrastructure as investable thesis. CGC used similar model (slab + grade + registry) for comics.",
        category: "industry" as const,
    },
    {
        date: "2018",
        year: 2018,
        event: "Pokemon Card Boom Begins",
        mechanism: "YouTube/Instagram drives Pokemon nostalgia; PSA becomes gateway for crossover collectors",
        evidence: "Industry trends",
        successFactor: "SUCCESS: PSA was ready for demand surge. Infrastructure (graders, systems, capacity) scaled with new collector demographics.",
        category: "psa" as const,
    },
    {
        date: "FY2019",
        year: 2019,
        event: "$68.4M Revenue, 58.1% Gross Margin",
        mechanism: "Demonstrates scaled unit economics before pandemic boom",
        evidence: "Collectors Universe FY2019 10-K",
        successFactor: "SUCCESS: Proved sustainable unit economics at scale. High gross margin despite being labor-intensive (expert graders).",
        category: "psa" as const,
    },
    {
        date: "2020 Q1",
        year: 2020,
        event: "Pandemic Sports Card Boom",
        mechanism: "COVID lockdowns + stimulus checks + no live sports = massive collector surge; PSA submissions explode",
        evidence: "Industry reports",
        successFactor: "SUCCESS/STRESS: Demand 5-10x normal levels. Exposed capacity constraints but validated market. PSA backlogs reached 12+ months.",
        category: "industry" as const,
    },
    {
        date: "FY2020",
        year: 2020,
        event: "$78.9M Revenue, 57.3% Gross Margin",
        mechanism: "15.3% YoY revenue growth while maintaining margin; demonstrates trust services scale economics",
        evidence: "Collectors Universe FY2020 10-K",
        successFactor: "SUCCESS: Even with capacity constraints, margin held. Tiered pricing captured willingness-to-pay for faster turnaround.",
        category: "psa" as const,
    },
    {
        date: "Mar 2021",
        year: 2021,
        event: "PSA Suspends Standard Submissions",
        mechanism: "Backlog so severe that PSA pauses most service tiers; only Express/Super Express accepted",
        evidence: "PSA announcement",
        successFactor: "FAILURE (Short-term): Customer frustration peaked. BUT competitors (BGS, SGC) couldn't capture share—PSA liquidity premium too strong.",
        category: "psa" as const,
    },
    {
        date: "Feb 22, 2021",
        year: 2021,
        event: "Take-Private Completed ($700M)",
        mechanism: "Nat Turner-led group acquires Collectors Universe at $75.25/share",
        evidence: "Business Wire announcement",
        successFactor: "SUCCESS: Private ownership enabled aggressive capital investment in capacity without quarterly earnings pressure.",
        category: "psa" as const,
    },
    {
        date: "Dec 2, 2021",
        year: 2021,
        event: "Collectors Acquires Card Ladder",
        mechanism: "Pricing data + analytics integrated; strengthens 'grade = price' signal",
        evidence: "PSA/Collectors article",
        successFactor: "SUCCESS: Pricing rails complement grading trust. Now PSA could show 'PSA 10 sells for $X, PSA 9 sells for $Y' directly.",
        category: "psa" as const,
    },
    {
        date: "2022",
        year: 2022,
        event: "Capacity Expansion: New Facilities + Graders",
        mechanism: "Major investment in grading capacity; backlog begins to normalize",
        evidence: "Industry reports",
        successFactor: "SUCCESS: Private ownership allowed multi-year capacity buildout. Backlog dropped from 12 months to 4-6 weeks by late 2023.",
        category: "psa" as const,
    },
    {
        date: "2023",
        year: 2023,
        event: "AI/ML Grading Experiments",
        mechanism: "Testing automated visual analysis for initial triage; human graders for final determination",
        evidence: "Industry reporting",
        successFactor: "PENDING: AI may improve throughput for bulk grades but high-value items still need human expertise. Risk of diluting trust if over-automated.",
        category: "psa" as const,
    },
    {
        date: "May 16, 2024",
        year: 2024,
        event: "Collectors + eBay Partnership Closes",
        mechanism: "Distribution: embeds grading into eBay transaction flow; PSA becomes default for eBay card listings",
        evidence: "PR Newswire release",
        successFactor: "SUCCESS: Distribution moat deepens. When PSA grading is 'one click' at eBay checkout, switching costs become near-infinite.",
        category: "psa" as const,
    },
    {
        date: "2024",
        year: 2024,
        event: "SGC Gains Market Share",
        mechanism: "Competitor SGC attracts vintage collectors with 'cleaner' slabs and faster turnaround",
        evidence: "Industry forums",
        successFactor: "MIXED (for PSA): Shows market isn't winner-take-all for all segments. SGC carved niche in vintage baseball. HSA lesson: category focus can work.",
        category: "competitor" as const,
    },
];

// =============================================================================
// COMPARABLES (EXPANDED)
// =============================================================================

export const comparables = [
    {
        name: "StockX",
        focus: "Sneakers/Streetwear/Handbags",
        trustMechanism: '"Verified by StockX" - not endorsed by brands; handbags must be brand new with original packaging/accessories',
        ratingApproach: "Binary gate (authentic + new condition), not a nuanced grade",
        disputeWorkflow: "Buyer Promise with 10-day claim window; original tag must remain attached for claims",
        vulnerability: "Legal exposure when fakes slip through (Nike court case: 37 pairs found counterfeit)",
        lessonForHSA: 'If your claim is "verified authentic," adversaries (and courts) will test it. Design with conservative states.',
        legalNote: "March 4, 2025 court order: StockX liable for distributing counterfeit goods (4 pairs to Nike investigators, 33 pairs to Roy Kim)",
        url: "https://stockx.com/about/our-process",
    },
    {
        name: "GOAT",
        focus: "Sneakers",
        trustMechanism: "Products verified by variety of means including digital authentication, in-hand verification, and/or ML",
        ratingApproach: "Primarily auth/condition-as-described, not PSA-like grade; some products verified without physical examination",
        disputeWorkflow: "Standard marketplace dispute process",
        vulnerability: "Mixing non-physical verification can reduce cost but may weaken trust for high-value categories",
        lessonForHSA: "Do not dilute core claim with digital-only verification for Hermès; in-hand inspection + evidence capture required",
        url: "https://www.goat.com/verification",
    },
    {
        name: "eBay Authenticity Guarantee",
        focus: "Handbags/Watches/Jewelry/Cards",
        trustMechanism: "Explicitly independent from and not endorsed by brands; authenticators verify authenticity and that condition matches listing",
        ratingApproach: "Matching-to-listing vs publishing universal condition grade; notes situations where authenticity cannot be verified but condition can",
        disputeWorkflow: "eBay Money Back Guarantee depending on eligibility",
        vulnerability: "Marketplace-layer authentication tends to collapse into dispute process rather than becoming canonical grade standard",
        lessonForHSA: "HSA's opportunity is to be category standard independent of any one marketplace",
        url: "https://ebay.com/authenticity-guarantee/handbags",
    },
    {
        name: "Entrupy",
        focus: "Luxury Authentication (Device + AI)",
        trustMechanism: "Collects microscopic images and compares against database containing 'millions' of records from known authentic and counterfeit items",
        ratingApproach: "Auth verdict only, not condition grade",
        disputeWorkflow: "One-year financial guarantee to direct customers only; non-transferable",
        vulnerability: "Certificates not transferable; prevents standardization as widely traded consumer-facing grade signal",
        lessonForHSA: "Consider non-transferable guarantee constraints, but create transferable verification artifact",
        pricing: "$119 per Hermès authentication",
        url: "https://www.entrupy.com/hermes-pricing/",
    },
    {
        name: "Chrono24 Certified",
        focus: "Watches",
        trustMechanism: "Certified watches checked by a verified watchmaker; positioned as basis of authenticity guarantee",
        ratingApproach: "Certificate of authenticity + authenticity guarantee",
        disputeWorkflow: "Platform-backed guarantee",
        vulnerability: "Limited to watch category",
        lessonForHSA: "Third-party 'verified' can scale when routed through professionals and anchored in documented criteria",
        url: "https://www.chrono24.com/certified.htm",
    },
    {
        name: "Certilogo",
        focus: "Digital Code Verification for Brands",
        trustMechanism: "Code-based authenticity check; warns that finding a code online/photo does not guarantee authenticity—you must have the product",
        ratingApproach: "Brand-provided codes only",
        disputeWorkflow: "Brand-dependent",
        vulnerability: "Dependent on brand adoption; doesn't work for third-party verification",
        lessonForHSA: "Codes alone don't prove physical possession; HSA must combine code/tag with chain-of-custody evidence",
        url: "https://www.certilogo.com/",
    },
    {
        name: "Dewu (得物)",
        focus: "China: Sneakers/Streetwear/Luxury",
        trustMechanism: "先鉴别，后发货 (Authenticate first, then ship); vertically integrated platform with in-house auth",
        ratingApproach: "Platform-internal; not a cross-market standard",
        disputeWorkflow: "Platform-specific; claims over 40M authenticated items (self-reported)",
        vulnerability: "Platform-native authentication doesn't become independent standard; no cross-market portability",
        lessonForHSA: "China proves demand for auth-first workflows, but HSA must be platform-independent to avoid Dewu's limitation",
        url: "https://apps.apple.com/tw/app/得物-得到美好事物/id1012871328",
    },
];

// =============================================================================
// COMPARISON MATRIX
// =============================================================================

export const comparisonMatrix = [
    {
        dimension: "Object type + environment",
        psa: "Cards encapsulated; lab grading; slab is long-lived",
        stockx: "Marketplace intermediary; focuses on 'new' condition for handbags",
        hsa: "Hermès bags; lab inspection + evidence capture + seal kit",
    },
    {
        dimension: "Authentication claim",
        psa: "PSA guarantees grading/auth under its standards; buyback/refund if issue later",
        stockx: "'Verified by StockX' (not brand-endorsed); Buyer Promise dispute process",
        hsa: "'Independent expert opinion' with explicit validity states; conservative 'inconclusive'",
    },
    {
        dimension: "Rating/grade signal",
        psa: "Numeric 1–10 grading standard; qualifiers/no-grade taxonomy",
        stockx: "Mostly binary gate: authentic + new condition",
        hsa: "Dual signal: authenticity verdict + condition grade + originality state",
    },
    {
        dimension: "Trust artifact",
        psa: "PSA holder (tamper-evident), cert number, public cert verification",
        stockx: "StockX tag + platform records; claim requires tag attached",
        hsa: "'Digital Slab': tamper-evident loop + cryptographic NFC; public cert + evidence",
    },
    {
        dimension: "Liability/guarantee scope",
        psa: "Buyback/refund difference in value under stated conditions",
        stockx: "Buyer Promise (refund/replace if incorrect); strict timing/conditions",
        hsa: "Capped guarantee tied to declared value; reserve pricing; structured dispute flow",
    },
    {
        dimension: "Network effects source",
        psa: "Registry + population report + marketplace quoting in PSA grades",
        stockx: "Two-sided marketplace liquidity + pricing graph",
        hsa: "Cross-market API rail + dealer adoption + 'bag census' + standard grade language",
    },
];

// =============================================================================
// PSA SERVICE TIERS
// =============================================================================

export const psaServiceTiers = [
    { tier: "Super Express", turnaround: "1-2 business days", price: "$300+", declaredValueMax: "$100,000+" },
    { tier: "Express", turnaround: "5 business days", price: "$150", declaredValueMax: "$10,000" },
    { tier: "Regular", turnaround: "20 business days", price: "$50–75", declaredValueMax: "$2,500" },
    { tier: "Economy", turnaround: "65+ business days", price: "$25–35", declaredValueMax: "$499" },
    { tier: "Bulk", turnaround: "Varies", price: "$14–19", declaredValueMax: "$199" },
];

// =============================================================================
// HSA PRODUCT & SERVICE TIERS
// =============================================================================

export const productTiers = [
    {
        tier: "Authentication Only",
        price: "$149",
        turnaround: "3–5 business days",
        valueRange: "Up to $5,000",
        includes: ["Authenticity verdict", "Photo evidence package", "Digital certificate", "Basic NFC tag (optional)"],
        guaranteeCap: "$500",
    },
    {
        tier: "Full Certification",
        price: "$299",
        turnaround: "5–7 business days",
        valueRange: "$5,000–15,000",
        includes: ["Authentication + Condition grade", "37-point inspection", "Digital Slab kit", "1-year validity", "Photo + video evidence"],
        guaranteeCap: "$2,500",
    },
    {
        tier: "Premium Certification",
        price: "$499",
        turnaround: "7–10 business days",
        valueRange: "$15,000–50,000",
        includes: ["Authentication + Condition + Originality", "Senior grader review", "Extended evidence package", "2-year validity", "Priority support"],
        guaranteeCap: "$5,000",
    },
    {
        tier: "Vault Custody",
        price: "$99/month + $499 intake",
        turnaround: "10–14 business days",
        valueRange: "$50,000+",
        includes: ["Full certification", "Climate-controlled storage", "Insurance coordination", "On-demand verification API", "Fractionalization-ready"],
        guaranteeCap: "$25,000",
    },
    {
        tier: "Re-Auth / State Update",
        price: "$99–149",
        turnaround: "3–5 business days",
        valueRange: "Post-spa/repair",
        includes: ["Updated validity state", "New evidence package", "Certificate update", "Tag re-binding if needed"],
        guaranteeCap: "Based on original tier",
    },
];

// =============================================================================
// UNIT ECONOMICS
// =============================================================================

export const unitEconomicsSummary = {
    targetGrossMargin: 60,
    targetBlendedASP: 250,
    targetCOGSPerUnit: { low: 90, high: 115 },
    breakevenVolume: { low: 4000, high: 6000 },
    scaledMargin: 65,
    totalLaborMinutes: { low: 35, high: 55 },
    tier2Cogs: { low: 85, high: 110 },
    tier3Cogs: { low: 105, high: 135 },
};

export const unitEconomicsWorkflow = [
    { step: "Intake & Logging", costRange: "$8–12", description: "Receipt, chain-of-custody, photo logging", minutesLow: 5, minutesHigh: 8, role: "Operations" },
    { step: "Primary Authentication", costRange: "$25–40", description: "Expert review, 37-point inspection, evidence capture", minutesLow: 15, minutesHigh: 25, role: "Senior Authenticator", notes: "Highest skill requirement" },
    { step: "Second Grader Review", costRange: "$15–25", description: "Independent verification, calibration check", minutesLow: 8, minutesHigh: 12, role: "Authenticator" },
    { step: "QC & Adjudication", costRange: "$8–15", description: "Final review, grade alignment, exception handling", minutesLow: 5, minutesHigh: 10, role: "QC Lead", notes: "Triggered only on disagreement" },
    { step: "Digital Slab Kit", costRange: "$12–18", description: "NFC tag, tamper loop, seal materials, packaging", minutesLow: 3, minutesHigh: 5, role: "Operations" },
    { step: "Certificate & Evidence", costRange: "$5–8", description: "Digital certificate generation, evidence package upload", minutesLow: 2, minutesHigh: 3, role: "Automated" },
    { step: "Fulfillment", costRange: "$8–12", description: "Secure packaging, shipping, tracking", minutesLow: 5, minutesHigh: 8, role: "Fulfillment" },
    { step: "Reserve Allocation", costRange: "$15–25", description: "Guarantee reserve per unit (varies by declared value)", minutesLow: 0, minutesHigh: 0, role: "Finance", notes: "Priced into fee" },
];

// =============================================================================
// NFC & DIGITAL SLAB SECURITY
// =============================================================================

export const nfcSecurityRequirements = {
    whyNaiveNfcFails: "Static UIDs or codes can be cloned by reading the original tag; replay attacks work if verification doesn't check freshness; transplant attacks work if the seal can be moved without detection.",
    requiredControls: [
        { control: "NTAG 424 DNA or equivalent", description: "AES-128 based SUN (Secure Unique NFC) messages with per-tap counter" },
        { control: "Backend verification", description: "Every tap generates unique encrypted payload verified server-side" },
        { control: "Tamper-evident loop", description: "Tag physically bound to bag handle/hardware in way that damages on removal" },
        { control: "Counter monotonicity", description: "Backend tracks tap counter; rejecting reused or out-of-sequence values" },
        { control: "Challenge-response freshness", description: "Optional: Backend sends challenge, tag signs response" },
    ],
    attackSurface: [
        { attack: "Clone", mitigation: "Cryptographic NFC (secrets never leave chip); AES-128 SUN", residualRisk: "Low (hardware attack requires chip decapping)" },
        { attack: "Replay", mitigation: "Per-tap counter + backend state tracking", residualRisk: "Low (backend rejects duplicate/old counters)" },
        { attack: "Transplant", mitigation: "Tamper loop physically bonds tag to bag; removal leaves evidence", residualRisk: "Medium (skilled attacker may re-seal; requires physical inspection)" },
        { attack: "Man-in-the-middle", mitigation: "TLS to backend; app certificate pinning", residualRisk: "Low if implemented correctly" },
        { attack: "Backend compromise", mitigation: "Key separation; HSM for master secrets; audit logging", residualRisk: "Medium (operational security dependent)" },
    ],
};

export const nfcThreatModel = [
    { vector: "UID cloning", attackerCapability: "Commodity NFC reader", control: "NTAG 424 DNA with AES-128 SUN", residualRisk: "Negligible" },
    { vector: "Message replay", attackerCapability: "Captured NFC tap data", control: "Per-tap counter + backend validation", residualRisk: "Negligible" },
    { vector: "Tag transplant", attackerCapability: "Physical access, basic tools", control: "Tamper-evident loop seal", residualRisk: "Low–Medium (depends on seal quality)" },
    { vector: "Tag destruction", attackerCapability: "Physical damage", control: "Certificate validity state update on seal break", residualRisk: "Low (cert shows 'seal broken')" },
    { vector: "Counterfeit tag", attackerCapability: "Hardware fabrication", control: "Backend key whitelist; only enrolled tags accepted", residualRisk: "Low" },
];

export const digitalSlabOptions = [
    { option: "Avery Dennison Circus Tamper Loop", pros: "Established vendor, customizable", cons: "Requires integration work", url: "https://rfid.averydennison.com/en/home/product-finder/circus-tamper-loop.html" },
    { option: "Custom NFC + Zip-tie combo", pros: "Lower cost, simple", cons: "Easier to defeat; aesthetic issues", url: null },
    { option: "Integrated handle wrap", pros: "Premium aesthetic, harder to defeat", cons: "Requires custom manufacturing", url: null },
];

// =============================================================================
// VALIDITY STATES & RE-AUTH
// =============================================================================

export const validityStates = [
    { state: "Valid & Sealed", description: "Tag verified, seal intact, within validity window", trustLevel: "Full", guaranteeActive: true },
    { state: "Valid & Opened", description: "Seal broken/removed, tag still verifies, item not re-inspected", trustLevel: "Reduced", guaranteeActive: false },
    { state: "Re-Auth Required", description: "Trigger event (spa, sale, time) requires re-inspection", trustLevel: "Suspended", guaranteeActive: false },
    { state: "Expired", description: "Past validity window without renewal", trustLevel: "Historical reference only", guaranteeActive: false },
    { state: "Revoked", description: "Certificate invalidated due to fraud, dispute, or item destruction", trustLevel: "None", guaranteeActive: false },
];

export const reAuthTriggers = [
    { trigger: "Time-based", condition: "1–2 years from last certification", action: "Optional re-auth for renewed validity" },
    { trigger: "Spa/Repair", condition: "Hermès or third-party modification", action: "Mandatory re-auth; originality state may change" },
    { trigger: "Ownership transfer", condition: "Verified sale through partner marketplace", action: "Optional expedited re-auth (reduced fee)" },
    { trigger: "Seal break", condition: "Tag tamper indicator triggered", action: "Certificate moves to 'Opened' state; re-auth required for full guarantee" },
    { trigger: "Dispute", condition: "Buyer challenge or insurance claim", action: "Certificate frozen pending review" },
];

// =============================================================================
// LEGAL & IP POSTURE
// =============================================================================

export const legalPosture = {
    trademarkRisk: {
        principle: "Nominative fair use permits truthful factual statements about product identity",
        caution: "Avoid any implication of brand endorsement or affiliation; use 'Hermès' as adjective referencing product, not as suggestion HSA has Hermès backing",
        precedent: "StockX uses 'Verified by StockX' explicitly stating not brand-endorsed",
    },
    claimLanguage: {
        do: ["'In the opinion of HSA's authenticators, this item is genuine'", "'Condition grade represents HSA's assessment under stated criteria'", "'Certificate valid while seal intact and within validity window'"],
        doNot: ["'100% guaranteed authentic' (absolutist; court-testable)", "'Hermès-certified' (implies brand endorsement)", "'Lifetime guarantee' (unbounded liability)"],
    },
    guaranteeStructure: {
        principle: "Cap liability, define scope, require conditions",
        elements: [
            "Declared value ceiling for guarantee payouts",
            "Conditions: seal intact, certificate in valid state, claim filed within window",
            "Reserve pricing: explicit premium for higher declared values",
            "Non-transferable guarantee (like Entrupy) or transferable with re-auth requirement",
        ],
    },
};

// =============================================================================
// RISK REGISTER
// =============================================================================

export const riskRegister = [
    {
        id: 1,
        category: "Business Model",
        risk: "Volume too low for unit economics",
        severity: "High",
        mitigation: "B2B dealer channel; API partners; geographic focus (UAE, China)",
        earlyWarning: "Monthly submission volumes below 300 by month 6",
        killCriterion: "<200/month sustained for 2 quarters",
    },
    {
        id: 2,
        category: "Trust",
        risk: "High-profile auth failure (false negative)",
        severity: "Critical",
        mitigation: "Dual-grader system; seeded testing; conservative 'inconclusive' state",
        earlyWarning: "Any counterfeit passes initial review",
        killCriterion: "Counterfeit reaches customer with HSA certification",
    },
    {
        id: 3,
        category: "Trust",
        risk: "Grading inconsistency undermines standard value",
        severity: "High",
        mitigation: "Calibration sets; inter-rater reliability audits; public methodology",
        earlyWarning: "Inter-rater agreement <80% within ±1 notch",
        killCriterion: "Sustained disagreement >25% on same items",
    },
    {
        id: 4,
        category: "Security",
        risk: "Tag clone/replay/transplant attack succeeds",
        severity: "Critical",
        mitigation: "NTAG 424 DNA; per-tap counter; tamper loop; backend validation",
        earlyWarning: "Successful attack in controlled testing",
        killCriterion: "Field attack yields valid verification",
    },
    {
        id: 5,
        category: "Legal",
        risk: "Brand cease-and-desist or litigation",
        severity: "High",
        mitigation: "Nominative fair use positioning; no brand endorsement claims; legal review of all materials",
        earlyWarning: "Brand legal contact or demand letter",
        killCriterion: "Injunction or settlement requiring operational changes",
    },
    {
        id: 6,
        category: "Financial",
        risk: "Guarantee losses exceed reserve",
        severity: "High",
        mitigation: "Declared value caps; reserve pricing; reinsurance exploration",
        earlyWarning: "Loss ratio >0.5% of declared value in any quarter",
        killCriterion: "Loss ratio >1.0% sustained; reserve depleted",
    },
    {
        id: 7,
        category: "Operations",
        risk: "Authenticator capacity bottleneck",
        severity: "Medium",
        mitigation: "Training pipeline; contract grader network; demand throttling via tiered pricing",
        earlyWarning: "Turnaround SLA breached >10% of orders",
        killCriterion: "Sustained >30-day backlogs with no capacity relief",
    },
    {
        id: 8,
        category: "Market",
        risk: "Dealer adoption fails to materialize",
        severity: "High",
        mitigation: "Early LOIs; pilot with 3-5 marquee dealers; success-based pricing",
        earlyWarning: "<3 active dealer partners by month 9",
        killCriterion: "No dealers listing HSA grades after 12 months",
    },
    {
        id: 9,
        category: "Technology",
        risk: "NFC vendor discontinuity or supply issues",
        severity: "Medium",
        mitigation: "Multi-source tags; inventory buffer; alternative seal designs",
        earlyWarning: "Lead time >8 weeks for tag orders",
        killCriterion: "Inability to source tags for >60 days",
    },
    {
        id: 10,
        category: "Competitive",
        risk: "Entrupy or platform player enters Hermès grading",
        severity: "Medium",
        mitigation: "First-mover on grading (not just auth); network effects; dealer lock-in",
        earlyWarning: "Entrupy announces condition grading or Hermès partnership",
        killCriterion: "Competitor achieves >5,000 Hermès certs with grade signal before HSA reaches scale",
    },
];

// =============================================================================
// FRAUD VECTORS
// =============================================================================

export const fraudVectors = [
    { vector: "Counterfeit submission", description: "Counterfeiter submits fake bag hoping to get HSA cert", control: "Multi-grader review; microscopy; stitching analysis; database of known fakes", residualRisk: "Low (with proper training)" },
    { vector: "Photo swap", description: "Submit good bag photos, ship different bag", control: "In-person inspection only; no remote-only certs for initial auth", residualRisk: "Negligible" },
    { vector: "Tag theft", description: "Remove tag from authentic bag, attach to fake", control: "Tamper loop detection; tag counter + history check", residualRisk: "Low–Medium" },
    { vector: "Cert forgery", description: "Create fake HSA certificate documents", control: "Digital-only certs with QR/NFC verification; no paper-only acceptance", residualRisk: "Low" },
    { vector: "Insider fraud", description: "Authenticator collusion to pass fakes", control: "Dual-grader requirement; rotation; seeded tests; audit trail", residualRisk: "Medium (requires operational discipline)" },
    { vector: "Claim inflation", description: "Declare low value for fee, claim high value later", control: "Guarantee capped to declared value; evidence photos", residualRisk: "Low" },
    { vector: "Post-cert modification", description: "Alter bag after certification (swap parts, etc.)", control: "Seal break invalidates full guarantee; re-auth required", residualRisk: "Low–Medium" },
    { vector: "Return fraud", description: "Buy certified bag, return different bag", control: "Partner integration: verify cert before accepting return", residualRisk: "Depends on partner controls" },
    { vector: "Spa laundering", description: "Use spa services to 'refresh' fake components", control: "Originality state tracking; spa triggers re-auth", residualRisk: "Medium" },
    { vector: "Multiple-cert attack", description: "Get multiple certs for same bag to sell twice", control: "UID registry; one active cert per physical tag", residualRisk: "Negligible" },
    { vector: "Backdoor cert", description: "Issue cert without full inspection (bribe, error)", control: "Audit requirements; photo + video evidence; random QC", residualRisk: "Medium (operational)" },
    { vector: "Dispute abuse", description: "False claims to trigger guarantee payouts", control: "Physical reinspection required for claims; fraud database", residualRisk: "Low–Medium" },
    { vector: "Sybil attack on population", description: "Submit same bag repeatedly to inflate pop stats", control: "UID deduplication; photo hash matching", residualRisk: "Negligible" },
    { vector: "Social engineering", description: "Convince staff to bypass controls", control: "Training; no override without documented exception + senior approval", residualRisk: "Medium" },
];

// =============================================================================
// FALSIFICATION TESTS (KILL CRITERIA)
// =============================================================================

export const falsificationTests = [
    {
        test: "Inter-rater reliability",
        threshold: "≥85% agreement within ±1 notch on same 50-bag blind set",
        failCondition: "<75% agreement",
        testWindow: "45 days",
        isCritical: true,
    },
    {
        test: "Seeded counterfeit",
        threshold: "0% false negatives on 10 seeded fakes",
        failCondition: "Any fake passes as authentic",
        testWindow: "30 days",
        isCritical: true,
    },
    {
        test: "Tag attack (clone/replay/transplant)",
        threshold: "0 successful attacks in controlled testing",
        failCondition: "Any attack yields valid verification response",
        testWindow: "30 days",
        isCritical: true,
    },
    {
        test: "Certificate↔bag binding",
        threshold: "≥99.5% correct pairing in audit",
        failCondition: "Systematic mismatch or misattribution",
        testWindow: "14 days",
        isCritical: true,
    },
    {
        test: "Dispute SLA",
        threshold: "≥90% disputes resolved within 10 business days",
        failCondition: "Median resolution >15 days in any month",
        testWindow: "60 days",
        isCritical: false,
    },
    {
        test: "Dealer adoption (LOI)",
        threshold: "≥6 dealer LOIs indicating intent to list with HSA grades",
        failCondition: "<3 LOIs by month 6",
        testWindow: "60 days",
        isCritical: false,
    },
    {
        test: "Price premium or liquidity",
        threshold: "Measurable conversion lift (≥10%) or price premium (≥5%) for HSA-certified listings",
        failCondition: "No detectable effect in controlled A/B",
        testWindow: "60 days",
        isCritical: false,
    },
    {
        test: "Loss ratio",
        threshold: "≤0.5% of aggregate declared value",
        failCondition: ">1.0% sustained for 2 months",
        testWindow: "90 days",
        isCritical: true,
    },
];

// =============================================================================
// ROLLOUT TIMELINE
// =============================================================================

export const rolloutTimeline = [
    {
        phase: "Phase 1: MVP & Pilot",
        timeframe: "Months 1–4",
        objectives: [
            "Finalize grading rubric with 5 pilot authenticators",
            "Complete NFC/seal integration with NTAG 424 DNA",
            "Launch internal calibration testing (50 bags)",
            "Sign 3 pilot dealer partners",
        ],
        deliverables: ["Grading rubric v1.0", "Seal kit v1.0", "Internal calibration report", "3 signed LOIs"],
    },
    {
        phase: "Phase 2: Falsification Testing",
        timeframe: "Months 4–6",
        objectives: [
            "Execute all kill criteria tests",
            "Seeded counterfeit testing (10 fakes)",
            "Tag attack penetration testing",
            "Inter-rater reliability audit",
        ],
        deliverables: ["Kill criteria dashboard (pass/fail)", "Penetration test report", "Reliability audit"],
    },
    {
        phase: "Phase 3: Soft Launch",
        timeframe: "Months 6–9",
        objectives: [
            "Process first 500 paid certifications",
            "Integrate with 2 marketplace partners (API)",
            "Publish public verification portal",
            "Begin dealer grade visibility pilot",
        ],
        deliverables: ["500 live certificates", "API documentation", "Public cert lookup", "Dealer dashboard"],
    },
    {
        phase: "Phase 4: Scale & Optimize",
        timeframe: "Months 9–14",
        objectives: [
            "Reach 2,000 certifications",
            "Expand to second geography (UAE or HK)",
            "Add vault custody offering",
            "Begin insurance partnership discussions",
        ],
        deliverables: ["2,000 certificates", "Geographic expansion", "Custody product", "Insurance LOI"],
    },
    {
        phase: "Phase 5: Network Effects",
        timeframe: "Months 14–18",
        objectives: [
            "Population report for Hermès (bag census)",
            "Price correlation studies with HSA grades",
            "Formalize multi-category expansion path",
            "Evaluate exit scenarios",
        ],
        deliverables: ["Population report v1.0", "Pricing data analysis", "Category expansion plan", "Exit readiness assessment"],
    },
];

// =============================================================================
// PRIMARY SOURCES
// =============================================================================

export const primarySources = [
    { name: "Collectors Universe FY2020 10-K", category: "SEC Filings", url: "https://www.sec.gov/Archives/edgar/data/1089143/000149315220016754/form10-k.htm", accessDate: "2024" },
    { name: "Collectors Universe Q1 FY2021 10-Q", category: "SEC Filings", url: "https://www.sec.gov/Archives/edgar/data/1089143/000149315220020321/form10-q.htm", accessDate: "2024" },
    { name: "PSA Grading Services Pricing", category: "PSA", url: "https://www.psacard.com/services/tradingcardgrading", accessDate: "2024" },
    { name: "PSA FAQ (Guarantee, Multi-Rater)", category: "PSA", url: "https://www.psacard.com/support/faq", accessDate: "2024" },
    { name: "PSA Security—A Buyer's Guide", category: "PSA", url: "https://www.psacard.com/services/psasecurityabuyersguide", accessDate: "2024" },
    { name: "PSA Population Report", category: "PSA", url: "https://www.psacard.com/pop", accessDate: "2024" },
    { name: "StockX Our Process", category: "StockX", url: "https://stockx.com/about/our-process", accessDate: "2024" },
    { name: "StockX Buyer Promise", category: "StockX", url: "https://stockx.com/help/articles/StockX-Buyer-Promise", accessDate: "2024" },
    { name: "Nike v StockX Court Order (Mar 2025)", category: "Legal", url: "https://www.casemine.com/judgement/us/67c924d52016e547bca7c749", accessDate: "2025" },
    { name: "GOAT Verification", category: "GOAT", url: "https://www.goat.com/verification", accessDate: "2024" },
    { name: "eBay Authenticity Guarantee (Handbags)", category: "eBay", url: "https://www.ebay.com/help/buying/buying-authenticity-guarantee/buying-authenticity-guarantee?id=5470", accessDate: "2024" },
    { name: "Entrupy Hermès Pricing", category: "Entrupy", url: "https://www.entrupy.com/hermes-pricing/", accessDate: "2024" },
    { name: "Entrupy Financial Guarantee", category: "Entrupy", url: "https://www.entrupy.com/guarantee/luxury/", accessDate: "2024" },
    { name: "Chrono24 Certified", category: "Chrono24", url: "https://www.chrono24.com/certified.htm", accessDate: "2024" },
    { name: "Certilogo", category: "Certilogo", url: "https://www.certilogo.com/", accessDate: "2024" },
    { name: "NXP NTAG 424 DNA Datasheet", category: "Technical", url: "https://www.nxp.com/docs/en/data-sheet/NT4H2421Gx.pdf", accessDate: "2024" },
    { name: "Avery Dennison Circus Tamper Loop", category: "Technical", url: "https://rfid.averydennison.com/en/home/product-finder/circus-tamper-loop.html", accessDate: "2024" },
    { name: "Tencent × BCG China Luxury Market Report 2024", category: "Market Research", url: "https://bbx-pic.gtimg.com/bbx/pictures/2024/48_20240906150809_485299.pdf", accessDate: "2024" },
];

// =============================================================================
// FALSIFIABLE HYPOTHESES (8 detailed research hypotheses)
// =============================================================================

export const falsifiableHypotheses = [
    {
        id: "H1",
        hypothesis: "Hermès dealers will pay for a condition grade, not just authenticity",
        sample: "n=20 dealers",
        test: "Pricing survey + signed LOIs",
        passThreshold: "≥8 commit to list HSA grade in listings",
        failThreshold: "<4 commitments",
        windowDays: 60,
        category: "Market Validation",
    },
    {
        id: "H2",
        hypothesis: "HSA grade increases liquidity/price for listings",
        sample: "n=200 listings A/B",
        test: "Blind marketplace test with partner",
        passThreshold: "≥10% higher conversion OR ≥5% higher price",
        failThreshold: "No measurable effect",
        windowDays: 60,
        category: "Market Validation",
    },
    {
        id: "H3",
        hypothesis: "Inter-rater reliability is achievable at PSA-like levels",
        sample: "n=120 graded bags (balanced across condition tiers)",
        test: "Multi-rater agreement after protocol training",
        passThreshold: "≥85% agreement within ±1 notch, ≥70% exact match",
        failThreshold: "<75% within ±1 notch",
        windowDays: 45,
        category: "Operational",
    },
    {
        id: "H4",
        hypothesis: "HSA can keep false negatives below existential thresholds",
        sample: "n=40 seeded counterfeits/superfakes (legally sourced)",
        test: "Red team counterfeit insertion",
        passThreshold: "0 pass as authentic, ≤5% inconclusive",
        failThreshold: "≥1 counterfeit passes as authentic",
        windowDays: 30,
        category: "Security",
    },
    {
        id: "H5",
        hypothesis: "Secure tag system resists practical attacks",
        sample: "n=30 tags",
        test: "Clone/replay/transplant attack attempts",
        passThreshold: "0 successful validations from attacks",
        failThreshold: "≥1 attack yields 'valid' verification",
        windowDays: 30,
        category: "Security",
    },
    {
        id: "H6",
        hypothesis: "Dispute process can be fast enough to preserve trust",
        sample: "≥30 real disputes or simulated",
        test: "Resolution time measurement",
        passThreshold: "Median resolution ≤10 business days",
        failThreshold: "Median >15 business days",
        windowDays: 60,
        category: "Operational",
    },
    {
        id: "H7",
        hypothesis: "'Inconclusive' state reduces loss ratio without killing adoption",
        sample: "n=300 submissions",
        test: "Loss ratio + customer satisfaction tracking",
        passThreshold: "Loss ratio ≤0.5% of declared value AND NPS ≥30",
        failThreshold: "Loss ratio >1% OR NPS <20",
        windowDays: 90,
        category: "Financial",
    },
    {
        id: "H8",
        hypothesis: "API verification rail will be used by platforms if SLA is reliable",
        sample: "n=3 platform partners",
        test: "Verification calls/day + uptime monitoring",
        passThreshold: "≥10k calls/month AND ≥99.9% uptime for 30 days",
        failThreshold: "<5k calls/month OR <99% uptime",
        windowDays: 60,
        category: "Adoption",
    },
];

// =============================================================================
// ADVERSARIAL THREAT MODEL (14 fraud vectors)
// =============================================================================

export const adversarialThreatModel = [
    {
        vector: "Component swapping (hardware/lock/feet)",
        controls: "Originality grading + part-level inspection; photo corpus",
        detection: "Macro + weight + hardware markings comparison",
        residualRisk: "Medium",
        notes: "High-quality swaps can be difficult to detect",
    },
    {
        vector: "Hardware replacement (after auth)",
        controls: "Seal kit on attachment points; reauth trigger after seal break",
        detection: "NFC status + physical loop/tamper evidence",
        residualRisk: "Medium",
        notes: "Requires tamper-evident seals on key points",
    },
    {
        vector: "Stamp manipulation",
        controls: "Multi-angle macro imaging; stamp logic rules",
        detection: "Expert review + anomaly flags",
        residualRisk: "Medium-High",
        notes: "Stamps can be re-embossed or transferred",
    },
    {
        vector: "Receipt/box/dustbag laundering",
        controls: "Do not treat accessories as authenticity proof; optional accessory grading",
        detection: "Accessory authenticity graded separately from bag",
        residualRisk: "Medium",
        notes: "Accessories should never be sole evidence",
    },
    {
        vector: "Certificate substitution",
        controls: "Cryptographically bind cert ↔ tag ↔ evidence set; public verification",
        detection: "Verification endpoint mismatch blocks fraud",
        residualRisk: "Low",
        notes: "Requires correct crypto + backend implementation",
    },
    {
        vector: "Tag cloning",
        controls: "Cryptographic NFC (tap-unique message)",
        detection: "Backend challenge verification rejects clones",
        residualRisk: "Low",
        notes: "Only if keys are protected correctly",
    },
    {
        vector: "Tag transplant ('donor bag')",
        controls: "Tamper-evident loop + destructive attachment; 'seal broken' state",
        detection: "Tamper loop open state + automatic invalidation",
        residualRisk: "Medium",
        notes: "Physical design must be well-executed",
    },
    {
        vector: "Adhesive replacement",
        controls: "Avoid adhesive-only as primary security; use mechanical seal",
        detection: "Seal design is mechanical + tamper loop",
        residualRisk: "Low-Medium",
        notes: "Adhesive alone is insufficient security",
    },
    {
        vector: "Repair/spa obfuscation",
        controls: "Originality state taxonomy; mandatory disclosure; reauth required",
        detection: "Evidence comparison at reauth",
        residualRisk: "Medium",
        notes: "Spa treatments can hide or introduce changes",
    },
    {
        vector: "Odor concealment (smoke/mold)",
        controls: "Standard sensory check + UV + documentation",
        detection: "Condition sub-score + grader notes",
        residualRisk: "Medium",
        notes: "Odor can affect value significantly",
    },
    {
        vector: "Leather re-dye / recolor",
        controls: "UV + microscopy where needed; rubric flags anomalies",
        detection: "Condition/originality classification",
        residualRisk: "Medium-High",
        notes: "Professional re-dyes can be undetectable",
    },
    {
        vector: "Return fraud (swap after authenticity)",
        controls: "Seal required for refunds; custody logs mandatory",
        detection: "Tag status + evidence at intake comparison",
        residualRisk: "Medium",
        notes: "Return window must require seal intact",
    },
    {
        vector: "Shipping intercept / swap in transit",
        controls: "Tamper-evident inbound packaging; chain-of-custody logging",
        detection: "Package photo + weight variance detection",
        residualRisk: "Medium",
        notes: "Secure logistics partnerships critical",
    },
    {
        vector: "Counterfeit designed to pass HSA rubric",
        controls: "Red-team updates; frequent reference library updates",
        detection: "Drift monitoring; known-fake regression tests",
        residualRisk: "Always non-zero",
        notes: "Continuous adaptation required",
    },
];

// =============================================================================
// PSA SUCCESS FACTORS (Micro + Macro Mechanisms)
// =============================================================================

export const psaSuccessFactors = {
    micro: [
        {
            factor: "Trust Formation Mechanics",
            description: "PSA's trust proposition bundles: (i) a standard, (ii) process controls, and (iii) financial responsibility. Multi-rater review ('two or more graders must agree') and economic accountability (buyback/refund policy) create market acceptance.",
            whyItWorks: "Makes 'PSA grade' a tradable signal; gives counterparties common language for sight-unseen trade",
            hsaImplication: "HSA must replicate the bundle, not just the label",
        },
        {
            factor: "Network Effects Loop",
            description: "More submissions → richer population data + more registry competition → greater perceived legitimacy → more marketplace quoting in PSA terms → more submissions",
            whyItWorks: "Self-reinforcing cycle where value increases with participation",
            hsaImplication: "HSA needs 'bag census' and dealer adoption to trigger network effects",
        },
        {
            factor: "Pricing as Demand Throttle",
            description: "Higher fees for faster turnaround enable margin preservation and capacity management. PSA's public tier menu makes strategy legible to customers.",
            whyItWorks: "Continuous repricing matches volume to capacity; high-value submissions subsidize infrastructure",
            hsaImplication: "HSA must implement similar tier/turnaround pricing from day one",
        },
        {
            factor: "Workflow/QA Auditability",
            description: "PSA makes verifiable claims: cert verification via app/QR, reholder workflow with authenticity checks, anti-counterfeit measures on slab itself",
            whyItWorks: "External verification possible; reduces reliance on pure reputation",
            hsaImplication: "HSA needs public verification endpoints and auditable processes",
        },
    ],
    macro: [
        {
            factor: "Market Structure Shift",
            description: "As transactions become remote and cross-border, third-party standards become prerequisite to liquidity. Collectors Universe explicitly links grading demand to transactional behavior.",
            whyItWorks: "Authentication becomes infrastructure, not optional service",
            hsaImplication: "Hermès resale following same pattern; HSA can be the infrastructure layer",
        },
        {
            factor: "Fraud Psychology & Coordination",
            description: "A credible standard solves coordination: tells both parties what evidence counts and how disputes resolve. Where disputes are economically meaningful, guarantee/process matter as much as initial auth.",
            whyItWorks: "Reduces transaction friction; makes pricing more efficient",
            hsaImplication: "HSA dispute process is as important as authentication accuracy",
        },
        {
            factor: "Independence from Manufacturers",
            description: "PSA operates without manufacturer endorsement; eBay explicitly states its services are not brand-endorsed. 'Not brand-endorsed' can position as independence, not antagonism.",
            whyItWorks: "Avoids brand approval complexity; positions as neutral third party",
            hsaImplication: "HSA must adopt similar independent positioning language",
        },
    ],
    failureModes: [
        {
            mode: "Backlog Trust Destruction",
            description: "Record backlogs (documented in SEC filings) can destroy trust if they incentivize corner-cutting",
            mitigation: "Pricing/service mix control; never sacrifice quality for volume",
        },
        {
            mode: "Training Drift / Fatigue",
            description: "Grading remains labor-intensive; exposed to training drift, fatigue, and incentive distortion",
            mitigation: "Multi-grader rule; deeper auditability; regular calibration sessions",
        },
    ],
};

// =============================================================================
// TRANSFER MATRIX (PSA → HSA: What Transfers vs What Must Change)
// =============================================================================

export const transferMatrix = [
    {
        psaMechanic: "Numeric grade as price language",
        hsaAnalog: "Hermès-condition grade + originality grade",
        implementationPlan: "Publish rubric; train graders; require multi-rater agreement; build 'grade notes' fields",
        riskConstraint: "Condition subjectivity → disputes; requires reliability audits (must be measured)",
        transfers: true,
    },
    {
        psaMechanic: "Multi-grader review",
        hsaAnalog: "Two-person grading + QC adjudication",
        implementationPlan: "Mirror PSA claim: at least two graders must agree; third-party audit sample weekly",
        riskConstraint: "Labor cost ↑; must prevent 'rubber stamping' (audit)",
        transfers: true,
    },
    {
        psaMechanic: "Financial guarantee + correction",
        hsaAnalog: "HSA financial guarantee tied to declared value",
        implementationPlan: "Offer capped guarantee; reserve policy; explicit dispute workflow",
        riskConstraint: "Tail risk severe (bag values high); guarantee must be priced and limited",
        transfers: true,
    },
    {
        psaMechanic: "Tamper-evident trust artifact",
        hsaAnalog: "'Digital slab' seal kit + cryptographic NFC",
        implementationPlan: "Use cryptographic NFC + tamper-evident attachment; bind to photo evidence",
        riskConstraint: "Tag decoupling/transplant attack; UX constraints for luxury buyers",
        transfers: true,
    },
    {
        psaMechanic: "Registry + cert verification",
        hsaAnalog: "Public certificate verification + evidence hash",
        implementationPlan: "Cert lookup + NFC challenge–response verification endpoint",
        riskConstraint: "Privacy + data exposure tradeoffs; must avoid leaking serials useful to counterfeiters",
        transfers: true,
    },
    {
        psaMechanic: "Population report",
        hsaAnalog: "HSA 'bag census'",
        implementationPlan: "Aggregate submissions by model/leather/year/region; anonymize appropriately",
        riskConstraint: "Data quality; brand pressure; requires careful disclosure policies",
        transfers: true,
    },
    {
        psaMechanic: "Physical 'slab' encapsulation",
        hsaAnalog: "Not applicable—bags cannot be slabbed",
        implementationPlan: "Replace with minimal, non-damaging seal + digital record",
        riskConstraint: "Must achieve equivalent tamper-evidence without social/practical downsides",
        transfers: false,
    },
    {
        psaMechanic: "Static item state",
        hsaAnalog: "Dynamic state model with validity windows",
        implementationPlan: "Define validity states; re-auth triggers for spa/repair/seal damage",
        riskConstraint: "Bags change state—more complex than cards; requires state machine design",
        transfers: false,
    },
];

// =============================================================================
// CHINA MARKET CONTEXT
// =============================================================================

export const chinaMarketContext = {
    overview: {
        totalSpend: "5,720亿元 (~$80B USD)",
        year: 2024,
        growth: "+4% YoY",
        source: "Tencent Marketing Insight × BCG 2024 Report",
        keyInsight: "Categories with stronger value-preservation attributes (珠宝、皮具) leading growth",
    },
    greyMarket: {
        size: "~$57B annually",
        source: "Reuters reporting (2024)",
        dynamics: "Price gaps drive grey market; platforms like DeWu offer discounts vs official retail",
        authenticityDemand: "High consumer authenticity concerns drive authenticate-first behaviors",
    },
    dewuModel: {
        name: "得物 (Dewu/Poizon)",
        slogan: "先鉴别，后发货",
        english: "Authenticate first, then ship",
        claimedVolume: "超4000万件 items authenticated (self-reported)",
        process: "Multi-step authentication checks before shipment",
        hsaLesson: "Demonstrates massive demand for process-based trust in China",
    },
    bagModification: {
        phenomenon: "旧包改造 (old bag modification)",
        priceRange: "~¥1,000–3,000 per modification",
        services: "Re-dyeing, hardware replacement, repair, refurbishment",
        risks: ["一眼假 outcomes (obvious fakes)", "Trademark issues", "Invisible modifications affecting value"],
        source: "Xinhua / Beijing Business Daily",
        hsaImplication: "HSA must grade originality state and define re-auth triggers for modified bags",
    },
    strategicImplications: [
        "China is largest potential market but also highest counterfeit risk",
        "Authenticate-first workflows already normalized (Dewu proves demand)",
        "No cross-market Hermès grading standard exists yet—HSA opportunity",
        "Bag modification culture requires originality taxonomy",
        "Grey market dynamics create arbitrage incentives for counterfeits",
    ],
};

// =============================================================================
// EXIT MILESTONES (Exit-Ready Criteria)
// =============================================================================

export const exitMilestones = {
    yearlyTrajectory: [
        {
            year: 1,
            focus: "Foundation",
            goals: [
                "Establish rubric + reliability with documented inter-rater agreement",
                "Sign 2–3 dealer partners with grade-in-listing commitments",
                "Ship Tier 1–2 services",
                "Demonstrate low dispute/loss ratio (<0.5%)",
            ],
        },
        {
            year: 2,
            focus: "Scale & Security",
            goals: [
                "Ship Tier 3 (secure seal kit) once attack-tested",
                "Integrate verification API with 2–3 resale platforms",
                "Publish first 'bag census' aggregates",
                "Achieve stable throughput (>500 bags/month)",
            ],
        },
        {
            year: 3,
            focus: "Market Position",
            goals: [
                "Expand to broader luxury categories (selective) OR deepen Hermès moat",
                "Build richer authenticity corpus",
                "Begin vault-custody tier at scale",
                "Explore insurance partnerships",
            ],
        },
        {
            year: "4-5",
            focus: "Standard & Distribution",
            goals: [
                "Become de facto standard in Hermès resale listings for top dealers",
                "Increase attach rate to verification API",
                "Establish insurance partnerships with stable loss ratio",
                "Platform integrations where HSA verification = default checkout behavior",
            ],
        },
    ],
    exitPathways: [
        {
            type: "Strategic Acquisition",
            description: "Large resale platforms seeking independent standard; luxury-adjacent trust infrastructure players",
            examples: ["eBay/similar marketplace", "Entrupy-like authentication incumbents", "Luxury conglomerate strategic arm"],
            likelihood: "High",
            requirements: ["Documented reliability", "Platform integrations", "Controlled loss ratio"],
        },
        {
            type: "Roll-Up",
            description: "Combine with repair/spa networks if chain-of-custody and independence can be preserved",
            examples: ["The Leather Spa", "Luxury spa networks", "High-end repair specialists"],
            likelihood: "Medium",
            requirements: ["Independence must be preserved", "No conflicts of interest", "Audit trail intact"],
        },
        {
            type: "IPO",
            description: "Only viable if HSA becomes multi-category standard with stable recurring revenue",
            examples: ["Follow Collectors Universe precedent"],
            likelihood: "Low (requires 5+ years)",
            requirements: ["Multi-category expansion", "Stable loss ratio at scale", "High-margin recurring rails (API + custody)"],
        },
    ],
    exitReadyChecklist: [
        "Documented inter-rater reliability (≥85% within ±1 notch)",
        "Controlled loss ratio (<0.5% of declared value)",
        "Audited tag security with no known exploits",
        "Platform integrations where HSA = default",
        "At least 6 dealer partners using grade in listings",
        "Public verification rail with >99.9% uptime",
        "Recurring revenue from API + custody services",
    ],
};

// =============================================================================
// QUARTERLY KPIs (Trust-Centric Operational Metrics)
// =============================================================================

export const quarterlyKPIs = [
    {
        category: "Throughput",
        metrics: [
            { name: "Bags graded per day per authenticator", target: "≥6" },
            { name: "Total bags certified per month", target: "Growth quarter-over-quarter" },
            { name: "Capacity utilization", target: ">70%" },
        ],
    },
    {
        category: "Quality & Trust",
        metrics: [
            { name: "Turnaround time distribution", target: "90% within SLA" },
            { name: "Rework rate", target: "<3%" },
            { name: "Appeal rate", target: "<5%" },
            { name: "Inter-rater agreement", target: "≥85% within ±1 notch" },
        ],
    },
    {
        category: "Financial Health",
        metrics: [
            { name: "Dispute rate", target: "<1%" },
            { name: "Reserve utilization", target: "<50% of allocated" },
            { name: "Loss ratio (payouts/declared value)", target: "<0.5%" },
            { name: "Gross margin", target: ">55%" },
        ],
    },
    {
        category: "Adoption & Network",
        metrics: [
            { name: "Partner adoption (listings using HSA grade)", target: "Growth MoM" },
            { name: "API verification calls", target: ">10k/month by Month 6" },
            { name: "Percent verifications 'valid & sealed'", target: ">90%" },
            { name: "New dealer sign-ups", target: "≥2 per quarter" },
        ],
    },
];

// =============================================================================
// LEGAL CLAIMS GUIDELINES
// =============================================================================

export const legalClaimsGuidelines = {
    corePosture: {
        statement: "Independent third-party opinion; not affiliated with or endorsed by Hermès",
        benchmarks: [
            "eBay: 'Authenticity Guarantee is not affiliated with or endorsed by any of the brands sold on eBay'",
            "StockX: 'Verified by StockX' and 'not endorsed by any brands'",
        ],
    },
    claimsSeparation: [
        { claim: "Authentication opinion at time of inspection", scope: "Point-in-time; evidence-based" },
        { claim: "Condition/originality grade at time of inspection", scope: "Based on rubric; subjective elements disclosed" },
        { claim: "Seal validity state", scope: "In-custody vs out-of-custody; time-bounded" },
        { claim: "Guarantee scope", scope: "Who is covered, for how long, what events void it" },
    ],
    doList: [
        "Use structured, testable language: 'HSA Certified Authentic (in-hand, multi-review, evidence archived)'",
        "Prominently display 'independent opinion, not brand-endorsed' in all verification UIs",
        "Provide clear consumer remedy + SLA (refund/repurchase mechanics, timelines)",
        "Document all evidence and process steps for legal defensibility",
        "Use 'inconclusive' state when appropriate—conservative is safer",
    ],
    dontList: [
        "NEVER use 'Hermès-certified' or any suggestion of partnership/endorsement",
        "AVOID unqualified '100% authentic' claims—courts/plaintiffs test such language",
        "NEVER imply brand approval or affiliation",
        "AVOID claims that cannot be defended with documented evidence",
        "NEVER guarantee items beyond custody window without re-verification",
    ],
    legalContext: [
        {
            case: "Nike v. StockX",
            relevance: "Court found StockX liable for distributing counterfeit goods (37 pairs); '100% Verified Authentic' language was at issue",
            lesson: "Verification claims can be court-tested; conservative language essential",
        },
        {
            case: "Chanel v. WGACA",
            relevance: "Brands pursue false advertising and trademark claims against resellers",
            lesson: "Luxury brands litigate more aggressively than hobby collectibles; assume Hermès will test boundaries",
        },
    ],
};

// =============================================================================
// BOTTOM-UP TIME MODEL (Per-Bag Cost Breakdown)
// =============================================================================

export const bottomUpTimeModel = {
    totalMinutes: { low: 135, high: 165 },
    note: "Plus adjudication tail (~15% of cases)",
    steps: [
        { step: "Intake + chain-of-custody logging", minutesLow: 10, minutesHigh: 12, role: "Ops", notes: "Barcode, weigh, photo of packaging" },
        { step: "Standardized photography (macro + full)", minutesLow: 18, minutesHigh: 25, role: "Tech", notes: "Critical for disputes; 30+ angle protocol" },
        { step: "Authenticity exam (primary)", minutesLow: 30, minutesHigh: 40, role: "Authenticator", notes: "Stamp/hardware/material logic; highest skill requirement" },
        { step: "Authenticity exam (secondary)", minutesLow: 20, minutesHigh: 28, role: "Authenticator", notes: "Independent second look; different grader required" },
        { step: "Condition grading + sub-score entry", minutesLow: 20, minutesHigh: 28, role: "Senior Grader", notes: "Rubric-based; 10+ condition dimensions" },
        { step: "Adjudication (if disagreement)", minutesLow: 0, minutesHigh: 20, role: "Lead", notes: "Triggered only on disagreement (~15% of cases)" },
        { step: "Final QC + cert issuance", minutesLow: 8, minutesHigh: 12, role: "QC", notes: "Formatting, sanity check, cert generation" },
        { step: "Packaging / return", minutesLow: 8, minutesHigh: 12, role: "Ops", notes: "Secure packaging, seal application, shipping prep" },
    ],
    costAssumptions: {
        authenticatorRate: { low: 40, high: 70, unit: "$/hr", note: "Fully loaded; geography-sensitive" },
        opsQcRate: { low: 22, high: 35, unit: "$/hr", note: "Fully loaded" },
        facilityAllocation: { low: 25, high: 60, unit: "$/bag", note: "Rent, security, insurance; volume-sensitive" },
        disputeReserve: { low: 10, high: 40, unit: "$/bag", note: "Based on expected loss ratio; must be calibrated" },
        materials: { low: 5, high: 15, unit: "$/bag", note: "Packaging, labels (no seal)" },
        sealKit: { low: 10, high: 35, unit: "$/bag", note: "NFC tag + tamper loop + assembly" },
    },
    cogsEstimates: {
        tier2: { low: 166, high: 220, description: "A+G (no seal)" },
        tier3: { low: 190, high: 320, description: "A+G+S (with seal kit)" },
    },
    pricingForMargin: [
        { cogs: 220, targetMargin: 60, requiredPrice: 550 },
        { cogs: 270, targetMargin: 60, requiredPrice: 675 },
        { cogs: 320, targetMargin: 60, requiredPrice: 800 },
    ],
    breakEvenAnalysis: {
        fixedCostsRange: { low: 150000, high: 350000, unit: "$/month", note: "Rent, security, management, tooling, software, compliance" },
        contributionMargin: 350,
        contributionNote: "Price $650 – COGS $300",
        breakEvenBags: { low: 430, high: 1000, unit: "bags/month" },
    },
};
