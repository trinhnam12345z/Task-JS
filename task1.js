var user = [
  { id: 1, name: "Nam" },
  { id: 2, name: "Phuoc" },
  { id: 3, name: "Tuan" },
];
var survey = [
  { id: 1, name: "survey 1" },
  { id: 2, name: "survey 2" },
];
var question = [
  { id: 1, question: "question 1", survey_id: 1, order: 1, question_type_id: 1 },
  { id: 2, question: "question 2", survey_id: 1, order: 2, question_type_id: 1 },
  { id: 3, question: "question 3", survey_id: 2, order: 3, question_type_id: 1 },
  { id: 4, question: "question 4", survey_id: 2, order: 4, question_type_id: 2 },
  { id: 5, question: "question 5", survey_id: 1, order: 4, question_type_id: 3 },
];

var questionType = [
  { id: 1, typeName: "radio" },
  { id: 2, typeName: "checkbox" },
  { id: 3, typeName: "text" },
];
var answer = [
  { id: 1, answer: "A", question_id: 1 },
  { id: 2, answer: "B", question_id: 1 },
  { id: 3, answer: "C", question_id: 1 },
  { id: 4, answer: "D", question_id: 1 },
  { id: 5, answer: "A", question_id: 2 },
  { id: 6, answer: "B", question_id: 2 },
  { id: 7, answer: "C", question_id: 2 },
  { id: 8, answer: "D", question_id: 2 },
  { id: 9, answer: "A", question_id: 3 },
  { id: 10, answer: "B", question_id: 3 },
  { id: 11, answer: "C", question_id: 3 },
  { id: 12, answer: "D", question_id: 3 },
  { id: 13, answer: "A", question_id: 4 },
  { id: 14, answer: "B", question_id: 4 },
  { id: 15, answer: "C", question_id: 4 },
  { id: 16, answer: "D", question_id: 4 },
  { id: 17, answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", question_id: 5 },
];

var user_answers_question = [];

let currentUserId = 1;

function createTabs() {

  var tabs = document.getElementById("tabs");
  tabs.innerHTML = "";
  for (let i = 0; i < survey.length; i++) {
    tabs.innerHTML += `<button style="margin:10px 10px ;" id="survey${survey[i].id}" value ="${survey[i].name}" type="button" onclick="selectSurvey(${survey[i].id})" >${survey[i].name}</button>`
  }
  tabs.innerHTML += `<br>`
}
createTabs();
function loadSurvey(id) {
  const x = document.getElementById("question");
  x.innerHTML = '';
  const surveySelected = survey.find(s => s.id === id);
  // for (let s = 0; s < survey.length; s++) {
  x.innerHTML += " ==================== Survey  ====================";
  x.innerHTML += `<p>id : ${surveySelected.id} name : ${surveySelected.name} </p><br>`;
  let questions = question.filter(a => a.survey_id === surveySelected.id);
  for (let i = 0; i < questions.length; i++) {
    x.innerHTML += `<p>Questions ==> id : ${questions[i].id} name : ${questions[i].question} survey_id : ${questions[i].survey_id} order : ${questions[i].order}</p><br>`;
    let answers = answer.filter(a => a.question_id === questions[i].id);
    if (questions[i].question_type_id === 1) {
      for (let j = 0; j < answers.length; j++) {
        // get user_answer selected
        const answerId = answers[j].id;
        // console.log(user_answers_question);
        // console.log(answerId);
        const answerSelected = user_answers_question.find(ua => ua.answerId === answerId && ua.userId === currentUserId);
        if (answerSelected) {
          x.innerHTML += `<input type="radio" note="id is answerid" surveyId="${id}" id="${answers[j].id}" name=" ${questions[i].question}"  value="${answers[j].answer}" checked="checked">`
        } else {
          x.innerHTML += `<input type="radio"note="id is answerid"  surveyId="${id}" id="${answers[j].id}" name=" ${questions[i].question}"  value="${answers[j].answer}">`
        }
        x.innerHTML += `<label for=" ${answers[j].id}">Answer ==> id : ${answers[j].id} answer : ${answers[j].answer} question_id : ${answers[j].question_id}</label><br>`;
      }
    } else if (questions[i].question_type_id === 2) {
      for (let j = 0; j < answers.length; j++) {
        // get user_answer selected
        const answerId = answers[j].id;
        // console.log(user_answers_question);
        // console.log(answerId);
        const answerSelected = user_answers_question.find(ua => ua.answerId === answerId && ua.userId === currentUserId);
        if (answerSelected) {
          x.innerHTML += `<input type="checkbox" note="id is answerid" surveyId="${id}" id="${answers[j].id}" name=" ${questions[i].question}"  value="${answers[j].answer}" checked="checked">`
        } else {
          x.innerHTML += `<input type="checkbox" note="id is answerid"  surveyId="${id}" id="${answers[j].id}" name=" ${questions[i].question}"  value="${answers[j].answer}">`
        }
        x.innerHTML += `<label for=" ${answers[j].id}">Answer ==> id : ${answers[j].id} answer : ${answers[j].answer} question_id : ${answers[j].question_id}</label><br>`;
      }
    } else if (questions[i].question_type_id === 3) {
      for (let j = 0; j < answers.length; j++) {
        // get user_answer selected
        const answerId = answers[j].id;
        // console.log(user_answers_question);
        // console.log(answerId);
        x.innerHTML += `<textarea name="" id="" cols="50" rows="5" >${answers[j].answer}</textarea>`
      }
    }
  }
}

function LoadSettingSurvey() {
  for (let s = 0; s < survey.length; s++) {

    const x = document.getElementById("options");
    x.innerHTML = '';
    const surveySelected = survey[s];
    // for (let s = 0; s < survey.length; s++) {
    x.innerHTML += " ==================== Survey  ====================";
    x.innerHTML += `<p>id : ${surveySelected.id} name : ${surveySelected.name} </p><br>`;
    let questions = question.filter(a => a.survey_id === surveySelected.id);
    for (let i = 0; i < questions.length; i++) {
      x.innerHTML += `<p>Questions ==> id : ${questions[i].id} name : ${questions[i].question} survey_id : ${questions[i].survey_id} order : ${questions[i].order}</p><br>`;
      let answers = answer.filter(a => a.question_id === questions[i].id);
      if (questions[i].question_type_id === 1) {
        for (let j = 0; j < answers.length; j++) {
          // get user_answer selected
          const answerId = answers[j].id;
          // console.log(user_answers_question);
          // console.log(answerId);
          const answerSelected = user_answers_question.find(ua => ua.answerId === answerId && ua.userId === currentUserId);
          if (answerSelected) {
            x.innerHTML += `<input type="text" note="id is answerid" surveyId="${surveySelected.id}" id="${answers[j].id}" name=" ${questions[i].question}"  value="${answers[j].answer}" checked="checked">`
          } else {
            x.innerHTML += `<input type="text" note="id is answerid"  surveyId="${surveySelected.id}" id="${answers[j].id}" name=" ${questions[i].question}"  value="${answers[j].answer}">`
          }
          // x.innerHTML += `<label for=" ${answers[j].id}">Answer ==> id : ${answers[j].id} answer : ${answers[j].answer} question_id : ${answers[j].question_id}</label><br>`;
        }
      } else if (questions[i].question_type_id === 2) {
        for (let j = 0; j < answers.length; j++) {
          // get user_answer selected
          const answerId = answers[j].id;
          // console.log(user_answers_question);
          // console.log(answerId);
          const answerSelected = user_answers_question.find(ua => ua.answerId === answerId && ua.userId === currentUserId);
          if (answerSelected) {
            x.innerHTML += `<input type="text" note="id is answerid" surveyId="${surveySelected.id}" id="${answers[j].id}" name=" ${questions[i].question}"  value="${answers[j].answer}" checked="checked">`
          } else {
            x.innerHTML += `<input type="text" note="id is answerid"  surveyId="${surveySelected.id}" id="${answers[j].id}" name=" ${questions[i].question}"  value="${answers[j].answer}">`
          }
          x.innerHTML += `<label for=" ${answers[j].id}">Answer ==> id : ${answers[j].id} answer : ${answers[j].answer} question_id : ${answers[j].question_id}</label><br>`;
        }
      } else if (questions[i].question_type_id === 3) {
        for (let j = 0; j < answers.length; j++) {
          // get user_answer selected
          const answerId = answers[j].id;
          // console.log(user_answers_question);
          // console.log(answerId);
          x.innerHTML += `<textarea name="" id="" cols="50" rows="5" >${answers[j].answer}</textarea>`
        }
      }
    }
  }
}


// ==================== select Questions ===================
const GetSurvey = document.getElementById("CSurvey_id");
GetSurvey.innerHTML = '';
for (let i = 0; i < survey.length; i++) {
  GetSurvey.innerHTML += `<option value="${survey[i].id}">${survey[i].name}</option>`
}
const GetQuestion_type = document.getElementById("Cquestion_type");
GetQuestion_type.innerHTML = '';
for (let i = 0; i < questionType.length; i++) {
  GetQuestion_type.innerHTML += `<option value="${questionType[i].id}">${questionType[i].typeName}</option>`
}

const GetUQuestionID = document.getElementById("UQuestionID");
GetUQuestionID.innerHTML = '';
for (let i = 0; i < question.length; i++) {
  GetUQuestionID.innerHTML += `<option value="${question[i].id}">${question[i].id}</option>`
}
// select survey

const GetUQuestion_type = document.getElementById("Uquestion_type");
GetUQuestion_type.innerHTML = '';
for (let i = 0; i < questionType.length; i++) {
  GetUQuestion_type.innerHTML += `<option value="${questionType[i].id}">${questionType[i].typeName}</option>`
}
// select user
const GetUUser = document.getElementById("UUserID");
GetUUser.innerHTML = '';
for (let i = 0; i < user.length; i++) {
  GetUUser.innerHTML += `<option value="${user[i].id}">${user[i].name}</option>`
}

const GetDUser = document.getElementById("DUserID");
GetDUser.innerHTML = '';
for (let i = 0; i < user.length; i++) {
  GetDUser.innerHTML += `<option value="${user[i].id}">${user[i].name}</option>`
}

// select survey
const GetDSurvey = document.getElementById("DSurveyID");
GetDSurvey.innerHTML = '';
for (let i = 0; i < survey.length; i++) {
  GetDSurvey.innerHTML += `<option value="${survey[i].id}">${survey[i].name}</option>`
}


const GetUSurvey = document.getElementById("USurveyID");
GetUSurvey.innerHTML = '';
for (let i = 0; i < survey.length; i++) {
  GetUSurvey.innerHTML += `<option value="${survey[i].id}">${survey[i].name}</option>`
}

const GetUSurvey_id = document.getElementById("USurvey_id");
GetUSurvey_id.innerHTML = '';
for (let i = 0; i < survey.length; i++) {
  GetUSurvey_id.innerHTML += `<option value="${survey[i].id}">${survey[i].name}</option>`
}


// ============================ Answer ==========================
const SelectQuestionId = document.getElementById("CQuestion_id");
for (let i = 0; i < question.length; i++) {
  SelectQuestionId.innerHTML += `<option value="${question[i].id}">${question[i].question}</option>`
}
const SelectUQuestionId = document.getElementById("UQuestion_id");
for (let i = 0; i < question.length; i++) {
  SelectUQuestionId.innerHTML += `<option value="${question[i].id}">${question[i].question}</option>`
}
function addAnswer() {
  let a = document.getElementById("changeAnswer")
  a.innerHTML += `<label>Answer :</label><input type="text"><br>`;
}


// ==================== User ====================
function UpdateUser(id, name) {
  id = document.getElementById("UUserID").value;
  name = document.getElementById("UUserName").value;
  for (let i = 0; i < user.length; i++) {
    if (user[i].id == id) {
      user[i].name = name;
    }
  }
  if (id > user.length) {
    alert("Update Fail  !");
  } else {
    alert("Update success  !");
  }
}
function DeleteUser(id) {
  id = Math.floor(document.getElementById("DUserID").value);
  user.splice(id - 1, 1);
  if (id > user.length) {
    alert("Delete Fail  !");
  } else {
    alert("Delete success  !");
  }
}
function CreateUser(name) {
  id = Math.floor(user.length + 1);
  name = document.getElementById("CUserName").value;
  user.push({ id, name });
  alert("Create success  !");
}
// ==================== Survey ====================

function UpdateSurvey(id, name) {
  id = Math.floor(document.getElementById("USurveyID").value);
  name = document.getElementById("USurveyName").value;
  for (let i = 0; i < survey.length; i++) {
    if (survey[i].id == id) {
      survey[i].name = name;
    }
  }
  if (id > user.length) {
    alert("Update Fail  !");
  } else {
    alert("Update success  !");
  }
}
function DeleteSurvey(id) {
  id = Math.floor(document.getElementById("DSurveyID").value);
  survey.splice(id - 1, 1);
  if (id > user.length) {
    alert("Delete Fail  !");
  } else {
    alert("Delete success  !");
  }
}
function CreateSurvey(id, name) {
  id = Math.floor(survey.length + 1);
  name = document.getElementById("CSurveyName").value;
  survey.push({ id, name });
  alert("Create success  !");

}

// ==================== Question ====================
function UpdateQuestion(id, name, survey_id, order, questionType) {
  name = document.getElementById("UQuestionName").value;
  survey_id = Math.floor(document.getElementById("USurvey_id").value);
  order = Math.floor(document.getElementById("UOrder").value);
  questionType = Math.floor(document.getElementById("Uquestion_type").value);
  for (let i = 0; i < question.length; i++) {
    if (question[i].id == id) {
      question[i].question = name;
      question[i].survey_id = survey_id;
      question[i].order = order;
      question[i].question_type_id = questionType;
    }
  }
  if (id > user.length) {
    alert("Update Fail  !");
  } else {
    alert("Update success  !");
  }
}
function DeleteQuestion(id) {
  id = Math.floor(document.getElementById("DQuestionID").value);
  question.splice(id - 1, 1);
  if (id > question.length) {
    alert("Update Fail  !");
  } else {
    alert("Update success  !");
  }
}
function CreateQuestion(name, survey_id, order, questionType) {
  id = Math.floor(question.length + 1);
  name = document.getElementById("CQuestionName").value;
  survey_id = Math.floor(document.getElementById("CSurvey_id").value);
  order = Math.floor(document.getElementById("COrder").value);
  questionType = Math.floor(document.getElementById("Cquestion_type").value);
  question.push({ id, name, survey_id, order, questionType });
  alert("Create success  !");

}

// ==================== Answer ====================

function UpdateAnswer(id, _answer, question_id) {
  id = Math.floor(document.getElementById("UAnswerID").value);
  _answer = document.getElementById("UAnswer").value;
  question_id = Math.floor(document.getElementById("UQuestion_id").value);
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].id == id) {
      answer[i].answer = _answer;
      answer[i].question_id = question_id;
    }
  }
  if (id > answer.length) {
    alert("Update Fail  !");
  } else {
    alert("Update success  !");
  }
}
function DeleteAnswer(id) {
  id = Math.floor(document.getElementById("DAnswerID").value);
  answer.splice(id - 1, 1);
  if (id > answer.length) {
    alert("Delete Fail  !");
  } else {
    alert("Delete success  !");
  }
}
function CreateAnswer(id, _answer, question_id) {
  id = Math.floor(answer.length + 1);
  _answer = document.getElementById("CAnswer").value;
  question_id = Math.floor(document.getElementById("CQuestion_id").value);
  answer.push({ id, _answer, question_id });
  alert("Create success  !");
}

