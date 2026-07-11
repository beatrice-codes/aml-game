window.__COMPLIANCE_GRID_CONTENT__ = {
  "chapters": [
    {
      "chapter_key": "foundations",
      "briefing": {
        "title": "Foundations: AML Basics for Every Employee",
        "description": "Before anything else, everyone at a payments company should know why AML/CFT rules exist and the handful of terms that show up everywhere — CDD, EDD, UBO, PEP, AMLCO. This chapter covers the basics using real merchant-onboarding examples.",
        "objectives": [
          "Explain what AML/CFT is for and why a risk-based approach means not every merchant gets identical checks",
          "Define CDD, EDD, UBO and PEP in plain language, using merchant ownership examples",
          "Know the correct first step when something looks wrong: raise it with the AMLCO, not MOKAS"
        ],
        "article_range": "Covers core AML/CFT concepts and terminology (Art. 2, 19, 26, 37, 42, 46, 65)"
      },
      "questions": [
        {
          "id": "foundations-q1",
          "difficulty": "easy",
          "mechanic": "mcq",
          "scenario": "",
          "task_prompt": "What does AML/CFT stand for, and what's its core purpose when onboarding a merchant?",
          "options": [
            { "label": "Anti-Money Laundering / Countering the Financing of Terrorism — stopping illegal money from moving through legitimate businesses", "correct": true },
            { "label": "Automated Merchant Ledger / Card Fraud Tracking — a fraud-reporting standard", "correct": false },
            { "label": "Account Maintenance License / Compliance Framework Tool — an internal IT system", "correct": false },
            { "label": "Advanced Merchant Lookup / Credit File Tracker — a background-check vendor", "correct": false }
          ],
          "article_citation": "Company AML Policy",
          "correct_feedback": "Correct. AML/CFT rules exist to stop illegal money from being disguised as legitimate business activity — including through merchant payment accounts.",
          "incorrect_feedback": "Not quite. AML/CFT stands for Anti-Money Laundering / Countering the Financing of Terrorism — rules designed to stop illegal money from moving through legitimate businesses.",
          "followup_question": {
            "task_prompt": "What does the 'AML' in AML/CFT stand for?",
            "options": [
              { "label": "Anti-Money Laundering", "correct": true },
              { "label": "Automated Merchant Ledger", "correct": false },
              { "label": "Account Maintenance License", "correct": false }
            ],
            "article_citation": "Company AML Policy"
          }
        },
        {
          "id": "foundations-q2",
          "difficulty": "easy",
          "mechanic": "mcq",
          "scenario": "",
          "task_prompt": "What is Customer Due Diligence (CDD) in the context of onboarding a merchant?",
          "options": [
            { "label": "The baseline identity, ownership and business checks completed for every merchant before onboarding", "correct": true },
            { "label": "A once-a-year audit performed only on merchants that raise a red flag", "correct": false },
            { "label": "A marketing questionnaire used by the Sales team", "correct": false },
            { "label": "A fee charged to merchants for faster onboarding", "correct": false }
          ],
          "article_citation": "Art. 26",
          "correct_feedback": "Correct. Standard CDD is the baseline set of checks — who the merchant is, who owns it, and what it does — completed for every merchant before onboarding.",
          "incorrect_feedback": "Not quite. CDD is the baseline identity, ownership and business checks completed for every merchant before onboarding — not an annual audit, a sales tool, or a fee.",
          "followup_question": {
            "task_prompt": "Is CDD completed for every merchant, or only the ones that look risky?",
            "options": [
              { "label": "Every merchant", "correct": true },
              { "label": "Only risky ones", "correct": false }
            ],
            "article_citation": "Art. 26"
          }
        },
        {
          "id": "foundations-q3",
          "difficulty": "easy",
          "mechanic": "passflag",
          "scenario": "A new Underwriting analyst suggests applying the exact same checks to every merchant, regardless of size, industry or ownership complexity, to keep onboarding simple.",
          "task_prompt": "Based on the details below, would you flag this approach as inconsistent with the risk-based approach, or let it pass as a reasonable simplification?",
          "options": [
            { "label": "Let it pass", "correct": false },
            { "label": "Flag as inconsistent", "correct": true }
          ],
          "article_citation": "Art. 19",
          "correct_feedback": "Correct to flag. The risk-based approach requires calibrating checks to each merchant's actual risk — treating every merchant identically ignores that principle, under-checking high-risk merchants and over-checking low-risk ones.",
          "incorrect_feedback": "Not quite — this should be flagged. AML controls must be proportionate to risk; applying identical checks to every merchant regardless of risk doesn't meet that standard.",
          "followup_question": {
            "task_prompt": "Should a low-risk merchant and a high-risk merchant go through identical due diligence?",
            "options": [
              { "label": "No — checks should scale with risk", "correct": true },
              { "label": "Yes — always identical", "correct": false }
            ],
            "article_citation": "Art. 19"
          }
        },
        {
          "id": "foundations-q4",
          "difficulty": "easy",
          "mechanic": "mcq",
          "scenario": "A shareholder owns 30% of a merchant's shares.",
          "task_prompt": "What do we call this shareholder?",
          "options": [
            { "label": "UBO (Ultimate Beneficial Owner)", "correct": true },
            { "label": "Merchant of Record", "correct": false },
            { "label": "AMLCO", "correct": false },
            { "label": "Nominee Director", "correct": false }
          ],
          "article_citation": "Art. 2",
          "correct_feedback": "Correct. Anyone owning or controlling 25% or more of a merchant's shares is its UBO and must be identified and screened.",
          "incorrect_feedback": "Not quite. A shareholder at or above the 25% mark is called a UBO — Ultimate Beneficial Owner.",
          "followup_question": {
            "task_prompt": "What ownership threshold generally makes someone a UBO?",
            "options": [
              { "label": "25% or more", "correct": true },
              { "label": "50% or more", "correct": false },
              { "label": "5% or more", "correct": false }
            ],
            "article_citation": "Art. 2"
          }
        },
        {
          "id": "foundations-q5",
          "difficulty": "medium",
          "mechanic": "mcq",
          "scenario": "A merchant is scored 'High risk' during onboarding.",
          "task_prompt": "Which checks does this merchant need to complete?",
          "options": [
            { "label": "Standard CDD plus Enhanced Due Diligence (EDD)", "correct": true },
            { "label": "Standard CDD only", "correct": false },
            { "label": "No formal checks — just a quick phone call", "correct": false },
            { "label": "EDD only, skipping CDD", "correct": false }
          ],
          "article_citation": "Art. 42",
          "correct_feedback": "Correct. High risk merchants must complete Standard CDD and, on top of that, Enhanced Due Diligence (EDD) — EDD never replaces CDD, it adds to it.",
          "incorrect_feedback": "Not quite. High risk merchants need both — Standard CDD plus Enhanced Due Diligence layered on top, not one instead of the other.",
          "followup_question": {
            "task_prompt": "Does EDD replace CDD, or add to it?",
            "options": [
              { "label": "Adds to it", "correct": true },
              { "label": "Replaces it", "correct": false }
            ],
            "article_citation": "Art. 42"
          }
        },
        {
          "id": "foundations-q6",
          "difficulty": "easy",
          "mechanic": "mcq",
          "scenario": "",
          "task_prompt": "What is a PEP (Politically Exposed Person)?",
          "options": [
            { "label": "Someone who holds, or recently held, a prominent public function — plus their immediate family and close associates", "correct": true },
            { "label": "Any government employee at any level", "correct": false },
            { "label": "A merchant that accepts government contracts", "correct": false },
            { "label": "A UBO who lives outside Cyprus", "correct": false }
          ],
          "article_citation": "Art. 46",
          "correct_feedback": "Correct. PEP status covers people in prominent public roles (like ministers, MPs or senior judges), plus their immediate family and known close associates — not every public-sector employee.",
          "incorrect_feedback": "Not quite. A PEP is someone holding, or having recently held, a prominent public function, plus their immediate family and close associates — junior public employees don't count.",
          "followup_question": {
            "task_prompt": "Does PEP status also cover a PEP's spouse and children?",
            "options": [
              { "label": "Yes", "correct": true },
              { "label": "No, only the PEP themself", "correct": false }
            ],
            "article_citation": "Art. 46"
          }
        },
        {
          "id": "foundations-q7",
          "difficulty": "medium",
          "mechanic": "mcq",
          "scenario": "",
          "task_prompt": "What is the AMLCO's role at the company?",
          "options": [
            { "label": "The person appointed to run AML/CFT compliance — the first point of contact for any internal suspicion", "correct": true },
            { "label": "An external auditor who visits once a year", "correct": false },
            { "label": "A job title used only in the Sales team", "correct": false },
            { "label": "The person who signs every merchant contract", "correct": false }
          ],
          "article_citation": "Company AML Policy",
          "correct_feedback": "Correct. The AMLCO (Anti-Money Laundering Compliance Officer) runs AML/CFT compliance internally and is the first person staff should raise a concern with.",
          "incorrect_feedback": "Not quite. The AMLCO is the internal Anti-Money Laundering Compliance Officer — staff's first point of contact for any AML concern, not an external auditor or a contract signer.",
          "followup_question": {
            "task_prompt": "Is the AMLCO an internal role or an external auditor?",
            "options": [
              { "label": "Internal", "correct": true },
              { "label": "External", "correct": false }
            ],
            "article_citation": "Company AML Policy"
          }
        },
        {
          "id": "foundations-q8",
          "difficulty": "easy",
          "mechanic": "mcq",
          "scenario": "An Underwriting analyst spots something unusual on a merchant account and isn't sure who to tell first.",
          "task_prompt": "Who should the analyst raise the concern with first?",
          "options": [
            { "label": "The AMLCO", "correct": true },
            { "label": "MOKAS, directly", "correct": false },
            { "label": "The merchant, to ask for an explanation", "correct": false },
            { "label": "No one — just note it and move on", "correct": false }
          ],
          "article_citation": "Art. 65",
          "correct_feedback": "Correct. Staff always raise concerns with the AMLCO first. The AMLCO investigates and only files a formal report with MOKAS — Cyprus's Financial Intelligence Unit — if it's genuinely warranted.",
          "incorrect_feedback": "Not quite. MOKAS is not who staff report to directly — that's the AMLCO. MOKAS only receives a formal report from the AMLCO once an investigation confirms it's warranted.",
          "followup_question": {
            "task_prompt": "Is MOKAS the direct staff reporting line, or an external body the AMLCO reports to when warranted?",
            "options": [
              { "label": "An external body the AMLCO reports to when warranted", "correct": true },
              { "label": "The direct staff reporting line", "correct": false }
            ],
            "article_citation": "Art. 66"
          }
        },
        {
          "id": "foundations-q9",
          "difficulty": "medium",
          "mechanic": "nodegrid",
          "scenario": "Three merchants are being triaged for their overall AML risk tier.",
          "task_prompt": "Sort each merchant profile into its correct risk tier.",
          "options": [],
          "nodes": [
            { "label": "Domestic online bookstore — single owner, audited accounts, straightforward ownership", "correctTier": "low" },
            { "label": "Regional software merchant with one corporate shareholder in the same country, otherwise simple structure", "correctTier": "medium" },
            { "label": "Merchant with an untraceable multi-layer offshore ownership chain and no verifiable trading history", "correctTier": "high" }
          ],
          "article_citation": "Art. 19",
          "correct_feedback": "Right. Simple, transparent, verifiable merchants sit at low risk; a single traceable corporate layer nudges risk to medium; opaque, untraceable ownership pushes a merchant to high risk.",
          "incorrect_feedback": "Look again at ownership transparency and verifiability — untraceable offshore layers raise risk, while simple, verifiable ownership keeps it low.",
          "followup_question": {
            "task_prompt": "Which factor alone tends to push a merchant toward a higher risk tier?",
            "options": [
              { "label": "An untraceable ownership chain", "correct": true },
              { "label": "A single domestic owner", "correct": false }
            ],
            "article_citation": "Art. 19"
          }
        },
        {
          "id": "foundations-q10",
          "difficulty": "hard",
          "mechanic": "mcq",
          "scenario": "A prospective merchant is registered offshore, has no employees, no office, and no product or service anyone can verify — just a mailing address.",
          "task_prompt": "What is this a classic sign of, and what must happen?",
          "options": [
            { "label": "A shell company — it must be refused", "correct": true },
            { "label": "A start-up — approve with standard CDD only", "correct": false },
            { "label": "A high-net-worth merchant — approve with EDD", "correct": false },
            { "label": "A data-entry error — request corrected paperwork", "correct": false }
          ],
          "article_citation": "Art. 37",
          "correct_feedback": "Correct. A legal entity with no real physical presence or genuine business activity beyond a mailing address is a shell company, and a confirmed shell company must be refused, not onboarded.",
          "incorrect_feedback": "Not quite. No verifiable staff, office or activity beyond a mailing address is the classic definition of a shell company — and a confirmed shell company must be refused.",
          "followup_question": {
            "task_prompt": "What's missing from a shell company?",
            "options": [
              { "label": "Genuine physical presence or business activity", "correct": true },
              { "label": "A working email address", "correct": false }
            ],
            "article_citation": "Art. 37"
          }
        }
      ]
    },
    {
      "chapter_key": "sow",
      "briefing": {
        "title": "The Wealth Trail: Source of Wealth",
        "description": "Every merchant relationship has to rest on money whose origin can survive scrutiny. This chapter covers when Source of Wealth checks are mandatory during merchant onboarding and monitoring, when they're properly exempted, and what documentation actually proves where a UBO's wealth came from — knowledge every team touching a merchant account needs, not just Compliance.",
        "objectives": [
          "Identify the specific merchant facts — incorporation age, financial losses, PEP status, trust structures, high-risk geography — that independently trigger mandatory SOW verification",
          "Recognize the three situations where SOW is properly exempted, and tell Source of Wealth apart from Source of Funds",
          "Match a UBO's declared origin of wealth (salary, business sale, inheritance, and others) to the supporting documentation that actually proves it"
        ],
        "article_range": "Covers Source of Wealth requirements — Company SOW Policy and related Directive articles on PEPs/EDD (Art. 42, Art. 46)"
      },
      "questions": [
        {
          "id": "sow-q1",
          "difficulty": "easy",
          "mechanic": "checklist",
          "scenario": "PixelCart Retail Ltd, an online merchandise merchant, applied for a payment processing account 7 months after incorporation. It has no Audited Financial Statements yet. One of its two shareholders is a regional government minister.",
          "task_prompt": "Select every fact below that, on its own, is a genuine trigger requiring SOW verification for this merchant.",
          "options": [
            { "label": "The merchant was incorporated less than 1 year ago with no Audited Financial Statements", "correct": true },
            { "label": "A shareholder is identified as a PEP", "correct": true },
            { "label": "The merchant's P&L shows a net loss", "correct": false },
            { "label": "A Trust Deed appears in the ownership structure", "correct": false },
            { "label": "The merchant is incorporated in a High-Risk country", "correct": false },
            { "label": "Declared target markets are more than 30% High-Risk countries", "correct": false }
          ],
          "article_citation": "Company SOW Policy; Art. 46",
          "correct_feedback": "Correct. Recent incorporation without Audited Financial Statements and a PEP among the shareholders are each independent SOW triggers — either one alone would require SOW verification, and here both are present.",
          "incorrect_feedback": "Not quite. Only two facts here are genuine SOW triggers: the sub-1-year incorporation with no Audited Financial Statements, and the PEP shareholder. The other statements describe real triggers too, but nothing in this scenario supports them.",
          "followup_question": {
            "task_prompt": "Is a merchant that is less than 1 year old with no Audited Financial Statements, on its own, enough to require SOW verification?",
            "options": [
              { "label": "Yes", "correct": true },
              { "label": "No, it also needs a second trigger", "correct": false }
            ],
            "article_citation": "Company SOW Policy"
          }
        },
        {
          "id": "sow-q2",
          "difficulty": "easy",
          "mechanic": "passflag",
          "scenario": "Northbridge Payments PLC is a merchant applying for onboarding. It is listed on a recognized, regulated stock exchange and trades under public disclosure rules.",
          "task_prompt": "Based on this fact alone, is SOW verification required for this merchant?",
          "options": [
            { "label": "SOW Required", "correct": false },
            { "label": "SOW Not Required", "correct": true }
          ],
          "article_citation": "Company SOW Policy",
          "correct_feedback": "Correct — merchants publicly listed on a recognized stock exchange are exempt from SOW verification, since listing already carries public disclosure obligations around ownership and finances.",
          "incorrect_feedback": "Not quite — public listing on a recognized stock exchange is one of the specific SOW exemptions. Listing already comes with disclosure obligations, so a separate SOW review isn't required on that basis alone.",
          "followup_question": {
            "task_prompt": "Which of these merchants is exempt from SOW purely due to its exchange listing?",
            "options": [
              { "label": "A merchant listed on a recognized, regulated stock exchange", "correct": true },
              { "label": "A merchant that merely says it plans to go public next year", "correct": false }
            ],
            "article_citation": "Company SOW Policy"
          }
        },
        {
          "id": "sow-q3",
          "difficulty": "easy",
          "mechanic": "mcq",
          "scenario": "",
          "task_prompt": "Which statement correctly distinguishes Source of Wealth (SOW) from Source of Funds (SOF)?",
          "options": [
            { "label": "SOW explains how the UBO built their overall wealth over time; SOF explains where the money for one specific transaction came from", "correct": true },
            { "label": "SOW and SOF are two names for the same check, used interchangeably", "correct": false },
            { "label": "SOW only applies to individuals; SOF only applies to companies", "correct": false },
            { "label": "SOF explains overall lifetime wealth; SOW explains a single payment's origin", "correct": false }
          ],
          "article_citation": "Company SOW Policy",
          "correct_feedback": "Correct. Source of Wealth looks at the UBO's overall economic history — how their total wealth and assets were built up — while Source of Funds is narrower and transaction-specific: where the money for this particular payment came from.",
          "incorrect_feedback": "Not quite. SOW and SOF are related but distinct: SOW covers how the UBO accumulated their overall wealth over time, while SOF is about the origin of funds for one specific transaction. They are not interchangeable and the scopes are not reversed.",
          "followup_question": {
            "task_prompt": "Which of these questions is a Source of Funds question rather than a Source of Wealth question?",
            "options": [
              { "label": "Where did the €40,000 in this specific incoming payment come from?", "correct": true },
              { "label": "How did the UBO build their total net worth over the last 15 years?", "correct": false }
            ],
            "article_citation": "Company SOW Policy"
          }
        },
        {
          "id": "sow-q4",
          "difficulty": "easy",
          "mechanic": "passflag",
          "scenario": "Anchor Freight Solutions is onboarding as a merchant. Its ownership structure includes a Trust Deed holding a 40% stake on behalf of a family trust.",
          "task_prompt": "Based on this fact alone, is SOW verification required?",
          "options": [
            { "label": "SOW Required", "correct": true },
            { "label": "SOW Not Required", "correct": false }
          ],
          "article_citation": "Company SOW Policy",
          "correct_feedback": "Correct — a Trust or Trust Deed identified anywhere in the ownership structure is a standalone trigger that makes SOW verification mandatory, regardless of any other facts about the merchant.",
          "incorrect_feedback": "Not quite — this should be flagged as SOW required. A Trust Deed within the ownership structure is, on its own, one of the mandatory SOW triggers.",
          "followup_question": {
            "task_prompt": "Does a Trust Deed in the ownership structure trigger SOW even if every other fact about the merchant looks low-risk?",
            "options": [
              { "label": "Yes", "correct": true },
              { "label": "No", "correct": false }
            ],
            "article_citation": "Company SOW Policy"
          }
        },
        {
          "id": "sow-q5",
          "difficulty": "medium",
          "mechanic": "checklist",
          "scenario": "A UBO's declared Source of Wealth is 'proceeds from selling my previous company two years ago.' The Underwriting analyst is assembling supporting documentation.",
          "task_prompt": "Select all documents below that would properly support this specific SOW claim.",
          "options": [
            { "label": "The sale agreement for the company", "correct": true },
            { "label": "Proof that the sale proceeds were actually received", "correct": true },
            { "label": "Recent payslips", "correct": false },
            { "label": "A shareholder certificate", "correct": false },
            { "label": "A probate or inheritance document", "correct": false },
            { "label": "A loan agreement", "correct": false }
          ],
          "article_citation": "Company SOW Policy",
          "correct_feedback": "Correct. A company sale is evidenced by the sale agreement itself plus proof that the proceeds were actually paid out — together they show both the transaction and that the money genuinely reached the UBO.",
          "incorrect_feedback": "Not quite. For a company sale, the two documents that matter are the sale agreement and proof the proceeds were received. Payslips, a shareholder certificate, probate documents, and a loan agreement each evidence a different origin of wealth, not a company sale.",
          "followup_question": {
            "task_prompt": "Which single document is most essential to prove a UBO actually received the proceeds of a company sale?",
            "options": [
              { "label": "Proof of receipt of the sale proceeds", "correct": true },
              { "label": "The UBO's passport copy", "correct": false }
            ],
            "article_citation": "Company SOW Policy"
          }
        },
        {
          "id": "sow-q6",
          "difficulty": "medium",
          "mechanic": "checklist",
          "scenario": "A UBO states their Source of Wealth is an inheritance received from a deceased relative three years ago.",
          "task_prompt": "Select all documents below that would properly support this specific SOW claim.",
          "options": [
            { "label": "Probate or inheritance documents", "correct": true },
            { "label": "A tax clearance certificate related to the inheritance", "correct": true },
            { "label": "An employer letter confirming salary", "correct": false },
            { "label": "A broker confirmation", "correct": false },
            { "label": "A dividend payment confirmation", "correct": false },
            { "label": "A donor letter explaining the gift", "correct": false }
          ],
          "article_citation": "Company SOW Policy",
          "correct_feedback": "Correct. Inheritance is evidenced by the probate/inheritance documentation itself, together with a tax clearance certificate confirming the transfer was settled with the tax authorities.",
          "incorrect_feedback": "Not quite. Inheritance needs probate/inheritance documents plus a tax clearance certificate. The other options each belong to a different SOW category — employment income, sale of investments, dividends, or a gift — not inheritance.",
          "followup_question": {
            "task_prompt": "For an inheritance-based SOW claim, is a tax clearance certificate one of the expected supporting documents?",
            "options": [
              { "label": "Yes", "correct": true },
              { "label": "No", "correct": false }
            ],
            "article_citation": "Company SOW Policy"
          }
        },
        {
          "id": "sow-q7",
          "difficulty": "medium",
          "mechanic": "passflag",
          "scenario": "Solara Wholesale Ltd has been operating for 4 years. Its latest Comprehensive Income Statement shows a total comprehensive loss for the second consecutive year, though the merchant maintains regular processing volume.",
          "task_prompt": "Is SOW verification required here?",
          "options": [
            { "label": "SOW Required", "correct": true },
            { "label": "SOW Not Required", "correct": false }
          ],
          "article_citation": "Company SOW Policy",
          "correct_feedback": "Correct — a loss-making merchant, where the P&L or Comprehensive Income Statement shows a comprehensive or net loss, is a standalone SOW trigger. SOW evidence is needed here to show what is actually funding the business's continued operation.",
          "incorrect_feedback": "Not quite — this should be flagged as SOW required. When financials show a comprehensive or net loss instead of profit, SOW evidence is needed to support how the business is being kept going.",
          "followup_question": {
            "task_prompt": "Does the loss-making SOW trigger apply when a merchant's audited statements show a profit?",
            "options": [
              { "label": "No — it only applies when statements show a loss", "correct": true },
              { "label": "Yes, profit and loss are treated identically", "correct": false }
            ],
            "article_citation": "Company SOW Policy"
          }
        },
        {
          "id": "sow-q8",
          "difficulty": "medium",
          "mechanic": "mcq",
          "scenario": "During monitoring, Compliance notices one unusually large incoming payment to a merchant's settlement account and asks the merchant to explain where that specific amount came from.",
          "task_prompt": "Is Compliance's question here about Source of Wealth or Source of Funds?",
          "options": [
            { "label": "Source of Funds — it's about the origin of one specific transaction, not the UBO's overall wealth history", "correct": true },
            { "label": "Source of Wealth — any question about money is automatically a SOW question", "correct": false },
            { "label": "Neither — transaction-level questions never relate to either concept", "correct": false },
            { "label": "Both equally — SOW and SOF apply to the same thing here", "correct": false }
          ],
          "article_citation": "Company SOW Policy",
          "correct_feedback": "Correct. Asking where the money for one specific transaction came from is a Source of Funds question. Source of Wealth is the broader, separate question of how the UBO built their overall wealth over time — the two are commonly confused but serve different purposes.",
          "incorrect_feedback": "Not quite. This is a Source of Funds question, because it targets one specific transaction rather than the UBO's overall wealth history. Mixing up SOW and SOF is a classic error — keep the transaction-specific question (SOF) separate from the lifetime-wealth question (SOW).",
          "followup_question": {
            "task_prompt": "A question about how a UBO built their fortune over 20 years is a ___ question.",
            "options": [
              { "label": "Source of Wealth", "correct": true },
              { "label": "Source of Funds", "correct": false }
            ],
            "article_citation": "Company SOW Policy"
          }
        },
        {
          "id": "sow-q9",
          "difficulty": "hard",
          "mechanic": "checklist",
          "scenario": "Vantage Global Trading is incorporated in a jurisdiction on the Company's High-Risk country list. One UBO is resident in a different High-Risk country, and the merchant's disclosed target markets are 45% High-Risk countries. Its audited financials show a modest profit and evidence of a dividend payment.",
          "task_prompt": "Select every fact below that is a genuine, independent SOW trigger for this merchant.",
          "options": [
            { "label": "The merchant (MoR) is incorporated in a High-Risk country", "correct": true },
            { "label": "A UBO is resident in a High-Risk country", "correct": true },
            { "label": "Declared target markets are more than 30% in High-Risk countries", "correct": true },
            { "label": "The audited financials show a dividend payment", "correct": false },
            { "label": "The merchant reports a modest profit", "correct": false },
            { "label": "The merchant has a small headcount", "correct": false }
          ],
          "article_citation": "Company SOW Policy; Art. 42",
          "correct_feedback": "Correct. Incorporation in a High-Risk country, a UBO resident in a High-Risk country, and target markets over 30% High-Risk each independently trigger mandatory SOW — here all three apply at once. The dividend evidence doesn't cancel these triggers; it's a separate exemption condition that only matters when no other trigger is already in play.",
          "incorrect_feedback": "Not quite. Three facts here are genuine SOW triggers: HR-country incorporation, a UBO resident in an HR country, and target markets over 30% HR. Profit, headcount, and dividend evidence are not triggers on their own — dividend evidence is actually one of the SOW exemption conditions, but it doesn't override an active trigger.",
          "followup_question": {
            "task_prompt": "If target markets are 45% in High-Risk countries, does that alone require SOW verification?",
            "options": [
              { "label": "Yes", "correct": true },
              { "label": "No", "correct": false }
            ],
            "article_citation": "Company SOW Policy"
          }
        },
        {
          "id": "sow-q10",
          "difficulty": "hard",
          "mechanic": "passflag",
          "scenario": "A UBO of a merchant is confirmed as a PEP. The Underwriting analyst finds the UBO mentioned briefly in a regional business newsletter, but the mention doesn't explain how their wealth was built and the analyst still can't verify their broader economic profile.",
          "task_prompt": "Given that a public mention exists but doesn't fully confirm the UBO's economic profile, is SOW verification still required?",
          "options": [
            { "label": "SOW Required", "correct": true },
            { "label": "SOW Not Required", "correct": false }
          ],
          "article_citation": "Art. 46; Company SOW Policy",
          "correct_feedback": "Correct — for a PEP, a public source only removes the need for a separate declaration if it fully confirms the UBO's economic profile, similar to a substantive credible-source profile. A brief mention that doesn't explain the wealth isn't enough, so a completed Source & Size of Wealth Declaration Form must still be requested.",
          "incorrect_feedback": "Not quite — this should still be flagged as SOW required. The credible-public-source exemption only applies when that source fully confirms the UBO's economic profile. A thin mention that doesn't explain how the wealth was built does not meet that bar, so a Declaration Form is still needed.",
          "followup_question": {
            "task_prompt": "For a PEP, does any mention of them in the media automatically satisfy the SOW requirement?",
            "options": [
              { "label": "No — only a source that fully confirms their economic profile does", "correct": true },
              { "label": "Yes — any mention is sufficient", "correct": false }
            ],
            "article_citation": "Art. 46"
          }
        }
      ]
    },
    {
      "chapter_key": "the_gate",
      "briefing": {
        "title": "The Gate: Onboarding Merchants the Right Way",
        "description": "Every merchant must clear a gate of checks before Pay.com can process its payments, but the depth of those checks depends on the merchant's AML risk score. Low and Medium risk merchants pass through Standard CDD; High risk merchants must also clear Enhanced Due Diligence.",
        "objectives": [
          "Distinguish Standard CDD from Enhanced Due Diligence (EDD) and know which risk tier triggers each",
          "Apply the correct ownership-percentage threshold (25% Standard vs 10% EDD) to identify a merchant's UBOs",
          "Recognize shell companies and trust/nominee ownership structures that demand extra scrutiny"
        ],
        "article_range": "Covers Articles 2, 19, 26, 37, 41, 42 and 44 of the CBC AML/CFT Directive 2025 (K.Δ.Π. 120/2025)"
      },
      "questions": [
        {
          "id": "gate-q1",
          "difficulty": "easy",
          "mechanic": "mcq",
          "scenario": "During onboarding, a merchant's cap table shows one shareholder holding 30% of its shares.",
          "task_prompt": "What do we call a natural person who owns or controls 25% or more of a merchant's shares?",
          "options": [
            { "label": "UBO (Ultimate Beneficial Owner)", "correct": true },
            { "label": "Merchant of Record", "correct": false },
            { "label": "Nominee shareholder", "correct": false },
            { "label": "Protector", "correct": false }
          ],
          "article_citation": "Art. 2",
          "correct_feedback": "Correct. Anyone holding 25% or more of a merchant's shares (or otherwise controlling it) is a UBO and must complete full KYC checks.",
          "incorrect_feedback": "That's not the right term. Anyone at or above the 25% ownership mark is the merchant's UBO and must be identified and screened.",
          "followup_question": {
            "task_prompt": "What ownership percentage generally makes someone a UBO under Standard CDD?",
            "options": [
              { "label": "25% or more", "correct": true },
              { "label": "50% or more", "correct": false },
              { "label": "5% or more", "correct": false }
            ],
            "article_citation": "Art. 2"
          }
        },
        {
          "id": "gate-q2",
          "difficulty": "easy",
          "mechanic": "mcq",
          "scenario": "A merchant applying for a payment processing account is scored Medium risk by the AML Risk Score model.",
          "task_prompt": "Which set of checks applies to this merchant?",
          "options": [
            { "label": "Standard CDD only", "correct": true },
            { "label": "EDD only", "correct": false },
            { "label": "Standard CDD plus EDD", "correct": false },
            { "label": "No checks are needed", "correct": false }
          ],
          "article_citation": "Art. 42",
          "correct_feedback": "Correct. Low and Medium risk merchants go through Standard CDD; EDD is reserved for merchants scored High risk.",
          "incorrect_feedback": "Not quite. EDD is only layered on top of Standard CDD for High risk merchants — Medium risk merchants complete Standard CDD.",
          "followup_question": {
            "task_prompt": "Which risk tier always requires EDD in addition to Standard CDD?",
            "options": [
              { "label": "High risk", "correct": true },
              { "label": "Low risk", "correct": false },
              { "label": "Medium risk", "correct": false }
            ],
            "article_citation": "Art. 42"
          }
        },
        {
          "id": "gate-q3",
          "difficulty": "easy",
          "mechanic": "passflag",
          "scenario": "A straightforward EU-based merchant selling physical goods online, single natural-person owner, is scored Low risk.",
          "task_prompt": "Does this merchant need EDD, or is Standard CDD enough?",
          "options": [
            { "label": "Standard CDD is enough", "correct": true },
            { "label": "EDD is required", "correct": false }
          ],
          "article_citation": "Art. 42",
          "correct_feedback": "Correct. Low risk merchants only need Standard CDD — EDD is reserved for merchants rated High risk.",
          "incorrect_feedback": "EDD is not needed here. A Low risk merchant only needs to clear Standard CDD.",
          "followup_question": {
            "task_prompt": "True or false: every merchant, regardless of risk tier, must complete at least Standard CDD before onboarding.",
            "options": [
              { "label": "True", "correct": true },
              { "label": "False", "correct": false }
            ],
            "article_citation": "Art. 26"
          }
        },
        {
          "id": "gate-q4",
          "difficulty": "medium",
          "mechanic": "mcq",
          "scenario": "Compliance is assembling the Standard CDD file for a newly onboarded merchant company.",
          "task_prompt": "Which document verifies the merchant's registered shareholders?",
          "options": [
            { "label": "Certificate of Shareholders", "correct": true },
            { "label": "Business Plan", "correct": false },
            { "label": "Trust Deed", "correct": false },
            { "label": "IBAN certificate", "correct": false }
          ],
          "article_citation": "Art. 37",
          "correct_feedback": "Correct. The Certificate of Shareholders confirms who legally owns shares in the merchant of record.",
          "incorrect_feedback": "That document serves a different purpose. The Certificate of Shareholders is what confirms registered ownership.",
          "followup_question": {
            "task_prompt": "Which document lists a merchant's directors?",
            "options": [
              { "label": "Certificate of Directors", "correct": true },
              { "label": "Certificate of Shareholders", "correct": false },
              { "label": "UBO Registry extract", "correct": false }
            ],
            "article_citation": "Art. 37"
          }
        },
        {
          "id": "gate-q5",
          "difficulty": "medium",
          "mechanic": "nodegrid",
          "scenario": "Three merchant applications are on your desk, each needing a risk tier before onboarding continues.",
          "task_prompt": "Rate the overall AML risk tier of each merchant profile.",
          "options": [],
          "nodes": [
            { "label": "EU e-commerce merchant selling physical goods, single natural-person owner, audited accounts, verified domain", "correctTier": "low" },
            { "label": "Merchant with a three-layer offshore holding structure across two secrecy jurisdictions, ownership hard to trace to natural persons", "correctTier": "high" },
            { "label": "Merchant under 18 months old with one 40%-holding corporate shareholder registered in a neighbouring EU state, rest held by individuals", "correctTier": "medium" }
          ],
          "article_citation": "Art. 19",
          "correct_feedback": "Right. Simple, transparent ownership stays low risk; opaque offshore chains push a merchant to high risk; a young company with one traceable corporate layer sits in between.",
          "incorrect_feedback": "Reconsider the ownership transparency and business maturity of each merchant — untraceable offshore layers drive risk up, while clean, verifiable structures keep it down.",
          "followup_question": {
            "task_prompt": "Which factor alone would push a merchant toward a higher risk tier?",
            "options": [
              { "label": "An untraceable offshore ownership chain", "correct": true },
              { "label": "Audited financial statements", "correct": false },
              { "label": "A single domestic natural-person owner", "correct": false }
            ],
            "article_citation": "Art. 19"
          }
        },
        {
          "id": "gate-q6",
          "difficulty": "medium",
          "mechanic": "mcq",
          "scenario": "A merchant has just been scored High risk during onboarding.",
          "task_prompt": "At what ownership percentage must EDD identify shareholders/UBOs, instead of the Standard CDD 25%?",
          "options": [
            { "label": "10% or more", "correct": true },
            { "label": "25% or more", "correct": false },
            { "label": "50% or more", "correct": false },
            { "label": "5% or more", "correct": false }
          ],
          "article_citation": "Company Underwriting Policy",
          "correct_feedback": "Correct. High risk merchants get a wider net — EDD identifies shareholders and nominee-shareholders down to 10%, not just 25%.",
          "incorrect_feedback": "That's the Standard CDD threshold. Under EDD for High risk merchants, the identification threshold drops to 10%.",
          "followup_question": {
            "task_prompt": "Does the EDD ownership threshold go lower or higher than the Standard CDD 25% threshold?",
            "options": [
              { "label": "Lower", "correct": true },
              { "label": "Higher", "correct": false },
              { "label": "It stays the same", "correct": false }
            ],
            "article_citation": "Company Underwriting Policy"
          }
        },
        {
          "id": "gate-q7",
          "difficulty": "medium",
          "mechanic": "passflag",
          "scenario": "A merchant scored Medium risk has a shareholder holding 15% of its shares.",
          "task_prompt": "Under Standard CDD, must compliance identify and screen this 15% shareholder as a UBO?",
          "options": [
            { "label": "No, it's below the 25% Standard CDD threshold", "correct": true },
            { "label": "Yes, identify them as a UBO", "correct": false }
          ],
          "article_citation": "Art. 2",
          "correct_feedback": "Correct. Standard CDD only requires identification of shareholders/UBOs above 25%, so a 15% holder falls outside that requirement.",
          "incorrect_feedback": "Not under Standard CDD. The 25% threshold applies here, so a 15% shareholder does not need to be identified as a UBO at this tier.",
          "followup_question": {
            "task_prompt": "If that same merchant were instead rated High risk, would the 15% shareholder need to be identified?",
            "options": [
              { "label": "Yes, because EDD applies at 10% and above", "correct": true },
              { "label": "No, the threshold never changes", "correct": false }
            ],
            "article_citation": "Company Underwriting Policy"
          }
        },
        {
          "id": "gate-q8",
          "difficulty": "hard",
          "mechanic": "mcq",
          "scenario": "A merchant's ownership chain shows a corporate shareholder holding 40%, which is itself held by a trust, with a trustee administering the shares for a beneficiary.",
          "task_prompt": "What must compliance obtain, and who else needs UBO-level KYC checks?",
          "options": [
            { "label": "A Trust Deed; the trustee, settlor, beneficiary and protector all need KYC", "correct": true },
            { "label": "Only the trustee needs an ID check", "correct": false },
            { "label": "Nothing extra, since the corporate shareholder is already screened", "correct": false },
            { "label": "A Business Plan replaces the need for trust paperwork", "correct": false }
          ],
          "article_citation": "Art. 44",
          "correct_feedback": "Correct. Whenever a trust or nominee arrangement appears in the ownership chain, a Trust Deed is required and everyone who controls the trust — trustee, settlor, beneficiary, protector — is treated like a UBO.",
          "incorrect_feedback": "That's incomplete. A trust anywhere in the ownership chain requires a Trust Deed, and the trustee, settlor, beneficiary and protector must all undergo the same KYC checks as a UBO.",
          "followup_question": {
            "task_prompt": "When a trust appears in a merchant's ownership chain, what extra document is required?",
            "options": [
              { "label": "Trust Deed / Declaration of Trust", "correct": true },
              { "label": "Business Plan", "correct": false },
              { "label": "IBAN certificate", "correct": false }
            ],
            "article_citation": "Art. 44"
          }
        },
        {
          "id": "gate-q9",
          "difficulty": "hard",
          "mechanic": "nodegrid",
          "scenario": "Three merchant applications show very different levels of genuine business substance.",
          "task_prompt": "Rate the risk tier of each merchant, keeping the mandatory Shell Company Assessment in mind.",
          "options": [],
          "nodes": [
            { "label": "Merchant registered offshore with only a mailing address, no staff, no website, no verifiable trading activity", "correctTier": "high" },
            { "label": "Merchant with a leased office, employees, an active e-commerce site and two years of audited accounts", "correctTier": "low" },
            { "label": "Merchant with a registered office and working website, but only one year of unaudited management accounts and thin transaction history", "correctTier": "medium" }
          ],
          "article_citation": "Art. 37",
          "correct_feedback": "Right. A legal entity with no real physical presence or genuine activity beyond a mailing address is a shell company red flag and must never be onboarded.",
          "incorrect_feedback": "Look again at physical presence and genuine activity — an entity that is only a mailing address with no real operations is a shell company and must be rejected, not onboarded.",
          "followup_question": {
            "task_prompt": "What must every merchant undergo, regardless of risk tier, to rule out shell-company status?",
            "options": [
              { "label": "A Shell Company Assessment", "correct": true },
              { "label": "A Trust Deed review", "correct": false },
              { "label": "A PEP screening only", "correct": false }
            ],
            "article_citation": "Art. 37"
          }
        },
        {
          "id": "gate-q10",
          "difficulty": "hard",
          "mechanic": "nodegrid",
          "scenario": "Three more merchant applications reach your desk, each with a different ownership wrinkle.",
          "task_prompt": "Assess the overall AML risk tier of each merchant profile.",
          "options": [],
          "nodes": [
            { "label": "Merchant is a subsidiary of a parent company listed on a recognised EU-regulated stock exchange", "correctTier": "low" },
            { "label": "Merchant's UBO is a close family member of a serving government minister (a PEP-linked owner)", "correctTier": "high" },
            { "label": "Merchant has one corporate shareholder incorporated in the same EU country, itself wholly owned by two named individuals", "correctTier": "medium" }
          ],
          "article_citation": "Art. 19",
          "correct_feedback": "Correct. A recognised stock-exchange listing simplifies the ownership check, a PEP-linked UBO always raises risk, and a single traceable domestic corporate layer sits in the middle.",
          "incorrect_feedback": "Reconsider each factor: a stock-exchange listing lowers risk, a PEP-linked UBO raises it to high, and a simple, traceable corporate shareholder is only medium risk.",
          "followup_question": {
            "task_prompt": "Which single element above is a recognized standalone red flag for higher risk?",
            "options": [
              { "label": "A UBO who is linked to a PEP", "correct": true },
              { "label": "A parent company listed on a stock exchange", "correct": false },
              { "label": "A single-country corporate shareholder", "correct": false }
            ],
            "article_citation": "Art. 19"
          }
        }
      ]
    },
    {
      "chapter_key": "enhanced_measures",
      "briefing": {
        "title": "Red Zone: Enhanced Due Diligence",
        "description": "Some merchants carry extra risk — a politically connected owner, a shell structure, a trust, a high-risk country link, or a high-risk industry like gambling or crypto — and need a bigger EDD (enhanced due diligence) stack than standard onboarding. Every abbreviation, including PEP (politically exposed person), EDD, and HR (high-risk) country, is explained in plain English the first time it appears.",
        "objectives": [
          "Build the correct EDD stack for merchants linked to PEPs, shell companies, or trusts",
          "Recognize when a high-risk country or high-risk industry triggers extra measures",
          "Tell genuinely required EDD steps apart from plausible but inapplicable ones"
        ],
        "article_range": "Covers Articles 42-51 of the CBC AML/CFT Directive (Enhanced Due Diligence), including Art. 30 & 46 (PEPs), Art. 37 (Shell Companies), Art. 44 (Trusts), and Art. 50-51 (High-Risk Countries & Crypto)"
      },
      "questions": [
        {
          "id": "eq-q1",
          "difficulty": "medium",
          "mechanic": "checklist",
          "scenario": "A merchant applying to process payments is a regional restaurant chain. One of its three shareholders, holding 30%, is a sitting deputy mayor of a mid-sized city.",
          "task_prompt": "The shareholder is a PEP. Select every EDD step required for this merchant because of that fact.",
          "options": [
            { "label": "Verify the PEP shareholder's Source of Wealth through documentation and public records", "correct": true },
            { "label": "Obtain credible references or public information on the PEP shareholder's business reputation and integrity", "correct": true },
            { "label": "Complete a Shell Company Assessment Form for the merchant", "correct": false },
            { "label": "Obtain a full copy of a Trust Agreement", "correct": false },
            { "label": "Verify the merchant's gambling license against the regulator's register", "correct": false },
            { "label": "Confirm whether over 30% of the merchant's target markets are in high-risk countries", "correct": false }
          ],
          "article_citation": "Art. 46",
          "correct_feedback": "Correct. A PEP shareholder triggers Source of Wealth verification and a reputation/integrity check — the other options belong to shell company, trust, gambling, or high-risk-country triggers that aren't present here.",
          "incorrect_feedback": "You missed one or both of the two PEP-specific steps, or included a step from a different trigger. A PEP owner requires Source of Wealth verification plus credible reputation/integrity references — nothing about shells, trusts, gambling, or HR countries applies to this scenario.",
          "followup_question": {
            "task_prompt": "Which is the single most important EDD step for a merchant with a PEP shareholder?",
            "options": [
              { "label": "Verify the PEP's Source of Wealth", "correct": true },
              { "label": "Confirm the merchant's company registration number", "correct": false },
              { "label": "Check the PEP's social media presence", "correct": false }
            ],
            "article_citation": "Art. 46"
          }
        },
        {
          "id": "eq-q2",
          "difficulty": "easy",
          "mechanic": "checklist",
          "scenario": "A merchant is onboarding a payment gateway. Its sole director resigned from a ministerial post 8 months ago.",
          "task_prompt": "Select every EDD step that still applies to this director given how recently they left office.",
          "options": [
            { "label": "Verify the director's Source of Wealth as you would for any current PEP", "correct": true },
            { "label": "Obtain credible references on the director's business reputation and integrity", "correct": true },
            { "label": "Treat the director as no longer a PEP since they left office", "correct": false },
            { "label": "Wait until 12 months have fully passed before applying any PEP measures", "correct": false },
            { "label": "Apply PEP measures only to the director's family members, not the director", "correct": false },
            { "label": "Only apply PEP checks if the director is also a shareholder", "correct": false }
          ],
          "article_citation": "Art. 30",
          "correct_feedback": "Correct. PEP status continues for 12 months after leaving public office, so at 8 months the director is still treated as a PEP — full Source of Wealth verification and reputation checks apply now, not later.",
          "incorrect_feedback": "PEP status doesn't end the moment someone leaves office — it continues for 12 months. At 8 months post-resignation, the director is still a PEP, so Source of Wealth verification and reputation checks are required now.",
          "followup_question": {
            "task_prompt": "A merchant's director left a ministerial post 8 months ago. Does PEP status still apply?",
            "options": [
              { "label": "Yes — PEP status lasts 12 months after leaving office", "correct": true },
              { "label": "No — PEP status ends the moment someone leaves office", "correct": false }
            ],
            "article_citation": "Art. 30"
          }
        },
        {
          "id": "eq-q3",
          "difficulty": "easy",
          "mechanic": "checklist",
          "scenario": "A merchant applicant is registered in an offshore jurisdiction. It has no employees, no physical office, only a registered agent's mailing address, and cannot produce any invoices, contracts, or tax filings showing real trading activity.",
          "task_prompt": "This looks like a shell company. Select every correct step for the Underwriting analyst to take.",
          "options": [
            { "label": "Complete a Shell Company Assessment Form", "correct": true },
            { "label": "Decline the relationship if the merchant is confirmed to meet the shell company definition", "correct": true },
            { "label": "Request a full copy of a Trust Agreement", "correct": false },
            { "label": "Verify Source of Wealth for the shareholders", "correct": false },
            { "label": "Approve onboarding but apply enhanced ongoing monitoring instead of a decision on refusal", "correct": false },
            { "label": "Check whether the merchant's target markets are in high-risk countries", "correct": false }
          ],
          "article_citation": "Art. 37",
          "correct_feedback": "Correct. Every merchant gets a Shell Company Assessment Form, and a confirmed shell company — no genuine presence or activity beyond a mailing address — must be refused, not just monitored more closely.",
          "incorrect_feedback": "A confirmed shell company isn't a case for extra monitoring — it must be refused. The required steps here are completing the Shell Company Assessment Form and declining the relationship; trust, PEP, and HR-country steps don't apply to this fact pattern.",
          "followup_question": {
            "task_prompt": "What is the required outcome when a merchant is confirmed to be a shell company with no genuine business activity?",
            "options": [
              { "label": "Decline or refuse the relationship", "correct": true },
              { "label": "Approve it with a lower risk rating", "correct": false },
              { "label": "Apply standard CDD only", "correct": false }
            ],
            "article_citation": "Art. 37"
          }
        },
        {
          "id": "eq-q4",
          "difficulty": "medium",
          "mechanic": "checklist",
          "scenario": "A merchant is a Cyprus-incorporated e-commerce reseller with a real product catalog, staff, and paid invoices. During review, the analyst finds a holding company sitting above it in the ownership chain that has no operations of its own and exists purely to hold shares.",
          "task_prompt": "Select every correct EDD step given the shell entity found in the ownership chain.",
          "options": [
            { "label": "Complete a Shell Company Assessment Form covering the holding entity", "correct": true },
            { "label": "Confirm the operating merchant itself has genuine physical presence and trading evidence, independent of the holding entity", "correct": true },
            { "label": "Ignore the holding entity since only the operating merchant signs the processing agreement", "correct": false },
            { "label": "Obtain a full Trust Agreement for the holding entity", "correct": false },
            { "label": "Verify Source of Wealth for the holding entity's shareholders as PEPs", "correct": false },
            { "label": "Confirm whether over 30% of target markets are in high-risk countries", "correct": false }
          ],
          "article_citation": "Art. 37",
          "correct_feedback": "Correct. A shell entity anywhere in the ownership chain must still be assessed on its own Shell Company Assessment Form, and the operating merchant's genuine activity should be separately confirmed rather than assumed.",
          "incorrect_feedback": "A shell company higher up the ownership chain can't be ignored just because it doesn't sign the agreement — it needs its own Shell Company Assessment Form, and the operating merchant's real activity should still be independently confirmed.",
          "followup_question": {
            "task_prompt": "If a shell company is confirmed within a merchant's ownership chain, what must the compliance team do?",
            "options": [
              { "label": "Assess it via a Shell Company Assessment Form and decline if it meets shell criteria", "correct": true },
              { "label": "Ignore it since only the operating entity signs the merchant agreement", "correct": false },
              { "label": "Monitor it for exactly one year and then re-review", "correct": false }
            ],
            "article_citation": "Art. 37"
          }
        },
        {
          "id": "eq-q5",
          "difficulty": "medium",
          "mechanic": "checklist",
          "scenario": "A merchant applying for a payment processing account for its online furniture business is 100% owned by a Family Trust. The trust deed names a trustee, a settlor, and two beneficiaries.",
          "task_prompt": "Select every EDD step required because the merchant is owned by a trust.",
          "options": [
            { "label": "Obtain a full copy of the Trust Agreement", "correct": true },
            { "label": "Complete full KYC, including sanctions screening, for the trustee, settlor, and beneficiaries", "correct": true },
            { "label": "Complete a Shell Company Assessment Form", "correct": false },
            { "label": "Obtain a formal Source of Wealth Declaration for the trust", "correct": false },
            { "label": "Confirm the merchant holds a valid gambling license", "correct": false },
            { "label": "Obtain a legal opinion for any target market where the merchant isn't locally licensed", "correct": false }
          ],
          "article_citation": "Art. 44",
          "correct_feedback": "Correct. A trust in the ownership structure requires the full Trust Agreement plus complete KYC and sanctions screening on everyone tied to the trust — the other options belong to shell, PEP, or gambling triggers that aren't part of this fact pattern.",
          "incorrect_feedback": "A trust ownership structure specifically calls for the Trust Agreement and full KYC on the trustee, settlor, and beneficiaries — the Shell Company Form, SOW Declaration, and gambling-related steps are for different triggers, not this one.",
          "followup_question": {
            "task_prompt": "For a merchant owned by a trust, which document is essential to understand its structure and terms?",
            "options": [
              { "label": "The Trust Agreement", "correct": true },
              { "label": "The merchant's marketing brochure", "correct": false },
              { "label": "Last month's bank statement", "correct": false }
            ],
            "article_citation": "Art. 44"
          }
        },
        {
          "id": "eq-q6",
          "difficulty": "hard",
          "mechanic": "checklist",
          "scenario": "A merchant's ownership includes a trust whose protector (who can veto trustee decisions) is resident in a country on the EU's high-risk list. One beneficiary is the adult daughter of a former cabinet minister who left office 6 months ago.",
          "task_prompt": "Select every EDD step required across the trust, PEP, and high-risk-country triggers combined in this case.",
          "options": [
            { "label": "Obtain a full copy of the Trust Agreement", "correct": true },
            { "label": "Complete full KYC, including sanctions screening, for the trustee, settlor, beneficiaries, protector, and anyone else who ultimately controls the trust", "correct": true },
            { "label": "Verify Source of Wealth for the beneficiary linked to the former minister, since PEP status still applies within 12 months of leaving office", "correct": true },
            { "label": "Apply high-risk-country EDD measures because the protector resides in a high-risk country", "correct": true },
            { "label": "Complete a Shell Company Assessment Form", "correct": false },
            { "label": "Refuse the relationship automatically because a trust is involved", "correct": false }
          ],
          "article_citation": "Art. 44",
          "correct_feedback": "Correct. All four triggers stack here: the Trust Agreement and full KYC for everyone controlling the trust, Source of Wealth on the still-current PEP-linked beneficiary, and high-risk-country measures because the protector resides in an HR country. A trust alone never means automatic refusal.",
          "incorrect_feedback": "This case stacks three triggers at once — trust, PEP (the beneficiary is still within the 12-month PEP window), and high-risk country (the protector's residence). A trust is not by itself grounds for automatic refusal, and the Shell Company Form isn't the issue here.",
          "followup_question": {
            "task_prompt": "Which single role in this trust structure triggers additional high-risk-country EDD?",
            "options": [
              { "label": "The protector, who is resident in a high-risk country", "correct": true },
              { "label": "The settlor, who lives locally", "correct": false },
              { "label": "A beneficiary who is a university student", "correct": false }
            ],
            "article_citation": "Art. 50"
          }
        },
        {
          "id": "eq-q7",
          "difficulty": "medium",
          "mechanic": "checklist",
          "scenario": "A merchant is an online electronics retailer incorporated in Cyprus. Its projections show 45% of sales volume coming from customers in a country the European Commission lists as high-risk for AML/CFT.",
          "task_prompt": "Select every EDD step required for this merchant's high-risk-country exposure.",
          "options": [
            { "label": "Apply enhanced due diligence because over 30% of target markets are in a high-risk country", "correct": true },
            { "label": "Increase the frequency of ongoing monitoring and periodic review for this merchant", "correct": true },
            { "label": "Skip extra measures since the merchant itself is incorporated in Cyprus, not the high-risk country", "correct": false },
            { "label": "Obtain a full copy of a Trust Agreement", "correct": false },
            { "label": "Complete a Shell Company Assessment Form", "correct": false },
            { "label": "Verify the merchant's gambling license", "correct": false }
          ],
          "article_citation": "Art. 50",
          "correct_feedback": "Correct. Passing the 30% target-market threshold on its own triggers HR-country EDD, regardless of where the merchant is incorporated, and calls for closer, more frequent ongoing monitoring.",
          "incorrect_feedback": "The merchant's own incorporation location doesn't matter here — more than 30% of its target markets being in a high-risk country is enough on its own to trigger enhanced due diligence and closer ongoing monitoring.",
          "followup_question": {
            "task_prompt": "Which of the following alone is enough to trigger high-risk-country EDD for a merchant?",
            "options": [
              { "label": "More than 30% of its target markets being in a high-risk country", "correct": true },
              { "label": "The merchant's logo containing the word 'global'", "correct": false },
              { "label": "The merchant using a common email provider", "correct": false }
            ],
            "article_citation": "Art. 50"
          }
        },
        {
          "id": "eq-q8",
          "difficulty": "hard",
          "mechanic": "checklist",
          "scenario": "A merchant runs a cross-border remittance business registered in Cyprus. Its UBO, holding 40% ownership, is resident in a country on the EU's high-risk third-country list.",
          "task_prompt": "Select every EDD step required given the UBO's residency.",
          "options": [
            { "label": "Apply high-risk-country EDD because a UBO is resident in a high-risk country", "correct": true },
            { "label": "Obtain and verify Source of Wealth and Source of Funds documentation given the elevated risk", "correct": true },
            { "label": "Increase the frequency and intensity of ongoing transaction monitoring", "correct": true },
            { "label": "Skip extra measures since the merchant itself is registered in Cyprus", "correct": false },
            { "label": "Request a Trust Agreement", "correct": false },
            { "label": "Verify a gambling license", "correct": false }
          ],
          "article_citation": "Art. 50",
          "correct_feedback": "Correct. A UBO's residence in a high-risk country is enough on its own to trigger EDD, regardless of where the merchant is registered, and calls for verified Source of Wealth/Funds plus closer ongoing monitoring.",
          "incorrect_feedback": "The merchant's Cyprus registration doesn't offset the risk — a UBO resident in a high-risk country still triggers EDD, including Source of Wealth/Funds verification and increased monitoring frequency.",
          "followup_question": {
            "task_prompt": "Which fact alone is sufficient to trigger high-risk-country EDD for this merchant?",
            "options": [
              { "label": "A UBO holding 40% ownership resides in a high-risk country", "correct": true },
              { "label": "The merchant's website is in English", "correct": false },
              { "label": "The merchant processes transactions in euros", "correct": false }
            ],
            "article_citation": "Art. 50"
          }
        },
        {
          "id": "eq-q9",
          "difficulty": "hard",
          "mechanic": "checklist",
          "scenario": "A merchant applying for payment processing is a crypto-asset exchange platform. The Risk team finds it is not licensed or registered under the EU's crypto-assets regulation in any EU member state, though it claims registration in a non-EU jurisdiction.",
          "task_prompt": "Select every EDD step required for this unregulated crypto-asset merchant.",
          "options": [
            { "label": "Discuss with the merchant to understand the nature of its business and the AML/CFT risks involved", "correct": true },
            { "label": "Verify that the merchant holds valid registration with a competent authority and assess the adequacy of that jurisdiction's AML/CFT regime", "correct": true },
            { "label": "Obtain evidence that the merchant complies with the Travel Rule (originator/beneficiary data travels with the transaction)", "correct": true },
            { "label": "Complete the crypto merchant due diligence questionnaire", "correct": true },
            { "label": "Skip the Shell Company Assessment Form since the merchant is a crypto business", "correct": false },
            { "label": "Obtain a full copy of a Trust Agreement", "correct": false },
            { "label": "Skip Source of Wealth checks since crypto exchanges are considered self-regulating", "correct": false }
          ],
          "article_citation": "Art. 51; Art. 62",
          "correct_feedback": "Correct. An unregulated crypto merchant needs a business/risk discussion, verification of its registration and the adequacy of its jurisdiction's AML/CFT regime, Travel Rule evidence, and a completed due diligence questionnaire — every merchant still gets a Shell Company Assessment Form regardless of industry.",
          "incorrect_feedback": "Crypto merchants aren't exempt from baseline checks like the Shell Company Assessment Form, and 'self-regulating' isn't a real exemption. The required steps are the business/risk discussion, registration and jurisdiction adequacy check, Travel Rule evidence, and the due diligence questionnaire.",
          "followup_question": {
            "task_prompt": "What must a crypto-asset merchant demonstrate about how transaction data travels, per the Travel Rule?",
            "options": [
              { "label": "Originator and beneficiary information must travel with the crypto transaction", "correct": true },
              { "label": "Only the transaction amount needs to be recorded", "correct": false },
              { "label": "No data needs to accompany the transaction", "correct": false }
            ],
            "article_citation": "Art. 62"
          }
        },
        {
          "id": "eq-q10",
          "difficulty": "medium",
          "mechanic": "checklist",
          "scenario": "A merchant applying for payment processing operates an online sports betting platform targeting three EU countries.",
          "task_prompt": "Select every EDD step required for this gambling merchant on top of standard checks.",
          "options": [
            { "label": "Obtain proof of gambling license(s), verified against the relevant regulator's register", "correct": true },
            { "label": "Obtain a legal opinion for any target market where the merchant isn't locally licensed", "correct": true },
            { "label": "Complete Card Scheme high-risk registration before the merchant starts processing", "correct": true },
            { "label": "Obtain a full copy of a Trust Agreement", "correct": false },
            { "label": "Complete a Shell Company Assessment Form", "correct": false },
            { "label": "Obtain a formal Source of Wealth Declaration for all shareholders", "correct": false }
          ],
          "article_citation": "Company AML Policy",
          "correct_feedback": "Correct. Gambling merchants need verified license proof against the regulator's register, a legal opinion for any unlicensed target markets, and Card Scheme high-risk registration before processing starts — the other options belong to trust, shell, or PEP triggers not present here.",
          "incorrect_feedback": "Gambling-specific EDD means license verification, a legal opinion for unlicensed markets, and Card Scheme high-risk registration — the Trust Agreement, Shell Company Form, and SOW Declaration are for different triggers and aren't indicated by this scenario.",
          "followup_question": {
            "task_prompt": "Before a gambling merchant can begin processing transactions, what must be completed in addition to standard licensing checks?",
            "options": [
              { "label": "Card Scheme high-risk registration", "correct": true },
              { "label": "A press release announcing the partnership", "correct": false },
              { "label": "A customer satisfaction survey", "correct": false }
            ],
            "article_citation": "Company AML Policy"
          }
        }
      ]
    },
    {
      "chapter_key": "the_flag",
      "briefing": {
        "title": "Spot the Flag: Monitoring & Reporting",
        "description": "Onboarding a merchant well is only half the job — this chapter is about catching red flags in ongoing merchant activity and knowing exactly who inside the company to tell first.",
        "objectives": [
          "Recognise concrete red flags in merchant transaction monitoring, from chargeback and refund ratios to screening-database hits and website inconsistencies",
          "Follow the correct internal escalation chain: raise concerns with the AMLCO before anything is considered for external reporting",
          "Understand that only the AMLCO, after investigating, decides whether a formal Suspicion Report goes to MOKAS — and why tipping off a merchant is never acceptable"
        ],
        "article_range": "Covers Articles 63-66 on suspicious-activity monitoring and reporting, plus internal merchant-monitoring policy"
      },
      "questions": [
        {
          "id": "flag-q1",
          "difficulty": "easy",
          "mechanic": "passflag",
          "scenario": "A merchant selling subscription fitness apps has processed steadily for six months. This month's monitoring report shows its chargeback ratio has risen to 1.4% of transaction count, crossing the internal 1% threshold for the first time.",
          "task_prompt": "Based on the details below, would you escalate this merchant to the Risk team, or let it continue processing as normal?",
          "article_citation": "Company AML Policy",
          "options": [
            { "label": "Let it continue as normal", "correct": false },
            { "label": "Escalate to the Risk team", "correct": true }
          ],
          "correct_feedback": "Correct — Escalate. Company policy requires escalation to the Risk team whenever a merchant's chargeback, refund, or fraud ratio reaches or exceeds 1%, whether measured by count or by amount.",
          "incorrect_feedback": "Not quite — a 1.4% chargeback ratio is above the 1% escalation threshold by count. Company policy requires escalating to the Risk team once either ratio hits or exceeds 1%, so this needs review, not routine processing.",
          "followup_question": {
            "task_prompt": "What is the internal escalation threshold for a merchant's chargeback, refund, or fraud ratio?",
            "options": [
              { "label": "1% (by count or by amount)", "correct": true },
              { "label": "5%, by amount only", "correct": false },
              { "label": "There is no fixed threshold", "correct": false }
            ],
            "article_citation": "Company AML Policy"
          }
        },
        {
          "id": "flag-q2",
          "difficulty": "easy",
          "mechanic": "passflag",
          "scenario": "During a routine review, an Underwriting analyst notices activity on a merchant account that looks inconsistent with the business's declared profile and suspects it could be money laundering. The analyst is unsure whether to file a report straight to MOKAS or raise it internally first.",
          "task_prompt": "Should the analyst report the suspicion directly to MOKAS, or raise the concern with the AMLCO first?",
          "article_citation": "Art. 65",
          "options": [
            { "label": "Report directly to MOKAS", "correct": false },
            { "label": "Raise it with the AMLCO first", "correct": true }
          ],
          "correct_feedback": "Correct — Raise it with the AMLCO. Staff who suspect money laundering or terrorist financing must report internally to the AMLCO first; only the AMLCO decides whether the concern is genuinely warranted and, if so, files the formal Suspicion Report with MOKAS.",
          "incorrect_feedback": "Not quite — staff never report suspicion straight to MOKAS. The correct first step is always to raise the concern internally with the AMLCO, who investigates and decides whether a formal Suspicion Report to MOKAS is warranted.",
          "followup_question": {
            "task_prompt": "Who is the first internal point of escalation when staff suspect money laundering or terrorist financing on a merchant account?",
            "options": [
              { "label": "The AMLCO", "correct": true },
              { "label": "MOKAS directly", "correct": false },
              { "label": "The merchant's account manager", "correct": false }
            ],
            "article_citation": "Art. 65"
          }
        },
        {
          "id": "flag-q3",
          "difficulty": "easy",
          "mechanic": "mcq",
          "scenario": "New Underwriting analysts are given a one-page summary of the escalation process before their first week monitoring merchant accounts. It describes a specific internal chain that any genuine AML/CFT suspicion must move through before anything ever reaches the external regulator.",
          "task_prompt": "Which sequence correctly describes the escalation chain for a merchant suspicion?",
          "article_citation": "Art. 65; Art. 66",
          "options": [
            { "label": "Staff → AMLCO → MOKAS, only if the AMLCO's investigation confirms it's warranted", "correct": true },
            { "label": "Staff → MOKAS → AMLCO", "correct": false },
            { "label": "Staff → Head of Underwriting → MOKAS, bypassing the AMLCO", "correct": false },
            { "label": "Staff → Risk team → MOKAS, bypassing the AMLCO", "correct": false }
          ],
          "correct_feedback": "Correct — the chain always runs staff to AMLCO first. The AMLCO investigates the concern and only files a formal Suspicion Report with MOKAS if the investigation confirms it's genuinely warranted.",
          "incorrect_feedback": "Not quite — MOKAS, the Risk team, and the Head of Underwriting are never the first stop. Every suspicion must go from staff to the AMLCO first, who investigates and decides whether to escalate externally to MOKAS.",
          "followup_question": {
            "task_prompt": "True or false: the AMLCO forwards every internal suspicion report on to MOKAS, without exception.",
            "options": [
              { "label": "True", "correct": false },
              { "label": "False — the AMLCO only files with MOKAS after confirming the suspicion is genuinely warranted", "correct": true }
            ],
            "article_citation": "Art. 65"
          }
        },
        {
          "id": "flag-q4",
          "difficulty": "medium",
          "mechanic": "passflag",
          "scenario": "A merchant selling electronics accessories shows a chargeback ratio well under 1% this quarter. However, its refund ratio measured by transaction value has climbed to 1.1%, driven by a small number of unusually large refunds.",
          "task_prompt": "Based on the details below, would you escalate this merchant to the Risk team, or let it proceed since the chargeback ratio itself is fine?",
          "article_citation": "Company AML Policy",
          "options": [
            { "label": "Let it proceed — chargeback ratio is fine", "correct": false },
            { "label": "Escalate to the Risk team", "correct": true }
          ],
          "correct_feedback": "Correct — Escalate. The 1% escalation threshold applies to chargeback, refund, and fraud ratios alike, and it can be triggered by amount as well as by count. A 1.1% refund ratio by value crosses that line even though the chargeback ratio looks fine.",
          "incorrect_feedback": "Not quite — the mistake is checking only the chargeback ratio. Company policy escalates on chargeback, refund, or fraud ratios at or above 1%, measured by either count or amount — and this merchant's refund ratio by value already crosses that threshold.",
          "followup_question": {
            "task_prompt": "Does the 1% escalation threshold apply only to chargebacks, or to refunds and fraud ratios too?",
            "options": [
              { "label": "Only chargebacks", "correct": false },
              { "label": "Chargebacks, refunds, and fraud ratios alike", "correct": true }
            ],
            "article_citation": "Company AML Policy"
          }
        },
        {
          "id": "flag-q5",
          "difficulty": "medium",
          "mechanic": "passflag",
          "scenario": "A merchant's monthly processing summary from its current payment processor reports steady sales of roughly €400,000 a month across a large customer base. A quick check on independent website-traffic tools shows the merchant's site gets only a few hundred visits a month and has almost no social media presence.",
          "task_prompt": "Based on the details below, would you flag this mismatch for further verification, or accept the processor's figures as reported?",
          "article_citation": "Art. 63",
          "options": [
            { "label": "Accept the figures as reported", "correct": false },
            { "label": "Flag for further verification", "correct": true }
          ],
          "correct_feedback": "Correct — Flag. Maintaining a substantive, accurate profile of a merchant's activity means cross-checking claimed processing volumes against independent sources; traffic this low can't plausibly support the reported sales, so it needs verification before the figures are relied on.",
          "incorrect_feedback": "Not quite — taking a processor's summary at face value skips a basic consistency check. A merchant's economic profile must be corroborated against independent sources like website-traffic data, and a mismatch this large between claimed sales and visible traffic is a red flag requiring verification.",
          "followup_question": {
            "task_prompt": "Why should a merchant's self-reported processing volumes be checked against independent sources like website-traffic tools?",
            "options": [
              { "label": "To confirm the claimed activity is plausible given the merchant's real-world footprint", "correct": true },
              { "label": "It isn't necessary once a processor has reported the figures", "correct": false }
            ],
            "article_citation": "Art. 63"
          }
        },
        {
          "id": "flag-q6",
          "difficulty": "medium",
          "mechanic": "mcq",
          "scenario": "The AMLCO has spent two weeks investigating a concern an Underwriting analyst raised about a merchant's ownership structure. The investigation turns up genuine, well-founded grounds for suspicion of money laundering.",
          "task_prompt": "What must the AMLCO do next with this confirmed suspicion?",
          "article_citation": "Art. 66",
          "options": [
            { "label": "File a formal Suspicion Report with MOKAS", "correct": true },
            { "label": "Close the file since the analyst already raised it", "correct": false },
            { "label": "Ask the merchant directly to explain the ownership structure", "correct": false },
            { "label": "Wait for MOKAS to request the information", "correct": false }
          ],
          "correct_feedback": "Correct — once the AMLCO's own investigation confirms the suspicion is genuinely warranted, a formal Suspicion Report must be submitted to MOKAS, containing all relevant information on the merchant and the activity.",
          "incorrect_feedback": "Not quite — closing the file, going back to the merchant, or waiting for MOKAS to ask are all wrong. Once the AMLCO confirms genuine grounds for suspicion, a formal Suspicion Report must be filed with MOKAS.",
          "followup_question": {
            "task_prompt": "Who submits the formal Suspicion Report to MOKAS?",
            "options": [
              { "label": "The AMLCO", "correct": true },
              { "label": "The Underwriting analyst who first raised it", "correct": false }
            ],
            "article_citation": "Art. 66"
          }
        },
        {
          "id": "flag-q7",
          "difficulty": "medium",
          "mechanic": "checklist",
          "scenario": "Reviewing a payments merchant's onboarding file, an Underwriting analyst notes: its prior processing history sits under a different legal entity and domain than the one applying now; its billing descriptor is a generic name unrelated to its actual storefront brand; its declared monthly volume is far higher than its website traffic can plausibly support; and its head office address matches the one already on file with no discrepancy.",
          "task_prompt": "Select every red flag actually present in this case.",
          "article_citation": "Art. 64; Company AML Policy",
          "options": [
            { "label": "Processing history references a different legal entity/domain than the one onboarding", "correct": true },
            { "label": "Billing descriptor doesn't relate to the merchant's actual brand", "correct": true },
            { "label": "Declared volume implausible given website traffic", "correct": true },
            { "label": "Head office address discrepancy", "correct": false },
            { "label": "Merchant operates in a sanctioned jurisdiction", "correct": false }
          ],
          "correct_feedback": "Correct. Three genuine red flags are present: the legal-entity/domain mismatch, the unrecognisable billing descriptor, and the volume-versus-traffic mismatch. The address is consistent, and no sanctioned jurisdiction was mentioned, so neither belongs on the list.",
          "incorrect_feedback": "Not quite — the case describes three real red flags (entity/domain mismatch, descriptor mismatch, and volume-versus-traffic mismatch), but the address is consistent and no sanctioned jurisdiction was mentioned, so those two don't belong.",
          "followup_question": {
            "task_prompt": "If a merchant's billing descriptor doesn't relate to its actual business name or brand, why is that a red flag?",
            "options": [
              { "label": "Cardholders won't recognise the charge on their statement, raising dispute and fraud risk", "correct": true },
              { "label": "It isn't a red flag — descriptors don't need to match the brand", "correct": false }
            ],
            "article_citation": "Company AML Policy"
          }
        },
        {
          "id": "flag-q8",
          "difficulty": "hard",
          "mechanic": "passflag",
          "scenario": "A World-Check screening run during periodic review returns a true hit: one of the merchant's shareholders was named in a prior enforcement action for sanctions violations at another company several years ago. The merchant's file contains no information addressing this at all.",
          "task_prompt": "Based on the details below, would you escalate this to the AMLCO for further investigation, or close the review since the merchant entity itself has a clean record?",
          "article_citation": "Company AML Policy",
          "options": [
            { "label": "Close the review — merchant entity itself is clean", "correct": false },
            { "label": "Escalate to the AMLCO for further investigation", "correct": true }
          ],
          "correct_feedback": "Correct — Escalate. A true World-Check hit on a shareholder tied to a prior sanctions violation must go to the AMLCO/Compliance, who should also collect audit reports or other evidence to assess whether the issue was ever resolved before any decision is made.",
          "incorrect_feedback": "Not quite — a hit on a shareholder isn't cancelled out by the merchant entity itself looking clean; ownership matters. A true World-Check hit on a director, shareholder, or UBO requires escalation to the AMLCO, and internal/external audit reports should be gathered to check whether the matter was resolved.",
          "followup_question": {
            "task_prompt": "When a World-Check hit on a merchant's shareholder or UBO is confirmed as a true match, what should be gathered to assess the issue?",
            "options": [
              { "label": "Internal/external audit reports to assess whether the matter was resolved", "correct": true },
              { "label": "Nothing further — a shareholder-level hit doesn't need follow-up", "correct": false }
            ],
            "article_citation": "Company AML Policy"
          }
        },
        {
          "id": "flag-q9",
          "difficulty": "hard",
          "mechanic": "passflag",
          "scenario": "An online gambling merchant applying for onboarding states it does not accept players from any comprehensively sanctioned country. Its submitted transaction samples show customer IP ranges concentrated in a country currently under comprehensive sanctions, and no supporting compliance documentation has been provided.",
          "task_prompt": "Based on the details below, would you flag this application pending corroborating documentation, or approve it based on the merchant's written statement?",
          "article_citation": "Company AML Policy",
          "options": [
            { "label": "Approve based on the written statement", "correct": false },
            { "label": "Flag pending corroborating documentation", "correct": true }
          ],
          "correct_feedback": "Correct — Flag. A high-risk-industry merchant's claim of sanctions compliance must be corroborated with supporting documentation, not taken on trust — especially where the merchant's own transaction data appears to contradict the claim.",
          "incorrect_feedback": "Not quite — taking the merchant's written word alone is the mistake here. High-risk merchants operating in, or accepting customers from, a comprehensively sanctioned or FATF-listed high-risk country must have compliance claims corroborated with real supporting documentation before approval.",
          "followup_question": {
            "task_prompt": "Is a high-risk merchant's own written claim of sanctions compliance sufficient on its own to approve onboarding?",
            "options": [
              { "label": "No — it must be corroborated with supporting documentation", "correct": true },
              { "label": "Yes — a written statement from the merchant is sufficient", "correct": false }
            ],
            "article_citation": "Company AML Policy"
          }
        },
        {
          "id": "flag-q10",
          "difficulty": "hard",
          "mechanic": "passflag",
          "scenario": "Pre-onboarding screening of a new merchant against Visa's VMSS and Mastercard's MATCH databases returns a match: the merchant was previously terminated by another acquirer under a reason code linked to excessive fraud activity. The application otherwise looks complete and the analyst is ready to approve.",
          "task_prompt": "Based on the details below, would you escalate this to the Head of Underwriting before proceeding, or approve it since the paperwork is complete?",
          "article_citation": "Company AML Policy",
          "options": [
            { "label": "Approve — paperwork is complete", "correct": false },
            { "label": "Escalate to the Head of Underwriting", "correct": true }
          ],
          "correct_feedback": "Correct — Escalate. A VMSS/MATCH match indicates the merchant was previously terminated for suspected fraud or financial misconduct elsewhere, and company policy requires escalation to the Head of Underwriting before any onboarding decision is made, regardless of how complete the paperwork looks.",
          "incorrect_feedback": "Not quite — complete paperwork doesn't outweigh a MATCH/VMSS hit. A match against these databases signals possible prior financial misconduct and must be escalated to the Head of Underwriting before the application proceeds any further.",
          "followup_question": {
            "task_prompt": "What does a match on Visa's VMSS or Mastercard's MATCH database during merchant screening indicate?",
            "options": [
              { "label": "Possible prior termination for fraud or financial misconduct, requiring escalation", "correct": true },
              { "label": "A routine data-entry duplicate that can be ignored", "correct": false }
            ],
            "article_citation": "Company AML Policy"
          }
        }
      ]
    }
  ],
  "glossary": [
    { "term": "AML", "definition": "Anti-Money Laundering — laws and controls designed to stop illegal money from being disguised as legitimate funds.", "source": "Company AML Policy" },
    { "term": "CFT", "definition": "Countering the Financing of Terrorism — controls aimed at stopping funds from reaching terrorist activity.", "source": "Company AML Policy" },
    { "term": "CDD", "definition": "Customer Due Diligence — the baseline identity, ownership, and business checks done on every merchant before onboarding.", "source": "Art. 26" },
    { "term": "SDD", "definition": "Simplified Due Diligence — lighter checks allowed for confirmed low-risk merchants, such as those publicly listed on a recognized stock exchange.", "source": "Company AML Policy" },
    { "term": "EDD", "definition": "Enhanced Due Diligence — extra checks required for High risk merchants, on top of Standard CDD.", "source": "Art. 42" },
    { "term": "UBO", "definition": "Ultimate Beneficial Owner — a natural person who owns or controls 25% or more of a merchant's shares (or 10%+ for High risk merchants under EDD).", "source": "Art. 2" },
    { "term": "PEP", "definition": "Politically Exposed Person — someone who holds, or has held within the last 12 months, a prominent public function, plus their immediate family and close associates.", "source": "Art. 46" },
    { "term": "AMLCO", "definition": "Anti-Money Laundering Compliance Officer — the person the company appoints to run AML compliance; the first internal contact for any suspicion.", "source": "Art. 65" },
    { "term": "MOKAS", "definition": "Cyprus's Financial Intelligence Unit — the external body that receives formal Suspicion Reports from the AMLCO, not a direct staff reporting line.", "source": "Art. 66" },
    { "term": "MoR", "definition": "Merchant of Record — the legal entity being onboarded as the merchant for payment processing.", "source": "Company Underwriting Policy" },
    { "term": "Shell Company", "definition": "A legal entity with no real physical presence or genuine business activity beyond a mailing address — must always be refused.", "source": "Art. 37" },
    { "term": "Trust Deed", "definition": "The legal document setting out a trust's terms — required whenever a trust appears in a merchant's ownership structure.", "source": "Art. 44" },
    { "term": "Trust Agreement", "definition": "The legal document setting out a trust's terms — required whenever a trust appears in a merchant's ownership structure.", "source": "Art. 44" },
    { "term": "SOW", "definition": "Source of Wealth — how a UBO's overall wealth and assets were built up over time, broader than a single transaction.", "source": "Company SOW Policy" },
    { "term": "SOF", "definition": "Source of Funds — where the money for one specific transaction came from, narrower than Source of Wealth.", "source": "Company SOW Policy" },
    { "term": "AFS", "definition": "Audited Financial Statements — a company's financial statements independently verified by an auditor.", "source": "Company Underwriting Policy" },
    { "term": "HR country", "definition": "A jurisdiction identified as carrying elevated money-laundering or terrorist-financing risk, for example by the EU or FATF.", "source": "Art. 50" },
    { "term": "KYC", "definition": "Know Your Customer — the broader practice of identifying and verifying who you're doing business with.", "source": "Company AML Policy" },
    { "term": "Travel Rule", "definition": "The rule requiring originator and beneficiary information to travel with a crypto-asset transaction.", "source": "Art. 62" },
    { "term": "World-Check", "definition": "A sanctions and adverse-media screening database used to check merchants, directors, shareholders and UBOs.", "source": "Company AML Policy" },
    { "term": "VMSS", "definition": "Visa Merchant Screening Service — a Visa database of merchants flagged for high-risk or fraudulent activity.", "source": "Company AML Policy" },
    { "term": "MATCH", "definition": "Mastercard Alert to Control High-Risk Merchants — a database of merchants previously terminated for high-risk activity.", "source": "Company AML Policy" },
    { "term": "FATF", "definition": "Financial Action Task Force — the global body that sets AML/CFT standards and lists high-risk jurisdictions.", "source": "Company AML Policy" },
    { "term": "Head of Underwriting", "definition": "The senior manager who reviews escalated onboarding decisions, including matches on fraud-screening databases.", "source": "Company Underwriting Policy" },
    { "term": "Risk team", "definition": "The internal team that reviews escalations tied to elevated risk — chargeback/fraud ratios, high-risk industries, and card-scheme registrations.", "source": "Company Underwriting Policy" }
  ]
};
