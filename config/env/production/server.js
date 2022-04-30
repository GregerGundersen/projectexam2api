module.exports = ({ env }) => ({
  url: env(process.env.DATABASE_URL),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["KEY1", "KEY2"]),
  },
});
