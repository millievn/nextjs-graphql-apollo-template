# nextjs-graphql-rematch-template

## usage

1. set `API` in `.env.development` and run `yarn` to install dependences
2. write graphql `query/mutation` in `/services/gql`
3. run `yarn schema` to fetch graphql schema and generate types
4. write page in `pages` and use hooks in `page`
5. run `yarn dev` to start at [http://localhost:3000](http://localhost:3000)

## scripts

- `yarn schema`: fetch schema from remote
- `make test`: build and run locally with production environment
- `make up`: build and run in docker with production environment

## reference

- [graphql](https://graphql.org/)
- [nextjs](https://nextjs.org/)
- [apollo-client](https://www.apollographql.com/docs/react)
- [graphql-code-generator](https://graphql-code-generator.com/docs/plugins/typescript-graphql-request)
- [docker](https://docs.docker.com/)
