// Função para mostrar/ocultar seções
function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }
  
  // Função para mostrar alerta ao clicar em botão
  function showAlert() {
    alert('Botão de Enviar clicado!');
  }

  