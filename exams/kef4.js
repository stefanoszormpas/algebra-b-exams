/* Προσομοίωση εξεταστικής — Κεφάλαιο 4: Πολυώνυμα – Πολυωνυμικές εξισώσεις
   Μόνο οι εκφωνήσεις. Οι σωστές απαντήσεις βρίσκονται ΜΟΝΟ στο Google Apps Script. */
(function () {
  const R = String.raw;
  window.EXAMS = window.EXAMS || {};
  window.EXAMS.kef4 = {
    id: "kef4",
    title: "Προσομοίωση εξεταστικής — Κεφάλαιο 4",
    subtitle: "Πολυώνυμα – Πολυωνυμικές εξισώσεις και ανισώσεις",
    minutes: 180,
    themes: [
      {
        name: "ΘΕΜΑ Α", points: 25,
        parts: [
          {
            label: "Α1", intro: "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν ως Σωστές (Σ) ή Λανθασμένες (Λ).",
            questions: [
              { id: "A1a", type: "tf", pts: 2, stem: R`Ο βαθμός του γινομένου δύο μη μηδενικών πολυωνύμων ισούται με το άθροισμα των βαθμών τους.` },
              { id: "A1b", type: "tf", pts: 2, stem: R`Το υπόλοιπο της διαίρεσης ενός πολυωνύμου \(P(x)\) με το \(x-\rho\) είναι ίσο με \(P(\rho)\).` },
              { id: "A1c", type: "tf", pts: 2, stem: R`Το μηδενικό πολυώνυμο έχει βαθμό \(0\).` },
              { id: "A1d", type: "tf", pts: 2, stem: R`Αν ο αριθμός \(\rho\) είναι ρίζα του πολυωνύμου \(P(x)\), τότε το \(x+\rho\) είναι παράγοντας του \(P(x)\).` },
              { id: "A1e", type: "tf", pts: 2, stem: R`Η εξίσωση \(\sqrt{x}=-2\) έχει λύση στο \(\mathbb{R}\).` }
            ]
          },
          {
            label: "Α2", intro: "Να επιλέξετε τη σωστή απάντηση.",
            questions: [
              { id: "A2a", type: "choice", pts: 5, stem: R`Για \(\lambda=2\), το πολυώνυμο \(P(x)=(\lambda-2)x^3+(\lambda^2-4)x+1\) έχει βαθμό:`,
                options: [R`\(3\)`, R`\(1\)`, R`\(0\)`, "δεν ορίζεται βαθμός"] },
              { id: "A2b", type: "choice", pts: 5, stem: R`Το υπόλοιπο της διαίρεσης του \(P(x)=x^3-2x+5\) με το \(x+1\) είναι:`,
                options: [R`\(6\)`, R`\(4\)`, R`\(8\)`, R`\(2\)`] },
              { id: "A2c", type: "choice", pts: 5, stem: R`Οι πιθανές ακέραιες ρίζες της εξίσωσης \(x^3-4x^2+x+6=0\) είναι:`,
                options: ["οι διαιρέτες του 4", "οι διαιρέτες του 6", "οι διαιρέτες του 1", "όλοι οι ακέραιοι από −6 έως 6"] }
            ]
          }
        ]
      },
      {
        name: "ΘΕΜΑ Β", points: 25,
        intro: R`Δίνεται το πολυώνυμο \(P(x)=x^3+\alpha x^2+\beta x+6\). Το \(x-1\) είναι παράγοντας του \(P(x)\) και το υπόλοιπο της διαίρεσης του \(P(x)\) με το \(x-2\) είναι \(-4\).`,
        parts: [
          { label: "Β1", intro: R`Να βρείτε τα \(\alpha\) και \(\beta\).`, questions: [
            { id: "B1a", type: "num", pts: 5, stem: "", prefix: R`\(\alpha=\)` },
            { id: "B1b", type: "num", pts: 5, stem: "", prefix: R`\(\beta=\)` } ] },
          { label: "Β2", questions: [
            { id: "B2", type: "choice", pts: 7, stem: R`Για τις τιμές αυτές, το πηλίκο της διαίρεσης \(P(x):(x-1)\) είναι:`,
              options: [R`\(x^2-x+6\)`, R`\(x^2+x-6\)`, R`\(x^2-x-6\)`, R`\(x^2-3x-2\)`] } ] },
          { label: "Β3", questions: [
            { id: "B3", type: "choice", pts: 8, stem: R`Οι ρίζες της εξίσωσης \(P(x)=0\) είναι:`,
              options: [R`\(1,\ 2,\ -3\)`, R`\(1,\ -2,\ 3\)`, R`\(-1,\ 2,\ 3\)`, R`\(1,\ -2,\ -3\)`] } ] }
        ]
      },
      {
        name: "ΘΕΜΑ Γ", points: 25,
        parts: [
          { label: "Γ1", questions: [
            { id: "G1", type: "choice", pts: 9, stem: R`Οι λύσεις της ανίσωσης \(x^3-2x^2-5x+6>0\) είναι:`,
              options: [R`\(x\lt -2\) ή \(1\lt x\lt 3\)`, R`\(-2\lt x\lt 1\) ή \(x\gt 3\)`, R`\(-2\lt x\lt 3\)`, R`\(x\gt 3\)`] } ] },
          { label: "Γ2", questions: [
            { id: "G2", type: "num", pts: 8, stem: R`Πόσες πραγματικές ρίζες έχει η εξίσωση \(x^4-5x^2+4=0\);`, prefix: "Πλήθος:" } ] },
          { label: "Γ3", questions: [
            { id: "G3", type: "num", pts: 8, stem: R`Να λύσετε την εξίσωση \(\sqrt{x+3}=x-3\). (Αν βρείτε μία δεκτή λύση, γράψτε τη.)`, prefix: R`\(x=\)` } ] }
        ]
      },
      {
        name: "ΘΕΜΑ Δ", points: 25,
        intro: R`Δίνεται το πολυώνυμο \(P(x)=2x^3+\lambda x^2-7x+\mu\), το οποίο διαιρείται ακριβώς με το \(x^2-x-2\).`,
        parts: [
          { label: "Δ1", intro: R`Να βρείτε τα \(\lambda\) και \(\mu\).`, questions: [
            { id: "D1a", type: "num", pts: 5, stem: "", prefix: R`\(\lambda=\)` },
            { id: "D1b", type: "num", pts: 5, stem: "", prefix: R`\(\mu=\)` } ] },
          { label: "Δ2", questions: [
            { id: "D2", type: "choice", pts: 6, stem: R`Το πηλίκο της διαίρεσης \(P(x):(x^2-x-2)\) είναι:`,
              options: [R`\(2x-3\)`, R`\(x+3\)`, R`\(2x+3\)`, R`\(2x+1\)`] } ] },
          { label: "Δ3", questions: [
            { id: "D3", type: "choice", pts: 9, stem: R`Οι λύσεις της ανίσωσης \(P(x)\le 0\) είναι:`,
              options: [R`\(x\le -\dfrac32\) ή \(-1\le x\le 2\)`, R`\(-\dfrac32\le x\le -1\) ή \(x\ge 2\)`, R`\(-1\le x\le 2\)`, R`\(x\le -1\) ή \(x\ge 2\)`] } ] }
        ]
      }
    ]
  };
})();
