/* Προσομοίωση εξεταστικής — Κεφάλαιο 5: Εκθετική και Λογαριθμική Συνάρτηση
   Μόνο οι εκφωνήσεις. Οι σωστές απαντήσεις βρίσκονται ΜΟΝΟ στο Google Apps Script. */
(function () {
  const R = String.raw;
  window.EXAMS = window.EXAMS || {};
  window.EXAMS.kef5 = {
    id: "kef5",
    title: "Προσομοίωση εξεταστικής — Κεφάλαιο 5",
    subtitle: "Εκθετική και Λογαριθμική Συνάρτηση",
    minutes: 180,
    themes: [
      {
        name: "ΘΕΜΑ Α", points: 25,
        parts: [
          {
            label: "Α1", intro: "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν ως Σωστές (Σ) ή Λανθασμένες (Λ).",
            questions: [
              { id: "A1a", type: "tf", pts: 2, stem: R`Η συνάρτηση \(f(x)=\left(\frac12\right)^x\) είναι γνησίως φθίνουσα στο \(\mathbb{R}\).` },
              { id: "A1b", type: "tf", pts: 2, stem: R`Για κάθε \(\alpha,\beta\in\mathbb{R}\) ισχύει \(\log(\alpha\beta)=\log\alpha+\log\beta\).` },
              { id: "A1c", type: "tf", pts: 2, stem: R`Η συνάρτηση \(f(x)=\ln x\) έχει πεδίο ορισμού το \((0,+\infty)\).` },
              { id: "A1d", type: "tf", pts: 2, stem: R`Ισχύει \(\ln e=0\).` },
              { id: "A1e", type: "tf", pts: 2, stem: R`Η γραφική παράσταση της \(f(x)=\alpha^x\), με \(0<\alpha\neq1\), διέρχεται από το σημείο \((0,1)\).` }
            ]
          },
          {
            label: "Α2", intro: "Να επιλέξετε τη σωστή απάντηση.",
            questions: [
              { id: "A2a", type: "choice", pts: 5, stem: R`Ο αριθμός \(\log_2 32\) είναι ίσος με:`,
                options: [R`\(5\)`, R`\(16\)`, R`\(6\)`, R`\(4\)`] },
              { id: "A2b", type: "choice", pts: 5, stem: R`Η λύση της εξίσωσης \(3^{x+1}=27\) είναι:`,
                options: [R`\(x=3\)`, R`\(x=2\)`, R`\(x=9\)`, R`\(x=1\)`] },
              { id: "A2c", type: "choice", pts: 5, stem: R`Το πεδίο ορισμού της συνάρτησης \(f(x)=\ln(4-x^2)\) είναι:`,
                options: [R`\(\mathbb{R}\)`, R`\((-\infty,-2)\cup(2,+\infty)\)`, R`\((-2,2)\)`, R`\([-2,2]\)`] }
            ]
          }
        ]
      },
      {
        name: "ΘΕΜΑ Β", points: 25,
        intro: R`Δίνεται η συνάρτηση \(f(x)=2^x-4\), \(x\in\mathbb{R}\).`,
        parts: [
          { label: "Β1", questions: [
            { id: "B1", type: "num", pts: 8, stem: R`Να υπολογίσετε το \(f(3)\).`, prefix: R`\(f(3)=\)` } ] },
          { label: "Β2", questions: [
            { id: "B2", type: "num", pts: 9, stem: R`Να λύσετε την εξίσωση \(4^x-3\cdot2^x-4=0\).`, prefix: R`\(x=\)` } ] },
          { label: "Β3", questions: [
            { id: "B3", type: "choice", pts: 8, stem: R`Οι λύσεις της ανίσωσης \(2^{x-1}>8\) είναι:`,
              options: [R`\(x>3\)`, R`\(x>4\)`, R`\(x<4\)`, R`\(x>2\)`] } ] }
        ]
      },
      {
        name: "ΘΕΜΑ Γ", points: 25,
        parts: [
          { label: "Γ1", questions: [
            { id: "G1", type: "num", pts: 9, stem: R`Να λύσετε την εξίσωση \(\log_2(x-1)+\log_2(x+1)=3\).`, prefix: R`\(x=\)` } ] },
          { label: "Γ2", questions: [
            { id: "G2", type: "choice", pts: 8, stem: R`Οι λύσεις της ανίσωσης \(\ln(2x-1)<0\) είναι:`,
              options: [R`\(x<1\)`, R`\(\dfrac12<x<1\)`, R`\(x>1\)`, R`\(0<x<\dfrac12\)`] } ] },
          { label: "Γ3", questions: [
            { id: "G3", type: "num", pts: 8, stem: R`Να υπολογίσετε την παράσταση \(A=\log4+\log25\).`, prefix: R`\(A=\)` } ] }
        ]
      },
      {
        name: "ΘΕΜΑ Δ", points: 25,
        intro: R`Δίνεται η συνάρτηση \(f(x)=\ln\left(e^x-1\right)\).`,
        parts: [
          { label: "Δ1", questions: [
            { id: "D1", type: "choice", pts: 5, stem: R`Το πεδίο ορισμού της \(f\) είναι:`,
              options: [R`\(\mathbb{R}\)`, R`\((1,+\infty)\)`, R`\((0,+\infty)\)`, R`\((-\infty,0)\)`] } ] },
          { label: "Δ2", questions: [
            { id: "D2", type: "choice", pts: 6, stem: R`Η εξίσωση \(f(x)=0\) έχει λύση:`,
              options: [R`\(x=0\)`, R`\(x=\ln2\)`, R`\(x=e\)`, R`\(x=1\)`] } ] },
          { label: "Δ3", questions: [
            { id: "D3", type: "choice", pts: 7, stem: R`Οι λύσεις της ανίσωσης \(f(x)<\ln3\) είναι:`,
              options: [R`\(x<\ln4\)`, R`\(0<x<\ln3\)`, R`\(0<x<\ln4\)`, R`\(x>\ln4\)`] } ] },
          { label: "Δ4", questions: [
            { id: "D4", type: "num", pts: 7, stem: R`Αν για κάποιον αριθμό \(\alpha\) ισχύει \(f(\alpha)=\ln8\), να βρείτε τον αριθμό \(e^{\alpha}\).`, prefix: R`\(e^{\alpha}=\)` } ] }
        ]
      }
    ]
  };
})();
