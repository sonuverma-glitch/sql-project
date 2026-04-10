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

],

"Where Clause Queries": [

{
title: "Query 1",
question: "Display employees whose salary is greater than 3000",
sql: `SELECT * FROM emp WHERE sal > 3000;`,
output: `KING 5000`
},

{
title: "Query 2",
question: "Display employees working in department 10",
sql: `SELECT * FROM emp WHERE deptno = 10;`,
output: `CLARK 10`
},

{
title: "Query 3",
question: "Display employees whose job is 'CLERK'",
sql: `SELECT * FROM emp WHERE job = 'CLERK';`,
output: `SMITH CLERK`
},

{
title: "Query 4",
question: "Display employees hired after 01-JAN-81",
sql: `SELECT * FROM emp WHERE hiredate > '01-JAN-81';`,
output: `ALLEN 20-FEB-81`
},

{
title: "Query 5",
question: "Display employees whose salary is less than 1500",
sql: `SELECT * FROM emp WHERE sal < 1500;`,
output: `SMITH 800`
},

{
title: "Query 6",
question: "Salary > 2000 and job MANAGER",
sql: `SELECT * FROM emp WHERE sal > 2000 AND job = 'MANAGER';`,
output: `JONES MANAGER 2975`
},

{
title: "Query 7",
question: "Department 10 or 20",
sql: `SELECT * FROM emp WHERE deptno IN (10,20);`,
output: `Employees from 10 & 20`
},

{
title: "Query 8",
question: "SALESMAN and salary > 1500",
sql: `SELECT * FROM emp WHERE job='SALESMAN' AND sal > 1500;`,
output: `ALLEN 1600`
},

{
title: "Query 9",
question: "CLERK or ANALYST",
sql: `SELECT * FROM emp WHERE job IN ('CLERK','ANALYST');`,
output: `CLERK / ANALYST employees`
},

{
title: "Query 10",
question: "Hired before 1982 and working in department 30",
sql: `SELECT * FROM emp WHERE hiredate < '01-JAN-82' AND deptno = 30;`,
output: `ALLEN 30`
},

{
title: "Query 11",
question: "Departments 10, 20, 30",
sql: `SELECT * FROM emp WHERE deptno IN (10,20,30);`,
output: `All employees`
},

{
title: "Query 12",
question: "Job not MANAGER or CLERK",
sql: `SELECT * FROM emp WHERE job NOT IN ('MANAGER','CLERK');`,
output: `Other jobs`
},

{
title: "Query 13",
question: "Department not 10",
sql: `SELECT * FROM emp WHERE deptno <> 10;`,
output: `Non-10 employees`
},

{
title: "Query 14",
question: "Salary between 1000 and 3000",
sql: `SELECT * FROM emp WHERE sal BETWEEN 1000 AND 3000;`,
output: `ALLEN 1600`
},

{
title: "Query 15",
question: "Hired between 1981",
sql: `SELECT * FROM emp WHERE hiredate BETWEEN '01-JAN-81' AND '31-DEC-81';`,
output: `Employees of 1981`
},

{
title: "Query 16",
question: "Name starts with A",
sql: `SELECT * FROM emp WHERE ename LIKE 'A%';`,
output: `ALLEN`
},

{
title: "Query 17",
question: "Name ends with N",
sql: `SELECT * FROM emp WHERE ename LIKE '%N';`,
output: `ALLEN`
},

{
title: "Query 18",
question: "Name contains LL",
sql: `SELECT * FROM emp WHERE ename LIKE '%LL%';`,
output: `ALLEN`
},

{
title: "Query 19",
question: "Name has exactly 5 characters",
sql: `SELECT * FROM emp WHERE LENGTH(ename)=5;`,
output: `SMITH`
},

{
title: "Query 20",
question: "Second character is A",
sql: `SELECT * FROM emp WHERE ename LIKE '_A%';`,
output: `WARD`
},

{
title: "Query 21",
question: "Order by salary ascending",
sql: `SELECT * FROM emp ORDER BY sal ASC;`,
output: `Sorted ASC`
},

{
title: "Query 22",
question: "Order by salary descending",
sql: `SELECT * FROM emp ORDER BY sal DESC;`,
output: `Sorted DESC`
},

{
title: "Query 23",
question: "Order by hire date",
sql: `SELECT * FROM emp ORDER BY hiredate;`,
output: `Sorted by date`
},

{
title: "Query 24",
question: "Order by dept and salary",
sql: `SELECT * FROM emp ORDER BY deptno, sal;`,
output: `Grouped sorting`
},

{
title: "Query 25",
question: "Order by job asc, salary desc",
sql: `SELECT * FROM emp ORDER BY job ASC, sal DESC;`,
output: `Sorted`
},

{
title: "Query 26",
question: "Alias Employee_Name",
sql: `SELECT ename AS Employee_Name FROM emp;`,
output: `Alias applied`
},

{
title: "Query 27",
question: "Salary as Monthly_Salary",
sql: `SELECT sal AS Monthly_Salary FROM emp;`,
output: `Alias`
},

{
title: "Query 28",
question: "Annual salary alias",
sql: `SELECT sal*12 AS Annual_Salary FROM emp;`,
output: `Calculated`
},

{
title: "Query 29",
question: "Commission NULL",
sql: `SELECT * FROM emp WHERE comm IS NULL;`,
output: `SMITH`
},

{
title: "Query 30",
question: "Commission NOT NULL",
sql: `SELECT * FROM emp WHERE comm IS NOT NULL;`,
output: `ALLEN`
},

{
title: "Query 31",
question: "Display employees who are getting commission",
sql: `SELECT * FROM emp WHERE comm IS NOT NULL;`,
output: `ALLEN 300`
},

{
title: "Query 32",
question: "Display employees who do not have a manager",
sql: `SELECT * FROM emp WHERE mgr IS NULL;`,
output: `KING`
},

{
title: "Query 33",
question: "Display employees whose manager is not NULL",
sql: `SELECT * FROM emp WHERE mgr IS NOT NULL;`,
output: `All except KING`
},

{
title: "Query 34",
question: "Commission NULL and salary > 2000",
sql: `SELECT * FROM emp WHERE comm IS NULL AND sal > 2000;`,
output: `JONES`
},

{
title: "Query 35",
question: "Commission NULL or salary > 3000",
sql: `SELECT * FROM emp WHERE comm IS NULL OR sal > 3000;`,
output: `Multiple rows`
},

{
title: "Query 36",
question: "Commission NOT NULL and department 30",
sql: `SELECT * FROM emp WHERE comm IS NOT NULL AND deptno = 30;`,
output: `ALLEN`
},

{
title: "Query 37",
question: "No commission and department 20",
sql: `SELECT * FROM emp WHERE comm IS NULL AND deptno = 20;`,
output: `SMITH`
},

{
title: "Query 38",
question: "Manager NULL and salary > 4000",
sql: `SELECT * FROM emp WHERE mgr IS NULL AND sal > 4000;`,
output: `KING`
},

{
title: "Query 39",
question: "Commission NULL but job SALESMAN",
sql: `SELECT * FROM emp WHERE comm IS NULL AND job='SALESMAN';`,
output: `None`
},

{
title: "Query 40",
question: "Name and annual salary ordered",
sql: `SELECT ename, sal*12 FROM emp ORDER BY sal*12;`,
output: `Sorted`
},

{
title: "Query 41",
question: "Commission NULL ordered by salary desc",
sql: `SELECT * FROM emp WHERE comm IS NULL ORDER BY sal DESC;`,
output: `Sorted`
},

{
title: "Query 42",
question: "Name and salary for dept 10",
sql: `SELECT ename AS Name, sal AS Pay FROM emp WHERE deptno = 10;`,
output: `CLARK`
},

{
title: "Query 43",
question: "Hired before 1982 ordered",
sql: `SELECT * FROM emp WHERE hiredate < '01-JAN-82' ORDER BY hiredate;`,
output: `Sorted`
},

{
title: "Query 44",
question: "Name starts with S ordered by salary",
sql: `SELECT * FROM emp WHERE ename LIKE 'S%' ORDER BY sal;`,
output: `SMITH`
},

{
title: "Query 45",
question: "Name and department ordered",
sql: `SELECT ename, deptno FROM emp ORDER BY deptno, ename;`,
output: `Sorted`
},

{
title: "Query 46",
question: "Salary between 1500 and 3000 ordered",
sql: `SELECT * FROM emp WHERE sal BETWEEN 1500 AND 3000 ORDER BY sal;`,
output: `Sorted`
},

{
title: "Query 47",
question: "Commission NOT NULL ordered",
sql: `SELECT * FROM emp WHERE comm IS NOT NULL ORDER BY comm;`,
output: `Sorted`
},

{
title: "Query 48",
question: "Dept 30 and salary >1500 ordered",
sql: `SELECT * FROM emp WHERE deptno=30 AND sal>1500 ORDER BY sal;`,
output: `ALLEN`
},

{
title: "Query 49",
question: "Name, job, salary ordered by job",
sql: `SELECT ename, job, sal FROM emp ORDER BY job;`,
output: `Sorted`
}

],

