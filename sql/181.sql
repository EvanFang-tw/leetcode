select e3.Name as Employee from (
  select
    Name,
    Salary,
    (select Salary from Employee as e2 where e2.id = e1.ManagerId) as ManagerSalary 
    from Employee as e1
  ) as e3
where e3.Salary > ManagerSalary;
