/* Προσομοίωση εξεταστικής — Κεφάλαιο 2: Ιδιότητες συναρτήσεων
   Μόνο οι εκφωνήσεις. Οι σωστές απαντήσεις βρίσκονται ΜΟΝΟ στο Google Apps Script. */
(function () {
  const R = String.raw;
  window.EXAMS = window.EXAMS || {};
  window.EXAMS.kef2 = {
    id: "kef2",
    title: "Προσομοίωση εξεταστικής — Κεφάλαιο 2",
    subtitle: "Μονοτονία – Ακρότατα – Συμμετρίες – Μετατοπίσεις",
    minutes: 180,
    themes: [
      {
        name: "ΘΕΜΑ Α", points: 25,
        parts: [
          {
            label: "Α1", intro: "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν ως Σωστές (Σ) ή Λανθασμένες (Λ).",
            questions: [
              { id: "A1a", type: "tf", pts: 2, stem: R`Αν μια συνάρτηση \(f\) είναι άρτια, τότε η \(C_f\) έχει άξονα συμμετρίας τον άξονα \(y'y\).` },
              { id: "A1b", type: "tf", pts: 2, stem: R`Η συνάρτηση \(f(x)=x^3\) είναι άρτια.` },
              { id: "A1c", type: "tf", pts: 2, stem: R`Αν η \(f\) είναι γνησίως αύξουσα στο \(\mathbb{R}\) και \(f(\alpha)<f(\beta)\), τότε \(\alpha<\beta\).` },
              { id: "A1d", type: "tf", pts: 2, stem: R`Η γραφική παράσταση της \(g(x)=f(x-2)+3\) προκύπτει από τη \(C_f\) με μετατόπιση κατά \(2\) μονάδες αριστερά και \(3\) μονάδες πάνω.` },
              { id: "A1e", type: "tf", pts: 2, stem: R`Αν η \(f\) είναι περιττή και \(0\) ανήκει στο πεδίο ορισμού της, τότε \(f(0)=0\).` }
            ]
          },
          {
            label: "Α2", intro: "Να επιλέξετε τη σωστή απάντηση.",
            questions: [
              { id: "A2a", type: "choice", pts: 5, stem: R`Το πεδίο ορισμού της συνάρτησης \(f(x)=\dfrac{\sqrt{x-1}}{x-3}\) είναι:`,
                options: [R`\((1,+\infty)\)`, R`\([1,3)\cup(3,+\infty)\)`, R`\(\mathbb{R}-\{3\}\)`, R`\([1,+\infty)\)`] },
              { id: "A2b", type: "choice", pts: 5, stem: R`Η συνάρτηση \(f(x)=(x-1)^2+2\):`,
                options: [R`έχει μέγιστο το \(2\) στο \(x=1\)`, R`έχει ελάχιστο το \(1\) στο \(x=2\)`, R`έχει ελάχιστο το \(2\) στο \(x=1\)`, R`έχει ελάχιστο το \(2\) στο \(x=-1\)`] },
              { id: "A2c", type: "choice", pts: 5, stem: R`Ποια από τις παρακάτω συναρτήσεις είναι περιττή;`,
                options: [R`\(f(x)=x^2+1\)`, R`\(f(x)=|x|\)`, R`\(f(x)=x^3+1\)`, R`\(f(x)=x^3-x\)`] }
            ]
          }
        ]
      },
      {
        name: "ΘΕΜΑ Β", points: 25,
        intro: R`Δίνεται η συνάρτηση \(f(x)=x^2-4x+3\), \(x\in\mathbb{R}\).`,
        parts: [
          { label: "Β1", intro: R`Η \(f\) γράφεται στη μορφή \(f(x)=(x-\kappa)^2+\lambda\). Να βρείτε τα \(\kappa\) και \(\lambda\).`, questions: [
            { id: "B1a", type: "num", pts: 3, stem: "", prefix: R`\(\kappa=\)` },
            { id: "B1b", type: "num", pts: 3, stem: "", prefix: R`\(\lambda=\)` } ] },
          { label: "Β2", questions: [
            { id: "B2", type: "choice", pts: 6, stem: R`Με ποιες μετατοπίσεις της γραφικής παράστασης της \(y=x^2\) προκύπτει η \(C_f\);`,
              options: [R`\(2\) μονάδες αριστερά και \(1\) μονάδα κάτω`, R`\(2\) μονάδες δεξιά και \(1\) μονάδα κάτω`, R`\(2\) μονάδες δεξιά και \(1\) μονάδα πάνω`, R`\(1\) μονάδα δεξιά και \(2\) μονάδες κάτω`] } ] },
          { label: "Β3", questions: [
            { id: "B3", type: "choice", pts: 7, stem: R`Η \(f\) είναι γνησίως φθίνουσα στο διάστημα:`,
              options: [R`\([2,+\infty)\)`, R`\((-\infty,-1]\)`, R`\((-\infty,2]\)`, R`\(\mathbb{R}\)`] } ] },
          { label: "Β4", questions: [
            { id: "B4", type: "num", pts: 6, stem: R`Να βρείτε την ελάχιστη τιμή της \(f\).`, prefix: R`\(\min f=\)` } ] }
        ]
      },
      {
        name: "ΘΕΜΑ Γ", points: 25,
        intro: R`Μια συνάρτηση \(f:\mathbb{R}\to\mathbb{R}\) είναι γνησίως μονότονη και η γραφική της παράσταση διέρχεται από τα σημεία \(A(1,4)\) και \(B(3,-2)\).`,
        parts: [
          { label: "Γ1", questions: [
            { id: "G1", type: "select", pts: 7, stem: R`Η \(f\) είναι:`, options: ["γνησίως αύξουσα", "γνησίως φθίνουσα"] } ] },
          { label: "Γ2", questions: [
            { id: "G2", type: "choice", pts: 9, stem: R`Οι λύσεις της ανίσωσης \(f(2x-1)>4\) είναι:`,
              options: [R`\(x>1\)`, R`\(x<2\)`, R`\(x<1\)`, R`\(x>2\)`] } ] },
          { label: "Γ3", questions: [
            { id: "G3", type: "choice", pts: 9, stem: R`Οι λύσεις της ανίσωσης \(f(x^2-3)<-2\) είναι:`,
              options: [R`\(-\sqrt6<x<\sqrt6\)`, R`\(x<-\sqrt6\) ή \(x>\sqrt6\)`, R`\(x>\sqrt6\)`, R`\(x<-3\) ή \(x>3\)`] } ] }
        ]
      },
      {
        name: "ΘΕΜΑ Δ", points: 25,
        intro: R`Δίνεται η συνάρτηση \(f(x)=(\alpha-1)x^2+2x^3+(\alpha+1)x\), \(x\in\mathbb{R}\), η οποία είναι περιττή.`,
        parts: [
          { label: "Δ1", questions: [
            { id: "D1", type: "num", pts: 5, stem: R`Να βρείτε την τιμή του \(\alpha\).`, prefix: R`\(\alpha=\)` } ] },
          { label: "Δ2", questions: [
            { id: "D2", type: "num", pts: 5, stem: R`Για την τιμή του \(\alpha\) που βρήκατε, να υπολογίσετε το \(f(-2)\).`, prefix: R`\(f(-2)=\)` } ] },
          { label: "Δ3", questions: [
            { id: "D3", type: "select", pts: 5, stem: R`Η \(f\) είναι:`, options: ["γνησίως αύξουσα στο ℝ", "γνησίως φθίνουσα στο ℝ", "ούτε αύξουσα ούτε φθίνουσα"] } ] },
          { label: "Δ4", intro: R`Τα σημεία \(\Gamma(-\kappa,\lambda)\) και \(\Delta(\kappa,\lambda-8)\) ανήκουν στη \(C_f\). Να βρείτε τα \(\lambda\) και \(\kappa\).`, questions: [
            { id: "D4a", type: "num", pts: 5, stem: "", prefix: R`\(\lambda=\)` },
            { id: "D4b", type: "num", pts: 5, stem: "", prefix: R`\(\kappa=\)` } ] }
        ]
      }
    ]
  };
})();
