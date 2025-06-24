
type TaskType = {

}

export function useTask (){
  const doSomething = () => { 
    console.log("gg");
    
  };
  const data = console.log("some data");
 

  return {
    doSomething,
    data,
  };
}