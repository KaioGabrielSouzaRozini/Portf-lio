function mouseOver(tec) {
  var text = document.getElementById("text");
  var title = document.getElementById("title");
  if (tec == "HTML") {
    title.innerText = tec;
    text.innerText =
      "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores";
  }
  if (tec == "CSS") {
    title.innerText = tec;
    text.innerText =
      "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>";
  }
  if (tec == "Bootstrap") {
    title.innerText = tec;
    text.innerText =
      "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.";
  }
  if (tec == "javascript") {
    title.innerText = tec;
    text.innerText =
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.";
  }
  if (tec == "typescript") {
    title.innerText = tec;
    text.innerText =
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.";
  }
  if (tec == "nodejs") {
    title.innerText = tec;
    text.innerText =
      "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.";
  }
  if (tec == "react") {
    title.innerText = tec;
    text.innerText =
      "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.";
  }
  if (tec == "nextjs") {
    title.innerText = tec;
    text.innerText =
      "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.";
  }
  if (tec == "sass") {
    title.innerText = tec;
    text.innerText =
      "Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass.";
  }
}
