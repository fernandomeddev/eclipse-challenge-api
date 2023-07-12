Desafio Técnico:

O time de desenvolvimento de um produto voltado para uma blockchain precisa de sua ajuda para as próximas entregas. De acordo com o Product Owner, é preciso desenvolver o Balcão de Ofertas para o aplicativo e você foi designado para a construção de uma API que provê os serviços necessários.

Detalhes do App:

Usuário

Pessoa que utiliza o aplicativo detentor de uma conta. É possível que um usuário tenha uma ou mais carteiras atrelada a sua conta.



Carteira

Carteira virtual onde se encontram as moedas sob custódia do usuário na blockchain. Moedas do mesmo tipo, porém de carteiras diferentes do mesmo usuário, não compartilham saldo.

Moeda

Um tipo de ativo (token) da blockchain.
# O Tolken Definido foi o ETH Ethereum.

Balcão de Ofertas

O balcão de ofertas nada mais é do que uma área onde os usuários do aplicativo possam interagir com as ofertas:


1.	Listagem das ofertas do dia atual (ofertas antigas expiram de um dia para o outro)
2.	Criar ofertas
3.	Deletar ofertas
4.	Comprar ofertas




Oferta

Usuários detentores de moedas podem vendê-las por qualquer motivo. Para isto se faz o lançamento de uma oferta, onde se escolhe o preço unitário da moeda e sua quantidade.

# Oferta: 
    Preço unitário;
    Quantidade;

 
Para a primeira Sprint, foi estipulado o desenvolvimento do item 1 ao 3 do Balcão de Ofertas. Para isso, desenvolva uma RESTful API capaz de responder a requisições feitas pelo aplicativo para os 4 itens do Balcão de Ofertas:


1.	Listagem - listar todas as ofertas do dia
2.	Criar ofertas - opção para criar uma nova oferta. Como a criação da oferta depende do saldo de uma moeda em uma carteira que se quer vender, a oferta está diretamente atrelada a uma carteira específica do usuário.
3.	Deletar ofertas - opção para o usuário deletar uma oferta

Regras de negócio:


1.	A listagem no app acontecerá por paginação ou scroll. O endpoint precisa atender a qualquer um dos 2.
2.	A listagem se dará em ordem decrescente de sua data e hora de criação.
3.	Para criar uma oferta para uma moeda de uma carteira, o usuário precisa ter saldo prévio.
4.	É possível criar no máximo 5 ofertas por dia, independentemente da carteira, moeda e valor das ofertas passadas.
5.	Somente o criador de uma oferta pode deletá-la.
6.	Para fins de histórico, o PO solicitou que nenhum dado fosse apagado do banco de dados. Desta forma, o time concordou em utilizar o conceito de soft-delete ao deletar uma oferta.

Regras da API e avaliação:


1.	Não é necessário nenhum tipo de CRUD para usuários | carteiras | moedas. 
Para isto, é possível providenciar os registros por meio de um script ou seed de banco de dados (em ambos os casos os artefatos precisam estar no projeto entregue para que seja possível a execução e teste local).
2.	Não crie nenhum tipo de autenticação, este será um serviço externo. Utilize dos meios (path parameters, headers, body, query parameters, etc) para referenciar o usuário atual.
3.	Utilize o git como ferramenta de versionamento de código. A arquitetura de versionamento será fundamental para o crescimento saudável da aplicação.
4.	Utilize um banco de dados (o que preferir) para salvar os dados.
5.	Utilize o framework e libs que julgue necessário para uma boa implementação.
6.	Não crie nenhum tipo de Frontend para teste das rotas
7.	Deixe todos os passos necessários para a execução local da API em um arquivo README.md




Como o tempo é limitado, não temos tempo suficiente para entregar um código que beire a perfeição. Com isto em mente, para a segunda fase escreva no arquivo README.md em uma sessão dedicada o que você melhoraria no projeto, identificando por exemplo, possíveis pontos de gargalo, assim como melhorias no código escrito, implementação de padrões, visão do projeto sobre arquitetura/cloud, etc. Aqui será avaliado, principalmente, a visão de longo prazo do programador e sua visão do Backend em seu ecossistema. Não se prenda, o quão mais detalhista for, melhor!

Os arquivos podem ser enviados em zip.
