-- Solution 1
select e3.Name as Employee from (
  select
    Name,
    Salary,
    (select Salary from Employee as e2 where e2.id = e1.ManagerId) as ManagerSalary 
    from Employee as e1
  ) as e3
where e3.Salary > ManagerSalary;

-- Solution 2
select tt.Employee from (
	select e1.Name as Employee, e1.Salary, e2.Salary as ManagerSalary from Employee as e1
	left join Employee as e2
	on e1.ManagerId = e2.id
) as tt
where tt.Salary > tt.ManagerSalary;