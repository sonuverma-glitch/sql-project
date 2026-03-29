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