"Like Operator Queries": [

{
title: "Query 1",
question: "Name starts with A",
sql: `SELECT * FROM emp WHERE ename LIKE 'A%';`,
output: `ALLEN`
},

{
title: "Query 2",
question: "Name starts with S",
sql: `SELECT * FROM emp WHERE ename LIKE 'S%';`,
output: `SMITH`
},

{
title: "Query 3",
question: "Name ends with N",
sql: `SELECT * FROM emp WHERE ename LIKE '%N';`,
output: `ALLEN`
},

{
title: "Query 4",
question: "Name ends with R",
sql: `SELECT * FROM emp WHERE ename LIKE '%R';`,
output: `TURNER`
},

{
title: "Query 5",
question: "Name contains LL",
sql: `SELECT * FROM emp WHERE ename LIKE '%LL%';`,
output: `ALLEN`
},

{
title: "Query 6",
question: "Name contains AR",
sql: `SELECT * FROM emp WHERE ename LIKE '%AR%';`,
output: `WARD`
},

{
title: "Query 7",
question: "Job starts with M",
sql: `SELECT * FROM emp WHERE job LIKE 'M%';`,
output: `MANAGER`
},

{
title: "Query 8",
question: "Job ends with AN",
sql: `SELECT * FROM emp WHERE job LIKE '%AN';`,
output: `SALESMAN`
},

{
title: "Query 9",
question: "Job contains CL",
sql: `SELECT * FROM emp WHERE job LIKE '%CL%';`,
output: `CLERK`
},

{
title: "Query 10",
question: "Department location starts with N",
sql: `SELECT * FROM dept WHERE loc LIKE 'N%';`,
output: `NEW YORK`
},

{
title: "Query 11",
question: "Name exactly 4 characters",
sql: `SELECT * FROM emp WHERE LENGTH(ename)=4;`,
output: `WARD`
},

{
title: "Query 12",
question: "Name exactly 5 characters",
sql: `SELECT * FROM emp WHERE LENGTH(ename)=5;`,
output: `SMITH`
},

{
title: "Query 13",
question: "Second character A",
sql: `SELECT * FROM emp WHERE ename LIKE '_A%';`,
output: `WARD`
},

{
title: "Query 14",
question: "Third character L",
sql: `SELECT * FROM emp WHERE ename LIKE '__L%';`,
output: `ALLEN`
},

{
title: "Query 15",
question: "Job exactly 6 characters",
sql: `SELECT * FROM emp WHERE LENGTH(job)=6;`,
output: `CLERK`
},

{
title: "Query 16",
question: "Starts any letter ends with N",
sql: `SELECT * FROM emp WHERE ename LIKE '%N';`,
output: `ALLEN`
},

{
title: "Query 17",
question: "Job starts any char ends ER",
sql: `SELECT * FROM emp WHERE job LIKE '_%ER';`,
output: `MANAGER`
},

{
title: "Query 18",
question: "Name starts A ends N",
sql: `SELECT * FROM emp WHERE ename LIKE 'A%N';`,
output: `ALLEN`
},

{
title: "Query 19",
question: "2 chars before E",
sql: `SELECT * FROM emp WHERE ename LIKE '__E%';`,
output: `ALLEN`
},

{
title: "Query 20",
question: "1 char after A",
sql: `SELECT * FROM emp WHERE ename LIKE 'A_';`,
output: `NA`
},

{
title: "Query 21",
question: "Contains E",
sql: `SELECT * FROM emp WHERE ename LIKE '%E%';`,
output: `Multiple`
},

{
title: "Query 22",
question: "Does not contain A",
sql: `SELECT * FROM emp WHERE ename NOT LIKE '%A%';`,
output: `SMITH`
},

{
title: "Query 23",
question: "Job contains MAN",
sql: `SELECT * FROM emp WHERE job LIKE '%MAN%';`,
output: `MANAGER`
},

{
title: "Query 24",
question: "Job not start with C",
sql: `SELECT * FROM emp WHERE job NOT LIKE 'C%';`,
output: `Others`
},

{
title: "Query 25",
question: "Name contains LL twice",
sql: `SELECT * FROM emp WHERE ename LIKE '%LL%';`,
output: `ALLEN`
},

{
title: "Query 26",
question: "Name starts J and has S",
sql: `SELECT * FROM emp WHERE ename LIKE 'J%S%';`,
output: `JONES`
},

{
title: "Query 27",
question: "Job starts S ends AN",
sql: `SELECT * FROM emp WHERE job LIKE 'S%AN';`,
output: `SALESMAN`
},

{
title: "Query 28",
question: "Second last character A",
sql: `SELECT * FROM emp WHERE ename LIKE '%A_';`,
output: `NA`
},

{
title: "Query 29",
question: "One char between A and E",
sql: `SELECT * FROM emp WHERE ename LIKE '%A_E%';`,
output: `NA`
},

{
title: "Query 30",
question: "Starts S and salary >2000",
sql: `SELECT * FROM emp WHERE ename LIKE 'S%' AND sal > 2000;`,
output: `None`
},

{
title: "Query 31",
question: "Job ends with MAN and department is 20",
sql: `SELECT * FROM emp WHERE job LIKE '%MAN' AND deptno=20;`,
output: `None`
},

{
title: "Query 32",
question: "Name contains A and commission is NULL",
sql: `SELECT * FROM emp WHERE ename LIKE '%A%' AND comm IS NULL;`,
output: `SMITH`
},

{
title: "Query 33",
question: "Job starts with C and salary < 1500",
sql: `SELECT * FROM emp WHERE job LIKE 'C%' AND sal < 1500;`,
output: `SMITH`
},

{
title: "Query 34",
question: "Name ends with S and hired after 1981",
sql: `SELECT * FROM emp WHERE ename LIKE '%S' AND hiredate > '31-DEC-81';`,
output: `JONES`
},

{
title: "Query 35",
question: "Name starts with M and department not 10",
sql: `SELECT * FROM emp WHERE ename LIKE 'M%' AND deptno <> 10;`,
output: `MARTIN`
},

{
title: "Query 36",
question: "Job contains ER and salary between 2000 and 3000",
sql: `SELECT * FROM emp WHERE job LIKE '%ER%' AND sal BETWEEN 2000 AND 3000;`,
output: `MANAGER`
},

{
title: "Query 37",
question: "Name starts with A or job starts with S",
sql: `SELECT * FROM emp WHERE ename LIKE 'A%' OR job LIKE 'S%';`,
output: `ALLEN`
},

{
title: "Query 38",
question: "Name contains I and manager not NULL",
sql: `SELECT * FROM emp WHERE ename LIKE '%I%' AND mgr IS NOT NULL;`,
output: `SMITH`
},

{
title: "Query 39",
question: "Name ends with N and commission not NULL",
sql: `SELECT * FROM emp WHERE ename LIKE '%N' AND comm IS NOT NULL;`,
output: `ALLEN`
},

{
title: "Query 40",
question: "Alias Name where name starts with S ordered",
sql: `SELECT ename AS Name FROM emp WHERE ename LIKE 'S%' ORDER BY ename;`,
output: `SMITH`
},

{
title: "Query 41",
question: "Name and salary alias Pay contains A ordered",
sql: `SELECT ename, sal AS Pay FROM emp WHERE ename LIKE '%A%' ORDER BY sal;`,
output: `ALLEN`
},

{
title: "Query 42",
question: "Job starts with M ordered by job and salary",
sql: `SELECT * FROM emp WHERE job LIKE 'M%' ORDER BY job, sal;`,
output: `Sorted`
},

{
title: "Query 43",
question: "Name ends with E ordered by hiredate",
sql: `SELECT * FROM emp WHERE ename LIKE '%E' ORDER BY hiredate;`,
output: `Sorted`
},

{
title: "Query 44",
question: "Name and annual salary where name starts J",
sql: `SELECT ename, sal*12 FROM emp WHERE ename LIKE 'J%';`,
output: `JONES`
},

{
title: "Query 45",
question: "Name contains R ordered by department",
sql: `SELECT * FROM emp WHERE ename LIKE '%R%' ORDER BY deptno;`,
output: `WARD`
},

{
title: "Query 46",
question: "Alias Employee where job ends AN",
sql: `SELECT ename AS Employee FROM emp WHERE job LIKE '%AN';`,
output: `ALLEN`
},

{
title: "Query 47",
question: "Name starts with K ordered desc",
sql: `SELECT * FROM emp WHERE ename LIKE 'K%' ORDER BY sal DESC;`,
output: `KING`
},

{
title: "Query 48",
question: "Name contains L ordered by name and salary",
sql: `SELECT * FROM emp WHERE ename LIKE '%L%' ORDER BY ename, sal;`,
output: `ALLEN`
},

{
title: "Query 49",
question: "Job starts with C ordered",
sql: `SELECT * FROM emp WHERE job LIKE 'C%' ORDER BY job;`,
output: `CLERK`
},

{
title: "Query 50",
question: "Name exactly 6 chars ends R",
sql: `SELECT * FROM emp WHERE LENGTH(ename)=6 AND ename LIKE '%R';`,
output: `TURNER`
}

],

