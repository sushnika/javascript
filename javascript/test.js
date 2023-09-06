console.log('hello');
const accountId = 133;
let accountEmail = "sush@admin.com";
var accoundPassword ="123456";
accountCity = "Jalandhar";

/*  try to use the let not var due to scope issue as var will change the value for some of varibales */
accountEmail = "newadmin@admin.com";
console.table([accountId, accountEmail, accountCity]);