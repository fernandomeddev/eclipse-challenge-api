# Instalação:

1. Baixe o repositorio; 
2. Instale o NodeJs 16.20.0.(https://nodejs.org/en/blog/release/v16.20.0)
3. Abra o diretório do repositório com um editor de texto. recomendado: (Visual Studio Code) (https://code.visualstudio.com/download)
4. Abra o terminal dentro do diretório do projeto e execute o comando " npm i " para instalar as dependencias.
5. Crie um arquivo .Env com base no .env-semple.
6. Execute o comando "npm run seeder" para criar os registros de carteiras e de usuários;
7. Execute o comando "npm run start" para iniciar o servidor.


# endpoints
Antes de executar qualquer endPoint certifique-se de ter executado o comando "npm run seeder"

1. Lista todas os Usuários: GET http://localhost:3333/offers-portal/owners

2. Lista todas as Carteiras: GET http://localhost:3333/offers-portal/wallets

3. Cria uma oferta: POST http://localhost:3333/offers-portal/offer/:wallet_id
    Para criar uma oferta informe o id da carteira e no corpo da requisição o preço unitário e a quantidade:

        Acesse os IDs das carteiras no endpoint (2) para escolher os ids

        offers-portal/offer/:wallet_id
        {
            "unit_price": "100",
            "amount":"1"
        }

4. Lista Todas as Ofertas: GET http://localhost:3333/offers-portal/offer
    Podendo passar como query parameter, pageNumer, para escolher qual pagina, e o pageSize pra determinar a quantidade de itens por pagina 

5. Remove uma Oferta: PUT http://localhost:3333/offers-portal/delete-offer/:owner_id
    Para remover uma oferta, passe o id de um proprietário como parametro e o id da Oferta:

        Para acessar os ids dos proprietários use o endPoint (1)
        Para acessar os ids das ofertas use o endPoint (4)

        offers-portal/delete-offer/:owner_id // 
        {
            "offer_id": "64af72ddef547eac507bd05c"
        }

# Detalhes do App:

Usuário

Pessoa que utiliza o aplicativo detentor de uma conta. É possível que um usuário tenha uma ou mais carteiras atrelada a sua conta.

Carteira

Carteira virtual onde se encontram as moedas sob custódia do usuário na blockchain. Moedas do mesmo tipo, porém de carteiras diferentes do mesmo usuário, não compartilham saldo.

Moeda

Um tipo de ativo (token) da blockchain.
Balcão de Ofertas

O balcão de ofertas nada mais é do que uma área onde os usuários do aplicativo possam interagir com as ofertas:


1.	Listagem das ofertas do dia atual (ofertas antigas expiram de um dia para o outro)
2.	Criar ofertas
3.	Deletar ofertas
4.	Comprar ofertas


Usuários detentores de moedas podem vendê-las por qualquer motivo. Para isto se faz o lançamento de uma oferta, onde se escolhe o preço unitário da moeda e sua quantidade.
 
# Melhorias futuras:
Implementação de uma documentação com swagger.

Ajsute no Cronjob, colocando um limite do número de registros buscados: Em vez de buscar todos os registros do banco de dados a cada minuto, limitar a consulta apenas aos registros que foram modificados desde a última verificação do cron job. Isso pode ser feito adicionando um campo "última verificação" na coleção e consultando apenas os registros que foram atualizados desde então.

Agendar o cron job em horários de baixo tráfego: Se possível, agendar o cron job para ser executado em horários de baixo tráfego no sistema. Isso evitará que o cron job cause impacto negativo no desempenho geral da aplicação durante períodos de alta demanda.

Mudar o código para TypeScript : É importante lembrar que migrar para o TypeScript  e converter o código existente. Os benefícios a longo prazo geralmente superam esses desafios iniciais, especialmente em projetos maiores ou em equipes de desenvolvimento colaborativas.

Melhorar as tratativas de Erros: Mensagens de Erro, e uso de alguma lib (Yup por exemplo) para fazer as validações.

Criação de Testes Unitários


# Considerações Finais:

No aspecto geral, a aplicação tem potêncial de crescimento e implementação de novas funcionalidades, e conta com uma arquitetura limpa e de fácil entendimento e manutenção;

#Duvidas entre em contato;

fernandohenrique520@live.com