"Subqueries": [

{
title: "Query 1",
question: "Salary greater than JONES",
sql: `SELECT * FROM emp WHERE sal > (SELECT sal FROM emp WHERE ename='JONES');`,
output: `Employees with higher salary`
},

{
title: "Query 2",
question: "Same salary as SCOTT",
sql: `SELECT * FROM emp WHERE sal = (SELECT sal FROM emp WHERE ename='SCOTT');`,
output: `Employees matching SCOTT`
},

{
title: "Query 3",
question: "Hired after ALLEN",
sql: `SELECT * FROM emp WHERE hiredate > (SELECT hiredate FROM emp WHERE ename='ALLEN');`,
output: `Employees after ALLEN`
},

{
title: "Query 4",
question: "Same department as BLAKE",
sql: `SELECT * FROM emp WHERE deptno = (SELECT deptno FROM emp WHERE ename='BLAKE');`,
output: `Dept 30 employees`
},

{
title: "Query 5",
question: "Same job as MILLER",
sql: `SELECT * FROM emp WHERE job = (SELECT job FROM emp WHERE ename='MILLER');`,
output: `CLERKs`
},

{
title: "Query 6",
question: "Less than average salary",
sql: `SELECT * FROM emp WHERE sal < (SELECT AVG(sal) FROM emp);`,
output: `Below average`
},

{
title: "Query 7",
question: "More than max salary of CLERKs",
sql: `SELECT * FROM emp WHERE sal > (SELECT MAX(sal) FROM emp WHERE job='CLERK');`,
output: `Higher than CLERKs`
},

{
title: "Query 8",
question: "Minimum salary",
sql: `SELECT * FROM emp WHERE sal = (SELECT MIN(sal) FROM emp);`,
output: `SMITH`
},

{
title: "Query 9",
question: "Maximum salary",
sql: `SELECT * FROM emp WHERE sal = (SELECT MAX(sal) FROM emp);`,
output: `KING`
},

{
title: "Query 10",
question: "Employees in ACCOUNTING",
sql: `SELECT * FROM emp WHERE deptno = (SELECT deptno FROM dept WHERE dname='ACCOUNTING');`,
output: `Dept 10`
},

{
title: "Query 11",
question: "Departments located in NEW YORK",
sql: `SELECT * FROM emp WHERE deptno IN (SELECT deptno FROM dept WHERE loc='NEW YORK');`,
output: `Dept 10`
},

{
title: "Query 12",
question: "Salary matches any salary in dept 30",
sql: `SELECT * FROM emp WHERE sal IN (SELECT sal FROM emp WHERE deptno=30);`,
output: `Matching salaries`
},

{
title: "Query 13",
question: "More than all CLERKs",
sql: `SELECT * FROM emp WHERE sal > ALL (SELECT sal FROM emp WHERE job='CLERK');`,
output: `Higher salaries`
},

{
title: "Query 14",
question: "Less than any MANAGER",
sql: `SELECT * FROM emp WHERE sal < ANY (SELECT sal FROM emp WHERE job='MANAGER');`,
output: `Lower salaries`
},

{
title: "Query 15",
question: "Job appears in dept 20",
sql: `SELECT * FROM emp WHERE job IN (SELECT job FROM emp WHERE deptno=20);`,
output: `Matching jobs`
},

{
title: "Query 16",
question: "Department has SALESMAN",
sql: `SELECT * FROM emp WHERE deptno IN (SELECT deptno FROM emp WHERE job='SALESMAN');`,
output: `Dept 30`
},

{
title: "Query 17",
question: "Same salary as any CLERK",
sql: `SELECT * FROM emp WHERE sal IN (SELECT sal FROM emp WHERE job='CLERK');`,
output: `Matching salaries`
},

{
title: "Query 18",
question: "Not in SALESMAN departments",
sql: `SELECT * FROM emp WHERE deptno NOT IN (SELECT deptno FROM emp WHERE job='SALESMAN');`,
output: `Other depts`
},

{
title: "Query 19",
question: "More than dept 10 employees",
sql: `SELECT * FROM emp WHERE sal > ALL (SELECT sal FROM emp WHERE deptno=10);`,
output: `Higher salaries`
},

{
title: "Query 20",
question: "Departments with more than 3 employees",
sql: `SELECT * FROM emp WHERE deptno IN (SELECT deptno FROM emp GROUP BY deptno HAVING COUNT(*)>3);`,
output: `Dept 20,30`
},

{
title: "Query 21",
question: "Employees earning more than department average",
sql: `SELECT * FROM emp e WHERE sal > (SELECT AVG(sal) FROM emp WHERE deptno = e.deptno);`,
output: `Above dept avg`
},

{
title: "Query 22",
question: "Highest salary in each department",
sql: `SELECT * FROM emp e WHERE sal = (SELECT MAX(sal) FROM emp WHERE deptno = e.deptno);`,
output: `Top earners dept-wise`
},

{
title: "Query 23",
question: "Lowest salary in each job",
sql: `SELECT * FROM emp e WHERE sal = (SELECT MIN(sal) FROM emp WHERE job = e.job);`,
output: `Lowest per job`
},

{
title: "Query 24",
question: "Departments having total salary greater than dept 20",
sql: `SELECT deptno FROM emp GROUP BY deptno HAVING SUM(sal) > (SELECT SUM(sal) FROM emp WHERE deptno=20);`,
output: `Dept numbers`
},

{
title: "Query 25",
question: "Salary equals max salary of their job",
sql: `SELECT * FROM emp e WHERE sal = (SELECT MAX(sal) FROM emp WHERE job = e.job);`,
output: `Top per job`
},

{
title: "Query 26",
question: "More than overall average salary",
sql: `SELECT * FROM emp WHERE sal > (SELECT AVG(sal) FROM emp);`,
output: `Above overall avg`
},

{
title: "Query 27",
question: "Department with maximum employees",
sql: `SELECT deptno FROM emp GROUP BY deptno HAVING COUNT(*) = (SELECT MAX(COUNT(*)) FROM emp GROUP BY deptno);`,
output: `Dept with max count`
},

{
title: "Query 28",
question: "Jobs having minimum average salary",
sql: `SELECT job FROM emp GROUP BY job HAVING AVG(sal) = (SELECT MIN(AVG(sal)) FROM emp GROUP BY job);`,
output: `Job(s)`
},

{
title: "Query 29",
question: "More than avg salary of CLERKs",
sql: `SELECT * FROM emp WHERE sal > (SELECT AVG(sal) FROM emp WHERE job='CLERK');`,
output: `Above clerk avg`
},

{
title: "Query 30",
question: "Department with highest average salary",
sql: `SELECT deptno FROM emp GROUP BY deptno HAVING AVG(sal) = (SELECT MAX(AVG(sal)) FROM emp GROUP BY deptno);`,
output: `Dept`
},

{
title: "Query 31",
question: "More than avg of own department",
sql: `SELECT * FROM emp e WHERE sal > (SELECT AVG(sal) FROM emp WHERE deptno = e.deptno);`,
output: `Above dept avg`
},

{
title: "Query 32",
question: "Max salary in their department",
sql: `SELECT * FROM emp e WHERE sal = (SELECT MAX(sal) FROM emp WHERE deptno = e.deptno);`,
output: `Top per dept`
},

{
title: "Query 33",
question: "Min salary in their department",
sql: `SELECT * FROM emp e WHERE sal = (SELECT MIN(sal) FROM emp WHERE deptno = e.deptno);`,
output: `Lowest per dept`
},

{
title: "Query 34",
question: "More than avg of their job",
sql: `SELECT * FROM emp e WHERE sal > (SELECT AVG(sal) FROM emp WHERE job = e.job);`,
output: `Above job avg`
},

{
title: "Query 35",
question: "Only employee in their department",
sql: `SELECT * FROM emp e WHERE 1 = (SELECT COUNT(*) FROM emp WHERE deptno = e.deptno);`,
output: `Single employee dept`
},

{
title: "Query 36",
question: "Departments having employees earning > 5000",
sql: `SELECT DISTINCT deptno FROM emp WHERE sal > 5000;`,
output: `Dept`
},

{
title: "Query 37",
question: "Employees whose department has more than 3 employees",
sql: `SELECT * FROM emp WHERE deptno IN (SELECT deptno FROM emp GROUP BY deptno HAVING COUNT(*)>3);`,
output: `Dept 20/30`
},

{
title: "Query 38",
question: "Employees whose job has more than 2 employees",
sql: `SELECT * FROM emp WHERE job IN (SELECT job FROM emp GROUP BY job HAVING COUNT(*)>2);`,
output: `Common jobs`
},

{
title: "Query 39",
question: "Departments where no one gets commission",
sql: `SELECT deptno FROM emp GROUP BY deptno HAVING COUNT(comm)=0;`,
output: `Dept`
},

{
title: "Query 40",
question: "Departments having at least one manager",
sql: `SELECT DISTINCT deptno FROM emp WHERE job='MANAGER';`,
output: `Dept`
}

],

"Group Functions": [

{
title: "Query 1",
question: "Total number of employees",
sql: `SELECT COUNT(*) FROM emp;`,
output: `14`
},

{
title: "Query 2",
question: "Total salary",
sql: `SELECT SUM(sal) FROM emp;`,
output: `Total salary`
},

{
title: "Query 3",
question: "Average salary",
sql: `SELECT AVG(sal) FROM emp;`,
output: `Average`
},

{
title: "Query 4",
question: "Highest salary",
sql: `SELECT MAX(sal) FROM emp;`,
output: `5000`
},

{
title: "Query 5",
question: "Lowest salary",
sql: `SELECT MIN(sal) FROM emp;`,
output: `800`
},

{
title: "Query 6",
question: "Total departments",
sql: `SELECT COUNT(DISTINCT deptno) FROM emp;`,
output: `3`
},

{
title: "Query 7",
question: "Employees who are managers",
sql: `SELECT COUNT(*) FROM emp WHERE job='MANAGER';`,
output: `Managers count`
},

{
title: "Query 8",
question: "Total commission",
sql: `SELECT SUM(comm) FROM emp;`,
output: `Commission sum`
},

{
title: "Query 9",
question: "Average commission",
sql: `SELECT AVG(comm) FROM emp;`,
output: `Average`
},

{
title: "Query 10",
question: "Employees getting commission",
sql: `SELECT COUNT(*) FROM emp WHERE comm IS NOT NULL;`,
output: `Count`
},

{
title: "Query 11",
question: "Department-wise total salary",
sql: `SELECT deptno, SUM(sal) FROM emp GROUP BY deptno;`,
output: `Dept totals`
},

{
title: "Query 12",
question: "Department-wise average salary",
sql: `SELECT deptno, AVG(sal) FROM emp GROUP BY deptno;`,
output: `Dept avg`
},

{
title: "Query 13",
question: "Department-wise employees",
sql: `SELECT deptno, COUNT(*) FROM emp GROUP BY deptno;`,
output: `Count`
},

{
title: "Query 14",
question: "Job-wise employees",
sql: `SELECT job, COUNT(*) FROM emp GROUP BY job;`,
output: `Job count`
},

{
title: "Query 15",
question: "Job-wise total salary",
sql: `SELECT job, SUM(sal) FROM emp GROUP BY job;`,
output: `Totals`
},

{
title: "Query 16",
question: "Job-wise max salary",
sql: `SELECT job, MAX(sal) FROM emp GROUP BY job;`,
output: `Max`
},

{
title: "Query 17",
question: "Job-wise min salary",
sql: `SELECT job, MIN(sal) FROM emp GROUP BY job;`,
output: `Min`
},

{
title: "Query 18",
question: "Department-wise max salary",
sql: `SELECT deptno, MAX(sal) FROM emp GROUP BY deptno;`,
output: `Max`
},

{
title: "Query 19",
question: "Department-wise min salary",
sql: `SELECT deptno, MIN(sal) FROM emp GROUP BY deptno;`,
output: `Min`
},

{
title: "Query 20",
question: "Department-wise avg commission",
sql: `SELECT deptno, AVG(comm) FROM emp GROUP BY deptno;`,
output: `Avg comm`
},

,
{
title: "Query 21",
question: "Dept-job wise employees",
sql: `SELECT deptno, job, COUNT(*) FROM emp GROUP BY deptno, job;`,
output: `Counts`
},

{
title: "Query 22",
question: "Dept-job wise total salary",
sql: `SELECT deptno, job, SUM(sal) FROM emp GROUP BY deptno, job;`,
output: `Totals`
},

{
title: "Query 23",
question: "Dept-job wise avg salary",
sql: `SELECT deptno, job, AVG(sal) FROM emp GROUP BY deptno, job;`,
output: `Avg`
},

{
title: "Query 24",
question: "Dept-job wise max salary",
sql: `SELECT deptno, job, MAX(sal) FROM emp GROUP BY deptno, job;`,
output: `Max`
},

{
title: "Query 25",
question: "Dept-job wise min salary",
sql: `SELECT deptno, job, MIN(sal) FROM emp GROUP BY deptno, job;`,
output: `Min`
},

{
title: "Query 26",
question: "Dept & job highest total salary",
sql: `SELECT deptno, job FROM emp GROUP BY deptno, job HAVING SUM(sal)=(SELECT MAX(SUM(sal)) FROM emp GROUP BY deptno, job);`,
output: `Highest`
},

{
title: "Query 27",
question: "Dept & job lowest avg salary",
sql: `SELECT deptno, job FROM emp GROUP BY deptno, job HAVING AVG(sal)=(SELECT MIN(AVG(sal)) FROM emp GROUP BY deptno, job);`,
output: `Lowest`
},

{
title: "Query 28",
question: "Dept-job total commission",
sql: `SELECT deptno, job, SUM(comm) FROM emp GROUP BY deptno, job;`,
output: `Totals`
},

{
title: "Query 29",
question: "Dept-job employee count",
sql: `SELECT deptno, job, COUNT(*) FROM emp GROUP BY deptno, job;`,
output: `Counts`
},

{
title: "Query 30",
question: "Dept-job max employees",
sql: `SELECT deptno, job FROM emp GROUP BY deptno, job HAVING COUNT(*)=(SELECT MAX(COUNT(*)) FROM emp GROUP BY deptno, job);`,
output: `Max`
},

,
{
title: "Query 31",
question: "Dept total salary where deptno > 10",
sql: `SELECT deptno, SUM(sal) FROM emp WHERE deptno > 10 GROUP BY deptno;`,
output: `Dept totals`
},

{
title: "Query 32",
question: "Job count where salary > 2000",
sql: `SELECT job, COUNT(*) FROM emp WHERE sal > 2000 GROUP BY job;`,
output: `Counts`
},

{
title: "Query 33",
question: "Dept avg salary hired after 1981",
sql: `SELECT deptno, AVG(sal) FROM emp WHERE hiredate > '31-DEC-81' GROUP BY deptno;`,
output: `Avg`
},

{
title: "Query 34",
question: "Job total salary for CLERK and MANAGER",
sql: `SELECT job, SUM(sal) FROM emp WHERE job IN ('CLERK','MANAGER') GROUP BY job;`,
output: `Totals`
},

{
title: "Query 35",
question: "Dept employees where commission NOT NULL",
sql: `SELECT deptno, COUNT(*) FROM emp WHERE comm IS NOT NULL GROUP BY deptno;`,
output: `Counts`
},

{
title: "Query 36",
question: "Job avg salary where dept 20",
sql: `SELECT job, AVG(sal) FROM emp WHERE deptno=20 GROUP BY job;`,
output: `Avg`
},

{
title: "Query 37",
question: "Dept total salary excluding dept 30",
sql: `SELECT deptno, SUM(sal) FROM emp WHERE deptno <> 30 GROUP BY deptno;`,
output: `Totals`
},

{
title: "Query 38",
question: "Job max salary where salary >1500",
sql: `SELECT job, MAX(sal) FROM emp WHERE sal > 1500 GROUP BY job;`,
output: `Max`
},

{
title: "Query 39",
question: "Dept count where job SALESMAN",
sql: `SELECT deptno, COUNT(*) FROM emp WHERE job='SALESMAN' GROUP BY deptno;`,
output: `Counts`
},

{
title: "Query 40",
question: "Job total commission where commission NOT NULL",
sql: `SELECT job, SUM(comm) FROM emp WHERE comm IS NOT NULL GROUP BY job;`,
output: `Totals`
},

{
title: "Query 41",
question: "Departments having more than 3 employees",
sql: `SELECT deptno FROM emp GROUP BY deptno HAVING COUNT(*)>3;`,
output: `Dept`
},

{
title: "Query 42",
question: "Jobs avg salary > 2500",
sql: `SELECT job FROM emp GROUP BY job HAVING AVG(sal)>2500;`,
output: `Jobs`
},

{
title: "Query 43",
question: "Departments total salary > 10000",
sql: `SELECT deptno FROM emp GROUP BY deptno HAVING SUM(sal)>10000;`,
output: `Dept`
},

{
title: "Query 44",
question: "Jobs having more than 2 employees",
sql: `SELECT job FROM emp GROUP BY job HAVING COUNT(*)>2;`,
output: `Jobs`
},

{
title: "Query 45",
question: "Departments max salary > 4000",
sql: `SELECT deptno FROM emp GROUP BY deptno HAVING MAX(sal)>4000;`,
output: `Dept`
},

{
title: "Query 46",
question: "Jobs min salary < 1000",
sql: `SELECT job FROM emp GROUP BY job HAVING MIN(sal)<1000;`,
output: `Jobs`
},

{
title: "Query 47",
question: "Dept total salary where count > 4",
sql: `SELECT deptno, SUM(sal) FROM emp GROUP BY deptno HAVING COUNT(*)>4;`,
output: `Dept`
},

{
title: "Query 48",
question: "Job avg salary where total salary > 5000",
sql: `SELECT job, AVG(sal) FROM emp GROUP BY job HAVING SUM(sal)>5000;`,
output: `Jobs`
},

{
title: "Query 49",
question: "Departments having employees with commission",
sql: `SELECT DISTINCT deptno FROM emp WHERE comm IS NOT NULL;`,
output: `Dept`
},

{
title: "Query 50",
question: "Jobs having more than one manager",
sql: `SELECT job FROM emp WHERE job='MANAGER' GROUP BY job HAVING COUNT(*)>1;`,
output: `Manager job`
},

{
title: "Query 51",
question: "Dept count of employees getting commission",
sql: `SELECT deptno, COUNT(*) FROM emp WHERE comm IS NOT NULL GROUP BY deptno;`,
output: `Counts`
},

{
title: "Query 52",
question: "Job-wise total commission",
sql: `SELECT job, SUM(comm) FROM emp GROUP BY job;`,
output: `Totals`
},

{
title: "Query 53",
question: "Dept avg commission excluding NULL",
sql: `SELECT deptno, AVG(comm) FROM emp WHERE comm IS NOT NULL GROUP BY deptno;`,
output: `Avg`
},

{
title: "Query 54",
question: "Total commission ignoring NULL",
sql: `SELECT SUM(comm) FROM emp;`,
output: `Total`
},

{
title: "Query 55",
question: "Employees without commission",
sql: `SELECT COUNT(*) FROM emp WHERE comm IS NULL;`,
output: `Count`
},

{
title: "Query 56",
question: "Dept count where manager NULL",
sql: `SELECT deptno, COUNT(*) FROM emp WHERE mgr IS NULL GROUP BY deptno;`,
output: `Counts`
},

{
title: "Query 57",
question: "Job avg commission",
sql: `SELECT job, AVG(comm) FROM emp GROUP BY job;`,
output: `Avg`
},

{
title: "Query 58",
question: "Departments all employees get commission",
sql: `SELECT deptno FROM emp GROUP BY deptno HAVING COUNT(*)=COUNT(comm);`,
output: `Dept`
},

{
title: "Query 59",
question: "Departments no employee gets commission",
sql: `SELECT deptno FROM emp GROUP BY deptno HAVING COUNT(comm)=0;`,
output: `Dept`
},

{
title: "Query 60",
question: "Job count employees not getting commission",
sql: `SELECT job, COUNT(*) FROM emp WHERE comm IS NULL GROUP BY job;`,
output: `Counts`
}

],

