module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Box2home.",
  database: "nestDB",
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true
}