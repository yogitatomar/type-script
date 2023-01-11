  function apierror(msg:string,code:number){
   throw {message:msg,code:code}
  }

  console.log(apierror("some internet syntex err",500))