"DDL Commands": [

{
title: "DDL 1",
question: "Create STUDENT table",
sql: `CREATE TABLE student (
  sid NUMBER,
  sname VARCHAR2(30),
  age NUMBER,
  course VARCHAR2(20)
);`,
output: `Table created successfully.`
},

{
title: "DDL 2",
question: "Create EMPLOYEE table",
sql: `CREATE TABLE employee (
  eid NUMBER,
  ename VARCHAR2(40),
  salary NUMBER(8,2),
  deptno NUMBER
);`,
output: `Table created successfully.`
},

{
title: "DDL 3",
question: "Create DEPARTMENT table",
sql: `CREATE TABLE department (
  deptno NUMBER,
  dname VARCHAR2(30),
  location VARCHAR2(30)
);`,
output: `Table created successfully.`
},

{
title: "DDL 4",
question: "Create BOOK table",
sql: `CREATE TABLE book (
  book_id NUMBER,
  title VARCHAR2(50),
  author VARCHAR2(40),
  price NUMBER
);`,
output: `Table created successfully.`
},

{
title: "DDL 5",
question: "Create COURSE table",
sql: `CREATE TABLE course (
  cid NUMBER,
  cname VARCHAR2(40),
  duration NUMBER
);`,
output: `Table created successfully.`
},

{
title: "DDL 6",
question: "Create PROJECT table",
sql: `CREATE TABLE project (
  pid NUMBER,
  pname VARCHAR2(50),
  start_date DATE,
  end_date DATE
);`,
output: `Table created successfully.`
},

{
title: "DDL 7",
question: "Create CUSTOMER table",
sql: `CREATE TABLE customer (
  cid NUMBER,
  cname VARCHAR2(40),
  city VARCHAR2(30),
  phone NUMBER
);`,
output: `Table created successfully.`
},

{
title: "DDL 8",
question: "Create SALES table",
sql: `CREATE TABLE sales (
  sale_id NUMBER,
  product_name VARCHAR2(50),
  quantity NUMBER,
  price NUMBER
);`,
output: `Table created successfully.`
},

{
title: "DDL 9",
question: "Create EMP_COPY (structure only)",
sql: `CREATE TABLE emp_copy AS SELECT * FROM emp WHERE 1=0;`,
output: `Table created successfully.`
},

{
title: "DDL 10",
question: "Create EMP_BACKUP with data",
sql: `CREATE TABLE emp_backup AS SELECT * FROM emp;`,
output: `Table created successfully.`
},

{
title: "DDL 11",
question: "Add EMAIL to STUDENT",
sql: `ALTER TABLE student ADD email VARCHAR2(50);`,
output: `Table altered successfully.`
},

{
title: "DDL 12",
question: "Add PHONE to EMPLOYEE",
sql: `ALTER TABLE employee ADD phone NUMBER;`,
output: `Table altered successfully.`
},

{
title: "DDL 13",
question: "Modify SNAME size",
sql: `ALTER TABLE student MODIFY sname VARCHAR2(50);`,
output: `Table altered successfully.`
},

{
title: "DDL 14",
question: "Modify SALARY datatype",
sql: `ALTER TABLE employee MODIFY salary NUMBER(10,2);`,
output: `Table altered successfully.`
},

{
title: "DDL 15",
question: "Add CITY and PINCODE to CUSTOMER",
sql: `ALTER TABLE customer ADD (city VARCHAR2(30), pincode NUMBER);`,
output: `Table altered successfully.`
},

{
title: "DDL 16",
question: "Rename column SNAME",
sql: `ALTER TABLE student RENAME COLUMN sname TO student_name;`,
output: `Table altered successfully.`
},

{
title: "DDL 17",
question: "Drop AGE column",
sql: `ALTER TABLE student DROP COLUMN age;`,
output: `Table altered successfully.`
},

{
title: "DDL 18",
question: "Set SALARY NOT NULL",
sql: `ALTER TABLE employee MODIFY salary NOT NULL;`,
output: `Table altered successfully.`
},

{
title: "DDL 19",
question: "Increase TITLE size",
sql: `ALTER TABLE book MODIFY title VARCHAR2(100);`,
output: `Table altered successfully.`
},

{
title: "DDL 20",
question: "Add MANAGER_ID",
sql: `ALTER TABLE employee ADD manager_id NUMBER;`,
output: `Table altered successfully.`
},

{
title: "DDL 21",
question: "Drop STUDENT table",
sql: `DROP TABLE student;`,
output: `Table dropped.`
},

{
title: "DDL 22",
question: "Drop CUSTOMER table",
sql: `DROP TABLE customer;`,
output: `Table dropped.`
},

{
title: "DDL 23",
question: "Drop PROJECT table",
sql: `DROP TABLE project;`,
output: `Table dropped.`
},

{
title: "DDL 24",
question: "Remove SALES table",
sql: `DROP TABLE sales;`,
output: `Table dropped.`
},

{
title: "DDL 25",
question: "Drop COURSE table",
sql: `DROP TABLE course;`,
output: `Table dropped.`
},

{
title: "DDL 26",
question: "Rename STUDENT table",
sql: `RENAME student TO students;`,
output: `Table renamed.`
},

{
title: "DDL 27",
question: "Rename EMPLOYEE table",
sql: `RENAME employee TO emp_master;`,
output: `Table renamed.`
},

{
title: "DDL 28",
question: "Rename CUSTOMER table",
sql: `RENAME customer TO client;`,
output: `Table renamed.`
},

{
title: "DDL 29",
question: "Rename BOOK table",
sql: `RENAME book TO book_details;`,
output: `Table renamed.`
},

{
title: "DDL 30",
question: "Rename PROJECT table",
sql: `RENAME project TO project_info;`,
output: `Table renamed.`
},

{
title: "DDL 31",
question: "Remove all records STUDENT",
sql: `TRUNCATE TABLE student;`,
output: `Table truncated.`
},

{
title: "DDL 32",
question: "Delete all EMPLOYEE rows",
sql: `TRUNCATE TABLE employee;`,
output: `Table truncated.`
},

{
title: "DDL 33",
question: "Empty CUSTOMER table",
sql: `TRUNCATE TABLE customer;`,
output: `Table truncated.`
},

{
title: "DDL 34",
question: "Clear SALES table",
sql: `TRUNCATE TABLE sales;`,
output: `Table truncated.`
},

{
title: "DDL 35",
question: "Clear PROJECT table",
sql: `TRUNCATE TABLE project;`,
output: `Table truncated.`
},

{
title: "DDL 36",
question: "Create TRAINING table",
sql: `CREATE TABLE training (tid NUMBER, tname VARCHAR2(40), duration NUMBER);`,
output: `Table created successfully.`
},

{
title: "DDL 37",
question: "Add TRAINER_NAME",
sql: `ALTER TABLE training ADD trainer_name VARCHAR2(40);`,
output: `Table altered successfully.`
},

{
title: "DDL 38",
question: "Modify TNAME size",
sql: `ALTER TABLE training MODIFY tname VARCHAR2(60);`,
output: `Table altered successfully.`
},

{
title: "DDL 39",
question: "Rename TRAINING",
sql: `RENAME training TO training_program;`,
output: `Table renamed.`
},

{
title: "DDL 40",
question: "Truncate TRAINING_PROGRAM",
sql: `TRUNCATE TABLE training_program;`,
output: `Table truncated.`
},

{
title: "DDL 41",
question: "Drop TRAINING_PROGRAM",
sql: `DROP TABLE training_program;`,
output: `Table dropped.`
},

{
title: "DDL 42",
question: "Create EMP_PROJECT + modify",
sql: `CREATE TABLE emp_project (
emp_id NUMBER,
project_id NUMBER,
start_date DATE,
end_date DATE,
role VARCHAR2(30)
);
ALTER TABLE emp_project MODIFY role VARCHAR2(50);
ALTER TABLE emp_project ADD status VARCHAR2(20);`,
output: `Table created and altered successfully.`
},

{
title: "DDL 43",
question: "Create PRODUCT + modify",
sql: `CREATE TABLE product (
pid NUMBER,
pname VARCHAR2(50),
price NUMBER,
category VARCHAR2(30)
);
ALTER TABLE product RENAME COLUMN pname TO product_name;
ALTER TABLE product MODIFY price NUMBER(10,2);`,
output: `Table created and altered successfully.`
},

{
title: "DDL 44",
question: "Create ORDERS + changes",
sql: `CREATE TABLE orders (
order_id NUMBER,
customer_id NUMBER,
order_date DATE,
total_amount NUMBER
);
ALTER TABLE orders ADD status VARCHAR2(20);
ALTER TABLE orders DROP COLUMN total_amount;
ALTER TABLE orders ADD total_amount NUMBER(10,2);`,
output: `Table updated successfully.`
},

{
title: "DDL 45",
question: "EMP_TEMP process",
sql: `CREATE TABLE emp_temp AS SELECT * FROM emp WHERE sal>2000;
RENAME emp_temp TO emp_high_salary;
TRUNCATE TABLE emp_high_salary;
DROP TABLE emp_high_salary;`,
output: `Process completed successfully.`
},

{
title: "DDL 46",
question: "STUDENT_RECORD changes",
sql: `CREATE TABLE student_record (
sid NUMBER,
sname VARCHAR2(40),
course VARCHAR2(30),
marks NUMBER
);
ALTER TABLE student_record ADD grade CHAR(1);
ALTER TABLE student_record MODIFY marks NUMBER(5,2);
ALTER TABLE student_record RENAME COLUMN course TO course_name;`,
output: `Table created and altered successfully.`
},

{
title: "DDL 47",
question: "EMP_ARCHIVE changes",
sql: `CREATE TABLE emp_archive AS SELECT * FROM emp WHERE 1=0;
ALTER TABLE emp_archive ADD archive_date DATE;
RENAME emp_archive TO emp_history;`,
output: `Table created and modified.`
},

{
title: "DDL 48",
question: "DEPT_BACKUP changes",
sql: `CREATE TABLE dept_backup AS SELECT * FROM dept;
ALTER TABLE dept_backup DROP COLUMN loc;
ALTER TABLE dept_backup ADD location VARCHAR2(40);`,
output: `Table updated successfully.`
},

{
title: "DDL 49",
question: "SALES_DATA changes",
sql: `CREATE TABLE sales_data (
sale_id NUMBER,
product_id NUMBER,
sale_date DATE,
amount NUMBER
);
ALTER TABLE sales_data ADD region VARCHAR2(30);
ALTER TABLE sales_data MODIFY amount NUMBER(12,2);
RENAME sales_data TO regional_sales_data;`,
output: `Table created and updated.`
},

{
title: "DDL 50",
question: "LOG_TABLE operations",
sql: `CREATE TABLE log_table (
log_id NUMBER,
user_name VARCHAR2(30),
action VARCHAR2(50),
log_date DATE
);
TRUNCATE TABLE log_table;
RENAME log_table TO system_log;
DROP TABLE system_log;`,
output: `Table processed successfully.`
}

],