// ==================== get_not_answers ====================

// function get_not_answers() {
//   document.write(" <p>==================== Question  get not answers ====================</p>");
//   for (let i = 0; i < question.length; i++) {
//     for (let j = 0; j < answer.length; j++) {
//       if () {
//         document.write(
//           `<p>id : ${question[i].id} name : ${question[i].question} survey_id : ${question[i].survey_id} order : ${question[i].order}</p><br>`
//         );
//       }
//     }
//   }
// }

// get_not_answers();
var currentSurveyId;
// select survey
function selectSurvey(surveyId) {
  // console.log(surveyId);
  loadSurvey(surveyId)
  currentSurveyId = surveyId;
}


// ==================== input_user_answers_question ====================


function addUerAnswerQuestion(answerId, userId, surveyId) {
  user_answers_question.push({ answerId, userId, surveyId });
}


function save() {
  // get question tag
  const questionTag = document.getElementById("question");
  // get all input task on survey
  const inputs = questionTag.getElementsByTagName("input");

  // remove answered before
  console.log("currentSurveyId:  " + currentSurveyId);
  user_answers_question = user_answers_question.filter(item => item.userId === currentUserId && item.surveyId !== currentSurveyId);

  // console.log(user_answers_question);
  // save userQuestion selected
  for (let input of inputs) {
    const checked = input.checked;
    const surveyId = input.attributes.surveyid.value;

    // console.log("surveyId" + surveyId)
    if (checked) {
      addUerAnswerQuestion(+input.id, currentUserId, +surveyId);
    }
  }

  // console.log(user_answers_question);
}


function login(loginUser) {
  loginUser = document.getElementById("loginUser").value;
  let check = false;
  for (let i = 0; i < user.length; i++) {
    if (loginUser === user[i].name) {
      document.getElementById("hide").style.display = "inline";
      document.getElementById("btnOption").style.display = "inline";
      document.getElementById("hideLogin").style.display = "none";
      document.getElementById("userName").innerHTML = `<h1 style = "text-align: center;" >${user[i].name}</h1>`;
      check = true;
    }
  }
  if (check == false) {
    alert("Login fail !");
  }
}


function option() {
  document.getElementById("hide").style.display = "none";
  document.getElementById("options").style.display = "inline";
  document.getElementById("btnBack").style.display = "inline";
  LoadSettingSurvey();
}
function back() {
  document.getElementById("hide").style.display = "inline";
  document.getElementById("options").style.display = "none";
  document.getElementById("btnBack").style.display = "none";
}


