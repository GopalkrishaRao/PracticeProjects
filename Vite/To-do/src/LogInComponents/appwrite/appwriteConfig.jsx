import{Client, Account} from 'appwrite';

const client = new Client();

client.setEndpoint('http://localhost/v1').setProject('6472ffdaf1c17aa61c09');

export const account  = new Account(client);