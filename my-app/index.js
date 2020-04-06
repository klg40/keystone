const { Keystone } = require('@keystonejs/keystone');
const { Text } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');
const { NextApp } = require('@keystonejs/app-next');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const PROJECT_NAME = "Blog";

const auth = {
  user: 'user',
  password: 'b3c4726b1'
};

const config = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter({
    mongoUri: 'mongodb://127.0.0.1:27017/blog'
  }),
});

keystone.createList('Todo', {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    name: { type: Text, schemaDoc: 'This is the thing you need to do' },
  },
});

module.exports = {
  keystone,
  apps: [
    new NextApp({ dir: 'app' }),
  ],
};
