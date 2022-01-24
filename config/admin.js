module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '01c37cb21b328664324a560d475dc450'),
  },
});
