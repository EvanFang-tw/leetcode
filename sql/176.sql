select ifnull(
  (
    select Salary from
      (
        select Salary from Employee group by Salary
      ) as t 
    order by Salary desc 
    limit 1 
    offset 1
  ), 
  null
) as SecondHighestSalary;