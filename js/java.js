function toggleMode() { // Função que alterna entre os modos claro e escuro
    const html = document.documentElement; // selecionar o elemento HTML (<html>) da pagina
    html.classList.toggle("light"); // Alterna a classe "light" no elemento HTML. Se a classe existir,
    
    // Alterar imagem do perfil
    const img = document.querySelector("#profile img"); // seleciona a imagem dentro do elemento com o id "profile"(a foto do perfil)

    // Condicional para de verificar se a classe "light" foi adicionada ao elemento HTMl
    if (html.classList.contains("light")) { // Verifica se o elemento HTML contém a classe "light" (modo claro)
        img.setAttribute("src", "/..img/img2,jpeg"); // Se estiver no modo claro, altera  a imagem para "img.jpeg"
        } else {
            img.setAttribute("src", "../img/img1.jpeg"); // se não estiver no modo claro (modo  escuro), mantém ou coloca a imagem "img1.jpeg"

        }
}