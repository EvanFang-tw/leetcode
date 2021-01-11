select ifnull(
  (
    select Salary from 
    (
      select Salary from Employee group by Salary order by Salary desc
    ) as t 
    limit 1 
    offset 1
  ), 
  null
) as SecondHighestSalary;