"DML Commands": [

{
title: "DML 1",
question: "Insert into STUDENT",
sql: `INSERT INTO student VALUES (101, 'RAHUL', 20, 'MCA');`,
output: `1 row inserted.`
},

{
title: "DML 2",
question: "Insert into EMPLOYEE",
sql: `INSERT INTO employee VALUES (201, 'ANITA', 45000, 10);`,
output: `1 row inserted.`
},

{
title: "DML 3",
question: "Insert into DEPT",
sql: `INSERT INTO dept VALUES (50, 'TRAINING', 'DELHI');`,
output: `1 row inserted.`
},

{
title: "DML 4",
question: "Insert partial into BOOK",
sql: `INSERT INTO book (book_id, title, price)
VALUES (1, 'DBMS', 500);`,
output: `1 row inserted.`
},

{
title: "DML 5",
question: "Insert multiple into COURSE",
sql: `INSERT ALL
INTO course VALUES (1, 'BCA', 3)
INTO course VALUES (2, 'MCA', 2)
SELECT * FROM dual;`,
output: `2 rows inserted.`
},

{
title: "DML 6",
question: "Insert into EMP_COPY from EMP",
sql: `INSERT INTO emp_copy SELECT * FROM emp;`,
output: `Rows inserted.`
},

{
title: "DML 7",
question: "Insert salary >3000 into EMP_HIGH_SAL",
sql: `INSERT INTO emp_high_sal
SELECT * FROM emp WHERE sal > 3000;`,
output: `Rows inserted.`
},

{
title: "DML 8",
question: "Insert employees hired after 1981",
sql: `INSERT INTO emp_new_hire
SELECT * FROM emp WHERE hiredate > '31-DEC-81';`,
output: `Rows inserted.`
},

{
title: "DML 9",
question: "Insert DEPT into DEPT_BACKUP",
sql: `INSERT INTO dept_backup
SELECT deptno, dname FROM dept;`,
output: `Rows inserted.`
},

{
title: "DML 10",
question: "Insert names & salary",
sql: `INSERT INTO emp_salary_record
SELECT ename, sal FROM emp;`,
output: `Rows inserted.`
},

{
title: "DML 11",
question: "Update salary of SMITH",
sql: `UPDATE emp SET sal = 2000 WHERE ename='SMITH';`,
output: `1 row updated.`
},

{
title: "DML 12",
question: "Increase salary by 10%",
sql: `UPDATE emp SET sal = sal * 1.10;`,
output: `Rows updated.`
},

{
title: "DML 13",
question: "Update ALLEN dept",
sql: `UPDATE emp SET deptno = 20 WHERE ename='ALLEN';`,
output: `1 row updated.`
},

{
title: "DML 14",
question: "Update SALESMAN commission",
sql: `UPDATE emp SET comm = 500 WHERE job='SALESMAN';`,
output: `Rows updated.`
},

{
title: "DML 15",
question: "Update MILLER job",
sql: `UPDATE emp SET job='MANAGER' WHERE ename='MILLER';`,
output: `1 row updated.`
},

{
title: "DML 16",
question: "Increase dept 10 salary",
sql: `UPDATE emp SET sal = sal*1.20 WHERE deptno=10;`,
output: `Rows updated.`
},

{
title: "DML 17",
question: "Update CLERK salary",
sql: `UPDATE emp SET sal=1500 WHERE job='CLERK';`,
output: `Rows updated.`
},

{
title: "DML 18",
question: "Update dept location",
sql: `UPDATE dept SET loc='MUMBAI' WHERE deptno=30;`,
output: `1 row updated.`
},

{
title: "DML 19",
question: "Update NULL commission",
sql: `UPDATE emp SET comm=100 WHERE comm IS NULL;`,
output: `Rows updated.`
},

{
title: "DML 20",
question: "Update salary < avg",
sql: `UPDATE emp SET sal=sal+500
WHERE sal < (SELECT AVG(sal) FROM emp);`,
output: `Rows updated.`
},

{
title: "DML 21",
question: "Delete SMITH",
sql: `DELETE FROM emp WHERE ename='SMITH';`,
output: `1 row deleted.`
},

{
title: "DML 22",
question: "Delete dept 30 employees",
sql: `DELETE FROM emp WHERE deptno=30;`,
output: `Rows deleted.`
},

{
title: "DML 23",
question: "Delete salary <1000",
sql: `DELETE FROM emp WHERE sal < 1000;`,
output: `Rows deleted.`
},

{
title: "DML 24",
question: "Delete hired before 1981",
sql: `DELETE FROM emp WHERE hiredate < '01-JAN-81';`,
output: `Rows deleted.`
},

{
title: "DML 25",
question: "Delete no commission",
sql: `DELETE FROM emp WHERE comm IS NULL;`,
output: `Rows deleted.`
},

{
title: "DML 26",
question: "Delete Chicago dept",
sql: `DELETE FROM dept WHERE loc='CHICAGO';`,
output: `Rows deleted.`
},

{
title: "DML 27",
question: "Delete CLERK",
sql: `DELETE FROM emp WHERE job='CLERK';`,
output: `Rows deleted.`
},

{
title: "DML 28",
question: "Delete min salary",
sql: `DELETE FROM emp
WHERE sal=(SELECT MIN(sal) FROM emp);`,
output: `Rows deleted.`
},

{
title: "DML 29",
question: "Delete New York dept employees",
sql: `DELETE FROM emp WHERE deptno IN
(SELECT deptno FROM dept WHERE loc='NEW YORK');`,
output: `Rows deleted.`
},

{
title: "DML 30",
question: "Delete NULL manager",
sql: `DELETE FROM emp WHERE mgr IS NULL;`,
output: `Rows deleted.`
}

],

