const BASE_URL ="http://api.reactprototypes.com";
const API_KEY = "?key=c318demouser";

                            //translates to http://api.reactprototypes.com/todos?key=c318demouser
//get list of all todo items
const response = axios.get(`${BASE_URL}/todos${API_KEY}`).then(getTodoData);

function getTodoData(response) {
    console.log("Response: ", response)
}

//get single todo item
//axios.get(`${BASE_URL}/todos/${idToGet}${API_KEY}`)

// const newItem = {
//     title: "Stephanie T CLINE LDR\'s new toDo item",
//     details: "EAT CUPCAKES"
// };
//add new todo item
// axios.post(`${BASE_URL}/todos${API_KEY}`, newItem).then(resp => {
//     console.log("Add item response: ", resp)
// });

// const idToDelete="5b2d4560e3e0f45f2ed5ca25";
//
//delete todo item
// axios.delete(`${BASE_URL}/todos/${idToDelete}${API_KEY}`).then(resp => {
//     console.log("Delete response: ", resp)
// });

//to toggle completeness of data: change "complete" from false to true...
//axios.put(`${BASE_URL}/todos/${idToToggle}${API_KEY}`)
