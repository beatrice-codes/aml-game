window.__COMPLIANCE_GRID_CONTENT__ = {
  "chapters": [
    {
      "chapter_key": "foundations",
      "briefing": {
        "title": "The Basics",
        "description": "Why AML rules exist, who they apply to, and the core terms every later chapter builds on.",
        "objectives": [
          "Know which businesses this Directive applies to, and why.",
          "Understand why the rules scale with a business's size and risk.",
          "Learn the key terms used throughout the game."
        ],
        "article_range": "Articles 1-5"
      },
      "questions": [
        {
          "id": "foundations-q1",
          "difficulty": "easy",
          "mechanic": "mcq",
          "scenario": "",
          "task_prompt": "What is this Directive's official short title?",
          "options": [
            {
              "label": "Prevention of Money Laundering from Illegal Activities and the Financing of Terrorism Directive of 2025",
              "correct": true
            },
            {
              "label": "Central Bank of Cyprus AML/CFT Directive 2025",
              "correct": false
            },
            {
              "label": "Prevention and Suppression of Money Laundering Activities Law of 2025",
              "correct": false
            },
            {
              "label": "Cyprus Financial Crime Prevention Directive of 2025",
              "correct": false
            }
          ],
          "article_citation": "Art. 1",
          "correct_feedback": "Correct — that's the exact fixed title, not a paraphrase.",
          "incorrect_feedback": "Not quite — the fixed title is 'the Prevention of Money Laundering from Illegal Activities and the Financing of Terrorism Directive of 2025.'",
          "followup_question": {
            "task_prompt": "Which year is in the Directive's official title?",
            "options": [
              {
                "label": "2025",
                "correct": true
              },
              {
                "label": "2019",
                "correct": false
              },
              {
                "label": "2007",
                "correct": false
              },
              {
                "label": "2015",
                "correct": false
              }
            ],
            "article_citation": "Art. 1"
          }
        },
        {
          "id": "foundations-q2",
          "difficulty": "easy",
          "mechanic": "match_term",
          "scenario": "",
          "task_prompt": "Match each term to its definition.",
          "article_citation": "Art. 2",
          "correct_feedback": "All five matched — these are core Article 2 definitions you'll see throughout the game.",
          "incorrect_feedback": "",
          "pairs": [
            {
              "term": "Senior management",
              "definition": "Defined in Article 2 as the persons responsible for the day-to-day management of an obliged entity, including the CEO and/or executive members of the management body.",
              "source": "Art. 2"
            },
            {
              "term": "the Law",
              "definition": "Shorthand defined in Article 2 for the Prevention and Suppression of Money Laundering Activities Laws of 2007 to 2024 — the primary Cypriot AML/CFT statute this Directive implements in more detail.",
              "source": "Art. 2"
            },
            {
              "term": "UBO (Ultimate Beneficial Owner)",
              "definition": "The natural person(s) who ultimately own or control a customer entity (or on whose behalf a transaction is conducted) — in practice, anyone owning or controlling 25% or more of a company's capital or voting rights, or otherwise exercising significant influence.",
              "source": "Art. 2 of the Law (cross-referenced at Arts. 26, 37, 44, 45, 48)"
            },
            {
              "term": "Source of Wealth",
              "definition": "The origin of a person's total wealth, not just one transaction — required for PEPs and high-risk relationships",
              "source": "Art. 42, 46"
            },
            {
              "term": "Source of Funds",
              "definition": "Where the money for a specific transaction or relationship came from",
              "source": "Art. 26"
            }
          ]
        },
        {
          "id": "foundations-q3",
          "difficulty": "easy",
          "mechanic": "stamp",
          "scenario": "",
          "task_prompt": "What's the minimum shareholding that counts as a 'substantial interest'?",
          "options": [
            {
              "label": "25%",
              "correct": true
            },
            {
              "label": "10%",
              "correct": false
            },
            {
              "label": "20%",
              "correct": false
            },
            {
              "label": "50%",
              "correct": false
            }
          ],
          "article_citation": "Art. 2",
          "correct_feedback": "Correct — 25% or more of any share class qualifies (or equivalent control/influence).",
          "incorrect_feedback": "Not quite — the threshold is 25% or more of any share class, not this figure.",
          "followup_question": {
            "task_prompt": "True or false: exactly 25% can qualify as a 'substantial interest'?",
            "options": [
              {
                "label": "True",
                "correct": true
              },
              {
                "label": "False",
                "correct": false
              }
            ],
            "article_citation": "Art. 2"
          }
        },
        {
          "id": "foundations-q5",
          "difficulty": "medium",
          "mechanic": "stamp",
          "scenario": "",
          "task_prompt": "Which of these are CBC-supervised 'obliged entity' categories? Select all that apply.",
          "options": [
            {
              "label": "Credit institutions",
              "correct": true
            },
            {
              "label": "Electronic money institutions",
              "correct": true
            },
            {
              "label": "Payment institutions",
              "correct": true
            },
            {
              "label": "Currency exchange bureaus",
              "correct": true
            },
            {
              "label": "Real estate agents",
              "correct": false
            },
            {
              "label": "Casinos",
              "correct": false
            }
          ],
          "select_count": 4,
          "article_citation": "Art. 3",
          "correct_feedback": "Correct — all four are CBC-supervised under Article 3. Real estate agents and casinos are obliged entities too, just supervised elsewhere.",
          "incorrect_feedback": "Not quite — Article 3's CBC-supervised list is credit institutions, e-money institutions, payment institutions, and currency exchange bureaus.",
          "followup_question": {
            "task_prompt": "Is a currency exchange bureau named under Article 3?",
            "options": [
              {
                "label": "Yes",
                "correct": true
              },
              {
                "label": "No",
                "correct": false
              }
            ],
            "article_citation": "Art. 3"
          }
        },
        {
          "id": "foundations-q16",
          "difficulty": "medium",
          "mechanic": "calm_alert",
          "scenario": "ExchangeCo runs two Cyprus shopfronts converting cash and remitting funds abroad.",
          "task_prompt": "Is ExchangeCo an 'obliged entity' under Article 3? Pass or Flag.",
          "options": [
            {
              "label": "Pass",
              "correct": false
            },
            {
              "label": "Flag",
              "correct": true
            }
          ],
          "article_citation": "Art. 3",
          "correct_feedback": "Correct — currency exchange bureaus are listed at Article 3(d), so ExchangeCo is in scope.",
          "incorrect_feedback": "Not quite — Article 3(d) lists currency exchange bureaus, so ExchangeCo must comply.",
          "followup_question": {
            "task_prompt": "Must currency exchange bureaus comply with this Directive?",
            "options": [
              {
                "label": "Yes",
                "correct": true
              },
              {
                "label": "No",
                "correct": false
              }
            ],
            "article_citation": "Art. 3"
          }
        },
        {
          "id": "foundations-q8",
          "difficulty": "medium",
          "mechanic": "flip_card",
          "scenario": "",
          "task_prompt": "Article 5 requires weighing nature, size, complexity, AND ML/TF risk level together — not just one factor.",
          "article_citation": "Art. 5",
          "claim": "Article 5 requires weighing nature, size, complexity, AND ML/TF risk level together — not just one factor.",
          "answer": true,
          "why": "Correct — Article 5 requires weighing nature, size, complexity, and risk together; no single factor (like customer count or group membership) is enough on its own."
        },
        {
          "id": "foundations-quickcall",
          "difficulty": "hard",
          "mechanic": "quickcall",
          "scenario": "",
          "task_prompt": "Quick calls — rate each entity's compliance rigor under Article 5(2). Tap fast.",
          "items": [
            {
              "label": "SmallFX — single branch, Larnaca, 4 employees, retail walk-in customers only.",
              "options": [
                {
                  "label": "Low risk",
                  "correct": true
                },
                {
                  "label": "Medium risk",
                  "correct": false
                },
                {
                  "label": "High risk",
                  "correct": false
                }
              ]
            },
            {
              "label": "RegioPay — payment institution, 12 branches in 3 EU states, standard remittance/card products.",
              "options": [
                {
                  "label": "Low risk",
                  "correct": false
                },
                {
                  "label": "Medium risk",
                  "correct": true
                },
                {
                  "label": "High risk",
                  "correct": false
                }
              ]
            },
            {
              "label": "GlobalCoin — EMI in 20+ countries, agents/distributors, crypto-linked products, outsourced onboarding.",
              "options": [
                {
                  "label": "Low risk",
                  "correct": false
                },
                {
                  "label": "Medium risk",
                  "correct": false
                },
                {
                  "label": "High risk",
                  "correct": true
                }
              ]
            }
          ],
          "article_citation": "Art. 5",
          "correct_feedback": "Correct across the board — rigor scales with reach, complexity and size: single-branch lowest, multi-country payment institution mid, 20+ country crypto-linked network highest.",
          "incorrect_feedback": "One or more calls were off — rigor scales with reach, complexity and size: single-branch lowest, multi-country payment institution mid, 20+ country crypto-linked network highest."
        },
        {
          "id": "foundations-q15",
          "difficulty": "hard",
          "mechanic": "spot_outlier",
          "scenario": "A Compliance Officer must decide if an onboarding case is a 'customer at a distance.'",
          "task_prompt": "Which scenario fits Article 2's 'customer at a distance' definition?",
          "options": [
            {
              "label": "Identity verified by video link, with no physical presence involved",
              "correct": true
            },
            {
              "label": "Customer visits a branch but forgot their ID",
              "correct": false
            },
            {
              "label": "Customer introduced by someone who met them face-to-face for the entity",
              "correct": false
            },
            {
              "label": "Customer uses a kiosk inside a staffed branch",
              "correct": false
            }
          ],
          "article_citation": "Art. 2",
          "correct_feedback": "Correct — video-link verification with no physical presence by the entity qualifies.",
          "incorrect_feedback": "Not quite — the test is physical presence by the entity or its representative; these cases all involve that, unlike video verification.",
          "followup_question": {
            "task_prompt": "Can video-link identity verification still count as a 'customer at a distance'?",
            "options": [
              {
                "label": "Yes",
                "correct": true
              },
              {
                "label": "No",
                "correct": false
              }
            ],
            "article_citation": "Art. 2"
          }
        },
        {
          "id": "foundations-q6",
          "difficulty": "hard",
          "mechanic": "spot_outlier",
          "scenario": "Article 3's lettering runs (a)-(f), then jumps to (h) — there's no (g).",
          "task_prompt": "What's the right response to a missing subparagraph (g)?",
          "options": [
            {
              "label": "Flag it for legal sign-off and check the current consolidated text",
              "correct": true
            },
            {
              "label": "Ignore it — numbering gaps never matter",
              "correct": false
            },
            {
              "label": "Assume (g) covers casinos",
              "correct": false
            },
            {
              "label": "Treat it as proof the Directive isn't in force",
              "correct": false
            }
          ],
          "article_citation": "Art. 3",
          "correct_feedback": "Correct — flag unexplained gaps for legal sign-off and verify against the current text.",
          "incorrect_feedback": "Not quite — don't guess or assume it's meaningless; flag gaps like this for legal sign-off and check the source text.",
          "followup_question": {
            "task_prompt": "Should an unexplained lettering gap be verified against the source text, or assumed to mean nothing?",
            "options": [
              {
                "label": "Verified against the source text",
                "correct": true
              },
              {
                "label": "Assumed to mean nothing",
                "correct": false
              }
            ],
            "article_citation": "Art. 3"
          }
        }
      ]
    },
    {
      "chapter_key": "reading_risk",
      "briefing": {
        "title": "Reading Risk",
        "description": "Not every customer gets the same level of checking. Learn how risk gets assessed — and why it has to keep up as things change.",
        "objectives": [
          "See why one risk check isn't enough — you need two.",
          "Learn what pushes a customer into lighter or heavier checks.",
          "Understand why risk reviews never really stop."
        ],
        "article_range": "Articles 18-23"
      },
      "questions": [
        {
          "id": "rr-01",
          "difficulty": "easy",
          "mechanic": "match_term",
          "scenario": "",
          "task_prompt": "Match each term to its definition.",
          "article_citation": "Art. 18; Art. 19",
          "correct_feedback": "Both matched — Article 18 requires both a business-wide assessment AND an individual one per relationship; neither substitutes for the other.",
          "incorrect_feedback": "",
          "pairs": [
            {
              "term": "Business-wide risk assessment",
              "definition": "An assessment of the ML/TF risk arising from the nature and complexity of an entity's activities as a whole, as distinct from any single relationship.",
              "source": "Art. 18"
            },
            {
              "term": "Individual risk assessment",
              "definition": "An assessment of the ML/TF risk arising from establishing a specific business relationship or executing a specific individual transaction; it must contribute to, but can never substitute for, the business-wide assessment.",
              "source": "Art. 18, Art. 19"
            }
          ]
        },
        {
          "id": "rr-04",
          "difficulty": "easy",
          "mechanic": "flip_card",
          "scenario": "",
          "task_prompt": "The Compliance Officer identifies and assesses ML/TF risk entirely alone, without support from senior management or other units.",
          "article_citation": "Art. 19",
          "claim": "The Compliance Officer identifies and assesses ML/TF risk entirely alone, without support from senior management or other units.",
          "answer": false,
          "why": "False — Article 19 places the responsibility on the Compliance Officer, but with senior management and other units required to support that work."
        },
        {
          "id": "rr-18",
          "difficulty": "easy",
          "mechanic": "flip_card",
          "scenario": "",
          "task_prompt": "A higher-risk entity must assess the effectiveness of its controls more often than a lower-risk one.",
          "article_citation": "Art. 21",
          "claim": "A higher-risk entity must assess the effectiveness of its controls more often than a lower-risk one.",
          "answer": true,
          "why": "Correct — Article 21 ties the frequency and intensity of control assessments to the entity's own risk level, not a fixed CBC calendar."
        },
        {
          "id": "rr-07",
          "difficulty": "medium",
          "mechanic": "calm_alert",
          "scenario": "A Compliance Officer rates overall ML/TF risk using only the National Risk Assessment, no other sources.",
          "task_prompt": "Pass or flag: rating risk using only one source (the NRA)?",
          "options": [
            {
              "label": "Pass",
              "correct": false
            },
            {
              "label": "Flag",
              "correct": true
            }
          ],
          "article_citation": "Art. 19",
          "correct_feedback": "Correct to flag — Article 19 bars relying on a single source; the NRA must be combined with other required sources.",
          "incorrect_feedback": "Not quite — this should be flagged. Article 19 bars relying on a single source; even the NRA must be combined with others.",
          "followup_question": {
            "task_prompt": "Can an entity, as a rule, rely on just one information source?",
            "options": [
              {
                "label": "No",
                "correct": true
              },
              {
                "label": "Yes, if it's a government source",
                "correct": false
              }
            ],
            "article_citation": "Art. 19"
          }
        },
        {
          "id": "rr-08",
          "difficulty": "medium",
          "mechanic": "flip_card",
          "scenario": "",
          "task_prompt": "Outsourcing a risk-scoring IT system relieves the entity of the duty to understand how it works.",
          "article_citation": "Art. 19",
          "claim": "Outsourcing a risk-scoring IT system relieves the entity of the duty to understand how it works.",
          "answer": false,
          "why": "False — even outsourced, Article 19 still requires the entity to understand the system, ensure GDPR compliance, and show the CBC its scores reflect its own view of risk."
        },
        {
          "id": "rr-10",
          "difficulty": "medium",
          "mechanic": "build_gate",
          "scenario": "A currency-exchange customer, normally lower-risk, shows signs of structuring deposits to launder money.",
          "task_prompt": "Which due-diligence tier now applies, under Article 20?",
          "options": [
            {
              "label": "Simplified",
              "tier": "Simplified",
              "correct": false
            },
            {
              "label": "Standard",
              "tier": "Standard",
              "correct": false
            },
            {
              "label": "Enhanced",
              "tier": "Enhanced",
              "correct": true
            }
          ],
          "gate_steps": [
            { "label": "Verify identity" },
            { "label": "Verify address" },
            { "label": "Confirm source of funds" },
            { "label": "Enhanced ongoing monitoring" }
          ],
          "gate_pattern": {
            "simplified": [true, false, false, false],
            "standard": [true, true, true, false],
            "enhanced": [true, true, true, true]
          },
          "article_citation": "Art. 20",
          "correct_feedback": "Correct — indications of attempted ML/TF bar Simplified due diligence and trigger Enhanced due diligence, not just Standard.",
          "incorrect_feedback": "Not quite — indications of attempted ML/TF bar Simplified due diligence here, and require Enhanced, not just Standard.",
          "followup_question": {
            "task_prompt": "Can SDD be applied when there are ML/TF indications?",
            "options": [
              {
                "label": "No",
                "correct": true
              },
              {
                "label": "Yes, if the customer has history with the entity",
                "correct": false
              }
            ],
            "article_citation": "Art. 20"
          }
        },
        {
          "id": "rr-19",
          "difficulty": "medium",
          "mechanic": "stamp",
          "scenario": "",
          "task_prompt": "Which of these bar Simplified Due Diligence under Article 20? Select all that apply.",
          "options": [
            {
              "label": "Indications of attempted ML/TF",
              "correct": true
            },
            {
              "label": "Doubts about the accuracy of information received",
              "correct": true
            },
            {
              "label": "Enhanced due diligence is mandatory",
              "correct": true
            },
            {
              "label": "Transaction exceeds a fixed euro threshold",
              "correct": false
            },
            {
              "label": "Customer is new to the entity",
              "correct": false
            }
          ],
          "select_count": 3,
          "article_citation": "Art. 20",
          "correct_feedback": "Correct — Article 20 bars SDD in exactly these three cases; no euro threshold or 'new customer' rule applies here.",
          "incorrect_feedback": "Not quite — Article 20 bars SDD only for: ML/TF indications, accuracy doubts, or where EDD is mandatory.",
          "followup_question": {
            "task_prompt": "Is 'doubts about information accuracy' one of the reasons SDD is barred?",
            "options": [
              {
                "label": "Yes",
                "correct": true
              },
              {
                "label": "No",
                "correct": false
              }
            ],
            "article_citation": "Art. 20"
          }
        },
        {
          "id": "rr-20",
          "difficulty": "medium",
          "mechanic": "order_chain",
          "scenario": "",
          "task_prompt": "Put the three due-diligence tiers in order, from the least intensive checks to the most intensive.",
          "article_citation": "Art. 20; Art. 41; Art. 42",
          "correct_feedback": "Correct order — Simplified is the lightest tier (only where risk is confirmed low), Standard is the default, and Enhanced is the most intensive, reserved for the mandatory high-risk triggers.",
          "incorrect_feedback": "Not quite — Simplified is the lightest tier, Standard is the default in between, and Enhanced is the most intensive, applied only where a mandatory trigger requires it.",
          "chain_items": [
            {
              "label": "Simplified Due Diligence",
              "order": 1
            },
            {
              "label": "Standard Due Diligence",
              "order": 2
            },
            {
              "label": "Enhanced Due Diligence",
              "order": 3
            }
          ]
        },
        {
          "id": "rr-13",
          "difficulty": "hard",
          "mechanic": "calm_alert",
          "scenario": "An entity's risk-scoring model is built so no segment can ever score 'high-risk.'",
          "task_prompt": "Pass or flag: a model designed so nothing can ever score high-risk?",
          "options": [
            {
              "label": "Pass",
              "correct": false
            },
            {
              "label": "Flag",
              "correct": true
            }
          ],
          "article_citation": "Art. 19",
          "correct_feedback": "Correct to flag — Article 19 bans weighting risk factors so no relationship can ever be rated high-risk.",
          "incorrect_feedback": "Not quite — this design is itself the violation. Article 19 bans models where no relationship can ever be rated high-risk.",
          "followup_question": {
            "task_prompt": "Can a model be designed so no relationship can ever be rated high-risk?",
            "options": [
              {
                "label": "No",
                "correct": true
              },
              {
                "label": "Yes, if front-line KYC is strong enough",
                "correct": false
              }
            ],
            "article_citation": "Art. 19"
          }
        },
        {
          "id": "reading_risk-quickcall",
          "difficulty": "hard",
          "mechanic": "quickcall",
          "scenario": "",
          "task_prompt": "Quick calls — high risk or low risk, per Article 20? Tap fast.",
          "items": [
            {
              "label": "A relationship falling into a statutory high-risk category under Article 64(1).",
              "options": [
                {
                  "label": "Low risk",
                  "correct": false
                },
                {
                  "label": "High risk",
                  "correct": true
                }
              ]
            },
            {
              "label": "A relationship the entity itself self-classifies as high-risk under Article 64(3).",
              "options": [
                {
                  "label": "Low risk",
                  "correct": false
                },
                {
                  "label": "High risk",
                  "correct": true
                }
              ]
            },
            {
              "label": "A relationship clear of ML/TF indications, doubts, and EDD triggers.",
              "options": [
                {
                  "label": "Low risk",
                  "correct": true
                },
                {
                  "label": "High risk",
                  "correct": false
                }
              ]
            }
          ],
          "article_citation": "Art. 20",
          "correct_feedback": "Correct across the board — both statutory (Art. 64(1)) and self-classified (Art. 64(3)) high-risk relationships need Enhanced due diligence; only a clean relationship is low-risk.",
          "incorrect_feedback": "One or more calls were off — both statutory (Art. 64(1)) and self-classified (Art. 64(3)) high-risk relationships need Enhanced due diligence; only a clean relationship is low-risk."
        },
        {
          "id": "rr-17",
          "difficulty": "hard",
          "mechanic": "calm_alert",
          "scenario": "A Compliance Officer skips the annual reassessment, believing nothing has changed since last year.",
          "task_prompt": "Pass or flag: skipping the annual reassessment because nothing seems to have changed?",
          "options": [
            {
              "label": "Pass",
              "correct": false
            },
            {
              "label": "Flag",
              "correct": true
            }
          ],
          "article_citation": "Art. 23",
          "correct_feedback": "Correct to flag — Article 23 requires an annual reassessment regardless; concluding 'nothing changed' isn't a substitute for doing it.",
          "incorrect_feedback": "Not quite — skipping it isn't compliant, even if nothing changed. Article 23 mandates the reassessment itself, every year.",
          "followup_question": {
            "task_prompt": "Is an annual reassessment required even if the entity expects no substantive changes?",
            "options": [
              {
                "label": "Yes",
                "correct": true
              },
              {
                "label": "No, it can be skipped if unchanged",
                "correct": false
              }
            ],
            "article_citation": "Art. 23"
          }
        },
        {
          "id": "rr-21",
          "difficulty": "medium",
          "mechanic": "order_chain",
          "scenario": "",
          "task_prompt": "Put the annual risk-review cycle in order.",
          "article_citation": "Art. 23",
          "correct_feedback": "Correct order — the mandatory annual reassessment happens first, its findings are written up in the Risk Recording and Assessment Report, and that report then goes to the board and the CBC within three months of year-end.",
          "incorrect_feedback": "Not quite — the annual reassessment has to happen before its findings can be written up, and the resulting report only then goes to the board and the CBC, within three months of year-end.",
          "chain_items": [
            {
              "label": "Entity performs its mandatory annual risk reassessment",
              "order": 1
            },
            {
              "label": "Findings are written up in the Risk Recording and Assessment Report",
              "order": 2
            },
            {
              "label": "Report is submitted to the board and the CBC, within three months of year-end",
              "order": 3
            }
          ]
        }
      ]
    },
    {
      "chapter_key": "the_gate",
      "briefing": {
        "title": "The Gate",
        "description": "Every new customer has to clear a gate of checks before you can do business with them. Learn which checks apply, and when.",
        "objectives": [
          "Know what triggers an ID or due-diligence check.",
          "Sort customers into the right due-diligence tier.",
          "Spot when a relationship must be refused outright."
        ],
        "article_range": "Articles 24-41"
      },
      "questions": [
        {
          "id": "gate-q1",
          "difficulty": "easy",
          "mechanic": "mcq",
          "scenario": "",
          "task_prompt": "Which of these is a defining feature of a 'shell company' under Article 37?",
          "options": [
            {
              "label": "No genuine economic activity, and no physical presence beyond a mailing address",
              "correct": true
            },
            {
              "label": "It was incorporated more than 10 years ago",
              "correct": false
            },
            {
              "label": "It has fewer than 5 employees",
              "correct": false
            },
            {
              "label": "It operates in more than one country",
              "correct": false
            }
          ],
          "article_citation": "Art. 37",
          "correct_feedback": "Correct — a shell company under Article 37 has no genuine economic activity and no real physical presence, beyond perhaps a mailing address.",
          "incorrect_feedback": "Not quite — Article 37 defines a shell company by the absence of genuine economic activity and any real physical presence beyond a mailing address, not by age, headcount, or geography.",
          "followup_question": {
            "task_prompt": "True or false: a company can be a 'shell company' even if it has a mailing address?",
            "options": [
              {
                "label": "True",
                "correct": true
              },
              {
                "label": "False",
                "correct": false
              }
            ],
            "article_citation": "Art. 37"
          }
        },
        {
          "id": "gate-q10",
          "difficulty": "easy",
          "mechanic": "build_gate",
          "scenario": "New merchant account, no risk flags, but no formal low-risk finding made either.",
          "task_prompt": "With no low-risk finding or high-risk trigger, which CDD tier applies?",
          "options": [
            {
              "label": "Simplified",
              "correct": false,
              "tier": "Simplified"
            },
            {
              "label": "Standard",
              "correct": true,
              "tier": "Standard"
            },
            {
              "label": "Enhanced",
              "correct": false,
              "tier": "Enhanced"
            }
          ],
          "gate_steps": [
            { "label": "Verify identity" },
            { "label": "Verify address" },
            { "label": "Confirm source of funds" },
            { "label": "Enhanced ongoing monitoring" }
          ],
          "gate_pattern": {
            "simplified": [true, false, false, false],
            "standard": [true, true, true, false],
            "enhanced": [true, true, true, true]
          },
          "article_citation": "Art. 26; Art. 41",
          "correct_feedback": "Correct — Standard applies by default; Simplified needs a confirmed low-risk finding, Enhanced needs a high-risk trigger (e.g. Article 27).",
          "incorrect_feedback": "Not quite — Standard applies here by default; Simplified needs low-risk confirmation, Enhanced needs a high-risk trigger like Article 27.",
          "followup_question": {
            "task_prompt": "Is Simplified the default tier before any risk assessment is done?",
            "options": [
              {
                "label": "No — it requires an affirmative low-risk finding first",
                "correct": true
              },
              {
                "label": "Yes — it's the default unless proven otherwise",
                "correct": false
              }
            ],
            "article_citation": "Art. 41"
          }
        },
        {
          "id": "gate-q15",
          "difficulty": "easy",
          "mechanic": "build_gate",
          "scenario": "A merchant account has multiple directors/signatories; only one has had identity verified.",
          "task_prompt": "Toggle every person here who must be identity-verified before this account can open.",
          "gate_steps": [
            { "label": "The signatory who signed the application" },
            { "label": "Every other director or signatory on the account" },
            { "label": "Anyone else authorised to operate the account" },
            { "label": "Only signatories who have actually used the account so far" }
          ],
          "gate_pattern": [true, true, true, false],
          "article_citation": "Art. 33",
          "correct_feedback": "Correct — every director/signatory (and anyone authorised to operate the account) must be identity-verified, regardless of usage.",
          "incorrect_feedback": "Not quite — this is a gap; every director/signatory and authorised operator must be identity-verified, not just whoever's used the account so far.",
          "followup_question": {
            "task_prompt": "For a merchant account with three signatories, how many must be identity-verified?",
            "options": [
              {
                "label": "Only the primary signatory",
                "correct": false
              },
              {
                "label": "All three signatories",
                "correct": true
              }
            ],
            "article_citation": "Art. 33"
          }
        },
        {
          "id": "gate-q9",
          "difficulty": "medium",
          "mechanic": "build_gate",
          "scenario": "A merchant is a well-established LTD selling low-risk goods, with no subscription products, clean financials, healthy revenue, an active public presence, and a low chargeback rate — confirmed low risk, no ML/TF suspicion.",
          "task_prompt": "Which CDD tier applies here?",
          "options": [
            {
              "label": "Simplified",
              "correct": true,
              "tier": "Simplified"
            },
            {
              "label": "Standard",
              "correct": false,
              "tier": "Standard"
            },
            {
              "label": "Enhanced",
              "correct": false,
              "tier": "Enhanced"
            }
          ],
          "gate_steps": [
            { "label": "Verify identity" },
            { "label": "Verify address" },
            { "label": "Confirm source of funds" },
            { "label": "Enhanced ongoing monitoring" }
          ],
          "gate_pattern": {
            "simplified": [true, false, false, false],
            "standard": [true, true, true, false],
            "enhanced": [true, true, true, true]
          },
          "article_citation": "Art. 41",
          "correct_feedback": "Correct — a merchant like this qualifies for Simplified Due Diligence once low risk and no suspicion are confirmed.",
          "incorrect_feedback": "Not quite — confirmed low risk and no suspicion here permit Simplified Due Diligence for this merchant.",
          "followup_question": {
            "task_prompt": "Can Simplified Due Diligence apply if there's ML/TF suspicion?",
            "options": [
              {
                "label": "No — never",
                "correct": true
              },
              {
                "label": "Yes, if the amount is small enough",
                "correct": false
              }
            ],
            "article_citation": "Art. 41"
          }
        },
        {
          "id": "gate-q3",
          "difficulty": "medium",
          "mechanic": "build_gate",
          "scenario": "An 18-month-dormant merchant account resumes processing volume, and the merchant also requests a new payment product.",
          "task_prompt": "Toggle every event here that triggers a mandatory ID/profile update check.",
          "gate_steps": [
            { "label": "Dormant account resuming activity" },
            { "label": "Merchant requesting a new payment product" },
            { "label": "Merchant's registered address unchanged" },
            { "label": "Routine login by the merchant" }
          ],
          "gate_pattern": [true, true, false, false],
          "article_citation": "Art. 25",
          "correct_feedback": "Correct — both dormant-account reactivation and a new-product request are listed triggers for an update check; an unchanged address or a routine login are not.",
          "incorrect_feedback": "Not quite — this is a mandatory trigger: both dormant-account reactivation and new-product requests require an update check, unlike an unchanged address or a routine login.",
          "followup_question": {
            "task_prompt": "Does a new-product request alone trigger an update check?",
            "options": [
              {
                "label": "Yes",
                "correct": true
              },
              {
                "label": "No",
                "correct": false
              }
            ],
            "article_citation": "Art. 25"
          }
        },
        {
          "id": "gate-q12",
          "difficulty": "medium",
          "mechanic": "flip_card",
          "scenario": "A merchant applies for onboarding as a sole trader; the business has two partners who both have authority over the account.",
          "task_prompt": "Every partner or authorised individual in a sole-trader/partnership merchant must be identity-verified, the same as any natural person.",
          "article_citation": "Art. 36",
          "claim": "Every partner or authorised individual in a sole-trader/partnership merchant must be identity-verified, the same as any natural person.",
          "answer": true,
          "why": "Correct — Article 36 requires verifying every partner or authorised individual, not just whoever signs the form or holds the largest share."
        },
        {
          "id": "gate-q16",
          "difficulty": "medium",
          "mechanic": "build_gate",
          "scenario": "A representative/agent acts for a merchant, but no authorisation document is on file.",
          "task_prompt": "Toggle every check that applies before a representative/agent can act for this merchant.",
          "gate_steps": [
            { "label": "Obtain a signed authorisation agreement" },
            { "label": "Keep a copy of the authorisation on file" },
            { "label": "Verify the representative's own identity" },
            { "label": "Skip the paperwork for a single one-off transaction" }
          ],
          "gate_pattern": [true, true, true, false],
          "article_citation": "Art. 34",
          "correct_feedback": "Correct — a copy of the authorisation agreement must be obtained and kept whenever a representative/agent acts for a merchant, alongside verifying the representative's own identity; there's no one-off exception.",
          "incorrect_feedback": "Not quite — a copy of the authorisation agreement must be obtained and kept before the representative/agent can act, and there's no exception for a single transaction.",
          "followup_question": {
            "task_prompt": "Is a copy required even for just one transaction?",
            "options": [
              {
                "label": "Yes — it applies whenever a representative/agent acts",
                "correct": true
              },
              {
                "label": "No — only for ongoing arrangements",
                "correct": false
              }
            ],
            "article_citation": "Art. 34"
          }
        },
        {
          "id": "gate-q13",
          "difficulty": "hard",
          "mechanic": "mcq",
          "scenario": "",
          "task_prompt": "Besides shell-company status, what else triggers mandatory refusal, under Article 37?",
          "options": [
            {
              "label": "Shell status alone — nothing else needed",
              "correct": false
            },
            {
              "label": "Shell status AND either: no audited-statement duty (none prepared), OR tax residence in a non-cooperative/tax-haven jurisdiction (or none at all)",
              "correct": true
            },
            {
              "label": "The company merely has a complex ownership structure",
              "correct": false
            },
            {
              "label": "The company operates in a high-risk third country",
              "correct": false
            }
          ],
          "article_citation": "Art. 37",
          "correct_feedback": "Correct — the test is conjunctive: shell status AND one of the two jurisdictional/tax conditions; otherwise it's a documented, risk-based decision.",
          "incorrect_feedback": "Not quite — shell status alone isn't enough; the audited-statements OR tax-residence condition must also be met, or it's a risk-based decision instead.",
          "followup_question": {
            "task_prompt": "If a shell company files audited statements and isn't in a listed jurisdiction, is refusal automatic?",
            "options": [
              {
                "label": "No — it falls to a risk-based, documented decision instead",
                "correct": true
              },
              {
                "label": "Yes — all shell companies are automatically prohibited",
                "correct": false
              }
            ],
            "article_citation": "Art. 37"
          }
        },
        {
          "id": "gate-q17",
          "difficulty": "hard",
          "mechanic": "mcq",
          "scenario": "",
          "task_prompt": "Are relationships under Articles 38 and 39 mandatory or discretionary?",
          "options": [
            {
              "label": "Both require establishing these relationships ('must')",
              "correct": false
            },
            {
              "label": "Discretionary ('may') for both, but Art. 38 adds mandatory info-gathering duties once established",
              "correct": true
            },
            {
              "label": "Article 39 requires mandatory enhanced due diligence in all cases",
              "correct": false
            },
            {
              "label": "Article 38 prohibits relationships with any third-country investment fund",
              "correct": false
            }
          ],
          "article_citation": "Art. 38; Art. 39",
          "correct_feedback": "Correct — establishing these relationships is discretionary ('may') in both; Art. 38 adds mandatory info-gathering duties once established, Art. 39 doesn't.",
          "incorrect_feedback": "Not quite — establishing the relationship is discretionary ('may') in both; only Art. 38 makes info-gathering mandatory once established.",
          "followup_question": {
            "task_prompt": "Is establishing a relationship under Article 39 mandatory or discretionary?",
            "options": [
              {
                "label": "Discretionary — the entity 'may' establish such a relationship",
                "correct": true
              },
              {
                "label": "Mandatory — the entity must accept all such providers",
                "correct": false
              }
            ],
            "article_citation": "Art. 39"
          }
        },
        {
          "id": "gate-q18",
          "difficulty": "medium",
          "mechanic": "order_chain",
          "scenario": "",
          "task_prompt": "Put these due-diligence steps in the order a customer relationship moves through them.",
          "article_citation": "Art. 26; Art. 42",
          "correct_feedback": "Correct order — identity is verified before the relationship is onboarded, source of funds is confirmed as part of that onboarding, and enhanced ongoing monitoring only applies once the relationship is live, continuing for its life.",
          "incorrect_feedback": "Not quite — identity verification comes first (it gates onboarding), then source-of-funds confirmation as part of onboarding itself, and only once the relationship exists does enhanced ongoing monitoring begin.",
          "chain_items": [
            {
              "label": "Verify the customer's identity",
              "order": 1
            },
            {
              "label": "Confirm the source of funds as part of onboarding",
              "order": 2
            },
            {
              "label": "Apply enhanced ongoing monitoring for the life of the relationship",
              "order": 3
            }
          ]
        },
        {
          "id": "the_gate-quickcall",
          "difficulty": "hard",
          "mechanic": "quickcall",
          "scenario": "",
          "task_prompt": "Quick calls — sort each customer's risk tier under Articles 27, 37 & 41. Tap fast.",
          "items": [
            {
              "label": "Small, stable sole-trader merchant with modest, steady turnover and no risk flags.",
              "options": [
                {
                  "label": "Low risk",
                  "correct": true
                },
                {
                  "label": "Medium risk",
                  "correct": false
                },
                {
                  "label": "High risk",
                  "correct": false
                }
              ]
            },
            {
              "label": "New merchant, no risk indicators, but no low-risk finding made.",
              "options": [
                {
                  "label": "Low risk",
                  "correct": false
                },
                {
                  "label": "Medium risk",
                  "correct": true
                },
                {
                  "label": "High risk",
                  "correct": false
                }
              ]
            },
            {
              "label": "Shell company, postal address only, no audited-statement requirement and none prepared.",
              "options": [
                {
                  "label": "Low risk",
                  "correct": false
                },
                {
                  "label": "Medium risk",
                  "correct": false
                },
                {
                  "label": "High risk",
                  "correct": true
                }
              ]
            },
            {
              "label": "Fully remote customer, self-assessed as increased ML/TF risk.",
              "options": [
                {
                  "label": "Low risk",
                  "correct": false
                },
                {
                  "label": "Medium risk",
                  "correct": false
                },
                {
                  "label": "High risk",
                  "correct": true
                }
              ]
            },
            {
              "label": "Well-established LTD selling low-risk goods: no subscriptions, clean financials, healthy revenue, active public presence, low chargebacks.",
              "options": [
                {
                  "label": "Low risk",
                  "correct": true
                },
                {
                  "label": "Medium risk",
                  "correct": false
                },
                {
                  "label": "High risk",
                  "correct": false
                }
              ]
            }
          ],
          "article_citation": "Art. 27; Art. 37; Art. 41",
          "correct_feedback": "Correct across the board — a stable sole trader and a confirmed low-risk merchant are low risk; an unflagged new merchant with no finding is medium (standard) risk; a qualifying shell company and a self-assessed high-risk remote customer are both high risk.",
          "incorrect_feedback": "One or more calls were off — a stable sole trader and a confirmed low-risk merchant are low risk; an unflagged new merchant is medium (standard) risk; a qualifying shell company and a self-assessed high-risk remote customer are both high risk."
        }
      ]
    },
    {
      "chapter_key": "enhanced_measures",
      "briefing": {
        "title": "High Alert",
        "description": "Some relationships are always high-risk: politically exposed people, shell structures, cross-border banking, and crypto. Learn the extra checks they require.",
        "objectives": [
          "Recognize the relationship types that always need extra checks.",
          "Apply the exact thresholds and review timelines that matter.",
          "Know when extra checks are mandatory, not optional."
        ],
        "article_range": "Articles 42-51"
      },
      "questions": [
        {
          "id": "eq_01",
          "difficulty": "easy",
          "mechanic": "match_term",
          "scenario": "",
          "task_prompt": "Match each term to its definition.",
          "article_citation": "Art. 41; Art. 42; Art. 46",
          "correct_feedback": "All three matched — PEPs are a mandatory EDD trigger, and SDD is barred wherever EDD is required.",
          "incorrect_feedback": "",
          "pairs": [
            {
              "term": "PEP (Politically Exposed Person)",
              "definition": "An individual who holds, or has held, a prominent public function (or their family members/close associates), creating higher exposure to corruption-related money-laundering risk.",
              "source": "Art. 46 (cross-referencing Art. 64(1)(c) of the Law and Art. 20a(3) of Directive (EU) 2015/849)"
            },
            {
              "term": "EDD (Enhanced Due Diligence)",
              "definition": "Additional, more intensive customer-checking measures applied on top of standard due diligence wherever ML/TF risk is assessed as higher; supplementary to, never a replacement for, standard measures.",
              "source": "Art. 42"
            },
            {
              "term": "SDD (Simplified Due Diligence)",
              "definition": "A reduced-intensity form of due diligence that may be applied only where risk is confirmed low and no ML/TF suspicion exists; never a full exemption from monitoring.",
              "source": "Art. 41; Art. 45"
            }
          ]
        },
        {
          "id": "eq_02",
          "difficulty": "easy",
          "mechanic": "flip_card",
          "scenario": "",
          "task_prompt": "An entity must rescan its whole client base for new PEPs at least once a month.",
          "article_citation": "Art. 46",
          "claim": "An entity must rescan its whole client base for new PEPs at least once a month.",
          "answer": true,
          "why": "Correct — the whole client base must be rescanned monthly for new PEPs, separate from (and more frequent than) the annual review of an existing PEP's profile."
        },
        {
          "id": "eq_08",
          "difficulty": "easy",
          "mechanic": "match_term",
          "scenario": "",
          "task_prompt": "Match each term to its definition.",
          "article_citation": "Art. 37; Art. 48",
          "correct_feedback": "Both matched — a \"shell bank\" (Art. 2 of the Law, checked before correspondent relationships) is a distinct concept from a \"shell company\" (Art. 37).",
          "incorrect_feedback": "",
          "pairs": [
            {
              "term": "Shell bank",
              "definition": "A credit institution (or equivalent) incorporated in a jurisdiction where it has no physical presence or meaningful management, and which is unaffiliated with any regulated financial group; correspondent institutions must confirm respondents are not shell banks.",
              "source": "Art. 2 of the Law, cross-referenced at Art. 48"
            },
            {
              "term": "Shell company",
              "definition": "A legal entity with no real physical presence beyond a mailing address, and no genuine business activity",
              "source": "Art. 37(2)"
            }
          ]
        },
        {
          "id": "eq_03",
          "difficulty": "medium",
          "mechanic": "build_gate",
          "scenario": "Trustees of the Alpha Family Trust want to open a business account, acting on the trust's behalf.",
          "task_prompt": "Which level of customer due diligence should apply to opening this account?",
          "article_citation": "Art. 44",
          "options": [
            {
              "label": "Simplified",
              "correct": false,
              "tier": "Simplified"
            },
            {
              "label": "Standard",
              "correct": false,
              "tier": "Standard"
            },
            {
              "label": "Enhanced",
              "correct": true,
              "tier": "Enhanced"
            }
          ],
          "gate_steps": [
            { "label": "Verify identity" },
            { "label": "Verify address" },
            { "label": "Confirm source of funds" },
            { "label": "Enhanced ongoing monitoring" }
          ],
          "gate_pattern": {
            "simplified": [true, false, false, false],
            "standard": [true, true, true, false],
            "enhanced": [true, true, true, true]
          },
          "correct_feedback": "Correct — trust/foundation accounts are a mandatory EDD trigger under Art. 42(1)(a) (also Art. 64(1) of the Law). Required measures include verifying the trust's legal basis, beneficial owners, and the original trust deed.",
          "incorrect_feedback": "Not quite — trust/foundation accounts are one of four relationship types under Art. 42(1) requiring mandatory enhanced due diligence, regardless of apparent risk. Simplified or standard measures don't apply.",
          "followup_question": {
            "task_prompt": "True or false: a trust account is automatically subject to mandatory EDD under Art. 42(1), regardless of apparent risk?",
            "options": [
              {
                "label": "True — one of four mandatory EDD triggers",
                "correct": true
              },
              {
                "label": "False — only if another high-risk factor is present",
                "correct": false
              }
            ],
            "article_citation": "Art. 42"
          }
        },
        {
          "id": "eq_04",
          "difficulty": "medium",
          "mechanic": "calm_alert",
          "scenario": "A merchant's settlement account shows a sudden pattern of transactions structured to stay just under the reporting threshold, in one week.",
          "task_prompt": "Flag this pattern for enhanced due diligence, or does it pass?",
          "article_citation": "Art. 43",
          "options": [
            {
              "label": "Pass",
              "correct": false
            },
            {
              "label": "Flag",
              "correct": true
            }
          ],
          "correct_feedback": "Correct — transactions structured to dodge reporting thresholds, with no economic justification, are a textbook 'unusual' pattern requiring EDD — e.g. establishing their purpose and increasing monitoring.",
          "incorrect_feedback": "Not quite — this is a textbook 'unusual' pattern: frequent transactions structured to dodge thresholds, with no economic justification. It should be flagged, not passed.",
          "followup_question": {
            "task_prompt": "Is structuring transactions to dodge reporting thresholds an example of an 'unusual' pattern?",
            "options": [
              {
                "label": "Yes",
                "correct": true
              },
              {
                "label": "No",
                "correct": false
              }
            ],
            "article_citation": "Art. 43"
          }
        },
        {
          "id": "eq_21",
          "difficulty": "medium",
          "mechanic": "stamp",
          "scenario": "",
          "task_prompt": "Which relationship types always require Enhanced Due Diligence under Article 42? Select all that apply.",
          "options": [
            {
              "label": "Trust or foundation accounts",
              "correct": true
            },
            {
              "label": "Client accounts held in a third party's name",
              "correct": true
            },
            {
              "label": "Investment funds in medium/high-risk countries",
              "correct": true
            },
            {
              "label": "Crypto-asset providers not regulated under MiCA",
              "correct": true
            },
            {
              "label": "EEA credit institution's client account meeting low-risk conditions",
              "correct": false
            }
          ],
          "select_count": 4,
          "article_citation": "Art. 42",
          "correct_feedback": "Correct — Article 42(1) makes these four relationship types mandatory EDD triggers by default.",
          "incorrect_feedback": "Not quite — Article 42(1)'s four mandatory EDD triggers are trusts/foundations, third-party client accounts, medium/high-risk-country funds, and unregulated crypto providers.",
          "followup_question": {
            "task_prompt": "Is a trust account automatically subject to mandatory Enhanced Due Diligence?",
            "options": [
              {
                "label": "Yes",
                "correct": true
              },
              {
                "label": "No, only if it also looks risky",
                "correct": false
              }
            ],
            "article_citation": "Art. 42"
          }
        },
        {
          "id": "eq_16",
          "difficulty": "medium",
          "mechanic": "spot_outlier",
          "scenario": "",
          "task_prompt": "Which of these is NOT a listed criterion for being 'connected' to a high-risk country?",
          "article_citation": "Art. 50",
          "options": [
            {
              "label": "Funds involved in the transaction were generated in the high-risk third country",
              "correct": false
            },
            {
              "label": "The customer holds a professional qualification obtained in the high-risk third country",
              "correct": true
            },
            {
              "label": "The counterparty resides or is established in the high-risk third country",
              "correct": false
            },
            {
              "label": "Funds are destined for the high-risk third country",
              "correct": false
            }
          ],
          "correct_feedback": "Correct — the five triggers are: funds generated, received, or destined there; counterparty resident/established there; or trust arrangement governed by its law. A professional qualification isn't one of them, though it still warrants a careful case-by-case assessment.",
          "incorrect_feedback": "Not quite — this option IS one of the five listed triggers. The one that isn't listed is a professional qualification obtained there, which instead needs a case-by-case assessment.",
          "followup_question": {
            "task_prompt": "Is 'funds destined for the country' one of the five listed criteria?",
            "options": [
              {
                "label": "Yes",
                "correct": true
              },
              {
                "label": "No",
                "correct": false
              }
            ],
            "article_citation": "Art. 50"
          }
        },
        {
          "id": "enhanced_measures-quickcall",
          "difficulty": "hard",
          "mechanic": "quickcall",
          "scenario": "",
          "task_prompt": "Quick calls — rate each relationship's risk tier under Articles 42, 45 & 50. Tap fast.",
          "items": [
            {
              "label": "Investment fund licensed and operating in a high-risk third country.",
              "options": [
                {
                  "label": "Low risk",
                  "correct": false
                },
                {
                  "label": "Medium risk",
                  "correct": false
                },
                {
                  "label": "High risk",
                  "correct": true
                }
              ]
            },
            {
              "label": "Crypto-asset service provider unregulated under MiCA (EU 2023/1114).",
              "options": [
                {
                  "label": "Low risk",
                  "correct": false
                },
                {
                  "label": "Medium risk",
                  "correct": false
                },
                {
                  "label": "High risk",
                  "correct": true
                }
              ]
            },
            {
              "label": "EEA credit institution's pooled Client Account, low risk, all conditions met.",
              "options": [
                {
                  "label": "Low risk",
                  "correct": true
                },
                {
                  "label": "Medium risk",
                  "correct": false
                },
                {
                  "label": "High risk",
                  "correct": false
                }
              ]
            },
            {
              "label": "Third-party client account not meeting any simplified-measures conditions.",
              "options": [
                {
                  "label": "Low risk",
                  "correct": false
                },
                {
                  "label": "Medium risk",
                  "correct": false
                },
                {
                  "label": "High risk",
                  "correct": true
                }
              ]
            },
            {
              "label": "Customer with only a personal tie to a high-risk country, short of the five 'connected' triggers.",
              "options": [
                {
                  "label": "Low risk",
                  "correct": false
                },
                {
                  "label": "Medium risk",
                  "correct": true
                },
                {
                  "label": "High risk",
                  "correct": false
                }
              ]
            }
          ],
          "article_citation": "Art. 42; Art. 45; Art. 50",
          "correct_feedback": "Correct across the board — risky-country funds, unregulated crypto providers, and non-qualifying third-party client accounts are high risk by default; only the EEA institution meeting all conditions is low risk; a borderline personal tie alone is medium.",
          "incorrect_feedback": "One or more calls were off — risky-country funds, unregulated crypto providers, and non-qualifying third-party client accounts are high risk by default; only the EEA institution meeting all conditions is low risk; a borderline personal tie alone is medium."
        },
        {
          "id": "eq_17",
          "difficulty": "hard",
          "mechanic": "calm_alert",
          "scenario": "A medium-risk-country investment fund wants a third-party Client Account for subscription money.",
          "task_prompt": "Would you flag this request, or does it pass?",
          "article_citation": "Art. 47",
          "options": [
            {
              "label": "Pass",
              "correct": false
            },
            {
              "label": "Flag",
              "correct": true
            }
          ],
          "correct_feedback": "Correct — funds/providers from medium- or high-risk countries are expressly banned from holding third-party Client Accounts. This must be flagged and refused.",
          "incorrect_feedback": "Not quite — stronger due diligence isn't the answer here; it's an outright prohibition. Medium/high-risk-country funds and providers can't hold third-party Client Accounts at all.",
          "followup_question": {
            "task_prompt": "Can a medium-risk-country investment fund hold a third-party Client Account?",
            "options": [
              {
                "label": "No — expressly prohibited",
                "correct": true
              },
              {
                "label": "Yes, with enhanced due diligence",
                "correct": false
              }
            ],
            "article_citation": "Art. 47"
          }
        },
        {
          "id": "eq_11",
          "difficulty": "hard",
          "mechanic": "flip_card",
          "scenario": "The Compliance Officer opposes onboarding a high-risk customer, but senior management proceeds anyway.",
          "task_prompt": "Senior management can overrule the Compliance Officer's objection to onboarding a high-risk customer without any written justification.",
          "article_citation": "Art. 42",
          "claim": "Senior management can overrule the Compliance Officer's objection to onboarding a high-risk customer without any written justification.",
          "answer": false,
          "why": "False — departing from the Compliance Officer's opinion requires a documented justification and a risk-mitigation plan; it isn't escalated to the CBC or fixed by downgrading the risk category."
        }
      ]
    },
    {
      "chapter_key": "the_flag",
      "briefing": {
        "title": "The Flag",
        "description": "Learn the cash thresholds that trigger extra checks — and how a suspicion becomes a report to Cyprus's financial crime unit.",
        "objectives": [
          "Know the euro thresholds that trigger controls.",
          "Spot the patterns that count as suspicious.",
          "Trace a suspicion from staff member to MOKAS."
        ],
        "article_range": "Articles 53-56 and 63-66"
      },
      "questions": [
        {
          "id": "flag-01",
          "difficulty": "easy",
          "mechanic": "spot_outlier",
          "scenario": "",
          "task_prompt": "Which of these is a genuine red flag for a merchant-acquiring relationship, per Annex III?",
          "article_citation": "Annex III (merchant acquiring)",
          "options": [
            {
              "label": "A merchant's refund/reversal rate doesn't match its own history or similar merchants' typical rates",
              "correct": true
            },
            {
              "label": "A merchant processes transactions only during normal business hours",
              "correct": false
            },
            {
              "label": "A merchant's sales volume stays flat month to month",
              "correct": false
            },
            {
              "label": "A merchant renews its trade license on time",
              "correct": false
            }
          ],
          "correct_feedback": "Correct — an unusual refund/reversal pattern versus the merchant's own history, or versus similar merchants, is a listed red flag.",
          "incorrect_feedback": "Not quite — the red flag is an unusual refund/reversal pattern; the other options describe entirely normal merchant behavior.",
          "followup_question": {
            "task_prompt": "Is an unusually high refund rate (versus similar merchants) worth a closer look?",
            "options": [
              {
                "label": "Yes",
                "correct": true
              },
              {
                "label": "No",
                "correct": false
              }
            ],
            "article_citation": "Annex III (merchant acquiring)"
          }
        },
        {
          "id": "flag-03",
          "difficulty": "easy",
          "mechanic": "calm_alert",
          "scenario": "A merchant's registered business address turns out to be just a mailing address, with no real connection to how the business actually operates.",
          "task_prompt": "Flag this, or let it pass?",
          "article_citation": "Annex III (merchant acquiring)",
          "options": [
            {
              "label": "Pass",
              "correct": false
            },
            {
              "label": "Flag",
              "correct": true
            }
          ],
          "correct_feedback": "Correct to flag — a declared address that's only a mailing address, disconnected from the actual business, is a listed red flag.",
          "incorrect_feedback": "This should have been flagged — a mailing-address-only registration disconnected from the real business is a listed merchant-acquiring red flag."
        },
        {
          "id": "flag-15",
          "difficulty": "easy",
          "mechanic": "order_chain",
          "scenario": "",
          "task_prompt": "Put the reporting chain in order — from a staff member noticing something suspicious, to Cyprus’s financial intelligence unit.",
          "article_citation": "Art. 65; Art. 66",
          "correct_feedback": "Correct order — staff report suspicion to the Compliance Officer first (Art. 65); the Compliance Officer then escalates to MOKAS (Art. 66).",
          "incorrect_feedback": "Not quite — staff report to the Compliance Officer first (Art. 65), who then escalates to MOKAS (Art. 66), not the other way around.",
          "chain_items": [
            {
              "label": "Staff member notices something suspicious",
              "order": 1
            },
            {
              "label": "Internal Suspicion Report goes to the Compliance Officer",
              "order": 2
            },
            {
              "label": "Compliance Officer escalates a Suspicion Report to MOKAS",
              "order": 3
            }
          ]
        },
        {
          "id": "the_flag-match1",
          "difficulty": "easy",
          "mechanic": "match_term",
          "scenario": "",
          "task_prompt": "Match each term to its definition.",
          "pairs": [
            {
              "term": "MOKAS",
              "definition": "Cyprus's Financial Intelligence Unit — where suspicious-activity reports are sent",
              "source": "Part 12"
            },
            {
              "term": "Compliance Officer",
              "definition": "Defined in Article 2 as the natural person appointed under Article 69(a) of 'the Law.'",
              "source": "Art. 2"
            }
          ],
          "article_citation": "Part 12; Art. 2",
          "correct_feedback": "Both matched — reports flow: staff to the entity's own Compliance Officer, then, where warranted, on to MOKAS.",
          "incorrect_feedback": ""
        },
        {
          "id": "flag-04",
          "difficulty": "medium",
          "mechanic": "spot_outlier",
          "scenario": "",
          "task_prompt": "What should raise concern about a merchant's transaction activity, per Annex III?",
          "article_citation": "Annex III (merchant acquiring)",
          "options": [
            {
              "label": "A sudden, unexplained change in transaction volume or average transaction size since onboarding",
              "correct": true
            },
            {
              "label": "A gradual, seasonal increase disclosed at onboarding",
              "correct": false
            },
            {
              "label": "Transactions spread evenly across the week",
              "correct": false
            },
            {
              "label": "A steady, small number of daily transactions",
              "correct": false
            }
          ],
          "correct_feedback": "Correct — sudden, unexplained shifts in volume or average ticket size versus what was declared at onboarding is the listed red flag.",
          "incorrect_feedback": "Not quite — the red flag is a sudden, unexplained change versus the merchant's declared profile, not ordinary or disclosed patterns.",
          "followup_question": {
            "task_prompt": "Does a disclosed, expected seasonal spike count as this red flag?",
            "options": [
              {
                "label": "No",
                "correct": true
              },
              {
                "label": "Yes",
                "correct": false
              }
            ],
            "article_citation": "Annex III (merchant acquiring)"
          }
        },
        {
          "id": "flag-10",
          "difficulty": "medium",
          "mechanic": "calm_alert",
          "scenario": "Shortly after onboarding, a merchant changes its registered address, and its actual activity doesn't match what it declared at sign-up.",
          "task_prompt": "Flag this, or let it pass?",
          "article_citation": "Annex III (merchant acquiring)",
          "options": [
            {
              "label": "Pass",
              "correct": false
            },
            {
              "label": "Flag",
              "correct": true
            }
          ],
          "correct_feedback": "Correct to flag — an address change soon after onboarding combined with activity that doesn't match the declared profile is a listed red flag.",
          "incorrect_feedback": "This should have been flagged — a post-onboarding address change plus mismatched activity is a listed merchant-acquiring red flag."
        },
        {
          "id": "flag-05",
          "difficulty": "medium",
          "mechanic": "spot_outlier",
          "scenario": "",
          "task_prompt": "Which of these is a genuine red flag for a merchant-acquiring relationship, per Annex III?",
          "article_citation": "Annex III (merchant acquiring)",
          "options": [
            {
              "label": "A merchant account, dormant for months, suddenly shows a burst of activity with no clear business explanation",
              "correct": true
            },
            {
              "label": "A merchant's refund rate matches similar merchants — nothing unusual",
              "correct": false
            },
            {
              "label": "A modest, seasonal volume increase that was disclosed at onboarding",
              "correct": false
            },
            {
              "label": "A merchant renews its trade license on time",
              "correct": false
            }
          ],
          "correct_feedback": "Correct — a sudden burst of activity on a previously dormant account, without explanation, is the listed red flag; the others are just normal, disclosed, or healthy merchant behavior.",
          "incorrect_feedback": "Not quite — the red flag here is the unexplained burst of activity on a dormant account; the other options describe entirely normal merchant behavior.",
          "followup_question": {
            "task_prompt": "Is a sudden, unexplained burst of activity on a previously dormant account worth flagging?",
            "options": [
              {
                "label": "Yes",
                "correct": true
              },
              {
                "label": "No",
                "correct": false
              }
            ],
            "article_citation": "Annex III (merchant acquiring)"
          }
        },
        {
          "id": "flag-09",
          "difficulty": "hard",
          "mechanic": "stamp",
          "select_count": 3,
          "scenario": "",
          "task_prompt": "Which of these are genuine merchant-acquiring red flags, per Annex III? Select all that apply.",
          "options": [
            {
              "label": "Declared address is just a mailing address, unconnected to the business",
              "correct": true
            },
            {
              "label": "Refund/chargeback pattern doesn't match the merchant's own history or peers",
              "correct": true
            },
            {
              "label": "Sudden, unexplained change in transaction volume or size",
              "correct": true
            },
            {
              "label": "Consistently low chargeback rate",
              "correct": false
            },
            {
              "label": "On-time renewal of the merchant's trade license",
              "correct": false
            }
          ],
          "article_citation": "Annex III (merchant acquiring)",
          "correct_feedback": "Correct — these three are the listed red flags; a low chargeback rate and an on-time license renewal are both healthy signs, not concerns.",
          "incorrect_feedback": "Not quite — the three genuine red flags are the address mismatch, the refund/chargeback anomaly, and the unexplained volume change."
        },
        {
          "id": "the_flag-quickcall",
          "difficulty": "hard",
          "mechanic": "quickcall",
          "scenario": "",
          "task_prompt": "Quick calls — routine, or escalate? Tap fast.",
          "items": [
            {
              "label": "Refund rate matches similar merchants — nothing unusual.",
              "options": [
                {
                  "label": "Routine",
                  "correct": true
                },
                {
                  "label": "Escalate",
                  "correct": false
                }
              ]
            },
            {
              "label": "Registered address is only a mailing address, unconnected to the business.",
              "options": [
                {
                  "label": "Routine",
                  "correct": false
                },
                {
                  "label": "Escalate",
                  "correct": true
                }
              ]
            },
            {
              "label": "Modest volume increase, matching a seasonal pattern disclosed at onboarding.",
              "options": [
                {
                  "label": "Routine",
                  "correct": true
                },
                {
                  "label": "Escalate",
                  "correct": false
                }
              ]
            },
            {
              "label": "Sudden refund spike right after a burst of new sales, no clear explanation.",
              "options": [
                {
                  "label": "Routine",
                  "correct": false
                },
                {
                  "label": "Escalate",
                  "correct": true
                }
              ]
            }
          ],
          "article_citation": "Annex III (merchant acquiring)",
          "correct_feedback": "Correct across the board — matched refund rates and disclosed seasonal patterns are routine; a mailing-address-only registration and an unexplained refund spike both warrant escalation.",
          "incorrect_feedback": "One or more calls were off — routine patterns are ones that match the merchant's own profile or history; anything unexplained (an address disconnected from the business, or a sudden refund spike) should be escalated."
        },
        {
          "id": "flag-19",
          "difficulty": "hard",
          "mechanic": "calm_alert",
          "scenario": "A manager wants to tell the client their account is closing over a 'compliance concern.'",
          "task_prompt": "Flag this planned conversation, or let it pass?",
          "article_citation": "Art. 66",
          "options": [
            {
              "label": "Pass",
              "correct": false
            },
            {
              "label": "Flag",
              "correct": true
            }
          ],
          "correct_feedback": "Correct — Flag. This risks tipping off the client that a report was filed, barred under Article 48 of the Law.",
          "incorrect_feedback": "Not quite — this isn't harmless; it risks tipping off the client, barred under Article 48 of the Law.",
          "followup_question": {
            "task_prompt": "After filing with MOKAS, must the entity avoid tipping off the client?",
            "options": [
              {
                "label": "Yes — this is a specific requirement under Article 48 of the Law",
                "correct": true
              },
              {
                "label": "No — the client should always be told",
                "correct": false
              }
            ],
            "article_citation": "Art. 66"
          }
        }
      ]
    }
  ],
  "glossary": [
    {
      "term": "TCSP (Trust and Corporate Services Provider)",
      "definition": "A professional entity that provides company/trust formation and administration services; one of the professions eligible to hold third-party client accounts.",
      "source": "Art. 45"
    },
    {
      "term": "Substantial interest (beneficial interest)",
      "definition": "Defined in Article 2 as an interest equal to or greater than 25% of any class of a legal entity's share capital, or the ability to decide the election of the majority of its directors, or to otherwise exercise significant influence.",
      "source": "Art. 2"
    },
    {
      "term": "FSAP (Financial Sector Assessment Program)",
      "definition": "A joint IMF/World Bank assessment of a country's financial-sector soundness and supervisory quality, usable as a public source when assessing a correspondent respondent's supervision quality.",
      "source": "Art. 48"
    },
    {
      "term": "Correspondent / respondent institution",
      "definition": "In cross-border correspondent banking, the 'correspondent' institution provides services (e.g. account, payment clearing) to the 'respondent' institution located elsewhere.",
      "source": "Art. 48"
    },
    {
      "term": "Declaration of Available Liquid Assets",
      "definition": "The customs import declaration, made under EU Regulation 2018/1672 and Law 63(I)/2022, that must accompany cash of €10,000 or more brought into Cyprus from abroad.",
      "source": "Art. 54 (Part 8)"
    },
    {
      "term": "Risk Recording and Assessment Report",
      "definition": "The annual report documenting an entity's risk-assessment methodology, findings and risk-mitigation measures, due to the board and to the CBC within three months of calendar year-end.",
      "source": "Art. 23"
    },
    {
      "term": "CASP (Crypto-Asset Service Provider)",
      "definition": "An entity providing crypto-asset-related services (e.g. exchange, custody); the abbreviation appears in the original Greek text in Latin script.",
      "source": "Art. 39; Art. 48; Art. 51"
    },
    {
      "term": "Electronic money institution (EMI)",
      "definition": "A business licensed to issue electronic money under the Electronic Money Law of 2012 as amended; one of the categories of obliged entity listed in Article 3(b).",
      "source": "Art. 3"
    },
    {
      "term": "FATF (Financial Action Task Force)",
      "definition": "The international AML/CFT standard-setting body whose country assessments and lists inform the Directive's high-risk-country determinations.",
      "source": "Art. 46; Art. 48; Art. 50; Art. 51"
    },
    {
      "term": "National Risk Assessment (NRA)",
      "definition": "The Republic of Cyprus's own assessment of national ML/TF risk; its findings must be factored into every entity's own risk assessments, but cannot be relied on alone.",
      "source": "Art. 18, Art. 19"
    },
    {
      "term": "Supranational Risk Assessment",
      "definition": "The European Commission's assessment of ML/TF risk affecting the EU internal market — one of the mandatory information sources entities must consult when identifying risk.",
      "source": "Art. 19"
    },
    {
      "term": "Business-wide risk assessment",
      "definition": "An assessment of the ML/TF risk arising from the nature and complexity of an entity's activities as a whole, as distinct from any single relationship.",
      "source": "Art. 18"
    },
    {
      "term": "Third party (Art. 29 sense)",
      "definition": "An introducer relied upon at onboarding to help verify a customer's identity — distinct from an outsourced service provider.",
      "source": "Art. 29"
    },
    {
      "term": "ICO (Initial Coin Offering)",
      "definition": "A method by which a crypto-asset issuer raises capital by issuing new crypto-assets to investors.",
      "source": "Art. 51"
    },
    {
      "term": "Correspondent relationship",
      "definition": "A relationship where one institution provides banking services to another institution (often across borders)",
      "source": "Art. 48"
    },
    {
      "term": "Group of connected persons",
      "definition": "Defined in Article 2 to cover family members (spouse, children, parents), a person and an affiliated business, parent/subsidiary/associated companies, and financially interdependent persons treated as a single risk.",
      "source": "Art. 2"
    },
    {
      "term": "Individual risk assessment",
      "definition": "An assessment of the ML/TF risk arising from establishing a specific business relationship or executing a specific individual transaction; it must contribute to, but can never substitute for, the business-wide assessment.",
      "source": "Art. 18, Art. 19"
    },
    {
      "term": "Proportionality principle",
      "definition": "The Article 5 requirement that obliged entities calibrate their AML/CFT policies, procedures and controls to their own nature, size, complexity and risk profile, rather than applying identical controls to every entity.",
      "source": "Art. 5"
    },
    {
      "term": "Currency exchange bureau",
      "definition": "A licensed business that exchanges currency for customers; explicitly listed in Article 3(d) as a category of CBC-supervised obliged entity.",
      "source": "Art. 3"
    },
    {
      "term": "High-risk third country",
      "definition": "A country on the European Commission's list of jurisdictions with strategic AML/CFT weaknesses",
      "source": "Art. 2, 50"
    },
    {
      "term": "Directive (EU) 2015/849",
      "definition": "The EU's Fourth Anti-Money Laundering Directive, referenced in Article 2 as the source of the EU Supranational Risk Assessment and other cross-referenced EU-level concepts.",
      "source": "Art. 2"
    },
    {
      "term": "Payment institution",
      "definition": "A business licensed to provide payment services under the Provision of Payment Services Law; one of the categories of obliged entity listed in Article 3(c).",
      "source": "Art. 3"
    },
    {
      "term": "Compliance Officer",
      "definition": "Defined in Article 2 as the natural person appointed under Article 69(a) of 'the Law.'",
      "source": "Art. 2"
    },
    {
      "term": "Senior management",
      "definition": "Defined in Article 2 as the persons responsible for the day-to-day management of an obliged entity, including the CEO and/or executive members of the management body.",
      "source": "Art. 2"
    },
    {
      "term": "Source of Wealth",
      "definition": "The origin of a person's total wealth, not just one transaction — required for PEPs and high-risk relationships",
      "source": "Art. 42, 46"
    },
    {
      "term": "Source of Funds",
      "definition": "Where the money for a specific transaction or relationship came from",
      "source": "Art. 26"
    },
    {
      "term": "Management body",
      "definition": "Defined in Article 2 as the board, committee or organ empowered to set an obliged entity's strategy, objectives and overall direction, which oversees and monitors management decision-making, and which includes the person who actually directs the entity's business activities.",
      "source": "Art. 2"
    },
    {
      "term": "Second Schedule",
      "definition": "An annex to the Directive containing the indicative template for the Internal Evaluation of Suspicion Report, used to record the Compliance Officer's reasons for NOT escalating a report to MOKAS.",
      "source": "Art. 65 (Part 12)"
    },
    {
      "term": "Client account",
      "definition": "A pooled account held in a regulated firm's own name on behalf of its clients (e.g. lawyers, trustees)",
      "source": "Art. 45"
    },
    {
      "term": "Obliged entity",
      "definition": "A person or business falling within one of the categories listed in Article 3 (e.g., credit institutions, e-money institutions, payment institutions, currency exchange bureaus), and therefore legally required to comply with this Directive.",
      "source": "Art. 3; Art. 4"
    },
    {
      "term": "Third Schedule",
      "definition": "An annex to the Directive listing indicative, non-exhaustive examples of suspicious money-laundering and terrorist-financing transactions and activities.",
      "source": "Art. 64 (Part 12)"
    },
    {
      "term": "First Schedule",
      "definition": "An annex to the Directive containing the indicative template for the Internal Suspicion Report form used to report suspicion to the Compliance Officer.",
      "source": "Art. 65 (Part 12)"
    },
    {
      "term": "Shell company",
      "definition": "A legal entity with no real physical presence beyond a mailing address, and no genuine business activity",
      "source": "Art. 37(2)"
    },
    {
      "term": "Travel rule",
      "definition": "The EU requirement (Regulation (EU) 2023/1113) that payment and crypto-asset transfers be accompanied by complete payer/beneficiary information, elaborated in EBA Guidelines EBA/GL/2024/11.",
      "source": "Art. 49"
    },
    {
      "term": "Tipping off",
      "definition": "The prohibited act of revealing to a client, directly or indirectly, that a suspicion report has been filed against them — barred so as not to obstruct a MOKAS investigation.",
      "source": "Art. 66 (Part 12), cross-referencing Article 48 of the Law"
    },
    {
      "term": "Shell bank",
      "definition": "A credit institution (or equivalent) incorporated in a jurisdiction where it has no physical presence or meaningful management, and which is unaffiliated with any regulated financial group; correspondent institutions must confirm respondents are not shell banks.",
      "source": "Art. 2 of the Law, cross-referenced at Art. 48"
    },
    {
      "term": "AML/CFT",
      "definition": "Anti-Money Laundering / Countering the Financing of Terrorism — the overall regulatory regime this Directive implements for Central Bank of Cyprus-supervised entities.",
      "source": "Art. 1; Art. 4"
    },
    {
      "term": "the Law",
      "definition": "Shorthand defined in Article 2 for the Prevention and Suppression of Money Laundering Activities Laws of 2007 to 2024 — the primary Cypriot AML/CFT statute this Directive implements in more detail.",
      "source": "Art. 2"
    },
    {
      "term": "K.Δ.Π.",
      "definition": "'Κανονιστική Διοικητική Πράξη' (Regulatory Administrative Act) — the official Cyprus Gazette citation format for subsidiary legislation, e.g. K.Δ.Π. 560/2014 or this Directive itself, K.Δ.Π. 120/2025.",
      "source": "Art. 24; Directive title"
    },
    {
      "term": "AMLCO",
      "definition": "Anti-Money Laundering Compliance Officer — the person a regulated entity appoints to run AML compliance",
      "source": "Part 5, Art. 69 of the Law"
    },
    {
      "term": "MOKAS",
      "definition": "Cyprus's Financial Intelligence Unit — where suspicious-activity reports are sent",
      "source": "Part 12"
    },
    {
      "term": "ML/TF",
      "definition": "Money Laundering / Terrorist Financing — the twin risks this Directive requires obliged entities to identify, assess and manage, including via the proportionality principle.",
      "source": "Art. 4; Art. 5"
    },
    {
      "term": "eIDAS",
      "definition": "Regulation (EU) 910/2014 on electronic identification and trust services — the benchmark for high-assurance electronic identity verification.",
      "source": "Art. 27"
    },
    {
      "term": "PRADO",
      "definition": "The Public Register of Authentic Identity and Travel Documents Online — a database entities may use to cross-check ID/passport security features.",
      "source": "Art. 30"
    },
    {
      "term": "GDPR",
      "definition": "General Data Protection Regulation (Regulation (EU) 2016/679) — the EU data-protection law entities must comply with when using automated ML/TF risk-scoring systems, including externally sourced ones.",
      "source": "Art. 19"
    },
    {
      "term": "PEP (Politically Exposed Person)",
      "definition": "An individual who holds, or has held, a prominent public function (or their family members/close associates), creating higher exposure to corruption-related money-laundering risk.",
      "source": "Art. 46 (cross-referencing Art. 64(1)(c) of the Law and Art. 20a(3) of Directive (EU) 2015/849)"
    },
    {
      "term": "EDD (Enhanced Due Diligence)",
      "definition": "Additional, more intensive customer-checking measures applied on top of standard due diligence wherever ML/TF risk is assessed as higher; supplementary to, never a replacement for, standard measures.",
      "source": "Art. 42"
    },
    {
      "term": "UBO (Ultimate Beneficial Owner)",
      "definition": "The natural person(s) who ultimately own or control a customer entity (or on whose behalf a transaction is conducted) — in practice, anyone owning or controlling 25% or more of a company's capital or voting rights, or otherwise exercising significant influence.",
      "source": "Art. 2 of the Law (cross-referenced at Arts. 26, 37, 44, 45, 48)"
    },
    {
      "term": "CDD (Customer Due Diligence)",
      "definition": "The overall process of identifying a customer, verifying their identity, and understanding the purpose and intended nature of the business relationship.",
      "source": "Art. 20; Art. 26; Part 7, Art. 24-26"
    },
    {
      "term": "SDD (Simplified Due Diligence)",
      "definition": "A reduced-intensity form of due diligence that may be applied only where risk is confirmed low and no ML/TF suspicion exists; never a full exemption from monitoring.",
      "source": "Art. 41; Art. 45"
    },
    {
      "term": "CBC (Central Bank of Cyprus)",
      "definition": "The competent supervisory authority that issued this Directive and supervises the categories of obliged entities listed in Article 3.",
      "source": "Art. 3-4; Art. 49"
    },
    {
      "term": "EBA (European Banking Authority)",
      "definition": "The EU authority whose Guidelines on Risk Factors, remote onboarding, and travel rules are repeatedly cross-referenced by this Directive as mandatory or persuasive supplementary guidance.",
      "source": "Art. 27-28; Art. 42; Art. 49; Art. 51"
    },
    {
      "term": "EEA (European Economic Area)",
      "definition": "The EU member states plus Iceland, Liechtenstein and Norway; treated as a lower-risk baseline jurisdiction group throughout the Directive.",
      "source": "Art. 38; Art. 45; Art. 47"
    },
    {
      "term": "MiCA (Regulation (EU) 2023/1114)",
      "definition": "The EU regulatory framework -- the Markets in Crypto-Assets Regulation -- for licensing and supervising crypto-asset service providers.",
      "source": "Art. 39; Art. 42(1)(d); Art. 51"
    }
  ]
};
