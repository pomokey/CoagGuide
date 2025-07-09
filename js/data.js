const drugData = [
  {
    "name": "Heparin",
    "subName": "IV infusion",
    "holdBefore": "4-6 hours (verify normal aPTT)",
    "catheterInPlace": "Not recommended",
    "resumeAfter": "1 hour"
  },
  {
    "name": "Heparin",
    "dose": "5000 units SQ q8h or q12h",
    "holdBefore": "4-6 hours (or verify normal aPTT)",
    "catheterInPlace": "May be given, wait 4-6 hours after last dose prior to removal",
    "resumeAfter": "Immediately",
    "subName": "SubQ - Prophylactic"
  },
  {
    "name": "Heparin",
    "dose": "7500 - 10000 units q12h",
    "holdBefore": "12 hours (verify normal aPTT)",
    "catheterInPlace": "Not recommended",
    "resumeAfter": "1 hour",
    "subName": "SubQ - Intermediate Dose"
  },
  {
    "name": "Heparin",
    "dose": "> 10000 units q12h",
    "holdBefore": "24 hours (verify normal aPTT)",
    "catheterInPlace": "Not recommended",
    "resumeAfter": "1 hour",
    "subName": "SubQ - High Dose"
  },
  {
    "name": "Enoxaparin",
    "subName": "Prophylactic",
    "brand": "Lovenox",
    "dose": "40 mg SQ daily or 30 mg SQ q12h",
    "holdBefore": "12 hours",
    "catheterInPlace": "For 40 mg daily: May be maintained with once-daily dosing. Wait 12 hours after last dose prior to removal.<br>For 30 mg q12h: Not recommended.",
    "resumeAfter": "12 hours after placement, or 4 hours after catheter removal"
  },
  {
    "name": "Enoxaparin",
    "brand": "Lovenox",
    "dose": "1.5 mg/kg SQ daily or 1 mg/kg SQ q12h",
    "holdBefore": "24 hours",
    "catheterInPlace": "Not recommended",
    "resumeAfter": "24 hour after placement, or 4 hours after catheter removal",
    "subName": "Therapeutic"
  },
  {
    "name": "Fondaparinux",
    "subName": "low dose",
    "brand": "Arixtra",
    "dose": "2.5 mg QD",
    "holdBefore": "Normal renal function: 36-42 hours<br>CrCl 30-50: 58 hours<br>CrCl < 30: neuraxial not recommended<br><br>Or aXa level ≤ 0.1 IU/mL",
    "catheterInPlace": "Not recommended",
    "resumeAfter": "6 hours"
  },
  {
    "name": "Fondaparinux",
    "subName": "high dose",
    "brand": "Arixtra",
    "dose": "5 - 10 mg QD",
    "holdBefore": "Normal renal function and young: 70 hours<br>Normal renal function and elderly: 105 hours<br><br>Or aXa level ≤ 0.1 IU/mL",
    "catheterInPlace": "Not recommended",
    "resumeAfter": "6 hours"
  },
  {
    "name": "Apixaban",
    "brand": "Eliquis",
    "dose": "2.5 mg BID<br>Indications:<br>DVT prophylaxis",
    "holdBefore": "36 hours or<br>aXa level ≤ 0.1 IU/mL or<br>apixaban level < 30 ng/mL",
    "catheterInPlace": "Not recommended. If unanticipated administration given, follow above recommendations prior to removal.",
    "resumeAfter": "24 hours",
    "subName": "low dose"
  },
  {
    "name": "Apixaban",
    "brand": "Eliquis",
    "dose": "5 - 10 mg BID<br>Indications:<br>a-fib and therapeutic for DVT/PE<br>may be 2.5 mg if small, elderly, or CKD",
    "holdBefore": "3 days or<br>aXa level ≤ 0.1 IU/mL or<br>apixaban level < 30 ng/mL",
    "catheterInPlace": "Not recommended. If unanticipated administration given, follow above recommendations prior to removal.",
    "resumeAfter": "6 hours",
    "subName": "high dose"
  },
  {
    "name": "Rivaroxaban",
    "brand": "Xarelto",
    "dose": "15 - 20 mg QD<br>Indications:<br>a-fib and therapeutic for DVT/PE",
    "holdBefore": "3 days or<br>aXa level ≤ 0.1 IU/mL or<br>rivaroxaban level < 30 ng/mL",
    "catheterInPlace": "Not recommended. If unanticipated administration given, follow above recommendations prior to removal.",
    "resumeAfter": "24 hours",
    "subName": "high dose"
  },
  {
    "name": "Rivaroxaban",
    "brand": "Xarelto",
    "dose": "10 mg QD<br>Indications:<br>DVT prophylaxis",
    "holdBefore": "24 hours (30 if CrCl < 30 mL/min) or<br>aXa level ≤ 0.1 IU/mL or<br>rivaroxaban level < 30 ng/mL",
    "catheterInPlace": "Not recommended. If unanticipated administration given, follow above recommendations prior to removal.",
    "resumeAfter": "6 hours",
    "subName": "low dose"
  },
  {
    "name": "Edoxaban",
    "brand": "Lixiana, Savaysa",
    "holdBefore": "3 days or<br>aXa level ≤ 0.1 IU/mL or<br>edoxaban level < 30 ng/mL",
    "catheterInPlace": "Not recommended. If unanticipated administration given, follow above recommendations prior to removal.",
    "resumeAfter": "24 hours"
  },
  {
    "name": "Dabigatran",
    "brand": "Pradaxa",
    "dose": "75 - 150 mg BID<br>Indications:<br>a-fib and therapeutic for DVT/PE",
    "holdBefore": "CrCl ≥ 50: 3 days<br>CrCl 30-49: 5 days<br>CrCl < 30: avoid neuraxial or<br>dabigatran level < 30 ng/mL",
    "catheterInPlace": "Not recommended. If unanticipated administration given, follow above recommendations prior to removal.",
    "resumeAfter": "24 hours",
    "subName": "high dose"
  },
  {
    "name": "Dabigatran",
    "brand": "Pradaxa",
    "dose": "110 - 220 mg QD<br>Indications:<br>DVT prophylaxis",
    "holdBefore": "48 hours<br>CrCl < 30: avoid or <br>dabigatran level < 30 ng/mL",
    "catheterInPlace": "Not recommended. If unanticipated administration given, follow above recommendations prior to removal.",
    "resumeAfter": "6 hours",
    "subName": "low dose"
  },
  {
    "name": "Warfarin",
    "brand": "Coumadin",
    "holdBefore": "5 days and normal INR",
    "catheterInPlace": "Check INR daily; remove catheter only when INR < 1.5",
    "resumeAfter": "No delay"
  },
  {
    "name": "Argatroban",
    "brand": "Acova",
    "holdBefore": "Avoid neuraxial techniques",
    "catheterInPlace": "",
    "resumeAfter": ""
  },
  {
    "name": "Bivalirudin",
    "brand": "Angiomax",
    "holdBefore": "Avoid neuraxial techniques",
    "catheterInPlace": "",
    "resumeAfter": ""
  },
  {
    "name": "Desirudin",
    "brand": "Revasc",
    "holdBefore": "Avoid neuraxial techniques",
    "catheterInPlace": "",
    "resumeAfter": ""
  },
  {
    "name": "Aspirin",
    "brand": "ASA",
    "holdBefore": "May continue dosage",
    "catheterInPlace": "No specific restrictions",
    "resumeAfter": "May continue dosage"
  },
  {
    "name": "NSAIDS",
    "holdBefore": "May continue dosage",
    "catheterInPlace": "No specific restrictions",
    "resumeAfter": "May continue dosage"
  },
  {
    "name": "Clopidogrel",
    "brand": "Plavix",
    "holdBefore": "5-7 days",
    "catheterInPlace": "If no loading dose, can maintain for 1-2 days",
    "resumeAfter": "No loading dose: immediately<br>With loading dose: 6 hours"
  },
  {
    "name": "Prasugrel",
    "brand": "Effient",
    "holdBefore": "7-10 days",
    "catheterInPlace": "Not recommended",
    "resumeAfter": "No loading dose: immediately<br>With loading dose: 6 hours"
  },
  {
    "name": "Ticagrelor",
    "brand": "Brilinta",
    "holdBefore": "5 days",
    "catheterInPlace": "Not recommended",
    "resumeAfter": "No loading dose: immediately<br>With loading dose: 6 hours"
  },
  {
    "name": "Cangrelor",
    "brand": "Kengreal",
    "holdBefore": "3 hours",
    "catheterInPlace": "Not recommended",
    "resumeAfter": "8 hours"
  },
  {
    "name": "Abciximab",
    "brand": "Reopro",
    "holdBefore": "24-48 hours",
    "catheterInPlace": "Not recommended",
    "resumeAfter": "Contraindicated for 4 weeks after surgery<br>Monitor neurologic status if given"
  },
  {
    "name": "Tirofiban",
    "brand": "Aggrastat",
    "holdBefore": "4-8 hours",
    "catheterInPlace": "Not recommended",
    "resumeAfter": "Contraindicated for 4 weeks after surgery<br>Monitor neurologic status if given"
  },
  {
    "name": "Eptifibatide",
    "brand": "Integrelin",
    "holdBefore": "4-8 hours",
    "catheterInPlace": "Not recommended",
    "resumeAfter": "Contraindicated for 4 weeks after surgery<br>Monitor neurologic status if given"
  },
  {
    "name": "Alteplase",
    "brand": "TPA",
    "holdBefore": "2 days<br>Normal coag studies including fibrinogen are highly recommended",
    "catheterInPlace": "Not recommended.  If unanticipated administration given, frequent neuro checks (Q2H) for 2 days",
    "resumeAfter": ""
  },
  {
    "name": "Cilostazol",
    "brand": "Pletal",
    "holdBefore": "2 days",
    "catheterInPlace": "Not recommended",
    "resumeAfter": "6 hours"
  },
    {
    "name": "Dalteparin",
    "brand": "Fragmin",
    "holdBefore": "≥ 12 hours",
    "catheterInPlace": "CONTRAINDICATED",
    "resumeAfter": "4 hours"
  },
  {
    "name": "Aspirin/dipyridamole",
    "brand": "Aggrenox",
    "holdBefore": "24 hours",
    "catheterInPlace": "CONTRAINDICATED",
    "resumeAfter": "6 hours"
  }
];