// Quiz interactif Métiers du Web
function corrigerQuiz() {
  const reponses = {
    q1: 'HTML',
    q2: 'Créer des sites',
    q3: 'Patience',
    q4: 'CSS',
    q5: 'Assistant numérique',
    q6: 'PowerPoint',
    q7: 'JavaScript',
    q8: 'Formateur digital',
    q9: 'Antivirus',
    q10: 'Partager les idées',
  };
  let score = 0;
  let total = 10;
  let feedback = [];
  const form = document.getElementById('quiz-web');
  const blocks = form.querySelectorAll('.quiz-question');
  blocks.forEach((block) => {
    block.classList.remove(
      'border-2',
      'border-emerald-400',
      'bg-emerald-900/20',
      'border-red-400',
      'bg-red-900/20',
    );
  });
  for (let i = 1; i <= total; i++) {
    const q = form['q' + i];
    let value = null;
    if (q) {
      if (q.length) {
        for (let j = 0; j < q.length; j++) {
          if (q[j].checked) value = q[j].value;
        }
      } else {
        if (q.checked) value = q.value;
      }
    }
    const block = form.querySelector(`.quiz-question[data-question="${i}"]`);
    if (value === reponses['q' + i]) {
      score++;
      if (block) {
        block.classList.add(
          'border-2',
          'border-emerald-400',
          'bg-emerald-900/20',
        );
      }
      feedback.push(
        `<span style='color:#38bdf8;'>Question ${i} : Bonne réponse !</span>`,
      );
    } else {
      if (block) {
        block.classList.add('border-2', 'border-red-400', 'bg-red-900/20');
      }
      feedback.push(
        `<span style='color:#f87171;'>Question ${i} : Mauvaise réponse</span>`,
      );
    }
  }
  document.getElementById('quiz-resultat').innerHTML =
    feedback.join('<br>') +
    `<br><br><strong>Score : ${score} / ${total}</strong>`;
}