"DQL Commands": [

{
title: "DQL 1",
question: "Display all columns of EMP",
sql: `SELECT * FROM emp;`,
output: `All records displayed.`
},

{
title: "DQL 2",
question: "Display EMPNO, ENAME, SAL",
sql: `SELECT empno, ename, sal FROM emp;`,
output: `Selected columns displayed.`
},

{
title: "DQL 3",
question: "Display unique job titles",
sql: `SELECT DISTINCT job FROM emp;`,
output: `Distinct jobs displayed.`
},

{
title: "DQL 4",
question: "Display name with deptno",
sql: `SELECT ename, deptno FROM emp;`,
output: `Names with department numbers.`
},

{
title: "DQL 5",
question: "Display all DEPT details",
sql: `SELECT * FROM dept;`,
output: `All departments displayed.`
},

{
title: "DQL 6",
question: "Distinct department numbers",
sql: `SELECT DISTINCT deptno FROM emp;`,
output: `Unique department numbers.`
},

{
title: "DQL 7",
question: "Annual salary",
sql: `SELECT ename, sal*12 AS annual_salary FROM emp;`,
output: `Annual salary calculated.`
},

{
title: "DQL 8",
question: "Name, salary, commission",
sql: `SELECT ename, sal, comm FROM emp;`,
output: `Salary and commission shown.`
},

{
title: "DQL 9",
question: "Job and salary",
sql: `SELECT job, sal FROM emp;`,
output: `Job and salary displayed.`
},

{
title: "DQL 10",
question: "Employees with manager",
sql: `SELECT ename, mgr FROM emp;`,
output: `Manager numbers displayed.`
}

],

"Scalar Functions": [

{
title: "SF 1",
question: "Display employee name, hire date, and current date. Also calculate the number of days the employee has worked.",
sql: `SELECT ename, hiredate, SYSDATE,
(SYSDATE - hiredate) AS days_worked FROM emp;`,
output: `Days worked calculated for each employee`
},

{
title: "SF 2",
question: "Display employee name and hire date in the format: Monday, January 01, 2024.",
sql: `SELECT ename,
TO_CHAR(hiredate,'Day, Month DD, YYYY') FROM emp;`,
output: `Formatted hiredate displayed`
},

{
title: "SF 3",
question: "Find employees who joined in the same month as the current system date (ignore year).",
sql: `SELECT ename FROM emp
WHERE TO_CHAR(hiredate,'MM') = TO_CHAR(SYSDATE,'MM');`,
output: `Employees filtered by month`
},

{
title: "SF 4",
question: "Display employee name and the next Monday after their hire date.",
sql: `SELECT ename,
NEXT_DAY(hiredate,'MONDAY') FROM emp;`,
output: `Next Monday displayed`
},

{
title: "SF 5",
question: "Display employee name and the last day of their joining month.",
sql: `SELECT ename,
LAST_DAY(hiredate) FROM emp;`,
output: `Last day of month shown`
},

{
title: "SF 6",
question: "Find employees who have completed more than 10 years in the company.",
sql: `SELECT ename FROM emp
WHERE MONTHS_BETWEEN(SYSDATE, hiredate)/12 > 10;`,
output: `Employees with >10 years shown`
},

{
title: "SF 7",
question: "Display employee name and number of months worked in the company.",
sql: `SELECT ename,
MONTHS_BETWEEN(SYSDATE, hiredate) FROM emp;`,
output: `Months worked calculated`
},

{
title: "SF 8",
question: "Display employee name, hire date, and hire date after adding 3 years and 6 months.",
sql: `SELECT ename, hiredate,
ADD_MONTHS(hiredate,42) FROM emp;`,
output: `Updated hiredate displayed`
},

{
title: "SF 9",
question: "Find employees hired between two given dates (use TO_DATE).",
sql: `SELECT ename FROM emp
WHERE hiredate BETWEEN
TO_DATE('01-01-1981','DD-MM-YYYY')
AND TO_DATE('31-12-1982','DD-MM-YYYY');`,
output: `Employees between dates shown`
},

{
title: "SF 10",
question: "Display the difference in years between SYSDATE and hire date (rounded).",
sql: `SELECT ename,
ROUND((SYSDATE - hiredate)/365) FROM emp;`,
output: `Years difference calculated`
},

{
title: "SF 11",
question: "Display employee name and salary rounded to the nearest 1000.",
sql: `SELECT ename, ROUND(sal,-3) FROM emp;`,
output: `Salary rounded to nearest 1000`
},

{
title: "SF 12",
question: "Display salary truncated to 2 decimal places.",
sql: `SELECT TRUNC(sal,2) FROM emp;`,
output: `Salary truncated to 2 decimal places`
},

{
title: "SF 13",
question: "Display employee name and square root of salary.",
sql: `SELECT ename, SQRT(sal) FROM emp;`,
output: `Square root of salary displayed`
},

{
title: "SF 14",
question: "Find the absolute difference between salary and 5000.",
sql: `SELECT ename, ABS(sal-5000) FROM emp;`,
output: `Absolute difference calculated`
},

{
title: "SF 15",
question: "Display salary rounded up to the nearest integer.",
sql: `SELECT CEIL(sal) FROM emp;`,
output: `Salary rounded up`
},

{
title: "SF 16",
question: "Display salary rounded down to the nearest integer.",
sql: `SELECT FLOOR(sal) FROM emp;`,
output: `Salary rounded down`
},

{
title: "SF 17",
question: "Generate a random number between 1 and 500 for each employee.",
sql: `SELECT ename, ROUND(DBMS_RANDOM.VALUE(1,500)) FROM emp;`,
output: `Random numbers generated`
},

{
title: "SF 18",
question: "Display remainder when salary is divided by 2000.",
sql: `SELECT ename, MOD(sal,2000) FROM emp;`,
output: `Remainder displayed`
},

{
title: "SF 19",
question: "Display salary raised to the power of 3.",
sql: `SELECT ename, POWER(sal,3) FROM emp;`,
output: `Power calculated`
},

{
title: "SF 20",
question: "Round salary to nearest hundred and thousand (two columns).",
sql: `SELECT ename, ROUND(sal,-2), ROUND(sal,-3) FROM emp;`,
output: `Rounded values displayed`
},

{
title: "SF 21",
question: "Display employee names in uppercase and lowercase in two columns.",
sql: `SELECT UPPER(ename), LOWER(ename) FROM emp;`,
output: `Names in upper and lower case`
},

{
title: "SF 22",
question: "Display employee name and its length.",
sql: `SELECT ename, LENGTH(ename) FROM emp;`,
output: `Length of names displayed`
},

{
title: "SF 23",
question: "Display first 4 characters of employee name.",
sql: `SELECT SUBSTR(ename,1,4) FROM emp;`,
output: `First 4 characters shown`
},

{
title: "SF 24",
question: "Concatenate employee name and job using the - symbol.",
sql: `SELECT ename || '-' || job FROM emp;`,
output: `Concatenated values displayed`
},

{
title: "SF 25",
question: "Replace all occurrences of letter ‘A’ with ‘#’ in employee names.",
sql: `SELECT REPLACE(ename,'A','#') FROM emp;`,
output: `Characters replaced`
},

{
title: "SF 26",
question: "Display position of first occurrence of ‘E’ in employee name.",
sql: `SELECT ename, INSTR(ename,'E') FROM emp;`,
output: `Position displayed`
},

{
title: "SF 27",
question: "Remove leading and trailing spaces from employee name.",
sql: `SELECT TRIM(ename) FROM emp;`,
output: `Spaces removed`
},

{
title: "SF 28",
question: "Display employee name with first letter capital and rest lowercase.",
sql: `SELECT INITCAP(ename) FROM emp;`,
output: `Formatted name displayed`
},

{
title: "SF 29",
question: "Display last 3 characters of employee name.",
sql: `SELECT SUBSTR(ename,-3) FROM emp;`,
output: `Last 3 characters shown`
},

{
title: "SF 30",
question: "Pad employee name with * on the left to make total length 10.",
sql: `SELECT LPAD(ename,10,'*') FROM emp;`,
output: `Name padded with *`
},

{
title: "SF 31",
question: "Display employee name with spaces removed.",
sql: `SELECT REPLACE(ename,' ','') FROM emp;`,
output: `Spaces removed from names`
},

{
title: "SF 32",
question: "Display employee names starting with ‘S’.",
sql: `SELECT ename FROM emp WHERE ename LIKE 'S%';`,
output: `Names starting with S displayed`
},

{
title: "SF 33",
question: "Count number of characters excluding spaces.",
sql: `SELECT ename, LENGTH(REPLACE(ename,' ','')) FROM emp;`,
output: `Character count displayed`
},

{
title: "SF 34",
question: "Display employee name reversed.",
sql: `SELECT ename, REVERSE(ename) FROM emp;`,
output: `Names reversed`
},

{
title: "SF 35",
question: "Extract domain name from email column.",
sql: `SELECT SUBSTR(email, INSTR(email,'@')+1) FROM emp;`,
output: `Domain extracted`
},

{
title: "SF 36",
question: "Convert current date into format: DD/MM/YYYY.",
sql: `SELECT TO_CHAR(SYSDATE,'DD/MM/YYYY') FROM dual;`,
output: `Formatted date`
},

{
title: "SF 37",
question: "Convert string '15-AUG-2020' into DATE format.",
sql: `SELECT TO_DATE('15-AUG-2020','DD-MON-YYYY') FROM dual;`,
output: `Converted to date`
},

{
title: "SF 38",
question: "Convert salary into character with currency format (e.g., ₹10,000).",
sql: `SELECT TO_CHAR(sal,'₹99,999') FROM emp;`,
output: `Currency format displayed`
},

{
title: "SF 39",
question: "Convert number 12345 into string with commas.",
sql: `SELECT TO_CHAR(12345,'99,999') FROM dual;`,
output: `Number formatted`
},

{
title: "SF 40",
question: "Convert hire date into format: Month DD, YYYY.",
sql: `SELECT TO_CHAR(hiredate,'Month DD, YYYY') FROM emp;`,
output: `Date formatted`
},

{
title: "SF 41",
question: "Convert string column to number and perform arithmetic operation.",
sql: `SELECT TO_NUMBER('100') + 50 FROM dual;`,
output: `Conversion and calculation done`
},

{
title: "SF 42",
question: "Handle invalid date format using TO_DATE safely.",
sql: `SELECT TO_DATE('31-02-2020','DD-MM-YYYY') FROM dual;`,
output: `Error handled (invalid date)`
},

{
title: "SF 43",
question: "Convert SYSDATE into year only.",
sql: `SELECT TO_CHAR(SYSDATE,'YYYY') FROM dual;`,
output: `Year displayed`
},

{
title: "SF 44",
question: "Convert salary into string and concatenate with text.",
sql: `SELECT 'Salary: ' || TO_CHAR(sal) FROM emp;`,
output: `Concatenated output`
},

{
title: "SF 45",
question: "Display hire date in multiple formats (3 columns).",
sql: `SELECT hiredate,
TO_CHAR(hiredate,'DD-MM-YYYY'),
TO_CHAR(hiredate,'Month YYYY') FROM emp;`,
output: `Multiple formats shown`
},

{
title: "SF 46",
question: "Display employee name and salary. If salary is NULL, display 0.",
sql: `SELECT ename, NVL(sal,0) FROM emp;`,
output: `NULL replaced with 0`
},

{
title: "SF 47",
question: "Display employee name and commission. If NULL, display ‘No Commission’.",
sql: `SELECT ename, NVL(TO_CHAR(comm),'No Commission') FROM emp;`,
output: `NULL handled`
},

{
title: "SF 48",
question: "Use NVL2 to show commission status (Has/No Commission).",
sql: `SELECT ename, NVL2(comm,'Has Commission','No Commission') FROM emp;`,
output: `Status displayed`
},

{
title: "SF 49",
question: "Use COALESCE to display first non-null value among salary, commission, bonus.",
sql: `SELECT ename, COALESCE(sal,comm,0) FROM emp;`,
output: `First non-null value shown`
},

{
title: "SF 50",
question: "Display employee salary; if NULL replace with average salary.",
sql: `SELECT ename,
NVL(sal,(SELECT AVG(sal) FROM emp)) FROM emp;`,
output: `Average used for NULL`
},

{
title: "SF 51",
question: "Use NULLIF to compare salary and commission.",
sql: `SELECT ename, NULLIF(sal,comm) FROM emp;`,
output: `Comparison done`
},

{
title: "SF 52",
question: "Replace NULL department name with ‘No Department’.",
sql: `SELECT NVL(dname,'No Department') FROM dept;`,
output: `NULL replaced`
},

{
title: "SF 53",
question: "Display employees whose commission is NULL.",
sql: `SELECT ename FROM emp WHERE comm IS NULL;`,
output: `Filtered employees`
},

{
title: "SF 54",
question: "Use DECODE to categorize salary (Low/Medium/High).",
sql: `SELECT ename,
DECODE(
  SIGN(sal-3000),
  -1,'Low',
   0,'Medium',
   1,'High'
) FROM emp;`,
output: `Salary categorized`
},

{
title: "SF 55",
question: "Use CASE to categorize employees based on experience.",
sql: `SELECT ename,
CASE 
 WHEN (SYSDATE-hiredate)/365 < 5 THEN 'Junior'
 WHEN (SYSDATE-hiredate)/365 BETWEEN 5 AND 10 THEN 'Mid'
 ELSE 'Senior'
END
FROM emp;`,
output: `Employees categorized`
},

{
title: "SF 56",
question: "Display job; if NULL show ‘Unknown Job’.",
sql: `SELECT NVL(job,'Unknown Job') FROM emp;`,
output: `NULL handled`
},

{
title: "SF 57",
question: "Use NVL with date columns.",
sql: `SELECT NVL(hiredate,SYSDATE) FROM emp;`,
output: `Date handled`
},

{
title: "SF 58",
question: "Display employee name and bonus; if NULL calculate 10% of salary.",
sql: `SELECT ename,
NVL(bonus, sal*0.10) FROM emp;`,
output: `Bonus calculated`
},

{
title: "SF 59",
question: "Use COALESCE with multiple NULL columns.",
sql: `SELECT ename,
COALESCE(comm, bonus, sal) FROM emp;`,
output: `First non-null displayed`
},

{
title: "SF 60",
question: "Combine NVL and TO_CHAR for formatted output.",
sql: `SELECT ename,
NVL(TO_CHAR(comm),'No Comm') FROM emp;`,
output: `Formatted NULL handled`
}

],


