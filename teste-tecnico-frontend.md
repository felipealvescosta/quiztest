<img style="float: center;" width=100px src="src/assets/images/sas.png">

# Teste Técnico - Dev Frontend

## Considerações sobre o desafio

-   Desenvolva as funcionalidades propostas utilizando a tecnologia ReactJS
-   Fazer upload do código para o github e enviar o link do repositório para nielsenteixeira@sas.com.br com o título **Teste Técnico - Dev Frontend - <%NOME_COMPLETO%>**
-   Esperamos uma documentação que contenha: versões suportadas da plataforma escolhida, bibliotecas utilizadas e suas versões, instruções de execução / instalação e instruções de como executar os testes (unitários e UI)

-   Você terá 5 dias corridos para entregar a solução. Caso precise de mais tempo entre em contato. Somos flexíveis com o prazo 😉

## Requisitos

-   Gostaríamos que você desenvolvesse uma solução para responder questões. As questões devem ser obtidas a partir da seguinte API pública: <https://opentdb.com/api_config.php>.
-   O código deve estar em inglês

#### Tela inicial

Deverá listar as categorias das questões disponíveis na api.

#### Tela de questão

Quando o usuário selecionar uma categoria, deve se exibir uma questão do nível **médio** e de múltipla escolha da categoria escolhida e exibir a questão com as opções de resposta para serem selecionadas. Abaixo das opções deve ter um botão para responder.

#### Resposta

Ao responder a questão, informar ao usuário se ele acertou ou errou. Após isso, mostrar a próxima questão de acordo com a seguinte regra:

-   O grau de dificuldade das questões segue o padrão: fácil, médio e difícil.
-   Caso o usuário acerte 2 seguidas de um mesmo nível, a questão a ser mostrada deve ser de dificuldade superior a da questão atual. A dificuldade não deve ser alterada caso já esteja no nível **difícil**.
-   Caso o usuário erre 2 seguidas de um mesmo nível, a questão a ser mostrada deve ser de dificuldade inferior a da questão atual. A dificuldade não deve ser alterada caso já esteja no nível **fácil**.

A resposta escolhida, a dificuldade, o gabarito, a data/hora da resposta e o indicativo se ele acertou ou errou a questão devem ser persistidos. A forma como esses dados serão persistidos fica a seu critério.

#### Fluxo final

Quando o aluno chegar ao total de 10 perguntas respondidas, o resultado dele deve ser mostrado, exibindo a quantidade de acertos e erros geral e por nível de dificuldade. Por exemplo:

-   Desempenho geral: 5 acertos e 5 erros
-   Detalhes:
    -   Fácil: 1 acerto e 1 erro
    -   Médio: 2 acertos e 2 erros
    -   Difícil: 2 acertos e 2 erros

O usuário poderá fechar o resultado e voltar à tela inicial onde é mostrada a lista de categorias.

Caso o usuário selecione uma categoria na qual ele já tenha respondido, deverá ser mostrado seus resultados, não sendo possível o aluno responder a mesma categoria mais de uma vez. A forma como esses dados serão persistidos fica a seu critério.

## Protótipo

Criamos um protótipo para guiar o desenvolvimento da sua solução: <https://www.figma.com/proto/ElMZtMsMUZ5Yku7AEFDkuF/Teste-T%C3%A9cnico-Dev-Mobile-SAS>.

Esperamos que você faça uma aplicação o mais aderente possível ao protótipo. No entanto, você tem a liberdade de alterar o layout caso julgue necessário, utilizando a paleta de cores e imagens que quiser.

## O que iremos avaliar

-   Se as funcionalidades estão implementadas corretamente
-   Testes (unitários e UI)
-   Design de código (SOLID, DRY, KISS)
-   Arquitetura da solução (Vuex ou Redux)
-   Pré processador CSS (SASS, LESS, STYLUS)
-   Responsivo
-   Conformidade com o protótipo enviado
-   Deploy automatizado
-   Fazer uso das funcionalidades do ES6+

## Pontos extras

-   Integração com Firebase, MongoDB Cloud ou outro desejado
-   Server Side Rendering
-   PWA
-   Acessibilidade
