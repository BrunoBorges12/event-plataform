import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new  ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4ope7a60lg601yw5eqc4nk6/master',
    cache:new InMemoryCache()

})