"JOIN Operations": [

{
title: "JOIN 1",
question: "Display employee name and department name.",
sql: `SELECT e.ename, d.dname 
FROM emp e 
INNER JOIN dept d 
ON e.deptno = d.deptno;`,
output: `ENAME DNAME
SMITH RESEARCH
ALLEN SALES
WARD SALES
JONES RESEARCH`
},

{
title: "JOIN 2",
question: "Display employee name, salary, and department location.",
sql: `SELECT e.ename, e.sal, d.loc 
FROM emp e 
INNER JOIN dept d 
ON e.deptno = d.deptno;`,
output: `ENAME SAL LOC
SMITH 800 DALLAS
ALLEN 1600 CHICAGO
WARD 1250 CHICAGO`
},

{
title: "JOIN 3",
question: "Display employee name and department name for department 10.",
sql: `SELECT e.ename, d.dname 
FROM emp e 
INNER JOIN dept d 
ON e.deptno = d.deptno 
WHERE e.deptno = 10;`,
output: `ENAME DNAME
CLARK ACCOUNTING
KING ACCOUNTING
MILLER ACCOUNTING`
},

{
title: "JOIN 4",
question: "Display employee name and department name where salary > 2000.",
sql: `SELECT e.ename, d.dname 
FROM emp e 
INNER JOIN dept d 
ON e.deptno = d.deptno 
WHERE e.sal > 2000;`,
output: `ENAME DNAME
JONES RESEARCH
BLAKE SALES
CLARK ACCOUNTING
KING ACCOUNTING`
},

{
title: "JOIN 5",
question: "Display employee name, job, and department name.",
sql: `SELECT e.ename, e.job, d.dname 
FROM emp e 
INNER JOIN dept d 
ON e.deptno = d.deptno;`,
output: `ENAME JOB DNAME
SMITH CLERK RESEARCH
ALLEN SALESMAN SALES
WARD SALESMAN SALES`
},

{
title: "JOIN 6",
question: "Display employee name and department location for CLERKs.",
sql: `SELECT e.ename, d.loc 
FROM emp e 
INNER JOIN dept d 
ON e.deptno = d.deptno 
WHERE e.job = 'CLERK';`,
output: `ENAME LOC
SMITH DALLAS
ADAMS DALLAS
MILLER NEW YORK`
},

{
title: "JOIN 7",
question: "Display employee name and department name working in NEW YORK.",
sql: `SELECT e.ename, d.dname 
FROM emp e 
INNER JOIN dept d 
ON e.deptno = d.deptno 
WHERE d.loc = 'NEW YORK';`,
output: `ENAME DNAME
CLARK ACCOUNTING
KING ACCOUNTING
MILLER ACCOUNTING`
},

{
title: "JOIN 8",
question: "Display employee name, department number, and department name.",
sql: `SELECT e.ename, e.deptno, d.dname 
FROM emp e 
INNER JOIN dept d 
ON e.deptno = d.deptno;`,
output: `ENAME DEPTNO DNAME
SMITH 20 RESEARCH
ALLEN 30 SALES
CLARK 10 ACCOUNTING`
},

{
title: "JOIN 9",
question: "Display employees hired after 1981 with department name.",
sql: `SELECT e.ename, d.dname 
FROM emp e 
INNER JOIN dept d 
ON e.deptno = d.deptno 
WHERE e.hiredate > TO_DATE('31-DEC-1981','DD-MON-YYYY');`,
output: `ENAME DNAME
SCOTT RESEARCH
KING ACCOUNTING`
},

{
title: "JOIN 10",
question: "Display employees with commission along with department name.",
sql: `SELECT e.ename, d.dname 
FROM emp e 
INNER JOIN dept d 
ON e.deptno = d.deptno 
WHERE e.comm IS NOT NULL;`,
output: `ENAME DNAME
ALLEN SALES
WARD SALES
MARTIN SALES`
},

{
title: "JOIN 11",
question: "Display employees whose salary is between 1500 and 3000 with department.",
sql: `SELECT e.ename, d.dname 
FROM emp e 
INNER JOIN dept d 
ON e.deptno = d.deptno 
WHERE e.sal BETWEEN 1500 AND 3000;`,
output: `ENAME DNAME
ALLEN SALES
TURNER SALES
JONES RESEARCH`
},

{
title: "JOIN 12",
question: "Display employees who are the only employee in their department.",
sql: `SELECT e.ename, e.deptno 
FROM emp e 
WHERE e.deptno IN (
  SELECT deptno 
  FROM emp 
  GROUP BY deptno 
  HAVING COUNT(*) = 1
);`,
output: `ENAME DEPTNO
(No rows / depends on data)`
},

{
title: "JOIN 13",
question: "Display employees whose department has more than 3 employees.",
sql: `SELECT e.ename, e.deptno 
FROM emp e 
WHERE e.deptno IN (
  SELECT deptno 
  FROM emp 
  GROUP BY deptno 
  HAVING COUNT(*) > 3
);`,
output: `ENAME DEPTNO
SMITH 20
JONES 20
SCOTT 20`
},

{
title: "JOIN 14",
question: "Display departments where no employee earns more than 2000.",
sql: `SELECT d.dname 
FROM dept d 
WHERE d.deptno IN (
  SELECT deptno 
  FROM emp 
  GROUP BY deptno 
  HAVING MAX(sal) <= 2000
);`,
output: `DNAME
(No rows or depends on data)`
},

{
title: "JOIN 15",
question: "Display employees who earn more than at least one manager.",
sql: `SELECT e.ename 
FROM emp e 
WHERE e.sal > ANY (
  SELECT m.sal 
  FROM emp m 
  WHERE m.job = 'MANAGER'
);`,
output: `ENAME
KING
SCOTT`
},

{
title: "JOIN 16",
question: "Display employees who share same job and department.",
sql: `SELECT e1.ename 
FROM emp e1, emp e2 
WHERE e1.empno <> e2.empno 
AND e1.job = e2.job 
AND e1.deptno = e2.deptno;`,
output: `ENAME
ALLEN
WARD
TURNER`
},

{
title: "JOIN 17",
question: "Display employees working in same department as their manager.",
sql: `SELECT e.ename 
FROM emp e 
JOIN emp m 
ON e.mgr = m.empno 
WHERE e.deptno = m.deptno;`,
output: `ENAME
SMITH
ADAMS`
},

{
title: "JOIN 18",
question: "Display employees whose manager works in a different department.",
sql: `SELECT e.ename 
FROM emp e 
JOIN emp m 
ON e.mgr = m.empno 
WHERE e.deptno <> m.deptno;`,
output: `ENAME
ALLEN
WARD`
},

{
title: "JOIN 19",
question: "Display employees who are highest paid in their department.",
sql: `SELECT e.ename, e.deptno 
FROM emp e 
WHERE e.sal = (
  SELECT MAX(sal) 
  FROM emp 
  WHERE deptno = e.deptno
);`,
output: `ENAME DEPTNO
KING 10
BLAKE 30
SCOTT 20`
},

{
title: "JOIN 20",
question: "Display employees earning more than their department average.",
sql: `SELECT e.ename, e.sal 
FROM emp e 
WHERE e.sal > (
  SELECT AVG(sal) 
  FROM emp 
  WHERE deptno = e.deptno
);`,
output: `ENAME SAL
SCOTT 3000
KING 5000`
}


],

