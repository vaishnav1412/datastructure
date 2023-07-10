function primr(array){

    for(i=0;i<array.length;i++){
      let flag=0;
      if(array[i]==1){
        flag=1;
      }
       for(j=2;j<array[i];j++){
        if(array[i]%j==0){
        flag=1;
        }
    }
        if(flag==0){
            console.log(array[i]);
       }
       }}

       let array = [1,2,3,4,5,6,7,8,9]


       
       function prime(a){
        for(i=0;i<a.length;i++){
          let flag=0
          if(a[i]==1){
            flag=1
          }
          for(j=2;j<a[i];j++){
            if(a[i]%j==0){
                flag=1
            }
          }
          if(flag==0){
            console.log(a[i]);
          }
        }
       }
      const a =[1,2,3,4,5,6,7,8,9]
      prime(a)


