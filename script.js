const topics = {
    "Select Queries": [

{
title: "Query 1",
question: "Display all columns of the EMP table",
sql: `SELECT * FROM emp;`,
output: `EMPNO ENAME JOB SAL DEPTNO
7369 SMITH CLERK 800 20
7499 ALLEN SALESMAN 1600 30`
},

{
title: "Query 2",
question: "Display EMPNO, ENAME, and SAL of all employees",
sql: `SELECT empno, ename, sal FROM emp;`,
output: `EMPNO ENAME SAL
7369 SMITH 800
7499 ALLEN 1600`
},

{
title: "Query 3",
question: "Display unique job titles from EMP",
sql: `SELECT DISTINCT job FROM emp;`,
output: `JOB
CLERK
SALESMAN
MANAGER`
},

{
title: "Query 4",
question: "Display employee names along with their department numbers",
sql: `SELECT ename, deptno FROM emp;`,
output: `ENAME DEPTNO
SMITH 20
ALLEN 30`
},

{
title: "Query 5",
question: "Display all department details",
sql: `SELECT * FROM dept;`,
output: `DEPTNO DNAME LOC
10 ACCOUNTING NEW YORK
20 RESEARCH DALLAS`
},

{
title: "Query 6",
question: "Display distinct department numbers from EMP",
sql: `SELECT DISTINCT deptno FROM emp;`,
output: `DEPTNO
10
20
30`
},

{
title: "Query 7",
question: "Display employee name and annual salary (SAL × 12)",
sql: `SELECT ename, sal*12 AS annual_salary FROM emp;`,
output: `ENAME ANNUAL_SALARY
SMITH 9600
ALLEN 19200`
},

{
title: "Query 8",
question: "Display employee name, salary, and commission",
sql: `SELECT ename, sal, comm FROM emp;`,
output: `ENAME SAL COMM
SMITH 800 NULL
ALLEN 1600 300`
},

{
title: "Query 9",
question: "Display job and salary of all employees",
sql: `SELECT job, sal FROM emp;`,
output: `JOB SAL
CLERK 800
SALESMAN 1600`
},

{
title: "Query 10",
question: "Display employees along with their manager numbers",
sql: `SELECT ename, mgr FROM emp;`,
output: `ENAME MGR
SMITH 7902
ALLEN 7698`
}

]
};

const container = document.getElementById("queries-container");

function showTopics(){
container.innerHTML = "";

for(let topic in topics){
let card = document.createElement("div");
card.className = "query-card";

card.innerHTML = `
<h2>${topic}</h2>
<button onclick="showQueries('${topic}')">Open</button>
`;

container.appendChild(card);
}
}

function showQueries(topic){
container.innerHTML = `<button onclick="showTopics()">⬅ Back</button>`;

topics[topic].forEach(q => {
let card = document.createElement("div");
card.className = "query-card";

card.innerHTML = `
<h3>${q.title}</h3>
<p>${q.question}</p>
<pre>${q.sql}</pre>

<p><b>Output:</b></p>
<pre>${q.output}</pre>
`;

container.appendChild(card);
});
}

showTopics();