// 🔥 NEW SECTION

      "PL/SQL Programs": [

{
title: "Query 1",
question: "Print your name and city",
sql: `BEGIN
  DBMS_OUTPUT.PUT_LINE('Name: Sonu');
  DBMS_OUTPUT.PUT_LINE('City: Panchkula');
END;
/`,
output: `Name: Sonu
City: Panchkula`
},

{
title: "Query 2",
question: "Display numbers from 1 to 5",
sql: `BEGIN
  FOR i IN 1..5 LOOP
    DBMS_OUTPUT.PUT_LINE(i);
  END LOOP;
END;
/`,
output: `1
2
3
4
5`
},

{
title: "Query 3",
question: "Print current system date",
sql: `BEGIN
  DBMS_OUTPUT.PUT_LINE(SYSDATE);
END;
/`,
output: `10-APR-2026`
},

{
title: "Query 4",
question: "Display employee name and salary using variables",
sql: `DECLARE
  v_name VARCHAR2(20) := 'SMITH';
  v_sal NUMBER := 800;
BEGIN
  DBMS_OUTPUT.PUT_LINE(v_name || ' ' || v_sal);
END;
/`,
output: `SMITH 800`
},

{
title: "Query 5",
question: "Declare variable and display age",
sql: `DECLARE
  v_age NUMBER := 20;
BEGIN
  DBMS_OUTPUT.PUT_LINE('Age: ' || v_age);
END;
/`,
output: `Age: 20`
},

{
title: "Query 6",
question: "Print sum of two variables",
sql: `DECLARE
  a NUMBER := 10;
  b NUMBER := 20;
BEGIN
  DBMS_OUTPUT.PUT_LINE('Sum: ' || (a+b));
END;
/`,
output: `Sum: 30`
},

{
title: "Query 7",
question: "Store employee name and salary",
sql: `DECLARE
  v_name VARCHAR2(20) := 'ALLEN';
  v_sal NUMBER := 1600;
BEGIN
  DBMS_OUTPUT.PUT_LINE(v_name || ' ' || v_sal);
END;
/`,
output: `ALLEN 1600`
},

{
title: "Query 8",
question: "Swap two numbers",
sql: `DECLARE
  a NUMBER := 5;
  b NUMBER := 10;
  temp NUMBER;
BEGIN
  temp := a;
  a := b;
  b := temp;
  DBMS_OUTPUT.PUT_LINE('A=' || a || ' B=' || b);
END;
/`,
output: `A=10 B=5`
},

{
title: "Query 9",
question: "Area of rectangle",
sql: `DECLARE
  l NUMBER := 5;
  b NUMBER := 3;
BEGIN
  DBMS_OUTPUT.PUT_LINE('Area=' || (l*b));
END;
/`,
output: `Area=15`
},

{
title: "Query 10",
question: "Constant PI and area of circle",
sql: `DECLARE
  PI CONSTANT NUMBER := 3.14;
  r NUMBER := 5;
BEGIN
  DBMS_OUTPUT.PUT_LINE('Area=' || PI*r*r);
END;
/`,
output: `Area=78.5`
},

{
title: "Query 11",
question: "Tax calculation",
sql: `DECLARE
  tax CONSTANT NUMBER := 0.1;
  sal NUMBER := 1000;
BEGIN
  DBMS_OUTPUT.PUT_LINE('After Tax=' || (sal - sal*tax));
END;
/`,
output: `After Tax=900`
},

{
title: "Query 12",
question: "Constant modification error",
sql: `DECLARE
  x CONSTANT NUMBER := 10;
BEGIN
  x := 20;
END;
/`,
output: `ERROR: cannot assign value to constant`
},

{
title: "Query 13",
question: "Simple interest",
sql: `DECLARE
  p NUMBER := 1000;
  r CONSTANT NUMBER := 5;
  t NUMBER := 2;
BEGIN
  DBMS_OUTPUT.PUT_LINE('SI=' || (p*r*t/100));
END;
/`,
output: `SI=100`
},

{
title: "Query 14",
question: "Different datatypes",
sql: `DECLARE
  num NUMBER := 10;
  name VARCHAR2(20) := 'RAM';
  d DATE := SYSDATE;
BEGIN
  DBMS_OUTPUT.PUT_LINE(num || ' ' || name || ' ' || d);
END;
/`,
output: `10 RAM 10-APR-2026`
},

{
title: "Query 15",
question: "%TYPE attribute",
sql: `DECLARE
  sal emp.sal%TYPE := 2000;
BEGIN
  DBMS_OUTPUT.PUT_LINE(sal);
END;
/`,
output: `2000`
},

{
title: "Query 16",
question: "%ROWTYPE employee details",
sql: `DECLARE
  e emp%ROWTYPE;
BEGIN
  SELECT * INTO e FROM emp WHERE empno=7369;
  DBMS_OUTPUT.PUT_LINE(e.ename || ' ' || e.sal);
END;
/`,
output: `SMITH 800`
},

{
title: "Query 17",
question: "Store and display current date",
sql: `DECLARE
  d DATE := SYSDATE;
BEGIN
  DBMS_OUTPUT.PUT_LINE(d);
END;
/`,
output: `10-APR-2026`
},

{
title: "Query 18",
question: "Convert number to string",
sql: `DECLARE
  n NUMBER := 100;
BEGIN
  DBMS_OUTPUT.PUT_LINE(TO_CHAR(n));
END;
/`,
output: `100`
},

{
title: "Query 19",
question: "Variables and constants together",
sql: `DECLARE
  x NUMBER := 10;
  y CONSTANT NUMBER := 5;
BEGIN
  DBMS_OUTPUT.PUT_LINE(x+y);
END;
/`,
output: `15`
},

{
title: "Query 20",
question: "%ROWTYPE with constant",
sql: `DECLARE
  e emp%ROWTYPE;
  bonus CONSTANT NUMBER := 100;
BEGIN
  SELECT * INTO e FROM emp WHERE empno=7369;
  DBMS_OUTPUT.PUT_LINE(e.ename || ' ' || (e.sal+bonus));
END;
/`,
output: `SMITH 900`
},

{
title: "Query 21",
question: "Bonus 10%",
sql: `DECLARE
  sal NUMBER := 1000;
BEGIN
  DBMS_OUTPUT.PUT_LINE('Bonus=' || (sal*0.1));
END;
/`,
output: `Bonus=100`
},

{
title: "Query 22",
question: "All concepts together",
sql: `DECLARE
  name VARCHAR2(20) := 'RAJ';
  sal NUMBER := 2000;
  bonus CONSTANT NUMBER := 200;
BEGIN
  DBMS_OUTPUT.PUT_LINE(name || ' ' || (sal+bonus));
END;
/`,
output: `RAJ 2200`
}

  ],

  "PL/SQL Decision Control (IF, CASE, CONTINUE, EXIT)": [

{
title: "Query 1",
question: "Check if a number is positive",
sql: `DECLARE
  n NUMBER := 10;
BEGIN
  IF n > 0 THEN
    DBMS_OUTPUT.PUT_LINE('Positive');
  END IF;
END;
/`,
output: `Positive`
},

{
title: "Query 2",
question: "Check if employee salary > 3000",
sql: `DECLARE
  sal NUMBER := 3500;
BEGIN
  IF sal > 3000 THEN
    DBMS_OUTPUT.PUT_LINE('Salary is greater than 3000');
  END IF;
END;
/`,
output: `Salary is greater than 3000`
},

{
title: "Query 3",
question: "Check even number",
sql: `DECLARE
  n NUMBER := 4;
BEGIN
  IF MOD(n,2)=0 THEN
    DBMS_OUTPUT.PUT_LINE('Even');
  END IF;
END;
/`,
output: `Even`
},

{
title: "Query 4",
question: "Check if today is Monday",
sql: `BEGIN
  IF TO_CHAR(SYSDATE,'DAY') LIKE 'MONDAY%' THEN
    DBMS_OUTPUT.PUT_LINE('Today is Monday');
  END IF;
END;
/`,
output: `Today is Monday`
},

{
title: "Query 5",
question: "Check divisible by 5",
sql: `DECLARE
  n NUMBER := 25;
BEGIN
  IF MOD(n,5)=0 THEN
    DBMS_OUTPUT.PUT_LINE('Divisible by 5');
  END IF;
END;
/`,
output: `Divisible by 5`
},

{
title: "Query 6",
question: "Even or Odd",
sql: `DECLARE
  n NUMBER := 7;
BEGIN
  IF MOD(n,2)=0 THEN
    DBMS_OUTPUT.PUT_LINE('Even');
  ELSE
    DBMS_OUTPUT.PUT_LINE('Odd');
  END IF;
END;
/`,
output: `Odd`
},

{
title: "Query 7",
question: "Positive or Negative",
sql: `DECLARE
  n NUMBER := -5;
BEGIN
  IF n>0 THEN
    DBMS_OUTPUT.PUT_LINE('Positive');
  ELSE
    DBMS_OUTPUT.PUT_LINE('Negative');
  END IF;
END;
/`,
output: `Negative`
},

{
title: "Query 8",
question: "Compare two numbers",
sql: `DECLARE
  a NUMBER := 10;
  b NUMBER := 20;
BEGIN
  IF a>b THEN
    DBMS_OUTPUT.PUT_LINE('A is greater');
  ELSE
    DBMS_OUTPUT.PUT_LINE('B is greater');
  END IF;
END;
/`,
output: `B is greater`
},

{
title: "Query 9",
question: "Pass or Fail",
sql: `DECLARE
  marks NUMBER := 35;
BEGIN
  IF marks>=40 THEN
    DBMS_OUTPUT.PUT_LINE('Pass');
  ELSE
    DBMS_OUTPUT.PUT_LINE('Fail');
  END IF;
END;
/`,
output: `Fail`
},

{
title: "Query 10",
question: "Salary above average",
sql: `DECLARE
  sal NUMBER := 4000;
BEGIN
  IF sal>3000 THEN
    DBMS_OUTPUT.PUT_LINE('Above Average');
  ELSE
    DBMS_OUTPUT.PUT_LINE('Below Average');
  END IF;
END;
/`,
output: `Above Average`
},



]

};





const container = document.getElementById("queries-container");

function showTopics(filteredTopics){
  container.innerHTML = "";

  for(let topic in filteredTopics){
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
  container.innerHTML = `<button onclick="goBack()">⬅ Back</button>`;

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

// 🔥 current page track karega
let currentType = "";

// 🔥 page load ke time run hoga
function loadPage(type) {
  currentType = type;

  let filtered = {};

  for (let topic in topics) {
    if (type === "sql" && topic !== "PL/SQL Programs") {
      filtered[topic] = topics[topic];
    }

    if (type === "plsql" && topic === "PL/SQL Programs") {
      filtered[topic] = topics[topic];
    }

    if(topic === "PL/SQL Decision Control (IF, CASE, CONTINUE, EXIT)"){
  card.innerHTML = `
    <h2>PL/SQL Decision Control</h2>
    <p style="color:gray;font-size:14px;">
      IF, CASE, CONTINUE, EXIT
    </p>
    <button onclick="showQueries('${topic}')">Open</button>
  `;
}
  }

  showTopics(filtered);
}

// 🔥 back button fix
function goBack(){
  loadPage(currentType);
}