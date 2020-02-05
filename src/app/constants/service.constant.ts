export const HOST="pwdcsv-insview2"
//export const HOST="localhost"
export const BASE_URL = "http://"+HOST+":8082/rest";
export const SERVICE_URL = {
  get_machine: BASE_URL + "/all",
  post_update_machine_details : BASE_URL + "/create",
  post_create_machine_details : BASE_URL + "/create",
  get_machine_status : BASE_URL + "/isAlive/"

};
