# Widgets App

Aplicação que contem 4 widgets diferentes acessíveis através de uma navbar.

Os widgets são:

- Accordion: implementação de um menu estilo accordion;

- Dropdown: implementação de um componente reutilizavel dropdown aonde é possível alterar a cor do texto dentro do dropdown;

- Search: uma caixa de busca que utiliza a API da Wikipedia. A busca é feita automaticamente sem precisar pressionar Enter ou clicar em um botão. É feita uma soliciatação para a API a cada 500ms entre um key press do usuário, intervalo este que é resetado caso haja um keypress dentro deste periodo de 500ms;

- Translate: um tradutor que utiliza a API do Google Translate. Reutiliza o componente Dropdown, neste caso habilitando o usuário a escolher a lingua alvo da tradução. Assim como no componente Search, a tradução é feita automaticamente sem necessidade de apertar Enter ou clicar em um botão. (necessita de uma API key)

Desenvolvido utilizando React e Semantic UI. Utiliza hooks.
