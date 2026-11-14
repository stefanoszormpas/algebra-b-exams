/* Προσομοίωση εξεταστικής — Κεφάλαιο 3: Τριγωνομετρία
   Μόνο οι εκφωνήσεις. Οι σωστές απαντήσεις βρίσκονται ΜΟΝΟ στο Google Apps Script. */
(function () {
  const R = String.raw;
  window.EXAMS = window.EXAMS || {};
  window.EXAMS.kef3 = {
    id: "kef3",
    title: "Προσομοίωση εξεταστικής — Κεφάλαιο 3",
    subtitle: "Τριγωνομετρία",
    minutes: 180,
    themes: [
      {
        name: "ΘΕΜΑ Α", points: 25,
        parts: [
          {
            label: "Α1", intro: "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν ως Σωστές (Σ) ή Λανθασμένες (Λ).",
            questions: [
              { id: "A1a", type: "tf", pts: 2, stem: R`Για κάθε \(x\in\mathbb{R}\) ισχύει \(\eta\mu(\pi-x)=\eta\mu x\).` },
              { id: "A1b", type: "tf", pts: 2, stem: R`Η συνάρτηση \(f(x)=\sigma\upsilon\nu x\) είναι περιττή.` },
              { id: "A1c", type: "tf", pts: 2, stem: R`Η συνάρτηση \(f(x)=\eta\mu 2x\) έχει περίοδο \(T=\pi\).` },
              { id: "A1d", type: "tf", pts: 2, stem: R`Για κάθε \(x\in\mathbb{R}\) ισχύει \(\varepsilon\varphi x\cdot\sigma\varphi x=1\).` },
              { id: "A1e", type: "tf", pts: 2, stem: R`Για κάθε \(x\in\mathbb{R}\) ισχύει \(\sigma\upsilon\nu(-x)=-\sigma\upsilon\nu x\).` }
            ]
          },
          {
            label: "Α2", intro: "Να επιλέξετε τη σωστή απάντηση.",
            questions: [
              { id: "A2a", type: "choice", pts: 5, stem: R`Η γωνία \(150^\circ\) σε ακτίνια είναι:`,
                options: [R`\(\dfrac{3\pi}{4}\)`, R`\(\dfrac{2\pi}{3}\)`, R`\(\dfrac{5\pi}{6}\)`, R`\(\dfrac{5\pi}{3}\)`] },
              { id: "A2b", type: "choice", pts: 5, stem: R`Ο αριθμός \(\sigma\upsilon\nu\dfrac{4\pi}{3}\) είναι ίσος με:`,
                options: [R`\(\dfrac12\)`, R`\(-\dfrac12\)`, R`\(-\dfrac{\sqrt3}{2}\)`, R`\(\dfrac{\sqrt3}{2}\)`] },
              { id: "A2c", type: "choice", pts: 5, stem: R`Οι λύσεις της εξίσωσης \(\eta\mu x=0\) είναι \((\kappa\in\mathbb{Z})\):`,
                options: [R`\(x=2\kappa\pi\)`, R`\(x=\kappa\pi\)`, R`\(x=\kappa\pi+\dfrac{\pi}{2}\)`, R`\(x=2\kappa\pi+\pi\)`] }
            ]
          }
        ]
      },
      {
        name: "ΘΕΜΑ Β", points: 25,
        intro: R`Δίνεται γωνία \(\theta\) με \(\dfrac{\pi}{2}<\theta<\pi\) και \(\eta\mu\theta=\dfrac35\).`,
        parts: [
          { label: "Β1", questions: [
            { id: "B1", type: "num", pts: 7, stem: R`Να βρείτε το \(\sigma\upsilon\nu\theta\).`, prefix: R`\(\sigma\upsilon\nu\theta=\)` } ] },
          { label: "Β2", questions: [
            { id: "B2", type: "num", pts: 6, stem: R`Να βρείτε την \(\varepsilon\varphi\theta\).`, prefix: R`\(\varepsilon\varphi\theta=\)` } ] },
          { label: "Β3", questions: [
            { id: "B3", type: "num", pts: 6, stem: R`Να υπολογίσετε την παράσταση \(A=\eta\mu(\pi-\theta)+\sigma\upsilon\nu(\pi+\theta)\).`, prefix: R`\(A=\)` } ] },
          { label: "Β4", questions: [
            { id: "B4", type: "num", pts: 6, stem: R`Να υπολογίσετε τον αριθμό \(\eta\mu\left(\theta+\dfrac{3\pi}{2}\right)\).`, prefix: R`\(\eta\mu\left(\theta+\frac{3\pi}{2}\right)=\)` } ] }
        ]
      },
      {
        name: "ΘΕΜΑ Γ", points: 25,
        intro: R`Δίνεται η συνάρτηση \(f(x)=2\eta\mu 3x+1\), \(x\in\mathbb{R}\).`,
        parts: [
          { label: "Γ1", questions: [
            { id: "G1", type: "num", pts: 6, stem: R`Να βρείτε την περίοδο \(T\) της \(f\). (Μπορείτε να γράψετε π.χ. 2π/3.)`, prefix: R`\(T=\)` } ] },
          { label: "Γ2", intro: R`Να βρείτε τη μέγιστη και την ελάχιστη τιμή της \(f\).`, questions: [
            { id: "G2a", type: "num", pts: 3, stem: "", prefix: R`\(\max f=\)` },
            { id: "G2b", type: "num", pts: 3, stem: "", prefix: R`\(\min f=\)` } ] },
          { label: "Γ3", questions: [
            { id: "G3", type: "choice", pts: 7, stem: R`Οι λύσεις της εξίσωσης \(f(x)=2\) είναι \((\kappa\in\mathbb{Z})\):`,
              options: [R`\(x=2\kappa\pi+\dfrac{\pi}{6}\) ή \(x=2\kappa\pi+\dfrac{5\pi}{6}\)`,
                        R`\(x=\dfrac{2\kappa\pi}{3}+\dfrac{\pi}{18}\) ή \(x=\dfrac{2\kappa\pi}{3}+\dfrac{5\pi}{18}\)`,
                        R`\(x=\dfrac{2\kappa\pi}{3}+\dfrac{\pi}{18}\) ή \(x=\dfrac{2\kappa\pi}{3}-\dfrac{\pi}{18}\)`,
                        R`\(x=\kappa\pi+\dfrac{\pi}{18}\)`] } ] },
          { label: "Γ4", questions: [
            { id: "G4", type: "num", pts: 6, stem: R`Πόσες λύσεις έχει η εξίσωση \(f(x)=2\) στο διάστημα \([0,\pi]\);`, prefix: "Πλήθος λύσεων:" } ] }
        ]
      },
      {
        name: "ΘΕΜΑ Δ", points: 25,
        intro: R`Δίνεται η εξίσωση \(2\sigma\upsilon\nu^2x+3\eta\mu x-3=0\).`,
        parts: [
          { label: "Δ1", questions: [
            { id: "D1", type: "choice", pts: 6, stem: R`Αν θέσουμε \(\eta\mu x=t\), η εξίσωση γράφεται:`,
              options: [R`\(2t^2+3t-1=0\)`, R`\(2t^2-3t-1=0\)`, R`\(2t^2-3t+1=0\)`, R`\(-2t^2+3t+1=0\)`] } ] },
          { label: "Δ2", questions: [
            { id: "D2", type: "choice", pts: 6, stem: R`Από την παραπάνω εξίσωση προκύπτει:`,
              options: [R`\(\eta\mu x=1\) ή \(\eta\mu x=\dfrac12\)`, R`\(\eta\mu x=-1\) ή \(\eta\mu x=-\dfrac12\)`, R`\(\eta\mu x=1\) ή \(\eta\mu x=2\)`, R`μόνο \(\eta\mu x=\dfrac12\)`] } ] },
          { label: "Δ3", intro: R`Να λύσετε την εξίσωση στο διάστημα \([0,2\pi)\).`, questions: [
            { id: "D3a", type: "num", pts: 6, stem: "Πόσες λύσεις έχει η εξίσωση στο διάστημα αυτό;", prefix: "Πλήθος:" },
            { id: "D3b", type: "num", pts: 7, stem: R`Ποια είναι η μεγαλύτερη από αυτές; (π.χ. 5π/6)`, prefix: R`\(x=\)` } ] }
        ]
      }
    ]
  };
})();
