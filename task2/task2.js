var question_answer = [
    {
        id: 1,
        question: "question 1",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        order: 1,
        category_id: 2,
    },
    {
        id: 2,
        question: "question 2",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        order: 2,
        category_id: 2,
    },
    {
        id: 3,
        question: "question 3",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        order: 3,
        category_id: 2,
    },
    {
        id: 4,
        question: "question 4",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        order: 4,
        category_id: 1,
    },
    {
        id: 5,
        question: "question 5",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        order: 5,
        category_id: 1,
    },
    {
        id: 6,
        question: "question 6",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        order: 6,
        category_id: 1,
    },
];

var categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
];

function createTabs() {
    var tabs = document.getElementById("tabs");
    tabs.innerHTML = "";
    for (let i = 0; i < categories.length; i++) {
        tabs.innerHTML += `<button style="margin:10px 10px ;" class="btn btn-primary" id="categories${categories[i].id}" value ="${categories[i].name}" 
        type="button" onclick="selectCategories(${categories[i].id})" >${categories[i].name}</button>`;
    }
    categories;
    tabs.innerHTML += `<br>`;
}
createTabs();

var currentCategoryId = 1;
getQuestion(currentCategoryId);
function getQuestion(id) {
    const x = document.getElementById("question");
    x.innerHTML = "";
    const categoriesSelected = categories.find((s) => s.id === id);
    let questions = question_answer.filter(
        (a) => a.category_id === categoriesSelected.id
    );
    for (let i = 0; i < questions.length; i++) {
        x.innerHTML += `<div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading${i}">
            <button onclick="GetValueUpdate(${questions[i].id})" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${i}" aria-expanded="false" aria-controls="flush-collapse${i}">
                ${questions[i].question}
            </button>
            </h2>
            <div id="flush-collapse${i}" class="accordion-collapse collapse" aria-labelledby="flush-heading${i}" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"><p> ${questions[i].answer}.</p></div>
            </div>
        </div>`;
    }
}
var currentQuestionSelected;
function GetValueUpdate(id) {
    currentQuestionSelected = question_answer.find((q) => q.id === id);
    document.getElementById("UQuestionId").value = `${currentQuestionSelected.id}`;
    document.getElementById("UQuestion").value = `${currentQuestionSelected.question}`;
    document.getElementById("UAnswer").value = `${currentQuestionSelected.answer}`;
    document.getElementById("UOrder").value = `${currentQuestionSelected.order}`;
}

// ===================================== Options Select ================================================
// Question category
function SLCCategories(){
    const GetCCategory = document.getElementById("CCategories");
    GetCCategory.innerHTML = "";
    for (let i = 0; i < categories.length; i++) {
        GetCCategory.innerHTML += `<option value="${categories[i].id}">${categories[i].name}</option>`;
    }
}
function UCategory(){
    const GetUCategory = document.getElementById("UCategory");
    GetUCategory.innerHTML = "";
    for (let i = 0; i < categories.length; i++) {
        GetUCategory.innerHTML += `<option value="${categories[i].id}">${categories[i].name}</option>`;
    }
}
// =====================================================================================================

function selectCategories(categoriesId) {
    getQuestion(categoriesId);
    currentCategoryId = categoriesId;
}

// Question
function CreateQuestion(question, answer, order, category_id) {
    const id = Math.floor(question_answer.length + 1);
    question = document.getElementById("CQuestion").value;
    answer = document.getElementById("CAnswer").value;
    order = Math.floor(document.getElementById("COrder").value);
    category_id = Math.floor(document.getElementById("CCategory").value);
    question_answer.push({ id, question, answer, order, category_id });
    alert("Create success  !");
    getQuestion(currentCategoryId);
}

function UpdateQuestion(id, question, answer, order, category_id) {
    id = Math.floor(document.getElementById("UQuestionId").value);
    question = document.getElementById("UQuestion").value;
    answer = document.getElementById("UAnswer").value;
    order = Math.floor(document.getElementById("UOrder").value);
    category_id = Math.floor(document.getElementById("UCategory").value);
    for (let i = 0; i < question_answer.length; i++) {
        if (question_answer[i].id == id) {
            question_answer[i].question = question;
            question_answer[i].answer = answer;
            question_answer[i].order = order;
            question_answer[i].category_id = category_id;
        }
    }
    if (id > question_answer.length) {
        alert("Update Fail  !");
    } else {
        alert("Update success  !");
    }
    getQuestion(currentCategoryId);
}

function DeleteQuestion(id) {
    id = Math.floor(document.getElementById("DQuestionID").value);
    question_answer.splice(id - 1, 1);
    if (id > question_answer.length) {
        alert("Delete Fail  !");
    } else {
        alert("Delete success  !");
    }
    getQuestion(currentCategoryId);
}

// Category

function CreateCategory(name) {
    const id = Math.floor(categories.length + 1);
    name = document.getElementById("CCategory").value;
    categories.push({ id, name });
    alert("Create success  !");
    SLCCategories();
    UCategory();
}

function UpdateCategory(id, name) {
    id = Math.floor(document.getElementById("UCategoryId").value);
    name = document.getElementById("UCategoryName").value;
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id == id) {
            categories[i].name = name;
        }
    }
    if (id > categories.length) {
        alert("Update Fail  !");
    } else {
        alert("Update success  !");
    }
    SLCCategories();
    UCategory();
}
function DeleteCategory(id) {
    id = Math.floor(document.getElementById("DCategoryID").value);
    categories.splice(id - 1, 1);
    if (id > categories.length) {
        alert("Delete Fail  !");
    } else {
        alert("Delete success  !");
    }
    SLCCategories();
    UCategory();
}



// Setting
function setting() {
    document.getElementById("crud").style.display = "inline";
    document.getElementById("btnSetting").style.display = "none";
    document.getElementById("btnBack").style.display = "inline";
    document.getElementById("tabs").style.display = "none";
    document.getElementById("question").style.display = "none";
    SLCCategories();
    UCategory();
}

function back() {
    document.getElementById("crud").style.display = "none";
    document.getElementById("btnSetting").style.display = "inline";
    document.getElementById("btnBack").style.display = "none";
    document.getElementById("tabs").style.display = "inline";
    document.getElementById("question").style.display = "inline";
}
