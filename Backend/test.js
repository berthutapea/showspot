const {TEST} = require("./tests/native-test");

const BaseUrl = "http://localhost:5000/api/";

const headers = {
  "api-key": "$11%%22**33++aAbBcCdDeEfFgG33@@??44",
  "content-type": "application/json",
};

const body = {
  "application_id": 6
};

TEST( "GET", "Get Students :: Admin", BaseUrl + "admin/students", headers, body);
TEST( "GET", "Get Student By Id :: Admin", BaseUrl + "admin/students/id/student96281", headers, body);
TEST( "GET", "Get Student By Name :: Admin", BaseUrl + "admin/students/name/Aldi%20Ramdani", headers, body);
// TEST( "POST", "Insert Student Data :: Admin", BaseUrl + "admin/students/create", headers, {
  //   "fullname":"Budi Aja","username":"budi","password":"budi123","campus":"STTI SONY SUGEMA","major":"Teknik Informatika","group_type_id":1,"class_type_id":1});
TEST( "PUT", "Update Student Data :: Admin", BaseUrl + "admin/students/student31601/update", headers, {
    "fullname":"Caca Cahyani","username":"caca","password":"caca123","campus":"STTI SONY SUGEMA","major":"Teknik Informatika","group_type_id":1,"class_type_id":1});
TEST( "PATCH", "Change Student Password :: Admin", BaseUrl + "admin/students/student31601/password", headers, {"password" : "caca update"});
TEST( "DELETE", "Delete Student :: Admin", BaseUrl + "admin/students/student31601/delete");