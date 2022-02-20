var msg = 'enter the percentage of student:';
//Message for user input
var a = 85;
if(a > 85)
    {//if percent > 85 --A
      console.log('Grade - A');}
else if(a <= 85 && a > 80)
    {//80< percent 80=85  --A
      console.log('Grade - A-');}
else if(a > 70 && a <= 80)
    {//70< percent<=80 --B
      console.log('Grade - B');}
else if(a > 60 && a <= 70)
    {//60< percent <=70  --C
      console.log('Grade - C');}
else if(a > 40 && a <= 60)
    {//40< percent <=60  --D
      console.log('Grade - D');}
else if(a <= 40)
    {//percent <=40  --E
      if(a <= 35)
        {//failed condition
          console.log('Grade - E Candidate failed');}
      else
        console.log('Grade - E');}
