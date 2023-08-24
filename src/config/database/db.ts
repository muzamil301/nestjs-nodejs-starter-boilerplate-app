const sqlConfig = {
    type: 'postgres',
    url: 'postgres://postgres:password@localhost:5444',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'my-postgres',
    entities: ['dist/**/**/*.entity{.js,.ts}'],
    synchronize: true,
    connectTimeout: 30000
};

module.exports = sqlConfig;
// exports.sqlConfig = sqlConfig;