// Função para expandir ou recolher os cards de Experiência
function toggleJob(button) {
  const jobArticle = button.closest('.job');
  const isOpen = jobArticle.classList.contains('is-open');

  // Opcional: Se quiser fechar os outros ao abrir um novo, descomente a linha abaixo:
  // document.querySelectorAll('.job').forEach(j => j.classList.remove('is-open'));

  if (!isOpen) {
    jobArticle.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
  } else {
    jobArticle.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  }
}