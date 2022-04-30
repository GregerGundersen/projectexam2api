module.exports = ({ env }) => ({
  url: env(
    "postgres://jgfnpxdhqfbypg:a0545ab9f495c8ecf17e28e2661127a0b5232e00f0cb516988d213d044532bd3@ec2-52-18-116-67.eu-west-1.compute.amazonaws.com:5432/dc03cd98gugka5"
  ),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["yourkey1", "yourkey2"]),
  },
});
